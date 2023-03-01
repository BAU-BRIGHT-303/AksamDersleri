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
    public partial class Form4 : Form
    {
        public Form4()
        {
            InitializeComponent();
        }
		SqlConnection con;

		SqlDataAdapter da;

		DataSet ds;

        SqlCommand cmd;

        public void VeriCek()
		{ 
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=Sepet;Trusted_Connection=True;");
			da = new SqlDataAdapter("SELECT * FROM Sepet", con);
			ds = new DataSet();
			con.Open();
			da.Fill(ds, "Sepet");
            dataGridView10.DataSource = ds.Tables["Sepet"];
			con.Close();
		}

        

        private void Form4_Load(object sender, EventArgs e)
        {
            VeriCek();
        }

        private void btnSil_Click(object sender, EventArgs e)
        {

            string sorgu = "DELETE FROM Sepet WHERE UrunID = @p1";
            cmd = new SqlCommand(sorgu, con);
            cmd.Connection = con;
            cmd.Parameters.AddWithValue("@p1", dataGridView10.CurrentRow.Cells[0].Value.ToString());
            con.Open();
            cmd.ExecuteNonQuery();
            MessageBox.Show("Silme işlemi başarılı");

            con.Close();
            VeriCek();

        }
    }
}
