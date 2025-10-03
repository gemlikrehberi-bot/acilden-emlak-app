create table if not exists users (
  id uuid primary key,
  name text,
  email text unique,
  sector text,
  role text,
  plan text
);

create table if not exists problems (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  title text not null,
  description text not null,
  budget text,
  priority text,
  status text default 'new',
  file_url text,
  created_at timestamp with time zone default now()
);

create table if not exists solutions (
  id uuid primary key default gen_random_uuid(),
  problem_id uuid references problems(id) on delete cascade,
  text text not null,
  created_at timestamp with time zone default now()
);
