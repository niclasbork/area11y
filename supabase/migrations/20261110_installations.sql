-- Anonymous usage overview for the open-source widget: one row per domain that
-- loads area11y through the hosted loader. Written only by the engine's
-- /api/ping function (service role) via record_installation_ping().
--
-- Deliberately no visitor data: no IP address, user agent, path or query.

create table if not exists public.installations (
	hostname text primary key,
	first_seen timestamptz not null default now(),
	last_seen timestamptz not null default now(),
	core_version text,
	pings bigint not null default 1
);

create index if not exists idx_installations_last_seen
on public.installations (last_seen desc);

alter table public.installations enable row level security;

drop policy if exists "deny_all_installations" on public.installations;
create policy "deny_all_installations"
on public.installations
for all
using (false)
with check (false);

-- Atomic upsert: first ping creates the row, later pings bump the counter.
create or replace function public.record_installation_ping(
	p_hostname text,
	p_core_version text default null
)
returns void
language sql
security definer
set search_path = public
as $$
	insert into public.installations (hostname, core_version)
	values (p_hostname, p_core_version)
	on conflict (hostname) do update
	set last_seen = now(),
		pings = public.installations.pings + 1,
		core_version = coalesce(excluded.core_version, public.installations.core_version);
$$;

-- Only the service role (the engine function) may record pings; the public
-- anon / authenticated API roles must not be able to call this.
revoke all on function public.record_installation_ping(text, text) from public;
revoke all on function public.record_installation_ping(text, text) from anon, authenticated;
grant execute on function public.record_installation_ping(text, text) to service_role;
