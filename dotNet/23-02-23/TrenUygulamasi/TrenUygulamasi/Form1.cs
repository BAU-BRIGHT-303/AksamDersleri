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
				MessageBox.Show($"{txtSeyahatAdi.Text} isimli sefer olu�turulmu�tur.");
				btnBosKoltuk.Enabled = true;
				btnHasilat.Enabled = true;
				btnIade.Enabled = true;
				btnSatis.Enabled = true;
			}
			catch
			{
				MessageBox.Show($"Sefer Olu�turulurken Bir Hata Olu�tu. L�tfen De�erleri Kontrol Ediniz");
			}
			

		}

		private void btnSatis_Click(object sender, EventArgs e)
		{
			if (sefer.BosKoltuk() == 0)
			{
				MessageBox.Show($"Yeterince Bilet Satt�n�z");
			}
			else
			{
				sefer.BiletSatis(checkBox1.Checked);
				MessageBox.Show($"Bilet Ba�ar�yla Sat�ld�. Kalan koltuk say�s� {sefer.BosKoltuk()}");
			}
			
		}

		private void btnIade_Click(object sender, EventArgs e)
		{
			if (sefer.HasilatNedir() > 0)
			{
				sefer.BiletIade(checkBox1.Checked);
				MessageBox.Show($"Bilet Ba�ar�yla �ade Edildi. Kalan koltuk say�s� {sefer.BosKoltuk()}");
			}
			else
			{
				MessageBox.Show($"Hen�z Bilet Sat��� Yap�lmad�");

			}
			
			
		}

		private void btnHasilat_Click(object sender, EventArgs e)
		{
			MessageBox.Show($"Toplam has�lat {sefer.HasilatNedir()}");
		}

		private void btnBosKoltuk_Click(object sender, EventArgs e)
		{
			MessageBox.Show($"Bo� Koltuk Say�s� {sefer.BosKoltuk()}");
		}
	}
}