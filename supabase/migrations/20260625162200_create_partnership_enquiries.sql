CREATE TABLE partnership_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text NOT NULL,
  company_type text,
  partnership_model text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE partnership_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_submit_partnership" ON partnership_enquiries
  FOR INSERT TO anon WITH CHECK (true);