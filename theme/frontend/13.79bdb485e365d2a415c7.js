(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{pIQB:function(e,t){var a,n;(a=jQuery,n=function(e){var t,n=a("#setting_default_language select");e.attr("checked")?n.find('option[value="'+e.val()+'"]').removeAttr("disabled"):n.find('option[value="'+e.val()+'"]').attr("disabled","disabled"),t=n.find('option:not([disabled="disabled"])'),toggle_disabled_state(0===t.length),1===t.length?t.attr("selected",!0):n.val()!==e.val()||e.attr("checked")||t.first().attr("selected",!0)},toggle_disabled_state=function(e){jQuery("#setting_default_language select").attr("disabled",e).closest("form").find("input:submit").attr("disabled",e)},{init_language_selection_handling:function(){jQuery('#setting_available_languages input:not([checked="checked"])').each((function(e,t){n(a(t))})),jQuery("#setting_available_languages input").click((function(){n(a(this))}))}}).init_language_selection_handling()}}]);
//# sourceMappingURL=13.79bdb485e365d2a415c7.js.map