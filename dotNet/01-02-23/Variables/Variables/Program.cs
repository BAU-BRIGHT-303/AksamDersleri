namespace Variables
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//DEĞİŞKENLER
			//Değişken oluşturma kuralları
			/*Değişken isminde boşluk olmayacak.
			 Değişken isminin başında rakam olmaz
			İçerisinde özel karakter kullanmaktan kaçınıyoruz alt-tire dışında
			Tanımlama yapılırken her değişkenin türü mutlaka belirtilmelidir (string, int, char vs)
			Değişken isimleri Case Sensitive'dir.

			 */

			#region VERİ TİPLERİ
			// 1- Value Type(Değer Tipli) 2- Reference Type(Referans Tipli)

			/*Sayı Tipli Değişken Türlü
			Tam Sayılar:  short,ushort,byte,int,uint, long,ulong
			Ondalıklı Sayılar: double, float (sonuna f ekliyoruz), decimal(sonuna m ekliyoruz)
			Değişken türlerinin ram bellekte kapladığı alan miktarı biliyor olmak kodlama yaparkenki performans ve bellek maliyetini düşüreceği için önemlidir. 

			Metinsel Tipli Değişkenler
			-string
			-char
			 */
			#endregion

			#region Değişken Oluşturma Metodu
			//Değişken tanımlanma esnasında değer atanarak oluşturulabilir bununla beraber değişkene ram bellekte yer kaplaması belirtilir ve sonrasında istendiği zaman değer atanabilir. Türüne göre genellikle sonradan atanmış olan değerler değiştirilebilir.

			//degisken_turu degisken_adi = değer; --> değişken tanımlandığı esnada değeri atanmıştır.
			//degisken_turu degisken_adi; ---> burada da bu isimli değişkene ram bellekte yer tutması bildirilir fakat değeri henüz atanmamıştır. 

			//string name = "barbaros";
			//string surname;


			//surname = "Ciga";

			//name = "BARBAROS";

			//Console.WriteLine($"Ad: {name}. Surname: {surname}");

			//int x = 5;

			//int y = x;
			//İki tane değişken belirlenecek ve ikisine de farklı sayılar atanacak. Değişkenlere birbirlerinin değerleri tutması sağlanacak.

			//int a = 30;
			//int b = 50;
			//int tempNum = a;
			//Console.WriteLine($"A'nın değeri {a}, B'nin değeri: {b}");
			//a = b;
			//b = tempNum;
			//Console.WriteLine($"A'nın değeri {a}, B'nin değeri: {b}");

			//3 öğrencinin notlarını alan ve finalde öğrencilerin not ortalamasını veren bir console app yazınız.
			//Console.Write("Lütfen 1. notu giriniz: ");
			//double not1 = double.Parse(Console.ReadLine() );
			//Console.Write("Lütfen 2. notu giriniz: ");
			//double not2 = double.Parse(Console.ReadLine() );
			//Console.Write("Lütfen 3. notu giriniz: ");
			//double not3 = double.Parse(Console.ReadLine() );

			//double ort = not1 + not2 + not3 / 3;
			//Console.WriteLine("Ortalama: " + ort);
			#endregion

			#region Örnek Değişkenler
			bool isManager = false;
			double x = 50.08;
			float y = 1.0f;
			decimal z = 2.5m;
			char c = 'x';
			string s = "ekjfsldf";

			// sabit tipli değişkenler const olarak tutulur. 
			const int a = 50;
			//a = 80;
			#endregion

			#region Referans Tipli Değişkenler
			//string, array, Class, obj, metotlar

			object o = 50.50;
			object zasd = 20.50;
			//Object türü verileri box ederek tuttuğu için kendi türlerindeki operasyonlara doğrudan dahil edemiyoruz. Bunun için yapacağımız işlem unboxing işlemidir. Bunu da cast adını verdiğimiz operatör ile gerçekleştiriyoruz () operatörü.
			double unboxedItem = (double)o;
			double unboxedItem2 = (double)zasd;
			Console.WriteLine(unboxedItem+unboxedItem2);
			#endregion
		}
	}
}