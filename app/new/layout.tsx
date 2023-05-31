import {ReactNode} from "react";
import Container from "@/components/layout/Container";

interface NewPageLayoutProps {
  children: ReactNode
}

export default function NewPageLayout({children}: NewPageLayoutProps) {
  return (
    <Container className="py-10">
      {children}
    </Container>
  )
}
