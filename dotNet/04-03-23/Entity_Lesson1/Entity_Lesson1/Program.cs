using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity_Lesson1
{
	internal class Program
	{

		public static SqlConnection con;

		static void Main(string[] args)
		{
			//Klasik ADO.NET ile veritabanı erişimi sağlamak
			con = new SqlConnection("Server=DESKTOP-OFVK2FD;Database=NORTHWND;Trusted_Connection=True;");

			SqlCommand cmd = new SqlCommand("SELECT * FROM Employees", con);
			con.Open();
			SqlDataReader dr = cmd.ExecuteReader();
			while (dr.Read())
			{
				Console.WriteLine($"{dr["FirstName"]} {dr["LastName"]}");
			}
			con.Close();
			Console.ReadKey();

			//ORM ile aynı kodun yazım biçimi
			//NORTHWNDContext context = new();
			//var employees = context.employees.ToList();
		}
	}
}
