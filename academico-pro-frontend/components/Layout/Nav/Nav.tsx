"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faBook,
  faStar,
  faFileLines,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-900 cursor-pointer",
          {
            "bg-neutral-100": pathname.includes("/dashboard"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faHouse} />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/usuarios"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-900 cursor-pointer",
          {
            "bg-neutral-100": pathname.includes("/usuarios"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faUsers} />
        <span>Usuários</span>
      </Link>
      <Link
        href="/disciplinas"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900":
              pathname.includes("/disciplinas"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faBook} />
        <span>Disciplinas</span>
      </Link>
      <Link
        href="/matriculas"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900": pathname.includes("/matriculas"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faFileLines} />
        <span>Matriculas</span>
      </Link>
      <Link
        href="/notas"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900": pathname.includes("/notas"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faStar} />
        <span>Notas</span>
      </Link>
      <Link
        href="/boletim"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900": pathname.includes("/boletim"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faFileLines} />
        <span>Boletim</span>
      </Link>
      <Link
        href="/notificacoes"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900":
              pathname.includes("/notificacoes"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faBell} />
        <span>Notifica es</span>
      </Link>
      <Link
        href="/perfil"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg text-neutral-600 cursor-pointer hover:bg-neutral-50",
          {
            "bg-neutral-100 text-neutral-900": pathname.includes("/perfil"),
          }
        )}
      >
        <FontAwesomeIcon width={20} icon={faUser} />
        <span>Perfil</span>
      </Link>
    </nav>
  );
};
