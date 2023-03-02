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
using System.Xml.Linq;

namespace KazikOdev
{
    public partial class Form2 : Form
    {
        public Form2()
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
            con = new SqlConnection("Server=DESKTOP-LE3E201;Database=PersonelDB;Trusted_Connection=True;");
            da = new SqlDataAdapter("SELECT * FROM kisiler", con);
            ds = new DataSet();
            con.Open();

            da.Fill(ds, "kisiler");
            //Şimdi ekranımızdaki dataGridView'a personeller tablosundaki verileri doldurmak için aşağıdaki kodu yazıyoruz. 

            con.Close();
        }
        private void Form2_Load(object sender, EventArgs e)
        {
            VeriCek();

        }
        private void button1_Click(object sender, EventArgs e)
        {
            
            string sorgu = "INSERT INTO Kisiler (Adi,Sifre)VALUES(@p1,@p2)";
            cmd = new SqlCommand(sorgu, con);
            cmd.Connection = con;
            cmd.Parameters.AddWithValue("@p1", txtName1.Text);
            cmd.Parameters.AddWithValue("@p2", txtNo1.Text);
           

            con.Open();
            cmd.ExecuteNonQuery();
            VeriCek();
            con.Close();
        }

       
    }
}
