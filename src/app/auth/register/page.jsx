"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="shadow-lg p-6 rounded-lg bg-base-100">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <button className="btn btn-ghost">
            <MoveLeft className="size-5" />
          </button>
          register page
        </h1>
        <RegisterForm />
      </div>
    </section>
  );
}
