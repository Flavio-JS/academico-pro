import { AddUserDialog } from "./AddUserDialog";

export const UserHeader = ({ onAddUser }: { onAddUser: () => void }) => {
  return (
    <div id="page-header" className="flex justify-between items-center mb-6">
      <h2 className="text-2xl text-neutral-900">Gestão de Usuários</h2>
      <AddUserDialog onUserAdded={onAddUser} />
    </div>
  );
};
