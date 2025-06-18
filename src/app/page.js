"use client";
import useAuth from "@/hooks/useAuth";
import useClient from "@/hooks/useClient";
// import { socketConnection, socketDisconnection } from "@/utils/socket";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const { clients } = useClient();

  useEffect(() => {
    if (user) {
      // socketConnection();
      const redirectPath = getRedirectPath(user.role);
      if (redirectPath !== window.location.pathname) {
        router.push(redirectPath);
      }
    } else {
      // socketDisconnection();
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

  return <></>;
}
