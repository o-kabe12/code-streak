"use client";
import { auth } from "../../lib/firebase";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {createUserWithEmailAndPassword} from "firebase/auth";

import toast from "react-hot-toast";

const getErrorMessage = (code: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "ユーザーが見つかりません。";
    case "auth/wrong-password":
      return "パスワードが正しくありません。";
    case "auth/invalid-email":
      return "メールアドレスの形式が正しくありません。";
    default:
      return "エラーが発生しました。もう一度お試しください。";
  }
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("新規登録できました！");
    router.push("/login");
  } catch (error) {
    console.error("エラー:", error.message);
    toast.error(getErrorMessage(error.code));
  }
};
  
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center gap-6">
      <h1 className="text-2xl font-bold text-center">サインアップ</h1>
      <form className="w-full md:w-[600px] mx-auto py-10 px-6 shadow-md rounded-md border border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(email, password);
        }}
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          サインアップ
        </button>
        <p className="mt-6 text-center">
          <Link href="/login" className="text-indigo-600 hover:opacity-70 transition duration-300">ログイン</Link>
          はこちら
        </p>
      </form>
    </div>
  );
}
