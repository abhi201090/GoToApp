using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using AppService;

namespace AppService.Controllers
{
    public class SignUpController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        public bool Register(JObject obj)
        {
            SignUpUser newUser = obj.ToObject<SignUpUser>();
            SignUpHelper helper = new SignUpHelper();
            string message = helper.CheckUser(newUser);
            string status = helper.AddUser(newUser);
            return true;
        }

        [HttpGet]
        [AllowAnonymous]
        public List<SecurityQuestions> GetQuestions()
        {
            SignUpHelper helper = new SignUpHelper();
            return helper.GetQuestions();
            //return new JObject();
        }

    }
}
