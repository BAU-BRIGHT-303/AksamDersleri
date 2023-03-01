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
    public partial class Form3 : Form
    {
        public Form3()
        {
            InitializeComponent();
        }

        
        SqlConnection con;
        SqlCommand cmd;
        SqlDataAdapter da;
        DataTable dt;
        SqlDataReader dr;

        public void SepeteGit()
        {
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=Sepet;Trusted_Connection=True;");
            da = new SqlDataAdapter("SELECT * FROM Sepet", con);
            dt = new DataTable();
            con.Open();
            da.Fill(dt);
            con.Close();
        }
        private void Form3_Load(object sender, EventArgs e)
        {
            
            con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=Sepet;Trusted_Connection=True;");
            
            con.Open();
            SqlCommand cmd = new SqlCommand("SELECT * FROM Urunler", con);
            SqlDataReader dr = cmd.ExecuteReader();
            List<string> UrunListesi = new List<string>();
            while (dr.Read())
            {
                UrunListesi.Add(dr["UrunAdi"].ToString());
            }
            con.Close();
            UrunListesi = UrunListesi.Distinct().ToList();
            UrunListesi.Sort();
            comboBox1.DataSource = UrunListesi;
            
        }
        
        

        private void comboBox1_SelectedIndexChanged_1(object sender, EventArgs e)
        {
           label1.Text = comboBox1.SelectedItem.ToString();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            SepeteGit();
            string sorgu = "INSERT INTO Sepet (UrunAdi,UrunAdet) VALUES(@p1,@p2)";
            cmd = new SqlCommand(sorgu, con);
            cmd.Connection = con;
            cmd.Parameters.AddWithValue("@p1", label1.Text);
            cmd.Parameters.AddWithValue("@p2", int.Parse(textBox1.Text));
            con.Open();
            cmd.ExecuteNonQuery();
            dr = cmd.ExecuteReader();
           
            MessageBox.Show("Sepete ekleme başarılı");
          
            con.Close();
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form4 frm = new Form4();
            frm.Show();
        }
    }
}
