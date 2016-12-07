;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-ordinaryjiantou2you" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M678.016 771.136 992 512 678.016 252.864 678.016 421.888 32 421.888 32 601.984 678.016 601.984Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-add" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M440.281653 170.666666c-21.048789 0-37.96854 16.919746-37.96854 37.96854l0 193.677895-193.677905 0c-21.048794 0-37.96854 16.919751-37.96854 37.96854l0 143.436706c0 21.048789 16.919746 38.35206 37.96854 38.35206l193.677905 0 0 193.294384c0 21.048789 16.919751 37.96854 37.96854 37.96854l143.436706 0c21.048789 0 37.96854-16.919751 37.96854-37.96854l0-193.294384 193.677905 0c21.048789 0 37.96854-17.303271 37.96854-38.35206l0-143.436706c0-21.048789-16.919751-37.96854-37.96854-37.96854l-193.677905 0 0-193.677895c0-21.048794-16.919751-37.96854-37.96854-37.96854l-143.436706 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhedie" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M946.964 581.014l-869.93 0c-34.3 0-62.138-30.903-62.138-69.014s27.838-69.098 62.138-69.098l869.93 0c34.3 0.083 62.138 30.987 62.138 69.098 0 38.112-27.838 69.014-62.138 69.014zM946.964 235.859l-869.93 0c-34.3 0-62.138-30.903-62.138-69.014s27.838-69.098 62.138-69.098l869.93 0c34.3 0 62.138 30.903 62.138 69.098s-27.838 69.014-62.138 69.014zM77.036 788.223l869.93 0c34.3 0 62.138 30.903 62.138 69.014s-27.838 69.014-62.138 69.014l-869.93 0c-34.3 0-62.138-30.903-62.138-69.014s27.838-69.014 62.138-69.014z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconsousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M934.4 934.4c-32 32-83.2 32-121.6 0l-147.2-147.2c-64 38.4-134.4 64-211.2 64C236.8 851.2 64 672 64 454.4 64 236.8 236.8 64 454.4 64c217.6 0 390.4 172.8 390.4 390.4 0 76.8-25.6 147.2-64 211.2l147.2 147.2C966.4 851.2 966.4 902.4 934.4 934.4zM454.4 179.2c-153.6 0-281.6 128-281.6 281.6 0 153.6 128 281.6 281.6 281.6 153.6 0 281.6-128 281.6-281.6C736 300.8 614.4 179.2 454.4 179.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-time" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.162424 127.913275c-211.015971 0-382.716518 171.674964-382.716518 382.704239 0 211.030297 171.700547 382.728798 382.716518 382.728798s382.716518-171.6985 382.716518-382.728798C893.878942 299.588239 722.177372 127.913275 511.162424 127.913275zM511.162424 838.666968c-180.892907 0-328.050478-147.156548-328.050478-328.049454 0-180.88165 147.156548-328.037175 328.050478-328.037175 180.868347 0 328.026942 147.155525 328.026942 328.037175C839.188342 691.51042 692.030771 838.666968 511.162424 838.666968zM504.708432 319.259254l-54.66604 0 0 255.142981 236.905618 0 0-54.677297L504.708432 519.724938 504.708432 319.259254z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wenjianjia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M876.479155 247.554142 540.475542 247.554142l-28.018124-40.447201c-28.67611-53.323463-36.21583-80.893378-80.893378-80.893378l-283.128359 0c-44.677549 0-80.893378 36.21583-80.893378 80.893378l0 121.340579 0 40.447201 0 444.915116c0 44.677549 36.21583 80.893378 80.893378 80.893378l728.043475 0c44.677549 0 80.893378-36.21583 80.893378-80.893378L957.372533 328.447521C957.373557 283.769972 921.156704 247.554142 876.479155 247.554142z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontlock" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M365.702656 438.894592l292.552704 0 0-109.707264q0-60.567552-42.8544-103.421952t-103.421952-42.8544-103.421952 42.8544-42.8544 103.421952l0 109.707264zm475.398144 54.853632l0 329.121792q0 22.85568-15.998976 38.854656t-38.854656 15.998976l-548.53632 0q-22.85568 0-38.854656-15.998976t-15.998976-38.854656l0-329.121792q0-22.85568 15.998976-38.854656t38.854656-15.998976l18.284544 0 0-109.707264q0-105.136128 75.423744-180.559872t180.559872-75.423744 180.559872 75.423744 75.423744 180.559872l0 109.707264 18.284544 0q22.85568 0 38.854656 15.998976t15.998976 38.854656z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dayu-gengduo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M262.4 0l-38.4 44.8L704 512l-480 467.2 38.4 44.8 537.6-512z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-person" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M674.432 535.104c58.752-52.096 96.32-131.136 96.32-219.776 0-157.056-117.952-284.224-263.36-284.224-145.536 0-263.488 127.232-263.488 284.224 0 78.784 29.76 150.208 77.824 201.6C327.68 522.624 495.232 677.504 674.432 535.104zM851.072 731.712l-143.168-130.432c-53.76 44.032-206.016 136.896-416.576-3.328-63.36 48.768-232.704 188.8-213.888 283.264 0 0 3.328 98.496 182.4 103.296 0 0 533.696 39.424 622.464-52.416C882.176 932.032 979.136 869.568 851.072 731.712z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
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

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
