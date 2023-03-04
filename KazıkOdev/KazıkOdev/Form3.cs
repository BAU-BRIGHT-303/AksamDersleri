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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace KazıkOdev
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
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;");
            con.Open();
            SqlCommand cmd = new SqlCommand("SELECT * FROM Products", con);
            SqlDataReader dr = cmd.ExecuteReader();
            List<string> categoryList = new List<string>();
            while (dr.Read())
            {
                categoryList.Add(dr["ProductCategory"].ToString());
            }
            con.Close();
            categoryList = categoryList.Distinct().ToList();
            categoryList.Sort();
            comboBox1.DataSource = categoryList;

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string secilenKategori = comboBox1.SelectedItem.ToString();

            // Veritabanı bağlantısı
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;");
            con.Open();

            // Veri sorgulama için SQL sorgusu
            string sql = "SELECT ProductName, ProductPrice, ProductImg FROM Products WHERE ProductCategory=@param1";

            // SQL sorgusu için SqlCommand nesnesi
            SqlCommand cmd = new SqlCommand(sql, con);

            // Parametreleri ayarlayın
            cmd.Parameters.AddWithValue("@param1", secilenKategori);

            // SqlDataReader nesnesi ile verileri okuyun
            SqlDataReader reader = cmd.ExecuteReader();

            // PictureBox ve Label nesneleri için sayaç
            int sayac = 0;

            PictureBox[] urunImg = { pictureBox1, pictureBox2, pictureBox3 };
            Label[] urunAd = { label1, label2, label3 };
            Label[] urunPrice = { label4, label5, label6 };

            while (reader.Read())
            {
                string urunAdi = reader["ProductName"].ToString();
                string resimLink = reader["ProductImg"].ToString();
                string urunFiyat = reader["ProductPrice"].ToString();

                urunImg[sayac].ImageLocation = resimLink;
                urunImg[sayac].SizeMode = PictureBoxSizeMode.StretchImage;
                urunAd[sayac].Text = urunAdi;
                urunPrice[sayac].Text = urunFiyat;

                sayac++;

                if (sayac >= urunImg.Length) break;
            }

            reader.Close();

            con.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (numericUpDown1.Value != 0)
            {
                string urunAdi = label1.Text;
                int urunFiyat = Convert.ToInt32(label4.Text);
                int urunAdet = Convert.ToInt32(numericUpDown1.Value);
                string resimLink = pictureBox1.ImageLocation;
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString = "Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;";
                conn.Open();

                // Veri ekleme için SQL sorgusu
                string sql = "INSERT INTO Cart (ProductName, ProductPrice, Quantity, ProductImg) VALUES (@param1, @param2, @param3, @param4)";

                // SQL sorgusu için SqlCommand nesnesi
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@param1", urunAdi);
                cmd.Parameters.AddWithValue("@param2", urunFiyat);
                cmd.Parameters.AddWithValue("@param3", urunAdet);
                cmd.Parameters.AddWithValue("@param4", resimLink);



                // Sorguyu çalıştır
                cmd.ExecuteNonQuery();
                MessageBox.Show("Ürün sepete eklendi!");
                conn.Close();
            }
            else MessageBox.Show("Ürün adedi 0 seçilemez.");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (numericUpDown2.Value != 0)
            {
                string urunAdi = label2.Text;
                int urunFiyat = Convert.ToInt32(label5.Text);
                int urunAdet = Convert.ToInt32(numericUpDown2.Value);
                string resimLink = pictureBox2.ImageLocation;
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString = "Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;";
                conn.Open();

                // Veri ekleme için SQL sorgusu
                string sql = "INSERT INTO Cart (ProductName, ProductPrice, Quantity, ProductImg) VALUES (@param1, @param2, @param3, @param4)";

                // SQL sorgusu için SqlCommand nesnesi
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@param1", urunAdi);
                cmd.Parameters.AddWithValue("@param2", urunFiyat);
                cmd.Parameters.AddWithValue("@param3", urunAdet);
                cmd.Parameters.AddWithValue("@param4", resimLink);



                // Sorguyu çalıştır
                cmd.ExecuteNonQuery();
                MessageBox.Show("Ürün sepete eklendi!");
                conn.Close();
            }
            else MessageBox.Show("Ürün adedi 0 seçilemez.");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (numericUpDown3.Value != 0)
            {
                string urunAdi = label3.Text;
                int urunFiyat = Convert.ToInt32(label6.Text);
                int urunAdet = Convert.ToInt32(numericUpDown3.Value);
                string resimLink = pictureBox3.ImageLocation;
                SqlConnection conn = new SqlConnection();
                conn.ConnectionString = "Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;";
                conn.Open();

                // Veri ekleme için SQL sorgusu
                string sql = "INSERT INTO Cart (ProductName, ProductPrice, Quantity, ProductImg) VALUES (@param1, @param2, @param3, @param4)";

                // SQL sorgusu için SqlCommand nesnesi
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.Parameters.AddWithValue("@param1", urunAdi);
                cmd.Parameters.AddWithValue("@param2", urunFiyat);
                cmd.Parameters.AddWithValue("@param3", urunAdet);
                cmd.Parameters.AddWithValue("@param4", resimLink);



                // Sorguyu çalıştır
                cmd.ExecuteNonQuery();
                MessageBox.Show("Ürün sepete eklendi!");
                conn.Close();
            }
            else MessageBox.Show("Ürün adedi 0 seçilemez");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form4 f4 = new Form4();
            this.Hide();
            f4.Show();
        }
    }
}
