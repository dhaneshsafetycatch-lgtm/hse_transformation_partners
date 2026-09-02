-- Replace the trivially-true INSERT policy with one whose WITH CHECK
-- is not always true, so row-level security is not bypassed.
-- Anon role can still submit consultation enquiries, but only with
-- required fields populated.
DROP POLICY IF EXISTS "anyone_can_submit_enquiry" ON public.consultation_enquiries;

CREATE POLICY "anyone_can_submit_enquiry" ON public.consultation_enquiries
  FOR INSERT TO anon
  WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0
    AND email IS NOT NULL AND length(trim(email)) > 0
    AND message IS NOT NULL AND length(trim(message)) > 0
  );

-- Allow authenticated owners/staff to read enquiries for follow-up.
CREATE POLICY "auth_read_enquiries" ON public.consultation_enquiries
  FOR SELECT TO authenticated USING (true);

-- Prevent accidental public reads / updates / deletes from anon.
REVOKE ALL ON public.consultation_enquiries FROM anon;
GRANT INSERT ON public.consultation_enquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.consultation_enquiries TO authenticated;
