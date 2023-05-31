import {ElementType, ReactNode} from "react";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";
import {Spacing} from "@/utils/theme";
import {cn} from "@/lib/utils";

type JustifyOptions = "center"
  | "end"
  | "start"
  | "stretch"
  | "between"
  | "around"
  | "evenly"

type AlignOptions = "start"
  | "end"
  | "center"
  | "baseline"
  | "stretch"

type JustifyMap = { [key in JustifyOptions]: string };
type AlignMap = { [key in AlignOptions]: string };

const justifyMap: JustifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  stretch: "justify-stretch",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const alignMap: AlignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
}

interface InlineProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
  gutter?: Spacing
  justify?: JustifyOptions
  align?: AlignOptions
}

export default function Inline(
  {
    children,
    as = "div",
    justify = "between",
    align = "start",
    className,
    ...props
  }: InlineProps
) {
  return (
    <Polymorphic
      as={as}
      className={cn(
        "flex",
        justifyMap[justify],
        alignMap[align],
        className
      )}
      {...props}
    >
      {children}
    </Polymorphic>
  )
}
