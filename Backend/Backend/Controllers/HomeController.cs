using Backend.Models;
using Backend.Models.Tables;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly IPostgreDbContext _context;

        public HomeController(IPostgreDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetData()
        {

            return Json(_context.Data.ToList());
        }

        [HttpPost]
        public IActionResult PostData()
        {
            string text = Request.Form["textMessage"];
            string name = Request.Form["userName"];

            AppData model = new AppData()
            {
                Id = Guid.NewGuid(),
                Text = text,
                Status = 3,
                PhoneNumber = "+77777777",
                DateTime = DateTime.Now,
                Sender = name,
            };

            _context.Data.Add(model);
            _context.Save();
            return Ok("good");
        }
        

    }
}
