// Positive format "99/99/9999";
export const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

/*  
Positive formats:

+42 555.123.4567
+1-(800)-123-4567
+7 555 1234567
+7(926)1234567
(926) 1234567
+79261234567
926 1234567
9261234567
1234567
123-4567
123-89-01
495 1234567
469 123 45 67
89261234567
8 (926) 1234567
926.123.4567
415-555-1234
650-555-2345
(416)555-3456
202 555 4567
4035555678
1 416 555 9292
*/
export const phoneRegex =
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
