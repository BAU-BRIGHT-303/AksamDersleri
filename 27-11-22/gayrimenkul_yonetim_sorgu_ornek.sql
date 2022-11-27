SELECT Evler.EvID, EvTurleri.EvTuru, EvDurumlari.EvDurum, OdaSayilari.OdaSayisi, IsitmaTurleri.IsitmaTuru, Sehirler.SehirAdi, Ilceler.IlceAdi
FROM Evler
JOIN EvTurleri  ON EvTurleri.EvTuruID = Evler.EvID
JOIN EvDurumlari  ON Evler.EvDurumID = EvDurumlari.EvDurumID
JOIN OdaSayilari  ON Evler.OdaSayiID = OdaSayilari.OdaSayiID
JOIN IsitmaTurleri ON Evler.IsitmaID = IsitmaTurleri.IsitmaTuruID
JOIN Sehirler  ON Evler.SehirID = Sehirler.SehirID
JOIN Ilceler  ON Evler.IlceID = Ilceler.IlceID

--FOR XML AUTO, ELEMENTS
FOR JSON AUTO