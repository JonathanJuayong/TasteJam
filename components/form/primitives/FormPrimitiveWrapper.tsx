import {HTMLAttributes} from "react";
import Inline from "@/components/layout/Inline";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

interface FormPrimitiveWrapperProps extends HTMLAttributes<HTMLElement> {
  label: string
}

export default function FormPrimitiveWrapper(
  {
    label,
    children
  }: FormPrimitiveWrapperProps
) {
  return (
    <FormItem>
      <Inline justify="start" align="center" className="gap-2">
        <FormLabel>{label}</FormLabel>
      </Inline>
      <FormControl>
        {children}
      </FormControl>
      <FormMessage/>
    </FormItem>
  )
}
