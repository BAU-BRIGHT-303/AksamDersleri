-- DML --> Data Manipulation Language Ornekler

-- Veri Ekleme ( Veri Giriþi vsvs) INSERT

-- Temel syntax aþaðýdaki gibidir. Veri eklenecek olan tablo insert komutundan sonra belirtilir ve parantez açýlarak veri eklemek istediðimiz sütunlar virgüllerle ayrýlýr. Akabinde values diyerek yeniden parantez açýlýr ve yukarýda belirtilen sýraya göre deðerler girilir.
INSERT INTO Egitmenler (EgitmenAdi, Email, Yas)
VALUES ('Murat Baþeren', 'm.baseren@gmail.com', 32)

INSERT INTO Egitmenler (EgitmenAdi, Email, Yas)
VALUES ('Onur Kulabaþ', 'm.baseren@gmail.com', 32)

--Güncelleþtirme komutu -> UPDATE

UPDATE Egitmenler
set EgitmenAdi = 'Mahmut Tuncer' 
WHERE EgitmenID = 4

-- SÝLME komutu DELETE
-- bu alanda bilmemiz gereken konu çoðu programlama dilinde bir güncelleþtirme ya da silme operasyonu gerçekleþeceði zaman mutlaka unique bir veriye eriþim gerekmektedir. Biz de yukarýdaki update ve aþaðýdaki silme iþlemlerinde id kolonlarýndan faydalanmaktayýz..
DELETE
FROM Egitmenler
WHERE EgitmenID = 4

INSERT INTO Ogrenciler (OgrenciAdi, Email)
VALUES ('Ahmet', 'a.as@gmail.com')

UPDATE Ogrenciler
SET OgrenciAdi = 'Mehmet Çakar', Email = 'm.cakar@gmail.com'
WHERE OgrenciID = 4

DELETE 
FROM 
Ogrenciler 
WHERE 
OgrenciID
=
4

