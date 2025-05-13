"use client";
import MainLoader from "@/components/MainLoader";
import useAuth from "@/hooks/useAuth";
import { socketConnection, socketDisconnection } from "@/utils/socket";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { user, logout , loading} = useAuth();
  console.log(user);
  useEffect(() => {
    if (user) {
      socketConnection();
    } else {
      socketDisconnection();
    }
  }, []);
  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="underline font-bold text-2xl">hello world</h1>
      <div className="flex gap-4 mt-4">
        <Link href={"/auth/register"} className="btn btn-primary">
          register
        </Link>
        <Link href={"/auth/login"} className="btn btn-primary">
          login
        </Link>
        <button
          className="btn btn-error"
          disabled={loading}
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </section>
  );
}
