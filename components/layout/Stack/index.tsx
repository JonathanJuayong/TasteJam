import {CSSProperties, ElementType, ReactNode} from "react";
import styles from "./styles.module.scss"
import theme, {Spacing} from "@/utils/theme";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";

interface StackProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
  gutter?: Spacing
}

export default function Stack({children, as = "div", gutter = "0", className = ""}: StackProps) {
  const style = {"--gutter": theme.spacing[gutter]} as CSSProperties
  return (
    <Polymorphic as={as} style={style} className={`${styles.stack} ${className}`}>{children}</Polymorphic>
  )
}
