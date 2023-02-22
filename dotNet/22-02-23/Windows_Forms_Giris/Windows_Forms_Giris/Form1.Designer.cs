namespace Windows_Forms_Giris
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
			this.txtVeri = new System.Windows.Forms.TextBox();
			this.button1 = new System.Windows.Forms.Button();
			this.label1 = new System.Windows.Forms.Label();
			this.listBox1 = new System.Windows.Forms.ListBox();
			this.btnTemizle = new System.Windows.Forms.Button();
			this.button2 = new System.Windows.Forms.Button();
			this.txtNum1 = new System.Windows.Forms.TextBox();
			this.txtNum2 = new System.Windows.Forms.TextBox();
			this.txtNum3 = new System.Windows.Forms.TextBox();
			this.label2 = new System.Windows.Forms.Label();
			this.label3 = new System.Windows.Forms.Label();
			this.label4 = new System.Windows.Forms.Label();
			this.btnTopla = new System.Windows.Forms.Button();
			this.btnCarp = new System.Windows.Forms.Button();
			this.btnOrt = new System.Windows.Forms.Button();
			this.lblSonuc = new System.Windows.Forms.Label();
			this.txtTekmiCiftMi = new System.Windows.Forms.TextBox();
			this.label5 = new System.Windows.Forms.Label();
			this.groupBox1 = new System.Windows.Forms.GroupBox();
			this.groupBox2 = new System.Windows.Forms.GroupBox();
			this.txtTekCift = new System.Windows.Forms.Button();
			this.groupBox3 = new System.Windows.Forms.GroupBox();
			this.groupBox4 = new System.Windows.Forms.GroupBox();
			this.btnAlanCevreHesapla = new System.Windows.Forms.Button();
			this.label7 = new System.Windows.Forms.Label();
			this.label6 = new System.Windows.Forms.Label();
			this.txtUzunKenar = new System.Windows.Forms.TextBox();
			this.txtKisaKenar = new System.Windows.Forms.TextBox();
			this.rdrCevre = new System.Windows.Forms.RadioButton();
			this.rdrAlan = new System.Windows.Forms.RadioButton();
			this.groupBox1.SuspendLayout();
			this.groupBox2.SuspendLayout();
			this.groupBox3.SuspendLayout();
			this.groupBox4.SuspendLayout();
			this.SuspendLayout();
			// 
			// txtVeri
			// 
			this.txtVeri.Location = new System.Drawing.Point(27, 48);
			this.txtVeri.Name = "txtVeri";
			this.txtVeri.Size = new System.Drawing.Size(257, 23);
			this.txtVeri.TabIndex = 0;
			// 
			// button1
			// 
			this.button1.BackColor = System.Drawing.Color.DarkSlateBlue;
			this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
			this.button1.ForeColor = System.Drawing.SystemColors.ButtonFace;
			this.button1.Location = new System.Drawing.Point(27, 90);
			this.button1.Name = "button1";
			this.button1.Size = new System.Drawing.Size(117, 24);
			this.button1.TabIndex = 1;
			this.button1.Text = "EKLE";
			this.button1.UseVisualStyleBackColor = false;
			this.button1.Click += new System.EventHandler(this.button1_Click);
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Location = new System.Drawing.Point(26, 27);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(103, 15);
			this.label1.TabIndex = 2;
			this.label1.Text = "Ekleyeceğimiz Veri";
			// 
			// listBox1
			// 
			this.listBox1.FormattingEnabled = true;
			this.listBox1.ItemHeight = 15;
			this.listBox1.Location = new System.Drawing.Point(27, 172);
			this.listBox1.Name = "listBox1";
			this.listBox1.Size = new System.Drawing.Size(251, 184);
			this.listBox1.TabIndex = 3;
			// 
			// btnTemizle
			// 
			this.btnTemizle.BackColor = System.Drawing.Color.DarkSlateBlue;
			this.btnTemizle.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
			this.btnTemizle.ForeColor = System.Drawing.SystemColors.ButtonFace;
			this.btnTemizle.Location = new System.Drawing.Point(150, 90);
			this.btnTemizle.Name = "btnTemizle";
			this.btnTemizle.Size = new System.Drawing.Size(117, 24);
			this.btnTemizle.TabIndex = 4;
			this.btnTemizle.Text = "SİL";
			this.btnTemizle.UseVisualStyleBackColor = false;
			this.btnTemizle.Click += new System.EventHandler(this.btnTemizle_Click);
			// 
			// button2
			// 
			this.button2.BackColor = System.Drawing.Color.DarkSlateBlue;
			this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
			this.button2.ForeColor = System.Drawing.SystemColors.ButtonFace;
			this.button2.Location = new System.Drawing.Point(88, 133);
			this.button2.Name = "button2";
			this.button2.Size = new System.Drawing.Size(117, 24);
			this.button2.TabIndex = 5;
			this.button2.Text = "HEPSİNİ SİL";
			this.button2.UseVisualStyleBackColor = false;
			this.button2.Click += new System.EventHandler(this.button2_Click);
			// 
			// txtNum1
			// 
			this.txtNum1.Location = new System.Drawing.Point(5, 42);
			this.txtNum1.Name = "txtNum1";
			this.txtNum1.Size = new System.Drawing.Size(86, 23);
			this.txtNum1.TabIndex = 6;
			// 
			// txtNum2
			// 
			this.txtNum2.Location = new System.Drawing.Point(113, 42);
			this.txtNum2.Name = "txtNum2";
			this.txtNum2.Size = new System.Drawing.Size(88, 23);
			this.txtNum2.TabIndex = 7;
			// 
			// txtNum3
			// 
			this.txtNum3.Location = new System.Drawing.Point(222, 42);
			this.txtNum3.Name = "txtNum3";
			this.txtNum3.Size = new System.Drawing.Size(88, 23);
			this.txtNum3.TabIndex = 8;
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Location = new System.Drawing.Point(6, 19);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(37, 15);
			this.label2.TabIndex = 9;
			this.label2.Text = "Sayı 1";
			// 
			// label3
			// 
			this.label3.AutoSize = true;
			this.label3.Location = new System.Drawing.Point(113, 19);
			this.label3.Name = "label3";
			this.label3.Size = new System.Drawing.Size(37, 15);
			this.label3.TabIndex = 10;
			this.label3.Text = "Sayı 2";
			// 
			// label4
			// 
			this.label4.AutoSize = true;
			this.label4.Location = new System.Drawing.Point(222, 22);
			this.label4.Name = "label4";
			this.label4.Size = new System.Drawing.Size(37, 15);
			this.label4.TabIndex = 11;
			this.label4.Text = "Sayı 3";
			// 
			// btnTopla
			// 
			this.btnTopla.Location = new System.Drawing.Point(5, 71);
			this.btnTopla.Name = "btnTopla";
			this.btnTopla.Size = new System.Drawing.Size(75, 23);
			this.btnTopla.TabIndex = 12;
			this.btnTopla.Text = "TOPLA";
			this.btnTopla.UseVisualStyleBackColor = true;
			this.btnTopla.Click += new System.EventHandler(this.btnTopla_Click);
			// 
			// btnCarp
			// 
			this.btnCarp.Location = new System.Drawing.Point(84, 71);
			this.btnCarp.Name = "btnCarp";
			this.btnCarp.Size = new System.Drawing.Size(75, 23);
			this.btnCarp.TabIndex = 13;
			this.btnCarp.Text = "ÇARP";
			this.btnCarp.UseVisualStyleBackColor = true;
			this.btnCarp.Click += new System.EventHandler(this.btnCarp_Click);
			// 
			// btnOrt
			// 
			this.btnOrt.Location = new System.Drawing.Point(165, 71);
			this.btnOrt.Name = "btnOrt";
			this.btnOrt.Size = new System.Drawing.Size(75, 23);
			this.btnOrt.TabIndex = 14;
			this.btnOrt.Text = "ORTALA";
			this.btnOrt.UseVisualStyleBackColor = true;
			this.btnOrt.Click += new System.EventHandler(this.btnOrt_Click);
			// 
			// lblSonuc
			// 
			this.lblSonuc.AutoSize = true;
			this.lblSonuc.Font = new System.Drawing.Font("Segoe UI", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
			this.lblSonuc.Location = new System.Drawing.Point(124, 97);
			this.lblSonuc.Name = "lblSonuc";
			this.lblSonuc.Size = new System.Drawing.Size(89, 37);
			this.lblSonuc.TabIndex = 15;
			this.lblSonuc.Text = "Sonuç";
			this.lblSonuc.Visible = false;
			// 
			// txtTekmiCiftMi
			// 
			this.txtTekmiCiftMi.Location = new System.Drawing.Point(6, 38);
			this.txtTekmiCiftMi.Name = "txtTekmiCiftMi";
			this.txtTekmiCiftMi.Size = new System.Drawing.Size(100, 23);
			this.txtTekmiCiftMi.TabIndex = 16;
			// 
			// label5
			// 
			this.label5.AutoSize = true;
			this.label5.Location = new System.Drawing.Point(12, 20);
			this.label5.Name = "label5";
			this.label5.Size = new System.Drawing.Size(64, 15);
			this.label5.TabIndex = 17;
			this.label5.Text = "Sayı Giriniz";
			// 
			// groupBox1
			// 
			this.groupBox1.BackColor = System.Drawing.Color.SlateBlue;
			this.groupBox1.Controls.Add(this.label1);
			this.groupBox1.Controls.Add(this.txtVeri);
			this.groupBox1.Controls.Add(this.button1);
			this.groupBox1.Controls.Add(this.listBox1);
			this.groupBox1.Controls.Add(this.btnTemizle);
			this.groupBox1.Controls.Add(this.button2);
			this.groupBox1.Location = new System.Drawing.Point(12, 3);
			this.groupBox1.Name = "groupBox1";
			this.groupBox1.Size = new System.Drawing.Size(307, 369);
			this.groupBox1.TabIndex = 18;
			this.groupBox1.TabStop = false;
			this.groupBox1.Text = "Listeye Ekleme Uygulaması";
			// 
			// groupBox2
			// 
			this.groupBox2.BackColor = System.Drawing.Color.LightCyan;
			this.groupBox2.Controls.Add(this.label2);
			this.groupBox2.Controls.Add(this.txtNum1);
			this.groupBox2.Controls.Add(this.txtNum2);
			this.groupBox2.Controls.Add(this.txtNum3);
			this.groupBox2.Controls.Add(this.lblSonuc);
			this.groupBox2.Controls.Add(this.label3);
			this.groupBox2.Controls.Add(this.btnOrt);
			this.groupBox2.Controls.Add(this.label4);
			this.groupBox2.Controls.Add(this.btnCarp);
			this.groupBox2.Controls.Add(this.btnTopla);
			this.groupBox2.Location = new System.Drawing.Point(342, 3);
			this.groupBox2.Name = "groupBox2";
			this.groupBox2.Size = new System.Drawing.Size(343, 143);
			this.groupBox2.TabIndex = 19;
			this.groupBox2.TabStop = false;
			this.groupBox2.Text = "Topla Çarp ortala";
			// 
			// txtTekCift
			// 
			this.txtTekCift.Location = new System.Drawing.Point(119, 37);
			this.txtTekCift.Name = "txtTekCift";
			this.txtTekCift.Size = new System.Drawing.Size(75, 23);
			this.txtTekCift.TabIndex = 20;
			this.txtTekCift.Text = "GÖSTER";
			this.txtTekCift.UseVisualStyleBackColor = true;
			this.txtTekCift.Click += new System.EventHandler(this.txtTekCift_Click);
			// 
			// groupBox3
			// 
			this.groupBox3.Controls.Add(this.txtTekmiCiftMi);
			this.groupBox3.Controls.Add(this.txtTekCift);
			this.groupBox3.Controls.Add(this.label5);
			this.groupBox3.Location = new System.Drawing.Point(342, 152);
			this.groupBox3.Name = "groupBox3";
			this.groupBox3.Size = new System.Drawing.Size(201, 76);
			this.groupBox3.TabIndex = 21;
			this.groupBox3.TabStop = false;
			this.groupBox3.Text = "Tek mi çift mi";
			// 
			// groupBox4
			// 
			this.groupBox4.Controls.Add(this.btnAlanCevreHesapla);
			this.groupBox4.Controls.Add(this.label7);
			this.groupBox4.Controls.Add(this.label6);
			this.groupBox4.Controls.Add(this.txtUzunKenar);
			this.groupBox4.Controls.Add(this.txtKisaKenar);
			this.groupBox4.Controls.Add(this.rdrCevre);
			this.groupBox4.Controls.Add(this.rdrAlan);
			this.groupBox4.Location = new System.Drawing.Point(341, 251);
			this.groupBox4.Name = "groupBox4";
			this.groupBox4.Size = new System.Drawing.Size(328, 175);
			this.groupBox4.TabIndex = 22;
			this.groupBox4.TabStop = false;
			this.groupBox4.Text = "Alan Çevre Hesapla";
			// 
			// btnAlanCevreHesapla
			// 
			this.btnAlanCevreHesapla.Location = new System.Drawing.Point(13, 138);
			this.btnAlanCevreHesapla.Name = "btnAlanCevreHesapla";
			this.btnAlanCevreHesapla.Size = new System.Drawing.Size(100, 23);
			this.btnAlanCevreHesapla.TabIndex = 6;
			this.btnAlanCevreHesapla.Text = "HESAPLA";
			this.btnAlanCevreHesapla.UseVisualStyleBackColor = true;
			this.btnAlanCevreHesapla.Click += new System.EventHandler(this.btnAlanCevreHesapla_Click);
			// 
			// label7
			// 
			this.label7.AutoSize = true;
			this.label7.Location = new System.Drawing.Point(13, 80);
			this.label7.Name = "label7";
			this.label7.Size = new System.Drawing.Size(67, 15);
			this.label7.TabIndex = 5;
			this.label7.Text = "Uzun Kenar";
			// 
			// label6
			// 
			this.label6.AutoSize = true;
			this.label6.Location = new System.Drawing.Point(13, 23);
			this.label6.Name = "label6";
			this.label6.Size = new System.Drawing.Size(61, 15);
			this.label6.TabIndex = 4;
			this.label6.Text = "Kısa Kenar";
			// 
			// txtUzunKenar
			// 
			this.txtUzunKenar.Location = new System.Drawing.Point(13, 98);
			this.txtUzunKenar.Name = "txtUzunKenar";
			this.txtUzunKenar.Size = new System.Drawing.Size(100, 23);
			this.txtUzunKenar.TabIndex = 3;
			// 
			// txtKisaKenar
			// 
			this.txtKisaKenar.Location = new System.Drawing.Point(13, 44);
			this.txtKisaKenar.Name = "txtKisaKenar";
			this.txtKisaKenar.Size = new System.Drawing.Size(100, 23);
			this.txtKisaKenar.TabIndex = 2;
			// 
			// rdrCevre
			// 
			this.rdrCevre.AutoSize = true;
			this.rdrCevre.Location = new System.Drawing.Point(199, 69);
			this.rdrCevre.Name = "rdrCevre";
			this.rdrCevre.Size = new System.Drawing.Size(55, 19);
			this.rdrCevre.TabIndex = 1;
			this.rdrCevre.TabStop = true;
			this.rdrCevre.Text = "Çevre";
			this.rdrCevre.UseVisualStyleBackColor = true;
			// 
			// rdrAlan
			// 
			this.rdrAlan.AutoSize = true;
			this.rdrAlan.Location = new System.Drawing.Point(199, 44);
			this.rdrAlan.Name = "rdrAlan";
			this.rdrAlan.Size = new System.Drawing.Size(49, 19);
			this.rdrAlan.TabIndex = 0;
			this.rdrAlan.TabStop = true;
			this.rdrAlan.Text = "Alan";
			this.rdrAlan.UseVisualStyleBackColor = true;
			// 
			// Form1
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = System.Drawing.Color.Thistle;
			this.ClientSize = new System.Drawing.Size(800, 450);
			this.Controls.Add(this.groupBox4);
			this.Controls.Add(this.groupBox3);
			this.Controls.Add(this.groupBox2);
			this.Controls.Add(this.groupBox1);
			this.Name = "Form1";
			this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "BRIGHT FORM";
			this.Load += new System.EventHandler(this.Form1_Load);
			this.groupBox1.ResumeLayout(false);
			this.groupBox1.PerformLayout();
			this.groupBox2.ResumeLayout(false);
			this.groupBox2.PerformLayout();
			this.groupBox3.ResumeLayout(false);
			this.groupBox3.PerformLayout();
			this.groupBox4.ResumeLayout(false);
			this.groupBox4.PerformLayout();
			this.ResumeLayout(false);

		}

		#endregion

		private TextBox txtVeri;
		private Button button1;
		private Label label1;
		private ListBox listBox1;
		private Button btnTemizle;
		private Button button2;
		private TextBox txtNum1;
		private TextBox txtNum2;
		private TextBox txtNum3;
		private Label label2;
		private Label label3;
		private Label label4;
		private Button btnTopla;
		private Button btnCarp;
		private Button btnOrt;
		private Label lblSonuc;
		private TextBox txtTekmiCiftMi;
		private Label label5;
		private GroupBox groupBox1;
		private GroupBox groupBox2;
		private Button txtTekCift;
		private GroupBox groupBox3;
		private GroupBox groupBox4;
		private Button btnAlanCevreHesapla;
		private Label label7;
		private Label label6;
		private TextBox txtUzunKenar;
		private TextBox txtKisaKenar;
		private RadioButton rdrCevre;
		private RadioButton rdrAlan;
	}
}