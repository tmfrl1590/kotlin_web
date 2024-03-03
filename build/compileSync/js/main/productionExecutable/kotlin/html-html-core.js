(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i6;
  var asList = kotlin_kotlin.$_$.t2;
  var interfaceMeta = kotlin_kotlin.$_$.x5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var addAll = kotlin_kotlin.$_$.q2;
  var classMeta = kotlin_kotlin.$_$.m5;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var hashCode = kotlin_kotlin.$_$.v5;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var equals = kotlin_kotlin.$_$.p5;
  var getStringHashCode = kotlin_kotlin.$_$.u5;
  var toString = kotlin_kotlin.$_$.b9;
  var numberToDouble = kotlin_kotlin.$_$.e6;
  var getNumberHashCode = kotlin_kotlin.$_$.s5;
  var defineProp = kotlin_kotlin.$_$.o5;
  var isInterface = kotlin_kotlin.$_$.a6;
  var Collection = kotlin_kotlin.$_$.k2;
  var toString_0 = kotlin_kotlin.$_$.l6;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var listOfNotNull = kotlin_kotlin.$_$.q3;
  var joinToString = kotlin_kotlin.$_$.k3;
  var joinToString_0 = kotlin_kotlin.$_$.l3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.a3;
  var copyToArray = kotlin_kotlin.$_$.y2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.a9;
  var lazy = kotlin_kotlin.$_$.v8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  //endregion
  //region block: pre-declaration
  function classes(classes) {
    return this.f24(asList(classes));
  }
  function tabIndex(value) {
    return this.i24('tabindex', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope], AttrsScopeBuilder);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, VOID, EventsListenerScopeBuilder);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.g26(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.g26(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.i26(variableName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  function add(selector, style) {
    this.n25(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.f27();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.c27(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.c27(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.z26(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder], StyleSheet_init_$Create$);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder], CSSRulesHolderState);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta, VOID, VOID, CSSBorder);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  //endregion
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.j24_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k24_1 = LinkedHashMap_init_$Create$();
    this.l24_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.m24_1 = ArrayList_init_$Create$();
    this.n24_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.o24_1 = ArrayList_init_$Create$();
    this.p24_1 = 8;
  }
  protoOf(AttrsScopeBuilder).f24 = function (classes) {
    this.o24_1.a1(classes);
  };
  protoOf(AttrsScopeBuilder).g24 = function (classes) {
    addAll(this.o24_1, classes);
  };
  protoOf(AttrsScopeBuilder).e24 = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.l24_1);
  };
  protoOf(AttrsScopeBuilder).i24 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.k24_1.g2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).q24 = function () {
    return this.k24_1;
  };
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r24_1 = ArrayList_init_$Create$();
    this.s24_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).t24 = function () {
    return this.r24_1;
  };
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.v24_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.x24_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.y24_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.z24_1 = keyframe;
    this.a25_1 = style;
    this.b25_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).c25 = function () {
    return this.a25_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).d25 = function () {
    return this.z24_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.z24_1 + ', style=' + this.a25_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.z24_1);
    result = imul(result, 31) + hashCode(this.a25_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.z24_1, tmp0_other_with_cast.z24_1))
      return false;
    if (!equals(this.a25_1, tmp0_other_with_cast.a25_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.e25_1 = name;
    this.f25_1 = keys;
    this.g25_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).d25 = function () {
    return '@keyframes ' + this.e25_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.e25_1 + ', keys=' + this.f25_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.e25_1);
    result = imul(result, 31) + hashCode(this.f25_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.e25_1 === tmp0_other_with_cast.e25_1))
      return false;
    if (!equals(this.f25_1, tmp0_other_with_cast.f25_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.h25_1 = string;
    this.i25_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.h25_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.h25_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.h25_1 === tmp0_other_with_cast.h25_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.j25_1 = name;
    this.k25_1 = value;
    this.l25_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.j25_1 === other.j25_1 ? toString(this.k25_1) === toString(other.k25_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.k25_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.k25_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.j25_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.m25(rulesBuild);
    _this__u8e3s4.n25(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.o25_1 = query;
    this.p25_1 = rules;
    this.q25_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).r25 = function () {
    return this.p25_1;
  };
  protoOf(CSSMediaRuleDeclaration).d25 = function () {
    return '@media ' + this.o25_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.p25_1, other.p25_1) ? equals(this.o25_1, other.o25_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.s25_1 = selector;
    this.t25_1 = style;
    this.u25_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).c25 = function () {
    return this.t25_1;
  };
  protoOf(CSSStyleRuleDeclaration).d25 = function () {
    return this.s25_1.w25();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.s25_1 + ', style=' + this.t25_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.s25_1);
    result = imul(result, 31) + hashCode(this.t25_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.s25_1, tmp0_other_with_cast.s25_1))
      return false;
    if (!equals(this.t25_1, tmp0_other_with_cast.t25_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.a26_1 = 0;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitValueTyped(value, unit) {
    this.l26_1 = value;
    this.m26_1 = unit;
    this.n26_1 = 0;
  }
  protoOf(CSSUnitValueTyped).j2 = function () {
    return this.l26_1;
  };
  protoOf(CSSUnitValueTyped).o26 = function () {
    return this.m26_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.l26_1 + this.m26_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.l26_1);
    result = imul(result, 31) + hashCode(this.m26_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.l26_1, tmp0_other_with_cast.l26_1))
      return false;
    if (!equals(this.m26_1, tmp0_other_with_cast.m26_1))
      return false;
    return true;
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d26_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e26_1 = ArrayList_init_$Create$();
    this.f26_1 = 0;
  }
  protoOf(StyleScopeBuilder).j26 = function () {
    return this.d26_1;
  };
  protoOf(StyleScopeBuilder).k26 = function () {
    return this.e26_1;
  };
  protoOf(StyleScopeBuilder).g26 = function (propertyName, value) {
    this.j26().u(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).i26 = function (variableName, value) {
    this.k26().u(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.j26(), other.j26()) ? nativeEquals(this.k26(), other.k26()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.p26_1 = name;
    this.q26_1 = value;
    this.r26_1 = 8;
  }
  protoOf(StylePropertyDeclaration).yd = function () {
    return this.p26_1;
  };
  protoOf(StylePropertyDeclaration).zd = function () {
    return this.q26_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.p26_1 + ', value=' + this.q26_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.p26_1);
    result = imul(result, 31) + hashCode(this.q26_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.p26_1 === tmp0_other_with_cast.p26_1))
      return false;
    if (!equals(this.q26_1, tmp0_other_with_cast.q26_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.i() === properties.i()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.j(tmp0);
        if (!(element.p26_1 === otherProp.p26_1 ? toString_0(element.q26_1) === toString_0(otherProp.q26_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_7() {
    this.s26_1 = 0;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.t26_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u26_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.v26_1 = customPrefix == null ? '' + getKClassFromExpression(this).s6() + '-' : customPrefix;
    this.w26_1 = customPrefix == null;
    this.x26_1 = 0;
  }
  protoOf(StyleSheet).y26 = function () {
    return this.t26_1.y26();
  };
  protoOf(StyleSheet).n25 = function (cssRule) {
    this.t26_1.n25(cssRule);
  };
  protoOf(StyleSheet).z26 = function (selector, style) {
    this.t26_1.z26(selector, style);
  };
  protoOf(StyleSheet).a27 = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.y26();
  };
  protoOf(StyleSheet).m25 = function (rulesBuild) {
    return this.a27(rulesBuild);
  };
  protoOf(StyleSheet).c27 = function (selector, cssRule) {
    return this.b27(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.g27_1 = mutableStateListOf();
    this.h27_1 = 0;
  }
  protoOf(CSSRulesHolderState).y26 = function () {
    return this.g27_1;
  };
  protoOf(CSSRulesHolderState).n25 = function (cssRule) {
    this.g27_1.b16(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.j27_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.j27_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.j27_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.j27_1 === tmp0_other_with_cast.j27_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.l27_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.l27_1 === other.l27_1 ? this.m27() == other.m27() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).m27 = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.m27();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.l27_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.g26('background-color', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.g26('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function CSSBorder() {
    this.n27_1 = null;
    this.o27_1 = null;
    this.p27_1 = null;
    this.q27_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.n27_1, other.n27_1) ? equals(this.o27_1, other.o27_1) : false) ? equals(this.p27_1, other.p27_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.n27_1, this.o27_1, this.p27_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.n27_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.o27_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.p27_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.g26('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.g26('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.g26('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.g26('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.g26('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.b26('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.g26('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.c26('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.g26('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.b26('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.b26('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.b26('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.b26('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.b26('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.b26('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.b26('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.g26('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.g26('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.g26('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.g26('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.c26('opacity', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.b26('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.g26('font-size', value);
  }
  function CSSSelector() {
    this.v25_1 = 0;
  }
  protoOf(CSSSelector).w25 = function () {
    return toString_0(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.g18(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.g18(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l17(-492369756);
      sourceInformation($composer_1, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.o18();
      var tmp;
      if (false ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.u18(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.m17();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.b12();
      if ($composer_2.t17()) {
        var tmp_1 = $composer_2;
        tmp_1.v17(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.y17();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.n24_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).l17(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.o24_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.l24_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.q24();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.j24_1.t24();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.m24_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).m17();
      $composer_2.l17(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.l17(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.m17();
      $composer_2.m17();
      $composer_2.a18();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
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
      tmp1_safe_receiver.a1e(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.t27_1 = node;
    this.u27_1 = emptyList();
  }
  protoOf(DomElementWrapper).r22 = function () {
    return this.t27_1;
  };
  protoOf(DomElementWrapper).v27 = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.u27_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.t27_1.removeEventListener(element.g1o(), element);
    }
    this.u27_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.u27_1.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.t27_1.addEventListener(element_0.g1o(), element_0);
    }
  };
  protoOf(DomElementWrapper).w27 = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.yd();
      var item = element.zd();
      applicator(this.t27_1, item);
    }
  };
  protoOf(DomElementWrapper).x27 = function (styleApplier) {
    var tmp0_subject = this.t27_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.t27_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.t27_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.j26().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.yd();
        var value = element.zd();
        style.setProperty(name, toString_0(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.k26().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.yd();
        var value_0 = element_0.zd();
        style.setProperty(name_0, toString_0(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).y27 = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.t27_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.t27_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.f2().k();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.t27_1.setAttribute(element_0.i2(), element_0.j2());
    }
  };
  protoOf(DomElementWrapper).z27 = function (classes) {
    this.t27_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.o()) {
      var tmp = this.t27_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.w1l();
      $scope.e28(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.z27(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.x27(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.y27(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.v27(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.w27(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.f28());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.d28_1 = 8;
  }
  protoOf(ElementScopeImpl).e28 = function (_set____db54di) {
    this.c28_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).f28 = function () {
    var tmp = this.c28_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).g28 = function (_this__u8e3s4) {
    return this.f28();
  };
  function ElementScopeBase() {
    this.h28_1 = 0;
    this.i28_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  var A;
  var Input;
  var Button;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.k28_1;
    el$factory();
    return this_0.j2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.j28_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.j28_1 = tagName;
    var tmp = this;
    tmp.k28_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).w1l = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.g18(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.a1e(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.ez(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      $composer_0.l17(274170602);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.o18();
      var tmp;
      if (false ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.u18(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.m17();
      var $composer_1 = $composer_0;
      $composer_1.l17(1886828752);
      sourceInformation($composer_1, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.h17();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.b12();
      if ($composer_1.t17()) {
        var tmp_2 = $composer_1;
        tmp_2.v17(Text$lambda_0(tmpCache));
      } else {
        $composer_1.y17();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_1);
      $composer_1.a18();
      $composer_1.m17();
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
      tmp0_safe_receiver.a1e(Text$lambda_2(value, $changed));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.g18(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.ez(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.l17(274183913);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.g18(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.o18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().d12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        this_0.u18(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.m17();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.l17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.ez(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.o18();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance().d12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.u18(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.m17();
      TagElement(tmp, tmpCache, tmp0, $composer_0, 384);
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
      tmp0_safe_receiver.a1e(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.r22();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.l28_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).hk = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.l28_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.g28($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.ez($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.i();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.x11();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.e22(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.d25() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.c25().j26().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.yd();
        var value = element.zd();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.c25().k26().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.yd();
        var value_0 = element_0.zd();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.r25().k();
        while (tmp0_iterator_1.x()) {
          var element_1 = tmp0_iterator_1.z();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.f25_1.k();
          while (tmp0_iterator_2.x()) {
            var element_2 = tmp0_iterator_2.z();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString_0(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString_0(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.d25() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.d25() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).h24 = tabIndex;
  protoOf(StyleScopeBuilder).b26 = property;
  protoOf(StyleScopeBuilder).c26 = property_0;
  protoOf(StyleScopeBuilder).h26 = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.j2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.o26();
  });
  protoOf(StyleSheet).b27 = style_0;
  protoOf(StyleSheet).d27 = style;
  protoOf(StyleSheet).e27 = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).f27 = get_hover;
  protoOf(CSSRulesHolderState).z26 = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = Companion_instance_2;
  _.$_$.c = Companion_instance_3;
  _.$_$.d = From_getInstance;
  _.$_$.e = To_getInstance;
  _.$_$.f = Companion_instance;
  _.$_$.g = Companion_instance_4;
  _.$_$.h = Companion_instance_5;
  _.$_$.i = Companion_instance_0;
  _.$_$.j = Companion_instance_1;
  _.$_$.k = classes;
  _.$_$.l = tabIndex;
  _.$_$.m = AttrsScope;
  _.$_$.n = CSSBorder;
  _.$_$.o = CSSKeyframeRuleDeclaration;
  _.$_$.p = CSSKeyframesRuleDeclaration;
  _.$_$.q = MediaFeature;
  _.$_$.r = Raw;
  _.$_$.s = property;
  _.$_$.t = property_0;
  _.$_$.u = variable;
  _.$_$.v = StyleScopeBuilder;
  _.$_$.w = StyleScope;
  _.$_$.x = StyleSheet;
  _.$_$.y = alignItems;
  _.$_$.z = alignSelf;
  _.$_$.a1 = backgroundColor;
  _.$_$.b1 = borderRadius;
  _.$_$.c1 = border;
  _.$_$.d1 = bottom;
  _.$_$.e1 = boxSizing;
  _.$_$.f1 = color;
  _.$_$.g1 = color_0;
  _.$_$.h1 = get_cssRem;
  _.$_$.i1 = display;
  _.$_$.j1 = flexDirection;
  _.$_$.k1 = flexGrow;
  _.$_$.l1 = fontSize;
  _.$_$.m1 = get_fr;
  _.$_$.n1 = gap;
  _.$_$.o1 = gridArea;
  _.$_$.p1 = gridAutoColumns;
  _.$_$.q1 = gridAutoRows;
  _.$_$.r1 = gridTemplateColumns;
  _.$_$.s1 = gridTemplateRows;
  _.$_$.t1 = height;
  _.$_$.u1 = justifyContent;
  _.$_$.v1 = left;
  _.$_$.w1 = lineHeight;
  _.$_$.x1 = margin;
  _.$_$.y1 = media;
  _.$_$.z1 = minHeight;
  _.$_$.a2 = minWidth;
  _.$_$.b2 = get_ms;
  _.$_$.c2 = opacity;
  _.$_$.d2 = padding;
  _.$_$.e2 = get_percent;
  _.$_$.f2 = position;
  _.$_$.g2 = get_px;
  _.$_$.h2 = right;
  _.$_$.i2 = style_1;
  _.$_$.j2 = top;
  _.$_$.k2 = unaryMinus;
  _.$_$.l2 = get_vh;
  _.$_$.m2 = width_0;
  _.$_$.n2 = width;
  _.$_$.o2 = Div_0;
  _.$_$.p2 = Style_0;
  _.$_$.q2 = Text_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
