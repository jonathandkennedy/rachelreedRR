import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { esFamily, getEsFamily, esFamilyPillarPath } from "@/lib/es-family";
import SpanishFamilyTemplate from "@/components/SpanishFamilyTemplate";

export function generateStaticParams() {
  return esFamily.filter((p) => !p.isPillar).map((p) => ({ tema: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tema: string }>;
}): Promise<Metadata> {
  const { tema } = await params;
  const practice = getEsFamily(tema);
  if (!practice || practice.isPillar) return {};
  const selfPath = `${esFamilyPillarPath}/${practice.slug}`;
  return {
    title: practice.metaTitle,
    description: practice.metaDescription,
    keywords: practice.keywords,
    alternates: {
      canonical: selfPath,
      languages: {
        "en-US": practice.enHref,
        "es-US": selfPath,
        "x-default": practice.enHref,
      },
    },
  };
}

export default async function DerechoDeFamiliaTemaPage({
  params,
}: {
  params: Promise<{ tema: string }>;
}) {
  const { tema } = await params;
  const practice = getEsFamily(tema);
  if (!practice || practice.isPillar) notFound();
  return <SpanishFamilyTemplate practice={practice} />;
}
