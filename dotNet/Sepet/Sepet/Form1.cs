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

namespace Sepet
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
		SqlConnection con;
		SqlCommand cmd;
		SqlDataAdapter da;
		DataTable dt;

		public void KullaniciAdi()
		{
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=Sepet;Trusted_Connection=True;");
			da = new SqlDataAdapter("SELECT * FROM Kullanicilar", con);
			dt = new DataTable();
			con.Open();
			da.Fill(dt);
			con.Close();
		}

		private void Form1_Load(object sender, EventArgs e)
		{
			KullaniciAdi();
		}

        private void button1_Click(object sender, EventArgs e)
        {
			KullaniciAdi();
			string sorgu = "INSERT INTO Kullanicilar (KullaniciAdi, Sifre) VALUES(@p1,@p2)";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", textBox1.Text);
			cmd.Parameters.AddWithValue("@p2", int.Parse(textBox2.Text));
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			Form2 frm = new Form2();
			frm.Show();
			
		}

        private void button2_Click(object sender, EventArgs e)
        {

			Form2 frm = new Form2();
			frm.Show();
		}
    }
}
