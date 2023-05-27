import {ReactNode} from "react";
import Container from "@/components/layout/Container";

interface CreatePageLayoutProps {
  children: ReactNode
}

export default function CreatePageLayout({children}: CreatePageLayoutProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}
