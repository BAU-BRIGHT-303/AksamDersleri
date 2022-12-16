-- STORED PROCEDURE --

-- Genellikle rutinle�en i�lemlerin kolay bir bi�imde �nden haz�rlanarak ger�ekle�tirilebilmesine imkan veren kod bloklar�.
--�lk kez �al��t�r�ld�klar� zaman derlenirler. Daha sonra �al��t�r�ld�klar�nda tekrar derlenme durumlar� s�z konusu de�ildir. Haliyle performans kazanc� sa�lanmaktad�r.
-- Kaydedilebilen ve tekrar �a�r�labilen sql kod bloklar� olarak tan�mlayabiliriz. 
-- Tan�mlama yap�l�p kaydedildikten sonra EXEC keywordu ile �a�r�lmaktad�r.

-- Yine DDL komutlar�n� prosed�r olu�tururken kullanabilmekteyiz.

--S�z dizimi
CREATE PROCEDURE dbo.Selamlama
AS
BEGIN
 SELECT 'SELAMLAR'
END

--Prosed�r� olu�turmu� oldu�umuz veritaban� �zerinde programmability klas�r� i�erisinde sotred procedures i�erisinde kaydetmi� oldu�umuz ismi ile g�r�nt�leyebilmekteyiz..

--�imdi prosed�r� �a��ral�m
EXEC [dbo].[Selamlama]

-- Diyelim ki bu prosed�rde bir de�i�iklik ihtiyac�m�z var �rne�in select komutunu de�il de ekrana yazd�rma komutunu kullanmak istedik.

ALTER PROCEDURE dbo.Selamlama
AS
BEGIN
 PRINT('SELAMLAR')
END

EXEC dbo.Selamlama

-- Gayr�menk�l y�netim sistemimiz �zerinde isim aratarak daha do�rusu ismi parametre olarak g�ndererek arama yapan ve bize sonu� d�nen bir prosed�r yazal�m.
use GayrimenkulYonetim


-- bu �rnekte ger�ek�i bir prosed�r �rne�i tan�mlad�k. Amac�m�z sorguyu yapacak ki�iye dinamik bir aratma y�ntemi ile ba�tan sorguyu yazmakla u�ra�madan sadece bu sorgunun yer ald��� prosed�r� �a��rarak prosed�rde isim aramas�n� parametre �eklinde girmesini sa�lamakt�.
-- bunun i�in �nce prosed�r�m�z�n imzas�n�n alt�n parantez i�ince @ ifadesi kullanarak hayali bir de�i�ken ismi tan�mlad�k. sonra kod bloklar�m�z�n bulundu�u begin ve end aras�nda sorgu k�sm�nda normalde elle manuel �ekilde yapm�� oldu�umuz string ifade aramas�n� bu sefer @ ile ba�layan de�i�kenimizi kullanarak yapm�� olduk.
-- Daha sonra exec ile �a��rarak prosed�r ad�n�n sonunda herhangi bir kelime yazarak m��teri tablosunda dinamik bir arama yapmas�n� sa�lam�� olduk.
CREATE PROCEDURE dbo.SearchCustomer
(
@CustomerName VARCHAR(50)
)
AS
BEGIN
SELECT * FROM Musteriler WHERE MusteriAd  LIKE '%' + @CustomerName +'%'
END

EXEC [dbo].[SearchCustomer] 'yi�it'

-- Northwind veritaban�nda �r�n stok say�s� 45'ten fazla olan ve kategorisi 2 olan �r�nleri listeledi�imiz bir prosed�r yazal�m.
-- Sonra stok say�s�n� 65'ten fazla olan ve kategorisini 4 olan haliyle g�ncelleyelim.
-- sonra da prodesed�r� silelim.
-- Supplier tablosundaki ki�ilerin �nvanlar� arat�larak o �nvandaki kontak ki�ileri listeleyen prosed�r. 

ALTER PROCEDURE dbo.StokDurumu
AS
BEGIN
SELECT * FROM Products WHERE UnitsInStock > 45 AND CategoryID = 2
END

EXEC dbo.StokDurumu


ALTER PROCEDURE dbo.StokDurumu
AS
BEGIN
SELECT * FROM Products WHERE UnitsInStock > 65 AND CategoryID = 4
END

EXEC dbo.StokDurumu

DROP PROCEDURE dbo.StokDurumu

CREATE PROCEDURE dbo.SupplierContact
(
@Isim VARCHAR(50)
)
AS
BEGIN
 SELECT ContactName, ContactTitle From Suppliers WHERE ContactTitle LIKE '%'  + @Isim +'%'
END

EXEC dbo.SupplierContact 'OWNER'
--MOLA

--Manuel veri geri�i �rne�i

CREATE PROCEDURE dbo.VeriGirisManuel
AS
BEGIN
INSERT INTO Personeller (PersonelName, PersonelSurname,Adres)
VALUES ('Fevzi', 'Kemal', 'Bart�n')
END

exec dbo.VeriGirisManuel

-- Gayrimenkul y�netimi veritaban�m�za yeni bir personel giri�i yapan prosed�r� yazal�m (parametreler ile)

ALTER PROCEDURE dbo.PersonelEkle
(
@PersonelAdi VARCHAR(50),
@PersonelSoyadi VARCHAR(50),
@PersonelCinsiyet int
)
AS
BEGIN
INSERT INTO Personeller (PersonelName,PersonelSurname,CinsiyetID)
VALUES (@PersonelAdi,@PersonelSoyadi,@PersonelCinsiyet)
PRINT ('VER� G�R��� BA�ARILI')
--SELECT @PersonelAdi AS PersonelAdi,@PersonelSoyadi AS PersonelSoyAdi ,@PersonelCinsiyet AS PersonelCinsiyet
select TOP 1 PersonelName,PersonelSurname,CinsiyetID FROM Personeller ORDER BY PersonelID DESC
END

EXEC dbo.PersonelEkle 'Seren','Serengil',2

--Personel G�ncelleme Prosed�r�

CREATE PROCEDURE dbo.PersonelGuncelle
(
@PersonelID int,
@YeniAd varchar(50),
@YeniSoyad varchar(50),
@YeniAdres varchar(50)
)
AS
BEGIN
 UPDATE Personeller
 SET PersonelName = @YeniAd, PersonelSurname = @YeniSoyad, Adres = @YeniAdres
 WHERE PersonelID = @PersonelID
 PRINT (@YeniAd + ' ki�isi tabloya eklendi')
END

SELECT * FROM Personeller
EXEC dbo.PersonelGuncelle 7, 'Hande','Er�el','Zeytinburnu'


--Personel Silme Prosed�r� 

ALTER PROCEDURE dbo.PersonelSil
(
@PersonelID int
)
AS
BEGIN
 DELETE FROM Personeller WHERE PersonelID = @PersonelID
 select * from Personeller
 print (CONVERT(VARCHAR(50),@PersonelID) + ' idsine sahip olan �irket personeli silinmi�tir.')
 
END

SELECT * FROM Personeller
EXEC dbo.PersonelSil 7


-- NW veritaban�nda kullan�c�dan gelen ucuz ya da pahal� parametresine g�re en pahal� ya da en ucuz 5 �r�n� listeleyen prosed�r� yazal�m ucuz ya da pahal� d���nda bir �ey yazarsa da do�ru bir ifade girin uyar�s� gelsin.

CREATE PROC dbo.PahaliUcuzSirala
@giris varchar(50)
as 
BEGIN

	IF(@giris = 'UCUZ')
	BEGIN
	SELECT TOP 5 ProductName, UnitPrice
	FROM Products
	ORDER BY UnitPrice ASC
	END

	ELSE IF(@giris = 'PAHALI')
	BEGIN 
	SELECT TOP 5 ProductName, UnitPrice
	FROM Products
	ORDER BY UnitPrice DESC
	END

	ELSE
	BEGIN
	PRINT (@giris + ' b�yle bir ifade mi var???')
	END

END

exec dbo.PahaliUcuzSiralaaaa 'ORTA �EKER'



-- NW veritaban�nda stok adeti belirtilen de�erden k���k ve e�it olan ayn� zamanda kategori ID'si belirttiniz de�er olan �r�nleri listeleyen prosed�r

CREATE PROC dbo.StokKategori
(
@KategoriID int,
@StokMiktar int
)
AS

BEGIN

SELECT ProductName, CategoryID, UnitsInStock
FROM Products
WHERE UnitsInStock <= @StokMiktar AND CategoryID = @KategoriID

END

EXEC dbo.StokKategori 1, 30

-- Kullan�c�n�n girdi�i ay numaras�na g�re yani aylara g�re sat�lan �r�n isimleri listeleyen prosed�r� yazal�m.

ALTER PROC dbo.AylaraGoreSatis
(
@Ay int
)
AS
BEGIN
SELECT O.OrderDate AS Tarih, P.ProductName
FROM [Order Details] as od
JOIN Orders AS O ON od.OrderID = o.OrderID
JOIN Products AS P on od.ProductID = p.ProductID
WHERE MONTH(O.OrderDate) = @Ay
END

exec dbo.AylaraGoreSatis 4


