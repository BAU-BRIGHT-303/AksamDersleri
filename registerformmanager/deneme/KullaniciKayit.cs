using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace deneme
{
    internal class KullaniciKayit
    {
        //Değişken Tanımlamaları
        // Zorunlu alanlar
        string userName, userPass, userEmail;

        //Tercihen doldurulan alanlar
        string name,userSurname, phoneNumber;

        // Tarih bilgisi
        DateTime date;

        //Ayraç tanımlaması
        string ayrac = new string('-', 20);

        // Conctractor Metot Tanımlamaları

        public KullaniciKayit(string userName,string userPass,string userEmail)
        {
            kontrol(userName, userPass, userEmail,"","","");
        }
        public KullaniciKayit(string userName, string userPass, string userEmail,string name)
        {
            kontrol(userName, userPass, userEmail, name, "", "");
        }
        public KullaniciKayit(string userName, string userPass, string userEmail,string name,string userSurname)
        {
            kontrol(userName, userPass, userEmail, name, userSurname, "");
        }
        public KullaniciKayit(string userName, string userPass, string userEmail, string name, string userSurname,string phoneNumber)
        {
            kontrol(userName, userPass, userEmail, name, userSurname, phoneNumber);
        }

        //Kontrol Metodu

        public void kontrol(string userName, string userPass, string userEmail, string name, string userSurname, string phoneNumber) 
        {
            if (userName.Length >= 5) 
            {
                if(userPass.Length >= 6) 
                {
                    if (userEmail.Contains('@')&& userEmail.Contains('.')&& userEmail.Length>13) 
                    {
                        if (name.Length > 0)
                            this.name = name;
                        else
                            this.name = null;
                        if (userSurname.Length > 0)
                            this.userSurname= userSurname;
                        else
                            this.userSurname = null;
                        if (phoneNumber.Length == 11)
                            this.phoneNumber = phoneNumber;
                        this.userName= userName;
                        this.userPass= userPass;
                        this.userEmail= userEmail;
                        this.date= DateTime.Now;
                        Console.WriteLine("\t\n <Kullanıcı Bilgileri Sistemimize Kayıt Edildi> \n\t");
                    }
                    else 
                    {
                        Console.WriteLine("\t\n--> Mail Adresini Tanımsız Girdiniz. \n\t",ayrac,ayrac);
                    }
                }
                else 
                    {
                        Console.WriteLine("\t\n--> Kullanıcı Şifrsi 6 Karakterden Oluşmalıdır. \n\t",ayrac,ayrac);
                    }
            }
            else
            {
                Console.WriteLine("\t\n--> Kullanıcı İsmi 5 Karakterden Kısa Olamaz. \n\t", ayrac, ayrac);
            }
        }

        public void kullaniciBilgi() 
        {
            if (userName != null && userPass != null && userEmail != null)
            {

                Console.WriteLine("-> Kullanıcı Kayıt Tarihi: {0}", date);
                if (name != null && userSurname == null)
                    Console.WriteLine("{0}\n<Kullanıcı Bilgileri>\n{1}\n-> Kullanıcı Adı: {2}\n-> Kulanıcı Şifresi: {3}\n-> Kullanıcı Mail Adresi: {4}\n-> Kullanıcının İsmi: {5}\n{6}", ayrac, ayrac, userName, userPass, userEmail, name, ayrac);
                else if (name != null && userSurname != null && phoneNumber == null)
                    Console.WriteLine("{0}\n<Kullanıcı Bilgileri>\n{1}\n-> Kullanıcı Adı: {2}\n-> Kulanıcı Şifresi: {3}\n-> Kullanıcı Mail Adresi: {4}\n-> Kullanıcının İsmi: {5}\n-> Kullanıcı Soyismi: {6}\n{7}", ayrac, ayrac, userName, userPass, userEmail, name, userSurname, ayrac);
                else if (name != null && userSurname != null && phoneNumber != null)
                    Console.WriteLine("{0}\n<Kullanıcı Bilgileri>\n{1}\n-> Kullanıcı Adı: {2}\n-> Kulanıcı Şifresi: {3}\n-> Kullanıcı Mail Adresi: {4}\n-> Kullanıcının İsmi: {5}\n-> Kullanıcı Soyismi: {6}\n->Telefon Numarası: {7}\n{8}", ayrac, ayrac, userName, userPass, userEmail, name, userSurname, phoneNumber, ayrac);

                else
                    Console.WriteLine("{0}\n<Kullanıcı Bilgileri>\n-> Kullanıcı Adı: {2}\n-> Kullanıcı Şİfresi: {3}\n-> Kullanıcı Mail Adresi: {4}\n{5}", ayrac, ayrac, userName, userPass, userEmail, ayrac);

            }
            else
                Console.WriteLine("\n{0}\n<Kullanıcı Bilgileri Sistemde Bulunamadı>\n{1}", ayrac, ayrac);

        }


    }
}
