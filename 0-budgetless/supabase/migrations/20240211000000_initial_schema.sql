-- Budgetless initial schema
-- Run this after creating a new Supabase project for Budgetless

-- Profiles (extends auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  stripe_customer_id text,
  plan text default 'free' check (plan in ('free', 'premium')),
  reminder_days int[] default array[1, 3, 7],
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Subscriptions
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  price decimal(10,2) not null,
  billing_cycle text not null check (billing_cycle in ('monthly', 'quarterly', 'yearly')),
  next_renewal_date date,
  category text,
  is_active boolean default true,
  canceled_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Cancellation guides (Phase 5)
create table public.cancellation_guides (
  id uuid primary key default gen_random_uuid(),
  service_name text unique not null,
  instructions text,
  url text,
  difficulty text check (difficulty in ('easy', 'medium', 'hard')),
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.cancellation_guides enable row level security;

-- Profiles: users can only access own profile
create policy "Users can view own profile" on public.profiles
  for select to authenticated using ((select auth.uid()) = id);

create policy "Users can update own profile" on public.profiles
  for update to authenticated using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "Users can insert own profile" on public.profiles
  for insert to authenticated with check ((select auth.uid()) = id);

-- Subscriptions: users can only access own subscriptions
create policy "Users can view own subscriptions" on public.subscriptions
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "Users can insert own subscriptions" on public.subscriptions
  for insert to authenticated with check ((select auth.uid()) = user_id);

create policy "Users can update own subscriptions" on public.subscriptions
  for update to authenticated using ((select auth.uid()) = user_id);

create policy "Users can delete own subscriptions" on public.subscriptions
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Cancellation guides: read-only for all authenticated users
create policy "Authenticated users can view cancellation guides" on public.cancellation_guides
  for select to authenticated using (true);

-- Trigger to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
