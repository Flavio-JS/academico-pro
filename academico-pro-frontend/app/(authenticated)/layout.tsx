"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "@/components/Layout/Nav/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuthCheck } from "@/lib/hooks/useAuthCheck";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  useAuthCheck();

  return (
    <>
      <nav className="bg-white border-b border-neutral-200 fixed w-full top-0 z-50">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Botão hamburguer para mobile */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-neutral-100 rounded-md">
                    <FontAwesomeIcon
                      icon={faBars}
                      className="text-neutral-700"
                    />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0 pt-12">
                  <ScrollArea className="h-full p-4 pt-0">
                    <Nav closeTrigger={SheetClose} />
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <div className="bg-neutral-200 w-10 h-10 rounded flex items-center justify-center">
              <span className="text-white text-sm">Logo</span>
            </div>
            <h1 className="text-xl text-neutral-900 hidden md:block">
              Acadêmico Pro
            </h1>
          </div>

          {/* Avatar e notificações */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-neutral-100 rounded-full">
              <FontAwesomeIcon icon={faBell} className="text-neutral-600" />
            </button>
            <Image
              src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123"
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full"
              unoptimized
            />
          </div>
        </div>
      </nav>

      <div className="flex pt-[72px]">
        {/* Sidebar - somente visível em md ou maior */}
        <aside className="hidden md:block w-64 border-r border-neutral-200 bg-white p-4 fixed h-full">
          <Nav />
        </aside>

        <main className="flex-1 md:ml-64 bg-neutral-50 min-h-[calc(100vh-72px)] overflow-y-hidden">
          <ScrollArea className="h-[calc(100vh-72px)] p-6">
            {children}
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
