export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: ButtomType;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

export enum ButtomType {
  Buttom = "button",
  Submit = "submit",
  Reset = "reset",
}

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}
