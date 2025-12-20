import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "サインアップ | Code Streak",
  description: "サインアップページです",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
