import {Input} from "@/components/ui/input";
import FormPrimitiveWrapper from "@/components/form/primitives/FormPrimitiveWrapper";
import {ForwardedRef, forwardRef, HTMLAttributes} from "react";

interface FormNumberInputProps extends HTMLAttributes<HTMLInputElement> {
  label: string
}

function _FormNumberInput({label, ...props}: FormNumberInputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <FormPrimitiveWrapper label={label}>
      <Input type="number" {...props} ref={ref}/>
    </FormPrimitiveWrapper>
  )
}

const FormNumberInput = forwardRef(_FormNumberInput)

export default FormNumberInput
