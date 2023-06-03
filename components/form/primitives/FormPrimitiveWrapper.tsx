import {HTMLAttributes, useState} from "react";
import Inline from "@/components/layout/Inline";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {HelpCircle} from "lucide-react";
import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/ui/dialog";

interface FormPrimitiveWrapperProps extends HTMLAttributes<HTMLElement> {
  label: string
}

export default function FormPrimitiveWrapper(
  {
    label,
    children
  }: FormPrimitiveWrapperProps
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormItem>
      <Inline justify="start" align="center" className="gap-2">
        <FormLabel>{label}</FormLabel>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger type="button" onClick={() => setIsOpen(true)}><HelpCircle className="h-3 w-3"/></TooltipTrigger>
                <TooltipContent>Test tooltip</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent>
            <DialogDescription>
              This is a test tooltip
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </Inline>
      <FormControl>
        {children}
      </FormControl>
      <FormMessage/>
    </FormItem>
  )
}
