using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

Console.WriteLine();

#region İlişkisel Kavramlar

#region Principal Entity
// Kendi kendini var edebilen tabloyu modelleyen asıl entity.
// Bşka bir tabloya bağımlılığı yoktur.
#endregion
#region Dependent Entity(Bağımlı)
// kendi kendine var olamayan mutlaka başka bir tabloya bağımlı(ilişkisel veri tabanı anlamında bağımlı) olan tabloyu modelleyen entitydir.
#endregion
#region FK 
// Principal Entity ile Dependent Entity arasında ilişki kuran anahtar. 
#endregion

#region Principal Key
// Principal entitydeki Id'nin direkt kendisi. Principal Entity'nin kimliği olan sütunu ifade eden proptur.
#endregion

#endregion

#region 1-1 İlişki

#region Default Convention

//Öncelikle Navigation Property oluşturuyoruz. Bu ilişki kuracağımız iki entity arasında birbirlerinin isim ve tür cinsinden entitylerine yaızlması ile gerçekleşir. 
//Bire bir ilişkiler foreign key özellikle belirtilmek zorunda değildir. Fakat foreign key yollayan entity ismi ile başlayıp Id ile bitmesi gereken bir prop'a ihtiyaç duymaktadır. Bunun sebebi hangi entitynin dependent olduğunu anlayamamasından kaynaklanır. Dependent olan entitye primary key yollayan entitynin adı ve ıd kısmı yazılarak bağlantı kurulmuş olur. 
//public class Employee
//{
//	public int Id { get; set; }
//	public string Name { get; set; }

//	public EmployeeAddress EmployeeAddress { get; set; }
//}

//public class EmployeeAddress
//{
//	public int Id { get; set; }
//	public int EmployeeId { get; set; }
//	public string Address { get; set; }

//	public Employee Employee { get; set; }

//}


#endregion

#region Data Annotation

//Navigation proplar tanımlanmalıdır. foreign key ismi defaulyt convention dışında kalan bir kolon olacaksa FK ile bunu bildiriyoruz. Annotation olarak foreign key olacak propun üzerine ilgili kısmı ekliyoruz.

//1-1 ilişkide ekstradan fk kolonuna ihtiyacımız olmadığı için dependent entitydeki id kolonunun hem foreign key hem pk olarak kullanmayı tercih edebiliyoruz. Bunu da ikinci entityde Id kolonu üzerinde hem Key, hemde FK olarak tanımlıyoruz.

//public class Employee
//{
//	public int Id { get; set; }
//	public string Name { get; set; }

//	public EmployeeAddress EmployeeAddress { get; set; }
//}

//public class EmployeeAddress
//{
//	[Key, ForeignKey(nameof(Employee))]
//	public int Id { get; set; }

//	public string Address { get; set; }

//	public Employee Employee { get; set; }

//}


#endregion

#region Fluent API

//Fluent API konusunda sadece navigation proplar kuruyoruz. Sonra db context üzerinde yapmış olduğumuz gibi bir onmodelcreating fonksiyonu çağırıyoruz. Bu fonksiyon içerisinde lambda operatör ile kaç anahtarı olduğunu hangisinin fk hangisinin pk olduğunu haskey gibi metotlar ile gösteriyoruz.
//public class Employee
//{
//	public int Id { get; set; }
//	public string Name { get; set; }

//	public EmployeeAddress EmployeeAddress { get; set; }
//}

//public class EmployeeAddress
//{

//	public int Id { get; set; }

//	public string Address { get; set; }

//	public Employee Employee { get; set; }

//}
#endregion



#endregion

#region 1'e Çok İlişki

#region Default Conv
public class Employee
{
	public int Id { get; set; }
	public string Name { get; set; }

	public Department Department { get; set; }
}

public class Department
{

	public int Id { get; set; }

	public string Address { get; set; }

	public ICollection<Employee> Employees { get; set; }

}
#endregion


#endregion

class EmployeeManagementDbContext : DbContext
{
	public DbSet<Employee> Employees { get; set; }
	//public DbSet<EmployeeAddress> EmployeeAddresses { get; set; }
	public DbSet<Department> Departments { get; set; }
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
	{
		optionsBuilder.UseSqlServer("Server=DESKTOP-OFVK2FD;Database=EmployeeManagementDb;Trusted_Connection=True;");
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		//modelBuilder.Entity<EmployeeAddress>().HasKey(e => e.Id);

		//modelBuilder.Entity<Employee>().HasOne(e => e.EmployeeAddress).WithOne(e => e.Employee).HasForeignKey<EmployeeAddress>(e => e.Id);
	}

}

//public class Employee
//{
//	public int Id { get; set; }
//	public string Name { get; set; }

//}

//public class EmployeeAddress
//{
//	public int Id { get; set; }
//	public string Address { get; set; }

//}