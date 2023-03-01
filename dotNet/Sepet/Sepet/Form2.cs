using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Sepet
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        
        SqlConnection con;
        SqlCommand cmd;
        SqlDataReader dr;
        private void button3_Click(object sender, EventArgs e)
        {
            string ad = textBox4.Text;
            string sifre = textBox3.Text;
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=Sepet;Trusted_Connection=True;");
            cmd = new SqlCommand();
            con.Open();
            cmd.Connection = con;
            cmd.CommandText = "SELECT * FROM Kullanicilar where KullaniciAdi='" + textBox4.Text + "' AND Sifre='" + textBox3.Text + "'";
            dr = cmd.ExecuteReader();
            if (dr.Read())
            {
                MessageBox.Show("Kullanıcı girişi başarılı");
                Form3 f3 = new Form3();
                f3.Show();

            }
            else
            {
                MessageBox.Show("Kullanıcı adı ya da şifre yanlış");
            }

            con.Close();

        }
    }
}
