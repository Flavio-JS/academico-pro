import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { UserActionsDialog } from "./UserActionsDialog";
import { User } from "./types/User.types";
import { Button } from "@/components/ui/button";

export const UserActions = ({
  user,
  onUserUpdated,
  onUserDeleted,
  onToggleStatus,
}: {
  user: User;
  onUserUpdated: (user: User) => void;
  onUserDeleted: (userId: string) => void;
  onToggleStatus: () => void;
}) => {
  return (
    <div className="flex gap-2">
      <UserActionsDialog
        user={user}
        onUserUpdated={onUserUpdated}
        onUserDeleted={onUserDeleted}
        onToggleStatus={onToggleStatus}
      />
      <Button variant="ghost" size="icon" onClick={onToggleStatus}>
        <FontAwesomeIcon icon={faBan} width={16} />
      </Button>
    </div>
  );
};