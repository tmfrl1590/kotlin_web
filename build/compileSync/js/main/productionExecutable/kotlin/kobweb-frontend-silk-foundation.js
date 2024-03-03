(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var VOID = kotlin_kotlin.$_$.c;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var mapCapacity = kotlin_kotlin.$_$.t3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var to = kotlin_kotlin.$_$.c9;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var equals = kotlin_kotlin.$_$.p5;
  var hashCode = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var classMeta = kotlin_kotlin.$_$.m5;
  var listOf = kotlin_kotlin.$_$.s3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var distinct = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.v8;
  var removeSuffix = kotlin_kotlin.$_$.m7;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var charSequenceLength = kotlin_kotlin.$_$.l5;
  var charSequenceGet = kotlin_kotlin.$_$.k5;
  var substringAfter = kotlin_kotlin.$_$.w7;
  var substringBefore = kotlin_kotlin.$_$.x7;
  var substringAfterLast = kotlin_kotlin.$_$.u7;
  var removePrefix = kotlin_kotlin.$_$.l7;
  var kebabCaseToTitleCamelCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var joinToString = kotlin_kotlin.$_$.k3;
  var toString = kotlin_kotlin.$_$.l6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mutableListOf = kotlin_kotlin.$_$.w3;
  var plus = kotlin_kotlin.$_$.z3;
  var substringAfterLast_0 = kotlin_kotlin.$_$.t7;
  var toSet = kotlin_kotlin.$_$.l4;
  var endsWith = kotlin_kotlin.$_$.d7;
  var copyToArray = kotlin_kotlin.$_$.y2;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var getValue = kotlin_kotlin.$_$.i3;
  var toList = kotlin_kotlin.$_$.j4;
  var listOf_0 = kotlin_kotlin.$_$.r3;
  var emptyList = kotlin_kotlin.$_$.a3;
  var getStringHashCode = kotlin_kotlin.$_$.u5;
  var isBlank = kotlin_kotlin.$_$.g7;
  var first = kotlin_kotlin.$_$.f7;
  var Char = kotlin_kotlin.$_$.f8;
  var setOf = kotlin_kotlin.$_$.e4;
  var enumEntries = kotlin_kotlin.$_$.e5;
  var Enum = kotlin_kotlin.$_$.g8;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.e9;
  var Map = kotlin_kotlin.$_$.n2;
  var isInterface = kotlin_kotlin.$_$.a6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var trimIndent = kotlin_kotlin.$_$.b8;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var interfaceMeta = kotlin_kotlin.$_$.x5;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var objectCreate = kotlin_kotlin.$_$.g6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(ColorSchemes$Monochrome$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Red$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Pink$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Purple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepPurple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Indigo$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Blue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightBlue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Cyan$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Teal$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Green$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightGreen$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Lime$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Yellow$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Amber$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Orange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepOrange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Brown$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Gray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$BlueGray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes, 'ColorSchemes', objectMeta);
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(LegacyMutableSilkPalettes, 'LegacyMutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(PaletteEntry, 'PaletteEntry', classMeta);
  setMetadataFor(Button, 'Button', classMeta);
  setMetadataFor(Checkbox, 'Checkbox', classMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(Link, 'Link', classMeta);
  setMetadataFor(Switch, 'Switch', classMeta);
  setMetadataFor(Tab, 'Tab', classMeta);
  setMetadataFor(Tooltip, 'Tooltip', classMeta);
  setMetadataFor(LegacyMutableSilkPalette, 'LegacyMutableSilkPalette', classMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.p9_1) {
      case 0:
        tmp = this.k2x();
        break;
      case 1:
        tmp = this.l2x();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.n2x(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-776510055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (!(($default & 1) === 0)) {
        $composer_0.l17(2035960038);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.o18();
        var tmp;
        if (false ? true : it === Companion_getInstance().d12_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.u18(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.m17();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776510055, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.o14(2035960081, Unit_instance);
      $composer_0.l17(2035960185);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.o18();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().d12_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.u18(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.m17();
      initSilk(tmp1_group);
      $composer_0.r14();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.l17(-1196466140);
      Style(null, styleSheet.y26(), $composer_1, 0, 1);
      $composer_1.m17();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.l17(-1196466140);
      Style(null, styleSheet_0.y26(), $composer_2, 0, 1);
      $composer_2.m17();
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    var tmp2_safe_receiver = $composer_0.d19();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.a1e(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).c27 = function (selector, cssRule) {
    return this.b27(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.x2h_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.i2();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.j2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.g2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.w2h_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x2h_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(KeyframesBuilder).y2h = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.x2h_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.g2(pair.wd_1, pair.xd_1);
  };
  protoOf(KeyframesBuilder).z2h = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.x2h_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.g2(pair.wd_1, pair.xd_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).a2i = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.x2h_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.j2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.u(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.n25(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion() {
  }
  protoOf(Companion).b2i = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.u(this_1);
    }
    return distinct(destination).i() === 1;
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_2.b2i(this$0.c2i_1);
    };
  }
  function Keyframes(name, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.c2i_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.d2i_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.e2i_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.g2i_1 = prefix;
    this.h2i_1 = init;
  }
  protoOf(KeyframesProvider).i2i = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.g2i_1, this.h2i_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.k2i(keyframes.d2i_1, keyframes.c2i_1);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.e2b(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.e2b(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.e2b(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.e2b(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.e2b(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.e2b(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.e2b(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.e2b(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.e2b(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.e2b(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.n2i(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.n2i(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.n2i(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.n2i(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.n2i(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.o2i(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.o2i(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.o2i(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.o2i(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.o2i(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function Companion_0() {
  }
  var Companion_instance_3;
  function Companion_getInstance_1() {
    return Companion_instance_3;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.d27(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.t2i_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.s2i_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.r2i_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.p2i_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.q2i_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.m2i_1;
    var destination = LinkedHashMap_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      var key = element.i2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.p2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.g2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.u(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(destination.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.f2().k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.i2();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.j2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.k();
      if (!iterator.x())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.z();
        accumulator = acc.x2i(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.g2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.j2();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.u2i_1)(attrsScope);
        if (attrsScope.n28_1.o()) {
          break $l$block;
        }
        // Inline function 'kotlin.error' call
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = "ComponentStyle declarations cannot contain Modifiers that specify attributes. Please move Modifiers associated with attributes to the ComponentStyle's `extraModifiers` parameter.";
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_0).r5(_Char___init__impl__6a9atx(10));
        this_0.q5('\tCSS rule: ');
        this_0.q5('"' + selectorName);
        if (!(cssModifier.v2i_1 == null)) {
          this_0.p5(cssModifier.v2i_1);
        }
        if (!(cssModifier.w2i_1 == null)) {
          this_0.q5(cssModifier.w2i_1);
        }
        this_0.q5('"');
        this_0.q5(' (do you declare a property called ');
        // Inline function 'kotlin.text.count' call
        var count = 0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(selectorName)) {
          var element_0 = charSequenceGet(selectorName, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>.<anonymous>' call
          if (element_0 === _Char___init__impl__6a9atx(46)) {
            count = count + 1 | 0;
          }
        }
        var isStyle = count === 1;
        var styleName = substringBefore(substringAfter(selectorName, '.'), '.');
        if (isStyle) {
          this_0.q5('`' + kebabCaseToTitleCamelCase(styleName) + 'Style`');
        } else {
          var variantPart = removePrefix(substringAfterLast(selectorName, '.'), styleName + '-');
          this_0.q5('`' + kebabCaseToTitleCamelCase(styleName + '-' + variantPart) + 'Variant`');
          this_0.q5(' or ');
          this_0.q5('`' + kebabCaseToTitleCamelCase(variantPart + '-' + styleName) + 'Variant`');
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5('?)').r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.n28_1.d2();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, ComponentStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_1).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_2).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '   // Before\n   val ExampleStyle by ComponentStyle {\n       base {\n          Modifier\n              .backgroundColor(Colors.Magenta))\n              .tabIndex(0) // <-- The offending attribute modifier\n       }\n   }\n   \n   // After\n   val ExampleStyle by ComponentStyle(extraModifiers = Modifier.tabIndex(0)) {\n       base {\n           Modifier.backgroundColor(Colors.Magenta)\n       }\n   }';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_3).r5(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.y28_1.f2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.b26(element.i2(), element.j2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.z28_1.f2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.h26(element_0.i2(), element_0.j2());
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function ComponentStyle$addStylesInto$lambda($classNames, this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.z2i_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0;
        if (!($cssRuleKey.y2i_1 == null)) {
          // Inline function 'kotlin.apply' call
          var this_0 = $styleSheet;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>' call
          media(this_0, $cssRuleKey.y2i_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp_0 = Unit_instance;
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle(name, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.a2j_1 = extraModifiers;
    this.b2j_1 = prefix;
    this.c2j_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d2j_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.b2j_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.e2j_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(ComponentStyle).f2j = function (name, extraModifiers, init) {
    return new SimpleComponentVariant(new ComponentStyle(this.e2j_1 + '-' + name, extraModifiers, null, init), this);
  };
  protoOf(ComponentStyle).g2j = function (styleSheet, selectorName) {
    var classNames = mutableListOf([selectorName]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this, this.c2j_1), this, selectorName);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this, this.c2j_1), this, selectorName);
    var tmp = Companion_instance_4;
    var tmp0_safe_receiver = lightModifiers.p2(Companion_getInstance_4().h2j_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2i_1;
    var tmp1_safe_receiver = darkModifiers.p2(Companion_getInstance_4().h2j_1);
    var tmp2_safe_receiver = tmp.i2j(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u2i_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(classNames, this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.d2(), darkModifiers.d2());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().h2j_1)) {
        destination.u(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.k();
    $l$loop: while (tmp3_iterator.x()) {
      var cssRuleKey = tmp3_iterator.z();
      var tmp_1 = Companion_instance_4;
      var tmp4_safe_receiver = lightModifiers.p2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.u2i_1;
      var tmp5_safe_receiver = darkModifiers.p2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.i2j(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.u2i_1);
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selectorName, group, ComponentStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(ComponentStyle).j2j = function (styleSheet) {
    return this.g2j(styleSheet, '.' + this.e2j_1);
  };
  protoOf(ComponentStyle).k2j = function (classSelectors) {
    return new ImmutableComponentStyle(classSelectors, this.a2j_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.m2j_1 = extraModifiers;
    this.n2j_1 = prefix;
    this.o2j_1 = init;
  }
  protoOf(ComponentStyleProvider).i2i = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.m2j_1, this.n2j_1, this.o2j_1);
  };
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle_1(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.r2j_1 = colorMode;
  }
  protoOf(ComponentModifiers).s2j = function () {
    return this.r2j_1;
  };
  function Light(styles) {
    this.t2i_1 = styles;
  }
  function Dark(styles) {
    this.s2i_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.r2i_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.p2i_1 = lightStyles;
    this.q2i_1 = darkStyles;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).i2j = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast_0(item, _Char___init__impl__6a9atx(46));
      destination.u(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableComponentStyle(classSelectors, extraModifiers) {
    this.w2j_1 = extraModifiers;
    this.x2j_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableComponentStyle).y2j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(-1123366866);
    if (isTraceInProgress()) {
      traceEventStart(-1123366866, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier (ComponentStyle.kt:287)');
    }
    $composer_0.l17(1240656943);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.x2j_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_8.z2j($composer_0, 6).c2k().o9_1.toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.u(element);
      }
    }
    $composer_0.m17();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.o()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.z2f(this.w2j_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  };
  function ComponentStyle_1(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function toModifier(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(-974293209);
    if (isTraceInProgress()) {
      traceEventStart(-974293209, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier (ComponentStyle.kt:456)');
    }
    var tmp = getValue(get_SilkTheme().i2k_1, _this__u8e3s4.e2j_1).y2j($composer_0, 8);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y2j($composer_0, 0);
    var tmp0 = tmp.z2f(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base_1(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.j2k_1 = colorMode;
  }
  protoOf(ComponentBaseModifier).s2j = function () {
    return this.j2k_1;
  };
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return base_2(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function base_1(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$lambda_1(init));
  }
  function base_2(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$lambda_2(init));
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:427)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:439)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:396)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function base$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.r2j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$$receiver) {
      $this$$receiver.t2j(base$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function base$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.r2j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_2($init) {
    return function ($this$$receiver) {
      $this$$receiver.t2j(base$lambda$lambda_0($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function ComponentVariant() {
  }
  protoOf(ComponentVariant).k2k = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.l2k_1 = style;
    this.m2k_1 = baseStyle;
  }
  protoOf(SimpleComponentVariant).j2j = function (styleSheet) {
    return this.l2k_1.g2j(styleSheet, '.' + this.m2k_1.e2j_1 + '.' + this.l2k_1.e2j_1);
  };
  protoOf(SimpleComponentVariant).y2j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(25327230);
    if (isTraceInProgress()) {
      traceEventStart(25327230, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier (ComponentVariant.kt:49)');
    }
    var tmp0 = toModifier(this.l2k_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  };
  protoOf(SimpleComponentVariant).k2j = function (classSelectors) {
    return this.l2k_1.k2j(classSelectors);
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.n2k_1 = head;
    this.o2k_1 = tail;
  }
  protoOf(CompositeComponentVariant).y2j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(-1522694879);
    if (isTraceInProgress()) {
      traceEventStart(-1522694879, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier (ComponentVariant.kt:60)');
    }
    var tmp0 = this.n2k_1.y2j($composer_0, 0).z2f(this.o2k_1.y2j($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(-1181076790);
    if (isTraceInProgress()) {
      traceEventStart(-1181076790, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine (ComponentVariant.kt:85)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.k();
      if (!iterator.x()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.z();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.k2k(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
    return tmp0;
  }
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.q2k_1 = style;
    this.r2k_1 = extraModifiers;
    this.s2k_1 = init;
  }
  protoOf(ComponentVariantProvider).i2i = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.q2k_1.d2j_1 + '-'), '-' + this.q2k_1.d2j_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.q2k_1.f2j(name, this.r2k_1, this.s2k_1);
  };
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant_0(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$lambda_0(init));
  }
  function addVariant_0(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(-723673224);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-723673224, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentVariant.kt:125)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:119)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.r2j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.t2j(addVariantBase$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).t2k = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.w2k();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.u(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.c2l_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).w2k = function () {
    return this.z2k(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.f2l_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).w2k = function () {
    return this.z2k(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).g2l = function (other) {
    return new CompositeOpen(this.u2k_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.j2l_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).w2k = function () {
    return this.z2k(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.m2l_1 = mediaQuery;
    this.n2l_1 = attributeSelectors;
    this.o2l_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).y2k = function () {
    return this.m2l_1;
  };
  protoOf(CompositeOpen).w2k = function () {
    return this.z2k(this.n2l_1, this.o2l_1, null);
  };
  function CssRule(target) {
    this.u2k_1 = target;
    this.v2k_1 = null;
  }
  protoOf(CssRule).x2k = function (createModifier) {
    this.u2k_1.u2j(this.y2k(), this.w2k(), createModifier);
  };
  protoOf(CssRule).y2k = function () {
    return this.v2k_1;
  };
  protoOf(CssRule).w2k = function () {
    return null;
  };
  protoOf(CssRule).z2k = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5('[' + element.c2l_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5(':' + element_0.f2l_1);
    }
    if (!(pseudoElement == null)) {
      this_0.q5('::' + pseudoElement.j2l_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_5.t2k(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_selectorSeparators() {
    _init_properties_StyleModifiers_kt__g9u6y3();
    return selectorSeparators;
  }
  var selectorSeparators;
  function Companion_3() {
    Companion_instance_6 = this;
    this.h2j_1 = new Key(null, null);
  }
  var Companion_instance_6;
  function Companion_getInstance_4() {
    if (Companion_instance_6 == null)
      new Companion_3();
    return Companion_instance_6;
  }
  function Key(mediaQuery, suffix) {
    this.y2i_1 = mediaQuery;
    this.z2i_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.y2i_1 + ', suffix=' + this.z2i_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.y2i_1 == null ? 0 : getStringHashCode(this.y2i_1);
    result = imul(result, 31) + (this.z2i_1 == null ? 0 : getStringHashCode(this.z2i_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.y2i_1 == tmp0_other_with_cast.y2i_1))
      return false;
    if (!(this.z2i_1 == tmp0_other_with_cast.z2i_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.u2i_1 = modifier;
    this.v2i_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().m(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.w2i_1 = tmp_2;
  }
  protoOf(CssModifier).x2i = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.v2i_1, other.v2i_1) : false) ? this.w2i_1 == other.w2i_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.u2i_1.z2f(other.u2i_1), this.v2i_1, this.w2i_1);
  };
  protoOf(CssModifier).i2 = function () {
    var tmp0_safe_receiver = this.v2i_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.w2i_1);
  };
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l2i_1 = ArrayList_init_$Create$_0();
    this.m2i_1 = this.l2i_1;
  }
  protoOf(StyleModifiers).t2j = function (createModifier) {
    this.l2i_1.u(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).u2j = function (mediaQuery, suffix, createModifier) {
    this.l2i_1.u(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).v2j = function (suffix, createModifier) {
    this.l2i_1.u(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).n2i = function (mediaQuery, createModifier) {
    this.l2i_1.u(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).o2i = function (_this__u8e3s4, createModifier) {
    this.n2i(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  var properties_initialized_StyleModifiers_kt_29xuzx;
  function _init_properties_StyleModifiers_kt__g9u6y3() {
    if (!properties_initialized_StyleModifiers_kt_29xuzx) {
      properties_initialized_StyleModifiers_kt_29xuzx = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
    }
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.p2l_1 = sm;
    this.q2l_1 = md;
    this.r2l_1 = lg;
    this.s2l_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.p2l_1 + ', md=' + this.q2l_1 + ', lg=' + this.r2l_1 + ', xl=' + this.s2l_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.p2l_1);
    result = imul(result, 31) + hashCode(this.q2l_1) | 0;
    result = imul(result, 31) + hashCode(this.r2l_1) | 0;
    result = imul(result, 31) + hashCode(this.s2l_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.p2l_1, tmp0_other_with_cast.p2l_1))
      return false;
    if (!equals(this.q2l_1, tmp0_other_with_cast.q2l_1))
      return false;
    if (!equals(this.r2l_1, tmp0_other_with_cast.r2l_1))
      return false;
    if (!equals(this.s2l_1, tmp0_other_with_cast.s2l_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.t2l_1 = width;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.e2b(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j2i_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(CacheByPropertyNameDelegate).e2b = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.j2i_1;
    var value = this_0.p2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.i2i(name);
      this_0.g2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.x2l($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.u2l_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2l_1 = ArrayList_init_$Create$_0();
    this.w2l_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).x2l = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1296527038);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1296527038, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.w2l_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.a1e(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(2037104680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(2037104680, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().y1d(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$lambda(content, state));
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
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.u18(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.m17();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
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
      tmp0_safe_receiver.a1e(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.y2l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.a2m_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.x2l(ComposableSingletons$DeferredKt_getInstance().a2m_1, $composer_0, 70);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.b2m_1 = config;
    this.c2m_1 = stylesheet;
    this.d2m_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.n2m(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([get_DisplayIfAtLeastZeroStyle(), get_DisplayIfAtLeastSmStyle(), get_DisplayIfAtLeastMdStyle(), get_DisplayIfAtLeastLgStyle(), get_DisplayIfAtLeastXlStyle(), get_DisplayUntilZeroStyle(), get_DisplayUntilSmStyle(), get_DisplayUntilMdStyle(), get_DisplayUntilLgStyle(), get_DisplayUntilXlStyle()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      mutableTheme.n2m(element);
    }
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().q2m(SilkStyleSheet_getInstance());
    get_SilkTheme().r2m(SilkStyleSheet_getInstance());
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var tmp$ret$0 = '.' + item.e2j_1;
        destination.u(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.k();
      while (tmp0_iterator_0.x()) {
        var element = tmp0_iterator_0.z();
        if (element instanceof CSSStyleSheet) {
          destination_0.u(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = destination_0.k();
      while (tmp0_iterator_1.x()) {
        var element_0 = tmp0_iterator_1.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.u(element_0);
        }
      }
      var tmp0_iterator_2 = destination_1.k();
      while (tmp0_iterator_2.x()) {
        var element_1 = tmp0_iterator_2.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_3 = this_2.k();
        while (tmp0_iterator_3.x()) {
          var element_2 = tmp0_iterator_3.z();
          if (element_2 instanceof CSSGroupingRule) {
            destination_2.u(element_2);
          }
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_2.k();
        while (tmp0_iterator_4.x()) {
          var element_3 = tmp0_iterator_4.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          if (element_3.type === CSSRule.MEDIA_RULE) {
            destination_3.u(element_3);
          }
        }
        var tmp0_iterator_5 = destination_3.k();
        while (tmp0_iterator_5.x()) {
          var element_4 = tmp0_iterator_5.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_4.cssRules);
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_6 = this_3.k();
          while (tmp0_iterator_6.x()) {
            var element_5 = tmp0_iterator_6.z();
            if (element_5 instanceof CSSStyleRule) {
              destination_4.u(element_5);
            }
          }
          var tmp0_iterator_7 = destination_4.k();
          while (tmp0_iterator_7.x()) {
            var element_6 = tmp0_iterator_7.z();
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var selectorText = element_6.selectorText;
            var innerStyle = element_6.style;
            if (displayStyleSelectorNames.m(selectorText)) {
              var displayValue = innerStyle.getPropertyValue('display');
              innerStyle.setProperty('display', displayValue, 'important');
            }
          }
        }
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.s2m_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).t2m = function () {
    return this.s2m_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).u2m = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_7;
  function Companion_getInstance_5() {
    return Companion_instance_7;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o2m_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.p2m_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(SilkStylesheetInstance).k2i = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.p2m_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.p2m_1.g2(name, build);
  };
  protoOf(SilkStylesheetInstance).q2m = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.o2m_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.g2j(siteStyleSheet, element.e2j_1);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.p2m_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.f2().k();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.j2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.a2i(siteStyleSheet, name);
      } else {
        lightBuilder.a2i(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.a2i(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.u(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e2m_1 = LinkedHashMap_init_$Create$_0();
    this.f2m_1 = this.e2m_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.g2m_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.h2m_1 = LinkedHashMap_init_$Create$_0();
    this.i2m_1 = this.h2m_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.j2m_1 = LinkedHashSet_init_$Create$();
    this.k2m_1 = new MutablePalettes();
    this.l2m_1 = new LegacyMutableSilkPalettes(this.k2m_1);
    this.m2m_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).n2m = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    var it = this.f2m_1.p2(style.e2j_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.e2j_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.e2m_1;
    var key = style.e2j_1;
    this_0.g2(key, style);
  };
  protoOf(MutableSilkTheme).v2m = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.f2m_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.e2j_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.e2j_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.g2m_1.u(style.e2j_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.e2j_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.e2m_1;
    var key_0 = style.e2j_1;
    var value = new ComponentStyle(style.d2j_1, extraModifiers, style.b2j_1, init);
    this_1.g2(key_0, value);
  };
  protoOf(MutableSilkTheme).w2m = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.u(element);
      }
    }
    var tmp0_iterator = destination.k();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      var it = this.i2m_1.p2(element_0.l2k_1.e2j_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.l2k_1.e2j_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.h2m_1;
      var key = element_0.l2k_1.e2j_1;
      this_0.g2(key, element_0);
    }
  };
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.d2k_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.d2k_1.l2m_1;
    tmp.e2k_1 = isInterface(tmp_0, SilkPalettes) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this.d2k_1.k2m_1;
    tmp_1.f2k_1 = isInterface(tmp_2, Palettes) ? tmp_2 : THROW_CCE();
    this.g2k_1 = this.d2k_1.m2m_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.h2k_1 = LinkedHashMap_init_$Create$_0();
    this.i2k_1 = this.h2k_1;
  }
  protoOf(ImmutableSilkTheme).r2m = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.d2k_1.f2m_1.e2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames = element.j2j(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.h2k_1;
      var key = element.e2j_1;
      var value = element.k2j(classNames);
      this_0.g2(key, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.d2k_1.i2m_1.e2();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      if (element_0 instanceof SimpleComponentVariant) {
        destination.u(element_0);
      }
    }
    var tmp0_iterator_1 = destination.k();
    while (tmp0_iterator_1.x()) {
      var element_1 = tmp0_iterator_1.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames_0 = element_1.j2j(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_2 = this.h2k_1;
      var key_0 = element_1.l2k_1.e2j_1;
      var value_0 = element_1.k2j(classNames_0);
      this_2.g2(key_0, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling SilkApp";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    modifyComponentStyleBase_0(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase_0(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$lambda_0(init));
  }
  function modifyComponentStyle(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = _this__u8e3s4.f2m_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.e2j_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.e2j_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.a2j_1;
    var existingInit = style.c2j_1;
    var tmp = modifyComponentStyle$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.v2m(style, tmp, modifyComponentStyle$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:267)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_modifyComponentStyle.r2j_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyComponentStyleBase$lambda_0($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.t2j(modifyComponentStyleBase$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_instance;
    };
  }
  function modifyComponentStyle$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.l17(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle.<anonymous> (SilkTheme.kt:255)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).z2f($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.m17();
      return tmp0;
    };
  }
  function modifyComponentStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2l_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.p9_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().g2k_1.p2l_1;
        break;
      case 2:
        tmp = get_SilkTheme().g2k_1.q2l_1;
        break;
      case 3:
        tmp = get_SilkTheme().g2k_1.r2l_1;
        break;
      case 4:
        tmp = get_SilkTheme().g2k_1.s2l_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.j2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.o9_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).z2j = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.x18(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.j2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_8;
  function Companion_getInstance_6() {
    return Companion_instance_8;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).c2k = function () {
    var tmp;
    switch (this.p9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).isLight_Deprecated = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).isDark_Deprecated = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).opposite_Deprecated = function () {
    var tmp;
    switch (this.p9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).x2m = function () {
    return get_LocalColorMode().y1d(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_7.u2m().t2m());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function ColorSchemes$Monochrome$1() {
    this.y2m_1 = Companion_instance_1.v2g(15921906);
    this.z2m_1 = Companion_instance_1.v2g(15132390);
    this.a2n_1 = Companion_instance_1.v2g(13421772);
    this.b2n_1 = Companion_instance_1.v2g(11776947);
    this.c2n_1 = Companion_instance_1.v2g(10066329);
    this.d2n_1 = Companion_instance_1.v2g(8421504);
    this.e2n_1 = Companion_instance_1.v2g(6710886);
    this.f2n_1 = Companion_instance_1.v2g(5066061);
    this.g2n_1 = Companion_instance_1.v2g(3355443);
    this.h2n_1 = Companion_instance_1.v2g(1710618);
  }
  protoOf(ColorSchemes$Monochrome$1).i2n = function () {
    return this.a2n_1;
  };
  protoOf(ColorSchemes$Monochrome$1).j2n = function () {
    return this.b2n_1;
  };
  protoOf(ColorSchemes$Monochrome$1).k2n = function () {
    return this.d2n_1;
  };
  protoOf(ColorSchemes$Monochrome$1).l2n = function () {
    return this.e2n_1;
  };
  protoOf(ColorSchemes$Monochrome$1).m2n = function () {
    return this.h2n_1;
  };
  function ColorSchemes$Red$1() {
    this.n2n_1 = Companion_instance_1.v2g(16772078);
    this.o2n_1 = Companion_instance_1.v2g(16764370);
    this.p2n_1 = Companion_instance_1.v2g(15702682);
    this.q2n_1 = Companion_instance_1.v2g(15037299);
    this.r2n_1 = Companion_instance_1.v2g(15684432);
    this.s2n_1 = Companion_instance_1.v2g(16007990);
    this.t2n_1 = Companion_instance_1.v2g(15022389);
    this.u2n_1 = Companion_instance_1.v2g(13840175);
    this.v2n_1 = Companion_instance_1.v2g(12986408);
    this.w2n_1 = Companion_instance_1.v2g(12000284);
  }
  protoOf(ColorSchemes$Red$1).i2n = function () {
    return this.p2n_1;
  };
  protoOf(ColorSchemes$Red$1).j2n = function () {
    return this.q2n_1;
  };
  protoOf(ColorSchemes$Red$1).k2n = function () {
    return this.s2n_1;
  };
  protoOf(ColorSchemes$Red$1).l2n = function () {
    return this.t2n_1;
  };
  protoOf(ColorSchemes$Red$1).m2n = function () {
    return this.w2n_1;
  };
  function ColorSchemes$Pink$1() {
    this.x2n_1 = Companion_instance_1.v2g(16573676);
    this.y2n_1 = Companion_instance_1.v2g(16301008);
    this.z2n_1 = Companion_instance_1.v2g(16027569);
    this.a2o_1 = Companion_instance_1.v2g(15753874);
    this.b2o_1 = Companion_instance_1.v2g(15483002);
    this.c2o_1 = Companion_instance_1.v2g(15277667);
    this.d2o_1 = Companion_instance_1.v2g(14162784);
    this.e2o_1 = Companion_instance_1.v2g(12720219);
    this.f2o_1 = Companion_instance_1.v2g(11342935);
    this.g2o_1 = Companion_instance_1.v2g(8916559);
  }
  protoOf(ColorSchemes$Pink$1).i2n = function () {
    return this.z2n_1;
  };
  protoOf(ColorSchemes$Pink$1).j2n = function () {
    return this.a2o_1;
  };
  protoOf(ColorSchemes$Pink$1).k2n = function () {
    return this.c2o_1;
  };
  protoOf(ColorSchemes$Pink$1).l2n = function () {
    return this.d2o_1;
  };
  protoOf(ColorSchemes$Pink$1).m2n = function () {
    return this.g2o_1;
  };
  function ColorSchemes$Purple$1() {
    this.h2o_1 = Companion_instance_1.v2g(15984117);
    this.i2o_1 = Companion_instance_1.v2g(14794471);
    this.j2o_1 = Companion_instance_1.v2g(13538264);
    this.k2o_1 = Companion_instance_1.v2g(12216520);
    this.l2o_1 = Companion_instance_1.v2g(11225020);
    this.m2o_1 = Companion_instance_1.v2g(10233776);
    this.n2o_1 = Companion_instance_1.v2g(9315498);
    this.o2o_1 = Companion_instance_1.v2g(8069026);
    this.p2o_1 = Companion_instance_1.v2g(6953882);
    this.q2o_1 = Companion_instance_1.v2g(4854924);
  }
  protoOf(ColorSchemes$Purple$1).i2n = function () {
    return this.j2o_1;
  };
  protoOf(ColorSchemes$Purple$1).j2n = function () {
    return this.k2o_1;
  };
  protoOf(ColorSchemes$Purple$1).k2n = function () {
    return this.m2o_1;
  };
  protoOf(ColorSchemes$Purple$1).l2n = function () {
    return this.n2o_1;
  };
  protoOf(ColorSchemes$Purple$1).m2n = function () {
    return this.q2o_1;
  };
  function ColorSchemes$DeepPurple$1() {
    this.r2o_1 = Companion_instance_1.v2g(15591414);
    this.s2o_1 = Companion_instance_1.v2g(13747433);
    this.t2o_1 = Companion_instance_1.v2g(11771355);
    this.u2o_1 = Companion_instance_1.v2g(9795021);
    this.v2o_1 = Companion_instance_1.v2g(8280002);
    this.w2o_1 = Companion_instance_1.v2g(6765239);
    this.x2o_1 = Companion_instance_1.v2g(6174129);
    this.y2o_1 = Companion_instance_1.v2g(5320104);
    this.z2o_1 = Companion_instance_1.v2g(4532128);
    this.a2p_1 = Companion_instance_1.v2g(3218322);
  }
  protoOf(ColorSchemes$DeepPurple$1).i2n = function () {
    return this.t2o_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).j2n = function () {
    return this.u2o_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).k2n = function () {
    return this.w2o_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).l2n = function () {
    return this.x2o_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).m2n = function () {
    return this.a2p_1;
  };
  function ColorSchemes$Indigo$1() {
    this.b2p_1 = Companion_instance_1.v2g(15264502);
    this.c2p_1 = Companion_instance_1.v2g(12962537);
    this.d2p_1 = Companion_instance_1.v2g(10463450);
    this.e2p_1 = Companion_instance_1.v2g(7964363);
    this.f2p_1 = Companion_instance_1.v2g(6056896);
    this.g2p_1 = Companion_instance_1.v2g(4149685);
    this.h2p_1 = Companion_instance_1.v2g(3754411);
    this.i2p_1 = Companion_instance_1.v2g(3162015);
    this.j2p_1 = Companion_instance_1.v2g(2635155);
    this.k2p_1 = Companion_instance_1.v2g(1713022);
  }
  protoOf(ColorSchemes$Indigo$1).i2n = function () {
    return this.d2p_1;
  };
  protoOf(ColorSchemes$Indigo$1).j2n = function () {
    return this.e2p_1;
  };
  protoOf(ColorSchemes$Indigo$1).k2n = function () {
    return this.g2p_1;
  };
  protoOf(ColorSchemes$Indigo$1).l2n = function () {
    return this.h2p_1;
  };
  protoOf(ColorSchemes$Indigo$1).m2n = function () {
    return this.k2p_1;
  };
  function ColorSchemes$Blue$1() {
    this.l2p_1 = Companion_instance_1.v2g(14938877);
    this.m2p_1 = Companion_instance_1.v2g(12312315);
    this.n2p_1 = Companion_instance_1.v2g(9489145);
    this.o2p_1 = Companion_instance_1.v2g(6600182);
    this.p2p_1 = Companion_instance_1.v2g(4367861);
    this.q2p_1 = Companion_instance_1.v2g(2201331);
    this.r2p_1 = Companion_instance_1.v2g(2001125);
    this.s2p_1 = Companion_instance_1.v2g(1668818);
    this.t2p_1 = Companion_instance_1.v2g(1402304);
    this.u2p_1 = Companion_instance_1.v2g(870305);
  }
  protoOf(ColorSchemes$Blue$1).i2n = function () {
    return this.n2p_1;
  };
  protoOf(ColorSchemes$Blue$1).j2n = function () {
    return this.o2p_1;
  };
  protoOf(ColorSchemes$Blue$1).k2n = function () {
    return this.q2p_1;
  };
  protoOf(ColorSchemes$Blue$1).l2n = function () {
    return this.r2p_1;
  };
  protoOf(ColorSchemes$Blue$1).m2n = function () {
    return this.u2p_1;
  };
  function ColorSchemes$LightBlue$1() {
    this.v2p_1 = Companion_instance_1.v2g(14808574);
    this.w2p_1 = Companion_instance_1.v2g(11789820);
    this.x2p_1 = Companion_instance_1.v2g(8508666);
    this.y2p_1 = Companion_instance_1.v2g(5227511);
    this.z2p_1 = Companion_instance_1.v2g(2733814);
    this.a2q_1 = Companion_instance_1.v2g(240116);
    this.b2q_1 = Companion_instance_1.v2g(236517);
    this.c2q_1 = Companion_instance_1.v2g(166097);
    this.d2q_1 = Companion_instance_1.v2g(161725);
    this.e2q_1 = Companion_instance_1.v2g(87963);
  }
  protoOf(ColorSchemes$LightBlue$1).i2n = function () {
    return this.x2p_1;
  };
  protoOf(ColorSchemes$LightBlue$1).j2n = function () {
    return this.y2p_1;
  };
  protoOf(ColorSchemes$LightBlue$1).k2n = function () {
    return this.a2q_1;
  };
  protoOf(ColorSchemes$LightBlue$1).l2n = function () {
    return this.b2q_1;
  };
  protoOf(ColorSchemes$LightBlue$1).m2n = function () {
    return this.e2q_1;
  };
  function ColorSchemes$Cyan$1() {
    this.f2q_1 = Companion_instance_1.v2g(14743546);
    this.g2q_1 = Companion_instance_1.v2g(11725810);
    this.h2q_1 = Companion_instance_1.v2g(8445674);
    this.i2q_1 = Companion_instance_1.v2g(5099745);
    this.j2q_1 = Companion_instance_1.v2g(2541274);
    this.k2q_1 = Companion_instance_1.v2g(48340);
    this.l2q_1 = Companion_instance_1.v2g(44225);
    this.m2q_1 = Companion_instance_1.v2g(38823);
    this.n2q_1 = Companion_instance_1.v2g(33679);
    this.o2q_1 = Companion_instance_1.v2g(24676);
  }
  protoOf(ColorSchemes$Cyan$1).i2n = function () {
    return this.h2q_1;
  };
  protoOf(ColorSchemes$Cyan$1).j2n = function () {
    return this.i2q_1;
  };
  protoOf(ColorSchemes$Cyan$1).k2n = function () {
    return this.k2q_1;
  };
  protoOf(ColorSchemes$Cyan$1).l2n = function () {
    return this.l2q_1;
  };
  protoOf(ColorSchemes$Cyan$1).m2n = function () {
    return this.o2q_1;
  };
  function ColorSchemes$Teal$1() {
    this.p2q_1 = Companion_instance_1.v2g(14742257);
    this.q2q_1 = Companion_instance_1.v2g(11722715);
    this.r2q_1 = Companion_instance_1.v2g(8440772);
    this.s2q_1 = Companion_instance_1.v2g(5093036);
    this.t2q_1 = Companion_instance_1.v2g(2533018);
    this.u2q_1 = Companion_instance_1.v2g(38536);
    this.v2q_1 = Companion_instance_1.v2g(35195);
    this.w2q_1 = Companion_instance_1.v2g(31083);
    this.x2q_1 = Companion_instance_1.v2g(26972);
    this.y2q_1 = Companion_instance_1.v2g(19776);
  }
  protoOf(ColorSchemes$Teal$1).i2n = function () {
    return this.r2q_1;
  };
  protoOf(ColorSchemes$Teal$1).j2n = function () {
    return this.s2q_1;
  };
  protoOf(ColorSchemes$Teal$1).k2n = function () {
    return this.u2q_1;
  };
  protoOf(ColorSchemes$Teal$1).l2n = function () {
    return this.v2q_1;
  };
  protoOf(ColorSchemes$Teal$1).m2n = function () {
    return this.y2q_1;
  };
  function ColorSchemes$Green$1() {
    this.z2q_1 = Companion_instance_1.v2g(15267305);
    this.a2r_1 = Companion_instance_1.v2g(13166281);
    this.b2r_1 = Companion_instance_1.v2g(10868391);
    this.c2r_1 = Companion_instance_1.v2g(8505220);
    this.d2r_1 = Companion_instance_1.v2g(6732650);
    this.e2r_1 = Companion_instance_1.v2g(5025616);
    this.f2r_1 = Companion_instance_1.v2g(4431943);
    this.g2r_1 = Companion_instance_1.v2g(3706428);
    this.h2r_1 = Companion_instance_1.v2g(3046706);
    this.i2r_1 = Companion_instance_1.v2g(1793568);
  }
  protoOf(ColorSchemes$Green$1).i2n = function () {
    return this.b2r_1;
  };
  protoOf(ColorSchemes$Green$1).j2n = function () {
    return this.c2r_1;
  };
  protoOf(ColorSchemes$Green$1).k2n = function () {
    return this.e2r_1;
  };
  protoOf(ColorSchemes$Green$1).l2n = function () {
    return this.f2r_1;
  };
  protoOf(ColorSchemes$Green$1).m2n = function () {
    return this.i2r_1;
  };
  function ColorSchemes$LightGreen$1() {
    this.j2r_1 = Companion_instance_1.v2g(15857897);
    this.k2r_1 = Companion_instance_1.v2g(14478792);
    this.l2r_1 = Companion_instance_1.v2g(12968357);
    this.m2r_1 = Companion_instance_1.v2g(11457921);
    this.n2r_1 = Companion_instance_1.v2g(10275941);
    this.o2r_1 = Companion_instance_1.v2g(9159498);
    this.p2r_1 = Companion_instance_1.v2g(8172354);
    this.q2r_1 = Companion_instance_1.v2g(6856504);
    this.r2r_1 = Companion_instance_1.v2g(5606191);
    this.s2r_1 = Companion_instance_1.v2g(3369246);
  }
  protoOf(ColorSchemes$LightGreen$1).i2n = function () {
    return this.l2r_1;
  };
  protoOf(ColorSchemes$LightGreen$1).j2n = function () {
    return this.m2r_1;
  };
  protoOf(ColorSchemes$LightGreen$1).k2n = function () {
    return this.o2r_1;
  };
  protoOf(ColorSchemes$LightGreen$1).l2n = function () {
    return this.p2r_1;
  };
  protoOf(ColorSchemes$LightGreen$1).m2n = function () {
    return this.s2r_1;
  };
  function ColorSchemes$Lime$1() {
    this.t2r_1 = Companion_instance_1.v2g(16382951);
    this.u2r_1 = Companion_instance_1.v2g(15791299);
    this.v2r_1 = Companion_instance_1.v2g(15134364);
    this.w2r_1 = Companion_instance_1.v2g(14477173);
    this.x2r_1 = Companion_instance_1.v2g(13951319);
    this.y2r_1 = Companion_instance_1.v2g(13491257);
    this.z2r_1 = Companion_instance_1.v2g(12634675);
    this.a2s_1 = Companion_instance_1.v2g(11514923);
    this.b2s_1 = Companion_instance_1.v2g(10394916);
    this.c2s_1 = Companion_instance_1.v2g(8550167);
  }
  protoOf(ColorSchemes$Lime$1).i2n = function () {
    return this.v2r_1;
  };
  protoOf(ColorSchemes$Lime$1).j2n = function () {
    return this.w2r_1;
  };
  protoOf(ColorSchemes$Lime$1).k2n = function () {
    return this.y2r_1;
  };
  protoOf(ColorSchemes$Lime$1).l2n = function () {
    return this.z2r_1;
  };
  protoOf(ColorSchemes$Lime$1).m2n = function () {
    return this.c2s_1;
  };
  function ColorSchemes$Yellow$1() {
    this.d2s_1 = Companion_instance_1.v2g(16776679);
    this.e2s_1 = Companion_instance_1.v2g(16775620);
    this.f2s_1 = Companion_instance_1.v2g(16774557);
    this.g2s_1 = Companion_instance_1.v2g(16773494);
    this.h2s_1 = Companion_instance_1.v2g(16772696);
    this.i2s_1 = Companion_instance_1.v2g(16771899);
    this.j2s_1 = Companion_instance_1.v2g(16635957);
    this.k2s_1 = Companion_instance_1.v2g(16498733);
    this.l2s_1 = Companion_instance_1.v2g(16361509);
    this.m2s_1 = Companion_instance_1.v2g(16088855);
  }
  protoOf(ColorSchemes$Yellow$1).i2n = function () {
    return this.f2s_1;
  };
  protoOf(ColorSchemes$Yellow$1).j2n = function () {
    return this.g2s_1;
  };
  protoOf(ColorSchemes$Yellow$1).k2n = function () {
    return this.i2s_1;
  };
  protoOf(ColorSchemes$Yellow$1).l2n = function () {
    return this.j2s_1;
  };
  protoOf(ColorSchemes$Yellow$1).m2n = function () {
    return this.m2s_1;
  };
  function ColorSchemes$Amber$1() {
    this.n2s_1 = Companion_instance_1.v2g(16775393);
    this.o2s_1 = Companion_instance_1.v2g(16772275);
    this.p2s_1 = Companion_instance_1.v2g(16769154);
    this.q2s_1 = Companion_instance_1.v2g(16766287);
    this.r2s_1 = Companion_instance_1.v2g(16763432);
    this.s2s_1 = Companion_instance_1.v2g(16761095);
    this.t2s_1 = Companion_instance_1.v2g(16757504);
    this.u2s_1 = Companion_instance_1.v2g(16752640);
    this.v2s_1 = Companion_instance_1.v2g(16748288);
    this.w2s_1 = Companion_instance_1.v2g(16740096);
  }
  protoOf(ColorSchemes$Amber$1).i2n = function () {
    return this.p2s_1;
  };
  protoOf(ColorSchemes$Amber$1).j2n = function () {
    return this.q2s_1;
  };
  protoOf(ColorSchemes$Amber$1).k2n = function () {
    return this.s2s_1;
  };
  protoOf(ColorSchemes$Amber$1).l2n = function () {
    return this.t2s_1;
  };
  protoOf(ColorSchemes$Amber$1).m2n = function () {
    return this.w2s_1;
  };
  function ColorSchemes$Orange$1() {
    this.x2s_1 = Companion_instance_1.v2g(16774112);
    this.y2s_1 = Companion_instance_1.v2g(16769202);
    this.z2s_1 = Companion_instance_1.v2g(16764032);
    this.a2t_1 = Companion_instance_1.v2g(16758605);
    this.b2t_1 = Companion_instance_1.v2g(16754470);
    this.c2t_1 = Companion_instance_1.v2g(16750592);
    this.d2t_1 = Companion_instance_1.v2g(16485376);
    this.e2t_1 = Companion_instance_1.v2g(16088064);
    this.f2t_1 = Companion_instance_1.v2g(15690752);
    this.g2t_1 = Companion_instance_1.v2g(15094016);
  }
  protoOf(ColorSchemes$Orange$1).i2n = function () {
    return this.z2s_1;
  };
  protoOf(ColorSchemes$Orange$1).j2n = function () {
    return this.a2t_1;
  };
  protoOf(ColorSchemes$Orange$1).k2n = function () {
    return this.c2t_1;
  };
  protoOf(ColorSchemes$Orange$1).l2n = function () {
    return this.d2t_1;
  };
  protoOf(ColorSchemes$Orange$1).m2n = function () {
    return this.g2t_1;
  };
  function ColorSchemes$DeepOrange$1() {
    this.h2t_1 = Companion_instance_1.v2g(16509415);
    this.i2t_1 = Companion_instance_1.v2g(16764092);
    this.j2t_1 = Companion_instance_1.v2g(16755601);
    this.k2t_1 = Companion_instance_1.v2g(16747109);
    this.l2t_1 = Companion_instance_1.v2g(16740419);
    this.m2t_1 = Companion_instance_1.v2g(16733986);
    this.n2t_1 = Companion_instance_1.v2g(16011550);
    this.o2t_1 = Companion_instance_1.v2g(15092249);
    this.p2t_1 = Companion_instance_1.v2g(14172949);
    this.q2t_1 = Companion_instance_1.v2g(12531212);
  }
  protoOf(ColorSchemes$DeepOrange$1).i2n = function () {
    return this.j2t_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).j2n = function () {
    return this.k2t_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).k2n = function () {
    return this.m2t_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).l2n = function () {
    return this.n2t_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).m2n = function () {
    return this.q2t_1;
  };
  function ColorSchemes$Brown$1() {
    this.r2t_1 = Companion_instance_1.v2g(15723497);
    this.s2t_1 = Companion_instance_1.v2g(14142664);
    this.t2t_1 = Companion_instance_1.v2g(12364452);
    this.u2t_1 = Companion_instance_1.v2g(10586239);
    this.v2t_1 = Companion_instance_1.v2g(9268835);
    this.w2t_1 = Companion_instance_1.v2g(7951688);
    this.x2t_1 = Companion_instance_1.v2g(7162945);
    this.y2t_1 = Companion_instance_1.v2g(6111287);
    this.z2t_1 = Companion_instance_1.v2g(5125166);
    this.a2u_1 = Companion_instance_1.v2g(4073251);
  }
  protoOf(ColorSchemes$Brown$1).i2n = function () {
    return this.t2t_1;
  };
  protoOf(ColorSchemes$Brown$1).j2n = function () {
    return this.u2t_1;
  };
  protoOf(ColorSchemes$Brown$1).k2n = function () {
    return this.w2t_1;
  };
  protoOf(ColorSchemes$Brown$1).l2n = function () {
    return this.x2t_1;
  };
  protoOf(ColorSchemes$Brown$1).m2n = function () {
    return this.a2u_1;
  };
  function ColorSchemes$Gray$1() {
    this.b2u_1 = Companion_instance_1.v2g(16448250);
    this.c2u_1 = Companion_instance_1.v2g(16119285);
    this.d2u_1 = Companion_instance_1.v2g(15658734);
    this.e2u_1 = Companion_instance_1.v2g(14737632);
    this.f2u_1 = Companion_instance_1.v2g(12434877);
    this.g2u_1 = Companion_instance_1.v2g(10395294);
    this.h2u_1 = Companion_instance_1.v2g(7697781);
    this.i2u_1 = Companion_instance_1.v2g(6381921);
    this.j2u_1 = Companion_instance_1.v2g(4342338);
    this.k2u_1 = Companion_instance_1.v2g(2171169);
  }
  protoOf(ColorSchemes$Gray$1).i2n = function () {
    return this.d2u_1;
  };
  protoOf(ColorSchemes$Gray$1).j2n = function () {
    return this.e2u_1;
  };
  protoOf(ColorSchemes$Gray$1).k2n = function () {
    return this.g2u_1;
  };
  protoOf(ColorSchemes$Gray$1).l2n = function () {
    return this.h2u_1;
  };
  protoOf(ColorSchemes$Gray$1).m2n = function () {
    return this.k2u_1;
  };
  function ColorSchemes$BlueGray$1() {
    this.l2u_1 = Companion_instance_1.v2g(15527921);
    this.m2u_1 = Companion_instance_1.v2g(13621468);
    this.n2u_1 = Companion_instance_1.v2g(11583173);
    this.o2u_1 = Companion_instance_1.v2g(9479342);
    this.p2u_1 = Companion_instance_1.v2g(7901340);
    this.q2u_1 = Companion_instance_1.v2g(6323595);
    this.r2u_1 = Companion_instance_1.v2g(5533306);
    this.s2u_1 = Companion_instance_1.v2g(4545124);
    this.t2u_1 = Companion_instance_1.v2g(3622735);
    this.u2u_1 = Companion_instance_1.v2g(2503224);
  }
  protoOf(ColorSchemes$BlueGray$1).i2n = function () {
    return this.n2u_1;
  };
  protoOf(ColorSchemes$BlueGray$1).j2n = function () {
    return this.o2u_1;
  };
  protoOf(ColorSchemes$BlueGray$1).k2n = function () {
    return this.q2u_1;
  };
  protoOf(ColorSchemes$BlueGray$1).l2n = function () {
    return this.r2u_1;
  };
  protoOf(ColorSchemes$BlueGray$1).m2n = function () {
    return this.u2u_1;
  };
  function ColorSchemes() {
    ColorSchemes_instance = this;
    var tmp = this;
    tmp.v2u_1 = new ColorSchemes$Monochrome$1();
    var tmp_0 = this;
    tmp_0.w2u_1 = new ColorSchemes$Red$1();
    var tmp_1 = this;
    tmp_1.x2u_1 = new ColorSchemes$Pink$1();
    var tmp_2 = this;
    tmp_2.y2u_1 = new ColorSchemes$Purple$1();
    var tmp_3 = this;
    tmp_3.z2u_1 = new ColorSchemes$DeepPurple$1();
    var tmp_4 = this;
    tmp_4.a2v_1 = new ColorSchemes$Indigo$1();
    var tmp_5 = this;
    tmp_5.b2v_1 = new ColorSchemes$Blue$1();
    var tmp_6 = this;
    tmp_6.c2v_1 = new ColorSchemes$LightBlue$1();
    var tmp_7 = this;
    tmp_7.d2v_1 = new ColorSchemes$Cyan$1();
    var tmp_8 = this;
    tmp_8.e2v_1 = new ColorSchemes$Teal$1();
    var tmp_9 = this;
    tmp_9.f2v_1 = new ColorSchemes$Green$1();
    var tmp_10 = this;
    tmp_10.g2v_1 = new ColorSchemes$LightGreen$1();
    var tmp_11 = this;
    tmp_11.h2v_1 = new ColorSchemes$Lime$1();
    var tmp_12 = this;
    tmp_12.i2v_1 = new ColorSchemes$Yellow$1();
    var tmp_13 = this;
    tmp_13.j2v_1 = new ColorSchemes$Amber$1();
    var tmp_14 = this;
    tmp_14.k2v_1 = new ColorSchemes$Orange$1();
    var tmp_15 = this;
    tmp_15.l2v_1 = new ColorSchemes$DeepOrange$1();
    var tmp_16 = this;
    tmp_16.m2v_1 = new ColorSchemes$Brown$1();
    var tmp_17 = this;
    tmp_17.n2v_1 = new ColorSchemes$Gray$1();
    var tmp_18 = this;
    tmp_18.o2v_1 = new ColorSchemes$BlueGray$1();
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  function LegacyMutableSilkPalettes(palettes, light, dark) {
    light = light === VOID ? new LegacyMutableSilkPalette(palettes.p2v_1) : light;
    dark = dark === VOID ? new LegacyMutableSilkPalette(palettes.q2v_1) : dark;
    this.r2v_1 = light;
    this.s2v_1 = dark;
  }
  function SilkPalettes() {
  }
  function PaletteEntry($outer) {
    this.t2v_1 = $outer;
  }
  function Button($outer) {
    this.y2v_1 = $outer;
    this.u2v_1 = new PaletteEntry(this.y2v_1);
    this.v2v_1 = new PaletteEntry(this.y2v_1);
    this.w2v_1 = new PaletteEntry(this.y2v_1);
    this.x2v_1 = new PaletteEntry(this.y2v_1);
  }
  function Checkbox($outer) {
    this.c2w_1 = $outer;
    this.z2v_1 = new PaletteEntry(this.c2w_1);
    this.a2w_1 = new PaletteEntry(this.c2w_1);
    this.b2w_1 = new PaletteEntry(this.c2w_1);
  }
  function Input($outer) {
    this.i2w_1 = $outer;
    this.d2w_1 = new PaletteEntry(this.i2w_1);
    this.e2w_1 = new PaletteEntry(this.i2w_1);
    this.f2w_1 = new PaletteEntry(this.i2w_1);
    this.g2w_1 = new PaletteEntry(this.i2w_1);
    this.h2w_1 = new PaletteEntry(this.i2w_1);
  }
  function Link($outer) {
    this.l2w_1 = $outer;
    this.j2w_1 = new PaletteEntry(this.l2w_1);
    this.k2w_1 = new PaletteEntry(this.l2w_1);
  }
  function Switch($outer) {
    this.p2w_1 = $outer;
    this.m2w_1 = new PaletteEntry(this.p2w_1);
    this.n2w_1 = new PaletteEntry(this.p2w_1);
    this.o2w_1 = new PaletteEntry(this.p2w_1);
  }
  function Tab($outer) {
    this.y2w_1 = $outer;
    this.q2w_1 = new PaletteEntry(this.y2w_1);
    this.r2w_1 = new PaletteEntry(this.y2w_1);
    this.s2w_1 = new PaletteEntry(this.y2w_1);
    this.t2w_1 = new PaletteEntry(this.y2w_1);
    this.u2w_1 = new PaletteEntry(this.y2w_1);
    this.v2w_1 = new PaletteEntry(this.y2w_1);
    this.w2w_1 = new PaletteEntry(this.y2w_1);
    this.x2w_1 = new PaletteEntry(this.y2w_1);
  }
  function Tooltip($outer) {
    this.b2x_1 = $outer;
    this.z2w_1 = new PaletteEntry(this.b2x_1);
    this.a2x_1 = new PaletteEntry(this.b2x_1);
  }
  function LegacyMutableSilkPalette(delegatePalette) {
    this.c2x_1 = delegatePalette;
    this.d2x_1 = new Button(this);
    this.e2x_1 = new Checkbox(this);
    this.f2x_1 = new Input(this);
    this.g2x_1 = new Link(this);
    this.h2x_1 = new Switch(this);
    this.i2x_1 = new Tab(this);
    this.j2x_1 = new Tooltip(this);
  }
  function MutablePalettes() {
    this.p2v_1 = new MutablePalette();
    this.q2v_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).k2x = function () {
    return this.p2v_1;
  };
  protoOf(MutablePalettes).l2x = function () {
    return this.q2v_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.p2x_1 = palette;
    this.q2x_1 = prefix;
  }
  protoOf(EntryDelegate).e2b = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.q2x_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.p2x_1.r2x_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).s2x = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.p2x_1.r2x_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.q2x_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.g2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.t2x_1 = palette;
    this.u2x_1 = groupName;
  }
  protoOf(ColorGroup).v2x = function () {
    return new EntryDelegate(this.t2x_1, this.u2x_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r2x_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(MutablePalette).n2x = function (key) {
    return this.r2x_1.p2(key);
  };
  protoOf(MutablePalette).w2x = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.r2x_1.g2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().f2k_1.m2x(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.x2x();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.y2x_1 = topLeft;
    this.z2x_1 = botRight;
    this.a2y_1 = cornerRadius;
  }
  protoOf(RectF).x2x = function () {
    var tmp;
    if ((((!(this.y2x_1.wd_1 === 0.0) ? true : !(this.y2x_1.xd_1 === 0.0)) ? true : !(this.z2x_1.wd_1 === 100.0)) ? true : !(this.z2x_1.xd_1 === 100.0)) ? true : !equals(this.a2y_1, get_px(0))) {
      tmp = new InsetPath(this.y2x_1, this.z2x_1, this.a2y_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).c2y = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).d2y = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.wd_1) + '% ' + toString(_this__u8e3s4.xd_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.wd_1, 100.0 - _this__u8e3s4.xd_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.e2y_1 = topLeft;
    this.f2y_1 = roundness;
    this.g2y_1 = from100(botRight);
  }
  protoOf(InsetPath).b2y = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.f2y_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.e2y_1.wd_1;
    var top = this.e2y_1.xd_1;
    var right = this.g2y_1.wd_1;
    var bottom = this.g2y_1.xd_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.c2y(left) : (left === right ? top === bottom : false) ? this.d2y(to(top, left)) : this.c2y(top) + ' ' + this.c2y(right) + ' ' + this.c2y(bottom) + ' ' + this.c2y(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.b26('clip-path', $path.b2y());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).m2x = get;
  protoOf(MutablePalette).o2x = getValue_0;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  Companion_instance_7 = new Companion_4();
  _SilkTheme = null;
  Companion_instance_8 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = get_entries;
  _.$_$.d = ComponentStyle_0;
  _.$_$.e = ComponentStyle_1;
  _.$_$.f = get_active;
  _.$_$.g = addVariantBase;
  _.$_$.h = addVariant;
  _.$_$.i = get_ariaDisabled;
  _.$_$.j = get_ariaInvalid;
  _.$_$.k = base;
  _.$_$.l = base_1;
  _.$_$.m = base_0;
  _.$_$.n = get_disabled;
  _.$_$.o = get_focusVisible;
  _.$_$.p = get_hover;
  _.$_$.q = get_link;
  _.$_$.r = not;
  _.$_$.s = get_placeholder;
  _.$_$.t = toModifier;
  _.$_$.u = get_visited;
  _.$_$.v = renderWithDeferred;
  _.$_$.w = set_additionalSilkInitialization;
  _.$_$.x = ColorGroup;
  _.$_$.y = MutablePalette;
  _.$_$.z = toPalette;
  _.$_$.a1 = suffixedWith;
  _.$_$.b1 = clip;
  _.$_$.c1 = modifyComponentStyleBase;
  _.$_$.d1 = prepareSilkFoundation;
  _.$_$.e1 = RectF_init_$Create$_0;
  _.$_$.f1 = Companion_instance_3;
  _.$_$.g1 = Companion_instance_8;
  _.$_$.h1 = ColorSchemes_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
