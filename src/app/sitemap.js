export default function sitemap() {
  const base = 'https://koffeekuento.ma';
  const routes = ['', '/menu', '/about', '/gallery', '/contact'];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
