using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MotionPictureDMA.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace MotionPictureDMA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotionPictureController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public MotionPictureController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _env = environment;
        }

        [HttpGet]

        public JsonResult Get()
        {

            string query = @"
                              SELECT Id, Name, Description, Release_Year 
                              FROM dbo.MotionPictures
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MotionPictureDMA");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand=new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(table);

        }
    

    [HttpPost]

    public JsonResult Post(MotionPicture mp)
    {
        string query = @"
                              INSERT INTO dbo.MotionPictures
                                    (Name,Description,Release_Year)
                              VALUES (@Name,@Description,@Release_Year)
                               ";
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("MotionPictureDMA");
        SqlDataReader myReader;
        using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        {
            myCon.Open();
            using (SqlCommand myCommand = new SqlCommand(query, myCon))
            {
                myCommand.Parameters.AddWithValue("@Name", mp.Name);
                myCommand.Parameters.AddWithValue("@Description", mp.Description);
                myCommand.Parameters.AddWithValue("@Release_Year", mp.Release_Year);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myReader.Close();
                myCon.Close();

            }
        }

        return new JsonResult("Added Succesfully!");

    }

    [HttpPut]

    public JsonResult Put(MotionPicture mp)
    {
        string query = @"
                              UPDATE dbo.MotionPictures
                              SET Name = @Name, Description = @Description, Release_Year = @Release_Year
                              WHERE Id=@Id
                                    ";
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("MotionPictureDMA");
        SqlDataReader myReader;
        using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        {
            myCon.Open();
            using (SqlCommand myCommand = new SqlCommand(query, myCon))
            {
                myCommand.Parameters.AddWithValue("@Id", mp.Id);
                myCommand.Parameters.AddWithValue("@Name", mp.Name);
                myCommand.Parameters.AddWithValue("@Description", mp.Description);
                myCommand.Parameters.AddWithValue("@Release_Year", mp.Release_Year);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myReader.Close();
                myCon.Close();

            }
        }

        return new JsonResult("Updated Succesfully!");

    }

    [HttpDelete("{id}")]

    public JsonResult Delete(int id)
    {
        string query = @"
                              DELETE FROM dbo.MotionPictures
                              WHERE Id=@Id
                                    ";
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("MotionPictureDMA");
        SqlDataReader myReader;
        using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        {
            myCon.Open();
            using (SqlCommand myCommand = new SqlCommand(query, myCon))
            {
                myCommand.Parameters.AddWithValue("@Id", id);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myReader.Close();
                myCon.Close();

            }
        }

        return new JsonResult("Deleted Succesfully!");

    }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Pictures/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("banner_anonymous.PNG");
            }
        }

    }
}
