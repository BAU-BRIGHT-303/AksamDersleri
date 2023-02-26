namespace Abstract_Class
{
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Öyle bir sınıf düşünelim ki bu sınıftan bir instance almak mümkün olmasın fakat bir çok classa miras versin. Bu class tipine abstract class diyoruz
			 Soyut sınıflar kendi başlarına kullanılamamaktadırlar. Bunun yerine bu sınıflar türetmiş oldukları sınıflar tarafından uygulanması gereken bir dizi soyut yöntemler (abstract method) veya özellikler tanımlamaktadırlar.
			Genel kullanımları bir arayüz(interface) oluşturulmak istendiği zamanlar fakat bu arayüzdeki bir takım yöntemlerin uygulanmasını zorunlu tutmak istediğimiz durumlarda kullanılmaktadır. 
			Abstract classlar ile normal classlar arasındaki farklar; normal classlarda metot bildirimi sadece imasıyla yapılamazken abstract classlarda yapılabilir. Zaten temelde amaç da budur. Abstract sınıftan türeyen sınıflarda metotlar zaten imza olarak gösterilebilmektedir. 
			Normal sınıflarda newleme yapılabilirken abstract classlarda newleme gerçekleşmesi mümkün değildir zaten instance almaya uygun bir ypıları bulunmamaktadır.

			Bir kişi sınıfımız olacak bu kişi sınıfının türeteceği öğrenci ve öğretmn sınıflarımız olacak. Ayrıca kendilerine ait sestonu metotları olaak. Abstraction şeklinde düşünerek bunu kodlayalım.

			Abstract metotlar ile virtual metotlar arasında da belli farklr bulunmaktadır. Virtual metotlar kalıtım verilen classlarda ezilebilir ya da ezilmeyebilir. Ama abstract metotlarda imzası belirlenmiş olan metodu implemente edip bodysini belirtmek durumundayız. Bunun anlamı abstract metotların türetilmiş olan tüm sınıflarda kullanılması zorunda olduğudur.


			Bir konsol uygulaması yapılacak. Uygulama bize sepete eklemek istediğimiz ürünün tipini sorucak. Kitap ya da film olarak ürün ekleme gerçekleştirilecek. Sonra eğer 1 ise ona göre bir ekleme işlemi 2 ise ona göre bir ekleme işlemi gerçekleşecek. Kitap seçilmiş ise bize kitap adı yazar adı fiyat ve ısBN numarası soracak. Film ise bize film adı yönetmen adı fiyat ve oyuncuları soracak. Sonra bize sepetimizdeki ürünleri gösterecek. Gösterdiktern sonra da alışverişe devam etmek istiyor musunuz diye soracak. ve sepetin toplam tutarını gösterecek.
			 */
			Square a1 = new Square();
			a1.Area = 50;
			Rectangle r1 = new Rectangle();
			r1.Lenght = 50;

			Ogrenci ogrenci = new Ogrenci();
			Ogretmen ogretmen = new Ogretmen();

			ogrenci.Ad = Console.ReadLine();
			ogrenci.Soyad = Console.ReadLine();
			Console.WriteLine(ogrenci.Ad+ " " + ogrenci.Soyad);
			ogrenci.SesTonu();

			
			

		}

		abstract class Shape
		{
			public int Edge { get; set; }
			public int Area { get; set; }
			public int Lenght { get; set; }

		
		}

		class Square: Shape 
		{

		}

		class Rectangle : Shape
		{

		}

		abstract class Hayvan
		{
			public abstract void SesCikisi();
		}

		class Kedi : Hayvan
		{
			public override void SesCikisi()
			{
				Console.WriteLine("Meuw");
			}
		}

		class Kopek : Hayvan
		{
			public override void SesCikisi()
			{
				Console.WriteLine("Meuw");
			}
		}

		class MyClass
		{
			//public abstract void Falan();
		}

		abstract class Kisi
		{
			public string Ad { get; set; }
			public string Soyad { get; set; }
			abstract public void SesTonu(); 
		}

		class Ogrenci : Kisi
		{
			public int OgrNo { get; set; }
			public override void SesTonu()
			{
				Console.WriteLine("Konuşuldu.Ses İnce");
			}
		}

		class Ogretmen : Kisi
		{

			public override void SesTonu()
			{
				Console.WriteLine("Konuşuldu.Ses Kalın");
			}
		}
	}
}