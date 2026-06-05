import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPractice } from "@/lib/practices";
import PracticeTemplate from "@/components/PracticeTemplate";

const practice = getPractice("criminal-defense")!;

export const metadata: Metadata = {
  title: practice.metaTitle,
  description: practice.metaDescription,
  keywords: practice.keywords,
  alternates: { canonical: `/${practice.path}` },
};

export default function CriminalDefensePage() {
  if (!practice) notFound();
  return <PracticeTemplate practice={practice} />;
}
