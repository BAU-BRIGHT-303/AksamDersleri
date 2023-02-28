namespace KayitProje
{
	partial class Form1
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		/// Clean up any resources being used.
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
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.dataGridView1 = new System.Windows.Forms.DataGridView();
			this.txtAd = new System.Windows.Forms.TextBox();
			this.txtSoyad = new System.Windows.Forms.TextBox();
			this.txtTel = new System.Windows.Forms.TextBox();
			this.btnKaydet = new System.Windows.Forms.Button();
			this.btnGuncelle = new System.Windows.Forms.Button();
			this.btnSil = new System.Windows.Forms.Button();
			this.txtAra = new System.Windows.Forms.TextBox();
			this.btnAra = new System.Windows.Forms.Button();
			this.label1 = new System.Windows.Forms.Label();
			this.label2 = new System.Windows.Forms.Label();
			this.label3 = new System.Windows.Forms.Label();
			((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
			this.SuspendLayout();
			// 
			// dataGridView1
			// 
			this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
			this.dataGridView1.Location = new System.Drawing.Point(28, 69);
			this.dataGridView1.Name = "dataGridView1";
			this.dataGridView1.Size = new System.Drawing.Size(455, 255);
			this.dataGridView1.TabIndex = 0;
			this.dataGridView1.CellEnter += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellEnter);
			// 
			// txtAd
			// 
			this.txtAd.Location = new System.Drawing.Point(631, 113);
			this.txtAd.Name = "txtAd";
			this.txtAd.Size = new System.Drawing.Size(144, 20);
			this.txtAd.TabIndex = 1;
			// 
			// txtSoyad
			// 
			this.txtSoyad.Location = new System.Drawing.Point(631, 151);
			this.txtSoyad.Name = "txtSoyad";
			this.txtSoyad.Size = new System.Drawing.Size(144, 20);
			this.txtSoyad.TabIndex = 2;
			// 
			// txtTel
			// 
			this.txtTel.Location = new System.Drawing.Point(631, 190);
			this.txtTel.Name = "txtTel";
			this.txtTel.Size = new System.Drawing.Size(144, 20);
			this.txtTel.TabIndex = 3;
			// 
			// btnKaydet
			// 
			this.btnKaydet.Location = new System.Drawing.Point(507, 230);
			this.btnKaydet.Name = "btnKaydet";
			this.btnKaydet.Size = new System.Drawing.Size(76, 48);
			this.btnKaydet.TabIndex = 4;
			this.btnKaydet.Text = "KAYDET";
			this.btnKaydet.UseVisualStyleBackColor = true;
			this.btnKaydet.Click += new System.EventHandler(this.btnKaydet_Click);
			// 
			// btnGuncelle
			// 
			this.btnGuncelle.Location = new System.Drawing.Point(600, 230);
			this.btnGuncelle.Name = "btnGuncelle";
			this.btnGuncelle.Size = new System.Drawing.Size(79, 48);
			this.btnGuncelle.TabIndex = 5;
			this.btnGuncelle.Text = "GÜNCELLE";
			this.btnGuncelle.UseVisualStyleBackColor = true;
			this.btnGuncelle.Click += new System.EventHandler(this.btnGuncelle_Click);
			// 
			// btnSil
			// 
			this.btnSil.Location = new System.Drawing.Point(696, 230);
			this.btnSil.Name = "btnSil";
			this.btnSil.Size = new System.Drawing.Size(79, 48);
			this.btnSil.TabIndex = 6;
			this.btnSil.Text = "SİL";
			this.btnSil.UseVisualStyleBackColor = true;
			// 
			// txtAra
			// 
			this.txtAra.Location = new System.Drawing.Point(28, 34);
			this.txtAra.Name = "txtAra";
			this.txtAra.Size = new System.Drawing.Size(367, 20);
			this.txtAra.TabIndex = 7;
			// 
			// btnAra
			// 
			this.btnAra.Location = new System.Drawing.Point(412, 34);
			this.btnAra.Name = "btnAra";
			this.btnAra.Size = new System.Drawing.Size(71, 20);
			this.btnAra.TabIndex = 8;
			this.btnAra.Text = "ARA";
			this.btnAra.UseVisualStyleBackColor = true;
			this.btnAra.Click += new System.EventHandler(this.btnAra_Click);
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label1.Location = new System.Drawing.Point(503, 111);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(32, 20);
			this.label1.TabIndex = 9;
			this.label1.Text = "AD";
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label2.Location = new System.Drawing.Point(503, 151);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(66, 20);
			this.label2.TabIndex = 10;
			this.label2.Text = "SOYAD";
			// 
			// label3
			// 
			this.label3.AutoSize = true;
			this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label3.Location = new System.Drawing.Point(503, 190);
			this.label3.Name = "label3";
			this.label3.Size = new System.Drawing.Size(82, 20);
			this.label3.TabIndex = 11;
			this.label3.Text = "TELEFON";
			// 
			// Form1
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.BackColor = System.Drawing.SystemColors.MenuHighlight;
			this.ClientSize = new System.Drawing.Size(800, 375);
			this.Controls.Add(this.label3);
			this.Controls.Add(this.label2);
			this.Controls.Add(this.label1);
			this.Controls.Add(this.btnAra);
			this.Controls.Add(this.txtAra);
			this.Controls.Add(this.btnSil);
			this.Controls.Add(this.btnGuncelle);
			this.Controls.Add(this.btnKaydet);
			this.Controls.Add(this.txtTel);
			this.Controls.Add(this.txtSoyad);
			this.Controls.Add(this.txtAd);
			this.Controls.Add(this.dataGridView1);
			this.Name = "Form1";
			this.Text = "Form1";
			this.Load += new System.EventHandler(this.Form1_Load);
			((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private System.Windows.Forms.DataGridView dataGridView1;
		private System.Windows.Forms.TextBox txtAd;
		private System.Windows.Forms.TextBox txtSoyad;
		private System.Windows.Forms.TextBox txtTel;
		private System.Windows.Forms.Button btnKaydet;
		private System.Windows.Forms.Button btnGuncelle;
		private System.Windows.Forms.Button btnSil;
		private System.Windows.Forms.TextBox txtAra;
		private System.Windows.Forms.Button btnAra;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.Label label2;
		private System.Windows.Forms.Label label3;
	}
}

