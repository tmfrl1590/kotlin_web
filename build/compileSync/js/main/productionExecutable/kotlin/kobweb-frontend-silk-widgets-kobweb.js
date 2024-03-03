(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'));
  else {
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-silk-foundation']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var KProperty0 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var VOID = kotlin_kotlin.$_$.c;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var classMeta = kotlin_kotlin.$_$.m5;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.s6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.e2b(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.e2b(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().y2a();
    tmp.h36_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).z2y = function () {
    return this.h36_1.e2b(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.d29()), Companion_instance_1.s28()), get_cssRem(0));
  }
  function TocBorderedVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().z2y().y2a()), get_cssRem(1));
  }
  function TocStyle$factory() {
    return getPropertyCallableRef('TocStyle', 0, KProperty0, function () {
      return get_TocStyle();
    }, null);
  }
  function TocBorderedVariant$factory() {
    return getPropertyCallableRef('TocBorderedVariant', 0, KProperty0, function () {
      return get_TocBorderedVariant();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.z2y();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle$delegate = base(tmp, VOID, 'silk', TocStyle$delegate$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant$delegate = addVariantBase(tmp_0, VOID, TocBorderedVariant$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.e2b(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.e2b(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_4.j2a());
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  function FitWidthImageVariant$factory() {
    return getPropertyCallableRef('FitWidthImageVariant', 0, KProperty0, function () {
      return get_FitWidthImageVariant();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle(VOID, 'silk', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant$delegate = addVariantBase(tmp, VOID, FitWidthImageVariant$delegate$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.e2b(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.e2b(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.e2b(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant$delegate.e2b(null, AlwaysUnderlinedLinkVariant$factory());
  }
  var AlwaysUnderlinedLinkVariant$delegate;
  function LinkVars() {
    LinkVars_instance = this;
    this.i36_1 = StyleVariable_0('silk');
    this.j36_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).k36 = function () {
    return this.i36_1.e2b(this, DefaultColor$factory());
  };
  protoOf(LinkVars).l36 = function () {
    return this.j36_1.e2b(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.t2j(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.x2k(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.x2k(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover($this$ComponentStyle);
    tmp_1.x2k(LinkStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.d29());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().k36().y2a());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().l36().y2a());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.l2b());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.x2k(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.d29());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().y2a());
    var tmp = get_link($this$addVariant);
    tmp.x2k(UncoloredLinkVariant$delegate$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.x2k(UncoloredLinkVariant$delegate$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$delegate$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$delegate$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.t2j(AlwaysUnderlinedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.l2b());
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  function UndecoratedLinkVariant$factory() {
    return getPropertyCallableRef('UndecoratedLinkVariant', 0, KProperty0, function () {
      return get_UndecoratedLinkVariant();
    }, null);
  }
  function UncoloredLinkVariant$factory() {
    return getPropertyCallableRef('UncoloredLinkVariant', 0, KProperty0, function () {
      return get_UncoloredLinkVariant();
    }, null);
  }
  function AlwaysUnderlinedLinkVariant$factory() {
    return getPropertyCallableRef('AlwaysUnderlinedLinkVariant', 0, KProperty0, function () {
      return get_AlwaysUnderlinedLinkVariant();
    }, null);
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.k36();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.l36();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle$delegate = ComponentStyle(VOID, 'silk', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant$delegate = addVariant(tmp, VOID, UndecoratedLinkVariant$delegate$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant$delegate = addVariant(tmp_0, VOID, UncoloredLinkVariant$delegate$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant$delegate = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$delegate$lambda);
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.d2m_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.k2m_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.p2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).w34(Colors_instance.z2g(), Colors_instance.h2h());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.q2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).w34(Colors_instance.b2h(), Colors_instance.i2h());
    var tmp = get_SilkColorsStyle();
    modifyComponentStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.n2m(get_ImageStyle());
    mutableTheme.w2m([get_FitWidthImageVariant()]);
    mutableTheme.n2m(get_LinkStyle());
    mutableTheme.w2m([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant(), get_AlwaysUnderlinedLinkVariant()]);
    mutableTheme.n2m(get_TocStyle());
    mutableTheme.w2m([get_TocBorderedVariant()]);
  }
  function initSilkWidgetsKobweb$lambda($this$modifyComponentStyleBase) {
    var palette = toPalette($this$modifyComponentStyleBase.s2j());
    return setVariable(setVariable(Companion_instance, LinkVars_getInstance().k36(), get_link_1(palette).x34()), LinkVars_getInstance().l36(), get_link_1(palette).q36());
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.o36_1 = this.v2x();
    this.p36_1 = this.v2x();
  }
  protoOf(MutableLink).i35 = function (_set____db54di) {
    return this.o36_1.s2x(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).x34 = function () {
    return this.o36_1.e2b(this, default$factory_0());
  };
  protoOf(MutableLink).r36 = function (_set____db54di) {
    return this.p36_1.s2x(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).q36 = function () {
    return this.p36_1.e2b(this, visited$factory_0());
  };
  protoOf(MutableLink).w34 = function (default_0, visited) {
    this.i35(default_0);
    this.r36(visited);
  };
  function get_link_0(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
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
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.q36();
    }, function (receiver, value) {
      return receiver.r36(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.q36();
    }, function (receiver, value) {
      return receiver.r36(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
