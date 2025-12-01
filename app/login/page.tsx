"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push("/dashboard")
            router.refresh()
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-spotify-black p-4">
            <Card className="w-full max-w-md bg-spotify-dark border-zinc-800 text-white">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Log in to Eventify</CardTitle>
                    <CardDescription className="text-center text-zinc-400">
                        Enter your email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Button
                            variant="outline"
                            className="w-full bg-white text-black hover:bg-zinc-200 border-none font-bold rounded-full"
                            onClick={handleGoogleLogin}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Continue with Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-700" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-spotify-dark px-2 text-zinc-400">Or</span>
                        </div>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:ring-spotify-green focus:border-spotify-green"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/forgot-password" className="text-sm text-spotify-green hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:ring-spotify-green focus:border-spotify-green"
                            />
                        </div>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-spotify-green hover:bg-green-500 text-black font-bold rounded-full"
                            disabled={loading}
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Log In
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-zinc-400">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-white hover:underline font-bold">
                            Sign up for Eventify
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
