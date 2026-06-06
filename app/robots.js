export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sap-car.vercel.app/sitemap.xml",
  };
}
