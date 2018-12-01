var loginedMethod = "GetBuyedShopList,GetFavoriteShopList,GetBuyedProductList,GetFavoriteProductList";
var searchCateNO = "";
var searchCateName = "";
var fullCateName = "";
var navWidth = 0;
var navIsShow = 0;
$(function () {
    scroll(0, 0);
    config.browser.autoChangeBrowser();
    loadNotice();
    loadCarousel();
    processDiffuse();
    loadFilterAndSortData();
    initNav();
    autoLoadProductNavData(bindNavListData);
    autoLoadProductCateData();
    
    setCurrentMapTip();
    bindAddressList();
    bindEnterEvent();
    bindToggleBtnEvent();
    bindToggleDropdownBtnText("#divProductRange li", "#btnProductRange");
    bindToggleDropdownBtnText("#divShopRange li", "#btnShopRange");
    bindSearchTypeChangeEvent();
    bindNavSortEvent();
    bindDivMoneyMouseEvent();
    bindNavFilterEvent();
    bindFixedCart();
    loadLocalCartData();
    bindNuisanceEvent();
    bindFavoriteEvent();

});



//处理推广积分相关的业务
function processDiffuse() {
    var diffuseID = $.getUrlParam("diffuseID");
    if (!isNullOrEmpty(diffuseID)) {
        $.cookie(config.cookieKey.diffuseID, diffuseID);
        ajaxRequest({
            url: config.api.commonAPI + "AddDiffuseVisitScore",
            data: { "diffuseID": diffuseID },
            successCallback: function (data) {

            },
            failCallback: function (data) {
                alert("积分数据更新失败:" + data);
            }
        });

    }
}

//获取本地默认的筛选数据
function getLocalDefaultFilterData() {
    var data = {
        minScore: 6,
        priceBegin: 0,
        priceEnd: 0,
        minDeliverPrice: 0,
        isFreeDeliver: 0,
        hasGift: 0,
        maxRange: 5000,
        isBusinessing: 1,
        hasBill: 0,
        hasInvoice: 0
    };

    return data;
}


/*事件绑定方法*/

function bindEnterEvent() {
    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            if ($(e.target).attr("ID") != "txtPassword") {
                search();
            }
        }
    }
}

function bindCloseFilterMouseStyle() {
    $(".filterClose").mousemove(function (e) {
        var ele = $(e.target);

        ele.parent().css({
            "box-shadow": "#F00 0px 0px 15px",
        });
    });
    $(".filterClose").mouseleave(function (e) {
        var ele = $(e.target);

        ele.parent().css({
            "box-shadow": "none"
        });
    });
}

function bindRemoveFiliterEvent() {
    $(".filterClose").unbind("click");
    $(".filterClose").click(function (e) {
        var ele = $(e.target);
        var text = ele.prev().text().trim();
        var cssClass = ele.prev().attr("class").replace("selected-", "");
        var li = '<li><span class="label label-' + cssClass + '">' + text + '</span></li>';
        ele.parent().remove();
        $("#ulConditions").append(li);
        bindAddFiliterEvent();

        var filterData = $("#hidResultFilter").val();
        $("#hidResultFilter").val(filterData.replace("," + text, ""));
        getList();
    });
}

function bindAddFiliterEvent() {
    $("#ulConditions li").unbind("click");
    $("#ulConditions li").click(function () {
        var ele = $(this);
        var text = ele.text().trim();
        var cssClass = ele.children().attr("class").replace("label label-", "");
        var li = '<li><span class="selected-' + cssClass + '">' + text + '</span><span class="filterClose">×</span></li>';
        ele.remove();
        $("#ulSelected").append(li);
        bindRemoveFiliterEvent();
        bindCloseFilterMouseStyle();

        var filterData = $("#hidResultFilter").val();
        if (filterData.indexOf(text) == -1) {
            $("#hidResultFilter").val(filterData + "," + text);
            getList();
        }

    });
}

function bindDivMoneyMouseEvent() {
    $("#divMoney").mousemove(function () {
        $("#btnMoney").show();
    })
    $("#divMoney").mouseleave(function () {
        $("#btnMoney").hide();
    })
}

//绑定搜索框后面按钮的点击事件 
function bindToggleBtnEvent() {
    $("#btnProductRange,#btnShopRange").click(function (e) {
        $("#btnProductRange,#btnShopRange").unbind("click");
        getList(bindToggleBtnEvent);
        this.blur();
    });
}

//绑定搜索类型切换时执行的事件
function bindSearchTypeChangeEvent() {
    $("#hidSearchType").val(1);
    $("#radioProduct").click(function () {

        $("#divProductRange").show();
        $("#divFilterProduct").show();
        $("#divProductList").show();
        $("#divShopRange").hide();
        $("#divFilterShop").hide();
        $("#divShopList").hide();
        $("#hidSearchType").val(1);
    });

    $("#radioShop").click(function () {

        $("#divShopRange").show();
        $("#divFilterShop").show();
        $("#divShopList").show();
        $("#divProductRange").hide();
        $("#divFilterProduct").hide();
        $("#divProductList").hide();
        marginAuto("#divShopList .divList ul", "#divShopList .divList ul li", 222, 20);
        $("#hidSearchType").val(0);
    });
}

//绑定单击屏蔽按钮时执行的事件
function bindNuisanceEvent() {
    $(".nuisance").live("click", function () {
        var ele = $(this);
        ele.parent().parent().remove();
        var bType = ele.attr("data-type");
        var id = ele.attr("data-id");
        if ($.cookie(config.cookieKey.logined) == 1) {
            ajaxRequest({
                url: config.api.genUserAPI + "AddNuisance",
                data: { "bType": bType, "bID": id },
                successCallback: function (data) {

                },
                failCallback: function (data) {
                    alert("屏蔽失败:" + data);
                }
            });
        }
        if (bType == 1) {
            var productNuisanceData = LS.getItem(config.cookieKey.productNuisanceList);
            if (isNullOrEmpty(productNuisanceData)) {
                productNuisanceData = "";
            }
            productNuisanceData += "," + id;
            LS.setItem(config.cookieKey.productNuisanceList, productNuisanceData);
        }
        else {
            var shopNuisanceData = LS.getItem(config.cookieKey.shopNuisanceList);
            if (isNullOrEmpty(shopNuisanceData)) {
                shopNuisanceData = "";
            }
            shopNuisanceData += "," + id;
            LS.setItem(config.cookieKey.shopNuisanceList, shopNuisanceData);
        }
    });
}

//绑定单击收藏钮时执行的事件
function bindFavoriteEvent() {
    $(".favorite").live("click", function () {
        var ele = $(this);
        var bType = ele.attr("data-type");
        var id = ele.attr("data-id");

        if (ele.hasClass("fa-heart")) {//取消收藏
            ele.removeClass("fa-heart");
            ele.addClass("fa-heart-o");
            $('<span class="fa fa-eye-slash pull-left nuisance" data-type="' + bType + '" data-id="' + id + '"></span>').insertBefore(ele);

            if ($.cookie(config.cookieKey.logined) == 1) {
                ajaxRequest({
                    url: config.api.genUserAPI + "DeleteFavorite",
                    data: { "bID": id },
                    successCallback: function (data) {
                    },
                    failCallback: function (data) {
                        alert("取消收藏失败:" + data);
                    }
                });
            }


            if (bType == 1) {
                var productFavoriteData = LS.getItem(config.cookieKey.productFavoriteList);
                if (isNullOrEmpty(productFavoriteData)) {
                    productFavoriteData = "";
                }
                productFavoriteData = productFavoriteData.replace("," + id, "");
                LS.setItem(config.cookieKey.productFavoriteList, productFavoriteData);
            }
            else {
                var shopFavoriteData = LS.getItem(config.cookieKey.shopFavoriteList);
                if (isNullOrEmpty(shopFavoriteData)) {
                    shopFavoriteData = "";
                }
                shopFavoriteData = shopFavoriteData.replace("," + id, "");
                LS.setItem(config.cookieKey.shopFavoriteList, shopFavoriteData);
            }
        }
        else {//添加收藏
            ele.removeClass("fa-heart-o");
            ele.addClass("fa-heart");
            ele.prev().remove();

            if ($.cookie(config.cookieKey.logined) == 1) {
                ajaxRequest({
                    url: config.api.genUserAPI + "AddFavorite",
                    data: { "bType": bType, "bID": id },
                    successCallback: function (data) {

                    },
                    failCallback: function (data) {
                        alert("收藏失败:" + data);
                    }
                });
            }

            if (bType == 1) {
                var productFavoriteData = LS.getItem(config.cookieKey.productFavoriteList);
                if (isNullOrEmpty(productFavoriteData)) {
                    productFavoriteData = "";
                }
                productFavoriteData += "," + id;
                LS.setItem(config.cookieKey.productFavoriteList, productFavoriteData);
            }
            else {
                var shopFavoriteData = LS.getItem(config.cookieKey.shopFavoriteList);
                if (isNullOrEmpty(shopFavoriteData)) {
                    shopFavoriteData = "";
                }
                shopFavoriteData += "," + id;
                LS.setItem(config.cookieKey.shopFavoriteList, shopFavoriteData);
            }
        }

    });
}

//绑定排序项单击事件
function bindNavSortEvent() {
    $("#divFilterProduct > nav > ul > li:not([id=liPrice])").click(function (e) {
        var ele = $(this);
        var selectedEle = ele.parent().find("li.active");
        if (ele.text() != selectedEle.text()) {
            selectedEle.removeClass("active");
            ele.addClass("active");
            $.cookie(config.cookieKey.productSort, ele.attr("data-d"));
            getList();
        }
    });
    $("#liPrice").click(function (e) {
        var ele = $(this);
        if (ele.hasClass("active")) {
            var spanPrice = $("#spanPrice");
            if (spanPrice.hasClass("glyphicon glyphicon-arrow-up")) {
                spanPrice.removeClass("glyphicon-arrow-up");
                spanPrice.addClass("glyphicon-arrow-down");
                $("#liPrice").attr("title", "从高到低");
                $.cookie(config.cookieKey.productSort, -2);
            }
            else {
                spanPrice.removeClass("glyphicon-arrow-down");
                spanPrice.addClass("glyphicon-arrow-up");
                $("#liPrice").attr("title", "从低到高");
                $.cookie(config.cookieKey.productSort, 2);
            }
        }
        else {
            var selectedEle = ele.parent().find("li.active");
            selectedEle.removeClass("active");
            ele.addClass("active");
            var spanPrice = $("#spanPrice");
            if (spanPrice.hasClass("glyphicon glyphicon-arrow-up")) {
                $.cookie(config.cookieKey.productSort, 2);
            }
            else {
                $.cookie(config.cookieKey.productSort, -2);
            }
        }
        getList();

    });

    $("#divFilterShop > nav > ul li").click(function (e) {
        var ele = $(this);
        var selectedEle = ele.parent().find("li.active");
        if (ele.text() != selectedEle.text()) {
            selectedEle.removeClass("active");
            ele.addClass("active");
            $.cookie(config.cookieKey.shopSort, ele.attr("data-d"));
            getList();
        }
    });
}

//绑定筛选项改变事件
function bindNavFilterEvent() {

    //商品价格区间

    $("#txtMoneyStart").blur(function () {
        var ele = $(this);
        var v = ele.val();
        if (!isNaN(v)) {
            if (!isNullOrEmpty(v)) {
                saveFilterDataToCookie({ priceBegin: v });
            }
            else {
                saveFilterDataToCookie({ priceBegin: 0 });
            }

        }
    });

    $("#txtMoneyEnd").blur(function () {
        var ele = $(this);
        var v = ele.val();
        if (!isNaN(v)) {
            if (!isNullOrEmpty(v)) {
                saveFilterDataToCookie({ priceEnd: v });
            }
            else {

                saveFilterDataToCookie({ priceEnd: 0 });
            }

        }
    });

    //商家筛选条件

    $("#txtScore").blur(function () {
        var ele = $(this);
        var v = ele.val();
        if (!isNaN(v)) {
            if (!isNullOrEmpty(v)) {
                saveFilterDataToCookie({ minScore: v });
            }
            else {
                saveFilterDataToCookie({ minScore: 0 });
            }

        }
    });
    $("#txtRange").blur(function () {
        var ele = $(this);
        var v = ele.val();
        if (!isNaN(v)) {
            if (!isNullOrEmpty(v)) {
                saveFilterDataToCookie({ maxRange: v });
            }
            else {
                saveFilterDataToCookie({ maxRange: 3 });
            }

        }
    });

    $("#txtMinPrice").blur(function () {
        var ele = $(this);
        var v = ele.val();
        if (!isNaN(v)) {
            if (!isNullOrEmpty(v)) {
                saveFilterDataToCookie({ minDeliverPrice: v });
            }
            else {
                saveFilterDataToCookie({ minDeliverPrice: 0 });
            }
        }
    });

    $("#chkBusinessing").change(function () {
        var ele = $(this);
        saveFilterDataToCookie({ isBusinessing: ele[0].checked == true ? 1 : 0 });
    })
}

//绑定地址列表
function bindAddressList() {
    var addressListJson = LS.getItem(config.cookieKey.addressList);
    var receiveID = $.cookie(config.cookieKey.receiveAddressId);
    if (!isNullOrEmpty(addressListJson)) {
        var data = JSON.parse(addressListJson);
        var defIndex = "";
        var listData = "";
        $.each(data, function (i, n) {
            if (n.Id == receiveID) {
                defIndex = i;
            }
            listData += '<li><input type="radio" name="radAddress" id="rd' + i + '" value="' + n.Id + '" /><label for="rd' + i + '">' + n.shortAddress + '</label></li>';
        });
        $("#ulAddressList").html(listData);

        if (!isNullOrEmpty(defIndex)) {
            $("#rd" + defIndex).attr("checked", true);
        }
        else {
            $("#rdNew").attr("checked", true);
        }
        bindAddressChangeEvent();
    }
}

//绑定地址列表切换事件
function bindAddressChangeEvent() {
    $("#ulAddressList label").unbind("click");
    $("#ulAddressList label").click(function () {
        var ele = $(this).parent();
        var selectID = $(ele.children()[0]).val();
        $("#hidSelectAddrID").val(selectID);

    });

}
function bindFixedCart() {
    $(window).bind("scroll", function () {
        var scrolled = document.body.scrollTop + document.documentElement.scrollTop;
        var searchType = $("#hidSearchType").val();
        if (scrolled >= 600 && searchType == 1) {
            $("#fix_cart").css("top", "20px");
            $("#fix_cart").fadeIn();
        }
        else if (scrolled > 200 && scrolled < 600 && searchType == 1) {
            var hasProduct = $("#hidHasProduct").val();
            if (hasProduct == 1) {
                var firstLi = $("#ulProductList li:first");
                var tmpTop = firstLi.offset().top - scrolled;
                $("#fix_cart").css("top", tmpTop + "px");
                $("#fix_cart").fadeIn();
            }
        }
        else {
            $("#fix_cart").fadeOut();
        }

    });
}
/*事件绑定方法--End*/

//====================================================================================================================================

/*业务方法*/

function search() {
    $("#searchIcon").toggleClass("fa-spinner fa-spin");
    getList(function () { $("#searchIcon").toggleClass("fa-spinner fa-spin"); });
}

function closeFilter() {
    $("#divFilterArea").fadeOut();
    $("#hidCloseResultFilter").val(1);
}



//加载轮播数据
function loadCarousel() {
    $("#imgCarouselInit").attr("src", config.image.onePXImgUrl);
    ajaxRequest({
        url: config.api.commonAPI + "GetShowCarouselList",
        successCallback: function (data) {
            var carouselItem = "";
            var carouselLi = "";
            $.each(data, function (i, n) {
                if (i == 0) {
                    carouselItem = '<div class="item active">';
                    carouselLi = ' <li data-slide-to="0" data-target="#carousel-container" class="active"></li>';
                }
                else {
                    carouselItem += '<div class="item">';
                    carouselLi += ' <li data-slide-to="' + i + '" data-target="#carousel-container"></li>';
                }

                if (n.Href.length > 0) {
                    carouselItem += '<a href="' + n.Href + '">';
                    carouselItem += "<img class='img-responsive' src='" + config.image.loadingImgUrl + "' onload='getImg(this,\"" + n.Img_Id + "\");' onerror='imgLoadFail(this);'/>";
                    if (n.Title.length > 0 || n.Content.length > 0) {
                        carouselItem += '<div class="carousel-caption">';
                        carouselItem += '<h3>' + n.Title + '</h3>';
                        carouselItem += '<p>' + n.Content + '</p>';
                        carouselItem += '</div>';
                    }
                    carouselItem += '</a>';
                }
                else {
                    carouselItem += "<img class='img-responsive' src='" + config.image.loadingImgUrl + "' onload='getImg(this,\"" + n.Img_Id + "\");' onerror='imgLoadFail(this);'/>";
                    if (n.Title.length > 0 || n.Content.length > 0) {
                        carouselItem += '<div class="carousel-caption">';
                        carouselItem += '<h3>' + n.Title + '</h3>';
                        carouselItem += '<p>' + n.Content + '</p>';
                        carouselItem += '</div>';
                    }
                }

                carouselItem += '</div>';
            });
            $("#divCarouselItem").html(carouselItem);
            $("#olCarouselLi").html(carouselLi);
        },
        failCallback: function (data) {
            alert("轮播数据加载失败:" + data);
        }
    });
}

//加载排序和筛选数据
function loadFilterAndSortData() {
    if ($.cookie(config.cookieKey.isLoadedSortAndFilter) != 1) {
        //商品筛选条件已经包含商家筛选条件了,所以商家筛选不再请求,但排序项是不同的,所以要另行请求
        ajaxRequest({
            url: config.api.genUserAPI + "GetFilter",
            successCallback: function (data) {
                $.cookie(config.cookieKey.productFilter, JSON.stringify(data));
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 1);
                initFilterCtl(data);
            },
            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 0);
                alert("商品筛选数据加载失败:" + data);
            }
        });
        ajaxRequest({
            url: config.api.genUserAPI + "GetOrderBy",
            data: { "bType": 0 },
            successCallback: function (data) {
                $.cookie(config.cookieKey.shopSort, data);
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 1);
                $("#liShopSmartSort").attr("data-d", data);
            },
            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 0);
                alert("商家排序数据加载失败:" + data);
            }
        });
        ajaxRequest({
            url: config.api.genUserAPI + "GetOrderBy",
            data: { "bType": 1 },
            successCallback: function (data) {
                $.cookie(config.cookieKey.productSort, data);
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 1);
                $("#liProductSmartSort").attr("data-d", data);
            },
            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedSortAndFilter, 0);
                alert("商品排序数据加载失败:" + data);
            }
        });


    }
    else {
        var str = $.cookie(config.cookieKey.productFilter);
        if (!isNullOrEmpty(str)) {
            var data = JSON.parse(str);
            initFilterCtl(data);
        }
        else {
            $.cookie(config.cookieKey.isLoadedSortAndFilter, 0);
        }

    }
}

//获取用户地址列表并将默认地址作为当前位置信息
function getAddressList() {
    if ($.cookie(config.cookieKey.isLoadedAddressList) != 1) {
        ajaxRequest({
            url: config.api.genUserAPI + "GetAddressList",
            successCallback: function (data) {

                if (data.length > 0) {
                    LS.setItem(config.cookieKey.addressList, JSON.stringify(data));
                    var receiveId = "";
                    var receiveShortAddress = "";
                    var posX, posY;
                    $.each(data, function (i, n) {
                        if (n.Is_Default == 1) {
                            receiveId = n.Id;
                            receiveShortAddress = n.shortAddress;
                            posX = n.Pos_X;
                            posY = n.Pos_Y;
                        }
                    });
                    if (!isNullOrEmpty(receiveId)) {
                        $.cookie(config.cookieKey.receiveAddressId, receiveId);
                        $.cookie(config.cookieKey.receiveShortAddress, receiveShortAddress);
                        $.cookie(config.cookieKey.curPosX, posX);
                        $.cookie(config.cookieKey.curPosY, posY);
                    }
                    else {
                        $.cookie(config.cookieKey.receiveAddressId, data[0].Id);
                        $.cookie(config.cookieKey.receiveShortAddress, data[0].shortAddress);
                        $.cookie(config.cookieKey.curPosX, data[0].Pos_X);
                        $.cookie(config.cookieKey.curPosY, data[0].Pos_Y);
                    }

                    bindAddressList();
                }

                setCurrentMapTip();
                $.cookie(config.cookieKey.isLoadedAddressList, 1);
            },
            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedAddressList, 0);
                alert("默认位置信息加载失败:" + data);
            }
        });
    }
}

//加载地图
function loadMapModal() {
    openMaxBSModal('#divMapModal', '/Common/AMap.html?timestamp=' + new Date().valueOf(), function () { $("#hidSave").val(0); }, savePosition);
}

//加载登录框
function loadLoginModal() {
    //openBSModal('#divLoginModal', '/Account/LoginModal.html?timestamp=' + new Date().valueOf());
}

//设置当前所在位置标注提示
function setCurrentMapTip() {
    var curShortAddress = $.cookie(config.cookieKey.receiveShortAddress);
    if (!isNullOrEmpty(curShortAddress)) {
        curShortAddress += " 附近";
        $(".currentMapMarker").attr("title", curShortAddress);
    }
    $(".currentMapMarker").unbind("click");
    $(".currentMapMarker").click(selectAddress);
}


//弹出地址列表或地图供选择
function selectAddress() {
    if ($("#ulAddressList").text().length > 0) {
        openBSModal('#divAddressListModal', null, function () {
            $("#hidSelectAddrID").val("");
            $("#hidSave_LT").val(0);
            bindAddressList();
        }, savePositionFromList);
    }
    else {
        openMaxBSModal('#divMapModal', '/Common/AMap.html?timestamp=' + new Date().valueOf(), function () { $("#hidSave").val(0); }, savePosition);
    }
}

//延时打开地图,否则界面会错乱
function delayOpenMap() {
    var tmp = setInterval(function () { openMaxBSModal('#divMapModal', '/Common/AMap.html?timestamp=' + new Date().valueOf(), function () { $("#hidSave").val(0); }, savePosition); clearInterval(tmp); }, 500);
}

//保存筛选数据到cookie
function saveFilterDataToCookie(filterData) {
    var oldData = JSON.parse($.cookie(config.cookieKey.productFilter));
    oldData = $.extend(oldData, filterData);
    $.cookie(config.cookieKey.productFilter, JSON.stringify(oldData));
}

//初始化过虑控件的值
function initFilterCtl(data) {
    $("#txtScore").val(data.minScore);
    $("#txtRange").val(data.maxRange);
    $("#txtMinPrice").val(data.minDeliverPrice);
    $("#txtMinPrice").attr("placeholder", data.minDeliverPrice);
    $("#chkBusinessing")[0].checked = data.isBusinessing == 1;
    if (data.priceBegin != 0) {
        $("#txtMoneyStart").val(data.priceBegin);
    }
    if (data.priceEnd != 0) {
        $("#txtMoneyEnd").val(data.priceEnd);
    }

}

//保存简要位置信息
function savePosition() {
    var isSave = $("#hidSave").val();
    if (isSave == 1) {
        var addressJson = getFinalAddressJson();
        var addressData = JSON.parse(addressJson);
        $.cookie(config.cookieKey.newAddressData, addressJson, { expires: config.cookieKey.timeout });
        $.cookie(config.cookieKey.receiveAddressId, "new", { expires: config.cookieKey.timeout });
        $.cookie(config.cookieKey.receiveShortAddress, addressData.shortAddress, { expires: config.cookieKey.timeout });
        $.cookie(config.cookieKey.curPosX, addressData.posX, { expires: config.cookieKey.timeout });
        $.cookie(config.cookieKey.curPosY, addressData.posY, { expires: config.cookieKey.timeout });
        $.cookie(config.cookieKey.curCountyCode, addressData.countyCode, { expires: config.cookieKey.timeout });
        setCurrentMapTip();
        ajaxRequest({
            url: config.api.genUserAPI + "SetPosData",
            data: { "posX": addressData.posX, posY: addressData.posY, lastCode: addressData.countyCode },
            successCallback: function (data) {
            },
            failCallback: function (data) {
                alert("当前位置信息设置失败:" + data);
            }
        });
    }
}


//从地址列表中设置当前位置信息
function savePositionFromList() {
    var isSave = $("#hidSave_LT").val();
    if (isSave == 1) {
        var selectID = $("#hidSelectAddrID").val();
        if (!isNullOrEmpty(selectID)) {
            var data = JSON.parse(LS.getItem(config.cookieKey.addressList));
            $.each(data, function (i, n) {
                if (n.Id == selectID) {
                    $.cookie(config.cookieKey.receiveAddressId, selectID);
                    $.cookie(config.cookieKey.receiveShortAddress, n.shortAddress);
                    $.cookie(config.cookieKey.curPosX, n.Pos_X);
                    $.cookie(config.cookieKey.curPosY, n.Pos_Y);
                    setCurrentMapTip();
                    ajaxRequest({
                        url: config.api.genUserAPI + "SetPosData",
                        data: { "posX": n.Pos_X, posY: n.Pos_Y, lastCode: n.County_Code },
                        successCallback: function (data) {
                        },
                        failCallback: function (data) {
                            alert("当前位置信息设置失败:" + data);
                        }
                    });
                }
            });
        }
    }
}

//获取列表数据
//requestFinishedCallback 请求完成时要执行的方法
function getList(requestFinishedCallback) {
    document.onkeydown = null;
    showMask();
    var finishFun = function () { hideMask(); bindEnterEvent(); if (requestFinishedCallback != undefined) { requestFinishedCallback(); } };
    var pageIndex = 1;
    var categoryCode = searchCateNO;
    var keyword = $("#txtKeyword").val();
    var filterData = null;

    var searchType = $("#hidSearchType").val();
    var posX = $.cookie(config.cookieKey.curPosX);
    var posY = $.cookie(config.cookieKey.curPosY);

    var filterStr = $.cookie(config.cookieKey.productFilter);
    if (!isNullOrEmpty(filterStr)) {
        filterData = JSON.parse(filterStr);
    }
    else {
        filterData = getLocalDefaultFilterData();
    }

    var resultFilter = $("#hidResultFilter").val();
    if (resultFilter.length > 0) {
        resultFilter = resultFilter.substring(1);
    }

    var method = "";
    var sortData = "";
    var oldKeyword = $("#hidOldKeyword").val();
    var oldMethod = $("#hidOldMethod").val();
    var oldFilter = $("#hidOldFilter").val();

    if (searchType == 0) {
        method = $("#btnShopRange").attr("data-m");
        sortData = $.cookie(config.cookieKey.shopSort);
        pageIndex = $("#hidShopIndex").val();
    }
    else {
        method = $("#btnProductRange").attr("data-m");
        sortData = $.cookie(config.cookieKey.productSort);
        pageIndex = $("#hidProductIndex").val();
    }
    if (loginedMethod.indexOf(method) != -1)//如果要执行的方法是必须要登录的
    {
        if ($.cookie(config.cookieKey.logined) != 1) {
            finishFun();
            loadLoginModal();
            return;
        }
    }
    if (isNullOrEmpty($.cookie(config.cookieKey.receiveAddressId))) { //如果没有地址数据
        finishFun();
        loadMapModal();
        return;
    }


    var filterDataJson = JSON.stringify(filterData);
    if (keyword != oldKeyword || method != oldMethod || filterDataJson != oldFilter) {
        pageIndex = 1;
        resultFilter = "";
        $("#hidResultFilter").val("");
    }

    pageIndex = parseInt(pageIndex);
    var args = {};
    if (searchType == 1) {
        var oldResultFilter = $("#hidOldResultFilter").val();
        if (resultFilter != oldResultFilter) {
            pageIndex = 1;
        }

        args = {
            keyword: keyword,
            categoryCode: categoryCode,
            minScore: filterData.minScore,
            beginPrice: filterData.priceBegin,
            endPrice: filterData.priceEnd,
            minDeliverPrice: filterData.minDeliverPrice,
            isFreeDeliver: filterData.isFreeDeliver,
            hasGift: filterData.hasGift,
            maxDeliverRange: filterData.maxRange,
            isBusinessing: filterData.isBusinessing,
            hasBill: filterData.hasBill,
            hasInvoice: filterData.hasInvoice,
            resultFilter: resultFilter,
            orderByData: sortData,
            pageIndex: pageIndex,
            pageSize: config.pageSize,
            posX: posX,
            posY: posY
        };

    }
    else {
        args = {
            keyword: keyword,
            minScore: filterData.minScore,
            maxRange: filterData.maxRange,
            freeDeliver: filterData.isFreeDeliver,
            minPriceDeliver: filterData.minDeliverPrice,
            businessing: filterData.isBusinessing,
            hasBill: filterData.hasBill,
            hasInvoice: filterData.hasInvoice,
            orderByData: sortData,
            pageIndex: pageIndex,
            pageSize: config.pageSize,
            posX: posX,
            posY: posY
        };
    }

    var oldArgsJson = $("#hidOldQueryArgs").val();
    var argsJson = JSON.stringify(args);
    if (argsJson == oldArgsJson && method == oldMethod) {
        finishFun();
        return;
    }

    ajaxRequest({
        url: config.api.genUserAPI + method,
        data: args,
        successCallback: function (data) {
            if (searchType == 0) {
                bindShopList(data, pageIndex, method);
            }
            else {
                bindProductList(data, pageIndex, method, resultFilter);
            }
            $("#hidOldMethod").val(method);
            $("#hidOldKeyword").val(keyword);
            $("#hidOldFilter").val(filterDataJson);
            $("#hidOldResultFilter").val(resultFilter);
            $("#hidOldQueryArgs").val(JSON.stringify(args));
            $("#hidOldPosX").val(posX);
            $("#hidOldPosY").val(posY);
        },

        failCallback: function (data) {
            alert("列表数据加载失败:" + data);
        },
        complete: finishFun
    });
}

//绑定商家列表
function bindShopList(data, pageIndex, method) {

    var list = data.ListData;
    var rowCount = data.RowCount;

    var liData = "";

    var nuisanceList = LS.getItem(config.cookieKey.shopNuisanceList);
    if (isNullOrEmpty(nuisanceList)) {
        nuisanceList = "";
    }
    if (!isNullOrEmpty(list) && nuisanceList) {//过虑掉屏蔽的元素
        list = $.grep(list, function (n, i) {
            return nuisanceList.indexOf(n.Shop_ID) == -1;
        });
    }

    if (!isNullOrEmpty(list)) {

        var favoriteList = LS.getItem(config.cookieKey.shopFavoriteList);
        if (isNullOrEmpty(favoriteList)) {
            favoriteList = "";
        }
        var startTime = new Date();
        var endTime = new Date();
        var curTime = new Date();
        $.each(list, function (i, n) {

            liData += "<li><div>";
            if (favoriteList.indexOf(n.Shop_ID) != -1) {//已收藏
                liData += '<span class="fa   fa-heart pull-right favorite " data-type="0" data-id="' + n.Shop_ID + '" data-name="' + n.SHORT_NAME + '"></span>';
            }
            else {
                liData += ' <span class="fa fa-eye-slash pull-left nuisance"  data-type="0"  data-id="' + n.Shop_ID + '" data-name="' + n.SHORT_NAME + '"></span><span class="fa   fa-heart-o pull-right favorite "  data-type="0" data-id="' + n.Shop_ID + '"></span>';
            }
            var shopHref = "/Shop/ShopDetail.aspx?id=" + n.Shop_ID;
            var shopProductHref = "/Shop/ShopProduct.aspx?id=" + n.Shop_ID;
            liData += '</div>';
            liData += '<div><a href="javascript:void(0);" style="line-height:220px;" onclick="setShopData(\'' + shopHref + '\');"><img class="img-responsive" src="' + config.image.loadingImgUrl + '" onload="getImg(this,\'' + n.ImgID + '\');" onerror="imgLoadFail(this);"  style="max-width:220px;max-height:220px;"/></a></div>';
            liData += '<div>';
            liData += '<div><a href="javascript:void(0);"onclick="setShopData(\'' + shopHref + '\');" >' + $.fixedWidth(n.SHORT_NAME, 58) + '</a></div>';
            liData += '<div>';
            var tmpDistance = parseFloat(n.Distance);
            if (tmpDistance >= 1) {
                liData += '<span title="距离" class="fa fa-location-arrow pull-left" >&nbsp;' + tmpDistance.toFixed(2) + 'km</span>';
            }
            else {
                liData += '<span title="距离" class="fa fa-location-arrow pull-left" >&nbsp;' + tmpDistance * 1000 + '米</span>';
            }

            liData += '<span title="成交次数" class="fa fa-bar-chart pull-right" style="color: green;">&nbsp;' + n.sellAmount + '</span>';
            liData += '<br/>';
            liData += '<span title="评分" class="fa fa-trophy pull-left" style="color:#3babfc;">&nbsp;' + parseFloat(n.Score).toFixed(1) + '</span>';

            var startHour = parseInt(n.TIME_START.split(':')[0]);
            var startMinute = parseInt(n.TIME_START.split(':')[1]);

            var endHour = parseInt(n.TIME_END.split(':')[0]);
            var endMinute = parseInt(n.TIME_END.split(':')[1]);

            startTime.setHours(startHour);
            startTime.setMinutes(startMinute);

            endTime.setHours(endHour);
            endTime.setMinutes(endMinute);

            if (startTime <= curTime && endTime > curTime) {
                liData += '<span title="营业状态" class="fa fa-circle pull-right" style="color: #11ee69;">&nbsp;营业中</span>';
            }
            else {
                liData += '<span title="营业状态" class="fa fa-circle pull-right" style="color: #d9534f;">&nbsp;已打烊</span>';
            }

            liData += '</div>';
            liData += '<div>';
            liData += '<button class="btn btn-success pull-left " onclick="setShopData(\'' + shopProductHref + '\');">查看商品</button>';
            liData += '<button class="btn btn-primary pull-right" onclick="setShopData(\'' + shopHref + '\');">查看介绍</button>';
            liData += '</div>';
            liData += '</div></li>';

        });
        $("#ulShopList").html(liData);
        marginAuto("#ulShopList", "#ulShopList li", 222, 20);

        //分页部分
        var pageHtml = getPagesContent("getShopPageList", 10, pageIndex, config.pageSize, rowCount);
        $("#ulShopPage").html(pageHtml);
        var maxPage = getMaxPage(config.pageSize, rowCount);
        $("#spanShopMaxPage").text(maxPage);
        $("#txtShopPage").attr("max", maxPage);
        if (pageIndex < maxPage) {
            $("#txtShopPage").val(pageIndex + 1);
        }
        else { $("#txtShopPage").val(pageIndex); }
        $("#divShopPager").show();
    }
    else {
        var methodName = "";
        switch (method) {
            case "GetShopList":
                methodName = "在您附近没有找到符合条件的商家";
                break;
            case "GetBuyedShopList":
                methodName = "在您成交过的商家中,没有找到符合条件的商家";
                break;
            case "GetSmartRecommendShopList":
                methodName = "在我们推荐的商家中,暂时没有找到符合条件的商家";
                break;
            case "GetFavoriteShopList":
                methodName = "在您收藏过的商家中,没有找到符合条件的商家";
                break;
        }
        liData = "<div class='emptyResult'>抱歉," + methodName + "!<br/><a href='javascript:void(0);' onclick='getConditionTable(this);'>查看条件</a><div></div></div>";
        $("#ulShopList").html(liData);
        $("#divShopPager").hide();
    }

}

//绑定商品列表
function bindProductList(data, pageIndex, method, selectedFliter) {
    var list = data.ListData;
    var rowCount = data.RowCount;
    var filterData = data.FilterData;

    var liData = "";
    var nuisanceList = LS.getItem(config.cookieKey.productNuisanceList);
    if (isNullOrEmpty(nuisanceList)) {
        nuisanceList = "";
    }
    if (!isNullOrEmpty(list) && nuisanceList) {//过虑掉屏蔽的元素
        list = $.grep(list, function (n, i) {
            return nuisanceList.indexOf(n.ID) == -1;
        });
    }

    if (!isNullOrEmpty(list)) {
        $("#hidHasProduct").val(1);
        if (!isNullOrEmpty(filterData)) {
            var closeResultFilter = $("#hidCloseResultFilter").val();
            if (pageIndex == 1 || closeResultFilter != 1) {
                if (isNullOrEmpty(selectedFliter)) { //更改了任何搜索条件后要清空结果中筛选的已选条件
                    $("#ulSelected").html("");
                }

                var liFilter = "";
                var tmpIdx = 0;
                $.each(filterData, function (i, n) {
                    if (selectedFliter.indexOf(n) == -1)//排除已选
                    {
                        var colorIdx = tmpIdx % 3;
                        var labColor = "";
                        switch (colorIdx) {
                            case 0:
                                labColor = "label-primary";
                                break;
                            case 1:
                                labColor = "label-info";
                                break;
                            case 2:
                                labColor = "label-success";
                                break;
                        }
                        liFilter += '<li><span class="label ' + labColor + '">' + n + '</span></li>'
                        ++tmpIdx;
                    }
                });
                $("#ulConditions").html(liFilter);
                bindCloseFilterMouseStyle();
                bindAddFiliterEvent();
                bindRemoveFiliterEvent();
                $("#divFilterArea").show();
            }
        }
        else {
            $("#ulConditions").html("");
            if (selectedFliter.length < 1) {//如果没有启用结果中筛选,就关闭此区域
                $("#divFilterArea").hide();
            }
        }


        var favoriteList = LS.getItem(config.cookieKey.productFavoriteList);
        if (isNullOrEmpty(favoriteList)) {
            favoriteList = "";
        }
        $.each(list, function (i, n) {

            liData += "<li><div>";
            if (favoriteList.indexOf(n.ID) != -1) {//已收藏
                liData += '<span class="fa   fa-heart pull-right favorite " data-type="1" data-id="' + n.ID + '"></span>';
            }
            else {
                liData += ' <span class="fa fa-eye-slash pull-left nuisance"  data-type="1"  data-id="' + n.ID + '"></span><span class="fa   fa-heart-o pull-right favorite "  data-type="1" data-id="' + n.ID + '"></span>';
            }
            var href = "/Product/ProductDetail.aspx?id=" + n.ID + "&timestamp=" + new Date().valueOf();

            liData += '</div>';
            liData += '<div><a href="javascript:void(0);" style="line-height:220px;" onclick="toProductDetail(\'' + href + '\');"><img class="img-responsive" src="' + config.image.loadingImgUrl + '" onload="getImg(this,\'' + n.ImgID + '\');" onerror="imgLoadFail(this);"  style="max-width:220px;max-height:220px;"/></a></div>';
            liData += '<div>';
            liData += '<div><a data-shopid="' + n.Shop_ID + '" data-fullname="' + n.Name + '" data-shopname="' + n.shopName + '" data-commentcount="' + n.commentCount + '" href="javascript:void(0);"onclick="toProductDetail(\'' + href + '\');" >' + $.fixedWidth(n.Name, 58) + '</a></div>';
            liData += '<div>';
            liData += '<span title="价格" class="fa fa-rmb pull-left " style="color: #f60;">&nbsp;' + n.Price + '</span>';
            liData += '<span title="评分" class="fa fa-trophy pull-right " style="color: #3babfc;">&nbsp;' + parseFloat(n.score).toFixed(1) + '</span>';
            liData += '<br/>';
            var tmpDistance = parseFloat(n.distance);
            if (tmpDistance >= 1) {
                liData += '<span title="距离" class="fa fa-location-arrow pull-left">&nbsp;' + parseFloat(tmpDistance.toFixed(2)) + 'km</span>';
            }
            else {
                liData += '<span title="距离" class="fa fa-location-arrow pull-left">&nbsp;' + tmpDistance * 1000 + '米</span>';
            }

            liData += '<span title="销量" class="fa fa-bar-chart pull-right " style="color: green;">&nbsp;' + n.SellAmount + '</span>';
            liData += '</div>';
            liData += '<div>';
            liData += '<button class="btn btn-danger pull-left " data-pid="' + n.ID + '" data-shopid="' + n.Shop_ID + '" onclick="addCart(this)">加入购物车</button>';
            liData += '<button class="btn btn-success pull-right" onclick="toProductDetail(\'' + href + '\');">详细信息</button>';
            liData += '</div>';
            liData += '</div></li>';

        });
        $("#ulProductList").html(liData);
        marginAuto("#ulProductList", "#ulProductList li", 222, 20);

        //分页部分
        var pageHtml = getPagesContent("getProductPageList", 10, pageIndex, config.pageSize, rowCount);
        $("#ulProductPage").html(pageHtml);
        var maxPage = getMaxPage(config.pageSize, rowCount);
        $("#spanProductMaxPage").text(maxPage);
        $("#txtProductPage").attr("max", maxPage);
        if (pageIndex < maxPage) {
            $("#txtProductPage").val(pageIndex + 1);
        }
        else { $("#txtProductPage").val(pageIndex); }
        $("#divProductPager").show();
    }
    else {
        $("#hidHasProduct").val(0);
        $("#fix_cart").hide();
        $("#ulConditions").html("");
        $("#divFilterArea").hide();
        var methodName = "";
        switch (method) {
            case "GetProductList":
                methodName = "在您附近没有找到符合条件的商品";
                break;
            case "GetBuyedProductList":
                methodName = "在您购买过的商品中,没有找到符合条件的商品";
                break;
            case "GetSmartRecommendProductList":
                methodName = "在我们推荐的商品中,暂时没有找到符合条件的商品";
                break;
            case "GetFavoriteProductList":
                methodName = "在您收藏过的商品中,没有找到符合条件的商品";
                break;
        }
        liData = "<div class='emptyResult'>抱歉," + methodName + "!<br/><a href='javascript:void(0);' onclick='getConditionTable(this);'>查看条件</a><div></div></div>";
        $("#ulProductList").html(liData);
        $("#divProductPager").hide();

    }

}

//获取商家某分页数据
function getShopPageList(pageIndex) {
    $("#hidShopIndex").val(pageIndex);
    getList();
}

//获取商品某分页数据
function getProductPageList(pageIndex) {
    $("#hidProductIndex").val(pageIndex);
    getList();
}

function toShopPage() {
    var toPageIndex = parseInt($("#txtShopPage").val());
    var minIndex = parseInt($("#txtShopPage").attr("min"));
    var maxIndex = parseInt($("#txtShopPage").attr("max"));
    if (toPageIndex >= minIndex && toPageIndex <= maxIndex) {
        var oldPage = $("#hidOldShopIndex").val();
        if (toPageIndex != oldPage) {
            $("#hidShopIndex").val(toPageIndex);
            getList();
        }
    }
    else {
        $("#txtShopPage").val($("#hidShopIndex").val());
    }
}

function toProductPage() {
    var toPageIndex = parseInt($("#txtProductPage").val());
    var minIndex = parseInt($("#txtProductPage").attr("min"));
    var maxIndex = parseInt($("#txtProductPage").attr("max"));
    if (toPageIndex >= minIndex && toPageIndex <= maxIndex) {
        var oldPage = $("#hidOldProductIndex").val();
        if (toPageIndex != oldPage) {
            $("#hidProductIndex").val(toPageIndex);
            getList();
        }
    }
    else {
        $("#txtProductPage").val($("#hidProductIndex").val());
    }
}

//加载屏蔽列表
function loadNuisanceList() {
    if ($.cookie(config.cookieKey.isLoadedNuisanceList) != 1) {
        //加载商家屏蔽列表
        ajaxRequest({
            url: config.api.genUserAPI + "GetNuisanceIDs",
            data: { bType: 0, pageIndex: -1, pageSize: -1 },
            successCallback: function (data) {
                var listData = data.ListData;
                if (!isNullOrEmpty(listData)) {
                    var shopNuiscaneStr = "";
                    $.each(listData, function (i, n) {
                        shopNuiscaneStr += "," + n.ID;
                    });
                    LS.setItem(config.cookieKey.shopNuisanceList, shopNuiscaneStr);
                }
                $.cookie(config.cookieKey.isLoadedNuisanceList, 1);
            },

            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedNuisanceList, 0);
                alert("商家屏蔽列表加载失败:" + data);
            }
        });
        //加载商品屏蔽列表
        ajaxRequest({
            url: config.api.genUserAPI + "GetNuisanceIDs",
            data: { bType: 1, pageIndex: -1, pageSize: -1 },
            successCallback: function (data) {
                var listData = data.ListData;
                if (!isNullOrEmpty(listData)) {
                    var productNuiscaneStr = "";
                    $.each(listData, function (i, n) {
                        productNuiscaneStr += "," + n.ID;
                    });
                    LS.setItem(config.cookieKey.productNuisanceList, productNuiscaneStr);
                }
                $.cookie(config.cookieKey.isLoadedNuisanceList, 1);
            },

            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedNuisanceList, 0);
                alert("商品屏蔽列表加载失败:" + data);
            }
        });



    }
}
//加载收藏列表
function loadFavoriteList() {
    if ($.cookie(config.cookieKey.isLoadedFavoriteList) != 1) {
        //加载商家收藏列表
        ajaxRequest({
            url: config.api.genUserAPI + "GetFavoriteIDs",
            data: { bType: 0, pageIndex: -1, pageSize: -1 },
            successCallback: function (data) {

                var listData = data.ListData;
                if (!isNullOrEmpty(listData)) {
                    var shopFavoriteStr = "";
                    $.each(listData, function (i, n) {
                        shopFavoriteStr += "," + n.ID;
                    });
                    LS.setItem(config.cookieKey.shopFavoriteList, shopFavoriteStr);
                }
                $.cookie(config.cookieKey.isLoadedFavoriteList, 1);
            },

            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedFavoriteList, 0);
                alert("商家收藏列表加载失败:" + data);
            }
        });
        //加载商品收藏列表
        ajaxRequest({
            url: config.api.genUserAPI + "GetFavoriteIDs",
            data: { bType: 1, pageIndex: -1, pageSize: -1 },
            successCallback: function (data) {

                var listData = data.ListData;
                if (!isNullOrEmpty(listData)) {
                    var productFavoriteStr = "";
                    $.each(listData, function (i, n) {
                        productFavoriteStr += "," + n.ID;
                    });
                    LS.setItem(config.cookieKey.productFavoriteList, productFavoriteStr);
                }
                $.cookie(config.cookieKey.isLoadedFavoriteList, 1);
            },

            failCallback: function (data) {
                $.cookie(config.cookieKey.isLoadedFavoriteList, 0);
                alert("商品收藏列表加载失败:" + data);
            }
        });



    }
}



//加入购物车
function addCart(curEle) {
    $("#divTmpCart").remove();
    var ele = $(curEle);
    var event = ele.attr("onclick");
    ele.attr("onclick", "");
    var li = ele.parent().parent().parent();
    var divTop = $(li).offset().top;
    var divLeft = $(li).offset().left;
    var tmpDiv = "<div id='divTmpCart' style='position:absolute;top:" + divTop + "px;left:" + divLeft + "px;'>" + li.find(".img-responsive").parent().html() + "</div>";
    $("body").append(tmpDiv.replace("onload", "onxxx"));
    $("#divTmpCart").animate({ "left": ($("#fix_cart").offset().left - $("#fix_cart").width()) + "px", "top": $("#fix_cart").offset().top - 20 + "px", "width": "20px", "height": "20px" }, 500, function () {
        $("#fix_cart").css("opacity", "1");
        $("#divTmpCart").animate({ "left": $("#fix_cart").offset().left + "px", "top": $("#fix_cart").offset().top + "px", "width": "20px", "height": "20px" }, 500, function () {

            var count = $("#spanFixCart").text();
            if (isNullOrEmpty(count)) {
                count = 0;
            }
            count = parseInt(count) + 1;
            $("#spanFixCart").text(count);
            $("#spanCartCount").text(count);
            $("#divTmpCart").remove();
            ele.attr("onclick", event);
            $("#fix_cart").fadeTo(500, 0.2);
        });
    });
    $("#fix_cart").unbind("mousemove mouseleave");
    $("#fix_cart").mousemove(function () {
        $("#fix_cart").css("opacity", "1");
    })
    $("#fix_cart").mouseleave(function () {
        $("#fix_cart").css("opacity", "0.2");
    })

    var productID = ele.attr("data-pid");
    var shopID = ele.attr("data-shopid");

    var cartList = new Array();
    var cartListJson = LS.getItem(config.cookieKey.cartList);
    if (!isNullOrEmpty(cartListJson)) {
        cartList = JSON.parse(cartListJson);
    }
    else { cartListJson = ""; }
    if (cartListJson.indexOf(productID) != -1)//重复添加同一商品,增加数量
    {
        var newItem = null;
        for (var i = 0; i < cartList.length; i++) {
            var tmpItem = cartList.slice(i, i + 1);
            if (tmpItem[0].productID == productID) {
                newItem = new CartInfo(shopID, productID, parseInt(tmpItem[0].amount) + 1);
                cartList.splice(i, 1, newItem);
                break;
            }
        }
        if ($.cookie(config.cookieKey.logined) == 1) {//提交服务器
            ajaxRequest({
                url: config.api.genUserAPI + "UpdateCartProductAmount",
                data: { "shopID": newItem.shopID, "productID": newItem.productID, "amount": newItem.amount },
                successCallback: function (data) {
                },
                failCallback: function (data) {
                    alert("更新购物车商品数量失败:" + data);
                }
            });
        }
    }

    else {
        var cartItem = new CartInfo(shopID, productID, 1);
        cartList.push(cartItem);
        if ($.cookie(config.cookieKey.logined) == 1) {//提交服务器
            ajaxRequest({
                url: config.api.genUserAPI + "AddInCart",
                data: { "shopID": cartItem.shopID, "productID": cartItem.productID },
                successCallback: function (data) {
                },
                failCallback: function (data) {
                    alert("添加到购物车失败:" + data);
                }
            });
        }

    }

    LS.setItem(config.cookieKey.cartList, JSON.stringify(cartList));


}

//载入服务器购物车数据到本地
function loadServerCartData() {
    if ($.cookie(config.cookieKey.isLoadCartList) != 1) {
        ajaxRequest({
            url: config.api.genUserAPI + "GetCartProductCount",
            successCallback: function (data) {

                if (data.Count != 0) {
                    $("#spanCartCount").text(data.Count);
                    $("#spanFixCart").text(data.Count);
                }
                else {
                    $("#spanCartCount").text("");
                    $("#spanFixCart").text("");
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
}

//载入本地购物车数据填充图标数字
function loadLocalCartData() {
    var cartJson = LS.getItem(config.cookieKey.cartList);
    if (!isNullOrEmpty(cartJson)) {
        var cart = JSON.parse(cartJson);
        var count = 0;
        $.each(cart, function (i, n) {
            count += parseInt(n.amount);
        })
        if (count != 0) {
            $("#spanCartCount").text(count);
            $("#spanFixCart").text(count);
        }

    }
}
//到商品详细页面
function toProductDetail(url) {

    var curLi = $("#ulProductList li:hover");
    var id = curLi.find("span:first").attr("data-id");
    var name = curLi.find("a[data-fullname]").attr("data-fullname");
    var score = curLi.find(".fa-trophy").text().trim();
    var distance = curLi.find(".fa-location-arrow").text().trim();
    var sellAmount = curLi.find(".fa-bar-chart").text().trim();
    var shopName = curLi.find("a[data-fullname]").attr("data-shopname");
    var commentCount = curLi.find("a[data-fullname]").attr("data-commentcount");
    var shopId = curLi.find("a[data-fullname]").attr("data-shopid");

    var info = {
        "id": id,
        "name": name,
        "score": score,
        "distance": distance,
        "sellAmount": sellAmount,
        "shopName": shopName,
        "commentCount": commentCount,
        "shopId": shopId
    };

    LSTemp.setItem(config.cookieKey.curProductInfo + id, JSON.stringify(info));

    open(url, '_blank');
}


//到商家详细页面
function setShopData(url) {

    var curLi = $("#ulShopList li:hover");
    var id = curLi.find("span:first").attr("data-id");
    var name = curLi.find("span:first").attr("data-name");
    var distance = curLi.find(".fa-location-arrow").text().trim();
    var sellAmount = curLi.find(".fa-bar-chart").text().trim();
    var businessState = curLi.find(".fa-circle").text().trim();

    var info = {
        "id": id,
        "name": name,
        "distance": distance,
        "businessState": businessState,
        "sellAmount": sellAmount
    };

    LSTemp.setItem(config.cookieKey.curShopInfo + id, JSON.stringify(info));

    open(url, '_blank');
}
//在新选项卡中打开窗口
function openTab(url) {
    open(url, '_blank');
}

//获取无数据时的条件列表
function getConditionTable(curEle) {
    var searchType = $("#hidSearchType").val();
    var filterData = JSON.parse($.cookie(config.cookieKey.productFilter));
    var conData = "<div id='divEmptyResultTable'><table  cellspacing='0'><tr><th>条件项</th><th>条件值</th></tr>";
    var keyword = $("#txtKeyword").val();
    if (!isNullOrEmpty(keyword)) {
        conData += "<tr><td>关键字</td><td>" + keyword + "</td></tr>";
    }
    if (searchType == 1) {
        if (!isNullOrEmpty(searchCateNO)) {
            conData += "<tr><td>商品分类</td><td>" + fullCateName + "</td></tr>";
        }
        conData += "<tr><td>评分</td><td>" + filterData.minScore + "分及以上</td></tr>";
        var priceStr = "";
        if (filterData.priceBegin != 0 && filterData.priceEnd != 0) {
            priceStr = filterData.priceBegin + "到" + filterData.priceEnd + "之间";
        }
        else if (filterData.priceBegin != 0) {
            priceStr = filterData.priceBegin + "元及以上";
        }
        else if (filterData.priceEnd != 0) {
            priceStr = "不超过" + filterData.priceEnd + "元";
        }
        if (!isNullOrEmpty(priceStr)) {
            conData += "<tr><td>价格</td><td>" + priceStr + "</td></tr>";
        }

        conData += "<tr><td>距离</td><td>" + filterData.maxRange + "千米以内</td></tr>";
        conData += "<tr><td>最低起送价</td><td>" + filterData.minDeliverPrice + "元起送</td></tr>";
        if (filterData.isFreeDeliver == 1) {
            conData += "<tr><td>免费送货</td><td>是</td></tr>";
        }
        if (filterData.hasGift == 1) {
            conData += "<tr><td>有赠品</td><td>是</td></tr>";
        }
        if (filterData.isBusinessing == 1) {
            conData += "<tr><td>营业中</td><td>是</td></tr>";
        }
        if (filterData.hasBill == 1) {
            conData += "<tr><td>有购物小票</td><td>是</td></tr>";
        }
        if (filterData.hasInvoice == 1) {
            conData += "<tr><td>可开发票</td><td>是</td></tr>";
        }


        var resultFilter = $("#hidResultFilter").val();
        if (resultFilter.length > 0) {
            resultFilter = resultFilter.substring(1);
            conData += "<tr><td>结果中筛选</td><td>" + resultFilter + "</td></tr>";
        }

    }
    else {
        conData += "<tr><td>综合评分</td><td>" + filterData.minScore + "分及以上</td></tr>";
        conData += "<tr><td>距离</td><td>" + filterData.maxRange + "千米以内</td></tr>";
        conData += "<tr><td>最低起送价</td><td>" + filterData.minDeliverPrice + "元起送</td></tr>";
        if (filterData.isFreeDeliver == 1) {
            conData += "<tr><td>免费送货</td><td>是</td></tr>";
        }
        if (filterData.hasGift == 1) {
            conData += "<tr><td>有赠品</td><td>是</td></tr>";
        }
        if (filterData.isBusinessing == 1) {
            conData += "<tr><td>营业中</td><td>是</td></tr>";
        }
        if (filterData.hasBill == 1) {
            conData += "<tr><td>有购物小票</td><td>是</td></tr>";
        }
        if (filterData.hasInvoice == 1) {
            conData += "<tr><td>可开发票</td><td>是</td></tr>";
        }

    }

    conData += "<tr><td>当前位置经度坐标</td><td>" + $.cookie(config.cookieKey.curPosX) + "</td></tr>";
    conData += "<tr><td>当前位置纬度坐标</td><td>" + $.cookie(config.cookieKey.curPosY) + "</td></tr>";
    conData += "<tr><td>当前位置</td><td>" + $.cookie(config.cookieKey.receiveShortAddress) + " 附近</td></tr>";
    conData += "<tr><td>&nbsp;</td><td></td></tr>";


    conData += "</table></div>";
    conData += "<div class='changeCondition'>提示:点击右上角\"更多设置\"按钮可更改本页不可见的其他条件.</div>";
    var ele = $(curEle).next().html(conData);

}

function showMask() {
    $('body').css("overflow", "hidden");
    var tmp = 400 - (document.body.scrollTop + document.documentElement.scrollTop);
    tmp = tmp < 0 ? 0 : tmp;

    $("#divMask").css({ "top": tmp + "px" })
    $("#divMask").show();
}

function hideMask() {
    $("#divMask").hide();
    $('body').css("overflow", "visible");
}

//设置已读公告,下次不要弹出
function setReaded() {
    $.cookie(config.cookieKey.readedNoticeID, $("#hidNoticeID").val(), { expires: config.cookieKey.timeout });
}

//载入公告信息
function loadNotice() {
    ajaxRequest({
        url: config.api.commonAPI + "GetLastNotice",
        successCallback: function (data) {
            if (!isNullOrEmpty(data)) {
                var id = data.NoticeID;
                var title = data.Title;
                var content = data.Content;
                if ($.cookie(config.cookieKey.readedNoticeID) != id) {
                    $("#noticeTitle").text(title);
                    $("#divNoticeContent").html(content);
                    $("#hidNoticeID").val(id);
                    if (content.length < 300) {
                        openBSModal("#divNoticeModal");
                    }
                    else {
                        openMaxBSModal("#divNoticeModal");
                    }
                }
            }
        },
        failCallback: function (data) {
            alert("公告加载失败:" + data);
        }
    });
}

function autoLoadProductNavData(callback) {
    if ($.cookie(config.cookieKey.isLoadProductNavData) != 1) {
        ajaxRequest({
            url: config.api.commonAPI + "GetIndexProductNavData",
            successCallback: function (data) {
                if (!isNullOrEmpty(data)) {
                    LSTemp.setItem(config.cookieKey.productNavData, JSON.stringify(data));
                }
                $.cookie(config.cookieKey.isLoadProductNavData, 1);
                if (callback != undefined) {
                    callback(data);
                }
            },
            failCallback: function (data) {
                alert("商品导航数据加载失败:" + data);
            }
        });
    }
    else {
        if (callback != undefined) {
            var json = LSTemp.getItem(config.cookieKey.productNavData);
            if (!isNullOrEmpty(json)) {
                var data = JSON.parse(json);
                callback(data);
            }
        }
    }
}

function autoLoadProductCateData() {

    if ($.cookie(config.cookieKey.isLoadProductCateData) != 1) {
        ajaxRequest({
            url: config.api.commonAPI + "GetAllProductSysCateData",
            successCallback: function (data) {
                if (!isNullOrEmpty(data)) {

                    LSTemp.setItem(config.cookieKey.productCateData, JSON.stringify(data));
                }
                $.cookie(config.cookieKey.isLoadProductCateData, 1);
            },
            failCallback: function (data) {
                alert("商品分类数据加载失败:" + data);
            }
        });
    }
}


//获取分类节点导航链接并设置导航全名称
function getFullNavNodeLink(cateNO) {
    var fullName = "";
    var fullLink = "<dl><dt>当前分类:</dt><dd>";

    if (!isNullOrEmpty(cateNO)) {
        var json = LSTemp.getItem(config.cookieKey.productCateData);
        if (!isNullOrEmpty(json)) {
            var data = JSON.parse(json);
            var len = 4;
            var tmpCateNO = cateNO.substr(0, len);
            while (tmpCateNO.length < cateNO.length) {
                $.each(data, function (i, n) {
                    if (n.Cate_NO == tmpCateNO) {
                        fullLink += '<a data-cate-no="' + n.Cate_NO + '">' + n.Name + '</a>> ';
                        fullName += n.Name + ">";
                        return false;
                    }
                });
                len += 4;
                tmpCateNO = cateNO.substr(0, len);
            }
        }
        fullLink += '<a data-cate-no="' + searchCateNO + '">' + searchCateName + '</a><span id="spanCloseNavNode" class="fa fa-close marginL5" title="点击清除分类条件"></span></dd></dl>';
        fullName += searchCateName;
        fullCateName = fullName;
    }

    return fullLink;
}

//获取分类节点的相关分类
function getBrotherNodeLink(cateNO) {
    var fullLink = "<dl><dt>相关分类:</dt><dd>";
    debugger;
    if (!isNullOrEmpty(cateNO)) {
        var json = LSTemp.getItem(config.cookieKey.productCateData);
        if (!isNullOrEmpty(json)) {
            var data = JSON.parse(json);
            var cateNoLength = cateNO.length;

            var nodes = $.grep(data, function (item, idx) {
                return item.Cate_NO.length == cateNoLength;
            });
            if (cateNoLength != 4) {
                var tmpCateNO = cateNO.substr(0, cateNoLength - 4);
                $.each(nodes, function (i, n) {
                    if (n.Cate_NO.startWith(tmpCateNO) && n.Cate_NO != cateNO) {
                        fullLink += '<a data-cate-no="' + n.Cate_NO + '">' + n.Name + '</a>';
                    }
                });
            }
            else {
                $.each(nodes, function (i, n) {
                    if (n.Cate_NO != cateNO) {
                        fullLink += '<a data-cate-no="' + n.Cate_NO + '">' + n.Name + '</a>';
                    }
                });

            }
        }
    }
    return fullLink + '</dd></dl>';
}


function initNav() {
    navWidth = $(window).width() - 20;
    $("#divNav").width(navWidth);

    $("#divCollapse").addClass("divCollapseOpen");
    $("#divCollapse").mouseenter(showProductNav);
    $("#divCollapse").click(function () {
        if (navIsShow == 1) {
            hideProductNav();
        }
    });
    $("#divNav").mouseleave(hideProductNav);
    bindNavListEvent();
    bindNavLinkEvent();
}

function showProductNav() {
    if (navIsShow == 0) {
        $("#divNav").animate({ marginLeft: '0px', opacity: 'toggle' }, "fast", null, function () {
            $("#divCollapse").removeClass("divCollapseOpen").addClass("divCollapseClose");
            $("#divNav").show();
        });
        navIsShow = 1;
    }

}

function hideProductNav() {
    if (navIsShow == 1) {
        $("#divNav").animate({ marginLeft: '-' + navWidth + 'px', opacity: 'toggle' }, "fast", null, function () {
            $("#divCollapse").removeClass("divCollapseClose").addClass("divCollapseOpen");
        });
        navIsShow = 0;
    }

}

//绑定左侧导航列表的鼠标事件
function bindNavListEvent() {
    $("#divNavList .list-group-item").live("mouseenter", function () {

        var cateNO = $(this).attr("data-cate-no");
        var cateName = $(this).text();
        var subParentID = $(this).attr("data-id");

        $("#divNavList .list-group-item.active").find("span:last").remove();
        $("#divNavList .list-group-item.active").removeClass("active");
        $(this).addClass("active");
        $(this).append('<span class="fa fa-chevron-right pull-right"></span>');

        //设置右边导航列表
        setNavItemList(subParentID, cateNO, cateName);

    });
}

function bindNavListData(data) {
    var listHtml = "";
    var topNodes = $.grep(data, function (item, idx) {
        return item.Parent_ID == "0";
    })
    $.each(topNodes, function (i, n) {
        listHtml += ' <a class="list-group-item" data-id="' + n.ID + '" data-cate-no="' + n.Cate_NO + '">' + n.Name + '</a>';
    });
    $("#divNavList").html(listHtml);
}
//设置右侧导航项
function setNavItemList(parentID, cateNO, cateName) {
    $("#divNavItem").width(navWidth - 202);
    $("#divNavItem").html(cateNO);

    var json = LSTemp.getItem(config.cookieKey.productNavData);
    if (!isNullOrEmpty(json)) {
        var data = JSON.parse(json);
        var subNodes = $.grep(data, function (item, idx) {
            return item.Parent_ID == parentID;
        })

        var listHtml = "";

        $.each(subNodes, function (i, n) {
            listHtml += ' <dl>';
            if (!isNullOrEmpty(n.Cate_NO)) {
                listHtml += ' <dt><a data-cate-no="' + n.Cate_NO + '">' + n.Name + '<span class="fa fa-chevron-right"></span></a></dt>';
            }
            else {
                listHtml += ' <dt><a>' + n.Name + '<span class="fa fa-chevron-right"></span></a></dt>';
            }

            listHtml += '<dd>';
            var lastNodes = $.grep(data, function (item, idx) {
                return item.Parent_ID == n.ID;
            })
            $.each(lastNodes, function (j, x) {
                listHtml += '<a data-cate-no="' + x.Cate_NO + '">' + x.Name + '</a>';
            });
            if (!isNullOrEmpty(n.Cate_NO)) {
                listHtml += '<a data-cate-no="' + n.Cate_NO + '">所有'+n.Name+'</a>';
            }
            listHtml += '</dd>';
            listHtml += ' </dl>';
        });
        listHtml += '<label ><a data-cate-no="' + cateNO + '">所有' + cateName + '<span class="fa fa-search marginL5"></span></a></label>';

    }
    $("#divNavItem").html(listHtml);
    $("#divNavItem").show();
}
//绑定导航链接的事件
function bindNavLinkEvent() {
    $("#divNavItem a[data-cate-no],#divNavNode a,#divNavBrotherNode a").live("click", function () {
        var cateNO = $(this).attr("data-cate-no");
        searchCateNO = cateNO;
        searchCateName = $(this).text();
        getList();
        hideProductNav();
        $("#divNavNode").html(getFullNavNodeLink(cateNO));
        $("#divNavBrotherNode").html(getBrotherNodeLink(cateNO));
        $("#divNavNode").show();
        $("#divNavBrotherNode").show();
    });

    $("#spanCloseNavNode").live("click", function () {
        $("#divNavNode").hide();
        $("#divNavBrotherNode").hide();
        searchCateNO = "";
        searchCateName = "";
        fullCateName = "";
        getList();
    });
}
