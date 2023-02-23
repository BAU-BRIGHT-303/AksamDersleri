using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odev
{
    public class Sefer
    {
        public string SeferAdi { get; set; }
        public int KoltukSayisi { get; set; }
        public double KoltukFiyati { get; set; }
        public int SatilanKoltukSayisi { get; set; }
        public int BosKoltukSayisi { get; set; }
        public double Hasilat { get; set; }
        public int IadeKoltukSayisi { get; set; }
        public int IndirimliIadeKoltukSayisi { get; set; }
        public int IndirimliSatilanKoltukSayisi { get; set; }


        public Sefer(string seferAdi, int koltukSayisi, double koltukFiyati)
        {
            SeferAdi = seferAdi;
            KoltukSayisi = koltukSayisi;
            KoltukFiyati = koltukFiyati;
            BosKoltukSayisi = koltukSayisi;


        }

        public void Sat(int satilanKoltukSayisi, bool indirimliMi)
        {
            if (satilanKoltukSayisi > BosKoltukSayisi)
            {
                MessageBox.Show("Satılacak koltuk sayısı,boş koltuk sayısından büyük olamaz!!!");
            }

            else
            {
                SatilanKoltukSayisi += satilanKoltukSayisi;

                if (indirimliMi)
                {
                    IndirimliSatilanKoltukSayisi += satilanKoltukSayisi;
                }

                BosKoltukSayisi = KoltukSayisi - SatilanKoltukSayisi;
            }


        }

        public void Iade(int iadeKoltukSayisi, bool indirimliMi)
        {
            if (iadeKoltukSayisi > SatilanKoltukSayisi)
            {
                MessageBox.Show("İade edilmek istenen koltuk sayısı,satılan koltuk sayısından büyük olamaz!!!");
            }
            else if (indirimliMi && iadeKoltukSayisi > IndirimliSatilanKoltukSayisi)
            {
                MessageBox.Show("İade edilmek istenen indirimli bilet sayısı, indirimli satılan bilet sayısında büyüktür!!!");
            }
            else
            {
                IadeKoltukSayisi += iadeKoltukSayisi;

                if (indirimliMi)
                {
                    IndirimliIadeKoltukSayisi += iadeKoltukSayisi;
                    IndirimliSatilanKoltukSayisi -= IndirimliIadeKoltukSayisi;
                }

                SatilanKoltukSayisi -= iadeKoltukSayisi;

                BosKoltukSayisi = KoltukSayisi - SatilanKoltukSayisi;
            }


        }

        public double HasilatGetir()
        {
            double hasilat = SatilanKoltukSayisi * KoltukFiyati - (IndirimliSatilanKoltukSayisi * KoltukFiyati * 0.3);

            return hasilat;
        }

        public int BosKoltukGetir()
        {
            return BosKoltukSayisi;
        }

    }
}
