import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faBan } from "@fortawesome/free-solid-svg-icons";

export const UserActions = ({
  onView,
  onEdit,
  onToggleStatus,
}: {
  onView: () => void;
  onEdit: () => void;
  onToggleStatus: () => void;
}) => {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" onClick={onView}>
        <FontAwesomeIcon icon={faEye} width={16} />
      </Button>
      <Button variant="ghost" size="icon" onClick={onEdit}>
        <FontAwesomeIcon icon={faPen} width={16} />
      </Button>
      <Button variant="ghost" size="icon" onClick={onToggleStatus}>
        <FontAwesomeIcon icon={faBan} width={16} />
      </Button>
    </div>
  );
};
