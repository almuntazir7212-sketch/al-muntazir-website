import { MetadataRoute } from "next";
import { INSTITUTE_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${INSTITUTE_INFO.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/courses", "/about", "/contact"],
      disallow: ["/verify/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
