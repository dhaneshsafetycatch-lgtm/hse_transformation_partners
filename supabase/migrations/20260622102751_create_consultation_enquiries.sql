CREATE TABLE consultation_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE consultation_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_submit_enquiry" ON consultation_enquiries
  FOR INSERT TO anon WITH CHECK (true);
