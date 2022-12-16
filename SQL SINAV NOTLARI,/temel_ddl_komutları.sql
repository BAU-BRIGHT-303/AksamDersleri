-- DDL Komutlarý 
-- CREATE --> oluþturma komutu
-- database oluþturmak için create database komutu ile baþlayýp istediðimiz db adýný belirtmiþ olduk.
--CREATE DATABASE ddlDenemeDB

--use komutu ile çalýþmak istediðimiz veritabaný adýný girerek execute esnasýnda çalýþtýrýlacak veritabanýný bildiriyoruz.
USE ddlDenemeDB

-- yine ddl komutumuzdan olan create ile yeni bir tablo oluþturuyoruz ve içerisinde ilgili kolon özelliklerini giriyoruz. Burada özellikler boþluklar ile ayrýlacak olup detaylandýrýlabilir. ve her kolon virgül ile ayrýlmalýdýr.
CREATE TABLE Calisanlar(
CalisanID int IDENTITY(1,1) PRIMARY KEY NOT NULL,
CalisanAd varchar(50) 
)

-- Yeni bir kolon eklemek için mevcut olan tablo olduðundan dolayý yeni bir tablo oluþturamadýðýmýz için, alter table diyerek tablomuzda bir güncelleme yapmýþ olduðumuzu belirtiyoruz. sonrasýnda eklediðimiz komut add oluyor ve bir sütun eklenmiþ oluyor.
ALTER TABLE Calisanlar
ADD Email varchar(50)

-- Þimdi de diyelim ki email adlý kolonun veri tipini yanlýþ girdik ve deðiþtirmek istiyoruz.

ALTER TABLE Calisanlar
ALTER COLUMN Email int

-- Sonra tamamen vazgeçtik ve kolonu silmek istedik.
ALTER TABLE Calisanlar
DROP COLUMN Email

-- Þimdi de bu çalýþmadan memnun olmadýk ve komple veritabanýný silmek istiyoruz.

DROP DATABASE ddlDenemeDB
