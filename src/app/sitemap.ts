import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "/",
            lastModified: new Date().toISOString(),
        }
    ]
}