import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import api from "@/lib/api/axios";
import { toast } from "sonner";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { User } from "./types/User.types";
import { UserRoles } from "@/lib/schemas/auth";
import Image from "next/image";
import { formatCPF } from "@/lib/utils/formatCPF";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { avatarOptions } from "@/lib/utils/avatarOptions";

interface UserActionsDialogProps {
  user: User;
  onUserUpdated: (user: User) => void;
  onUserDeleted: (userId: string) => void;
  onToggleStatus: (userId: string) => void;
}

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos"),
  role: z.enum([UserRoles.STUDENT, UserRoles.PROFESSOR, UserRoles.ADMIN]),
  avatarUrl: z.string().optional(),
  isActive: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export const UserActionsDialog = ({
  user,
  onUserUpdated,
  onUserDeleted,
}: //   onToggleStatus,
UserActionsDialogProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("view");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      role: user.role,
      avatarUrl: user.avatarUrl || undefined,
      isActive: user.isActive,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      console.log({ values });
      const response = await api.patch<User>(`/users/${user.id}`, values);
      onUserUpdated(response.data);
      toast.success("Usuário atualizado com sucesso!");
      setOpen(false);
    } catch (error) {
      toast.error("Erro ao atualizar usuário");
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${user.id}`);
      onUserDeleted(user.id);
      toast.success("Usuário excluído com sucesso!");
      setOpen(false);
    } catch (error) {
      toast.error("Erro ao excluir usuário");
      console.error("Error deleting user:", error);
    }
  };

  const getRoleName = (role: User["role"]) => {
    switch (role) {
      case "ADMIN":
        return "Administrador(a)";
      case "PROFESSOR":
        return "Professor(a)";
      case "STUDENT":
        return "Aluno(a)";
      default:
        return role;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <FontAwesomeIcon icon={faEye} width={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Usuário</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="view">Visualizar</TabsTrigger>
            <TabsTrigger value="edit">Editar</TabsTrigger>
            <TabsTrigger value="delete">Excluir</TabsTrigger>
          </TabsList>

          <TabsContent value="view">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src={
                    user.avatarUrl ||
                    `https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123`
                  }
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full"
                  alt={`Avatar de ${user.name}`}
                  unoptimized
                />
                <div>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-neutral-500">{user.email}</p>
                  <UserStatusBadge
                    status={user.isActive ? "Ativo" : "Inativo"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-500">CPF</p>
                  <p>{formatCPF(user.cpf)}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Tipo</p>
                  <p>{getRoleName(user.role)}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Status</p>
                  <p>{user.isActive ? "Ativo" : "Inativo"}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Criado em</p>
                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="edit">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome do usuário" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="E-mail do usuário" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="000.000.000-00"
                            value={formatCPF(field.value)}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 11);
                              field.onChange(onlyNumbers);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Usuário</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ADMIN">Administrador</SelectItem>
                            <SelectItem value="PROFESSOR">Professor</SelectItem>
                            <SelectItem value="STUDENT">Aluno</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="avatarUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Escolha um Avatar</FormLabel>
                      <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                        {avatarOptions.map((seed) => {
                          const url = `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`;
                          return (
                            <button
                              key={seed}
                              type="button"
                              className={`border-2 rounded-lg p-1 hover:border-blue-500 transition ${
                                field.value === url
                                  ? "border-blue-500"
                                  : "border-transparent"
                              }`}
                              onClick={() => field.onChange(url)}
                            >
                              <Image
                                src={url}
                                alt={seed}
                                className="w-full aspect-square object-cover rounded"
                                width={40}
                                height={40}
                                unoptimized
                              />
                            </button>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Usuário Ativo</FormLabel>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Alterações</Button>
                </div>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="delete">
            <div className="space-y-4">
              <p>
                Tem certeza que deseja excluir o usuário{" "}
                <strong>{user.name}</strong>?
              </p>
              <p className="text-sm text-neutral-500">
                Esta ação não pode ser desfeita.
              </p>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setActiveTab("view")}>
                  Cancelar
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Excluir Usuário
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const UserStatusBadge = ({ status }: { status: "Ativo" | "Inativo" }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        status === "Ativo"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      {status}
    </span>
  );
};
