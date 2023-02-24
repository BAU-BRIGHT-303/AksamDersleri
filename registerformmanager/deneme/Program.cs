using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace deneme
{
    internal class Program
    {
        static void Main(string[] args)
        {
            KullaniciKayit serhat = new KullaniciKayit("serhat3434", "srht123", "srht@gmail.com");
            serhat.kullaniciBilgi();
            KullaniciKayit barbaros = new KullaniciKayit("barbaros3535", "brbs123", "barbaros@gmail.com", "Barbaros");
            barbaros.kullaniciBilgi();
            KullaniciKayit enes = new KullaniciKayit("enes3434", "ens123", "enes@gmail.com", "Enes", "Karamanoğlu");
            enes.kullaniciBilgi();
            KullaniciKayit yigit = new KullaniciKayit("yiğit1616", "ygt123", "yiğit@gmail.com", "Yiğit", "Paşaoğlu", "12345678910");
            yigit.kullaniciBilgi();
        }
    }
}
