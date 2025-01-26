export const getImageUrl = (path) => {
    return new URL(`imges/${path}`, import.meta.url).href;
};