import supabase from "@/lib/supabase";
import {useEffect, useState} from "react";
import {User} from "@/utils/types";
import {Subscription} from "@supabase/gotrue-js";

type AuthProvider = "google" | "facebook"

type AuthError = {
  message?: string | null,
  name?: string | null,
  status?: number | null,
  stack?: string | null
}

interface IAuth {
  user: User | null,
  loading: boolean,
  error: AuthError | null
  signInWithProvider: (provider: AuthProvider) => Promise<void>
  signOut: () => Promise<void>
}

export default function useAuth(): IAuth {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<AuthError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscription: Subscription | null = null
    const setup = async () => {
      const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case "INITIAL_SESSION": {
            if (session) {
              return setUser({
                id: session.user.id,
                email: session.user.email,
                avatar: session.user.user_metadata?.avatar_url
              })
            }
            return setUser(null)
          }
          case "SIGNED_IN": {
            return setUser({
              id: session?.user?.id ?? "",
              email: session?.user?.email ?? "",
              avatar: session?.user?.user_metadata?.avatar_url ?? ""
            })
          }
          case "SIGNED_OUT": {
            return setUser(null)
          }
          default: {
            return
          }
        }
      })

      setLoading(false)
      return subscription
    }

    setup().then((data) => subscription = data)

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return {
    async signInWithProvider(provider: AuthProvider) {
      setLoading(true)
      const {error} = await supabase.auth.signInWithOAuth({
        provider: provider
      })
      setLoading(false)
      setError(error)
    },
    async signOut() {
      setLoading(true)
      const {error} = await supabase.auth.signOut()
      setError(error)
      setLoading(false)
    },
    user,
    error,
    loading
  }
}
