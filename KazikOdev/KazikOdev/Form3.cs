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

namespace KazikOdev
{
    public partial class Form3 : Form
    {
        SqlConnection con;
        public Form3()
        {
            InitializeComponent();
        }

        private void Form3_Load(object sender, EventArgs e)
        {
            con = new SqlConnection("Server=DESKTOP-LE3E201;Database=PersonelDB;Trusted_Connection=True;");
            con.Open();
            SqlCommand cmd = new SqlCommand("SELECT * FROM Kategoriler", con);
            SqlDataReader dataReader = cmd.ExecuteReader();
            List<string> countryList = new List<string>();
            while (dataReader.Read())
            {
                countryList.Add(dataReader["UrunKategori"].ToString());
            }
            con.Close();
            countryList = countryList.Distinct().ToList();
            countryList.Sort();
            comboBox1.DataSource = countryList;
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string category = comboBox1.SelectedItem.ToString();

            con = new SqlConnection("Server=DESKTOP-LE3E201;Database=PersonelDB;Trusted_Connection=True;");
            con.Open();

            string sorgu = "SELECT UrunAdi, UrunFiyat, UrunImg FROM Kategoriler WHERE UrunKategori=@p1";

            SqlCommand cmd = new SqlCommand(sorgu,con);
            cmd.Parameters.AddWithValue("@p1", category);

            SqlDataReader reader = cmd.ExecuteReader();
            int sayac = 0;

            PictureBox[] urunImg = { pictureBox1, pictureBox2 };
            Label[] urunAd = { label1, label3 };
            Label[] urunFiyat = { label2, label4 };

            while(reader.Read()) 
            {
                string img = reader["UrunImg"].ToString();
                string ad= reader["UrunAdi"].ToString();
                string fiyat = reader["UrunFiyat"].ToString() ;

                urunImg[sayac].ImageLocation=img;
                urunImg[sayac].SizeMode = PictureBoxSizeMode.StretchImage;
                urunAd[sayac].Text = ad;
                urunFiyat[sayac].Text = fiyat;

                sayac++;

                if (sayac>=urunImg.Length) { break; }

            }

            reader.Close();
            con.Close();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form f4= new Form4();
            this.Hide();
            f4.Show();

        }
    }
}
