import type { MetadataRoute } from "next";
import { products } from "./data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://donnajls.web.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.id}/`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...basePages, ...productPages];
}
