namespace Odev
{

    public partial class Form1 : Form
    {
        Sefer sefer;
        public Form1()
        {
            InitializeComponent();
            groupBox1.BackColor = Color.FromArgb(120, Color.White);
            groupBox2.BackColor = Color.FromArgb(120, Color.White);
            groupBox3.BackColor = Color.FromArgb(120, Color.White);
            groupBox4.BackColor = Color.FromArgb(120, Color.White);

            lblKoltukSayisi.BackColor = Color.Transparent;
            lblSatilanKoltukSayisi.BackColor = Color.Transparent;
            lbIndirimliSatilanKoltukSayisi.BackColor = Color.Transparent;
            lbIadeKoltukSayisi.BackColor = Color.Transparent;
            lbIndýrýmliIadeKoltukSayisi.BackColor = Color.Transparent;
            lbKalanIndirimliKoltukSayisi.BackColor = Color.Transparent;
        }

        private void groupBox3_Enter(object sender, EventArgs e)
        {

        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(textBox1.Text) || string.IsNullOrEmpty(textBox2.Text) || string.IsNullOrEmpty(textBox3.Text))
            {
                MessageBox.Show("Lütfen sefer bilgilerini tam olarak giriniz!!!");
            }

            else
            {
                //int deðiþken
                //try parse, hatalýysa message box
                int koltukSayisi;
                double koltukFiyat;
                if (int.TryParse(textBox2.Text, out koltukSayisi) && double.TryParse(textBox3.Text, out koltukFiyat))
                {
                    sefer = new Sefer(textBox1.Text, koltukSayisi, koltukFiyat);

                    label6.Visible = true;
                    label7.Visible = true;
                    label8.Visible = true;
                    label9.Visible = true;
                    label10.Visible = true;
                    label11.Visible = true;


                    BilgiGuncelle();

                    MessageBox.Show(textBox1.Text + " seferi " + int.Parse(textBox2.Text) + " koltuk ve " + double.Parse(textBox3.Text) + " TL koltuk fiyatý ile oluþturuldu!!!");
                }
                else
                {
                    MessageBox.Show("Lütfen alanlarý uygun þekilde doldurunuz!!!");
                }
            }

        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (SeferOlustuMu())
            {
                int koltukSayisi2;

                if (int.TryParse(textBox4.Text, out koltukSayisi2))
                {
                    sefer.Sat(koltukSayisi2, checkBox1.Checked);
                    checkBox1.Checked = false;
                    textBox4.Clear();

                    BilgiGuncelle();

                }
                else
                {
                    MessageBox.Show("Lütfen alanlarý uygun þekilde doldurunuz!!!");
                }
                
            }

           
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (SeferOlustuMu())
            {

                int koltukSayisi3;

                if (int.TryParse(textBox5.Text, out koltukSayisi3))
                {
                    sefer.Iade(koltukSayisi3, checkBox2.Checked);
                    checkBox2.Checked = false;
                    textBox5.Clear();
                    BilgiGuncelle();
                }
                else
                {
                    MessageBox.Show("Lütfen alanlarý uygun þekilde doldurunuz!!!");
                }
            }



        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (SeferOlustuMu()) { MessageBox.Show("Toplam hasýlat: " + sefer.HasilatGetir() + " TL"); }


        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (SeferOlustuMu())
            {
                MessageBox.Show("Boþ koltuk sayýsý: " + sefer.BosKoltukGetir() + " adet");
            }

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {

        }

        private void lblKoltukSayisi_Click(object sender, EventArgs e)
        {

        }

        private void BilgiGuncelle()
        {
            lblKoltukSayisi.Text = sefer.KoltukSayisi.ToString();
            lblSatilanKoltukSayisi.Text = sefer.SatilanKoltukSayisi.ToString();
            lbIndirimliSatilanKoltukSayisi.Text = sefer.IndirimliSatilanKoltukSayisi.ToString();
            lbIadeKoltukSayisi.Text = sefer.IadeKoltukSayisi.ToString();
            lbIndýrýmliIadeKoltukSayisi.Text = sefer.IndirimliIadeKoltukSayisi.ToString();
            lbKalanIndirimliKoltukSayisi.Text = sefer.IndirimliSatilanKoltukSayisi.ToString();
        }



        private bool SeferOlustuMu()
        {
            if (sefer == null) { MessageBox.Show("Sefer oluþturunuz!!! "); return false; }
            else
            {
                return true;
            }
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}