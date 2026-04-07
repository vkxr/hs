import type { Metadata } from "next";
import WebsiteRenderer from "@/components/site/WebsiteRenderer";
import type { ProjectData } from "@/types/project";

export const metadata: Metadata = {
  title: "HS Techware | Computer Repair in Vadodara",
  description: "Premium computer repair landing page for HS Techware in Vadodara."
};

const sampleProject: ProjectData = {
  shop_name: "HS Techware",
  category: "Computer repair and IT support",
  services: [
    "Computer maintenance and support",
    "Laptop repair and upgrades",
    "Virus removal and security",
    "Windows installation",
    "Gaming PC setup"
  ],
  timing: "Mon - Sat, 9:00 AM - 8:00 PM",
  contact: "+91 98250 44000",
  address: "Alkapuri, Vadodara"
};

export default function HomePage() {
  return <WebsiteRenderer project={sampleProject} />;
}
