(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var listOf = kotlin_kotlin.$_$.s3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.c;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var KProperty0 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var ComponentStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var mapCapacity = kotlin_kotlin.$_$.t3;
  var coerceAtLeast = kotlin_kotlin.$_$.m6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.r6;
  var THROW_ISE = kotlin_kotlin.$_$.o8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.r5;
  var CoroutineImpl = kotlin_kotlin.$_$.c5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.a6;
  var classMeta = kotlin_kotlin.$_$.m5;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var ColorSchemes_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.s6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$lambda$lambda$slambda, 'Surface$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.e2b(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.e2b(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.e2b(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.e2b(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabVars() {
    TabVars_instance = this;
    this.h2y_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().y2a();
    tmp.i2y_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.j2y_1 = StyleVariable('silk');
    this.k2y_1 = StyleVariable('silk');
    this.l2y_1 = StyleVariable('silk');
    this.m2y_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.n2y_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().x2y().y2a();
    tmp_1.o2y_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).y2y = function () {
    return this.h2y_1.e2b(this, Color$factory());
  };
  protoOf(TabVars).z2y = function () {
    return this.i2y_1.e2b(this, BorderColor$factory());
  };
  protoOf(TabVars).a2z = function () {
    return this.j2y_1.e2b(this, BackgroundColor$factory());
  };
  protoOf(TabVars).b2z = function () {
    return this.k2y_1.e2b(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).c2z = function () {
    return this.l2y_1.e2b(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).d2z = function () {
    return this.m2y_1.e2b(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).e2z = function () {
    return this.n2y_1.e2b(this, BorderThickness$factory());
  };
  protoOf(TabVars).f2z = function () {
    return this.o2y_1.e2b(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().e2z().y2a();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().z2y().y2a());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.l17(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:52)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.t2j(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.x2k(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.x2k(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.x2k(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.a29()), Companion_instance_2.o2b(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().f2z().y2a()).slice()), TabVars_getInstance().a2z().y2a()), TabVars_getInstance().y2y().y2a()), Companion_instance_3.d29()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().e2z().y2a();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().z2y().y2a());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.v2b(TabVars_getInstance().e2z().y2a());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().b2z().y2a()), Companion_instance_1.b29());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().c2z().y2a());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().d2z().y2a());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.q2h(Companion_instance_4.p2a());
    return Unit_instance;
  }
  function TabsStyle$factory() {
    return getPropertyCallableRef('TabsStyle', 0, KProperty0, function () {
      return get_TabsStyle();
    }, null);
  }
  function TabsTabRowStyle$factory() {
    return getPropertyCallableRef('TabsTabRowStyle', 0, KProperty0, function () {
      return get_TabsTabRowStyle();
    }, null);
  }
  function TabsTabStyle$factory() {
    return getPropertyCallableRef('TabsTabStyle', 0, KProperty0, function () {
      return get_TabsTabStyle();
    }, null);
  }
  function TabsPanelStyle$factory() {
    return getPropertyCallableRef('TabsPanelStyle', 0, KProperty0, function () {
      return get_TabsPanelStyle();
    }, null);
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.y2y();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.z2y();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a2z();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.b2z();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.c2z();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.d2z();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.e2z();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.f2z();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle$delegate = ComponentStyle(VOID, 'silk', TabsStyle$delegate$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle$delegate = base(tmp, VOID, 'silk', TabsTabRowStyle$delegate$lambda);
      var tmp_0 = TabsTabStyle$delegate$lambda;
      TabsTabStyle$delegate = ComponentStyle_0(tmp_0, 'silk', TabsTabStyle$delegate$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle$delegate = base(tmp_1, VOID, 'silk', TabsPanelStyle$delegate$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.e2b(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.g2z_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().y2a();
    tmp.h2z_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.i2z_1 = StyleVariable('silk');
    this.j2z_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().y2a();
    tmp_0.k2z_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().x2y().y2a();
    tmp_1.l2z_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.m2z_1 = StyleVariable('silk');
    this.n2z_1 = StyleVariable('silk');
    this.o2z_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).p2z = function () {
    return this.g2z_1.e2b(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).q2z = function () {
    return this.h2z_1.e2b(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).r2z = function () {
    return this.i2z_1.e2b(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).s2z = function () {
    return this.j2z_1.e2b(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).y2y = function () {
    return this.k2z_1.e2b(this, Color$factory_0());
  };
  protoOf(ButtonVars).f2z = function () {
    return this.l2z_1.e2b(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).t2z = function () {
    return this.m2z_1.e2b(this, FontSize$factory());
  };
  protoOf(ButtonVars).u2z = function () {
    return this.n2z_1.e2b(this, Height$factory());
  };
  protoOf(ButtonVars).v2z = function () {
    return this.o2z_1.e2b(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.t2j(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.x2k(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.x2k(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.x2k(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().y2y().y2a()), ButtonVars_getInstance().p2z().y2a()), 1.2), ButtonVars_getInstance().u2z().y2a()), ButtonVars_getInstance().u2z().y2a()), ButtonVars_getInstance().t2z().y2a()), Companion_instance_6.f29()), Companion_instance_7.i2b()), VOID, ButtonVars_getInstance().v2z().y2a()), Companion_instance_8.g2a()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_instance_3.d29()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().f2z().y2a())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.o2h(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().r2z().y2a()), Companion_instance_1.a29());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.x2g()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().q2z().y2a());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().s2z().y2a());
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.p2z();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.q2z();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.r2z();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.s2z();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.y2y();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.f2z();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.t2z();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.u2z();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.v2z();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle$delegate = ComponentStyle(VOID, 'silk', ButtonStyle$delegate$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle$delegate.e2b(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.e2b(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.e2b(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.e2b(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.e2b(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.e2b(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.e2b(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().y2a();
    tmp.w2z_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.x2z_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.y2z_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.z2z_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.a30_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.b30_1 = StyleVariable('silk');
    this.c30_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().y2a();
    tmp_3.d30_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.e30_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.f30_1 = StyleVariable('silk');
    this.g30_1 = StyleVariable('silk');
    this.h30_1 = StyleVariable('silk');
    this.i30_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().k30().y2a();
    tmp_5.j30_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).z2y = function () {
    return this.w2z_1.e2b(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).l30 = function () {
    return this.x2z_1.e2b(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).m30 = function () {
    return this.y2z_1.e2b(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).n30 = function () {
    return this.z2z_1.e2b(this, Size$factory());
  };
  protoOf(CheckboxVars).o30 = function () {
    return this.a30_1.e2b(this, Spacing$factory());
  };
  protoOf(CheckboxVars).t2z = function () {
    return this.b30_1.e2b(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).p30 = function () {
    return this.c30_1.e2b(this, IconSize$factory());
  };
  protoOf(CheckboxVars).q30 = function () {
    return this.d30_1.e2b(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).r30 = function () {
    return this.e30_1.e2b(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).s30 = function () {
    return this.f30_1.e2b(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).t30 = function () {
    return this.g30_1.e2b(this, IconColor$factory());
  };
  protoOf(CheckboxVars).u30 = function () {
    return this.h30_1.e2b(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).v30 = function () {
    return this.i30_1.e2b(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).w30 = function () {
    return this.j30_1.e2b(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.t2j(CheckboxStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().o30().y2a()), Companion_instance_3.d29()), CheckboxVars_getInstance().t2z().y2a()), Companion_instance_1.a29());
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.y2h(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.z2h(CheckboxEnabledAnim$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.t2j(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().p30().y2a()), CheckboxVars_getInstance().n30().y2a());
    var tmp_0 = CheckboxVars_getInstance().m30().y2a();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().z2y().y2a()), CheckboxVars_getInstance().l30().y2a()), Companion_instance_2.o2b(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().w30().y2a()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().s30().y2a());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.t2j(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().u30().y2a());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.m2h(CheckboxVars_getInstance().u30().y2a());
    return Unit_instance;
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().n30().y2a()), CheckboxVars_getInstance().t30().y2a());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.t2j(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.v2j(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.v2j(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().r30().y2a(), CheckboxVars_getInstance().q30().y2a());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().u30(), CheckboxVars_getInstance().v30().y2a());
  }
  function CheckboxStyle$factory() {
    return getPropertyCallableRef('CheckboxStyle', 0, KProperty0, function () {
      return get_CheckboxStyle();
    }, null);
  }
  function CheckboxEnabledAnim$factory() {
    return getPropertyCallableRef('CheckboxEnabledAnim', 0, KProperty0, function () {
      return get_CheckboxEnabledAnim();
    }, null);
  }
  function CheckboxIconContainerStyle$factory() {
    return getPropertyCallableRef('CheckboxIconContainerStyle', 0, KProperty0, function () {
      return get_CheckboxIconContainerStyle();
    }, null);
  }
  function UncheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('UncheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_UncheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('CheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_CheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckboxIconStyle$factory() {
    return getPropertyCallableRef('CheckboxIconStyle', 0, KProperty0, function () {
      return get_CheckboxIconStyle();
    }, null);
  }
  function CheckboxInputVariant$factory() {
    return getPropertyCallableRef('CheckboxInputVariant', 0, KProperty0, function () {
      return get_CheckboxInputVariant();
    }, null);
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.z2y();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.l30();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.m30();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.n30();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.o30();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.t2z();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.p30();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.q30();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.r30();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.s30();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.t30();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u30();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.v30();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w30();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp0_extraModifiers = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', CheckboxStyle$delegate$lambda);
      CheckboxEnabledAnim$delegate = Keyframes('silk', CheckboxEnabledAnim$delegate$lambda);
      CheckboxIconContainerStyle$delegate = ComponentStyle(VOID, 'silk', CheckboxIconContainerStyle$delegate$lambda);
      var tmp = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant$delegate = addVariantBase(tmp, VOID, UncheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant$delegate = addVariant(tmp_0, VOID, CheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_1 = Companion_instance_5;
      CheckboxIconStyle$delegate = base(tmp_1, VOID, 'silk', CheckboxIconStyle$delegate$lambda);
      var tmp_2 = get_InputStyle();
      CheckboxInputVariant$delegate = addVariant(tmp_2, VOID, CheckboxInputVariant$delegate$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle$delegate.e2b(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.e2b(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.e2b(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.e2b(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.e2b(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.e2b(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().y2a();
    tmp.x30_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.y30_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().y2a();
    tmp_0.z30_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.a31_1 = StyleVariable('silk');
    this.b31_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().x2y().y2a();
    tmp_1.c31_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.d31_1 = StyleVariable('silk');
    this.e31_1 = StyleVariable('silk');
    this.f31_1 = StyleVariable('silk');
    this.g31_1 = StyleVariable('silk');
    this.h31_1 = StyleVariable('silk');
    this.i31_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().y2a();
    tmp_2.j31_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().y2a();
    tmp_3.k31_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.l31_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.m31_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).z2y = function () {
    return this.x30_1.e2b(this, BorderColor$factory_1());
  };
  protoOf(InputVars).l30 = function () {
    return this.y30_1.e2b(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).n31 = function () {
    return this.z30_1.e2b(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).o31 = function () {
    return this.a31_1.e2b(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).p31 = function () {
    return this.b31_1.e2b(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).f2z = function () {
    return this.c31_1.e2b(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).q31 = function () {
    return this.d31_1.e2b(this, FilledColor$factory());
  };
  protoOf(InputVars).r31 = function () {
    return this.e31_1.e2b(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).s31 = function () {
    return this.f31_1.e2b(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).t2z = function () {
    return this.g31_1.e2b(this, FontSize$factory_1());
  };
  protoOf(InputVars).u2z = function () {
    return this.h31_1.e2b(this, Height$factory_0());
  };
  protoOf(InputVars).t31 = function () {
    return this.i31_1.e2b(this, Padding$factory());
  };
  protoOf(InputVars).u31 = function () {
    return this.j31_1.e2b(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).v31 = function () {
    return this.k31_1.e2b(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().t31().y2a();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function InputGroupStyle$delegate$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.x2g());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.x2g()), InputVars_getInstance().l30().y2a()), InputVars_getInstance().t2z().y2a());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.t2j(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.x2k(InputStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_9.d29()), get_ColorVar().y2a()), InputVars_getInstance().u2z().y2a()), InputVars_getInstance().t2z().y2a()), Colors_instance.x2g());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.x2g());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_1, tmp_2, 'solid', Colors_instance.x2g()), Companion_instance_2.o2b(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().f2z().y2a()));
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().u31().y2a()), InputVars_getInstance().v31().y2a());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t2j(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.x2k(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.x2k(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.x2k(OutlinedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().l30().y2a());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().z2y().y2a());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().p31().y2a());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m2h(InputVars_getInstance().o31().y2a());
    return Unit_instance;
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().n31().y2a());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t2j(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.x2k(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.x2k(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.x2k(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().q31().y2a()), InputVars_getInstance().l30().y2a());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.x2g());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().r31().y2a());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().p31().y2a());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().s31().y2a()), InputVars_getInstance().n31().y2a());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m2h($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.t2j(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.x2k(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.x2k(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).g2l(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.x2k(FlushedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$delegate$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().z2y().y2a());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().p31().y2a());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m2h(InputVars_getInstance().o31().y2a());
    return Unit_instance;
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().n31().y2a());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m2h($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function InputGroupStyle$factory() {
    return getPropertyCallableRef('InputGroupStyle', 0, KProperty0, function () {
      return get_InputGroupStyle();
    }, null);
  }
  function InputStyle$factory() {
    return getPropertyCallableRef('InputStyle', 0, KProperty0, function () {
      return get_InputStyle();
    }, null);
  }
  function OutlinedInputVariant$factory() {
    return getPropertyCallableRef('OutlinedInputVariant', 0, KProperty0, function () {
      return get_OutlinedInputVariant();
    }, null);
  }
  function FilledInputVariant$factory() {
    return getPropertyCallableRef('FilledInputVariant', 0, KProperty0, function () {
      return get_FilledInputVariant();
    }, null);
  }
  function FlushedInputVariant$factory() {
    return getPropertyCallableRef('FlushedInputVariant', 0, KProperty0, function () {
      return get_FlushedInputVariant();
    }, null);
  }
  function UnstyledInputVariant$factory() {
    return getPropertyCallableRef('UnstyledInputVariant', 0, KProperty0, function () {
      return get_UnstyledInputVariant();
    }, null);
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.z2y();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.l30();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.o31();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.p31();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.f2z();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.q31();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.r31();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.s31();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.t2z();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.u2z();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.t31();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.u31();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.v31();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.o2a()), Companion_instance_7.i2b());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle$delegate = base(tmp_0, VOID, 'silk', InputGroupStyle$delegate$lambda);
      InputStyle$delegate = ComponentStyle(VOID, 'silk', InputStyle$delegate$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant$delegate = addVariant(tmp_1, VOID, OutlinedInputVariant$delegate$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant$delegate = addVariant(tmp_2, VOID, FilledInputVariant$delegate$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant$delegate = addVariant(tmp_3, VOID, FlushedInputVariant$delegate$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant$delegate = addVariant(tmp_4, VOID, UnstyledInputVariant$delegate$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle$delegate.e2b(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.e2b(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.e2b(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.e2b(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.w31_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.x31_1 = StyleVariable('silk');
    this.y31_1 = StyleVariable('silk');
    this.z31_1 = StyleVariable('silk');
    this.a32_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().y2a();
    tmp_0.b32_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.c32_1 = StyleVariable('silk');
    this.d32_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f32().y2a();
    tmp_1.e32_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).l30 = function () {
    return this.w31_1.e2b(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).g32 = function () {
    return this.x31_1.e2b(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).h32 = function () {
    return this.y31_1.e2b(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).i32 = function () {
    return this.z31_1.e2b(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).j32 = function () {
    return this.a32_1.e2b(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).k32 = function () {
    return this.b32_1.e2b(this, FocusColor$factory());
  };
  protoOf(SwitchVars).l32 = function () {
    return this.c32_1.e2b(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).m32 = function () {
    return this.d32_1.e2b(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).w30 = function () {
    return this.e32_1.e2b(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function SwitchStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.t2j(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).g2l(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.x2k(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(position(tmp, tmp$ret$3), SwitchVars_getInstance().g32().y2a()), SwitchVars_getInstance().g32().y2a()), SwitchVars_getInstance().h32().y2a()), SwitchVars_getInstance().h32().y2a()), SwitchVars_getInstance().i32().y2a()), SwitchVars_getInstance().l30().y2a()), SwitchVars_getInstance().j32().y2a()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().w30().y2a())]), Companion_instance_11.w28());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.a29());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.t2j(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.v2j(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().k32().y2a());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().h32().y2a()), SwitchVars_getInstance().l30().y2a()), SwitchVars_getInstance().m32().y2a()), SwitchVars_getInstance().l32().y2a()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().w30().y2a())]);
  }
  function SwitchStyle$factory() {
    return getPropertyCallableRef('SwitchStyle', 0, KProperty0, function () {
      return get_SwitchStyle();
    }, null);
  }
  function SwitchTrackStyle$factory() {
    return getPropertyCallableRef('SwitchTrackStyle', 0, KProperty0, function () {
      return get_SwitchTrackStyle();
    }, null);
  }
  function SwitchInputVariant$factory() {
    return getPropertyCallableRef('SwitchInputVariant', 0, KProperty0, function () {
      return get_SwitchInputVariant();
    }, null);
  }
  function SwitchThumbStyle$factory() {
    return getPropertyCallableRef('SwitchThumbStyle', 0, KProperty0, function () {
      return get_SwitchThumbStyle();
    }, null);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.l30();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.g32();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.h32();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.i32();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j32();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.k32();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.l32();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.m32();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w30();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      SwitchStyle$delegate = ComponentStyle(VOID, 'silk', SwitchStyle$delegate$lambda);
      var tmp0_extraModifiers = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', SwitchTrackStyle$delegate$lambda);
      var tmp = get_InputStyle();
      SwitchInputVariant$delegate = addVariant(tmp, VOID, SwitchInputVariant$delegate$lambda);
      var tmp_0 = Companion_instance_5;
      SwitchThumbStyle$delegate = base(tmp_0, VOID, 'silk', SwitchThumbStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.e2b(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle(VOID, 'silk', CanvasStyle$delegate$lambda);
    }
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle$delegate.e2b(null, HorizontalDividerStyle$factory());
  }
  var HorizontalDividerStyle$delegate;
  var DividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle$delegate.e2b(null, VerticalDividerStyle$factory());
  }
  var VerticalDividerStyle$delegate;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().y2a();
    tmp.n32_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.o32_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).y2y = function () {
    return this.n32_1.e2b(this, Color$factory_1());
  };
  protoOf(DividerVars).p32 = function () {
    return this.o32_1.e2b(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().y2y().y2a()), DividerVars_getInstance().p32().y2a());
  }
  function VerticalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().y2y().y2a()), DividerVars_getInstance().p32().y2a());
  }
  function HorizontalDividerStyle$factory() {
    return getPropertyCallableRef('HorizontalDividerStyle', 0, KProperty0, function () {
      return get_HorizontalDividerStyle();
    }, null);
  }
  function VerticalDividerStyle$factory() {
    return getPropertyCallableRef('VerticalDividerStyle', 0, KProperty0, function () {
      return get_VerticalDividerStyle();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.y2y();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.p32();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle$delegate = base(tmp, VOID, 'silk', HorizontalDividerStyle$delegate$lambda);
      DividerStyle = get_HorizontalDividerStyle();
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle$delegate = base(tmp_0, VOID, 'silk', VerticalDividerStyle$delegate$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.e2b(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.t2j(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.i2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.j2();
      $this$ComponentStyle.o2i(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.m29(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.y2a();
      $this$gridTemplateColumns.i29(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$delegate$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.o9_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.g2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.e2b(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().y2a();
    tmp.q32_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().y2a();
    tmp_0.r32_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).a2z = function () {
    return this.q32_1.e2b(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).y2y = function () {
    return this.r32_1.e2b(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1707116076);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.ez(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.ez(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.ez(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.g17()) {
      $composer_0.n17();
      if (($changed & 1) === 0 ? true : $composer_0.r17()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.x11();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.o17();
      if (isTraceInProgress()) {
        traceEventStart(-1707116076, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:55)');
      }
      $composer_0.l17(-1164412473);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.o18();
      var tmp;
      if (false ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.u18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.m17();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).z2f(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1158565978, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
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
      var tmp_5;
      if (invalid ? true : it_0 === Companion_getInstance().d12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.u18(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.m17();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    var tmp1_safe_receiver = $composer_0.d19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a1e(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.j2();
  }
  function Surface$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.eq(value);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.t2j(SurfaceStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().a2z().y2a()), SurfaceVars_getInstance().y2y().y2a());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.c2c($ref._v);
      $this$refScope.b2c([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.a33_1 = $surfaceElement;
    this.b33_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).p1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1g($this$LaunchedEffect, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(Surface$lambda$lambda$slambda).qc = function (p1, $completion) {
    return this.p1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        if (tmp === 0) {
          this.tb_1 = 1;
          setSilkWidgetVariables(this.a33_1, this.b33_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).q1g = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.a33_1, this.b33_1, completion);
    i.c33_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.p1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:68)');
        }
        var currColorMode = Companion_instance_13.z2j($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        $content($this_Box, $composer_0, 8);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1158565978, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:65)');
      }
      if (!($colorModeOverride._v == null)) {
        $composer_0.l17(321050262);
        var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0 = $colorModeOverride._v.x2m();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, -314059711, true, Surface$lambda$lambda_0($content, $this$Box, tmp0_safe_receiver));
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
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref(dispatchReceiver);
            $composer_1.u18(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.m17();
          CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48);
          tmp = Unit_instance;
        }
        $composer_0.m17();
      } else {
        $composer_0.l17(321050687);
        $content($this$Box, $composer_0, 8);
        $composer_0.m17();
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a2z();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.y2y();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle(VOID, 'silk', SurfaceStyle$delegate$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.e2b(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.d33_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).a2z = function () {
    return this.d33_1.e2b(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().a2z().y2a());
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a2z();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle$delegate = base(tmp, VOID, 'silk', OverlayStyle$delegate$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.e2b(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().f32().y2a();
    tmp.e33_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).w30 = function () {
    return this.e33_1.e2b(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_instance, [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().w30().y2a())]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w30();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle$delegate = base(tmp, VOID, 'silk', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.e2b(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.e2b(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.e2b(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.e2b(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.e2b(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.e2b(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.e2b(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.e2b(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.e2b(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.e2b(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.e2b(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.e2b(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.e2b(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.e2b(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.f33_1 = StyleVariable('silk');
    this.g33_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).a2z = function () {
    return this.f33_1.e2b(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).y2y = function () {
    return this.g33_1.e2b(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().a2z().y2a()), TooltipVars_getInstance().y2y().y2a()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$delegate$lambda$lambda);
  }
  function TooltipArrowStyle$delegate$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.o2h(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.n2h('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().a2z().y2a());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().a2z().y2a());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a2z().y2a());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b26('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b26('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b26('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b26('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  function TopLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopLeftTooltipArrowVariant();
    }, null);
  }
  function TopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopTooltipArrowVariant();
    }, null);
  }
  function TopRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopRightTooltipArrowVariant();
    }, null);
  }
  function LeftTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTopTooltipArrowVariant();
    }, null);
  }
  function LeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTooltipArrowVariant();
    }, null);
  }
  function LeftBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftBottomTooltipArrowVariant();
    }, null);
  }
  function RightTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTopTooltipArrowVariant();
    }, null);
  }
  function RightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTooltipArrowVariant();
    }, null);
  }
  function RightBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightBottomTooltipArrowVariant();
    }, null);
  }
  function BottomLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomLeftTooltipArrowVariant();
    }, null);
  }
  function BottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomTooltipArrowVariant();
    }, null);
  }
  function BottomRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomRightTooltipArrowVariant();
    }, null);
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a2z();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.y2y();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle$delegate = base(tmp, VOID, 'silk', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant$delegate = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$delegate$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant$delegate = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$delegate$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant$delegate = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$delegate$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant$delegate = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$delegate$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant$delegate = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$delegate$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant$delegate = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$delegate$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant$delegate = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$delegate$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant$delegate = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$delegate$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant$delegate = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$delegate$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant$delegate = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$delegate$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant$delegate = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$delegate$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant$delegate = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$delegate$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle$delegate.e2b(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.e2b(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.e2b(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.l17(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.b29());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_instance, [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().y2a())]);
  }
  function DisabledStyle$factory() {
    return getPropertyCallableRef('DisabledStyle', 0, KProperty0, function () {
      return get_DisabledStyle();
    }, null);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$delegate$lambda;
      DisabledStyle$delegate = base_1(tmp, tmp_0, 'silk', DisabledStyle$delegate$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().x2y().y2a();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.p2y_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.q2y_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.r2y_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.s2y_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.t2y_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.u2y_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.v2y_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.w2y_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).k30 = function () {
    return this.r2y_1.e2b(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).f32 = function () {
    return this.s2y_1.e2b(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).x2y = function () {
    return this.t2y_1.e2b(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.k30();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.f32();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.x2y();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.e2b(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.e2b(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.e2b(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.e2b(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.e2b(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.e2b(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.e2b(null, DivTextStyle$factory());
  }
  var DivTextStyle$delegate;
  function DivTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_DivText_kt__50pfx0();
    return Unit_instance;
  }
  function DivTextStyle$factory() {
    return getPropertyCallableRef('DivTextStyle', 0, KProperty0, function () {
      return get_DivTextStyle();
    }, null);
  }
  var properties_initialized_DivText_kt_3artse;
  function _init_properties_DivText_kt__50pfx0() {
    if (!properties_initialized_DivText_kt_3artse) {
      properties_initialized_DivText_kt_3artse = true;
      DivTextStyle$delegate = ComponentStyle(VOID, 'silk', DivTextStyle$delegate$lambda);
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle$delegate.e2b(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.d2m_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.d2m_1.k2m_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = ColorSchemes_getInstance().b2v_1.k2n().u2g().t2g(VOID, VOID, VOID, 0.5);
    var placeholder = ColorSchemes_getInstance().n2v_1.k2n();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.y2g();
    set_background(this_0.p2v_1, Colors_instance.j2h());
    set_color(this_0.p2v_1, color);
    set_border(this_0.p2v_1, color.t2g(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.p2v_1, focusOutline);
    set_overlay(this_0.p2v_1, color.t2g(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.p2v_1, placeholder);
    var buttonBase = Colors_instance.j2h().q2g(0.2);
    get_button_0(this_0.p2v_1).n33(buttonBase, buttonBase.q2g(0.2), Colors_instance.a2h(), buttonBase.q2g(0.4));
    get_checkbox_0(this_0.p2v_1).t33(ColorSchemes_getInstance().b2v_1.k2n(), ColorSchemes_getInstance().b2v_1.l2n(), Colors_instance.j2h());
    var inputFilled = ColorSchemes_getInstance().n2v_1.i2n();
    var tmp0_$this = get_input_0(this_0.p2v_1);
    var tmp1_filledFocus = Colors_instance.x2g();
    var tmp2_hoveredBorder = ColorSchemes_getInstance().n2v_1.k2n();
    var tmp3_invalidBorder = ColorSchemes_getInstance().w2u_1.m2n();
    var tmp4_filledHover = inputFilled.q2g(0.1);
    tmp0_$this.b34(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.p2v_1);
    var tmp6_thumb = Colors_instance.j2h();
    var tmp7_backgroundOn = Colors_instance.e2h();
    var tmp8_backgroundOff = Colors_instance.f2h();
    tmp5_$this.t33(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.p2v_1).r34(Colors_instance.y2g(), Colors_instance.j2h(), Colors_instance.a2h(), VOID, VOID, Colors_instance.f2h(), Colors_instance.k2h(), Colors_instance.j2h());
    get_tooltip_0(this_0.p2v_1).w34(get_color_0(this_0.p2v_1), get_background_0(this_0.p2v_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.j2h();
    set_background(this_0.q2v_1, Colors_instance.y2g());
    set_color(this_0.q2v_1, color_0);
    set_border(this_0.q2v_1, color_0.t2g(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.q2v_1, focusOutline);
    set_overlay(this_0.q2v_1, color_0.t2g(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.q2v_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.y2g(), 0.2);
    get_button_0(this_0.q2v_1).n33(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.g2h(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.q2v_1).t33(ColorSchemes_getInstance().b2v_1.i2n(), ColorSchemes_getInstance().b2v_1.j2n(), Colors_instance.y2g());
    var inputFilled_0 = ColorSchemes_getInstance().n2v_1.m2n();
    var tmp0_$this_0 = get_input_0(this_0.q2v_1);
    var tmp1_filledFocus_0 = Colors_instance.x2g();
    var tmp2_hoveredBorder_0 = ColorSchemes_getInstance().n2v_1.l2n();
    var tmp3_invalidBorder_0 = ColorSchemes_getInstance().w2u_1.j2n();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.b34(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.q2v_1);
    var tmp6_thumb_0 = Colors_instance.j2h();
    var tmp7_backgroundOn_0 = Colors_instance.g2h();
    var tmp8_backgroundOff_0 = Colors_instance.c2h();
    tmp5_$this_0.t33(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.q2v_1).r34(Colors_instance.j2h(), Colors_instance.y2g(), Colors_instance.g2h(), VOID, VOID, Colors_instance.d2h(), Colors_instance.c2h(), Colors_instance.y2g());
    get_tooltip_0(this_0.q2v_1).w34(get_color_0(this_0.q2v_1), get_background_0(this_0.q2v_1));
    mutableTheme.n2m(get_SilkColorsStyle());
    mutableTheme.n2m(get_DisabledStyle());
    mutableTheme.n2m(get_SmoothColorStyle());
    mutableTheme.n2m(get_ButtonStyle());
    mutableTheme.n2m(get_CanvasStyle());
    mutableTheme.n2m(get_CheckboxStyle());
    mutableTheme.w2m([get_CheckboxInputVariant()]);
    mutableTheme.n2m(get_CheckboxIconContainerStyle());
    mutableTheme.n2m(get_CheckboxIconStyle());
    mutableTheme.w2m([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.n2m(get_DivTextStyle());
    mutableTheme.n2m(get_OverlayStyle());
    mutableTheme.n2m(get_PopupStyle());
    mutableTheme.n2m(get_SimpleGridStyle());
    mutableTheme.n2m(get_SurfaceStyle());
    mutableTheme.n2m(get_HorizontalDividerStyle());
    mutableTheme.n2m(get_VerticalDividerStyle());
    mutableTheme.n2m(get_SwitchStyle());
    mutableTheme.n2m(get_SwitchTrackStyle());
    mutableTheme.n2m(get_SwitchThumbStyle());
    mutableTheme.w2m([get_SwitchInputVariant()]);
    mutableTheme.n2m(get_TabsStyle());
    mutableTheme.n2m(get_TabsTabRowStyle());
    mutableTheme.n2m(get_TabsTabStyle());
    mutableTheme.n2m(get_TabsPanelStyle());
    mutableTheme.n2m(get_InputStyle());
    mutableTheme.w2m([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.n2m(get_InputGroupStyle());
    mutableTheme.n2m(get_TooltipArrowStyle());
    mutableTheme.w2m([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.n2m(get_TooltipStyle());
    mutableTheme.n2m(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.c2m_1, get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().e2j_1, colorMode.c2k())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().e2j_1, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-938405995);
    if (isTraceInProgress()) {
      traceEventStart(-938405995, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:311)');
    }
    $composer_0.l17(263026584);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.o18();
    var tmp;
    if (false ? true : it === Companion_getInstance().d12_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.m17();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a1e(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(1180012187);
    if (isTraceInProgress()) {
      traceEventStart(1180012187, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:317)');
    }
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_13.z2j($composer_0, 8));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.j2k_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().p2z(), get_button(palette).x34()), ButtonVars_getInstance().r2z(), get_button(palette).f27()), ButtonVars_getInstance().s2z(), get_button(palette).y34()), CheckboxVars_getInstance().u30(), get_checkbox(palette).z34()), CheckboxVars_getInstance().v30(), get_checkbox(palette).f27()), CheckboxVars_getInstance().t30(), get_checkbox(palette).a35()), InputVars_getInstance().o31(), get_input(palette).b35()), InputVars_getInstance().p31(), get_input(palette).c35()), InputVars_getInstance().q31(), get_input(palette).d35()), InputVars_getInstance().r31(), get_input(palette).e35()), InputVars_getInstance().s31(), get_input(palette).f35()), OverlayVars_getInstance().a2z(), get_overlay(palette)), SwitchVars_getInstance().m32(), get_switch(palette).g35()), TabVars_getInstance().y2y(), get_tab(palette).a35()), TabVars_getInstance().a2z(), get_tab(palette).z34()), TabVars_getInstance().b2z(), get_tab(palette).h35()), TabVars_getInstance().c2z(), get_tab(palette).f27()), TabVars_getInstance().d2z(), get_tab(palette).y34()), TooltipVars_getInstance().a2z(), get_tooltip(palette).z34()), TooltipVars_getInstance().y2y(), get_tooltip(palette).a35());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_1($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkColorsStyle$factory() {
    return getPropertyCallableRef('SilkColorsStyle', 0, KProperty0, function () {
      return get_SilkColorsStyle();
    }, null);
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle$delegate = base(tmp, VOID, VOID, SilkColorsStyle$delegate$lambda);
    }
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.j33_1 = this.v2x();
    this.k33_1 = this.v2x();
    this.l33_1 = this.v2x();
    this.m33_1 = this.v2x();
  }
  protoOf(MutableButton).i35 = function (_set____db54di) {
    return this.j33_1.s2x(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).x34 = function () {
    return this.j33_1.e2b(this, default$factory_0());
  };
  protoOf(MutableButton).j35 = function (_set____db54di) {
    return this.k33_1.s2x(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).f27 = function () {
    return this.k33_1.e2b(this, hover$factory_0());
  };
  protoOf(MutableButton).k35 = function (_set____db54di) {
    return this.l33_1.s2x(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).l35 = function () {
    return this.l33_1.e2b(this, focus$factory_0());
  };
  protoOf(MutableButton).m35 = function (_set____db54di) {
    return this.m33_1.s2x(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).y34 = function () {
    return this.m33_1.e2b(this, pressed$factory_0());
  };
  protoOf(MutableButton).n33 = function (default_0, hover, focus, pressed) {
    this.i35(default_0);
    this.j35(hover);
    this.k35(focus);
    this.m35(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.q33_1 = this.v2x();
    this.r33_1 = this.v2x();
    this.s33_1 = this.v2x();
  }
  protoOf(MutableCheckbox).n35 = function (_set____db54di) {
    return this.q33_1.s2x(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).z34 = function () {
    return this.q33_1.e2b(this, background$factory_0());
  };
  protoOf(MutableCheckbox).j35 = function (_set____db54di) {
    return this.r33_1.s2x(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).f27 = function () {
    return this.r33_1.e2b(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).o35 = function (_set____db54di) {
    return this.s33_1.s2x(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).a35 = function () {
    return this.s33_1.e2b(this, color$factory_0());
  };
  protoOf(MutableCheckbox).t33 = function (background, hover, color) {
    this.n35(background);
    this.j35(hover);
    this.o35(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.w33_1 = this.v2x();
    this.x33_1 = this.v2x();
    this.y33_1 = this.v2x();
    this.z33_1 = this.v2x();
    this.a34_1 = this.v2x();
  }
  protoOf(MutableInput).p35 = function (_set____db54di) {
    return this.w33_1.s2x(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).b35 = function () {
    return this.w33_1.e2b(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).q35 = function (_set____db54di) {
    return this.x33_1.s2x(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).c35 = function () {
    return this.x33_1.e2b(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).r35 = function (_set____db54di) {
    return this.y33_1.s2x(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).d35 = function () {
    return this.y33_1.e2b(this, filled$factory_0());
  };
  protoOf(MutableInput).s35 = function (_set____db54di) {
    return this.z33_1.s2x(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).e35 = function () {
    return this.z33_1.e2b(this, filledHover$factory_0());
  };
  protoOf(MutableInput).t35 = function (_set____db54di) {
    return this.a34_1.s2x(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).f35 = function () {
    return this.a34_1.e2b(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).b34 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.p35(hoveredBorder);
    this.q35(invalidBorder);
    this.r35(filled);
    this.s35(filledHover);
    this.t35(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.e34_1 = this.v2x();
    this.f34_1 = this.v2x();
    this.g34_1 = this.v2x();
  }
  protoOf(MutableSwitch).u35 = function (_set____db54di) {
    return this.e34_1.s2x(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).v35 = function () {
    return this.e34_1.e2b(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).w35 = function (_set____db54di) {
    return this.f34_1.s2x(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).x35 = function () {
    return this.f34_1.e2b(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).y35 = function (_set____db54di) {
    return this.g34_1.s2x(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).g35 = function () {
    return this.g34_1.e2b(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).t33 = function (backgroundOn, backgroundOff, thumb) {
    this.u35(backgroundOn);
    this.w35(backgroundOff);
    this.y35(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.j34_1 = this.v2x();
    this.k34_1 = this.v2x();
    this.l34_1 = this.v2x();
    this.m34_1 = this.v2x();
    this.n34_1 = this.v2x();
    this.o34_1 = this.v2x();
    this.p34_1 = this.v2x();
    this.q34_1 = this.v2x();
  }
  protoOf(MutableTab).o35 = function (_set____db54di) {
    return this.j34_1.s2x(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).a35 = function () {
    return this.j34_1.e2b(this, color$factory_2());
  };
  protoOf(MutableTab).n35 = function (_set____db54di) {
    return this.k34_1.s2x(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).z34 = function () {
    return this.k34_1.e2b(this, background$factory_2());
  };
  protoOf(MutableTab).z35 = function (_set____db54di) {
    return this.l34_1.s2x(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).a36 = function () {
    return this.l34_1.e2b(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).b36 = function (_set____db54di) {
    return this.m34_1.s2x(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).c36 = function () {
    return this.m34_1.e2b(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).d36 = function (_set____db54di) {
    return this.n34_1.s2x(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).e36 = function () {
    return this.n34_1.e2b(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).j35 = function (_set____db54di) {
    return this.o34_1.s2x(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).f27 = function () {
    return this.o34_1.e2b(this, hover$factory_4());
  };
  protoOf(MutableTab).m35 = function (_set____db54di) {
    return this.p34_1.s2x(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).y34 = function () {
    return this.p34_1.e2b(this, pressed$factory_2());
  };
  protoOf(MutableTab).f36 = function (_set____db54di) {
    return this.q34_1.s2x(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).h35 = function () {
    return this.q34_1.e2b(this, disabled$factory_0());
  };
  protoOf(MutableTab).g36 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.o35(color);
    this.n35(background);
    this.z35(selectedColor);
    this.b36(selectedBackground);
    this.d36(selectedBorder);
    this.j35(hover);
    this.m35(pressed);
    this.f36(disabled);
  };
  protoOf(MutableTab).r34 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.g36(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.g36.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.u34_1 = this.v2x();
    this.v34_1 = this.v2x();
  }
  protoOf(MutableTooltip).n35 = function (_set____db54di) {
    return this.u34_1.s2x(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).z34 = function () {
    return this.u34_1.e2b(this, background$factory_4());
  };
  protoOf(MutableTooltip).o35 = function (_set____db54di) {
    return this.v34_1.s2x(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).a35 = function () {
    return this.v34_1.e2b(this, color$factory_4());
  };
  protoOf(MutableTooltip).w34 = function (background, color) {
    this.n35(background);
    this.o35(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.o2x('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.o2x('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.o2x('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.o2x('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.o2x('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.o2x('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.o2x('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.o2x('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.w2x('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.x34();
    }, function (receiver, value) {
      return receiver.i35(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.x34();
    }, function (receiver, value) {
      return receiver.i35(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.l35();
    }, function (receiver, value) {
      return receiver.k35(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.l35();
    }, function (receiver, value) {
      return receiver.k35(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.y34();
    }, function (receiver, value) {
      return receiver.m35(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.y34();
    }, function (receiver, value) {
      return receiver.m35(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.b35();
    }, function (receiver, value) {
      return receiver.p35(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.b35();
    }, function (receiver, value) {
      return receiver.p35(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c35();
    }, function (receiver, value) {
      return receiver.q35(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c35();
    }, function (receiver, value) {
      return receiver.q35(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.d35();
    }, function (receiver, value) {
      return receiver.r35(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.d35();
    }, function (receiver, value) {
      return receiver.r35(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.e35();
    }, function (receiver, value) {
      return receiver.s35(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.e35();
    }, function (receiver, value) {
      return receiver.s35(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.f35();
    }, function (receiver, value) {
      return receiver.t35(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.f35();
    }, function (receiver, value) {
      return receiver.t35(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.v35();
    }, function (receiver, value) {
      return receiver.u35(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.v35();
    }, function (receiver, value) {
      return receiver.u35(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.x35();
    }, function (receiver, value) {
      return receiver.w35(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.x35();
    }, function (receiver, value) {
      return receiver.w35(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.g35();
    }, function (receiver, value) {
      return receiver.y35(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.g35();
    }, function (receiver, value) {
      return receiver.y35(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.a36();
    }, function (receiver, value) {
      return receiver.z35(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.a36();
    }, function (receiver, value) {
      return receiver.z35(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.c36();
    }, function (receiver, value) {
      return receiver.b36(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.c36();
    }, function (receiver, value) {
      return receiver.b36(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.e36();
    }, function (receiver, value) {
      return receiver.d36(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.e36();
    }, function (receiver, value) {
      return receiver.d36(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.f27();
    }, function (receiver, value) {
      return receiver.j35(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.y34();
    }, function (receiver, value) {
      return receiver.m35(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.y34();
    }, function (receiver, value) {
      return receiver.m35(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.h35();
    }, function (receiver, value) {
      return receiver.f36(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.h35();
    }, function (receiver, value) {
      return receiver.f36(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.z34();
    }, function (receiver, value) {
      return receiver.n35(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.a35();
    }, function (receiver, value) {
      return receiver.o35(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Surface;
  _.$_$.b = get_SmoothColorStyle;
  _.$_$.c = get_BorderColorVar;
  _.$_$.d = get_ColorVar;
  _.$_$.e = get_SilkColorsStyle;
  _.$_$.f = initSilkWidgets;
  _.$_$.g = setSilkWidgetVariables_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
