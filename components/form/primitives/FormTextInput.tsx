import {Input} from "@/components/ui/input";
import FormPrimitiveWrapper from "@/components/form/primitives/FormPrimitiveWrapper";
import {ForwardedRef, forwardRef, HTMLAttributes} from "react";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  label: string
}

function _FormTextInput({label, ...props}: TextInputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <FormPrimitiveWrapper label={label}>
      <Input placeholder="" ref={ref} {...props}/>
    </FormPrimitiveWrapper>
  )
}

const FormTextInput = forwardRef(_FormTextInput)

export default FormTextInput
