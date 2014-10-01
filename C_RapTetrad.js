/*
 * JS for C_RapTetrad generated by Appery.io
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

function C_RapTetrad_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'titleLabel': 'C_RapTetrad_titleLabel',
        'mobilegrid_23': 'C_RapTetrad_mobilegrid_23',
        'mobilegridcell_24': 'C_RapTetrad_mobilegridcell_24',
        'enhanceLabel': 'C_RapTetrad_enhanceLabel',
        'spacer_45': 'C_RapTetrad_spacer_45',
        'enhanceDefLabel': 'C_RapTetrad_enhanceDefLabel',
        'enhanceButton': 'C_RapTetrad_enhanceButton',
        'mobilegridcell_25': 'C_RapTetrad_mobilegridcell_25',
        'mobilegridcell_30': 'C_RapTetrad_mobilegridcell_30',
        'mobilelabel_49': 'C_RapTetrad_mobilelabel_49',
        'spacer_50': 'C_RapTetrad_spacer_50',
        'mobilelabel_51': 'C_RapTetrad_mobilelabel_51',
        'mobilegridcell_26': 'C_RapTetrad_mobilegridcell_26',
        'mobilegridcell_27': 'C_RapTetrad_mobilegridcell_27',
        'mobilegridcell_31': 'C_RapTetrad_mobilegridcell_31',
        'mobilegridcell_28': 'C_RapTetrad_mobilegridcell_28',
        'retrieveLabel': 'C_RapTetrad_retrieveLabel',
        'spacer_46': 'C_RapTetrad_spacer_46',
        'RetrieveDefLabel': 'C_RapTetrad_RetrieveDefLabel',
        'retrieveButton': 'C_RapTetrad_retrieveButton',
        'mobilegridcell_29': 'C_RapTetrad_mobilegridcell_29',
        'mobilegridcell_32': 'C_RapTetrad_mobilegridcell_32',
        'obsolescenceLabel': 'C_RapTetrad_obsolescenceLabel',
        'spacer_47': 'C_RapTetrad_spacer_47',
        'obsolescenceDefLabel': 'C_RapTetrad_obsolescenceDefLabel',
        'youtube_39': 'C_RapTetrad_youtube_39',
        'html_43': 'C_RapTetrad_html_43'
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

    Apperyio.CurrentScreen = 'C_RapTetrad';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var C_RapTetrad_onLoad = function() {
            C_RapTetrad_elementsExtraJS();

            C_RapTetrad_deviceEvents();
            C_RapTetrad_windowEvents();
            C_RapTetrad_elementsEvents();
        };

    // screen window events


    function C_RapTetrad_windowEvents() {

        $('#C_RapTetrad').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function C_RapTetrad_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function C_RapTetrad_elementsExtraJS() {
        // screen (C_RapTetrad) extra code

        /* EnhancePopup */
        $("#C_RapTetrad_EnhancePopup").popup("option", "positionTo", "window");

        Apperyio.registerYoutubeComponent("C_RapTetrad_youtube_39");

        /* RetrievePopup */
        $("#C_RapTetrad_RetrievePopup").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function C_RapTetrad_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#C_RapTetrad_mobilecontainer4 [name="enhanceButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("EnhancePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "pop",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "pop"
                        });
                    };

                }
            },
        }, '#C_RapTetrad_mobilecontainer4 [name="enhanceButton"]');

        $(document).off("click", '#C_RapTetrad_mobilecontainer4 [name="retrieveButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("RetrievePopup");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "pop",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "pop"
                        });
                    };

                }
            },
        }, '#C_RapTetrad_mobilecontainer4 [name="retrieveButton"]');

    };

    $(document).off("pagebeforeshow", "#C_RapTetrad").on("pagebeforeshow", "#C_RapTetrad", function(event, ui) {
        Apperyio.CurrentScreen = "C_RapTetrad";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    C_RapTetrad_onLoad();
};

$(document).off("pagecreate", "#C_RapTetrad").on("pagecreate", "#C_RapTetrad", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    C_RapTetrad_js();
});