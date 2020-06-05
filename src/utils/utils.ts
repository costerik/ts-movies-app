/* eslint-disable-next-line */
export function isNullOrUndefined(arg: any): boolean {
  if ((typeof arg === 'object' && arg === null) || typeof arg === 'undefined') {
    return true;
  }
  return false;
}

/* eslint-disable-next-line */
export function isEmpty(arg: any): boolean {
  if (typeof arg === 'string' && !arg.trim()) {
    return true;
  }
  return false;
}
