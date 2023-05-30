import {Children, cloneElement, CSSProperties, ElementType, ReactElement, ReactNode} from "react";
import Polymorphic, {PolymorphicComponent} from "@/components/Polymorphic";
import styles from "./styles.module.scss"
import theme, {Spacing} from "@/utils/theme";

type PositionOptions = "center"
  | "end"
  | "start"
  | "stretch"
  | "between"
  | "around"
  | "evenly"

type PositionMap = { [key in PositionOptions]: string };

interface InlineProps extends PolymorphicComponent<ElementType> {
  children: ReactNode
  gutter?: Spacing
  justify?: PositionOptions
  align?: PositionOptions
}

export default function Inline(
  {
    children,
    as = "div",
    gutter = "0",
    justify = "between",
    align = "start",
    className = ""
  }: InlineProps) {

  const positionMap: PositionMap = {
    "start": "flex-start",
    "center": "center",
    "end": "flex-end",
    "stretch": "initial",
    "between": "space-between",
    "around": "space-around",
    "evenly": "space-evenly",
  }

  const style = {
    "--gutter": theme.spacing[gutter],
    "--justify": positionMap[justify],
    "--align": positionMap[align],
  } as CSSProperties

  return (
    <Polymorphic
      style={style}
      as={as}
      className={`${styles.inline} ${className}`}
    >
      {children}
    </Polymorphic>
  )
}

function Stretch({children}: { children: ReactNode }) {
  const child = Children.only(children) as ReactElement
  const stretched = cloneElement(child, {
    className: `${child.props.className} ${styles.stretch}`
  })
  return <>{stretched}</>
}

Inline.Stretch = Stretch
