using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace postgreAdding.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IMyDbContext _context;

        public HomeController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            MyModel model = new MyModel()
            {
                Id = Guid.NewGuid(),
                Name = "New Name with Random Guid",

            };
            _context.MyModels.Add(model);
            _context.Save();
            return Ok("Good");
        }



    }
}
