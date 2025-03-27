/**
 * Capitalizes the first letter of a string
 * @param str - Input string
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Truncates a string to a specified length and adds an ellipsis if truncated
   * @param str - Input string
   * @param length - Maximum length before truncation
   * @returns Truncated string
   */
  export function truncate(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  }
  
  /**
   * Counts the number of words in a string
   * @param str - Input string
   * @returns Word count
   */
  export function wordCount(str: string): number {
    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
  }
  
  /**
   * Generates a random string of specified length
   * @param length - Length of the random string
   * @returns Random string
   */
  export function randomString(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }