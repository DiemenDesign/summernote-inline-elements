/* summernote-inline-Elements v0.2
 * Adapted from https://github.com/tylerecouture/summernote-add-text-tags
*/
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
}(function ($) {
  $.extend($.summernote.options, {
    inline: {
      elements: {
        span: { title: 'Span', tag: 'span', class: ''},
        del: { title: 'Deleted Text', tag: 'del', class: ''},
        strike: { title: 'Strikethrough', tag: 'strike', class: ''},
        ins: { title: 'Inserted', tag: 'ins', class: ''},
        small: { title: 'Small', tag: 'small', class: ''},
        strong: { title: 'Strong/Bold', tag: 'strong', class: ''},
        em: { title: 'Emphasized', tag: 'em', class: ''},
        cite: { title: 'Cited', tag: 'cite', class: ''},
        mark: { title: 'Highlighted', tag: 'mark', class: ''},
        var: { title: 'Variable', tag: 'var', class: ''},
        kbd: { title: 'User Input', tag: 'kbd', class: ''},
        code: { title: 'Inline Code', tag: 'code', class: ''},
        samp: { title: 'Sample Output', tag: 'samp', class: ''},
      }
    }
  });
  $.extend($.summernote.plugins, {
    'inline': function (context) {
      var self = this,
          ui = $.summernote.ui,
          options = context.options;
      $("head").append('<style>.note-plugin-inline{display:block;width:100%;border:0;text-align:center}.note-note-plugin-inline:hover,.note-note-plugin-inline:focus{border:0}</style>');
      self.generateBtn = function(title, tag, css) {
        return ui.button({
          contents: '<' + tag + (css ? ' class="' + css + '"':'') + '>' + title + '</' + tag + '>',
          className: 'note-btn note-plugin-inline',
          click: function (e) {
            self.wrapInTag(tag,css);
          }
        });
      };

      var span = self.generateBtn( options.inline.elements.span.title, options.inline.elements.span.tag, options.inline.elements.span.class);
      var del = self.generateBtn(options.inline.elements.del.title, options.inline.elements.del.tag, options.inline.elements.del.class);
      var strike = self.generateBtn(options.inline.elements.strike.title, options.inline.elements.strike.tag, options.inline.elements.strike.class);
      var ins = self.generateBtn(options.inline.elements.ins.title, options.inline.elements.ins.tag, options.inline.elements.ins.class);
      var small = self.generateBtn(options.inline.elements.small.title, options.inline.elements.small.tag, options.inline.elements.small.class);
      var strong = self.generateBtn(options.inline.elements.strong.title, options.inline.elements.strong.tag, options.inline.elements.strong.class);
      var em = self.generateBtn(options.inline.elements.em.title, options.inline.elements.em.tag, options.inline.elements.em.class);
      var cite = self.generateBtn(options.inline.elements.cite.title, options.inline.elements.cite.tag, options.inline.elements.cite.class);
      var mark = self.generateBtn(options.inline.elements.mark.title, options.inline.elements.mark.tag, options.inline.elements.mark.class);
      var variable = self.generateBtn(options.inline.elements.var.title, options.inline.elements.var.tag, options.inline.elements.var.class);
      var kbd = self.generateBtn(options.inline.elements.kbd.title, options.inline.elements.kbd.tag, options.inline.elements.kbd.class);
      var code = self.generateBtn(options.inline.elements.code.title, options.inline.elements.code.tag, options.inline.elements.code.class);
      var samp = self.generateBtn(options.inline.elements.samp.title, options.inline.elements.samp.tag, options.inline.elements.samp.class);

      context.memo('button.inline', function () {
        return ui.buttonGroup([
          ui.button({
            className: 'dropdown-toggle',
            contents: '<i class="note-icon"><svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="m 7.4370106,12.777199 c -0.0491,-0.2454 -0.50182,-0.7919 -0.65606,-0.7919 -0.16603,0 -0.10478,-0.1004 0.1326,-0.2174 0.14606,-0.072 0.28991,-0.2351 0.40391,-0.4578 l 0.17706,-0.346 0.17555,0.3458 c 0.11372,0.224 0.25562,0.3853 0.40286,0.4578 0.23463,0.1156 0.29964,0.2176 0.13867,0.2176 -0.15194,0 -0.53165,0.4417 -0.6341,0.7376 l -0.0959,0.2771 -0.0446,-0.2228 z m -4.37087,-0.6543 c -0.0764,-0.3821 -0.45266,-0.8414 -0.83409,-1.0181 l -0.3499,-0.1621 0.22682,-0.05 c 0.3316,-0.073 0.82213,-0.5935 0.92636,-0.9831005 0.0469,-0.1756 0.10389,-0.3191 0.12656,-0.3191 0.0227,0 0.0796,0.1435 0.12657,0.3191 0.10422,0.3896005 0.59476,0.9102005 0.92635,0.9831005 l 0.22682,0.05 -0.35394,0.164 c -0.39887,0.1848 -0.75508,0.6126 -0.82636,0.9926 -0.0555,0.296 -0.13869,0.3061 -0.19519,0.024 z m 4.6099,-3.1770005 c -0.0514,-0.116 -0.16681,-0.2444 -0.25654,-0.2853 l -0.16314,-0.074 0.24181,-0.2281 c 0.13299,-0.1254 0.24193,-0.2877 0.24207,-0.3606 2.3e-4,-0.099 0.0341,-0.077 0.13483,0.088 0.074,0.1213 0.20772,0.2719 0.29714,0.3345 l 0.16257,0.1139 -0.16257,0.1138 c -0.0894,0.063 -0.21662,0.2028 -0.28268,0.3114 l -0.1201,0.1975 -0.0934,-0.211 z m 3.3584894,-0.7349 c -0.021,-0.035 -0.0616,-0.1751 -0.0903,-0.3107 -0.0759,-0.3586 -0.35521,-0.8801 -0.64051,-1.1959 -0.25709,-0.2845 -0.8626294,-0.6318 -1.1161094,-0.6401 -0.0796,0 -0.0123,-0.046 0.14946,-0.097 0.39996,-0.1251 0.7436094,-0.3468 1.0129494,-0.6536 0.25977,-0.2958 0.62969,-1.0394 0.62977,-1.2658 5e-5,-0.2776 0.12223,-0.2373 0.1691,0.056 0.0601,0.3759 0.33823,0.9164 0.64795,1.2592 0.25708,0.2846 0.86262,0.6319 1.11611,0.6401 0.0796,0 0.0123,0.046 -0.14947,0.097 -0.78941,0.2468 -1.364,0.898 -1.59747,1.8102 -0.0514,0.2007 -0.11053,0.3361 -0.13149,0.3008 z m -5.8536194,-1.3451 c -0.0703,-0.4396 -0.44248,-0.9354 -0.86813,-1.1565 -0.35578,-0.1848 -0.35922,-0.1896 -0.16424,-0.2286 0.41813,-0.084 1.0397,-0.8739 1.06076,-1.3486 0.003,-0.078 0.0715,0.047 0.15128,0.2757 0.17302,0.4969 0.62133,0.985 0.97882,1.0657 l 0.23845,0.054 -0.24651,0.1006 c -0.47043,0.192 -0.84307,0.6466 -1.02199,1.2468 l -0.0827,0.2773 -0.0458,-0.2861 z m -2.39566,-1.7666 c -0.0533,-0.3328 -0.33021,-0.8898 -0.6117,-1.2302 -0.13182,-0.1594 -0.41707,-0.3602 -0.7239,-0.5095 -0.2785,-0.1355 -0.44984994,-0.2469 -0.38077,-0.2475 0.23203,0 0.79664,-0.3399 1.06509,-0.637 0.29341,-0.3248 0.67562,-1.0707 0.67571,-1.3187 1.1e-4,-0.25429996 0.11859,-0.18249996 0.16436,0.1 0.11474,0.707 0.85839,1.6053 1.48123,1.7892 l 0.31569,0.093 -0.48892,0.2365 c -0.35742,0.1729 -0.56295,0.3302 -0.7642,0.5848 -0.25532,0.323 -0.56724,0.998 -0.56724,1.2274 0,0.2231 -0.12631,0.1561 -0.16535,-0.088 z m 5.23936,-1.311 c -0.005,-0.2133 -0.27386,-0.5904 -0.4897,-0.6859 l -0.1993,-0.088 0.21979,-0.1458 c 0.12089,-0.08 0.28628,-0.2773 0.36755,-0.4379 l 0.14775,-0.2919 0.14919,0.3071 c 0.089,0.1831 0.23723,0.3526 0.36725,0.4198 l 0.21807,0.1128 -0.23328,0.155 c -0.1283,0.085 -0.30329,0.2974 -0.38885,0.4714 -0.0914,0.1857 -0.15676,0.2616 -0.15847,0.1837 z"/></svg></i> ' + ui.icon(options.icons.caret, 'span'),
            tooltip: 'Inline Elements',
            container: 'body',
            placement: 'bottom',
            data: {
              toggle: 'dropdown'
            }
          }),
          ui.dropdown([
            ui.buttonGroup({
              className: 'dropdown-template',
              children: [span, del, strike, ins, small, strong, em, cite, mark, variable, kbd, code, samp]
            })
          ])
        ]).render();
      });

      self.areDifferentBlockElements = function(startEl, endEl) {
        var startElDisplay = getComputedStyle(startEl, null).display;
        var endElDisplay  = getComputedStyle(endEl, null).display;

        if(startElDisplay !== 'inline' && endElDisplay !== 'inline') {
          console.log("Can't insert across two block elements.");
          return true;
        } else {
          return false;
        }
      };

      self.isSelectionParsable = function(startEl, endEl) {
        if(startEl.isSameNode(endEl)) { return true; }
        if( self.areDifferentBlockElements(startEl, endEl)) { return false; }
        var startElParent = startEl.parentElement;
        var endElParent = endEl.parentElement;
        if( startEl.isSameNode(endElParent) || endEl.isSameNode(startElParent) || startElParent.isSameNode(endElParent) ) {
          return true;
        } else
          console.log("Unable to parse across so many nodes. Sorry!")
        return false;
      };

      self.wrapInTag = function (tag,css) {
        if (window.getSelection) {
          var selection = window.getSelection(),
              selected = (selection.rangeCount > 0) && selection.getRangeAt(0);
          if (selected.startOffset !== selected.endOffset) {
            var range = selected.cloneRange();
            var startParentElement = range.startContainer.parentElement;
            var endParentElement = range.endContainer.parentElement;
            if( ! startParentElement.isSameNode(endParentElement)) {
              if ( ! self.isSelectionParsable(startParentElement, endParentElement)) {
                return;
              }
            }
            var newNode = document.createElement(tag);
            if(css) {
              var att = document.createAttribute("class");       // Create a "class" attribute
              att.value = css;                           // Set the value of the class attribute
              newNode.setAttributeNode(att);
            }
            newNode.appendChild(range.extractContents());
            range.insertNode(newNode)
            range.selectNodeContents(newNode);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      };
    }
  });
}));
