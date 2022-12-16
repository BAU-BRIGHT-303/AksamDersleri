-- DDL Komutlar� 
-- CREATE --> olu�turma komutu
-- database olu�turmak i�in create database komutu ile ba�lay�p istedi�imiz db ad�n� belirtmi� olduk.
--CREATE DATABASE ddlDenemeDB

--use komutu ile �al��mak istedi�imiz veritaban� ad�n� girerek execute esnas�nda �al��t�r�lacak veritaban�n� bildiriyoruz.
USE ddlDenemeDB

-- yine ddl komutumuzdan olan create ile yeni bir tablo olu�turuyoruz ve i�erisinde ilgili kolon �zelliklerini giriyoruz. Burada �zellikler bo�luklar ile ayr�lacak olup detayland�r�labilir. ve her kolon virg�l ile ayr�lmal�d�r.
CREATE TABLE Calisanlar(
CalisanID int IDENTITY(1,1) PRIMARY KEY NOT NULL,
CalisanAd varchar(50) 
)

-- Yeni bir kolon eklemek i�in mevcut olan tablo oldu�undan dolay� yeni bir tablo olu�turamad���m�z i�in, alter table diyerek tablomuzda bir g�ncelleme yapm�� oldu�umuzu belirtiyoruz. sonras�nda ekledi�imiz komut add oluyor ve bir s�tun eklenmi� oluyor.
ALTER TABLE Calisanlar
ADD Email varchar(50)

-- �imdi de diyelim ki email adl� kolonun veri tipini yanl�� girdik ve de�i�tirmek istiyoruz.

ALTER TABLE Calisanlar
ALTER COLUMN Email int

-- Sonra tamamen vazge�tik ve kolonu silmek istedik.
ALTER TABLE Calisanlar
DROP COLUMN Email

-- �imdi de bu �al��madan memnun olmad�k ve komple veritaban�n� silmek istiyoruz.

DROP DATABASE ddlDenemeDB
