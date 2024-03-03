(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-browser-ext.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-browser-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-browser-ext'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-html-core']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_browser_ext, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_http = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.i6;
  var classMeta = kotlin_kotlin.$_$.m5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  var KMutableProperty0 = kotlin_kotlin.$_$.r6;
  var KMutableProperty1 = kotlin_kotlin.$_$.s6;
  var lazy = kotlin_kotlin.$_$.v8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var toString = kotlin_kotlin.$_$.l6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var substringAfterLast = kotlin_kotlin.$_$.t7;
  var plus = kotlin_kotlin.$_$.y3;
  var equals = kotlin_kotlin.$_$.p5;
  var getStringHashCode = kotlin_kotlin.$_$.u5;
  var hashCode = kotlin_kotlin.$_$.v5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.a9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Enum = kotlin_kotlin.$_$.g8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.l5;
  var joinToString = kotlin_kotlin.$_$.k3;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var removePrefix = kotlin_kotlin.$_$.l7;
  var startsWith = kotlin_kotlin.$_$.r7;
  var drop = kotlin_kotlin.$_$.b7;
  var first = kotlin_kotlin.$_$.f7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var charArrayOf = kotlin_kotlin.$_$.j5;
  var split = kotlin_kotlin.$_$.p7;
  var getOrNull = kotlin_kotlin.$_$.h3;
  var Exception = kotlin_kotlin.$_$.i8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.i5;
  var substringAfterLast_0 = kotlin_kotlin.$_$.u7;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var isBlank = kotlin_kotlin.$_$.g7;
  var startsWith_0 = kotlin_kotlin.$_$.s7;
  var endsWith = kotlin_kotlin.$_$.c7;
  var dropLast = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var contains = kotlin_kotlin.$_$.y6;
  var Pair = kotlin_kotlin.$_$.l8;
  var plus_0 = kotlin_kotlin.$_$.a4;
  var replace = kotlin_kotlin.$_$.n7;
  var equals_0 = kotlin_kotlin.$_$.e7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var lastOrNull = kotlin_kotlin.$_$.o3;
  var Collection = kotlin_kotlin.$_$.k2;
  var isInterface = kotlin_kotlin.$_$.a6;
  var get_lastIndex = kotlin_kotlin.$_$.n3;
  var last = kotlin_kotlin.$_$.p3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var kebabCaseToCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var replace_0 = kotlin_kotlin.$_$.o7;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var setOf = kotlin_kotlin.$_$.e4;
  var charSequenceGet = kotlin_kotlin.$_$.k5;
  var removeSuffix = kotlin_kotlin.$_$.m7;
  var substringAfter = kotlin_kotlin.$_$.v7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var setInterval = kotlin_com_varabyte_kobweb_browser_ext.$_$.e;
  var toMutableMap = kotlin_kotlin.$_$.k4;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApiFetcher, 'ApiFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 5]);
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(AppGlobals, 'AppGlobals', objectMeta);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, VOID, MutableKobwebConfig);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, VOID, MutableOpenLinkStrategies);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node, VOID, RootNode);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, Node);
  setMetadataFor(ProxyStaticNode, 'ProxyStaticNode', classMeta, Node);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, Node);
  setMetadataFor(ResolvedEntry, 'ResolvedEntry', classMeta);
  setMetadataFor(RouteTree, 'RouteTree', classMeta, VOID, VOID, RouteTree);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(LegacyRouteRedirectStrategy, 'LegacyRouteRedirectStrategy', classMeta, Enum);
  setMetadataFor(Router, 'Router', classMeta, VOID, VOID, Router);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    // Inline function 'kotlin.getValue' call
    var this_0 = api$delegate;
    api$factory();
    return this_0.j2();
  }
  var api$delegate;
  function ApiFetcher(window_0) {
    this.e2c_1 = window_0;
    this.f2c_1 = logOnError$factory(get_http(this.e2c_1));
  }
  protoOf(ApiFetcher).g2c = function (_set____db54di) {
    var this_0 = this.f2c_1;
    logOnError$factory_0();
    this_0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(ApiFetcher).h2c = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.f2c_1;
    logOnError$factory_1();
    return this_0.get();
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function api$factory() {
    return getPropertyCallableRef('api', 1, KProperty1, function (receiver) {
      return get_api(receiver);
    }, null);
  }
  function logOnError$factory($b0) {
    return getPropertyCallableRef('logOnError', 0, KMutableProperty0, function () {
      return $b0.hs_1;
    }, function (value) {
      $b0.hs_1 = value;
      return Unit_instance;
    });
  }
  function logOnError$factory_0() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.h2c();
    }, function (receiver, value) {
      return receiver.g2c(value);
    });
  }
  function logOnError$factory_1() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.h2c();
    }, function (receiver, value) {
      return receiver.g2c(value);
    });
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
    }
  }
  function KobwebApp(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-728368768);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-728368768, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.l17(-1196466140);
      Style(null, styleSheet.y26(), $composer_1, 0, 1);
      $composer_1.m17();
      content($composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.a1e(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    this.d27('html, body', DefaultStyleSheet$lambda);
    this.d27('*', DefaultStyleSheet$lambda_0);
  }
  protoOf(DefaultStyleSheet).c27 = function (selector, cssRule) {
    return this.b27(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppGlobals() {
  }
  protoOf(AppGlobals).o2c = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this.n2c_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.n2c_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function RouteInfo(route, dynamicParams) {
    this.p2c_1 = route;
    this.q2c_1 = dynamicParams;
    this.r2c_1 = substringAfterLast(this.p2c_1.x2c_1, _Char___init__impl__6a9atx(47));
    this.s2c_1 = this.p2c_1.x2c_1;
    this.t2c_1 = plus(this.p2c_1.y2c_1, this.q2c_1);
    this.u2c_1 = this.p2c_1.y2c_1;
    this.v2c_1 = this.p2c_1.z2c_1;
  }
  protoOf(RouteInfo).a2d = function () {
    return this.p2c_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.a2d();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.s2c_1 === this.s2c_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.t2c_1, this.t2c_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v2c_1 == this.v2c_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.s2c_1);
    result = imul(31, result) + hashCode(this.t2c_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.v2c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).b2d = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).c2d = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.p2c_1.x2c_1 : path;
    queryParams = queryParams === VOID ? this.p2c_1.y2c_1 : queryParams;
    fragment = fragment === VOID ? this.p2c_1.z2c_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.q2c_1 : dynamicParams;
    return $super === VOID ? this.b2d(path, queryParams, fragment, dynamicParams) : $super.b2d.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
  }
  protoOf(Companion).e2d = function () {
    var tmp = this.d2d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).f2d = function (router) {
    this.d2d_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function PageContext(router) {
    this.g2d_1 = router;
    this.h2d_1 = mutableStateOf(null);
  }
  protoOf(PageContext).i2d = function (value) {
    this.h2d_1.eq(value);
  };
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.j2d_1 = config;
    this.k2d_1 = router;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  var MutableKobwebConfigInstance;
  function MutableKobwebConfig() {
    this.l2d_1 = new MutableOpenLinkStrategies();
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.m2d_1 = internal;
    this.n2d_1 = external;
  }
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.p9_1;
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.q5(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.o()) {
      this_0.r5(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.i());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.f2().k();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.i2();
        // Inline function 'kotlin.collections.component2' call
        var value = item.j2();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.q5(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.r5(_Char___init__impl__6a9atx(61));
          this_1.q5(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.u(tmp$ret$7);
      }
      this_0.q5(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.r5(_Char___init__impl__6a9atx(35));
      this_0.q5(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_0() {
  }
  protoOf(Companion_0).o2d = function (path) {
    return !(this.p2d(path) == null);
  };
  protoOf(Companion_0).p2d = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_0).q2d = function (url) {
    var tmp0_elvis_lhs = this.p2d(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function Route(pathQueryAndFragment) {
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.w2c_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.w2c_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.w2c_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.w2c_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.x2c_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.w2c_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.w2c_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.j(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.g2(key, value);
      }
    }
    tmp_3.y2c_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.w2c_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.z2c_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
  }
  protoOf(Route).toString = function () {
    return this.x2c_1 + this.w2c_1.search + this.w2c_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function get_slug(_this__u8e3s4) {
    return substringAfterLast_0(_this__u8e3s4.x2c_1, '/');
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_instance_1.r2d(path) : path;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).s2d = function (value) {
    Companion_instance_2.u2d(new RoutePrefixImpl(value));
  };
  protoOf(Companion_1).j2 = function () {
    return Companion_instance_2.e2d().v2d_1;
  };
  protoOf(Companion_1).r2d = function (path) {
    return Companion_instance_2.e2d().r2d(path);
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function Companion_2() {
    this.t2d_1 = null;
  }
  protoOf(Companion_2).u2d = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t2d_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.t2d_1 = value;
  };
  protoOf(Companion_2).w2d = function () {
    if (this.t2d_1 == null) {
      this.t2d_1 = new RoutePrefixImpl('');
    }
    return this.t2d_1;
  };
  protoOf(Companion_2).e2d = function () {
    return ensureNotNull(this.w2d());
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function RoutePrefixImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.v2d_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(RoutePrefixImpl).r2d = function (path) {
    if (isBlank(this.v2d_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.v2d_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.v2d_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.j2();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.j2(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function Node(name, method) {
    this.x2d_1 = name;
    this.y2d_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2d_1 = ArrayList_init_$Create$_0();
    this.a2e_1 = this.z2d_1;
  }
  protoOf(Node).b2e = function (name) {
    return this.x2d_1 === name;
  };
  protoOf(Node).c2e = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(tmp$ret$1, method);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new StaticNode(routePart, method);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Node.createChild.<anonymous>' call
      if (contains(routePart, _Char___init__impl__6a9atx(45))) {
        this.z2d_1.u(new ProxyStaticNode(this_0));
      }
      tmp = this_0;
    }
    var node = tmp;
    this.z2d_1.u(node);
    return node;
  };
  protoOf(Node).d2e = function (routePart) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.partition' call
    var this_0 = this.z2d_1;
    var first = ArrayList_init_$Create$_0();
    var second = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
      if (!(element instanceof ProxyStaticNode)) {
        first.u(element);
      } else {
        second.u(element);
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    var name_for_destructuring_parameter_0_fjsvno = new Pair(first, second);
    var normalNodes = name_for_destructuring_parameter_0_fjsvno.yd();
    var proxyNodes = name_for_destructuring_parameter_0_fjsvno.zd();
    // Inline function 'kotlin.collections.find' call
    var this_1 = plus_0(normalNodes, proxyNodes);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = this_1.k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>.<anonymous>' call
        if (element_0.b2e(routePart)) {
          tmp$ret$3 = element_0;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    return tmp$ret$3;
  };
  function RootNode() {
    Node.call(this, '', null);
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
  }
  function ProxyStaticNode(targetNode) {
    Node.call(this, replace(targetNode.x2d_1, '-', ''), targetNode.y2d_1);
    this.i2e_1 = targetNode;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.x2d_1 === this.i2e_1.x2d_1)) {
      // Inline function 'com.varabyte.kobweb.navigation.ProxyStaticNode.<anonymous>' call
      var message = 'Invalid proxy node contains same name as target node (' + this.x2d_1 + '). Please report this issue at https://github.com/varabyte/kobweb/issues/';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(ProxyStaticNode).b2e = function (name) {
    return equals_0(this.x2d_1, name, true);
  };
  protoOf(ProxyStaticNode).d2e = function (routePart) {
    return this.i2e_1.d2e(routePart);
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
  }
  protoOf(DynamicNode).b2e = function (name) {
    return true;
  };
  function ResolvedEntry(node, routePart) {
    this.n2e_1 = node;
    this.o2e_1 = routePart;
  }
  function resolve($this, route, excludeProxyNodes) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.p2e_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.j(0) === $this.p2e_1.x2d_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.j(i);
        var tmp1_elvis_lhs = currNode.d2e(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        var tmp_0;
        if (currNode instanceof ProxyStaticNode) {
          tmp_0 = excludeProxyNodes;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          return null;
        }
        resolved.u(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function resolve$default($this, route, excludeProxyNodes, $super) {
    excludeProxyNodes = excludeProxyNodes === VOID ? $this.r2e_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) : excludeProxyNodes;
    return resolve($this, route, excludeProxyNodes);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.p2e_1.a2e_1.o()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith_0(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolve$default($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedEntries = tmp;
    var tmp1_safe_receiver = lastOrNull(resolvedEntries);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2e_1;
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y2d_1) == null)
      return null;
    var resolvedString = checkRoute$toRegisteredRouteString(resolvedEntries);
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(resolvedEntries, Collection)) {
        tmp_0 = resolvedEntries.o();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = false;
        break $l$block_0;
      }
      var tmp0_iterator = resolvedEntries.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
        var tmp_1 = element.n2e_1;
        if (tmp_1 instanceof ProxyStaticNode) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
      }
      tmp$ret$3 = false;
    }
    if (tmp$ret$3) {
      if ($this.r2e_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()))
        return null;
      if ($this.r2e_1.equals(LegacyRouteRedirectStrategy_WARN_getInstance())) {
        console.warn('Legacy route "' + route + '" is not itself registered but is being handled as "' + resolvedString + '". The site owner can disable this redirect by setting `kobweb.app.legacyRouteRedirectStrategy` to `DISALLOW` in the site\'s build script.');
      }
    }
    return resolvedString;
  }
  function checkRoute$toRegisteredRouteString(_this__u8e3s4) {
    return '/' + joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, RouteTree$checkRoute$toRegisteredRouteString$lambda);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:225)');
        }
        this$0.q2e_1(404, $composer_0, 6);
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
  function RouteTree$checkRoute$toRegisteredRouteString$lambda(it) {
    var tmp;
    var tmp_0 = it.n2e_1;
    if (!(tmp_0 instanceof ProxyStaticNode)) {
      tmp = it.o2e_1;
    } else {
      tmp = it.n2e_1.i2e_1.x2d_1;
    }
    return tmp;
  }
  function RouteTree() {
    this.p2e_1 = new RootNode();
    this.q2e_1 = ComposableSingletons$RouteTreeKt_getInstance().s2e_1;
    this.r2e_1 = LegacyRouteRedirectStrategy_WARN_getInstance();
  }
  protoOf(RouteTree).t2e = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).u2e = function (route, method) {
    if (!(resolve(this, route, true) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.p2e_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.j(0) === this.p2e_1.x2d_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.j(i);
        // Inline function 'kotlin.takeUnless' call
        var this_0 = currNode.d2e(routePart);
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
        if (!(this_0 instanceof ProxyStaticNode)) {
          tmp = this_0;
        } else {
          tmp = null;
        }
        var tmp1_elvis_lhs = tmp;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp_1 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_2 = method;
          } else {
            tmp_2 = null;
          }
          var tmp$ret$4 = tmp_2;
          tmp_0 = tmp_1.c2e(routePart, tmp$ret$4);
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        currNode = tmp_0;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(RouteTree).v2e = function (route) {
    var resolvedEntries = resolve$default(this, route.x2c_1);
    var tmp1_safe_receiver = resolvedEntries == null ? null : last(resolvedEntries);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2e_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.y2d_1;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      tmp = ComposableLambda$invoke$ref(composableLambdaInstance(-729357476, true, RouteTree$createPageData$lambda(this)));
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var pageMethod = tmp;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    if (resolvedEntries == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = resolvedEntries.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.n2e_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var key = element.n2e_1.x2d_1;
          var value = element.o2e_1;
          dynamicParams.g2(key, value);
          if (!this.r2e_1.equals(LegacyRouteRedirectStrategy_DISALLOW_getInstance()) ? contains(element.n2e_1.x2d_1, _Char___init__impl__6a9atx(45)) : false) {
            // Inline function 'kotlin.collections.set' call
            var key_0 = replace(element.n2e_1.x2d_1, '-', '');
            var value_0 = element.o2e_1;
            dynamicParams.g2(key_0, value_0);
            // Inline function 'kotlin.collections.set' call
            var key_1 = kebabCaseToCamelCase(element.n2e_1.x2d_1);
            var value_1 = element.o2e_1;
            dynamicParams.g2(key_1, value_1);
            // Inline function 'kotlin.collections.set' call
            var key_2 = replace_0(element.n2e_1.x2d_1, _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(95));
            var value_2 = element.o2e_1;
            dynamicParams.g2(key_2, value_2);
          }
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  function PageData(pageMethod, routeInfo) {
    this.w2e_1 = pageMethod;
    this.x2e_1 = routeInfo;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.h18(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:126)');
      }
      ErrorPage(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.s2e_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(1287308146);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.h18(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(1287308146, $dirty, -1, 'com.varabyte.kobweb.navigation.ErrorPage (RouteTree.kt:22)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$lambda(errorCode));
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
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.u18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.m17();
      Div(null, tmp0, $composer_0, 48, 1);
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
      tmp0_safe_receiver.a1e(ErrorPage$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage.<anonymous> (RouteTree.kt:24)');
      }
      Text('Error code: ' + $errorCode, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ErrorPage$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var LegacyRouteRedirectStrategy_ALLOW_instance;
  var LegacyRouteRedirectStrategy_WARN_instance;
  var LegacyRouteRedirectStrategy_DISALLOW_instance;
  var LegacyRouteRedirectStrategy_entriesInitialized;
  function LegacyRouteRedirectStrategy_initEntries() {
    if (LegacyRouteRedirectStrategy_entriesInitialized)
      return Unit_instance;
    LegacyRouteRedirectStrategy_entriesInitialized = true;
    LegacyRouteRedirectStrategy_ALLOW_instance = new LegacyRouteRedirectStrategy('ALLOW', 0);
    LegacyRouteRedirectStrategy_WARN_instance = new LegacyRouteRedirectStrategy('WARN', 1);
    LegacyRouteRedirectStrategy_DISALLOW_instance = new LegacyRouteRedirectStrategy('DISALLOW', 2);
  }
  function LegacyRouteRedirectStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var this_0 = $this.y2e_1;
    activePageMethod$factory();
    this_0.eq(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.y2e_1;
    activePageMethod$factory_0();
    return this_0.j2();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.h2d_1.j2();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.h2d_1.eq(tmp0_safe_receiver.c2d(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_instance_0.p2d(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.z2e_1.v2e(route);
      _set_activePageMethod__f6z3vj($this, data.w2e_1);
      _this__u8e3s4.i2d(data.x2e_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_0.o2d(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_instance_0.q2d(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_1, hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_1;
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.a2f_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.a2d();
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance.e2d();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous> (Router.kt:173)');
        }
        $pageMethod($composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous> (Router.kt:172)');
        }
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$lambda$lambda($pageMethod));
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
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.u18(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.m17();
        tmp_0(tmp0, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.f2f($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda($fragment, $attempts, $handle) {
    return function () {
      var element = document.getElementById($fragment);
      var tmp;
      if (!(element == null)) {
        element.scrollIntoView({behavior: 'smooth'});
        $attempts._v = 0;
        tmp = Unit_instance;
      } else {
        var tmp0 = $attempts._v;
        $attempts._v = tmp0 - 1 | 0;
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($attempts._v === 0) {
        $handle._v.ls();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function LegacyRouteRedirectStrategy_WARN_getInstance() {
    LegacyRouteRedirectStrategy_initEntries();
    return LegacyRouteRedirectStrategy_WARN_instance;
  }
  function LegacyRouteRedirectStrategy_DISALLOW_getInstance() {
    LegacyRouteRedirectStrategy_initEntries();
    return LegacyRouteRedirectStrategy_DISALLOW_instance;
  }
  function Router() {
    this.y2e_1 = mutableStateOf(null);
    this.z2e_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a2f_1 = ArrayList_init_$Create$_0();
    Companion_instance.f2d(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
  }
  protoOf(Router).f2f = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1032287943);
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().g2f_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1032287943, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage (Router.kt:165)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = get_PageContextLocal().y1d(Companion_instance.e2d());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$lambda(pageWrapper_0, pageMethod));
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
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_1.u18(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.m17();
    CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a1e(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).h2f = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_instance_0.o2d(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.z2e_1.u2e(prependIf(Companion_instance_1, autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).i2f = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.h2f(route, autoPrefix, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.h2f.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).j2f = function (strategy) {
    this.z2e_1.r2e_1 = strategy;
  };
  protoOf(Router).k2f = function (interceptor) {
    this.a2f_1.u(interceptor);
  };
  protoOf(Router).l2f = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var tmp0_safe_receiver = Companion_instance_0.p2d(pathQueryAndFragment);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_slug(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : substringAfterLast(tmp1_safe_receiver, _Char___init__impl__6a9atx(46), '');
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp2_safe_receiver) > 0) {
        tmp_0 = tmp2_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var extension = tmp;
    if (!(extension == null) ? !setOf(['html', 'htm']).m(extension) : false) {
      return false;
    }
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_instance_0.o2d(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) ? !(element === _Char___init__impl__6a9atx(63)) : false)) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      if (tmp$ret$4) {
        var route = pathQueryAndFragment_0;
        if (!this.z2e_1.t2e(route) ? !(route === '/') : false) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.z2e_1.t2e(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash;
            }
          } else {
            var withSlash = route + '/';
            if (this.z2e_1.t2e(withSlash)) {
              pathQueryAndFragment_0 = withSlash;
            }
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp_1;
    if (updatePageContext(Companion_instance.e2d(), this, pathQueryAndFragment_0)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      if (!(window.location.href === url)) {
        var newPathname = !(window.location.pathname === Companion_instance_0.q2d(new URL(url)).x2c_1);
        var tmp0 = updateHistoryMode.p9_1;
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', url);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', url);
        }
        if (newPathname) {
          var tmp1_safe_receiver_0 = document.documentElement;
          if (tmp1_safe_receiver_0 != null) {
            tmp1_safe_receiver_0.scrollTop = 0.0;
          }
        }
      }
      var tmp_2;
      if (contains(url, _Char___init__impl__6a9atx(35))) {
        var fragment = substringAfter(url, _Char___init__impl__6a9atx(35));
        var attempts = {_v: 10};
        // Inline function 'kotlin.time.Companion.milliseconds' call
        Companion_getInstance_0();
        var timeToWaitPerAttempt = toDuration(100, DurationUnit_MILLISECONDS_getInstance());
        var handle = {_v: Companion_getInstance_1().is_1};
        var tmp_3 = window;
        handle._v = setInterval(tmp_3, timeToWaitPerAttempt, Router$tryRoutingTo$lambda(fragment, attempts, handle));
        tmp_2 = Unit_instance;
      }
      tmp_1 = true;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  };
  protoOf(Router).m2f = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.l2f(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).n2f = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.m2f(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_instance;
    } else {
      tmp = $super.m2f.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.b2f_1 = new Route(pathQueryAndFragment);
    this.c2f_1 = this.b2f_1.x2c_1;
    this.d2f_1 = toMutableMap(this.b2f_1.y2c_1);
    this.e2f_1 = this.b2f_1.z2c_1;
  }
  protoOf(RouteInterceptorScope).o2f = function (value) {
    this.c2f_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).a2d = function () {
    return Route_init_$Create$(this.c2f_1, this.d2f_1, this.e2f_1).toString();
  };
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:165)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.g2f_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: init
  AppGlobals_instance = new AppGlobals();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_api;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp;
  _.$_$.d = Router;
  _.$_$.e = LegacyRouteRedirectStrategy_DISALLOW_getInstance;
  _.$_$.f = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.g = AppGlobals_instance;
  _.$_$.h = Companion_instance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
