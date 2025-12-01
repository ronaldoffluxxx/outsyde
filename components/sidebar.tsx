"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Library, PlusSquare, Heart, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
    {
        label: "Home",
        icon: Home,
        href: "/",
        color: "text-sky-500",
    },
    {
        label: "Discover",
        icon: Search,
        href: "/events",
        color: "text-violet-500",
    },
    {
        label: "My Tickets",
        icon: Library,
        href: "/tickets",
        color: "text-pink-700",
    },
    {
        label: "Dashboard",
        icon: User,
        href: "/dashboard",
        color: "text-orange-700",
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-spotify-black text-white w-[250px] fixed left-0 top-0 bottom-0 border-r border-spotify-dark">
            <div className="px-3 py-2 flex-1">
                <Link href="/" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        {/* Placeholder for Logo */}
                        <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                            <span className="font-bold text-black">E</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">Eventify</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 px-3">
                    <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Your Library</h2>
                    <div className="space-y-1">
                        <Link href="/favorites" className="group flex items-center text-zinc-400 hover:text-white transition py-2">
                            <div className="bg-gradient-to-br from-indigo-500 to-blue-300 h-6 w-6 mr-3 flex items-center justify-center rounded-sm opacity-70 group-hover:opacity-100">
                                <Heart className="h-3 w-3 text-white fill-white" />
                            </div>
                            <span className="text-sm font-medium">Liked Events</span>
                        </Link>
                        <Link href="/create-event" className="group flex items-center text-zinc-400 hover:text-white transition py-2">
                            <div className="bg-zinc-800 h-6 w-6 mr-3 flex items-center justify-center rounded-sm opacity-70 group-hover:opacity-100">
                                <PlusSquare className="h-3 w-3 text-zinc-400 group-hover:text-white" />
                            </div>
                            <span className="text-sm font-medium">Create Event</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2">
                <Link href="/admin" className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400">
                    <div className="flex items-center flex-1">
                        <Settings className="h-5 w-5 mr-3" />
                        Admin Panel
                    </div>
                </Link>
            </div>
        </div>
    )
}
