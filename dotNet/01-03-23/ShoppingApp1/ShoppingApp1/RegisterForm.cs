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
	public partial class RegisterForm : Form
	{
		SqlConnection connection;
		string connectionString = "Server=DESKTOP-OFVK2FD;Database=ShoppingDB;Trusted_Connection=True;";
		public RegisterForm()
		{
			InitializeComponent();
		}

		public bool UsernameIsOkay(string userName)
		{
			connection = new SqlConnection(connectionString);
			string query = "SELECT COUNT(*) FROM Kullanıcılar WHERE KullanıcıAdı = @Username";
			SqlCommand command = new SqlCommand(query, connection);
			command.Parameters.AddWithValue("@Username", userName);
			connection.Open();
			int count = (int)command.ExecuteScalar();
			connection.Close();
			return count == 0;
		}

		private void btnKayitOl_Click(object sender, EventArgs e)
		{
			// Kullanıcının girdiği kullanıcı adı ve şifreyi alın
			string username = txtUsr.Text;
			string password = txtPass.Text;
			string eposta = txtEmail.Text ;
			

			// Kullanıcı adının benzersiz olup olmadığını kontrol edin
			if (UsernameIsOkay(username))
			{
				// Yeni kullanıcıyı ekleyin
				string insertQuery = "INSERT INTO Kullanıcılar (KullanıcıAdı, Sifre, EPosta) VALUES (@Username, @Password, @EPosta)";
				using (SqlConnection connection = new SqlConnection(connectionString))
				{
					SqlCommand command = new SqlCommand(insertQuery, connection);
					command.Parameters.AddWithValue("@Username", username);
					command.Parameters.AddWithValue("@Password", password);
					command.Parameters.AddWithValue("@EPosta", eposta);
					connection.Open();
					int rowsAffected = command.ExecuteNonQuery();
					if (rowsAffected > 0)
					{
						MessageBox.Show("Kullanıcı kaydedildi!");
						this.Close();
						LoginForm frm1 = new LoginForm();
						frm1.Show();
					}
				}
			}
			else
			{
				MessageBox.Show("Bu kullanıcı adı zaten kullanılıyor, lütfen başka bir tane seçin.");
			}
		}
	}
}
