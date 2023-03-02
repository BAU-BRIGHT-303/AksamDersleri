using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace KazikOdev
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
        
        SqlDataReader dr;

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

        private void Form1_Load(object sender, EventArgs e)
        {
            VeriCek();
        }

        private void button2_Click(object sender, EventArgs e)
        {

            Form f2 = new Form2();
            this.Hide();
            f2.Show();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string sorgu = "SELECT * FROM kisiler where Adi=@p1 AND Sifre=@p2";
            con = new SqlConnection("Server=DESKTOP-LE3E201;Database=PersonelDB;Trusted_Connection=True;");
            cmd = new SqlCommand(sorgu, con);
            cmd.Parameters.AddWithValue("@p1", txtName.Text);
            cmd.Parameters.AddWithValue("@p2", txtNo.Text);
            con.Open();
            dr = cmd.ExecuteReader();
            if (dr.Read())
            {
                MessageBox.Show("Tebrikler! Başarılı bir şekilde giriş yaptınız.");
                Form f3 = new Form3();
                this.Hide();
                f3.Show();
            }
            else
            {
                MessageBox.Show("Kullanıcı adını ve şifrenizi kontrol ediniz.");
            }
            con.Close();
        }
    }
}
