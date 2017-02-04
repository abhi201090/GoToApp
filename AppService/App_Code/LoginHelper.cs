using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace AppService
{
    public class LoginHelper
    {
        public int Login(string email, string password)
        {
            SqlParameter paraEmail = new SqlParameter("@email", SqlDbType.VarChar);
            SqlParameter paraPassword = new SqlParameter("@password", SqlDbType.VarChar);
            paraEmail.Value = email;
            paraPassword.Value = password;
            SqlConfig config = new SqlConfig();
            SqlCommand cmd = new SqlCommand("sp_GetUser");
            cmd.Connection = config.GetConnection();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(paraEmail);
            cmd.Parameters.Add(paraPassword);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if(dt != null && dt.Rows.Count > 0)
            {
                return Int32.Parse(dt.Rows[0][0].ToString());
            }
            return 0;
        }
    }
}