import {ReactNode} from "react";
import Container from "@/components/layout/Container";
import {Toaster} from "@/components/ui/toast";
import ProtectedRoute from "@/components/ProtectedRoute";

interface NewPageLayoutProps {
  children: ReactNode
}

export default function CreatePageLayout({children}: NewPageLayoutProps) {
  return (
    <ProtectedRoute>
      <Container className="py-10">
        {children}
        <Toaster/>
      </Container>
    </ProtectedRoute>
  )
}
