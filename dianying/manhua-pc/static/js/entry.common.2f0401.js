(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "+nWu": function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = e.constructor;
                return "function" == typeof t && t instanceof t || (t = Object), new t
            }
        },
        "/CXk": function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, n("dRSK"), n("SRfc"), n("a1Th"), n("h7Nl"), n("Btvt"), n("Oyvg"), n("pIFo");
            var a = i(n("cDf5")),
                o = i(n("+2Rf"));
            ! function () {
                if (window.__fb) throw Error("feedback.js已被加载，请勿重复执行脚本");
                var e = function (e, t, n) {
                        var i = "object" === (0, a["default"])(n) ? n : {};
                        if (void 0 === t) return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                        null === t && (i.expires = -1);
                        var o = new Date;
                        i.expires && o.setTime(o.getTime() + 36e5 * i.expires), document.cookie = e + "=" + encodeURIComponent(t) + ";expires=" + o.toGMTString() + ";path=/;" + (i.domain ? "domain=" + i.domain + ";" : "")
                    },
                    t = {
                        sendApi: "//feedback.yyhao.com/send.asp",
                        fetchApi: "//feedback.yyhao.com/get.asp",
                        emailReg: /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/,
                        cacheFetchCall: function () {},
                        cacheSendCall: function () {}
                    };
                window.showfeedback = function (e) {
                    t.cacheFetchCall(e)
                }, window.feedbackAdd = function (n) {
                    if (n) {
                        var i = e("feedback");
                        e("feedback", (i + "," + n).match(/\d+/g).slice(-50).toString(), {
                            expires: 720
                        }), alert("您提交的留言已成功，我们会仔细考虑您的留言，谢谢！")
                    } else alert("亲，留言失败，请稍后再试试！");
                    t.cacheSendCall(n)
                };
                var n = function (e) {
                        return "string" != typeof e ? (alert("message传参错误！"), !1) : 0 !== e.replace(/(^\s*|\s*$)/g, "").length || (alert("请填写留言信息！"), !1)
                    },
                    i = function (e) {
                        if ("string" != typeof e) return alert("message传参错误！"), !1;
                        var n = e.replace(/(^\s*|\s*$)/g, "");
                        return 0 === n.length ? (alert("请填写邮箱地址，有答复后本站将邮件通知您，强烈建议填QQ邮箱！"), !1) : !!t.emailReg.test(n) || (alert("请填写邮箱地址，有答复后本站将邮件通知您，强烈建议填QQ邮箱！"), !1)
                    };
                window.__fb = {
                    verifyMessage: n,
                    verifyEmail: i,
                    fetch: function (n) {
                        t.cacheFetchCall = "function" == typeof n ? n : function () {};
                        var i = e("feedback");
                        i ? o["default"].ajax({
                            url: t.fetchApi + "?feedbackid=" + i,
                            dataType: "script",
                            scriptCharset: "utf-8"
                        }) : window.showfeedback(null)
                    },
                    send: function (r, s) {
                        var l = "object" === (0, a["default"])(r) ? r : {};
                        if (!n(l.message)) return !1;
                        if (!i(l.email)) return !1;
                        t.cacheSendCall = "function" == typeof s ? s : function () {};
                        var c = window.thisline || window.mhserver || e("mh_thisline") || "",
                            u = screen.width + "x" + screen.height,
                            d = e("feedback") || "";
                        return o["default"].ajax({
                            url: t.sendApi + "?usermessage=" + encodeURIComponent(l.message) + "&refer=" + encodeURIComponent(location.href) + "&contact=" + encodeURIComponent(l.email) + "&lineip=" + c + "&screen=" + u + "&history=" + d,
                            dataType: "script",
                            scriptCharset: "utf-8"
                        }), !0
                    }
                };
                window.__fb.show = function () {
                    if ((0, o["default"])("#js_feedback").length) return (0, o["default"])("#js_feedback").show(), !1;
                    (0, o["default"])("body").append('<div id="js_feedback" class="feedback-modal">                    <div class="feedback-modal-inner">                      <div class="js_close close"><i class="ift-close"></i></div>                      <h2 class="fd-hd title-tabs">                        <span class="js_title_tab title-tab">                          留言反馈                        </span>                        <span class="js_feecback_update js_title_tab title-tab">                          我的留言                        </span>                      </h2>                      <div class="fd-bd content-tabs">                        <div class="split"></div>                        <div class="js_content_tab content-tab">                          <ul class="form-list">                            <li class="form-item">                              <div class="form-textarea">                                <textarea class="js_feedback_message" placeholder="您可以在这里给本站编辑留言、提意见、报错、告诉编辑本站缺少的资源、向编辑表示感谢或支持，您的每一条留言我们都会认真对待"></textarea>                              </div>                            </li>                            <li class="form-item">                              <div class="form-input">                                <input type="text" class="js_feedback_email" placeholder="您的邮箱，有答复后邮件通知您，推荐填写QQ邮箱" value="@qq.com">                              </div>                            </li>                            <li class="form-item">                              <div class="form-button">                                \x3c!-- <input type="button" id="js_feedback_submit" value="提交"> --\x3e                                <div class="js_feedback_submit button">提交</div>                              </div>                            </li>                          </ul>                        </div>                        <div class="js_content_tab content-tab">                          <ul class="js_message_list message-list">                          </ul>                        </div>                      </div>                    </div>                  </div>');
                    var e = !1,
                        t = !1,
                        n = (0, o["default"])("#js_feedback"),
                        i = n.find(".js_title_tab"),
                        a = n.find(".js_content_tab"),
                        r = n.find(".js_feecback_update"),
                        s = n.find(".js_close"),
                        l = n.find(".js_feedback_message"),
                        c = n.find(".js_feedback_email"),
                        u = n.find(".js_feedback_submit"),
                        d = n.find(".js_message_list"),
                        f = function () {
                            if (t) return !1;
                            t = !0;
                            var e = !1;
                            d.html('<li class="message-none">                        获取留言中                      </li>'), __fb.fetch(function (n) {
                                d.html(function (e) {
                                    var t = "";
                                    if (e && e.length)
                                        for (var n = null, i = 0; i < e.length; i++) t += '<li class="message-item">                    <div class="message-hd">                      <span class="time">' + (n = e[i]).writedate + '</span>                      <h3 class="people">您的留言：</h3>                    </div>                    <div class="message-bd">                      <p class="message">' + n.usermessage + "</p>                    </div>", null !== n.edit && n.edit !== undefined && "null" !== n.edit && (t += '<div class="reply">                      <div class="reply-hd">                        <span class="time">' + n.replytime + '</span>                        <h3 class="people">编辑回复</h3>                      </div>                      <div class="reply-bd">                        <p class="message">' + n.edit + "</p>                      </div>                    </div>"), t += "</li>";
                                    else t = '<li class="message-none">                  您还没有留过言                </li>';
                                    return t
                                }(n)), e = !0, t = !1
                            }), setTimeout(function () {
                                e || (t = !1)
                            }, 5e3)
                        };
                    i.on("click", function () {
                        var e = (0, o["default"])(this),
                            t = e.index();
                        e.hasClass("active") || (i.removeClass("active").eq(t).addClass("active"), a.hide().eq(t).show())
                    }).eq(0).click(), s.on("click", function () {
                        n.hide()
                    }), r.on("click", f), u.on("click", function () {
                        if (e) return !1;
                        var t = (0, o["default"])(this),
                            n = {
                                message: l.val(),
                                email: c.val()
                            },
                            i = !1;
                        __fb.send(n, function (n) {
                            i = !0, e = !1, t.text("提交"), l.val(""), f(), (0, o["default"])("#js_feedback").hide()
                        }) && (t.text("提交中，请稍候"), e = !0), setTimeout(function () {
                            i || (e = !1, t.text("提交"))
                        }, 5e3)
                    }), n.show()
                }, window.__fb.close = function () {
                    (0, o["default"])("#js_feedback").hide()
                }
            }();
            var r = window.__fb;
            t["default"] = r
        },
        "/GbM": function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                var n = -1,
                    i = e.length;
                for (t || (t = Array(i)); ++n < i;) t[n] = e[n];
                return t
            }
        },
        "01mU": function (e, t, n) {
            "use strict";
            var i = n("1F0n"),
                a = n("wSwa");
            e.exports = function (e, t, n) {
                return "function" == typeof t ? i(e, !0, a(t, n, 3)) : i(e, !0)
            }
        },
        "0tR4": function (e, t, n) {
            (function (t, n) {
                var i = function (e, i) {
                    "use strict";
                    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
                        var a = HTMLElement.prototype;
                        a.__defineGetter__ && a.__defineGetter__("outerHTML", function () {
                            return (new XMLSerializer).serializeToString(this)
                        })
                    }
                    if (window.getComputedStyle || (window.getComputedStyle = function (e, t) {
                            return this.el = e, this.getPropertyValue = function (t) {
                                var n = /(\-([a-z]){1})/g;
                                return "float" === t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function () {
                                    return arguments[2].toUpperCase()
                                })), e.currentStyle[t] ? e.currentStyle[t] : null
                            }, this
                        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
                            for (var n = t || 0, i = this.length; n < i; n++)
                                if (this[n] === e) return n;
                            return -1
                        }), (document.querySelectorAll || t) && void 0 !== e && (e.nodeType || 0 !== N(e).length)) {
                        var o, r, s, l, c, u, d = this;
                        d.touches = {
                            start: 0,
                            startX: 0,
                            startY: 0,
                            current: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0,
                            abs: 0
                        }, d.positions = {
                            start: 0,
                            abs: 0,
                            diff: 0,
                            current: 0
                        }, d.times = {
                            start: 0,
                            end: 0
                        }, d.id = (new Date).getTime(), d.container = e.nodeType ? e : N(e)[0], d.isTouched = !1, d.isMoved = !1, d.activeIndex = 0, d.centerIndex = 0, d.activeLoaderIndex = 0, d.activeLoopIndex = 0, d.previousIndex = null, d.velocity = 0, d.snapGrid = [], d.slidesGrid = [], d.imagesToLoad = [], d.imagesLoaded = 0, d.wrapperLeft = 0, d.wrapperRight = 0, d.wrapperTop = 0, d.wrapperBottom = 0, d.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
                        var f = {
                            eventTarget: "wrapper",
                            mode: "horizontal",
                            touchRatio: 1,
                            speed: 300,
                            freeMode: !1,
                            freeModeFluid: !1,
                            momentumRatio: 1,
                            momentumBounce: !0,
                            momentumBounceRatio: 1,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            slidesPerViewFit: !0,
                            simulateTouch: !0,
                            followFinger: !0,
                            shortSwipes: !0,
                            longSwipesRatio: .5,
                            moveStartThreshold: !1,
                            onlyExternal: !1,
                            createPagination: !0,
                            pagination: !1,
                            paginationElement: "span",
                            paginationClickable: !1,
                            paginationAsRange: !0,
                            resistance: !0,
                            scrollContainer: !1,
                            preventLinks: !0,
                            preventLinksPropagation: !1,
                            noSwiping: !1,
                            noSwipingClass: "swiper-no-swiping",
                            initialSlide: 0,
                            keyboardControl: !1,
                            mousewheelControl: !1,
                            mousewheelControlForceToAxis: !1,
                            useCSS3Transforms: !0,
                            autoplay: !1,
                            autoplayDisableOnInteraction: !0,
                            autoplayStopOnLast: !1,
                            loop: !1,
                            loopAdditionalSlides: 0,
                            roundLengths: !1,
                            calculateHeight: !1,
                            cssWidthAndHeight: !1,
                            updateOnImagesReady: !0,
                            releaseFormElements: !0,
                            watchActiveIndex: !1,
                            visibilityFullFit: !1,
                            offsetPxBefore: 0,
                            offsetPxAfter: 0,
                            offsetSlidesBefore: 0,
                            offsetSlidesAfter: 0,
                            centeredSlides: !1,
                            queueStartCallbacks: !1,
                            queueEndCallbacks: !1,
                            autoResize: !0,
                            resizeReInit: !1,
                            DOMAnimation: !0,
                            loader: {
                                slides: [],
                                slidesHTMLType: "inner",
                                surroundGroups: 1,
                                logic: "reload",
                                loadAllSlides: !1
                            },
                            swipeToPrev: !0,
                            swipeToNext: !0,
                            slideElement: "div",
                            slideClass: "swiper-slide",
                            slideActiveClass: "swiper-slide-active",
                            slideVisibleClass: "swiper-slide-visible",
                            slideDuplicateClass: "swiper-slide-duplicate",
                            wrapperClass: "swiper-wrapper",
                            paginationElementClass: "swiper-pagination-switch",
                            paginationActiveClass: "swiper-active-switch",
                            paginationVisibleClass: "swiper-visible-switch"
                        };
                        for (var p in i = i || {}, f)
                            if (p in i && "object" == typeof i[p])
                                for (var h in f[p]) h in i[p] || (i[p][h] = f[p][h]);
                            else p in i || (i[p] = f[p]);
                        d.params = i, i.scrollContainer && (i.freeMode = !0, i.freeModeFluid = !0), i.loop && (i.resistance = "100%");
                        var v = "horizontal" === i.mode,
                            m = ["mousedown", "mousemove", "mouseup"];
                        d.browser.ie10 && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), d.browser.ie11 && (m = ["pointerdown", "pointermove", "pointerup"]), d.touchEvents = {
                            touchStart: d.support.touch || !i.simulateTouch ? "touchstart" : m[0],
                            touchMove: d.support.touch || !i.simulateTouch ? "touchmove" : m[1],
                            touchEnd: d.support.touch || !i.simulateTouch ? "touchend" : m[2]
                        };
                        for (var g = d.container.childNodes.length - 1; g >= 0; g--)
                            if (d.container.childNodes[g].className)
                                for (var y = d.container.childNodes[g].className.split(/\s+/), w = 0; w < y.length; w++) y[w] === i.wrapperClass && (o = d.container.childNodes[g]);
                        d.wrapper = o, d._extendSwiperSlide = function (e) {
                            return e.append = function () {
                                return i.loop ? e.insertAfter(d.slides.length - d.loopedSlides) : (d.wrapper.appendChild(e), d.reInit()), e
                            }, e.prepend = function () {
                                return i.loop ? (d.wrapper.insertBefore(e, d.slides[d.loopedSlides]), d.removeLoopedSlides(), d.calcSlides(), d.createLoop()) : d.wrapper.insertBefore(e, d.wrapper.firstChild), d.reInit(), e
                            }, e.insertAfter = function (t) {
                                return void 0 !== t && (i.loop ? ((n = d.slides[t + 1 + d.loopedSlides]) ? d.wrapper.insertBefore(e, n) : d.wrapper.appendChild(e), d.removeLoopedSlides(), d.calcSlides(), d.createLoop()) : (n = d.slides[t + 1], d.wrapper.insertBefore(e, n)), d.reInit(), e);
                                var n
                            }, e.clone = function () {
                                return d._extendSwiperSlide(e.cloneNode(!0))
                            }, e.remove = function () {
                                d.wrapper.removeChild(e), d.reInit()
                            }, e.html = function (t) {
                                return void 0 === t ? e.innerHTML : (e.innerHTML = t, e)
                            }, e.index = function () {
                                for (var t, n = d.slides.length - 1; n >= 0; n--) e === d.slides[n] && (t = n);
                                return t
                            }, e.isActive = function () {
                                return e.index() === d.activeIndex
                            }, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function (t) {
                                return e.swiperSlideDataStorage[t]
                            }, e.setData = function (t, n) {
                                return e.swiperSlideDataStorage[t] = n, e
                            }, e.data = function (t, n) {
                                return void 0 === n ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, n), e)
                            }, e.getWidth = function (t, n) {
                                return d.h.getWidth(e, t, n)
                            }, e.getHeight = function (t, n) {
                                return d.h.getHeight(e, t, n)
                            }, e.getOffset = function () {
                                return d.h.getOffset(e)
                            }, e
                        }, d.calcSlides = function (e) {
                            var t = !!d.slides && d.slides.length;
                            d.slides = [], d.displaySlides = [];
                            for (var n = 0; n < d.wrapper.childNodes.length; n++)
                                if (d.wrapper.childNodes[n].className)
                                    for (var a = d.wrapper.childNodes[n].className.split(/\s+/), o = 0; o < a.length; o++) a[o] === i.slideClass && d.slides.push(d.wrapper.childNodes[n]);
                            for (n = d.slides.length - 1; n >= 0; n--) d._extendSwiperSlide(d.slides[n]);
                            !1 !== t && (t !== d.slides.length || e) && (B(), O(), d.updateActiveSlide(), d.params.pagination && d.createPagination(), d.callPlugins("numberOfSlidesChanged"))
                        }, d.createSlide = function (e, t, n) {
                            t = t || d.params.slideClass, n = n || i.slideElement;
                            var a = document.createElement(n);
                            return a.innerHTML = e || "", a.className = t, d._extendSwiperSlide(a)
                        }, d.appendSlide = function (e, t, n) {
                            if (e) return e.nodeType ? d._extendSwiperSlide(e).append() : d.createSlide(e, t, n).append()
                        }, d.prependSlide = function (e, t, n) {
                            if (e) return e.nodeType ? d._extendSwiperSlide(e).prepend() : d.createSlide(e, t, n).prepend()
                        }, d.insertSlideAfter = function (e, t, n, i) {
                            return void 0 !== e && (t.nodeType ? d._extendSwiperSlide(t).insertAfter(e) : d.createSlide(t, n, i).insertAfter(e))
                        }, d.removeSlide = function (e) {
                            if (d.slides[e]) {
                                if (i.loop) {
                                    if (!d.slides[e + d.loopedSlides]) return !1;
                                    d.slides[e + d.loopedSlides].remove(), d.removeLoopedSlides(), d.calcSlides(), d.createLoop()
                                } else d.slides[e].remove();
                                return !0
                            }
                            return !1
                        }, d.removeLastSlide = function () {
                            return d.slides.length > 0 && (i.loop ? (d.slides[d.slides.length - 1 - d.loopedSlides].remove(), d.removeLoopedSlides(), d.calcSlides(), d.createLoop()) : d.slides[d.slides.length - 1].remove(), !0)
                        }, d.removeAllSlides = function () {
                            for (var e = d.slides.length, t = d.slides.length - 1; t >= 0; t--) d.slides[t].remove(), t === e - 1 && d.setWrapperTranslate(0)
                        }, d.getSlide = function (e) {
                            return d.slides[e]
                        }, d.getLastSlide = function () {
                            return d.slides[d.slides.length - 1]
                        }, d.getFirstSlide = function () {
                            return d.slides[0]
                        }, d.activeSlide = function () {
                            return d.slides[d.activeIndex]
                        }, d.fireCallback = function () {
                            var e = arguments[0];
                            if ("[object Array]" === Object.prototype.toString.call(e))
                                for (var t = 0; t < e.length; t++) "function" == typeof e[t] && e[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            else "[object String]" === Object.prototype.toString.call(e) ? i["on" + e] && d.fireCallback(i["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        }, d.addCallback = function (e, t) {
                            var n, i;
                            return this.params["on" + e] ? (i = this.params["on" + e], "[object Array]" === Object.prototype.toString.apply(i) ? this.params["on" + e].push(t) : "function" == typeof this.params["on" + e] ? (n = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(n), this.params["on" + e].push(t)) : void 0) : (this.params["on" + e] = [], this.params["on" + e].push(t))
                        }, d.removeCallbacks = function (e) {
                            d.params["on" + e] && (d.params["on" + e] = null)
                        };
                        var b = [];
                        for (var C in d.plugins)
                            if (i[C]) {
                                var x = d.plugins[C](d, i[C]);
                                x && b.push(x)
                            } d.callPlugins = function (e, t) {
                            t || (t = {});
                            for (var n = 0; n < b.length; n++) e in b[n] && b[n][e](t)
                        }, !d.browser.ie10 && !d.browser.ie11 || i.onlyExternal || d.wrapper.classList.add("swiper-wp8-" + (v ? "horizontal" : "vertical")), i.freeMode && (d.container.className += " swiper-free-mode"), d.initialized = !1, d.init = function (e, t) {
                            var n = d.h.getWidth(d.container, !1, i.roundLengths),
                                a = d.h.getHeight(d.container, !1, i.roundLengths);
                            if (n !== d.width || a !== d.height || e) {
                                var o, l, c, f, p, h, m;
                                d.width = n, d.height = a, u = v ? n : a;
                                var g = d.wrapper;
                                if (e && d.calcSlides(t), "auto" === i.slidesPerView) {
                                    var y = 0,
                                        w = 0;
                                    i.slidesOffset > 0 && (g.style.paddingLeft = "", g.style.paddingRight = "", g.style.paddingTop = "", g.style.paddingBottom = ""), g.style.width = "", g.style.height = "", i.offsetPxBefore > 0 && (v ? d.wrapperLeft = i.offsetPxBefore : d.wrapperTop = i.offsetPxBefore), i.offsetPxAfter > 0 && (v ? d.wrapperRight = i.offsetPxAfter : d.wrapperBottom = i.offsetPxAfter), i.centeredSlides && (v ? (d.wrapperLeft = (u - this.slides[0].getWidth(!0, i.roundLengths)) / 2, d.wrapperRight = (u - d.slides[d.slides.length - 1].getWidth(!0, i.roundLengths)) / 2) : (d.wrapperTop = (u - d.slides[0].getHeight(!0, i.roundLengths)) / 2, d.wrapperBottom = (u - d.slides[d.slides.length - 1].getHeight(!0, i.roundLengths)) / 2)), v ? (d.wrapperLeft >= 0 && (g.style.paddingLeft = d.wrapperLeft + "px"), d.wrapperRight >= 0 && (g.style.paddingRight = d.wrapperRight + "px")) : (d.wrapperTop >= 0 && (g.style.paddingTop = d.wrapperTop + "px"), d.wrapperBottom >= 0 && (g.style.paddingBottom = d.wrapperBottom + "px")), h = 0;
                                    var b = 0;
                                    for (d.snapGrid = [], d.slidesGrid = [], c = 0, m = 0; m < d.slides.length; m++) {
                                        o = d.slides[m].getWidth(!0, i.roundLengths), l = d.slides[m].getHeight(!0, i.roundLengths), i.calculateHeight && (c = Math.max(c, l));
                                        var C = v ? o : l;
                                        if (i.centeredSlides) {
                                            var x = m === d.slides.length - 1 ? 0 : d.slides[m + 1].getWidth(!0, i.roundLengths),
                                                k = m === d.slides.length - 1 ? 0 : d.slides[m + 1].getHeight(!0, i.roundLengths),
                                                _ = v ? x : k;
                                            if (C > u) {
                                                if (i.slidesPerViewFit) d.snapGrid.push(h + d.wrapperLeft), d.snapGrid.push(h + C - u + d.wrapperLeft);
                                                else
                                                    for (var T = 0; T <= Math.floor(C / (u + d.wrapperLeft)); T++) 0 === T ? d.snapGrid.push(h + d.wrapperLeft) : d.snapGrid.push(h + d.wrapperLeft + u * T);
                                                d.slidesGrid.push(h + d.wrapperLeft)
                                            } else d.snapGrid.push(b), d.slidesGrid.push(b);
                                            b += C / 2 + _ / 2
                                        } else {
                                            if (C > u)
                                                if (i.slidesPerViewFit) d.snapGrid.push(h), d.snapGrid.push(h + C - u);
                                                else if (0 !== u)
                                                for (var S = 0; S <= Math.floor(C / u); S++) d.snapGrid.push(h + u * S);
                                            else d.snapGrid.push(h);
                                            else d.snapGrid.push(h);
                                            d.slidesGrid.push(h)
                                        }
                                        h += C, y += o, w += l
                                    }
                                    i.calculateHeight && (d.height = c), v ? (s = y + d.wrapperRight + d.wrapperLeft, i.cssWidthAndHeight && "height" !== i.cssWidthAndHeight || (g.style.width = y + "px"), i.cssWidthAndHeight && "width" !== i.cssWidthAndHeight || (g.style.height = d.height + "px")) : (i.cssWidthAndHeight && "height" !== i.cssWidthAndHeight || (g.style.width = d.width + "px"), i.cssWidthAndHeight && "width" !== i.cssWidthAndHeight || (g.style.height = w + "px"), s = w + d.wrapperTop + d.wrapperBottom)
                                } else if (i.scrollContainer) g.style.width = "", g.style.height = "", f = d.slides[0].getWidth(!0, i.roundLengths), p = d.slides[0].getHeight(!0, i.roundLengths), s = v ? f : p, g.style.width = f + "px", g.style.height = p + "px", r = v ? f : p;
                                else {
                                    if (i.calculateHeight) {
                                        for (c = 0, p = 0, v || (d.container.style.height = ""), g.style.height = "", m = 0; m < d.slides.length; m++) d.slides[m].style.height = "", c = Math.max(d.slides[m].getHeight(!0), c), v || (p += d.slides[m].getHeight(!0));
                                        l = c, d.height = l, v ? p = l : (u = l, d.container.style.height = u + "px")
                                    } else l = v ? d.height : d.height / i.slidesPerView, i.roundLengths && (l = Math.ceil(l)), p = v ? d.height : d.slides.length * l;
                                    for (o = v ? d.width / i.slidesPerView : d.width, i.roundLengths && (o = Math.ceil(o)), f = v ? d.slides.length * o : d.width, r = v ? o : l, i.offsetSlidesBefore > 0 && (v ? d.wrapperLeft = r * i.offsetSlidesBefore : d.wrapperTop = r * i.offsetSlidesBefore), i.offsetSlidesAfter > 0 && (v ? d.wrapperRight = r * i.offsetSlidesAfter : d.wrapperBottom = r * i.offsetSlidesAfter), i.offsetPxBefore > 0 && (v ? d.wrapperLeft = i.offsetPxBefore : d.wrapperTop = i.offsetPxBefore), i.offsetPxAfter > 0 && (v ? d.wrapperRight = i.offsetPxAfter : d.wrapperBottom = i.offsetPxAfter), i.centeredSlides && (v ? (d.wrapperLeft = (u - r) / 2, d.wrapperRight = (u - r) / 2) : (d.wrapperTop = (u - r) / 2, d.wrapperBottom = (u - r) / 2)), v ? (d.wrapperLeft > 0 && (g.style.paddingLeft = d.wrapperLeft + "px"), d.wrapperRight > 0 && (g.style.paddingRight = d.wrapperRight + "px")) : (d.wrapperTop > 0 && (g.style.paddingTop = d.wrapperTop + "px"), d.wrapperBottom > 0 && (g.style.paddingBottom = d.wrapperBottom + "px")), s = v ? f + d.wrapperRight + d.wrapperLeft : p + d.wrapperTop + d.wrapperBottom, parseFloat(f) > 0 && (!i.cssWidthAndHeight || "height" === i.cssWidthAndHeight) && (g.style.width = f + "px"), parseFloat(p) > 0 && (!i.cssWidthAndHeight || "width" === i.cssWidthAndHeight) && (g.style.height = p + "px"), h = 0, d.snapGrid = [], d.slidesGrid = [], m = 0; m < d.slides.length; m++) d.snapGrid.push(h), d.slidesGrid.push(h), h += r, parseFloat(o) > 0 && (!i.cssWidthAndHeight || "height" === i.cssWidthAndHeight) && (d.slides[m].style.width = o + "px"), parseFloat(l) > 0 && (!i.cssWidthAndHeight || "width" === i.cssWidthAndHeight) && (d.slides[m].style.height = l + "px")
                                }
                                d.initialized ? (d.callPlugins("onInit"), i.onInit && d.fireCallback(i.onInit, d)) : (d.callPlugins("onFirstInit"), i.onFirstInit && d.fireCallback(i.onFirstInit, d)), d.initialized = !0
                            }
                        }, d.reInit = function (e) {
                            d.init(!0, e)
                        }, d.resizeFix = function (e) {
                            d.callPlugins("beforeResizeFix"), d.init(i.resizeReInit || e), i.freeMode ? d.getWrapperTranslate() < -P() && (d.setWrapperTransition(0), d.setWrapperTranslate(-P())) : (d.swipeTo(i.loop ? d.activeLoopIndex : d.activeIndex, 0, !1), i.autoplay && (d.support.transitions && void 0 !== E ? void 0 !== E && (clearTimeout(E), E = undefined, d.startAutoplay()) : void 0 !== M && (clearInterval(M), M = undefined, d.startAutoplay()))), d.callPlugins("afterResizeFix")
                        }, d.destroy = function (e) {
                            var n = d.h.removeEventListener,
                                a = "wrapper" === i.eventTarget ? d.wrapper : d.container;
                            if (d.browser.ie10 || d.browser.ie11 ? (n(a, d.touchEvents.touchStart, U), n(document, d.touchEvents.touchMove, V), n(document, d.touchEvents.touchEnd, z)) : (d.support.touch && (n(a, "touchstart", U), n(a, "touchmove", V), n(a, "touchend", z)), i.simulateTouch && (n(a, "mousedown", U), n(document, "mousemove", V), n(document, "mouseup", z))), i.autoResize && n(window, "resize", d.resizeFix), B(), i.paginationClickable && X(), i.mousewheelControl && d._wheelEvent && n(d.container, d._wheelEvent, j), i.keyboardControl && n(document, "keydown", R), i.autoplay && d.stopAutoplay(), e) {
                                d.wrapper.removeAttribute("style");
                                for (var o = 0; o < d.slides.length; o++) d.slides[o].removeAttribute("style")
                            }
                            d.callPlugins("onDestroy"), t && t(d.container).data("swiper") && t(d.container).removeData("swiper"), window.Zepto && window.Zepto(d.container).data("swiper") && window.Zepto(d.container).removeData("swiper"), d = null
                        }, d.disableKeyboardControl = function () {
                            i.keyboardControl = !1, d.h.removeEventListener(document, "keydown", R)
                        }, d.enableKeyboardControl = function () {
                            i.keyboardControl = !0, d.h.addEventListener(document, "keydown", R)
                        };
                        var k = (new Date).getTime();
                        if (d.disableMousewheelControl = function () {
                                return !!d._wheelEvent && (i.mousewheelControl = !1, d.h.removeEventListener(d.container, d._wheelEvent, j), !0)
                            }, d.enableMousewheelControl = function () {
                                return !!d._wheelEvent && (i.mousewheelControl = !0, d.h.addEventListener(d.container, d._wheelEvent, j), !0)
                            }, i.grabCursor) {
                            var _ = d.container.style;
                            _.cursor = "move", _.cursor = "grab", _.cursor = "-moz-grab", _.cursor = "-webkit-grab"
                        }
                        d.allowSlideClick = !0, d.allowLinks = !0;
                        var T, S, A, E, M, I = !1,
                            L = !0;
                        d.swipeNext = function (e, t) {
                                void 0 === e && (e = !0), !t && i.loop && d.fixLoop(), !t && i.autoplay && d.stopAutoplay(!0), d.callPlugins("onSwipeNext");
                                var n = d.getWrapperTranslate().toFixed(2),
                                    a = n;
                                if ("auto" === i.slidesPerView) {
                                    for (var o = 0; o < d.snapGrid.length; o++)
                                        if (-n >= d.snapGrid[o].toFixed(2) && -n < d.snapGrid[o + 1].toFixed(2)) {
                                            a = -d.snapGrid[o + 1];
                                            break
                                        }
                                } else {
                                    var s = r * i.slidesPerGroup;
                                    a = -(Math.floor(Math.abs(n) / Math.floor(s)) * s + s)
                                }
                                return a < -P() && (a = -P()), a !== n && (q(a, "next", {
                                    runCallbacks: e
                                }), !0)
                            }, d.swipePrev = function (e, t) {
                                void 0 === e && (e = !0), !t && i.loop && d.fixLoop(), !t && i.autoplay && d.stopAutoplay(!0), d.callPlugins("onSwipePrev");
                                var n, a = Math.ceil(d.getWrapperTranslate());
                                if ("auto" === i.slidesPerView) {
                                    n = 0;
                                    for (var o = 1; o < d.snapGrid.length; o++) {
                                        if (-a === d.snapGrid[o]) {
                                            n = -d.snapGrid[o - 1];
                                            break
                                        }
                                        if (-a > d.snapGrid[o] && -a < d.snapGrid[o + 1]) {
                                            n = -d.snapGrid[o];
                                            break
                                        }
                                    }
                                } else {
                                    var s = r * i.slidesPerGroup;
                                    n = -(Math.ceil(-a / s) - 1) * s
                                }
                                return n > 0 && (n = 0), n !== a && (q(n, "prev", {
                                    runCallbacks: e
                                }), !0)
                            }, d.swipeReset = function (e) {
                                void 0 === e && (e = !0), d.callPlugins("onSwipeReset");
                                var t, n = d.getWrapperTranslate(),
                                    a = r * i.slidesPerGroup;
                                P();
                                if ("auto" === i.slidesPerView) {
                                    t = 0;
                                    for (var o = 0; o < d.snapGrid.length; o++) {
                                        if (-n === d.snapGrid[o]) return;
                                        if (-n >= d.snapGrid[o] && -n < d.snapGrid[o + 1]) {
                                            t = d.positions.diff > 0 ? -d.snapGrid[o + 1] : -d.snapGrid[o];
                                            break
                                        }
                                    } - n >= d.snapGrid[d.snapGrid.length - 1] && (t = -d.snapGrid[d.snapGrid.length - 1]), n <= -P() && (t = -P())
                                } else t = n < 0 ? Math.round(n / a) * a : 0, n <= -P() && (t = -P());
                                return i.scrollContainer && (t = n < 0 ? n : 0), t < -P() && (t = -P()), i.scrollContainer && u > r && (t = 0), t !== n && (q(t, "reset", {
                                    runCallbacks: e
                                }), !0)
                            }, d.swipeTo = function (e, t, n) {
                                e = parseInt(e, 10), d.callPlugins("onSwipeTo", {
                                    index: e,
                                    speed: t
                                }), i.loop && (e += d.loopedSlides);
                                var a, o = d.getWrapperTranslate();
                                if (!(!isFinite(e) || e > d.slides.length - 1 || e < 0)) return (a = "auto" === i.slidesPerView ? -d.slidesGrid[e] : -e * r) < -P() && (a = -P()), a !== o && (void 0 === n && (n = !0), q(a, "to", {
                                    index: e,
                                    speed: t,
                                    runCallbacks: n
                                }), !0)
                            }, d._queueStartCallbacks = !1, d._queueEndCallbacks = !1, d.updateActiveSlide = function (e) {
                                if (d.initialized && 0 !== d.slides.length) {
                                    var t;
                                    if (d.previousIndex = d.activeIndex, void 0 === e && (e = d.getWrapperTranslate()), e > 0 && (e = 0), "auto" === i.slidesPerView) {
                                        if (d.activeIndex = d.slidesGrid.indexOf(-e), d.activeIndex < 0) {
                                            for (t = 0; t < d.slidesGrid.length - 1 && !(-e > d.slidesGrid[t] && -e < d.slidesGrid[t + 1]); t++);
                                            var n = Math.abs(d.slidesGrid[t] + e),
                                                a = Math.abs(d.slidesGrid[t + 1] + e);
                                            d.activeIndex = n <= a ? t : t + 1
                                        }
                                    } else d.activeIndex = Math[i.visibilityFullFit ? "ceil" : "round"](-e / r);
                                    if (d.activeIndex === d.slides.length && (d.activeIndex = d.slides.length - 1), d.activeIndex < 0 && (d.activeIndex = 0), d.slides[d.activeIndex]) {
                                        if (d.calcVisibleSlides(e), d.support.classList) {
                                            var o;
                                            for (t = 0; t < d.slides.length; t++)(o = d.slides[t]).classList.remove(i.slideActiveClass), d.visibleSlides.indexOf(o) >= 0 ? o.classList.add(i.slideVisibleClass) : o.classList.remove(i.slideVisibleClass);
                                            d.slides[d.activeIndex].classList.add(i.slideActiveClass)
                                        } else {
                                            var s = new RegExp("\\s*" + i.slideActiveClass),
                                                l = new RegExp("\\s*" + i.slideVisibleClass);
                                            for (t = 0; t < d.slides.length; t++) d.slides[t].className = d.slides[t].className.replace(s, "").replace(l, ""), d.visibleSlides.indexOf(d.slides[t]) >= 0 && (d.slides[t].className += " " + i.slideVisibleClass);
                                            d.slides[d.activeIndex].className += " " + i.slideActiveClass
                                        }
                                        if (i.loop) {
                                            var c = d.loopedSlides;
                                            d.activeLoopIndex = d.activeIndex - c, d.activeLoopIndex >= d.slides.length - 2 * c && (d.activeLoopIndex = d.slides.length - 2 * c - d.activeLoopIndex), d.activeLoopIndex < 0 && (d.activeLoopIndex = d.slides.length - 2 * c + d.activeLoopIndex), d.activeLoopIndex < 0 && (d.activeLoopIndex = 0)
                                        } else d.activeLoopIndex = d.activeIndex;
                                        i.pagination && d.updatePagination(e)
                                    }
                                }
                            }, d.createPagination = function (e) {
                                if (i.paginationClickable && d.paginationButtons && X(), d.paginationContainer = i.pagination.nodeType ? i.pagination : N(i.pagination)[0], i.createPagination) {
                                    var t = "",
                                        n = d.slides.length;
                                    i.loop && (n -= 2 * d.loopedSlides);
                                    for (var a = 0; a < n; a++) t += "<" + i.paginationElement + ' class="' + i.paginationElementClass + '"></' + i.paginationElement + ">";
                                    d.paginationContainer.innerHTML = t
                                }
                                d.paginationButtons = N("." + i.paginationElementClass, d.paginationContainer), e || d.updatePagination(), d.callPlugins("onCreatePagination"), i.paginationClickable && function () {
                                    var e = d.paginationButtons;
                                    if (e)
                                        for (var t = 0; t < e.length; t++) d.h.addEventListener(e[t], "click", K)
                                }()
                            }, d.updatePagination = function (e) {
                                if (i.pagination && (!(d.slides.length < 1) && N("." + i.paginationActiveClass, d.paginationContainer))) {
                                    var t = d.paginationButtons;
                                    if (0 !== t.length) {
                                        for (var n = 0; n < t.length; n++) t[n].className = i.paginationElementClass;
                                        var a = i.loop ? d.loopedSlides : 0;
                                        if (i.paginationAsRange) {
                                            d.visibleSlides || d.calcVisibleSlides(e);
                                            var o, r = [];
                                            for (o = 0; o < d.visibleSlides.length; o++) {
                                                var s = d.slides.indexOf(d.visibleSlides[o]) - a;
                                                i.loop && s < 0 && (s = d.slides.length - 2 * d.loopedSlides + s), i.loop && s >= d.slides.length - 2 * d.loopedSlides && (s = d.slides.length - 2 * d.loopedSlides - s, s = Math.abs(s)), r.push(s)
                                            }
                                            for (o = 0; o < r.length; o++) t[r[o]] && (t[r[o]].className += " " + i.paginationVisibleClass);
                                            i.loop ? t[d.activeLoopIndex] !== undefined && (t[d.activeLoopIndex].className += " " + i.paginationActiveClass) : t[d.activeIndex] && (t[d.activeIndex].className += " " + i.paginationActiveClass)
                                        } else i.loop ? t[d.activeLoopIndex] && (t[d.activeLoopIndex].className += " " + i.paginationActiveClass + " " + i.paginationVisibleClass) : t[d.activeIndex] && (t[d.activeIndex].className += " " + i.paginationActiveClass + " " + i.paginationVisibleClass)
                                    }
                                }
                            }, d.calcVisibleSlides = function (e) {
                                var t = [],
                                    n = 0,
                                    a = 0,
                                    o = 0;
                                v && d.wrapperLeft > 0 && (e += d.wrapperLeft), !v && d.wrapperTop > 0 && (e += d.wrapperTop);
                                for (var s = 0; s < d.slides.length; s++) {
                                    o = (n += a) + (a = "auto" === i.slidesPerView ? v ? d.h.getWidth(d.slides[s], !0, i.roundLengths) : d.h.getHeight(d.slides[s], !0, i.roundLengths) : r);
                                    var l = !1;
                                    i.visibilityFullFit ? (n >= -e && o <= -e + u && (l = !0), n <= -e && o >= -e + u && (l = !0)) : (o > -e && o <= -e + u && (l = !0), n >= -e && n < -e + u && (l = !0), n < -e && o > -e + u && (l = !0)), l && t.push(d.slides[s])
                                }
                                0 === t.length && (t = [d.slides[d.activeIndex]]), d.visibleSlides = t
                            }, d.startAutoplay = function () {
                                if (d.support.transitions) {
                                    if (void 0 !== E) return !1;
                                    if (!i.autoplay) return;
                                    d.callPlugins("onAutoplayStart"), i.onAutoplayStart && d.fireCallback(i.onAutoplayStart, d), Q()
                                } else {
                                    if (void 0 !== M) return !1;
                                    if (!i.autoplay) return;
                                    d.callPlugins("onAutoplayStart"), i.onAutoplayStart && d.fireCallback(i.onAutoplayStart, d), M = setInterval(function () {
                                        i.loop ? (d.fixLoop(), d.swipeNext(!0, !0)) : d.swipeNext(!0, !0) || (i.autoplayStopOnLast ? (clearInterval(M), M = undefined) : d.swipeTo(0))
                                    }, i.autoplay)
                                }
                            }, d.stopAutoplay = function (e) {
                                if (d.support.transitions) {
                                    if (!E) return;
                                    E && clearTimeout(E), E = undefined, e && !i.autoplayDisableOnInteraction && d.wrapperTransitionEnd(function () {
                                        Q()
                                    }), d.callPlugins("onAutoplayStop"), i.onAutoplayStop && d.fireCallback(i.onAutoplayStop, d)
                                } else M && clearInterval(M), M = undefined, d.callPlugins("onAutoplayStop"), i.onAutoplayStop && d.fireCallback(i.onAutoplayStop, d)
                            }, d.loopCreated = !1, d.removeLoopedSlides = function () {
                                if (d.loopCreated)
                                    for (var e = 0; e < d.slides.length; e++) !0 === d.slides[e].getData("looped") && d.wrapper.removeChild(d.slides[e])
                            }, d.createLoop = function () {
                                if (0 !== d.slides.length) {
                                    "auto" === i.slidesPerView ? d.loopedSlides = i.loopedSlides || 1 : d.loopedSlides = Math.floor(i.slidesPerView) + i.loopAdditionalSlides, d.loopedSlides > d.slides.length && (d.loopedSlides = d.slides.length);
                                    var e, t = "",
                                        n = "",
                                        a = "",
                                        r = d.slides.length,
                                        s = Math.floor(d.loopedSlides / r),
                                        l = d.loopedSlides % r;
                                    for (e = 0; e < s * r; e++) {
                                        var c = e;
                                        if (e >= r) c = e - r * Math.floor(e / r);
                                        a += d.slides[c].outerHTML
                                    }
                                    for (e = 0; e < l; e++) n += J(i.slideDuplicateClass, d.slides[e].outerHTML);
                                    for (e = r - l; e < r; e++) t += J(i.slideDuplicateClass, d.slides[e].outerHTML);
                                    var u = t + a + o.innerHTML + a + n;
                                    for (o.innerHTML = u, d.loopCreated = !0, d.calcSlides(), e = 0; e < d.slides.length; e++)(e < d.loopedSlides || e >= d.slides.length - d.loopedSlides) && d.slides[e].setData("looped", !0);
                                    d.callPlugins("onCreateLoop")
                                }
                            }, d.fixLoop = function () {
                                var e;
                                d.activeIndex < d.loopedSlides ? (e = d.slides.length - 3 * d.loopedSlides + d.activeIndex, d.swipeTo(e, 0, !1)) : ("auto" === i.slidesPerView && d.activeIndex >= 2 * d.loopedSlides || d.activeIndex > d.slides.length - 2 * i.slidesPerView) && (e = -d.slides.length + d.activeIndex + d.loopedSlides, d.swipeTo(e, 0, !1))
                            }, d.loadSlides = function () {
                                var e = "";
                                d.activeLoaderIndex = 0;
                                for (var t = i.loader.slides, n = i.loader.loadAllSlides ? t.length : i.slidesPerView * (1 + i.loader.surroundGroups), a = 0; a < n; a++) "outer" === i.loader.slidesHTMLType ? e += t[a] : e += "<" + i.slideElement + ' class="' + i.slideClass + '" data-swiperindex="' + a + '">' + t[a] + "</" + i.slideElement + ">";
                                d.wrapper.innerHTML = e, d.calcSlides(!0), i.loader.loadAllSlides || d.wrapperTransitionEnd(d.reloadSlides, !0)
                            }, d.reloadSlides = function () {
                                var e = i.loader.slides,
                                    t = parseInt(d.activeSlide().data("swiperindex"), 10);
                                if (!(t < 0 || t > e.length - 1)) {
                                    d.activeLoaderIndex = t;
                                    var n, a = Math.max(0, t - i.slidesPerView * i.loader.surroundGroups),
                                        o = Math.min(t + i.slidesPerView * (1 + i.loader.surroundGroups) - 1, e.length - 1);
                                    if (t > 0) {
                                        var s = -r * (t - a);
                                        d.setWrapperTranslate(s), d.setWrapperTransition(0)
                                    }
                                    if ("reload" === i.loader.logic) {
                                        d.wrapper.innerHTML = "";
                                        var l = "";
                                        for (n = a; n <= o; n++) l += "outer" === i.loader.slidesHTMLType ? e[n] : "<" + i.slideElement + ' class="' + i.slideClass + '" data-swiperindex="' + n + '">' + e[n] + "</" + i.slideElement + ">";
                                        d.wrapper.innerHTML = l
                                    } else {
                                        var c = 1e3,
                                            u = 0;
                                        for (n = 0; n < d.slides.length; n++) {
                                            var f = d.slides[n].data("swiperindex");
                                            f < a || f > o ? d.wrapper.removeChild(d.slides[n]) : (c = Math.min(f, c), u = Math.max(f, u))
                                        }
                                        for (n = a; n <= o; n++) {
                                            var p;
                                            n < c && ((p = document.createElement(i.slideElement)).className = i.slideClass, p.setAttribute("data-swiperindex", n), p.innerHTML = e[n], d.wrapper.insertBefore(p, d.wrapper.firstChild)), n > u && ((p = document.createElement(i.slideElement)).className = i.slideClass, p.setAttribute("data-swiperindex", n), p.innerHTML = e[n], d.wrapper.appendChild(p))
                                        }
                                    }
                                    d.reInit(!0)
                                }
                            }, d.calcSlides(), i.loader.slides.length > 0 && 0 === d.slides.length && d.loadSlides(), i.loop && d.createLoop(), d.init(),
                            function () {
                                var e, t, n, a, o = d.h.addEventListener,
                                    r = "wrapper" === i.eventTarget ? d.wrapper : d.container;
                                if (d.browser.ie10 || d.browser.ie11 ? (o(r, d.touchEvents.touchStart, U), o(document, d.touchEvents.touchMove, V), o(document, d.touchEvents.touchEnd, z)) : (d.support.touch && (o(r, "touchstart", U), o(r, "touchmove", V), o(r, "touchend", z)), i.simulateTouch && (o(r, "mousedown", U), o(document, "mousemove", V), o(document, "mouseup", z))), i.autoResize && o(window, "resize", d.resizeFix), O(), d._wheelEvent = !1, i.mousewheelControl) {
                                    if (document.onmousewheel !== undefined && (d._wheelEvent = "mousewheel"), !d._wheelEvent) try {
                                        new WheelEvent("wheel"), d._wheelEvent = "wheel"
                                    } catch (l) {}
                                    d._wheelEvent || (d._wheelEvent = "DOMMouseScroll"), d._wheelEvent && o(d.container, d._wheelEvent, j)
                                }
                                if (i.keyboardControl && o(document, "keydown", R), i.updateOnImagesReady) {
                                    d.imagesToLoad = N("img", d.container);
                                    for (var s = 0; s < d.imagesToLoad.length; s++) e = d.imagesToLoad[s], t = void 0, n = void 0, a = function () {
                                        void 0 !== d && null !== d && (d.imagesLoaded !== undefined && d.imagesLoaded++, d.imagesLoaded === d.imagesToLoad.length && (d.reInit(), i.onImagesReady && d.fireCallback(i.onImagesReady, d)))
                                    }, e.complete ? a() : (n = e.currentSrc || e.getAttribute("src")) ? ((t = new Image).onload = a, t.onerror = a, t.src = n) : a()
                                }
                            }(), i.pagination && d.createPagination(!0), i.loop || i.initialSlide > 0 ? d.swipeTo(i.initialSlide, 0, !1) : d.updateActiveSlide(0), i.autoplay && d.startAutoplay(), d.centerIndex = d.activeIndex, i.onSwiperCreated && d.fireCallback(i.onSwiperCreated, d), d.callPlugins("onSwiperCreated")
                    }

                    function N(e, t) {
                        return document.querySelectorAll ? (t || document).querySelectorAll(e) : n(e, t)
                    }

                    function P() {
                        var e = s - u;
                        return i.freeMode && (e = s - u), i.slidesPerView > d.slides.length && !i.centeredSlides && (e = 0), e < 0 && (e = 0), e
                    }

                    function O() {
                        var e, t = d.h.addEventListener;
                        if (i.preventLinks) {
                            var n = N("a", d.container);
                            for (e = 0; e < n.length; e++) t(n[e], "click", H)
                        }
                        if (i.releaseFormElements) {
                            var a = N("input, textarea, select", d.container);
                            for (e = 0; e < a.length; e++) t(a[e], d.touchEvents.touchStart, W, !0), d.support.touch && i.simulateTouch && t(a[e], "mousedown", W, !0)
                        }
                        if (i.onSlideClick)
                            for (e = 0; e < d.slides.length; e++) t(d.slides[e], "click", D);
                        if (i.onSlideTouch)
                            for (e = 0; e < d.slides.length; e++) t(d.slides[e], d.touchEvents.touchStart, G)
                    }

                    function B() {
                        var e, t = d.h.removeEventListener;
                        if (i.onSlideClick)
                            for (e = 0; e < d.slides.length; e++) t(d.slides[e], "click", D);
                        if (i.onSlideTouch)
                            for (e = 0; e < d.slides.length; e++) t(d.slides[e], d.touchEvents.touchStart, G);
                        if (i.releaseFormElements) {
                            var n = N("input, textarea, select", d.container);
                            for (e = 0; e < n.length; e++) t(n[e], d.touchEvents.touchStart, W, !0), d.support.touch && i.simulateTouch && t(n[e], "mousedown", W, !0)
                        }
                        if (i.preventLinks) {
                            var a = N("a", d.container);
                            for (e = 0; e < a.length; e++) t(a[e], "click", H)
                        }
                    }

                    function R(e) {
                        var t = e.keyCode || e.charCode;
                        if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
                            if (37 === t || 39 === t || 38 === t || 40 === t) {
                                for (var n = !1, i = d.h.getOffset(d.container), a = d.h.windowScroll().left, o = d.h.windowScroll().top, r = d.h.windowWidth(), s = d.h.windowHeight(), l = [
                                        [i.left, i.top],
                                        [i.left + d.width, i.top],
                                        [i.left, i.top + d.height],
                                        [i.left + d.width, i.top + d.height]
                                    ], c = 0; c < l.length; c++) {
                                    var u = l[c];
                                    u[0] >= a && u[0] <= a + r && u[1] >= o && u[1] <= o + s && (n = !0)
                                }
                                if (!n) return
                            }
                            v ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 39 === t && d.swipeNext(), 37 === t && d.swipePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && d.swipeNext(), 38 === t && d.swipePrev())
                        }
                    }

                    function j(e) {
                        var t = d._wheelEvent,
                            n = 0;
                        if (e.detail) n = -e.detail;
                        else if ("mousewheel" === t)
                            if (i.mousewheelControlForceToAxis)
                                if (v) {
                                    if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                                    n = e.wheelDeltaX
                                } else {
                                    if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                                    n = e.wheelDeltaY
                                }
                        else n = e.wheelDelta;
                        else if ("DOMMouseScroll" === t) n = -e.detail;
                        else if ("wheel" === t)
                            if (i.mousewheelControlForceToAxis)
                                if (v) {
                                    if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                                    n = -e.deltaX
                                } else {
                                    if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                                    n = -e.deltaY
                                }
                        else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                        if (i.freeMode) {
                            var a = d.getWrapperTranslate() + n;
                            if (a > 0 && (a = 0), a < -P() && (a = -P()), d.setWrapperTransition(0), d.setWrapperTranslate(a), d.updateActiveSlide(a), 0 === a || a === -P()) return
                        } else(new Date).getTime() - k > 60 && (n < 0 ? d.swipeNext() : d.swipePrev()), k = (new Date).getTime();
                        return i.autoplay && d.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                    }

                    function D(e) {
                        d.allowSlideClick && (F(e), d.fireCallback(i.onSlideClick, d, e))
                    }

                    function G(e) {
                        F(e), d.fireCallback(i.onSlideTouch, d, e)
                    }

                    function F(e) {
                        if (e.currentTarget) d.clickedSlide = e.currentTarget;
                        else {
                            var t = e.srcElement;
                            do {
                                if (t.className.indexOf(i.slideClass) > -1) break;
                                t = t.parentNode
                            } while (t);
                            d.clickedSlide = t
                        }
                        d.clickedSlideIndex = d.slides.indexOf(d.clickedSlide), d.clickedSlideLoopIndex = d.clickedSlideIndex - (d.loopedSlides || 0)
                    }

                    function H(e) {
                        if (!d.allowLinks) return e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.preventLinksPropagation && "stopPropagation" in e && e.stopPropagation(), !1
                    }

                    function W(e) {
                        return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
                    }

                    function U(e) {
                        if (i.preventLinks && (d.allowLinks = !0), d.isTouched || i.onlyExternal) return !1;
                        var t = e.target || e.srcElement;
                        document.activeElement && document.activeElement !== document.body && document.activeElement !== t && document.activeElement.blur();
                        var n = "input select textarea".split(" ");
                        if (i.noSwiping && t && function (e) {
                                var t = !1;
                                do {
                                    $(e, i.noSwipingClass) && (t = !0), e = e.parentElement
                                } while (!t && e.parentElement && !$(e, i.wrapperClass));
                                !t && $(e, i.wrapperClass) && $(e, i.noSwipingClass) && (t = !0);
                                return t
                            }(t)) return !1;
                        if (L = !1, d.isTouched = !0, !(I = "touchstart" === e.type) && "which" in e && 3 === e.which) return d.isTouched = !1, !1;
                        if (!I || 1 === e.targetTouches.length) {
                            d.callPlugins("onTouchStartBegin"), !I && !d.isAndroid && n.indexOf(t.tagName.toLowerCase()) < 0 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                            var a = I ? e.targetTouches[0].pageX : e.pageX || e.clientX,
                                o = I ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                            d.touches.startX = d.touches.currentX = a, d.touches.startY = d.touches.currentY = o, d.touches.start = d.touches.current = v ? a : o, d.setWrapperTransition(0), d.positions.start = d.positions.current = d.getWrapperTranslate(), d.setWrapperTranslate(d.positions.start), d.times.start = (new Date).getTime(), c = undefined, i.moveStartThreshold > 0 && (T = !1), i.onTouchStart && d.fireCallback(i.onTouchStart, d, e), d.callPlugins("onTouchStartEnd")
                        }
                    }

                    function V(e) {
                        if (d.isTouched && !i.onlyExternal && (!I || "mousemove" !== e.type)) {
                            var t = I ? e.targetTouches[0].pageX : e.pageX || e.clientX,
                                n = I ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                            if (void 0 === c && v && (c = !!(c || Math.abs(n - d.touches.startY) > Math.abs(t - d.touches.startX))), void 0 !== c || v || (c = !!(c || Math.abs(n - d.touches.startY) < Math.abs(t - d.touches.startX))), c) d.isTouched = !1;
                            else {
                                if (v) {
                                    if (!i.swipeToNext && t < d.touches.startX || !i.swipeToPrev && t > d.touches.startX) return
                                } else if (!i.swipeToNext && n < d.touches.startY || !i.swipeToPrev && n > d.touches.startY) return;
                                if (e.assignedToSwiper) d.isTouched = !1;
                                else if (e.assignedToSwiper = !0, i.preventLinks && (d.allowLinks = !1), i.onSlideClick && (d.allowSlideClick = !1), i.autoplay && d.stopAutoplay(!0), !I || 1 === e.touches.length) {
                                    var a;
                                    if (d.isMoved || (d.callPlugins("onTouchMoveStart"), i.loop && (d.fixLoop(), d.positions.start = d.getWrapperTranslate()), i.onTouchMoveStart && d.fireCallback(i.onTouchMoveStart, d)), d.isMoved = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, d.touches.current = v ? t : n, d.positions.current = (d.touches.current - d.touches.start) * i.touchRatio + d.positions.start, d.positions.current > 0 && i.onResistanceBefore && d.fireCallback(i.onResistanceBefore, d, d.positions.current), d.positions.current < -P() && i.onResistanceAfter && d.fireCallback(i.onResistanceAfter, d, Math.abs(d.positions.current + P())), i.resistance && "100%" !== i.resistance)
                                        if (d.positions.current > 0 && (a = 1 - d.positions.current / u / 2, d.positions.current = a < .5 ? u / 2 : d.positions.current * a), d.positions.current < -P()) {
                                            var o = (d.touches.current - d.touches.start) * i.touchRatio + (P() + d.positions.start);
                                            a = (u + o) / u;
                                            var r = d.positions.current - o * (1 - a) / 2,
                                                s = -P() - u / 2;
                                            d.positions.current = r < s || a <= 0 ? s : r
                                        } if (i.resistance && "100%" === i.resistance && (d.positions.current > 0 && (!i.freeMode || i.freeModeFluid) && (d.positions.current = 0), d.positions.current < -P() && (!i.freeMode || i.freeModeFluid) && (d.positions.current = -P())), !i.followFinger) return;
                                    if (i.moveStartThreshold)
                                        if (Math.abs(d.touches.current - d.touches.start) > i.moveStartThreshold || T) {
                                            if (!T) return T = !0, void(d.touches.start = d.touches.current);
                                            d.setWrapperTranslate(d.positions.current)
                                        } else d.positions.current = d.positions.start;
                                    else d.setWrapperTranslate(d.positions.current);
                                    return (i.freeMode || i.watchActiveIndex) && d.updateActiveSlide(d.positions.current), i.grabCursor && (d.container.style.cursor = "move", d.container.style.cursor = "grabbing", d.container.style.cursor = "-moz-grabbin", d.container.style.cursor = "-webkit-grabbing"), S || (S = d.touches.current), A || (A = (new Date).getTime()), d.velocity = (d.touches.current - S) / ((new Date).getTime() - A) / 2, Math.abs(d.touches.current - S) < 2 && (d.velocity = 0), S = d.touches.current, A = (new Date).getTime(), d.callPlugins("onTouchMoveEnd"), i.onTouchMove && d.fireCallback(i.onTouchMove, d, e), !1
                                }
                            }
                        }
                    }

                    function z(e) {
                        if (c && d.swipeReset(), !i.onlyExternal && d.isTouched) {
                            d.isTouched = !1, i.grabCursor && (d.container.style.cursor = "move", d.container.style.cursor = "grab", d.container.style.cursor = "-moz-grab", d.container.style.cursor = "-webkit-grab"), d.positions.current || 0 === d.positions.current || (d.positions.current = d.positions.start), i.followFinger && d.setWrapperTranslate(d.positions.current), d.times.end = (new Date).getTime(), d.touches.diff = d.touches.current - d.touches.start, d.touches.abs = Math.abs(d.touches.diff), d.positions.diff = d.positions.current - d.positions.start, d.positions.abs = Math.abs(d.positions.diff);
                            var t = d.positions.diff,
                                n = d.positions.abs,
                                a = d.times.end - d.times.start;
                            n < 5 && a < 300 && !1 === d.allowLinks && (i.freeMode || 0 === n || d.swipeReset(), i.preventLinks && (d.allowLinks = !0), i.onSlideClick && (d.allowSlideClick = !0)), setTimeout(function () {
                                void 0 !== d && null !== d && (i.preventLinks && (d.allowLinks = !0), i.onSlideClick && (d.allowSlideClick = !0))
                            }, 100);
                            var o = P();
                            if (!d.isMoved && i.freeMode) return d.isMoved = !1, i.onTouchEnd && d.fireCallback(i.onTouchEnd, d, e), void d.callPlugins("onTouchEnd");
                            if (!d.isMoved || d.positions.current > 0 || d.positions.current < -o) return d.swipeReset(), i.onTouchEnd && d.fireCallback(i.onTouchEnd, d, e), void d.callPlugins("onTouchEnd");
                            if (d.isMoved = !1, i.freeMode) {
                                if (i.freeModeFluid) {
                                    var s, f = 1e3 * i.momentumRatio,
                                        p = d.velocity * f,
                                        h = d.positions.current + p,
                                        m = !1,
                                        g = 20 * Math.abs(d.velocity) * i.momentumBounceRatio;
                                    h < -o && (i.momentumBounce && d.support.transitions ? (h + o < -g && (h = -o - g), s = -o, m = !0, L = !0) : h = -o), h > 0 && (i.momentumBounce && d.support.transitions ? (h > g && (h = g), s = 0, m = !0, L = !0) : h = 0), 0 !== d.velocity && (f = Math.abs((h - d.positions.current) / d.velocity)), d.setWrapperTranslate(h), d.setWrapperTransition(f), i.momentumBounce && m && d.wrapperTransitionEnd(function () {
                                        L && (i.onMomentumBounce && d.fireCallback(i.onMomentumBounce, d), d.callPlugins("onMomentumBounce"), d.setWrapperTranslate(s), d.setWrapperTransition(300))
                                    }), d.updateActiveSlide(h)
                                }
                                return (!i.freeModeFluid || a >= 300) && d.updateActiveSlide(d.positions.current), i.onTouchEnd && d.fireCallback(i.onTouchEnd, d, e), void d.callPlugins("onTouchEnd")
                            }
                            "toNext" === (l = t < 0 ? "toNext" : "toPrev") && a <= 300 && (n < 30 || !i.shortSwipes ? d.swipeReset() : d.swipeNext(!0, !0)), "toPrev" === l && a <= 300 && (n < 30 || !i.shortSwipes ? d.swipeReset() : d.swipePrev(!0, !0));
                            var y = 0;
                            if ("auto" === i.slidesPerView) {
                                for (var w, b = Math.abs(d.getWrapperTranslate()), C = 0, x = 0; x < d.slides.length; x++)
                                    if ((C += w = v ? d.slides[x].getWidth(!0, i.roundLengths) : d.slides[x].getHeight(!0, i.roundLengths)) > b) {
                                        y = w;
                                        break
                                    } y > u && (y = u)
                            } else y = r * i.slidesPerView;
                            "toNext" === l && a > 300 && (n >= y * i.longSwipesRatio ? d.swipeNext(!0, !0) : d.swipeReset()), "toPrev" === l && a > 300 && (n >= y * i.longSwipesRatio ? d.swipePrev(!0, !0) : d.swipeReset()), i.onTouchEnd && d.fireCallback(i.onTouchEnd, d, e), d.callPlugins("onTouchEnd")
                        }
                    }

                    function $(e, t) {
                        return e && e.getAttribute("class") && e.getAttribute("class").indexOf(t) > -1
                    }

                    function J(e, t) {
                        var n, i = document.createElement("div");
                        return i.innerHTML = t, (n = i.firstChild).className += " " + e, n.outerHTML
                    }

                    function q(e, t, n) {
                        var a = "to" === t && n.speed >= 0 ? n.speed : i.speed,
                            o = +new Date;
                        if (d.support.transitions || !i.DOMAnimation) d.setWrapperTranslate(e), d.setWrapperTransition(a);
                        else {
                            var r = d.getWrapperTranslate(),
                                s = Math.ceil((e - r) / a * (1e3 / 60)),
                                l = r > e ? "toNext" : "toPrev";
                            if (d._DOMAnimating) return;
                            ! function c() {
                                var a = +new Date;
                                r += s * (a - o) / (1e3 / 60), ("toNext" === l ? r > e : r < e) ? (d.setWrapperTranslate(Math.ceil(r)), d._DOMAnimating = !0, window.setTimeout(function () {
                                    c()
                                }, 1e3 / 60)) : (i.onSlideChangeEnd && ("to" === t ? !0 === n.runCallbacks && d.fireCallback(i.onSlideChangeEnd, d, l) : d.fireCallback(i.onSlideChangeEnd, d, l)), d.setWrapperTranslate(e), d._DOMAnimating = !1)
                            }()
                        }
                        d.updateActiveSlide(e), i.onSlideNext && "next" === t && !0 === n.runCallbacks && d.fireCallback(i.onSlideNext, d, e), i.onSlidePrev && "prev" === t && !0 === n.runCallbacks && d.fireCallback(i.onSlidePrev, d, e), i.onSlideReset && "reset" === t && !0 === n.runCallbacks && d.fireCallback(i.onSlideReset, d, e), "next" !== t && "prev" !== t && "to" !== t || !0 !== n.runCallbacks || function (e) {
                            if (d.callPlugins("onSlideChangeStart"), i.onSlideChangeStart)
                                if (i.queueStartCallbacks && d.support.transitions) {
                                    if (d._queueStartCallbacks) return;
                                    d._queueStartCallbacks = !0, d.fireCallback(i.onSlideChangeStart, d, e), d.wrapperTransitionEnd(function () {
                                        d._queueStartCallbacks = !1
                                    })
                                } else d.fireCallback(i.onSlideChangeStart, d, e);
                            if (i.onSlideChangeEnd)
                                if (d.support.transitions)
                                    if (i.queueEndCallbacks) {
                                        if (d._queueEndCallbacks) return;
                                        d._queueEndCallbacks = !0, d.wrapperTransitionEnd(function (t) {
                                            d.fireCallback(i.onSlideChangeEnd, t, e)
                                        })
                                    } else d.wrapperTransitionEnd(function (t) {
                                        d.fireCallback(i.onSlideChangeEnd, t, e)
                                    });
                            else i.DOMAnimation || setTimeout(function () {
                                d.fireCallback(i.onSlideChangeEnd, d, e)
                            }, 10)
                        }(t)
                    }

                    function X() {
                        var e = d.paginationButtons;
                        if (e)
                            for (var t = 0; t < e.length; t++) d.h.removeEventListener(e[t], "click", K)
                    }

                    function K(e) {
                        for (var t, n = e.target || e.srcElement, a = d.paginationButtons, o = 0; o < a.length; o++) n === a[o] && (t = o);
                        i.autoplay && d.stopAutoplay(!0), d.swipeTo(t)
                    }

                    function Q() {
                        E = setTimeout(function () {
                            i.loop ? (d.fixLoop(), d.swipeNext(!0, !0)) : d.swipeNext(!0, !0) || (i.autoplayStopOnLast ? (clearTimeout(E), E = undefined) : d.swipeTo(0)), d.wrapperTransitionEnd(function () {
                                void 0 !== E && Q()
                            })
                        }, i.autoplay)
                    }
                };
                i.prototype = {
                    plugins: {},
                    wrapperTransitionEnd: function (e, t) {
                        "use strict";
                        var n, i = this,
                            a = i.wrapper,
                            o = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];

                        function r(s) {
                            if (s.target === a && (e(i), i.params.queueEndCallbacks && (i._queueEndCallbacks = !1), !t))
                                for (n = 0; n < o.length; n++) i.h.removeEventListener(a, o[n], r)
                        }
                        if (e)
                            for (n = 0; n < o.length; n++) i.h.addEventListener(a, o[n], r)
                    },
                    getWrapperTranslate: function (e) {
                        "use strict";
                        var t, n, i, a, o = this.wrapper;
                        return void 0 === e && (e = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (i = window.getComputedStyle(o, null), window.WebKitCSSMatrix ? a = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : t = (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (n = window.WebKitCSSMatrix ? a.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === e && (n = window.WebKitCSSMatrix ? a.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5]))) : ("x" === e && (n = parseFloat(o.style.left, 10) || 0), "y" === e && (n = parseFloat(o.style.top, 10) || 0)), n || 0
                    },
                    setWrapperTranslate: function (e, t, n) {
                        "use strict";
                        var i, a = this.wrapper.style,
                            o = {
                                x: 0,
                                y: 0,
                                z: 0
                            };
                        3 === arguments.length ? (o.x = e, o.y = t, o.z = n) : (void 0 === t && (t = "horizontal" === this.params.mode ? "x" : "y"), o[t] = e), this.support.transforms && this.params.useCSS3Transforms ? (i = this.support.transforms3d ? "translate3d(" + o.x + "px, " + o.y + "px, " + o.z + "px)" : "translate(" + o.x + "px, " + o.y + "px)", a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = i) : (a.left = o.x + "px", a.top = o.y + "px"), this.callPlugins("onSetWrapperTransform", o), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, o)
                    },
                    setWrapperTransition: function (e) {
                        "use strict";
                        var t = this.wrapper.style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
                            duration: e
                        }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
                    },
                    h: {
                        getWidth: function (e, t, n) {
                            "use strict";
                            var i = window.getComputedStyle(e, null).getPropertyValue("width"),
                                a = parseFloat(i);
                            return (isNaN(a) || i.indexOf("%") > 0 || a < 0) && (a = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), t && (a += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), n ? Math.ceil(a) : a
                        },
                        getHeight: function (e, t, n) {
                            "use strict";
                            if (t) return e.offsetHeight;
                            var i = window.getComputedStyle(e, null).getPropertyValue("height"),
                                a = parseFloat(i);
                            return (isNaN(a) || i.indexOf("%") > 0 || a < 0) && (a = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), t && (a += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), n ? Math.ceil(a) : a
                        },
                        getOffset: function (e) {
                            "use strict";
                            var t = e.getBoundingClientRect(),
                                n = document.body,
                                i = e.clientTop || n.clientTop || 0,
                                a = e.clientLeft || n.clientLeft || 0,
                                o = window.pageYOffset || e.scrollTop,
                                r = window.pageXOffset || e.scrollLeft;
                            return document.documentElement && !window.pageYOffset && (o = document.documentElement.scrollTop, r = document.documentElement.scrollLeft), {
                                top: t.top + o - i,
                                left: t.left + r - a
                            }
                        },
                        windowWidth: function () {
                            "use strict";
                            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
                        },
                        windowHeight: function () {
                            "use strict";
                            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
                        },
                        windowScroll: function () {
                            "use strict";
                            return "undefined" != typeof pageYOffset ? {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            } : document.documentElement ? {
                                left: document.documentElement.scrollLeft,
                                top: document.documentElement.scrollTop
                            } : void 0
                        },
                        addEventListener: function (e, t, n, i) {
                            "use strict";
                            void 0 === i && (i = !1), e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
                        },
                        removeEventListener: function (e, t, n, i) {
                            "use strict";
                            void 0 === i && (i = !1), e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
                        }
                    },
                    setTransform: function (e, t) {
                        "use strict";
                        var n = e.style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
                    },
                    setTranslate: function (e, t) {
                        "use strict";
                        var n = e.style,
                            i = t.x || 0,
                            a = t.y || 0,
                            o = t.z || 0,
                            r = this.support.transforms3d ? "translate3d(" + i + "px," + a + "px," + o + "px)" : "translate(" + i + "px," + a + "px)";
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = r, this.support.transforms || (n.left = i + "px", n.top = a + "px")
                    },
                    setTransition: function (e, t) {
                        "use strict";
                        var n = e.style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms"
                    },
                    support: {
                        touch: window.Modernizr && !0 === Modernizr.touch || function () {
                            "use strict";
                            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                        }(),
                        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
                            "use strict";
                            var e = document.createElement("div").style;
                            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                        }(),
                        transforms: window.Modernizr && !0 === Modernizr.csstransforms || function () {
                            "use strict";
                            var e = document.createElement("div").style;
                            return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
                        }(),
                        transitions: window.Modernizr && !0 === Modernizr.csstransitions || function () {
                            "use strict";
                            var e = document.createElement("div").style;
                            return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
                        }(),
                        classList: function () {
                            "use strict";
                            return "classList" in document.createElement("div")
                        }()
                    },
                    browser: {
                        ie8: function () {
                            "use strict";
                            var e = -1;
                            if ("Microsoft Internet Explorer" === navigator.appName) {
                                var t = navigator.userAgent;
                                null !== new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(t) && (e = parseFloat(RegExp.$1))
                            }
                            return -1 !== e && e < 9
                        }(),
                        ie10: window.navigator.msPointerEnabled,
                        ie11: window.navigator.pointerEnabled
                    }
                }, (t || window.Zepto) && function (e) {
                    "use strict";
                    e.fn.swiper = function (t) {
                        var n;
                        return this.each(function (a) {
                            var o = e(this),
                                r = new i(o[0], t);
                            a || (n = r), o.data("swiper", r)
                        }), n
                    }
                }(t || window.Zepto), e.exports = i
            }).call(this, n("+2Rf"), n("+2Rf"))
        },
        "1F0n": function (e, t, n) {
            "use strict";
            n("a1Th"), n("h7Nl"), n("Btvt");
            var i = n("/GbM"),
                a = n("6V2R"),
                o = n("wgmD"),
                r = n("A0X5"),
                s = n("WYII"),
                l = n("iSio"),
                c = n("+nWu"),
                u = n("W0VD"),
                d = n("ouO+"),
                f = "[object Arguments]",
                p = "[object Function]",
                h = "[object Object]",
                v = {};
            v[f] = v["[object Array]"] = v["[object ArrayBuffer]"] = v["[object Boolean]"] = v["[object Date]"] = v["[object Float32Array]"] = v["[object Float64Array]"] = v["[object Int8Array]"] = v["[object Int16Array]"] = v["[object Int32Array]"] = v["[object Number]"] = v[h] = v["[object RegExp]"] = v["[object String]"] = v["[object Uint8Array]"] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v["[object Uint32Array]"] = !0, v["[object Error]"] = v[p] = v["[object Map]"] = v["[object Set]"] = v["[object WeakMap]"] = !1;
            var m = Object.prototype.toString;
            e.exports = function g(e, t, n, y, w, b, C) {
                var x;
                if (n && (x = w ? n(e, y, w) : n(e)), x !== undefined) return x;
                if (!d(e)) return e;
                var k = u(e);
                if (k) {
                    if (x = s(e), !t) return i(e, x)
                } else {
                    var _ = m.call(e),
                        T = _ == p;
                    if (_ != h && _ != f && (!T || w)) return v[_] ? l(e, _, t) : w ? e : {};
                    if (x = c(T ? {} : e), !t) return o(x, e)
                }
                b || (b = []), C || (C = []);
                for (var S = b.length; S--;)
                    if (b[S] == e) return C[S];
                return b.push(e), C.push(x), (k ? a : r)(e, function (i, a) {
                    x[a] = g(i, t, n, a, e, b, C)
                }), x
            }
        },
        "1hVX": function (e, t, n) {
            "use strict";
            var i = n("ZFff")();
            e.exports = i
        },
        "3Umg": function (e, t, n) {
            var i;
            e.exports = function a(e, t, n) {
                function o(s, l) {
                    if (!t[s]) {
                        if (!e[s]) {
                            var c = "function" == typeof i && i;
                            if (!l && c) return i(s, !0);
                            if (r) return r(s, !0);
                            var u = new Error("Cannot find module '" + s + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var d = t[s] = {
                            exports: {}
                        };
                        e[s][0].call(d.exports, function (t) {
                            var n = e[s][1][t];
                            return o(n || t)
                        }, d, d.exports, a, e, t, n)
                    }
                    return t[s].exports
                }
                for (var r = "function" == typeof i && i, s = 0; s < n.length; s++) o(n[s]);
                return o
            }({
                1: [function (e, t, n) {
                    "use strict";
                    var i = e("fs"),
                        a = e("path"),
                        o = e("./utils"),
                        r = !1,
                        s = e("../package.json").version,
                        l = "<",
                        c = ">",
                        u = "%",
                        d = "locals",
                        f = ["delimiter", "scope", "context", "debug", "compileDebug", "client", "_with", "rmWhitespace", "strict", "filename", "async"],
                        p = f.concat("cache"),
                        h = /^\uFEFF/;

                    function v(e, t) {
                        var a, o, r = t.views,
                            s = /^[A-Za-z]+:\\|^\//.exec(e);
                        if (s && s.length) a = n.resolveInclude(e.replace(/^\/*/, ""), t.root || "/", !0);
                        else if (t.filename && (o = n.resolveInclude(e, t.filename), i.existsSync(o) && (a = o)), a || Array.isArray(r) && r.some(function (t) {
                                return o = n.resolveInclude(e, t, !0), i.existsSync(o)
                            }) && (a = o), !a) throw new Error('Could not find the include file "' + t.escapeFunction(e) + '"');
                        return a
                    }

                    function m(e, t) {
                        var i, a = e.filename,
                            o = arguments.length > 1;
                        if (e.cache) {
                            if (!a) throw new Error("cache option requires a filename");
                            if (i = n.cache.get(a)) return i;
                            o || (t = g(a).toString().replace(h, ""))
                        } else if (!o) {
                            if (!a) throw new Error("Internal EJS error: no file name or template provided");
                            t = g(a).toString().replace(h, "")
                        }
                        return i = n.compile(t, e), e.cache && n.cache.set(a, i), i
                    }

                    function g(e) {
                        return n.fileLoader(e)
                    }

                    function y(e, t, n, i, a) {
                        var o = t.split("\n"),
                            r = Math.max(i - 3, 0),
                            s = Math.min(o.length, i + 3),
                            l = a(n),
                            c = o.slice(r, s).map(function (e, t) {
                                var n = t + r + 1;
                                return (n == i ? " >> " : "    ") + n + "| " + e
                            }).join("\n");
                        throw e.path = l, e.message = (l || "ejs") + ":" + i + "\n" + c + "\n\n" + e.message, e
                    }

                    function w(e) {
                        return e.replace(/;(\s*$)/, "$1")
                    }

                    function b(e, t) {
                        t = t || {};
                        var i = {};
                        this.templateText = e, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", this.dependencies = [], i.client = t.client || !1, i.escapeFunction = t.escape || t.escapeFunction || o.escapeXML, i.compileDebug = !1 !== t.compileDebug, i.debug = !!t.debug, i.filename = t.filename, i.openDelimiter = t.openDelimiter || n.openDelimiter || l, i.closeDelimiter = t.closeDelimiter || n.closeDelimiter || c, i.delimiter = t.delimiter || n.delimiter || u, i.strict = t.strict || !1, i.context = t.context, i.cache = t.cache || !1, i.rmWhitespace = t.rmWhitespace, i.root = t.root, i.outputFunctionName = t.outputFunctionName, i.localsName = t.localsName || n.localsName || d, i.views = t.views, i.async = t.async, i.destructuredLocals = t.destructuredLocals, i.legacyInclude = "undefined" == typeof t.legacyInclude || !!t.legacyInclude, i.strict ? i._with = !1 : i._with = "undefined" == typeof t._with || t._with, this.opts = i, this.regex = this.createRegex()
                    }
                    n.cache = o.cache, n.fileLoader = i.readFileSync, n.localsName = d, n.promiseImpl = new Function("return this;")().Promise, n.resolveInclude = function (e, t, n) {
                        var i = a.dirname,
                            o = a.extname,
                            r = a.resolve,
                            s = r(n ? t : i(t), e),
                            l = o(e);
                        return l || (s += ".ejs"), s
                    }, n.compile = function (e, t) {
                        return t && t.scope && (r || (r = !0), t.context || (t.context = t.scope), delete t.scope), new b(e, t).compile()
                    }, n.render = function (e, t, n) {
                        var i = t || {},
                            a = n || {};
                        return 2 == arguments.length && o.shallowCopyFromList(a, i, f), m(a, e)(i)
                    }, n.renderFile = function () {
                        var e, t, i, a = Array.prototype.slice.call(arguments),
                            r = a.shift(),
                            s = {
                                filename: r
                            };
                        return "function" == typeof arguments[arguments.length - 1] && (e = a.pop()), a.length ? (t = a.shift(), a.length ? o.shallowCopy(s, a.pop()) : (t.settings && (t.settings.views && (s.views = t.settings.views), t.settings["view cache"] && (s.cache = !0), (i = t.settings["view options"]) && o.shallowCopy(s, i)), o.shallowCopyFromList(s, t, p)), s.filename = r) : t = {},
                            function (e, t, i) {
                                var a;
                                if (!i) {
                                    if ("function" == typeof n.promiseImpl) return new n.promiseImpl(function (n, i) {
                                        try {
                                            a = m(e)(t), n(a)
                                        } catch (o) {
                                            i(o)
                                        }
                                    });
                                    throw new Error("Please provide a callback function")
                                }
                                try {
                                    a = m(e)(t)
                                } catch (o) {
                                    return i(o)
                                }
                                i(null, a)
                            }(s, t, e)
                    }, n.Template = b, n.clearCache = function () {
                        n.cache.reset()
                    }, b.modes = {
                        EVAL: "eval",
                        ESCAPED: "escaped",
                        RAW: "raw",
                        COMMENT: "comment",
                        LITERAL: "literal"
                    }, b.prototype = {
                        createRegex: function () {
                            var e = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
                                t = o.escapeRegExpChars(this.opts.delimiter),
                                n = o.escapeRegExpChars(this.opts.openDelimiter),
                                i = o.escapeRegExpChars(this.opts.closeDelimiter);
                            return e = e.replace(/%/g, t).replace(/</g, n).replace(/>/g, i), new RegExp(e)
                        },
                        compile: function () {
                            var e, t, n, i = this.opts,
                                r = "",
                                s = "",
                                l = i.escapeFunction;
                            if (!this.source) {
                                if (this.generateSource(), r += '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n', i.outputFunctionName && (r += "  var " + i.outputFunctionName + " = __append;\n"), i.destructuredLocals && i.destructuredLocals.length) {
                                    for (var c = "  var __locals = (" + i.localsName + " || {}),\n", u = 0; u < i.destructuredLocals.length; u++) {
                                        var d = i.destructuredLocals[u];
                                        u > 0 && (c += ",\n  "), c += d + " = __locals." + d
                                    }
                                    r += c + ";\n"
                                }!1 !== i._with && (r += "  with (" + i.localsName + " || {}) {\n", s += "  }\n"), s += "  return __output;\n", this.source = r + this.source + s
                            }
                            e = i.compileDebug ? "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + (i.filename ? JSON.stringify(i.filename) : "undefined") + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n" : this.source, i.client && (e = "escapeFn = escapeFn || " + l.toString() + ";\n" + e, i.compileDebug && (e = "rethrow = rethrow || " + y.toString() + ";\n" + e)), i.strict && (e = '"use strict";\n' + e), i.debug, i.compileDebug && i.filename && (e = e + "\n//# sourceURL=" + i.filename + "\n");
                            try {
                                if (i.async) try {
                                    n = new Function("return (async function(){}).constructor;")()
                                } catch (g) {
                                    throw g instanceof SyntaxError ? new Error("This environment does not support async/await") : g
                                } else n = Function;
                                t = new n(i.localsName + ", escapeFn, include, rethrow", e)
                            } catch (g) {
                                throw g instanceof SyntaxError && (i.filename && (g.message += " in " + i.filename), g.message += " while compiling ejs\n\n", g.message += "If the above error is not helpful, you may want to try EJS-Lint:\n", g.message += "https://github.com/RyanZim/EJS-Lint", i.async || (g.message += "\n", g.message += "Or, if you meant to create an async function, pass `async: true` as an option.")), g
                            }
                            var f = i.client ? t : function (e) {
                                return t.apply(i.context, [e || {}, l, function (t, n) {
                                    var a = o.shallowCopy({}, e);
                                    return n && (a = o.shallowCopy(a, n)),
                                        function (e, t) {
                                            var n = o.shallowCopy({}, t);
                                            return n.filename = v(e, n), m(n)
                                        }(t, i)(a)
                                }, y])
                            };
                            if (f.dependencies = this.dependencies, i.filename && "function" == typeof Object.defineProperty) {
                                var p = i.filename,
                                    h = a.basename(p, a.extname(p));
                                try {
                                    Object.defineProperty(f, "name", {
                                        value: h,
                                        writable: !1,
                                        enumerable: !1,
                                        configurable: !0
                                    })
                                } catch (g) {}
                            }
                            return f
                        },
                        generateSource: function () {
                            var e = this.opts;
                            e.rmWhitespace && (this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
                            var t = this,
                                i = this.parseTemplateText(),
                                a = this.opts.delimiter,
                                r = this.opts.openDelimiter,
                                s = this.opts.closeDelimiter;
                            i && i.length && i.forEach(function (l, c) {
                                var u, d, f, p, m, y;
                                if (0 === l.indexOf(r + a) && 0 !== l.indexOf(r + a + a) && (d = i[c + 2]) != a + s && d != "-" + a + s && d != "_" + a + s) throw new Error('Could not find matching close tag for "' + l + '".');
                                if (e.legacyInclude && (f = l.match(/^\s*include\s+(\S+)/)) && (u = i[c - 1]) && (u == r + a || u == r + a + "-" || u == r + a + "_")) return p = o.shallowCopy({}, t.opts), m = function (e, t) {
                                    var n, i, a = o.shallowCopy({}, t);
                                    n = v(e, a), i = g(n).toString().replace(h, ""), a.filename = n;
                                    var r = new b(i, a);
                                    return r.generateSource(), {
                                        source: r.source,
                                        filename: n,
                                        template: i
                                    }
                                }(f[1], p), y = t.opts.compileDebug ? "    ; (function(){\n      var __line = 1\n      , __lines = " + JSON.stringify(m.template) + "\n      , __filename = " + JSON.stringify(m.filename) + ";\n      try {\n" + m.source + "      } catch (e) {\n        rethrow(e, __lines, __filename, __line, escapeFn);\n      }\n    ; }).call(this)\n" : "    ; (function(){\n" + m.source + "    ; }).call(this)\n", t.source += y, void t.dependencies.push(n.resolveInclude(f[1], p.filename));
                                t.scanLine(l)
                            })
                        },
                        parseTemplateText: function () {
                            for (var e, t = this.templateText, n = this.regex, i = n.exec(t), a = []; i;) 0 !== (e = i.index) && (a.push(t.substring(0, e)), t = t.slice(e)), a.push(i[0]), t = t.slice(i[0].length), i = n.exec(t);
                            return t && a.push(t), a
                        },
                        _addOutput: function (e) {
                            if (this.truncate && (e = e.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = !1), !e) return e;
                            e = (e = (e = (e = e.replace(/\\/g, "\\\\")).replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/"/g, '\\"'), this.source += '    ; __append("' + e + '")\n'
                        },
                        scanLine: function (e) {
                            var t = this.opts.delimiter,
                                n = this.opts.openDelimiter,
                                i = this.opts.closeDelimiter,
                                a = 0;
                            switch (a = e.split("\n").length - 1, e) {
                                case n + t:
                                case n + t + "_":
                                    this.mode = b.modes.EVAL;
                                    break;
                                case n + t + "=":
                                    this.mode = b.modes.ESCAPED;
                                    break;
                                case n + t + "-":
                                    this.mode = b.modes.RAW;
                                    break;
                                case n + t + "#":
                                    this.mode = b.modes.COMMENT;
                                    break;
                                case n + t + t:
                                    this.mode = b.modes.LITERAL, this.source += '    ; __append("' + e.replace(n + t + t, n + t) + '")\n';
                                    break;
                                case t + t + i:
                                    this.mode = b.modes.LITERAL, this.source += '    ; __append("' + e.replace(t + t + i, t + i) + '")\n';
                                    break;
                                case t + i:
                                case "-" + t + i:
                                case "_" + t + i:
                                    this.mode == b.modes.LITERAL && this._addOutput(e), this.mode = null, this.truncate = 0 === e.indexOf("-") || 0 === e.indexOf("_");
                                    break;
                                default:
                                    if (this.mode) {
                                        switch (this.mode) {
                                            case b.modes.EVAL:
                                            case b.modes.ESCAPED:
                                            case b.modes.RAW:
                                                e.lastIndexOf("//") > e.lastIndexOf("\n") && (e += "\n")
                                        }
                                        switch (this.mode) {
                                            case b.modes.EVAL:
                                                this.source += "    ; " + e + "\n";
                                                break;
                                            case b.modes.ESCAPED:
                                                this.source += "    ; __append(escapeFn(" + w(e) + "))\n";
                                                break;
                                            case b.modes.RAW:
                                                this.source += "    ; __append(" + w(e) + ")\n";
                                                break;
                                            case b.modes.COMMENT:
                                                break;
                                            case b.modes.LITERAL:
                                                this._addOutput(e)
                                        }
                                    } else this._addOutput(e)
                            }
                            this.opts.compileDebug && a && (this.currentLine += a, this.source += "    ; __line = " + this.currentLine + "\n")
                        }
                    }, n.escapeXML = o.escapeXML, n.__express = n.renderFile, e.extensions && (e.extensions[".ejs"] = function (e, t) {
                        var i = t || e.filename,
                            a = {
                                filename: i,
                                client: !0
                            },
                            o = g(i).toString(),
                            r = n.compile(o, a);
                        e._compile("module.exports = " + r.toString() + ";", i)
                    }), n.VERSION = s, n.name = "ejs", "undefined" != typeof window && (window.ejs = n)
                }, {
                    "../package.json": 6,
                    "./utils": 2,
                    fs: 3,
                    path: 4
                }],
                2: [function (e, t, n) {
                    "use strict";
                    var i = /[|\\{}()[\]^$+*?.]/g;
                    n.escapeRegExpChars = function (e) {
                        return e ? String(e).replace(i, "\\$&") : ""
                    };
                    var a = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&#34;",
                            "'": "&#39;"
                        },
                        o = /[&<>'"]/g;

                    function r(e) {
                        return a[e] || e
                    }
                    n.escapeXML = function (e) {
                        return e == undefined ? "" : String(e).replace(o, r)
                    }, n.escapeXML.toString = function () {
                        return Function.prototype.toString.call(this) + ';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'
                    }, n.shallowCopy = function (e, t) {
                        for (var n in t = t || {}) e[n] = t[n];
                        return e
                    }, n.shallowCopyFromList = function (e, t, n) {
                        for (var i = 0; i < n.length; i++) {
                            var a = n[i];
                            "undefined" != typeof t[a] && (e[a] = t[a])
                        }
                        return e
                    }, n.cache = {
                        _data: {},
                        set: function (e, t) {
                            this._data[e] = t
                        },
                        get: function (e) {
                            return this._data[e]
                        },
                        remove: function (e) {
                            delete this._data[e]
                        },
                        reset: function () {
                            this._data = {}
                        }
                    }
                }, {}],
                3: [function (e, t, n) {}, {}],
                4: [function (e, t, n) {
                    (function (e) {
                        function t(e, t) {
                            for (var n = 0, i = e.length - 1; i >= 0; i--) {
                                var a = e[i];
                                "." === a ? e.splice(i, 1) : ".." === a ? (e.splice(i, 1), n++) : n && (e.splice(i, 1), n--)
                            }
                            if (t)
                                for (; n--; n) e.unshift("..");
                            return e
                        }

                        function i(e, t) {
                            if (e.filter) return e.filter(t);
                            for (var n = [], i = 0; i < e.length; i++) t(e[i], i, e) && n.push(e[i]);
                            return n
                        }
                        n.resolve = function () {
                            for (var n = "", a = !1, o = arguments.length - 1; o >= -1 && !a; o--) {
                                var r = o >= 0 ? arguments[o] : e.cwd();
                                if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                                r && (n = r + "/" + n, a = "/" === r.charAt(0))
                            }
                            return n = t(i(n.split("/"), function (e) {
                                return !!e
                            }), !a).join("/"), (a ? "/" : "") + n || "."
                        }, n.normalize = function (e) {
                            var o = n.isAbsolute(e),
                                r = "/" === a(e, -1);
                            return (e = t(i(e.split("/"), function (e) {
                                return !!e
                            }), !o).join("/")) || o || (e = "."), e && r && (e += "/"), (o ? "/" : "") + e
                        }, n.isAbsolute = function (e) {
                            return "/" === e.charAt(0)
                        }, n.join = function () {
                            var e = Array.prototype.slice.call(arguments, 0);
                            return n.normalize(i(e, function (e, t) {
                                if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                                return e
                            }).join("/"))
                        }, n.relative = function (e, t) {
                            function i(e) {
                                for (var t = 0; t < e.length && "" === e[t]; t++);
                                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                return t > n ? [] : e.slice(t, n - t + 1)
                            }
                            e = n.resolve(e).substr(1), t = n.resolve(t).substr(1);
                            for (var a = i(e.split("/")), o = i(t.split("/")), r = Math.min(a.length, o.length), s = r, l = 0; l < r; l++)
                                if (a[l] !== o[l]) {
                                    s = l;
                                    break
                                } for (var c = [], l = s; l < a.length; l++) c.push("..");
                            return (c = c.concat(o.slice(s))).join("/")
                        }, n.sep = "/", n.delimiter = ":", n.dirname = function (e) {
                            if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                            for (var t = e.charCodeAt(0), n = 47 === t, i = -1, a = !0, o = e.length - 1; o >= 1; --o)
                                if (47 === (t = e.charCodeAt(o))) {
                                    if (!a) {
                                        i = o;
                                        break
                                    }
                                } else a = !1;
                            return -1 === i ? n ? "/" : "." : n && 1 === i ? "/" : e.slice(0, i)
                        }, n.basename = function (e, t) {
                            var n = function (e) {
                                "string" != typeof e && (e += "");
                                var t, n = 0,
                                    i = -1,
                                    a = !0;
                                for (t = e.length - 1; t >= 0; --t)
                                    if (47 === e.charCodeAt(t)) {
                                        if (!a) {
                                            n = t + 1;
                                            break
                                        }
                                    } else -1 === i && (a = !1, i = t + 1);
                                return -1 === i ? "" : e.slice(n, i)
                            }(e);
                            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
                        }, n.extname = function (e) {
                            "string" != typeof e && (e += "");
                            for (var t = -1, n = 0, i = -1, a = !0, o = 0, r = e.length - 1; r >= 0; --r) {
                                var s = e.charCodeAt(r);
                                if (47 !== s) - 1 === i && (a = !1, i = r + 1), 46 === s ? -1 === t ? t = r : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                                else if (!a) {
                                    n = r + 1;
                                    break
                                }
                            }
                            return -1 === t || -1 === i || 0 === o || 1 === o && t === i - 1 && t === n + 1 ? "" : e.slice(t, i)
                        };
                        var a = "b" === "ab".substr(-1) ? function (e, t, n) {
                            return e.substr(t, n)
                        } : function (e, t, n) {
                            return t < 0 && (t = e.length + t), e.substr(t, n)
                        }
                    }).call(this, e("_process"))
                }, {
                    _process: 5
                }],
                5: [function (e, t, n) {
                    var i, a, o = t.exports = {};

                    function r() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function s() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function l(e) {
                        if (i === setTimeout) return setTimeout(e, 0);
                        if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
                        try {
                            return i(e, 0)
                        } catch (t) {
                            try {
                                return i.call(null, e, 0)
                            } catch (t) {
                                return i.call(this, e, 0)
                            }
                        }
                    }! function () {
                        try {
                            i = "function" == typeof setTimeout ? setTimeout : r
                        } catch (e) {
                            i = r
                        }
                        try {
                            a = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (e) {
                            a = s
                        }
                    }();
                    var c, u = [],
                        d = !1,
                        f = -1;

                    function p() {
                        d && c && (d = !1, c.length ? u = c.concat(u) : f = -1, u.length && h())
                    }

                    function h() {
                        if (!d) {
                            var e = l(p);
                            d = !0;
                            for (var t = u.length; t;) {
                                for (c = u, u = []; ++f < t;) c && c[f].run();
                                f = -1, t = u.length
                            }
                            c = null, d = !1,
                                function (e) {
                                    if (a === clearTimeout) return clearTimeout(e);
                                    if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                                    try {
                                        a(e)
                                    } catch (t) {
                                        try {
                                            return a.call(null, e)
                                        } catch (t) {
                                            return a.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function v(e, t) {
                        this.fun = e, this.array = t
                    }

                    function m() {}
                    o.nextTick = function (e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        u.push(new v(e, t)), 1 !== u.length || d || l(h)
                    }, v.prototype.run = function () {
                        this.fun.apply(null, this.array)
                    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
                        return []
                    }, o.binding = function (e) {
                        throw new Error("process.binding is not supported")
                    }, o.cwd = function () {
                        return "/"
                    }, o.chdir = function (e) {
                        throw new Error("process.chdir is not supported")
                    }, o.umask = function () {
                        return 0
                    }
                }, {}],
                6: [function (e, t, n) {
                    t.exports = {
                        name: "ejs",
                        description: "Embedded JavaScript templates",
                        keywords: ["template", "engine", "ejs"],
                        version: "2.7.4",
                        author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
                        license: "Apache-2.0",
                        main: "./lib/ejs.js",
                        repository: {
                            type: "git",
                            url: "git://github.com/mde/ejs.git"
                        },
                        bugs: "https://github.com/mde/ejs/issues",
                        homepage: "https://github.com/mde/ejs",
                        dependencies: {},
                        devDependencies: {
                            browserify: "^13.1.1",
                            eslint: "^4.14.0",
                            "git-directory-deploy": "^1.5.1",
                            jake: "^10.3.1",
                            jsdoc: "^3.4.0",
                            "lru-cache": "^4.0.1",
                            mocha: "^5.0.5",
                            "uglify-js": "^3.3.16"
                        },
                        engines: {
                            node: ">=0.10.0"
                        },
                        scripts: {
                            test: "mocha",
                            postinstall: "node ./postinstall.js"
                        }
                    }
                }, {}]
            }, {}, [1])(1)
        },
        "4cDi": function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0, n("pIFo"), n("eM6i"), n("dRSK"), n("a1Th"), n("h7Nl"), n("Btvt");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    r = function () {
                        function t(e) {
                            (0, a["default"])(this, t), this.comicRecord = ACGN.business.comicRecord, this.recordType = ACGN.config.recordType, this.utils = ACGN.util, this.userInfo = e.userInfo, this.collectCallback = e.collectCallback
                        }
                        return (0, o["default"])(t, [{
                            key: "initShow",
                            value: function (e) {
                                var t = this;
                                if (this.setComicId(e), !this.comicIdList) return !1;
                                var n = layer.load(2);
                                this.getuserCollect({
                                    openid: this.userInfo.openid,
                                    type: this.userInfo.type
                                }, function (e, i) {
                                    if (layer.close(n), e) return ACGN.business.msg(e), !1;
                                    t.getUserInfoBook({
                                        user_id: t.userInfo.Uid
                                    }, function (e, a) {
                                        if (e) return ACGN.business.msg(e), !1;
                                        var o = t.renderBookItem(a),
                                            r = t.renderCollect(i);
                                        t.showAddToBook(r + o), layer.close(n)
                                    })
                                })
                            }
                        }, {
                            key: "addComicBook",
                            value: function (e) {
                                layer.load(2), ACGN.ajax({
                                    url: "/api/addcomic/",
                                    type: "post",
                                    data: {
                                        type: this.userInfo.type,
                                        openid: this.userInfo.openid,
                                        book_id: e.book_id,
                                        comic_id_list: this.comicIdList
                                    }
                                }, function (t, n) {
                                    layer.closeAll(), t ? ACGN.business.msg(t) : ACGN.business.msg("已添加至 ".concat(e.bookTitle))
                                })
                            }
                        }, {
                            key: "setComicId",
                            value: function (e) {
                                "[object Array]" !== Object.prototype.toString.call(e) && new Error("comic id can only be an array");
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    t.push(i.comic_id)
                                }
                                this.comicIdList = t.join(","), this.comicCollect = e
                            }
                        }, {
                            key: "showCreateLayerBook",
                            value: function () {
                                var t = this;
                                e(".J_createLayerBook").remove();
                                var n = layer.open({
                                        type: 1,
                                        title: !1,
                                        closeBtn: 0,
                                        shadeClose: !0,
                                        skin: "create-book J_createLayerBook common-header-cat-container",
                                        area: "auto",
                                        content: '\n        <div class="cat-header">\n          <img class="cat-header-img" src="'.concat(siteConf.staticRoot, 'images/comm/cat-header-bg.png">\n        </div>\n        <div class="create-book-content common-content">\n          <div class="create-content">\n            <div class="book-warp J_bookWarp">\n              <div class="addto-book-content">\n                <div class="content-header">\n                  <div class="content-title">新建书单</div>\n                  <div class="content-close J_contentClose">\n                    <i class="ift-close"></i>\n                  </div>\n                </div>\n              </div>\n              <div class="book-title-ipt">\n                <textarea class="input J_bookTitle" rows="3" type="textarea" data-maxlength="20" placeholder="书单名"></textarea>\n                <div class="total-title">\n                  <span class="total-title-length J_totalTitleLength">0</span>/20\n                </div>\n              </div>\n            </div>\n            </div>\n            <div class="btns">\n              <div class="confirm J_confirm">\n                <span>确定</span>\n                <i class="ift-cat btn-cat"></i>\n              </div>\n              <div class="cancel J_cancel">取消</div>\n            </div>\n            <div class="book-msg">点击“确定”，将漫画添加至新书单中</div>\n          </div>\n        </div>')
                                    }),
                                    i = e(".J_createLayerBook"),
                                    a = i.find(".J_bookWarp"),
                                    o = i.find(".J_confirm"),
                                    r = i.find(".J_bookTitle"),
                                    s = i.find(".J_cancel"),
                                    l = i.find(".J_totalTitleLength"),
                                    c = r.attr("data-maxlength");
                                r.off("keyup").on("keyup", function (t) {
                                    var n = e(this),
                                        i = n.val(),
                                        o = i.length;
                                    o > c ? (a.addClass("active"), n.val(i.slice(0, c))) : o <= c && a.removeClass("active"), l.text(n.val().length)
                                }), s.off("click").on("click", function () {
                                    layer.close(n)
                                }), e(".J_contentClose").off("click").on("click", function () {
                                    layer.close(n)
                                }), o.off("click").on("click", function () {
                                    var e = r.val().length;
                                    if (e > 0 && e <= c) {
                                        var i = layer.load(2),
                                            a = r.val();
                                        ACGN.ajax({
                                            url: "/api/bookcreate/",
                                            method: "post",
                                            dataType: "json",
                                            data: {
                                                type: t.userInfo.type,
                                                openid: t.userInfo.openid,
                                                book_title: a,
                                                book_summary: "每个书单都有你的情感，描述一下呗~",
                                                comic_id_list: t.comicIdList
                                            }
                                        }, function (e, t) {
                                            layer.close(i), e ? ACGN.business.msg(e) : (layer.close(n), ACGN.business.msg("已添加至 ".concat(a)))
                                        })
                                    } else ACGN.business.msg("请输入正确的书单名称！")
                                })
                            }
                        }, {
                            key: "showAddToBook",
                            value: function (t) {
                                var n = layer.open({
                                    type: 1,
                                    closeBtn: 0,
                                    shadeClose: !0,
                                    title: !1,
                                    skin: "add-to-book common-header-cat-container",
                                    area: "auto",
                                    content: '\n      <div class="cat-header">\n        <img class="cat-header-img" src="'.concat(siteConf.staticRoot, 'images/comm/cat-header-bg.png">\n      </div>\n      <div class="addto-book-content common-content">\n        <div class="content-header">\n          <div class="content-title">\n            添加到\n          </div>\n          <div class="content-close J_contentClose">\n            <i class="ift-close"></i>\n          </div>\n        </div>\n        <ul class="book-warp">\n          ').concat('\n      <li class="book-item J_layerBookItem create-book-warp" data-bookId="createbook">\n        <div class="create-book-item">\n          <h4 class="title">\n          <i class="ift-add"></i>\n          <span>创建书单</span>\n          </h4>\n        </div>\n      </li>' + t, "\n        </ul>\n      </div>")
                                });
                                e(".J_contentClose").off("click").on("click", function () {
                                    layer.close(n)
                                });
                                var i = this;
                                e(".J_layerBookItem").off("click").on("click", function (t) {
                                    var a = e(this),
                                        o = a.attr("data-bookid"),
                                        r = a.find(".title").text();
                                    if ("createbook" === o) layer.close(n), i.showCreateLayerBook();
                                    else if ("addcollect" === o) {
                                        var s = {
                                                openid: i.userInfo.openid,
                                                type: i.userInfo.type,
                                                url: "/api/setusercollect/",
                                                list: i.comicCollect,
                                                recordType: i.recordType.collect
                                            },
                                            l = layer.load(2);
                                        i.comicRecord.batchSetUserRead(s, function (e, t) {
                                            if (layer.close(l), e) return ACGN.business.msg(e), void("function" == typeof i.collectCallback && i.collectCallback(e));
                                            layer.close(n), ACGN.business.msg(t), "function" == typeof i.collectCallback && i.collectCallback(null, t)
                                        })
                                    } else /^\d+$/.test(o) && i.addComicBook({
                                        book_id: o,
                                        bookTitle: r
                                    })
                                })
                            }
                        }, {
                            key: "getUserInfoBook",
                            value: function (e, t) {
                                ACGN.ajax({
                                    url: "/api/getuserinfobook/?t=" + Date.now(),
                                    type: "get",
                                    data: e
                                }, function (e, n) {
                                    e ? "function" == typeof t && t(siteConf.language.netError) : "function" == typeof t && t(null, n.book_list)
                                })
                            }
                        }, {
                            key: "getuserCollect",
                            value: function (e, t) {
                                var n = this;
                                this.comicRecord.getUserRecord(e, function (e, i, a) {
                                    e ? "function" == typeof t && t(siteConf.language.netError) : a === n.recordType.collect && "function" == typeof t && t(null, i)
                                })
                            }
                        }, {
                            key: "renderBookItem",
                            value: function (e) {
                                for (var t = "", n = 0; n < e.length; n++) {
                                    var i = e[n],
                                        a = i.comic_info.length && i.comic_info[0].comic_id || undefined;
                                    t += '\n        <li class="book-item J_layerBookItem" data-bookId="'.concat(i.book_id, '">\n          <div class="book-cover">\n            <img src="').concat(siteConf.staticRoot, 'images/comm/space.gif" \n            data-src="').concat(a ? siteConf.pathRules.front_cover.replace("{0}", a) : siteConf.staticRoot + "images/comm/error.png", '">\n          </div>\n            <div class="description">\n              <h4 class="title">').concat(i.title, '</h4>\n              <p class="text">共').concat(i.comic_num, "本</p>\n            </div>\n        </li>")
                                }
                                return t
                            }
                        }, {
                            key: "renderCollect",
                            value: function (e) {
                                var t = e[0] ? e[0].comic_id : null;
                                return '\n        <li class="book-item J_layerBookItem" data-bookId="addcollect">\n          <div class="book-cover">\n            <img src="'.concat(siteConf.staticRoot, 'images/comm/space.gif"\n            data-src="').concat(siteConf.pathRules.front_cover.replace("{0}", t || siteConf.staticRoot + "images/comm/error.png"), '">\n          </div>\n          <div class="description">\n            <h4 class="title">我的收藏</h4>\n            <p class="text">共').concat(e.length, "本</p>\n          </div>\n        </li>\n      ")
                            }
                        }]), t
                    }();
                t["default"] = r
            }).call(this, n("+2Rf"))
        },
        6: function (e, t, n) {
            e.exports = n("oFhQ")
        },
        "6BPK": function (e, t, n) {
            var i, a;
            ! function (o, r, s) {
                "use strict";
                "undefined" != typeof window && n("PDX0") ? (a = "function" == typeof (i = s) ? i.call(t, n, t, e) : i) === undefined || (e.exports = a) : e.exports ? e.exports = s() : r.exports ? r.exports = s() : r.Fingerprint2 = s()
            }(0, this, function () {
                "use strict";
                var e = function (e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var n = [0, 0, 0, 0];
                        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                    },
                    t = function (e, t) {
                        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                        var n = [0, 0, 0, 0];
                        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                    },
                    n = function (e, t) {
                        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                    },
                    i = function (e, t) {
                        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                    },
                    a = function (e, t) {
                        return [e[0] ^ t[0], e[1] ^ t[1]]
                    },
                    o = function (e) {
                        return e = a(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = a(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = a(e, [0, e[0] >>> 1])
                    },
                    r = function (r, s) {
                        r = r || "", s = s || 0;
                        for (var l = r.length % 16, c = r.length - l, u = [0, s], d = [0, s], f = [0, 0], p = [0, 0], h = [2277735313, 289559509], v = [1291169091, 658871167], m = 0; m < c; m += 16) f = [255 & r.charCodeAt(m + 4) | (255 & r.charCodeAt(m + 5)) << 8 | (255 & r.charCodeAt(m + 6)) << 16 | (255 & r.charCodeAt(m + 7)) << 24, 255 & r.charCodeAt(m) | (255 & r.charCodeAt(m + 1)) << 8 | (255 & r.charCodeAt(m + 2)) << 16 | (255 & r.charCodeAt(m + 3)) << 24], p = [255 & r.charCodeAt(m + 12) | (255 & r.charCodeAt(m + 13)) << 8 | (255 & r.charCodeAt(m + 14)) << 16 | (255 & r.charCodeAt(m + 15)) << 24, 255 & r.charCodeAt(m + 8) | (255 & r.charCodeAt(m + 9)) << 8 | (255 & r.charCodeAt(m + 10)) << 16 | (255 & r.charCodeAt(m + 11)) << 24], f = t(f, h), f = n(f, 31), f = t(f, v), u = a(u, f), u = n(u, 27), u = e(u, d), u = e(t(u, [0, 5]), [0, 1390208809]), p = t(p, v), p = n(p, 33), p = t(p, h), d = a(d, p), d = n(d, 31), d = e(d, u), d = e(t(d, [0, 5]), [0, 944331445]);
                        switch (f = [0, 0], p = [0, 0], l) {
                            case 15:
                                p = a(p, i([0, r.charCodeAt(m + 14)], 48));
                            case 14:
                                p = a(p, i([0, r.charCodeAt(m + 13)], 40));
                            case 13:
                                p = a(p, i([0, r.charCodeAt(m + 12)], 32));
                            case 12:
                                p = a(p, i([0, r.charCodeAt(m + 11)], 24));
                            case 11:
                                p = a(p, i([0, r.charCodeAt(m + 10)], 16));
                            case 10:
                                p = a(p, i([0, r.charCodeAt(m + 9)], 8));
                            case 9:
                                p = a(p, [0, r.charCodeAt(m + 8)]), p = t(p, v), p = n(p, 33), p = t(p, h), d = a(d, p);
                            case 8:
                                f = a(f, i([0, r.charCodeAt(m + 7)], 56));
                            case 7:
                                f = a(f, i([0, r.charCodeAt(m + 6)], 48));
                            case 6:
                                f = a(f, i([0, r.charCodeAt(m + 5)], 40));
                            case 5:
                                f = a(f, i([0, r.charCodeAt(m + 4)], 32));
                            case 4:
                                f = a(f, i([0, r.charCodeAt(m + 3)], 24));
                            case 3:
                                f = a(f, i([0, r.charCodeAt(m + 2)], 16));
                            case 2:
                                f = a(f, i([0, r.charCodeAt(m + 1)], 8));
                            case 1:
                                f = a(f, [0, r.charCodeAt(m)]), f = t(f, h), f = n(f, 31), f = t(f, v), u = a(u, f)
                        }
                        return u = a(u, [0, r.length]), d = a(d, [0, r.length]), u = e(u, d), d = e(d, u), u = o(u), d = o(d), u = e(u, d), d = e(d, u), ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                    },
                    s = {
                        preprocessor: null,
                        audio: {
                            timeout: 1e3,
                            excludeIOS11: !0
                        },
                        fonts: {
                            swfContainerId: "fingerprintjs2",
                            swfPath: "flash/compiled/FontList.swf",
                            userDefinedFonts: [],
                            extendedJsFonts: !1
                        },
                        screen: {
                            detectScreenOrientation: !0
                        },
                        plugins: {
                            sortPluginsFor: [/palemoon/i],
                            excludeIE: !1
                        },
                        extraComponents: [],
                        excludes: {
                            enumerateDevices: !0,
                            pixelRatio: !0,
                            doNotTrack: !0,
                            fontsFlash: !0
                        },
                        NOT_AVAILABLE: "not available",
                        ERROR: "error",
                        EXCLUDED: "excluded"
                    },
                    l = function (e, t) {
                        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                        else if (e.length === +e.length)
                            for (var n = 0, i = e.length; n < i; n++) t(e[n], n, e);
                        else
                            for (var a in e) e.hasOwnProperty(a) && t(e[a], a, e)
                    },
                    c = function (e, t) {
                        var n = [];
                        return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (l(e, function (e, i, a) {
                            n.push(t(e, i, a))
                        }), n)
                    },
                    u = function () {
                        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
                    },
                    d = function (e) {
                        var t = [window.screen.width, window.screen.height];
                        return e.screen.detectScreenOrientation && t.sort().reverse(), t
                    },
                    f = function (e) {
                        if (window.screen.availWidth && window.screen.availHeight) {
                            var t = [window.screen.availHeight, window.screen.availWidth];
                            return e.screen.detectScreenOrientation && t.sort().reverse(), t
                        }
                        return e.NOT_AVAILABLE
                    },
                    p = function (e) {
                        if (null == navigator.plugins) return e.NOT_AVAILABLE;
                        for (var t = [], n = 0, i = navigator.plugins.length; n < i; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                        return v(e) && (t = t.sort(function (e, t) {
                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                        })), c(t, function (e) {
                            var t = c(e, function (e) {
                                return [e.type, e.suffixes]
                            });
                            return [e.name, e.description, t]
                        })
                    },
                    h = function (e) {
                        var t = [];
                        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                            t = c(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (t) {
                                try {
                                    return new window.ActiveXObject(t), t
                                } catch (n) {
                                    return e.ERROR
                                }
                            })
                        } else t.push(e.NOT_AVAILABLE);
                        return navigator.plugins && (t = t.concat(p(e))), t
                    },
                    v = function (e) {
                        for (var t = !1, n = 0, i = e.plugins.sortPluginsFor.length; n < i; n++) {
                            var a = e.plugins.sortPluginsFor[n];
                            if (navigator.userAgent.match(a)) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    },
                    m = function (e) {
                        try {
                            return !!window.sessionStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    g = function (e) {
                        try {
                            return !!window.localStorage
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    y = function (e) {
                        try {
                            return !!window.indexedDB
                        } catch (t) {
                            return e.ERROR
                        }
                    },
                    w = function (e) {
                        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                    },
                    b = function (e) {
                        return navigator.cpuClass || e.NOT_AVAILABLE
                    },
                    C = function (e) {
                        return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                    },
                    x = function (e) {
                        return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                    },
                    k = function () {
                        var e, t = 0;
                        "undefined" != typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                        try {
                            document.createEvent("TouchEvent"), e = !0
                        } catch (n) {
                            e = !1
                        }
                        return [t, e, "ontouchstart" in window]
                    },
                    _ = function (e) {
                        var t = [],
                            n = document.createElement("canvas");
                        n.width = 2e3, n.height = 200, n.style.display = "inline";
                        var i = n.getContext("2d");
                        return i.rect(0, 0, 10, 10), i.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123", i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.2)", i.font = "18pt Arial", i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), i.globalCompositeOperation = "multiply", i.fillStyle = "rgb(255,0,255)", i.beginPath(), i.arc(50, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(0,255,255)", i.beginPath(), i.arc(100, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,255,0)", i.beginPath(), i.arc(75, 100, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,0,255)", i.arc(75, 75, 75, 0, 2 * Math.PI, !0), i.arc(75, 75, 25, 0, 2 * Math.PI, !0), i.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
                    },
                    T = function () {
                        var e, t = function (t) {
                            return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                        };
                        if (!(e = D())) return null;
                        var n = [],
                            i = e.createBuffer();
                        e.bindBuffer(e.ARRAY_BUFFER, i);
                        var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                        e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                        var o = e.createProgram(),
                            r = e.createShader(e.VERTEX_SHADER);
                        e.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(r);
                        var s = e.createShader(e.FRAGMENT_SHADER);
                        e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, r), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
                        try {
                            n.push(e.canvas.toDataURL())
                        } catch (u) {}
                        n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function (e) {
                            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                            if (t) {
                                var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                return 0 === n && (n = 2), n
                            }
                            return null
                        }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                        try {
                            var c = e.getExtension("WEBGL_debug_renderer_info");
                            c && (n.push("webgl unmasked vendor:" + e.getParameter(c.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(c.UNMASKED_RENDERER_WEBGL)))
                        } catch (u) {}
                        return e.getShaderPrecisionFormat ? (l(["FLOAT", "INT"], function (t) {
                            l(["VERTEX", "FRAGMENT"], function (i) {
                                l(["HIGH", "MEDIUM", "LOW"], function (a) {
                                    l(["precision", "rangeMin", "rangeMax"], function (o) {
                                        var r = e.getShaderPrecisionFormat(e[i + "_SHADER"], e[a + "_" + t])[o];
                                        "precision" !== o && (o = "precision " + o);
                                        var s = ["webgl ", i.toLowerCase(), " shader ", a.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", r].join("");
                                        n.push(s)
                                    })
                                })
                            })
                        }), n) : n
                    },
                    S = function () {
                        try {
                            var e = D(),
                                t = e.getExtension("WEBGL_debug_renderer_info");
                            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                        } catch (n) {
                            return null
                        }
                    },
                    A = function () {
                        var e = document.createElement("div");
                        e.innerHTML = "&nbsp;", e.className = "adsbox";
                        var t = !1;
                        try {
                            document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                        } catch (n) {
                            t = !1
                        }
                        return t
                    },
                    E = function () {
                        if ("undefined" != typeof navigator.languages) try {
                            if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                        } catch (e) {
                            return !0
                        }
                        return !1
                    },
                    M = function () {
                        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                    },
                    I = function () {
                        var e, t = navigator.userAgent.toLowerCase(),
                            n = navigator.oscpu,
                            i = navigator.platform.toLowerCase();
                        if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                        if (void 0 !== n) {
                            if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                            if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                            if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                            if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                        }
                        return i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((i.indexOf("win") < 0 && i.indexOf("linux") < 0 && i.indexOf("mac") < 0 && i.indexOf("iphone") < 0 && i.indexOf("ipad") < 0) !== ("Other" === e) || "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
                    },
                    L = function () {
                        var e, t = navigator.userAgent.toLowerCase(),
                            n = navigator.productSub;
                        if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                        var i, a = eval.toString().length;
                        if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                        if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
                        if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                        try {
                            throw "a"
                        } catch (o) {
                            try {
                                o.toSource(), i = !0
                            } catch (r) {
                                i = !1
                            }
                        }
                        return i && "Firefox" !== e && "Other" !== e
                    },
                    N = function () {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    },
                    P = function () {
                        if (!N()) return !1;
                        var e = D();
                        return !!window.WebGLRenderingContext && !!e
                    },
                    O = function () {
                        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                    },
                    B = function () {
                        return "undefined" != typeof window.swfobject
                    },
                    R = function () {
                        return window.swfobject.hasFlashPlayerVersion("9.0.0")
                    },
                    j = function (e, t) {
                        window.___fp_swf_loaded = function (t) {
                            e(t)
                        };
                        var n = t.fonts.swfContainerId;
                        ! function (e) {
                            var t = document.createElement("div");
                            t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                        }();
                        var i = {
                            onReady: "___fp_swf_loaded"
                        };
                        window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, i, {
                            allowScriptAccess: "always",
                            menu: "false"
                        }, {})
                    },
                    D = function () {
                        var e = document.createElement("canvas"),
                            t = null;
                        try {
                            t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (n) {}
                        return t || (t = null), t
                    },
                    G = [{
                        key: "userAgent",
                        getData: function (e) {
                            e(navigator.userAgent)
                        }
                    }, {
                        key: "webdriver",
                        getData: function (e, t) {
                            e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                        }
                    }, {
                        key: "language",
                        getData: function (e, t) {
                            e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "colorDepth",
                        getData: function (e, t) {
                            e(window.screen.colorDepth || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "deviceMemory",
                        getData: function (e, t) {
                            e(navigator.deviceMemory || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "pixelRatio",
                        getData: function (e, t) {
                            e(window.devicePixelRatio || t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "hardwareConcurrency",
                        getData: function (e, t) {
                            e(w(t))
                        }
                    }, {
                        key: "screenResolution",
                        getData: function (e, t) {
                            e(d(t))
                        }
                    }, {
                        key: "availableScreenResolution",
                        getData: function (e, t) {
                            e(f(t))
                        }
                    }, {
                        key: "timezoneOffset",
                        getData: function (e) {
                            e((new Date).getTimezoneOffset())
                        }
                    }, {
                        key: "timezone",
                        getData: function (e, t) {
                            window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "sessionStorage",
                        getData: function (e, t) {
                            e(m(t))
                        }
                    }, {
                        key: "localStorage",
                        getData: function (e, t) {
                            e(g(t))
                        }
                    }, {
                        key: "indexedDb",
                        getData: function (e, t) {
                            e(y(t))
                        }
                    }, {
                        key: "addBehavior",
                        getData: function (e) {
                            e(!(!document.body || !document.body.addBehavior))
                        }
                    }, {
                        key: "openDatabase",
                        getData: function (e) {
                            e(!!window.openDatabase)
                        }
                    }, {
                        key: "cpuClass",
                        getData: function (e, t) {
                            e(b(t))
                        }
                    }, {
                        key: "platform",
                        getData: function (e, t) {
                            e(C(t))
                        }
                    }, {
                        key: "doNotTrack",
                        getData: function (e, t) {
                            e(x(t))
                        }
                    }, {
                        key: "plugins",
                        getData: function (e, t) {
                            O() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(h(t)) : e(p(t))
                        }
                    }, {
                        key: "canvas",
                        getData: function (e, t) {
                            N() ? e(_(t)) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webgl",
                        getData: function (e, t) {
                            P() ? e(T()) : e(t.NOT_AVAILABLE)
                        }
                    }, {
                        key: "webglVendorAndRenderer",
                        getData: function (e) {
                            P() ? e(S()) : e()
                        }
                    }, {
                        key: "adBlock",
                        getData: function (e) {
                            e(A())
                        }
                    }, {
                        key: "hasLiedLanguages",
                        getData: function (e) {
                            e(E())
                        }
                    }, {
                        key: "hasLiedResolution",
                        getData: function (e) {
                            e(M())
                        }
                    }, {
                        key: "hasLiedOs",
                        getData: function (e) {
                            e(I())
                        }
                    }, {
                        key: "hasLiedBrowser",
                        getData: function (e) {
                            e(L())
                        }
                    }, {
                        key: "touchSupport",
                        getData: function (e) {
                            e(k())
                        }
                    }, {
                        key: "fonts",
                        getData: function (e, t) {
                            var n = ["monospace", "sans-serif", "serif"],
                                i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                            t.fonts.extendedJsFonts && (i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"]));
                            i = (i = i.concat(t.fonts.userDefinedFonts)).filter(function (e, t) {
                                return i.indexOf(e) === t
                            });
                            var a = document.getElementsByTagName("body")[0],
                                o = document.createElement("div"),
                                r = document.createElement("div"),
                                s = {},
                                l = {},
                                c = function () {
                                    var e = document.createElement("span");
                                    return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                                },
                                u = function (e, t) {
                                    var n = c();
                                    return n.style.fontFamily = "'" + e + "'," + t, n
                                },
                                d = function (e) {
                                    for (var t = !1, i = 0; i < n.length; i++)
                                        if (t = e[i].offsetWidth !== s[n[i]] || e[i].offsetHeight !== l[n[i]]) return t;
                                    return t
                                },
                                f = function () {
                                    for (var e = [], t = 0, i = n.length; t < i; t++) {
                                        var a = c();
                                        a.style.fontFamily = n[t], o.appendChild(a), e.push(a)
                                    }
                                    return e
                                }();
                            a.appendChild(o);
                            for (var p = 0, h = n.length; p < h; p++) s[n[p]] = f[p].offsetWidth, l[n[p]] = f[p].offsetHeight;
                            var v = function () {
                                for (var e = {}, t = 0, a = i.length; t < a; t++) {
                                    for (var o = [], s = 0, l = n.length; s < l; s++) {
                                        var c = u(i[t], n[s]);
                                        r.appendChild(c), o.push(c)
                                    }
                                    e[i[t]] = o
                                }
                                return e
                            }();
                            a.appendChild(r);
                            for (var m = [], g = 0, y = i.length; g < y; g++) d(v[i[g]]) && m.push(i[g]);
                            a.removeChild(r), a.removeChild(o), e(m)
                        },
                        pauseBefore: !0
                    }, {
                        key: "fontsFlash",
                        getData: function (e, t) {
                            return B() ? R() ? t.fonts.swfPath ? void j(function (t) {
                                e(t)
                            }, t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                        },
                        pauseBefore: !0
                    }, {
                        key: "audio",
                        getData: function (e, t) {
                            var n = t.audio;
                            if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                            var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                            if (null == i) return e(t.NOT_AVAILABLE);
                            var a = new i(1, 44100, 44100),
                                o = a.createOscillator();
                            o.type = "triangle", o.frequency.setValueAtTime(1e4, a.currentTime);
                            var r = a.createDynamicsCompressor();
                            l([
                                ["threshold", -50],
                                ["knee", 40],
                                ["ratio", 12],
                                ["reduction", -20],
                                ["attack", 0],
                                ["release", .25]
                            ], function (e) {
                                r[e[0]] !== undefined && "function" == typeof r[e[0]].setValueAtTime && r[e[0]].setValueAtTime(e[1], a.currentTime)
                            }), o.connect(r), r.connect(a.destination), o.start(0), a.startRendering();
                            var s = setTimeout(function () {
                                return a.oncomplete = function () {}, a = null, e("audioTimeout")
                            }, n.timeout);
                            a.oncomplete = function (t) {
                                var n;
                                try {
                                    clearTimeout(s), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (e, t) {
                                        return e + Math.abs(t)
                                    }, 0).toString(), o.disconnect(), r.disconnect()
                                } catch (i) {
                                    return void e(i)
                                }
                                e(n)
                            }
                        }
                    }, {
                        key: "enumerateDevices",
                        getData: function (e, t) {
                            if (!u()) return e(t.NOT_AVAILABLE);
                            navigator.mediaDevices.enumerateDevices().then(function (t) {
                                e(t.map(function (e) {
                                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                                }))
                            })["catch"](function (t) {
                                e(t)
                            })
                        }
                    }],
                    F = function (e) {
                        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                    };
                return F.get = function (e, t) {
                    t ? e || (e = {}) : (t = e, e = {}),
                        function (e, t) {
                            if (null == t) return e;
                            var n, i;
                            for (i in t) null == (n = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n)
                        }(e, s), e.components = e.extraComponents.concat(G);
                    var n = {
                            data: [],
                            addPreprocessedComponent: function (t, i) {
                                "function" == typeof e.preprocessor && (i = e.preprocessor(t, i)), n.data.push({
                                    key: t,
                                    value: i
                                })
                            }
                        },
                        i = -1,
                        a = function (o) {
                            if ((i += 1) >= e.components.length) t(n.data);
                            else {
                                var r = e.components[i];
                                if (e.excludes[r.key]) a(!1);
                                else {
                                    if (!o && r.pauseBefore) return i -= 1, void setTimeout(function () {
                                        a(!0)
                                    }, 1);
                                    try {
                                        r.getData(function (e) {
                                            n.addPreprocessedComponent(r.key, e), a(!1)
                                        }, e)
                                    } catch (s) {
                                        n.addPreprocessedComponent(r.key, String(s)), a(!1)
                                    }
                                }
                            }
                        };
                    a(!1)
                }, F.getPromise = function (e) {
                    return new Promise(function (t, n) {
                        F.get(e, t)
                    })
                }, F.getV18 = function (e, t) {
                    return null == t && (t = e, e = {}), F.get(e, function (n) {
                        for (var i = [], a = 0; a < n.length; a++) {
                            var o = n[a];
                            if (o.value === (e.NOT_AVAILABLE || "not available")) i.push({
                                key: o.key,
                                value: "unknown"
                            });
                            else if ("plugins" === o.key) i.push({
                                key: "plugins",
                                value: c(o.value, function (e) {
                                    var t = c(e[2], function (e) {
                                        return e.join ? e.join("~") : e
                                    }).join(",");
                                    return [e[0], e[1], t].join("::")
                                })
                            });
                            else if (-1 !== ["canvas", "webgl"].indexOf(o.key)) i.push({
                                key: o.key,
                                value: o.value.join("~")
                            });
                            else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                                if (!o.value) continue;
                                i.push({
                                    key: o.key,
                                    value: 1
                                })
                            } else o.value ? i.push(o.value.join ? {
                                key: o.key,
                                value: o.value.join(";")
                            } : o) : i.push({
                                key: o.key,
                                value: o.value
                            })
                        }
                        var s = r(c(i, function (e) {
                            return e.value
                        }).join("~~~"), 31);
                        t(s, i)
                    })
                }, F.x64hash128 = r, F.VERSION = "2.1.0", F
            })
        },
        "6V2R": function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                for (var n = -1, i = e.length; ++n < i && !1 !== t(e[n], n, e););
                return e
            }
        },
        "77xw": function (e, t, n) {
            "use strict";
            var i = n("TqRt")(n("cDf5"));
            e.exports = function (e) {
                return !!e && "object" == (0, i["default"])(e)
            }
        },
        "7GMM": function (e, t, n) {
            "use strict";
            var i = n("8NKf"),
                a = n("euvV"),
                o = n("ouO+"),
                r = n("DK5A"),
                s = i(Object, "keys"),
                l = s ? function (e) {
                    var t = null == e ? undefined : e.constructor;
                    return "function" == typeof t && t.prototype === e || "function" != typeof e && a(e) ? r(e) : o(e) ? s(e) : []
                } : r;
            e.exports = l
        },
        "8NKf": function (e, t, n) {
            "use strict";
            var i = n("aqB3");
            e.exports = function (e, t) {
                var n = null == e ? undefined : e[t];
                return i(n) ? n : undefined
            }
        },
        "8mNb": function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0;
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    r = i(n("jrwq")),
                    s = function () {
                        function t() {
                            (0, a["default"])(this, t)
                        }
                        return (0, o["default"])(t, null, [{
                            key: "getUrlWithMethod",
                            value: function (e, t, n) {
                                if ("post" === (t = t || "get").toLocaleLowerCase()) return "/api/" + e + "/";
                                var i = "/api/" + e + "/?";
                                for (var a in n) i += "&" + a + "=" + n[a];
                                return i + "&dateVar=" + (new Date).getTime()
                            }
                        }, {
                            key: "updateUserInfo",
                            value: function (t) {
                                ACGN.business.header.getUserInfo({
                                    openid: t.openid,
                                    type: t.type,
                                    refresh: !0
                                }, function (t, n) {
                                    if (!t) {
                                        ACGN.userInfo = n;
                                        var i = e("#J_userInfo");
                                        if (i.length) {
                                            var a = ACGN.userInfo || {};
                                            i.html(ACGN.business.header.getUserInfoHtml(a))
                                        }
                                    }
                                })
                            }
                        }, {
                            key: "sendAppreciate",
                            value: function (n, i) {
                                if (!t.actFlag) {
                                    var a = {
                                            openid: (n = n || {}).openid,
                                            type: n.type,
                                            page: 1,
                                            pageSize: 1
                                        },
                                        o = t.getUrlWithMethod("getDiamondsInfo", "get", a),
                                        s = t.getUrlWithMethod("getreciates"),
                                        l = t.getUrlWithMethod("giveapprciate", "post");
                                    t.actFlag = !0, e.ajax({
                                        url: o,
                                        type: "get",
                                        success: function (a) {
                                            if (0 !== a.status) return t.actFlag = !1, void ACGN.business.msg(siteConf.language.netError);
                                            n.total = a.data.diamonds || 0, e.ajax({
                                                url: s,
                                                type: "get",
                                                success: function (a) {
                                                    if (0 !== a.status) return t.actFlag = !1, void ACGN.business.msg(siteConf.language.netError);
                                                    for (var o = a.data, s = [], c = 0; c < o.length; c++) s.push(o[c].Present);
                                                    var u = {
                                                            list: s,
                                                            total: n.total
                                                        },
                                                        d = !1;
                                                    r["default"].appreciate(u, function (a) {
                                                        if (!d)
                                                            if (a < 10 || a > 99999) ACGN.business.msg("请输入10-99999之间的数字哦~");
                                                            else {
                                                                d = !0;
                                                                var o = this,
                                                                    r = e.extend({}, n, {
                                                                        gold: a
                                                                    });
                                                                e.ajax({
                                                                    url: l,
                                                                    type: "post",
                                                                    data: r,
                                                                    success: function (e) {
                                                                        d = !1, 1 === e.status ? i ? i.call(o, e.msg) : ACGN.business.msg(e.msg) : 0 === e.status && (o.close(), ACGN.business.msg('<span style="font-size:14px;">感谢'.concat(siteConf.language.highness, '的赞赏~本次共花费 <i class="icon-detail-stone-message" style="vertical-align: middle;"></i> x ').concat(e.data.paygold, "</span>"), {
                                                                            oneRow: !0
                                                                        }), i && i.call(o, null, e.data), t.updateUserInfo({
                                                                            openid: n.openid,
                                                                            type: n.type
                                                                        }))
                                                                    },
                                                                    error: function () {
                                                                        d = !1
                                                                    }
                                                                })
                                                            }
                                                    }), t.actFlag = !1
                                                },
                                                error: function () {
                                                    t.actFlag = !1
                                                }
                                            })
                                        },
                                        error: function () {
                                            t.actFlag = !1
                                        }
                                    })
                                }
                            }
                        }, {
                            key: "sendPresent",
                            value: function (n, i) {
                                if (!t.actFlag) {
                                    var a = {
                                            openid: (n = n || {}).openid,
                                            type: n.type,
                                            page: 1,
                                            pageSize: 1
                                        },
                                        o = t.getUrlWithMethod("getCoinDetails", "get", a),
                                        s = t.getUrlWithMethod("getgifts"),
                                        l = t.getUrlWithMethod("givegift", "post");
                                    t.actFlag = !0, e.get(o).done(function (a) {
                                        if (0 !== a.status) return t.actFlag = !1, void ACGN.business.msg(siteConf.language.netError);
                                        e.get(s).done(function (o) {
                                            if (0 !== o.status) return t.actFlag = !1, void ACGN.business.msg(siteConf.language.netError);
                                            var s = !1,
                                                c = r["default"].present({
                                                    total: a.data.coins,
                                                    giftList: o.data
                                                }, function (o) {
                                                    if (!s) {
                                                        if (s = !0, o.price * o.count > a.data.coins) return ACGN.business.msg("啊哦~".concat(siteConf.language.coins, "不够了")), void(s = !1);
                                                        var r = {
                                                                comicid: n.comicId,
                                                                giftid: o.giftid,
                                                                count: o.count,
                                                                openid: n.openid,
                                                                type: n.type
                                                            },
                                                            u = o.giftImage;
                                                        e.ajax({
                                                            url: l,
                                                            method: "post",
                                                            data: r
                                                        }).done(function (e) {
                                                            if (s = !1, 1 === e.status) i ? i.call(c, e.msg) : ACGN.business.msg(e.msg);
                                                            else if (0 === e.status) {
                                                                if (!e.data) return void ACGN.business.msg("啊哦~".concat(siteConf.language.coins, "不够了"));
                                                                c.close(), ACGN.business.msg('<span style="font-size:14px;">'.concat(siteConf.language.highness, '，已经收到您送的礼物啦~<br/><img style="width: 30px;" src="').concat(siteConf.staticRoot, 'images/comm/space.gif" data-src="').concat(u, '">x ').concat(o.count, " 本次共花费").concat(e.data.coin, "个").concat(siteConf.language.coins, "</span>"), {
                                                                    oneRow: !0
                                                                }), i && i.call(c, null, e.data), t.updateUserInfo({
                                                                    openid: r.openid,
                                                                    type: r.type
                                                                })
                                                            }
                                                        }).error(function (e) {
                                                            s = !1
                                                        })
                                                    }
                                                });
                                            t.actFlag = !1
                                        }).error(function (e) {
                                            t.actFlag = !1
                                        })
                                    }).error(function (e) {
                                        t.actFlag = !1
                                    })
                                }
                            }
                        }, {
                            key: "sendMonthTicket",
                            value: function (n, i) {
                                if (!t.actFlag) {
                                    var a = n || {},
                                        o = {
                                            openid: a.openid,
                                            type: a.type,
                                            page: 1,
                                            pageSize: 1
                                        },
                                        s = t.getUrlWithMethod("yuePiaoDetial", "get", o),
                                        l = t.getUrlWithMethod("addyuepiao", "post");
                                    t.actFlag = !0, e.get(s).done(function (n) {
                                        var o = n.data.yuepiao,
                                            s = !1,
                                            c = r["default"].monthTicket({
                                                total: o
                                            }, function (n) {
                                                if (!s) {
                                                    if (s = !0, n > o || o <= 0) return ACGN.business.msg("啊哦~".concat(siteConf.language.ticket, "不够了")), void(s = !1);
                                                    var r = {
                                                        comicid: a.comicId,
                                                        yuepiao: n,
                                                        openid: a.openid,
                                                        type: a.type
                                                    };
                                                    e.ajax({
                                                        url: l,
                                                        method: "post",
                                                        data: r
                                                    }).done(function (e) {
                                                        s = !1, 1 === e.status ? i ? i.call(c, e.msg) : ACGN.business.msg(e.msg) : 0 === e.status ? (c.close(), ACGN.business.msg("收下".concat(siteConf.language.highness, "赠送的").concat(siteConf.language.ticket, "啦~")), i && i.call(c, null, e.data), t.updateUserInfo({
                                                            openid: a.openid,
                                                            type: a.type
                                                        })) : (c.close(), ACGN.business.msg(e.message))
                                                    }).error(function (e) {
                                                        s = !1
                                                    }), t.actFlag = !1
                                                }
                                            });
                                        t.actFlag = !1
                                    }).error(function (e) {
                                        t.actFlag = !1
                                    })
                                }
                            }
                        }, {
                            key: "sendMark",
                            value: function (n, i) {
                                if (!t.actFlag) {
                                    var a = n || {};
                                    a.comicId = 105867;
                                    var o = {
                                            comic_id: a.comicId
                                        },
                                        s = t.getUrlWithMethod("getrankmsg", "get", o),
                                        l = t.getUrlWithMethod("addpingfen", "post");
                                    t.actFlag = !0, e.ajax({
                                        url: s,
                                        async: !1,
                                        dataType: "json",
                                        method: "get",
                                        success: function (n) {
                                            var o = n.data,
                                                s = {
                                                    markData: {
                                                        verygood: o.ranklist.pingfen_5,
                                                        good: o.ranklist.pingfen_4,
                                                        normal: o.ranklist.pingfen_3,
                                                        adjective: o.ranklist.pingfen_2,
                                                        bad: o.ranklist.pingfen_1
                                                    },
                                                    num: o.ranklist.pingfen_all
                                                },
                                                c = !1,
                                                u = r["default"].mark(s, function (n) {
                                                    if (!c) {
                                                        c = !0;
                                                        var o = {
                                                            comicid: a.comicId,
                                                            pingfen: n,
                                                            openid: a.openid,
                                                            type: a.type
                                                        };
                                                        e.ajax({
                                                            url: l,
                                                            method: "post",
                                                            dataType: "json",
                                                            data: o
                                                        }).done(function (e) {
                                                            c = !1, 1 === e.status ? i ? i.call(u, e.msg) : ACGN.business.msg(e.msg) : 0 === e.status && (u.close(), ACGN.business.msg("Thanks~评分成功"), i && i.call(u, null, e.data), t.updateUserInfo({
                                                                openid: a.openid,
                                                                type: a.type
                                                            }))
                                                        }).error(function (e) {
                                                            c = !1
                                                        })
                                                    }
                                                });
                                            t.actFlag = !1
                                        },
                                        error: function (e, n, i) {
                                            t.actFlag = !1
                                        }
                                    })
                                }
                            }
                        }, {
                            key: "sendFeather",
                            value: function (n, i) {
                                if (!t.actFlag) {
                                    var a = n || {},
                                        o = {
                                            openid: a.openid,
                                            type: a.type,
                                            page: 1,
                                            pageSize: 1
                                        },
                                        s = t.getUrlWithMethod("tuiJianDetial", "get", o),
                                        l = t.getUrlWithMethod("addtuijian", "post");
                                    t.actFlag = !0, e.get(s).done(function (n) {
                                        var o = n.data.tuijian,
                                            s = !1,
                                            c = r["default"].feather({
                                                total: o
                                            }, function (n) {
                                                if (!s) {
                                                    if (s = !0, n > o || o <= 0) return ACGN.business.msg("啊哦~ ".concat(siteConf.language.recommend, "不够啦")), void(s = !1);
                                                    var r = {
                                                        comicid: a.comicId,
                                                        tuijian: n,
                                                        openid: a.openid,
                                                        type: a.type
                                                    };
                                                    e.ajax({
                                                        url: l,
                                                        method: "post",
                                                        data: r
                                                    }).done(function (e) {
                                                        s = !1, 1 === e.status ? i ? i.call(c, e.msg) : ACGN.business.msg(e.msg) : 0 === e.status ? (c.close(), ACGN.business.msg("收下".concat(siteConf.language.highness, "赠送的").concat(siteConf.language.recommend, "啦")), i && i.call(c, null, e.data), t.updateUserInfo({
                                                            openid: a.openid,
                                                            type: a.type
                                                        })) : (c.close(), ACGN.business.msg(e.message))
                                                    }).error(function (e) {
                                                        s = !1
                                                    })
                                                }
                                            });
                                        t.actFlag = !1
                                    }).error(function (e) {
                                        t.actFlag = !1
                                    })
                                }
                            }
                        }, {
                            key: "openShareDialog",
                            value: function (e) {
                                return r["default"].share(e)
                            }
                        }]), t
                    }();
                t["default"] = s
            }).call(this, n("+2Rf"))
        },
        "8oxB": function (e, t) {
            var n, i, a = e.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function r() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : r
                } catch (e) {
                    i = r
                }
            }();
            var l, c = [],
                u = !1,
                d = -1;

            function f() {
                u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p())
            }

            function p() {
                if (!u) {
                    var e = s(f);
                    u = !0;
                    for (var t = c.length; t;) {
                        for (l = c, c = []; ++d < t;) l && l[d].run();
                        d = -1, t = c.length
                    }
                    l = null, u = !1,
                        function (e) {
                            if (i === clearTimeout) return clearTimeout(e);
                            if ((i === r || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                            try {
                                i(e)
                            } catch (t) {
                                try {
                                    return i.call(null, e)
                                } catch (t) {
                                    return i.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function v() {}
            a.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || u || s(p)
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = v, a.addListener = v, a.once = v, a.off = v, a.removeListener = v, a.removeAllListeners = v, a.emit = v, a.prependListener = v, a.prependOnceListener = v, a.listeners = function (e) {
                return []
            }, a.binding = function (e) {
                throw new Error("process.binding is not supported")
            }, a.cwd = function () {
                return "/"
            }, a.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }, a.umask = function () {
                return 0
            }
        },
        A0X5: function (e, t, n) {
            "use strict";
            var i = n("1hVX"),
                a = n("7GMM");
            e.exports = function (e, t) {
                return i(e, t, a)
            }
        },
        AIaL: function (e, t, n) {
            "use strict";
            var i = 9007199254740991;
            e.exports = function (e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i
            }
        },
        BdMh: function (e, t, n) {
            "use strict";
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0;
            var i = "acgn-";
            var a = function (e, t, n, a, o) {
                var r, s;
                if (o = o || 5, a) r = "";
                else
                    do {
                        r = parseInt(1e4 * Math.random())
                    } while (window["clickPagerBtn" + r] !== undefined);
                s = "clickPagerBtn" + r, window[s] = function () {}, "function" == typeof n && (window[s] = n);
                var l = function (t, n) {
                        var a = "";
                        return a += e !== n ? 1 === n && e <= 1 ? '<span class="'.concat(i, 'active">').concat(n, "</span>") : '<a target="_self" href="javascript:void(0);" onclick="' + s + "(" + n + ')">' + n + "</a>" : '<span class="'.concat(i, 'active">').concat(n, "</span>")
                    },
                    c = "",
                    u = 1;
                if (c += e > 1 ? '<a class="'.concat(i, 'prev" target="_self" href="javascript:void(0);" onclick="').concat(s, "(").concat(e - 1, ')"><i class="ift-left"></i></a>') : '<span class="'.concat(i, 'prev"><i class="ift-left"></i></span>'), t < 2 * o)
                    for (u = 1; u <= t; u++) c += l(0, u);
                else {
                    if (c += l(0, 1), e <= o) {
                        for (u = 2; u <= o + 2; u++) c += l(0, u);
                        c += "<em>…</em>"
                    } else {
                        if (c += "<em>…</em>", e <= t - o)
                            for (u = e - 2; u <= e + 2; u++) c += l(0, u);
                        else
                            for (u = t - (o + 1); u <= t - 1; u++) c += l(0, u);
                        e + Math.ceil(o / 2) < t - 1 && (c += "<em>…</em>")
                    }
                    c += l(0, t)
                }
                return c += e < t ? '<a target="_self" class="'.concat(i, 'next" href="javascript:void(0);" onclick="').concat(s, "(").concat(e + 1, ')"><i class="ift-right"></i></a>') : '<span class="'.concat(i, 'next"><i class="ift-right"></i></span>')
            };
            t["default"] = a
        },
        DK5A: function (e, t, n) {
            "use strict";
            var i = n("fI4m"),
                a = n("W0VD"),
                o = n("fzE2"),
                r = n("AIaL"),
                s = n("x6NM"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                for (var t = s(e), n = t.length, c = n && e.length, u = !!c && r(c) && (a(e) || i(e)), d = -1, f = []; ++d < n;) {
                    var p = t[d];
                    (u && o(p, c) || l.call(e, p)) && f.push(p)
                }
                return f
            }
        },
        E2g8: function (e, t, n) {
            (function (t, n) {
                var i;
                i = function () {
                    "use strict";

                    function e(e) {
                        return "function" == typeof e
                    }
                    var i = Array.isArray ? Array.isArray : function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        a = 0,
                        o = void 0,
                        r = void 0,
                        s = function (e, t) {
                            h[a] = e, h[a + 1] = t, 2 === (a += 2) && (r ? r(v) : b())
                        };
                    var l = "undefined" != typeof window ? window : undefined,
                        c = l || {},
                        u = c.MutationObserver || c.WebKitMutationObserver,
                        d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                        f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function p() {
                        var e = setTimeout;
                        return function () {
                            return e(v, 1)
                        }
                    }
                    var h = new Array(1e3);

                    function v() {
                        for (var e = 0; e < a; e += 2) {
                            (0, h[e])(h[e + 1]), h[e] = undefined, h[e + 1] = undefined
                        }
                        a = 0
                    }
                    var m, g, y, w, b = void 0;

                    function C(e, t) {
                        var n = this,
                            i = new this.constructor(_);
                        i[k] === undefined && j(i);
                        var a = n._state;
                        if (a) {
                            var o = arguments[a - 1];
                            s(function () {
                                return B(a, i, o, n._result)
                            })
                        } else P(n, i, e, t);
                        return i
                    }

                    function x(e) {
                        if (e && "object" == typeof e && e.constructor === this) return e;
                        var t = new this(_);
                        return M(t, e), t
                    }
                    d ? b = function () {
                        return t.nextTick(v)
                    } : u ? (g = 0, y = new u(v), w = document.createTextNode(""), y.observe(w, {
                        characterData: !0
                    }), b = function () {
                        w.data = g = ++g % 2
                    }) : f ? ((m = new MessageChannel).port1.onmessage = v, b = function () {
                        return m.port2.postMessage(0)
                    }) : b = l === undefined ? function () {
                        try {
                            var e = Function("return this")().require("vertx");
                            return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function () {
                                o(v)
                            } : p()
                        } catch (t) {
                            return p()
                        }
                    }() : p();
                    var k = Math.random().toString(36).substring(2);

                    function _() {}
                    var T = void 0,
                        S = 1,
                        A = 2;

                    function E(t, n, i) {
                        n.constructor === t.constructor && i === C && n.constructor.resolve === x ? function (e, t) {
                            t._state === S ? L(e, t._result) : t._state === A ? N(e, t._result) : P(t, undefined, function (t) {
                                return M(e, t)
                            }, function (t) {
                                return N(e, t)
                            })
                        }(t, n) : i === undefined ? L(t, n) : e(i) ? function (e, t, n) {
                            s(function (e) {
                                var i = !1,
                                    a = function (e, t, n, i) {
                                        try {
                                            e.call(t, n, i)
                                        } catch (a) {
                                            return a
                                        }
                                    }(n, t, function (n) {
                                        i || (i = !0, t !== n ? M(e, n) : L(e, n))
                                    }, function (t) {
                                        i || (i = !0, N(e, t))
                                    }, e._label);
                                !i && a && (i = !0, N(e, a))
                            }, e)
                        }(t, n, i) : L(t, n)
                    }

                    function M(e, t) {
                        if (e === t) N(e, new TypeError("You cannot resolve a promise with itself"));
                        else if (a = typeof (i = t), null === i || "object" !== a && "function" !== a) L(e, t);
                        else {
                            var n = void 0;
                            try {
                                n = t.then
                            } catch (o) {
                                return void N(e, o)
                            }
                            E(e, t, n)
                        }
                        var i, a
                    }

                    function I(e) {
                        e._onerror && e._onerror(e._result), O(e)
                    }

                    function L(e, t) {
                        e._state === T && (e._result = t, e._state = S, 0 !== e._subscribers.length && s(O, e))
                    }

                    function N(e, t) {
                        e._state === T && (e._state = A, e._result = t, s(I, e))
                    }

                    function P(e, t, n, i) {
                        var a = e._subscribers,
                            o = a.length;
                        e._onerror = null, a[o] = t, a[o + S] = n, a[o + A] = i, 0 === o && e._state && s(O, e)
                    }

                    function O(e) {
                        var t = e._subscribers,
                            n = e._state;
                        if (0 !== t.length) {
                            for (var i = void 0, a = void 0, o = e._result, r = 0; r < t.length; r += 3) i = t[r], a = t[r + n], i ? B(n, i, a, o) : a(o);
                            e._subscribers.length = 0
                        }
                    }

                    function B(t, n, i, a) {
                        var o = e(i),
                            r = void 0,
                            s = void 0,
                            l = !0;
                        if (o) {
                            try {
                                r = i(a)
                            } catch (c) {
                                l = !1, s = c
                            }
                            if (n === r) return void N(n, new TypeError("A promises callback cannot return that same promise."))
                        } else r = a;
                        n._state !== T || (o && l ? M(n, r) : !1 === l ? N(n, s) : t === S ? L(n, r) : t === A && N(n, r))
                    }
                    var R = 0;

                    function j(e) {
                        e[k] = R++, e._state = undefined, e._result = undefined, e._subscribers = []
                    }
                    var D = function () {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(_), this.promise[k] || j(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && L(this.promise, this._result))) : N(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return e.prototype._enumerate = function (e) {
                            for (var t = 0; this._state === T && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function (e, t) {
                            var n = this._instanceConstructor,
                                i = n.resolve;
                            if (i === x) {
                                var a = void 0,
                                    o = void 0,
                                    r = !1;
                                try {
                                    a = e.then
                                } catch (l) {
                                    r = !0, o = l
                                }
                                if (a === C && e._state !== T) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof a) this._remaining--, this._result[t] = e;
                                else if (n === G) {
                                    var s = new n(_);
                                    r ? N(s, o) : E(s, e, a), this._willSettleAt(s, t)
                                } else this._willSettleAt(new n(function (t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(i(e), t)
                        }, e.prototype._settledAt = function (e, t, n) {
                            var i = this.promise;
                            i._state === T && (this._remaining--, e === A ? N(i, n) : this._result[t] = n), 0 === this._remaining && L(i, this._result)
                        }, e.prototype._willSettleAt = function (e, t) {
                            var n = this;
                            P(e, undefined, function (e) {
                                return n._settledAt(S, t, e)
                            }, function (e) {
                                return n._settledAt(A, t, e)
                            })
                        }, e
                    }();
                    var G = function () {
                        function t(e) {
                            this[k] = R++, this._result = this._state = undefined, this._subscribers = [], _ !== e && ("function" != typeof e && function () {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof t ? function (e, t) {
                                try {
                                    t(function (t) {
                                        M(e, t)
                                    }, function (t) {
                                        N(e, t)
                                    })
                                } catch (n) {
                                    N(e, n)
                                }
                            }(this, e) : function () {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return t.prototype["catch"] = function (e) {
                            return this.then(null, e)
                        }, t.prototype["finally"] = function (t) {
                            var n = this.constructor;
                            return e(t) ? this.then(function (e) {
                                return n.resolve(t()).then(function () {
                                    return e
                                })
                            }, function (e) {
                                return n.resolve(t()).then(function () {
                                    throw e
                                })
                            }) : this.then(t, t)
                        }, t
                    }();
                    return G.prototype.then = C, G.all = function (e) {
                        return new D(this, e).promise
                    }, G.race = function (e) {
                        var t = this;
                        return i(e) ? new t(function (n, i) {
                            for (var a = e.length, o = 0; o < a; o++) t.resolve(e[o]).then(n, i)
                        }) : new t(function (e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    }, G.resolve = x, G.reject = function (e) {
                        var t = new this(_);
                        return N(t, e), t
                    }, G._setScheduler = function (e) {
                        r = e
                    }, G._setAsap = function (e) {
                        s = e
                    }, G._asap = s, G.polyfill = function () {
                        var e = void 0;
                        if (void 0 !== n) e = n;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (a) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var t = e.Promise;
                        if (t) {
                            var i = null;
                            try {
                                i = Object.prototype.toString.call(t.resolve())
                            } catch (a) {}
                            if ("[object Promise]" === i && !t.cast) return
                        }
                        e.Promise = G
                    }, G.Promise = G, G
                }, e.exports = i()
            }).call(this, n("8oxB"), n("yLpj"))
        },
        HlP2: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("DNiP");
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                r = i(n("01mU")),
                s = i(n("q38X")),
                l = i(n("XaqC")),
                c = new(function () {
                    function e() {
                        (0, a["default"])(this, e), this.xhrRequests = {}
                    }
                    return (0, o["default"])(e, [{
                        key: "generateRequestInfo",
                        value: function (e) {
                            var t = {
                                action: null,
                                params: {},
                                res: {},
                                callBackQueue: [],
                                loading: !1
                            };
                            return this.xhrRequests[e] = t, t
                        }
                    }, {
                        key: "filterRequest",
                        value: function (e, t, n) {
                            var i = e.method,
                                a = e.type,
                                o = i || a;
                            if (t && "function" != typeof t) s["default"].log("请求回调必须为方法");
                            else {
                                if (!o || "string" == typeof o) return o && "get" !== o.toLowerCase() ? (s["default"].log("不需要缓存，直接返回执行请求", e), void n(e, t)) : void this.pushRequest(e, t, n);
                                s["default"].log("请求方法method赋值有误")
                            }
                        }
                    }, {
                        key: "pushRequest",
                        value: function (e, t, n) {
                            var i = this,
                                a = e.cache,
                                o = this.getRequestInfoByKey(e);
                            o.requestInfo || (o.requestInfo = this.generateRequestInfo(o.key));
                            var c = (0, r["default"])(o.requestInfo.res);
                            if (!1 !== a && !l["default"].isEmptyObject(c)) return s["default"].log("走缓存了", o.key, o), void t(null, c);
                            var u = o.requestInfo;
                            u.callBackQueue.push(t), u.action ? !1 === a && (u.params = e) : (u.action = n, u.params = e), u.loading || (u.loading = !0, setTimeout(function () {
                                s["default"].log("发起请求", o.key, o), u.action(u.params, function (e) {
                                    return function (t, n) {
                                        i.callback(t, n, e)
                                    }
                                }(o))
                            }))
                        }
                    }, {
                        key: "getRequestInfoByKey",
                        value: function (e) {
                            var t = this.generateRequestKey(e);
                            return {
                                key: t,
                                requestInfo: this.xhrRequests[t]
                            }
                        }
                    }, {
                        key: "generateRequestKey",
                        value: function (e) {
                            var t = e.url,
                                n = e.data;
                            return n ? t + "?" + Object.keys(n).reduce(function (e, t) {
                                return e + "".concat(t, "=").concat(n[t])
                            }, "") : t
                        }
                    }, {
                        key: "callback",
                        value: function (e, t, n) {
                            this.reFreshQueue(e, t, n), n.requestInfo.loading = !1
                        }
                    }, {
                        key: "reFreshQueue",
                        value: function (e, t, n) {
                            for (var i = n.requestInfo, a = i.callBackQueue; a.length;) {
                                s["default"].log("正在应用队列数据", n.key, n);
                                var o = a.shift();
                                "function" == typeof o && o(e, (0, r["default"])(t))
                            }
                            e ? s["default"].log("请求返回错误，不进行错误缓存", e, t) : i.res = t
                        }
                    }]), e
                }());
            t["default"] = c
        },
        JB25: function (e, t, n) {
            var i = n("+2Rf");
            ! function (e, t, n) {
                var i, a, o = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
                    r = "placeholder" in t.createElement("input") && !o,
                    s = "placeholder" in t.createElement("textarea") && !o,
                    l = n.fn,
                    c = n.valHooks,
                    u = n.propHooks;

                function d(e, t) {
                    var i = n(this);
                    if (this.value == i.attr("placeholder") && i.hasClass("placeholder"))
                        if (i.data("placeholder-password")) {
                            if (i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id")), !0 === e) return i[0].value = t;
                            i.focus()
                        } else this.value = "", i.removeClass("placeholder"), this == p() && this.select()
                }

                function f() {
                    var e, t, i, a, o = n(this),
                        r = this.id;
                    if ("" == this.value) {
                        if ("password" == this.type) {
                            if (!o.data("placeholder-textinput")) {
                                try {
                                    e = o.clone().attr({
                                        type: "text"
                                    })
                                } catch (s) {
                                    e = n("<input>").attr(n.extend((t = this, i = {}, a = /^jQuery\d+$/, n.each(t.attributes, function (e, t) {
                                        t.specified && !a.test(t.name) && (i[t.name] = t.value)
                                    }), i), {
                                        type: "text"
                                    }))
                                }
                                e.removeAttr("name").data({
                                    "placeholder-password": o,
                                    "placeholder-id": r
                                }).bind("focus.placeholder", d), o.data({
                                    "placeholder-textinput": e,
                                    "placeholder-id": r
                                }).before(e)
                            }
                            o = o.removeAttr("id").hide().prev().attr("id", r).show()
                        }
                        o.addClass("placeholder"), o[0].value = o.attr("placeholder")
                    } else o.removeClass("placeholder")
                }

                function p() {
                    try {
                        return t.activeElement
                    } catch (e) {}
                }
                r && s ? (a = l.placeholder = function () {
                    return this
                }).input = a.textarea = !0 : ((a = l.placeholder = function () {
                    return this.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                        "focus.placeholder": d,
                        "blur.placeholder": f
                    }).data("placeholder-enabled", !0).trigger("blur.placeholder"), this
                }).input = r, a.textarea = s, i = {
                    get: function (e) {
                        var t = n(e),
                            i = t.data("placeholder-password");
                        return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
                    },
                    set: function (e, t) {
                        var i = n(e),
                            a = i.data("placeholder-password");
                        return a ? a[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != p() && f.call(e)) : i.hasClass("placeholder") && d.call(e, !0, t) || (e.value = t), i) : e.value = t
                    }
                }, r || (c.input = i, u.value = i), s || (c.textarea = i, u.value = i), n(function () {
                    n(t).delegate("form", "submit.placeholder", function () {
                        var e = n(".placeholder", this).each(d);
                        setTimeout(function () {
                            e.each(f)
                        }, 10)
                    })
                }), n(e).bind("beforeunload.placeholder", function () {
                    n(".placeholder").each(function () {
                        this.value = ""
                    })
                }))
            }(this, document, i)
        },
        Me8R: function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0, n("bWfx"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("91GP"), n("Tze0"), n("V+eJ"), n("f3/d"), n("pIFo"), n("Oyvg"), n("8+KV");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    r = i(n("6BPK")),
                    s = i(n("f+/7")),
                    l = (siteConf.productname, new(function () {
                        function t() {
                            (0, a["default"])(this, t), this.request = 0, this.userInfo = null, this.queue = []
                        }
                        return (0, o["default"])(t, [{
                            key: "hotSearchHTML",
                            value: function (e) {
                                var t = "";
                                return e.splice(0, 10).forEach(function (e, n) {
                                    var i = n + 1;
                                    t += '<li class="js_hot_list search-item'.concat(0 === n ? " active" : "", '">\n        <a href="/').concat(ACGN.util.getComicId(siteConf, e), '/" target="_blank" class="item-text">\n          <div class="mask mask-').concat(i, '">').concat(i, '</div>\n          <p class="name imp">').concat(e.comic_name, '</p>\n        </a>\n        <a href="/').concat(ACGN.util.getComicId(siteConf, e), '/" target="_blank" class="item-info">\n          <div class="img"><img src="').concat(siteConf.staticRoot, 'images/comm/space.gif" data-src="').concat(ACGN.util.formatImgSrc(siteConf, e.comic_id), '"></div>\n          <h3 class="name">').concat(e.comic_name, '</h3>\n          <p class="desc">').concat(e.comic_desc || e.last_chapter_name, "</p>\n        </a>\n      </li>")
                                }), t
                            }
                        }, {
                            key: "resultSearchHTML",
                            value: function (e, t) {
                                var n = "";
                                return e.splice(0, 10).forEach(function (e, i) {
                                    var a = e.comic_name;
                                    if (t && "string" == typeof t) {
                                        for (var o = t.length, r = "", s = 0; s < o; s++) r += "(".concat(t.charAt(s), ".*?)");
                                        var l = new RegExp(r, "gi");
                                        a = a.replace(l, function () {
                                            for (var e = "", t = "", n = 0; n < o; n++) t = n + 1 < 0 || arguments.length <= n + 1 ? undefined : arguments[n + 1], e += '<span class="keywords-light">'.concat(t.charAt(0), "</span>").concat(t.slice(1));
                                            return e
                                        })
                                    }
                                    n += '<li class="js_result_list search-item">\n        <a href="/'.concat(ACGN.util.getComicId(siteConf, e), '/" target="_blank">\n          <p class="item-keywords">').concat(a, "</p>\n        </a>\n      </li>")
                                }), n
                            }
                        }, {
                            key: "comicTagHtml",
                            value: function (e) {
                                var t = "";
                                return ACGN.util.installTagType(e).forEach(function (e) {
                                    t += '<span class="tag" data-key="'.concat(e.key, '">').concat(e.name, "</span>")
                                }), t
                            }
                        }, {
                            key: "searchHistoryHtml",
                            value: function (e) {
                                var t = "";
                                return e.forEach(function (e) {
                                    t += '<li class="search-tag J_searchTag">'.concat(e, "</li>")
                                }), t
                            }
                        }, {
                            key: "saveSearchHistory",
                            value: function (e) {
                                var t = ACGN.util.limitStore("searchHistory") || [],
                                    n = t.indexOf(e);
                                if (-1 === n) t.unshift(e);
                                else if (n > 0) {
                                    t = t.splice(n, 1).concat(t)
                                }
                                ACGN.util.limitStore("searchHistory", t, {
                                    limit: 20
                                })
                            }
                        }, {
                            key: "getRequestHotSearch",
                            value: function (e, t) {
                                ACGN.ajax({
                                    dataType: "json",
                                    url: "/api/getsortlist/",
                                    data: e
                                }, t)
                            }
                        }, {
                            key: "getRequestTopSearch",
                            value: function (e, t) {
                                ACGN.ajax({
                                    dataType: "json",
                                    url: "/api/gettopsearch/",
                                    data: e
                                }, t)
                            }
                        }, 
                        // 此处删除
                        {
                            key: "showHistory",
                            value: function (e, t) {
                                var n = ACGN.util.limitStore("searchHistory") || [];
                                n.length ? (e.html(this.searchHistoryHtml(n)).show(), t.show()) : t.hide()
                            }
                        }, {
                            key: "hideHistory",
                            value: function (e) {
                                e.hide()
                            }
                        }, {
                            key: "init",
                            value: function () {
                                var t = this;
                                t.VirtualCoinModule = new s["default"], e(function () {
                                    var n = e("#J_searchHistroy"),
                                        i = e("#J_clearSearchHistroy"),
                                        a = e("#J_searchKeywords"),
                                        o = e("#J_searchContent"),
                                        r = e("#J_hotSearch"),
                                        s = e("#J_searchHistroyBox"),
                                        l = e("#J_hotSearchTitle"),
                                        c = e("#J_searchBtn");
                                    if (n.length) {
                                        var u = 0,
                                            d = function (n) {
                                                n ? (t.saveSearchHistory(n), location.href = "/sort/#" + encodeURIComponent(n)) : location.href = "/sort/#" + encodeURIComponent(e(a).attr("placeholder"))
                                            },
                                            f = function (e) {
                                                var i = ++u;
                                                t.getRequestTopSearch({}, function (a, c) {
                                                    if (i !== u) return !1;
                                                    t.showHistory(n, s), l.text("热门搜索"), !e && o.show(), r.html(t.hotSearchHTML(c || []))
                                                })
                                            };
                                        e("body").on("click", ".J_searchTag", function (t) {
                                            t.stopPropagation();
                                            var n = e(this).text();
                                            d(n)
                                        }).on("click", function (t) {
                                            var n = e(t.target);
                                            "J_searchKeywords" === n.attr("id") || "J_searchContent" === n.attr("id") || n.parents("#J_searchContent").length || o.hide()
                                        }), a.on("keyup focus", function (e) {
                                            e.stopPropagation();
                                            var n = a.val().trim();
                                            if (13 === e.keyCode) return d(n), !1;
                                            n ? function (e) {
                                                if (!e) return !1;
                                                var n = ++u;
                                                ACGN.util.throttle(t.getRequestHotSearch, [{
                                                    search_key: e
                                                }, function (i, c) {
                                                    if (n !== u) return !1;
                                                    c.length ? (t.hideHistory(s), l.text("搜索结果"), r.html(t.resultSearchHTML(c, e)).show(), o.show()) : a.val().trim().length && o.hide()
                                                }], 500)
                                            }(n) : f()
                                        }).blur(), c.on("click", function (e) {
                                            e.stopPropagation();
                                            var t = a.val().trim();
                                            d(t)
                                        }), i.on("click", function (e) {
                                            e.stopPropagation(), ACGN.util.limitStore("searchHistory", null), n.html("").hide(), t.hideHistory(s)
                                        }), r.on("mouseover", ".js_hot_list", function (t) {
                                            t.stopPropagation(), e(this).hasClass("active") || e(this).addClass("active").siblings().removeClass("active")
                                        }).on("click", ".js_result_list", function (e) {
                                            var n = a.val().trim();
                                            return n && t.saveSearchHistory(n), !0
                                        }), f(!0)
                                    }
                                    t.$userInfo = e("#J_userInfo"), ACGN.$eventHub.on("EV_SHOW_LOGIN", function (e, t) {
                                        ACGN.layerLogin(t)
                                    }), t.$userInfo.length && (t.refreshUser(), e("body").on("click", "#J_logout", function (e) {
                                        ACGN.logout()
                                    }).on("click", "#J_layerlogin", function (e) {
                                        ACGN.layerLogin({
                                            title: "用户登录"
                                        })
                                    }))
                                })
                            }
                        }, {
                            key: "refreshUser",
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
                                    n = this;
                                n.getUserInfo({
                                    refresh: t
                                }, function (t, i) {
                                    if (!t) {
                                        var a = i;
                                        a.virtualCoinNum = e.VirtualCoinModule.virtualCoinNum, n.$userInfo && n.$userInfo.html()
                                        // a.virtualCoinNum = e.VirtualCoinModule.virtualCoinNum, n.$userInfo && n.$userInfo.html(n.getUserInfoHtml(a))
                                    }
                                })
                            }
                        }, {
                            key: "getUserInfo",
                            value: function (e, t) {
                                if (t === undefined && (t = e, e = {}), "function" != typeof t) throw new Error("获取用户信息参数错误，必须提供callback方法");
                                var n = ACGN.util.cookieParse("user") || {},
                                    i = n.openid,
                                    a = n.type,
                                    o = n.token;
                                "device" === (e = Object.assign({
                                    openid: i,
                                    type: a
                                }, e)).type && (delete e.openid, e.token = o), i && a && "device" !== a || e.isLogin ? this.userLogin(e, function (e, n) {
                                    t(e, n)
                                }) : this.autoRegister(t)
                            }
                        }, {
                            key: "autoRegister",
                            value: function (e) {
                                var t = ACGN.util.cookieParse("user") || {};
                                return ACGN.userInfo = this.userInfo = Object.assign({}, t, {
                                    type: "device",
                                    Cgold: 0,
                                    coins: 0,
                                    Ulevel: 1
                                }), 0 === Object.keys(t).length && ACGN.util.cookieParse("user", this.userInfo), e(null, this.userInfo)
                            }
                        }, {
                            key: "userLogin",
                            value: function (e, t) {
                                var n = this;
                                if (e.type && (e.token || e.openid)) {
                                    var i = e.refresh || e.isLogin;
                                    delete e.refresh, delete e.isLogin, ACGN.ajax({
                                        url: "/login/getuserinfo/",
                                        data: e,
                                        cache: !i,
                                        isResponse: !0
                                    }, function (e, i) {
                                        e || (ACGN.userInfo = n.userInfo = Object.assign({}, i.data)), t(e, i && i.data)
                                    })
                                } else {
                                    var a = "参数不正确，必须存在type，token或openid字段";
                                    t(a)
                                }
                            }
                        }, {
                            key: "_getDeviceCode",
                            value: function (e) {
                                r["default"].get({
                                    canvas: !0
                                }, function (t) {
                                    var n = t.map(function (e) {
                                            return e.value
                                        }),
                                        i = r["default"].x64hash128(n.join(""), 31);
                                    "function" == typeof e && e(i)
                                })
                            }
                        }, {
                            key: "getDeviceCode",
                            value: function (e) {
                                var t = this;
                                window.requestIdleCallback ? requestIdleCallback(function () {
                                    t._getDeviceCode(e)
                                }) : setTimeout(function () {
                                    t._getDeviceCode(e)
                                }, 500)
                            }
                        }]), t
                    }()));
                t["default"] = l
            }).call(this, n("+2Rf"))
        },
        O4pT: function (e, t, n) {
            "use strict";
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0;
            var i = function (e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : undefined,
                    i = {
                        content: '\n    <div class="layer-custom-wap">\n      <div class="layer-custom-icon">\n        <i class="ift-cat"></i>\n      </div>\n      <div class="layer-custom-text'.concat(t.oneRow ? " layer-line" : "", '">').concat(e, "</div>\n    </div>\n    "),
                        time: t.time || 3e3,
                        skin: "layer-custom-msg".concat(t.skin ? " " + t.skin : ""),
                        shade: !1,
                        title: !1,
                        closeBtn: !1,
                        btn: !1,
                        resize: !1,
                        end: function () {
                            "function" == typeof n && n()
                        }
                    };
                layer && layer.open(i)
            };
            t["default"] = i
        },
        "Osw/": function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0, n("V+eJ");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ"));
                n("91GP");
                var r = i(n("pcma")),
                    s = i(n("a2c0")),
                    l = i(n("f+/7"));
                n("EZfX");
                var c, u = i(n("3Umg")),
                    d = "/api",
                    f = "/getPurChasedChapters",
                    p = "/purchasechapters",
                    h = "/getChargeProduct",
                    v = "/user_charge_new",
                    m = "/getChargeResult",
                    g = "/getuserinfo",
                    y = {
                        goodName: siteConf.language.gold,
                        coinsName: siteConf.language.coins,
                        userName: siteConf.language.highness,
                        autoPurchaseCookie: "autoPurchase",
                        orderQueueCookie: "payOrderData",
                        productCookie: "chargeProducts"
                    };

                function w(e) {
                    var t = layer.open(Object.assign({
                        type: 1,
                        title: !1,
                        shade: .75,
                        skin: !1,
                        shadeClose: !1,
                        zIndex: 140,
                        time: 0,
                        closeBtn: !1
                    }, e));
                    return layer.style(t, {
                        backgroundColor: "transparent"
                    }), t
                }

                function b() {
                    layer.closeAll()
                }

                function C(e) {
                    var t = "function" == typeof e ? e : function () {};
                    C._cache ? t(C._cache) : ACGN.business.header.getUserInfo({}, function (e, n) {
                        e ? t(null) : (C._cache = n, t(C._cache))
                    })
                }

                function x(e, t, n) {
                    C(function (i) {
                        i && (n ? (i.Cgold = parseInt(i.Cgold, 10) + parseInt(e, 10), i.coins = parseInt(i.coins, 10) + parseInt(t, 10)) : (i.Cgold = parseInt(e, 10), i.coins = parseInt(t, 10)), ACGN.util.cookieParse("user", i, {
                            expires: 8760
                        }))
                    })
                }

                function k(t) {
                    if (!t) return !1;
                    var n = JSON.parse(s["default"].cookie(y.orderQueueCookie)) || [],
                        i = !1;
                    e.each(n, function (e, n) {
                        n === t && (i = !0)
                    }), i || (n.unshift(t), n.length > 10 && (n.length = 10), s["default"].cookie(y.orderQueueCookie, JSON.stringify(n), {
                        expires: 8760
                    }))
                }

                function _(t) {
                    layer.closeAll();
                    var n, i, a, o = '<div class="pay-box pay-order">\n      <div class="acgn-hd">\n        <p>请及时付款，订单号：<strong>'.concat(t.orderId, '</strong></p>\n        <p>请您在30分钟内完成支付，否则订单会自动取消。</p>\n        <div class="pay-total-num">当前支付金额: <strong>').concat(t.totalPay, '元</strong></div>\n      </div>\n      <div class="acgn-bd rqCode">\n        <div class="thumb" id="js_rqCode"></div>\n        <p class="info">\n          请使用微信扫一扫支付<br>如您已支付请<span class="acgn-red acgn-cursor" data-orderid="').concat(t.orderId, '" id="J_refreshCode">点击刷新</span>\n        </p>\n      </div>\n      <div class="acgn-ft acgn-tar">\n        <span class="acgn-blue acgn-cursor" id="J_selectOtherPay">选择其他支付方式</span>\n      </div>\n    </div>');
                    k(t.orderId), w({
                            skin: "acgn-user-center",
                            closeBtn: !0,
                            content: o,
                            cancel: function () {
                                c && clearTimeout(c), layer.closeAll(), window.comicPay.evtCancelPay()
                            }
                        }), new r["default"](e("#js_rqCode")[0], {
                            text: t.codeUrl,
                            width: 127,
                            height: 127
                        }), n = t.orderId, i = 0,
                        function s(e) {
                            a > 3e5 || (c = setTimeout(function () {
                                ACGN.ajax({
                                    type: "post",
                                    url: "/api/wechat_order_status",
                                    data: {
                                        order_id: n
                                    }
                                }, function (e, t) {
                                    e || 1 === t && (clearTimeout(c), layer.closeAll(), location.reload())
                                }), i >= 5 && (e <= 1e4 ? e = 1e4 : e += 1e3), i++, a += e, s(e)
                            }, e))
                        }(a = 3e3)
                }
                var T = function () {
                    function t(n) {
                        var i = this;
                        if ((0, a["default"])(this, t), window.comicPay) throw Error("只能创建一个payChapter");
                        if (this.comic = {}, !n.comicId) throw Error("没有传入comicId");
                        if (this.comic.comicId = n.comicId, !n.comicName) throw Error("没有传入漫画名称");
                        if (this.comic.comicName = n.comicName, n.comicPaid === undefined) throw Error("没有传入漫画付费状态");
                        if (this.comic.comicPaid = n.comicPaid, n.comicCoinFree === undefined) throw Error("没有传入漫画赠币付费信息");
                        this.comic.comicCoinFree = !!n.comicCoinFree, this.product = null, this.purchaseChapter = null, this.chapterCallback = null, this.currentChapterInfo = null, this.selectPayPrice = 0;
                        var o = s["default"].cookie(y.productCookie);
                        try {
                            this.product = JSON.parse(o)
                        } catch (u) {}
                        this.layerWin = w, this.layerClose = b, n.readFreeModule && (this.readFreeModule = n.readFreeModule), this.virtualCoinModule = new l["default"]({
                            comicId: n.comicId
                        }), setTimeout(function () {
                            i.setTemplate()
                        }), window.comicPay = this;
                        var r = this;
                        e("body").on("click", ".autobuy", function (e) {}).on("click", ".e-recharge-item", function (t) {
                            e(".e-recharge-item").removeClass("active");
                            var n = e(this).addClass("active");
                            r.selectPayPrice = n.data("price"), e(".e-recharge-total").text(r.selectPayPrice + "元")
                        }).on("click", ".js_pay_type .item", function (t) {
                            e(this).addClass("active").siblings().removeClass("active")
                        }).on("click", "#J_selectOtherPay", function () {
                            c && clearTimeout(c), layer.closeAll(), r.evtProduct()
                        }).on("click", "#J_refreshCode", function () {
                            location.reload()
                        }), this.fetched = !1, this.fetchCallback = function () {
                            i.fetched = !0
                        }, this.fetchOrder()
                    }
                    return (0, o["default"])(t, [{
                        key: "payChapter",
                        value: function (e, t) {
                            var n = this;
                            if (this.chapterCallback = function (e) {
                                    "function" == typeof t && t(e)
                                }, 1 === this.comic.comicPaid) return this.finishPayCall(!0), !1;
                            if (0 === e.price) return this.finishPayCall(!0), !1;
                            this.currentChapterInfo = e;
                            var i = function () {
                                C(function (t) {
                                    var i = n;
                                    n.ajaxFetchChapter(function (n) {
                                        (function (n) {
                                            var i = this;
                                            if (n) {
                                                if (this.purchaseChapter = [], -1 !== this.purchaseChapter.indexOf(e.chapterNatureId) || this.virtualCoinModule.enabled && this.virtualCoinModule.checkChapter(e.chapterNatureId)) return this.finishPayCall(!0), !0;
                                                this.isAutoBuy() ? this._isEnough(e.price, function (n) {
                                                    if (i.virtualCoinModule.enabled && window.comicInfo.boo_virtual_coin) return window.setTimeout(function () {
                                                        ACGN.business.msg("自动付费购买中...");
                                                        var t = {
                                                            chapterId: e.chapterNatureId,
                                                            price: e.price
                                                        };
                                                        i.virtualCoinModule.pay(t, function () {
                                                            window.setTimeout(function () {
                                                                i.finishPayCall(!0), ACGN.business.msg("自动购买成功，开启篇章")
                                                            }, 1e3)
                                                        })
                                                    }, 500);
                                                    n ? (ACGN.business.msg("自动付费购买中..."), i.ajaxBuyChapter(e.chapterNatureId, function (n) {
                                                        n ? (i.finishPayCall(n), ACGN.business.msg("自动购买成功，开启篇章")) : (i.checkUtilFreeTime(e, t), ACGN.business.msg("自动购买章节失败，请重试"))
                                                    })) : i.checkUtilFreeTime(e, t)
                                                }) : this.checkUtilFreeTime(e, t)
                                            } else this.finishPayCall(!1)
                                        }).call(i, n)
                                    })
                                })
                            };
                            this.fetched ? i() : this.fetchCallback = function () {
                                n.fetched = !0, i()
                            }
                        }
                    }, {
                        key: "checkUtilFreeTime",
                        value: function (e, t) {
                            var n = this;
                            this.readFreeModule.getReadFreetTime(function () {
                                if (n.readFreeModule.isFreeTime()) return ACGN.business.msg("免费看漫画时间段，开启篇章"), void n.finishPayCall(!0);
                                n.layerPayChapter(e, t)
                            })
                        }
                    }, {
                        key: "payRecharge",
                        value: function (e) {
                            var t = this;
                            C(function (n) {
                                if (!n) return b(), ACGN.layerLogin(), !1;
                                t.ajaxGetProduct(function (i) {
                                    i ? t.layerProduct(t.product, n, e) : t.layerError()
                                })
                            })
                        }
                    }, {
                        key: "getPurchaseChapters",
                        value: function () {
                            return this.purchaseChapter
                        }
                    }, {
                        key: "recharge",
                        value: function (e, t) {
                            var n = this,
                                i = this;
                            i.ajaxRecharge(e, t, function (t, a) {
                                t ? 1 === e ? (k(a.orderId), location.href = a.url) : (a.totalPay = i.selectPayPrice, _(a)) : n.layerError()
                            })
                        }
                    }, {
                        key: "fetchOrder",
                        value: function () {
                            var t = this,
                                n = function () {
                                    var e = null;
                                    try {
                                        e = JSON.parse(s["default"].cookie(y.orderQueueCookie))
                                    } catch (t) {}
                                    return e && e.length ? e[e.length - 1] : null
                                }();
                            n ? (! function (t) {
                                var n = JSON.parse(s["default"].cookie(y.orderQueueCookie)) || [];
                                e.each(n, function (e, i) {
                                    i === t && n.splice(e, 1)
                                }), s["default"].cookie(y.orderQueueCookie, JSON.stringify(n), {
                                    expires: 8760
                                })
                            }(n), this.ajaxFetchGold(function () {
                                t.fetchCallback()
                            })) : this.fetchCallback()
                        }
                    }, {
                        key: "finishPayCall",
                        value: function (e) {
                            "function" == typeof this.chapterCallback && this.chapterCallback(e), this.chapterCallback = null
                        }
                    }, {
                        key: "ajaxFetchChapter",
                        value: function (e) {
                            var t = this,
                                n = "function" == typeof e ? e : function () {};
                            C(function (e) {
                                if (!ACGN.business.isLogin()) return setTimeout(function () {
                                    n(!0)
                                });
                                t.purchaseChapter ? n(!0) : ACGN.ajax({
                                    url: d + f,
                                    cache: !1,
                                    data: {
                                        openid: e.openid,
                                        type: e.type,
                                        comic_id: t.comic.comicId
                                    },
                                    dataType: "json"
                                }, function (e, i) {
                                    e ? n(!1, e) : (t.purchaseChapter = i, n(!0))
                                })
                            })
                        }
                    }, {
                        key: "ajaxBuyChapter",
                        value: function (e, t) {
                            var n = "function" == typeof t ? t : function () {};
                            C(function (i) {
                                if (!ACGN.business.isLogin()) return n(!1), !1;
                                ACGN.ajax({
                                    url: d + p,
                                    type: "post",
                                    data: {
                                        openid: i.openid,
                                        type: i.type,
                                        chapter_ids: String(e)
                                    },
                                    dataType: "json"
                                }, function (e, n) {
                                    if (e) t(!1, e);
                                    else {
                                        var i = n;
                                        x(i.Cgold, i.Cremaincoin), t(!0)
                                    }
                                })
                            })
                        }
                    }, {
                        key: "ajaxGetProduct",
                        value: function (e) {
                            var t = this,
                                n = "function" == typeof e ? e : function () {};
                            C(function (e) {
                                if (!e) return n(!1), !1;
                                ACGN.ajax({
                                    url: d + h,
                                    type: "get",
                                    dataType: "json",
                                    data: {
                                        pay_type: 1
                                    }
                                }, function (e, i) {
                                    e ? n(!1) : (t.product = i, s["default"].cookie(y.productCookie, JSON.stringify(t.product)), n(!0))
                                })
                            })
                        }
                    }, {
                        key: "ajaxRecharge",
                        value: function (e, t, n) {
                            var i = "function" == typeof n ? n : function () {};
                            C(function (n) {
                                if (!ACGN.business.isLogin()) return i(!1), !1;
                                ACGN.ajax({
                                    type: "post",
                                    url: d + v,
                                    data: {
                                        product_id: t,
                                        pay_type: e,
                                        type: n.type,
                                        openid: n.openid,
                                        backurl: location.origin + location.pathname
                                    }
                                }, function (e, t) {
                                    e ? i(!1) : i(!0, t)
                                })
                            })
                        }
                    }, {
                        key: "ajaxOrderResult",
                        value: function (e, t) {
                            var n = "function" == typeof t ? t : function () {};
                            C(function (t) {
                                if (!ACGN.business.isLogin()) return n(!1), !1;
                                t && ACGN.ajax({
                                    url: d + m,
                                    type: "get",
                                    data: {
                                        order_id: e,
                                        type: t.type,
                                        openid: t.openid
                                    },
                                    dataType: "json"
                                }, function (e, t) {
                                    e ? n(!1) : n(!0, t)
                                })
                            })
                        }
                    }, {
                        key: "ajaxFetchGold",
                        value: function (e) {
                            var t = "function" == typeof e ? e : function () {};
                            C(function (e) {
                                if (!ACGN.business.isLogin()) return t(!1), !1;
                                ACGN.ajax({
                                    url: d + g,
                                    type: "get",
                                    data: {
                                        openid: e.openid,
                                        myuid: e.Uid,
                                        type: e.type
                                    },
                                    dataType: "json"
                                }, function (e, n) {
                                    e ? t(!1) : (x(n.Cgold, n.coins), t(!0))
                                })
                            })
                        }
                    }, {
                        key: "layerPayChapter",
                        value: function (e, t) {
                            var n = this;
                            b();
                            var i = null;
                            if (t) {
                                var a = parseInt(t.Cgold),
                                    o = parseInt(t.coins),
                                    r = parseInt(e.price),
                                    s = a;
                                this.comic.comicCoinFree && (s += o), this.virtualCoinModule.enabled && (s += this.virtualCoinModule.virtualCoinNum), i = s >= r ? "pay" : "recharge"
                            } else i = "login";
                            w({
                                content: u["default"].render(this.payTemplate.payChapter, {
                                    comic: this.comic,
                                    chapter: e,
                                    user: t,
                                    coinFree: this.comic.comicCoinFree,
                                    type: i,
                                    autoBuy: this.isAutoBuy(),
                                    virtualCoinNum: this.virtualCoinModule.enabled && this.virtualCoinModule.virtualCoinNum || 0
                                }, {
                                    delimiter: "$"
                                }),
                                cancel: function () {
                                    n.evtCancelPay()
                                }
                            }), this.readFreeModule.setPopOpts({
                                popHtml: this.payTemplate.readFree,
                                btnIcon: "ift-cat"
                            }), this.readFreeModule.open(this, e)
                        }
                    }, {
                        key: "layerPaying",
                        value: function (e) {
                            var t = this;
                            b(), this.ajaxBuyChapter(e, function (e, n) {
                                t.finishPayCall(e), C(function (i) {
                                    e ? t.layerPayOk({
                                        gold: i.Cgold,
                                        coin: i.coins
                                    }) : t.layerError(n)
                                })
                            })
                        }
                    }, {
                        key: "layerPayOk",
                        value: function (e) {
                            b(), layer.msg("购买章节成功！")
                        }
                    }, {
                        key: "layerProduct",
                        value: function (t, n, i) {
                            !i && b();
                            var a = ACGN.util.getHeadCover(siteConf, n.Uid);
                            w({
                                content: u["default"].render(this.payTemplate.product, {
                                    product: t,
                                    user: n,
                                    headPic: a,
                                    virtualCoinNum: this.virtualCoinModule.enabled && this.virtualCoinModule.virtualCoinNum || 0
                                }, {
                                    delimiter: "$"
                                })
                            }), e(".e-recharge-item").eq(0).click()
                        }
                    }, {
                        key: "layerRechargeOk",
                        value: function () {
                            b(), layer.msg("充值成功！")
                        }
                    }, {
                        key: "layerError",
                        value: function (e) {
                            var t = "服务器出错了，请重试～";
                            "string" == typeof e && (t = e), layer.msg(t)
                        }
                    }, {
                        key: "evtLogin",
                        value: function () {
                            b(), ACGN.layerLogin()
                        }
                    }, {
                        key: "evtCancelPay",
                        value: function () {
                            b(), this.finishPayCall(!1)
                        }
                    }, {
                        key: "evtPay",
                        value: function (e) {
                            var t = this;
                            if (this.virtualCoinModule.enabled && window.comicInfo.boo_virtual_coin) return b(), this.virtualCoinModule.pay(e, function () {
                                t.finishPayCall(!0), t.layerPayOk()
                            });
                            this.layerPaying(e.chapterId)
                        }
                    }, {
                        key: "evtClose",
                        value: function () {
                            b()
                        }
                    }, {
                        key: "evtProduct",
                        value: function () {
                            var e = this;
                            C(function (t) {
                                if (!ACGN.business.isLogin()) return layer.closeAll(), ACGN.$eventHub.trigger("EV_SHOW_LOGIN"), !1;
                                e.payRecharge(!0)
                            })
                        }
                    }, {
                        key: "evtRecharge",
                        value: function () {
                            var t = this;
                            C(function (n) {
                                if (!n) return layer.closeAll(), ACGN.layerLogin(), !1;
                                var i = e(".e-recharge-item.active"),
                                    a = e(".js_pay_type .item.active");
                                if (i.length && a.length) {
                                    var o = i.data("id"),
                                        r = a.data("type");
                                    if ("device" === n.type) return layer.closeAll(), void layer.confirm('请注意，您当前为<strong class="acgn-red">未登录状态（游客模式）</strong>，为游客帐号充值'.concat(siteConf.language.gold, '可能会<strong class="acgn-red">导致').concat(siteConf.language.gold, "丢失</strong>，请谨慎操作！"), {
                                        icon: -1,
                                        title: "重要提示",
                                        btn: ["登录"],
                                        cancel: function () {
                                            t.evtCancelPay()
                                        }
                                    }, function (e) {
                                        layer.close(e), ACGN.layerLogin()
                                    });
                                    t.recharge(r, o)
                                } else ACGN.business.msg("请先选择充值金额")
                            })
                        }
                    }, {
                        key: "isAutoBuy",
                        value: function () {
                            return "1" === s["default"].cookie(y.autoPurchaseCookie)
                        }
                    }, {
                        key: "setAutoBuy",
                        value: function (e) {
                            s["default"].cookie(y.autoPurchaseCookie, e ? 1 : 0)
                        }
                    }, {
                        key: "_isEnough",
                        value: function (e, t) {
                            var n = this,
                                i = "function" == typeof t ? t : function () {};
                            C(function (t) {
                                if (!ACGN.business.isLogin()) return i(!1), !1;
                                var a = parseInt(t.Cgold),
                                    o = parseInt(t.coins),
                                    r = a;
                                n.comic.comicCoinFree && (r += o), i(r >= e)
                            })
                        }
                    }, {
                        key: "setTemplate",
                        value: function () {
                            this.payTemplate = {
                                readFree: '\n        <div class="pay-panel">\n          <div class="pay-panel-main">\n            <div class="pay-panel-inner">\n              <div onclick="window.comicPay.evtCancelPay()" class="close">\n                <i class="ift-close"></i>\n              </div>\n              '.concat(this.readFreeModule && this.readFreeModule.getPopTemplate(), "\n            </div>\n          </div>\n        </div> "),
                                payChapter: "<$\n        var btnStr = ''; var btnAction = ''\n        if(type === 'login' ) {\n          btnStr = '登录购买'; btnAction = 'evtLogin()'\n        } else if(type === 'pay') {\n          btnStr = '购买此章节'; btnAction = 'evtPay(' + JSON.stringify({chapterId: chapter.chapterNatureId, price: chapter.price}) + ')';\n        } else if(type === 'recharge') {\n          btnStr = '钻石不足，充值钻石'; btnAction = 'evtProduct()'\n        } $>\n        <div class=\"pay-panel\">\n          <div class=\"pay-panel-main\">\n            <div class=\"pay-panel-inner\">\n              <div onclick=\"window.comicPay.evtCancelPay()\" class=\"close\">\n                <i class=\"ift-close\"></i>\n              </div>\n              <div class=\"space\"></div>\n              <h3 class=\"title\">".concat(y.userName, '，您遇到付费章节了</h3>\n              <$ if(type === \'login\'){ $>\n                <div class="tac">\n                  <p class="pay-ft">新用户免费赠送5000').concat(y.goodName, '</p>\n                </div>\n              <$ } else if(type === \'pay\') { $>\n                <div class="assets">\n                  我的钱包\n                  &nbsp;<span class="imp"><$= user.Cgold $></span>').concat(y.goodName, '\n                  &nbsp;<span class="imp"><$= user.coins + virtualCoinNum $></span>').concat(y.coinsName, '\n                  \x3c!--<div class="refill" onclick="window.comicPay.evtProduct();" >去充值<i class="ift-right"></i></div>--\x3e\n                </div>\n              <$ } else if(type === \'recharge\') { $>\n                <div class="assets">\n                  我的钱包\n                  &nbsp;<span class="imp"><$= user.Cgold $></span>').concat(y.goodName, '\n                  &nbsp;<span class="imp"><$= user.coins + virtualCoinNum $></span>').concat(y.coinsName, '\n                  \x3c!--<div class="refill" onclick="window.comicPay.evtProduct();" >去充值<i class="ift-right"></i></div>--\x3e\n                </div>\n              <$ } $>\n              <div class="space"></div>\n              <div class="split"></div>\n              <div class="space"></div>\n              <div class="info">\n                购买 <$= comic.comicName $> <$= chapter.chapterName $>\n              </div>\n              <div class="payment">\n                支付 <span class="imp"><$= chapter.price $></span> ').concat(y.goodName, '\n              </div>\n              <$ if(coinFree) { $>\n                <div class="hint">').concat(y.goodName, "不足时，可以用").concat(y.coinsName, '抵扣哦</div>\n              <$ } $>\n              <div class="btn" onclick="window.comicPay.<$= btnAction $>"><$= btnStr $></div>\n              <div id="autobuy" class="autobuy <$= autoBuy ? \'active\' : \'\' $>">\n                <i class="icon ift-check"></i>\n                <span class="text">自动购买下一章</span>\n              </div>\n              <$ if(user.type!== \'device\') { $>\n                ').concat(this.readFreeModule && this.readFreeModule.getFreeNav(), "\n              <$ } $>\n            </div>\n          </div>\n        </div>"),
                                product: '<div class="pay-panel">\n        <div class="pay-panel-main charge-list">\n          <div class="pay-panel-inner">\n            <div onclick="window.comicPay.evtCancelPay()">\n               <i class="icon-comm-close icon-pop-comm-close close"></i>\n            </div>\n            <div class="user">\n              <img src="'.concat(siteConf.staticRoot, 'images/comm/space.gif" data-src="<$= headPic $>" alt="我的头像" class="face">\n              <h3 class="name">\n                充值账户 <span class="imp"><$= user.Uname $></span>\n              </h3>\n              <div class="desc">\n                当前').concat(y.goodName, ' <span class="imp"><$= user.Cgold $></span>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前').concat(y.coinsName, ' <span class="imp"><$= user.coins + virtualCoinNum $></span>\n              </div>\n            </div>\n            <div class="split"></div>\n            <div class="order">\n              <h3 class="title">充值金额</h3>\n              <ul class="list">\n                <$\n                var tempPrice = null; let tempChecked = null; let tempIcon = null;\n                for(var i = 0; i < product.length; i++){\n                  tempPrice = parseInt(product[i].price / 100);\n                  tempChecked = product[i].status === 2 ? \'checked="checked"\' : \'\';\n                  tempIcon = product[i].status === 2 ? \'<i class="ift-fire"></i>\' : \'\';\n                $>\n                  <li class="item" >\n                    <div class="board e-recharge-item" data-id="<$= product[i].id $>" data-price="<$= tempPrice $>">\n                      <p class="num"><$= tempPrice $>元</p>\n                      <p class="desc">（<$= product[i].gold $>').concat(y.goodName, '）</p>\n                    </div>\n                  </li>\n                <$ } $>\n              </ul>\n            </div>\n            <div class="method">\n              <div class="name">充值方式</div>\n              <ul class="list js_pay_type">\n                <li class="item active" data-id="1" data-type="10">\n                  <div class="board">\n                    <div class="icon">\n                      <img src="').concat(siteConf.staticRoot, 'images/personal/wxpay.png" alt="微信支付">\n                    </div>\n                    <p class="text">微信支付</p>\n                  </div>\n                </li>\n                <li class="item" data-id="2" data-type="1">\n                  <div class="board">\n                    <div class="icon">\n                      <img src="').concat(siteConf.staticRoot, 'images/personal/ali.png">\n                    </div>\n                    <p class="text">支付宝</p>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <div class="ft">\n              <div class="split-reverse"></div>\n              <div class="ft-inner">\n                <h3 class="count">需要支付 <span class="imp e-recharge-total">0元</span></h3>\n                <div onclick="window.comicPay.evtRecharge();" class="btn">去支付</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>')
                            }
                        }
                    }]), t
                }();
                t["default"] = T
            }).call(this, n("+2Rf"))
        },
        PDX0: function (e, t) {
            (function (t) {
                e.exports = t
            }).call(this, {})
        },
        W0VD: function (e, t, n) {
            "use strict";
            n("a1Th"), n("h7Nl"), n("Btvt");
            var i = n("8NKf"),
                a = n("AIaL"),
                o = n("77xw"),
                r = Object.prototype.toString,
                s = i(Array, "isArray") || function (e) {
                    return o(e) && a(e.length) && "[object Array]" == r.call(e)
                };
            e.exports = s
        },
        WYII: function (e, t, n) {
            "use strict";
            var i = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && i.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }
        },
        XaqC: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                r = new(function () {
                    function e() {
                        (0, a["default"])(this, e)
                    }
                    return (0, o["default"])(e, [{
                        key: "isEmptyObject",
                        value: function (e) {
                            return !e || 0 === Object.keys(e).length
                        }
                    }]), e
                }());
            t["default"] = r
        },
        XxQ1: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                return e
            }
        },
        YCh1: function (e, t, n) {
            "use strict";
            n("a1Th"), n("h7Nl"), n("Btvt");
            var i = n("ouO+"),
                a = "[object Function]",
                o = Object.prototype.toString;
            e.exports = function (e) {
                return i(e) && o.call(e) == a
            }
        },
        "Z+BX": function (e, t, n) {},
        ZFff: function (e, t, n) {
            "use strict";
            var i = n("yUcU");
            e.exports = function (e) {
                return function (t, n, a) {
                    for (var o = i(t), r = a(t), s = r.length, l = e ? s : -1; e ? l-- : ++l < s;) {
                        var c = r[l];
                        if (!1 === n(o[c], c, o)) break
                    }
                    return t
                }
            }
        },
        alyQ: function (e, t, n) {
            var i, a;
            i = [n("+2Rf")], (a = function (e) {
                return function (e) {
                    e.easing.jswing = e.easing.swing;
                    var t = Math.pow,
                        n = Math.sqrt,
                        i = Math.sin,
                        a = Math.cos,
                        o = Math.PI,
                        r = 1.70158,
                        s = 1.525 * r,
                        l = 2 * o / 3,
                        c = 2 * o / 4.5;

                    function u(e) {
                        var t = 7.5625,
                            n = 2.75;
                        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                    }
                    e.extend(e.easing, {
                        def: "easeOutQuad",
                        swing: function (t) {
                            return e.easing[e.easing.def](t)
                        },
                        easeInQuad: function (e) {
                            return e * e
                        },
                        easeOutQuad: function (e) {
                            return 1 - (1 - e) * (1 - e)
                        },
                        easeInOutQuad: function (e) {
                            return e < .5 ? 2 * e * e : 1 - t(-2 * e + 2, 2) / 2
                        },
                        easeInCubic: function (e) {
                            return e * e * e
                        },
                        easeOutCubic: function (e) {
                            return 1 - t(1 - e, 3)
                        },
                        easeInOutCubic: function (e) {
                            return e < .5 ? 4 * e * e * e : 1 - t(-2 * e + 2, 3) / 2
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e
                        },
                        easeOutQuart: function (e) {
                            return 1 - t(1 - e, 4)
                        },
                        easeInOutQuart: function (e) {
                            return e < .5 ? 8 * e * e * e * e : 1 - t(-2 * e + 2, 4) / 2
                        },
                        easeInQuint: function (e) {
                            return e * e * e * e * e
                        },
                        easeOutQuint: function (e) {
                            return 1 - t(1 - e, 5)
                        },
                        easeInOutQuint: function (e) {
                            return e < .5 ? 16 * e * e * e * e * e : 1 - t(-2 * e + 2, 5) / 2
                        },
                        easeInSine: function (e) {
                            return 1 - a(e * o / 2)
                        },
                        easeOutSine: function (e) {
                            return i(e * o / 2)
                        },
                        easeInOutSine: function (e) {
                            return -(a(o * e) - 1) / 2
                        },
                        easeInExpo: function (e) {
                            return 0 === e ? 0 : t(2, 10 * e - 10)
                        },
                        easeOutExpo: function (e) {
                            return 1 === e ? 1 : 1 - t(2, -10 * e)
                        },
                        easeInOutExpo: function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? t(2, 20 * e - 10) / 2 : (2 - t(2, -20 * e + 10)) / 2
                        },
                        easeInCirc: function (e) {
                            return 1 - n(1 - t(e, 2))
                        },
                        easeOutCirc: function (e) {
                            return n(1 - t(e - 1, 2))
                        },
                        easeInOutCirc: function (e) {
                            return e < .5 ? (1 - n(1 - t(2 * e, 2))) / 2 : (n(1 - t(-2 * e + 2, 2)) + 1) / 2
                        },
                        easeInElastic: function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : -t(2, 10 * e - 10) * i((10 * e - 10.75) * l)
                        },
                        easeOutElastic: function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : t(2, -10 * e) * i((10 * e - .75) * l) + 1
                        },
                        easeInOutElastic: function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -t(2, 20 * e - 10) * i((20 * e - 11.125) * c) / 2 : t(2, -20 * e + 10) * i((20 * e - 11.125) * c) / 2 + 1
                        },
                        easeInBack: function (e) {
                            return 2.70158 * e * e * e - r * e * e
                        },
                        easeOutBack: function (e) {
                            return 1 + 2.70158 * t(e - 1, 3) + r * t(e - 1, 2)
                        },
                        easeInOutBack: function (e) {
                            return e < .5 ? t(2 * e, 2) * (7.189819 * e - s) / 2 : (t(2 * e - 2, 2) * ((s + 1) * (2 * e - 2) + s) + 2) / 2
                        },
                        easeInBounce: function (e) {
                            return 1 - u(1 - e)
                        },
                        easeOutBounce: u,
                        easeInOutBounce: function (e) {
                            return e < .5 ? (1 - u(1 - 2 * e)) / 2 : (1 + u(2 * e - 1)) / 2
                        }
                    })
                }(e)
            }.apply(t, i)) === undefined || (e.exports = a)
        },
        aqB3: function (e, t, n) {
            "use strict";
            n("pIFo"), n("Oyvg"), n("a1Th"), n("h7Nl"), n("Btvt");
            var i = n("YCh1"),
                a = n("77xw"),
                o = /^\[object .+?Constructor\]$/,
                r = Object.prototype,
                s = Function.prototype.toString,
                l = r.hasOwnProperty,
                c = RegExp("^" + s.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function (e) {
                return null != e && (i(e) ? c.test(s.call(e)) : a(e) && o.test(e))
            }
        },
        euvV: function (e, t, n) {
            "use strict";
            var i = n("y/UG"),
                a = n("AIaL");
            e.exports = function (e) {
                return null != e && a(i(e))
            }
        },
        fI4m: function (e, t, n) {
            "use strict";
            var i = n("euvV"),
                a = n("77xw"),
                o = Object.prototype,
                r = o.hasOwnProperty,
                s = o.propertyIsEnumerable;
            e.exports = function (e) {
                return a(e) && i(e) && r.call(e, "callee") && !s.call(e, "callee")
            }
        },
        fzE2: function (e, t, n) {
            "use strict";
            var i = /^\d+$/,
                a = 9007199254740991;
            e.exports = function (e, t) {
                return e = "number" == typeof e || i.test(e) ? +e : -1, t = null == t ? a : t, e > -1 && e % 1 == 0 && e < t
            }
        },
        h3vV: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                return function (t) {
                    return null == t ? undefined : t[e]
                }
            }
        },
        hsuJ: function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.baiduShare = function () {
                    e(".sharebox").length && (window._share_conf = Object.assign({
                        images: ["//".concat(siteConf.domain, "/static/images/comm/logo.png")]
                    }, window.shareConf), a["default"].loadjs("//share.321mh.com/index.js?cdnversion=" + ~(-new Date / 36e5), {
                        async: !0
                    }))
                }, t.baiduPush = function () {
                    var e = document.createElement("script");
                    e.setAttribute("async", "true"), "https" === window.location.protocol.split(":")[0] ? e.src = "https://zz.bdstatic.com/linksubmit/push.js" : e.src = "http://push.zhanzhang.baidu.com/push.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }, n("KKXr"), n("91GP");
                var a = i(n("a2c0"))
            }).call(this, n("+2Rf"))
        },
        i4pp: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0;
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                r = new(function () {
                    function e() {
                        (0, a["default"])(this, e)
                    }
                    return (0, o["default"])(e, [{
                        key: "browserHtml",
                        value: function () {
                            var e = siteConf.staticRoot;
                            return '<div class="browser" id="J_browser">\n      \x3c!--<span class="close J_close">&times;</span>--\x3e\n      <h2 class="title">您好，本站检查到您的阅览器版本过低!</h2>\n      <p class="synopsis">因网站大量采用了HTML5技术进行开发，并不在支持IE6、IE7、IE8低版本的阅览器，所以低版本的阅览器将无法展现网站的全部效果或者页面错乱，建议您选择下面的阅览器安装进行升级访问</p>\n    <ul>\n      <li><a rel="nofollow" title="" href="//dlsw.baidu.com/sw-search-sp/gaosu/2015_09_10_12/bind1/23356/BOIE9_ZHCN_BO0085_WIN7_23356_BDdl.exe"><img src="'.concat(e, 'images/browser/ie.png" alt=""></a></li>\n      <li><a rel="nofollow" title="" href="//dlsw.baidu.com/sw-search-sp/2015_09_09_23/bind1/14744/rj_xm2376.exe"><img src="').concat(e, 'images/browser/chrome.png" alt=""></a></li>\n      <li><a rel="nofollow" title="" href="//dlsw.baidu.com/sw-search-sp/2015_09_10_10/bind1/11843/rj_ix2926.exe"><img src="').concat(e, 'images/browser/firefox.png" alt=""></a></li>\n      <li><a rel="nofollow" title="" href="//dlsw.baidu.com/sw-search-sp/2015_09_07_13/bind1/11508/rj_ba4715.exe"><img src="').concat(e, 'images/browser/opera.png" alt=""></a></li>\n      <li><a rel="nofollow" title="" href="//dlsw.baidu.com/sw-search-sp/2015_09_07_21/bind1/12966/rj_wu6459.exe"><img src="').concat(e, 'images/browser/safari.png" alt=""></a></li>\n    </ul>\n    <dl>\n      <dt>其它阅览器</dt>\n      <dd>\n        <a title="傲游浏览器" href="http://dlsw.baidu.com/sw-search-sp/gaosu/2015_09_10_12/bind1/15449/mx_V4.4.7.1000_setup_15449_BDdl.exe">傲游浏览器</a>\n        <a title="傲游浏览器" href="//down.360safe.com/se/360se8.0.1.242.exe">傲游浏览器</a>\n        <a title="UC浏览器" href="//dlsw.baidu.com/sw-search-sp/gaosu/2015_09_10_12/bind1/14497/UCBrowser_V5.4.4237.31_setup_14497_BDdl.exe">UC浏览器</a>\n        <a title="QQ浏览器" href="//dlsw.baidu.com/sw-search-sp/gaosu/2015_08_26_12/bind1/16490/QQBrowser_Setup_V9.0.3100.400_16490_BDdl.exe">QQ浏览器</a>\n        <a title="百度浏览器" href="//dlsw.baidu.com/sw-search-sp/2015_09_09_22/bind1/11339/rj_bu7570.exe">百度浏览器</a>\n        <a title="搜狗浏览器" href="//dlsw.baidu.com/sw-search-sp/soft/0d/14754/sogou_explorer_V6.0.5.17880_setup.1441162373.exe">搜狗浏览器</a>\n        <a title="猎豹浏览器" href="//dlsw.baidu.com/sw-search-sp/soft/a6/15895/KSbrowser_V5.3.100.10349_setup.1438916510.exe">猎豹浏览器</a>\n      </dd>\n    </dl>\n    </div>')
                        }
                    }, {
                        key: "open",
                        value: function (e) {
                            layer.open({
                                type: 1,
                                title: !1,
                                shade: .75,
                                shadeClose: !1,
                                area: ["640px", "auto"],
                                btn: ["返回用户中心"],
                                content: this.browserHtml(),
                                cancel: function () {
                                    return layer.closeAll(), "function" == typeof e && e(), !1
                                },
                                yes: function () {
                                    layer.closeAll(), "function" == typeof e && e()
                                }
                            })
                        }
                    }]), e
                }());
            t["default"] = r
        },
        iSio: function (e, t, n) {
            "use strict";
            var i = n("j+0v"),
                a = "[object Boolean]",
                o = "[object Date]",
                r = "[object Number]",
                s = "[object RegExp]",
                l = "[object String]",
                c = "[object ArrayBuffer]",
                u = "[object Float32Array]",
                d = "[object Float64Array]",
                f = "[object Int8Array]",
                p = "[object Int16Array]",
                h = "[object Int32Array]",
                v = "[object Uint8Array]",
                m = "[object Uint8ClampedArray]",
                g = "[object Uint16Array]",
                y = "[object Uint32Array]",
                w = /\w*$/;
            e.exports = function (e, t, n) {
                var b = e.constructor;
                switch (t) {
                    case c:
                        return i(e);
                    case a:
                    case o:
                        return new b(+e);
                    case u:
                    case d:
                    case f:
                    case p:
                    case h:
                    case v:
                    case m:
                    case g:
                    case y:
                        var C = e.buffer;
                        return new b(n ? i(C) : C, e.byteOffset, e.length);
                    case r:
                    case l:
                        return new b(e);
                    case s:
                        var x = new b(e.source, w.exec(e));
                        x.lastIndex = e.lastIndex
                }
                return x
            }
        },
        ixR2: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0;
            var a = n("hsuJ"),
                o = i(n("BdMh")),
                r = i(n("jrwq")),
                s = i(n("8mNb")),
                l = i(n("i4pp")),
                c = i(n("Osw/")),
                u = i(n("4cDi")),
                d = i(n("Me8R")),
                f = i(n("O4pT")),
                p = {
                    baiduShare: a.baiduShare,
                    baiduPush: a.baiduPush,
                    pagination: o["default"],
                    dialog: r["default"],
                    SendThings: s["default"],
                    browser: l["default"],
                    PayChapter: c["default"],
                    header: d["default"],
                    bookCollect: u["default"],
                    msg: f["default"],
                    checkLogin: function () {
                        return !!this.isLogin() || (ACGN.$eventHub.trigger("EV_SHOW_LOGIN"), !1)
                    },
                    isLogin: function () {
                        var e = ACGN.util.cookieParse("user");
                        return e && "device" !== e.type && e.openid
                    }
                };
            t["default"] = p
        },
        "j+0v": function (e, t, n) {
            "use strict";
            (function (t) {
                var n = t.ArrayBuffer,
                    i = t.Uint8Array;
                e.exports = function (e) {
                    var t = new n(e.byteLength);
                    return new i(t).set(new i(e)), t
                }
            }).call(this, n("yLpj"))
        },
        jrwq: function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0, n("91GP"), n("xfY5"), n("KKXr"), n("pIFo"), n("dRSK");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    r = {
                        list: [10, 50, 100, 200, 400, 600],
                        "default": 10,
                        split: 1,
                        total: 0,
                        thankStr: "感谢陛下的赞赏~本次共花费",
                        buttonText: ["去充值", "立即赞赏"]
                    },
                    s = {
                        list: [1, 3, 5, 10, 20, "全部"],
                        "default": 10,
                        split: 1,
                        total: 0
                    },
                    l = {
                        list: [1, 3, 5, 10, 20, "全部"],
                        "default": 1,
                        split: 1,
                        total: 0
                    },
                    c = {
                        total: 0,
                        "default": 0,
                        giftList: []
                    },
                    u = {
                        num: 0,
                        markData: {
                            verygood: 0,
                            good: 0,
                            normal: 0,
                            adjective: 0,
                            bad: 0
                        }
                    };

                function d(e) {
                    this._dialog.on("keyup", ".text", function (t) {
                        var n = t.target;
                        isNaN(n.value) && (n.value = e)
                    })
                }
                var f = function () {
                        function t(n, i) {
                            (0, a["default"])(this, t);
                            var o = e.extend({}, r, n);
                            this.option = o, this.callback = i;
                            var s = this.template();
                            this._dialog = e(s), d.call(this, 10), this.bindEvent(), this.show(), this._dialog.find(".item:eq(0)").trigger("click")
                        }
                        return (0, o["default"])(t, [{
                            key: "template",
                            value: function () {
                                var e = this.option,
                                    t = '<div class="acgn-app-gift-dialog acgn-appreciate acgn-dialog"><div class="cat-head"></div><div class="bd"><div class="hd"> <span class="title">赞赏作者</span><span class="subtitle">我的钻石 </span><span class="num">{{total}}</span><i class="icon-comm-close close"></i></div><div class="content">{{itemList}}</div><div class="footer acgn-clearfix"><div><i class="ift-jianx ift-reduce btn-reduce"></i><input type="text" class="text" value="{{default}}"/><i class="ift-jiax btn-plus"></i></div><div><span class="btn-sub">{{buttonText}}<i class="ift-cat"></i></span></div></div></div></div>';
                                t = t.replace("{{total}}", e.total), t = t.replace("{{default}}", e["default"]);
                                var n = (e.total, e["default"], e.buttonText[1]);
                                t = t.replace("{{buttonText}}", n);
                                for (var i = "", a = 0; a < e.list.length; a++) {
                                    var o = e.list[a];
                                    i += '<div class="item"><i class="icon-detail-stone-dialog"></i><span class="item-num">'.concat(o, "</span></div>")
                                }
                                return t = t.replace("{{itemList}}", i), t
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var t = this,
                                    n = this._dialog,
                                    i = this.option,
                                    a = this.callback;
                                n.on("click", ".item", function () {
                                    var t = e(this);
                                    n.find(".item").removeClass("active"), t.addClass("active");
                                    var i = t.find(".item-num").text();
                                    n.find(".text").val(i), n.find(".text").change()
                                }), n.on("click", ".btn-sub", function () {
                                    var e = parseInt(n.find(".text").val());
                                    if (e > i.total) {
                                        var o = location.pathname.split("/")[1];
                                        layer.closeAll();
                                        var r = window.comicPay;
                                        return r || (r = new ACGN.business.PayChapter({
                                            comicId: o,
                                            comicName: "11",
                                            comicPaid: 1,
                                            comicCoinFree: 1
                                        })), void r.payRecharge()
                                    }
                                    if (a) try {
                                        a.call(t, e)
                                    } catch (s) {
                                        t.close()
                                    } else t.close(), ACGN.business.msg('<span style="font-size:14px;">'.concat(i.thankStr, ' <i class="icon-detail-stone-message"></i> x ').concat(e, "</span>"))
                                }), n.on("click", ".btn-reduce", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    (t -= i.split) <= 1 && (t = 1), e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("click", ".btn-plus", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    t += i.split, e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("change", ".text", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    t > i.total ? n.find(".btn-sub").html('去充值<i class="ift-cat"></i>') : t <= 1 || !t ? (t = 1, e.val(t), n.find(".btn-sub").html('立即赞赏<i class="ift-cat"></i>')) : n.find(".btn-sub").html('立即赞赏<i class="ift-cat"></i>')
                                }), n.on("keyup", ".text", function (t) {
                                    var i = e(this);
                                    n.find(".active").removeClass("active"), i.trigger("change")
                                });
                                var o = this;
                                n.on("click", ".close", function () {
                                    o.close()
                                })
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = this,
                                    n = this._dialog;
                                e("body").append(n), this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: n,
                                    end: function () {
                                        t.close()
                                    }
                                })
                            }
                        }, {
                            key: "close",
                            value: function () {
                                this._dialog.remove(), layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    p = function () {
                        function t(n, i) {
                            (0, a["default"])(this, t);
                            var o = e.extend({}, s, n);
                            this.option = o, this.callback = i;
                            var r = this.template(),
                                l = e(r);
                            this._dialog = l, d.call(this, 1), this.bindEvent(), this.show(), this._dialog.find(".item:eq(0)").trigger("click")
                        }
                        return (0, o["default"])(t, [{
                            key: "template",
                            value: function () {
                                var e = this.option,
                                    t = '<div class="acgn-app-gift-dialog acgn-feather acgn-dialog"><div class="cat-head"></div><div class="bd"><div class="hd"> <span class="title">推荐</span><span class="subtitle">我的推荐票 </span><span class="num">{{total}}</span><i class="icon-comm-close close"></i></div><div class="content">{{itemList}}</div><div class="footer acgn-clearfix"><div><i class="ift-jianx ift-reduce btn-reduce"></i><input type="text" class="text" value="{{default}}"/><i class="ift-jiax btn-plus"></i></div><div><span class="btn-sub">立即投票<i class="ift-cat"></i></span></div></div></div></div>';
                                t = t.replace("{{total}}", e.total), t = t.replace("{{default}}", e["default"]);
                                for (var n = "", i = 0; i < e.list.length; i++) {
                                    var a = e.list[i];
                                    n += '<div class="item"><i class="icon-detail-recommend-dialog"></i><span class="item-num"><num>'.concat(a, "</num>").concat("全部" === a ? "" : "张", "</span></div>")
                                }
                                return t = t.replace("{{itemList}}", n), t
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var t = this,
                                    n = this._dialog,
                                    i = this.option,
                                    a = this.callback;
                                n.on("click", ".item", function () {
                                    var t = e(this);
                                    n.find(".item").removeClass("active"), t.addClass("active");
                                    var a = t.find("num").text();
                                    "全部" === a && (a = i.total), n.find(".text").val(a)
                                }), n.on("click", ".btn-sub", function () {
                                    var e = parseInt(n.find(".text").val());
                                    a ? a.call(t, e) : t.close()
                                }), n.on("click", ".btn-reduce", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    (t -= i.split) <= 1 && (t = 1), e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("click", ".btn-plus", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    t += i.split, e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("keyup", ".text", function (t) {
                                    var i = e(this);
                                    n.find(".active").removeClass("active"), i.trigger("change")
                                }), n.on("change", ".text", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    (t <= 1 || !t) && (t = 1, e.val(t))
                                });
                                var o = this;
                                n.on("click", ".close", function () {
                                    o.close()
                                })
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = this._dialog,
                                    n = this;
                                e("body").append(t), this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: t,
                                    end: function () {
                                        n.close()
                                    }
                                })
                            }
                        }, {
                            key: "close",
                            value: function () {
                                this._dialog.remove(), layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    h = function () {
                        function t(n, i) {
                            (0, a["default"])(this, t);
                            var o = e.extend({}, l, n);
                            this.option = o, this.callback = i;
                            var r = this.template(),
                                s = e(r);
                            this._dialog = s, d.call(this, 1), this.bindEvent(), this.show(), this._dialog.find(".item:eq(0)").trigger("click")
                        }
                        return (0, o["default"])(t, [{
                            key: "template",
                            value: function () {
                                var e = this.option,
                                    t = '<div class="acgn-app-gift-dialog acgn-month-ticket acgn-dialog"><div class="cat-head"></div><div class="bd"><div class="hd"> <span class="title">投月票</span><span class="subtitle">我的月票 </span><span class="num">{{total}}</span><i class="icon-comm-close close"></i></div><div class="content">{{itemList}}</div><div class="footer acgn-clearfix"><div><i class="ift-jianx ift-reduce btn-reduce"></i><input type="text" class="text" value="{{default}}"/><i class="ift-jiax btn-plus"></i></div><div><span class="btn-sub">立即投票<i class="ift-cat"></i></span></div></div></div></div>';
                                t = t.replace("{{total}}", e.total), t = t.replace("{{default}}", e["default"]);
                                for (var n = "", i = 0; i < e.list.length; i++) {
                                    var a = e.list[i];
                                    n += '<div class="item"><i class="icon-detail-monthticket-dialog"></i><span class="item-num"><num>'.concat(a, "全部" === a ? "</num></span></div>" : "</num>张</span></div>")
                                }
                                return t = t.replace("{{itemList}}", n), t
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var t = this,
                                    n = this._dialog,
                                    i = this.option,
                                    a = this.callback;
                                n.on("click", ".item", function () {
                                    var t = e(this);
                                    n.find(".item").removeClass("active"), t.addClass("active");
                                    var a = t.find("num").text();
                                    "全部" === a && (a = i.total), n.find(".text").val(a)
                                }), n.on("click", ".btn-sub", function () {
                                    var e = parseInt(n.find(".text").val());
                                    a ? a.call(t, e) : t.close()
                                }), n.on("click", ".btn-reduce", function () {
                                    var e = n.find(".text"),
                                        t = isNaN(Number(e.val())) ? 1 : Number(e.val());
                                    (t -= i.split) <= 0 && (t = 0), e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("click", ".btn-plus", function () {
                                    var e = n.find(".text"),
                                        t = isNaN(Number(e.val())) ? 1 : Number(e.val());
                                    t += i.split, e.val(t), n.find(".text").trigger("keyup")
                                }), n.on("keyup", ".text", function (t) {
                                    var i = e(this);
                                    n.find(".active").removeClass("active"), i.trigger("change")
                                }), n.on("change", ".text", function () {
                                    var e = n.find(".text"),
                                        t = parseInt(e.val());
                                    (t <= 1 || !t) && (t = 1, e.val(t))
                                }), n.on("click", ".close", function () {
                                    t.close()
                                })
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = this._dialog,
                                    n = this;
                                e("body").append(t), this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: t,
                                    end: function () {
                                        n.close()
                                    }
                                })
                            }
                        }, {
                            key: "close",
                            value: function () {
                                this._dialog.remove(), layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    v = function () {
                        function t(n, i) {
                            (0, a["default"])(this, t);
                            var o = e.extend({}, c, n);
                            this.option = o, this.callback = i;
                            var r = this.template(),
                                s = e(r);
                            this._dialog = s, d.call(this, 1), this.bindEvent(), this.show(), this._dialog.find(".item:eq(0)").trigger("click")
                        }
                        return (0, o["default"])(t, [{
                            key: "template",
                            value: function () {
                                for (var e = '<div class="acgn-app-gift-dialog acgn-present acgn-dialog"><div class="cat-head"></div><div class="bd"><div class="hd"> <span class="title">送给作者礼物</span><span class="subtitle">我的金币</span><span class="num">{{total}}</span><i class="icon-comm-close close"></i></div><div class="content">{{body}}</div><div class="footer acgn-clearfix"><div><i class="ift-jianx ift-reduce btn-reduce"></i><input type="text" class="text" value="{{default}}"/><i class="ift-jiax btn-plus"></i></div><div><span class="btn-sub">立即赠送<i class="ift-cat"></i></span></div></div></div></div>', t = this.option.total ? this.option.total : 0, n = this.option.giftList ? this.option.giftList : [], i = "", a = 0; a < n.length; a++) {
                                    var o = n[a],
                                        r = o.images + siteConf.image_size_suffix.head_cover;
                                    i += '<div class="item'.concat(a % 3 == 1 ? " center" : "", '" data-id="').concat(o.Gid, '" data-image="').concat(r, '">\n        <img class="xxmm" src="').concat(siteConf.staticRoot, 'images/comm/space.gif" data-src="').concat(r, '">\n        <div class="name">').concat(o.Gname, '</div>\n        <div class="coin"><i class="icon-detail-coin"></i>\n        <span class="coin-num">').concat(o.Gprice, "</span>\n        </div>\n        </div>")
                                }
                                return (e = (e = e.replace("{{body}}", i)).replace("{{default}}", 0)).replace("{{total}}", t)
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var t = this._dialog,
                                    n = this;
                                t.on("click", ".item", function () {
                                    var n = e(this),
                                        i = t.find(".content");
                                    if (n.hasClass("active")) {
                                        var a = n.find(".num"),
                                            o = a.text();
                                        (o = parseInt(o)) >= 0 ? o++ : o = 1, a.text(o), t.find(".text").val(o)
                                    } else {
                                        i.find(".num").remove(), i.find(".item").removeClass("active"), n.addClass("active");
                                        n.append('<div class="num">'.concat(1, "</div>")), t.find(".text").val(1)
                                    }
                                }), t.on("click", ".btn-sub", function () {
                                    var e = t.find(".active"),
                                        i = e.attr("data-id"),
                                        a = e.attr("data-image"),
                                        o = e.find(".coin").text(),
                                        r = t.find(".text").val();
                                    n.callback.call(n, {
                                        giftid: i,
                                        count: r,
                                        price: o,
                                        giftImage: a
                                    })
                                }), t.on("click", ".btn-reduce", function () {
                                    var e = t.find(".active");
                                    e.length > 1 && (e = e[0]);
                                    var n = e.find(".num").text();
                                    n = parseInt(n);
                                    var i = t.find(".text");
                                    --n > 0 || (n = 1), e.find(".num").text(n), i.val(n)
                                }), t.on("click", ".btn-plus", function () {
                                    var e = t.find(".active"),
                                        n = t.find(".text"),
                                        i = e.find(".num").text();
                                    (i = parseInt(i)) >= 0 ? i++ : i = 1, i > 99 && (i = 99), e.find(".num").text(i), n.val(i)
                                }), t.on("keyup", ".text", function (n) {
                                    var i = e(this),
                                        a = parseInt(i.val());
                                    a >= 0 ? (a > 99 && (a = 99), i.val(a), t.find(".active").find(".num").text(a)) : (i.val(1), t.find(".active").find(".num").text(1))
                                }), t.on("change", ".text", function (n) {
                                    var i = e(this),
                                        a = parseInt(i.val());
                                    a >= 0 ? (a > 99 && (a = 99), i.val(a), t.find(".active").find(".num").text(a)) : (i.val(1), t.find(".active").find(".num").text(1))
                                }), t.on("click", ".close", function () {
                                    n.close()
                                })
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = this._dialog;
                                e("body").append(t);
                                var n = this;
                                this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: t,
                                    end: function () {
                                        n.close()
                                    }
                                })
                            }
                        }, {
                            key: "close",
                            value: function () {
                                this._dialog.remove(), layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    m = function () {
                        function t(n, i) {
                            (0, a["default"])(this, t);
                            var o = e.extend({}, u, n);
                            for (var r in u.markData) o.markData[r] || (o.markData[r] = u.markData[r]);
                            this.option = o, this.callback = i;
                            var s = this.template(),
                                l = e(s);
                            this._dialog = l, this.bindEvent(), this.show()
                        }
                        return (0, o["default"])(t, [{
                            key: "template",
                            value: function () {
                                var e = '<div class="acgn-app-gift-dialog acgn-mark acgn-dialog"><div class="cat-head"></div><div class="bd"><div class="hd"> <span class="title">评分</span><span class="num">' + this.option.num + '</span> <span class="subtitle">人参与评分</span><i class="icon-comm-close close"></i>  </div><div class="content"><div class="mark-row"><span class="title">超酷</span><div class="process-row"><div class="process verygood" style="width:0;"></div><span class="process-num verygood-num">人</span></div></div><div class="mark-row"><span class="title">好看</span><div class="process-row"><div class="process good" style="width:0;"></div><span class="process-num good-num">人</span></div></div><div class="mark-row"><span class="title">一般</span><div class="process-row"><div class="process normal" style="width:0;"></div><span class="process-num normal-num">人</span></div></div><div class="mark-row"><span class="title">无聊</span><div class="process-row"><div class="process adjective" style="width:0;"></div><span class="process-num adjective-num">人</span></div></div><div class="mark-row"><span class="title">差劲</span><div class="process-row"><div class="process bad" style="width:0;"></div><span class="process-num bad-num">人</span></div></div></div><div class="footer acgn-clearfix"><span class="title">请评分</span><div class="mark-star star-row"><icon class="star"></icon><icon class="star"></icon><icon class="star"></icon><icon class="star"></icon><icon class="star"></icon></div><span class="score">0</span></div></div></div>';
                                return e
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var t = this,
                                    n = t._dialog;
                                n.on("mousemove", ".star", function (t) {
                                    var i = e(this),
                                        a = n.find(".star");
                                    a.removeClass("solid"), a.removeClass("half");
                                    var o = i.index(),
                                        r = 0,
                                        s = t.offsetX,
                                        l = i.width();
                                    e.each(a, function (t, n) {
                                        var i = e(this);
                                        t > o || (t < o ? (i.addClass("solid"), r++) : t === o && (s > l / 2 ? (i.addClass("solid"), r++) : s > 0 && s <= l / 2 && (i.addClass("half"), r += .5)))
                                    }), n.find(".score").text(r)
                                }), n.on("click", ".star", function (n) {
                                    var i = e(this),
                                        a = i.index(),
                                        o = n.offsetX,
                                        r = i.width();
                                    o > r / 2 ? a++ : o > 0 && o <= r / 2 && (a += .5), t.callback && t.callback.call(t, a)
                                }), n.on("mouseout", ".star-row", function () {
                                    var e = n.find(".star");
                                    e.removeClass("solid"), e.removeClass("half"), n.find(".score").text(0)
                                }), n.on("click", ".close", function () {
                                    t.close()
                                })
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var t = this._dialog,
                                    n = this.option,
                                    i = this;
                                e("body").append(t), this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: t,
                                    end: function () {
                                        i.close()
                                    }
                                });
                                var a = 0;
                                for (var o in n.markData) n.markData[o] > a && (a = n.markData[o]);
                                var r = {};
                                for (var s in n.markData) {
                                    var l = n.markData[s];
                                    (l = parseInt(l)) || (l = 0), r[s] = parseFloat(l) / a * 200, t.find("." + s).animate({
                                        width: r[s] > 0 ? r[s] + "px" : "0"
                                    }, 1e3);
                                    var c = e("." + s + "-num").text(l + "人");
                                    r[s] <= 0 && c.css({
                                        marginLeft: 0
                                    })
                                }
                            }
                        }, {
                            key: "close",
                            value: function () {
                                this._dialog.remove(), layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    g = function () {
                        function t(n) {
                            (0, a["default"])(this, t);
                            var i = this;
                            i.callback = n;
                            var o;
                            o = this.template(), window._share_conf = Object.assign({
                                images: ["//".concat(siteConf.domain, "/static/images/comm/logo.png")]
                            }, window.shareConf), ACGN.util.loadjs("//share.321mh.com/index.js?cdnversion=" + ~(-new Date / 36e5), {
                                async: !0,
                                callback: function () {
                                    var t = e("#dialogShareModel");
                                    if (t.length) i._dialog = t;
                                    else {
                                        var n = e(o);
                                        i._dialog = n, e("body").append(n)
                                    }
                                    window._acgn_share && _acgn_share.bindEvent(), i.bindEvent(), i.show()
                                }
                            })
                        }
                        return (0, o["default"])(t, [{
                            key: "bindEvent",
                            value: function () {
                                var e = this;
                                this._dialog.on("click", ".sharebox .item", function () {
                                    e.close(), layer.closeAll()
                                }), this._dialog.off("click", ".close"), this._dialog.on("click", ".close", function () {
                                    e.close()
                                })
                            }
                        }, {
                            key: "template",
                            value: function () {
                                return '<div id="dialogShareModel" class="acgn-app-gift-dialog">\n    <div class="cat-head"></div>\n    <div class="bd sharebox acgn-clearfix">\n        <div class="hd"><span class="title">分享</span><i class="icon-comm-close close"></i></div>\n        <ul class="acgn-share">\n          <li class="item" data-cmd="qq"><i class="acgn-share-ift-qq"></i><p>QQ</p></li>\n          <li class="item" data-cmd="wechat"><i class="acgn-share-ift-wechat"></i><p>微信</p></li>\n          <li class="item" data-cmd="sina"><i class="acgn-share-ift-sina"></i><p>微博</p></li>\n          <li class="item" data-cmd="qzone"><i class="acgn-share-ift-qzone"></i><p>QQ空间</p></li>\n          <li class="item" data-cmd="copy"><i class="acgn-share-ift-copy"></i><p>复制链接</p></li>\n        </ul>\n      </div>'
                            }
                        }, {
                            key: "show",
                            value: function () {
                                var e = this._dialog;
                                e.show(), this._layer = layer.open({
                                    type: 1,
                                    title: !1,
                                    shadeClose: !0,
                                    closeBtn: !1,
                                    maxWidth: 500,
                                    content: e,
                                    cancel: function (t, n) {
                                        return e.hide(), !0
                                    },
                                    end: function () {
                                        e.hide()
                                    }
                                })
                            }
                        }, {
                            key: "close",
                            value: function () {
                                layer.close(this._layer)
                            }
                        }]), t
                    }(),
                    y = {
                        appreciate: function (e, t) {
                            return new f(e, t)
                        },
                        feather: function (e, t) {
                            return new p(e, t)
                        },
                        monthTicket: function (e, t) {
                            return new h(e, t)
                        },
                        present: function (e, t) {
                            return new v(e, t)
                        },
                        mark: function (e, t) {
                            return new m(e, t)
                        },
                        share: function (e) {
                            return new g(e)
                        }
                    };
                t["default"] = y
            }).call(this, n("+2Rf"))
        },
        jtxb: function (e, t, n) {
            "use strict";
            var i = n("TqRt")(n("+2Rf"));

            function a(e) {
                this.opts = i["default"].extend({}, {
                    dest: 0,
                    speed: 500,
                    cb: null
                }, e), this.$el = (0, i["default"])("html, body")
            }

            function o(e, t) {
                var n = {
                    mode: "move",
                    pos: (0, i["default"])(window).height()
                };
                this.opts = i["default"].extend({}, n, t), this.$el = (0, i["default"])(e), this.scroll = new a(t), "move" === this.opts.mode ? this.$el.on("click", i["default"].proxy(this._move, this)) : this.$el.on("click", i["default"].proxy(this._go, this)), (0, i["default"])(window).on("scroll", i["default"].proxy(this._checkPosition, this)), i["default"].proxy(this._checkPosition, this)()
            }
            a.prototype = {
                move: function () {
                    var e = this.opts,
                        t = e.dest,
                        n = this.$el;
                    (0, i["default"])(window).scrollTop() !== t && (n.is(":animated") || n.animate({
                        scrollTop: t
                    }, e.speed, function () {
                        e.cb && e.cb()
                    }))
                },
                go: function () {
                    var e = this.opts.dest;
                    (0, i["default"])(window).scrollTop() !== e && (this.$el.scrollTop(e), this.opts.cb && this.opts.cb())
                }
            }, o.prototype = {
                _move: function () {
                    this.scroll.move()
                },
                _go: function () {
                    this.scroll.go()
                },
                _checkPosition: function () {
                    var e = this.$el;
                    (0, i["default"])(window).scrollTop() > this.opts.pos ? e.show() : e.hide()
                }
            }, i["default"].fn.extend({
                backtop: function (e) {
                    return this.each(function () {
                        new o(this, e)
                    })
                },
                scrollto: function () {
                    return this.each(function () {
                        new a(this, opts)
                    })
                }
            })
        },
        mVWd: function (e, t, n) {
            "use strict";
            (function (e) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = void 0, n("Vd3H"), n("eM6i"), n("91GP"), n("0l/t"), n("xfY5"), n("KKXr"), n("8+KV");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ"));

                function r(e) {
                    ACGN.business.header.getUserInfo({}, function (t, n) {
                        t || e(n)
                    })
                }
                var s = function () {
                    function t() {
                        (0, a["default"])(this, t), this.config = ACGN.config, this.util = ACGN.util, this.recordType = this.config.recordType
                    }
                    return (0, o["default"])(t, [{
                        key: "getStaticRecord",
                        value: function (e) {
                            var t = e ? e.comic_id : null,
                                n = ACGN.util.limitStore(this.config.recordType.history) || [];
                            if (t) {
                                var i = null;
                                return n.forEach(function (e, n) {
                                    String(t) === String(e.comic_id) && (i = e)
                                }), i || null
                            }
                            return n
                        }
                    }, {
                        key: "delUserRead",
                        value: function (e, t) {
                            var n = e.recordType,
                                i = e.url;
                            delete e.url, delete e.recordType, ACGN.ajax({
                                method: "post",
                                url: i,
                                data: e
                            }, function (i, a) {
                                if (i) ACGN.business.msg("删除失败，请重新操作！");
                                else {
                                    var o = ACGN.util.limitStore(n) || [];
                                    e.comic_id.split(",").forEach(function (e) {
                                        for (var t = 0, n = o.length; t < n; t++) {
                                            var i = o[t];
                                            if (Number(i.comic_id) === Number(e)) {
                                                o.splice(t, 1);
                                                break
                                            }
                                        }
                                    }), ACGN.util.limitStore(n, o, {
                                        expires: 24
                                    }), "function" == typeof t && t(null, "删除成功")
                                }
                            })
                        }
                    }, {
                        key: "batchSetUserRead",
                        value: function (e, t) {
                            for (var n = e.recordType, i = e.list, a = e.url, o = [], r = 0; r < i.length; r++) o.push(i[r].comic_id);
                            ACGN.ajax({
                                method: "post",
                                url: a,
                                data: {
                                    openid: e.openid,
                                    type: e.type,
                                    action: "add",
                                    comic_id: o.join(",")
                                }
                            }, function (e, a) {
                                if (e) "function" == typeof t && t("添加失败，请重新操作!");
                                else {
                                    var o = ACGN.util.limitStore(n) || [],
                                        r = {};
                                    o = (i = i.concat(o)).filter(function (e, t, n) {
                                        return !r[e.comic_id] && (r[e.comic_id] = !0, !0)
                                    }), ACGN.util.limitStore(n, o, {
                                        expires: 24
                                    }), "function" == typeof t && t(null, "已添加至 我的收藏!")
                                }
                            })
                        }
                    }, {
                        key: "getReadHistory",
                        value: function (e, t) {
                            var n = this.recordType;
                            this._getRecordByParam(Object.assign({}, e, {
                                type: n.history
                            }), t)
                        }
                    }, {
                        key: "getUserCollect",
                        value: function (e, t) {
                            var n = this.recordType;
                            this._getRecordByParam(Object.assign({}, e, {
                                type: n.collect
                            }), t)
                        }
                    }, {
                        key: "_getRecordByParam",
                        value: function (e, t) {
                            var n = this;
                            r(function (i) {
                                var a = ACGN.util.limitStore(e.type);
                                i && i.type && i.openid && !a ? n.getUserRecord({
                                    type: i.type,
                                    openid: i.openid
                                }, function (i, a, o) {
                                    e.type === o && (e.comic_id ? "function" == typeof t && t(i, n._filterItemComic(a, e.comic_id)) : "function" == typeof t && t(i, a || []))
                                }) : e.comic_id ? "function" == typeof t && t(null, n._filterItemComic(a, e.comic_id)) : "function" == typeof t && t(null, a)
                            })
                        }
                    }, {
                        key: "_filterItemComic",
                        value: function (e, t) {
                            var n = [];
                            return e && (n = e.filter(function (e) {
                                return Number(e.comic_id) === Number(t)
                            })), n[0] || null
                        }
                    }, {
                        key: "addReadHistory",
                        value: function (e) {
                            var t = this,
                                n = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                                i = arguments.length > 2 ? arguments[2] : undefined;
                            r(function (a) {
                                var o = t.recordType.history,
                                    r = (ACGN.util.limitStore(o) || []).filter(function (t) {
                                        return Number(t.comic_id) !== Number(e.comic_id)
                                    });
                                r.unshift(e), ACGN.util.limitStore(o, r, {
                                    expires: 24
                                }), window.ACGN.business.isLogin() && a.type && a.openid && n && ACGN.ajax({
                                    method: "post",
                                    url: "https://adduserread.321mh.com/app_api/v5/adduserread",
                                    data: Object.assign({}, e, {
                                        type: a.type,
                                        openid: a.openid,
                                        userauth: a.auth_data.authcode
                                    })
                                }, function (e, t) {
                                    e || "function" == typeof i && i(e, t)
                                })
                            })
                        }
                    }, {
                        key: "setUserCollect",
                        value: function (e, t) {
                            var n = this;
                            r(function (i) {
                                var a = n.recordType.collect,
                                    o = ACGN.util.limitStore(a),
                                    r = e.comic_id,
                                    s = "add",
                                    l = "",
                                    c = o.filter(function (e) {
                                        return e.comic_id === r
                                    });
                                if (c.length) s = "del", l = "取消收藏成功！", c = o.filter(function (e) {
                                    return e.comic_id !== r
                                });
                                else {
                                    s = "add", l = "收藏成功！";
                                    var u = {};
                                    u.comic_id = r, u.comic_name = e.comic_name, u.last_chapter_newid = e.last_chapter_newid, u.last_chapter_name = e.last_chapter_name, u.read_time = Date.now(), u.update_time = e.update_time, o.unshift(u), c = o
                                }
                                if (i.type && i.openid) ACGN.ajax({
                                    url: "/api/setusercollect",
                                    method: "post",
                                    data: {
                                        type: i.type,
                                        openid: i.openid,
                                        action: s,
                                        comic_id: r
                                    }
                                }, function (e, n) {
                                    if (e) return l = "操作错误，请重新操作", void("function" === t ? t(l) : ACGN.business.msg(l));
                                    ACGN.util.limitStore(a, c, {
                                        expires: 24
                                    }), "function" == typeof t ? t(null, s) : ACGN.business.msg(l)
                                });
                                else {
                                    if ("function" == typeof t) return t(null, s), !1;
                                    ACGN.business.msg(l), ACGN.util.limitStore(a, c, {
                                        expires: 24
                                    })
                                }
                            })
                        }
                    }, {
                        key: "getUserRecord",
                        value: function (t, n) {
                            var i = this,
                                a = this.recordType,
                                o = !1;
                            for (var r in a) {
                                var s = a[r],
                                    l = ACGN.util.limitStore(s);
                                if (!l) {
                                    o = !1;
                                    break
                                }
                                o = !0, "function" == typeof n && n(null, l, s)
                            }
                            if (!o && t.openid && t.type) {
                                ACGN.ajax({
                                    url: "/api/getuserrecord",
                                    data: t,
                                    method: "get",
                                    dataType: "json"
                                }, function (t, o) {
                                    if (t) n(t);
                                    else {
                                        var r = function (t) {
                                            var r = a[t],
                                                s = [],
                                                l = o[r];
                                            l && e.isArray(l) && l.forEach(function (e) {
                                                s.push(e)
                                            }), i.util.limitStore(r, s, {
                                                expires: 24
                                            }), "function" == typeof n && n(null, l, r)
                                        };
                                        for (var s in a) r(s)
                                    }
                                })
                            }
                        }
                    }, {
                        key: "getCollectMSG",
                        value: function (e, t) {
                            ACGN.ajax({
                                url: "/api/getcollectmsg",
                                method: "get",
                                data: e
                            }, t)
                        }
                    }, {
                        key: "installPostData",
                        value: function (e) {
                            var t = this,
                                n = {},
                                i = function (i) {
                                    var a = e[i],
                                        o = t.util.limitStore(a) || [],
                                        r = "";
                                    switch (a) {
                                        case e.collect:
                                            r = "user_collect";
                                            break;
                                        case e.history:
                                            r = "user_read"
                                    }
                                    o.length && (n[r] = [], o.forEach(function (e) {
                                        n[r].push(t.getPostField(a, e))
                                    }))
                                };
                            for (var a in e) i(a);
                            return JSON.stringify(n)
                        }
                    }, {
                        key: "getPostField",
                        value: function (e, t) {
                            switch (e) {
                                case this.recordType.collect:
                                    return {
                                        comic_id: t.comic_id, chapter_id: t.chapter_id, readtime: t.readtime, readpage: t.readpage
                                    };
                                case this.recordType.history:
                                    return {
                                        comic_id: t.comic_id, addtime: t.addtime
                                    }
                            }
                        }
                    }, {
                        key: "collectDOMList",
                        value: function (e) {
                            var t = "";
                            return e.forEach(function (e) {
                                t += "".concat(e)
                            }), t
                        }
                    }, {
                        key: "readHistoryDOMList",
                        value: function (e) {
                            var t = this,
                                n = siteConf.staticRoot,
                                i = "";
                            return e.forEach(function (e, a) {
                                var o = e.update_time - e.read_time > 0 && (new Date).getTime() - e.update_time > 1296e6;
                                if (a < 3) {
                                    var r = t.util.getLastChapterId(siteConf, e),
                                        s = t.util.getComicId(siteConf, e),
                                        l = t.util.getChapterId(siteConf, e);
                                    l = l === e.chapter_id ? "" : l, i += '<li class="book-item">\n          <div class="book-info">\n            <a href="/'.concat(s, '/" target="_blank">\n              <img class="img" src="').concat(n, 'images/comm/space.gif" data-src="').concat(ACGN.util.formatImgSrc(siteConf, e.comic_id), '">\n            </a>\n            <h4 class="title">\n              <a href="/').concat(s, '/" target="_blank">\n                ').concat(e.comic_name, '\n              </a>\n            </h4>\n            <p class="desc isnew">\n            <a href="/').concat(s, "/").concat(r ? r + ".html" : "", '" target="_blank">\n              更至: ').concat(e.last_chapter_name || siteConf.language.unknown, "\n              ").concat(o ? '<span class="desc-hint"><i class="ift-tip-new"></i></span>' : "", '\n            </a>\n            </p>\n           <p class="desc">\n            <a href="/').concat(s, "/").concat(l ? l + ".html" : "", '" target="_blank">\n              已读: ').concat(e.chapter_name || siteConf.language.unknown, "\n            </a>\n           </p>\n          </div>\n          </li>")
                                }
                            }), i
                        }
                    }, {
                        key: "readCollectDOMList",
                        value: function (e) {
                            var t = this,
                                n = siteConf.staticRoot,
                                i = "";
                            return e.forEach(function (e, a) {
                                var o = e.update_time - e.read_time > 0;
                                if (a < 3) {
                                    var r = t.util.getLastChapterId(siteConf, e),
                                        s = t.util.getComicId(siteConf, e);
                                    i += '<li class="book-item collect-item">\n          <div class="book-info">\n            <a href="/'.concat(s, '/" target="_blank">\n              <img class="img" src="').concat(n, 'images/comm/space.gif" data-src="').concat(ACGN.util.formatImgSrc(siteConf, e.comic_id), '">\n            </a>\n            <h4 class="title">\n              <a href="/').concat(s, '/" target="_blank">\n              ').concat(e.comic_name, '\n              </a>\n            </h4>\n            <p class="desc isnew">\n            <a href="/').concat(s, "/").concat(r ? r + ".html" : "", '" target="_blank">\n              更至: ').concat(e.last_chapter_name || siteConf.language.unknown, "\n              ").concat(o ? '<span class="desc-hint"><i class="ift-tip-new"></i></span>' : "", "\n            </a>\n            </p>\n          </div>\n        </li>")
                                }
                            }), i
                        }
                    }, {
                        key: "sortRecord",
                        value: function (e) {
                            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "update_time",
                                n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
                            return e.sort(function (e, i) {
                                return n ? i[t] - e[t] : e[t] - i[t]
                            })
                        }
                    }, {
                        key: "recordDomHanddle",
                        value: function (e) {
                            e.len ? (e.recordListBox.show(), e.recordNone.hide(), e.recordCount.text(e.len)) : (e.recordListBox.hide(), e.recordNone.show())
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            e(function () {
                                var n = e("#J_allCollect");
                                t.isAllCollect = n.length, t.isAllCollect && (t.$bookNone = e("#J_bookNone"), t.$bookshelfBox = e("#J_bookshelfBox"), t.$bookshelfList = e("#J_bookshelfList"), t.$bookshelfCount = e("#J_bookshelfCount"), t.$gotoHistory = e("#J_gotoHistory"), t.$historyNone = e("#J_historyNone"), t.$historyListBox = e("#J_historyListBox"), t.$historyList = e("#J_historyList"), t.$historyCount = e("#J_historyCount"), t.refreshCollect(), t.isAllCollect && n.on("click", function () {
                                    r(function (e) {
                                        if (e) {
                                            window.open("/uc/bookrack.html#collect")
                                        } else ACGN.layerLogin()
                                    })
                                }), t.$gotoHistory.length && t.$gotoHistory.on("click", function () {
                                    r(function (e) {
                                        if (e) {
                                            window.open("/uc/bookrack.html#history")
                                        } else ACGN.layerLogin()
                                    })
                                }))
                            })
                        }
                    }, {
                        key: "refreshCollect",
                        value: function (t) {
                            var n = this;
                            if (!n.isAllCollect && !t) return !1;
                            n.getUserCollect(null, function (t, i) {
                                if (t || !i) return n.$bookshelfList && n.$bookshelfList.html(n.readCollectDOMList([])), n.$bookshelfList && n.recordDomHanddle({
                                    len: 0,
                                    recordNone: n.$bookNone,
                                    recordListBox: n.$bookshelfBox,
                                    recordCount: n.$bookshelfCount
                                }), n.$historyList && n.$historyList.html(n.readHistoryDOMList([])), void(n.$historyList && n.recordDomHanddle({
                                    len: 0,
                                    recordNone: n.$historyNone,
                                    recordListBox: n.$historyListBox,
                                    recordCount: n.$historyCount
                                }));
                                n.$bookshelfBox && n.$bookshelfBox.length && e.isArray(i) && ((i = i || []).sort(function (e, t) {
                                    return t.read_time - e.read_time
                                }), n.$bookshelfList.html(n.readCollectDOMList(i)), n.recordDomHanddle({
                                    len: i.length,
                                    recordNone: n.$bookNone,
                                    recordListBox: n.$bookshelfBox,
                                    recordCount: n.$bookshelfCount
                                })), n.$historyListBox && n.$historyListBox.length && n.getReadHistory(null, function (t, i) {
                                    e.isArray(i) && (i.sort(function (e, t) {
                                        return t.read_time - e.read_time
                                    }), n.$historyList.html(n.readHistoryDOMList(i)), n.recordDomHanddle({
                                        len: i.length,
                                        recordNone: n.$historyNone,
                                        recordListBox: n.$historyListBox,
                                        recordCount: n.$historyCount
                                    }))
                                })
                            })
                        }
                    }]), t
                }();
                t["default"] = s
            }).call(this, n("+2Rf"))
        },
        oFhQ: function (e, t, n) {
            "use strict";
            (function (e, t, i) {
                var a = n("TqRt");
                n("V+eJ");
                var o = a(n("cDf5"));
                n("91GP"), n("Z+BX");
                var r = a(n("E2g8"));
                n("+2Rf"), n("alyQ"), n("JB25"), n("vkoD"), n("3Umg");
                var s = a(n("0tR4"));
                n("jtxb"), n("EZfX");
                var l = a(n("a2c0")),
                    c = a(n("ixR2")),
                    u = a(n("Xucm")),
                    d = a(n("zc8R")),
                    f = a(n("mVWd")),
                    p = a(n("/CXk")),
                    h = a(n("HlP2")),
                    v = a(n("f+/7"));
                "undefined" == typeof window.Promise && (window.Promise = r["default"]), window.Swiper = s["default"];
                var m = JSON.parse(JSON.stringify(u["default"]));

                function g(e, t) {
                    var n = window.siteConf,
                        a = n.product_id,
                        r = n.platformname,
                        s = n.productname,
                        l = Object.assign({}, {
                            product_id: a,
                            productname: s,
                            platformname: r
                        }, e.data);
                    e.data = l;
                    var c = e.isResponse;
                    c && delete e.isResponse, e = Object.assign({
                        success: function (e) {
                            c ? "function" == typeof t && t(null, e) : 0 === e.status ? "function" == typeof t && t(null, e.data) : "function" == typeof t && t("object" === (0, o["default"])(e) ? e.message || e.msg : e)
                        },
                        error: function (e) {
                            "function" == typeof t && t(window.siteConf.language.netError)
                        }
                    }, e), i.ajax(e)
                }
                l["default"].lazyload(m.lazyload), window.ACGN = {
                    logout: function () {
                        var e = this,
                            t = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
                        delete ACGN.userInfo, ACGN.util.limitStore(m.recordType.history, null), ACGN.util.limitStore(m.recordType.collect, null), t && ACGN.ajax({
                            url: "/login/logout/",
                            cache: !1
                        }, function (t, n) {
                            e.isIE > 8 || (c["default"].header.getUserInfo(function () {
                                c["default"].comicRecord.init(), c["default"].comicRecord.refreshCollect(!0)
                            }), /^\/(uc|user)/.test(location.pathname) ? location.href = "/" : window.location.reload())
                        })
                    },
                    layerLogin: function () {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                                title: "请登录后操作哦"
                            },
                            t = layer.open({
                                type: 1,
                                title: !1,
                                closeBtn: !1,
                                shade: .8,
                                area: ["871px", "571px"],
                                content: '<div class="login-container">\n      <div class="login-header">\n      <div class="login-title">\n      <span class="title">'.concat(e.title, '</span>\n      </div>\n      <i class="icon-comm-close-thin icon-pop-comm-close" id="J_login_close_btn"></i>\n      </div>\n      <iframe src="/login.htm?iframe=true" scrolling="no" style="height: 505px; display:block; border: none;width: 100%;"></iframe>\n      </div>'),
                                end: function () {
                                    try {
                                        window.comicPay.evtCancelPay()
                                    } catch (e) {}
                                }
                            });
                        layer.style(t, {
                            backgroundColor: "#fff"
                        }), i("body").off("click", "#J_login_close_btn"), i("body").on("click", "#J_login_close_btn", function () {
                            layer.close(t)
                        })
                    },
                    layer: layer,
                    util: l["default"],
                    business: c["default"],
                    config: u["default"],
                    ejs: ejs,
                    ajax: function (e, t) {
                        h["default"].filterRequest(e, t, g)
                    },
                    model: d["default"],
                    context: {}
                };
                var y = new f["default"];
                window.ACGN.business.comicRecord = y;
                var w = location.href;
                w && w.indexOf("login") <= -1 && c["default"].header.getUserInfo(function (e, t) {}), i(function () {
                    ACGN.$eventHub = i(document), i("#J_backtop").backtop();
                    var e, t = document.referrer,
                        n = location.hash;
                    try {
                        e = i(n)
                    } catch (s) {}
                    if ("/" === location.pathname) {
                        var a = ["#update", "#rank"].join("");
                        if (t !== location.href && a.indexOf(n) > -1 && e) {
                            var o = i(".nav-menu .nav-item"),
                                r = o.eq(0);
                            switch (n) {
                                case "#update":
                                    r = o.eq(1);
                                    break;
                                case "#rank":
                                    r = o.eq(2)
                            }
                            r.addClass("active").siblings(".nav-item").removeClass("active")
                        }
                    }
                    e && e.offset() && i("html,body").animate({
                        scrollTop: e.offset().top - i(".acgn-model-header").height()
                    }, {
                        queue: !1,
                        duration: 1e3
                    }), i("body").on("click", 'a[href^="/#"],a[href^="#"]', function (e) {
                        i(this).hasClass("nav-item") && i(this).addClass("active").siblings(".nav-item").removeClass("active");
                        var t = 0;
                        ["#comments", "#recommend", "#detail-chapter"].join("").indexOf(this.hash) > -1 && (t = 40);
                        var n = i(this.hash);
                        n.length && (e.preventDefault(), n && n.offset() && i("html,body").animate({
                            scrollTop: n.offset().top - i(".acgn-model-header").height() - t
                        }, {
                            queue: !1,
                            duration: 1e3
                        }))
                    }).on("click", ".J_contact", function () {
                        p["default"].show()
                    }), i(".scroll").scrollbar(), y.init(), c["default"].header.init(), new v["default"]
                })
            }).call(this, n("+2Rf"), n("+2Rf"), n("+2Rf"))
        },
        "ouO+": function (e, t, n) {
            "use strict";
            var i = n("TqRt")(n("cDf5"));
            e.exports = function (e) {
                var t = (0, i["default"])(e);
                return !!e && ("object" == t || "function" == t)
            }
        },
        q38X: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0;
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                r = new(function () {
                    function e() {
                        (0, a["default"])(this, e)
                    }
                    return (0, o["default"])(e, [{
                        key: "log",
                        value: function () {
                            Object({
                                NODE_ENV: "production"
                            }).EnabelFlyerLog
                        }
                    }]), e
                }());
            t["default"] = r
        },
        snKr: function (e, t, n) {
            var i, a, o;
            a = [n("+2Rf")], (o = "function" == typeof (i = function (e) {
                "use strict";
                var t = {
                    data: {
                        index: 0,
                        name: "scrollbar"
                    },
                    firefox: /firefox/i.test(navigator.userAgent),
                    macosx: /mac/i.test(navigator.platform),
                    msedge: /edge\/\d+/i.test(navigator.userAgent),
                    msie: /(msie|trident)/i.test(navigator.userAgent),
                    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
                    overlay: null,
                    scroll: null,
                    scrolls: [],
                    webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
                };
                t.scrolls.add = function (e) {
                    this.remove(e).push(e)
                }, t.scrolls.remove = function (t) {
                    for (; e.inArray(t, this) >= 0;) this.splice(e.inArray(t, this), 1);
                    return this
                };
                var n = {
                        autoScrollSize: !0,
                        autoUpdate: !0,
                        debug: !1,
                        disableBodyScroll: !1,
                        duration: 200,
                        ignoreMobile: !1,
                        ignoreOverlay: !1,
                        isRtl: !1,
                        scrollStep: 30,
                        showArrows: !1,
                        stepScrolling: !0,
                        scrollx: null,
                        scrolly: null,
                        onDestroy: null,
                        onFallback: null,
                        onInit: null,
                        onScroll: null,
                        onUpdate: null
                    },
                    i = function (i) {
                        var a;
                        t.scroll || (t.overlay = !((a = l(!0)).height || a.width), t.scroll = l(), s(), e(window).resize(function () {
                            var e = !1;
                            if (t.scroll && (t.scroll.height || t.scroll.width)) {
                                var n = l();
                                n.height === t.scroll.height && n.width === t.scroll.width || (t.scroll = n, e = !0)
                            }
                            s(e)
                        })), this.container = i, this.namespace = ".scrollbar_" + t.data.index++, this.options = e.extend({}, n, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, i.data(t.data.name, this), t.scrolls.add(this)
                    };
                i.prototype = {
                    destroy: function () {
                        if (this.wrapper) {
                            this.container.removeData(t.data.name), t.scrolls.remove(this);
                            var n = this.container.scrollLeft(),
                                i = this.container.scrollTop();
                            this.container.insertBefore(this.wrapper).css({
                                height: "",
                                margin: "",
                                "max-height": ""
                            }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(n).scrollTop(i), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), e(document).add("body").off(this.namespace), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
                        }
                    },
                    init: function (n) {
                        var i = this,
                            a = this.container,
                            o = this.containerWrapper || a,
                            r = this.namespace,
                            s = e.extend(this.options, n || {}),
                            l = {
                                x: this.scrollx,
                                y: this.scrolly
                            },
                            u = this.wrapper,
                            d = {},
                            f = {
                                scrollLeft: a.scrollLeft(),
                                scrollTop: a.scrollTop()
                            };
                        if (t.mobile && s.ignoreMobile || t.overlay && s.ignoreOverlay || t.macosx && !t.webkit) return e.isFunction(s.onFallback) && s.onFallback.apply(this, [a]), !1;
                        if (u)(d = {
                            height: "auto",
                            "margin-bottom": -1 * t.scroll.height + "px",
                            "max-height": ""
                        })[s.isRtl ? "margin-left" : "margin-right"] = -1 * t.scroll.width + "px", o.css(d);
                        else {
                            if (this.wrapper = u = e("<div>").addClass("scroll-wrapper").addClass(a.attr("class")).css("position", "absolute" === a.css("position") ? "absolute" : "relative").insertBefore(a).append(a), s.isRtl && u.addClass("scroll--rtl"), a.is("textarea") && (this.containerWrapper = o = e("<div>").insertBefore(a).append(a), u.addClass("scroll-textarea")), (d = {
                                    height: "auto",
                                    "margin-bottom": -1 * t.scroll.height + "px",
                                    "max-height": ""
                                })[s.isRtl ? "margin-left" : "margin-right"] = -1 * t.scroll.width + "px", o.addClass("scroll-content").css(d), a.on("scroll" + r, function (n) {
                                    var o = a.scrollLeft(),
                                        r = a.scrollTop();
                                    if (s.isRtl) switch (!0) {
                                        case t.firefox:
                                            o = Math.abs(o);
                                        case t.msedge || t.msie:
                                            o = a[0].scrollWidth - a[0].clientWidth - o
                                    }
                                    e.isFunction(s.onScroll) && s.onScroll.call(i, {
                                        maxScroll: l.y.maxScrollOffset,
                                        scroll: r,
                                        size: l.y.size,
                                        visible: l.y.visible
                                    }, {
                                        maxScroll: l.x.maxScrollOffset,
                                        scroll: o,
                                        size: l.x.size,
                                        visible: l.x.visible
                                    }), l.x.isVisible && l.x.scroll.bar.css("left", o * l.x.kx + "px"), l.y.isVisible && l.y.scroll.bar.css("top", r * l.y.kx + "px")
                                }), u.on("scroll" + r, function () {
                                    u.scrollTop(0).scrollLeft(0)
                                }), s.disableBodyScroll) {
                                var p = function (e) {
                                    c(e) ? l.y.isVisible && l.y.mousewheel(e) : l.x.isVisible && l.x.mousewheel(e)
                                };
                                u.on("MozMousePixelScroll" + r, p), u.on("mousewheel" + r, p), t.mobile && u.on("touchstart" + r, function (t) {
                                    var n = t.originalEvent.touches && t.originalEvent.touches[0] || t,
                                        i = {
                                            pageX: n.pageX,
                                            pageY: n.pageY
                                        },
                                        o = {
                                            left: a.scrollLeft(),
                                            top: a.scrollTop()
                                        };
                                    e(document).on("touchmove" + r, function (e) {
                                        var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
                                        a.scrollLeft(o.left + i.pageX - t.pageX), a.scrollTop(o.top + i.pageY - t.pageY), e.preventDefault()
                                    }), e(document).on("touchend" + r, function () {
                                        e(document).off(r)
                                    })
                                })
                            }
                            e.isFunction(s.onInit) && s.onInit.apply(this, [a])
                        }
                        e.each(l, function (n, o) {
                            var u = null,
                                d = 1,
                                f = "x" === n ? "scrollLeft" : "scrollTop",
                                p = s.scrollStep,
                                h = function () {
                                    var e = a[f]();
                                    a[f](e + p), 1 == d && e + p >= v && (e = a[f]()), -1 == d && e + p <= v && (e = a[f]()), a[f]() == e && u && u()
                                },
                                v = 0;
                            o.scroll || (o.scroll = i._getScroll(s["scroll" + n]).addClass("scroll-" + n), s.showArrows && o.scroll.addClass("scroll-element_arrows_visible"), o.mousewheel = function (e) {
                                if (!o.isVisible || "x" === n && c(e)) return !0;
                                if ("y" === n && !c(e)) return l.x.mousewheel(e), !0;
                                var t = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail,
                                    r = o.size - o.visible - o.offset;
                                return t || ("x" === n && e.originalEvent.deltaX ? t = 40 * e.originalEvent.deltaX : "y" === n && e.originalEvent.deltaY && (t = 40 * e.originalEvent.deltaY)), (t > 0 && v < r || t < 0 && v > 0) && ((v += t) < 0 && (v = 0), v > r && (v = r), i.scrollTo = i.scrollTo || {}, i.scrollTo[f] = v, setTimeout(function () {
                                    i.scrollTo && (a.stop().animate(i.scrollTo, 240, "linear", function () {
                                        v = a[f]()
                                    }), i.scrollTo = null)
                                }, 1)), e.preventDefault(), !1
                            }, o.scroll.on("MozMousePixelScroll" + r, o.mousewheel).on("mousewheel" + r, o.mousewheel).on("mouseenter" + r, function () {
                                v = a[f]()
                            }), o.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + r, function (r) {
                                if (1 != r.which) return !0;
                                d = 1;
                                var l = {
                                        eventOffset: r["x" === n ? "pageX" : "pageY"],
                                        maxScrollValue: o.size - o.visible - o.offset,
                                        scrollbarOffset: o.scroll.bar.offset()["x" === n ? "left" : "top"],
                                        scrollbarSize: o.scroll.bar["x" === n ? "outerWidth" : "outerHeight"]()
                                    },
                                    c = 0,
                                    m = 0;
                                if (e(this).hasClass("scroll-arrow")) {
                                    if (d = e(this).hasClass("scroll-arrow_more") ? 1 : -1, p = s.scrollStep * d, v = d > 0 ? l.maxScrollValue : 0, s.isRtl) switch (!0) {
                                        case t.firefox:
                                            v = d > 0 ? 0 : -1 * l.maxScrollValue;
                                            break;
                                        case t.msie || t.msedge:
                                    }
                                } else d = l.eventOffset > l.scrollbarOffset + l.scrollbarSize ? 1 : l.eventOffset < l.scrollbarOffset ? -1 : 0, "x" === n && s.isRtl && (t.msie || t.msedge) && (d *= -1), p = Math.round(.75 * o.visible) * d, v = l.eventOffset - l.scrollbarOffset - (s.stepScrolling ? 1 == d ? l.scrollbarSize : 0 : Math.round(l.scrollbarSize / 2)), v = a[f]() + v / o.kx;
                                return i.scrollTo = i.scrollTo || {}, i.scrollTo[f] = s.stepScrolling ? a[f]() + p : v, s.stepScrolling && (u = function () {
                                    v = a[f](), clearInterval(m), clearTimeout(c), c = 0, m = 0
                                }, c = setTimeout(function () {
                                    m = setInterval(h, 40)
                                }, s.duration + 100)), setTimeout(function () {
                                    i.scrollTo && (a.animate(i.scrollTo, s.duration), i.scrollTo = null)
                                }, 1), i._handleMouseDown(u, r)
                            }), o.scroll.bar.on("mousedown" + r, function (l) {
                                if (1 != l.which) return !0;
                                var c = l["x" === n ? "pageX" : "pageY"],
                                    u = a[f]();
                                return o.scroll.addClass("scroll-draggable"), e(document).on("mousemove" + r, function (e) {
                                    var i = parseInt((e["x" === n ? "pageX" : "pageY"] - c) / o.kx, 10);
                                    "x" === n && s.isRtl && (t.msie || t.msedge) && (i *= -1), a[f](u + i)
                                }), i._handleMouseDown(function () {
                                    o.scroll.removeClass("scroll-draggable"), v = a[f]()
                                }, l)
                            }))
                        }), e.each(l, function (e, t) {
                            var n = "scroll-scroll" + e + "_visible",
                                i = "x" == e ? l.y : l.x;
                            t.scroll.removeClass(n), i.scroll.removeClass(n), o.removeClass(n)
                        }), e.each(l, function (t, n) {
                            e.extend(n, "x" == t ? {
                                offset: parseInt(a.css("left"), 10) || 0,
                                size: a.prop("scrollWidth"),
                                visible: u.width()
                            } : {
                                offset: parseInt(a.css("top"), 10) || 0,
                                size: a.prop("scrollHeight"),
                                visible: u.height()
                            })
                        }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), e.isFunction(s.onUpdate) && s.onUpdate.apply(this, [a]), e.each(l, function (e, t) {
                            var n = "x" === e ? "left" : "top",
                                i = "x" === e ? "outerWidth" : "outerHeight",
                                o = "x" === e ? "width" : "height",
                                r = parseInt(a.css(n), 10) || 0,
                                l = t.size,
                                c = t.visible + r,
                                u = t.scroll.size[i]() + (parseInt(t.scroll.size.css(n), 10) || 0);
                            s.autoScrollSize && (t.scrollbarSize = parseInt(u * c / l, 10), t.scroll.bar.css(o, t.scrollbarSize + "px")), t.scrollbarSize = t.scroll.bar[i](), t.kx = (u - t.scrollbarSize) / (l - c) || 1, t.maxScrollOffset = l - c
                        }), a.scrollLeft(f.scrollLeft).scrollTop(f.scrollTop).trigger("scroll")
                    },
                    _getScroll: function (t) {
                        var n = {
                            advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                            simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
                        };
                        return n[t] && (t = n[t]), t || (t = n.simple), t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t), e.extend(t, {
                            bar: t.find(".scroll-bar"),
                            size: t.find(".scroll-element_size"),
                            track: t.find(".scroll-element_track")
                        }), t
                    },
                    _handleMouseDown: function (t, n) {
                        var i = this.namespace;
                        return e(document).on("blur" + i, function () {
                            e(document).add("body").off(i), t && t()
                        }), e(document).on("dragstart" + i, function (e) {
                            return e.preventDefault(), !1
                        }), e(document).on("mouseup" + i, function () {
                            e(document).add("body").off(i), t && t()
                        }), e("body").on("selectstart" + i, function (e) {
                            return e.preventDefault(), !1
                        }), n && n.preventDefault(), !1
                    },
                    _updateScroll: function (n, i) {
                        var a = this.container,
                            o = this.containerWrapper || a,
                            r = "scroll-scroll" + n + "_visible",
                            s = "x" === n ? this.scrolly : this.scrollx,
                            l = parseInt(this.container.css("x" === n ? "left" : "top"), 10) || 0,
                            c = this.wrapper,
                            u = i.size,
                            d = i.visible + l;
                        i.isVisible = u - d > 1, i.isVisible ? (i.scroll.addClass(r), s.scroll.addClass(r), o.addClass(r)) : (i.scroll.removeClass(r), s.scroll.removeClass(r), o.removeClass(r)), "y" === n && (a.is("textarea") || u < d ? o.css({
                            height: d + t.scroll.height + "px",
                            "max-height": "none"
                        }) : o.css({
                            "max-height": d + t.scroll.height + "px"
                        })), i.size == a.prop("scrollWidth") && s.size == a.prop("scrollHeight") && i.visible == c.width() && s.visible == c.height() && i.offset == (parseInt(a.css("left"), 10) || 0) && s.offset == (parseInt(a.css("top"), 10) || 0) || (e.extend(this.scrollx, {
                            offset: parseInt(a.css("left"), 10) || 0,
                            size: a.prop("scrollWidth"),
                            visible: c.width()
                        }), e.extend(this.scrolly, {
                            offset: parseInt(a.css("top"), 10) || 0,
                            size: this.container.prop("scrollHeight"),
                            visible: c.height()
                        }), this._updateScroll("x" === n ? "y" : "x", s))
                    }
                };
                var a = i;
                e.fn.scrollbar = function (n, i) {
                    return "string" != typeof n && (i = n, n = "init"), void 0 === i && (i = []), e.isArray(i) || (i = [i]), this.not("body, .scroll-wrapper").each(function () {
                        var o = e(this),
                            r = o.data(t.data.name);
                        (r || "init" === n) && (r || (r = new a(o)), r[n] && r[n].apply(r, i))
                    }), this
                }, e.fn.scrollbar.options = n;
                var o, r, s = (o = 0, function (e) {
                    var n, i, a, r, l, c, u;
                    for (n = 0; n < t.scrolls.length; n++) r = t.scrolls[n], i = r.container, a = r.options, l = r.wrapper, c = r.scrollx, u = r.scrolly, (e || a.autoUpdate && l && l.is(":visible") && (i.prop("scrollWidth") != c.size || i.prop("scrollHeight") != u.size || l.width() != c.visible || l.height() != u.visible)) && (r.init(), a.debug && window.console);
                    clearTimeout(o), o = setTimeout(s, 300)
                });

                function l(n) {
                    if (t.webkit && !n) return {
                        height: 0,
                        width: 0
                    };
                    if (!t.data.outer) {
                        var i = {
                            border: "none",
                            "box-sizing": "content-box",
                            height: "200px",
                            margin: "0",
                            padding: "0",
                            width: "200px"
                        };
                        t.data.inner = e("<div>").css(e.extend({}, i)), t.data.outer = e("<div>").css(e.extend({
                            left: "-1000px",
                            overflow: "scroll",
                            position: "absolute",
                            top: "-1000px"
                        }, i)).append(t.data.inner).appendTo("body")
                    }
                    return t.data.outer.scrollLeft(1e3).scrollTop(1e3), {
                        height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0),
                        width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0)
                    }
                }

                function c(e) {
                    var t = e.originalEvent;
                    return !(t.axis && t.axis === t.HORIZONTAL_AXIS || t.wheelDeltaX)
                }
                window.angular && (r = window.angular).module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
                    var e = n;
                    return {
                        setOptions: function (t) {
                            r.extend(e, t)
                        },
                        $get: function () {
                            return {
                                options: r.copy(e)
                            }
                        }
                    }
                }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (e, t) {
                    return {
                        restrict: "AC",
                        link: function (n, i, a) {
                            var o = t(a.jqueryScrollbar),
                                r = o(n);
                            i.scrollbar(r || e.options).on("$destroy", function () {
                                i.scrollbar("destroy")
                            })
                        }
                    }
                }])
            }) ? i.apply(t, a) : i) === undefined || (e.exports = o)
        },
        vkoD: function (e, t, n) {
            n("snKr"), e.exports = "jQueryScrollbar"
        },
        wSwa: function (e, t, n) {
            "use strict";
            var i = n("XxQ1");
            e.exports = function (e, t, n) {
                if ("function" != typeof e) return i;
                if (t === undefined) return e;
                switch (n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 3:
                        return function (n, i, a) {
                            return e.call(t, n, i, a)
                        };
                    case 4:
                        return function (n, i, a, o) {
                            return e.call(t, n, i, a, o)
                        };
                    case 5:
                        return function (n, i, a, o, r) {
                            return e.call(t, n, i, a, o, r)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        },
        wgmD: function (e, t, n) {
            "use strict";
            var i = n("xzMV"),
                a = n("7GMM");
            e.exports = function (e, t) {
                return null == t ? e : i(t, a(t), e)
            }
        },
        x6NM: function (e, t, n) {
            "use strict";
            var i = n("fI4m"),
                a = n("W0VD"),
                o = n("fzE2"),
                r = n("AIaL"),
                s = n("ouO+"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                if (null == e) return [];
                s(e) || (e = Object(e));
                var t = e.length;
                t = t && r(t) && (a(e) || i(e)) && t || 0;
                for (var n = e.constructor, c = -1, u = "function" == typeof n && n.prototype === e, d = Array(t), f = t > 0; ++c < t;) d[c] = c + "";
                for (var p in e) f && o(p, t) || "constructor" == p && (u || !l.call(e, p)) || d.push(p);
                return d
            }
        },
        xzMV: function (e, t, n) {
            "use strict";
            e.exports = function (e, t, n) {
                n || (n = {});
                for (var i = -1, a = t.length; ++i < a;) {
                    var o = t[i];
                    n[o] = e[o]
                }
                return n
            }
        },
        "y/UG": function (e, t, n) {
            "use strict";
            var i = n("h3vV")("length");
            e.exports = i
        },
        yUcU: function (e, t, n) {
            "use strict";
            var i = n("ouO+");
            e.exports = function (e) {
                return i(e) ? e : Object(e)
            }
        },
        zc8R: function (e, t, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, n("rGqo"), n("yt8O"), n("RW0V"), n("LK8F"), n("a1Th"), n("h7Nl"), n("Btvt"), n("V+eJ"), n("91GP");
            var a = i(n("cDf5")),
                o = i(n("+2Rf")),
                r = {
                    ready: !1,
                    models: {},
                    errorLog: [],
                    method: {}
                },
                s = {
                    ready: [],
                    append: []
                };
            r.register = function (e, t, n) {
                var i = {};
                if ("string" != typeof e) throw Error("id必须为字符串！");
                if (i.id = e, i.cls = "acgn-model-" + e, i.item = [], !t || "object" !== (0, a["default"])(t)) throw Error("param必须为对象");
                Object.assign(i, t), "function" == typeof n && (i.initFunc = n);
                var r = this.models[i.id] || [],
                    s = (0, o["default"])("." + i.cls).toArray(),
                    l = !1;
                if (s && s.length)
                    for (var c = 0; c < s.length; c++) {
                        l = !1;
                        for (var u = 0; u < r.length; u++) r[u].cls === s[c.cls] && r[u].inited && (l = r[u]);
                        l ? i.item.push(l) : i.item.push({
                            cls: i.cls + "-" + c,
                            el: s[c],
                            from: i,
                            inited: !1
                        })
                    }
                for (var d = 0; d < i.item.length; d++) {
                    -1 === i.item[d].el.className.indexOf(i.item[d].cls) && (i.item[d].el.className = i.item[d].el.className + " " + i.item[d].cls);
                    try {
                        i.initFunc(i.item[d], d) && (i.item[d].inited = !0)
                    } catch (f) {
                        this.errorLog.push(f.toString())
                    }
                }
                return this.models[i.id] = i, this.ready && this.trigger("append", i), i
            }, r.defineMethod = function (e, t) {
                if ("string" != typeof e) throw Error("name必须为字符串！");
                if ("function" != typeof t) throw Error("fn必须为函数");
                this.method[e] === undefined && (this.method[e] = t)
            }, r.on = function (e, t) {
                if ("string" != typeof e) throw Error("model.on:必须传入事件名");
                if ("function" != typeof t) throw Error("model.on:必须传入事件函数");
                s[e] && s[e].push(t), r.ready && "ready" === e && t()
            }, r.trigger = function (e) {
                if ("string" != typeof e) throw Error("model.on:必须传入事件名");
                if (s[e])
                    for (var t = 0; t < s[e].length; t++) s[e][t]()
            }, r.off = function (e, t) {
                if ("string" != typeof e) throw Error("model.on:必须传入事件名");
                if (t && "function" != typeof t) throw Error("model.on:传入参数必须为函数");
                if (s[e])
                    if (t)
                        for (var n = 0; n < s[e].length; n++) s[e][n] === t && (s[e].splice(n, 1), n--);
                    else s[e] = []
            }, r.filter = function (e) {
                var t = {
                    id: null,
                    tag: null
                };
                if ("string" == typeof e) t.id = e;
                else {
                    if (!e || "object" !== (0, a["default"])(e)) throw Error("filter条件传入错误，必须为字符串或者对象");
                    t.id = e.id || null, t.tag = e.tag || null
                }
                var n = [],
                    i = this.models;
                for (var o in i) t.id && t.id !== i[o].id || (!t.tag || i[o].tags && Array.isArray(i[o].tags) && -1 !== i[o].tags.indexOf(t.tag)) && (n = n.concat(i[o].item));
                return n
            }, (0, o["default"])(function () {
                r.ready = !0, r.trigger("ready")
            }), window.rs = function (e) {
                for (var t = 0; t < Object.keys(ACGN.model.models).length; t++)
                    for (var n = 0; n < ACGN.model.models[Object.keys(ACGN.model.models)[t]].item.length; n++)(0, o["default"])(ACGN.model.models[Object.keys(ACGN.model.models)[t]].item[n].el).removeClass("acgn-space-small").removeClass("acgn-space-none").removeClass("acgn-space-big").removeClass("acgn-space-normal").addClass("acgn-space-" + e)
            };
            var l = r;
            t["default"] = l
        }
    },
    [
        [6, 0, 1]
    ]
]);
! function (e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function (n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "/", t(t.s = 5)
}({
    5: function (e, n, t) {
        e.exports = t("E1OT")
    },
    E1OT: function (e, n, t) {
        "use strict";
        (function (e) {
            t("ucKS"),
                function () {
                    window.ACGN, undefined;
                    window;
                    window.ACGN.model.register("header", {
                        desc: "看漫顶部导航条",
                        resource: "header-2",
                        tags: ["header"]
                    }, function (e, n) {
                        return !0
                    })
                }()
        }).call(this, t("xeH2"))
    },
    ucKS: function (e, n, t) {},
    xeH2: function (e, n) {
        e.exports = jQuery
    }
});
! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/", r(r.s = 4)
}({
    "2XaU": function (e, t, r) {},
    4: function (e, t, r) {
        e.exports = r("FZIg")
    },
    FZIg: function (e, t, r) {
        "use strict";
        r("2XaU"), window.ACGN, undefined, window.ACGN.model.register("footer", {
            desc: "底部板块",
            resource: "footer-4",
            tags: ["footer"]
        }, function (e, t) {
            return !0
        })
    }
});
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var c = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var c in t) n.d(r, c, function (e) {
                return t[e]
            }.bind(null, c));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 1)
}({
    "0/R4": function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    1: function (t, e, n) {
        t.exports = n("NODX")
    },
    Iw71: function (t, e, n) {
        var r = n("0/R4"),
            c = n("dyZX").document,
            a = r(c) && r(c.createElement);
        t.exports = function (t) {
            return a ? c.createElement(t) : {}
        }
    },
    NODX: function (t, e, n) {
        "use strict";
        (function (t) {
            n("f3/d"), n("t8c4"),
                function () {
                    window.ACGN, undefined;
                    var e = window,
                        n = t,
                        r = e.ACGN,
                        c = e.siteConf,
                        a = window.ACGN.model;
                    a.register("comic-floater", {
                        desc: "漫画单元格悬浮层组件",
                        resource: "plug-1"
                    }, function (t, e) {
                        var o = 200,
                            i = 2,
                            l = "floater",
                            s = "/api/getComicInfoAttribute/",
                            u = {
                                wrap: '<div class="fc-wrap"></div>',
                                floater: function (t) {
                                    for (var e, n, a, o = t.data, i = t.size, l = r.util, s = o.cartoon_type_list ? o.cartoon_type_list : [], u = "", f = 0; f < Math.min(s.length, 3); f++) e = s[f].id, a = s[f].py, n = s[f].name, e && n && (u += '<li class="fc-tag">\n                              <a href="/sort/'.concat(a, '.html" target="_blank" title="').concat(n, '">').concat(n, "</a>\n                            </li>"));
                                    var d = l.getFirstChapterId(c, o),
                                        m = l.getLastChapterId(c, o),
                                        p = r.business && r.business.comicRecord ? r.business.comicRecord.getStaticRecord({
                                            comic_id: parseInt(o.comic_id)
                                        }) : null;
                                    p && (d = p.chapter_newid);
                                    var h = d ? "/" + o.comic_id + "/" + d + ".html" : "/" + o.comic_id + "/",
                                        v = m ? "/" + o.comic_id + "/" + m + ".html" : "/" + o.comic_id + "/",
                                        g = (parseInt(o.score / 2) / 10).toFixed(1);
                                    return '<div class="fc-floater" style="left: '.concat(i.x, "px; top: ").concat(i.y, "px;width: ").concat(i.w, "px;height: ").concat(i.h, 'px;">\n            <div class="fc-bg">\n              <a href="/').concat(o.comic_id, '/" target="_blank" title="').concat(o.comic_name.addEnd("漫画"), '">\n                <img src="').concat(o.cover, '" alt="').concat(o.comic_name + "," + o.comic_name.addEnd("漫画"), '">\n              </a>\n            </div>\n            <div class="fc-main">\n              <h3 class="fc-title" title="').concat(o.comic_name.addEnd("漫画"), '">\n                <div class="fc-score">\n                  <span class="strong">').concat(g.slice(0, 1), "</span>").concat(g.slice(1), '\n                </div>\n                <a href="/').concat(o.comic_id, '/" target="_blank" title="').concat(o.comic_name.addEnd("漫画"), '">\n                  ').concat(o.comic_name, '\n                </a>\n              </h3>\n              <ul class="fc-tags">\n                ').concat(u, '\n              </ul>\n              <p class="fc-new">\n                <a href="').concat(v, '" target="_blank" title="').concat(o.comic_name.addEnd("漫画"), '">').concat(o.last_chapter_name, '</a>\n              </p>\n              <div class="fc-bottom">\n                <p class="fc-desc">').concat(o.comic_desc, '</p>\n                <a href="').concat(h, '" target="_blank" title="').concat(o.comic_name.addEnd("漫画"), '" class="fc-btn">开始阅读</a>\n              </div>\n            </div>\n          </div>')
                                }
                            },
                            f = {
                                minW: 240,
                                minH: 232,
                                scale: 1.2,
                                mark: null,
                                times: 1,
                                disabled: !1,
                                disabledMark: null
                            },
                            d = {
                                init: function () {
                                    var t = this;
                                    this.cache = {}, this.currentWrap = null, this.currentId = null;
                                    var e = n("html");
                                    n("body").append(u.wrap), this.wrap = n(".fc-wrap"), e.on("mouseleave", ".fc-wrap", function (e) {
                                        if (f.disabled) return !0;
                                        t._regWrap(null)
                                    }), e.on("mousemove", function (e) {
                                        if (f.disabled) return !0;
                                        var n = e.target;
                                        t._regWrap(n)
                                    }), e.on("mouseenter", "[data-" + l + "]", function (e) {
                                        if (f.disabled) return !0;
                                        e.stopPropagation();
                                        var n = e.target;
                                        return t._regWrap(n), !1
                                    })
                                },
                                _regWrap: function (t) {
                                    var e = this,
                                        r = n(t),
                                        c = null;
                                    if (f.mark && clearTimeout(f.mark), r.hasClass("fc-wrap") || r.parents(".fc-wrap").length) return !1;
                                    if ((c = r.data(l) ? r : r.parents("[data-" + l + "]")) && c.length) {
                                        var a = parseInt(c.data(l));
                                        a && !isNaN(a) ? a === this.currentId || (this.closeFloater(), f.mark = setTimeout(function () {
                                            e.openFloater(c)
                                        }, o)) : this.closeFloater()
                                    } else this.closeFloater()
                                },
                                openFloater: function (t) {
                                    var e = this,
                                        a = n(t),
                                        o = parseInt(a.data(l));
                                    if (!o || isNaN(o) || o === this.currentId) return !1;
                                    this.currentWrap = a, this.currentId = o;
                                    var d = {
                                        x: a.offset().left - a.width() * (f.scale / 2 - .5),
                                        y: a.offset().top - a.height() * (f.scale / 2 - .5),
                                        w: a.width() * f.scale,
                                        h: a.height() * f.scale
                                    };
                                    d.w < f.minW && (d.w = f.minW, d.x = a.offset().left - (d.w - a.width()) / 2);
                                    var m = f.minH + .5 * d.w;
                                    d.h <= m && (d.h = m), f.times++;
                                    var p = f.times,
                                        h = function (t) {
                                            if (f.times !== p) return !1;
                                            t ? (e.cache[o] = {
                                                status: !0,
                                                data: t
                                            }, e.wrap.html(u.floater({
                                                data: t,
                                                size: d
                                            }))) : e.cache[o] && !1 === e.cache[o].status ? e.cache[o].count++ : e.cache[o] = {
                                                status: !1,
                                                count: 1
                                            }
                                        },
                                        v = !0;
                                    this.cache[o] && (!0 === this.cache[o].status ? (h(this.cache[o].data), v = !1) : this.cache[o].count >= i && (v = !1)), v && r.ajax({
                                        dataType: "json",
                                        url: s,
                                        data: {
                                            comic_id: o
                                        }
                                    }, function (t, e) {
                                        if (t) h(null);
                                        else {
                                            var n = r.util,
                                                a = n.formatImgSrc(c, e.comic_id, e.img_url, {
                                                    type: "front_cover21",
                                                    ratio: "2:1",
                                                    suffix: "h"
                                                }),
                                                o = n.formatImgSrc(c, e.comic_id, e.img_url, "front_cover"),
                                                i = new Image,
                                                l = null,
                                                s = function () {
                                                    e.cover = o, h(e), clearTimeout(l)
                                                };
                                            l = setTimeout(function () {
                                                s(), i.onload = i.onerror = null
                                            }, 3e3), i.onload = function () {
                                                e.cover = a, h(e), clearTimeout(l)
                                            }, i.onerror = s, i.src = a
                                        }
                                    })
                                },
                                closeFloater: function () {
                                    this.currentWrap = null, this.currentId = null, f.times++, f.mark && (clearTimeout(f.mark), f.mark = null), this.wrap.html("")
                                },
                                disable: function (t) {
                                    var e = this;
                                    f.disabled = !0, this.closeFloater(), "number" != typeof t || isNaN(t) || (f.disabledMark = setTimeout(function () {
                                        e.enable()
                                    }, t))
                                },
                                enable: function () {
                                    f.disabled = !1, f.disabledMark && (clearTimeout(f.disabledMark), f.disabledMark = null)
                                }
                            };
                        return d.init(), t.fc = d, a.defineMethod("disableComicFloater", function (t) {
                            for (var e = a.models["comic-floater"].item, n = 0; n < e.length; n++) e[n].fc.disable(t)
                        }), a.defineMethod("enableComicFloater", function () {
                            for (var t = a.models["comic-floater"].item, e = 0; e < t.length; e++) t[e].fc.enable()
                        }), !0
                    })
                }()
        }).call(this, n("xeH2"))
    },
    apmT: function (t, e, n) {
        var r = n("0/R4");
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, c;
            if (e && "function" == typeof (n = t.toString) && !r(c = n.call(t))) return c;
            if ("function" == typeof (n = t.valueOf) && !r(c = n.call(t))) return c;
            if (!e && "function" == typeof (n = t.toString) && !r(c = n.call(t))) return c;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    dyZX: function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    eeVq: function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    },
    "f3/d": function (t, e, n) {
        var r = n("hswa").f,
            c = Function.prototype,
            a = /^\s*function ([^ (]*)/;
        "name" in c || n("nh4g") && r(c, "name", {
            configurable: !0,
            get: function () {
                try {
                    return ("" + this).match(a)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    },
    hswa: function (t, e, n) {
        var r = n("y3w9"),
            c = n("xpql"),
            a = n("apmT"),
            o = Object.defineProperty;
        e.f = n("nh4g") ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = a(e, !0), r(n), c) try {
                return o(t, e, n)
            } catch (i) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    },
    nh4g: function (t, e, n) {
        t.exports = !n("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    t8c4: function (t, e, n) {},
    xeH2: function (t, e) {
        t.exports = jQuery
    },
    xpql: function (t, e, n) {
        t.exports = !n("nh4g") && !n("eeVq")(function () {
            return 7 != Object.defineProperty(n("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (t, e, n) {
        var r = n("0/R4");
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }
});
! function (n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = n, e.c = t, e.d = function (n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: r
        })
    }, e.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, e.t = function (n, t) {
        if (1 & t && (n = e(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) e.d(r, o, function (t) {
                return n[t]
            }.bind(null, o));
        return r
    }, e.n = function (n) {
        var t = n && n.__esModule ? function () {
            return n["default"]
        } : function () {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "/", e(e.s = 3)
}({
    "+lvF": function (n, t, e) {
        n.exports = e("VTer")("native-function-to-string", Function.toString)
    },
    "0/R4": function (n, t) {
        n.exports = function (n) {
            return "object" == typeof n ? null !== n : "function" == typeof n
        }
    },
    "2OiF": function (n, t) {
        n.exports = function (n) {
            if ("function" != typeof n) throw TypeError(n + " is not a function!");
            return n
        }
    },
    3: function (n, t, e) {
        n.exports = e("mHjV")
    },
    "6FMO": function (n, t, e) {
        var r = e("0/R4"),
            o = e("EWmC"),
            i = e("K0xU")("species");
        n.exports = function (n) {
            var t;
            return o(n) && ("function" != typeof (t = n.constructor) || t !== Array && !o(t.prototype) || (t = undefined), r(t) && null === (t = t[i]) && (t = undefined)), t === undefined ? Array : t
        }
    },
    "8+KV": function (n, t, e) {
        "use strict";
        var r = e("XKFU"),
            o = e("CkkT")(0),
            i = e("LyE8")([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
            forEach: function (n) {
                return o(this, n, arguments[1])
            }
        })
    },
    C5vd: function (n, t, e) {},
    CkkT: function (n, t, e) {
        var r = e("m0Pp"),
            o = e("Ymqv"),
            i = e("S/j/"),
            u = e("ne8i"),
            f = e("zRwo");
        n.exports = function (n, t) {
            var e = 1 == n,
                c = 2 == n,
                a = 3 == n,
                l = 4 == n,
                s = 6 == n,
                p = 5 == n || s,
                d = t || f;
            return function (t, f, v) {
                for (var y, h, g = i(t), x = o(g), m = r(f, v, 3), b = u(x.length), w = 0, j = e ? d(t, b) : c ? d(t, 0) : undefined; b > w; w++)
                    if ((p || w in x) && (h = m(y = x[w], w, g), n))
                        if (e) j[w] = h;
                        else if (h) switch (n) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return w;
                    case 2:
                        j.push(y)
                } else if (l) return !1;
                return s ? -1 : a || l ? l : j
            }
        }
    },
    EWmC: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Array.isArray || function (n) {
            return "Array" == r(n)
        }
    },
    Iw71: function (n, t, e) {
        var r = e("0/R4"),
            o = e("dyZX").document,
            i = r(o) && r(o.createElement);
        n.exports = function (n) {
            return i ? o.createElement(n) : {}
        }
    },
    K0xU: function (n, t, e) {
        var r = e("VTer")("wks"),
            o = e("ylqs"),
            i = e("dyZX").Symbol,
            u = "function" == typeof i;
        (n.exports = function (n) {
            return r[n] || (r[n] = u && i[n] || (u ? i : o)("Symbol." + n))
        }).store = r
    },
    KroJ: function (n, t, e) {
        var r = e("dyZX"),
            o = e("Mukb"),
            i = e("aagx"),
            u = e("ylqs")("src"),
            f = e("+lvF"),
            c = ("" + f).split("toString");
        e("g3g5").inspectSource = function (n) {
            return f.call(n)
        }, (n.exports = function (n, t, e, f) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", t)), n[t] !== e && (a && (i(e, u) || o(e, u, n[t] ? "" + n[t] : c.join(String(t)))), n === r ? n[t] = e : f ? n[t] ? n[t] = e : o(n, t, e) : (delete n[t], o(n, t, e)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || f.call(this)
        })
    },
    LQAc: function (n, t) {
        n.exports = !1
    },
    LZWt: function (n, t) {
        var e = {}.toString;
        n.exports = function (n) {
            return e.call(n).slice(8, -1)
        }
    },
    LyE8: function (n, t, e) {
        "use strict";
        var r = e("eeVq");
        n.exports = function (n, t) {
            return !!n && r(function () {
                t ? n.call(null, function () {}, 1) : n.call(null)
            })
        }
    },
    Mukb: function (n, t, e) {
        var r = e("hswa"),
            o = e("RjD/");
        n.exports = e("nh4g") ? function (n, t, e) {
            return r.f(n, t, o(1, e))
        } : function (n, t, e) {
            return n[t] = e, n
        }
    },
    RYi7: function (n, t) {
        var e = Math.ceil,
            r = Math.floor;
        n.exports = function (n) {
            return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n)
        }
    },
    "RjD/": function (n, t) {
        n.exports = function (n, t) {
            return {
                enumerable: !(1 & n),
                configurable: !(2 & n),
                writable: !(4 & n),
                value: t
            }
        }
    },
    "S/j/": function (n, t, e) {
        var r = e("vhPU");
        n.exports = function (n) {
            return Object(r(n))
        }
    },
    VTer: function (n, t, e) {
        var r = e("g3g5"),
            o = e("dyZX"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (n.exports = function (n, t) {
            return i[n] || (i[n] = t !== undefined ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: e("LQAc") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    XKFU: function (n, t, e) {
        var r = e("dyZX"),
            o = e("g3g5"),
            i = e("Mukb"),
            u = e("KroJ"),
            f = e("m0Pp"),
            c = function (n, t, e) {
                var a, l, s, p, d = n & c.F,
                    v = n & c.G,
                    y = n & c.S,
                    h = n & c.P,
                    g = n & c.B,
                    x = v ? r : y ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    m = v ? o : o[t] || (o[t] = {}),
                    b = m.prototype || (m.prototype = {});
                for (a in v && (e = t), e) s = ((l = !d && x && x[a] !== undefined) ? x : e)[a], p = g && l ? f(s, r) : h && "function" == typeof s ? f(Function.call, s) : s, x && u(x, a, s, n & c.U), m[a] != s && i(m, a, p), h && b[a] != s && (b[a] = s)
            };
        r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, n.exports = c
    },
    Ymqv: function (n, t, e) {
        var r = e("LZWt");
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (n) {
            return "String" == r(n) ? n.split("") : Object(n)
        }
    },
    aagx: function (n, t) {
        var e = {}.hasOwnProperty;
        n.exports = function (n, t) {
            return e.call(n, t)
        }
    },
    apmT: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n, t) {
            if (!r(n)) return n;
            var e, o;
            if (t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            if ("function" == typeof (e = n.valueOf) && !r(o = e.call(n))) return o;
            if (!t && "function" == typeof (e = n.toString) && !r(o = e.call(n))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    dRSK: function (n, t, e) {
        "use strict";
        var r = e("XKFU"),
            o = e("CkkT")(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), r(r.P + r.F * i, "Array", {
            find: function (n) {
                return o(this, n, arguments.length > 1 ? arguments[1] : undefined)
            }
        }), e("nGyu")("find")
    },
    dyZX: function (n, t) {
        var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    },
    eeVq: function (n, t) {
        n.exports = function (n) {
            try {
                return !!n()
            } catch (t) {
                return !0
            }
        }
    },
    g3g5: function (n, t) {
        var e = n.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = e)
    },
    hswa: function (n, t, e) {
        var r = e("y3w9"),
            o = e("xpql"),
            i = e("apmT"),
            u = Object.defineProperty;
        t.f = e("nh4g") ? Object.defineProperty : function (n, t, e) {
            if (r(n), t = i(t, !0), r(e), o) try {
                return u(n, t, e)
            } catch (f) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (n[t] = e.value), n
        }
    },
    m0Pp: function (n, t, e) {
        var r = e("2OiF");
        n.exports = function (n, t, e) {
            if (r(n), t === undefined) return n;
            switch (e) {
                case 1:
                    return function (e) {
                        return n.call(t, e)
                    };
                case 2:
                    return function (e, r) {
                        return n.call(t, e, r)
                    };
                case 3:
                    return function (e, r, o) {
                        return n.call(t, e, r, o)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        }
    },
    mHjV: function (n, t, e) {
        "use strict";
        (function (n) {
            e("8+KV"), e("dRSK"), e("C5vd"),
                function () {
                    window.ACGN, undefined;
                    var t = window,
                        e = n,
                        r = t.moduleDebug,
                        o = window.ACGN.model;
                    o.register("float", {
                        desc: "全站悬浮侧边导航栏",
                        resource: "float-8",
                        tags: []
                    }, function (n, t) {
                        if (r) e(n.el).show();
                        else {
                            var i = e(n.el),
                                u = i.find(".js_list"),
                                f = i.find(".connect");
                            e(function () {
                                var t, r, i, c = o.models,
                                    a = [],
                                    l = "";
                                for (var s in c)
                                    for (var p = 0; p < c[s].item.length; p++) r = (t = e(c[s].item[p].el)).data("func-floatnav"), i = t.attr("id"), r && i && a.push({
                                        el: t,
                                        top: t.offset().top,
                                        html: '<li class="item"><a rel="nofollow" href="#' + i + '" title="' + r + '">' + r + "</a></li>"
                                    });
                                a.length ? f.show() : f.hide();
                                for (var d = null, v = 0; v < a.length - 1; v++)
                                    for (var y = 0; y < a.length - v - 1; y++) a[y].top > a[y + 1].top && (d = a[y], a[y] = a[y + 1], a[y + 1] = d);
                                for (var h = 0; h < a.length; h++) l += a[h].html;
                                u.html(l), e(window).on("scroll", function () {
                                    var t = e(".acgn-model-header .block-wrap-fixed").height(),
                                        r = e(".acgn-model-index-banner").eq(0).height() || 0,
                                        o = e(window).scrollTop();
                                    o < r ? e(n.el).hide() : e(n.el).show();
                                    var i = u.find(".item").removeClass("active"),
                                        f = !1;
                                    a.forEach(function (n, r) {
                                        if (!f) {
                                            var u = e(n.el),
                                                c = u.parent().height(),
                                                a = u.offset().top - t;
                                            o <= a + c - 2 && (i.eq(r).addClass("active"), f = !0)
                                        }
                                    })
                                })
                            })
                        }
                        return !0
                    })
                }()
        }).call(this, e("xeH2"))
    },
    nGyu: function (n, t, e) {
        var r = e("K0xU")("unscopables"),
            o = Array.prototype;
        o[r] == undefined && e("Mukb")(o, r, {}), n.exports = function (n) {
            o[r][n] = !0
        }
    },
    ne8i: function (n, t, e) {
        var r = e("RYi7"),
            o = Math.min;
        n.exports = function (n) {
            return n > 0 ? o(r(n), 9007199254740991) : 0
        }
    },
    nh4g: function (n, t, e) {
        n.exports = !e("eeVq")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    vhPU: function (n, t) {
        n.exports = function (n) {
            if (n == undefined) throw TypeError("Can't call method on  " + n);
            return n
        }
    },
    xeH2: function (n, t) {
        n.exports = jQuery
    },
    xpql: function (n, t, e) {
        n.exports = !e("nh4g") && !e("eeVq")(function () {
            return 7 != Object.defineProperty(e("Iw71")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    y3w9: function (n, t, e) {
        var r = e("0/R4");
        n.exports = function (n) {
            if (!r(n)) throw TypeError(n + " is not an object!");
            return n
        }
    },
    ylqs: function (n, t) {
        var e = 0,
            r = Math.random();
        n.exports = function (n) {
            return "Symbol(".concat(n === undefined ? "" : n, ")_", (++e + r).toString(36))
        }
    },
    zRwo: function (n, t, e) {
        var r = e("6FMO");
        n.exports = function (n, t) {
            return new(r(n))(t)
        }
    }
});