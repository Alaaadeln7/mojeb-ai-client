import AuthImagePattern from "@/components/AuthImagePattern";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import logoImage from "../../../public/mojeb-ai-logo.png";
export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              {/* <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"> */}
              <Image src={logoImage} alt={"logo image"} className="w-60" />
              {/* </div> */}
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>
          {children}
        </div>
      </div>

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
}
