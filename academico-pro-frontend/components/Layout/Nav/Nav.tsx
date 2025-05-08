"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItems } from "./navItems";

export type NavProps = {
  closeTrigger?: React.ElementType;
};

export const Nav = ({ closeTrigger: CloseTrigger }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navItems.map(({ href, icon, label }) => {
        const isActive = pathname.includes(href);
        const link = (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-neutral-50",
              isActive ? "text-neutral-900 bg-neutral-100" : "text-neutral-600"
            )}
          >
            <FontAwesomeIcon width={20} icon={icon} />
            <span>{label}</span>
          </Link>
        );

        return CloseTrigger ? (
          <CloseTrigger key={href} asChild>
            {link}
          </CloseTrigger>
        ) : (
          link
        );
      })}
    </nav>
  );
};
