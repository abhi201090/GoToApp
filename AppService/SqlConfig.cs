using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace AppService
{
    public class SqlConfig
    {
        string connectionString = "";
        public SqlConnection GetConnection()
        {
            connectionString = ConfigurationManager.ConnectionStrings["DBServerConnection"].ToString();
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
            return conn;
        }

        public void CloseConnection(SqlConnection conn)
        {
            conn.Close();
        }
    }
}