"use client"

import {ForwardedRef, forwardRef, InputHTMLAttributes, useId} from "react";
import Stack from "@/components/layout/Stack";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: "text" | "email" | "date"
  required?: boolean
}

function _Input({label, type = "text", required = false, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const id = useId()

  return (
    <Stack gutter="1">
      <label htmlFor={id}>{label}</label>
      <input
        required
        id={id}
        type={type}
        {...props}
        ref={ref}
      />
    </Stack>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(_Input)

Input.displayName = "Input"

export default Input
