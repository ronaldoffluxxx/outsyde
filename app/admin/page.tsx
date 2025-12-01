"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Users, Calendar, DollarSign, Plus, MoreHorizontal } from "lucide-react"
import Link from "next/link"

// Mock Data
const EVENTS = [
    { id: "1", title: "Neon Nights Festival", date: "2024-08-15", sold: 450, revenue: 67500, status: "Active" },
    { id: "2", title: "Tech Summit 2024", date: "2024-09-10", sold: 120, revenue: 35880, status: "Active" },
    { id: "3", title: "Comedy Gold Night", date: "2024-07-20", sold: 85, revenue: 3825, status: "Past" },
]

export default function AdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <Button className="bg-spotify-green text-black font-bold rounded-full hover:scale-105 transition">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                </Button>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-spotify-green" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$107,205</div>
                        <p className="text-xs text-zinc-400 mt-1">+15% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Tickets Sold</CardTitle>
                        <TicketIcon className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">655</div>
                        <p className="text-xs text-zinc-400 mt-1">+8% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Active Events</CardTitle>
                        <Calendar className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-zinc-400 mt-1">1 ending soon</p>
                    </CardContent>
                </Card>
                <Card className="bg-spotify-dark border-none text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-200">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,203</div>
                        <p className="text-xs text-zinc-400 mt-1">+45 new users</p>
                    </CardContent>
                </Card>
            </div>

            {/* Event Management Table */}
            <Card className="bg-spotify-dark border-none text-white">
                <CardHeader>
                    <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-zinc-400 uppercase bg-white/5">
                                <tr>
                                    <th className="px-6 py-3 rounded-l-lg">Event Name</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Sold</th>
                                    <th className="px-6 py-3">Revenue</th>
                                    <th className="px-6 py-3 rounded-r-lg">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {EVENTS.map((event) => (
                                    <tr key={event.id} className="border-b border-zinc-800 hover:bg-white/5 transition">
                                        <td className="px-6 py-4 font-medium">{event.title}</td>
                                        <td className="px-6 py-4 text-zinc-400">{event.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${event.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-zinc-700 text-zinc-300'}`}>
                                                {event.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{event.sold}</td>
                                        <td className="px-6 py-4">${event.revenue.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function TicketIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="18" height="13" x="3" y="6" rx="2" />
            <path d="M13 6v13" />
            <path d="M3 11h18" />
        </svg>
    )
}
