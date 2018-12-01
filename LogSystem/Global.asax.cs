using SoEasy.Common;
using SoEasy.Init;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace LogSystem
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start()
        {
            //Thread.Sleep(10000);
            log4net.Config.DOMConfigurator.Configure();
            InitConfigData.InitSettings(Server.MapPath("~/Set.config"), null);


            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        void Application_Error(object sender, EventArgs e)
        {
            // 在出现未处理的错误时运行的代码
            Exception ex = HttpContext.Current.Server.GetLastError();
            Utility.Logger.Error("发生未处理的异常：客户机IP=" + Request.UserHostAddress + ";错误地址:" + Request.Url + ",异常信息:" + ex.Message);
        }

    }
}