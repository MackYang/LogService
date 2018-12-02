## 日志服务

以WebApi和Web页面的方式提供通用的日志记录与查询服务(基于.NetFramework4.5,写于2015年)

<br/><br/>
###部署说明

在mysql数据库上运行database.sql,以创建库表结构.

<br/>
用VS打开LogSystem.sln解决方案,右击LogSystem项目选择发布,将程序发布到您磁盘的某目录下,修改web.config中的数据库链接字符串,以及log4net配置部分的MariaDBAppender的数据库连接字符串(用于记录系统本身的日志).

<br/>
在IIS(IIS7)以上新建一个网站(而不是添加应用程序),指向发布目录,应用程序池选择NetFramework4.0版本.

<br/>
为该网站添加以下2个MIME类型以正确显示字体图标:

.woff   application/x-font-woff

.woff2   application/x-font-woff


---

###接口说明
 


<div class="table-wrap"><table class="confluenceTable tablesorter tablesorter-default" role="grid"><colgroup><col><col><col><col><col><col></colgroup><thead><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="接口名称: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">接口名称</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="接口地址: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">接口地址</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数说明: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数说明</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="请求方式: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">请求方式</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="返回值: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">返回值</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="备注: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner"><span>备注</span></div></div></th></tr></thead><tbody aria-live="polite" aria-relevant="all"><tr role="row"><td class="confluenceTd">写入日志</td><td class="confluenceTd">API/AddLog</td><td class="confluenceTd"><div class="table-wrap"><table class="confluenceTable tablesorter tablesorter-default" role="grid"><thead><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数名: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数名</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数类型: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数类型</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="备注: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">备注</div></div></th></tr></thead><tbody aria-live="polite" aria-relevant="all"><tr role="row"><td class="confluenceTd">systemId</td><td class="confluenceTd">string</td><td class="confluenceTd">业务系统的ID,每个业务系统一个固定的ID,由接入时分配</td></tr><tr role="row"><td class="confluenceTd"><span>logLevel</span></td><td class="confluenceTd"><span>string</span></td><td class="confluenceTd">日志级别</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>logMessage</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">日志标题,如 "支付时产生异常:网络不通"</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>attData</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">可选,记录日志时附加的业务数据,要求json格式</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>stackInfo</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">可选,堆栈信息,</td></tr><tr role="row"><td colspan="1" class="confluenceTd">
</td><td colspan="1" class="confluenceTd">
</td><td colspan="1" class="confluenceTd">
</td></tr></tbody></table></div></td><td class="confluenceTd">POST</td><td class="confluenceTd"><span style="color: rgb(74,85,96);">{</span>
<span style="color: rgb(74,85,96);">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json_key" style="color: rgb(146,39,143);">"State"</span><span style="color: rgb(74,85,96);">:</span><span class="json_number" style="color: rgb(37,170,226);">1</span><span style="color: rgb(74,85,96);">,</span>
<span style="color: rgb(74,85,96);">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json_key" style="color: rgb(146,39,143);">"Data"</span><span style="color: rgb(74,85,96);">:null</span><span style="color: rgb(74,85,96);">}</span></td><td class="confluenceTd">

State为1时代表成功,Data为null,

State为其它时,Data为具体失败的原因
</td></tr></tbody></table></div><div id="floating-scrollbar" style="position: fixed; bottom: 0px; height: 30px; overflow-x: auto; overflow-y: hidden; display: block; left: 325px; width: 566px;"><div style="border: 1px solid rgb(255, 255, 255); opacity: 0.01; width: 676px;"></div></div>



###使用方式

**日志记录**

记录前的准备:

1,请先在biz_system_log表里添加业务系统的信息,id字段就是业务系统的systemId,一般用guid.

2,重启网站(目的是刷新缓存中的业务系统信息))或用PostMan调用ApiController中的RefreshSystemList方法,该方法参数的systemId是Set.config中配置的,不是数据库中的.

<br/>

记录日志:

如果您使用了Sunny框架,只要修改appsetting.json中的日志配置部分即可.

如果您没用使用Sunny框架,那么需要在程序中通过Post的方式调用ApiController中的AddLog方法.

下面是C#代码的日志辅助类,供参考:

```cs
using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace Demo
{
    class LogHelper
    {
 
        public static async Task<bool> WriteInfo(string msg, object extensionData = null)
        {
            bool flag = false;
 
            string logMessage = msg;
            string attData = "";
 
            if (extensionData != null) {
                try {
                    attData = JsonConvert.SerializeObject(extensionData);
                }
                catch (Exception e) {
 
                }
            }
 
            flag = await AddLog("Info", logMessage, attData, null);
 
            return flag;
 
        }
 
        public static async Task<bool> WriteError(string msg, Exception ex, object extensionData = null)
        {
            bool flag = false;
 
            string logMessage = msg + ":" + ex.Message;
            string stackInfo = ex.StackTrace;
            string attData = "";
 
            if (extensionData != null) {
                try {
                    attData = JsonConvert.SerializeObject(extensionData);
                }
                catch (Exception e) {
 
                }
            }
 
            flag = await AddLog("Error", logMessage, attData, stackInfo);
 
            return flag;
        }
 
 
        private static async Task<bool> AddLog(string logLevel, string logMessage, string attData, string stackInfo)
        {
            bool flag = false;
 
            try {
 
                Dictionary<string, object> dicArgs = new Dictionary<string, object>();
 
                dicArgs.Add("systemId", SystemConfig.config.LogSystemId);
                dicArgs.Add("logLevel", logLevel);
                dicArgs.Add("logMessage", logMessage);
                dicArgs.Add("attData", attData);
                dicArgs.Add("stackInfo", stackInfo);
 
                var res = await NetHelper.Request(SystemConfig.config.LogUrl, dicArgs, "POST");
                OPResult opRes = JsonConvert.DeserializeObject<OPResult>(res);
                if (opRes.State == 1) {
                    flag = true;
                }
                else {
                    Console.WriteLine("调用日志系统失败:" + res);
                }
            }
            catch (Exception ex) {
                Console.WriteLine("调用日志系统失败:" + ex.Message, ex);
            }
 
            return flag;
 
        }
 
 
        private class OPResult
        {
            public int State { get; set; }
 
            public object Data { get; set; }
 
        }
 
    }
}


```

NetHelper:

```cs
using System;

using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
 
namespace Demo
{
    public class NetHelper
    {
        /// <summary>
        /// 发起一次请求--不记录和回传sessionID的
        /// </summary>
        /// <param name="url">请求的URL</param>
        /// <param name="paraDic">请求的参数集合</param>
        /// <param name="requestType">请求方式</param>
        /// <returns></returns>
        public static async Task<string> Request(string url, Dictionary<string, object> paraDic, string requestType, string contentType = "application/x-www-form-urlencoded;charset=UTF-8;", string accept = "", WebHeaderCollection requestHeaderCollection = null)
        {
            try {
                Uri uri = new Uri(url);
 
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
                if (requestHeaderCollection != null) {
                    request.Headers = requestHeaderCollection;
                }
 
                request.ContentType = contentType;
                request.Accept = accept;
                request.Method = requestType.ToString();
                request.ContentLength = 0;
                request.Timeout = 1000 * 20;
 
                if (paraDic != null && paraDic.Count > 0) {
                    StringBuilder sbParams = new StringBuilder();
                    foreach (string item in paraDic.Keys) {
                        if (paraDic[item] != null) {
                            sbParams.Append("&" + item + "=" + HttpUtility.UrlEncode(paraDic[item].ToString()));
                        }
 
                    }
                    sbParams.Remove(0, 1);
 
                    byte[] reqBytes = Encoding.UTF8.GetBytes(sbParams.ToString());
                    request.ContentLength = reqBytes.Length;
                    Stream reqStream = await request.GetRequestStreamAsync();
                    reqStream.Write(reqBytes, 0, reqBytes.Length);
                }
 
                WebResponse response = await request.GetResponseAsync();
                Stream stream = response.GetResponseStream();
                StreamReader sr = new StreamReader(stream);
                string str = sr.ReadToEnd();
                response.Close();
                return str;
            }
            catch (Exception ex) {
                var extenData = new { Url = url, Args = paraDic };
                //LogHelper.WriteError("发送HTTP请求时发生异常：" + ex.Message, ex, extenData);
                Console.WriteLine("发送HTTP请求时发生异常：" + ex.Message);
                return JsonConvert.SerializeObject(new { State = 0, Data = ex.Message });
            }
        }
    }
}
```