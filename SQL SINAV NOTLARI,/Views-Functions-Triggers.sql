-- SQL VIEWS
-- DB'de istedi�imiz zaman dilimlerinde tablolar� istedi�imiz sorgu bi�imine g�re �a��rabildi�imiz, �e�itli ama�larca kullan�lan ( �rne�in kullan�c� yetkisine g�re tablolar�n istenen k�s�mlar�na eri�ilmesine imkan sa�lamak amac�yla ) sql yap�s�d�r.
--compile i�lemi sadece bir kere yap�l�r bunun amac� da sorgunun do�ru olup olmad���n� kontrol etmek i�indir. 
-- view'larda veri tutulmaz. sadece g�sterim sa�lar. 

-- olu�turulurken yine ddl komutlar� kullan�lmaktad�r. 
--s�z dizimi �u �ekildedir;
--CREATE VIEW viewad�
--as
--sorgu

-- t�m sipari�leri getiren bir view tan�mlayal�m.
use NORTHWND

CREATE VIEW view_SiparisGetir
AS
SELECT * FROM 
[Order Details]

-- �A�IRMAK ���N YEN� B�R SORGU YAPARCASINA FROM B�L�M�NE EKLENEB�LMEKTED�R

SELECT * FROM view_SiparisGetir

--�imdi bu view tablosunu g�ncelleyelim. Sipari� Detay tablosundaki �r�nlerin isimlerini ve order �dleri getirelim.

ALTER VIEW view_SiparisGetir
as
select od.OrderID, p.ProductName
from [Order Details] AS OD
join Products AS P ON od.ProductID = p.ProductID

select * from view_SiparisGetir

-- brezilyal� m��teirleri g�steren bir view yazal�m

CREATE VIEW view_BrazillianCustomers
as
select CustomerID,CompanyName from Customers WHERE Country = 'Brazil'

select * from view_BrazillianCustomers

-- amerikal� m��terilerin adedini g�steren tablo(view)

CREATE VIEW view_AmerikaliMusterileriGoster
AS
SELECT COUNT(*) AS MusteriMiktari, Country
from Customers
WHERE Country =  'USA'
GROUP BY Country

SELECT * FROM view_AmerikaliMusterileriGoster
---------------------------------------------------------
-- SQL FUNCTIONS

-- �STENEN DE�ER T�PLER�NDE D�N�� SA�LAYAN SQL KOD BLOKLARI.
--GER�YE SAB�T DE�ER D�ND�REB�L�RLER, GER�YE TABLO D�ND�REB�L�RLER, GER�YE SORGU D�ND�REB�L�RLER.

-- STORED PROSED�RLER VE FONKS�YONLAR ARASINDAK� FARKLAR
-- FONKS�YONLAR HER ZAMAN B�R DE�ER D�ND�R�RLER ( SAYILAR, STRING IFADELER, TABLOLAR D�ND�RMELER� M�MK�ND�R) FAKAT STORED PROSED�RLER GER� B�R DE�ER D�ND�REB�L�R DE D�ND�RMEYEB�L�R DE.
--FONKS�YONLAR STORED PROCEDURELAR TARAFINDAN �ALI�TIRILAB�L�RLER, FAKAT SP'LER FONKS�YONLAR ��ER�S�NDE �A�IRILAMAZLAR. 
-- FONKS�YONLAR ��ER�S�NDE CRUD ��LEMLER� YAPILMAZ, SADECE SELECT �FADELER� ���N UYGUNDUR. FAKT DAHA �NCE G�RD���M�Z �RNEKLERDEK� G�B� SP'LERDE T�M CRUD ��LEMLER� YAPILMAKTADIR. 
-- FONKS�YONLAR �LE D�ND�RM�� OLDU�UMUZ B�R TABLOYU JO�N �FADES� ��ER�S�NDE KULLANAB�L�R�Z FAKAT SPLER �LE D�ND�R�LEN TABLOLARDA BU M�MK�N DE��LD�R. 

-- TABLO D�ND�REN FUNCTION SYNTAX�

-- CREATE FUNCTION functionname (@param1 datatype, @param2 datatype)
-- RETURNS TABLE
-- AS
--RETURN 
-- SQL �FADELER� -- KOD BLOKLARI VS

-- DE�ER D�ND�REN FUNCTION SYNTAXI
--CREATE FUNCTION functionismi (@param_1 datatype, @param2 datatype)
-- RETURNS returntype
-- AS
--BEGIN
-- SQL IFADELERI KOD BLOKLARI VS
--END


-- �rnek olarak �r�nler tablosunda stok de�eri girilen de�ere g�re bize bir tablo d�nd�ren fonksiyonu yazal�m
CREATE FUNCTION StokUrunFunc (@miktar int)
RETURNS TABLE
AS
RETURN
SELECT * FROM Products WHERE UnitsInStock <= @miktar

select * from StokUrunFunc(5)

-- kullan�c�n�n girdi�i isim ve soy ismi full name haline getiren de�er d�nd�ren bir fonksiyon yazal�m.


CREATE FUNCTION fn_MakeFullName (@name varchar(50), @soyad varchar(50))
 RETURNS varchar(50)
 AS
BEGIN
 RETURN @name + ' ' + @soyad
END

select [dbo].[fn_MakeFullName] ('barbaros','ciga') AS TamAd


CREATE FUNCTION fn_AralikliFiyatUrun (@fiyat1 int, @fiyat2 int)
RETURNS TABLE
AS
RETURN SELECT * FROM Products WHERE UnitPrice BETWEEN @fiyat1 and @fiyat2

select * from fn_AralikliFiyatUrun(50,260)


--TRIGGERLAR
--T�rk�e kar��l��� gibi belirli bir olay ger�ekle�ti�inde tetiklenmesini istedi�imiz durumlar� ya da operasyonlar� bildirdi�imiz bir yap�d�r.

-- triggerlar her d�zeyde yap�labiliyor olup genel olarak data katman�nda triggerlar kullan�lmaktad�r. yani dml �l�e�inde kullanmaktay�z. 
-- DML Triggerlar  insert update delete i�lemleri ger�ekle�ti�inde devreye koydu�umuz �zellikleri ta��rlar. 
-- �rne�in bir insert i�lemi ger�ekle�ti�i zaman ram bellekte ge�ici olarak bir inserted isminde tablo olu�ur ve insert i�lemi ge�ici olarak sorgu bitene kadar burada tutulur.
-- e�er bir delete i�lemi ger�ekle�tiriliyorsa yine ram bellekte ge�ici bir deleted tablosu olu�turulur ve silinen data burada silinme i�lemi tamamlanana kadar saklan�r. 
-- e�er ki bir update i�lemi ger�ekle�iyorsa bir updated tablosu olu�maz. ��nk� update i�lemi �z�nde bir delete ve insert i�lemi birle�imidir. de�i�tirilen veri de�i�meden �nceki hali deleted b�l�m�nde de�i�im sonras� hali inserted i�erisinde update finalize olana kadar tutulur. 
-- bu arkaplanda tutulan tablolara eri�imimiz ve �rne�in select sorgusu gibi sorgular yapbilme imkan�m�z bulunmaktad�r. 

-- iki �e�it trigger�m�z bulunmaktad�r.
-- birincisi olay olayduktan sonra ger�ekle�enler ( after trigger )
-- ikincisi de istenen olay yerine ger�ekle�ecekler ( instead of trigger)

-- syntax
-- CREATE TRIGGER --triggeradi
-- ON table_name
-- AFTER (INSERT,UPDATE,DELETE)
-- AS
-- KOD BLOKLARI

use GayrimenkulYonetim
CREATE TRIGGER UyariVer
on Personeller
AFTER DELETE
as
PRINT 'B�R PERSONEL S�L�NM��T�R'

select * from Personeller

DELETE
FROM Personeller
WHERE PersonelID = 8

--NORTHWIND VERITABANI �ZER�NDE �R�NLER�N F�YATINI HER B�R INSERT ��LEM� SONRASINDA 50 B�R�M ARTTIRAN B�R TRIGGER YAZALIM

CREATE TRIGGER fiyatArttir
ON Products
AFTER INSERT
AS
UPDATE Products SET UnitPrice += 50
SELECT ProductName, UnitPrice
FROM Products

select * from Products

INSERT INTO Products (ProductName)
values ('Kaday�f')

-- RAM BELLEKTE OLU�AN GE��C� B�LG�LER�N KULLANILMASI

use GayrimenkulYonetim
CREATE TABLE KayitTablosu
(
KayitID int identity (1,1) primary key,
KayitDescription varchar(500)
)


-- bu �rnekte bir personel silindi�i zaman dedvreye girecek olan bir trigger yaz�lm��t�r. Fakat hangi personelin silindi�ini bilemedi�imiz i�in kay�t tablomuzda o ismin ge�mesini sa�layabilmek ad�na de�i�kenler kulland�k. ve bu de�i�kenler vas�tas�yla silinenler(deleted) tablosundan isimlerini i�lem tamalanmadan �ekmi� ve istedi�imiz yere insert etmi� olduk.
CREATE TRIGGER KayitTrigger
ON Personeller
AFTER DELETE
AS
DECLARE @CalisanAdi varchar(50), @CalisanSoyadi varchar(50)
SELECT @CalisanAdi = PersonelName, @CalisanSoyadi = PersonelSurname
FROM deleted
INSERT INTO KayitTablosu (KayitDescription) 
VALUES ('�smi: ' + @CalisanAdi + ' Soyismi' + @CalisanSoyadi + ' olan kullanici silinmi�tir.')

DELETE
FROM Personeller
WHERE PersonelID = 10

-- PERSONEL TABLOSUNDA �S�M VE SOY�SM� G�NCELLENEN PERSONEL�N �SM�N�N �NCEK� VE SONRAK� HAL�N� KAYIT TABLOSUNA YAZDIRAN KOD BLO�UNU YAZINIZ.

CREATE TRIGGER IsimGuncelle
ON Personeller
AFTER UPDATE
AS
DECLARE @EskiAdi varchar(50), @YeniAdi varchar(50)
SELECT @EskiAdi = PersonelName from deleted
SELECT @YeniAdi = PersonelName from inserted
INSERT INTO KayitTablosu (KayitDescription)
VALUES ('Eski ismi: ' + @EskiAdi + ' olan ki�inin yeni ad�: ' + @YeniAdi +' olarak g�ncellenmi�tir.')
PRINT 'guncelleme ba�ar�l�'

update Personeller SET PersonelName = 'Enes' WHERE PersonelID = 9



