CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE IF NOT EXISTS streams (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'upcoming',
  title text NOT NULL,
  description text NOT NULL,
  language text NOT NULL,
  imgURL text,
  created_at timestamptz,
  updated_at timestamptz
);

CREATE TABLE IF NOT EXISTS messages (
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  stream_id INTEGER NOT NULL REFERENCES streams (id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz,
  PRIMARY KEY (user_id, stream_id)
);

CREATE TABLE IF NOT EXISTS data (
  id SERIAL PRIMARY KEY,
  stream_id INTEGER NOT NULL REFERENCES streams (id) ON DELETE CASCADE,
  directory JSONB NOT NULL,
  content JSONB NOT NULL
);