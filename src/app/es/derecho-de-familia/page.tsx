import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEsFamily, esFamilyPillarPath } from "@/lib/es-family";
import SpanishFamilyTemplate from "@/components/SpanishFamilyTemplate";

const practice = getEsFamily("")!;

export const metadata: Metadata = {
  title: practice.metaTitle,
  description: practice.metaDescription,
  keywords: practice.keywords,
  alternates: {
    canonical: esFamilyPillarPath,
    languages: {
      "en-US": practice.enHref,
      "es-US": esFamilyPillarPath,
      "x-default": practice.enHref,
    },
  },
};

export default function DerechoDeFamiliaPage() {
  if (!practice) notFound();
  return <SpanishFamilyTemplate practice={practice} />;
}
