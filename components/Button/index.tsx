import styles from "./styles.module.scss"

interface ButtonProps {
  label: string
  onClick: () => void
  size?: "default"
    | "sm"
    | "lg"
  variant?: "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
}

export default function Button({label, onClick, size = "default", variant = "default"}: ButtonProps) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
