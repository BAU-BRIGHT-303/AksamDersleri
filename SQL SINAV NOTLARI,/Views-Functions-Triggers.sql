-- SQL VIEWS
-- DB'de istediðimiz zaman dilimlerinde tablolarý istediðimiz sorgu biçimine göre çaðýrabildiðimiz, çeþitli amaçlarca kullanýlan ( örneðin kullanýcý yetkisine göre tablolarýn istenen kýsýmlarýna eriþilmesine imkan saðlamak amacýyla ) sql yapýsýdýr.
--compile iþlemi sadece bir kere yapýlýr bunun amacý da sorgunun doðru olup olmadýðýný kontrol etmek içindir. 
-- view'larda veri tutulmaz. sadece gösterim saðlar. 

-- oluþturulurken yine ddl komutlarý kullanýlmaktadýr. 
--söz dizimi þu þekildedir;
--CREATE VIEW viewadý
--as
--sorgu

-- tüm sipariþleri getiren bir view tanýmlayalým.
use NORTHWND

CREATE VIEW view_SiparisGetir
AS
SELECT * FROM 
[Order Details]

-- ÇAÐIRMAK ÝÇÝN YENÝ BÝR SORGU YAPARCASINA FROM BÖLÜMÜNE EKLENEBÝLMEKTEDÝR

SELECT * FROM view_SiparisGetir

--Þimdi bu view tablosunu güncelleyelim. Sipariþ Detay tablosundaki ürünlerin isimlerini ve order ýdleri getirelim.

ALTER VIEW view_SiparisGetir
as
select od.OrderID, p.ProductName
from [Order Details] AS OD
join Products AS P ON od.ProductID = p.ProductID

select * from view_SiparisGetir

-- brezilyalý müþteirleri gösteren bir view yazalým

CREATE VIEW view_BrazillianCustomers
as
select CustomerID,CompanyName from Customers WHERE Country = 'Brazil'

select * from view_BrazillianCustomers

-- amerikalý müþterilerin adedini gösteren tablo(view)

CREATE VIEW view_AmerikaliMusterileriGoster
AS
SELECT COUNT(*) AS MusteriMiktari, Country
from Customers
WHERE Country =  'USA'
GROUP BY Country

SELECT * FROM view_AmerikaliMusterileriGoster
---------------------------------------------------------
-- SQL FUNCTIONS

-- ÝSTENEN DEÐER TÝPLERÝNDE DÖNÜÞ SAÐLAYAN SQL KOD BLOKLARI.
--GERÝYE SABÝT DEÐER DÖNDÜREBÝLÝRLER, GERÝYE TABLO DÖNDÜREBÝLÝRLER, GERÝYE SORGU DÖNDÜREBÝLÝRLER.

-- STORED PROSEDÜRLER VE FONKSÝYONLAR ARASINDAKÝ FARKLAR
-- FONKSÝYONLAR HER ZAMAN BÝR DEÐER DÖNDÜRÜRLER ( SAYILAR, STRING IFADELER, TABLOLAR DÖNDÜRMELERÝ MÜMKÜNDÜR) FAKAT STORED PROSEDÜRLER GERÝ BÝR DEÐER DÖNDÜREBÝLÝR DE DÖNDÜRMEYEBÝLÝR DE.
--FONKSÝYONLAR STORED PROCEDURELAR TARAFINDAN ÇALIÞTIRILABÝLÝRLER, FAKAT SP'LER FONKSÝYONLAR ÝÇERÝSÝNDE ÇAÐIRILAMAZLAR. 
-- FONKSÝYONLAR ÝÇERÝSÝNDE CRUD ÝÞLEMLERÝ YAPILMAZ, SADECE SELECT ÝFADELERÝ ÝÇÝN UYGUNDUR. FAKT DAHA ÖNCE GÖRDÜÐÜMÜZ ÖRNEKLERDEKÝ GÝBÝ SP'LERDE TÜM CRUD ÝÞLEMLERÝ YAPILMAKTADIR. 
-- FONKSÝYONLAR ÝLE DÖNDÜRMÜÞ OLDUÐUMUZ BÝR TABLOYU JOÝN ÝFADESÝ ÝÇERÝSÝNDE KULLANABÝLÝRÝZ FAKAT SPLER ÝLE DÖNDÜRÜLEN TABLOLARDA BU MÜMKÜN DEÐÝLDÝR. 

-- TABLO DÖNDÜREN FUNCTION SYNTAXÝ

-- CREATE FUNCTION functionname (@param1 datatype, @param2 datatype)
-- RETURNS TABLE
-- AS
--RETURN 
-- SQL ÝFADELERÝ -- KOD BLOKLARI VS

-- DEÐER DÖNDÜREN FUNCTION SYNTAXI
--CREATE FUNCTION functionismi (@param_1 datatype, @param2 datatype)
-- RETURNS returntype
-- AS
--BEGIN
-- SQL IFADELERI KOD BLOKLARI VS
--END


-- örnek olarak ürünler tablosunda stok deðeri girilen deðere göre bize bir tablo döndüren fonksiyonu yazalým
CREATE FUNCTION StokUrunFunc (@miktar int)
RETURNS TABLE
AS
RETURN
SELECT * FROM Products WHERE UnitsInStock <= @miktar

select * from StokUrunFunc(5)

-- kullanýcýnýn girdiði isim ve soy ismi full name haline getiren deðer döndüren bir fonksiyon yazalým.


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
--Türkçe karþýlýðý gibi belirli bir olay gerçekleþtiðinde tetiklenmesini istediðimiz durumlarý ya da operasyonlarý bildirdiðimiz bir yapýdýr.

-- triggerlar her düzeyde yapýlabiliyor olup genel olarak data katmanýnda triggerlar kullanýlmaktadýr. yani dml ölçeðinde kullanmaktayýz. 
-- DML Triggerlar  insert update delete iþlemleri gerçekleþtiðinde devreye koyduðumuz özellikleri taþýrlar. 
-- Örneðin bir insert iþlemi gerçekleþtiði zaman ram bellekte geçici olarak bir inserted isminde tablo oluþur ve insert iþlemi geçici olarak sorgu bitene kadar burada tutulur.
-- eðer bir delete iþlemi gerçekleþtiriliyorsa yine ram bellekte geçici bir deleted tablosu oluþturulur ve silinen data burada silinme iþlemi tamamlanana kadar saklanýr. 
-- eðer ki bir update iþlemi gerçekleþiyorsa bir updated tablosu oluþmaz. çünkü update iþlemi özünde bir delete ve insert iþlemi birleþimidir. deðiþtirilen veri deðiþmeden önceki hali deleted bölümünde deðiþim sonrasý hali inserted içerisinde update finalize olana kadar tutulur. 
-- bu arkaplanda tutulan tablolara eriþimimiz ve örneðin select sorgusu gibi sorgular yapbilme imkanýmýz bulunmaktadýr. 

-- iki çeþit triggerýmýz bulunmaktadýr.
-- birincisi olay olayduktan sonra gerçekleþenler ( after trigger )
-- ikincisi de istenen olay yerine gerçekleþecekler ( instead of trigger)

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
PRINT 'BÝR PERSONEL SÝLÝNMÝÞTÝR'

select * from Personeller

DELETE
FROM Personeller
WHERE PersonelID = 8

--NORTHWIND VERITABANI ÜZERÝNDE ÜRÜNLERÝN FÝYATINI HER BÝR INSERT ÝÞLEMÝ SONRASINDA 50 BÝRÝM ARTTIRAN BÝR TRIGGER YAZALIM

CREATE TRIGGER fiyatArttir
ON Products
AFTER INSERT
AS
UPDATE Products SET UnitPrice += 50
SELECT ProductName, UnitPrice
FROM Products

select * from Products

INSERT INTO Products (ProductName)
values ('Kadayýf')

-- RAM BELLEKTE OLUÞAN GEÇÝCÝ BÝLGÝLERÝN KULLANILMASI

use GayrimenkulYonetim
CREATE TABLE KayitTablosu
(
KayitID int identity (1,1) primary key,
KayitDescription varchar(500)
)


-- bu örnekte bir personel silindiði zaman dedvreye girecek olan bir trigger yazýlmýþtýr. Fakat hangi personelin silindiðini bilemediðimiz için kayýt tablomuzda o ismin geçmesini saðlayabilmek adýna deðiþkenler kullandýk. ve bu deðiþkenler vasýtasýyla silinenler(deleted) tablosundan isimlerini iþlem tamalanmadan çekmiþ ve istediðimiz yere insert etmiþ olduk.
CREATE TRIGGER KayitTrigger
ON Personeller
AFTER DELETE
AS
DECLARE @CalisanAdi varchar(50), @CalisanSoyadi varchar(50)
SELECT @CalisanAdi = PersonelName, @CalisanSoyadi = PersonelSurname
FROM deleted
INSERT INTO KayitTablosu (KayitDescription) 
VALUES ('Ýsmi: ' + @CalisanAdi + ' Soyismi' + @CalisanSoyadi + ' olan kullanici silinmiþtir.')

DELETE
FROM Personeller
WHERE PersonelID = 10

-- PERSONEL TABLOSUNDA ÝSÝM VE SOYÝSMÝ GÜNCELLENEN PERSONELÝN ÝSMÝNÝN ÖNCEKÝ VE SONRAKÝ HALÝNÝ KAYIT TABLOSUNA YAZDIRAN KOD BLOÐUNU YAZINIZ.

CREATE TRIGGER IsimGuncelle
ON Personeller
AFTER UPDATE
AS
DECLARE @EskiAdi varchar(50), @YeniAdi varchar(50)
SELECT @EskiAdi = PersonelName from deleted
SELECT @YeniAdi = PersonelName from inserted
INSERT INTO KayitTablosu (KayitDescription)
VALUES ('Eski ismi: ' + @EskiAdi + ' olan kiþinin yeni adý: ' + @YeniAdi +' olarak güncellenmiþtir.')
PRINT 'guncelleme baþarýlý'

update Personeller SET PersonelName = 'Enes' WHERE PersonelID = 9



