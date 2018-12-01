使用方式请见http://10.66.30.115:8090/x/TQPO




<div id="content" class="page view">

<div id="action-messages">
                        </div>

            <script type="text/x-template" title="searchResultsGrid">
    <table class="aui">
        <thead>
            <tr class="header">
                <th class="search-result-title">页面标题</th>
                <th class="search-result-space">空间</th>
                <th class="search-result-date">更新于</th>
            </tr>
        </thead>
    </table>
</script>
<script type="text/x-template" title="searchResultsGridCount">

{0}

</script>
<script type="text/x-template" title="searchResultsGridRow">
    <tr class="search-result">
        <td class="search-result-title">[<span>{0}</span>]({1})</td>
        <td class="search-result-space">[{3}](/display/{4}/ "{3}")</td>
        <td class="search-result-date"><span class="date" title="{6}">{5}</span></td>
    </tr>
</script>

        [转至元数据结尾](#page-metadata-end)
<div id="page-metadata-start" class="assistive"></div>

    <div class="page-metadata">

*   创建： <span class="author">     [杨家勇 JiaYong.Yang](    /display/~yangjiayong@gznb.com&#10;)</span>，最新修改于： [六月 22, 2017](/pages/diffpagesbyversion.action?pageId=13501261&amp;selectedPageVersions=2&amp;selectedPageVersions=3 "查看变更")
    </div>

[转至元数据起始](#page-metadata-start)
<div id="page-metadata-end" class="assistive"></div>

        <div id="main-content" class="wiki-content">

## **用于提供统一日志记录服务**

<span style="color: rgb(51,204,204);">测试环境服务地址:10.66.30.66:7000</span>

<span style="color: rgb(51,204,204);"><span style="color: rgb(51,51,153);">PRE环境服务地址:[<span style="color: rgb(51,51,153);">1</span>](http://filein-dev4.gznb.com/)0.66.150.140:7000</span>
</span>

<span style="color: rgb(51,102,255);">生产环境服务地址:[1](http://filein-dev4.gznb.com)0.66.140.9:7000</span>

**接口说明:**

**
**
<div class="table-wrap"><table class="confluenceTable tablesorter tablesorter-default" role="grid"><colgroup><col><col><col><col><col><col></colgroup><thead><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="接口名称: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">接口名称</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="接口地址: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">接口地址</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数说明: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数说明</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="请求方式: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">请求方式</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="返回值: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">返回值</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="备注: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner"><span>备注</span></div></div></th></tr></thead><tbody aria-live="polite" aria-relevant="all"><tr role="row"><td class="confluenceTd">写入日志</td><td class="confluenceTd">API/AddLog</td><td class="confluenceTd"><div class="table-wrap"><table class="confluenceTable tablesorter tablesorter-default" role="grid"><thead><tr role="row" class="tablesorter-headerRow"><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数名: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数名</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="参数类型: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">参数类型</div></div></th><th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="备注: No sort applied, activate to apply an ascending sort" style="user-select: none;"><div class="tablesorter-header-inner"><div class="tablesorter-header-inner">备注</div></div></th></tr></thead><tbody aria-live="polite" aria-relevant="all"><tr role="row"><td class="confluenceTd">systemId</td><td class="confluenceTd">string</td><td class="confluenceTd">业务系统的ID,每个业务系统一个固定的ID,由接入时分配</td></tr><tr role="row"><td class="confluenceTd"><span>logLevel</span></td><td class="confluenceTd"><span>string</span></td><td class="confluenceTd">日志级别,"Info"或"Error"</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>logMessage</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">日志标题,如 "支付时产生异常:网络不通"</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>attData</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">可选,记录日志时附加的业务数据,要求json格式</td></tr><tr role="row"><td colspan="1" class="confluenceTd"><span>stackInfo</span></td><td colspan="1" class="confluenceTd"><span>string</span></td><td colspan="1" class="confluenceTd">可选,堆栈信息,</td></tr><tr role="row"><td colspan="1" class="confluenceTd">
</td><td colspan="1" class="confluenceTd">
</td><td colspan="1" class="confluenceTd">
</td></tr></tbody></table></div></td><td class="confluenceTd">POST</td><td class="confluenceTd"><span style="color: rgb(74,85,96);">{</span>
<span style="color: rgb(74,85,96);">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json_key" style="color: rgb(146,39,143);">"State"</span><span style="color: rgb(74,85,96);">:</span><span class="json_number" style="color: rgb(37,170,226);">1</span><span style="color: rgb(74,85,96);">,</span>
<span style="color: rgb(74,85,96);">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json_key" style="color: rgb(146,39,143);">"Data"</span><span style="color: rgb(74,85,96);">:null</span><span style="color: rgb(74,85,96);">}</span></td><td class="confluenceTd">

State为1时代表成功,Data为null,

State为其它时,Data为具体失败的原因
</td></tr></tbody></table></div><div id="floating-scrollbar" style="position: fixed; bottom: 0px; height: 30px; overflow-x: auto; overflow-y: hidden; display: block; left: 325px; width: 566px;"><div style="border: 1px solid rgb(255, 255, 255); opacity: 0.01; width: 676px;"></div></div>

### 下面是C#代码的日志辅助类,供参考:

`using&nbsp;Newtonsoft.Json;`
<div class="line number2 index1 alt1">`using&nbsp;System;`</div><div class="line number3 index2 alt2">`using&nbsp;System.Collections.Generic;`</div><div class="line number4 index3 alt1">`using&nbsp;System.Linq;`</div><div class="line number5 index4 alt2">`using&nbsp;System.Text;`</div><div class="line number6 index5 alt1">`using&nbsp;System.Threading.Tasks;`</div><div class="line number7 index6 alt2">&nbsp;</div><div class="line number8 index7 alt1">`namespace&nbsp;CpuWatch`</div><div class="line number9 index8 alt2">`{`</div><div class="line number10 index9 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;``class`&nbsp;`LogHelper`</div><div class="line number11 index10 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number12 index11 alt1">&nbsp;</div><div class="line number13 index12 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;static&nbsp;async&nbsp;Task&lt;bool&gt;&nbsp;WriteInfo(string&nbsp;msg,&nbsp;object&nbsp;extensionData&nbsp;=&nbsp;null)`</div><div class="line number14 index13 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number15 index14 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``bool&nbsp;flag&nbsp;=&nbsp;``false``;`</div><div class="line number16 index15 alt1">&nbsp;</div><div class="line number17 index16 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;logMessage&nbsp;=&nbsp;msg;`</div><div class="line number18 index17 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;attData&nbsp;=&nbsp;``""``;`</div><div class="line number19 index18 alt2">&nbsp;</div><div class="line number20 index19 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(extensionData&nbsp;!=&nbsp;null)&nbsp;{`</div><div class="line number21 index20 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``try&nbsp;{`</div><div class="line number22 index21 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``attData&nbsp;=&nbsp;JsonConvert.SerializeObject(extensionData);`</div><div class="line number23 index22 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number24 index23 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``catch&nbsp;(``Exception`&nbsp;`e)&nbsp;{`</div><div class="line number25 index24 alt2">&nbsp;</div><div class="line number26 index25 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number27 index26 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number28 index27 alt1">&nbsp;</div><div class="line number29 index28 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``flag&nbsp;=&nbsp;await&nbsp;AddLog(``"Info"``,&nbsp;logMessage,&nbsp;attData,&nbsp;null);`</div><div class="line number30 index29 alt1">&nbsp;</div><div class="line number31 index30 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``return`&nbsp;`flag;`</div><div class="line number32 index31 alt1">&nbsp;</div><div class="line number33 index32 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number34 index33 alt1">&nbsp;</div><div class="line number35 index34 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;static&nbsp;async&nbsp;Task&lt;bool&gt;&nbsp;WriteError(string&nbsp;msg,&nbsp;``Exception`&nbsp;`ex,&nbsp;object&nbsp;extensionData&nbsp;=&nbsp;null)`</div><div class="line number36 index35 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number37 index36 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``bool&nbsp;flag&nbsp;=&nbsp;``false``;`</div><div class="line number38 index37 alt1">&nbsp;</div><div class="line number39 index38 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;logMessage&nbsp;=&nbsp;msg&nbsp;+&nbsp;``":"`&nbsp;`+&nbsp;ex.Message;`</div><div class="line number40 index39 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;stackInfo&nbsp;=&nbsp;ex.StackTrace;`</div><div class="line number41 index40 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;attData&nbsp;=&nbsp;``""``;`</div><div class="line number42 index41 alt1">&nbsp;</div><div class="line number43 index42 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(extensionData&nbsp;!=&nbsp;null)&nbsp;{`</div><div class="line number44 index43 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``try&nbsp;{`</div><div class="line number45 index44 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``attData&nbsp;=&nbsp;JsonConvert.SerializeObject(extensionData);`</div><div class="line number46 index45 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number47 index46 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``catch&nbsp;(``Exception`&nbsp;`e)&nbsp;{`</div><div class="line number48 index47 alt1">&nbsp;</div><div class="line number49 index48 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number50 index49 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number51 index50 alt2">&nbsp;</div><div class="line number52 index51 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``flag&nbsp;=&nbsp;await&nbsp;AddLog(``"Error"``,&nbsp;logMessage,&nbsp;attData,&nbsp;stackInfo);`</div><div class="line number53 index52 alt2">&nbsp;</div><div class="line number54 index53 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``return`&nbsp;`flag;`</div><div class="line number55 index54 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number56 index55 alt1">&nbsp;</div><div class="line number57 index56 alt2">&nbsp;</div><div class="line number58 index57 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``private&nbsp;static&nbsp;async&nbsp;Task&lt;bool&gt;&nbsp;AddLog(string&nbsp;logLevel,&nbsp;string&nbsp;logMessage,&nbsp;string&nbsp;attData,&nbsp;string&nbsp;stackInfo)`</div><div class="line number59 index58 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number60 index59 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``bool&nbsp;flag&nbsp;=&nbsp;``false``;`</div><div class="line number61 index60 alt2">&nbsp;</div><div class="line number62 index61 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``try&nbsp;{`</div><div class="line number63 index62 alt2">&nbsp;</div><div class="line number64 index63 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Dictionary&lt;string,&nbsp;object&gt;&nbsp;dicArgs&nbsp;=&nbsp;``new`&nbsp;`Dictionary&lt;string,&nbsp;object&gt;();`</div><div class="line number65 index64 alt2">&nbsp;</div><div class="line number66 index65 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``dicArgs.Add(``"systemId"``,&nbsp;SystemConfig.config.LogSystemId);`</div><div class="line number67 index66 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``dicArgs.Add(``"logLevel"``,&nbsp;logLevel);`</div><div class="line number68 index67 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``dicArgs.Add(``"logMessage"``,&nbsp;logMessage);`</div><div class="line number69 index68 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``dicArgs.Add(``"attData"``,&nbsp;attData);`</div><div class="line number70 index69 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``dicArgs.Add(``"stackInfo"``,&nbsp;stackInfo);`</div><div class="line number71 index70 alt2">&nbsp;</div><div class="line number72 index71 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``var&nbsp;res&nbsp;=&nbsp;await&nbsp;NetHelper.Request(SystemConfig.config.LogUrl,&nbsp;dicArgs,&nbsp;``"POST"``);`</div><div class="line number73 index72 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``OPResult&nbsp;opRes&nbsp;=&nbsp;JsonConvert.DeserializeObject&lt;OPResult&gt;(res);`</div><div class="line number74 index73 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(opRes.State&nbsp;==&nbsp;``1``)&nbsp;{`</div><div class="line number75 index74 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``flag&nbsp;=&nbsp;``true``;`</div><div class="line number76 index75 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number77 index76 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``else`&nbsp;`{`</div><div class="line number78 index77 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Console.WriteLine(``"调用日志系统失败:"`&nbsp;`+&nbsp;res);`</div><div class="line number79 index78 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number80 index79 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number81 index80 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``catch&nbsp;(``Exception`&nbsp;`ex)&nbsp;{`</div><div class="line number82 index81 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Console.WriteLine(``"调用日志系统失败:"`&nbsp;`+&nbsp;ex.Message,&nbsp;ex);`</div><div class="line number83 index82 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number84 index83 alt1">&nbsp;</div><div class="line number85 index84 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``return`&nbsp;`flag;`</div><div class="line number86 index85 alt1">&nbsp;</div><div class="line number87 index86 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number88 index87 alt1">&nbsp;</div><div class="line number89 index88 alt2">&nbsp;</div><div class="line number90 index89 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``private&nbsp;``class`&nbsp;`OPResult`</div><div class="line number91 index90 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number92 index91 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;int&nbsp;State&nbsp;{&nbsp;get;&nbsp;set;&nbsp;}`</div><div class="line number93 index92 alt2">&nbsp;</div><div class="line number94 index93 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;object&nbsp;Data&nbsp;{&nbsp;get;&nbsp;set;&nbsp;}`</div><div class="line number95 index94 alt2">&nbsp;</div><div class="line number96 index95 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number97 index96 alt2">&nbsp;</div><div class="line number98 index97 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number99 index98 alt2">`}`</div>

### NetHelper:

`using&nbsp;System;`
<div class="line number3 index2 alt2">`using&nbsp;System.Collections.Generic;`</div><div class="line number4 index3 alt1">`using&nbsp;System.``IO``;`</div><div class="line number5 index4 alt2">`using&nbsp;System.Linq;`</div><div class="line number6 index5 alt1">`using&nbsp;System.Net;`</div><div class="line number7 index6 alt2">`using&nbsp;System.Text;`</div><div class="line number8 index7 alt1">`using&nbsp;System.Threading.Tasks;`</div><div class="line number9 index8 alt2">`using&nbsp;System.Web;`</div><div class="line number10 index9 alt1">&nbsp;</div><div class="line number11 index10 alt2">`namespace&nbsp;CpuWatch`</div><div class="line number12 index11 alt1">`{`</div><div class="line number13 index12 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;``class`&nbsp;`NetHelper`</div><div class="line number14 index13 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number15 index14 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;summary&gt;`</div><div class="line number16 index15 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;发起一次请求--不记录和回传sessionID的`</div><div class="line number17 index16 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;/summary&gt;`</div><div class="line number18 index17 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;param&nbsp;name=``"url"``&gt;请求的``URL``&lt;/param&gt;`</div><div class="line number19 index18 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;param&nbsp;name=``"paraDic"``&gt;请求的参数集合&lt;/param&gt;`</div><div class="line number20 index19 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;param&nbsp;name=``"requestType"``&gt;请求方式&lt;/param&gt;`</div><div class="line number21 index20 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``///&nbsp;&lt;returns&gt;&lt;/returns&gt;`</div><div class="line number22 index21 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``public&nbsp;static&nbsp;async&nbsp;Task&lt;string&gt;&nbsp;Request(string&nbsp;url,&nbsp;Dictionary&lt;string,&nbsp;object&gt;&nbsp;paraDic,&nbsp;string&nbsp;requestType,&nbsp;string&nbsp;contentType&nbsp;=&nbsp;``"application/x-www-form-urlencoded;charset=UTF-8;"``,&nbsp;string&nbsp;accept&nbsp;=&nbsp;``""``,&nbsp;WebHeaderCollection&nbsp;requestHeaderCollection&nbsp;=&nbsp;null)`</div><div class="line number23 index22 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``{`</div><div class="line number24 index23 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``try&nbsp;{`</div><div class="line number25 index24 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Uri&nbsp;uri&nbsp;=&nbsp;``new`&nbsp;`Uri(url);`</div><div class="line number26 index25 alt1">&nbsp;</div><div class="line number27 index26 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``HttpWebRequest&nbsp;request&nbsp;=&nbsp;(HttpWebRequest)WebRequest.Create(uri);`</div><div class="line number28 index27 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(requestHeaderCollection&nbsp;!=&nbsp;null)&nbsp;{`</div><div class="line number29 index28 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.Headers&nbsp;=&nbsp;requestHeaderCollection;`</div><div class="line number30 index29 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number31 index30 alt2">&nbsp;</div><div class="line number32 index31 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.ContentType&nbsp;=&nbsp;contentType;`</div><div class="line number33 index32 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.Accept&nbsp;=&nbsp;accept;`</div><div class="line number34 index33 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.``Method`&nbsp;`=&nbsp;requestType.ToString();`</div><div class="line number35 index34 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.ContentLength&nbsp;=&nbsp;``0``;`</div><div class="line number36 index35 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.Timeout&nbsp;=&nbsp;``1000`&nbsp;`*&nbsp;``20``;`</div><div class="line number37 index36 alt2">&nbsp;</div><div class="line number38 index37 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(paraDic&nbsp;!=&nbsp;null&nbsp;&amp;&amp;&nbsp;paraDic.Count&nbsp;&gt;&nbsp;``0``)&nbsp;{`</div><div class="line number39 index38 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``StringBuilder&nbsp;sbParams&nbsp;=&nbsp;``new`&nbsp;`StringBuilder();`</div><div class="line number40 index39 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``foreach&nbsp;(string&nbsp;item&nbsp;``in`&nbsp;`paraDic.Keys)&nbsp;{`</div><div class="line number41 index40 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``if`&nbsp;`(paraDic[item]&nbsp;!=&nbsp;null)&nbsp;{`</div><div class="line number42 index41 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``sbParams.Append(``"&amp;"`&nbsp;`+&nbsp;item&nbsp;+&nbsp;``"="`&nbsp;`+&nbsp;HttpUtility.UrlEncode(paraDic[item].ToString()));`</div><div class="line number43 index42 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number44 index43 alt1">&nbsp;</div><div class="line number45 index44 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number46 index45 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``sbParams.Remove(``0``,&nbsp;``1``);`</div><div class="line number47 index46 alt2">&nbsp;</div><div class="line number48 index47 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``byte[]&nbsp;reqBytes&nbsp;=&nbsp;Encoding.``UTF8``.GetBytes(sbParams.ToString());`</div><div class="line number49 index48 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``request.ContentLength&nbsp;=&nbsp;reqBytes.Length;`</div><div class="line number50 index49 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Stream&nbsp;reqStream&nbsp;=&nbsp;await&nbsp;request.GetRequestStreamAsync();`</div><div class="line number51 index50 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``reqStream.Write(reqBytes,&nbsp;``0``,&nbsp;reqBytes.Length);`</div><div class="line number52 index51 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number53 index52 alt2">&nbsp;</div><div class="line number54 index53 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``WebResponse&nbsp;response&nbsp;=&nbsp;await&nbsp;request.GetResponseAsync();`</div><div class="line number55 index54 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Stream&nbsp;stream&nbsp;=&nbsp;response.GetResponseStream();`</div><div class="line number56 index55 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``StreamReader&nbsp;sr&nbsp;=&nbsp;``new`&nbsp;`StreamReader(stream);`</div><div class="line number57 index56 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``string&nbsp;str&nbsp;=&nbsp;sr.ReadToEnd();`</div><div class="line number58 index57 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``response.Close();`</div><div class="line number59 index58 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``return`&nbsp;`str;`</div><div class="line number60 index59 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number61 index60 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``catch&nbsp;(``Exception`&nbsp;`ex)&nbsp;{`</div><div class="line number62 index61 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``var&nbsp;extenData&nbsp;=&nbsp;``new`&nbsp;`{&nbsp;Url&nbsp;=&nbsp;url,&nbsp;Args&nbsp;=&nbsp;paraDic&nbsp;};`</div><div class="line number63 index62 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``//LogHelper.WriteError(``"发送HTTP请求时发生异常："`&nbsp;`+&nbsp;ex.Message,&nbsp;ex,&nbsp;extenData);`</div><div class="line number64 index63 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Console.WriteLine(``"发送HTTP请求时发生异常："`&nbsp;`+&nbsp;ex.Message);`</div><div class="line number65 index64 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``return`&nbsp;`JsonConvert.SerializeObject(``new`&nbsp;`{&nbsp;State&nbsp;=&nbsp;``0``,&nbsp;Data&nbsp;=&nbsp;ex.Message&nbsp;});`</div><div class="line number66 index65 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number67 index66 alt2">`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number68 index67 alt1">`&nbsp;&nbsp;&nbsp;&nbsp;``}`</div><div class="line number69 index68 alt2">`}`</div>

        </div>

        <!--
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/">
         <rdf:Description
    rdf:about="http://10.66.30.115:8090/pages/viewpage.action?pageId=13501261"
    dc:identifier="http://10.66.30.115:8090/pages/viewpage.action?pageId=13501261"
    dc:title="日志服务"
    trackback:ping="http://10.66.30.115:8090/rpc/trackback/13501261"/>
</rdf:RDF>
-->

<div id="likes-and-labels-container"><div id="likes-section" class="no-print">[<span class="aui-icon aui-icon-small aui-iconfont-like"></span><span class="like-button-text">赞</span>]()<span class="like-summary">[田园 Daniel](/display/~tianyuan@gznb.com)赞了它</span></div><div id="labels-section" class="pageSection group">
    <div class="labels-section-content content-column" entityid="13501261" entitytype="page">
	<div class="labels-content">

*   无标签
*   [
                <span class="aui-icon aui-icon-small aui-iconfont-edit-small">编辑标签</span>
            ](# "编辑标签 (输入 “l”)")

    </div>
</div>
</div></div>

<div id="comments-section" class="pageSection group">

    <div class="bottom-comment-panels comment-panels">

    <div class="quick-comment-container comment add">

[![用户图标: yangjiayong@gznb.com](/download/attachments/65615/user-avatar)](/display/~yangjiayong%40gznb.com)
<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:none;"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:block;" class="quick-comment-form aui" method="post" name="inlinecommentform" action="/pages/doaddcomment.action?pageId=13501261"><div title="添加评论 (输入 “m”)" class="quick-comment-prompt"><span>编写评论...</span></div></form></div></div>

            </div>

            <div id="comments-actions" class="aui-toolbar noprint" style="display: none;">

                <span class="toolbar-item">[添加评论](/pages/viewpage.action?pageId=13501261&amp;showComments=true&amp;showCommentArea=true#addcomment)</span>

        </div>
    </div>

</div>