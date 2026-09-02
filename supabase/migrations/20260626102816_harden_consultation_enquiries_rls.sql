/*
# Harden consultation_enquiries RLS

1. Problem
The INSERT policy `anyone_can_submit_enquiry` uses `WITH CHECK (true)`, allowing
unrestricted INSERT by the anon role with no validation.

2. Solution
Replace the blanket-true policy with one that validates required fields are present
(name, email, message) so empty or malformed rows are rejected at the DB level.

3. Security
- RLS remains enabled.
- INSERT is still allowed for anon (public form), but only when required fields are non-empty.
- No data loss: no columns are dropped or altered.
*/

DROP POLICY IF EXISTS "anyone_can_submit_enquiry" ON consultation_enquiries;

CREATE POLICY "anon_insert_consultation_with_validation"
ON consultation_enquiries FOR INSERT
TO anon
WITH CHECK (
  length(trim(name)) > 0 AND
  length(trim(email)) > 0 AND
  length(trim(message)) > 0
);