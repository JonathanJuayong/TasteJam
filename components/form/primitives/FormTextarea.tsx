import {Textarea} from "@/components/ui/textarea";
import {ForwardedRef, forwardRef, HTMLAttributes} from "react";
import FormPrimitiveWrapper from "@/components/form/primitives/FormPrimitiveWrapper";

interface FormTextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string
}

function _FormTextArea({label, ...props}: FormTextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
  return <FormPrimitiveWrapper label={label}>
    <Textarea {...props} ref={ref}/>
  </FormPrimitiveWrapper>
}

const FormTextArea = forwardRef(_FormTextArea)

export default FormTextArea
