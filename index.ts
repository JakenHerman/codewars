/**
 * Check if a string is an isogram or not
 * @param str The string to test
 */
export const isIsogram = (str: string) => new Set(str.toLowerCase().split('')).size === str.length;