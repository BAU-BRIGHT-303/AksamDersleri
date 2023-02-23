using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeferUygulamasi
{
    class Sefer
    {
        public string SeferAdi { get; set; }
        public int KoltukSayisi { get; set; }
        public decimal KoltukFiyati { get; set; }

        private List<bool> koltuklar;

        public Sefer(string seferAdi, int koltukSayisi, decimal koltukFiyati)
        {
            SeferAdi = seferAdi;
            KoltukSayisi = koltukSayisi;
            KoltukFiyati = koltukFiyati;

            koltuklar = new List<bool>();
            for (int i = 0; i < koltukSayisi; i++)
            {
                koltuklar.Add(false);
            }
        }

        public int BosKoltukSayisi()
        {
            int bosKoltukSayisi = 0;
            foreach (bool koltuk in koltuklar)
            {
                if (!koltuk)
                {
                    bosKoltukSayisi++;
                }
            }
            return bosKoltukSayisi;
        }

        public decimal BiletSatisi(int adet, bool indirimli)
        {
            int bosKoltukSayisi = BosKoltukSayisi();
            if (adet > bosKoltukSayisi)
            {
                throw new Exception("Seferde yeterli sayıda boş koltuk yok.");
            }

            decimal biletFiyati = KoltukFiyati;
            if (indirimli)
            {
                biletFiyati *= 0.8m;
            }
            decimal toplamFiyat = biletFiyati * adet;

            for (int i = 0; i < adet; i++)
            {
                int indeks = koltuklar.IndexOf(false);
                koltuklar[indeks] = true;
            }

            return toplamFiyat;

        }

        public decimal BiletIadesi(int adet, bool indirimli)
        {
            int doluKoltukSayisi = KoltukSayisi - BosKoltukSayisi();
            if (adet > doluKoltukSayisi)
            {
                throw new Exception("Seferde iade edilecek yeterli sayıda dolu koltuk yok.");
            }

            decimal biletFiyati = KoltukFiyati;
            if (indirimli)
            {
                biletFiyati *= 0.8m;
            }
            decimal toplamFiyat = biletFiyati * adet;

            for (int i = 0; i < adet; i++)
            {
                int indeks = koltuklar.LastIndexOf(true);
                koltuklar[indeks] = false;
            }

            return toplamFiyat;

        }
    }
}
