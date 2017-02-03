using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace AppService
{
    public class SignUpHelper
    {
        public List<SecurityQuestions> GetQuestions()
        {
            SqlConfig config = new SqlConfig();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "sp_GetSecurityQuestions";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = config.GetConnection();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);

            List<SecurityQuestions> questions = new List<SecurityQuestions>();
            questions = (from DataRow row in dt.Rows
                         select new SecurityQuestions
                         {
                             Id = Int32.Parse(row[0].ToString()),
                             Question = row[1].ToString()
                         }).ToList<SecurityQuestions>();

            config.CloseConnection(cmd.Connection);
            return questions;
        }

        public string CheckUser(SignUpUser user)
        {
            return "";
        }

        public string AddUser(SignUpUser user)
        {
            return "";
        }
    }
}