"use client"

import {ForwardedRef, forwardRef, InputHTMLAttributes, useId} from "react";
import Stack from "@/components/layout/Stack";
import * as Label from '@radix-ui/react-label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: "text" | "email" | "date"
  required?: boolean
}

function _Input({label, type = "text", className, required = false, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const id = useId()

  return (
    <Stack className={className} gutter="1">
      <Label.Root htmlFor={id}>
        {label}
      </Label.Root>
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
