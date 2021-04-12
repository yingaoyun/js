$(function () {
    adaptation(750);

    //适配
    function adaptation(size) {
        if (document.documentElement.clientWidth > size) {
            document.documentElement.style.fontSize = size / 7.5 + 'px';
        } else {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        }
    }

    $(window).resize(function () {
        adaptation(750);
    })
	

	
});

//添加书签
var TY = {};
TY.add_bookmark = function (title, url) {
    var title = title || document.title;
    var url = url || window.location.href;
    if (document.all) {
        try {
            window.external.addFavorite(url, title);
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    } else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else {
        alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
}

//选项卡切换
function onSelect(obj, ch) {
    var parentNodeObj = obj.parentNode;
    var s = 0;
    for (i = 0; i < parentNodeObj.childNodes.length; i++) {
        // alert("第" +i +"次")
        if (parentNodeObj.childNodes[i].nodeName == "#text") {
            continue;
        }
        parentNodeObj.childNodes[i].className = "tab_1";
        var newObj = document.getElementById(ch + "_" + s);

        if (newObj != null) {
            newObj.style.display = 'none';
            if (parentNodeObj.childNodes[i] == obj) {
                newObj.style.display = '';
            }
        }
        s += 1;
    }
    obj.className = "tab_2";
}


$(document).ready(function () {
    $(".wenben").off('click').on('click', '.icon-unfold', function () {
        $(".desc").animate({height: $('.desc-content').height()}, "slow");
        $(this).removeClass('icon-unfold icon-fold').addClass('icon-fold');
    }).on('click', '.icon-fold', function () {
        $(".desc").animate({height: '75px'}, "normal");
        $(this).removeClass('icon-fold icon-unfold').addClass('icon-unfold');
    });
    /*内页展开收起效果*/
    if ($('.intro-box-txt').height() <= 60) {
        $('.intro-box-txt').css({height: 'auto', overflow: 'auto'});
        $('#showmore_intro').hide();
    }
    ;
    if ($('.intro-box-txt').height() > 60) {
        $('.intro-box-txt').css({height: '60px', overflow: 'hidden'});
        $('#showmore_intro').show().find('a').text('展开>>');
        $('#showmore_intro a').bind('click', function () {
            if ($('.intro-box-txt').height() <= 62) {
                showAllIntro();
            } else {
                hideIntro();
            }
        });
    }
    ;

    function showAllIntro() {
        $('.intro-box-txt').css({height: 'auto', overflow: 'auto'});
        $('#showmore_intro em').hide();
        $('#showmore_intro a').text('<<收起');
    };

    function hideIntro() {
        $('.intro-box-txt').css({height: '60px', overflow: 'hidden'});
        $('#showmore_intro em').show();
        $('#showmore_intro a').text('展开>>');
    };

    $('[name="nice-select"]').click(function (e) {
        $('[name="nice-select"]').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });
    $('[name="nice-select"] li').hover(function (e) {
        $(this).toggleClass('on');
        e.stopPropagation();
    });
    $('[name="nice-select"] li').click(function (e) {
        var val = $(this).html();
        $(this).parents('[name="nice-select"]').find('.nice_input').html(val);
        $('[name="nice-select"] ul').hide();
        var sid = $(this).attr('data-value');
        var p = $(this).attr('data-p');
        if (p == 1) {
            $(".v_l_p1").hide();
            $(".v_l_p1.v_l_" + sid).show();
        } else {
            $(".v_l_p2").hide();
            $(".v_l_p2.v_l_" + sid).show();
        }
        e.stopPropagation();
    });
    $(document).click(function () {
        $('[name="nice-select"] ul').hide();
    });
    $('.erwei').hover(
        function () {
            $('.show_erwei').css("display", "block");
        },
        function () {
            $('.show_erwei').css("display", "none");
        }
    );
});

//收起展开内容
$(function () {
    if ($("#ctext").height() < 100) {
        $("#more-intro").hide();
    } else {
        $("#ctext").css({"height": "100px", "overflow": "hidden"});
    }
    //软件简介收展
    $("#more-intro-btn").toggle(function () {
        $(this).html("收起剧情<<");
        $("#ctext").css({"height": "auto", "overflow": "visible", display: "block"});
    }, function () {
        $(this).html("详细剧情>>");
        $("#ctext").css({"height": "100px", "overflow": "hidden"});
    });
});

$(function () {
    var offSet = $(".htzixun").height() + $(".itemcon").height() + 550;
    $(".ping").click(function () {
        $('html,body').animate({
            scrollTop: offSet
        }, 400);//返回顶部所用的时间
        return false;
    });
});

"use strict";

!function () {
    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, o = {}, n = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s], l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint,
                    p = l && h, u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(), function () {
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    function t(t) {
        this.e = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.e[i].apply(this.e, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, {element: this});
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
(function (e) {
    Date.now = Date.now || function () {
        return +(new Date)
    }, e.ias = function (t) {
        function u() {
            var t;
            i.onChangePage(function (e, t, r) {
                s && s.setPage(e, r), n.onPageChange.call(this, e, r, t)
            });
            if (n.triggerPageThreshold > 0) a(); else if (e(n.next).attr("href")) {
                var u = r.getCurrentScrollOffset(n.scrollContainer);
                E(function () {
                    p(u)
                })
            }
            return s && s.havePage() && (l(), t = s.getPage(), r.forceScrollTop(function () {
                var n;
                t > 1 ? (v(t), n = h(!0), e("html, body").scrollTop(n)) : a()
            })), o
        }

        function a() {
            c(), n.scrollContainer.scroll(f)
        }

        function f() {
            var e, t;
            e = r.getCurrentScrollOffset(n.scrollContainer), t = h(), e >= t && (m() >= n.triggerPageThreshold ? (l(), E(function () {
                p(e)
            })) : p(e))
        }

        function l() {
            n.scrollContainer.unbind("scroll", f)
        }

        function c() {
            e(n.pagination).hide()
        }

        function h(t) {
            var r, i;
            return r = e(n.container).find(n.item).last(), r.size() === 0 ? 0 : (i = r.offset().top + r.height(), t || (i += n.thresholdMargin), i)
        }

        function p(t, r) {
            var s;
            s = e(n.next).attr("href");
            if (!s) return n.noneleft && e(n.container).find(n.item).last().after(n.noneleft), l();
            if (n.beforePageChange && e.isFunction(n.beforePageChange) && n.beforePageChange(t, s) === !1) return;
            i.pushPages(t, s), l(), y(), d(s, function (t, i) {
                var o = n.onLoadItems.call(this, i), u;
                o !== !1 && (e(i).hide(), u = e(n.container).find(n.item).last(), u.after(i), e(i).fadeIn()), s = e(n.next, t).attr("href"), e(n.pagination).replaceWith(e(n.pagination, t)), b(), c(), s ? a() : l(), n.onRenderComplete.call(this, i), r && r.call(this)
            })
        }

        function d(t, r, i) {
            var s = [], o, u = Date.now(), a, f;
            i = i || n.loaderDelay, e.get(t, null, function (t) {
                o = e(n.container, t).eq(0), 0 === o.length && (o = e(t).filter(n.container).eq(0)), o && o.find(n.item).each(function () {
                    s.push(this)
                }), r && (f = this, a = Date.now() - u, a < i ? setTimeout(function () {
                    r.call(f, t, s)
                }, i - a) : r.call(f, t, s))
            }, "html")
        }

        function v(t) {
            var n = h(!0);
            n > 0 && p(n, function () {
                l(), i.getCurPageNum(n) + 1 < t ? (v(t), e("html,body").animate({scrollTop: n}, 400, "swing")) : (e("html,body").animate({scrollTop: n}, 1e3, "swing"), a())
            })
        }

        function m() {
            var e = r.getCurrentScrollOffset(n.scrollContainer);
            return i.getCurPageNum(e)
        }

        function g() {
            var t = e(".ias_loader");
            return t.size() === 0 && (t = e('<div class="ias_loader">' + n.loader + "</div>"), t.hide()), t
        }

        function y() {
            var t = g(), r;
            n.customLoaderProc !== !1 ? n.customLoaderProc(t) : (r = e(n.container).find(n.item).last(), r.after(t), t.fadeIn())
        }

        function b() {
            var e = g();
            e.remove()
        }

        function w(t) {
            var r = e(".ias_trigger");
            return r.size() === 0 && (r = e('<div class="ias_trigger"><a href="#">' + n.trigger + "</a></div>"), r.hide()), e("a", r).unbind("click").bind("click", function () {
                return S(), t.call(), !1
            }), r
        }

        function E(t) {
            var r = w(t), i;
            n.customTriggerProc !== !1 ? n.customTriggerProc(r) : (i = e(n.container).find(n.item).last(), i.after(r), r.fadeIn())
        }

        function S() {
            var e = w();
            e.remove()
        }

        var n = e.extend({}, e.ias.defaults, t), r = new e.ias.util, i = new e.ias.paging(n.scrollContainer),
            s = n.history ? new e.ias.history : !1, o = this;
        u()
    }, e.ias.defaults = {
        container: "#container",
        scrollContainer: e(window),
        item: ".item",
        pagination: "#pagination",
        next: ".next",
        noneleft: !1,
        loader: '<img src="images/loader.gif"/>',
        loaderDelay: 600,
        triggerPageThreshold: 3,
        trigger: "Load more items",
        thresholdMargin: 0,
        history: !0,
        onPageChange: function () {
        },
        beforePageChange: function () {
        },
        onLoadItems: function () {
        },
        onRenderComplete: function () {
        },
        customLoaderProc: !1,
        customTriggerProc: !1
    }, e.ias.util = function () {
        function i() {
            e(window).load(function () {
                t = !0
            })
        }

        var t = !1, n = !1, r = this;
        i(), this.forceScrollTop = function (i) {
            e("html,body").scrollTop(0), n || (t ? (i.call(), n = !0) : setTimeout(function () {
                r.forceScrollTop(i)
            }, 1))
        }, this.getCurrentScrollOffset = function (e) {
            var t, n;
            return e.get(0) === window ? t = e.scrollTop() : t = e.offset().top, n = e.height(), t + n
        }
    }, e.ias.paging = function () {
        function s() {
            e(window).scroll(o)
        }

        function o() {
            var t, s, o, f, l;
            t = i.getCurrentScrollOffset(e(window)), s = u(t), o = a(t), r !== s && (f = o[0], l = o[1], n.call({}, s, f, l)), r = s
        }

        function u(e) {
            for (var n = t.length - 1; n > 0; n--) if (e > t[n][0]) return n + 1;
            return 1
        }

        function a(e) {
            for (var n = t.length - 1; n >= 0; n--) if (e > t[n][0]) return t[n];
            return null
        }

        var t = [[0, document.location.toString()]], n = function () {
        }, r = 1, i = new e.ias.util;
        s(), this.getCurPageNum = function (t) {
            return t = t || i.getCurrentScrollOffset(e(window)), u(t)
        }, this.onChangePage = function (e) {
            n = e
        }, this.pushPages = function (e, n) {
            t.push([e, n])
        }
    }, e.ias.history = function () {
        function n() {
            t = !!(window.history && history.pushState && history.replaceState), t = !1
        }

        var e = !1, t = !1;
        n(), this.setPage = function (e, t) {
            this.updateState({page: e}, "", t)
        }, this.havePage = function () {
            return this.getState() !== !1
        }, this.getPage = function () {
            var e;
            return this.havePage() ? (e = this.getState(), e.page) : 1
        }, this.getState = function () {
            var e, n, r;
            if (t) {
                n = history.state;
                if (n && n.ias) return n.ias
            } else {
                e = window.location.hash.substring(0, 7) === "#/page/";
                if (e) return r = parseInt(window.location.hash.replace("#/page/", ""), 10), {page: r}
            }
            return !1
        }, this.updateState = function (t, n, r) {
            e ? this.replaceState(t, n, r) : this.pushState(t, n, r)
        }, this.pushState = function (n, r, i) {
            var s;
            t ? history.pushState({ias: n}, r, i) : (s = n.page > 0 ? "#/page/" + n.page : "", window.location.hash = s), e = !0
        }, this.replaceState = function (e, n, r) {
            t ? history.replaceState({ias: e}, n, r) : this.pushState(e, n, r)
        }
    }
})(jQuery);


$(function () {
    var _$ = ["document", "location", ".menu a", "each", "href", "toString", "split", "#", "addClass", "on", "parent", ".subnav", "prev", "on", ".playlist a", "#", "parents", "li", "active", ".menuico", "click", "toggleClass", "on", ".menu", "on", ".schfixed,.schbox", "hasClass", "on", ".schfixed,.schbox", "removeClass", "on", ".schico", "close", ".schico", "close", ".sitenavico", "on", ".sitenav ul", "on", ".schico.statefixed", "stopPropagation", ".menuico,.menu", "on", ".menuico,.menu", "on", "userAgent", "match", "html, body", "animate", "close", "nextAll", ".schfixed", "on", ".schinput", "focus", ".schform", "submit", ".schbtn", "submit", ".footnav li:first-child", "noline", '.schfixed', "is", "target", "has", "length", '.schfixed', "on", ".userinfo,.sharebox,.casecon li", "hover", "on", "on", ".weixin", "find", "span", "show", "span", "hide", "#txaArticle", ".cmtform .text", ".cmtform", "slideDown", ".itemtop dl:first-child", "on", ".itemtop dl", "on", "siblings", "on", ".itemtopname span", "slice", "top", "#txaArticle", ".cmtinfo .text", ".cmtinfo", ".playlist li", "on", "on", "animation", '.fadebox', "waypoint", 'down', "element", 'animated', 'item-animate', 'body .fadebox.item-animate', 'fadeInUp animated', 'item-animate', 'easeInOutExpo', '100%', ".fadebox", "css", "opacity", "1", "lazyload", "img", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", "fadeIn", "ajaxpager", "loadpagenum", "ias", '.catecon', '.multi', '.pagebar', '.next-page a', '<div class="pagination-loading">数据载入中...</div>', '下一页', "_23", "push", '_26', '<a/>', "attr", 'href', "pathname", "replace", '/', "selectstart", "logoanimate", ".logo", ".logo a", "style", "-webkit-mask:-webkit-gradient(radial, 90 40, ", ", 90 40, ", ", from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)));", "backtotop", "返回顶部", '<a class="backtotop"><i></i></a>', "appendTo", "body", "title", "html, body", "scrollTop", "height", "XMLHttpRequest", "top", "bind", "scroll", ".swiper-container .swiper-slide", "size", "slideeffect", '.swiper-container', '.swiper-pagination', '.swiper-button-prev', '.swiper-button-next', 'fade', '.swiper-container', '.swiper-pagination', '.swiper-button-prev', '.swiper-button-next', '.swiper-container', 'null', 'null', 'null', ".swiper-button-prev,.swiper-button-next"];
    var a = window[_$[0]][_$[1]];
    $(_$[2])[_$[3]](function () {
        if (this[_$[4]] == a[_$[5]]()[_$[6]](_$[7])[0x0]) {
            $(this)[_$[8]](_$[9])[_$[10]](_$[11])[_$[12]]()[_$[8]](_$[9])
        }
    });
    $(_$[14])[_$[3]](function () {
        if (this[_$[4]] == a[_$[5]]()[_$[6]](_$[7])[0x0]) {
            $(this)[_$[16]](_$[17])[_$[8]](_$[18])
        }
    });
    $(_$[19])[_$[20]](function () {
        $(this)[_$[21]](_$[9]);
        $(_$[23])[_$[21]](_$[9]);
        if ($(_$[25])[_$[26]](_$[9])) {
            $(_$[25])[_$[29]](_$[9])
        }
        ;
        if ($(_$[31])[_$[26]](_$[32])) {
            $(_$[31])[_$[29]](_$[32])
        }
    });
    $(_$[35])[_$[20]](function () {
        $(this)[_$[21]](_$[9]);
        $(_$[37])[_$[21]](_$[9])
    });
    $(_$[39])[_$[20]](function (d) {
        event[_$[40]]();
        if ($(_$[41])[_$[26]](_$[9])) {
            $(_$[41])[_$[29]](_$[9])
        }
        ;var e = navigator[_$[45]];
        var f = !!e[_$[46]](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (f) {
            $(_$[47])[_$[48]]({scrollTop: 0x0}, 0x0)
        }
        ;$(this)[_$[21]](_$[32])[_$[50]](_$[51])[_$[21]](_$[9]);
        $(_$[53])[_$[54]]();
        return false
    });
    $(_$[55])[_$[56]](function () {
        $(_$[57])[_$[8]](_$[56])
    });
    $(_$[59])[_$[8]](_$[60]);
    $(window[_$[0]])[_$[20]](function (d) {
        var e = $(_$[61]);
        if (!e[_$[62]](d[_$[63]]) && e[_$[64]](d[_$[63]])[_$[65]] === 0x0) {
            $(_$[61])[_$[29]](_$[9])
        }
    });
    $(_$[68])[_$[69]](function () {
        $(this)[_$[8]](_$[9])
    }, function () {
        $(this)[_$[29]](_$[9])
    });
    $(_$[72])[_$[69]](function () {
        $(this)[_$[73]](_$[74])[_$[75]]()
    }, function () {
        $(this)[_$[73]](_$[74])[_$[77]]()
    });
    $(_$[78])[_$[54]](function () {
        var d = $(_$[79])[_$[65]];
        if (d > 0x0) {
            $(_$[80])[_$[81]]()
        }
    });
    $(_$[82])[_$[8]](_$[9]);
    $(_$[84])[_$[69]](function () {
        $(this)[_$[8]](_$[9])[_$[86]]()[_$[29]](_$[9])
    });
    $(_$[88])[_$[89]](0x0, 0x3)[_$[8]](_$[90]);
    $(_$[78])[_$[54]](function () {
        var d = $(_$[92])[_$[65]];
        if (d > 0x0) {
            $(_$[93])[_$[81]]()
        }
    });
    $(_$[94])[_$[69]](function () {
        $(this)[_$[8]](_$[9])
    }, function () {
        $(this)[_$[29]](_$[9])
    });
    if (video[_$[97]]) {
        var d = function () {
            var e = 0x0;
            $(_$[98])[_$[99]](function (f) {
                if (f === _$[100] && !$(this[_$[101]])[_$[26]](_$[102])) {
                    e++;
                    $(this[_$[101]])[_$[8]](_$[103]);
                    setTimeout(function () {
                        $(_$[104])[_$[3]](function (g) {
                            var h = $(this);
                            setTimeout(function () {
                                h[_$[8]](_$[105]);
                                h[_$[29]](_$[103])
                            }, g * 0xc8, _$[107])
                        })
                    }, 0x64)
                }
            }, {offset: _$[108]})
        };
        d()
    } else {
        $(_$[109])[_$[110]](_$[111], _$[112])
    }
    ;
    if (video[_$[113]]) {
        $(_$[114])[_$[113]]({placeholder: _$[115], effect: _$[116], threshold: 0xc8})
    }
    ;
    if (video[_$[117]]) {
        var d = video[_$[118]];
        $[_$[119]]({
            thresholdMargin: -0x64,
            triggerPageThreshold: d,
            history: false,
            container: _$[120],
            item: _$[121],
            pagination: _$[122],
            next: _$[123],
            loader: _$[124],
            trigger: _$[125],
            onPageChange: function (e, f, g) {
                window[_$[126]] && window[_$[126]][_$[127]]([_$[128], jQuery(_$[129])[_$[130]](_$[131], f)[0x0][_$[132]][_$[133]](/^[^\/]/, _$[134])])
            }
        })
    }
    ;
    if (video[_$[135]]) {
        copyright()
    }
    ;
    if (video[_$[136]]) {
        var d = true;
        $(_$[137])[_$[69]](function () {
            var e = 0x0;
            if (d) {
                var f = setInterval(function () {
                    if (e >= 0xb4) {
                        clearInterval(f);
                        d = true
                    } else {
                        d = false;
                        e++;
                        $(_$[138])[_$[130]](_$[139], _$[140] + e + _$[141] + (e + 0xf) + _$[142])
                    }
                }, 0x1)
            }
        }, function () {
            return
        })
    }
    ;
    if (video[_$[143]]) {
        (function () {
            var d = _$[144], e = $(_$[145])[_$[146]]($(_$[147]))[_$[130]](_$[148], d)[_$[20]](function () {
                $(_$[47])[_$[48]]({scrollTop: 0x0}, 0x0)
            }), b = function () {
                var f = $(window[_$[0]])[_$[150]](), g = $(window)[_$[151]]();
                (f > 0x1f4) ? e[_$[75]]() : e[_$[77]]();
                if (!window[_$[152]]) {
                    e[_$[110]](_$[90], f + g - 0xa6)
                }
            };
            $(window)[_$[154]](_$[155], b);
            b()
        })()
    }
});


//----------------------播放错误反馈-------------------------//




