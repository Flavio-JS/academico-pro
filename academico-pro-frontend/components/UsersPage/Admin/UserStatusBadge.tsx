import { cn } from "@/lib/utils";

export const UserStatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs",
        status === "Ativo"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      )}
    >
      {status}
    </span>
  );
};
