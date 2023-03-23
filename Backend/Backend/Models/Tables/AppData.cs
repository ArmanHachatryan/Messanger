using System;

namespace Backend.Models.Tables
{
    public class AppData
    {
        public Guid Id { get; set; }

        public string Text { get; set; }

        public string PhoneNumber { get; set; }

        public string Sender { get; set; }

        public DateTime DateTime { get; set; }

        public int Status { get; set; }

    }
}
