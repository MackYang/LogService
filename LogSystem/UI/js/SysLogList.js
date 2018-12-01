var charCount = 0;
$(function () {

    bindToggleDropdownBtnText("#ulDDL_LogLevel li", "#btnLogLevel");
    loadSystemList();
    $('.form_date').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: "1",
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 0,
        format: "yyyy-mm-dd hh:ii:ss",
        forceParse: 0
    });
    bindEnterEvent();
    charCount = $("#thAuto").width() / 9;
    $("#ulList").html("");
    getList();

});

var finishFun = function () { hideMask(); bindEnterEvent(); };

function loadSystemList() {
    ajaxRequest({
        url: "/Api/GetSystemList",
        successCallback: function (data) {

            if (!isNullOrEmpty(data)) {

                $.each(data, function (i, n) {

                    $("#ulDDL_PlatformType").append('<li data-m="' + n["id"] + '"><a>' + n["name"] + '</a></li>');

                });
                bindToggleDropdownBtnText("#ulDDL_PlatformType li", "#btnPlatformType");
            }

        },

        failCallback: function (data) {
            alert("系统列表加载失败:" + data);
        },
        complete: finishFun
    });

}

function bindEnterEvent() {
    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            getList();
        }
    }
}

function showMask() {
    $('body').css("overflow", "hidden");
    var tmp = 116 - (document.body.scrollTop + document.documentElement.scrollTop);
    tmp = tmp < 0 ? 0 : tmp;

    $("#divMask").css({ "top": tmp + "px" })
    $("#divMask").show();
}

function hideMask() {
    $("#divMask").hide();
    $('body').css("overflow", "visible");
}

//获取列表数据
function getList() {
    document.onkeydown = null;
    showMask();
    var finishFun = function () { hideMask(); bindEnterEvent(); };

    var pageIndex = $("#hidPageIndex").val();

    var beginDate = $("#txtBeginDate").val();
    var endDate = $("#txtEndDate").val();
    var platformType = $("#btnPlatformType").attr("data-m");
    var logLevel = $("#btnLogLevel").attr("data-m");
    var keyword = $("#txtKeyword").val();

    var oldBeginDate = $("#hidOldBeginDate").val();
    var oldEndDate = $("#hidOldEndDate").val();
    var oldPlatformType = $("#hidOldPlatformType").val();
    var oldKeyword = $("#hidOldKeyword").val();
    var oldLogLevel = $("#hidOldLogLevel").val();

    //下列任意条件改变,都重新从第一页开始获取数据
    if (logLevel != oldLogLevel || platformType != oldPlatformType || keyword != oldKeyword || beginDate != oldBeginDate || endDate != oldEndDate) {
        pageIndex = 1;
    }
    pageIndex = parseInt(pageIndex);
    var args = {
        "logLevel": logLevel,
        "beginDate": beginDate,
        "endDate": endDate,
        "systemId": platformType,
        "keyword": keyword,
        "pageIndex": pageIndex,
        "pageSize": config.pageSize
    };
    var oldArgsJson = $("#hidOldQueryArgs").val();
    var argsJson = JSON.stringify(args);
    //if (argsJson == oldArgsJson) {
    //    finishFun();
    //    return;
    //}
    ajaxRequest({
        url: "/Api/GetLogList",
        data: args,
        successCallback: function (data) {
            bindList(data, pageIndex);
            $("#hidOldBeginDate").val(beginDate);
            $("#hidOldEndDate").val(endDate);
            $("#hidOldKeyword").val(keyword);
            $("#hidOldPlatformType").val(platformType);
            $("#hidOldLogLevel").val(logLevel);
            $("#hidOldQueryArgs").val(JSON.stringify(args));
        },

        failCallback: function (data) {
            alert("日志列表数据加载失败:" + data);
        },
        complete: finishFun
    });
}

//绑定列表
function bindList(data, pageIndex) {

    var list = data.ListData;
    var rowCount = data.RowCount;

    var liData = "";
    if (!isNullOrEmpty(list)) {
        liData += '<li>' +
                   '<table>' +
                       '<tr>' +
                            '<th style="width: 1px;"></th>' +
                             '<th style="width: 160px;">记录时间</th>' +
                            '<th style="width: 200px;">业务系统</th>' +
                            '<th style="width: 80px;">日志级别</th>' +
                            '<th id="thAuto">内容</th>' +
                            '<th style="width: 80px;">操作</th>' +
                       '</tr>';


        $.each(list, function (i, n) {
            liData += '<tr>' +
                '<td style="width:1px;"><span class="logmessage">' + n.log_message + '</span><span class="attdata">' + n.att_data + '</span><span class="stackinfo">' + n.stack_info + '</span></td>' +
                '<td>' + n.create_time + '</td>' +
                '<td>' + n.SystemName + '</td>' +
                '<td>' + n.log_level + '</td>' +
                '<td>' + $.fixedWidth(n.log_message, charCount) + '</td>' +
                '<td> <button type="button" class="btn btn-success marginR10" onclick="viewData(this);">查看</button>' +
                '</td>';


            liData += '</tr>';

        });

        liData += '</table>' +
                '</li>';
        $("#ulList").html(liData);

        setPageCtlContent("#divPager", "toPage", 10, pageIndex, 20, rowCount);
        $("#divPager").show();

    }
    else {
        $("#divPager").hide();

        liData = "<div class='emptyResult'>暂时没有找到符合要求的数据!</div>";
        $("#ulList").html(liData);
    }

}

function toPage(pageIndex) {
    $("#hidPageIndex").val(pageIndex);
    getList();
}


//查看
function viewData(ctl) {
    ctl = $(ctl);
    var row = ctl.parent().parent();
    var logmessage = row.find(".logmessage").text();
    var attdata = row.find(".attdata").text();
    var stackinfo = row.find(".stackinfo").text();
    $("#logTitle").text(logmessage);
    $("#divAttData").text(attdata);
    $("#divLogContent").text(stackinfo);

    openMaxBSModal("#divLogModal");
}
