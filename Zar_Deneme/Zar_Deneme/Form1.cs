namespace Zar_Deneme
{
    public partial class Form1 : Form
    {
     public static   double baslangýc_butce = 100;
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
            pictureBox1.Image = ýmageList1.Images[zar1];
            pictureBox2.Image = ýmageList1.Images[zar2];
            int zar1Son, zar2Son;
            zar1Son = zar1 + 1;
            zar2Son = zar2 + 1;
            double zar_toplam = zar1 + zar2;
            label8.Text = Convert.ToString(baslangýc_butce);
            if (baslangýc_butce >= 0)
            {
                label1.Text = Convert.ToString(zar1Son);
                label2.Text = Convert.ToString(zar2Son);
                label3.Text = Convert.ToString(zar1Son + zar2Son);
                if (zar_toplam == 12 || zar_toplam == 10 || zar_toplam == 6)
                {
                    baslangýc_butce = baslangýc_butce * 3;
                    label8.Text = Convert.ToString(baslangýc_butce);
                    label5.Text = "TEBRÝKLER KAZANDINIZ";
                    timer1.Stop();
                    if (baslangýc_butce < 1)
                    {
                        MessageBox.Show("BÝTTÝ");
                        timer1.Stop();
                        button1.Visible = false;
                    }
                    
                }
                else if (zar_toplam == 8 || zar_toplam == 4 || zar_toplam == 2)
                {
                    baslangýc_butce = baslangýc_butce / 2;
                    label8.Text = Convert.ToString(baslangýc_butce);
                    label5.Text = "2 ZARA 100.000'LÝK OLDUNUZ...";
                    timer1.Stop();
                    if (baslangýc_butce < 1)
                    {
                        MessageBox.Show("BÝTTÝ");
                        timer1.Stop();
                        button1.Visible = false;
                    }
                }
                else
                {
                    label5.Text = "Berabere";
                    timer1.Stop(); 
                }
            }    
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            MessageBox.Show("MERHABA EKREM ABÝ ZAR OYUNUNA HOÞGELDÝNÝZ" +
                " ZARINIZ 12-10-6 SAYILARINDAN BÝRÝNE DENK GELÝRSE X2 KAZANIRSINIZ" +
                " ZARINIZ 8-4-2 SAYILARINDAN BÝRÝNE DENK GELÝRSE X2 KAYBEDERSÝNÝZ...");
        }
    }
}