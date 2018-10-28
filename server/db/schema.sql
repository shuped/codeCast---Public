CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA pg_catalog;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS streams CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS data CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY default uuid_generate_v1(),
  username text NOT NULL,
  email text NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE IF NOT EXISTS streams (
  id UUID PRIMARY KEY default uuid_generate_v1(),
  user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'upcoming',
  title text NOT NULL,
  description text NOT NULL,
  language text NOT NULL,
  imgURL text,
  created_at timestamptz,
  updated_at timestamptz
);

CREATE TABLE IF NOT EXISTS messages (
  user_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  stream_id UUID NOT NULL REFERENCES streams (id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz,
  PRIMARY KEY (user_id, stream_id)
);

CREATE TABLE IF NOT EXISTS data (
  id UUID PRIMARY KEY default uuid_generate_v1(),
  stream_id UUID NOT NULL REFERENCES streams (id) ON DELETE CASCADE,
  directory JSONB NOT NULL,
  content JSONB NOT NULL,
  terminal JSONB NOT NULL
);