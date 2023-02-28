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

namespace NW_VeriCekme
{
	public partial class Form1 : Form
	{
		SqlConnection con;
		
		public Form1()
		{
			InitializeComponent();
		}

		private void Form1_Load(object sender, EventArgs e)
		{
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=NORTHWND;Trusted_Connection=True;");
			con.Open();
			SqlCommand cmd = new SqlCommand("SELECT * FROM Customers", con);
			SqlDataReader dr = cmd.ExecuteReader();
			List<string> countryList = new List<string>();
			while (dr.Read())
			{
				countryList.Add(dr["Country"].ToString());
			}
			con.Close();
			countryList = countryList.Distinct().ToList();
			countryList.Sort();
			comboBox1.DataSource= countryList;
		}
	}
}
