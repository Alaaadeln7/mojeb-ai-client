"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin-dashboard/settings", label: "General" },
    { href: "/admin-dashboard/settings/integrations", label: "Integrations" },
    { href: "/admin-dashboard/settings/service", label: "Service" },
    { href: "/admin-dashboard/settings/advanced", label: "Advanced" },
  ];

  return (
    <nav className="w-fit mx-auto flex justify-center items-center mt-5 border-b-2 border-base-300">
      <ul className="flex gap-2 flex-wrap">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`btn btn-ghost rounded-none ${
                  isActive ? "border-b-2 border-b-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
