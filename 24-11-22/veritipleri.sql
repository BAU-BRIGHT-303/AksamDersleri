---------------------- VERÝ TÝPLERÝ ----------------
--1) METÝNSEL ÝFADELER
-- char : unicode desteklemez. oluþturma þekli char(n) þeklindedir. 8000 karaktere kadar deðer alýr.
-- nchar : unicode destekliyor. 4000 karaktere kadar deðer alýr.

-- varchar : chardan farklý olarak kapladýðý içerik kadar(verinin boyutu kadar) alan kaplamaktadýr. Genellikle uzunluðunu tahmin edemediðimiz metinsel ifadelerde bizi kurtarmaktadýr. 

-- nvarchar : unicode destekler. 

---------------------------------------
--2) SAYISAL ÝFADELER

-- bit:  bir byte büyüklüðünde alan kaplar.  Genellikle mantýksal ifadelerde kullanýlmaktadýr. Evety / hayýr dönen ifadeler için birebirdir. 

-- int : 4 byte büyüklüðünde alandýr. 

-- smallint : 2 byte lýk alan kaplar. 

-- bigint : 8 bytelýk alan kaplar. 

-- tinyint : 1 bytle alan kaplar. 0 ile 255 arasýnda bir rakama ihtiyacýnýz varsa ve bellekte gereksiz yer kaplamak istemiyorsanýz kullanabilirsiniz.

-- decimal, numeric : bunlar da ondalýk ifadelerde kullandýðýmýz veri türleridir. kullanýmý decimal(16, 2)

