// import type { PageServerLoad } from './$types.js';

export const load = async ({event,cookies}:any) => {
    const userCookie = cookies.get('auth')??"";
    return {
        userCookie
    };
};