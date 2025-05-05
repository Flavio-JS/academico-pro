import { ReactNode } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faBook,
  faStar,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <nav
        id="top-nav"
        className="bg-white border-b border-neutral-200 fixed w-full top-0 z-50"
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-neutral-200 w-10 h-10 rounded flex items-center justify-center">
              <span className="text-white text-sm">Logo</span>
            </div>
            <h1 className="text-xl text-neutral-900">Acadêmico Pro</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-neutral-100 rounded-full">
              <FontAwesomeIcon
                width={20}
                icon={faBell}
                className="text-neutral-600"
              />
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
        <aside
          id="sidebar"
          className="w-64 border-r border-neutral-200 bg-white p-4 fixed h-full"
        >
          <nav className="space-y-2">
            <span className="flex items-center gap-3 p-3 bg-neutral-100 rounded-lg text-neutral-900 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faHouse} />
              <span>Dashboard</span>
            </span>
            <span className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg text-neutral-600 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faBook} />
              <span>Disciplinas</span>
            </span>
            <span className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg text-neutral-600 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faStar} />
              <span>Notas</span>
            </span>
            <span className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg text-neutral-600 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faFileLines} />
              <span>Boletim</span>
            </span>
            <span className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg text-neutral-600 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faBell} />
              <span>Notificações</span>
            </span>
            <span className="flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-lg text-neutral-600 cursor-pointer">
              <FontAwesomeIcon width={20} icon={faUser} />
              <span>Perfil</span>
            </span>
          </nav>
        </aside>

        <main
          className="flex-1 ml-64 p-6 bg-neutral-50 min-h-[calc(100vh-72px)] overflow-y-auto"
        >
          {children}
        </main>
      </div>
    </>
  );
}
