import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getChildren, getPractice } from "@/lib/practices";
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
  return {
    title: practice.metaTitle,
    description: practice.metaDescription,
    keywords: practice.keywords,
    alternates: { canonical: `/${practice.path}` },
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
  return <PracticeTemplate practice={practice} />;
}
