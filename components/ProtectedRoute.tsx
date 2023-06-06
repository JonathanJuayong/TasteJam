"use client"

import {ReactNode, useEffect} from "react";
import useAuth from "@/utils/hooks/useAuth";
import Loading from "@/components/Loading";
import {useRouter} from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({children}: ProtectedRouteProps) {
  const {user, loading} = useAuth()
  const {push} = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      push("/login")
    }
  }, [loading, user])

  if (!user || loading) {
    return <Loading/>
  }

  return (
    <>{children}</>
  )
}
