
(function ($) {

    $.fn.jqueryzoom = function (options) {
        var settings = {
            xzoom: 200,//zoomed width default width
            yzoom: 200,//zoomed div default width
            offset: 10,	//zoomed div default offset
            position: "right",//zoomed div default position,offset position is to the right of the image
            lens: 1, //zooming lens over the image,by default is 1;
            preload: 1
        };

        if (options) {
            $.extend(settings, options);
        }

        var noalt = '';
        $(this).hover(function () {

            var containerWidth = $(this).parent().width();
            var containerHeight = $(this).parent().height();

            var containerLeft = $(this).parent().offset().left;
            var containerTop = $(this).parent().offset().top;

            var imageWidth = $(this).children('img').width();
            var imageHeight = $(this).children('img').height();

            var imagePaddingLeft = (containerWidth - imageWidth) / 2;
            var imagePaddingTop = (containerHeight - imageHeight) / 2;

            var imageLeft = $(this).children('img').offset().left;
            var imageTop = $(this).children('img').offset().top;



            noalt = $(this).children("img").attr("alt");

            var bigimage = $(this).children("img").attr("jqimg");

            $(this).children("img").attr("alt", '');

            if ($("div.zoomdiv").get().length == 0) {

                $(this).after("<div class='zoomdiv'><img class='bigimg' src='" + bigimage + "'/></div>");


                $(this).append("<div class='jqZoomPup'>&nbsp;</div>");

            }


            if (settings.position == "right") {

                if (containerLeft + containerWidth + settings.offset + settings.xzoom > screen.width) {

                    leftpos = containerLeft - settings.offset - settings.xzoom;

                } else {

                    leftpos = containerLeft + containerWidth + settings.offset;
                }
            } else {
                leftpos = containerLeft - settings.xzoom - settings.offset;
                if (leftpos < 0) {

                    leftpos = containerLeft + containerWidth + settings.offset;

                }

            }

            $("div.zoomdiv").css({ top: 0, left: leftpos });

            $("div.zoomdiv").width(settings.xzoom);

            $("div.zoomdiv").height(settings.yzoom);

            $("div.zoomdiv").show();

            if (!settings.lens) {
                $(this).css('cursor', 'crosshair');
            }


            $(document.body).mousemove(function (e) {

                mouse = new MouseEvent(e);

                var bigwidth = $(".bigimg").get(0).offsetWidth;

                var bigheight = $(".bigimg").get(0).offsetHeight;

                var scalex = 'x';
                var scaley = 'y';

                if (isNaN(scalex) | isNaN(scaley)) {

                    var scalex = (bigwidth / imageWidth);

                    var scaley = (bigheight / imageHeight);

                    if (bigwidth > imageWidth || bigheight > imageHeight) {
                        $("div.jqZoomPup").width((settings.xzoom) / scalex - imagePaddingLeft / 2 - 2);

                        $("div.jqZoomPup").height((settings.yzoom) / scaley - imagePaddingTop / 2 - 2);
                    }
                    else {//当原图宽高不大于缩图时,缩放框和原图一样大小
                        $("div.jqZoomPup").width(imageWidth);

                        $("div.jqZoomPup").height(imageHeight);
                    }


                    if (settings.lens) {
                        $("div.jqZoomPup").css('visibility', 'visible');
                    }

                }

                xpos = mouse.x - $("div.jqZoomPup").width() / 2 - imageLeft;

                ypos = mouse.y - $("div.jqZoomPup").height() / 2 - imageTop;

                if (settings.lens) {

                    if (mouse.x - $("div.jqZoomPup").width() / 2 < imageLeft) {
                        xpos = 0;
                    } else if (mouse.x + $("div.jqZoomPup").width() / 2 > imageWidth + imageLeft) {
                        xpos = (imageWidth - $("div.jqZoomPup").width() - 2);
                    }
                    else {
                        xpos = xpos;
                    }

                    if (mouse.y - $("div.jqZoomPup").height() / 2 < imageTop) {
                        ypos = 0;
                    } else if (mouse.y + $("div.jqZoomPup").height() / 2 > imageHeight + imageTop) {
                        ypos = (imageHeight - $("div.jqZoomPup").height() - 2);
                    }
                    else {
                        ypos = ypos;
                    }

                }

                xpos = xpos + imageLeft;
                ypos = ypos + imagePaddingTop+1;


                if (settings.lens) {

                    $("div.jqZoomPup").css({ top: ypos, left: xpos });

                }

                scrolly = ypos-imagePaddingTop;

                $("div.zoomdiv").get(0).scrollTop = scrolly * scaley;

                scrollx = xpos-imageLeft;

                $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex;


            });
        }, function () {

            $(this).children("img").attr("alt", noalt);
            $(document.body).unbind("mousemove");
            if (settings.lens) {
                $("div.jqZoomPup").remove();
            }
            $("div.zoomdiv").remove();

        });

        count = 0;

        if (settings.preload) {

            $('body').append("<div style='display:none;' class='jqPreload" + count + "'></div>");

            $(this).each(function () {

                var imagetopreload = $(this).children("img").attr("jqimg");

                jQuery('div.jqPreload' + count + '').html('<img src=\"' + imagetopreload + '\">');

            });

        }

    }

})(jQuery);

function MouseEvent(e) {
    this.x = e.pageX
    this.y = e.pageY


}

