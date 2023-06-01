import {ReactNode} from "react";
import Container from "@/components/layout/Container";
import {Toaster} from "@/components/ui/toast";

interface NewPageLayoutProps {
  children: ReactNode
}

export default function NewPageLayout({children}: NewPageLayoutProps) {
  return (
    <Container className="py-10">
      {children}
      <Toaster/>
    </Container>
)
}
