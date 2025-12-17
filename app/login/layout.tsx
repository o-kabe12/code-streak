import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ログインページ | Code Streak",
  description: "ログインページです",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
