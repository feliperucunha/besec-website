export const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const getCookie = (name) => {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].trim();
        if (cookiePair.startsWith(`${name}=`)) {
            return cookiePair.split('=')[1];
        }
    }
    return null;
};

export const checkCookie = (name) => {
    return getCookie(name) !== null;
};
