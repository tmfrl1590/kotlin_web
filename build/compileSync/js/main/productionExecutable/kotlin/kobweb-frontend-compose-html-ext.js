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
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var equals = kotlin_kotlin.$_$.p5;
  var hashCode = kotlin_kotlin.$_$.v5;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var classMeta = kotlin_kotlin.$_$.m5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q1;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var toString = kotlin_kotlin.$_$.l6;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var copyToArray = kotlin_kotlin.$_$.y2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var joinToString = kotlin_kotlin.$_$.l3;
  var lastOrNull = kotlin_kotlin.$_$.o3;
  var get_lastIndex = kotlin_kotlin.$_$.n3;
  var joinToString_0 = kotlin_kotlin.$_$.k3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var listOf = kotlin_kotlin.$_$.r3;
  var emptyList = kotlin_kotlin.$_$.a3;
  var addAll = kotlin_kotlin.$_$.r2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var listOfNotNull = kotlin_kotlin.$_$.q3;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var isNumber = kotlin_kotlin.$_$.b6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.m7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.l5;
  var charSequenceGet = kotlin_kotlin.$_$.k5;
  var isWhitespace = kotlin_kotlin.$_$.j7;
  var interfaceMeta = kotlin_kotlin.$_$.x5;
  var toList = kotlin_kotlin.$_$.j4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
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
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.m28_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n28_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.o28_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.p28_1 = LinkedHashSet_init_$Create$();
    this.q28_1 = null;
  }
  protoOf(ComparableAttrsScope).i24 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.n28_1.g2(attr, value);
    this.m28_1.i24(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).f24 = function (classes) {
    this.o28_1.a1(classes);
  };
  protoOf(ComparableAttrsScope).e24 = function (builder) {
    var tmp0_elvis_lhs = this.q28_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.q28_1 = style;
    this.m28_1.e24(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.n28_1, this.n28_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.o28_1, this.o28_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.p28_1, this.p28_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.q28_1, this.q28_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.n28_1);
    result = imul(31, result) + hashCode(this.o28_1) | 0;
    result = imul(31, result) + hashCode(this.p28_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q28_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).i24 = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).f24 = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).e24 = function (builder) {
    return Unit_instance;
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.i24('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.i24('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.g26('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).r28 = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).s28 = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).t28 = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.u28_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.u28_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.g26('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).r28 = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).s28 = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).t28 = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.v28_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.v28_1;
  };
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.g26('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.b26('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.g26('border-width', width);
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
    _this__u8e3s4.g26('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.g26('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.g26('border-left', this_0);
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
      return Unit_instance;
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
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).w28 = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.x28_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.x28_1;
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
      this_0.q5('inset');
      this_0.r5(_Char___init__impl__6a9atx(32));
    }
    this_0.p5(offsetX);
    this_0.r5(_Char___init__impl__6a9atx(32));
    this_0.p5(offsetY);
    if (!(blurRadius == null)) {
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.r5(_Char___init__impl__6a9atx(32));
        this_0.r5(_Char___init__impl__6a9atx(48));
      }
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.r5(_Char___init__impl__6a9atx(32));
      this_0.p5(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.b26('box-shadow', value);
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.y28_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.z28_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).g26 = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.y28_1;
    var value_0 = toString(value);
    this_0.g2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).i26 = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.z28_1;
    var value_0 = toString(value);
    this_0.g2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.y28_1, other.y28_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.z28_1, other.z28_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.y28_1);
    result = imul(31, result) + hashCode(this.z28_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.y28_1.o()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.z28_1.o();
    }
    return tmp;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).a29 = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).b29 = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Cursor(value) {
    this.c29_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.c29_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.g26('cursor', cursor);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).d29 = function () {
    return new Appearance('none');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Appearance(value) {
    this.e29_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.e29_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.g26('appearance', appearance);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).f29 = function () {
    return new FontWeight('600');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function FontWeight(value) {
    this.g29_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.g29_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.g26('font-weight', weight);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).i29 = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.j29_1;
    var repeatTracks = copyToArray(this_1);
    this.j29_1.u(Companion_instance_7.k29(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j29_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).l29 = function (track) {
    this.j29_1.u(track);
  };
  protoOf(GridTrackBuilderInRepeat).m29 = function (value) {
    return this.l29(Companion_instance_6.p29(value));
  };
  protoOf(GridTrackBuilderInRepeat).n29 = function (min, max) {
    return this.l29(Companion_instance_6.q29(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).o29 = function (min, max) {
    return this.n29(Companion_instance_6.r29(min), Companion_instance_6.p29(max));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.j29_1));
  }
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.t29_1 = min;
    this.u29_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_5() {
  }
  protoOf(Companion_5).r29 = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).p29 = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).q29 = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.w29_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.y29_1 = names;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).k29 = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function GridEntry(value) {
    this.z29_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.z29_1;
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
        var this_0 = prev.y29_1;
        var elements = element.y29_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.r(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.u(element);
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
            var this_0 = element.w29_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.u(element_0);
              }
            }
            var tmp_0;
            if (destination_0.o()) {
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
    if (!!trackSizes.o()) {
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
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.k();
    while (tmp0_iterator.x()) {
      var element_2 = tmp0_iterator.z();
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
                var tmp_2 = element_2.t29_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.u29_1;
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
    this_0.d2a(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.a2a_1 = null;
    this.b2a_1 = null;
    this.c2a_1 = null;
  }
  protoOf(GridBuilderInAuto).e2a = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.a2a_1 = this_0.j29_1;
  };
  protoOf(GridBuilderInAuto).f2a = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.b2a_1 = this_0.j29_1;
  };
  protoOf(GridBuilderInAuto).d2a = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.a2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.b2a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.c2a_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.a2a_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.b2a_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  function Companion_7() {
  }
  protoOf(Companion_7).g2a = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    this.h2a_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.h2a_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.g26('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.b26('padding-inline', joinToString(value, ' '));
  }
  function Companion_8() {
  }
  protoOf(Companion_8).d29 = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    this.i2a_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.i2a_1;
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
      _this__u8e3s4.g26('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.g26('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.g26('list-style-image', image);
    }
  }
  function Companion_9() {
  }
  protoOf(Companion_9).j2a = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    this.k2a_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.k2a_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.g26('object-fit', objectFit);
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
    _this__u8e3s4.g26('outline', this_0);
  }
  function CSSOutline() {
    this.l2a_1 = null;
    this.m2a_1 = null;
    this.n2a_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.l2a_1, other.l2a_1) ? equals(this.m2a_1, other.m2a_1) : false) ? equals(this.n2a_1, other.n2a_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.n2a_1, this.m2a_1, this.l2a_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.l2a_1 = $width;
      $this$outline.m2a_1 = $style;
      $this$outline.n2a_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_10() {
  }
  protoOf(Companion_10).o2a = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_10).p2a = function () {
    return new Overflow('auto');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Overflow(value) {
    this.q2a_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.q2a_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.g26('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.g26('overflow', overflow);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).t2a = function (fallback) {
    return this.w2a(fallback);
  };
  protoOf(PropertyValue).x2a = function (fallback) {
    return this.t2a((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
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
  protoOf(NumberValue).b2b = function (fallback) {
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
    return this.w2a(tmp);
  };
  protoOf(NumberValue).x2a = function (fallback) {
    return this.b2b((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.u2a_1 = defaultFallback;
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
    tmp.v2a_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).y2a = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.x2a(fallback) : $super.x2a.call(this, fallback);
  };
  protoOf(StyleVariable).w2a = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.u2a_1 : fallback;
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
    return 'var(--' + this.v2a_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.c2b_1 = defaultFallback;
    this.d2b_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).e2b = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.c2b_1, this.d2b_1);
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
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.f2b_1 = defaultFallback;
    this.g2b_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).e2b = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.f2b_1, this.g2b_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.g26('--' + variable.v2a_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.q5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).s6())), '-vars'), '-variables'));
      this_0.r5(_Char___init__impl__6a9atx(45));
    }
    this_0.q5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function Companion_11() {
  }
  protoOf(Companion_11).d29 = function () {
    return new UserSelect('none');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function UserSelect(value) {
    this.h2b_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.h2b_1;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).i2b = function () {
    return new WhiteSpace('nowrap');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function WhiteSpace(value) {
    this.j2b_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.j2b_1;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).s28 = function () {
    return new TextAlign('start');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function TextAlign(value) {
    this.k2b_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.k2b_1;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).l2b = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_14).d29 = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function TextDecorationLine(value) {
    this.m2b_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.m2b_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.g26('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.g26('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.g26('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.b26('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.g26('translate', tx);
  }
  function Companion_15() {
  }
  protoOf(Companion_15).n2b = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.u(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_15).o2b = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.n2b(properties, duration, timingFunction, delay) : $super.n2b.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_17.p2b(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.q2b_1 = property;
    this.r2b_1 = duration;
    this.s2b_1 = timingFunction;
    this.t2b_1 = delay;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.u(this.q2b_1.toString());
    var tmp0_safe_receiver = this.r2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.s2b_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp1_safe_receiver));
    }
    if (!(this.t2b_1 == null)) {
      if (this.r2b_1 == null) {
        this_0.u('0s');
      }
      this_0.u(toString(this.t2b_1));
    }
    var tmp$ret$6 = this_0.w2();
    return joinToString_0(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.q2b_1);
    result = imul(result, 31) + (this.r2b_1 == null ? 0 : hashCode(this.r2b_1)) | 0;
    result = imul(result, 31) + (this.s2b_1 == null ? 0 : hashCode(this.s2b_1)) | 0;
    result = imul(result, 31) + (this.t2b_1 == null ? 0 : hashCode(this.t2b_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.q2b_1, tmp0_other_with_cast.q2b_1))
      return false;
    if (!equals(this.r2b_1, tmp0_other_with_cast.r2b_1))
      return false;
    if (!equals(this.s2b_1, tmp0_other_with_cast.s2b_1))
      return false;
    if (!equals(this.t2b_1, tmp0_other_with_cast.t2b_1))
      return false;
    return true;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.b26('transition', joinToString(transitions));
    }
  }
  function Companion_16() {
  }
  protoOf(Companion_16).p2b = function (customValue) {
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
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function TransitionProperty(value) {
    this.u2b_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.u2b_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).hk = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.w2b_1 = handle;
  }
  protoOf(Simple).x2b = function (scope, element) {
    this.w2b_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.y2b_1 = keys;
    this.z2b_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.y2b_1 + ', refCallback=' + this.z2b_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.y2b_1);
    result = imul(result, 31) + hashCode(this.z2b_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.y2b_1, tmp0_other_with_cast.y2b_1))
      return false;
    if (!equals(this.z2b_1, tmp0_other_with_cast.z2b_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a2c_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).b2c = function (keys, handle) {
    this.a2c_1.u(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).c2c = function (other) {
    if (!(other == null)) {
      this.a2c_1.a1(other.d2c_1);
    }
  };
  protoOf(Builder).w2 = function () {
    return new ElementRefScope(this.a2c_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.d2c_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.d2c_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.d2c_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.d2c_1, tmp0_other_with_cast.d2c_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(1057476357);
    if (isTraceInProgress()) {
      traceEventStart(1057476357, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:91)');
    }
    $composer_0.l17(49626842);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.o18();
    var tmp;
    if (false ? true : it === Companion_getInstance().d12_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.m17();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 456);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.l17(1100234072);
    if (isTraceInProgress()) {
      traceEventStart(1100234072, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.m17();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.d2c_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.y2b_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect(tmp, registerRefScope$lambda_0(element, transform, _this__u8e3s4), $composer_0, 8);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.w2();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.z2b_1.x2b($this$DisposableEffect, $transform($this_registerRefScope.g28($this$DisposableEffect)));
    };
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).g24 = classes;
  protoOf(ComparableAttrsScope).h24 = tabIndex;
  protoOf(DummyAttrsScope).g24 = classes;
  protoOf(DummyAttrsScope).h24 = tabIndex;
  protoOf(ComparableStyleScope).b26 = property;
  protoOf(ComparableStyleScope).c26 = property_0;
  protoOf(ComparableStyleScope).h26 = variable;
  protoOf(CalcScopeInstance).v2b = unaryMinus;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  CalcScopeInstance_instance = new CalcScopeInstance();
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
  _.$_$.m = borderLeft;
  _.$_$.n = borderStyle;
  _.$_$.o = borderTop;
  _.$_$.p = borderWidth;
  _.$_$.q = boxShadow;
  _.$_$.r = boxSizing_0;
  _.$_$.s = cursor;
  _.$_$.t = fontWeight;
  _.$_$.u = gridTemplateColumns_0;
  _.$_$.v = grid;
  _.$_$.w = isNotEmpty;
  _.$_$.x = justifyItems;
  _.$_$.y = justifySelf;
  _.$_$.z = listStyle;
  _.$_$.a1 = objectFit;
  _.$_$.b1 = outline;
  _.$_$.c1 = overflowY;
  _.$_$.d1 = overflow;
  _.$_$.e1 = paddingInline;
  _.$_$.f1 = setVariable;
  _.$_$.g1 = textAlign;
  _.$_$.h1 = textDecorationLine;
  _.$_$.i1 = transition;
  _.$_$.j1 = translateX;
  _.$_$.k1 = userSelect;
  _.$_$.l1 = verticalAlign;
  _.$_$.m1 = whiteSpace;
  _.$_$.n1 = refScope;
  _.$_$.o1 = registerRefScope;
  _.$_$.p1 = ComparableAttrsScope_init_$Create$;
  _.$_$.q1 = CSSTransition_init_$Create$;
  _.$_$.r1 = Companion_instance_4;
  _.$_$.s1 = Companion_instance_2;
  _.$_$.t1 = Companion_instance_16;
  _.$_$.u1 = Companion_instance_3;
  _.$_$.v1 = Companion_instance_5;
  _.$_$.w1 = Companion_instance_0;
  _.$_$.x1 = Companion_instance_1;
  _.$_$.y1 = Companion_instance_9;
  _.$_$.z1 = Companion_instance_10;
  _.$_$.a2 = Companion_instance_11;
  _.$_$.b2 = Companion_instance_14;
  _.$_$.c2 = Companion_instance_15;
  _.$_$.d2 = Companion_instance_12;
  _.$_$.e2 = Companion_instance_8;
  _.$_$.f2 = Companion_instance_13;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
