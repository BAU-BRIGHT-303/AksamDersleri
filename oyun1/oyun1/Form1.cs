namespace oyun1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            progressBar1.Value = 100;
            progressBar2.Value = 100;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Random rnd= new Random();
            int vur=rnd.Next(0,15);

            Random rnd2 = new Random();
            int vur2 = rnd.Next(0, 15);

            if (vur > progressBar1.Value)
                progressBar1.Value = 0;
            if (progressBar1.Value == 0)
            {
                MessageBox.Show("Kaybettin");
            }
            else progressBar1.Value = progressBar1.Value - vur;

            if(vur2>progressBar2.Value) 
                progressBar2.Value = 0;
            if(progressBar2.Value== 0) 
            {
                MessageBox.Show("Kazandýn");
            }
            else progressBar2.Value= progressBar2.Value - vur2;


        }

        int hak = 0;

        private void button2_Click(object sender, EventArgs e)
        {
            hak++;
            if (hak < 3) 
            {
                Random saglik = new Random();
                int can = saglik.Next(0, 20);
                if (can > progressBar1.Value)
                    progressBar1.Value = 100;
                else
                    progressBar1.Increment(can);


                Random saglik2 = new Random();
                int can2 = saglik2.Next(0, 20);

                if (can2 > progressBar2.Value)
                    progressBar2.Value = 100;
                else
                    progressBar2.Increment(can2);

            }
            else
            {

                MessageBox.Show("can alamazsýn");

            }
        
        }

        private void button3_Click(object sender, EventArgs e)
        {
            progressBar1.Value = 100;
            progressBar2.Value = 100;
        }
    }
}