import {ElementType, ReactNode} from "react";
import {Breakpoints} from "@/utils/theme";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";
import {cn} from "@/lib/utils";

interface ContainerProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
  clampWidth?: Breakpoints
}

const twWidths: { [key in Breakpoints]: string } = {
  sm: "md:max-w-2xl",
  md: "lg:max-w-3xl",
  lg: "lg:max-w-4xl",
  xl: "2xl:max-w-5xl",
  xxl: "2xl:max-w-6xl"
}

export default function Container({children, clampWidth = "sm", as = "div", className = ""}: ContainerProps) {
  return (
    <
      Polymorphic
      as={as}
      className={cn(
        "max-w-[90%] mx-auto",
        className,
        twWidths[clampWidth]
      )}
    >
      {children}
    </Polymorphic>
  )
}
