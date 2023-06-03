import {ComponentPropsWithRef, ElementType, ForwardedRef, forwardRef, HTMLAttributes, ReactNode} from "react";

export interface PolymorphicComponent<T extends ElementType> extends HTMLAttributes<HTMLElement> {
  as?: T
}

type PolymorphicProps<T extends ElementType> = {
  children: ReactNode,
} & ComponentPropsWithRef<T>
  & PolymorphicComponent<T>

const Polymorphic = forwardRef(<T extends ElementType = "div">(
    {
      as,
      className,
      children,
      ...props
    }: PolymorphicProps<T>,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const Component = as ?? "div"

    return (
      <Component ref={ref} className={className} {...props}>{children}</Component>
    )
  }
)

Polymorphic.displayName = "Polymorphic"
export default Polymorphic
