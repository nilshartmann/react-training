const slowUrl = (url: string) => `${url}?slow`;

/** This is "normal" fetch, but simulates slow network connection, if "?slow" is added to the URL of
 * our Application
 */
export function demoFetch(url: string) {
  return fetch(slowUrl(url));
}
