export const toUpperCase = (text: string): string => {
    return text.toUpperCase();
}

export const deepCopyObject = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
}
