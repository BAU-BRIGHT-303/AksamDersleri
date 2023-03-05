
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

//Veritabanıma denk gelen DbContext classı. 
//Bu classım yani vt'yi yansıtan özel isimli Dbcontext classım mutlaka ama mutlaka entityFrameworkCore içerisinden gelen DbContext classından türemelidir.

class Program
{

	static void Main(string[] args)
	{

	}
}
public class ECommerceDbContext: DbContext
{
	//İlgili Entitymi Dbcontext'e bağladım.
	public DbSet<Product> Products { get; set; }
	public DbSet<Customer> Customers { get; set; }

	//Burası bizim DbContext class'ından gelen bir OnConfiguring metodudur. Uygulamamızın temel konfigürasyon olayları burada gerçekleşecektir.
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		//Veritabanı bağlantısını sağladığımız alan burası olacak.
		optionsBuilder.UseSqlServer("Server = DESKTOP-OFVK2FD; Database = ECommerceDB; Trusted_Connection = True;");
		//Konfigürasyon işleri
		//Connection String
		//Lazy Loading
	}

}

//Entity 1 classı
public class Product
{
	//Entity classlarımız birer tabloya denk gelmektedir. Şimdi de kolonlarını oluşturalım.
	public int Id { get; set; }
	public string Name { get; set; }
	public int Quantity { get; set; }
	public double Price { get; set; }
	public string Image { get; set; }



}

//Entity 2 classı

public class Customer
{
	public int Id { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string Address { get; set; }
	
}