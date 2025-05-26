import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton = ({ children, disabled }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={disabled}
      className="w-full"
      variant="default"
    >
      {children}
    </Button>
  );
};
