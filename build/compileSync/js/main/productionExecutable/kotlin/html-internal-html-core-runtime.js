(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.i6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var classMeta = kotlin_kotlin.$_$.m5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.c5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.a6;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher, VOID, JsMicrotasksDispatcher);
  setMetadataFor(renderComposable$slambda, 'renderComposable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(renderComposable$scope$1, VOID, classMeta);
  //endregion
  function DomNodeWrapper(node) {
    this.p22_1 = node;
    this.q22_1 = 0;
  }
  protoOf(DomNodeWrapper).r22 = function () {
    return this.p22_1;
  };
  protoOf(DomNodeWrapper).s22 = function (index, nodeWrapper) {
    var length = this.r22().childNodes.length;
    if (index < length) {
      var tmp = this.r22();
      var tmp_0 = nodeWrapper.r22();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.r22().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.r22().appendChild(nodeWrapper.r22());
    }
  };
  protoOf(DomNodeWrapper).iv = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.r22();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.r22().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).jv = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.r22();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.r22().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.r22();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.r22().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.w22_1 = 0;
  }
  protoOf(DomApplier).x22 = function (index, instance) {
  };
  protoOf(DomApplier).gv = function (index, instance) {
    return this.x22(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).y22 = function (index, instance) {
    this.bv().s22(index, instance);
  };
  protoOf(DomApplier).hv = function (index, instance) {
    return this.y22(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).iv = function (index, count) {
    this.bv().iv(index, count);
  };
  protoOf(DomApplier).jv = function (from, to, count) {
    this.bv().jv(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.e23_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.e23_1.b1();
    $this.f23_1 = false;
  }
  function schedule($this, block) {
    $this.e23_1.u(block);
    if (!$this.f23_1) {
      $this.f23_1 = true;
      launch($this.c23_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().a23_1) {
      GlobalSnapshotManager_getInstance().a23_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().a23_1 = false;
    Companion_instance.a1g();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).p1g = function ($this$launch, $completion) {
    var tmp = this.q1g($this$launch, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).qc = function (p1, $completion) {
    return this.p1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        if (tmp === 0) {
          this.tb_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).q1g = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.p23_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.z22_1 = false;
    this.a23_1 = false;
    this.b23_1 = null;
    this.c23_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).bf(SupervisorJob()));
    var tmp = this;
    tmp.d23_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e23_1 = ArrayList_init_$Create$();
    this.f23_1 = false;
    this.g23_1 = 8;
  }
  protoOf(GlobalSnapshotManager).q23 = function () {
    if (!this.z22_1) {
      this.z22_1 = true;
      this.b23_1 = Companion_instance.o1x(this.d23_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.rk();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.s23_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).al = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().q23();
    var context = monotonicFrameClock.bf(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.q1c(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.b24_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).p1g = function ($this$launch, $completion) {
    var tmp = this.q1g($this$launch, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(renderComposable$slambda).qc = function (p1, $completion) {
    return this.p1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 2;
            this.sb_1 = 1;
            suspendResult = this.b24_1.g1j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 2) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).q1g = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.b24_1, completion);
    i.c24_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.p1g($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.d24_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
