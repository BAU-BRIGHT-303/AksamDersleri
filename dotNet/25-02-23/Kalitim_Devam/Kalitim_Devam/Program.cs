namespace Kalitim_Devam
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//new D();
			//Obje o = new Obje();
			//o.Message();
			//Masa m = new Masa();
			//m.Message();
			//Robot r = new Robot();
			//r.Message();

			Ucgen ucgen = new Ucgen(5, 20);
			Console.WriteLine($"Üçgenimizin Alanı: {ucgen.Alan()} " );

			Kare kare = new Kare(5);
			Console.WriteLine($"Karenin Alanı: {kare.Alan()} ");

			Dikdortgen dikdortgen = new Dikdortgen(5, 20);
			Console.WriteLine($"Dikdörtgenin Alanı: {dikdortgen.Alan()} ");
		}
	}

	/*Kalıtım veren sınıfa / class'a Base / Parent Class denir
	 Kalıtım Alan Classa Derived / Child Class Denmektedir.
	 */

	class A
	{
		public A()
		{
			Console.WriteLine("Bir A nesnesi oluştu");
		}

	}

	class B: A
	{
		public B()
		{
			Console.WriteLine("Bir B nesnesi oluştu");
		}
	}

	class C: B
	{
		public C()
		{
			Console.WriteLine("Bir C nesnesi oluşturuldu");
		}
	}

	class D: C
	{
		public D()
		{
			Console.WriteLine("Bir D nesnesi oluşturuldu");
		}
	}

	/*Tüm classların atası A classıdır. Fkat baktığımız ölçeğe göre C'nin base classı B. Child classı D. Buradan hareketle bir class'ın sadece bir adet atası olacağını belirtiyoruz. Fakat bir ata class birden fazla classa kalıtım verebilir.  */

	class Dede
	{

	}
	class Anne: Dede
	{

	}

	class Teyze: Dede
	{

	}

	class Ogul: Anne
	{

	}

	class FirstClass
	{
		public FirstClass(int x)
		{

		}
	}


	class SecondClass : FirstClass
	{
		//public SecondClass(): base(10)
		//{

		//}

		public SecondClass(int b): base(b)
		{

		}


		
	}

	class Obje
	{
		public virtual void Message()
		{
			Console.WriteLine("Ben bir objeyim.");
		}
	}

	class Masa: Obje
	{
		public override void Message()
		{
			Console.WriteLine("Ben bir masayım.");
		}
	}

	class Robot: Obje
	{
		public override void Message()
		{
			Console.WriteLine("Ben bir robotum.");
		}
	}

	class Sekil
	{
		public virtual double Alan()
		{
			return 0;
		}
	}

	class Ucgen : Sekil
	{
		double taban;
		double yuksek;

		public Ucgen(double taban, double yuksek)
		{
			this.taban = taban;
			this.yuksek = yuksek;
		}

		public override double Alan()
		{
			return (yuksek * taban) / 2;
		}
	}

	class Kare: Sekil
	{
		double k1;

		public Kare(double k1)
		{
			this.k1 = k1;
		}

		public override double Alan()
		{
			return k1 * k1;

		}
	}


	class Dikdortgen: Sekil
	{
		double kk;
		double uk;

		public Dikdortgen(double kk, double uk)
		{
			this.kk = kk;
			this.uk = uk;
		}

		public override double Alan()
		{
			return kk * uk;

		}

	}
}