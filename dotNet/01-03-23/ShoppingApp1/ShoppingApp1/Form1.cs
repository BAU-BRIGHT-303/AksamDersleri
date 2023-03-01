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
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace ShoppingApp1
{
	public partial class LoginForm : Form
	{
		SqlConnection connection;
		string connectionString = "Server=DESKTOP-OFVK2FD;Database=ShoppingDB;Trusted_Connection=True;";
		
		public LoginForm()
		{
			
			InitializeComponent();
		}

		private void btnGiris_Click(object sender, EventArgs e)
		{
			connection = new SqlConnection(connectionString);
			string query = "SELECT COUNT(*) FROM Kullanıcılar WHERE KullanıcıAdı = @username AND Sifre = @password";

			SqlCommand command = new SqlCommand(query, connection);
			command.Parameters.AddWithValue("@username", txtUsr.Text);
			command.Parameters.AddWithValue("@password", txtPass.Text);

			// Bağlantıyı aç
			connection.Open();

			// Sorguyu çalıştır
			int result = (int)command.ExecuteScalar();

			// Bağlantıyı kapat
			connection.Close();

			// Sonuç kontrolü
			if (result > 0)
			{
				MessageBox.Show("Giriş başarılı!");
				// TODO: Alışveriş formunu aç
			}
			else
			{
				MessageBox.Show("Kullanıcı adı veya şifre yanlış.");
			}
		}

		private void btnKayitOl_Click(object sender, EventArgs e)
		{
			this.Hide();
			RegisterForm frm1 = new RegisterForm();
			frm1.Show();
		}

		private void label1_Click(object sender, EventArgs e)
		{

		}

		private void txtPass_TextChanged(object sender, EventArgs e)
		{

		}

		private void txtUsr_TextChanged(object sender, EventArgs e)
		{

		}

		private void label2_Click(object sender, EventArgs e)
		{

		}
	}
}
