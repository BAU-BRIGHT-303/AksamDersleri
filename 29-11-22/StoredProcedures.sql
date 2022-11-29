-- STORED PROCEDURE --

-- Genellikle rutinleþen iþlemlerin kolay bir biçimde önden hazýrlanarak gerçekleþtirilebilmesine imkan veren kod bloklarý.
--Ýlk kez çalýþtýrýldýklarý zaman derlenirler. Daha sonra çalýþtýrýldýklarýnda tekrar derlenme durumlarý söz konusu deðildir. Haliyle performans kazancý saðlanmaktadýr.
-- Kaydedilebilen ve tekrar çaðrýlabilen sql kod bloklarý olarak tanýmlayabiliriz. 
-- Tanýmlama yapýlýp kaydedildikten sonra EXEC keywordu ile çaðrýlmaktadýr.

-- Yine DDL komutlarýný prosedür oluþtururken kullanabilmekteyiz.

--Söz dizimi
CREATE PROCEDURE dbo.Selamlama
AS
BEGIN
 SELECT 'SELAMLAR'
END

--Prosedürü oluþturmuþ olduðumuz veritabaný üzerinde programmability klasörü içerisinde sotred procedures içerisinde kaydetmiþ olduðumuz ismi ile görüntüleyebilmekteyiz..

--Þimdi prosedürü çaðýralým
EXEC [dbo].[Selamlama]

-- Diyelim ki bu prosedürde bir deðiþiklik ihtiyacýmýz var örneðin select komutunu deðil de ekrana yazdýrma komutunu kullanmak istedik.

ALTER PROCEDURE dbo.Selamlama
AS
BEGIN
 PRINT('SELAMLAR')
END

EXEC dbo.Selamlama

-- Gayrýmenkül yönetim sistemimiz üzerinde isim aratarak daha doðrusu ismi parametre olarak göndererek arama yapan ve bize sonuç dönen bir prosedür yazalým.
use GayrimenkulYonetim


-- bu örnekte gerçekçi bir prosedür örneði tanýmladýk. Amacýmýz sorguyu yapacak kiþiye dinamik bir aratma yöntemi ile baþtan sorguyu yazmakla uðraþmadan sadece bu sorgunun yer aldýðý prosedürü çaðýrarak prosedürde isim aramasýný parametre þeklinde girmesini saðlamaktý.
-- bunun için önce prosedürümüzün imzasýnýn altýn parantez içince @ ifadesi kullanarak hayali bir deðiþken ismi tanýmladýk. sonra kod bloklarýmýzýn bulunduðu begin ve end arasýnda sorgu kýsmýnda normalde elle manuel þekilde yapmýþ olduðumuz string ifade aramasýný bu sefer @ ile baþlayan deðiþkenimizi kullanarak yapmýþ olduk.
-- Daha sonra exec ile çaðýrarak prosedür adýnýn sonunda herhangi bir kelime yazarak müþteri tablosunda dinamik bir arama yapmasýný saðlamýþ olduk.
CREATE PROCEDURE dbo.SearchCustomer
(
@CustomerName VARCHAR(50)
)
AS
BEGIN
SELECT * FROM Musteriler WHERE MusteriAd  LIKE '%' + @CustomerName +'%'
END

EXEC [dbo].[SearchCustomer] 'yiðit'

-- Northwind veritabanýnda ürün stok sayýsý 45'ten fazla olan ve kategorisi 2 olan ürünleri listelediðimiz bir prosedür yazalým.
-- Sonra stok sayýsýný 65'ten fazla olan ve kategorisini 4 olan haliyle güncelleyelim.
-- sonra da prodesedürü silelim.
-- Supplier tablosundaki kiþilerin ünvanlarý aratýlarak o ünvandaki kontak kiþileri listeleyen prosedür. 

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

--Manuel veri geriþi örneði

CREATE PROCEDURE dbo.VeriGirisManuel
AS
BEGIN
INSERT INTO Personeller (PersonelName, PersonelSurname,Adres)
VALUES ('Fevzi', 'Kemal', 'Bartýn')
END

exec dbo.VeriGirisManuel

-- Gayrimenkul yönetimi veritabanýmýza yeni bir personel giriþi yapan prosedürü yazalým (parametreler ile)

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
PRINT ('VERÝ GÝRÝÞÝ BAÞARILI')
--SELECT @PersonelAdi AS PersonelAdi,@PersonelSoyadi AS PersonelSoyAdi ,@PersonelCinsiyet AS PersonelCinsiyet
select TOP 1 PersonelName,PersonelSurname,CinsiyetID FROM Personeller ORDER BY PersonelID DESC
END

EXEC dbo.PersonelEkle 'Seren','Serengil',2

--Personel Güncelleme Prosedürü

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
 PRINT (@YeniAd + ' kiþisi tabloya eklendi')
END

SELECT * FROM Personeller
EXEC dbo.PersonelGuncelle 7, 'Hande','Erçel','Zeytinburnu'


--Personel Silme Prosedürü 

ALTER PROCEDURE dbo.PersonelSil
(
@PersonelID int
)
AS
BEGIN
 DELETE FROM Personeller WHERE PersonelID = @PersonelID
 select * from Personeller
 print (CONVERT(VARCHAR(50),@PersonelID) + ' idsine sahip olan þirket personeli silinmiþtir.')
 
END

SELECT * FROM Personeller
EXEC dbo.PersonelSil 7


-- NW veritabanýnda kullanýcýdan gelen ucuz ya da pahalý parametresine göre en pahalý ya da en ucuz 5 ürünü listeleyen prosedürü yazalým ucuz ya da pahalý dýþýnda bir þey yazarsa da doðru bir ifade girin uyarýsý gelsin.

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
	PRINT (@giris + ' böyle bir ifade mi var???')
	END

END

exec dbo.PahaliUcuzSiralaaaa 'ORTA ÞEKER'



-- NW veritabanýnda stok adeti belirtilen deðerden küçük ve eþit olan ayný zamanda kategori ID'si belirttiniz deðer olan ürünleri listeleyen prosedür

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

-- Kullanýcýnýn girdiði ay numarasýna göre yani aylara göre satýlan ürün isimleri listeleyen prosedürü yazalým.

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


