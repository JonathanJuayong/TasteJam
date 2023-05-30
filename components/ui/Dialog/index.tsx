import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ForwardedRef, forwardRef, HTMLAttributes, ReactNode} from "react";
import PadBox from "@/components/layout/PadBox";
import styles from "./styles.module.scss"
import Stack from "@/components/layout/Stack";

interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  children: ReactNode
}

function _DialogContent(
  {
    title,
    description,
    children,
    ...props
  }: DialogContentProps, ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay}/>
      <DialogPrimitive.Content className={styles.content} {...props} ref={ref}>
        <PadBox>
          <Stack gutter="5">
            <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
            {children}
          </Stack>
        </PadBox>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(_DialogContent)
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
