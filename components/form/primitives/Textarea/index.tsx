"use client"

import {ForwardedRef, forwardRef, TextareaHTMLAttributes, useId} from "react";
import * as Label from '@radix-ui/react-label';
import Stack from "@/components/layout/Stack";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  placeholder: string
  required?: boolean
}

function _Textarea({label, placeholder, className, required = false, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
  const id = useId()
  
  return (
    <Stack className={className} gutter="1">
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <textarea
        required={required}
        id={id}
        cols={30}
        rows={10}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </Stack>
  )
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(_Textarea)

Textarea.displayName = "Textarea"

export default Textarea
