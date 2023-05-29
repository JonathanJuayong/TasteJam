import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ForwardedRef, forwardRef, HTMLAttributes, ReactNode} from "react";
import PadBox from "@/components/layout/PadBox";

interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  children: ReactNode
}

function _DialogContent({title, description,children, ...props}: DialogContentProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay/>
      <DialogPrimitive.Content {...props} ref={ref}>
        <PadBox>
          <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
          <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
          {children}
          <DialogPrimitive.Close aria-label="Close">
            Close
          </DialogPrimitive.Close>
        </PadBox>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(_DialogContent)
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
