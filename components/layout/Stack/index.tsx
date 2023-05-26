import {CSSProperties, ReactNode} from "react";
import styles from "./styles.module.scss"
import theme, {Spacing} from "@/utils/theme";

interface StackProps {
  children: ReactNode
  gutter?: Spacing
}

export default function Stack({children, gutter = "0"}: StackProps) {
  const style = {"--gutter": theme.spacing[gutter]} as CSSProperties
  return (
    <div style={style} className={styles.stack}>{children}</div>
  )
}
