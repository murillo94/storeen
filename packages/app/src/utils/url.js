export const matchUrl = (pathname, url) => {
  const rule = `/${url}((/.*))|/${url}$`;
  const regex = new RegExp(rule);

  return regex.test(pathname);
};
