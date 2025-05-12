import Link from "next/link";

export default function Home() {
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
      </div>
    </section>
  );
}
