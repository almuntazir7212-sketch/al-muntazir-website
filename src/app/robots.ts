import { MetadataRoute } from "next";
import { INSTITUTE } from "@/data/institute";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${INSTITUTE.domain}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/verify/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
