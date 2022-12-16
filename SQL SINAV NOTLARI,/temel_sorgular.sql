use NORTHWND 
-- bu use kullan�m� ile �al��mak istedi�imiz veritaban�n� se�iyoruz.

-- T-SQL --> Transact SQL Dili -- Temel Sorgular

--SELECT ifadesi
-- Bu ifade okunmak istenen veriyi kullan�c�ya sunmaktad�r. Veri bir tabloda ise o tabloya giden yolu yazar�z. 
-- Fakat a�a��daki �rnekte sadece okutmak istedi�imiz datay� manuel �ekilde girmi� olduk. 
SELECT 'Barbaros'
PRINT 'Barbaros' -- message box olarak istenen veriyi g�sterme. 

-- �oklu kolonlarda datalar�m�z� g�stermek i�in virg�ller ile ay�rmaktay�z.

SELECT 3,5,2

-- Dosya yolu girerek sorgulama ( Yani ilgili tabloya gidip ilgili verileri �ekmek )

-- Tabloya gidip t�m datalar� �ekmek i�in * ifadesi kullan�l�r fakat bu ifade t�m sat�r ve t�m s�tunlarda gezece�i i�in performas� k�t� etkileyecek bir komuttur. Bu sebeple bizim daha spesifik bir sorgu yapmam�z uygundur.
SELECT * FROM Employees

-- Istedi�imiz s�tundan istedi�imiz datalar� �ektik.
SELECT CategoryName
FROM Categories

-- Sanal s�tun ad� ( alias ) atamak.
-- �rne�in burada sorgumuzun sonucunun bo� bir kolonda durmas�ndansa hayali bir s�tun ad� vererek komut sonucunun daa derli toplu g�z�kmesini sa�lam�� olduk.
SELECT 30 AS Sayi
-- bo�luklu ifadelerde k��eli parantez kullan�m� gerekmektedir.
SELECT FirstName AS [�lk �smi]
FROM Employees


-- KO�UL �FADELER� (WHERE)

SELECT * FROM Employees

SELECT * 
FROM Employees
WHERE City = 'London'

-- �spanyada ya�ayan m��terilerin �irket ad� adresi �ehri ve kontakt ki�isini g�steren bir komut yazal�m.
SELECT CompanyName, Address, City, ContactName
FROM Customers
WHERE Country = 'Spain'

-- Portekizde olmayan m��terileri g�sterelim
select *
from Customers 
where Country != 'Portugal'

-- �lkesi almanya ya da ispanya olan m��terileri listeleyelim.
select * from Customers
WHERE Country = 'Germany' OR 
Country = 'Spain' 
-- fax�n� bilmedi�imiz m��terileri listeleyelim.
SELECT *
FROM Customers
WHERE Fax IS NULL
-- 
SELECT * FROM Products

-- ba� harfi s ile ba�layan �r�nleri listeleyelim
SELECT ProductName
FROM Products
WHERE ProductName LIKE 's%'
-- ad� a ile ba�layan personellerin ad soyad ve do�um tarihini listeleyelim
SELECT FirstName, LastName, BirthDate
FROM Employees
WHERE FirstName LIKE 'a%'
-- ismi i�erisinde restaurant ge�en m��terilerin listesini �ekelim.
select *
from Customers
where CompanyName like '%restaurant%'

-- m��terilerimizi �lkelerine g�re s�ralayal�m
select  Country, CompanyName
from Customers
order by Country

-- �r�nleri pahal�dan aza s�ralayal�m.
SELECT ProductName, UnitPrice
FROM Products
order by UnitPrice DESC

SELECT * FROM Products

-- Katgorisi 3 olan ka� adet �r�n bulunmaktad�r?
select * from products
where CategoryID = '3'
select count(*) AS [Product Quantity in Category No 3]
from Products
WHERE CategoryID = '3'
-- en pahal� 3 �r�n
select top 3 ProductName, UnitPrice
from Products
order by UnitPrice desc

-- �r�nlerimizin toplam maliyetleri ne kadard�r??
select UnitPrice, Quantity
from [Order Details]
select SUM(UnitPrice * Quantity) AS [Toplam Maliyet]
from [Order Details]


---900 adetten fazla sat�lan �r�nler?
select ProductID, sum(quantity)
from [Order Details]
group by ProductID
HAVING sum(quantity)>900

--- hangi kategoride toplam ka� adet �r�n bulunuyor?

select CategoryID, count(CategoryID)
from Products
group by CategoryID


---hangi sipari�te toplam ne kadar kazan�lm��?

select OrderID, sum(quantity*unitprice) AS ToplamKazan�
from [Order Details]
group by OrderID

--JOIN MESELES�

SELECT * FROM Employees
select * from Orders

select * from Employees, Orders

-- JOIN syntaxi

-- select tablo_adi.sutunadi
-- from tablo_x
-- (inner join, left join, right join) tablo_y
--ON tablo_x.sutunadi = tablo_y.sutunadi

--Hangi �r�n�m�z hangi kategoridedir. Bu sorudaki amac�m�z �r�n listeleri i�erisinde kategorilere eri�ip o kategorinin ad�n� yazmakt�r.

SELECT P.ProductName , C.CategoryName
	FROM Products AS P
		INNER JOIN Categories AS C 
			ON C.CategoryID = P.CategoryID

-- Hangi sipari� hangi kargo �irketi ile ne zaman g�nderilmektedir???

select S.ShipperID, S.CompanyName, FORMAT(O.ShippedDate, 'd', 'tr-TR')
from Shippers AS S
INNER JOIN Orders AS O
on S.ShipperID = O.ShipVia
ORDER BY S.ShipperID

-- �al��anlara g�re toplam siparisleri g�sterelim. �al��an ad ve soyad birle�tirelim

SELECT E.EmployeeID, E.FirstName + ' ' + E.LastName AS AdSoyad, COUNT(*) AS SatisMiktari
FROM Employees AS E
INNER JOIN Orders AS O
ON E.EmployeeID = o.EmployeeID
GROUP BY E.EmployeeID, E.FirstName + ' ' + E.LastName
ORDER BY E.EmployeeID


-- En �ok 3 sipari�i alan �al��an ?
select top 3 e.FirstName + ' ' + e.LastName AS Employee, COUNT(e.EmployeeID) as [Sipari� Miktar�]
from Employees as e
inner join Orders AS o on e.EmployeeID = o.EmployeeID
group by e.FirstName + ' ' + e.LastName
order by [Sipari� Miktar�] desc



-- Hangi �r�n hangi kategoridedir ve �r�n�n tedarik�isi kimdir?
SELECT P.ProductName, C.CategoryName, S.CompanyName
FROM Products AS p
INNER JOIN Categories AS C ON C.CategoryID = P.CategoryID
INNER JOIN Suppliers AS S ON S.SupplierID = P.SupplierID
ORDER BY P.ProductName








