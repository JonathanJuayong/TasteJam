"use client"

import Stack from "@/components/layout/Stack";
import {ForwardedRef, forwardRef, InputHTMLAttributes, useId} from "react";
import * as Label from '@radix-ui/react-label';

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  required?: boolean
}

function _NumberInput({label, required, ...props}: NumberInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const id = useId()

  return (
    <Stack gutter="1">
      <Label.Root
        htmlFor={id}>
        {label}
      </Label.Root>
      <input
        required={required}
        id={id}
        type="number"
        {...props}
        ref={ref}
      />
    </Stack>
  )
}

const NumberInput = forwardRef(_NumberInput)

NumberInput.displayName = "NumberInput"

export default NumberInput
