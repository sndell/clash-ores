export const createRange = (start: number, length: number) => Array.from({ length }, (_, i) => i + start);
export const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
