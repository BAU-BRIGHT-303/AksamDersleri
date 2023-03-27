using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace YonetimSistemi.Models
{
    
    public class Birim
    {
        public int BirimId { get; set; }
        public string BirimAd { get; set; }
        public IList<Personel> Personels { get; set; }
    }
}
