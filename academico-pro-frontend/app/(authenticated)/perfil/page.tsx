"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div className="flex-1 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          {/* Navegação por abas */}
          <div className="border-b border-neutral-200">
            <Tabs defaultValue="personal" className="w-full py-2">
              <TabsList className="w-full justify-start p-0 bg-white">
                <TabsTrigger
                  value="personal"
                  className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900"
                >
                  Dados Pessoais
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900"
                >
                  Segurança
                </TabsTrigger>
                <TabsTrigger
                  value="preferences"
                  className="px-6 py-4 data-[state=active]:border-b-2 data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900"
                >
                  Preferências
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Conteúdo principal */}
          <div className="p-6">
            {/* Seção do avatar */}
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <Image
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123"
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                  width={96}
                  height={96}
                  unoptimized
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full shadow"
                >
                  <FontAwesomeIcon icon={faCamera} width={14} />
                </Button>
              </div>
              <div>
                <h2 className="text-xl text-neutral-900 mb-1">João Silva</h2>
                <p className="text-neutral-600">Matrícula: 202500123</p>
              </div>
            </div>

            {/* Formulário */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Telefone
                </label>
                <Input type="tel" defaultValue="(11) 98765-4321" />
              </div>

              <div>
                <label className="block text-sm text-neutral-600 mb-2">
                  Endereço
                </label>
                <Input type="text" defaultValue="Rua das Flores, 123" />
              </div>

              {/* Botões de ação */}
              <div className="flex justify-end gap-3 pt-6">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar Alterações</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
