using System;

namespace Backend.Models
{
    public class MyModel
    {
        public Guid Id { get; set; }
        
        public string Text { get; set; }

        public string PhoneNumber { get; set; }

        public DateTime DateTime { get; set; }
    }
}
