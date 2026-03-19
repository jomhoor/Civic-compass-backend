-- Flip default sharingMode from GHOST to PUBLIC
-- Analytics now use all compass data anonymously; new users default to PUBLIC
ALTER TABLE "User" ALTER COLUMN "sharingMode" SET DEFAULT 'PUBLIC';

-- Migrate existing GHOST users to PUBLIC (they never actively chose GHOST)
UPDATE "User" SET "sharingMode" = 'PUBLIC' WHERE "sharingMode" = 'GHOST';
