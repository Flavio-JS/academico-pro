import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const UserHeader = ({ onAddUser }: { onAddUser: () => void }) => {
  return (
    <div id="page-header" className="flex justify-between items-center mb-6">
      <h2 className="text-2xl text-neutral-900">Gestão de Usuários</h2>
      <Button className="gap-2" onClick={onAddUser}>
        <FontAwesomeIcon icon={faPlus} width={20} height={20} />
        <span>Novo Usuário</span>
      </Button>
    </div>
  );
};
