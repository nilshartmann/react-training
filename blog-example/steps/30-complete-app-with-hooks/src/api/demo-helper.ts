export const slowUrl = (url: string) => {
  const shouldSlow = window.location.hostname === "localhost";
  const finalUrl = shouldSlow ? url : `${url}?slow`;

  console.log(`url: ${url}', shouldSlow: ${shouldSlow}, finalUrl: '${finalUrl}'`);

  return finalUrl;
};
