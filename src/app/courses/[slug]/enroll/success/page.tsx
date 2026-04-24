import { Metadata } from "next";
import EnrollmentSuccessClient from "./EnrollmentSuccessClient";

interface PageProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: "Enrollment Successful | Vydhra",
  description: "You have successfully enrolled in a Vydhra course. Download your receipt and join the community.",
};

export default async function EnrollmentSuccessPage({ params }: PageProps) {
  const { slug } = await params;
  return <EnrollmentSuccessClient slug={slug} />;
}
