"use client"

import {HTMLAttributes, ReactNode} from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
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
