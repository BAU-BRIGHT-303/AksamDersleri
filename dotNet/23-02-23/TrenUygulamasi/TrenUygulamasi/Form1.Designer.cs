namespace TrenUygulamasi
{
	partial class Form1
	{
		/// <summary>
		///  Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		///  Clean up any resources being used.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows Form Designer generated code

		/// <summary>
		///  Required method for Designer support - do not modify
		///  the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
			this.txtSeyahatAdi = new System.Windows.Forms.TextBox();
			this.label1 = new System.Windows.Forms.Label();
			this.label2 = new System.Windows.Forms.Label();
			this.txtKoltukSayi = new System.Windows.Forms.TextBox();
			this.groupBox1 = new System.Windows.Forms.GroupBox();
			this.btnSeferOlustur = new System.Windows.Forms.Button();
			this.groupBox2 = new System.Windows.Forms.GroupBox();
			this.btnIade = new System.Windows.Forms.Button();
			this.btnSatis = new System.Windows.Forms.Button();
			this.checkBox1 = new System.Windows.Forms.CheckBox();
			this.groupBox3 = new System.Windows.Forms.GroupBox();
			this.btnBosKoltuk = new System.Windows.Forms.Button();
			this.btnHasilat = new System.Windows.Forms.Button();
			this.groupBox1.SuspendLayout();
			this.groupBox2.SuspendLayout();
			this.groupBox3.SuspendLayout();
			this.SuspendLayout();
			// 
			// txtSeyahatAdi
			// 
			this.txtSeyahatAdi.Location = new System.Drawing.Point(20, 48);
			this.txtSeyahatAdi.Name = "txtSeyahatAdi";
			this.txtSeyahatAdi.Size = new System.Drawing.Size(151, 23);
			this.txtSeyahatAdi.TabIndex = 0;
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.BackColor = System.Drawing.Color.Transparent;
			this.label1.Location = new System.Drawing.Point(20, 29);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(60, 15);
			this.label1.TabIndex = 1;
			this.label1.Text = "SEFER ADI";
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.BackColor = System.Drawing.Color.Transparent;
			this.label2.Location = new System.Drawing.Point(20, 80);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(83, 15);
			this.label2.TabIndex = 3;
			this.label2.Text = "KOLTUK SAYISI";
			// 
			// txtKoltukSayi
			// 
			this.txtKoltukSayi.Location = new System.Drawing.Point(20, 99);
			this.txtKoltukSayi.Name = "txtKoltukSayi";
			this.txtKoltukSayi.Size = new System.Drawing.Size(151, 23);
			this.txtKoltukSayi.TabIndex = 2;
			// 
			// groupBox1
			// 
			this.groupBox1.BackColor = System.Drawing.Color.Transparent;
			this.groupBox1.Controls.Add(this.btnSeferOlustur);
			this.groupBox1.Controls.Add(this.label2);
			this.groupBox1.Controls.Add(this.label1);
			this.groupBox1.Controls.Add(this.txtKoltukSayi);
			this.groupBox1.Controls.Add(this.txtSeyahatAdi);
			this.groupBox1.Location = new System.Drawing.Point(175, 47);
			this.groupBox1.Name = "groupBox1";
			this.groupBox1.Size = new System.Drawing.Size(349, 139);
			this.groupBox1.TabIndex = 4;
			this.groupBox1.TabStop = false;
			this.groupBox1.Text = "SEYAHAT BİLGİLERİ";
			// 
			// btnSeferOlustur
			// 
			this.btnSeferOlustur.Location = new System.Drawing.Point(215, 43);
			this.btnSeferOlustur.Name = "btnSeferOlustur";
			this.btnSeferOlustur.Size = new System.Drawing.Size(118, 79);
			this.btnSeferOlustur.TabIndex = 4;
			this.btnSeferOlustur.Text = "SEFER OLUŞTUR";
			this.btnSeferOlustur.UseVisualStyleBackColor = true;
			this.btnSeferOlustur.Click += new System.EventHandler(this.btnSeferOlustur_Click);
			// 
			// groupBox2
			// 
			this.groupBox2.BackColor = System.Drawing.Color.WhiteSmoke;
			this.groupBox2.Controls.Add(this.btnIade);
			this.groupBox2.Controls.Add(this.btnSatis);
			this.groupBox2.Controls.Add(this.checkBox1);
			this.groupBox2.ForeColor = System.Drawing.Color.Red;
			this.groupBox2.Location = new System.Drawing.Point(52, 250);
			this.groupBox2.Name = "groupBox2";
			this.groupBox2.Size = new System.Drawing.Size(296, 139);
			this.groupBox2.TabIndex = 5;
			this.groupBox2.TabStop = false;
			this.groupBox2.Text = "SEYAHAT BİLGİLERİ";
			// 
			// btnIade
			// 
			this.btnIade.Enabled = false;
			this.btnIade.Location = new System.Drawing.Point(150, 43);
			this.btnIade.Name = "btnIade";
			this.btnIade.Size = new System.Drawing.Size(118, 79);
			this.btnIade.TabIndex = 7;
			this.btnIade.Text = "İADE";
			this.btnIade.UseVisualStyleBackColor = true;
			this.btnIade.Click += new System.EventHandler(this.btnIade_Click);
			// 
			// btnSatis
			// 
			this.btnSatis.Enabled = false;
			this.btnSatis.Location = new System.Drawing.Point(19, 43);
			this.btnSatis.Name = "btnSatis";
			this.btnSatis.Size = new System.Drawing.Size(118, 79);
			this.btnSatis.TabIndex = 6;
			this.btnSatis.Text = "SATIŞ";
			this.btnSatis.UseVisualStyleBackColor = true;
			this.btnSatis.Click += new System.EventHandler(this.btnSatis_Click);
			// 
			// checkBox1
			// 
			this.checkBox1.AutoSize = true;
			this.checkBox1.Location = new System.Drawing.Point(20, 23);
			this.checkBox1.Name = "checkBox1";
			this.checkBox1.Size = new System.Drawing.Size(70, 19);
			this.checkBox1.TabIndex = 5;
			this.checkBox1.Text = "İndirimli";
			this.checkBox1.UseVisualStyleBackColor = true;
			// 
			// groupBox3
			// 
			this.groupBox3.BackColor = System.Drawing.Color.White;
			this.groupBox3.Controls.Add(this.btnBosKoltuk);
			this.groupBox3.Controls.Add(this.btnHasilat);
			this.groupBox3.ForeColor = System.Drawing.Color.Red;
			this.groupBox3.Location = new System.Drawing.Point(363, 250);
			this.groupBox3.Name = "groupBox3";
			this.groupBox3.Size = new System.Drawing.Size(277, 139);
			this.groupBox3.TabIndex = 6;
			this.groupBox3.TabStop = false;
			this.groupBox3.Text = "BİLGİLER";
			// 
			// btnBosKoltuk
			// 
			this.btnBosKoltuk.Enabled = false;
			this.btnBosKoltuk.Location = new System.Drawing.Point(147, 43);
			this.btnBosKoltuk.Name = "btnBosKoltuk";
			this.btnBosKoltuk.Size = new System.Drawing.Size(118, 79);
			this.btnBosKoltuk.TabIndex = 5;
			this.btnBosKoltuk.Text = "BOŞKOLTUK SAYISI";
			this.btnBosKoltuk.UseVisualStyleBackColor = true;
			this.btnBosKoltuk.Click += new System.EventHandler(this.btnBosKoltuk_Click);
			// 
			// btnHasilat
			// 
			this.btnHasilat.Enabled = false;
			this.btnHasilat.Location = new System.Drawing.Point(16, 43);
			this.btnHasilat.Name = "btnHasilat";
			this.btnHasilat.Size = new System.Drawing.Size(118, 79);
			this.btnHasilat.TabIndex = 4;
			this.btnHasilat.Text = "HASILAT";
			this.btnHasilat.UseVisualStyleBackColor = true;
			this.btnHasilat.Click += new System.EventHandler(this.btnHasilat_Click);
			// 
			// Form1
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
			this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
			this.ClientSize = new System.Drawing.Size(684, 477);
			this.Controls.Add(this.groupBox3);
			this.Controls.Add(this.groupBox2);
			this.Controls.Add(this.groupBox1);
			this.Name = "Form1";
			this.Text = "Form1";
			this.groupBox1.ResumeLayout(false);
			this.groupBox1.PerformLayout();
			this.groupBox2.ResumeLayout(false);
			this.groupBox2.PerformLayout();
			this.groupBox3.ResumeLayout(false);
			this.ResumeLayout(false);

		}

		#endregion

		private TextBox txtSeyahatAdi;
		private Label label1;
		private Label label2;
		private TextBox txtKoltukSayi;
		private GroupBox groupBox1;
		private Button btnSeferOlustur;
		private GroupBox groupBox2;
		private Button btnIade;
		private Button btnSatis;
		private CheckBox checkBox1;
		private GroupBox groupBox3;
		private Button btnBosKoltuk;
		private Button btnHasilat;
	}
}