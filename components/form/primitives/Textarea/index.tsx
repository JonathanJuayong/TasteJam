"use client"

import {ForwardedRef, forwardRef, TextareaHTMLAttributes, useId} from "react";
import * as Label from '@radix-ui/react-label';
import Stack from "@/components/layout/Stack";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  placeholder: string
}

function _Textarea({label, placeholder, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
  const id = useId()
  
  return (
    <Stack>
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <textarea
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
