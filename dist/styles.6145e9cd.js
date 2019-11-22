// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/reset.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/font-sizes.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/source-sans-pro/source-sans-pro.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./WOFF2/TTF/SourceSansPro-ExtraLight.ttf.woff2":[["SourceSansPro-ExtraLight.ttf.b8eff5e7.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-ExtraLight.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-ExtraLight.ttf.woff2"],"./WOFF/OTF/SourceSansPro-ExtraLight.otf.woff":[["SourceSansPro-ExtraLight.otf.96acba99.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-ExtraLight.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-ExtraLight.otf.woff"],"./OTF/SourceSansPro-ExtraLight.otf":[["SourceSansPro-ExtraLight.3df2d131.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-ExtraLight.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-ExtraLight.otf"],"./TTF/SourceSansPro-ExtraLight.ttf":[["SourceSansPro-ExtraLight.67567479.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-ExtraLight.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-ExtraLight.ttf"],"./WOFF2/TTF/SourceSansPro-ExtraLightIt.ttf.woff2":[["SourceSansPro-ExtraLightIt.ttf.33e27ad4.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-ExtraLightIt.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-ExtraLightIt.ttf.woff2"],"./WOFF/OTF/SourceSansPro-ExtraLightIt.otf.woff":[["SourceSansPro-ExtraLightIt.otf.711b24b0.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-ExtraLightIt.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-ExtraLightIt.otf.woff"],"./OTF/SourceSansPro-ExtraLightIt.otf":[["SourceSansPro-ExtraLightIt.81ba32bf.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-ExtraLightIt.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-ExtraLightIt.otf"],"./TTF/SourceSansPro-ExtraLightIt.ttf":[["SourceSansPro-ExtraLightIt.adab1dc8.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-ExtraLightIt.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-ExtraLightIt.ttf"],"./WOFF2/TTF/SourceSansPro-Light.ttf.woff2":[["SourceSansPro-Light.ttf.e5de474f.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Light.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Light.ttf.woff2"],"./WOFF/OTF/SourceSansPro-Light.otf.woff":[["SourceSansPro-Light.otf.66de6760.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Light.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Light.otf.woff"],"./OTF/SourceSansPro-Light.otf":[["SourceSansPro-Light.f1608185.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-Light.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-Light.otf"],"./TTF/SourceSansPro-Light.ttf":[["SourceSansPro-Light.89ac8ae0.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-Light.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-Light.ttf"],"./WOFF2/TTF/SourceSansPro-LightIt.ttf.woff2":[["SourceSansPro-LightIt.ttf.659a7c54.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-LightIt.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-LightIt.ttf.woff2"],"./WOFF/OTF/SourceSansPro-LightIt.otf.woff":[["SourceSansPro-LightIt.otf.949e1391.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-LightIt.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-LightIt.otf.woff"],"./OTF/SourceSansPro-LightIt.otf":[["SourceSansPro-LightIt.a3ed018c.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-LightIt.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-LightIt.otf"],"./TTF/SourceSansPro-LightIt.ttf":[["SourceSansPro-LightIt.6cff0565.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-LightIt.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-LightIt.ttf"],"./WOFF2/TTF/SourceSansPro-Regular.ttf.woff2":[["SourceSansPro-Regular.ttf.dbb8548e.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Regular.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Regular.ttf.woff2"],"./WOFF/OTF/SourceSansPro-Regular.otf.woff":[["SourceSansPro-Regular.otf.accd218f.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Regular.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Regular.otf.woff"],"./OTF/SourceSansPro-Regular.otf":[["SourceSansPro-Regular.72542bdf.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-Regular.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-Regular.otf"],"./TTF/SourceSansPro-Regular.ttf":[["SourceSansPro-Regular.1032f84b.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-Regular.ttf"],"./WOFF2/TTF/SourceSansPro-It.ttf.woff2":[["SourceSansPro-It.ttf.b10d547e.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-It.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-It.ttf.woff2"],"./WOFF/OTF/SourceSansPro-It.otf.woff":[["SourceSansPro-It.otf.078ad091.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-It.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-It.otf.woff"],"./OTF/SourceSansPro-It.otf":[["SourceSansPro-It.b48de723.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-It.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-It.otf"],"./TTF/SourceSansPro-It.ttf":[["SourceSansPro-It.0debf177.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-It.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-It.ttf"],"./WOFF2/TTF/SourceSansPro-Semibold.ttf.woff2":[["SourceSansPro-Semibold.ttf.d927a3ed.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Semibold.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Semibold.ttf.woff2"],"./WOFF/OTF/SourceSansPro-Semibold.otf.woff":[["SourceSansPro-Semibold.otf.3c37389f.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Semibold.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Semibold.otf.woff"],"./OTF/SourceSansPro-Semibold.otf":[["SourceSansPro-Semibold.dd46642d.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-Semibold.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-Semibold.otf"],"./TTF/SourceSansPro-Semibold.ttf":[["SourceSansPro-Semibold.896ac256.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-Semibold.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-Semibold.ttf"],"./WOFF2/TTF/SourceSansPro-SemiboldIt.ttf.woff2":[["SourceSansPro-SemiboldIt.ttf.0cce0219.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-SemiboldIt.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-SemiboldIt.ttf.woff2"],"./WOFF/OTF/SourceSansPro-SemiboldIt.otf.woff":[["SourceSansPro-SemiboldIt.otf.be7efa9e.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-SemiboldIt.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-SemiboldIt.otf.woff"],"./OTF/SourceSansPro-SemiboldIt.otf":[["SourceSansPro-SemiboldIt.af1aeaf0.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-SemiboldIt.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-SemiboldIt.otf"],"./TTF/SourceSansPro-SemiboldIt.ttf":[["SourceSansPro-SemiboldIt.35051e11.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-SemiboldIt.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-SemiboldIt.ttf"],"./WOFF2/TTF/SourceSansPro-Bold.ttf.woff2":[["SourceSansPro-Bold.ttf.5e12e498.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Bold.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Bold.ttf.woff2"],"./WOFF/OTF/SourceSansPro-Bold.otf.woff":[["SourceSansPro-Bold.otf.2457fc48.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Bold.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Bold.otf.woff"],"./OTF/SourceSansPro-Bold.otf":[["SourceSansPro-Bold.40bf21b1.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-Bold.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-Bold.otf"],"./TTF/SourceSansPro-Bold.ttf":[["SourceSansPro-Bold.0e647141.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-Bold.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-Bold.ttf"],"./WOFF2/TTF/SourceSansPro-BoldIt.ttf.woff2":[["SourceSansPro-BoldIt.ttf.8e466e08.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-BoldIt.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-BoldIt.ttf.woff2"],"./WOFF/OTF/SourceSansPro-BoldIt.otf.woff":[["SourceSansPro-BoldIt.otf.06b47d2d.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-BoldIt.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-BoldIt.otf.woff"],"./OTF/SourceSansPro-BoldIt.otf":[["SourceSansPro-BoldIt.60decca1.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-BoldIt.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-BoldIt.otf"],"./TTF/SourceSansPro-BoldIt.ttf":[["SourceSansPro-BoldIt.258804b5.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-BoldIt.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-BoldIt.ttf"],"./WOFF2/TTF/SourceSansPro-Black.ttf.woff2":[["SourceSansPro-Black.ttf.f0c3a658.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Black.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-Black.ttf.woff2"],"./WOFF/OTF/SourceSansPro-Black.otf.woff":[["SourceSansPro-Black.otf.c7489059.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Black.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-Black.otf.woff"],"./OTF/SourceSansPro-Black.otf":[["SourceSansPro-Black.e8c49df6.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-Black.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-Black.otf"],"./TTF/SourceSansPro-Black.ttf":[["SourceSansPro-Black.828c590f.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-Black.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-Black.ttf"],"./WOFF2/TTF/SourceSansPro-BlackIt.ttf.woff2":[["SourceSansPro-BlackIt.ttf.c2e3291a.woff2","../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-BlackIt.ttf.woff2"],"../../node_modules/source-sans-pro/WOFF2/TTF/SourceSansPro-BlackIt.ttf.woff2"],"./WOFF/OTF/SourceSansPro-BlackIt.otf.woff":[["SourceSansPro-BlackIt.otf.4f8ea3d1.woff","../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-BlackIt.otf.woff"],"../../node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-BlackIt.otf.woff"],"./OTF/SourceSansPro-BlackIt.otf":[["SourceSansPro-BlackIt.1483e74a.otf","../../node_modules/source-sans-pro/OTF/SourceSansPro-BlackIt.otf"],"../../node_modules/source-sans-pro/OTF/SourceSansPro-BlackIt.otf"],"./TTF/SourceSansPro-BlackIt.ttf":[["SourceSansPro-BlackIt.3a11cb44.ttf","../../node_modules/source-sans-pro/TTF/SourceSansPro-BlackIt.ttf"],"../../node_modules/source-sans-pro/TTF/SourceSansPro-BlackIt.ttf"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/source-serif-pro/source-serif-pro.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./WOFF2/TTF/SourceSerifPro-ExtraLight.ttf.woff2":[["SourceSerifPro-ExtraLight.ttf.b1c8dcca.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-ExtraLight.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-ExtraLight.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-ExtraLight.otf.woff":[["SourceSerifPro-ExtraLight.otf.0d917876.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-ExtraLight.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-ExtraLight.otf.woff"],"./OTF/SourceSerifPro-ExtraLight.otf":[["SourceSerifPro-ExtraLight.fa39fd61.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-ExtraLight.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-ExtraLight.otf"],"./TTF/SourceSerifPro-ExtraLight.ttf":[["SourceSerifPro-ExtraLight.c1de11f5.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-ExtraLight.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-ExtraLight.ttf"],"./WOFF2/TTF/SourceSerifPro-ExtraLightIt.ttf.woff2":[["SourceSerifPro-ExtraLightIt.ttf.6d49c377.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-ExtraLightIt.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-ExtraLightIt.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-ExtraLightIt.otf.woff":[["SourceSerifPro-ExtraLightIt.otf.66f0e3cd.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-ExtraLightIt.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-ExtraLightIt.otf.woff"],"./OTF/SourceSerifPro-ExtraLightIt.otf":[["SourceSerifPro-ExtraLightIt.f7fbe086.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-ExtraLightIt.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-ExtraLightIt.otf"],"./TTF/SourceSerifPro-ExtraLightIt.ttf":[["SourceSerifPro-ExtraLightIt.fd208f8e.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-ExtraLightIt.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-ExtraLightIt.ttf"],"./WOFF2/TTF/SourceSerifPro-Light.ttf.woff2":[["SourceSerifPro-Light.ttf.dcf128e1.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Light.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Light.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-Light.otf.woff":[["SourceSerifPro-Light.otf.bd5a16af.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Light.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Light.otf.woff"],"./OTF/SourceSerifPro-Light.otf":[["SourceSerifPro-Light.003d7497.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-Light.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-Light.otf"],"./TTF/SourceSerifPro-Light.ttf":[["SourceSerifPro-Light.147b26b4.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-Light.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-Light.ttf"],"./WOFF2/TTF/SourceSerifPro-LightIt.ttf.woff2":[["SourceSerifPro-LightIt.ttf.435ca18b.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-LightIt.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-LightIt.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-LightIt.otf.woff":[["SourceSerifPro-LightIt.otf.3d2c267a.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-LightIt.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-LightIt.otf.woff"],"./OTF/SourceSerifPro-LightIt.otf":[["SourceSerifPro-LightIt.bd5f60d1.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-LightIt.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-LightIt.otf"],"./TTF/SourceSerifPro-LightIt.ttf":[["SourceSerifPro-LightIt.4fbe45df.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-LightIt.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-LightIt.ttf"],"./WOFF2/TTF/SourceSerifPro-Regular.ttf.woff2":[["SourceSerifPro-Regular.ttf.b0067433.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Regular.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Regular.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-Regular.otf.woff":[["SourceSerifPro-Regular.otf.8635c75e.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Regular.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Regular.otf.woff"],"./OTF/SourceSerifPro-Regular.otf":[["SourceSerifPro-Regular.78e2883b.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-Regular.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-Regular.otf"],"./TTF/SourceSerifPro-Regular.ttf":[["SourceSerifPro-Regular.bd402463.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-Regular.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-Regular.ttf"],"./WOFF2/TTF/SourceSerifPro-It.ttf.woff2":[["SourceSerifPro-It.ttf.83ff06e1.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-It.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-It.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-It.otf.woff":[["SourceSerifPro-It.otf.d6aacf03.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-It.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-It.otf.woff"],"./OTF/SourceSerifPro-It.otf":[["SourceSerifPro-It.443b7ef0.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-It.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-It.otf"],"./TTF/SourceSerifPro-It.ttf":[["SourceSerifPro-It.e38596ad.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-It.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-It.ttf"],"./WOFF2/TTF/SourceSerifPro-Semibold.ttf.woff2":[["SourceSerifPro-Semibold.ttf.66c51716.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Semibold.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Semibold.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-Semibold.otf.woff":[["SourceSerifPro-Semibold.otf.9c07b197.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Semibold.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Semibold.otf.woff"],"./OTF/SourceSerifPro-Semibold.otf":[["SourceSerifPro-Semibold.02784907.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-Semibold.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-Semibold.otf"],"./TTF/SourceSerifPro-Semibold.ttf":[["SourceSerifPro-Semibold.9d94ef58.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-Semibold.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-Semibold.ttf"],"./WOFF2/TTF/SourceSerifPro-SemiboldIt.ttf.woff2":[["SourceSerifPro-SemiboldIt.ttf.d30b6441.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-SemiboldIt.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-SemiboldIt.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-SemiboldIt.otf.woff":[["SourceSerifPro-SemiboldIt.otf.27bd0b21.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-SemiboldIt.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-SemiboldIt.otf.woff"],"./OTF/SourceSerifPro-SemiboldIt.otf":[["SourceSerifPro-SemiboldIt.2ca3c063.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-SemiboldIt.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-SemiboldIt.otf"],"./TTF/SourceSerifPro-SemiboldIt.ttf":[["SourceSerifPro-SemiboldIt.8375998a.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-SemiboldIt.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-SemiboldIt.ttf"],"./WOFF2/TTF/SourceSerifPro-Bold.ttf.woff2":[["SourceSerifPro-Bold.ttf.8e64716e.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Bold.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Bold.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-Bold.otf.woff":[["SourceSerifPro-Bold.otf.002d5208.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Bold.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Bold.otf.woff"],"./OTF/SourceSerifPro-Bold.otf":[["SourceSerifPro-Bold.5bb80219.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-Bold.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-Bold.otf"],"./TTF/SourceSerifPro-Bold.ttf":[["SourceSerifPro-Bold.0c545cfd.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-Bold.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-Bold.ttf"],"./WOFF2/TTF/SourceSerifPro-BoldIt.ttf.woff2":[["SourceSerifPro-BoldIt.ttf.44468a6e.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-BoldIt.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-BoldIt.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-BoldIt.otf.woff":[["SourceSerifPro-BoldIt.otf.339b2ca0.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-BoldIt.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-BoldIt.otf.woff"],"./OTF/SourceSerifPro-BoldIt.otf":[["SourceSerifPro-BoldIt.20e9d66d.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-BoldIt.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-BoldIt.otf"],"./TTF/SourceSerifPro-BoldIt.ttf":[["SourceSerifPro-BoldIt.a3a5e0ee.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-BoldIt.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-BoldIt.ttf"],"./WOFF2/TTF/SourceSerifPro-Black.ttf.woff2":[["SourceSerifPro-Black.ttf.1a7e6632.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Black.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-Black.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-Black.otf.woff":[["SourceSerifPro-Black.otf.d62d8209.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Black.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-Black.otf.woff"],"./OTF/SourceSerifPro-Black.otf":[["SourceSerifPro-Black.c35519ac.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-Black.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-Black.otf"],"./TTF/SourceSerifPro-Black.ttf":[["SourceSerifPro-Black.fad3243a.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-Black.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-Black.ttf"],"./WOFF2/TTF/SourceSerifPro-BlackIt.ttf.woff2":[["SourceSerifPro-BlackIt.ttf.312eb550.woff2","../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-BlackIt.ttf.woff2"],"../../node_modules/source-serif-pro/WOFF2/TTF/SourceSerifPro-BlackIt.ttf.woff2"],"./WOFF/OTF/SourceSerifPro-BlackIt.otf.woff":[["SourceSerifPro-BlackIt.otf.7b8a8e32.woff","../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-BlackIt.otf.woff"],"../../node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-BlackIt.otf.woff"],"./OTF/SourceSerifPro-BlackIt.otf":[["SourceSerifPro-BlackIt.281fd307.otf","../../node_modules/source-serif-pro/OTF/SourceSerifPro-BlackIt.otf"],"../../node_modules/source-serif-pro/OTF/SourceSerifPro-BlackIt.otf"],"./TTF/SourceSerifPro-BlackIt.ttf":[["SourceSerifPro-BlackIt.8534f53b.ttf","../../node_modules/source-serif-pro/TTF/SourceSerifPro-BlackIt.ttf"],"../../node_modules/source-serif-pro/TTF/SourceSerifPro-BlackIt.ttf"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../../../node_modules/source-sans-pro/source-sans-pro.css":"../../node_modules/source-sans-pro/source-sans-pro.css","../../../node_modules/source-serif-pro/source-serif-pro.css":"../../node_modules/source-serif-pro/source-serif-pro.css","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/resume.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/contact.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/experience.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/education.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/skills.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/colophon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/download.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/loader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"normalize.css":"../../node_modules/normalize.css/normalize.css","./reset.css":"styles/reset.css","./font-sizes.css":"styles/font-sizes.css","./fonts.css":"styles/fonts.css","./resume.css":"styles/resume.css","./contact.css":"styles/contact.css","./experience.css":"styles/experience.css","./education.css":"styles/education.css","./skills.css":"styles/skills.css","./colophon.css":"styles/colophon.css","./download.css":"styles/download.css","./loader.css":"styles/loader.css","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60801" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.6145e9cd.js.map