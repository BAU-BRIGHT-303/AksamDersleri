using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;




Console.WriteLine();
ECommerceDbContext context = new();

#region VeriEkleme
//ürün tablomuza göndermek istediğimiz ürünümüzü oluşturduk. Henüz göndermedik.
//Urun urun = new()
//{
//	UrunAdi = "Z Ürünü",
//	Fiyat = 2500
//};

#region Add Metodu Kullanımı
//await context.AddAsync(urun);
//await context.SaveChangesAsync();
#endregion
#region Add Metodu Tip Güvenli
//await context.Urunler.AddAsync(urun);
//await context.SaveChangesAsync();
#endregion

#region Çoklu Ekleme
//Urun urun1 = new()
//{
//	UrunAdi = "A Ürünü",
//	Fiyat = 2550
//};

//Urun urun2 = new()
//{
//	UrunAdi = "B Ürünü",
//	Fiyat = 3500
//};

//Urun urun3 = new()
//{
//	UrunAdi = "C Ürünü",
//	Fiyat = 1580
//};

//context.AddRange(urun1,urun2, urun3);
//context.SaveChanges();
#endregion
//Save Changes Nedir? //SaveChanges; insert, update ve delete sorgularını oluşturup bir transaction eşliğinde veritabanına gönderip execute eden fonksiyodur. Eğer ki oluşturulan sorgulardan herhangi biri başarısız olursa tüm işlemleri geri alır(rollback)
#endregion

#region Verinin Eklendiği Nasıl Anlaşılır? Entity State Mevzusu
//Urun urun = new()
//{
//	UrunAdi = "Z Ürünü",
//	Fiyat = 2500
//};

//Console.WriteLine(context.Entry(urun).State);

//context.Add(urun);

//Console.WriteLine(context.Entry(urun).State);

//context.SaveChanges();
//Console.WriteLine(context.Entry(urun).State);
#endregion

#region Eklenen Verinin Generate Edilen Id'sini Görüntüleyebilme

Urun urun = new()
{
	UrunAdi = "z ürünü",
	Fiyat = 1460
};

context.Add(urun);
context.SaveChanges();
Console.WriteLine(urun.Id);

#endregion


public class ECommerceDbContext : DbContext
{
	public DbSet<Urun> Urunler { get; set; }
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		optionsBuilder.UseSqlServer("Server=DESKTOP-OFVK2FD; Database=ECommerceDB;Trusted_Connection=True;");
	}
}

public class Urun
{
	//Herhangi bir entity classımızda migration işleminin gerçekleştirilebilmesi için mutlaka içerisind bir key ifadesi olan Id geçmeli ve pk olduğunu entityframework anlamalıdır.
	public int Id { get; set; }
	//public int ID { get; set; }
	//public int UrunID { get; set; }
	//public int UrunId { get; set; }
	public string UrunAdi { get; set; }
	public double Fiyat { get; set; }
}
