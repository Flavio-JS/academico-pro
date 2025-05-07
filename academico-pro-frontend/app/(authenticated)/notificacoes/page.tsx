"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faList,
  faLink,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Dados das notificações
const notifications = [
  {
    id: 1,
    date: "04/05/2025",
    subject: "Alteração no calendário acadêmico",
    recipients: "Todos os alunos",
    status: "Entregue",
  },
  {
    id: 2,
    date: "03/05/2025",
    subject: "Prazo para matrícula",
    recipients: "Turma CC2025",
    status: "Entregue",
  },
  {
    id: 3,
    date: "02/05/2025",
    subject: "Recuperação de senha",
    recipients: "João Silva",
    status: "Falha",
  },
];

export default function Notifications() {
  return (
    <div className="flex-1 bg-neutral-50">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Formulário de nova notificação */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl text-neutral-900 mb-6">Nova Notificação</h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Destinatários
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar destinatários" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os alunos</SelectItem>
                  <SelectItem value="class">Turma específica</SelectItem>
                  <SelectItem value="student">Aluno específico</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Assunto
              </label>
              <Input type="text" placeholder="Digite o assunto" />
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Mensagem
              </label>
              <div className="border border-neutral-200 rounded-lg p-2">
                <div className="flex gap-2 border-b border-neutral-200 pb-2 mb-2">
                  <Button variant="ghost" size="icon">
                    <FontAwesomeIcon icon={faBold} width={14} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FontAwesomeIcon icon={faItalic} width={14} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FontAwesomeIcon icon={faList} width={14} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FontAwesomeIcon icon={faLink} width={14} />
                  </Button>
                </div>
                <Textarea
                  className="w-full h-32 resize-none border-none focus-visible:ring-0"
                  placeholder="Digite sua mensagem"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-600 mb-2">
                Anexos
              </label>
              <div className="border-2 border-dashed border-neutral-200 rounded-lg p-6 text-center">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="text-2xl text-neutral-400 mb-2"
                />
                <p className="text-neutral-600">
                  Arraste arquivos ou clique para anexar
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button>Enviar</Button>
          </div>
        </div>

        {/* Histórico de notificações */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-neutral-900">
              Histórico de Notificações
            </h2>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Todos os status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="delivered">Entregue</SelectItem>
                  <SelectItem value="failed">Falha</SelectItem>
                </SelectContent>
              </Select>
              <Input type="date" className="w-[150px]" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="border-b border-neutral-200">
                <TableHead className="py-3 px-4 text-left">Data</TableHead>
                <TableHead className="py-3 px-4 text-left">Assunto</TableHead>
                <TableHead className="py-3 px-4 text-left">
                  Destinatários
                </TableHead>
                <TableHead className="py-3 px-4 text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow
                  key={notification.id}
                  className="border-b border-neutral-100"
                >
                  <TableCell className="py-4 px-4 text-neutral-600">
                    {notification.date}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-neutral-900">
                    {notification.subject}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-neutral-600">
                    {notification.recipients}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-right">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        notification.status === "Entregue"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {notification.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
