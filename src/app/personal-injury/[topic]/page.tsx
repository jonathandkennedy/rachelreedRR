import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getChildren, getPractice } from "@/lib/practices";
import PracticeTemplate from "@/components/PracticeTemplate";

export function generateStaticParams() {
  return getChildren("personal-injury").map((p) => ({ topic: p.topic! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const practice = getPractice(`personal-injury/${topic}`);
  if (!practice) return {};
  return {
    title: practice.metaTitle,
    description: practice.metaDescription,
    keywords: practice.keywords,
    alternates: { canonical: `/${practice.path}` },
  };
}

export default async function PersonalInjuryTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const practice = getPractice(`personal-injury/${topic}`);
  if (!practice) notFound();
  return <PracticeTemplate practice={practice} />;
}
