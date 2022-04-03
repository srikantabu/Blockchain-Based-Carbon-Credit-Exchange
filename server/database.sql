//sudo -u postgres psql

CREATE DATABASE bbccx;

CREATE TABLE users (
  user_id VARCHAR (7) PRIMARY KEY,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  email VARCHAR (320) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  country VARCHAR (80) NOT NULL,
  country_code VARCHAR (5) NOT NULL,
  phone_number BIGINT NOT NULL,
  dob DATE NOT NULL,
  is_org BOOLEAN NOT NULL,
  org_name VARCHAR (255) NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

SELECT user_id FROM users WHERE email = 'busrikanta@mail.com' AND password = crypt('#10Messi', password);

Insert into users values(
    'ABC1234',
    'Srikanta',
    'B U',
    'busrikanta@gmail.com',
    crypt('#10Messi', gen_salt('bf')),
    'India',
    '+91',
    '9663842861',
    '1994-12-21',
    FALSE,
    Null
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_users
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE bank_details (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR (7),
  account_number TEXT NOT NULL,
  ifsc_code VARCHAR (11) NOT NULL,
  branch_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_user_id
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);

CREATE TRIGGER set_timestamp_bank_details
BEFORE UPDATE ON bank_details
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

Insert into bank_details (user_id,account_number,ifsc_code,branch_name) values(
    'ABC1234',
    '7152643138351346534',
    'KKBK0000222',
    'Kotak Bank MG Road'
);

SELECT 
   *
FROM 
   information_schema.columns
WHERE 
   table_name = 'bank_details';