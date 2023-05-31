import {ElementType, ReactNode} from "react";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";
import {cn} from "@/lib/utils";

interface StackProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
}

export default function Stack({children, as = "div", className}: StackProps) {
  return (
    <Polymorphic
      as={as}
      // className={`${styles.stack} ${className}`}
      className={cn(
        "flex flex-col",
        className
      )}
    >
      {children}
    </Polymorphic>
  )
}
