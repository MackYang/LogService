$(function () {
    initLogo();
    bindEnterLoginEvent();
    bodyAutoHeight();
    bindFixedBlock();
    syncPosition();
    if ($.cookie(config.cookieKey.logined) == 1) {
        baseLoginedExec();

        refreshMsgIcon();
    }
    else {
        unLogin();
    }
});

function initLogo()
{
    $("div.logo>img").attr("src", config.image.logoImgUrl);
    $("div.logo>img").click(function () {
        location.href = "/";
    });
}

//打开消息列表页面
function openMsgList() {
    open('/Common/MessageList.aspx?timestamp=' + new Date().valueOf(), 'MessagePage', null, true);
}

//打开分享页面
function openShare() {
    openTab("/Common/Share.aspx?timestamp=" + new Date().valueOf());
}


function bodyAutoHeight() {
    var bodyMinHeight = $(window).height() - 172;
    $("#divBodyContent").css({ "min-height": bodyMinHeight + "px" });
}

 

function unLogin() {
    $("#navLogin").show();
    $("#navLogined").hide();
}

function login() {
    var userName = $("#txtUserName").val();
    var password = $("#txtPassword").val();
    var targetURL = $.getUrlParam('targetURL');
    if (userName.length > 0 && password.length > 0) {
        ajaxRequest({
            url: config.api.accountAPI + "Login",
            data: { 'x': userName, 'password': password, 'platform': 0, 'targetURL': targetURL },
            successCallback: function (data) {
                var ssoUrlCount = data.SSOSiteURLs.length;
                var finishCount = 0;
                $.each(data.SSOSiteURLs, function (i, n) {
                    $.getScript(n, function () {
                        ++finishCount;
                        if (finishCount == ssoUrlCount) {
                            $.cookie(config.cookieKey.logined, 1);
                            if ($("#chkPassword")[0].checked) {
                                $.cookie(config.cookieKey.userType, data.UserType, { expires: config.cookieKey.timeout });
                                $.cookie(config.cookieKey.userName, data.userNameE, { expires: config.cookieKey.timeout });
                                $.cookie(config.cookieKey.password, data.passwordE, { expires: config.cookieKey.timeout });
                                $.cookie(config.cookieKey.rememberMe, 1, { expires: config.cookieKey.timeout });
                            }
                            else {
                                $.cookie(config.cookieKey.userType, data.UserType);
                            }
                            syncCart();
                            location.href = data.TargetURL;
                        }
                    });
                });

            },
            failCallback: function (data) {
                alert("登录失败:" + data.msg);
                if (data.errCount >= 3 || data.errCount == undefined) {
                    location.href = "/Account/Login.aspx?showVCode=1";
                }
            }
        });
    }
    else { alert("请输入用户名和密码"); }
}

function logout() {
    ajaxRequest({
        url: config.api.accountAPI + "LogOff",
        successCallback: function (data) {
            $("#navLogin").show();
            $("#navLogined").hide();
            $.cookie(config.cookieKey.logined, 0);
            $.cookie(config.cookieKey.userType, null);
            $.cookie(config.cookieKey.userName, null);
            $.cookie(config.cookieKey.password, null);
            $.cookie(config.cookieKey.rememberMe, null);
        },
        failCallback: function (data) {
            alert("退出登录失败:" + data);
        }
    });
}

//登录后执行某些方法
// loginedCallBack 登录后执行的回调函数
// unLoginCallback 当不能成功登录时,要执行的回调函数,如果登录了,就不执行了
function loginedExec(loginedCallBack, unLoginCallback) {
    //保持登录状态
    var keepLogin = setInterval(function () { $.cookie(config.cookieKey.logined, 0); loginedExec(); clearInterval(keepLogin); }, 1000 * 60 * 19);
    if ($.cookie(config.cookieKey.logined) == 1) {
        baseLoginedExec();
        if (loginedCallBack != undefined) {
            loginedCallBack();
        }
    }
    else {
        if ($.cookie(config.cookieKey.rememberMe) == 1) {
            $("#chkPassword")[0].checked = true;

            var userName = $.cookie(config.cookieKey.userName);
            var password = $.cookie(config.cookieKey.password);
            var targetURL = location.href;
            if (userName.length > 0 && password.length > 0) {
                ajaxRequest({
                    url: config.api.accountAPI + "LoginEncrypt",
                    data: { 'x': userName, 'password': password, 'platform': 0, 'targetURL': targetURL },
                    successCallback: function (data) {
                        var ssoUrlCount = data.SSOSiteURLs.length;
                        var finishCount = 0;
                        $.each(data.SSOSiteURLs, function (i, n) {
                            $.getScript(n, function () {
                                ++finishCount;
                                if (finishCount == ssoUrlCount) {
                                    $.cookie(config.cookieKey.logined, 1);
                                    $.cookie(config.cookieKey.userType, data.UserType, { expires: config.cookieKey.timeout });
                                    baseLoginedExec();
                                    if (loginedCallBack != undefined) {
                                        loginedCallBack();
                                    }
                                    if (data.TargetURL != location.href) {
                                        location.href = data.TargetURL;
                                    }
                                }
                            });
                        });

                    },
                    failCallback: function (data) {
                        alert("自动登录失败:" + data + ",请尝试手动登录");
                    }
                });
            }
        }
        else {
            if (unLoginCallback != undefined) {
                unLoginCallback();
            }
        }
    }
}

//同步未登录用户的位置信息到服务器
function syncPosition() {

    var keepPosition = setInterval(function () { clearInterval(keepPosition); syncPosition(); }, 1000 * 60 * 19);
    if ($.cookie(config.cookieKey.logined) != 1) {

        var curX = $.cookie(config.cookieKey.curPosX);
        var curY = $.cookie(config.cookieKey.curPosY);
        var curCountyCode = $.cookie(config.cookieKey.curCountyCode);
        if (!isNullOrEmpty(curX) && !isNullOrEmpty(curY) && !isNullOrEmpty(curCountyCode)) {

            ajaxRequest({
                url: config.api.genUserAPI + "SetPosData",
                data: { "posX": curX, "posY": curY, "lastCode": curCountyCode },
                successCallback: function (data) {
                },
                failCallback: function (data) {
                    alert("当前位置信息设置失败:" + data);
                }
            });
        }
    }
}

//遍历方法并执行
function execMethods(methods) {
    $.each(methods, function (i, n) {
        n();
    });
}

//刷新顶部的购物车图标
function refreshCartIcon() {
    ajaxRequest({
        url: config.api.genUserAPI + "GetCartProductCount",
        successCallback: function (data) {
            if (data.Count != 0) {
                $("#spanCartCount").text(data.Count);
            }
            else { $("#spanCartCount").text(""); }
        },
        failCallback: function (data) {
            alert("刷新购物车图标失败:" + data);
        }
    });

}
//刷新顶部的消息图标
function refreshMsgIcon() {
    ajaxRequest({
        url: config.api.commonAPI + "GetWaitReadMessageCount",
        successCallback: function (data) {
            if (data != 0) {
                $("#spanMsgCount").text(data);
            }
            else { $("#spanMsgCount").text(""); }
        },
        failCallback: function (data) {
            alert("刷新消息图标失败:" + data);
        }
    });

}


//个人主中页面 根据用户类型跳转
function toPsersonIndex() {
    var userType = parseInt($.cookie(config.cookieKey.userType));
    switch (userType) {
        case 0: //普通
            location.href = "/GenUser/Index.aspx";
            break;
        case 1://商家
            location.href = "/ShopUser/Index.aspx";
            break;
        case 2://后台
            location.href = "/PlatformUser/Index.aspx";
            break;
        case 3://客服
            location.href = "/ShopUser/Index.aspx";
            break;
    }
}

function bindFixedBlock() {
    $(window).bind("scroll",
    function () {
        var bodyHeight = $("body").height();
        var scrolled = document.body.scrollTop + document.documentElement.scrollTop;
        var nearBottom = (bodyHeight - scrolled < screen.availHeight);
        if (scrolled >= 600) {

            if (nearBottom) {
                $("#fix_block").removeClass("fix_middle");
                $("#fix_block").addClass("fix_bottom");
                $("#fix_block").fadeIn();
            }
            else {
                $("#fix_block").removeClass("fix_bottom");
                $("#fix_block").addClass("fix_middle");
                $("#fix_block").fadeIn();
            }
        }
        else {
            $("#fix_block").fadeOut();
        }
    });
}


//同步购物车数据
function syncCart() {
    if ($.cookie(config.cookieKey.logined) == 1 && $.cookie(config.cookieKey.userType) == 0) {
        var cartListJson = LS.getItem(config.cookieKey.cartList);
        if (!isNullOrEmpty(cartListJson)) {
            ajaxRequest({
                url: config.api.genUserAPI + "SyncCart",
                data: { "cartJson": cartListJson },
                successCallback: function (data) {
                    forceLoadServerCartData();
                },
                failCallback: function (data) {
                    alert("同步购物车数据失败:" + data);
                }
            });
        }
    }
}

//强制载入服务器购物车数据到本地
function forceLoadServerCartData() {
    ajaxRequest({
        url: config.api.genUserAPI + "GetCartProductCount",
        successCallback: function (data) {
            if (data.Count != 0) {
                $("#spanCartCount").text(data.Count);
            }
            else {
                $("#spanCartCount").text("");
            }

            var list = data.ListData;
            if (!isNullOrEmpty(list)) {
                var arr = new Array();
                $.each(list, function (i, n) {
                    var item = new CartInfo(n.Shop_Id, n.Product_Id, n.Amount);
                    arr.push(item);
                })
                LS.setItem(config.cookieKey.cartList, JSON.stringify(arr));
            }
            //else { LS.setItem(config.cookieKey.cartList, ""); }不要清空,防止中用中途注册后,之前加入购物车中的商品被清除的情况 
            $.cookie(config.cookieKey.isLoadCartList, 1);
        },
        failCallback: function (data) {
            $.cookie(config.cookieKey.isLoadCartList, 0);
            alert("刷新购物车图标失败:" + data);
        }
    });
}


function bindEnterLoginEvent() {
    $(document).bind("keydown", function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            if ($(e.target).attr("ID") == "txtPassword") {
                login();
            }
        }
    });
}

