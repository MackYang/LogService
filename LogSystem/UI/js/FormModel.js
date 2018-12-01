+function ($) {
    "use strict";

    //Form 类定义
    var FormModal = function (element, options) {
        this.$element = $(element);
        this.super = this.$element.data('bs.modal');
        this.options = options;

        this.$element.on('click.submit.formmodal',
            '[data-form="submit"]', $.proxy(this.submit, this));

        this.$element.on('click.reset.formmodal',
            '[data-form="reset"]', $.proxy(this.reset, this));

        this.$element.on('click.cancel.formmodal',
            '[data-form="cancel"]', $.proxy(this.cancel, this));

        var that = this;

        this.$element.on("show.bs.modal", function (e) {
            that.$element.trigger(e = $.Event('show.bs.formmodal'));
            if (e.isDefaultPrevented()) return;
        });

        this.$element.on("shown.bs.modal", function (e) {
            that.$form = that.$element.find('form');
            that.$element.trigger(e = $.Event('shown.bs.formmodal'));
            if (e.isDefaultPrevented()) return;
        });

        this.$element.on("hide.bs.modal", function (e) {
            that.$element.trigger(e = $.Event('hide.bs.formmodal'));
            if (e.isDefaultPrevented()) return;
        });

        this.$element.on("hiden.bs.modal", function (e) {
            that.$element.trigger(e = $.Event('hiden.bs.formmodal'));
            if (e.isDefaultPrevented()) return;
        });

    }

    //默认设置
    FormModal.DEFAULTS = {
        cacheForm: false,
        closeAfterCancel: true
    }

    //反转弹窗状态
    FormModal.prototype.toggle = function (_relatedTarget) {
        return this[!this.super.isShown ? 'show' : 'hide'](_relatedTarget);
    }

    //打开弹窗
    FormModal.prototype.show = function (_relatedTarget) {
        this.super.show(_relatedTarget);
    }
    //关闭弹窗
    FormModal.prototype.hide = function (e) {
        if (e) e.preventDefault();//阻止冒泡
        this.super.hide(e);
    }

    //单击提交按钮
    FormModal.prototype.submit = function (e) {
        if (e) e.preventDefault();
        this.$element.trigger(e = $.Event('beforeSubmit.bs.formmodal'));
        //提交前触发事件
        if (e.isDefaultPrevented()) return;

        this.$form.submit();
        //提交后触发事件
        this.$element.trigger(e = $.Event('afterSubmit.bs.formmodal'));
        if (e.isDefaultPrevented()) return;
    }

    //单击重置按钮
    FormModal.prototype.reset = function (e) {
        if (e) e.preventDefault();
        var resetAction = function () {
            this.$element.trigger(e = $.Event('beforeReset.bs.formmodal'));
            //重置前触发事件
            if (e.isDefaultPrevented()) return;

            this.$form.each(function () {
                this.reset();//jquery不支持reset,转为dom对象后原生调用
            });

            this.$element.trigger(e = $.Event('afterReset.bs.formmodal'));
            //重置后触发事件
            if (e.isDefaultPrevented()) return;
        }

        if (this.super.isShown) return resetAction.call(this);

        this.$element.one("shown.bs.formmodal", $.proxy(resetAction, this));
        this.show();
    }

    //单击取消按钮
    FormModal.prototype.cancel = function (e) {
        if (e) e.preventDefault();

        var e = $.Event('cancel.bs.formmodal');
        this.$element.trigger(e);//取消前先触发事件
        if (e.isDefaultPrevented()) return;

        if (this.options.closeAfterCancel) {
            this.hide(e);//如果设置了data-close-after-cancel=true则关闭弹窗
        }
    }

    //插件定义
    var old = $.fn.formmodal;
    //如果定义了其他的formmodal插件,则保留它,在防冲突之后,可以继续使用该旧代码

    $.fn.formmodal = function (option, _relatedTarget) {
        return this.each(function () {
            //根据选择器,遍历出所有符合规则的元素
            var $this = $(this);
            var options = $.extend({}, FormModal.DEFAULTS, $this.data(), typeof option == 'opject' && option);

            var data = options.cacheForm && $this.data('bs.formmodal');
            options.show = false;
            if (!options.cacheForm)//如果不用缓存,先清空实例,再重新加载远程的内容
            {
                $this.data('bs.modal', null);
            }

            $this.modal(options, _relatedTarget);

            if (!data) $this.data('bs.formmodal', (data = new FormModal(this, options)));

            if (typeof option == 'string') {
                data[option](_relatedTarget);
            }
            else { data.show(_relatedTarget); }

        })
    }
    $.fn.formmodal.Constructor = FormModal;

    $.fn.formmodal.noConflict = function () {
        $.fn.formmodal = old;
        return this;
    }

    $(document).on('click.bs.formmodal.data-api',
        '[data-toggle="formmodal"]', function (e) {
            //监测所有拥有自定义属性data-toggle="modal"的单击事件 
            var $this = $(this);
            var href = $this.attr("href");
            var $target = $($this.attr('data-target') || (href && href.replace('/.*(?=#[^\s]+$)/', '')));
            var option = $target.data('formmodal') ? 'toggle' : $.extend({
                remote: !/#/.test(href) && href
            }, $target.data(), $this.data());
            e.preventDefault();
            $target.formmodal(option, this).one('hide', function () {
                $this.is(':visible') && $this.focus();
            })
        })
}(jQuery)
