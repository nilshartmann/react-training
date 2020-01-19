const shouldSlow = () => window.location.hostname !== "localhost";
export const slowUrl = (url: string) => {
  const finalUrl = shouldSlow() ? `${url}?slow` : url;

  console.log(`url: ${url}', shouldSlow: ${shouldSlow()}, finalUrl: '${finalUrl}'`);

  return finalUrl;
};

export const slowImport = (cb: any): any =>
  shouldSlow() ? new Promise(resolve => setTimeout(() => resolve(cb()), 1500)) : cb();
