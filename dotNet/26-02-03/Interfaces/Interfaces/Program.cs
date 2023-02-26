namespace Interfaces
{
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Diğer sınıflara şablon oluşturmak , yol göstermek amacıyla implementasyon kullnarak kendisindeki alanları doldurulması zorunlu hale getiren bir yapıdır. Interfaceler bir class değildir. Kendilerine özgür birer yapıdır.
			 Sınıflarda birden fazla interface implemente edilebilir.  İçinde neler bulunur? metotlar ve proplar bulunur. Interface içideki bağlı olan tüm yapılar publictir. 
			Tanımlaması yapılan bu memberlar interface içerisinde uygulanmazlar. Fakat kendisinden implemente olan classlar kendi içerilerinde bu yapıları uygulayabilir hale gelirler. 
			Genelde gösterimleri I harfi başa eklenerek yapılır.

			Abstrct classlar ve interfaceler aslında bağlı amaçlar için kullanılmaktadırlar. İki yapı da sınıfların davranış biçimine yön verir ve benzer nitelikte özellikler barındırır. Fakat arada bir takım farklar bulunmaktadır 

			Örneğin soyut sınıflarda yani abstract classlardaki özellikler
- bir soyut sınıf, sınıfın özelliklerini ve davranışlarını tanımlar fakat tam olarak uygulamaz. Soyut sınıflar hem soyut hem de somut(concrete) üyeler içermektedir. Soyut üyeler uygulama tarafından gerçekleştirilmek adına alt sınıflarda ezilen üyelerdir. Soyut sınıflarda kalıtım kullanılır ve alt sınıflarda oluşturulması sağlanır. Fakat soyurt metotlar alt sınıflarda uygulanmak zorundadır.

			Aradaki farkları;
			- Soyut sınıflar(abstract class) somut üyeler de içerebilirken, interfaceler sadece ve sadece tanım içerir.
			- Soyut sınıflar, barındıkdıkları memberların uygulanması, grçekleşmesi için kalıtım kullanır ve kalıtımla alt sınıflar oluşturulur, fakat interfaceler bir sınıfın birden fazla interface uygulamasına olanak tanır.
			- Biri class, diğeri değil(farklı bir yapı)
			- Soyut sınıflarda varsayılan olarak erişim belirteci olarak protected gelirken interfaceler default olarak public gelir. (protected nedir? bir eirşim belirleyicidir. bir classın sadece ona bağlı bulunan alt classlarına erişim verme yetkisidir. )

			 */

			Merdeces m = new Merdeces();
			m.HareketEt();
		}


	}

	public interface IVehicle
	{
		string Model { get; set; }
		public int Yil { get; set; }
		void HareketEt();
	}

	public class Audi : IVehicle
	{
		public string Model { get; set; }
		public int Yil { get; set; }

		public void HareketEt()
		{
			Console.WriteLine("Audi hareket etmektedir.");
		}
	}


	public class Merdeces : IVehicle
	{
		public string Model { get; set; }
		public int Yil { get; set; }

		public void HareketEt()
		{
			Console.WriteLine("Mercedes hareket etmektedir.");
		}
	}

	public abstract class Sekil
	{
		public abstract double AlanHesabi();
		public void Yazdir()
		{
			Console.WriteLine("Şekil yazdırıldı.");
		}
	}

	public class Dikdortgen : Sekil
	{
		public double uzunluk { get; set; }
		public double genislik { get; set; }
		public override double AlanHesabi()
		{
			return uzunluk * genislik;
		}
	}
}