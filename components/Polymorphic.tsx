import {ComponentPropsWithRef, ElementType, ReactNode} from "react";

export type PolymorphicComponent<T extends ElementType> = {
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
