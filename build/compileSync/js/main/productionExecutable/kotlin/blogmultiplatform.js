(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    root['com.example.blogmultiplatform:site'] = factory(typeof this['com.example.blogmultiplatform:site'] === 'undefined' ? {} : this['com.example.blogmultiplatform:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var removePrefix = kotlin_kotlin.$_$.l7;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var to = kotlin_kotlin.$_$.c9;
  var mapOf = kotlin_kotlin.$_$.u3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.b9;
  var toInt = kotlin_kotlin.$_$.z7;
  var charSequenceLength = kotlin_kotlin.$_$.l5;
  var toBoolean = kotlin_kotlin.$_$.y7;
  var isBlank = kotlin_kotlin.$_$.g7;
  var VOID = kotlin_kotlin.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.m7;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).g2c(true);
    Companion_instance.s2d('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.j2f(LegacyRouteRedirectStrategy_DISALLOW_getInstance());
    router.k2f(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.n2f(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.o2c(mapOf(to('title', 'BlogMultiplatform')));
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:111)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.o18();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance().d12_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.u18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.m17();
      renderWithDeferred(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:111)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.x11();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.s36_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.t36_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_instance;
        } else {
          forceReloadNow();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.k2d_1.i2f('/', VOID, ComposableSingletons$MainKt_getInstance().s36_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.o2f(removeSuffix(removeSuffix($this$addRouteInterceptor.c2f_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:111)');
        }
        $router.f2f(ComposableSingletons$MainKt_getInstance().t36_1, $composer_0, 70, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.x11();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:110)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.o18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.u18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.m17();
      AppEntry(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1812862627);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1812862627, $dirty, -1, 'com.example.blogmultiplatform.AppEntry (AppEntry.kt:13)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1738055388, true, AppEntry$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.o18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.u18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.m17();
      SilkApp(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    var tmp0_safe_receiver = $composer_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1121761922, $changed, -1, 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:16)');
      }
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(1738055388, $changed, -1, 'com.example.blogmultiplatform.AppEntry.<anonymous> (AppEntry.kt:15)');
        }
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1121761922, true, AppEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.l17(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.ez(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.o18();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().d12_1) {
          // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.u18(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.m17();
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196616, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.x11();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(389254151);
    if (!($changed === 0) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(389254151, $changed, -1, 'com.example.blogmultiplatform.pages.HomePage (Index.kt:14)');
      }
      var tmp = fillMaxSize(Companion_instance_0);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().u36_1, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    var tmp0_safe_receiver = $composer_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1234302399, $changed, -1, 'com.example.blogmultiplatform.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:22)');
    }
    Text('THIS PAGE INTENTIONALLY LEFT BLANK', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.u36_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1234302399, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map
