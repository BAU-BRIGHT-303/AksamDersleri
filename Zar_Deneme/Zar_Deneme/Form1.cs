namespace Zar_Deneme
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();


        }

        private void button1_Click(object sender, EventArgs e)
        {
            timer1.Start();

           
        }

        

        private void timer1_Tick(object sender, EventArgs e)
        {
            int zar1, zar2;
            Random rnd = new Random();
            zar1 = rnd.Next(0, 6);
            zar2 = rnd.Next(0, 6);
            pictureBox1.Image = �mageList1.Images[zar1];
            pictureBox2.Image = �mageList1.Images[zar2];




            int zar1Son, zar2Son;

            zar1Son = zar1 + 1;
            zar2Son = zar2 + 1;
            int zar_toplam = zar1 + zar2;
            int baslang�c_butce = 100;

            label8.Text = Convert.ToString(baslang�c_butce);
            if (baslang�c_butce >= 0)
            {
                if (zar_toplam == 12 || zar_toplam == 10 || zar_toplam == 6)
                {


                    label8.Text = Convert.ToString(baslang�c_butce * 3);
                    label5.Text = "TEBR�KLER KAZANDINIZ";


                }
                else if (zar_toplam == 8 || zar_toplam == 4 || zar_toplam == 2)
                {


                    label8.Text = Convert.ToString(baslang�c_butce / 2);
                    label5.Text = "2 ZARA 100.000'L�K OLDUNUZ...";


                }
                else
                {
                    label5.Text = "Berabere";

                }

            }
            else if  (baslang�c_butce <= 0)
            {
                MessageBox.Show("B�TT�");
            }

            int sayac = 0;

            sayac++;

            if (sayac == 10)
            {
                timer1.Stop();
                sayac = 0;



                label1.Text = Convert.ToString(zar1Son);
                label2.Text = Convert.ToString(zar2Son);
                label3.Text = Convert.ToString(zar1Son + zar2Son);


            }
        }



        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            MessageBox.Show("MERHABA EKREM AB� ZAR OYUNUNA HO�GELD�N�Z" +
                " ZARINIZ 12-10-6 SAYILARINDAN B�R�NE DENK GEL�RSE X2 KAZANIRSINIZ" +
                " ZARINIZ 8-4-2 SAYILARINDAN B�R�NE DENK GEL�RSE X2 KAYBEDERS�N�Z...");
        }
    }
}