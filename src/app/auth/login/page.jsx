"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <LoginForm/>
    </>
  );
}
