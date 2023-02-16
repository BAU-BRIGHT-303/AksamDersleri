using System.Collections;

namespace ArrayListe
{
	internal class Program
	{
		static void Main(string[] args)
		{
			/*Array List nedir? İlkel bir collection'dır. Neden ihtiyaç duyuyoruz. Dizilerde bazı sınırlılıklar bulunmaktadır. Bu sınırlılıklar arraylerde eleman miktarı olması ve aynı zamanda array'deki elemanların türlerinin birebir aynı olması zorunluluğudur. 
			 Ve biz ArrayList sayesinde bu sınırlılıklardan kurtulmuş oluyoruz. ArrayList esasında bir sınıf olmaktadır ve biz yine bu sınıftan bir obje üretmekteyiz. Tabi bu tipinde kendi içerisinde oluşturduğu bazı sınırlılıklar bulunmaktadır.*/
			int[] dizi1 = { 1, 2, 3, 4, 5 };

			//ArrayList oluşturma
			ArrayList arr1 = new ArrayList();

			//normal dizilerde atama işlemi
			dizi1[0] = 25;

			//ArrayListlerde atama işlemi
			arr1.Add(25);
			//arr1.Add(true);
			//arr1.Add("Falan");
			arr1.Add(250);
			arr1.Add(true);

			foreach(var i in arr1) {
				Console.WriteLine(i);
			}

			int sum = 0;

			for (int i = 0; i < arr1.Count; i++)
			{
				if (arr1[i] is int)
				{
					//ArrayListler içerisinde barındığı tüm elemanları boxing ederek tuttuğu için aslında finalde sadece obj türünden ürünleri tutmuş oluyor. Yani bizim farklı türlerdeki elemanları tutabiliyor olma sebebimiz bu şekilde çalışma mantığından kaynaklıdır. Bu işlemlere matematiksel ya da kendi türüne özgü operasyonel işlemler yapacaksak casting operatörü ile unbox etmemiz gerekmektedir.
					sum += (int)arr1[i];
				}
			}

			Console.WriteLine(sum);

			// ArrayList Collection initializing

			ArrayList arr2 = new ArrayList()
			{
				1,
				2,
				true,
				"Falan",
				's'
			};
		}
	}
}