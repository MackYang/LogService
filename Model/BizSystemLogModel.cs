using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using SoEasy.Model.BaseEntity;
using SoEasy.Common;
using System.Data;


namespace Model
{
    /// <summary>
    /// 
    /// </summary>
    [Serializable]
    public class BizSystemLogModel : Parent
    {
        public override string RequriedFields
        {
            get
            {
                return "Id,System_Id";
            }
        }
        public override System.Collections.Hashtable MappingTableInfo()
        {
            Hashtable ht = new Hashtable();
            ht.Add(Constants.STR_DB_TABLE, "biz_system_log");
            ht.Add(Constants.STR_DB_PK, "Id");
            return ht;
        }
        public override Parent GetModelFromDataTable(DataTable dt)
        {
            BizSystemLogModel x = null;
            if (dt != null && dt.Rows.Count > 0) {
                x = new BizSystemLogModel();
                DataRow dr = dt.Rows[0];
                x.Id = dr["Id"] != DBNull.Value ? long.Parse(dr["Id"].ToString()) : default(long);
                x.System_Id = dr["System_Id"].ToString();
                x.Log_Level = dr["Log_Level"].ToString();
                x.Log_Message = dr["Log_Message"].ToString();
                x.Att_Data = dr["Att_Data"].ToString();
                x.Stack_Info = dr["Stack_Info"].ToString();
                x.Create_Time = dr["Create_Time"] != DBNull.Value ? DateTime.Parse(dr["Create_Time"].ToString()) : default(DateTime);

            }
            return x;
        }



        long id;

        /// <summary>
        ///
        /// </summary>
        [Required]
        public long Id
        {
            get { return id; }
            set { id = value; SetFieldMapping("Id", value); }
        }


        string system_id;

        /// <summary>
        ///系统ID
        /// </summary>
        [Required]
        public string System_Id
        {
            get { return system_id; }
            set { system_id = value; SetFieldMapping("System_Id", value); }
        }


        string log_level;

        /// <summary>
        ///日志级别
        /// </summary>
        [MaxLength(50)]
        public string Log_Level
        {
            get { return log_level; }
            set { log_level = value; SetFieldMapping("Log_Level", value); }
        }


        string log_message;

        /// <summary>
        ///日志内容
        /// </summary>
        public string Log_Message
        {
            get { return log_message; }
            set { log_message = value; SetFieldMapping("Log_Message", value); }
        }


        string att_data;

        /// <summary>
        ///附加数据
        /// </summary>
        public string Att_Data
        {
            get { return att_data; }
            set { att_data = value; SetFieldMapping("Att_Data", value); }
        }


        string stack_info;

        /// <summary>
        ///堆栈信息
        /// </summary>
        public string Stack_Info
        {
            get { return stack_info; }
            set { stack_info = value; SetFieldMapping("Stack_Info", value); }
        }


        DateTime create_time;

        /// <summary>
        ///
        /// </summary>
        public DateTime Create_Time
        {
            get { return create_time; }
            set { create_time = value; SetFieldMapping("Create_Time", value); }
        }



    }
}
