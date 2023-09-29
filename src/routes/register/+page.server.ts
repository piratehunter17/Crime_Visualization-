import { prisma } from "$lib/server/prisma";
import {json} from '@sveltejs/kit';

export const actions = {
    register: async ({request}:any) => {
        const formData = await request.formData();
        const data:any = {};
        formData.forEach((value:string, key:string) => {
            data[key] = value;
        });

        const user = await prisma.User.create({ data });

        return {
            status: 200,
            body: "user created"
        };
    },
    delete: async ({request}:any) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const deleteUser = await prisma.User.delete({
            where: {
                email: email
            }
        });
        
        return {
            status: 200,
            body: "user deleted"
        };
    }
}