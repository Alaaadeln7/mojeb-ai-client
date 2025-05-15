"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const router = useRouter();
  return (
  <>
    <RegisterForm/>
  </>
  );
}
