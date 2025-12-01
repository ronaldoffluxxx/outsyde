import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data for initial display
const FEATURED_EVENTS = [
  {
    id: "1",
    title: "Neon Nights Festival",
    date: "2024-08-15",
    venue: "Downtown Arena",
    price: 150,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop",
    category: "Music"
  },
  {
    id: "2",
    title: "Tech Summit 2024",
    date: "2024-09-10",
    venue: "Convention Center",
    price: 299,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
    category: "Tech"
  },
  {
    id: "3",
    title: "Comedy Gold Night",
    date: "2024-07-20",
    venue: "The Laugh Factory",
    price: 45,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1000&auto=format&fit=crop",
    category: "Comedy"
  },
  {
    id: "4",
    title: "Jazz in the Park",
    date: "2024-08-05",
    venue: "Central Park",
    price: 0,
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
    category: "Music"
  },
]

const CATEGORIES = [
  { name: "Music", color: "bg-pink-600" },
  { name: "Tech", color: "bg-blue-600" },
  { name: "Comedy", color: "bg-orange-600" },
  { name: "Sports", color: "bg-green-600" },
  { name: "Arts", color: "bg-purple-600" },
  { name: "Food", color: "bg-red-600" },
]

export default function Home() {
  return (
    <div className="space-y-8 pb-20">

      {/* Hero Section */}
      <section className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-indigo-900 to-spotify-black p-8 flex flex-col justify-end">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459749411177-287ce328810e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Discover Live Events</h1>
          <p className="text-zinc-200 text-lg mb-6">Find tickets for concerts, workshops, sports, and more.</p>
          <div className="flex gap-4">
            <Button className="bg-spotify-green text-black font-bold rounded-full px-8 hover:scale-105 transition">
              Explore Now
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-8">
              Sell Tickets
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Browse Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={`/events?category=${cat.name}`}>
              <div className={`${cat.color} h-32 rounded-lg p-4 relative overflow-hidden hover:scale-105 transition cursor-pointer`}>
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-black/20 rounded-full rotate-12 transform"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Featured Events</h2>
          <Link href="/events" className="text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-wider">
            Show All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_EVENTS.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Upcoming Near You</h2>
          <Link href="/events" className="text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-wider">
            Show All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reusing mock data for now, in real app would be different query */}
          {FEATURED_EVENTS.slice().reverse().map((event) => (
            <EventCard key={`upcoming-${event.id}`} {...event} />
          ))}
        </div>
      </section>

    </div>
  )
}
