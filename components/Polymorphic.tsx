import {ComponentPropsWithRef, ElementType, HTMLAttributes, ReactNode} from "react";

export interface PolymorphicComponent<T extends ElementType> extends HTMLAttributes<HTMLElement>{
  as?: T
}

type PolymorphicProps<T extends ElementType> = {
  children: ReactNode,
} & ComponentPropsWithRef<T>
  & PolymorphicComponent<T>

export default function Polymorphic<T extends ElementType = "div">({as, children, ...props}: PolymorphicProps<T>) {
  const Component = as ?? "div"

  return (
    <Component {...props}>{children}</Component>
  )
}
