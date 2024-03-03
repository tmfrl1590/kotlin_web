(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kobweb-frontend-browser-ext'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectCreate = kotlin_kotlin.$_$.mb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.oa;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var classMeta = kotlin_kotlin.$_$.ea;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var THROW_IAE = kotlin_kotlin.$_$.se;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var Enum = kotlin_kotlin.$_$.ge;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f2;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var toString = kotlin_kotlin.$_$.rb;
  var get_PI = kotlin_kotlin.$_$.sb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var joinToString = kotlin_kotlin.$_$.f7;
  var THROW_CCE = kotlin_kotlin.$_$.re;
  var Annotation = kotlin_kotlin.$_$.de;
  var lastOrNull = kotlin_kotlin.$_$.j7;
  var get_lastIndex = kotlin_kotlin.$_$.h7;
  var joinToString_0 = kotlin_kotlin.$_$.e7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nf;
  var listOf = kotlin_kotlin.$_$.m7;
  var emptyList = kotlin_kotlin.$_$.r6;
  var addAll = kotlin_kotlin.$_$.q5;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var wrapQuotesIfNecessary = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var listOfNotNull = kotlin_kotlin.$_$.l7;
  var isNumber = kotlin_kotlin.$_$.bb;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.kf;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.ed;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var charSequenceGet = kotlin_kotlin.$_$.ca;
  var isWhitespace = kotlin_kotlin.$_$.ad;
  var Number_0 = kotlin_kotlin.$_$.ne;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var Collection = kotlin_kotlin.$_$.v4;
  var isInterface = kotlin_kotlin.$_$.za;
  var checkCountOverflow = kotlin_kotlin.$_$.y5;
  var checkIndexOverflow = kotlin_kotlin.$_$.z5;
  var getOrNull = kotlin_kotlin.$_$.z6;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toList = kotlin_kotlin.$_$.s8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Appearance, 'Appearance', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridDslMarker, 'GridDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ListStylePosition, 'ListStylePosition', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StringValue, 'StringValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, CSSImage);
  setMetadataFor(Url, 'Url', classMeta, CSSImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(CalcNum, 'CalcNum', classMeta, Number_0);
  function times(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' * ' + toString(b) + ')';
  }
  function times_0(_this__u8e3s4, unit) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' * ' + unit + ')';
  }
  function div(_this__u8e3s4, num) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' / ' + toString(num) + ')';
  }
  function plus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' + ' + b + ')';
  }
  function minus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' - ' + b + ')';
  }
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  function unaryPlus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(1 * ' + _this__u8e3s4 + ')';
  }
  function num(num) {
    return new CalcNum(toString(num));
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color_0, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color_0);
  setMetadataFor(Stop, 'Stop', classMeta, Color_0);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color_0);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta, VOID, VOID, ColorStopsBuilder);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributes_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.classes_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.listeners_1 = LinkedHashSet_init_$Create$();
    this.style_1 = null;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_x1cred_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributes_1.put_4fpzoq_k$(attr, value);
    this.wrapped_1.attr_w68641_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.wrapped_1.prop_cha5mt_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
    this.wrapped_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_xwwy6r_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_xwwy6r_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.wrapped_1.ref_o4g25g_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_ephr7k_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_cha5mt_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_xwwy6r_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_wkg4fv_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_npxg1h_k$('justify-items', justifyItems);
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_n4n8gl_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_kggy3o_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JustifyItems(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_npxg1h_k$('justify-self', justifySelf);
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function BaselineAlignment_0(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
  }
  function OverflowAlignment_0(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_wxt3v1_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_jz6bzo_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JustifySelf(value) {
    Companion_getInstance_3();
    this.value_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  var $ENTRIES;
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = self_0.get_name_woqyms_k$().toLowerCase();
      this_0.append_22ad7x_k$(tmp$ret$1);
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_22ad7x_k$('baseline');
    return this_0.toString();
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  var $ENTRIES_0;
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.get_name_woqyms_k$().toLowerCase() + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.property_npxg1h_k$('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, topBottom, leftRight) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + topBottom + ' ' + leftRight);
  }
  function borderColor_1(_this__u8e3s4, top, leftRight, bottom) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + top + ' ' + leftRight + ' ' + bottom);
  }
  function borderColor_2(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      Color_getInstance();
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.property_wcrait_k$('border-color', '' + top + ' ' + right + ' ' + bottom + ' ' + left);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('border-style', lineStyle);
  }
  function borderStyle_0(_this__u8e3s4, topBottom, leftRight) {
    var tmp;
    if (topBottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = topBottom;
    }
    topBottom = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + topBottom + ' ' + leftRight);
  }
  function borderStyle_1(_this__u8e3s4, top, leftRight, bottom) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (leftRight === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = leftRight;
    }
    leftRight = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + top + ' ' + leftRight + ' ' + bottom);
  }
  function borderStyle_2(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = 'none';
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = 'none';
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = 'none';
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = 'none';
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.property_wcrait_k$('border-style', '' + top + ' ' + right + ' ' + bottom + ' ' + left);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.property_npxg1h_k$('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_BorderBox_q3yb4a_k$ = function () {
    return new BoxSizing('border-box');
  };
  protoOf(Companion_1).get_ContentBox_h63h2z_k$ = function () {
    return new BoxSizing('content-box');
  };
  protoOf(Companion_1).get_Inherit_a1a9e6_k$ = function () {
    return new BoxSizing('inherit');
  };
  protoOf(Companion_1).get_Initial_a0h2v9_k$ = function () {
    return new BoxSizing('initial');
  };
  protoOf(Companion_1).get_Revert_3t1tzh_k$ = function () {
    return new BoxSizing('revert');
  };
  protoOf(Companion_1).get_Unset_ii4mhs_k$ = function () {
    return new BoxSizing('unset');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function BoxSizing(value) {
    Companion_getInstance_4();
    this.value_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.value_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      this_0.append_22ad7x_k$('inset');
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_t8pm91_k$(offsetX);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    this_0.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('box-shadow', value);
  }
  function toDegrees(_this__u8e3s4) {
    var tmp;
    switch (toString(_this__u8e3s4.unit)) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / get_PI();
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var message = 'Unexpected unit type ' + _this__u8e3s4.unit;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp % 360.0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.properties_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.variables_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_npxg1h_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.properties_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).variable_px6kuc_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.variables_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.properties_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.variables_1.isEmpty_y1axqb_k$();
    }
    return tmp;
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_2).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_2).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_2).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_2).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_2).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_2).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_2).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_2).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_2).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_2).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_2).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_2).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_2).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_2).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_2).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_2).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_2).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_2).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_2).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_2).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_2).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_2).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_2).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_2).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_2).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_2).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_2).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_2).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_2).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_2).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_2).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_2).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_2).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_2).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = function () {
    return new Cursor('inherit');
  };
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = function () {
    return new Cursor('initial');
  };
  protoOf(Companion_2).get_Revert_3t1tzh_k$ = function () {
    return new Cursor('revert');
  };
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = function () {
    return new Cursor('unset');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Cursor(value) {
    Companion_getInstance_5();
    this.value_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_npxg1h_k$('cursor', cursor);
  }
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_None_wo6tgh_k$ = function () {
    return new Appearance('none');
  };
  protoOf(Companion_3).get_Auto_wnyn88_k$ = function () {
    return new Appearance('auto');
  };
  protoOf(Companion_3).get_MenuListButton_l4aue0_k$ = function () {
    return new Appearance('menulist-button');
  };
  protoOf(Companion_3).get_TextField_o3y610_k$ = function () {
    return new Appearance('textfield');
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    return new Appearance('inherit');
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    return new Appearance('initial');
  };
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = function () {
    return new Appearance('revert');
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    return new Appearance('unset');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Appearance(value) {
    Companion_getInstance_6();
    this.value_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.value_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.property_npxg1h_k$('appearance', appearance);
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).get_Thin_woai2q_k$ = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_4).get_ExtraLight_ov7yxb_k$ = function () {
    return new FontWeight('200');
  };
  protoOf(Companion_4).get_Light_id31e5_k$ = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_4).get_Medium_1fiba6_k$ = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_4).get_SemiBold_aid1c4_k$ = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_4).get_ExtraBold_xklwd0_k$ = function () {
    return new FontWeight('800');
  };
  protoOf(Companion_4).get_Black_i7mvue_k$ = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_4).get_ExtraBlack_oprtdk_k$ = function () {
    return new FontWeight('950');
  };
  protoOf(Companion_4).get_Normal_22avww_k$ = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_4).get_Bold_wnz5ke_k$ = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_4).get_Lighter_vm6n22_k$ = function () {
    return new FontWeight('lighter');
  };
  protoOf(Companion_4).get_Bolder_3mclb9_k$ = function () {
    return new FontWeight('bolder');
  };
  protoOf(Companion_4).get_Inherit_a1a9e6_k$ = function () {
    return new FontWeight('inherit');
  };
  protoOf(Companion_4).get_Initial_a0h2v9_k$ = function () {
    return new FontWeight('initial');
  };
  protoOf(Companion_4).get_Revert_3t1tzh_k$ = function () {
    return new FontWeight('revert');
  };
  protoOf(Companion_4).get_Unset_ii4mhs_k$ = function () {
    return new FontWeight('unset');
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontWeight(value) {
    Companion_getInstance_7();
    this.value_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.value_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_npxg1h_k$('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).repeat_n9ti1_k$ = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_9().repeat_1fs2oe_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_x8tdgb_k$ = function (type, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_9().repeat_lz16g6_k$(type, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tracks_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_8().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_8().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_8().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_k3cuq9_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_azcpvi_k$ = function (track) {
    this.tracks_1.add_utx5q5_k$(track);
  };
  protoOf(GridTrackBuilderInRepeat).size_n8bj0z_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_8().invoke_wfll5y_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_q03g6h_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_8().invoke_3uf9u8_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_8jd78m_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_8().fitContent_vrn1yu_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_msesvw_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_8().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_el7xbs_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_8().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_9paic1_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_8().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_labs7t_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_8().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_npodc9_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_8().invoke_wfll5y_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_fxpgw2_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_8().invoke_wfll5y_k$(min), Companion_getInstance_8().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_1ha38s_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_8().invoke_wfll5y_k$(min), Companion_getInstance_8().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).lineNames_ii8gtg_k$ = function (names) {
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_9().lineNames_npjmfo_k$(names.slice()));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.tracks_1));
  }
  function FitContent(value) {
    TrackSize.call(this, 'fit-content(' + value + ')');
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.min_1 = min;
    this.max_1 = max;
  }
  protoOf(MinMax).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword(value) {
    Inflexible.call(this, value);
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Auto_wnyn88_k$ = function () {
    return new Keyword('auto');
  };
  protoOf(Companion_5).get_MinContent_hspenk_k$ = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_5).get_MaxContent_n32482_k$ = function () {
    return new Keyword('max-content');
  };
  protoOf(Companion_5).invoke_wfll5y_k$ = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).invoke_3uf9u8_k$ = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).minmax_mdatpo_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_5).fitContent_vrn1yu_k$ = function (value) {
    return new FitContent(value);
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0, 'auto-fill');
    Type_AutoFit_instance = new Type('AutoFit', 1, 'auto-fit');
  }
  var $ENTRIES_1;
  function Type(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Type).toString = function () {
    return this.value_1;
  };
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto(type, entries) {
    Repeat.call(this, type, entries);
  }
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function TrackSize(value) {
    Companion_getInstance_8();
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.entries_1 = entries;
  }
  protoOf(Repeat).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.names_1 = names;
  }
  protoOf(LineNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).repeat_1fs2oe_k$ = function (count, entries) {
    return new Track(count, entries.slice());
  };
  protoOf(Companion_6).repeat_lz16g6_k$ = function (type, entries) {
    return new Auto(type, entries.slice());
  };
  protoOf(Companion_6).lineNames_npjmfo_k$ = function (names) {
    return new LineNames(names.slice());
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function GridEntry(value) {
    Companion_getInstance_9();
    this.value_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.value_1;
  };
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    other instanceof GridDslMarker || THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker()';
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function toTrackListString_0(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.names_1;
        var elements = element.names_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.set_82063s_k$(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.add_utx5q5_k$(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.entries_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.add_utx5q5_k$(element_0);
              }
            }
            var tmp_0;
            if (destination_0.isEmpty_y1axqb_k$()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.isEmpty_y1axqb_k$()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.min_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.max_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              }
            }
          }
        }
      }
    }
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.buildInto_bd9p49_k$(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  protoOf(GridBuilder).auto_9oitg_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.autoBuilder_1 = this_0;
  };
  function GridBuilderInAuto$col$lambda($value) {
    return function ($this$columns) {
      $this$columns.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$col$lambda_0($value) {
    return function ($this$columns) {
      $this$columns.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$column$lambda($value) {
    return function ($this$columns) {
      $this$columns.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$column$lambda_0($value) {
    return function ($this$columns) {
      $this$columns.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$row$lambda($value) {
    return function ($this$rows) {
      $this$rows.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$row$lambda_0($value) {
    return function ($this$rows) {
      $this$rows.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto() {
    this.columns_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
  }
  protoOf(GridBuilderInAuto).set_columns_gc9ooa_k$ = function (_set____db54di) {
    this.columns_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_columns_gyzrhw_k$ = function () {
    return this.columns_1;
  };
  protoOf(GridBuilderInAuto).set_rows_8edm7g_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_13371t_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).col_vl108i_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$col$lambda(value));
  };
  protoOf(GridBuilderInAuto).col_xvqr0o_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$col$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).column_wtsgso_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$column$lambda(value));
  };
  protoOf(GridBuilderInAuto).column_c3spy6_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$column$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).row_ijva4s_k$ = function (value) {
    this.rows_c0wtyb_k$(GridBuilderInAuto$row$lambda(value));
  };
  protoOf(GridBuilderInAuto).row_6g6lpe_k$ = function (value) {
    this.rows_c0wtyb_k$(GridBuilderInAuto$row$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).cols_db26rn_k$ = function (block) {
    this.columns_o4h109_k$(block);
  };
  protoOf(GridBuilderInAuto).columns_o4h109_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.columns_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_c0wtyb_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.rows_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_bd9p49_k$ = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.columns_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.columns_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_getInstance();
      }
    }
  };
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_Baseline_bu5gku_k$ = function () {
    return new VerticalAlign('baseline');
  };
  protoOf(Companion_7).get_Sub_18jjnt_k$ = function () {
    return new VerticalAlign('sub');
  };
  protoOf(Companion_7).get_Super_ih5fzm_k$ = function () {
    return new VerticalAlign('super');
  };
  protoOf(Companion_7).get_TextTop_5chtr3_k$ = function () {
    return new VerticalAlign('text-top');
  };
  protoOf(Companion_7).get_TextBottom_zaoo69_k$ = function () {
    return new VerticalAlign('text-bottom');
  };
  protoOf(Companion_7).get_Middle_1hpdq6_k$ = function () {
    return new VerticalAlign('middle');
  };
  protoOf(Companion_7).get_Top_18jj1w_k$ = function () {
    return new VerticalAlign('top');
  };
  protoOf(Companion_7).get_Bottom_3m75bg_k$ = function () {
    return new VerticalAlign('bottom');
  };
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = function () {
    return new VerticalAlign('inherit');
  };
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = function () {
    return new VerticalAlign('initial');
  };
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = function () {
    return new VerticalAlign('revert');
  };
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = function () {
    return new VerticalAlign('unset');
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function VerticalAlign(value) {
    Companion_getInstance_10();
    this.value_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.value_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.property_npxg1h_k$('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('padding-inline', joinToString(value, ' '));
  }
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).of_5gnbr7_k$ = function (text) {
    return new ListStyleType(wrapQuotesIfNecessary(text));
  };
  protoOf(Companion_8).get_ArabicIndic_7dczms_k$ = function () {
    return new ListStyleType('arabic-indic');
  };
  protoOf(Companion_8).get_Armenian_glp6oq_k$ = function () {
    return new ListStyleType('armenian');
  };
  protoOf(Companion_8).get_Bengali_p42yft_k$ = function () {
    return new ListStyleType('bengali');
  };
  protoOf(Companion_8).get_Cambodian_yjaltx_k$ = function () {
    return new ListStyleType('cambodian');
  };
  protoOf(Companion_8).get_Circle_38hx53_k$ = function () {
    return new ListStyleType('circle');
  };
  protoOf(Companion_8).get_CjkDecimal_eqj52u_k$ = function () {
    return new ListStyleType('cjk-decimal');
  };
  protoOf(Companion_8).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    return new ListStyleType('cjk-earthly-branch');
  };
  protoOf(Companion_8).get_CjkHeavenlyStem_v60yes_k$ = function () {
    return new ListStyleType('cjk-heavenly-stem');
  };
  protoOf(Companion_8).get_CjkIdeographic_325ofc_k$ = function () {
    return new ListStyleType('cjk-ideographic');
  };
  protoOf(Companion_8).get_Decimal_gq8r08_k$ = function () {
    return new ListStyleType('decimal');
  };
  protoOf(Companion_8).get_DecimalLeadingZero_5q6aue_k$ = function () {
    return new ListStyleType('decimal-leading-zero');
  };
  protoOf(Companion_8).get_Devanagari_fiqhev_k$ = function () {
    return new ListStyleType('devanagari');
  };
  protoOf(Companion_8).get_Disc_wo0b9a_k$ = function () {
    return new ListStyleType('disc');
  };
  protoOf(Companion_8).get_DisclosureClosed_juf1pa_k$ = function () {
    return new ListStyleType('disclosure-closed');
  };
  protoOf(Companion_8).get_DisclosureOpen_l759fk_k$ = function () {
    return new ListStyleType('disclosure-open');
  };
  protoOf(Companion_8).get_Georgian_4lk93_k$ = function () {
    return new ListStyleType('georgian');
  };
  protoOf(Companion_8).get_Gujarati_j012pe_k$ = function () {
    return new ListStyleType('gujarati');
  };
  protoOf(Companion_8).get_Gurumukhi_5jh3xm_k$ = function () {
    return new ListStyleType('gurumukhi');
  };
  protoOf(Companion_8).get_Hebrew_xqwd4_k$ = function () {
    return new ListStyleType('hebrew');
  };
  protoOf(Companion_8).get_Hiragana_hja76u_k$ = function () {
    return new ListStyleType('hiragana');
  };
  protoOf(Companion_8).get_HiraganaIroha_z3xrq1_k$ = function () {
    return new ListStyleType('hiragana-iroha');
  };
  protoOf(Companion_8).get_JapaneseFormal_srlfzd_k$ = function () {
    return new ListStyleType('japanese-formal');
  };
  protoOf(Companion_8).get_JapaneseInformal_8qufwu_k$ = function () {
    return new ListStyleType('japanese-informal');
  };
  protoOf(Companion_8).get_Kannada_d9ddmn_k$ = function () {
    return new ListStyleType('kannada');
  };
  protoOf(Companion_8).get_Katakana_cguuob_k$ = function () {
    return new ListStyleType('katakana');
  };
  protoOf(Companion_8).get_KatakanaIroha_xgvh3q_k$ = function () {
    return new ListStyleType('katakana-iroha');
  };
  protoOf(Companion_8).get_Khmer_iciq6s_k$ = function () {
    return new ListStyleType('khmer');
  };
  protoOf(Companion_8).get_KoreanHangulFormal_rvp4md_k$ = function () {
    return new ListStyleType('korean-hangul-formal');
  };
  protoOf(Companion_8).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    return new ListStyleType('korean-hanja-formal');
  };
  protoOf(Companion_8).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    return new ListStyleType('korean-hanja-informal');
  };
  protoOf(Companion_8).get_Lao_18jpbj_k$ = function () {
    return new ListStyleType('lao');
  };
  protoOf(Companion_8).get_LowerAlpha_wmhyme_k$ = function () {
    return new ListStyleType('lower-alpha');
  };
  protoOf(Companion_8).get_LowerArmenian_u6eqrt_k$ = function () {
    return new ListStyleType('lower-armenian');
  };
  protoOf(Companion_8).get_LowerGreek_wpwbvs_k$ = function () {
    return new ListStyleType('lower-greek');
  };
  protoOf(Companion_8).get_LowerLatin_wscrak_k$ = function () {
    return new ListStyleType('lower-latin');
  };
  protoOf(Companion_8).get_LowerRoman_wvwbad_k$ = function () {
    return new ListStyleType('lower-roman');
  };
  protoOf(Companion_8).get_Malayalam_4qmsf2_k$ = function () {
    return new ListStyleType('malayalam');
  };
  protoOf(Companion_8).get_Mongolian_e4gexh_k$ = function () {
    return new ListStyleType('mongolian');
  };
  protoOf(Companion_8).get_Myanmar_h909b8_k$ = function () {
    return new ListStyleType('myanmar');
  };
  protoOf(Companion_8).get_Oriya_iew7xh_k$ = function () {
    return new ListStyleType('oriya');
  };
  protoOf(Companion_8).get_Persian_hkpriv_k$ = function () {
    return new ListStyleType('persian');
  };
  protoOf(Companion_8).get_SimpChineseFormal_vtcj22_k$ = function () {
    return new ListStyleType('simp-chinese-formal');
  };
  protoOf(Companion_8).get_SimpChineseInformal_q999un_k$ = function () {
    return new ListStyleType('simp-chinese-informal');
  };
  protoOf(Companion_8).get_Square_4go9ja_k$ = function () {
    return new ListStyleType('square');
  };
  protoOf(Companion_8).get_Tamil_ihcepm_k$ = function () {
    return new ListStyleType('tamil');
  };
  protoOf(Companion_8).get_Telugu_4qz0i9_k$ = function () {
    return new ListStyleType('telugu');
  };
  protoOf(Companion_8).get_Thai_woahvp_k$ = function () {
    return new ListStyleType('thai');
  };
  protoOf(Companion_8).get_TradChineseFormal_7jy5gu_k$ = function () {
    return new ListStyleType('trad-chinese-formal');
  };
  protoOf(Companion_8).get_TradChineseInformal_j8y7ih_k$ = function () {
    return new ListStyleType('trad-chinese-informal');
  };
  protoOf(Companion_8).get_UpperAlpha_f6mwsb_k$ = function () {
    return new ListStyleType('upper-alpha');
  };
  protoOf(Companion_8).get_UpperArmenian_gf87di_k$ = function () {
    return new ListStyleType('upper-armenian');
  };
  protoOf(Companion_8).get_UpperGreek_f38jix_k$ = function () {
    return new ListStyleType('upper-greek');
  };
  protoOf(Companion_8).get_UpperLatin_f0s445_k$ = function () {
    return new ListStyleType('upper-latin');
  };
  protoOf(Companion_8).get_UpperRoman_ex8k4c_k$ = function () {
    return new ListStyleType('upper-roman');
  };
  protoOf(Companion_8).get_None_wo6tgh_k$ = function () {
    return new ListStyleType('none');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new ListStyleType('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new ListStyleType('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new ListStyleType('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new ListStyleType('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function ListStyleType(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Inside_bggkb_k$ = function () {
    return new ListStylePosition('inside');
  };
  protoOf(Companion_9).get_Outside_ai50v0_k$ = function () {
    return new ListStylePosition('outside');
  };
  protoOf(Companion_9).get_Inherit_a1a9e6_k$ = function () {
    return new ListStylePosition('inherit');
  };
  protoOf(Companion_9).get_Initial_a0h2v9_k$ = function () {
    return new ListStylePosition('initial');
  };
  protoOf(Companion_9).get_Revert_3t1tzh_k$ = function () {
    return new ListStylePosition('revert');
  };
  protoOf(Companion_9).get_Unset_ii4mhs_k$ = function () {
    return new ListStylePosition('unset');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ListStylePosition(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(ListStylePosition).toString = function () {
    return this.value_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-image', image);
    }
  }
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_10).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_10).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_10).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_10).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_10).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_10).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_10).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_10).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    Companion_getInstance_13();
    this.value_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_npxg1h_k$('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.property_npxg1h_k$('outline', this_0);
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
  }
  protoOf(CSSOutline).set_width_9utmsf_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_27eag0_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_q6gjw9_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Visible_yikvpz_k$ = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_11).get_Hidden_viqel_k$ = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_11).get_Clip_wnzq9l_k$ = function () {
    return new Overflow('clip');
  };
  protoOf(Companion_11).get_Scroll_48xiie_k$ = function () {
    return new Overflow('scroll');
  };
  protoOf(Companion_11).get_Auto_wnyn88_k$ = function () {
    return new Overflow('auto');
  };
  protoOf(Companion_11).get_Inherit_a1a9e6_k$ = function () {
    return new Overflow('inherit');
  };
  protoOf(Companion_11).get_Initial_a0h2v9_k$ = function () {
    return new Overflow('initial');
  };
  protoOf(Companion_11).get_Revert_3t1tzh_k$ = function () {
    return new Overflow('revert');
  };
  protoOf(Companion_11).get_Unset_ii4mhs_k$ = function () {
    return new Overflow('unset');
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Overflow(value) {
    Companion_getInstance_14();
    this.value_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.value_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.property_npxg1h_k$('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_npxg1h_k$('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.property_npxg1h_k$('overflow', overflow);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).value_wk9s6x_k$ = function (fallback) {
    return this.variableValue_ovgee5_k$(fallback);
  };
  protoOf(PropertyValue).value_66g3ir_k$ = function (fallback) {
    return this.value_wk9s6x_k$((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).value_9bth3g_k$ = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(NumberValue).value_66g3ir_k$ = function (fallback) {
    return this.value_9bth3g_k$((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StringValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(StringValue).value_lu1i8m_k$ = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(StringValue).value_66g3ir_k$ = function (fallback) {
    return this.value_lu1i8m_k$((fallback == null ? true : typeof fallback === 'string') ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable).value$default_36t2hw_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_66g3ir_k$(fallback) : $super.value_66g3ir_k$.call(this, fallback);
  };
  protoOf(StyleVariable).variableValue_ovgee5_k$ = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.defaultFallback_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function _get_defaultFallback__wdjuwe_1($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_npxg1h_k$('--' + variable.name_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).get_simpleName_r6f8py_k$())), '-vars'), '-variables'));
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
    }
    this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_12).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_12).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_12).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_12).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function UserSelect(value) {
    Companion_getInstance_15();
    this.value_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_Normal_22avww_k$ = function () {
    return new WhiteSpace('normal');
  };
  protoOf(Companion_13).get_NoWrap_21tqz8_k$ = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_13).get_Pre_18jlye_k$ = function () {
    return new WhiteSpace('pre');
  };
  protoOf(Companion_13).get_PreWrap_nintz8_k$ = function () {
    return new WhiteSpace('pre-wrap');
  };
  protoOf(Companion_13).get_PreLine_nigmr2_k$ = function () {
    return new WhiteSpace('pre-line');
  };
  protoOf(Companion_13).get_BreakSpaces_6b23jx_k$ = function () {
    return new WhiteSpace('break-spaces');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new WhiteSpace('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new WhiteSpace('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new WhiteSpace('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new WhiteSpace('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function WhiteSpace(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_14($this) {
    return $this.value_1;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_14).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_14).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_14).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_14).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_14).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_14).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_14).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  protoOf(Companion_14).get_Inherit_a1a9e6_k$ = function () {
    return new TextAlign('inherit');
  };
  protoOf(Companion_14).get_Initial_a0h2v9_k$ = function () {
    return new TextAlign('initial');
  };
  protoOf(Companion_14).get_Revert_3t1tzh_k$ = function () {
    return new TextAlign('revert');
  };
  protoOf(Companion_14).get_Unset_ii4mhs_k$ = function () {
    return new TextAlign('unset');
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TextAlign(value) {
    Companion_getInstance_17();
    this.value_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_15($this) {
    return $this.value_1;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_15).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_15).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_15).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_15).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_15).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_15).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_15).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_15;
  function Companion_getInstance_18() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_18();
    this.value_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_npxg1h_k$('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_npxg1h_k$('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_npxg1h_k$('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_wcrait_k$('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_npxg1h_k$('translate', tx);
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).group_t9r796_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_16).group$default_5lgzta_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_t9r796_k$(properties, duration, timingFunction, delay) : $super.group_t9r796_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_16).group_9h9urd_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_16).group$default_8rh311_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_9h9urd_k$(properties, duration, timingFunction, delay) : $super.group_9h9urd_k$.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_20().of_5gnbr7_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_19();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.add_utx5q5_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(this.delay_1));
    }
    var tmp$ret$6 = this_0.build_1k0s4u_k$();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_9p7glc_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_69riea_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_9p7glc_k$(property, duration, timingFunction, delay) : $super.copy_9p7glc_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition', joinToString(transitions));
    }
  }
  function _get_value__a43j40_16($this) {
    return $this.value_1;
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).of_5gnbr7_k$ = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  protoOf(Companion_17).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_17).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_17).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_17).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_17).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_17).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_17;
  function Companion_getInstance_20() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TransitionProperty(value) {
    Companion_getInstance_20();
    this.value_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_17($this) {
    return $this.value_1;
  }
  function Keyword_0(value) {
    CSSImage.call(this, value);
  }
  function Url(url) {
    CSSImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).of_dq0j3b_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_18).of_jjeryt_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_18).get_None_wo6tgh_k$ = function () {
    return new Keyword_0('none');
  };
  protoOf(Companion_18).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_0('inherit');
  };
  protoOf(Companion_18).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_0('initial');
  };
  protoOf(Companion_18).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_0('revert');
  };
  protoOf(Companion_18).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_0('unset');
  };
  var Companion_instance_18;
  function Companion_getInstance_21() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function CSSImage(value) {
    Companion_getInstance_21();
    this.value_1 = value;
  }
  protoOf(CSSImage).toString = function () {
    return this.value_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_getInstance());
  }
  function _get_value__a43j40_18($this) {
    return $this.value_1;
  }
  function CalcNum(value) {
    Number_0.call(this);
    this.value_1 = value;
  }
  protoOf(CalcNum).toString = function () {
    return this.value_1;
  };
  protoOf(CalcNum).toInt_1tsl84_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toLong_edfucp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toFloat_jhbgwv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toDouble_ygsx0s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toByte_edm0nx_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).toShort_ja8oqn_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).plus_4ppioj_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wfjn7n_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_z3zgpl_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_8ho5ac_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  protoOf(CalcNum).unaryMinus_6uz0qp_k$ = function () {
    return new CalcNum('calc(-1 * ' + this + ')');
  };
  protoOf(CalcNum).unaryPlus_g9fn1l_k$ = function () {
    return new CalcNum('calc(1 * ' + this + ')');
  };
  protoOf(CalcNum).plus_46f1vh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wyu40p_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_zdu4gh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_90ym3e_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  function CalcScope() {
  }
  function CalcScopeInstance() {
    CalcScopeInstance_instance = this;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    if (CalcScopeInstance_instance == null)
      new CalcScopeInstance();
    return CalcScopeInstance_instance;
  }
  function Simple(value) {
    Color_0.call(this, '' + value);
  }
  function Stop(color, stop) {
    Color_0.call(this, '' + color + ' ' + stop);
  }
  function StopRange(color, from, to) {
    Color_0.call(this, '' + color + ' ' + from + ' ' + to);
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color_0(value) {
    Entry.call(this, value);
    this.value_1 = value;
  }
  protoOf(Color_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = this.entries_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        if (element instanceof Color_0) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$0 >= 2)) {
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator_0 = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, i - 1 | 0);
        if (tmp_1 instanceof Color_0) {
          var tmp_2 = getOrNull(this.entries_1, i + 1 | 0);
          tmp_0 = tmp_2 instanceof Color_0;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp_0) {
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.entries_1;
    return copyToArray(this_1);
  };
  protoOf(ColorStopsBuilder).add_ad4gbn_k$ = function (color) {
    return this.entries_1.add_utx5q5_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_hkfvmd_k$ = function (color, stop) {
    return this.entries_1.add_utx5q5_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_8cat99_k$ = function (color, from, to) {
    return this.entries_1.add_utx5q5_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_jac6ry_k$ = function (hint) {
    return this.entries_1.add_utx5q5_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function CSSUrl(url) {
    this.url_1 = url;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_64dhf5_k$ = function (scope, element) {
    this.handle_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_64dhf5_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_36kynk_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_2gjwzt_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_36kynk_k$(keys, refCallback) : $super.copy_36kynk_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.keyedCallbacks_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).ref_ilxxe0_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_sdjxhc_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_uaq22z_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_4lagoh_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_veh9cs_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_dzqv18_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_veh9cs_k$(keyedCallbacks) : $super.copy_veh9cs_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.keyedCallbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.keys_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.refCallback_1.invoke_64dhf5_k$($this$DisposableEffect, $transform($this_registerRefScope.get_scopeElement_61kop2_k$($this$DisposableEffect)));
    };
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(ComparableAttrsScope).id_e4l56n_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_qpfo4e_k$ = title;
  protoOf(ComparableAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(DummyAttrsScope).id_e4l56n_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_qpfo4e_k$ = title;
  protoOf(DummyAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(DummyAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(ComparableStyleScope).property_wcrait_k$ = property;
  protoOf(ComparableStyleScope).property_jk9dw6_k$ = property_0;
  protoOf(ComparableStyleScope).variable_kvosx8_k$ = variable;
  protoOf(ComparableStyleScope).variable_j4rwe5_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_77zbl8_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_rxx4vw_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_jsk60r_k$ = invoke_1;
  protoOf(CalcScopeInstance).times_cubebc_k$ = times;
  protoOf(CalcScopeInstance).times_6xg5ti_k$ = times_0;
  protoOf(CalcScopeInstance).div_wucann_k$ = div;
  protoOf(CalcScopeInstance).plus_g6zkc3_k$ = plus;
  protoOf(CalcScopeInstance).minus_29zpb7_k$ = minus;
  protoOf(CalcScopeInstance).unaryMinus_d2gf0y_k$ = unaryMinus;
  protoOf(CalcScopeInstance).unaryPlus_9h1xw6_k$ = unaryPlus;
  protoOf(CalcScopeInstance).num_5kpq4n_k$ = num;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_3;
  _.$_$.e = StyleVariable_2;
  _.$_$.f = StyleVariable_0;
  _.$_$.g = StyleVariable_1;
  _.$_$.h = appearance;
  _.$_$.i = ariaDisabled;
  _.$_$.j = ariaHidden;
  _.$_$.k = borderBottom;
  _.$_$.l = borderColor;
  _.$_$.m = borderColor_0;
  _.$_$.n = borderColor_1;
  _.$_$.o = borderColor_2;
  _.$_$.p = borderLeft;
  _.$_$.q = borderStyle_1;
  _.$_$.r = borderStyle;
  _.$_$.s = borderStyle_2;
  _.$_$.t = borderStyle_0;
  _.$_$.u = borderTop;
  _.$_$.v = borderWidth;
  _.$_$.w = boxShadow;
  _.$_$.x = boxSizing_0;
  _.$_$.y = cursor;
  _.$_$.z = fontWeight;
  _.$_$.a1 = gridTemplateColumns_0;
  _.$_$.b1 = grid;
  _.$_$.c1 = isNotEmpty;
  _.$_$.d1 = justifyItems;
  _.$_$.e1 = justifySelf;
  _.$_$.f1 = listStyle;
  _.$_$.g1 = objectFit;
  _.$_$.h1 = outline;
  _.$_$.i1 = overflowX;
  _.$_$.j1 = overflowY;
  _.$_$.k1 = overflow;
  _.$_$.l1 = paddingInline;
  _.$_$.m1 = setVariable;
  _.$_$.n1 = textAlign;
  _.$_$.o1 = textDecorationLine;
  _.$_$.p1 = toDegrees;
  _.$_$.q1 = transition;
  _.$_$.r1 = translateX;
  _.$_$.s1 = userSelect;
  _.$_$.t1 = verticalAlign;
  _.$_$.u1 = whiteSpace;
  _.$_$.v1 = refScope;
  _.$_$.w1 = registerRefScope;
  _.$_$.x1 = ComparableAttrsScope_init_$Create$;
  _.$_$.y1 = CSSTransition_init_$Create$;
  _.$_$.z1 = Companion_getInstance_6;
  _.$_$.a2 = Companion_getInstance_4;
  _.$_$.b2 = Companion_getInstance_19;
  _.$_$.c2 = Companion_getInstance_5;
  _.$_$.d2 = Companion_getInstance_7;
  _.$_$.e2 = Companion_getInstance_2;
  _.$_$.f2 = Companion_getInstance_3;
  _.$_$.g2 = Companion_getInstance_11;
  _.$_$.h2 = Companion_getInstance_13;
  _.$_$.i2 = Companion_getInstance_14;
  _.$_$.j2 = Companion_getInstance_17;
  _.$_$.k2 = Companion_getInstance_18;
  _.$_$.l2 = Companion_getInstance_15;
  _.$_$.m2 = Companion_getInstance_10;
  _.$_$.n2 = Companion_getInstance_16;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
