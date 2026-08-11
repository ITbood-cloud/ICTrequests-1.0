create table if not exists ict_requests (id text primary key,name text not null,division text not null,services text[] not null,description text not null,date text,time text,status text not null default 'Pending',inspection_remarks text,materials_required text,date_completed text,materials_used text,remarks text,created_at timestamptz not null default now());
alter table ict_requests enable row level security;
create policy "public read ict requests" on ict_requests for select using (true);
create policy "public insert ict requests" on ict_requests for insert with check (true);
create policy "public update ict requests" on ict_requests for update using (true) with check (true);
