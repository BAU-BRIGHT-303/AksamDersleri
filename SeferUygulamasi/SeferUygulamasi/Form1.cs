using System.Security.Authentication.ExtendedProtection;

namespace SeferUygulamasi
{
    public partial class Form1 : Form
    {
        private List<Sefer> seferler;
        private decimal toplamHasilat = 0;
        public Form1()
        {
            InitializeComponent();
            seferler = new List<Sefer>();
            label6.Visible = false;
            label7.Visible = false;
            label8.Visible = false;
            label9.Visible = false;
            button2.Enabled = false;
            button3.Enabled = false;
            button4.Enabled = false;
            button5.Enabled = false;


            checkBox1.Checked = false;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string seferAdi = textBox1.Text;
            int koltukSayisi = int.Parse(textBox2.Text);
            decimal koltukFiyati = decimal.Parse(textBox3.Text);

            Sefer sefer = new Sefer(seferAdi, koltukSayisi, koltukFiyati);
            seferler.Add(sefer);

            comboBox1.Items.Add(seferAdi);

            textBox1.Clear();
            textBox2.Clear();
            textBox3.Clear();

            MessageBox.Show("Sefer eklendi.");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string seferAdi = comboBox1.SelectedItem.ToString();
            Sefer sefer = seferler.Find(s => s.SeferAdi == seferAdi);
            int adet = Convert.ToInt32(numericUpDown1.Value);
            bool indirimli = checkBox1.Checked;

            decimal fiyat = sefer.BiletSatisi(adet, indirimli);
            toplamHasilat += fiyat;
            label9.Text = sefer.BosKoltukSayisi().ToString();
            label8.Text = toplamHasilat.ToString();
            MessageBox.Show(adet.ToString() + " adet bilet satıldı. Toplam fiyat: " + fiyat.ToString() + " ₺");
            numericUpDown1.Value = 0;
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string seferAdi = comboBox1.SelectedItem.ToString();
            Sefer sefer = seferler.Find(s => s.SeferAdi == seferAdi);

            int bosKoltukSayisi = sefer.BosKoltukSayisi();
            label9.Text = bosKoltukSayisi.ToString();
            label8.Text = toplamHasilat.ToString();

            numericUpDown1.Maximum = bosKoltukSayisi;

            button2.Enabled = true;
            button3.Enabled = true;
            button4.Enabled = true;
            button5.Enabled = true;

        }

        private void button3_Click(object sender, EventArgs e)
        {
            string seferAdi = comboBox1.SelectedItem.ToString();
            Sefer sefer = seferler.Find(s => s.SeferAdi == seferAdi);
            int adet = Convert.ToInt32(numericUpDown1.Value);
            bool indirimli = checkBox1.Checked;

            decimal fiyat = sefer.BiletIadesi(adet, indirimli);
            toplamHasilat -= fiyat;
            label9.Text = sefer.BosKoltukSayisi().ToString();
            label8.Text = toplamHasilat.ToString();
            MessageBox.Show(adet.ToString() + " adet bilet iade edildi. Toplam iade tutarı: " + fiyat.ToString() + " ₺");
            numericUpDown1.Value = 0;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            label6.Visible = true;
            label8.Visible = true;
        }

        private void button5_Click(object sender, EventArgs e)
        {
            label7.Visible = true;
            label9.Visible = true;
        }
    }
}