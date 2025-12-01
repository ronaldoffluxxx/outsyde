"use client"

import { TicketCard } from "@/components/ticket-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Ticket, Heart, Settings } from "lucide-react"

// Mock data
const MY_TICKETS = [
    {
        id: "t1",
        eventName: "Neon Nights Festival",
        date: "2024-08-15T20:00:00",
        venue: "Downtown Arena",
        seat: "General Admission",
        type: "VIP",
        qrCode: "mock-qr-1"
    },
    {
        id: "t2",
        eventName: "Tech Summit 2024",
        date: "2024-09-10T09:00:00",
        venue: "Convention Center",
        seat: "Row A, Seat 12",
        type: "Regular",
        qrCode: "mock-qr-2"
    }
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-green-900 to-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Wallet Balance</CardTitle>
                        <Wallet className="h-4 w-4 text-spotify-green" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$120.50</div>
                        <p className="text-xs text-zinc-400 mt-1">+20% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Total Tickets</CardTitle>
                        <Ticket className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-zinc-400 mt-1">2 upcoming events</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Saved Events</CardTitle>
                        <Heart className="h-4 w-4 text-pink-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-zinc-400 mt-1">Events you like</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Settings</CardTitle>
                        <Settings className="h-4 w-4 text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Profile</div>
                        <p className="text-xs text-zinc-400 mt-1">Manage account</p>
                    </CardContent>
                </Card>
            </div>

            {/* My Tickets */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">My Tickets</h2>
                <div className="space-y-4">
                    {MY_TICKETS.map((ticket) => (
                        <TicketCard key={ticket.id} {...ticket} />
                    ))}
                </div>
            </section>
        </div>
    )
}
