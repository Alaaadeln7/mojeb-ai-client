"use client";
import useAuth from "@/hooks/useAuth";
import useClient from "@/hooks/useClient";
import { socketConnection, socketDisconnection } from "@/utils/socket";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const { clients } = useClient();

  useEffect(() => {
    if (user) {
      socketConnection();
      const redirectPath = getRedirectPath(user.role);
      if (redirectPath !== window.location.pathname) {
        router.push(redirectPath);
      }
    } else {
      socketDisconnection();
      if (window.location.pathname !== "/auth/login") {
        router.push("/auth/login");
      }
    }
  }, [user, router]);

  const getRedirectPath = (role) => {
    switch (role) {
      case "admin":
        return "/admin-dashboard";
      case "client":
        return "/client-dashboard";
      default:
        return "/";
    }
  };

  if (loading) {
    return (
      <section className="flex justify-center items-center h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="underline font-bold text-2xl">hello world</h1>
      {user && (
        <div className="flex justify-center items-center flex-col my-10">
          <Image
            src={user?.avatar || "/default-avatar.png"}
            alt={user?.fullName || "User"}
            className="w-10 h-10 rounded-full"
            width={100}
            height={100}
            onError={(e) => {
              e.currentTarget.src = "/default-avatar.png";
            }}
          />
          <h1 className="font-bold text-xl">{user?.fullName}</h1>
          <p>{user?.email}</p>
        </div>
      )}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {!user && (
          <>
            <Link href="/auth/register" className="btn btn-primary" prefetch>
              register
            </Link>
            <Link href="/auth/login" className="btn btn-primary" prefetch>
              login
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
