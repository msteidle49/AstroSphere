CREATE VIEW BESTAENDE_SNACK AS
SELECT SNACK.id, SNACK.bezeichnung, (SUM(BESTELLUNG.anzahl) - SUM(VERKAUF_SNACK.anzahl)) AS BESTAND
FROM SNACK 
LEFT JOIN BESTELLUNG ON SNACK.id = BESTELLUNG.snack_id
LEFT JOIN VERKAUF_SNACK ON SNACK.id = VERKAUF_SNACK.snack_id
GROUP BY SNACK.id, SNACK.bezeichnung
ORDER BY SNACK.id;
SELECT * FROM BESTAENDE_SNACK;


CREATE VIEW BESTAENDE_MERCH AS
SELECT MERCHARTIKEL.id, MERCHARTIKEL.bezeichnung, MERCHARTIKEL.groesse, (SUM(BESTELLUNG.anzahl) - SUM(VERKAUF_SNACK.anzahl)) AS BESTAND
FROM MERCHARTIKEL 
LEFT JOIN BESTELLUNG ON MERCHARTIKEL.id = BESTELLUNG.snack_id
LEFT JOIN VERKAUF_SNACK ON MERCHARTIKEL.id = VERKAUF_SNACK.snack_id
GROUP BY MERCHARTIKEL.id, MERCHARTIKEL.bezeichnung, MERCHARTIKEL.groesse
ORDER BY MERCHARTIKEL.id;
SELECT * FROM BESTAENDE_MERCH;