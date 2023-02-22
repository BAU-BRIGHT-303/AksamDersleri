namespace Windows_Forms_Giris
{
	public partial class Form1 : Form
	{
		public Form1()
		{
			InitializeComponent();
			
		}


		private void Form1_Load(object sender, EventArgs e)
		{

		}

		private void button1_Click(object sender, EventArgs e)
		{
			string yazi = txtVeri.Text;
			listBox1.Items.Add(yazi);
			txtVeri.Clear();
		}

		private void btnTemizle_Click(object sender, EventArgs e)
		{
			//seçili itemý silmek için gereken kod bloðu
			string x = listBox1.SelectedItem.ToString();
			listBox1.Items.Remove(x);

			
			
		}

		private void button2_Click(object sender, EventArgs e)
		{
			listBox1.Items.Clear();
		}

		private void btnTopla_Click(object sender, EventArgs e)
		{
			double x = double.Parse(txtNum1.Text);
			double y = double.Parse(txtNum2.Text);
			double z = double.Parse(txtNum3.Text);

			string sonuc = (x + y + z).ToString();
			 lblSonuc.Text = sonuc;
			lblSonuc.Visible = true;
		}

		private void btnCarp_Click(object sender, EventArgs e)
		{
			double x = double.Parse(txtNum1.Text);
			double y = double.Parse(txtNum2.Text);
			double z = double.Parse(txtNum3.Text);

			string sonuc = (x * y * z).ToString();
			lblSonuc.Text = sonuc;
			lblSonuc.Visible = true;
		}

		private void btnOrt_Click(object sender, EventArgs e)
		{
			double x = double.Parse(txtNum1.Text);
			double y = double.Parse(txtNum2.Text);
			double z = double.Parse(txtNum3.Text);

			string sonuc = ((x + y + z)/3).ToString();
			lblSonuc.Text = sonuc;
			lblSonuc.Visible = true;
			MessageBox.Show(sonuc);
		}

		private void txtTekCift_Click(object sender, EventArgs e)
		{
			int x = Convert.ToInt32(txtTekmiCiftMi.Text);
			if(x % 2 == 0)
			{
				MessageBox.Show("SAYI ÇÝFTTÝR");
			}
			else
			{
				MessageBox.Show("SAYI TEKTÝR");
			}
		}

		private void btnAlanCevreHesapla_Click(object sender, EventArgs e)
		{
						
			if(txtKisaKenar.Text == "" || txtUzunKenar.Text == "")
			{
				MessageBox.Show("Lütfen Geçerli Bir Deðer Giriniz");
			}
			else
			{
				if (rdrAlan.Checked)
				{
					int kk = int.Parse(txtKisaKenar.Text);
					int uk = int.Parse(txtUzunKenar.Text);
					int alan = kk * uk;
					int cevre = (kk + uk) * 2;
					MessageBox.Show(alan.ToString());
				}
				else if (rdrCevre.Checked)
				{
					int kk = int.Parse(txtKisaKenar.Text);
					int uk = int.Parse(txtUzunKenar.Text);
					int alan = kk * uk;
					int cevre = (kk + uk) * 2;
					MessageBox.Show(cevre.ToString());
				}
				else
				{
					MessageBox.Show("Lütfen Geçerli Bir Seçim Yapýnýz");
				}

			}
			
		}
	}
}