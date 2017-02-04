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
            SqlParameter email = new SqlParameter("@email", SqlDbType.VarChar);
            SqlParameter phNo = new SqlParameter("@phNo", SqlDbType.VarChar);
            email.Value = user.Email;
            phNo.Value = user.PhNo;
            SqlConfig config = new SqlConfig();
            SqlCommand cmd = new SqlCommand("SELECT COUNT(*) FROM [DB8807_appuser].[Users] WHERE Email = @email");
            cmd.Connection = config.GetConnection();
            cmd.Parameters.Add(email);
            int row = Int32.Parse(cmd.ExecuteScalar().ToString());
            if (row > 0)
                return "Email already in use";
            cmd.CommandText = "SELECT COUNT(*) FROM [DB8807_appuser].[Users] WHERE Mobile_No = @phNo";
            cmd.Parameters.Clear();
            cmd.Parameters.Add(phNo);
            row = Int32.Parse(cmd.ExecuteScalar().ToString());
            if (row > 0)
                return "Mobile already in use";
            config.CloseConnection(cmd.Connection);
            return "Success";
        }

        public string AddUser(SignUpUser user)
        {
            try
            {
                SqlParameter firstName = new SqlParameter("@firstName", SqlDbType.VarChar);
                SqlParameter lastName = new SqlParameter("@lastName", SqlDbType.VarChar);
                SqlParameter email = new SqlParameter("@email", SqlDbType.VarChar);
                SqlParameter phNo = new SqlParameter("@phNo", SqlDbType.VarChar);
                SqlParameter password = new SqlParameter("@password", SqlDbType.VarChar);
                SqlParameter deviceID = new SqlParameter("@deviceID", SqlDbType.VarChar);
                SqlParameter isActive = new SqlParameter("@isActive", SqlDbType.Bit);
                SqlParameter userType = new SqlParameter("@userType", SqlDbType.Int);
                SqlParameter question = new SqlParameter("@question", SqlDbType.Int);
                SqlParameter anwser = new SqlParameter("@anwser", SqlDbType.VarChar);

                firstName.Value = user.FirstName;
                if (string.IsNullOrEmpty(user.LastName))
                    lastName.Value = DBNull.Value;
                else
                    lastName.Value = user.LastName;
                email.Value = user.Email;
                phNo.Value = user.PhNo;
                password.Value = user.Password;
                deviceID.Value = user.DeviceID;
                isActive.Value = user.IsActive;
                userType.Value = user.UserType;
                question.Value = user.Question;
                anwser.Value = user.Anwser;
                SqlConfig config = new SqlConfig();
                SqlCommand cmd = new SqlCommand("sp_AddNewUser");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = config.GetConnection();
                cmd.Parameters.Add(firstName);
                cmd.Parameters.Add(lastName);
                cmd.Parameters.Add(email);
                cmd.Parameters.Add(phNo);
                cmd.Parameters.Add(password);
                cmd.Parameters.Add(deviceID);
                cmd.Parameters.Add(isActive);
                cmd.Parameters.Add(userType);
                cmd.Parameters.Add(question);
                cmd.Parameters.Add(anwser);
                cmd.ExecuteNonQuery();
                config.CloseConnection(cmd.Connection);
                return "Success";
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }
    }
}