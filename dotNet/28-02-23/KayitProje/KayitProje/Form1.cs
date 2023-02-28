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

namespace KayitProje
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

		public void PersonelGetir()
		{
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=PersonelKayitDB;Trusted_Connection=True;");
			da = new SqlDataAdapter("SELECT * FROM Kisiler", con);
			dt = new DataTable();
			con.Open();
			da.Fill(dt);
			dataGridView1.DataSource = dt;
			con.Close();
		}

		private void Form1_Load(object sender, EventArgs e)
		{
			PersonelGetir();
		}

		private void btnKaydet_Click(object sender, EventArgs e)
		{
			string sorgu = "INSERT INTO Kisiler (Ad, Soyad, Telefon) VALUES(@p1,@p2,@p3)";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", txtAd.Text);
			cmd.Parameters.AddWithValue("@p2", txtSoyad.Text);
			cmd.Parameters.AddWithValue("@p3", txtTel.Text);
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			PersonelGetir();
		}

		private void btnGuncelle_Click(object sender, EventArgs e)
		{
			string sorgu = "UPDATE Kisiler SET Ad = @p1, Soyad = @p2, Telefon = @p3 WHERE Id = @p4";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", txtAd.Text);
			cmd.Parameters.AddWithValue("@p2", txtSoyad.Text);
			cmd.Parameters.AddWithValue("@p3", txtTel.Text);
			cmd.Parameters.AddWithValue("@p4", dataGridView1.CurrentRow.Cells[0].Value.ToString()) ;
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			PersonelGetir();
		}

		private void dataGridView1_CellEnter(object sender, DataGridViewCellEventArgs e)
		{
			txtAd.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
			txtSoyad.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
			txtTel.Text = dataGridView1.CurrentRow.Cells[3].Value.ToString();
		}

		private void btnAra_Click(object sender, EventArgs e)
		{
			
			DataView dv = dt.DefaultView;
			dv.RowFilter = "Ad LIKE '" + txtAra.Text + "%'";
			dataGridView1.DataSource = dv;
		}
	}
}
