import {ControllerRenderProps, FieldValues} from "react-hook-form";
import Inline from "@/components/layout/Inline";
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Input} from "@/components/ui/input";
import {WithLabelAndTooltipProps} from "@/utils/types";

interface TextInputProps extends ControllerRenderProps<FieldValues, string>, WithLabelAndTooltipProps {
}

export default function FormTextInput({label, tooltip, ...field}: TextInputProps) {
  return (
    <FormItem>
      <Inline justify="start" align="center" className="gap-2">
        <FormLabel>{label}</FormLabel>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger type="button" className="text-xs text-gray-600">&#9432;</TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Inline>
      <FormControl>
        <Input placeholder="" {...field}/>
      </FormControl>
      <FormMessage/>
    </FormItem>
  )
}
