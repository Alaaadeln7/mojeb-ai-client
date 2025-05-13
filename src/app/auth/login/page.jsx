"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

export default function Login() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="shadow-lg p-8 rounded-lg bg-base-100">
        <h1 className="font-bold text-2xl">
          <button className="btn btn-ghost" onClick={() => router.back()}>
            <MoveLeft />
          </button>
          login page
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}
