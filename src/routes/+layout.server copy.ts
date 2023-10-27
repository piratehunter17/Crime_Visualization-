export const load = async ({event,cookies}:any) => {
    const userCookie = cookies.get('auth')??"";
    return {
        userCookie
    };
};