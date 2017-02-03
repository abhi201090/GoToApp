using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppService
{
    public class SignUpUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhNo { get; set; }
        public string Password { get; set; }
        public string DeviceID { get; set; }
        public int IsActive { get; set; }
        public int UserType { get; set; }
        public int Question { get; set; }
        public string Anwser { get; set; }
    }
}