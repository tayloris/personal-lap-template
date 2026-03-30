import type { Metadata } from "next";
import CVContent from "@/components/cv/CVContent";

export const metadata: Metadata = {
  title: "CV",
  description: "Professional background, experience, and skills.",
};

export default function CVPage() {
  return <CVContent />;
}
