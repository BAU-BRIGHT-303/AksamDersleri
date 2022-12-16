use NORTHWND 
-- bu use kullanýmý ile çalýþmak istediðimiz veritabanýný seçiyoruz.

-- T-SQL --> Transact SQL Dili -- Temel Sorgular

--SELECT ifadesi
-- Bu ifade okunmak istenen veriyi kullanýcýya sunmaktadýr. Veri bir tabloda ise o tabloya giden yolu yazarýz. 
-- Fakat aþaðýdaki örnekte sadece okutmak istediðimiz datayý manuel þekilde girmiþ olduk. 
SELECT 'Barbaros'
PRINT 'Barbaros' -- message box olarak istenen veriyi gösterme. 

-- Çoklu kolonlarda datalarýmýzý göstermek için virgüller ile ayýrmaktayýz.

SELECT 3,5,2

-- Dosya yolu girerek sorgulama ( Yani ilgili tabloya gidip ilgili verileri çekmek )

-- Tabloya gidip tüm datalarý çekmek için * ifadesi kullanýlýr fakat bu ifade tüm satýr ve tüm sütunlarda gezeceði için performasý kötü etkileyecek bir komuttur. Bu sebeple bizim daha spesifik bir sorgu yapmamýz uygundur.
SELECT * FROM Employees

-- Istediðimiz sütundan istediðimiz datalarý çektik.
SELECT CategoryName
FROM Categories

-- Sanal sütun adý ( alias ) atamak.
-- Örneðin burada sorgumuzun sonucunun boþ bir kolonda durmasýndansa hayali bir sütun adý vererek komut sonucunun daa derli toplu gözükmesini saðlamýþ olduk.
SELECT 30 AS Sayi
-- boþluklu ifadelerde köþeli parantez kullanýmý gerekmektedir.
SELECT FirstName AS [Ýlk Ýsmi]
FROM Employees


-- KOÞUL ÝFADELERÝ (WHERE)

SELECT * FROM Employees

SELECT * 
FROM Employees
WHERE City = 'London'

-- Ýspanyada yaþayan müþterilerin þirket adý adresi þehri ve kontakt kiþisini gösteren bir komut yazalým.
SELECT CompanyName, Address, City, ContactName
FROM Customers
WHERE Country = 'Spain'

-- Portekizde olmayan müþterileri gösterelim
select *
from Customers 
where Country != 'Portugal'

-- ülkesi almanya ya da ispanya olan müþterileri listeleyelim.
select * from Customers
WHERE Country = 'Germany' OR 
Country = 'Spain' 
-- faxýný bilmediðimiz müþterileri listeleyelim.
SELECT *
FROM Customers
WHERE Fax IS NULL
-- 
SELECT * FROM Products

-- baþ harfi s ile baþlayan ürünleri listeleyelim
SELECT ProductName
FROM Products
WHERE ProductName LIKE 's%'
-- adý a ile baþlayan personellerin ad soyad ve doðum tarihini listeleyelim
SELECT FirstName, LastName, BirthDate
FROM Employees
WHERE FirstName LIKE 'a%'
-- ismi içerisinde restaurant geçen müþterilerin listesini çekelim.
select *
from Customers
where CompanyName like '%restaurant%'

-- müþterilerimizi ülkelerine göre sýralayalým
select  Country, CompanyName
from Customers
order by Country

-- ürünleri pahalýdan aza sýralayalým.
SELECT ProductName, UnitPrice
FROM Products
order by UnitPrice DESC

SELECT * FROM Products

-- Katgorisi 3 olan kaç adet ürün bulunmaktadýr?
select * from products
where CategoryID = '3'
select count(*) AS [Product Quantity in Category No 3]
from Products
WHERE CategoryID = '3'
-- en pahalý 3 ürün
select top 3 ProductName, UnitPrice
from Products
order by UnitPrice desc

-- ürünlerimizin toplam maliyetleri ne kadardýr??
select UnitPrice, Quantity
from [Order Details]
select SUM(UnitPrice * Quantity) AS [Toplam Maliyet]
from [Order Details]


---900 adetten fazla satýlan ürünler?
select ProductID, sum(quantity)
from [Order Details]
group by ProductID
HAVING sum(quantity)>900

--- hangi kategoride toplam kaç adet ürün bulunuyor?

select CategoryID, count(CategoryID)
from Products
group by CategoryID


---hangi sipariþte toplam ne kadar kazanýlmýþ?

select OrderID, sum(quantity*unitprice) AS ToplamKazanç
from [Order Details]
group by OrderID

--JOIN MESELESÝ

SELECT * FROM Employees
select * from Orders

select * from Employees, Orders

-- JOIN syntaxi

-- select tablo_adi.sutunadi
-- from tablo_x
-- (inner join, left join, right join) tablo_y
--ON tablo_x.sutunadi = tablo_y.sutunadi

--Hangi ürünümüz hangi kategoridedir. Bu sorudaki amacýmýz ürün listeleri içerisinde kategorilere eriþip o kategorinin adýný yazmaktýr.

SELECT P.ProductName , C.CategoryName
	FROM Products AS P
		INNER JOIN Categories AS C 
			ON C.CategoryID = P.CategoryID

-- Hangi sipariþ hangi kargo þirketi ile ne zaman gönderilmektedir???

select S.ShipperID, S.CompanyName, FORMAT(O.ShippedDate, 'd', 'tr-TR')
from Shippers AS S
INNER JOIN Orders AS O
on S.ShipperID = O.ShipVia
ORDER BY S.ShipperID

-- çalýþanlara göre toplam siparisleri gösterelim. Çalýþan ad ve soyad birleþtirelim

SELECT E.EmployeeID, E.FirstName + ' ' + E.LastName AS AdSoyad, COUNT(*) AS SatisMiktari
FROM Employees AS E
INNER JOIN Orders AS O
ON E.EmployeeID = o.EmployeeID
GROUP BY E.EmployeeID, E.FirstName + ' ' + E.LastName
ORDER BY E.EmployeeID


-- En çok 3 sipariþi alan çalýþan ?
select top 3 e.FirstName + ' ' + e.LastName AS Employee, COUNT(e.EmployeeID) as [Sipariþ Miktarý]
from Employees as e
inner join Orders AS o on e.EmployeeID = o.EmployeeID
group by e.FirstName + ' ' + e.LastName
order by [Sipariþ Miktarý] desc



-- Hangi ürün hangi kategoridedir ve ürünün tedarikçisi kimdir?
SELECT P.ProductName, C.CategoryName, S.CompanyName
FROM Products AS p
INNER JOIN Categories AS C ON C.CategoryID = P.CategoryID
INNER JOIN Suppliers AS S ON S.SupplierID = P.SupplierID
ORDER BY P.ProductName








