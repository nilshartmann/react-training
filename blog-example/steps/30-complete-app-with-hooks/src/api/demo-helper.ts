export const slowUrl = (url: string) =>
  window.location.hostname === "localhost" ? url : `${url}?slow`;
