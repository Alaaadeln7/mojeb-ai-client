"use client";
import useAuth from "@/hooks/useAuth";
import { socketConnection, socketDisconnection } from "@/utils/socket";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { user, logout, loading } = useAuth();
  useEffect(() => {
    if (user) {
      socketConnection();
    } else {
      socketDisconnection();
    }
  }, [user]);
  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="underline font-bold text-2xl">hello world</h1>
      {user && (
        <div className="flex justify-center items-center flex-col my-10">
          <Image
            src={user?.avatar}
            alt={user?.fullName}
            className="w-10 h-10 rounded-full"
            width={100}
            height={100}
          />
          <h1 className="font-bold text-xl">{user?.fullName}</h1>
          <p>{user?.email}</p>
        </div>
      )}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <Link href={"/auth/register"} className="btn btn-primary">
          register
        </Link>
        <Link href={"/auth/login"} className="btn btn-primary">
          login
        </Link>
        <Link className="btn btn-primary" href={"/client-dashboard"}>
          client dashboard
        </Link>
        <Link className="btn btn-primary" href={"/admin-dashboard"}>
          admin dashboard
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
