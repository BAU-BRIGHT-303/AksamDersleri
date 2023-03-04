using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KazıkOdev
{
    public partial class Form4 : Form
    {
        SqlConnection con;
        public Form4()
        {
            InitializeComponent();
        }

       

        private void Form4_Load(object sender, EventArgs e)
        {
          
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;");
            con.Open();

            // Veri sorgulama için SQL sorgusu
            string sql = "SELECT * FROM Cart";

            // SQL sorgusu için SqlCommand nesnesi
            SqlCommand cmd = new SqlCommand(sql, con);

            // SqlDataReader nesnesi ile verileri okuyun
            SqlDataReader reader = cmd.ExecuteReader();

            // PictureBox ve Label nesneleri için sayaç
            int sayac = 0;

            PictureBox[] urunImg = { pictureBox1, pictureBox2, pictureBox3, pictureBox4, pictureBox5 };
            Label[] urunAd = { label2, label5, label8, label11, label14 };
            Label[] urunAdet = { label3, label6, label9, label12, label15 };
            Label[] urunFiyat = { label4, label7, label10, label13, label16 };

            while (reader.Read())
            {
                string urunAdi = reader["ProductName"].ToString();
                string resimLink = reader["ProductImg"].ToString();
                string adet = reader["Quantity"].ToString();
                string fiyat = reader["RealPrice"].ToString();

                urunImg[sayac].ImageLocation = resimLink;
                urunImg[sayac].SizeMode = PictureBoxSizeMode.StretchImage;
                urunAd[sayac].Text = urunAdi;
                urunAdet[sayac].Text = adet;
                urunFiyat[sayac].Text = fiyat;
                

                sayac++;

                if (sayac >= urunImg.Length) break;
            }

            reader.Close();

            con.Close();
        }
    }
}
