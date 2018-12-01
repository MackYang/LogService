<%@ Page Title="" Language="C#" MasterPageFile="~/ui/Master/FrameInner.Master" AutoEventWireup="true" CodeBehind="SysLogList.aspx.cs" Inherits="UI.PlatformUser.SysLogList" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
    <title>日志列表--<%=SoEasy.Common.Vars.SiteName %></title>
    <link href="/ui/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
    <link href="/ui/css/squarePage.css" rel="stylesheet">
    <link href="/ui/css/SysLogList.css" rel="stylesheet">
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="BodyContent" runat="server">
    <div class="row  marginT15 unSelect ">
        <div class=" form-horizontal col-sm-8 ">
            <div class="form-group">
                <label class="pull-left control-label marginL30 ">记录时间</label>
                <div class="pull-left inline-date">
                    <div class="input-group date form_date col-md-12" data-link-field="hidBeginDate">
                        <input id="txtBeginDate" class="form-control" size="16" type="text" value="" placeholder="请选择" />
                        <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                        <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
                    </div>
                    <input type="hidden" value="" id="hidBeginDate" />
                </div>
                <label class="pull-left control-label">到</label>
                <div class="pull-left inline-date" id="divEndDate">
                    <div class="input-group date form_date col-md-12" data-link-field="hidEndDate">
                        <input id="txtEndDate" class="form-control" size="16" type="text" value="" placeholder="请选择" />
                        <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                        <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
                    </div>
                    <input type="hidden" value="" id="hidEndDate" />
                </div>


            </div>
            <div class="form-group">
                <label class="pull-left control-label marginR10 marginL30">关键字</label>
                <div class="pull-left keyword">
                    <input type="text" class="form-control" id="txtKeyword" placeholder="可输入关键字进行搜索" style="position: relative; top: 2px !important" />

                </div>
                <label class=" control-label marginL15">日志级别</label>
                <div class="btn-group ">

                    <button type="button" class="btn btn-default" data-m="" id="btnLogLevel">All</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" id="ulDDL_LogLevel">
                        <li data-m="Trace"><a>Trace</a></li>
                        <li data-m="Debug"><a>Debug</a></li>
                        <li data-m="Info"><a>Info</a></li>
                        <li data-m="Warn"><a>Warn</a></li>
                        <li data-m="Error"><a>Error</a></li>
                        <li data-m="Fotal"><a>Fotal</a></li>
                    </ul>
                </div>
                <label class=" control-label marginL15">业务系统</label>
                <div class="btn-group ">

                    <button type="button" class="btn btn-default" data-m="" id="btnPlatformType">所有系统</button>
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" id="ulDDL_PlatformType">
                    </ul>
                </div>

                <button type="button" class="btn btn-primary marginL10" onclick="getList();"><span class="fa fa-search marginR5"></span>查询</button>

            </div>
        </div>
        <div class="col-sm-12 unSelect">
            <div style="border: 1px solid gray; width: 100%;"></div>
        </div>

        <!--列表及分页-->
        <div id="divList" class="col-sm-12 unSelect">

            <!--列表项-->
            <div class="col-sm-12">

                <ul id="ulList" class="noPadding">
                    <!--初始化后会自动清除-->
                    <li>
                        <table>
                            <tr>
                                <th style="width: 1px;"></th>
                                <th style="width: 160px;">记录时间</th>
                                <th style="width: 180px;">业务系统</th>
                                <th style="width: 80px;">日志级别</th>
                                <th id="thAuto">内容</th>
                                <th style="width: 80px;">操作</th>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
            <button type="button" onclick="backTop();" class="btn btn-primary pull-right marginR30"><span class="fa fa-arrow-up marginR5"></span>回顶部</button>
            <!--分页区-->
            <div class="col-sm-12 pageContainer" id="divPager" style="display: none; margin-top: 10px; margin-bottom: 50px;">
            </div>
        </div>

        <!--信息确认窗-->
        <div class="modal fade text-center" id="divConfirm" tabindex="-1">
            <div class="modal-dialog text-left">
                <div class="modal-content">
                </div>
            </div>
        </div>

        <!--日志弹出窗-->
        <div class="modal fade text-center" id="divLogModal" tabindex="-1">
            <div class="modal-dialog text-left">
                <div class="modal-content unSelect">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"><b>日志</b></h4>
                    </div>
                    <div class="modal-body">
                        <div>
                            <label>日志内容:</label><div id="logTitle" class="select"></div>
                        </div>
                        <div class="marginT30">
                            <label>附加数据:</label><div id="divAttData" class=" select"></div>
                        </div>
                        <div class="marginT30">
                            <label>堆栈信息:</label><div id="divLogContent" class=" select"></div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">关闭</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div id="divMask"><span>请稍等</span> <span class="fa fa-refresh fa-spin fa-5x"></span></div>
    <input type="hidden" id="hidPageIndex" value="1" />
    <input type="hidden" id="hidOldBeginDate" />
    <input type="hidden" id="hidOldEndDate" />
    <input type="hidden" id="hidOldPlatformType" />
    <input type="hidden" id="hidOldLogLevel" />
    <input type="hidden" id="hidOldKeyword" />
    <input type="hidden" id="hidOldQueryArgs" />

    <script type="text/javascript" src="/ui/js/bootstrap-datetimepicker.js"></script>
    <script type="text/javascript" src="/ui/js/bootstrap-datetimepicker.zh-CN.js"></script>
    <script type="text/javascript" src="/ui/js/SysLogList.js"></script>

</asp:Content>
