namespace ShoppingApp1
{
	partial class LoginForm
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
			this.txtUsr = new System.Windows.Forms.TextBox();
			this.txtPass = new System.Windows.Forms.TextBox();
			this.label1 = new System.Windows.Forms.Label();
			this.label2 = new System.Windows.Forms.Label();
			this.btnGiris = new System.Windows.Forms.Button();
			this.btnKayitOl = new System.Windows.Forms.Button();
			this.SuspendLayout();
			// 
			// txtUsr
			// 
			this.txtUsr.Location = new System.Drawing.Point(133, 69);
			this.txtUsr.Name = "txtUsr";
			this.txtUsr.Size = new System.Drawing.Size(267, 20);
			this.txtUsr.TabIndex = 0;
			this.txtUsr.TextChanged += new System.EventHandler(this.txtUsr_TextChanged);
			// 
			// txtPass
			// 
			this.txtPass.Location = new System.Drawing.Point(133, 122);
			this.txtPass.Multiline = true;
			this.txtPass.Name = "txtPass";
			this.txtPass.Size = new System.Drawing.Size(267, 20);
			this.txtPass.TabIndex = 1;
			this.txtPass.TextChanged += new System.EventHandler(this.txtPass_TextChanged);
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label1.Location = new System.Drawing.Point(203, 46);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(124, 20);
			this.label1.TabIndex = 2;
			this.label1.Text = "KULLANICI ADI";
			this.label1.Click += new System.EventHandler(this.label1_Click);
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label2.Location = new System.Drawing.Point(240, 99);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(58, 20);
			this.label2.TabIndex = 3;
			this.label2.Text = "ŞİFRE";
			this.label2.Click += new System.EventHandler(this.label2_Click);
			// 
			// btnGiris
			// 
			this.btnGiris.Location = new System.Drawing.Point(133, 168);
			this.btnGiris.Name = "btnGiris";
			this.btnGiris.Size = new System.Drawing.Size(107, 39);
			this.btnGiris.TabIndex = 4;
			this.btnGiris.Text = "GİRİŞ YAP";
			this.btnGiris.UseVisualStyleBackColor = true;
			this.btnGiris.Click += new System.EventHandler(this.btnGiris_Click);
			// 
			// btnKayitOl
			// 
			this.btnKayitOl.Location = new System.Drawing.Point(293, 168);
			this.btnKayitOl.Name = "btnKayitOl";
			this.btnKayitOl.Size = new System.Drawing.Size(107, 39);
			this.btnKayitOl.TabIndex = 5;
			this.btnKayitOl.Text = "KAYIT OL";
			this.btnKayitOl.UseVisualStyleBackColor = true;
			this.btnKayitOl.Click += new System.EventHandler(this.btnKayitOl_Click);
			// 
			// LoginForm
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(532, 266);
			this.Controls.Add(this.btnKayitOl);
			this.Controls.Add(this.btnGiris);
			this.Controls.Add(this.label2);
			this.Controls.Add(this.label1);
			this.Controls.Add(this.txtPass);
			this.Controls.Add(this.txtUsr);
			this.Name = "LoginForm";
			this.Text = "Login";
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private System.Windows.Forms.TextBox txtUsr;
		private System.Windows.Forms.TextBox txtPass;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.Label label2;
		private System.Windows.Forms.Button btnGiris;
		private System.Windows.Forms.Button btnKayitOl;
	}
}

