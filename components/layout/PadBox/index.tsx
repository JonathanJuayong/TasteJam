import {CSSProperties, ElementType, ReactNode} from "react";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";
import theme, {Spacing} from "@/utils/theme";
import styles from "./styles.module.scss"

interface PadBoxProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
  padding?: Spacing[]
}

export default function PadBox({children, padding = ["5"], as = "div", className}: PadBoxProps) {
  const paddingValueAsString = padding?.map(value => theme.spacing[value]).join(" ")
  const style = {"--padding": paddingValueAsString} as CSSProperties

  return (
    <Polymorphic
      style={style}
      as={as}
      className={`${styles.padding} ${className}`}
    >
      {children}
    </Polymorphic>
  )
}
