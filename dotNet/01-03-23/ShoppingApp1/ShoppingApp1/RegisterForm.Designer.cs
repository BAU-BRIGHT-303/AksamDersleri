namespace ShoppingApp1
{
	partial class RegisterForm
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
			this.btnKayitOl = new System.Windows.Forms.Button();
			this.label2 = new System.Windows.Forms.Label();
			this.label1 = new System.Windows.Forms.Label();
			this.txtPass = new System.Windows.Forms.TextBox();
			this.txtUsr = new System.Windows.Forms.TextBox();
			this.label3 = new System.Windows.Forms.Label();
			this.txtEmail = new System.Windows.Forms.TextBox();
			this.SuspendLayout();
			// 
			// btnKayitOl
			// 
			this.btnKayitOl.Location = new System.Drawing.Point(305, 237);
			this.btnKayitOl.Name = "btnKayitOl";
			this.btnKayitOl.Size = new System.Drawing.Size(107, 39);
			this.btnKayitOl.TabIndex = 10;
			this.btnKayitOl.Text = "KAYIT OL";
			this.btnKayitOl.UseVisualStyleBackColor = true;
			this.btnKayitOl.Click += new System.EventHandler(this.btnKayitOl_Click);
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label2.Location = new System.Drawing.Point(325, 132);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(58, 20);
			this.label2.TabIndex = 9;
			this.label2.Text = "ŞİFRE";
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label1.Location = new System.Drawing.Point(288, 79);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(124, 20);
			this.label1.TabIndex = 8;
			this.label1.Text = "KULLANICI ADI";
			// 
			// txtPass
			// 
			this.txtPass.Location = new System.Drawing.Point(218, 155);
			this.txtPass.Multiline = true;
			this.txtPass.Name = "txtPass";
			this.txtPass.Size = new System.Drawing.Size(267, 20);
			this.txtPass.TabIndex = 7;
			// 
			// txtUsr
			// 
			this.txtUsr.Location = new System.Drawing.Point(218, 102);
			this.txtUsr.Name = "txtUsr";
			this.txtUsr.Size = new System.Drawing.Size(267, 20);
			this.txtUsr.TabIndex = 6;
			// 
			// label3
			// 
			this.label3.AutoSize = true;
			this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(162)));
			this.label3.Location = new System.Drawing.Point(321, 188);
			this.label3.Name = "label3";
			this.label3.Size = new System.Drawing.Size(78, 20);
			this.label3.TabIndex = 12;
			this.label3.Text = "E-POSTA";
			// 
			// txtEmail
			// 
			this.txtEmail.Location = new System.Drawing.Point(218, 211);
			this.txtEmail.Multiline = true;
			this.txtEmail.Name = "txtEmail";
			this.txtEmail.Size = new System.Drawing.Size(267, 20);
			this.txtEmail.TabIndex = 11;
			// 
			// RegisterForm
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(686, 314);
			this.Controls.Add(this.label3);
			this.Controls.Add(this.txtEmail);
			this.Controls.Add(this.btnKayitOl);
			this.Controls.Add(this.label2);
			this.Controls.Add(this.label1);
			this.Controls.Add(this.txtPass);
			this.Controls.Add(this.txtUsr);
			this.Name = "RegisterForm";
			this.Text = "RegisterForm";
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private System.Windows.Forms.Button btnKayitOl;
		private System.Windows.Forms.Label label2;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.TextBox txtPass;
		private System.Windows.Forms.TextBox txtUsr;
		private System.Windows.Forms.Label label3;
		private System.Windows.Forms.TextBox txtEmail;
	}
}