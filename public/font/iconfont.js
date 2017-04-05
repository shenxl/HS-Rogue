;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="anticon-zhengfu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M517.450864 76.833923c332.51139-10.344602 570.725344 396.289652 356.087284 676.538427 22.661021 22.659069 45.319995 45.318138 67.978969 67.977207 0 1.12666 0 2.181689 0 3.237741 0 3.235694 0 6.474458 0 9.710153-34.480692 36.733623-69.035065 73.396637-103.588414 110.058628-4.292945 0-8.584867 0-12.948424 0-12.386606-22.799262-50.106194-64.528666-77.69259-71.214948-81.069639 76.774571-289.513372 96.127338-414.35468 45.318138-39.90239-20.478404-79.874368-40.953737-119.774712-61.502749-1.056095 1.12666-2.181778 2.180666-3.23685 3.236718 1.477715 54.04387-16.326496 59.815317-42.083145 84.161818C91.694039 959.979918 35.887795 894.113791 93.382563 821.35058c21.603902-5.348821 43.138217-10.766205 64.743143-16.183588-3.23685-3.237741-6.474724-6.474458-9.711574-9.712199-14.849805-27.161616-41.732137-39.125089-48.557869-74.452689 27.163753-18.857487 42.012534-55.591109 74.454716-67.976184 37.860811 79.658248 364.250532 215.895095 466.150422 97.109712-93.875817-92.749404-187.754704-185.565323-281.632568-278.383288-17.242393 15.129582-34.55335 30.224372-51.794719 45.318138-6.896343 12.245905-18.085631 21.181415-29.134721 29.134551-3.23685 0-6.474724 0-9.711574 0-39.90239-40.9916-79.873345-81.982176-119.774712-123.007545 74.454716-75.507718 148.909433-151.049205 223.364149-226.591715 59.04207 8.515954 89.443696 2.955308 142.434709-16.184611 20.479243 22.659069 41.028073 45.318138 61.507316 67.977207-35.610468 35.606962-71.217866 71.214948-106.826288 106.821911 94.933959 94.964862 189.936482 189.929724 284.871465 284.85877 6.261867-4.503571 1.968922-0.281409 6.471654-6.474458 22.942442-22.236444 25.476252-54.606689 32.373618-93.874017 31.737095-179.829691-69.809739-316.629357-158.621006-391.678634C595.141407 124.298957 556.296135 100.549044 517.450864 76.833923z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-daily" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M823.872 0 200.128 0C89.792 0 0 84.16 0 187.648l0 648.768C0 939.84 89.792 1024 200.128 1024l623.744 0C934.272 1024 1024 939.84 1024 836.352L1024 187.648C1024 84.16 934.272 0 823.872 0zM952.384 836.352c0 64-57.6 116.032-128.512 116.032L200.128 952.384c-70.848 0-128.512-52.032-128.512-116.032L71.616 187.648c0-64 57.664-116.032 128.512-116.032l623.744 0c70.848 0 128.512 52.032 128.512 116.032L952.384 836.352z"  ></path>' +
    '' +
    '<path d="M409.6 186.112l204.8 0 0 57.28-204.8 0 0-57.28Z"  ></path>' +
    '' +
    '<path d="M329.728 163.584l57.28 0 0 102.4-57.28 0 0-102.4Z"  ></path>' +
    '' +
    '<path d="M636.928 163.584l57.344 0 0 102.4-57.344 0 0-102.4Z"  ></path>' +
    '' +
    '<path d="M817.472 186.112 716.8 186.112l0 57.28 90.816 0 0 79.232L216.384 322.624 216.384 243.392 307.2 243.392 307.2 186.112 203.072 186.112c-24.64 0-44.032 20.096-44.032 45.696l0 546.176c0 25.6 19.328 45.76 44.032 45.76l614.464 0c25.664 0 47.424-20.928 47.424-45.76L864.96 231.872C864.96 207.04 843.2 186.112 817.472 186.112zM216.384 766.464 216.384 379.968l591.232 0 0 386.496L216.384 766.464z"  ></path>' +
    '' +
    '<path d="M418.368 438.336 418.368 506.304 526.4 506.304 434.432 721.6 511.232 721.6 620.416 476.736 601.28 438.336Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-qiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M575 122 191 122c-35.3 0-64 28.7-64 64l0 642c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64L639 186C639 150.7 610.3 122 575 122zM575 829.1 191 829.1 191 187l384 0L575 829.1z"  ></path>' +
    '' +
    '<path d="M255 319l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M412 319l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M255 448l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M412 448l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M255 576l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M412 576l102 0 0 64-102 0 0-64Z"  ></path>' +
    '' +
    '<path d="M834 332 575 332l0 65 259 0 0 432.1L575 829.1 575 892l259 0c35.3 0 64-28.7 64-64L898 396C898 360.6 869.3 332 834 332z"  ></path>' +
    '' +
    '<path d="M704.5 448l64 0 0 64-64 0 0-64Z"  ></path>' +
    '' +
    '<path d="M704.5 577l64 0 0 64-64 0 0-64Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-tongbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M171.930279 422.23865c0-5.859451-0.709151-11.530614-1.890047-17.012466l109.307522-87.710644c10.326183 4.819772 21.739117 7.725962 33.884738 7.725962 15.94925 0 30.764678-4.796236 43.240827-12.831236l98.603739 59.499116c-0.165776 2.00875-0.591471 3.922333-0.591471 5.978155 0 44.399209 35.964096 80.386842 80.33977 80.386842 44.375673 0 80.338746-35.987632 80.338746-80.386842 0-8.483208-1.678222-16.492626-4.111644-24.172539l162.757874-166.490895c8.459672 3.025916 17.438161 4.963035 26.937512 4.963035 44.37465 0 80.338746-35.986609 80.338746-80.385818 0-44.399209-35.964096-80.386842-80.338746-80.386842-44.375673 0-80.33977 35.986609-80.33977 80.386842 0 8.529257 1.700735 16.58677 4.158716 24.313755l-162.640194 166.420287c-8.506744-3.071965-17.533328-5.010107-27.102265-5.010107-16.210193 0-31.28554 4.891404-43.902906 13.160741l-98.061386-59.190077c0.189312-2.221598 0.661056-4.371564 0.661056-6.66377 0-44.375673-35.963073-80.363306-80.291674-80.363306-44.375673 0-80.338746 35.987632-80.338746 80.363306 0 6.001691 0.756223 11.81407 1.984191 17.414625l-109.071138 87.545892c-10.396791-4.962012-21.928429-7.939833-34.215266-7.939833-44.375673 0-80.338746 36.010145-80.338746 80.386842 0 44.399209 35.964096 80.385818 80.338746 80.385818S171.930279 466.63786 171.930279 422.23865z"  ></path>' +
    '' +
    '<path d="M933.732625 563.611471c-44.375673 0-80.33977 35.987632-80.33977 80.387865 0 8.529257 1.701758 16.564257 4.158716 24.266683L694.888865 834.708819c-8.506744-3.071965-17.533328-5.010107-27.078729-5.010107-9.073656 0-17.627473 1.843998-25.732058 4.583388L521.923512 713.962781c2.742461-8.081049 4.583388-16.58677 4.583388-25.613354 0-44.399209-35.963073-80.386842-80.337723-80.386842-44.375673 0-80.338746 35.987632-80.338746 80.386842 0 5.978155 0.779759 11.766998 2.032286 17.391089l-109.072161 87.521333c-10.420327-4.938476-21.927405-7.915273-34.214243-7.915273-44.375673 0-80.338746 35.987632-80.338746 80.386842s35.963073 80.386842 80.338746 80.386842c44.375673 0 80.338746-35.987632 80.338746-80.386842 0-5.836939-0.709151-11.507078-1.890047-17.036002l109.307522-87.711667c10.326183 4.820796 21.715581 7.726985 33.836643 7.726985 9.026584 0 17.532305-1.818415 25.613354-4.560876L592.007707 884.518249c-2.741437 8.080026-4.53734 16.587793-4.53734 25.566282 0 44.375673 35.964096 80.386842 80.33977 80.386842 44.327578 0 80.338746-36.010145 80.338746-80.386842 0-8.483208-1.700735-16.492626-4.111644-24.150026L906.796136 719.398584c8.459672 3.02387 17.438161 4.962012 26.936489 4.962012 44.375673 0 80.33977-35.986609 80.33977-80.361259C1014.072395 599.599104 978.108299 563.611471 933.732625 563.611471z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-monthly" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M567.962058 120.265084 456.037942 120.265084l0 55.962569 111.924115 0L567.962058 120.265084zM847.771835 120.265084l-55.962569 0 0 55.962569c61.809741 0 111.924115 50.114374 111.924115 111.924115l0 503.659031c0 61.809741-50.114374 111.924115-111.924115 111.924115L232.189711 903.734916c-61.809741 0-111.924115-50.114374-111.924115-111.924115L120.265596 288.151769c0-61.809741 50.114374-111.924115 111.924115-111.924115l0-55.962569-55.962569 0c-61.809741 0-111.924115 50.114374-111.924115 111.924115l0 615.583147c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115L959.69595 232.1892C959.69595 170.380482 909.582599 120.265084 847.771835 120.265084zM735.847719 64.303538 623.923604 64.303538l0 111.924115 111.924115 0L735.847719 64.303538zM400.075373 64.303538 288.151257 64.303538l0 111.924115 111.924115 0L400.075373 64.303538zM313.919131 429.887864c7.78736-17.187451 22.680559-25.795503 44.676525-25.795503 18.090007 0 31.205723 6.448876 39.34817 19.346627 5.328355 8.225335 8.006348 18.088984 8.006348 29.538757 0 21.859867-7.814989 36.725436-23.417339 44.594661-8.853645 4.64581-22.160719 6.995321-39.894615 6.995321l-11.695367 0 0 53.721529c24.811082 0 43.256176 2.514263 55.305607 7.541767 19.510356 8.197706 29.265534 23.827685 29.265534 46.670949 0 20.439518-5.683443 36.396955-17.023722 47.874357-9.918907 9.999748-22.870894 15.029298-38.829354 15.029298-21.99699 0-37.59934-8.580422-46.808072-25.795503-5.684466-10.766205-8.334829-24.537859-7.978718-41.370223l-72.876798 0c0 51.589982 17.570167 87.768973 52.656267 108.534925 20.931728 12.514012 47.163159 18.800181 78.723969 18.800181 38.310537 0 69.323878-11.477402 93.097328-34.43016 23.74582-22.843264 35.632545-52.464909 35.632545-88.642876 0-22.188348-4.863774-40.987506-14.618952-56.398498-9.755178-15.356756-23.855314-26.478048-42.299385-33.282011 12.760628-5.737678 23.063275-14.154371 30.850635-25.248034 9.591449-13.607926 14.372336-29.375028 14.372336-47.272653 0-36.889165-13.307074-64.815191-39.894615-83.806731-20.931728-15.055904-46.644343-22.571065-77.138868-22.571065-41.479717 0-73.040527 11.44875-94.682429 34.374902-20.192901 21.50478-30.303166 50.852178-30.303166 88.12406L307.52449 466.421942C307.52449 451.365015 309.656037 439.205067 313.919131 429.887864zM530.416953 539.489074c0 66.564022 10.710946 115.968222 32.18912 147.993612 21.422915 32.024367 54.32221 48.092321 98.643648 48.092321 44.704155 0 77.657684-15.95846 98.972129-47.819099 21.258163-31.861662 31.914874-81.320097 31.914874-148.266835 0-66.61928-10.766205-115.886357-32.244378-147.748019-21.422915-31.888268-54.32221-47.819099-98.642624-47.819099-44.649919 0-77.658707 15.930831-98.917894 47.819099C541.073664 423.602717 530.416953 472.870818 530.416953 539.489074zM618.459149 433.904341c7.597025-19.865443 21.859867-29.811979 42.791595-29.811979 20.930705 0 35.19457 10.028401 42.790572 30.085202 7.65126 20.056801 11.476379 55.141878 11.476379 105.311511 0 50.497091-3.825119 85.801155-11.476379 105.803721-7.597025 20.111037-21.859867 30.112832-42.790572 30.112832-20.931728 0-35.195593-10.111289-42.791595-30.331819-7.65126-20.274766-11.476379-55.415101-11.476379-105.584734C606.98277 488.964354 610.807888 453.797413 618.459149 433.904341z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-jinrong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.205437 857.190857l0-49.570999-41.114396 0L875.09104 324.094376l56.30333 0 0-56.610322L542.402939 117.193119l-60.82839 0L92.58107 267.484054l0 56.610322 56.304354 0 0 483.525482-41.134863 0 0 49.570999L41.981648 857.190857l0 49.615001 940.034657 0 0-49.615001L916.205437 857.190857zM630.35713 526.710027l0 44.413536-92.52223 0 0 50.577932 92.52223 0 0 44.413536-92.52223 0 0 110.466927-51.649334 0L486.185566 666.116053l-92.52223 0 0-44.413536 92.52223 0 0-50.577932-92.52223 0 0-44.413536 86.8613 0L339.283822 340.40076l63.102177 0 109.592001 141.764748 109.61349-141.764748 63.102177 0L543.451828 526.710027 630.35713 526.710027z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="anticon-version" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M713.386667 252.586667h119.466666c13.653333 0 23.893333-20.48 13.653334-30.72l-119.466667-116.053334c-10.24-10.24-30.72-3.413333-30.72 13.653334v116.053333c0 10.24 6.826667 17.066667 17.066667 17.066667z" fill="#646464" ></path>' +
    '' +
    '<path d="M727.04 317.44c-64.853333 0-88.746667-23.893333-92.16-95.573333V102.4H245.76c-51.2 0-71.68 23.893333-71.68 71.68v675.84c0 54.613333 23.893333 71.68 71.68 71.68h532.48c51.2 0 71.68-20.48 71.68-71.68V317.44h-122.88zM286.72 204.8h228.693333c10.24 0 17.066667 6.826667 17.066667 17.066667s-6.826667 17.066667-17.066667 17.066666H286.72c-10.24 0-17.066667-6.826667-17.066667-17.066666s6.826667-17.066667 17.066667-17.066667z m-17.066667 119.466667c0-10.24 6.826667-17.066667 17.066667-17.066667h228.693333c10.24 0 17.066667 6.826667 17.066667 17.066667s-6.826667 17.066667-17.066667 17.066666H286.72c-10.24 0-17.066667-6.826667-17.066667-17.066666z m430.08 174.08l-126.293333 276.48c-3.413333 6.826667-10.24 10.24-17.066667 10.24h-92.16c-6.826667 0-13.653333-3.413333-17.066666-10.24l-126.293334-276.48c-6.826667-10.24 3.413333-23.893333 17.066667-23.893334h44.373333c6.826667 0 13.653333 3.413333 17.066667 10.24 20.48 44.373333 105.813333 218.453333 105.813333 232.106667h6.826667c3.413333-10.24 61.44-109.226667 109.226667-232.106667 3.413333-6.826667 10.24-10.24 17.066666-10.24H682.666667c13.653333-3.413333 20.48 10.24 17.066666 23.893334z" fill="#646464" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)