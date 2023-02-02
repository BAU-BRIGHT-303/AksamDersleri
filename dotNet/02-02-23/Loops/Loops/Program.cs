namespace Loops
{
	internal class Program
	{
		static void Main(string[] args)
		{

			for (int i = 0; i < 10; i++)
			{
				Console.WriteLine($"{i+1} - {i}");
			}

			//Kullanıcıdan ismi ve tekrar sayısı istensin tekrar sayısı kadar ekranda kullanıcının ismi yazdırılsın.

			Console.Write("Lütfen adınızı bağışlar mısınız?: ");
			string name = Console.ReadLine();
			Console.Write("Lütfen tekrar sayısını girer misiniz?: ");
			int tekrar = int.Parse(Console.ReadLine());

			for (int i = 0; i < tekrar; i++)
			{
				Console.WriteLine(name);
			}

		}
	}
}