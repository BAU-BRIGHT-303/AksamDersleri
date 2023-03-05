using Microsoft.EntityFrameworkCore;

 class Program
{
	static void Main(string[] args)
	{

	}
}

public class ECommerceDbContext: DbContext
{
	public DbSet<Urun> Urunler { get; set; }
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		optionsBuilder.UseSqlServer("Server=DESKTOP-OFVK2FD; Database=ECommerceDB;Trusted_Connection=True;");
	}
}

public class Urun
{
	public int Id { get; set; }
	public int ID { get; set; }
	public int UrunID { get; set; }
	public int UrunId { get; set; }
	public string UrunAdi { get; set; }
	public double Fiyat { get; set; }
}