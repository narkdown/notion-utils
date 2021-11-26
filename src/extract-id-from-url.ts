/**
 * Extract page or database id from url
 */
export const extractIdFromUrl = (url: string): string => {
  const id = url
    .split('#')
    .pop()
    ?.split('/')
    .pop()
    ?.split('&p=')
    .pop()
    ?.split('?')
    .shift()
    ?.split('-')
    .pop();

  if (id && id.length === 32) {
    return id;
  }

  throw new TypeError('Could not extract id from url');
};
