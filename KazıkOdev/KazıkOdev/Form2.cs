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
    public partial class Form2 : Form
    {
        SqlConnection con;
        SqlDataAdapter da;
        SqlCommand cmd;
        DataSet ds;
        DataTable dt = new DataTable();
        public Form2()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string kullaniciAdi = textBox1.Text;
            string sifre = textBox2.Text;
            con.Open();
            // cmd = new SqlCommand(sorgu, con);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandText = "INSERT INTO Users(UserName, UserPassword) VALUES (@param1,@param2)";
            cmd.Parameters.AddWithValue("@param1", kullaniciAdi);
            cmd.Parameters.AddWithValue("@param2", sifre);
            int sonuc = cmd.ExecuteNonQuery();
            con.Close();
            if (sonuc > 0)
            {
                MessageBox.Show("Kayıt başarıyla eklendi.");
                Form1 f1 = new Form1();
                this.Hide();
                f1.Show();
            }
            else
            {
                MessageBox.Show("Kayıt ekleme başarısız oldu.");
            }

            
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            string connectionString = "Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;";
            con = new SqlConnection(connectionString);
            con.Open();
            con.Close();
        }
    }
}
