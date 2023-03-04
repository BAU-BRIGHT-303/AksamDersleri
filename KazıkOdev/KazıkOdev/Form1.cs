using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KazıkOdev
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        SqlConnection con;
        SqlDataAdapter da;
        SqlCommand cmd;
        DataSet ds;
        DataTable dt = new DataTable();

        private void button2_Click(object sender, EventArgs e)
        {
            Form2 f2 = new Form2();
            this.Hide();
            f2.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string kullaniciAdi = txtKullaniciAdiGiris.Text;
            string kullaniciSifre = txtKullaniciSifreGiris.Text;
            con.Open();
            string sql = "SELECT COUNT(*) FROM Users WHERE UserName=@param1 AND UserPassword=@param2";
            SqlCommand cmd = new SqlCommand(sql, con);
            cmd.Parameters.AddWithValue("@param1", kullaniciAdi);
            cmd.Parameters.AddWithValue("@param2", kullaniciSifre);
            int sayac = (int)cmd.ExecuteScalar();
            if (sayac > 0)
            {
                MessageBox.Show("Giriş başarılı!");
                
                Form3 f3 = new Form3();
                this.Hide();
                f3.Show();
            }
            else
            {
                MessageBox.Show("Kullanıcı adı veya şifre yanlış.");
            }
            con.Close();




        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string connectionString = "Server=DESKTOP-OFVK2FD;Database=AlisverisSepeti;Trusted_Connection=True;";
            con = new SqlConnection(connectionString);
            con.Open();
            con.Close();
        }
    }
}
