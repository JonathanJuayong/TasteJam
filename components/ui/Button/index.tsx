"use client"

import {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode
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

export default function Button({children, onClick, size = "default", variant = "default"}: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
