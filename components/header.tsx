"use client"

import { Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
    return (
        <div className="h-16 w-full bg-spotify-black/95 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 border-b border-white/5">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 w-[300px] hover:bg-white/20 transition">
                <Search className="h-5 w-5 text-zinc-400 mr-2" />
                <input
                    type="text"
                    placeholder="What do you want to attend?"
                    className="bg-transparent border-none focus:outline-none text-sm text-white placeholder-zinc-400 w-full"
                />
            </div>

            <div className="flex items-center gap-x-4">
                <button className="text-zinc-400 hover:text-white transition">
                    <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-x-2">
                    <Link href="/login">
                        <button className="font-bold text-zinc-400 hover:text-white hover:scale-105 transition text-sm">
                            Sign up
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="bg-white text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition text-sm">
                            Log in
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
