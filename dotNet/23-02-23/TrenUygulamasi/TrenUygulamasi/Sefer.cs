using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrenUygulamasi
{
	internal class Sefer
	{
		int toplamKoltukSayi;
		int bosKoltukSayi;
		double hasilat;
		string seferAdi;

		const double TAM_BILET = 160.5;
		const double INDIRIMLI_BILET = 100.50;

		public Sefer(string sefer, int koltukSayi)
		{
			toplamKoltukSayi = koltukSayi;
			seferAdi = sefer;
			bosKoltukSayi = toplamKoltukSayi;
			hasilat = 0;
		}

		public void BiletSatis(bool indirim)
		{
			bosKoltukSayi--;
			if(indirim)
			{
				hasilat = hasilat + INDIRIMLI_BILET;
			}
			else
			{
				hasilat += TAM_BILET;
			}
		}

		public void BiletIade(bool indirim)
		{
			bosKoltukSayi++;
			if (indirim)
			{
				hasilat = hasilat - INDIRIMLI_BILET;
			}
			else
			{
				hasilat -= TAM_BILET;
			}
		}

		public int BosKoltuk()
		{
			return bosKoltukSayi;
		}

		public double HasilatNedir()
		{
			return hasilat;
		}

	}
}
