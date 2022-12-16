-- DML --> Data Manipulation Language Ornekler

-- Veri Ekleme ( Veri Giri�i vsvs) INSERT

-- Temel syntax a�a��daki gibidir. Veri eklenecek olan tablo insert komutundan sonra belirtilir ve parantez a��larak veri eklemek istedi�imiz s�tunlar virg�llerle ayr�l�r. Akabinde values diyerek yeniden parantez a��l�r ve yukar�da belirtilen s�raya g�re de�erler girilir.
INSERT INTO Egitmenler (EgitmenAdi, Email, Yas)
VALUES ('Murat Ba�eren', 'm.baseren@gmail.com', 32)

INSERT INTO Egitmenler (EgitmenAdi, Email, Yas)
VALUES ('Onur Kulaba�', 'm.baseren@gmail.com', 32)

--G�ncelle�tirme komutu -> UPDATE

UPDATE Egitmenler
set EgitmenAdi = 'Mahmut Tuncer' 
WHERE EgitmenID = 4

-- S�LME komutu DELETE
-- bu alanda bilmemiz gereken konu �o�u programlama dilinde bir g�ncelle�tirme ya da silme operasyonu ger�ekle�ece�i zaman mutlaka unique bir veriye eri�im gerekmektedir. Biz de yukar�daki update ve a�a��daki silme i�lemlerinde id kolonlar�ndan faydalanmaktay�z..
DELETE
FROM Egitmenler
WHERE EgitmenID = 4

INSERT INTO Ogrenciler (OgrenciAdi, Email)
VALUES ('Ahmet', 'a.as@gmail.com')

UPDATE Ogrenciler
SET OgrenciAdi = 'Mehmet �akar', Email = 'm.cakar@gmail.com'
WHERE OgrenciID = 4

DELETE 
FROM 
Ogrenciler 
WHERE 
OgrenciID
=
4

