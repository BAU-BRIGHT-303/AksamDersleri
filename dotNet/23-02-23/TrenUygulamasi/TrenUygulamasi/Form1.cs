namespace TrenUygulamasi
{
	public partial class Form1 : Form
	{
		public Form1()
		{
			InitializeComponent();
		}

		Sefer sefer;

		private void btnSeferOlustur_Click(object sender, EventArgs e)
		{
			try
			{
				sefer = new Sefer(txtSeyahatAdi.Text, int.Parse(txtKoltukSayi.Text));
				MessageBox.Show($"{txtSeyahatAdi.Text} isimli sefer oluþturulmuþtur.");
				btnBosKoltuk.Enabled = true;
				btnHasilat.Enabled = true;
				btnIade.Enabled = true;
				btnSatis.Enabled = true;
			}
			catch
			{
				MessageBox.Show($"Sefer Oluþturulurken Bir Hata Oluþtu. Lütfen Deðerleri Kontrol Ediniz");
			}
			

		}

		private void btnSatis_Click(object sender, EventArgs e)
		{
			if (sefer.BosKoltuk() == 0)
			{
				MessageBox.Show($"Yeterince Bilet Sattýnýz");
			}
			else
			{
				sefer.BiletSatis(checkBox1.Checked);
				MessageBox.Show($"Bilet Baþarýyla Satýldý. Kalan koltuk sayýsý {sefer.BosKoltuk()}");
			}
			
		}

		private void btnIade_Click(object sender, EventArgs e)
		{
			if (sefer.HasilatNedir() > 0)
			{
				sefer.BiletIade(checkBox1.Checked);
				MessageBox.Show($"Bilet Baþarýyla Ýade Edildi. Kalan koltuk sayýsý {sefer.BosKoltuk()}");
			}
			else
			{
				MessageBox.Show($"Henüz Bilet Satýþý Yapýlmadý");

			}
			
			
		}

		private void btnHasilat_Click(object sender, EventArgs e)
		{
			MessageBox.Show($"Toplam hasýlat {sefer.HasilatNedir()}");
		}

		private void btnBosKoltuk_Click(object sender, EventArgs e)
		{
			MessageBox.Show($"Boþ Koltuk Sayýsý {sefer.BosKoltuk()}");
		}
	}
}