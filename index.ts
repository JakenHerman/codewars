/**
 * Check if a string is an isogram or not
 * @param str The string to test
 */
export const isIsogram = (str: string) => new Set(str.toLowerCase().split('')).size === str.length;

/**
 * Check to see if a string ends with another supplied string
 * @param s Full string to check
 * @param e Potential ending of string {s}
 */
export const endsWith = (s: string, e: string) => s.slice(s.length - e.length).toString() === e;