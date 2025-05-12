import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function DisciplineForm() {
  return (
    <Dialog>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nova Disciplina</DialogTitle>
          <DialogClose className="absolute right-4 top-4" />
        </DialogHeader>

        <form className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dados Básicos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Nome da Disciplina</Label>
                <Input type="text" />
              </div>
              <div>
                <Label>Código Único</Label>
                <Input type="text" />
              </div>
              <div>
                <Label>Carga Horária</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30h">30h</SelectItem>
                    <SelectItem value="60h">60h</SelectItem>
                    <SelectItem value="90h">90h</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Departamento</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Matemática</SelectItem>
                    <SelectItem value="comp">Computação</SelectItem>
                    <SelectItem value="eng">Engenharia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Vinculações</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Professor Responsável</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um professor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prof1">Dr. João Silva</SelectItem>
                    <SelectItem value="prof2">Profa. Ana Santos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Pré-requisitos</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione os pré-requisitos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mat101">MAT-101</SelectItem>
                    <SelectItem value="mat102">MAT-102</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Detalhes</h3>
            <div>
              <Label>Ementa</Label>
              <textarea className="w-full min-h-32 p-2 border rounded-md" />
            </div>
            <div className="flex items-center gap-2">
              <Label>Status</Label>
              <Switch />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
