import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPractice } from "@/lib/practices";
import { enToEsFamily } from "@/lib/es-family";
import PracticeTemplate from "@/components/PracticeTemplate";

const practice = getPractice("family-law")!;
const esHref = enToEsFamily[`/${practice.path}`];

export const metadata: Metadata = {
  title: practice.metaTitle,
  description: practice.metaDescription,
  keywords: practice.keywords,
  alternates: {
    canonical: `/${practice.path}`,
    languages: { "en-US": `/${practice.path}`, "es-US": esHref, "x-default": `/${practice.path}` },
  },
};

export default function FamilyLawPage() {
  if (!practice) notFound();
  return <PracticeTemplate practice={practice} spanishHref={esHref} />;
}
