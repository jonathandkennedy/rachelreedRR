import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPractice } from "@/lib/practices";
import PracticeTemplate from "@/components/PracticeTemplate";

const practice = getPractice("family-law")!;

export const metadata: Metadata = {
  title: practice.metaTitle,
  description: practice.metaDescription,
  keywords: practice.keywords,
  alternates: { canonical: `/${practice.path}` },
};

export default function FamilyLawPage() {
  if (!practice) notFound();
  return <PracticeTemplate practice={practice} />;
}
