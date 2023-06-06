"use client"

import {useRouter} from "next/navigation";
import Stack from "@/components/layout/Stack";
import {Button} from "@/components/ui/button";
import useAuth from "@/utils/hooks/useAuth";

export default function Login() {
  const {user, signOut, signInWithProvider} = useAuth()
  const router = useRouter()
  const handleSignIn = async () => {
    await signInWithProvider("google")
  }
  const handleSignOut = async () => {
    await signOut()
    if (!user) {
      router.push("/")
    }
  }

  return (
    <Stack className="gap-5">
      {!user && <Button type="button" onClick={handleSignIn}>Sign In With Google</Button>}
      {user && <Button type="button" onClick={handleSignOut}>Sign out</Button>}
    </Stack>
  )
}
