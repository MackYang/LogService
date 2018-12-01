using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using System.Web.Mvc;
using SoEasy.Logic;
using Model;
using SoEasy.Common;
using System.Data;
using SoEasy.Model.BaseEntity;

namespace LogSystem.Controllers
{


    public class ApiController : Controller
    {
        private static CommonBL comBL = CommonBL.CreateInstance();

        private static bool isLoadSystemList = false;

        public static DataTable systemTable = null;

        public ApiController()
        {
            if (!isLoadSystemList) {

                LoadSystemTable(null);
                isLoadSystemList = true;
            }

        }


        private void LoadSystemTable(OPResult opRes)
        {
            BizSystemModel qm = new BizSystemModel();
            systemTable = comBL.Select(qm, null, opRes, null, null);
        }



        [HttpPost]
        public String GetSystemList()
        {
            OPResult opRes = new OPResult { State = Enums.OPState.Success };
            opRes.Data = systemTable.ToDictionaryList();
            return opRes.ToJsonString();

        }

        
        [HttpPost]
        [ValidateInput(false)]
        public String GetLogList(string keyword, string beginDate, string endDate, string logLevel, string systemId, int pageIndex, int pageSize)
        {
            OPResult opRes = new OPResult { State = Enums.OPState.Success };

            Pager pager = new Pager { PageIndex = pageIndex, PageSize = pageSize };


            BizSystemLogModel model = new BizSystemLogModel();


            NotEqualCondition nec = new NotEqualCondition();
            if (!string.IsNullOrWhiteSpace(keyword)) {
                nec.ConditionSQL = comBL.GetKeywordSQLStrict(keyword, nec.ArgsArr, "log_message", "att_data", "stack_info");
            }
            if (!string.IsNullOrWhiteSpace(beginDate)) {
                nec.AddCondition("create_time>=:beginDate", "beginDate", beginDate);
            }
            if (!string.IsNullOrWhiteSpace(endDate)) {
                nec.AddCondition("create_time<=:endDate", "endDate", endDate);
            }
            if (!string.IsNullOrWhiteSpace(systemId)) {
                model.System_Id = systemId;
            }
            if (!string.IsNullOrWhiteSpace(logLevel)) {
                nec.AddCondition("log_level=:logLevel", "logLevel", logLevel);
            }

            model.OtherCondition = nec;

            DataTable dt = comBL.SelectPage(model, pager, null, opRes, "create_time");
            if (dt != null) {
                dt.Columns.Add("SystemName");
                foreach (DataRow item in dt.Rows) {
                    try {
                        item["SystemName"] = systemTable.Select($"id='{item["system_id"].ToString()}'")[0]["name"];
                    }
                    catch (Exception ex) { }

                }
            }
            opRes.Data = new { ListData = dt.ToDictionaryList(), RowCount = pager.RowCount };

            return opRes.ToJsonString();
        }


        /// <summary>
        /// 添加一条日志记录
        /// </summary>
        /// <returns></returns>
        [ArgsFilter]
        [HttpPost]
        [ValidateInput(false)]
        public string AddLog(string systemId, string logLevel, string logMessage, string attData, string stackInfo)
        {
            OPResult opRes = new OPResult { State = Enums.OPState.Success };

            BizSystemLogModel model = new BizSystemLogModel();

            model.System_Id = systemId;
            model.Log_Level = logLevel;
            model.Log_Message = logMessage;
            model.Att_Data = attData;
            model.Stack_Info = stackInfo;

            comBL.Insert(model, opRes);

            return opRes.ToJsonString();
        }

        [HttpPost]
        public string RefreshSystemList(string systemId)
        {
            OPResult opRes = new OPResult { State = Enums.OPState.Success };

            if (systemId == Vars.SystemID) {
                LoadSystemTable(opRes);
            }
            else {
                opRes.State = Enums.OPState.Fail;
                opRes.Data = "systemId不正确";
            }

            return opRes.ToJsonString();
        }

    }
}
