using Microsoft.AspNetCore.Mvc;
using System.Linq;
using YonetimSistemi.Models;

namespace YonetimSistemi.Controllers
{
    public class BirimController : Controller
    {
        Context c = new Context();
        public IActionResult Index()
        {
            var degerler = c.Birims.ToList();
            return View(degerler);
        }

        [HttpGet]
        public IActionResult YeniBirim()
        {
            return View();
        }
        [HttpPost]
        public IActionResult YeniBirim(Birim b)
        {
            c.Birims.Add(b);
            c.SaveChanges();
            return RedirectToAction("Index");

        }
        public IActionResult BirimSil(int Id)
        {
            var dep = c.Birims.Find(Id);
            c.Birims.Remove(dep);
            c.SaveChanges();
            return RedirectToAction("Index");

        }
        public IActionResult BirimGetir(int Id)
        {
            var depart = c.Birims.Find(Id);
            return View("BirimGetir");

        }
        [HttpPost]
        public IActionResult BirimGuncelle(Birim d)
        {
            var dep = c.Birims.Find(d.BirimId);
            dep.BirimAd = d.BirimAd;
            c.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult BirimDetay(int Id) 
        {
            var degerler = c.Personels.Where(x => x.BirimId == Id).ToList();
            var brmad = c.Birims.Where(x => x.BirimId == Id).Select(y => y.BirimAd).FirstOrDefault();
            ViewBag.brm= brmad;
            return View(degerler);
        }


    }
}
