import {ControllerRenderProps, FieldValues} from "react-hook-form";
import {WithLabelAndTooltipProps} from "@/utils/types";
import Inline from "@/components/layout/Inline";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Textarea} from "@/components/ui/textarea";

interface FormTextareaProps extends ControllerRenderProps<FieldValues, string>, WithLabelAndTooltipProps{}

export default function FormTextarea({label, tooltip, ...field}: FormTextareaProps) {
  return (
    <FormItem>
      <Inline justify="start" align="center" className="gap-2">
        <FormLabel>{label}</FormLabel>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger type="button" className="text-xs text-gray-600">&#x24D8;</TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Inline>
      <FormControl>
        <Textarea {...field}/>
      </FormControl>
      <FormMessage/>
    </FormItem>
  )
}
