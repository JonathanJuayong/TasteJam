import {CSSProperties, ElementType, ReactNode} from "react";
import styles from "./styles.module.scss"
import theme, {Breakpoints} from "@/utils/theme";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";

interface ContainerProps extends PolymorphicComponent<ElementType>{
  children: ReactNode
  clampWidth?: Breakpoints
}

export default function Container({children, clampWidth = "sm", as = "div"}: ContainerProps) {
  const style = {"--max-width": theme.breakpoints[clampWidth]} as CSSProperties

  return (
    <Polymorphic as={as} style={style} className={styles.container}>{children}</Polymorphic>
  )
}
