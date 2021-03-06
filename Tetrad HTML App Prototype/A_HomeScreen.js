/*
 * JS for A_HomeScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '92583dc2-8eb0-4fef-8a0d-0df05d9907f9';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "D_WritingCultureTetrad",
    "location": "D_WritingCultureTetrad.html"
}, {
    "name": "C_RapTetrad",
    "location": "C_RapTetrad.html"
}, {
    "name": "B_HowToUse",
    "location": "B_HowToUse.html"
}, {
    "name": "A_HomeScreen",
    "location": "A_HomeScreen.html"
}];

$(document).bind('scroll', function() {
    adjustContentHeightWithPadding();
});
$(window).bind(window.orientation ? 'orientationchange' : 'resize', function() {
    adjustContentHeightWithPadding();
});

function A_HomeScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_3': 'A_HomeScreen_mobilelist_3',
        'mobilelistitem_4': 'A_HomeScreen_mobilelistitem_4',
        'mobilelistitembutton_5': 'A_HomeScreen_mobilelistitembutton_5',
        'mobilelistitem_6': 'A_HomeScreen_mobilelistitem_6',
        'mobilelistitembutton_7': 'A_HomeScreen_mobilelistitembutton_7',
        'mobilelistitem_8': 'A_HomeScreen_mobilelistitem_8',
        'mobilelistitembutton_9': 'A_HomeScreen_mobilelistitembutton_9'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        // Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role='footer']").css("bottom", "-36px");
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'A_HomeScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var A_HomeScreen_onLoad = function() {
            A_HomeScreen_elementsExtraJS();

            setDetailContent('B_HowToUse.html');

            A_HomeScreen_deviceEvents();
            A_HomeScreen_windowEvents();
            A_HomeScreen_elementsEvents();
        };

    // screen window events


    function A_HomeScreen_windowEvents() {

        $('#A_HomeScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function A_HomeScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function A_HomeScreen_elementsExtraJS() {
        // screen (A_HomeScreen) extra code

        /* mobilelist_3 */

        listView = $("#A_HomeScreen_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#A_HomeScreen_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function A_HomeScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setDetailContent('B_HowToUse.html');

                }
            },
        }, '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_4"]');

        $(document).off("click", '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setDetailContent('C_RapTetrad.html');

                }
            },
        }, '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_6"]');

        $(document).off("click", '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    setDetailContent('D_WritingCultureTetrad.html');

                }
            },
        }, '#A_HomeScreen_mobilecontainer2 [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#A_HomeScreen").on("pagebeforeshow", "#A_HomeScreen", function(event, ui) {
        Apperyio.CurrentScreen = "A_HomeScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    if ($(window).width() >= 650) {
        var fixed = true;

        jQuery(document).ready(function($) {
            $('.ui-content').addClass("width_gt_650");

            if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
                $(".content-secondary").css("position", "absolute");
                fixed = false;
            } else {
                $(".content-secondary").css("position", "fixed");
            }

            $(".content-secondary").css("float", "left");
            $(".content-secondary").css("left", "0px");
            var heightEl = $(".ui-header:visible");
            $(".content-secondary").css("top", heightEl.outerHeight() ? heightEl.outerHeight() : 0 + "px");
            $(".content-secondary").css("z-index", "999");
            $(".content-secondary").css("border", "0px solid red");

            adjustContentHeightWithPadding();
        });

        $('.content-secondary input, .content-secondary textarea').unbind('blur', adjustContentHeightWithPadding);
        $('.content-secondary input, .content-secondary textarea').bind('blur', adjustContentHeightWithPadding);

        $("#A_HomeScreen").bind("pageshow", function(event) {
            var $page = $(this);
            $page.find(":jqmData(scroll):not(.ui-scrollview-clip)").each(function() {
                var $this = $(this);
                // XXX: Remove this check for ui-scrolllistview once we've
                //      integrated list divider support into the main scrollview class.
                if ($this.hasClass("ui-scrolllistview")) $this.scrolllistview();
                else {
                    var st = $this.jqmData("scroll") + "";
                    var paging = st && st.search(/^[xy]p$/) != -1;
                    var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;

                    var opts = {};

                    if (dir) {
                        opts.direction = dir;
                    }

                    if (paging) {
                        opts.pagingEnabled = true;
                    }

                    var method = $this.jqmData("scroll-method");
                    if (method) {
                        opts.scrollMethod = method;
                    }

                    $this.scrollview(opts);
                }
            });
        });
    }

    A_HomeScreen_onLoad();
};

$(document).off("pagecreate", "#A_HomeScreen").on("pagecreate", "#A_HomeScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    A_HomeScreen_js();
});