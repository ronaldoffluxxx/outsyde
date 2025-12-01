-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- USERS TABLE (Extends Supabase Auth)
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  name text,
  avatar_url text,
  role text default 'user' check (role in ('user', 'admin', 'organizer')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- EVENTS TABLE
create table public.events (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  category text not null,
  banner_url text,
  venue text not null,
  date date not null,
  time time not null,
  created_by uuid references public.users(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TICKET TYPES TABLE
create table public.ticket_types (
  id uuid default uuid_generate_v4() primary key,
  event_id uuid references public.events(id) on delete cascade not null,
  name text not null, -- e.g. VIP, Regular
  price numeric not null,
  capacity int not null,
  sold int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ORDERS TABLE
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  event_id uuid references public.events(id) not null,
  total_amount numeric not null,
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'failed')),
  stripe_session_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TICKETS TABLE (Individual tickets generated after order)
create table public.tickets (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) not null,
  event_id uuid references public.events(id) not null,
  user_id uuid references public.users(id) not null,
  ticket_type_id uuid references public.ticket_types(id) not null,
  qr_code text unique not null,
  status text default 'valid' check (status in ('valid', 'used', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- FAVORITES TABLE
create table public.favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  event_id uuid references public.events(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, event_id)
);

-- NOTIFICATIONS TABLE
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  title text not null,
  message text not null,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Basic Setup)
alter table public.users enable row level security;
alter table public.events enable row level security;
alter table public.ticket_types enable row level security;
alter table public.orders enable row level security;
alter table public.tickets enable row level security;
alter table public.favorites enable row level security;
alter table public.notifications enable row level security;

-- Public read access for events
create policy "Public events are viewable by everyone"
  on public.events for select
  using ( true );

-- Users can view their own data
create policy "Users can view their own profile"
  on public.users for select
  using ( auth.uid() = id );

create policy "Users can update their own profile"
  on public.users for update
  using ( auth.uid() = id );
