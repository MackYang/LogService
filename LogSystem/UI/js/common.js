
//配置对象
var config = {};

config.UnWrite = "_UnWrite_";

config.site = {};
//站点名称
config.site.Name = "乐克商城";
//站点URL带3W
config.site.Url = "http://loc-mall.com";

config.api = {};

//上传图片的API
config.api.addImageAPI = "http://imginapi.com/image/AddImage";
//删除图片的API
config.api.deleteImageAPI = "http://imginapi.com/image/DeleteImage";
//获取图片的API
config.api.getImageAPI = "http://imgoutapi.com/image/GetImage";
//日志记录的API
config.api.logAPI = "http://api.com/commonAPI/WriteLog";
//uEditor配置的API
config.api.uEditorConfigUrl = "http://imginapi.com/image/GetUEditorConfig";

//通用的API路径
config.api.commonAPI = "http://api.com/commonAPI/";
//普通用户的API路径
config.api.genUserAPI = "http://api.com/GenUserAPI/";
//商家用户的API路径
config.api.shopUserAPI = "http://api.com/ShopUserAPI/";
//账户相关的API路径
config.api.accountAPI = "http://api.com/userAPI/";
//账户相关的API路径
config.api.platformUserAPI = "http://api.com/platformUserAPI/";
//消息推送服务器API
config.api.pushServerAPI = "push.com/Handler.ashx";

config.image = {};

//本站logo图片
config.image.logoImgUrl = "http://127.0.0.1:82/Image/logo.png";
//"正在加载" 图片URL
config.image.loadingImgUrl = "http://127.0.0.1:82/Image/loading.gif";
//小的loading图片
config.image.smallLoadingImgUrl = "http://127.0.0.1:82/Image/smallLoading.gif";
//图片加载失败时的URL
config.image.errorImageUrl = "http://127.0.0.1:82/Image/loadFail.jpg";
//图片不存在时的URL
config.image.notFoundImageUrl = "http://127.0.0.1:82/Image/NotFound.png";
//1像素透明图片的URL
config.image.onePXImgUrl = "http://127.0.0.1:82/Image/OnePX.png";
//未上传图片的URL
config.image.waitUploadUrl = "http://127.0.0.1:82/Image/WaitUpload.png";

config.sound = {};
//普通铃声URL
config.sound.normalRingUrl = "http://127.0.0.1:82/Sound/Normal.mp3";
//重要铃声URL
config.sound.importantRingUrl = "http://127.0.0.1:82/Sound/Important.mp3";

//浏览器配置
config.browser = {};

//浏览器是否是IE 并是否是IE11以下版本
config.browser.isLitIE11 = function () {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        var agent = navigator.userAgent.toLowerCase();
        try {
            var ver = agent.match(/rv:\d+/)[0].replace("rv:", "");
            return (parseInt(ver) < 11);
        } catch (e) {
            return true;
        }

    }
    return false;
}
config.browser.browserChangeUrl = "/AutoLinkPage/changeBrowser.html";

config.browser.androidDownloadUrl = "/AutoLinkPage/AndroidDownload.html";

config.browser.IOSDownloadUrl = "/AutoLinkPage/IOSDownload.html";

config.browser.WindowsPhoneDownloadUrl = "/AutoLinkPage/WindowsPhoneownload.html";

//判断如果是IE浏览器,并小于IE11 ,就跳转到浏览器切换页面
config.browser.autoChangeBrowser = function () {
    if (config.browser.isLitIE11()) {
        location.href = config.browser.browserChangeUrl;
    }
    else {
        var agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf("android") != -1 || agent.indexOf("android") != -1 || (agent.indexOf("linux") != -1 && agent.indexOf("ucweb") != -1)) {
            location.href = config.browser.androidDownloadUrl;
        }
        else if (agent.indexOf("iphone") != -1) {
            location.href = config.browser.IOSDownloadUrl;
        }
        else if (agent.indexOf("windows phone") != -1) {
            location.href = config.browser.WindowsPhoneDownloadUrl;
        }
    }
}

config.pageSize = 20;
//0代表web
config.platform = 0;

config.targetURL = "targetURL";
//UEditor通用HTML中要替换的变量
config.UEditorHTMLReplaceVar = "$[Content]";

config.cookieKey = {};

config.cookieKey.rememberMe = "rememberMe";

config.cookieKey.userName = "userName";

config.cookieKey.password = "password";

config.cookieKey.logined = "logined";

config.cookieKey.userType = "userType";

config.cookieKey.timeout = 30;

config.cookieKey.productFilter = "productFilter";

config.cookieKey.shopSort = "shopSort";

config.cookieKey.productSort = "productSort";

config.cookieKey.isLoadedSortAndFilter = "isLoadedSortAndFilter";

config.cookieKey.isLoadedAddressList = "isLoadedAddressList";

config.cookieKey.addressList = "addressList";

config.cookieKey.receiveAddressId = "receiveAddressId";

config.cookieKey.receiveShortAddress = "receiveShortAddress";

config.cookieKey.newAddressData = "newAddressData";

config.cookieKey.curPosX = "curPosX";

config.cookieKey.curPosY = "curPosY";

config.cookieKey.curCountyCode = "curCountyCode";

config.cookieKey.isLoadedNuisanceList = "isLoadedNuisanceList";

config.cookieKey.isLoadedFavoriteList = "isLoadedFavoriteList";

config.cookieKey.shopNuisanceList = "shopNuisanceList";

config.cookieKey.productNuisanceList = "productNuisanceList";

config.cookieKey.shopFavoriteList = "shopFavoriteList";

config.cookieKey.productFavoriteList = "productFavoriteList";

config.cookieKey.cartList = "cartList";

config.cookieKey.isLoadCartList = "isLoadCartList";
//当前结算订单的店铺ID
config.cookieKey.tradeShopID = "tradeShopID";

//用于存放当前商品的某些信息,从列表页面组织信息,传递给详细页面使用,减少数据库关联查询
config.cookieKey.curProductInfo = "curProductInfo";
//用于存放当前商家的某些信息,从列表页面组织信息,传递给详细页面使用,减少数据库关联查询
config.cookieKey.curShopInfo = "curShopInfo";

//是否已经载入UEditor的通用HTML
config.cookieKey.isLoadUEditorHTML = "isLoadUEditorHTML";
//UEditor的通用HTML
config.cookieKey.UEditorHTML = "UEditorHTML";

//店铺位置数据
config.cookieKey.shopAddressData = "shopAddressData";

//已阅的公告ID
config.cookieKey.readedNoticeID = "readedNoticeID";

//推广者ID
config.cookieKey.diffuseID = "diffuseID";
//是否已经载入了首页商品导航数据
config.cookieKey.isLoadProductNavData = "isLoadProductNavData";
//首页商品导航数据
config.cookieKey.productNavData = "productNavData";

//是否已经载入了商品分类数据
config.cookieKey.isLoadProductCateData = "isLoadProductCateData";
//商品分类数据
config.cookieKey.productCateData = "productCateData";

//目前没有使用
////当前店铺ID,商家用户使用的,在进入商家用户Index页面,或保存完店铺基本信息后,需要从服务器获取下来存在本地.
//config.cookieKey.curShopID = "curShopID";


//前端日志写入接口
//logInfo日志信息
function writeLog(logInfo) {
    $.ajax({
        url: config.api.logAPI,
        type: "post",
        data: { logInfo: "[Web端日志]" + logInfo, platform: 0 },
        dataType: "text"
    });
}

//发现错误时写入日志
window.onerror = function () {
    if (arguments[0].namespace) {
        if (arguments[0].namespace.indexOf("bv.") != -1)//排除bs验证插件的错误
        {
            return;
        }
        var reason=JSON.stringify(arguments[0]);
        if ( reason== "Script error."||reason=="uncaughtvalid object: pixel(nan, nan)")
        {
            return;
        }
    }
    var msg = "发生脚本错误:错误原因: " +reason + ", 错误URL: " + JSON.stringify(arguments[1]) + ", 错误行号:" + JSON.stringify(arguments[2]) + ", 浏览器: " + navigator.userAgent;
    writeLog(msg);
}

//获取图片URL并绑定到图片控件上
//imgCtr 图片控件
//imgID 图片ID
//hasWater 是否添加水印,添加传1
//waterFontNum 水印字体大小
//waterString 水印字符串
function getImg(imgCtr, imgID, hasWater, waterFontNum, waterString) {
    if (isNullOrEmpty(imgID) || imgID == config.UnWrite) {
        imgCtr.onload = null;
        imgCtr.src = config.image.waitUploadUrl;
        if (isNullOrEmpty(imgID)) {
            imgCtr.src = config.image.notFoundImageUrl;
        }
        return false;
    }

    var imgWidth = 0;
    var imgHeight = 0;
    var style = $(imgCtr).attr("style");
    if (style != undefined) {
        style = style.toLowerCase();
        try {
            imgWidth = parseInt(style.match(/max-width:\s*(\d+)px/)[1]);
            imgHeight = parseInt(style.match(/max-height:\s*(\d+)px/)[1]);
        } catch (e) {

        }
    }


    //设置默认值
    hasWater = hasWater == undefined ? 0 : 1;
    waterFontNum = waterFontNum == undefined ? 12 : waterFontNum;
    waterString = waterString == undefined ? config.site.Name : waterString;

    imgWidth = parseInt(imgWidth);
    imgHeight = parseInt(imgHeight);

    ajaxRequest({
        url: config.api.getImageAPI,
        data: { imageID: imgID, width: imgWidth, height: imgHeight, addWater: hasWater, waterFontSize: waterFontNum, waterText: waterString },
        successCallback: function (data) {
            $(imgCtr).removeAttr("onload");
            imgCtr.src = data;
        },
        failCallback: function (data) { imgCtr.src = config.image.errorImageUrl; writeLog("图片加载失败:" + data + "imgID=" + imgID); },
        complete: function () { imgCtr.onload = null; },
        sendCredential: false,
    });
}


//获取图片URL并绑定到图片控件上,绑定后不移除onload,目前用于使用ueditor上传图片的情况
//imgCtr 图片控件
//imgID 图片ID
//hasWater 是否添加水印,添加传1
//waterFontNum 水印字体大小
//waterString 水印字符串
function getImgNotRemove(imgCtr, imgID, hasWater, waterFontNum, waterString) {
    if (isNullOrEmpty(imgID) || imgID == config.UnWrite) {
        imgCtr.onload = null;
        imgCtr.src = config.image.waitUploadUrl;
        if (isNullOrEmpty(imgID)) {
            imgCtr.src = config.image.notFoundImageUrl;
        }
        return false;
    }
    var imgWidth = 0;
    var imgHeight = 0;
    var style = $(imgCtr).attr("style");
    if (style != undefined) {
        style = style.toLowerCase();
        try {
            imgWidth = parseInt(style.match(/max-width:\s*(\d+)px/)[1]);
            imgHeight = parseInt(style.match(/max-height:\s*(\d+)px/)[1]);
        } catch (e) {

        }
    }


    //设置默认值
    hasWater = hasWater == undefined ? 0 : 1;
    waterFontNum = waterFontNum == undefined ? 12 : waterFontNum;
    waterString = waterString == undefined ? config.site.Name : waterString;

    imgWidth = parseInt(imgWidth);
    imgHeight = parseInt(imgHeight);

    ajaxRequest({
        url: config.api.getImageAPI,
        data: { imageID: imgID, width: imgWidth, height: imgHeight, addWater: hasWater, waterFontSize: waterFontNum, waterText: waterString },
        successCallback: function (data) {
            imgCtr.src = data;
        },
        failCallback: function (data) {
            imgCtr.src = config.image.errorImageUrl; writeLog("图片加载失败:" + data + "imgID=" + imgID);
        },
        complete: function () { imgCtr.onload = null; },
        sendCredential: false,
    });
}

//获取图片URL并绑定到图片控件的某属性值上
//imgCtr 图片控件
//attrName 属性名称,默认为data-src
//imgID 图片ID
//imgWidth 图片宽
//imgHeight 图片高
//hasWater 是否添加水印,添加传1
//waterFontNum 水印字体大小
//waterString 水印字符串
function getImgTag(imgCtr, attrName, imgID, imgWidth, imgHeight, hasWater, waterFontNum, waterString) {
    //设置默认值
    attrName = attrName ? attrName : "data-src";
    if (isNullOrEmpty(imgID) || imgID == config.UnWrite) {
        $(imgCtr).removeAttr("onload");
        imgCtr.onload = null;
        $(imgCtr).attr(attrName, config.image.waitUploadUrl);
        if (isNullOrEmpty(imgID)) {
            $(imgCtr).attr(attrName, config.image.notFoundImageUrl);
        }
        return false;
    }

    imgWidth = imgWidth ? imgWidth : 0;
    imgHeight = imgHeight ? imgHeight : 0;
    hasWater = hasWater == undefined ? 0 : 1;
    waterFontNum = waterFontNum == undefined ? 12 : waterFontNum;
    waterString = waterString == undefined ? config.site.Name : waterString;

    imgWidth = parseInt(imgWidth);
    imgHeight = parseInt(imgHeight);

    ajaxRequest({
        url: config.api.getImageAPI,
        data: { imageID: imgID, width: imgWidth, height: imgHeight, addWater: hasWater, waterFontSize: waterFontNum, waterText: waterString },
        successCallback: function (data) {
            $(imgCtr).removeAttr("onload");
            $(imgCtr).attr(attrName, data);
        },
        failCallback: function (data) { $(imgCtr).attr(attrName, config.image.errorImageUrl); writeLog("图片加载失败:" + data + "imgID=" + imgID); },
        complete: function () { imgCtr.onload = null; },
        sendCredential: false,
    });
}


//获取图片URL并传给回调函数
//imgID 图片ID
//imgWidth 图片宽
//imgHeight 图片高
//callback 回调函数
//hasWater 是否添加水印,添加传1
//waterFontNum 水印字体大小
//waterString 水印字符串
function getImgSrcCallback(imgID, imgWidth, imgHeight, callback, hasWater, waterFontNum, waterString) {
    if (isNullOrEmpty(imgID) || imgID == config.UnWrite) {
        if (isNullOrEmpty(imgID)) {
            callback(config.image.notFoundImageUrl);
        }
        else {
            callback(config.image.waitUploadUrl);
        }
        return false;
    }

    //设置默认值
    imgWidth = imgWidth ? imgWidth : 0;
    imgHeight = imgHeight ? imgHeight : 0;
    hasWater = hasWater == undefined ? 0 : 1;
    waterFontNum = waterFontNum == undefined ? 12 : waterFontNum;
    waterString = waterString == undefined ? config.site.Name : waterString;

    imgWidth = parseInt(imgWidth);
    imgHeight = parseInt(imgHeight);

    ajaxRequest({
        url: config.api.getImageAPI,
        data: { imageID: imgID, width: imgWidth, height: imgHeight, addWater: hasWater, waterFontSize: waterFontNum, waterText: waterString },
        successCallback: function (data) {
            callback(data);
        },
        failCallback: function (data) { alert("图片加载失败:" + data); writeLog("图片加载失败:" + data + "imgID=" + imgID); },
        sendCredential: false,
    });
}


//图片控件onerror事件函数
function imgLoadFail(imgCtr) {
    imgCtr.onload = null;
    imgCtr.src = config.image.errorImageUrl;
}

//删除服务器图片
function dropServerImg(imgID) {
    ajaxRequest({
        url: config.api.deleteImageAPI,
        data: { 'imgID': imgID },
        successCallback: function (data) {
        },
        failCallback: function (data) {
        }
    });

}


//ajax请求
//url 请求的url
//data 参数对象 { sID: "testUser"}
//successCallback 操作状态为成功时的回调函数
//failCallback 操作状态为失败时的回调函数
//type 请求类型 ,默认为post
//dataType 默认为text
//sendCredential 是否发送凭证 默认是
//async 是否是异步请求 默认是
function ajaxRequest(requestSetting) {

    var defSetting = {};

    defSetting.url = "";
    defSetting.data = undefined;
    defSetting.type = "post";
    defSetting.dataType = "text";
    defSetting.sendCredential = true;
    defSetting.async = true;
    defSetting.successCallback = function (json) { alert("OK,data=" + json); };
    defSetting.failCallback = function (json) { alert("Fail,data=" + json); };
    defSetting.exceptionCallback = function (json) { alert("操作发生异常:" + json); };
    defSetting.error = function (xhr, status, error) {
        var logInfo = "通信失败:xhr=" + xhr + ",status=" + status + ",error=" + error + ",发生错误的页面=" + location.href.toString() + ",请求的接口=" + defSetting.url + ",请求参数=" + (defSetting.data ? JSON.stringify(defSetting.data) : "") + ",userAgent=" + navigator.userAgent;
        writeLog(logInfo);
        alert("通信失败:" + error);
    }
    defSetting.complete = undefined;

    defSetting = $.extend(defSetting, requestSetting);

    return $.ajax({
        type: defSetting.type,
        url: defSetting.url,
        data: defSetting.data,
        dataType: defSetting.dataType,
        xhrFields: { withCredentials: defSetting.sendCredential },
        async: defSetting.async,
        success: function (data) {
            var json = $.parseJSON(data);
            switch (json.State) {
                case 0:
                    defSetting.failCallback(json.Data);
                    break;
                case 1:
                    defSetting.successCallback(json.Data);
                    break;
                case -1:
                    defSetting.exceptionCallback(json.Data);
                    break;
            }
        },
        error: function (xhr, status, error) {
            if (xhr.status != 0)//0是取消
            {
                defSetting.error(xhr, status, error);
            }
        },
        complete: function (xhr, status) {
            if (defSetting.complete != undefined) {
                defSetting.complete(xhr, status);
            }
        }
    });
}

//自动调整元素间的间距
//parentSelecter 父控件选择器
//childrenSelecter 子元素选择器
//childWidth 元素宽度
//marginWidth 元素间的margin宽度
//示例:alignAuto("#bNav","#bNav li",222,20);
function marginAuto(parentSelecter, childrenSelecter, childWidth, marginWidth) {
    var parentWidth = $(parentSelecter).width();
    var n = Math.floor(parentWidth / childWidth);
    if (n * childWidth + n * marginWidth > parentWidth) {
        n = n - 1;
    }

    marginWidth = Math.floor((parentWidth - n * childWidth) / (n + 1));//n+1将最后一列后边的宽也算上.

    $(childrenSelecter).each(function () {
        $(this).attr("style", "margin: " + marginWidth + "px 0 0 " + marginWidth + "px;");
    })
}

//绑定 切换下拉按钮文字  的功能
//liSelecter li选择器
//toggleBtnSelecter 按钮选择器
//callback 切换完成后要进行的操作
function bindToggleDropdownBtnText(liSelecter, toggleBtnSelecter, callback) {
    $(liSelecter).click(function (e) {
        var ele = $(this);
        var btnText = $(toggleBtnSelecter).text();
        var btnMethod = $(toggleBtnSelecter).attr("data-m");
        var btnTitle = $(toggleBtnSelecter).attr("title");

        $(toggleBtnSelecter).text(ele.text());
        $(toggleBtnSelecter).attr("data-m", ele.attr("data-m"));
        $(toggleBtnSelecter).attr("title", ele.attr("title"));


        ele.html('<a>' + btnText + '</a>');
        ele.attr("data-m", btnMethod);
        ele.attr("title", btnTitle);
        if (callback) {
            callback();
        }
    });
}


//最大化打开bootstrap modal
function openMaxBSModal(selector, remoteUrl, openedCallback, closedCallback) {
    $(selector).unbind('show.bs.modal');
    $(selector).on('show.bs.modal', function () {//捕获show事件
        $(selector + ">div").width($("body").width() * 0.95);
    });

    $(selector).unbind('shown.bs.modal');
    $(selector).on('shown.bs.modal', function (e) {//捕获shown事件
        $('body').css("overflow", "hidden");
        if (openedCallback != undefined) {
            openedCallback(e);
        }

    });

    $(selector).unbind('hide.bs.modal');
    $(selector).on('hide.bs.modal', function (e) {//捕获关闭事件
        $('body').css("overflow", "visible");
        if (closedCallback != undefined) {
            closedCallback(e);
        }
        $(selector).removeData("bs.modal");
    });
    $(selector).modal({ remote: remoteUrl, keyboard: true, backdrop: 'static' });
}

//打开bootstrap modal
function openBSModal(selector, remoteUrl, openedCallback, closedCallback) {
    $(selector).unbind('show.bs.modal');
    $(selector).on('show.bs.modal', function () {//捕获show事件
        $(selector + ">div").removeAttr("style");
    });

    $(selector).unbind('shown.bs.modal');
    $(selector).on('shown.bs.modal', function (e) {//捕获shown事件
        $('body').css("overflow", "hidden");
        if (openedCallback != undefined) {
            openedCallback(e);
        }

    });

    $(selector).unbind('hide.bs.modal');
    $(selector).on('hide.bs.modal', function (e) {//捕获关闭事件
        $('body').css("overflow", "visible");
        if (closedCallback != undefined) {
            closedCallback(e);
        }
        $(selector).removeData("bs.modal");
    });
    $(selector).modal({ remote: remoteUrl, keyboard: true, backdrop: 'static' });
}

//判断字符串是否为空或未定义或长度小于1
function isNullOrEmpty(str) {
    return str == null || str == undefined || str.length < 1;
}


//页区间类
var pageRange = function (start, end) {
    this.pageStart = start;
    this.pageEnd = end;
}


// 根据传入的参数：当前页，总页数，翻页按钮总数，来计算在页面上应该出现的翻页按钮的起始和结尾区间。
// pageIndex当前页
// pageCount 总页数
// btnCount 页面上需要显示的翻页按钮总数
// 返回pageRange类的实例
function calcPaging(pageIndex, pageCount, btnCount) {
    var pageStart, pageEnd;
    // 当总页数小于翻页按钮总数时，返回整个闭合区间。
    if (pageCount <= btnCount) {
        pageStart = 1;
        pageEnd = pageCount;
        return new pageRange(pageStart, pageEnd);
    }
    var half = btnCount / 2;
    var iOperator = btnCount % 2;
    if (iOperator == 0) {
        pageStart = (pageIndex - half < 1 ? 1 : pageIndex - half);
        pageEnd = (pageIndex + half - 1 > pageCount ? pageCount : pageIndex + half - 1);
    }
    else {
        pageStart = (pageIndex - half < 1 ? 1 : pageIndex - half);
        pageEnd = (pageIndex + half > pageCount ? pageCount : pageIndex + half);
    }
    var section = pageEnd - pageStart;
    if (section == btnCount - 1) {
        return new pageRange(pageStart, pageEnd);
    }
    else {
        if (pageStart == 1) {
            pageEnd = pageEnd + (btnCount - 1 - section);
        }
        else if (pageEnd == pageCount) {
            pageStart = pageStart - (btnCount - 1 - section);
        }
    }

    pageStart = (pageStart < 1 ? 1 : pageStart);
    pageEnd = (pageEnd > pageCount ? pageCount : pageEnd);

    return new pageRange(pageStart, pageEnd);
}

// 获取翻页链接方法
// jsMethodName 点翻页时调用哪个js方法,不要写括号
// linkCount 希望每页最多出现几个翻页链接
// pageIndex 当前页索引
// pageSize 页大小
// rowCount 总数据行数
// 返回翻页区html内容
function getPagesContent(jsMethodName, linkCount, pageIndex, pageSize, rowCount) {
    var sb = "";
    var maxPage = getMaxPage(pageSize, rowCount);
    var pageRangeData = calcPaging(pageIndex, maxPage, linkCount);
    var pageStart = pageRangeData.pageStart, pageEnd = pageRangeData.pageEnd;
    if (pageStart != pageEnd) {
        if (pageStart != 1) {
            sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + 1 + ");'>第一页</a></li>";
        }
        for (; pageStart <= pageEnd; pageStart++) {
            if (pageStart != pageIndex) {
                sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + pageStart + ");'>" + pageStart + "</a></li>";
            }
            else {
                sb += "<li class='active'><span>" + pageStart + "</span></li>";
            }

        }
        if (pageEnd != maxPage) {
            sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + maxPage + ");'>最后一页</a></li>";
        }

    }
    else {
        sb += "<li class='active'><span>" + pageStart + "</span></li>";
    }
    return sb;
}

//获取最大页数
function getMaxPage(pageSize, rowCount) {
    return parseInt((rowCount - 1) / pageSize + 1);
}



// 设置分页容器内的翻页HTML
//pageCtlSelector分页控件的JQ选择器字符串
// jsMethodName 点翻页时调用哪个js方法,不要写括号,此方法必须有一个接受页码的参数
// linkCount 希望每页最多出现几个翻页链接
// pageIndex 当前页索引
// pageSize 页大小
// rowCount 总数据行数

function setPageCtlContent(pageCtlSelector, jsMethodName, linkCount, pageIndex, pageSize, rowCount) {
    var sb = "";
    var maxPage = getMaxPage(pageSize, rowCount);
    var pageRangeData = calcPaging(pageIndex, maxPage, linkCount);
    var pageStart = pageRangeData.pageStart, pageEnd = pageRangeData.pageEnd;
    if (pageStart != pageEnd) {
        if (pageStart != 1) {
            sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + 1 + ");'>第一页</a></li>";
        }
        for (; pageStart <= pageEnd; pageStart++) {
            if (pageStart != pageIndex) {
                sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + pageStart + ");'>" + pageStart + "</a></li>";
            }
            else {
                sb += "<li class='active'><span>" + pageStart + "</span></li>";
            }

        }
        if (pageEnd != maxPage) {
            sb += "<li><a href='javascript:void(0);' onclick='" + jsMethodName + "(" + maxPage + ");'>最后一页</a></li>";
        }

    }
    else {
        sb += "<li class='active'><span>" + pageStart + "</span></li>";
    }

    sb = '<ul class="pagination square unSelect">' + sb + '</ul>';
    //转到指定页的部分
    var nextPage = pageIndex < maxPage ? pageIndex + 1 : pageIndex;
    sb = sb + '<span style="position: relative; top: 3px;" class="text-muted">共' +
        '<span class="maxPage">' + maxPage + '</span>页&nbsp;&nbsp;'
        + '去&nbsp;<input class="inputPage" type="number" min="1" max="' + maxPage + '" style="width: 50px;" value="' + nextPage + '" />&nbsp;页&nbsp;'
        + '<button type="button" class="btn btn-default btnToPage" onclick="toPageN(this,' + pageIndex + ',' + maxPage + ',' + jsMethodName + ');">确定</button></span>';

    $(pageCtlSelector).html(sb);
}

//跳转到N页的方法 给分页控件内部用的
function toPageN(ctl, curPageIndex, maxPage, jsMethodName) {
    var goPageBtn = $(ctl);
    var pageIndex = parseInt(goPageBtn.prev().val());
    if (pageIndex > 0 && pageIndex <= maxPage && pageIndex != curPageIndex) {
        jsMethodName(pageIndex);
    }
}

function backTop() {
    $('body,html').animate({ scrollTop: 0 }, 300);
}

//在新选项卡中打开窗口
function openTab(url) {
    if (!isNullOrEmpty(url)) {
        var tmpUrl = url.toLowerCase();
        if (tmpUrl.indexOf("timestamp") == -1) {
            var conStr = "&";
            if (tmpUrl.indexOf("?") == -1) {
                conStr = "?";
            }
            url = url + conStr + "timestamp=" + new Date().valueOf();
        }
    }
    open(url, '_blank');
}

function autoHideTip(msg) {
    var $copysuc = $("<div class='auto-hide-tips'><div class='auto-hide-tips-wrap'>☺ " + msg + "</div></div>");
    $("body").find(".auto-hide-tips").remove().end().append($copysuc);
    $(".auto-hide-tips").fadeOut(3000);
}


//获取验证码
//imgCtlSelecter 图片控件的选择器
function getVcode(imgCtlSelecter) {
    $(imgCtlSelecter).attr("src", config.image.loadingImgUrl);
    ajaxRequest({
        url: config.api.commonAPI + "GetVCode",
        successCallback: function (data) {
            $(imgCtlSelecter).attr("src", "data:image/jpeg;base64," + data);
        },
        failCallback: function (data) {
            alert("验证码加载失败:" + data);
        }
    });
}

//验证手机号格式 符合返回true
//phoneNum 手机号
function isPhoneNum(phoneNum) {
    return !!phoneNum.match(/^(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/);
}

//获取空格分开的手机号,更方便阅读
function getSplitPhoneNum(phoneNum) {
    phoneNum = phoneNum.trim();
    if (!isNullOrEmpty(phoneNum)) {
        return phoneNum.substr(0, 3) + " " + phoneNum.substr(3, 4) + " " + phoneNum.substr(7, 4);
    }
    return phoneNum;
}


//验证邮箱格式 符合返回true
//mailAddress 邮箱地址
function isEmail(mailAddress) {
    var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(mailAddress);
}

//发送验证邮件
//ele 发送按钮
//mailAddress 邮件地址
function sendValidateMail(ele, mailAddress) {
    var ctl = $(ele);
    ctl.attr("disabled", true);
    var sec = 60;
    var oldText = ctl.text();
    setText();
    var tmp = setInterval(setText, 1000);

    ajaxRequest({
        url: config.api.commonAPI + "SendValidateMail",
        data: { "mailAddress": mailAddress },
        successCallback: function (data) {
            alert("邮件已发出,如果长时间未收到,可能被误判而放在垃圾邮件里");
        },
        failCallback: function (data) {
            alert("邮件发送失败:" + data);
        }
    });


    function setText() {
        if (sec > 1) {
            ctl.text(--sec + " 秒后可重新发送");
        }
        else {
            ctl.text(oldText);
            ctl.attr("disabled", false);
            clearInterval(tmp);
        }

    }
}

//发送验证短信
//ele 发送按钮
//phoneNum 手机号
function sendValidateSMS(ele, phoneNum) {
    var ctl = $(ele);
    ctl.attr("disabled", true);
    var sec = 120;
    var oldText = ctl.text();
    setText();
    var tmp = setInterval(setText, 1000);

    ajaxRequest({
        url: config.api.commonAPI + "SendValidateSMS",
        data: { "phoneNum": phoneNum },
        successCallback: function (data) {
        },
        failCallback: function (data) {
            alert("短信发送失败:" + data);
        }
    });


    function setText() {
        if (sec > 1) {
            ctl.text(--sec + " 秒后可重新发送");
        }
        else {
            ctl.text(oldText);
            ctl.attr("disabled", false);
            clearInterval(tmp);
        }

    }
}


//localStorage 的简写
var LS = {};

//将字符串数据存入本地存储
//itemKey 键
//itemValue 值
LS.setItem = function (itemKey, itemValue) {
    localStorage.setItem(itemKey, itemValue);
}

LS.getItem = function (itemKey) {
    return localStorage.getItem(itemKey);
}

LS.removeItem = function (itemKey) {
    localStorage.removeItem(itemKey);
}

LS.clearAllItem = function () {
    localStorage.clear();
}


//sessionStorage的简写
var LSTemp = {};

//将字符串数据存入本地存储,浏览器关闭时清空
//itemKey 键
//itemValue 值
LSTemp.setItem = function (itemKey, itemValue) {
    sessionStorage.setItem(itemKey, itemValue);
}

LSTemp.getItem = function (itemKey) {
    return sessionStorage.getItem(itemKey);
}

LSTemp.removeItem = function (itemKey) {
    sessionStorage.removeItem(itemKey);
}

LSTemp.clearAllItem = function () {
    sessionStorage.clear();
}

//从字符串中获取文件扩展名,带.的
//fullName 原始文件名
function getExName(fullName) {
    var pos = fullName.lastIndexOf(".");

    return fullName.substr(pos);
}


function checkNum(obj) {
    var ele = $(obj);
    var inputV = ele.val();
    var reg = /^\d+[.]?\d*$/;
    if (!inputV.match(reg)) {
        ele.val(inputV.substr(0, inputV.length - 1));
    }
}

function checkInt(obj) {
    var ele = $(obj);
    var inputV = ele.val();
    var reg = /^\d+$/;
    if (!inputV.match(reg)) {
        ele.val(inputV.substr(0, inputV.length - 1));
    }
}

//载入UEditor通用的HTML
function loadUEditorHTML() {
    if ($.cookie(config.cookieKey.isLoadUEditorHTML) != 1) {
        ajaxRequest({
            url: config.api.commonAPI + "GetUEditorHTML",
            successCallback: function (data) {
                LS.setItem(config.cookieKey.UEditorHTML, data);
                $.cookie(config.cookieKey.isLoadUEditorHTML, 1);
            },
            failCallback: function (data) {
                alert("UEditorHTML加载失败:" + data);
                $.cookie(config.cookieKey.isLoadUEditorHTML, 0);
            }
        });
    }
}

//给必须登录的页面用的,如果没有登录,就跳转到登录页面
function mustLogin() {
    if ($.cookie(config.cookieKey.logined) != 1) {
        var curHref = location.href;
        
    }
}

//改变顶级窗口所显示的页面
function changeTopWindow(url, openNewTab) {
    if (!openNewTab) {
        top.window.location.href = url;
    }
    else {
        openTab(url);
    }

}

////绑定图片加载失败时的图片,在页面加载完成时调用
//function bindImgLoadError() {
//    $("img").live("error",null,function () {//live不能触法图片的error事件
//        $(this).attr("src", config.image.errorImageUrl);
//    });

//}


//======================================辅助类============================================


//购物车类
var CartInfo = function (shopID, productID, amount) {
    this.shopID = shopID;
    this.productID = productID;
    this.amount = amount;
};

//========================以下是jq或原型扩展===========================================

//给jquery扩展定宽字符
(function ($) {
    $.extend({
        //截取定宽字符串
        //str 要截取的字符串
        //length 要截取的双字节长度
        //char 超出部分显示内容,默认为...
        fixedWidth: function (str, length, char) {
            str = str.toString();
            if (!char) { char = "..."; }
            var num = length - lengthB(str);
            if (num < 0) {
                str = substringB(str, length - lengthB(char)) + char;
            }
            return str;

            function substringB(str, length) {
                var num = 0, len = str.length, temp = "";
                if (len) {
                    for (var i = 0; i < len; i++) {
                        if (num > length) break;
                        if (str.charCodeAt(i) > 255) {
                            num += 2;

                        }
                        else {
                            num++;
                        }
                        temp += str.charAt(i);
                    }
                    return temp;
                }
                else {
                    return null;
                }
            }


            function lengthB(str) {
                return str.replace(/[^\x00-\xff]/g, "aa").length;
            }
        }
    });
})(jQuery);


//给jquery扩展获取查询字符串的方法
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.toString().substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

String.prototype.endWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substring(this.length - s.length) == s)
        return true;
    else
        return false;
    return true;
}

String.prototype.startWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substr(0, s.length) == s)
        return true;
    else
        return false;
    return true;
}