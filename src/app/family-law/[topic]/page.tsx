import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getChildren, getPractice } from "@/lib/practices";
import { enToEsFamily } from "@/lib/es-family";
import PracticeTemplate from "@/components/PracticeTemplate";

export function generateStaticParams() {
  return getChildren("family-law").map((p) => ({ topic: p.topic! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const practice = getPractice(`family-law/${topic}`);
  if (!practice) return {};
  const esHref = enToEsFamily[`/${practice.path}`];
  return {
    title: practice.metaTitle,
    description: practice.metaDescription,
    keywords: practice.keywords,
    alternates: {
      canonical: `/${practice.path}`,
      ...(esHref && {
        languages: {
          "en-US": `/${practice.path}`,
          "es-US": esHref,
          "x-default": `/${practice.path}`,
        },
      }),
    },
  };
}

export default async function FamilyLawTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const practice = getPractice(`family-law/${topic}`);
  if (!practice) notFound();
  return <PracticeTemplate practice={practice} spanishHref={enToEsFamily[`/${practice.path}`]} />;
}
