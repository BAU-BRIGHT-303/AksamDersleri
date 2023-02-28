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

namespace Temel_Sql_Baglanti
{
	public partial class Form1 : Form
	{
		public Form1()
		{
			InitializeComponent();
		}
		// con adını vermiş olduğumuz bir SqlConnection türünde nesne ürettik fakat henüz kullanmadık. Bu referans bizim bağlantımızı taşıyan referans olacaktır.
		SqlConnection con;

		//Veri çekme için kullanacağımız SQL komutu barındıracak bir yapı. Connection ve Command arasında genelde köprü vazifesi görür. Böylece ilk SQL sorgumuzu bunun içinde yazıyor olacağız.
		SqlDataAdapter da;

		//Veri çekme dışındaki komutları cmd üzerinden yazıyoruz. 
		SqlCommand cmd;

		//Sorgudan dönen dataları tutacağımız adaptör sonrasında devrey girecek yapı.
		DataSet ds;

		public void VeriCek()
		{
			//formumuz yüklendiği anda verilerin gelmesini istediğimiz için bu alanda bağlantıyı kuracağız ve verileri çağıracağız. 
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=PersonelDB;Trusted_Connection=True;");
			da = new SqlDataAdapter("SELECT * FROM Personeller", con);
			ds = new DataSet();
			//Bağlantımız başlangıçta kapalı olarak gelecektir. Bizim önce bağlantıyı açmamız sonra da veritabanı ile ilişkiyi kurmamız gerekmektedir. İşimiz bitince de bağlantıyı kapatıyor olacağız.

			con.Open();
			//Data adaptörü kullanarak çekeceğimiz veriyi belirtmiş olduğumuz dataset üzerinde tutmak ve bu dataseti bu sorgu vasıtasıyla doldurmak için Fill komutunu da üzerinde kullanıyoruz, opsiyonel olarak alacağımız ikinci parametre ise hangi tabloda bu işlemi gerçekleştireceğimiz ile ilgilidir. Onu da virgül koyarak ikinci parametre olarak yerleştirdik. 
			da.Fill(ds, "Personeller");
			//Şimdi ekranımızdaki dataGridView'a personeller tablosundaki verileri doldurmak için aşağıdaki kodu yazıyoruz. 
			dataGridView1.DataSource = ds.Tables["Personeller"];
			con.Close();
		}

		private void Form1_Load(object sender, EventArgs e)
		{
			VeriCek();
			
		}

		private void button1_Click(object sender, EventArgs e)
		{
			/*Parametresiz dat ekleme işlemi
			cmd = new SqlCommand();
			con.Open();
			cmd.Connection = con;
			cmd.CommandText = "INSERT INTO Personeller (PersonelName, PersonelSurname, City) VALUES ('" + txtName.Text + "', '" + txtSurname.Text + "', '" + txtCity.Text + "')";
			cmd.ExecuteNonQuery();
			con.Close();
			VeriCek();
			*/

			string sorgu = "INSERT INTO Personeller (PersonelName, PersonelSurname,City) VALUES(@p1, @p2, @p3)";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", txtName.Text);
			cmd.Parameters.AddWithValue("@p2", txtSurname.Text);
			cmd.Parameters.AddWithValue("@p3", txtCity.Text);
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			VeriCek();
		}

		private void dataGridView1_CellEnter(object sender, DataGridViewCellEventArgs e)
		{
			txtNo.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
			txtName.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
			txtSurname.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
			txtCity.Text = dataGridView1.CurrentRow.Cells[3].Value.ToString();
		}

		private void btnGuncelle_Click(object sender, EventArgs e)
		{
			string sorgu = "UPDATE Personeller SET PersonelName = @p1, PersonelSurname = @p2, City = @p3 WHERE PersonelID = @p4";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", txtName.Text);
			cmd.Parameters.AddWithValue("@p2", txtSurname.Text);
			cmd.Parameters.AddWithValue("@p3", txtCity.Text);
			cmd.Parameters.AddWithValue("@p4", txtNo.Text);
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			VeriCek();
		}

		private void btnSil_Click(object sender, EventArgs e)
		{
			
			string sorgu = "DELETE FROM Personeller WHERE PersonelID = @p1";
			cmd = new SqlCommand(sorgu, con);
			cmd.Connection = con;
			cmd.Parameters.AddWithValue("@p1", txtNo.Text);
			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
			VeriCek();
		}
	}
}
