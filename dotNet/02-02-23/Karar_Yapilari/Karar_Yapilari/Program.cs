namespace Karar_Yapilari
{
	internal class Program
	{
		static void Main(string[] args)
		{
			//bool isSeasonSpring = true;

			//string trainerName = "Barbaros";

			//string[] guzDersler = { "C#", "MSSQL", ".Net" };
			//string[] baharDersler = { "HTML", "CSS", "JavaScript" };

			//if (isSeasonSpring == true)
			//{
			//	Console.WriteLine($"{trainerName} isimli eğitmenin anlatacağı dersler: {guzDersler[0]}, {guzDersler[1]} {guzDersler[2]}");
			//}
			//else
			//{
			//	Console.WriteLine($"{trainerName} isimli eğitmenin anlatacağı dersler: {baharDersler[0]}, {baharDersler[1]} {baharDersler[2]}");
			//}


			//Assesment -- kullanıcıdan iki adet sayı olan ve bu sayıları toplayan, toplamın sıfırdan büyük olduğu durumlarda toplamın pozitif olduğunu aksi halde negatif veya sıfır olduğunu anlatan bir konsol uygulaması yazalım.

			//	basla:

			//	Console.Write("Lütfen ilk sayıyı giriniz: ");
			//	int num1 = int.Parse(Console.ReadLine());

			//	Console.Write("Lütfen ikinci sayıyı giriniz: ");
			//	int num2 = int.Parse(Console.ReadLine());
			//	if (num1 == -1 && num2 == -1)
			//	{
			//		goto bitis;
			//	}
			//	int toplam = num2 + num1;
			//	if (toplam>0)
			//	{
			//		Console.WriteLine("Sonuç Pozitiftir.");
			//		goto basla;
			//	}else if(toplam == 0)
			//	{
			//		Console.WriteLine("Sayı nötrdür.");
			//		goto basla;
			//	}
			//	else if(toplam <0)
			//	{
			//		Console.WriteLine("Sayı negatiftir.");
			//		goto basla;

			//	}
			//bitis:
			//	Console.WriteLine("Hoşçakalın");

			//Kullanıcıdan üç adet sayı istensin ve bu sayılar kullanıcıya gösterilsin akabinde kullanıcıdan bu sayılar ile alakalı yapılması istenen 5 adet matematiksel işlem sorusu sorulsun ve sorulara 3 yanlış cevap veren kişiye oyunu kaybettiniz yazılsın aksi durumda oyun kazanılsın.
			//basla:
			//int counter = 0;
			//Console.Write("Lütfen 1. Sayıyı Giriniz: ");
			//int num1 = int.Parse(Console.ReadLine());

			//Console.Write("Lütfen 2. Sayıyı Giriniz: ");
			//int num2 = int.Parse(Console.ReadLine());

			//Console.Write("Lütfen 3. Sayıyı Giriniz: ");
			//int num3 = int.Parse(Console.ReadLine());

			//Console.WriteLine("****************");
			//Console.WriteLine($"Girmiş olduğunuz sayılar {num1}, {num2}, {num3}");
			//Console.WriteLine("Lütfen aşağıdaki soruları cevaplayınız");
			//int ans1 = num1 + num3;
			//int ans2 = num2 * num3;
			//int ans3 = num3 - num1;
			//int ans4 = num1 * num2;
			//int ans5 = num2 - num3;

			//Console.Write("Birinci ve üçüncü sayıların toplamı: ");
			//int input1 = int.Parse(Console.ReadLine());
			//if (input1 == ans1)
			//{
			//	counter++;
			//	Console.WriteLine("Doğru");
			//}
			//else
			//{
			//	Console.WriteLine("Yanlış");
			//}

			//Console.Write("İkinci ve üçüncü sayıların çarpımı: ");
			//int input2 = int.Parse(Console.ReadLine());
			//if (input2 == ans2)
			//{
			//	counter++;
			//	Console.WriteLine("Doğru");
			//}
			//else
			//{
			//	Console.WriteLine("Yanlış");
			//}
			//Console.Write("Üçüncü ve birinci sayılanın farkı: ");
			//int input3 = int.Parse(Console.ReadLine());
			//if (input3 == ans3)
			//{
			//	counter++;
			//	Console.WriteLine("Doğru");
			//}
			//else
			//{
			//	Console.WriteLine("Yanlış");
			//}

			//Console.Write("Birinci ve ikinci sayıların çarpımı: ");
			//int input4 = int.Parse(Console.ReadLine());
			//if (input4 == ans4)
			//{
			//	counter++;
			//	Console.WriteLine("Doğru");
			//}
			//else
			//{
			//	Console.WriteLine("Yanlış");
			//}

			//Console.Write("İkinci ve üçüncü sayının farkı: ");
			//int input5 = int.Parse(Console.ReadLine());
			//if (input5 == ans5)
			//{
			//	counter++;
			//	Console.WriteLine("Doğru");
			//}
			//else
			//{
			//	Console.WriteLine("Yanlış");
			//}

			//Console.Clear();
			//if (counter >= 3)
			//{

			//	Console.WriteLine("Tebrikler Kazandınız");
			//}
			//else
			//{
			//	Console.WriteLine("Kaybettiniz :(");
			//}
			//Console.WriteLine("Tekrar Oynamak İster Misiniz?\t 1-Evet 2-Hayır");
			//string karar = Console.ReadLine();

			//if (karar == "1")
			//{
			//	goto basla;
			//}
			//else
			//{
			//	Console.WriteLine("C u");
			//}

			//Öğrencilerin vize ve final notlarını alan ve aldığı bu notların ortalamasına göre harf cinsinden puanlarını ekrana yansıtan bir konsol uygulaması yazın.

			//Console.Write("Birinci Vize Notunuzu Giriniz: ");
			//int vize1 = int.Parse(Console.ReadLine());
			//Console.Write("İkinci Vize Notunuzu Giriniz: ");
			//int vize2 = int.Parse(Console.ReadLine());
			//Console.Write("Final Notunuzu Giriniz: ");
			//int final = int.Parse(Console.ReadLine());

			//double sonuc = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;
			//if (sonuc > 80 )
			//{
			//	Console.ForegroundColor = ConsoleColor.Green;
			//	Console.WriteLine("AA :)");
			//	Console.ForegroundColor = ConsoleColor.White;
			//}else if( sonuc<= 70 && sonuc>60)
			//{
			//	Console.ForegroundColor = ConsoleColor.Magenta;
			//	Console.WriteLine("BB :)");
			//	Console.ForegroundColor = ConsoleColor.White;
			//}else if(sonuc<=60 && sonuc>50)
			//{
			//	Console.ForegroundColor = ConsoleColor.Yellow;
			//	Console.WriteLine("CC Geçer gibi");
			//	Console.ForegroundColor = ConsoleColor.White;
			//}
			//else
			//{
			//	Console.ForegroundColor = ConsoleColor.Red;
			//	Console.WriteLine("FF Kaldınız :)");
			//	Console.ForegroundColor = ConsoleColor.White;
			//}

			#region Switch Case

			Console.Write("Lütfen burcunuzu giriniz: ");
			string burc = Console.ReadLine();

			switch (burc)
			{
				case "Kova":
				case "Oğlak":
					Console.WriteLine("Çok rasyonel, duygusuz.");
				break;
				case "Koç":
					Console.WriteLine("yakışıklı, inatçı.");
					break;
				case "Akrep":
					Console.WriteLine("Merhametli, kıskanç");
					break;
				case "Başak":
					Console.WriteLine("Disiplinli, egoist");
					break;
				case "Balık":
					Console.WriteLine("Hayalperest");
					break;
				case "Aslan":
					Console.WriteLine("İyidir.");
					break;
				case "Yay":
					Console.WriteLine("Kavgacıdır");
					break;
				case "İkizler":
					Console.WriteLine("Dengesiz");
					break;
				case "Boğa":
					Console.WriteLine("Meslek seçiminde önemli hamleler yapar");
					break;
				case "Yengeç":
					Console.WriteLine("Rahatına düşkün");
					break;
				default:
					Console.WriteLine("Paragöz");
					break;
			}
			#endregion

		}
	}
}