"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-indigo-900 text-white">
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">Code Streak</Link>
        </h1>
      </div>
    </header>
  );
}