(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    root['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-collection-collection']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i6;
  var interfaceMeta = kotlin_kotlin.$_$.x5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var toString = kotlin_kotlin.$_$.l6;
  var classMeta = kotlin_kotlin.$_$.m5;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Companion_instance = kotlin_kotlin.$_$.c2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s1;
  var createFailure = kotlin_kotlin.$_$.t8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.a9;
  var intercepted = kotlin_kotlin.$_$.q4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.y4;
  var fold = kotlin_kotlin.$_$.x4;
  var minusKey = kotlin_kotlin.$_$.z4;
  var plus = kotlin_kotlin.$_$.b5;
  var isInterface = kotlin_kotlin.$_$.a6;
  var equals = kotlin_kotlin.$_$.p5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var fill = kotlin_kotlin.$_$.b3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var rotateLeft = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.v5;
  var Enum = kotlin_kotlin.$_$.g8;
  var emptyList = kotlin_kotlin.$_$.a3;
  var sortWith = kotlin_kotlin.$_$.g4;
  var rotateRight = kotlin_kotlin.$_$.z8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.c9;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var IllegalStateException = kotlin_kotlin.$_$.j8;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var captureStack = kotlin_kotlin.$_$.i5;
  var defineProp = kotlin_kotlin.$_$.o5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var lazy = kotlin_kotlin.$_$.v8;
  var firstOrNull = kotlin_kotlin.$_$.e3;
  var compareTo = kotlin_kotlin.$_$.n5;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t5;
  var isArray = kotlin_kotlin.$_$.y5;
  var Set = kotlin_kotlin.$_$.p2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var get_BitmaskMsb = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var Long = kotlin_kotlin.$_$.k8;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var MutableCollection = kotlin_kotlin.$_$.o2;
  var Map = kotlin_kotlin.$_$.n2;
  var Exception = kotlin_kotlin.$_$.i8;
  var plus_0 = kotlin_kotlin.$_$.x3;
  var fillArrayVal = kotlin_kotlin.$_$.q5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.b9;
  var Element = kotlin_kotlin.$_$.a5;
  var getStringHashCode = kotlin_kotlin.$_$.u5;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var Collection = kotlin_kotlin.$_$.k2;
  var addAll = kotlin_kotlin.$_$.r2;
  var CoroutineImpl = kotlin_kotlin.$_$.c5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var toList = kotlin_kotlin.$_$.i4;
  var flatten = kotlin_kotlin.$_$.g3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var CancellationException = kotlin_kotlin.$_$.n4;
  var addSuppressed = kotlin_kotlin.$_$.q8;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.d4;
  var arrayCopy = kotlin_kotlin.$_$.s2;
  var fill_0 = kotlin_kotlin.$_$.d3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var anyToString = kotlin_kotlin.$_$.g5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var first = kotlin_kotlin.$_$.f3;
  var last = kotlin_kotlin.$_$.p3;
  var copyOf = kotlin_kotlin.$_$.x2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var plus_1 = kotlin_kotlin.$_$.b4;
  var coerceAtMost = kotlin_kotlin.$_$.n6;
  var coerceAtLeast = kotlin_kotlin.$_$.m6;
  var copyOf_0 = kotlin_kotlin.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.u8;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Entry = kotlin_kotlin.$_$.m2;
  var SequenceScope = kotlin_kotlin.$_$.v6;
  var until = kotlin_kotlin.$_$.q6;
  var sequence = kotlin_kotlin.$_$.w6;
  var joinToString = kotlin_kotlin.$_$.k3;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var AbstractList = kotlin_kotlin.$_$.f2;
  var List = kotlin_kotlin.$_$.l2;
  var arrayIterator = kotlin_kotlin.$_$.h5;
  var AbstractMutableList = kotlin_kotlin.$_$.h2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var indexOf = kotlin_kotlin.$_$.j3;
  var AbstractMap = kotlin_kotlin.$_$.g2;
  var AbstractSet = kotlin_kotlin.$_$.i2;
  var AbstractCollection = kotlin_kotlin.$_$.e2;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var step = kotlin_kotlin.$_$.p6;
  var countOneBits = kotlin_kotlin.$_$.r8;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toString_1 = kotlin_kotlin.$_$.a8;
  var longArray = kotlin_kotlin.$_$.d6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Char = kotlin_kotlin.$_$.f8;
  var isCharSequence = kotlin_kotlin.$_$.z5;
  var minus = kotlin_kotlin.$_$.v3;
  var contains = kotlin_kotlin.$_$.v2;
  var plus_2 = kotlin_kotlin.$_$.a4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.f4;
  var intArrayIterator = kotlin_kotlin.$_$.w5;
  var Companion_getInstance = kotlin_kotlin.$_$.b2;
  var toIntArray = kotlin_kotlin.$_$.h4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var println = kotlin_kotlin.$_$.f5;
  var printStackTrace = kotlin_kotlin.$_$.x8;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.d8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.p1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(ReusableRememberObserver, 'ReusableRememberObserver', interfaceMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [ReusableRememberObserver]);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  function changed(value) {
    return this.h18(value);
  }
  function changedInstance(value) {
    return this.ez(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserverHolder, 'RememberObserverHolder', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(CompositionObserverHolder, 'CompositionObserverHolder', classMeta, VOID, VOID, CompositionObserverHolder);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionImplServiceKey$1, VOID, classMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(State_0, 'State', interfaceMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(GroupSourceInformation, 'GroupSourceInformation', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  setMetadataFor(SourceInformationGroupIterator, 'SourceInformationGroupIterator', classMeta);
  setMetadataFor(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(MutableState, 'MutableState', interfaceMeta, VOID, [State_0]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(StateObjectImpl, 'StateObjectImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, StateObjectImpl, [StateObjectImpl, MutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta, VOID, [State_0]);
  setMetadataFor(ChangeList, 'ChangeList', classMeta, VOID, VOID, ChangeList);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ComposerChangeListWriter, 'ComposerChangeListWriter', classMeta);
  setMetadataFor(FixupList, 'FixupList', classMeta, VOID, VOID, FixupList);
  setMetadataFor(Operation, 'Operation', classMeta);
  setMetadataFor(Ups, 'Ups', objectMeta, Operation);
  setMetadataFor(Downs, 'Downs', objectMeta, Operation);
  setMetadataFor(AdvanceSlotsBy, 'AdvanceSlotsBy', objectMeta, Operation);
  setMetadataFor(Remember, 'Remember', objectMeta, Operation);
  setMetadataFor(UpdateValue, 'UpdateValue', objectMeta, Operation);
  setMetadataFor(UpdateAuxData, 'UpdateAuxData', objectMeta, Operation);
  setMetadataFor(EnsureRootGroupStarted, 'EnsureRootGroupStarted', objectMeta, Operation);
  setMetadataFor(EnsureGroupStarted, 'EnsureGroupStarted', objectMeta, Operation);
  setMetadataFor(RemoveCurrentGroup, 'RemoveCurrentGroup', objectMeta, Operation);
  setMetadataFor(MoveCurrentGroup, 'MoveCurrentGroup', objectMeta, Operation);
  setMetadataFor(EndCurrentGroup, 'EndCurrentGroup', objectMeta, Operation);
  setMetadataFor(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', objectMeta, Operation);
  setMetadataFor(EndCompositionScope, 'EndCompositionScope', objectMeta, Operation);
  setMetadataFor(UseCurrentNode, 'UseCurrentNode', objectMeta, Operation);
  setMetadataFor(UpdateNode, 'UpdateNode', objectMeta, Operation);
  setMetadataFor(RemoveNode, 'RemoveNode', objectMeta, Operation);
  setMetadataFor(MoveNode, 'MoveNode', objectMeta, Operation);
  setMetadataFor(InsertSlots, 'InsertSlots', objectMeta, Operation);
  setMetadataFor(InsertSlotsWithFixups, 'InsertSlotsWithFixups', objectMeta, Operation);
  setMetadataFor(InsertNodeFixup, 'InsertNodeFixup', objectMeta, Operation);
  setMetadataFor(PostInsertNodeFixup, 'PostInsertNodeFixup', objectMeta, Operation);
  setMetadataFor(ResetSlots, 'ResetSlots', objectMeta, Operation);
  setMetadataFor(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', objectMeta, Operation);
  setMetadataFor(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', objectMeta, Operation);
  setMetadataFor(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', objectMeta, Operation);
  setMetadataFor(EndMovableContentPlacement, 'EndMovableContentPlacement', objectMeta, Operation);
  setMetadataFor(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', objectMeta, Operation);
  setMetadataFor(ApplyChangeList, 'ApplyChangeList', objectMeta, Operation);
  setMetadataFor(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(OpIterator, 'OpIterator', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Operations, 'Operations', classMeta, VOID, VOID, Operations);
  setMetadataFor(IdentityArrayMap$asMap$1$entries$1$iterator$1$1, VOID, classMeta, VOID, [Entry]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he, 'IdentityArrayMap$asMap$o$<get-entries>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw, 'IdentityArrayMap$asMap$o$<get-keys>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu, 'IdentityArrayMap$asMap$o$<get-values>$o$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(IdentityArrayMap$asMap$1$entries$1, VOID, classMeta, VOID, [Set]);
  setMetadataFor(IdentityArrayMap$asMap$1$keys$1, VOID, classMeta, VOID, [Set]);
  setMetadataFor(IdentityArrayMap$asMap$1$values$1, VOID, classMeta, VOID, [Collection]);
  setMetadataFor(IdentityArrayMap$asMap$1, VOID, classMeta, VOID, [Map]);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(ScopeMap, 'ScopeMap', classMeta, VOID, VOID, ScopeMap);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, List, MutableCollection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(IntRef, 'IntRef', classMeta, VOID, VOID, IntRef);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [StateObject, List, MutableCollection], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.kv_1 = applier;
    this.lv_1 = offset;
    this.mv_1 = 0;
  }
  protoOf(OffsetApplier).bv = function () {
    return this.kv_1.bv();
  };
  protoOf(OffsetApplier).ev = function (node) {
    this.mv_1 = this.mv_1 + 1 | 0;
    this.kv_1.ev(node);
  };
  protoOf(OffsetApplier).fv = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mv_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.mv_1 = this.mv_1 - 1 | 0;
    this.kv_1.fv();
  };
  protoOf(OffsetApplier).gv = function (index, instance) {
    this.kv_1.gv(index + (this.mv_1 === 0 ? this.lv_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).hv = function (index, instance) {
    this.kv_1.hv(index + (this.mv_1 === 0 ? this.lv_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).iv = function (index, count) {
    this.kv_1.iv(index + (this.mv_1 === 0 ? this.lv_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).jv = function (from, to, count) {
    var effectiveOffset = this.mv_1 === 0 ? this.lv_1 : 0;
    this.kv_1.jv(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.nv_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ov_1 = ArrayList_init_$Create$();
    this.pv_1 = this.nv_1;
  }
  protoOf(AbstractApplier).qv = function (_set____db54di) {
    this.pv_1 = _set____db54di;
  };
  protoOf(AbstractApplier).bv = function () {
    return this.pv_1;
  };
  protoOf(AbstractApplier).rv = function (node) {
    this.ov_1.u(this.bv());
    this.qv(node);
  };
  protoOf(AbstractApplier).ev = function (node) {
    return this.rv((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).fv = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.ov_1.o()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var message = 'empty stack';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.qv(this.ov_1.g1(this.ov_1.i() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.sv_1 = onFrame;
    this.tv_1 = continuation;
  }
  protoOf(FrameAwaiter).uv = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.sv_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.tv_1.m6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.wv_1;
    if (!($this.xv_1 == null))
      return Unit_instance;
    $this.xv_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.yv_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.j(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.tv_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.m6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.yv_1.b1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.wv_1;
      var tmp = this$0.yv_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.v(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.vv_1 = onNewAwaiters;
    this.wv_1 = createSynchronizedObject();
    this.xv_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.yv_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.zv_1 = ArrayList_init_$Create$();
  }
  protoOf(BroadcastFrameClock).aw = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.wv_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.yv_1.o();
  };
  protoOf(BroadcastFrameClock).bw = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.wv_1;
    var toResume = this.yv_1;
    this.yv_1 = this.zv_1;
    this.zv_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.i();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.j(i).uv(timeNanos);
      }
       while (inductionVariable < last);
    toResume.b1();
  };
  protoOf(BroadcastFrameClock).cw = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.gk();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.wv_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.xv_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.m6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.yv_1.o();
      var tmp = this.yv_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.u(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.zi(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.vv_1 == null) : false) {
        try {
          this.vv_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.li();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.gw_1 = scope;
    this.hw_1 = location;
    this.iw_1 = instances;
  }
  protoOf(Invalidation).jw = function () {
    return this.gw_1.sw(this.iw_1);
  };
  function startRoot($this) {
    $this.ay_1 = $this.vw_1.yy();
    startGroup($this, 100);
    $this.uw_1.zy();
    $this.nx_1 = $this.uw_1.az();
    $this.qx_1.dz(asInt($this.px_1));
    $this.px_1 = $this.ez($this.nx_1);
    $this.ey_1 = null;
    if (!$this.ix_1) {
      $this.ix_1 = $this.uw_1.fz();
    }
    if (!$this.vx_1) {
      $this.vx_1 = $this.uw_1.gz();
    }
    var tmp0_safe_receiver = read($this.nx_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.u($this.vw_1);
      $this.uw_1.hz(tmp0_safe_receiver);
    }
    startGroup($this, $this.uw_1.iz());
  }
  function endRoot($this) {
    endGroup($this);
    $this.uw_1.jz();
    endGroup($this);
    $this.gy_1.wz();
    finalizeCompose($this);
    $this.ay_1.k10();
    $this.jx_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.ax_1.b1();
    $this.dx_1.b1();
    $this.fx_1.b1();
    $this.mx_1.b1();
    $this.qx_1.b1();
    $this.ox_1 = null;
    if (!$this.ay_1.d10_1) {
      $this.ay_1.k10();
    }
    if (!$this.cy_1.g11_1) {
      $this.cy_1.k10();
    }
    $this.iy_1.b1();
    createFreshInsertTable($this);
    $this.ky_1 = 0;
    $this.tx_1 = 0;
    $this.kx_1 = false;
    $this.jy_1 = false;
    $this.rx_1 = false;
    $this.yx_1 = false;
    $this.jx_1 = false;
    $this.sx_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().k11_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().k11_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.ex_1 = $this.ex_1 + $this.ay_1.n11() | 0;
  }
  function updateSlot($this, value) {
    $this.o11();
    $this.p11(value);
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.ey_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.ay_1.g10_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.jy_1 ? $this.dy_1 : false) {
      var current = $this.cy_1.f11_1;
      while (current > 0) {
        if ($this.cy_1.s11(current) === 202 ? equals($this.cy_1.r11(current), get_compositionLocalMap()) : false) {
          var tmp = $this.cy_1.q11(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.ey_1 = providers;
          return providers;
        }
        current = $this.cy_1.t11(current);
      }
    }
    if ($this.ay_1.i() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.ay_1.s11(current_0) === 202 ? equals($this.ay_1.r11(current_0), get_compositionLocalMap()) : false) {
          var tmp0_safe_receiver = $this.ox_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.ay_1.q11(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.ey_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.ay_1.t11(current_0);
      }
    }
    $this.ey_1 = $this.nx_1;
    return $this.nx_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.ox_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.ox_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.v11($this.ay_1.e10_1, providers);
  }
  function ensureWriter($this) {
    if ($this.cy_1.g11_1) {
      $this.cy_1 = $this.by_1.w11();
      $this.cy_1.x11();
      $this.dy_1 = false;
      $this.ey_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.cy_1.g11_1);
    $this.by_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.by_1.w11();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.k10();
    tmp.cy_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.ay_1.b12();
    } else {
      if (!(data == null) ? !($this.ay_1.z11() === data) : false) {
        $this.gy_1.y11(data);
      }
      $this.ay_1.a12();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().k11_1));
    if ($this.jy_1) {
      $this.ay_1.c12();
      var startIndex = $this.cy_1.d11_1;
      if (isNode) {
        $this.cy_1.g12(key, Companion_getInstance_0().d12_1);
      } else if (!(data == null)) {
        var tmp = $this.cy_1;
        tmp.f12(key, objectKey == null ? Companion_getInstance_0().d12_1 : objectKey, data);
      } else {
        var tmp_0 = $this.cy_1;
        tmp_0.e12(key, objectKey == null ? Companion_getInstance_0().d12_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.bx_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.n12(insertKeyInfo, $this.cx_1 - tmp2_safe_receiver.i12_1 | 0);
        tmp2_safe_receiver.o12(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().l11_1))) {
      tmp_1 = $this.rx_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.bx_1 == null) {
      var slotKey = $this.ay_1.p12();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.ay_1.r12()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.bx_1 = new Pending($this.ay_1.q12(), $this.cx_1);
      }
    }
    var pending = $this.bx_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.s12(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.o12(keyInfo);
        var location = keyInfo.x12_1;
        $this.cx_1 = pending.a13(keyInfo) + pending.i12_1 | 0;
        var relativePosition = pending.b13(keyInfo);
        var currentRelativePosition = relativePosition - pending.j12_1 | 0;
        pending.c13(relativePosition, pending.j12_1);
        $this.gy_1.d13(location);
        $this.ay_1.e13(location);
        if (currentRelativePosition > 0) {
          $this.gy_1.f13(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.ay_1.c12();
        $this.jy_1 = true;
        $this.ey_1 = null;
        ensureWriter($this);
        $this.cy_1.t12();
        var startIndex_0 = $this.cy_1.d11_1;
        if (isNode) {
          $this.cy_1.g12(key, Companion_getInstance_0().d12_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.cy_1;
          tmp_2.f12(key, objectKey == null ? Companion_getInstance_0().d12_1 : objectKey, data);
        } else {
          var tmp_3 = $this.cy_1;
          tmp_3.e12(key, objectKey == null ? Companion_getInstance_0().d12_1 : objectKey);
        }
        $this.hy_1 = $this.cy_1.u12(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.n12(insertKeyInfo_0, $this.cx_1 - pending.i12_1 | 0);
        pending.o12(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.cx_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.ax_1.g13($this.bx_1);
    $this.bx_1 = newPending;
    $this.dx_1.dz($this.cx_1);
    if (isNode)
      $this.cx_1 = 0;
    $this.fx_1.dz($this.ex_1);
    $this.ex_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.ax_1.h13();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.j12_1 = previousPending.j12_1 + 1 | 0;
    }
    $this.bx_1 = previousPending;
    $this.cx_1 = $this.dx_1.h13() + expectedNodeCount | 0;
    $this.ex_1 = $this.fx_1.h13() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.jy_1) {
      var parent = $this.cy_1.f11_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.cy_1.s11(parent), $this.cy_1.r11(parent), $this.cy_1.q11(parent));
    } else {
      var parent_0 = $this.ay_1.g10_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.ay_1.s11(parent_0), $this.ay_1.r11(parent_0), $this.ay_1.q11(parent_0));
    }
    var expectedNodeCount = $this.ex_1;
    var pending = $this.bx_1;
    if (!(pending == null) ? pending.h12_1.i() > 0 : false) {
      var previous = pending.h12_1;
      var current = pending.i13();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.i();
      var previousIndex = 0;
      var previousEnd = previous.i();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.j(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.a13(previousInfo);
          $this.gy_1.j13(deleteOffset + pending.i12_1 | 0, previousInfo.y12_1);
          pending.k13(previousInfo.x12_1, 0);
          $this.gy_1.d13(previousInfo.x12_1);
          $this.ay_1.e13(previousInfo.x12_1);
          recordDelete($this);
          $this.ay_1.n11();
          removeRange($this.lx_1, previousInfo.x12_1, previousInfo.x12_1 + $this.ay_1.l13(previousInfo.x12_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.j(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.a13(currentInfo);
            placedKeys.u(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.m13(currentInfo);
              $this.gy_1.n13(nodePosition + pending.i12_1 | 0, nodeOffset + pending.i12_1 | 0, updatedCount);
              pending.o13(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.m13(currentInfo) | 0;
        }
      }
      $this.gy_1.p13();
      if (previous.i() > 0) {
        $this.gy_1.d13($this.ay_1.q13());
        $this.ay_1.x11();
      }
    }
    var removeIndex = $this.cx_1;
    while (!$this.ay_1.r13()) {
      var startSlot = $this.ay_1.e10_1;
      recordDelete($this);
      var nodesToRemove = $this.ay_1.n11();
      $this.gy_1.j13(removeIndex, nodesToRemove);
      removeRange($this.lx_1, startSlot, $this.ay_1.e10_1);
    }
    var inserting = $this.jy_1;
    if (inserting) {
      if (isNode) {
        $this.iy_1.v13();
        expectedNodeCount = 1;
      }
      $this.ay_1.w13();
      var parentGroup = $this.cy_1.f11_1;
      $this.cy_1.x13();
      if (!$this.ay_1.a14()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.cy_1.y13();
        $this.cy_1.k10();
        recordInsert($this, $this.hy_1);
        $this.jy_1 = false;
        if (!$this.vw_1.z13()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.gy_1.s13();
      }
      $this.gy_1.t13();
      var parentGroup_0 = $this.ay_1.g10_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.ay_1.u13();
      $this.gy_1.p13();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.yx_1;
    $this.yx_1 = true;
    var recomposed = false;
    var parent = $this.ay_1.g10_1;
    var end = parent + $this.ay_1.l13(parent) | 0;
    var recomposeIndex = $this.cx_1;
    var recomposeCompoundKey = $this.ky_1;
    var oldGroupNodeCount = $this.ex_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.lx_1, $this.ay_1.e10_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.hw_1;
      removeLocation($this.lx_1, location);
      if (firstInRange_0.jw()) {
        recomposed = true;
        $this.ay_1.e13(location);
        var newGroup = $this.ay_1.e10_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.cx_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.ky_1 = compoundKeyOf($this, $this.ay_1.t11(newGroup), parent, recomposeCompoundKey);
        $this.ey_1 = null;
        firstInRange_0.gw_1.c14($this);
        $this.ey_1 = null;
        $this.ay_1.d14(parent);
      } else {
        $this.xx_1.g13(firstInRange_0.gw_1);
        firstInRange_0.gw_1.b14();
        $this.xx_1.h13();
      }
      firstInRange_0 = firstInRange($this.lx_1, $this.ay_1.e10_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.ay_1.x11();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.cx_1 = recomposeIndex + parentGroupNodes | 0;
      $this.ex_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.ky_1 = recomposeCompoundKey;
    $this.yx_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.ax_1.i() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.ax_1.e14(pendingIndex);
            if (!(pending == null) ? pending.k13(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.ay_1.g10_1;
        } else {
          if ($this.ay_1.f14(current))
            break $l$loop_0;
          current = $this.ay_1.t11(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.ay_1.t11(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.ay_1.f14(anchorGroup)) {
      anchorGroup = $this.ay_1.t11(anchorGroup);
    }
    var index = $this.ay_1.f14(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.ay_1.g14(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.ay_1.l13(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.hx_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.zs(group) ? tmp0_safe_receiver.j(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.gx_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.ay_1.g14(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.hx_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.hx_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.ys(group, count);
      } else {
        var tmp1_elvis_lhs = $this.gx_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.ay_1.i());
          fill(newCounts_0, -1);
          $this.gx_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.gx_1 = null;
    $this.hx_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.ay_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.f14(current)) {
        $this.gy_1.s13();
      }
      current = reader.t11(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.ay_1.t11(group), nearestCommonRoot);
      if ($this.ay_1.f14(group)) {
        $this.gy_1.h14(nodeAt($this.ay_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.ay_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.ay_1.t11(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.i14(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.r11(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.p9_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.s11(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.q11(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().d12_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.ex_1 = $this.ay_1.j14();
    $this.ay_1.x11();
  }
  function addRecomposeScope($this) {
    if ($this.jy_1) {
      var tmp = $this.zw_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.xx_1.g13(scope);
      $this.p11(scope);
      scope.n14($this.ux_1);
    } else {
      var invalidation = removeLocation($this.lx_1, $this.ay_1.g10_1);
      var slot = $this.ay_1.z();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().d12_1)) {
        var tmp_1 = $this.zw_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.p11(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.k14();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.l14(false);
        }
        tmp_2 = this_0;
      }
      scope_0.m14(tmp_2);
      $this.xx_1.g13(scope_0);
      scope_0.n14($this.ux_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.o14(get_movableContentKey(), content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.ky_1;
    try {
      $this.ky_1 = get_movableContentKey();
      if ($this.jy_1) {
        $this.cy_1.p14();
      }
      var providersChanged = $this.jy_1 ? false : !equals($this.ay_1.z11(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().k11_1, locals);
      $this.ey_1 = null;
      if ($this.jy_1 ? !force : false) {
        $this.dy_1 = true;
        var anchor = $this.cy_1.u12($this.cy_1.t11($this.cy_1.f11_1));
        var reference = new MovableContentStateReference(content, parameter, $this.zw_1, $this.by_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.uw_1.q14(reference);
      } else {
        var savedProvidersInvalid = $this.px_1;
        $this.px_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.px_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.ey_1 = null;
      $this.ky_1 = savedCompoundKeyHash;
      $this.r14();
    }
  }
  function insertMovableContentGuarded($this, references) {
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var this_0 = $this.gy_1;
    var newChangeList = $this.yw_1;
    var previousChangeList = this_0.lz_1;
    try {
      this_0.lz_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.gy_1.s14();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.yd();
          var from = item.zd();
          var anchor = to.x14_1;
          var location = to.w14_1.a15(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.gy_1.b15(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.w14_1;
            if (equals(toSlotTable, $this.by_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.w14_1.yy();
            var tmp;
            try {
              reader.e13(location);
              $this.gy_1.g15(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.gy_1.h15(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.k10();
            }
          } else {
            var resolvedState = $this.uw_1.c15(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.d15_1;
            var fromTable = tmp1_elvis_lhs == null ? from.w14_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.d15_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.u12(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.x14_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.o()) {
              $this.gy_1.e15(nodesToInsert, effectiveNodeIndex);
              if (equals(to.w14_1, $this.vw_1)) {
                var group = $this.vw_1.a15(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.i() | 0);
              }
            }
            $this.gy_1.f15(resolvedState, $this.uw_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.yy();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.ay_1;
                var savedCountOverrides = $this.gx_1;
                var savedProviderUpdates = $this.ox_1;
                $this.gx_1 = null;
                $this.ox_1 = null;
                try {
                  $this.ay_1 = reader_0;
                  var newLocation = fromTable.a15(fromAnchor);
                  reader_0.e13(newLocation);
                  $this.gy_1.g15(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_1 = $this.gy_1;
                  var previousChangeList_0 = this_1.lz_1;
                  try {
                    this_1.lz_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_2 = $this.gy_1;
                    var previousImplicitRootStart = this_2.oz_1;
                    try {
                      this_2.oz_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.e10_1;
                      var tmp_2 = from.y14_1;
                      recomposeMovableContent($this, from.v14_1, to.v14_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_2.oz_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_1.lz_1 = previousChangeList_0;
                  }
                  $this.gy_1.h15(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.ay_1 = savedReader;
                  $this.gx_1 = savedCountOverrides;
                  $this.ox_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.k10();
            }
          }
          $this.gy_1.i15();
        }
         while (inductionVariable <= last);
      $this.gy_1.j15();
      $this.gy_1.g15(0);
    }finally {
      this_0.lz_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.yx_1;
    var savedNodeIndex = $this.cx_1;
    try {
      $this.yx_1 = true;
      $this.cx_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.j(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.yd();
          var instances = item.zd();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.m15_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.l15_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.k15(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.k15(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.n15(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.yx_1 = savedIsComposing;
      $this.cx_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.yx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.o15(sectionName);
      try {
        $this.ux_1 = currentSnapshot().t15();
        $this.ox_1 = null;
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.w15_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.u15_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.v15_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.mw_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x15_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.lx_1.u(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        sortWith($this.lx_1, get_InvalidationLocationAscending());
        $this.cx_1 = 0;
        var complete = false;
        $this.yx_1 = true;
        var tmp_2;
        try {
          startRoot($this);
          var savedContent = $this.o11();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.p11((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.wx_1;
          var observers = derivedStateObservers_0();
          try {
            observers.b16(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if ((($this.jx_1 ? true : $this.px_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().d12_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.c16();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$1 = observers.a16_1 - 1 | 0;
            observers.g1(tmp$ret$1);
          }
          endRoot($this);
          complete = true;
          tmp_2 = Unit_instance;
        }finally {
          $this.yx_1 = false;
          $this.lx_1.b1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block;
      }finally {
        Trace_instance.d16(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.e16(_this__u8e3s4.g10_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.e16(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.kx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.kx_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.kx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function recordInsert($this, anchor) {
    if ($this.iy_1.o()) {
      $this.gy_1.g16(anchor, $this.by_1);
    } else {
      $this.gy_1.f16(anchor, $this.by_1, $this.iy_1);
      $this.iy_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.ay_1.e10_1);
    $this.gy_1.h16();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.gy_1.p13();
  }
  function reportAllMovableContent($this) {
    if ($this.vw_1.j16()) {
      var changes = new ChangeList();
      $this.fy_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.vw_1.yy();
      var tmp;
      try {
        $this.ay_1 = reader;
        var this_0 = $this.gy_1;
        var previousChangeList = this_0.lz_1;
        var tmp_0;
        try {
          this_0.lz_1 = changes;
          reportFreeMovableContent($this, 0);
          $this.gy_1.i16();
          tmp_0 = Unit_instance;
        }finally {
          this_0.lz_1 = previousChangeList;
        }
        tmp = tmp_0;
      }finally {
        reader.k10();
      }
    }
  }
  function finalizeCompose($this) {
    $this.gy_1.k16();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.ax_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.bx_1 = null;
    $this.cx_1 = 0;
    $this.ex_1 = 0;
    $this.ky_1 = 0;
    $this.kx_1 = false;
    $this.gy_1.l16();
    $this.xx_1.b1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().d12_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.p9_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.ky_1;
    tmp.ky_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().d12_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.p9_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.ky_1 ^ groupKey;
    tmp.ky_1 = rotateRight(this_0, 3);
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.ay_1;
    var tmp;
    if (reader.c17(group)) {
      var key = reader.s11(group);
      var objectKey = reader.r11(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.n16(group, 0);
        var anchor = reader.u12(group);
        var end = group + reader.l13(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.lx_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.i());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.gw_1, item.iw_1);
            target.u(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.zw_1, this$0.vw_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.uw_1.y16(reference);
        this$0.gy_1.z16();
        this$0.gy_1.a17(this$0.zw_1, this$0.uw_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.gy_1.b17(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.g14(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = reader.n16(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.o16_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.u16_1.k();
            while (tmp0_iterator.x()) {
              var element_0 = tmp0_iterator.z();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.uw_1.x16(element_0.zw_1);
            }
          }
          tmp_0 = reader.g14(group);
        } else {
          if (reader.f14(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.g14(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.m16(group)) {
      var size = reader.l13(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.f14(current);
        if (isNode) {
          this$0.gy_1.p13();
          this$0.gy_1.h14(reader.e16(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.gy_1.p13();
          this$0.gy_1.s13();
        }
        current = current + reader.l13(current) | 0;
      }
      tmp = reader.f14(group) ? 1 : runningNodeCount;
    } else if (reader.f14(group)) {
      tmp = 1;
    } else {
      tmp = reader.g14(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.d17_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3005@114008L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3005)');
        }
        $content.f17_1($parameter, $composer_0, 8);
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
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var this_0 = this$0.gy_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = this_0.lz_1;
      var tmp;
      try {
        this_0.lz_1 = newChangeList;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var this_1 = this$0;
          var reader = $reader;
          var savedReader = this_1.ay_1;
          var savedCountOverrides = this_1.gx_1;
          var savedProviderUpdates = this_1.ox_1;
          this_1.gx_1 = null;
          this_1.ox_1 = null;
          try {
            this_1.ay_1 = reader;
            var this_2 = this$0.gy_1;
            var previousImplicitRootStart = this_2.oz_1;
            var tmp_0;
            try {
              this_2.oz_1 = false;
              invokeMovableContentLambda(this$0, $to.t14_1, $to.z14_1, $to.u14_1, true);
              tmp_0 = Unit_instance;
            }finally {
              this_2.oz_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            this_1.ay_1 = savedReader;
            this_1.gx_1 = savedCountOverrides;
            this_1.ox_1 = savedProviderUpdates;
          }
        }
        tmp = tmp_0;
      }finally {
        this_0.lz_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.t14_1, $to.z14_1, $to.u14_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.tw_1 = applier;
    this.uw_1 = parentContext;
    this.vw_1 = slotTable;
    this.ww_1 = abandonSet;
    this.xw_1 = changes;
    this.yw_1 = lateChanges;
    this.zw_1 = composition;
    this.ax_1 = new Stack();
    this.bx_1 = null;
    this.cx_1 = 0;
    this.dx_1 = new IntStack();
    this.ex_1 = 0;
    this.fx_1 = new IntStack();
    this.gx_1 = null;
    this.hx_1 = null;
    this.ix_1 = false;
    this.jx_1 = false;
    this.kx_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.lx_1 = ArrayList_init_$Create$();
    this.mx_1 = new IntStack();
    this.nx_1 = persistentCompositionLocalHashMapOf();
    this.ox_1 = null;
    this.px_1 = false;
    this.qx_1 = new IntStack();
    this.rx_1 = false;
    this.sx_1 = -1;
    this.tx_1 = 0;
    this.ux_1 = 0;
    this.vx_1 = false;
    var tmp_0 = this;
    tmp_0.wx_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.xx_1 = new Stack();
    this.yx_1 = false;
    this.zx_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.vw_1.yy();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.k10();
    tmp_1.ay_1 = this_0;
    this.by_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.by_1.w11();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.k10();
    tmp_2.cy_1 = this_1;
    this.dy_1 = false;
    this.ey_1 = null;
    this.fy_1 = null;
    this.gy_1 = new ComposerChangeListWriter(this, this.xw_1);
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.by_1.yy();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.u12(0);
    }finally {
      reader.k10();
    }
    tmp_3.hy_1 = tmp_4;
    this.iy_1 = new FixupList();
    this.jy_1 = false;
    this.ky_1 = 0;
    this.ly_1 = false;
    this.my_1 = true;
    this.ny_1 = new IntStack();
  }
  protoOf(ComposerImpl).h17 = function () {
    return this.tw_1;
  };
  protoOf(ComposerImpl).i17 = function () {
    return this.tx_1 > 0;
  };
  protoOf(ComposerImpl).j17 = function () {
    return this.uw_1.k17();
  };
  protoOf(ComposerImpl).l17 = function (key) {
    return start(this, key, null, Companion_getInstance_1().k11_1, null);
  };
  protoOf(ComposerImpl).m17 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).n17 = function () {
    return start(this, -127, null, Companion_getInstance_1().k11_1, null);
  };
  protoOf(ComposerImpl).o17 = function () {
    endGroup(this);
    var scope = this.p17();
    if (!(scope == null) ? scope.i13() : false) {
      scope.q17(true);
    }
  };
  protoOf(ComposerImpl).r17 = function () {
    var tmp;
    if (!this.g17() ? true : this.px_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.p17();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r17()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).o14 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().k11_1, null);
  };
  protoOf(ComposerImpl).r14 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).s17 = function () {
    this.ox_1 = null;
  };
  protoOf(ComposerImpl).t17 = function () {
    return this.jy_1;
  };
  protoOf(ComposerImpl).g17 = function () {
    var tmp;
    var tmp_0;
    if ((!this.jy_1 ? !this.rx_1 : false) ? !this.px_1 : false) {
      var tmp0_safe_receiver = this.p17();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u17()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.jx_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).b12 = function () {
    start(this, 125, null, Companion_getInstance_1().l11_1, null);
    this.kx_1 = true;
  };
  protoOf(ComposerImpl).v17 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.jy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.dx_1.w17();
    var groupAnchor = this.cy_1.u12(this.cy_1.f11_1);
    this.ex_1 = this.ex_1 + 1 | 0;
    this.iy_1.x17(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).y17 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.jy_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.ay_1, this);
    this.gy_1.h14(node);
    var tmp;
    if (this.rx_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.gy_1.z17(node);
    }
  };
  protoOf(ComposerImpl).a18 = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).b18 = function (value, block) {
    if (this.jy_1) {
      this.iy_1.d18(value, block);
    } else {
      this.gy_1.c18(value, block);
    }
  };
  protoOf(ComposerImpl).o11 = function () {
    var tmp;
    if (this.jy_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().d12_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.ay_1.z();
      var tmp_0;
      var tmp_1;
      if (this.rx_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().d12_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e18 = function () {
    var tmp;
    if (this.jy_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().d12_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.ay_1.z();
      var tmp_0;
      var tmp_1;
      if (this.rx_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance_0().d12_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.f18_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).ez = function (value) {
    var tmp;
    if (!equals(this.o11(), value)) {
      this.p11(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).g18 = function (value) {
    var tmp;
    if (!(this.o11() === value)) {
      this.p11(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).h18 = function (value) {
    var next = this.o11();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.p11(value);
    return true;
  };
  protoOf(ComposerImpl).p11 = function (value) {
    if (this.jy_1) {
      this.cy_1.k18(value);
    } else {
      var groupSlotIndex = this.ay_1.i18() - 1 | 0;
      this.gy_1.j18(value, groupSlotIndex);
    }
  };
  protoOf(ComposerImpl).l18 = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.jy_1) {
        this.gy_1.m18(value);
      }
      this.ww_1.u(value);
      tmp = new RememberObserverHolder(value);
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.p11(toStore);
  };
  protoOf(ComposerImpl).n18 = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.o18();
    var tmp;
    if (equals(it, Companion_getInstance_0().d12_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, State_0) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.p18_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.t18(value.q18_1, oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.u18(state);
    }
    var providers;
    var invalid;
    if (this.jy_1) {
      providers = parentScope.v18(local, state);
      invalid = false;
      this.dy_1 = true;
    } else {
      var tmp_1 = this.ay_1.q11(this.ay_1.e10_1);
      var oldScope = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
      providers = ((!this.g17() ? true : change) ? value.r18_1 ? true : !contains_0(parentScope, local) : false) ? parentScope.v18(local, state) : oldScope;
      invalid = this.rx_1 ? true : !(oldScope === providers);
    }
    if (invalid ? !this.jy_1 : false) {
      recordProviderUpdate(this, providers);
    }
    this.qx_1.dz(asInt(this.px_1));
    this.px_1 = invalid;
    this.ey_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().k11_1, providers);
  };
  protoOf(ComposerImpl).w18 = function () {
    endGroup(this);
    endGroup(this);
    this.px_1 = asBool(this.qx_1.h13());
    this.ey_1 = null;
  };
  protoOf(ComposerImpl).x18 = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).p17 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.xx_1;
    return (this.tx_1 === 0 ? it.y18() : false) ? it.w17() : null;
  };
  protoOf(ComposerImpl).k15 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.mw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.ay_1.xz_1;
    var location = anchor.z18(slotTable);
    if (this.yx_1 ? location >= this.ay_1.e10_1 : false) {
      insertIfMissing(this.lx_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).c16 = function () {
    if (this.lx_1.o()) {
      skipGroup(this);
    } else {
      var reader = this.ay_1;
      var key = reader.p12();
      var dataKey = reader.r12();
      var aux = reader.z11();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.a19(), null);
      recomposeToGroupEnd(this);
      reader.u13();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).x11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ex_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.p17();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b19();
    }
    if (this.lx_1.o()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).c19 = function (key) {
    start(this, key, null, Companion_getInstance_1().k11_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).d19 = function () {
    var scope = this.xx_1.y18() ? this.xx_1.h13() : null;
    if (scope != null) {
      scope.m14(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.e19(this.ux_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.gy_1.f19(tmp2_safe_receiver, this.zw_1);
    }
    var tmp;
    if ((!(scope == null) ? !scope.h19() : false) ? scope.i13() ? true : this.ix_1 : false) {
      if (scope.mw_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.jy_1) {
          tmp_1 = this.cy_1.u12(this.cy_1.f11_1);
        } else {
          tmp_1 = this.ay_1.u12(this.ay_1.g10_1);
        }
        tmp_0.mw_1 = tmp_1;
      }
      scope.g19(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).i19 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).j19 = function (sourceInformation) {
    if (this.jy_1 ? this.vx_1 : false) {
      this.cy_1.k19(sourceInformation);
    }
  };
  protoOf(ComposerImpl).l19 = function (key, sourceInformation) {
    if (this.jy_1 ? this.vx_1 : false) {
      this.cy_1.m19(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).n19 = function () {
    if (this.jy_1 ? this.vx_1 : false) {
      this.cy_1.o19();
    }
  };
  protoOf(ComposerImpl).p19 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.xw_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).r19 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.yx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.yx_1 = true;
    try {
      block();
    }finally {
      this.yx_1 = false;
    }
  };
  protoOf(ComposerImpl).s19 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.xw_1.o()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.y18()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.lx_1.o();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.jx_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.xw_1.y18();
    }
    return false;
  };
  protoOf(ComposerImpl).t19 = function () {
    return this.p17();
  };
  protoOf(ComposerImpl).o18 = function () {
    return this.e18();
  };
  protoOf(ComposerImpl).u18 = function (value) {
    return this.l18(value);
  };
  protoOf(ComposerImpl).u19 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.v19(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.d12_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.w19();
    while (tmp0_iterator.x()) {
      var slot = tmp0_iterator.z();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.x19(slot);
      }
      if (slot instanceof RememberObserverHolder) {
        rememberManager.y19(slot.f18_1);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.bl();
      }
    }
    _this__u8e3s4.z19();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.t14_1 = content;
    this.u14_1 = parameter;
    this.v14_1 = composition;
    this.w14_1 = slotTable;
    this.x14_1 = anchor;
    this.y14_1 = invalidations;
    this.z14_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.d15_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j19(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.a1a() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1a(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1a();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.d1a_1 = message;
  }
  protoOf(ComposeRuntimeError).p6 = function () {
    return this.d1a_1;
  };
  function RememberObserverHolder(wrapped) {
    this.f18_1 = wrapped;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.h12_1.i();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.h12_1.j(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.h12_1 = keyInfos;
    this.i12_1 = startIndex;
    this.j12_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i12_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k12_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.h12_1.i();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.h12_1.j(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.x12_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.y12_1);
        result.g2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.y12_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.l12_1 = result;
    var tmp_1 = this;
    tmp_1.m12_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).e1a = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.m12_1;
    keyMap$factory();
    return this_0.j2();
  };
  protoOf(Pending).s12 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.e1a(), joinedKey);
  };
  protoOf(Pending).o12 = function (keyInfo) {
    return this.k12_1.u(keyInfo);
  };
  protoOf(Pending).i13 = function () {
    return this.k12_1;
  };
  protoOf(Pending).c13 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.l12_1.e2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.f1a_1;
        if (position === from)
          element.f1a_1 = to;
        else if (to <= position ? position < from : false)
          element.f1a_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.l12_1.e2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.f1a_1;
        if (position_0 === from)
          element_0.f1a_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.f1a_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).o13 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.l12_1.e2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.g1a_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.g1a_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.g1a_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.l12_1.e2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.g1a_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.g1a_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.g1a_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).n12 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.l12_1;
    var key = keyInfo.x12_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.g2(key, value);
  };
  protoOf(Pending).k13 = function (group, newCount) {
    var groupInfo = this.l12_1.p2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.g1a_1;
      var difference = newCount - groupInfo.h1a_1 | 0;
      groupInfo.h1a_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.l12_1.e2().k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.g1a_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.g1a_1 + difference | 0;
            if (newIndex >= 0)
              element.g1a_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).b13 = function (keyInfo) {
    var tmp0_safe_receiver = this.l12_1.p2(keyInfo.x12_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).a13 = function (keyInfo) {
    var tmp0_safe_receiver = this.l12_1.p2(keyInfo.x12_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).m13 = function (keyInfo) {
    var tmp0_safe_receiver = this.l12_1.p2(keyInfo.x12_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1a_1;
    return tmp1_elvis_lhs == null ? keyInfo.y12_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.k11_1 = _GroupKind___init__impl__iwqg06(0);
    this.l11_1 = _GroupKind___init__impl__iwqg06(1);
    this.m11_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function ReusableRememberObserver() {
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.p18_1 = compositionLocal;
    this.q18_1 = value;
    this.r18_1 = canOverride;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var validation = _this__u8e3s4.j(index);
      if (validation.hw_1 < end) {
        _this__u8e3s4.g1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.i()) {
      var firstInvalidation = _this__u8e3s4.j(index);
      if (firstInvalidation.hw_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.g1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.t11(a) === b)
      return b;
    if (_this__u8e3s4.t11(b) === a)
      return a;
    if (_this__u8e3s4.t11(a) === _this__u8e3s4.t11(b))
      return _this__u8e3s4.t11(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.t11(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.t11(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.t11(currentA);
      currentB = _this__u8e3s4.t11(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.i1a(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.q1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.j(index).iw_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.j(index).iw_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.i1a(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.yy();
    var tmp;
    try {
      var index = _this__u8e3s4.a15(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.k10();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.i()) {
      var invalidation = _this__u8e3s4.j(index);
      if (invalidation.hw_1 < end) {
        result.u(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.f1a_1 = slotIndex;
    this.g1a_1 = nodeIndex;
    this.h1a_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.p2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.w12_1 == null) ? new JoinedKey(_this__u8e3s4.v12_1, _this__u8e3s4.w12_1) : _this__u8e3s4.v12_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.j(mid);
      var cmp = compareTo(midVal.hw_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.t11(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.v(value);
      var tmp_0;
      if (tmp0_safe_receiver.o()) {
        _this__u8e3s4.h2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.l19(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.n19();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.t17() ? true : !equals($this$with.o18(), value)) {
      $this$with.u18(value);
      _Updater___get_composer__impl__9ty7av($this).b18(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.j1a_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).k1a = function (a, b) {
    return this.j1a_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.k1a(a, b);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.f14(group)) {
      result.u($reader.e16(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.l13(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.l13(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.hw_1, i2.hw_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.e1a();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.c1b_1.i17();
  }
  function composeInitial($this, content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.f1b_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this.g1b_1 = content;
    $this.l1a_1.h1b($this, $this.g1b_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.n1a_1.j1b(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.n1a_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.n1a_1.j1b(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.n1a_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.r1a_1.k1b_1.p2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.pu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.ou_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.w1a_1.n1b(value, scope) ? !scope.m1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
                        if (scope.l1b() ? !forgetConditionalScopes : false) {
                          $this.s1a_1.u(scope);
                        } else {
                          if (set == null)
                            set = HashSet_init_$Create$();
                          var tmp0_safe_receiver = set;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.u(scope);
                        }
                      }
                    }
                    slot = slot.fb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.w1a_1.n1b(value, scope_0) ? !scope_0.m1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
          if (scope_0.l1b() ? !forgetConditionalScopes : false) {
            $this.s1a_1.u(scope_0);
          } else {
            if (set == null)
              set = HashSet_init_$Create$();
            var tmp0_safe_receiver_0 = set;
            if (tmp0_safe_receiver_0 == null)
              null;
            else
              tmp0_safe_receiver_0.u(scope_0);
          }
        }
      }
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.m15_1;
      var inductionVariable = 0;
      var last = values.l15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.m1b(null);
          } else {
            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value_0 = $this.t1a_1.k1b_1.p2(value);
            if (value_0 != null) {
              if (value_0 instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.pu_1;
                $l$block: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.ou_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 <= lastIndex)
                    do {
                      var i_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var slot = m[i_0];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                        var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < bitCount)
                          do {
                            var j = inductionVariable_1;
                            inductionVariable_1 = inductionVariable_1 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                              var index = (i_0 << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                              var tmp_0 = k[index];
                              var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it, forgetConditionalScopes);
                            }
                            slot = slot.fb(8);
                          }
                           while (inductionVariable_1 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block;
                        }
                      }
                    }
                     while (!(i_0 === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_0, forgetConditionalScopes);
              }
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.m1b(null);
        } else {
          invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.t1a_1.k1b_1.p2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_2 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_2.pu_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_2.ou_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_2 = 0;
                if (inductionVariable_2 <= lastIndex_0)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var slot_0 = m_0[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_3 = slot_0;
                    if (!this_3.hb(this_3.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                      var bitCount_0 = 8 - (~(i_1 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                            var index_0 = (i_1 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var tmp_1 = k_0[index_0];
                            var it_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                            invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_1, forgetConditionalScopes);
                          }
                          slot_0 = slot_0.fb(8);
                        }
                         while (inductionVariable_3 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_0));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              invalidated._v = addPendingInvalidationsLocked(invalidated._v, $this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.s1a_1.o();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_4 = $this.r1a_1.k1b_1;
      $l$block_2: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_1 = this_4.au_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_4 = 0;
        if (inductionVariable_4 <= lastIndex_1)
          do {
            var i_2 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var slot_1 = m_1[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_5 = slot_1;
            if (!this_5.hb(this_5.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
              var bitCount_1 = 8 - (~(i_2 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_5 = 0;
              if (inductionVariable_5 < bitCount_1)
                do {
                  var j_1 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                    var index_1 = (i_2 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var tmp_3 = this_4.bu_1[index_1];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_4.cu_1[index_1];
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.pu_1;
                      $l$block_1: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_2 = set.ou_1;
                        var lastIndex_2 = m_2.length - 2 | 0;
                        var inductionVariable_6 = 0;
                        if (inductionVariable_6 <= lastIndex_2)
                          do {
                            var i_3 = inductionVariable_6;
                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                            var slot_2 = m_2[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_6 = slot_2;
                            if (!this_6.hb(this_6.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                              var bitCount_2 = 8 - (~(i_3 - lastIndex_2 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_7 = 0;
                              if (inductionVariable_7 < bitCount_2)
                                do {
                                  var j_2 = inductionVariable_7;
                                  inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_2.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                                    var index_2 = (i_3 << 3) + j_2 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var tmp_6 = elements[index_2];
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    var tmp_7;
                                    if ($this.s1a_1.m(scope)) {
                                      tmp_7 = true;
                                    } else {
                                      var tmp0_safe_receiver = invalidated._v;
                                      var tmp_8;
                                      if (tmp0_safe_receiver == null) {
                                        tmp_8 = null;
                                      } else {
                                        // Inline function 'kotlin.let' call
                                        // Inline function 'kotlin.contracts.contract' call
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        tmp_8 = tmp0_safe_receiver.m(scope);
                                      }
                                      tmp_7 = tmp_8 === true;
                                    }
                                    if (tmp_7) {
                                      set.av(index_2);
                                    }
                                  }
                                  slot_2 = slot_2.fb(8);
                                }
                                 while (inductionVariable_7 < bitCount_2);
                              if (!(bitCount_2 === 8)) {
                                break $l$block_1;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_2));
                      }
                      tmp_5 = set.o();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      var tmp_9;
                      if ($this.s1a_1.m(scope_0)) {
                        tmp_9 = true;
                      } else {
                        var tmp0_safe_receiver_0 = invalidated._v;
                        var tmp_10;
                        if (tmp0_safe_receiver_0 == null) {
                          tmp_10 = null;
                        } else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          tmp_10 = tmp0_safe_receiver_0.m(scope_0);
                        }
                        tmp_9 = tmp_10 === true;
                      }
                      tmp_5 = tmp_9;
                    }
                    if (tmp_5) {
                      this_4.nu(index_1);
                    }
                  }
                  slot_1 = slot_1.fb(8);
                }
                 while (inductionVariable_5 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_2;
              }
            }
          }
           while (!(i_2 === lastIndex_1));
      }
      $this.s1a_1.b1();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_1 = invalidated._v;
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
        // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
        var this_7 = $this.r1a_1.k1b_1;
        $l$block_4: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m_3 = this_7.au_1;
          var lastIndex_3 = m_3.length - 2 | 0;
          var inductionVariable_8 = 0;
          if (inductionVariable_8 <= lastIndex_3)
            do {
              var i_4 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var slot_3 = m_3[i_4];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_8 = slot_3;
              if (!this_8.hb(this_8.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount_3 = 8 - (~(i_4 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                var inductionVariable_9 = 0;
                if (inductionVariable_9 < bitCount_3)
                  do {
                    var j_3 = inductionVariable_9;
                    inductionVariable_9 = inductionVariable_9 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot_3.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                      var index_3 = (i_4 << 3) + j_3 | 0;
                      // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                      var tmp_11 = this_7.bu_1[index_3];
                      (tmp_11 == null ? true : !(tmp_11 == null)) || THROW_CCE();
                      var tmp_12 = this_7.cu_1[index_3];
                      var value_3 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
                      var tmp_13;
                      if (value_3 instanceof MutableScatterSet) {
                        var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                        // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                        var elements_0 = set_0.pu_1;
                        $l$block_3: {
                          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                          // Inline function 'kotlin.contracts.contract' call
                          var m_4 = set_0.ou_1;
                          var lastIndex_4 = m_4.length - 2 | 0;
                          var inductionVariable_10 = 0;
                          if (inductionVariable_10 <= lastIndex_4)
                            do {
                              var i_5 = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var slot_4 = m_4[i_5];
                              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                              var this_9 = slot_4;
                              if (!this_9.hb(this_9.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                var bitCount_4 = 8 - (~(i_5 - lastIndex_4 | 0) >>> 31 | 0) | 0;
                                var inductionVariable_11 = 0;
                                if (inductionVariable_11 < bitCount_4)
                                  do {
                                    var j_4 = inductionVariable_11;
                                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                                    // Inline function 'androidx.collection.isFull' call
                                    if (slot_4.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                                      var index_4 = (i_5 << 3) + j_4 | 0;
                                      // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                      var tmp_14 = elements_0[index_4];
                                      var scope_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                                      if (tmp0_safe_receiver_1.m(scope_1)) {
                                        set_0.av(index_4);
                                      }
                                    }
                                    slot_4 = slot_4.fb(8);
                                  }
                                   while (inductionVariable_11 < bitCount_4);
                                if (!(bitCount_4 === 8)) {
                                  break $l$block_3;
                                }
                              }
                            }
                             while (!(i_5 === lastIndex_4));
                        }
                        tmp_13 = set_0.o();
                      } else {
                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                        var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                        tmp_13 = tmp0_safe_receiver_1.m(scope_2);
                      }
                      if (tmp_13) {
                        this_7.nu(index_3);
                      }
                    }
                    slot_3 = slot_3.fb(8);
                  }
                   while (inductionVariable_9 < bitCount_3);
                if (!(bitCount_3 === 8)) {
                  break $l$block_4;
                }
              }
            }
             while (!(i_4 === lastIndex_3));
        }
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.t1a_1.k1b_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.au_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.bu_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.cu_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.pu_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.ou_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.hb(this_2.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.r1a_1.o1b(derivedState)) {
                                    set.av(index_0);
                                  }
                                }
                                slot_0 = slot_0.fb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.o();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.r1a_1.o1b(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.nu(index);
                  }
                }
                slot = slot.fb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.s1a_1.o()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.s1a_1.k();
      while (iter.x()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.z().l1b()) {
          iter.y();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.r1a_1.k1b_1.p2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.pu_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.ou_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var tmp = k[index];
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.m1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.w1a_1.p1b(value, scope);
                      }
                    }
                    slot = slot.fb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.m1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.w1a_1.p1b(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.p1a_1);
    try {
      if (changes.o())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.o15(sectionName);
        try {
          $this.m1a_1.cv();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.q1a_1.w11();
          var tmp;
          try {
            changes.q1b($this.m1a_1, writer, manager);
            tmp = Unit_instance;
          }finally {
            writer.k10();
          }
          $this.m1a_1.dv();
          break $l$block;
        }finally {
          Trace_instance.d16(token);
        }
      }
      manager.w1b();
      manager.x1b();
      if ($this.y1a_1) {
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.o15(sectionName_0);
          try {
            $this.y1a_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.r1a_1.k1b_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.au_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var tmp_0 = this_0.bu_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.cu_1[index];
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.pu_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.ou_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.hb(this_2.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).y1b()) {
                                            set.av(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.fb(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.o();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).y1b();
                          }
                          if (tmp_2) {
                            this_0.nu(index);
                          }
                        }
                        slot = slot.fb(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.d16(token_0);
          }
        }
      }
    }finally {
      if ($this.v1a_1.o()) {
        manager.z1b();
      }
    }
  }
  function abandonChanges($this) {
    $this.n1a_1.a1c(null);
    $this.u1a_1.b1();
    $this.v1a_1.b1();
    $this.p1a_1.b1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.b1c() ? $this.c1b_1.k15(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.o1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.z1a_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.q1a_1.c1c($this.a1b_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.x1a_1.d1c(scope, null);
      } else {
        addValue($this.x1a_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.l1a_1.e1c($this);
    return $this.b1c() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.x1a_1;
    $this.x1a_1 = new IdentityArrayMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.b1b_1;
    var tmp;
    if (holder.h1c_1) {
      tmp = holder.g1c_1;
    } else {
      var parentHolder = $this.l1a_1.f1c();
      var parentObserver = parentHolder == null ? null : parentHolder.g1c_1;
      if (!equals(parentObserver, holder.g1c_1)) {
        holder.g1c_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.r1b_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s1b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.t1b_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.u1b_1 = ArrayList_init_$Create$();
    this.v1b_1 = null;
  }
  protoOf(RememberEventDispatcher).i1c = function (instance) {
    this.s1b_1.u(instance);
  };
  protoOf(RememberEventDispatcher).y19 = function (instance) {
    this.t1b_1.u(instance);
  };
  protoOf(RememberEventDispatcher).x19 = function (instance) {
    var tmp0_elvis_lhs = this.v1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.v1b_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.zu(instance);
    // Inline function 'kotlin.collections.plusAssign' call
    this.t1b_1.u(instance);
  };
  protoOf(RememberEventDispatcher).w1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.t1b_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:onForgotten';
        var token = Trace_instance.o15(sectionName);
        try {
          var releasing = this.v1b_1;
          var inductionVariable = this.t1b_1.i() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.t1b_1.j(i);
              // Inline function 'kotlin.collections.remove' call
              var this_0 = this.r1b_1;
              (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).v(instance);
              if (isInterface(instance, RememberObserver)) {
                instance.j1c();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) ? releasing.m(instance) : false) {
                  instance.fw();
                } else {
                  instance.ew();
                }
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.d16(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.s1b_1.o()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onRemembered';
        var token_0 = Trace_instance.o15(sectionName_0);
        try {
          var this_1 = this.s1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_1.i() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_1.j(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.r1b_1.v(item);
              item.k1c();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.d16(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).x1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.u1b_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.o15(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.u1b_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.j(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.u1b_1.b1();
          break $l$block;
        }finally {
          Trace_instance.d16(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).z1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1b_1.o()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.o15(sectionName);
        try {
          var iterator = this.r1b_1.k();
          while (iterator.x()) {
            var instance = iterator.z();
            iterator.y();
            instance.l1c();
          }
          break $l$block;
        }finally {
          Trace_instance.d16(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.l1a_1 = parent;
    this.m1a_1 = applier;
    this.n1a_1 = new AtomicReference(null);
    this.o1a_1 = createSynchronizedObject();
    this.p1a_1 = HashSet_init_$Create$();
    this.q1a_1 = new SlotTable();
    this.r1a_1 = new ScopeMap();
    this.s1a_1 = HashSet_init_$Create$();
    this.t1a_1 = new ScopeMap();
    this.u1a_1 = new ChangeList();
    this.v1a_1 = new ChangeList();
    this.w1a_1 = new ScopeMap();
    this.x1a_1 = new IdentityArrayMap();
    this.y1a_1 = false;
    this.z1a_1 = null;
    this.a1b_1 = 0;
    this.b1b_1 = new CompositionObserverHolder();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.m1a_1, this.l1a_1, this.q1a_1, this.p1a_1, this.u1a_1, this.v1a_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.l1a_1.m1c(this_0);
    tmp.c1b_1 = this_0;
    this.d1b_1 = recomposeContext;
    var tmp_0 = this;
    var tmp_1 = this.l1a_1;
    tmp_0.e1b_1 = tmp_1 instanceof Recomposer;
    this.f1b_1 = false;
    this.g1b_1 = ComposableSingletons$CompositionKt_getInstance().n1c_1;
  }
  protoOf(CompositionImpl).b1c = function () {
    return this.c1b_1.yx_1;
  };
  protoOf(CompositionImpl).p1c = function () {
    return this.f1b_1;
  };
  protoOf(CompositionImpl).q1c = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).r1c = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.o1a_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.s1c();
            observer_0.t1c(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          this.c1b_1.p19(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.u1c(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1a_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.p1a_1.o();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).v1c = function (values) {
    $l$loop: while (true) {
      var old = this.n1a_1.rl();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.n1a_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.n1a_1.w1c(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.o1a_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).x1c = function (values) {
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.m15_1;
      var inductionVariable = 0;
      var last = values.l15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (this.r1a_1.o1b(value) ? true : this.t1a_1.o1b(value))
            return true;
        }
         while (inductionVariable < last);
      return false;
    }
    var tmp0_iterator = values.k();
    while (tmp0_iterator.x()) {
      var value_0 = tmp0_iterator.z();
      if (this.r1a_1.o1b(value_0) ? true : this.t1a_1.o1b(value_0))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).r19 = function (block) {
    return this.c1b_1.r19(block);
  };
  protoOf(CompositionImpl).y1c = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.c1b_1.p17();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.v19(true);
        var alreadyRead = tmp0_safe_receiver.z1c(value);
        var tmp;
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.b1d(tmp$ret$0);
          }
          this.r1a_1.p1b(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.t1a_1.c1d(value);
            var this_0 = value.d1d().e1d();
            var k = this_0.nt_1;
            var tmp$ret$4;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.mt_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var tmp_1 = k[index];
                          var dependency = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.b1d(tmp$ret$3);
                          }
                          this.t1a_1.p1b(dependency, value);
                        }
                        slot = slot.fb(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      tmp$ret$4 = Unit_instance;
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp_0 = tmp$ret$4;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).f1d = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    invalidateScopeOfLocked(this, value);
    var value_0 = this.t1a_1.k1b_1.p2(value);
    var tmp;
    if (value_0 == null) {
      tmp = Unit_instance;
    } else {
      if (value_0 instanceof MutableScatterSet) {
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.pu_1;
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.ou_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var tmp_0 = k[index];
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.fb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$2 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$2;
      } else {
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
        tmp = Unit_instance;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).g1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.s1c();
            observer_0.t1c(this, isInterface(tmp_2, Map) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.c1b_1.s19(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.u1c(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.x1a_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.p1a_1.o();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).h1d = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.wd_1.v14_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.c1b_1.i19(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).i1d = function (state) {
    var manager = new RememberEventDispatcher(this.p1a_1);
    var slotTable = state.d15_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.w11();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.k10();
    }
    manager.w1b();
  };
  protoOf(CompositionImpl).j1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.u1a_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).k1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        if (this.v1a_1.y18()) {
          applyChangesInLocked(this, this.v1a_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s17 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.c1b_1.s17();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.p1a_1.o()) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.p1a_1.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.p1a_1)).z1b();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.o1a_1;
    var indexedObject = this.q1a_1.qy_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.m1d();
      }
    }
  };
  protoOf(CompositionImpl).n15 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.z1a_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.a1b_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.z1a_1 = null;
        this.a1b_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).n1d = function (scope, instance) {
    if (scope.o1d()) {
      scope.g19(true);
    }
    var anchor = scope.mw_1;
    if (anchor == null ? true : !anchor.y1b())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.q1a_1.p1d(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.o1a_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.z1a_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.q1d())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).r1d = function (scope) {
    this.y1a_1 = true;
  };
  protoOf(CompositionImpl).s1d = function (instance, scope) {
    this.r1a_1.n1b(instance, scope);
  };
  protoOf(CompositionImpl).t1d = function (state) {
    if (!this.r1a_1.o1b(state)) {
      this.t1a_1.c1d(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.g1c_1 = observer;
    this.h1c_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:607)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.e17(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.g17()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:739)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.x11();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.n1c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.o1c_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.v1d(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.u1d(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i1a(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.i1a(value);
      _this__u8e3s4.d1c(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).f1c = function () {
    return null;
  };
  protoOf(CompositionContext).hz = function (table) {
  };
  protoOf(CompositionContext).m1c = function (composer) {
  };
  protoOf(CompositionContext).az = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).zy = function () {
  };
  protoOf(CompositionContext).jz = function () {
  };
  protoOf(CompositionContext).c15 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.s18_1 = new LazyValueHolder(defaultFactory);
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).y1d = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).t18 = function (value, previous) {
    return (!(previous == null) ? equals(previous.j2(), value) : false) ? previous : new StaticValueHolder(value);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c19(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)247@10835L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:245)');
    }
    $composer_0.n18(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.w18();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.c1e_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).t18 = function (value, previous) {
    var tmp;
    var tmp_0;
    if (!(previous == null)) {
      tmp_0 = !(previous == null) ? isInterface(previous, MutableState) : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      previous.eq(value);
      tmp = previous;
    } else {
      tmp = mutableStateOf(value, this.c1e_1);
    }
    return tmp;
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.s18_1.j2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.m2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.p2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().rl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().h1e(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l17(-1371986847);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    $composer_0.l17(592131181);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.ez(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.o18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().d12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.m17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l17(-1307627122);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.l17(-568225417);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.ez(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.o18();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance_0().d12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.m17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l17(1179185413);
    sourceInformation($composer_0, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.j17();
    $composer_0.l17(1036442561);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.ez(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.o18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().d12_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.m17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  function DisposableEffectImpl(effect) {
    this.i1e_1 = effect;
    this.j1e_1 = null;
  }
  protoOf(DisposableEffectImpl).k1c = function () {
    this.j1e_1 = this.i1e_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).j1c = function () {
    var tmp0_safe_receiver = this.j1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hk();
    }
    this.j1e_1 = null;
  };
  protoOf(DisposableEffectImpl).l1c = function () {
  };
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.k1e_1 = task;
    this.l1e_1 = CoroutineScope(parentCoroutineContext);
    this.m1e_1 = null;
  }
  protoOf(LaunchedEffectImpl).k1c = function () {
    var tmp0_safe_receiver = this.m1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.m1e_1 = launch(this.l1e_1, VOID, VOID, this.k1e_1);
  };
  protoOf(LaunchedEffectImpl).j1c = function () {
    var tmp0_safe_receiver = this.m1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.th(new LeftCompositionCancellationException());
    }
    this.m1e_1 = null;
  };
  protoOf(LaunchedEffectImpl).l1c = function () {
    var tmp0_safe_receiver = this.m1e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.th(new LeftCompositionCancellationException());
    }
    this.m1e_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.l17(1429097729);
    sourceInformation($composer_0, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    $composer_0.l17(592133067);
    sourceInformation($composer_0, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.ez(key1) | $composer_0.ez(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.o18();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().d12_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.u18(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_0.m17();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.m17();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.p9_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.n1e_1 = left;
    this.o1e_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.n1e_1), 31) + hashCodeOf(this, this.o1e_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.n1e_1) + ', right=' + toString_0(this.o1e_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.n1e_1, tmp0_other_with_cast.n1e_1))
      return false;
    if (!equals(this.o1e_1, tmp0_other_with_cast.o1e_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.zb(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.p1e_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.p1e_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.p1e_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.p1e_1 === tmp0_other_with_cast.p1e_1))
      return false;
    return true;
  };
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.kw_1 = $this.kw_1 | 32;
    } else {
      $this.kw_1 = $this.kw_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.kw_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.kw_1 = $this.kw_1 | 16;
    } else {
      $this.kw_1 = $this.kw_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).q1e = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.o()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.j(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.r1e(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.s1e(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).t1e = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.o()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.p1d(item)) {
              var tmp_1 = slots.u1e(slots.a15(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.pw_1 === $token ? $instances.equals(this$0.qw_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.collection.MutableObjectIntMap.removeIf' call
        var this_0 = $instances;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.mt_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = this_0.nt_1[index];
                      var instance = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'kotlin.also' call
                      var this_2 = !(this_0.ot_1[index] === $token);
                      // Inline function 'kotlin.contracts.contract' call
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      if (this_2) {
                        composition.s1d(instance, this$0);
                        var tmp0_safe_receiver = isInterface(instance, DerivedState) ? instance : null;
                        if (tmp0_safe_receiver == null)
                          null;
                        else {
                          // Inline function 'kotlin.let' call
                          // Inline function 'kotlin.contracts.contract' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          composition.t1d(tmp0_safe_receiver);
                          var tmp0_safe_receiver_0 = this$0.rw_1;
                          var tmp_2;
                          if (tmp0_safe_receiver_0 == null) {
                            tmp_2 = null;
                          } else {
                            // Inline function 'kotlin.let' call
                            // Inline function 'kotlin.contracts.contract' call
                            tmp0_safe_receiver_0.h2(tmp0_safe_receiver);
                            var tmp_3;
                            if (tmp0_safe_receiver_0.i() === 0) {
                              this$0.rw_1 = null;
                              tmp_3 = Unit_instance;
                            }
                            tmp_2 = Unit_instance;
                          }
                        }
                      }
                      if (this_2) {
                        this_0.yt(index);
                      }
                    }
                    slot = slot.fb(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        var tmp_4;
        if ($instances.i() === 0) {
          this$0.qw_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.kw_1 = 0;
    this.lw_1 = owner;
    this.mw_1 = null;
    this.nw_1 = null;
    this.ow_1 = null;
    this.pw_1 = 0;
    this.qw_1 = null;
    this.rw_1 = null;
  }
  protoOf(RecomposeScopeImpl).y1b = function () {
    var tmp;
    if (!(this.lw_1 == null)) {
      var tmp0_safe_receiver = this.mw_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1b();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).q1d = function () {
    return !(this.nw_1 == null);
  };
  protoOf(RecomposeScopeImpl).v19 = function (value) {
    if (value) {
      this.kw_1 = this.kw_1 | 1;
    } else {
      this.kw_1 = this.kw_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).i13 = function () {
    return !((this.kw_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).q17 = function (value) {
    if (value) {
      this.kw_1 = this.kw_1 | 2;
    } else {
      this.kw_1 = this.kw_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).o1d = function () {
    return !((this.kw_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).g19 = function (value) {
    if (value) {
      this.kw_1 = this.kw_1 | 4;
    } else {
      this.kw_1 = this.kw_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).r17 = function () {
    return !((this.kw_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).m14 = function (value) {
    if (value) {
      this.kw_1 = this.kw_1 | 8;
    } else {
      this.kw_1 = this.kw_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).u17 = function () {
    return !((this.kw_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).c14 = function (composer) {
    var block = this.nw_1;
    var observer = this.ow_1;
    if (!(observer == null) ? !(block == null) : false) {
      observer.v1e(this);
      try {
        block(composer, 1);
      }finally {
        observer.w1e(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).m1b = function (value) {
    var tmp0_safe_receiver = this.lw_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1d(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).bl = function () {
    var tmp0_safe_receiver = this.lw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1d(this);
    }
    this.lw_1 = null;
    this.qw_1 = null;
    this.rw_1 = null;
    var tmp1_safe_receiver = this.ow_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.x1e(this);
    }
  };
  protoOf(RecomposeScopeImpl).s1e = function (owner) {
    this.lw_1 = owner;
  };
  protoOf(RecomposeScopeImpl).m1d = function () {
    var tmp0_safe_receiver = this.lw_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.n1d(this, null);
  };
  protoOf(RecomposeScopeImpl).a1e = function (block) {
    this.nw_1 = block;
  };
  protoOf(RecomposeScopeImpl).l14 = function (value) {
    if (value) {
      this.kw_1 = this.kw_1 | 64;
    } else {
      this.kw_1 = this.kw_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).k14 = function () {
    return !((this.kw_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).h19 = function () {
    return !((this.kw_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).n14 = function (token) {
    this.pw_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).b19 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).z1c = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.qw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.qw_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.xt(instance, this.pw_1, -1);
    if (token === this.pw_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.rw_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.rw_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.lu(instance, instance.d1d().y1e());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).l1b = function () {
    return !(this.rw_1 == null);
  };
  protoOf(RecomposeScopeImpl).sw = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.rw_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.y18()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.o();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.e1e();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.z1e(element.d1d().y1e(), trackedDependencies.p2(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).b14 = function () {
    var tmp0_safe_receiver = this.lw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.qw_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var k = tmp0_safe_receiver_0.nt_1;
          var v = tmp0_safe_receiver_0.ot_1;
          var tmp$ret$2;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.mt_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.hb(this_0.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_1 = k[index];
                        var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        v[index];
                        tmp0_safe_receiver.y1c(value);
                      }
                      slot = slot.fb(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$2 = Unit_instance;
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$2;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).e19 = function (token) {
    var tmp0_safe_receiver = this.qw_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.h19()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.nt_1;
          var v = tmp0_safe_receiver.ot_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.mt_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.hb(this_0.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.fb(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new SynchronizedObject();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.a1f_1.j2();
      var new_0 = old.u(info);
      if (old === new_0 ? true : $this.a1f_1.fq(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.a1f_1.j2();
      var new_0 = old.v(info);
      if (old === new_0 ? true : $this.a1f_1.fq(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    toRecompose.b1();
    toInsert.b1();
    toApply.b1();
    toLateApply.b1();
    toComplete.b1();
    modifiedValues.b1();
    alreadyComposed.b1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.e1f_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.m1f_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.j(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.u(item);
      }
       while (inductionVariable <= last);
    this$0.m1f_1.b1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.o15(sectionName);
          try {
            this$0.d1f_1.bw(frameTime);
            Companion_instance_12.a1g();
            break $l$block;
          }finally {
            Trace_instance.d16(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.o15(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.e1f_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.k1f_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.i() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.j(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.u(item);
            }
             while (inductionVariable <= last);
          this$0.k1f_1.b1();
          $modifiedValues.b1();
          $alreadyComposed.b1();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.o()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.o();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.j(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $alreadyComposed.i1a(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.u(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.b1();
            }
            if ($modifiedValues.y18()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.e1f_1;
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.i() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.j(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.b1g(item_1) ? item_1.x1c($modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.u(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.o()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.o()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, $modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.o()) {
            var tmp0_this = this$0;
            tmp0_this.c1f_1 = tmp0_this.c1f_1.bb();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.i() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.j(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.u(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.i() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.j(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.j1d();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.o()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.k();
              while (tmp0_iterator.x()) {
                var element = tmp0_iterator.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.k1d();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.o()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.k();
              while (tmp0_iterator_0.x()) {
                var element_0 = tmp0_iterator_0.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.s17();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.b1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.e1f_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.c1g();
          $alreadyComposed.b1();
          $modifiedValues.b1();
          this$0.q1f_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.d16(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.e1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.w1f_1.j2().q9(State_Idle_getInstance()) >= 0) {
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        if (changed instanceof IdentityArraySet) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          // Inline function 'kotlin.contracts.contract' call
          var values = changed.m15_1;
          var inductionVariable = 0;
          var last = changed.l15_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              $l$block: {
                // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                var tmp_0 = values[i];
                var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                var tmp_1;
                if (it instanceof StateObjectImpl) {
                  // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                  var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
                  tmp_1 = !it.d1g(tmp$ret$0);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  break $l$block;
                }
                this$0.j1f_1.i1a(it);
              }
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = changed.k();
          while (tmp0_iterator.x()) {
            var element = tmp0_iterator.z();
            $l$block_0: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                tmp_2 = !element.d1g(tmp$ret$2);
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                break $l$block_0;
              }
              this$0.j1f_1.i1a(element);
            }
          }
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.m6(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.m1g_1 = $block;
    this.n1g_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).p1g = function ($this$coroutineScope, $completion) {
    var tmp = this.q1g($this$coroutineScope, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).qc = function (p1, $completion) {
    return this.p1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 2;
            this.sb_1 = 1;
            suspendResult = this.m1g_1(this.o1g_1, this.n1g_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).q1g = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.m1g_1, this.n1g_1, completion);
    i.o1g_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.p1g($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.i1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.h1f_1;
      var newCache = compositions.o() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.i1f_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.v1f_1 ? $this.d1f_1.aw() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.w1f_1.j2().q9(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.j1f_1 = new IdentityArraySet();
      $this.k1f_1.b1();
      $this.l1f_1.b1();
      $this.m1f_1.b1();
      $this.p1f_1 = null;
      var tmp0_safe_receiver = $this.r1f_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.yi();
      $this.r1f_1 = null;
      $this.u1f_1 = null;
      return null;
    }
    var tmp;
    if (!($this.u1f_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.f1f_1 == null) {
        $this.j1f_1 = new IdentityArraySet();
        $this.k1f_1.b1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.k1f_1.o()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.j1f_1.y18();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.l1f_1.o();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.m1f_1.o();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.s1f_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.w1f_1.eq(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.r1f_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.r1f_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.t1f_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.x1f_1.tl().k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.og()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.r1g_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.s1g_1 = recoverable;
    this.t1g_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.j1f_1.o())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.j1f_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.j1f_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.j(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.v1c(changes);
            if ($this.w1f_1.j2().q9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.j1f_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.e1f_1;
        $this.j1f_1.u1g(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.g1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.w1f_1.j2().q9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.f1f_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.f1f_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().b1f_1.rl()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.e1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.l1f_1.b1();
      $this.k1f_1.b1();
      $this.j1f_1 = new IdentityArraySet();
      $this.m1f_1.b1();
      $this.n1f_1.b1();
      $this.o1f_1.b1();
      $this.u1f_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.p1f_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.p1f_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.u(failedInitialComposition);
        }
        removeKnownCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.e1f_1;
      var errorState = $this.u1f_1;
      var tmp_1;
      if (errorState == null) {
        $this.u1f_1 = new RecomposerErrorState(false, e);
        tmp_1 = Unit_instance;
      } else {
        throw errorState.t1g_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.h1f_1.b1();
    $this.i1f_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.h1f_1.v(composition);
    $this.i1f_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.h1f_1.u(composition);
    $this.i1f_1 = null;
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.j1f_1.y18()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.k1f_1.o();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.l6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.d1f_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.m1f_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.v14_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.o()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.b1c() ? true : composition.p1c()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.q1f_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.e1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.f1h();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.y18()) === true) {
              composition.r19(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.g1d();
            break $l$block;
          }finally {
            snapshot.g1h(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.i());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.j(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.v14_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.p2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.g2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.u(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.f2().k();
    while (tmp0_iterator.x()) {
      var tmp1_loop_parameter = tmp0_iterator.z();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.i2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.j2();
      runtimeCheck(!composition.b1c());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.e1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.f1h();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.e1f_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.i());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.i() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.j(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.n1f_1, item_0.t14_1));
                  target.u(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.h1d(pairs);
              break $l$block;
            }finally {
              snapshot.g1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.d2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.n1f_1.o()) {
      var references = flatten($this.n1f_1.e2());
      $this.n1f_1.b1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.i());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.o1f_1.p2(item));
          target.u(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.o1f_1.b1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.i() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.j(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.yd();
        var state = item_0.zd();
        if (!(state == null)) {
          reference.v14_1.i1d(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.u1h();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.hk();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.k1f_1.o()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.a1f_1 = MutableStateFlow(persistentSetOf());
    this.b1f_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.e1f_1;
    var iterator = this$0.m1f_1.k();
    while (iterator.x()) {
      var value = iterator.z();
      if (equals(value.v14_1, $composition)) {
        toInsert.u(value);
        iterator.y();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.e1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.w1f_1.j2().q9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.g1f_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.m6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.e1f_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.g1f_1 = tmp_0;
      this$0.w1f_1.eq(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.e1f_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.f1f_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.w1f_1.eq(State_ShuttingDown_getInstance());
        if (!this$0.t1f_1) {
          runnerJob.th(cancellation);
        } else if (!(this$0.r1f_1 == null)) {
          continuationToResume = this$0.r1f_1;
        }
        this$0.r1f_1 = null;
        tmp = runnerJob.oh(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.g1f_1 = cancellation;
        this$0.w1f_1.eq(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.m6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.d1i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).n1i = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.o1i($this$recompositionRunner, parentFrameClock, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).p1i = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.n1i(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 6;
            var tmp_0 = this;
            tmp_0.g1i_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.h1i_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.i1i_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.j1i_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.k1i_1 = LinkedHashSet_init_$Create$();
            this.l1i_1 = new IdentityArraySet();
            this.m1i_1 = new IdentityArraySet();
            this.sb_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.d1i_1)) {
              this.sb_1 = 5;
              continue $sm;
            }

            this.sb_1 = 2;
            suspendResult = awaitWorkAvailable(this.d1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.d1i_1)) {
              this.sb_1 = 1;
              continue $sm;
            } else {
              this.sb_1 = 3;
              continue $sm;
            }

          case 3:
            this.sb_1 = 4;
            suspendResult = this.f1i_1.cw(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.d1i_1, this.g1i_1, this.l1i_1, this.m1i_1, this.h1i_1, this.i1i_1, this.j1i_1, this.k1i_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.d1i_1);
            this.sb_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 6) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).o1i = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.d1i_1, completion);
    i.e1i_1 = $this$recompositionRunner;
    i.f1i_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.n1i($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.y1i_1 = this$0;
    this.z1i_1 = $block;
    this.a1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).p1g = function ($this$withContext, $completion) {
    var tmp = this.q1g($this$withContext, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(Recomposer$recompositionRunner$slambda).qc = function (p1, $completion) {
    return this.p1g((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 5;
            this.c1j_1 = get_job(this.b1j_1.ng());
            registerRunnerJob(this.y1i_1, this.c1j_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.d1j_1 = tmp_1.f1j(Recomposer$recompositionRunner$slambda$lambda(this.y1i_1));
            addRunning(Companion_getInstance_3(), this.y1i_1.z1f_1);
            this.sb_1 = 1;
            continue $sm;
          case 1:
            this.tb_1 = 4;
            this.y1i_1.e1f_1;
            var this_0 = _get_knownCompositions__y8veaj(this.y1i_1);
            var inductionVariable = 0;
            var last = this_0.i() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.j(index);
                item.l1d();
              }
               while (inductionVariable <= last);
            this.sb_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.z1i_1, this.a1j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e1j_1 = suspendResult;
            this.tb_1 = 5;
            this.sb_1 = 3;
            continue $sm;
          case 3:
            this.tb_1 = 5;
            this.d1j_1.hk();
            this.y1i_1.e1f_1;
            if (this.y1i_1.f1f_1 === this.c1j_1) {
              this.y1i_1.f1f_1 = null;
            }

            deriveStateLocked(this.y1i_1);
            removeRunning(Companion_getInstance_3(), this.y1i_1.z1f_1);
            return Unit_instance;
          case 4:
            this.tb_1 = 5;
            var t = this.vb_1;
            this.d1j_1.hk();
            this.y1i_1.e1f_1;
            if (this.y1i_1.f1f_1 === this.c1j_1) {
              this.y1i_1.f1f_1 = null;
            }

            deriveStateLocked(this.y1i_1);
            removeRunning(Companion_getInstance_3(), this.y1i_1.z1f_1);
            throw t;
          case 5:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 5) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).q1g = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.y1i_1, this.z1i_1, this.a1j_1, completion);
    i.b1j_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.p1g($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.m15_1;
      var inductionVariable = 0;
      var last = this_0.l15_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.f1d(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.y1c(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.f1d(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i1a(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1h_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.d1h_1)) {
              this.sb_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.gk();
              this.d1h_1.e1f_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.d1h_1)) {
                tmp_0 = cancellable;
              } else {
                this.d1h_1.r1f_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.m6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.li(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sb_1 = 2;
              continue $sm;
            }

          case 1:
            this.sb_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 3) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.c1f_1 = new Long(0, 0);
    var tmp = this;
    tmp.d1f_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.e1f_1 = createSynchronizedObject();
    this.f1f_1 = null;
    this.g1f_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h1f_1 = ArrayList_init_$Create$();
    this.i1f_1 = null;
    this.j1f_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.k1f_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.l1f_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.m1f_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.n1f_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.o1f_1 = LinkedHashMap_init_$Create$();
    this.p1f_1 = null;
    this.q1f_1 = null;
    this.r1f_1 = null;
    this.s1f_1 = 0;
    this.t1f_1 = false;
    this.u1f_1 = null;
    this.v1f_1 = false;
    this.w1f_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.zb(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.oh(Recomposer$effectJob$lambda(this));
    tmp_6.x1f_1 = this_0;
    this.y1f_1 = effectCoroutineContext.bf(this.d1f_1).bf(this.x1f_1);
    this.z1f_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).k17 = function () {
    return this.y1f_1;
  };
  protoOf(Recomposer).g1j = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).h1b = function (composition, content) {
    var composerWasComposing = composition.b1c();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.e1h(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.f1h();
            try {
              composition.r1c(content);
              break $l$block;
            }finally {
              snapshot.g1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.c1g();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    var tmp;
    if (this.w1f_1.j2().q9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!_get_knownCompositions__y8veaj(this).m(composition)) {
        addKnownCompositionLocked(this, composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.j1d();
      composition.k1d();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.c1g();
    }
  };
  protoOf(Recomposer).iz = function () {
    return 1000;
  };
  protoOf(Recomposer).fz = function () {
    return false;
  };
  protoOf(Recomposer).gz = function () {
    return false;
  };
  protoOf(Recomposer).hz = function (table) {
  };
  protoOf(Recomposer).e1c = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.k1f_1.m(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.k1f_1.u(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.m6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).q14 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.m1f_1.u(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.m6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).y16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.n1f_1, reference.t14_1, reference);
  };
  protoOf(Recomposer).w1d = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    this.o1f_1.g2(reference, data);
  };
  protoOf(Recomposer).x16 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.q1f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.q1f_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.u(composition);
  };
  protoOf(Recomposer).c15 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e1f_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.o1f_1.h2(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.p2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.o()) {
        _this__u8e3s4.h2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.p2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function SlotTable() {
    this.oy_1 = new Int32Array(0);
    this.py_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.qy_1 = tmp_1;
    this.ry_1 = 0;
    this.sy_1 = 0;
    this.ty_1 = new SynchronizedObject();
    this.uy_1 = false;
    this.vy_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.wy_1 = ArrayList_init_$Create$();
    this.xy_1 = null;
  }
  protoOf(SlotTable).z13 = function () {
    return this.py_1 === 0;
  };
  protoOf(SlotTable).yy = function () {
    if (this.uy_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.sy_1 = this.sy_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).w11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.uy_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.sy_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.uy_1 = true;
    this.vy_1 = this.vy_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).u12 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.uy_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.py_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.wy_1;
    var effectiveSize = this.py_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  protoOf(SlotTable).h1j = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.uy_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var message = 'use active SlotWriter to crate an anchor for location instead';
      composeRuntimeError(toString(message));
    }
    return (0 <= index ? index < this.py_1 : false) ? find(this.wy_1, index, this.py_1) : null;
  };
  protoOf(SlotTable).a15 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.uy_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.y1b()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.x15_1;
  };
  protoOf(SlotTable).p1d = function (anchor) {
    var tmp;
    if (anchor.y1b()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$10fp17g(this.wy_1, anchor.x15_1, this.py_1);
      tmp = it >= 0 ? equals(this.wy_1.j(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).c1c = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.uy_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.py_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.p1d(anchor)) {
      var containsUpper = groupIndex + groupSize(this.oy_1, groupIndex) | 0;
      var containsArg = anchor.x15_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).i1j = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.xz_1 === this ? this.sy_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.sy_1 = this.sy_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.ty_1;
      var thisMap = this.xy_1;
      var tmp;
      if (!(thisMap == null)) {
        thisMap.g3(sourceInformationMap);
        tmp = Unit_instance;
      } else {
        this.xy_1 = sourceInformationMap;
        tmp = Unit_instance;
      }
    }
  };
  protoOf(SlotTable).j1j = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.m10_1 === this ? this.uy_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.uy_1 = false;
    this.k1j(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap);
  };
  protoOf(SlotTable).k1j = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap) {
    this.oy_1 = groups;
    this.py_1 = groupsSize;
    this.qy_1 = slots;
    this.ry_1 = slotsSize;
    this.wy_1 = anchors;
    this.xy_1 = sourceInformationMap;
  };
  protoOf(SlotTable).j16 = function () {
    return this.py_1 > 0 ? containsMark(this.oy_1, 0) : false;
  };
  protoOf(SlotTable).l1j = function (group) {
    var tmp0_safe_receiver = this.xy_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = this.h1j(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.p2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).u1e = function (group, slotIndex) {
    var start = slotAnchor(this.oy_1, group);
    var end = (group + 1 | 0) < this.py_1 ? dataAnchor(this.oy_1, group + 1 | 0) : this.qy_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.qy_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().d12_1;
    }
    return tmp;
  };
  protoOf(SlotTable).k = function () {
    return new GroupIterator(this, 0, this.py_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.l13(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.d11_1);
    if (fromWriter.r10_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.v10_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.n10_1;
    var currentGroup = toWriter.d11_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.n10_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.o10_1;
    var currentSlot = toWriter.t10_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.o10_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.f11_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.x10_1;
    var slotsGapLen = toWriter.w10_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.v10_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.x10_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.p10_1, fromIndex, fromWriter.i());
    var endAnchors = locationOf(fromWriter.p10_1, sourceGroupsEnd, fromWriter.i());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.p10_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.j(anchorIndex);
          sourceAnchor.x15_1 = sourceAnchor.x15_1 + anchorDelta | 0;
          anchors.u(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.p10_1, toWriter.d11_1, toWriter.i());
      toWriter.p10_1.x2(insertLocation, anchors);
      sourceAnchors.u1(startAnchors, endAnchors).b1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.o()) {
      var sourceSourceInformationMap = fromWriter.q10_1;
      if (!(sourceSourceInformationMap == null)) {
        var destinationSourceInformation = toWriter.q10_1;
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.i() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.j(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.p2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.h2(item);
              var tmp0_elvis_lhs = destinationSourceInformation;
              var tmp_1;
              if (tmp0_elvis_lhs == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>.<anonymous>' call
                var map = HashMap_init_$Create$();
                destinationSourceInformation = map;
                toWriter.q10_1 = destinationSourceInformation;
                tmp_1 = map;
              } else {
                tmp_1 = tmp0_elvis_lhs;
              }
              var map_0 = tmp_1;
              // Inline function 'kotlin.collections.set' call
              map_0.g2(item, information);
            }
          }
           while (inductionVariable_1 <= last);
        if (sourceSourceInformationMap.o()) {
          fromWriter.q10_1 = null;
        }
      }
    }
    var toWriterParent = toWriter.f11_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.d11_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.n10_1, child) | 0;
      }
      tmp4_safe_receiver.q1j(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.t11(fromIndex);
    var tmp_2;
    if (!removeSourceGroup) {
      tmp_2 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.a12();
        fromWriter.r1j(parentGroup - fromWriter.d11_1 | 0);
        fromWriter.a12();
      }
      fromWriter.r1j(fromIndex - fromWriter.d11_1 | 0);
      var anchorsRemoved = fromWriter.z19();
      if (needsStartGroups) {
        fromWriter.x11();
        fromWriter.x13();
        fromWriter.x11();
        fromWriter.x13();
      }
      tmp_2 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_2 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_2;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.z10_1 = toWriter.z10_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.d11_1 = currentGroup + groupsToMove | 0;
      toWriter.t10_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_elvis_lhs = $this.q10_1;
    var map = tmp0_elvis_lhs == null ? HashMap_init_$Create$() : tmp0_elvis_lhs;
    $this.q10_1 = map;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = $this.u12(parent);
    var value = map.p2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
      var result = new GroupSourceInformation(0, sourceInformation);
      if (sourceInformation == null) {
        var child = parent + 1 | 0;
        var end = $this.d11_1;
        while (child < end) {
          result.s1j($this, child);
          child = child + groupSize($this.n10_1, child) | 0;
        }
      }
      var answer = result;
      map.g2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.f11_1;
    var inserting = $this.y10_1 > 0;
    $this.c11_1.dz($this.z10_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.d11_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().d12_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().d12_1) : false;
      initGroup($this.n10_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.f11_1, $this.t10_1);
      $this.u10_1 = $this.t10_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.o10_1;
        var currentSlot = $this.t10_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.t10_1 = currentSlot;
      }
      $this.z10_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.f11_1 = current;
      $this.d11_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp3_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp3_safe_receiver == null)
          null;
        else {
          tmp3_safe_receiver.s1j($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.a11_1.dz(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.d11_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().d12_1)) {
        if (isNode) {
          $this.u1j(aux);
        } else {
          $this.t1j(aux);
        }
      }
      $this.t10_1 = slotIndex($this.n10_1, $this, currentGroupAddress);
      $this.u10_1 = dataIndex_0($this.n10_1, $this, groupIndexToAddress($this, $this.d11_1 + 1 | 0));
      $this.z10_1 = nodeCount($this.n10_1, currentGroupAddress);
      $this.f11_1 = currentGroup;
      $this.d11_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.n10_1, currentGroupAddress) | 0;
    }
    tmp.e11_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.n10_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.n10_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.h11_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.y18()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.w1j(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.h11_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.h11_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.x1j(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.n10_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.n10_1, groupAddress, containsAnyMarks);
      var parent = $this.t11(group);
      if (parent >= 0) {
        set.x1j(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.l13(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.n10_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.l13(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.b11_1.dz((_get_capacity__a9k9f3($this) - $this.s10_1 | 0) - $this.e11_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.s10_1 | 0) - $this.b11_1.h13() | 0;
    $this.e11_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.r10_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.n10_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.n10_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.s10_1;
    var gapStart = $this.r10_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.p10_1.o()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.n10_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.n10_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.n10_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.r10_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.w10_1;
    var gapStart = $this.v10_1;
    var slotsGapOwner = $this.x10_1;
    if (!(gapStart === index)) {
      var slots = $this.o10_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.i();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.o10_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.r10_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.n10_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.n10_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.s10_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.n10_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.n10_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.r10_1)
            updateAddress_0 = updateAddress_0 + $this.s10_1 | 0;
        }
      }
      $this.x10_1 = newSlotsGapOwner;
    }
    $this.v10_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.v10_1;
    var slotsGapEnd = slotsGapStart + $this.w10_1 | 0;
    fill_0($this.o10_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.d11_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.r10_1;
      var gapLen = $this.s10_1;
      var oldCapacity = $this.n10_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.n10_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.n10_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.e11_1;
      if (currentEnd >= gapStart)
        $this.e11_1 = currentEnd + size | 0;
      $this.r10_1 = gapStart + size | 0;
      $this.s10_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.x10_1 < gapStart ? 0 : $this.v10_1, $this.w10_1, $this.o10_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.n10_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.x10_1;
      if (slotsGapOwner >= gapStart) {
        $this.x10_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.t10_1, group);
      var gapStart = $this.v10_1;
      var gapLen = $this.w10_1;
      if (gapLen < size) {
        var slots = $this.o10_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.o10_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.u10_1;
      if (currentDataEnd >= gapStart)
        $this.u10_1 = currentDataEnd + size | 0;
      $this.v10_1 = gapStart + size | 0;
      $this.w10_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.p10_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.o()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.q10_1);
      }
      $this.r10_1 = start;
      var previousGapLen = $this.s10_1;
      var newGapLen = previousGapLen + len | 0;
      $this.s10_1 = newGapLen;
      var slotsGapOwner = $this.x10_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.x10_1 = Math.max(start, b);
      }
      if ($this.e11_1 >= $this.r10_1) {
        $this.e11_1 = $this.e11_1 - len | 0;
      }
      var parent = $this.f11_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.q10_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.h1j(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.p2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.w10_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.v10_1 = start;
      $this.w10_1 = gapLen + len | 0;
      fill_0($this.o10_1, null, start, start + len | 0);
      var currentDataEnd = $this.u10_1;
      if (currentDataEnd >= start)
        $this.u10_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.n10_1.length ? isNode($this.n10_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.o10_1[dataIndexToDataAddress($this, nodeIndex($this.n10_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.s10_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.p10_1, previousGapStart, size);
      $l$loop_0: while (index < $this.p10_1.i()) {
        var anchor = $this.p10_1.j(index);
        var location = anchor.x15_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.x15_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.p10_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.p10_1.i()) {
        var anchor_0 = $this.p10_1.j(index_0);
        var location_0 = anchor_0.x15_1;
        if (location_0 >= 0) {
          anchor_0.x15_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.s10_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.p10_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.p10_1.i() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.p10_1.j(index);
      var location = $this.a15(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.x15_1 = IntCompanionObject_instance.MIN_VALUE;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.h2(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.p10_1.u1(removeAnchorStart, removeAnchorEnd).b1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.i();
    var index = locationOf($this.p10_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.p10_1.i()) {
        var anchor = $this.p10_1.j(index);
        var location = $this.a15(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.u(anchor);
          $this.p10_1.g1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.j(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.a15(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.r10_1) {
          item.x15_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.x15_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.p10_1, newAnchorIndex, groupsSize);
        $this.p10_1.q1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.n10_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.r10_1 ? index : index + $this.s10_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.v10_1 ? dataIndex : dataIndex + $this.w10_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.n10_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o10_1.length - $this.w10_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.w10_1, $this.o10_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.o10_1.length - $this.w10_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.w10_1, $this.o10_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.v10_1, $this.w10_1, $this.o10_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.i() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.i() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.z1j_1 = $end;
    this.a1k_1 = this$0;
    this.y1j_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).x = function () {
    return this.y1j_1 < this.z1j_1;
  };
  protoOf(SlotWriter$groupSlots$1).z = function () {
    var tmp;
    if (this.x()) {
      var tmp_0 = this.a1k_1.o10_1;
      var tmp1 = this.y1j_1;
      this.y1j_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.a1k_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.m10_1 = table;
    this.n10_1 = this.m10_1.oy_1;
    this.o10_1 = this.m10_1.qy_1;
    this.p10_1 = this.m10_1.wy_1;
    this.q10_1 = this.m10_1.xy_1;
    this.r10_1 = this.m10_1.py_1;
    this.s10_1 = (this.n10_1.length / 5 | 0) - this.m10_1.py_1 | 0;
    this.t10_1 = 0;
    this.u10_1 = 0;
    this.v10_1 = this.m10_1.ry_1;
    this.w10_1 = this.o10_1.length - this.m10_1.ry_1 | 0;
    this.x10_1 = this.m10_1.py_1;
    this.y10_1 = 0;
    this.z10_1 = 0;
    this.a11_1 = new IntStack();
    this.b11_1 = new IntStack();
    this.c11_1 = new IntStack();
    this.d11_1 = 0;
    this.e11_1 = this.m10_1.py_1;
    this.f11_1 = -1;
    this.g11_1 = false;
    this.h11_1 = null;
  }
  protoOf(SlotWriter).a19 = function () {
    return this.d11_1 < this.e11_1 ? isNode(this.n10_1, groupIndexToAddress(this, this.d11_1)) : false;
  };
  protoOf(SlotWriter).f14 = function (index) {
    return isNode(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).g14 = function (index) {
    return nodeCount(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).s11 = function (index) {
    return key(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).r11 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.n10_1, address) ? this.o10_1[objectKeyIndex(this.n10_1, address)] : null;
  };
  protoOf(SlotWriter).l13 = function (index) {
    return groupSize(this.n10_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).q11 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.n10_1, address) ? this.o10_1[auxIndex(this.n10_1, this, address)] : Companion_getInstance_0().d12_1;
  };
  protoOf(SlotWriter).b1k = function (index) {
    return (index > this.f11_1 ? index < this.e11_1 : false) ? true : this.f11_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).c1k = function (index) {
    return this.d1k(index, this.d11_1);
  };
  protoOf(SlotWriter).d1k = function (index, group) {
    var tmp;
    if (group === this.f11_1) {
      tmp = this.e11_1;
    } else if (group > this.a11_1.f1k(0)) {
      tmp = group + this.l13(group) | 0;
    } else {
      var openIndex = this.a11_1.e1k(group);
      tmp = openIndex < 0 ? group + this.l13(group) | 0 : (_get_capacity__a9k9f3(this) - this.s10_1 | 0) - this.b11_1.e14(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).e16 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.n10_1, address) ? this.o10_1[dataIndexToDataAddress(this, nodeIndex(this.n10_1, this, address))] : null;
  };
  protoOf(SlotWriter).g1k = function (anchor) {
    return this.e16(anchor.h1k(this));
  };
  protoOf(SlotWriter).t11 = function (index) {
    return parent(this.n10_1, this, index);
  };
  protoOf(SlotWriter).k10 = function () {
    this.g11_1 = true;
    if (this.a11_1.o()) {
      moveGroupGapTo(this, this.i());
      moveSlotGapTo(this, this.o10_1.length - this.w10_1 | 0, this.r10_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.m10_1.j1j(this, this.n10_1, this.r10_1, this.o10_1, this.v10_1, this.p10_1, this.q10_1);
  };
  protoOf(SlotWriter).i1k = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.d11_1 = 0;
    this.e11_1 = _get_capacity__a9k9f3(this) - this.s10_1 | 0;
    this.t10_1 = 0;
    this.u10_1 = 0;
    this.z10_1 = 0;
  };
  protoOf(SlotWriter).k18 = function (value) {
    var result = this.j1k();
    this.k1k(value);
    return result;
  };
  protoOf(SlotWriter).t1j = function (value) {
    var address = groupIndexToAddress(this, this.d11_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.n10_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.o10_1[dataIndexToDataAddress(this, auxIndex(this.n10_1, this, address))] = value;
  };
  protoOf(SlotWriter).k19 = function (sourceInformation) {
    if (this.y10_1 > 0) {
      groupSourceInformationFor(this, this.f11_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).m19 = function (key, value) {
    if (this.y10_1 > 0) {
      groupSourceInformationFor(this, this.f11_1, null).l1k(key, value);
    }
  };
  protoOf(SlotWriter).o19 = function () {
    if (this.y10_1 > 0) {
      groupSourceInformationFor(this, this.f11_1, null).m1k();
    }
  };
  protoOf(SlotWriter).u1j = function (value) {
    return updateNodeOfGroup(this, this.d11_1, value);
  };
  protoOf(SlotWriter).n1k = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.h1k(this), value);
  };
  protoOf(SlotWriter).k1k = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.t10_1 <= this.u10_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.o10_1[dataIndexToDataAddress(this, this.t10_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).o1k = function (index, value) {
    return this.p1k(this.d11_1, index, value);
  };
  protoOf(SlotWriter).p1k = function (group, index, value) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.n10_1, this, address);
    var slotsEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.o10_1[slotAddress];
    this.o10_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).j1k = function () {
    if (this.y10_1 > 0) {
      insertSlots(this, 1, this.f11_1);
    }
    var tmp = this.o10_1;
    var tmp1 = this.t10_1;
    this.t10_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).r1e = function (anchor, index) {
    return this.u1e(this.a15(anchor), index);
  };
  protoOf(SlotWriter).u1e = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.n10_1, this, address);
    var slotsEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().d12_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.o10_1[slotAddress];
  };
  protoOf(SlotWriter).r1j = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y10_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.d11_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.f11_1 ? index <= this.e11_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.f11_1 + '-' + this.e11_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.d11_1 = index;
    var newSlot = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, index));
    this.t10_1 = newSlot;
    this.u10_1 = newSlot;
  };
  protoOf(SlotWriter).x11 = function () {
    var newGroup = this.e11_1;
    this.d11_1 = newGroup;
    this.t10_1 = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).t12 = function () {
    var tmp1 = this.y10_1;
    this.y10_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).y13 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y10_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y10_1 = this.y10_1 - 1 | 0;
    if (this.y10_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.c11_1.i() === this.a11_1.i())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).a12 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().d12_1, false, Companion_getInstance_0().d12_1);
  };
  protoOf(SlotWriter).e12 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().d12_1);
  };
  protoOf(SlotWriter).g12 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().d12_1);
  };
  protoOf(SlotWriter).f12 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).x13 = function () {
    var inserting = this.y10_1 > 0;
    var currentGroup = this.d11_1;
    var currentGroupEnd = this.e11_1;
    var groupIndex = this.f11_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.z10_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.n10_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.n10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n10_1, groupAddress, newNodes);
      this.z10_1 = this.c11_1.h13() + (isNode_0 ? 1 : newNodes) | 0;
      this.f11_1 = parent(this.n10_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.n10_1, groupAddress);
      var oldNodes = nodeCount(this.n10_1, groupAddress);
      updateGroupSize(this.n10_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.n10_1, groupAddress, newNodes);
      var newParent = this.a11_1.h13();
      restoreCurrentGroupEnd(this);
      this.f11_1 = newParent;
      var groupParent = parent(this.n10_1, this, groupIndex);
      this.z10_1 = this.c11_1.h13();
      if (groupParent === newParent) {
        this.z10_1 = this.z10_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.n10_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.n10_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.n10_1, currentAddress, nodeCount(this.n10_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.n10_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.n10_1, this, current);
          }
        }
        this.z10_1 = this.z10_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).q1k = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.f11_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.e11_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.d11_1;
      var oldCurrentSlot = this.t10_1;
      var oldCurrentSlotEnd = this.u10_1;
      this.d11_1 = index;
      this.a12();
      this.d11_1 = oldCurrent;
      this.t10_1 = oldCurrentSlot;
      this.u10_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).r1k = function (anchor) {
    return this.q1k(anchor.h1k(this));
  };
  protoOf(SlotWriter).n11 = function () {
    var groupAddress = groupIndexToAddress(this, this.d11_1);
    var newGroup = this.d11_1 + groupSize(this.n10_1, groupAddress) | 0;
    this.d11_1 = newGroup;
    this.t10_1 = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.n10_1, groupAddress) ? 1 : nodeCount(this.n10_1, groupAddress);
  };
  protoOf(SlotWriter).z19 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.d11_1;
    var oldSlot = this.t10_1;
    var count = this.n11();
    var tmp0_safe_receiver = sourceInformationOf(this, this.f11_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.h1j(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.s1k(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.h11_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp1_safe_receiver.y18() ? tmp1_safe_receiver.w17() >= oldGroup : false) {
        tmp1_safe_receiver.w1j();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.d11_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.t10_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.d11_1 = oldGroup;
    this.t10_1 = oldSlot;
    this.z10_1 = this.z10_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).w19 = function () {
    var start = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, this.d11_1));
    var end = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, this.d11_1 + this.l13(this.d11_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).t1k = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.d11_1;
    var parent = this.f11_1;
    var parentEnd = this.e11_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.n10_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.n10_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.t10_1;
    var dataStart = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.n10_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.d11_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.n10_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.o10_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.v10_1;
    var slotsGapLen = this.w10_1;
    var slotsCapacity = this.o10_1.length;
    var slotsGapOwner = this.x10_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.e11_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).u1k = function (anchor, offset, writer) {
    runtimeCheck(writer.y10_1 > 0);
    runtimeCheck(this.y10_1 === 0);
    runtimeCheck(anchor.y1b());
    var location = this.a15(anchor) + offset | 0;
    var currentGroup = this.d11_1;
    runtimeCheck(currentGroup <= location ? location < this.e11_1 : false);
    var parent = this.t11(location);
    var size = this.l13(location);
    var nodes = this.f14(location) ? 1 : this.g14(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.n10_1, currentAddress, groupSize(this.n10_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.n10_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.n10_1, currentAddress, nodeCount(this.n10_1, currentAddress) - nodes | 0);
        }
      }
      current = this.t11(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.z10_1 >= nodes);
      this.z10_1 = this.z10_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).v1k = function (table, index, removeSourceGroup) {
    runtimeCheck(this.y10_1 > 0);
    if (((index === 0 ? this.d11_1 === 0 : false) ? this.m10_1.py_1 === 0 : false) ? groupSize(table.oy_1, index) === table.py_1 : false) {
      var myGroups = this.n10_1;
      var mySlots = this.o10_1;
      var myAnchors = this.p10_1;
      var mySourceInformation = this.q10_1;
      var groups = table.oy_1;
      var groupsSize = table.py_1;
      var slots = table.qy_1;
      var slotsSize = table.ry_1;
      var sourceInformation = table.xy_1;
      this.n10_1 = groups;
      this.o10_1 = slots;
      this.p10_1 = table.wy_1;
      this.r10_1 = groupsSize;
      this.s10_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.v10_1 = slotsSize;
      this.w10_1 = slots.length - slotsSize | 0;
      this.x10_1 = groupsSize;
      this.q10_1 = sourceInformation;
      table.k1j(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation);
      return this.p10_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.w11();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.k10();
    }
    return tmp;
  };
  protoOf(SlotWriter).w1k = function (offset, table, index) {
    runtimeCheck(this.y10_1 <= 0 ? this.l13(this.d11_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.d11_1;
    var previousCurrentSlot = this.t10_1;
    var previousCurrentSlotEnd = this.u10_1;
    this.r1j(offset);
    this.a12();
    this.t12();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.w11();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.k10();
    }
    var anchors = tmp;
    this.y13();
    this.x13();
    this.d11_1 = previousCurrentGroup;
    this.t10_1 = previousCurrentSlot;
    this.u10_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).u12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.p10_1;
    var effectiveSize = this.i();
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.r10_1 ? index : -(this.i() - index | 0) | 0);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).x1k = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.n10_1, groupAddress)) {
      updateMark(this.n10_1, groupAddress, true);
      if (!containsMark(this.n10_1, groupAddress)) {
        updateContainsMark(this, this.t11(group));
      }
    }
  };
  protoOf(SlotWriter).p14 = function (group, $super) {
    group = group === VOID ? this.f11_1 : group;
    var tmp;
    if ($super === VOID) {
      this.x1k(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.x1k.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).a15 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.x15_1;
    return it < 0 ? this.i() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.d11_1 + ' end=' + this.e11_1 + ' size = ' + this.i() + ' ' + ('gap=' + this.r10_1 + '-' + (this.r10_1 + this.s10_1 | 0) + ')');
  };
  protoOf(SlotWriter).h1j = function (group) {
    return (0 <= group ? group < this.i() : false) ? find(this.p10_1, group, this.i()) : null;
  };
  protoOf(SlotWriter).i = function () {
    return _get_capacity__a9k9f3(this) - this.s10_1 | 0;
  };
  function Anchor(loc) {
    this.x15_1 = loc;
  }
  protoOf(Anchor).y1b = function () {
    return !(this.x15_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).z18 = function (slots) {
    return slots.a15(this);
  };
  protoOf(Anchor).h1k = function (writer) {
    return writer.a15(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.x15_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.o1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.i() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.j(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.p1j_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.o1j_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.o1j_1 = groups;
    groups.u(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.o1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.i() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation) {
    this.m1j_1 = key;
    this.n1j_1 = sourceInformation;
    this.o1j_1 = null;
    this.p1j_1 = false;
  }
  protoOf(GroupSourceInformation).l1k = function (key, sourceInformation) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation));
  };
  protoOf(GroupSourceInformation).m1k = function () {
    openInformation(this).k10();
  };
  protoOf(GroupSourceInformation).s1j = function (writer, group) {
    add(openInformation(this), writer.u12(group));
  };
  protoOf(GroupSourceInformation).y1k = function (table, group) {
    add(openInformation(this), table.u12(group));
  };
  protoOf(GroupSourceInformation).q1j = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.o1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.o1j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.h1j(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.i();
          while (index < size) {
            var value = groups.j(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.q1(index_0, writer.u12(group));
  };
  protoOf(GroupSourceInformation).k10 = function () {
    this.p1j_1 = true;
  };
  protoOf(GroupSourceInformation).s1k = function (anchor) {
    var groups = this.o1j_1;
    if (!(groups == null)) {
      var index = groups.i() - 1 | 0;
      while (index >= 0) {
        var item = groups.j(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.g1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.s1k(anchor)) {
              groups.g1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.o()) {
        this.o1j_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.a10_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().d12_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.a10_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().d12_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.a10_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.xz_1 = table;
    this.yz_1 = this.xz_1.oy_1;
    this.zz_1 = this.xz_1.py_1;
    this.a10_1 = this.xz_1.qy_1;
    this.b10_1 = this.xz_1.ry_1;
    this.c10_1 = null;
    this.d10_1 = false;
    this.e10_1 = 0;
    this.f10_1 = this.zz_1;
    this.g10_1 = -1;
    this.h10_1 = 0;
    this.i10_1 = 0;
    this.j10_1 = 0;
  }
  protoOf(SlotReader).i = function () {
    return this.zz_1;
  };
  protoOf(SlotReader).t11 = function (index) {
    return parentAnchor(this.yz_1, index);
  };
  protoOf(SlotReader).a19 = function () {
    return isNode(this.yz_1, this.e10_1);
  };
  protoOf(SlotReader).f14 = function (index) {
    return isNode(this.yz_1, index);
  };
  protoOf(SlotReader).g14 = function (index) {
    return nodeCount(this.yz_1, index);
  };
  protoOf(SlotReader).e16 = function (index) {
    return isNode(this.yz_1, index) ? node(this.yz_1, this, index) : null;
  };
  protoOf(SlotReader).r13 = function () {
    return this.a14() ? true : this.e10_1 === this.f10_1;
  };
  protoOf(SlotReader).a14 = function () {
    return this.h10_1 > 0;
  };
  protoOf(SlotReader).z1k = function () {
    return groupSize(this.yz_1, this.e10_1);
  };
  protoOf(SlotReader).l13 = function (index) {
    return groupSize(this.yz_1, index);
  };
  protoOf(SlotReader).q13 = function () {
    return this.f10_1;
  };
  protoOf(SlotReader).p12 = function () {
    var tmp;
    if (this.e10_1 < this.f10_1) {
      tmp = key(this.yz_1, this.e10_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).s11 = function (index) {
    return key(this.yz_1, index);
  };
  protoOf(SlotReader).i18 = function () {
    return this.i10_1 - slotAnchor(this.yz_1, this.g10_1) | 0;
  };
  protoOf(SlotReader).i14 = function (index) {
    return hasObjectKey(this.yz_1, index);
  };
  protoOf(SlotReader).r12 = function () {
    return this.e10_1 < this.f10_1 ? objectKey(this.yz_1, this, this.e10_1) : null;
  };
  protoOf(SlotReader).r11 = function (index) {
    return objectKey(this.yz_1, this, index);
  };
  protoOf(SlotReader).z11 = function () {
    return this.e10_1 < this.f10_1 ? aux(this.yz_1, this, this.e10_1) : 0;
  };
  protoOf(SlotReader).q11 = function (index) {
    return aux(this.yz_1, this, index);
  };
  protoOf(SlotReader).c17 = function (index) {
    return hasMark(this.yz_1, index);
  };
  protoOf(SlotReader).m16 = function (index) {
    return containsMark(this.yz_1, index);
  };
  protoOf(SlotReader).j14 = function () {
    return this.g10_1 >= 0 ? nodeCount(this.yz_1, this.g10_1) : 0;
  };
  protoOf(SlotReader).n16 = function (group, index) {
    var start = slotAnchor(this.yz_1, group);
    var next = group + 1 | 0;
    var end = next < this.zz_1 ? dataAnchor(this.yz_1, next) : this.b10_1;
    var address = start + index | 0;
    return address < end ? this.a10_1[address] : Companion_getInstance_0().d12_1;
  };
  protoOf(SlotReader).z = function () {
    if (this.h10_1 > 0 ? true : this.i10_1 >= this.j10_1)
      return Companion_getInstance_0().d12_1;
    var tmp1 = this.i10_1;
    this.i10_1 = tmp1 + 1 | 0;
    return this.a10_1[tmp1];
  };
  protoOf(SlotReader).c12 = function () {
    this.h10_1 = this.h10_1 + 1 | 0;
  };
  protoOf(SlotReader).w13 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.h10_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.h10_1 = this.h10_1 - 1 | 0;
  };
  protoOf(SlotReader).k10 = function () {
    this.d10_1 = true;
    this.xz_1.i1j(this, this.c10_1);
  };
  protoOf(SlotReader).a12 = function () {
    if (this.h10_1 <= 0) {
      var parent = this.g10_1;
      var currentGroup = this.e10_1;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.yz_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_safe_receiver = this.c10_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2(this.u12(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.y1k(this.xz_1, currentGroup);
      }
      this.g10_1 = currentGroup;
      this.f10_1 = currentGroup + groupSize(this.yz_1, currentGroup) | 0;
      this.e10_1 = currentGroup + 1 | 0;
      this.i10_1 = slotAnchor(this.yz_1, currentGroup);
      this.j10_1 = currentGroup >= (this.zz_1 - 1 | 0) ? this.b10_1 : dataAnchor(this.yz_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).b12 = function () {
    if (this.h10_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.yz_1, this.e10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.a12();
    }
  };
  protoOf(SlotReader).n11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.h10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.yz_1, this.e10_1) ? 1 : nodeCount(this.yz_1, this.e10_1);
    this.e10_1 = this.e10_1 + groupSize(this.yz_1, this.e10_1) | 0;
    return count;
  };
  protoOf(SlotReader).x11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.h10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.e10_1 = this.f10_1;
  };
  protoOf(SlotReader).e13 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.h10_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.e10_1 = index;
    var parent = index < this.zz_1 ? parentAnchor(this.yz_1, index) : -1;
    this.g10_1 = parent;
    if (parent < 0)
      this.f10_1 = this.zz_1;
    else
      this.f10_1 = parent + groupSize(this.yz_1, parent) | 0;
    this.i10_1 = 0;
    this.j10_1 = 0;
  };
  protoOf(SlotReader).d14 = function (index) {
    var newCurrentEnd = index + groupSize(this.yz_1, index) | 0;
    var current = this.e10_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.g10_1 = index;
    this.f10_1 = newCurrentEnd;
    this.i10_1 = 0;
    this.j10_1 = 0;
  };
  protoOf(SlotReader).u13 = function () {
    if (this.h10_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.e10_1 === this.f10_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.yz_1, this.g10_1);
      this.g10_1 = parent;
      this.f10_1 = parent < 0 ? this.zz_1 : parent + groupSize(this.yz_1, parent) | 0;
    }
  };
  protoOf(SlotReader).q12 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.h10_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.e10_1;
    while (childIndex < this.f10_1) {
      var tmp = key(this.yz_1, childIndex);
      var tmp_0 = objectKey(this.yz_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.yz_1, childIndex) ? 1 : nodeCount(this.yz_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.u(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.yz_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.e10_1 + ', key=' + this.p12() + ', ' + ('parent=' + this.g10_1 + ', end=' + this.f10_1 + ')');
  };
  protoOf(SlotReader).u12 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.xz_1.wy_1;
    var effectiveSize = this.zz_1;
    var location = search$accessor$10fp17g(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.q1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.j(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search$accessor$10fp17g(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.j(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.i() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.j(mid).x15_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.a1l_1.vy_1 === $this.d1l_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.a1l_1 = table;
    this.b1l_1 = end;
    this.c1l_1 = start;
    this.d1l_1 = this.a1l_1.vy_1;
    if (this.a1l_1.uy_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).x = function () {
    return this.c1l_1 < this.b1l_1;
  };
  protoOf(GroupIterator).z = function () {
    validateRead(this);
    var group = this.c1l_1;
    this.c1l_1 = this.c1l_1 + groupSize(this.a1l_1.oy_1, group) | 0;
    return new SlotTableGroup(this.a1l_1, group, this.d1l_1);
  };
  function validateRead_0($this) {
    if (!($this.e1l_1.vy_1 === $this.g1l_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.vy_1 : version;
    this.e1l_1 = table;
    this.f1l_1 = group;
    this.g1l_1 = version;
  }
  protoOf(SlotTableGroup).k = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.e1l_1.l1j(this.f1l_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.e1l_1, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.e1l_1, this.f1l_1 + 1 | 0, this.f1l_1 + groupSize(this.e1l_1.oy_1, this.f1l_1) | 0) : tmp1_elvis_lhs;
  };
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.v1j_1 = list;
  }
  protoOf(PrioritySet).x1j = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.v1j_1.o()) {
      tmp = this.v1j_1.j(0) === value ? true : this.v1j_1.j(this.v1j_1.i() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.v1j_1.i();
    this.v1j_1.u(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.v1j_1.j(parent);
      if (value > parentValue) {
        this.v1j_1.r(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.v1j_1.r(index, value);
  };
  protoOf(PrioritySet).y18 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.v1j_1.o();
  };
  protoOf(PrioritySet).w17 = function () {
    return first(this.v1j_1);
  };
  protoOf(PrioritySet).w1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v1j_1.i() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.v1j_1.j(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.v1j_1.o()) {
        tmp = this.v1j_1.j(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.v1j_1.r(0, last(this.v1j_1));
      this.v1j_1.g1(this.v1j_1.i() - 1 | 0);
      var index = 0;
      var size = this.v1j_1.i();
      var max = this.v1j_1.i() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.v1j_1.j(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.v1j_1.j(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.v1j_1.j(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.v1j_1.r(index, rightValue);
              this.v1j_1.r(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.v1j_1.r(index, leftValue);
          this.v1j_1.r(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$10fp17g(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.v12_1 = key;
    this.w12_1 = objectKey;
    this.x12_1 = location;
    this.y12_1 = nodes;
    this.z12_1 = index;
  }
  function SourceInformationGroupIterator(table, group) {
    this.h1l_1 = table;
    this.i1l_1 = group;
    this.j1l_1 = this.h1l_1.vy_1;
    this.k1l_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).x = function () {
    var tmp0_safe_receiver = this.i1l_1.o1j_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.k1l_1 < tmp0_safe_receiver.i();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).z = function () {
    var tmp2_safe_receiver = this.i1l_1.o1j_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.k1l_1;
      this.k1l_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.j(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.h1l_1, group.x15_1, this.j1l_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.h1l_1, group);
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function SourceInformationSlotTableGroup(table, sourceInformation) {
    this.l1l_1 = table;
    this.m1l_1 = sourceInformation;
    this.n1l_1 = this.m1l_1.m1j_1;
    this.o1l_1 = emptyList();
    this.p1l_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).k = function () {
    return new SourceInformationGroupIterator(this.l1l_1, this.m1l_1);
  };
  function search$accessor$10fp17g(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).r1l = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).z1e = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.r1l(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function State_0() {
  }
  function MutableState() {
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.u1l_1 = myValue;
  }
  protoOf(StateStateRecord).v1l = function (value) {
    var tmp = this;
    tmp.u1l_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).u1l_1;
  };
  protoOf(StateStateRecord).w1l = function () {
    return new StateStateRecord(this.u1l_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.y1l_1 = policy;
    this.z1l_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).e1e = function () {
    return this.y1l_1;
  };
  protoOf(SnapshotMutableStateImpl).eq = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.z1l_1;
    var it = current(this_0);
    var tmp;
    if (!this.e1e().z1e(it.u1l_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.z1l_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      overwritableRecord(this_1, this, snapshot, it).u1l_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).j2 = function () {
    return readable_0(this.z1l_1, this).u1l_1;
  };
  protoOf(SnapshotMutableStateImpl).a1m = function () {
    return this.z1l_1;
  };
  protoOf(SnapshotMutableStateImpl).b1m = function (value) {
    var tmp = this;
    tmp.z1l_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).c1m = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.e1e().z1e(currentRecord.u1l_1, appliedRecord.u1l_1)) {
      tmp = current;
    } else {
      var merged = this.e1e().q1l(previousRecord.u1l_1, currentRecord.u1l_1, appliedRecord.u1l_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.w1l();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).u1l_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.z1l_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).u1l_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.f1e_1 = new AtomicReference(get_emptyThreadMap());
    this.g1e_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).rl = function () {
    var tmp = this.f1e_1.rl().g1m(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).h1e = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g1e_1;
    var current = this.f1e_1.rl();
    if (current.h1m(key, value))
      return Unit_instance;
    this.f1e_1.a1c(current.i1m(key, value));
  };
  function IntStack() {
    this.bz_1 = new Int32Array(10);
    this.cz_1 = 0;
  }
  protoOf(IntStack).i = function () {
    return this.cz_1;
  };
  protoOf(IntStack).dz = function (value) {
    if (this.cz_1 >= this.bz_1.length) {
      this.bz_1 = copyOf(this.bz_1, imul(this.bz_1.length, 2));
    }
    var tmp = this.bz_1;
    var tmp1 = this.cz_1;
    this.cz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).h13 = function () {
    var tmp = this.bz_1;
    this.cz_1 = this.cz_1 - 1 | 0;
    return tmp[this.cz_1];
  };
  protoOf(IntStack).f1k = function (default_0) {
    return this.cz_1 > 0 ? this.w17() : default_0;
  };
  protoOf(IntStack).w17 = function () {
    return this.bz_1[this.cz_1 - 1 | 0];
  };
  protoOf(IntStack).e14 = function (index) {
    return this.bz_1[index];
  };
  protoOf(IntStack).o = function () {
    return this.cz_1 === 0;
  };
  protoOf(IntStack).b1 = function () {
    this.cz_1 = 0;
  };
  protoOf(IntStack).e1k = function (value) {
    var inductionVariable = 0;
    var last = this.cz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.bz_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.l10_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).i = function () {
    return this.l10_1.i();
  };
  protoOf(Stack).g13 = function (value) {
    return this.l10_1.u(value);
  };
  protoOf(Stack).h13 = function () {
    return this.l10_1.g1(this.i() - 1 | 0);
  };
  protoOf(Stack).w17 = function () {
    return this.l10_1.j(this.i() - 1 | 0);
  };
  protoOf(Stack).e14 = function (index) {
    return this.l10_1.j(index);
  };
  protoOf(Stack).o = function () {
    return this.l10_1.o();
  };
  protoOf(Stack).y18 = function () {
    return !this.o();
  };
  protoOf(Stack).b1 = function () {
    return this.l10_1.b1();
  };
  protoOf(Stack).y2 = function () {
    var tmp = 0;
    var tmp_0 = this.l10_1.i();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.l10_1.j(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.d1e_1;
    current$factory();
    return this_0.j2();
  }
  function LazyValueHolder(valueProducer) {
    this.d1e_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).j2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.j1m_1 = value;
  }
  protoOf(StaticValueHolder).j2 = function () {
    return this.j1m_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.j1m_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.j1m_1 == null ? 0 : hashCode(this.j1m_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.j1m_1, tmp0_other_with_cast.j1m_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    this.q19_1 = new Operations();
  }
  protoOf(ChangeList).o = function () {
    return this.q19_1.o();
  };
  protoOf(ChangeList).y18 = function () {
    return this.q19_1.y18();
  };
  protoOf(ChangeList).b1 = function () {
    this.q19_1.b1();
  };
  protoOf(ChangeList).q1b = function (applier, slots, rememberManager) {
    return this.q19_1.s1m(applier, slots, rememberManager);
  };
  protoOf(ChangeList).t1m = function (value) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).z1m = function (value, groupSlotIndex) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).a1n = function () {
    this.q19_1.b1n(ResetSlots_getInstance());
  };
  protoOf(ChangeList).c1n = function (data) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).d1n = function () {
    this.q19_1.b1n(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).e1n = function (anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).f1n = function () {
    this.q19_1.b1n(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).g1n = function () {
    this.q19_1.b1n(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).h1n = function () {
    this.q19_1.b1n(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).i1n = function (anchor, from) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).j1n = function (anchor, from, fixups) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).k1n = function (offset) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).l1n = function (action, composition) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).m1n = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.q19_1.b1n(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).n1n = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).o1n = function (removeFrom, moveCount) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).p1n = function (to, from, count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).q1n = function (distance) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).r1n = function (count) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).s1n = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.q19_1;
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.u1m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.q1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.r1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).t1n = function (effectiveNodeIndexOut, anchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).u1n = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.o()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.q19_1;
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.u1m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.q1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.r1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  protoOf(ChangeList).v1n = function (resolvedState, parentContext, from, to) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).w1n = function (composition, parentContext, reference) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.q19_1;
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(ChangeList).x1n = function () {
    this.q19_1.b1n(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).y1n = function (changeList, effectiveNodeIndex) {
    if (changeList.y18()) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var this_0 = this.q19_1;
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      this_0.u1m(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(this_0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & this_0.q1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_1.q5(', ');
              }
              this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_1.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_2 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w1m_1;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & this_0.r1m_1) === 0)) {
              if (missingIntCount > 0) {
                this_2.q5(', ');
              }
              this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_2.toString();
        var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.kz_1.ay_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.z16();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.mz_1 ? $this.oz_1 : false) {
      pushSlotTableOperationPreamble$default($this);
      $this.lz_1.d1n();
      $this.mz_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.lz_1.e1n(anchor);
    $this.mz_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).g10_1 : _get_reader__fd8dw8($this).e10_1;
    var distance = location - $this.pz_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      $this.lz_1.q1n(distance);
      $this.pz_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.vz_1 > 0) {
      if ($this.sz_1 >= 0) {
        realizeRemoveNode($this, $this.sz_1, $this.vz_1);
        $this.sz_1 = -1;
      } else {
        realizeMoveNode($this, $this.uz_1, $this.tz_1, $this.vz_1);
        $this.tz_1 = -1;
        $this.uz_1 = -1;
      }
      $this.vz_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.lz_1.o1n(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.lz_1.p1n(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.qz_1 > 0) {
      $this.lz_1.r1n($this.qz_1);
      $this.qz_1 = 0;
    }
    if ($this.rz_1.y18()) {
      $this.lz_1.s1n($this.rz_1.y2());
      $this.rz_1.b1();
    }
  }
  function Companion_4() {
    this.z1n_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.kz_1 = composer;
    this.lz_1 = changeList;
    this.mz_1 = false;
    this.nz_1 = new IntStack();
    this.oz_1 = true;
    this.pz_1 = 0;
    this.qz_1 = 0;
    this.rz_1 = new Stack();
    this.sz_1 = -1;
    this.tz_1 = -1;
    this.uz_1 = -1;
    this.vz_1 = 0;
  }
  protoOf(ComposerChangeListWriter).d13 = function (location) {
    this.pz_1 = this.pz_1 + (location - _get_reader__fd8dw8(this).e10_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).g15 = function (location) {
    this.pz_1 = location;
  };
  protoOf(ComposerChangeListWriter).z16 = function () {
    if (_get_reader__fd8dw8(this).i() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.g10_1;
      if (!(this.nz_1.f1k(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.u12(location);
          this.nz_1.dz(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).m18 = function (value) {
    this.lz_1.t1m(value);
  };
  protoOf(ComposerChangeListWriter).j18 = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.lz_1.z1m(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).s14 = function () {
    this.lz_1.a1n();
  };
  protoOf(ComposerChangeListWriter).y11 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.lz_1.c1n(data);
  };
  protoOf(ComposerChangeListWriter).wz = function () {
    if (this.mz_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.lz_1.f1n();
      this.mz_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).t13 = function () {
    var location = _get_reader__fd8dw8(this).g10_1;
    var currentStartedGroup = this.nz_1.f1k(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if (this.nz_1.f1k(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.nz_1.h13();
      this.lz_1.f1n();
    }
  };
  protoOf(ComposerChangeListWriter).i15 = function () {
    this.lz_1.g1n();
  };
  protoOf(ComposerChangeListWriter).h16 = function () {
    pushSlotEditingOperationPreamble(this);
    this.lz_1.h1n();
    this.pz_1 = this.pz_1 + _get_reader__fd8dw8(this).z1k() | 0;
  };
  protoOf(ComposerChangeListWriter).g16 = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.lz_1.i1n(anchor, from);
  };
  protoOf(ComposerChangeListWriter).f16 = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    this.lz_1.j1n(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).f13 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.lz_1.k1n(offset);
  };
  protoOf(ComposerChangeListWriter).f19 = function (action, composition) {
    this.lz_1.l1n(action, composition);
  };
  protoOf(ComposerChangeListWriter).z17 = function (node) {
    pushApplierOperationPreamble(this);
    this.lz_1.m1n(node);
  };
  protoOf(ComposerChangeListWriter).c18 = function (value, block) {
    pushApplierOperationPreamble(this);
    this.lz_1.n1n(value, block);
  };
  protoOf(ComposerChangeListWriter).j13 = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if (this.sz_1 === nodeIndex) {
        this.vz_1 = this.vz_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.sz_1 = nodeIndex;
        this.vz_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).n13 = function (from, to, count) {
    if (count > 0) {
      if ((this.vz_1 > 0 ? this.tz_1 === (from - this.vz_1 | 0) : false) ? this.uz_1 === (to - this.vz_1 | 0) : false) {
        this.vz_1 = this.vz_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.tz_1 = from;
        this.uz_1 = to;
        this.vz_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).i16 = function () {
    pushPendingUpsAndDowns(this);
    if (this.mz_1) {
      this.i15();
      this.wz();
    }
  };
  protoOf(ComposerChangeListWriter).p13 = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).b17 = function (nodeIndex, group) {
    this.p13();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).f14(group) ? 1 : _get_reader__fd8dw8(this).g14(group);
    if (nodeCount > 0) {
      this.j13(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).s13 = function () {
    if (this.rz_1.y18()) {
      this.rz_1.h13();
    } else {
      this.qz_1 = this.qz_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).h14 = function (node) {
    this.rz_1.g13(node);
  };
  protoOf(ComposerChangeListWriter).b15 = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.lz_1.t1n(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).e15 = function (nodes, effectiveNodeIndex) {
    this.lz_1.u1n(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).f15 = function (resolvedState, parentContext, from, to) {
    this.lz_1.v1n(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).a17 = function (composition, parentContext, reference) {
    this.lz_1.w1n(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).j15 = function () {
    this.lz_1.x1n();
    this.pz_1 = 0;
  };
  protoOf(ComposerChangeListWriter).h15 = function (other, effectiveNodeIndex) {
    this.lz_1.y1n(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).k16 = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.nz_1.o()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var message = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message));
    }
  };
  protoOf(ComposerChangeListWriter).l16 = function () {
    this.mz_1 = false;
    this.nz_1.b1();
    this.pz_1 = 0;
  };
  function FixupList() {
    this.i11_1 = new Operations();
    this.j11_1 = new Operations();
  }
  protoOf(FixupList).o = function () {
    return this.i11_1.o();
  };
  protoOf(FixupList).b1 = function () {
    this.j11_1.b1();
    this.i11_1.b1();
  };
  protoOf(FixupList).a1o = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.j11_1.o()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var message = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeRuntimeError(toString(message));
    }
    this.i11_1.s1m(applier, slots, rememberManager);
  };
  protoOf(FixupList).x17 = function (factory, insertIndex, groupAnchor) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.i11_1;
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_3 = this.j11_1;
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_3.u1m(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(this_3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_3.q1m_1 === createExpectedArgMask(this_3, operation_0.v1m_1) ? this_3.r1m_1 === createExpectedArgMask(this_3, operation_0.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_4 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & this_3.q1m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_4.q5(', ');
            }
            this_4.q5(operation_0.x1m(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_4.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_5 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & this_3.r1m_1) === 0)) {
            if (missingIntCount_0 > 0) {
              this_5.q5(', ');
            }
            this_5.q5(operation_0.y1m(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_5.toString();
      var message_0 = 'Error while pushing ' + operation_0 + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(FixupList).v13 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.j11_1.y18()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var message = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeRuntimeError(toString(message));
    }
    this.j11_1.b1o(this.i11_1);
  };
  protoOf(FixupList).d18 = function (value, block) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var this_0 = this.i11_1;
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    this_0.u1m(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(this_0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0.q1m_1 === createExpectedArgMask(this_0, operation.v1m_1) ? this_0.r1m_1 === createExpectedArgMask(this_0, operation.w1m_1) : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & this_0.q1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_1.q5(', ');
            }
            this_1.q5(operation.x1m(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_1.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w1m_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & this_0.r1m_1) === 0)) {
            if (missingIntCount > 0) {
              this_2.q5(', ');
            }
            this_2.q5(operation.y1m(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_2.toString();
      var message = 'Error while pushing ' + operation + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var times = _this__u8e3s4.f1o(tmp$ret$0);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.fv();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.j1o(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.ev(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.r1j(_this__u8e3s4.f1o(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.i1c(_this__u8e3s4.j1o(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.f1o(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.i1c(value.f18_1);
    }
    var previous = slots.o1k(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      rememberManager.y19(previous.f18_1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.bl();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.t1j(_this__u8e3s4.j1o(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.q1k(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.r1k(_this__u8e3s4.j1o(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.t1k(_this__u8e3s4.f1o(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.x13();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.x11();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.j1o(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.bv();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).dw();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.j1o(tmp$ret$1);
    block(applier.bv(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).x1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.f1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.iv(tmp, _this__u8e3s4.f1o(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).x1m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.f1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.f1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.jv(tmp, tmp_0, _this__u8e3s4.f1o(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.j1o(tmp$ret$1);
    slots.t12();
    slots.v1k(insertTable, anchor.z18(insertTable), false);
    slots.y13();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).y1m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.j1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.j1o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.w11();
    var tmp;
    try {
      fixups.a1o(applier, writer, rememberManager);
      tmp = Unit_instance;
    }finally {
      writer.k10();
    }
    slots.t12();
    slots.v1k(insertTable, anchor.z18(insertTable), false);
    slots.y13();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.j1o(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.j1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.f1o(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.n1k(groupAnchor, node);
    nodeApplier.gv(insertIndex, node);
    nodeApplier.ev(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).x1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).x1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).y1m.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.f1o(tmp$ret$1);
    applier.fv();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.g1k(groupAnchor);
    nodeApplier.hv(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.i1k();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.j1o(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.j1o(tmp$ret$1);
    tmp.a1q_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.j1o(tmp$ret$0).a1q_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.j1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.j(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.hv(effectiveNodeIndex + index | 0, item);
        applier.gv(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).y1m.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.j1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.j1o(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.j1o(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.c15(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.w1k(1, resolvedState.d15_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.v14_1;
    tmp_0.q1e(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.x13();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).y1m.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.j1o(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.j1o(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.j1o(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).y1m = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).y1m.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).e1o = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.j1o(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1q_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.j1o(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.q1b(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.v1m_1 = ints;
    this.w1m_1 = objects;
  }
  protoOf(Operation).g1o = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).s6();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).x1m = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).y1m = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.g1o();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.a15(anchor);
    runtimeCheck(slots.d11_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.d11_1 < destination) {
      if (slots.c1k(destination)) {
        if (slots.a19()) {
          applier.ev(slots.e16(slots.d11_1));
          nodeIndex = 0;
        }
        slots.a12();
      } else
        nodeIndex = nodeIndex + slots.n11() | 0;
    }
    runtimeCheck(slots.d11_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.b1k(index)) {
      slots.x11();
      if (slots.f14(slots.f11_1)) {
        applier.fv();
      }
      slots.x13();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.w11();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.t12();
      writer.e12(get_movableContentKey(), reference.t14_1);
      writer.p14();
      writer.k18(reference.u14_1);
      var anchors = slots.u1k(reference.x14_1, 1, writer);
      writer.n11();
      writer.x13();
      writer.y13();
      tmp = anchors;
    }finally {
      writer.k10();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.t1e(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.w11();
      var tmp_0;
      try {
        Companion_instance_2.q1e(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.k10();
      }
    }
    parentContext.w1d(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.d11_1;
    var current = slots.f11_1;
    while (current >= 0 ? !slots.f14(current) : false) {
      current = slots.t11(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.d1k(original, current)) {
        if (slots.f14(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.f14(current) ? 1 : slots.g14(current)) | 0;
        current = current + slots.l13(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.l1q_1 = $composition;
    this.m1q_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).n1d = function (scope, instance) {
    var tmp = this.l1q_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1d(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.m1q_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.y14_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.changelist.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.i1a(this_0);
        tmp_2 = this_0;
      }
      tmp_0.y14_1 = plus_1(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).r1d = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).y1c = function (value) {
  };
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.q1m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).x1m(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.q1m_1 = $this$with.q1m_1 | mask;
    $this$with.m1m_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.r1m_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var message = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).y1m(parameter);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    $this$with.r1m_1 = $this$with.r1m_1 | mask;
    $this$with.o1m_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.m1m_1.length;
    if (requiredSize > currentSize) {
      $this.m1m_1 = copyOf($this.m1m_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.o1m_1.length;
    if (requiredSize > currentSize) {
      $this.o1m_1 = copyOf_0($this.o1m_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    var tmp;
    if (paramCount === 0) {
      tmp = 0;
    } else {
      tmp = -1 >>> (32 - paramCount | 0) | 0;
    }
    return tmp;
  }
  function peekOperation($this) {
    return ensureNotNull($this.k1m_1[$this.l1m_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.n1m_1 - peekOperation($this).v1m_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.p1m_1 - peekOperation($this).w1m_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.q1q_1 = $outer;
    this.n1q_1 = 0;
    this.o1q_1 = 0;
    this.p1q_1 = 0;
  }
  protoOf(OpIterator).z = function () {
    if (this.n1q_1 >= this.q1q_1.l1m_1)
      return false;
    var op = this.r1q();
    this.o1q_1 = this.o1q_1 + op.v1m_1 | 0;
    this.p1q_1 = this.p1q_1 + op.w1m_1 | 0;
    this.n1q_1 = this.n1q_1 + 1 | 0;
    return this.n1q_1 < this.q1q_1.l1m_1;
  };
  protoOf(OpIterator).r1q = function () {
    return ensureNotNull(this.q1q_1.k1m_1[this.n1q_1]);
  };
  protoOf(OpIterator).f1o = function (parameter) {
    return this.q1q_1.m1m_1[this.o1q_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).j1o = function (parameter) {
    var tmp = this.q1q_1.o1m_1[this.p1q_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.s1q_1 = 1024;
    this.t1q_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Operations() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.k1m_1 = fillArrayVal(Array(16), null);
    this.l1m_1 = 0;
    this.m1m_1 = new Int32Array(16);
    this.n1m_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.o1m_1 = fillArrayVal(Array(16), null);
    this.p1m_1 = 0;
    this.q1m_1 = 0;
    this.r1m_1 = 0;
  }
  protoOf(Operations).i = function () {
    return this.l1m_1;
  };
  protoOf(Operations).o = function () {
    return this.i() === 0;
  };
  protoOf(Operations).y18 = function () {
    return !(this.i() === 0);
  };
  protoOf(Operations).b1 = function () {
    this.l1m_1 = 0;
    this.n1m_1 = 0;
    fill_0(this.o1m_1, null, 0, this.p1m_1);
    this.p1m_1 = 0;
  };
  protoOf(Operations).u1m = function (operation) {
    this.q1m_1 = 0;
    this.r1m_1 = 0;
    if (this.l1m_1 === this.k1m_1.length) {
      var resizeAmount = coerceAtMost(this.l1m_1, 1024);
      this.k1m_1 = copyOf_0(this.k1m_1, this.l1m_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.n1m_1 + operation.v1m_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.p1m_1 + operation.w1m_1 | 0);
    var tmp = this.k1m_1;
    var tmp1 = this.l1m_1;
    this.l1m_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.n1m_1 = this.n1m_1 + operation.v1m_1 | 0;
    this.p1m_1 = this.p1m_1 + operation.w1m_1 | 0;
  };
  protoOf(Operations).b1n = function (operation) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.v1m_1 === 0 ? operation.w1m_1 === 0 : false)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var message = 'Cannot push ' + operation + ' without arguments because it expects ' + ('' + operation.v1m_1 + ' ints and ' + operation.w1m_1 + ' objects.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.u1m(operation);
  };
  protoOf(Operations).b1o = function (other) {
    if (this.o()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.k1m_1;
    this.l1m_1 = this.l1m_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.l1m_1]);
    this.k1m_1[this.l1m_1] = null;
    other.u1m(op);
    var thisObjIdx = this.p1m_1;
    var otherObjIdx = other.p1m_1;
    // Inline function 'kotlin.repeat' call
    var times = op.w1m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.o1m_1[otherObjIdx] = this.o1m_1[thisObjIdx];
        this.o1m_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.n1m_1;
    var otherIntIdx = other.n1m_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.v1m_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.m1m_1[otherIntIdx] = this.m1m_1[thisIntIdx];
        this.m1m_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.p1m_1 = this.p1m_1 - op.w1m_1 | 0;
    this.n1m_1 = this.n1m_1 - op.v1m_1 | 0;
  };
  protoOf(Operations).s1m = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.y18()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        iterator.r1q().e1o(iterator, applier, slots, rememberManager);
      }
       while (iterator.z());
    }
    this.b1();
  };
  protoOf(Operations).toString = function () {
    return anyToString(this);
  };
  function IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this$0, $index) {
    var tmp = this;
    var tmp_0 = this$0.u15_1[$index];
    tmp.u1q_1 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this$0.v15_1[$index];
    tmp_1.v1q_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).i2 = function () {
    return this.u1q_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1$iterator$1$1).j2 = function () {
    return this.v1q_1;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation) {
    this.e1r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).i1r = function ($this$sequence, $completion) {
    var tmp = this.j1r($this$sequence, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).qc = function (p1, $completion) {
    return this.i1r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 4;
            this.g1r_1 = until(0, this.e1r_1.w15_1).k();
            this.sb_1 = 1;
            continue $sm;
          case 1:
            if (!this.g1r_1.x()) {
              this.sb_1 = 3;
              continue $sm;
            }

            this.h1r_1 = this.g1r_1.z();
            this.sb_1 = 2;
            suspendResult = this.f1r_1.ae(new IdentityArrayMap$asMap$1$entries$1$iterator$1$1(this.e1r_1, this.h1r_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 4) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he).j1r = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this.e1r_1, completion);
    i.f1r_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.i1r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation) {
    this.s1r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).w1r = function ($this$sequence, $completion) {
    var tmp = this.x1r($this$sequence, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).qc = function (p1, $completion) {
    return this.w1r(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 4;
            this.u1r_1 = until(0, this.s1r_1.w15_1).k();
            this.sb_1 = 1;
            continue $sm;
          case 1:
            if (!this.u1r_1.x()) {
              this.sb_1 = 3;
              continue $sm;
            }

            this.v1r_1 = this.u1r_1.z();
            this.sb_1 = 2;
            var tmp_0 = this.s1r_1.u15_1[this.v1r_1];
            suspendResult = this.t1r_1.ae(!(tmp_0 == null) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 4) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw).x1r = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this.s1r_1, completion);
    i.t1r_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.w1r($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation) {
    this.g1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).k1s = function ($this$sequence, $completion) {
    var tmp = this.l1s($this$sequence, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).qc = function (p1, $completion) {
    return this.k1s(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 4;
            this.i1s_1 = until(0, this.g1s_1.w15_1).k();
            this.sb_1 = 1;
            continue $sm;
          case 1:
            if (!this.i1s_1.x()) {
              this.sb_1 = 3;
              continue $sm;
            }

            this.j1s_1 = this.i1s_1.z();
            this.sb_1 = 2;
            var tmp_0 = this.g1s_1.v15_1[this.j1s_1];
            suspendResult = this.h1s_1.ae((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 4) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu).l1s = function ($this$sequence, completion) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this.g1s_1, completion);
    i.h1s_1 = $this$sequence;
    return i;
  };
  function IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this$0, resultContinuation) {
    var i = new IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k1s($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IdentityArrayMap$asMap$1$entries$1(this$0) {
    this.m1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$entries$1).i = function () {
    return this.m1s_1.w15_1;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).o = function () {
    return this.m1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_entries_$o$iterator$slambda_r160he_0(this.m1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).n1s = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.collection.<no name provided>.containsAll.<anonymous>' call
        if (!this.o1s(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).n = function (elements) {
    return this.n1s(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).o1s = function (element) {
    return this.m1s_1.u1d(element.i2()) === element.j2();
  };
  protoOf(IdentityArrayMap$asMap$1$entries$1).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.o1s((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$keys$1(this$0) {
    this.p1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$keys$1).i = function () {
    return this.p1s_1.w15_1;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).o = function () {
    return this.p1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_keys_$o$iterator$slambda_qj88bw_0(this.p1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).q1s = function (elements) {
    var tmp0_iterator = elements.k();
    while (tmp0_iterator.x()) {
      var key = tmp0_iterator.z();
      if (!this.v1d(key))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).n = function (elements) {
    return this.q1s(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).v1d = function (element) {
    return this.p1s_1.v1d(element);
  };
  protoOf(IdentityArrayMap$asMap$1$keys$1).m = function (element) {
    if (!!(element == null))
      return false;
    return this.v1d(!(element == null) ? element : THROW_CCE());
  };
  function IdentityArrayMap$asMap$1$values$1(this$0) {
    this.r1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1$values$1).i = function () {
    return this.r1s_1.w15_1;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).o = function () {
    return this.r1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).k = function () {
    return sequence(IdentityArrayMap$asMap$o$_get_values_$o$iterator$slambda_qilghu_0(this.r1s_1, null)).k();
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).s1s = function (elements) {
    var tmp0_iterator = elements.k();
    while (tmp0_iterator.x()) {
      var value = tmp0_iterator.z();
      if (!this.t1s(value))
        return false;
    }
    return true;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).n = function (elements) {
    return this.s1s(elements);
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).t1s = function (element) {
    var inductionVariable = 0;
    var last = this.r1s_1.w15_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.r1s_1.v15_1[index], element))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IdentityArrayMap$asMap$1$values$1).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t1s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.w15_1 - 1 | 0;
    var keys = $this.u15_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, key, keyHash) {
    var keys = $this.u15_1;
    var size = $this.w15_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap$asMap$1(this$0) {
    this.u1s_1 = this$0;
  }
  protoOf(IdentityArrayMap$asMap$1).f2 = function () {
    return new IdentityArrayMap$asMap$1$entries$1(this.u1s_1);
  };
  protoOf(IdentityArrayMap$asMap$1).d2 = function () {
    return new IdentityArrayMap$asMap$1$keys$1(this.u1s_1);
  };
  protoOf(IdentityArrayMap$asMap$1).i = function () {
    return this.u1s_1.w15_1;
  };
  protoOf(IdentityArrayMap$asMap$1).e2 = function () {
    return new IdentityArrayMap$asMap$1$values$1(this.u1s_1);
  };
  protoOf(IdentityArrayMap$asMap$1).o = function () {
    return this.u1s_1.o();
  };
  protoOf(IdentityArrayMap$asMap$1).u1d = function (key) {
    return this.u1s_1.u1d(key);
  };
  protoOf(IdentityArrayMap$asMap$1).p2 = function (key) {
    if (!!(key == null))
      return null;
    return this.u1d(!(key == null) ? key : THROW_CCE());
  };
  protoOf(IdentityArrayMap$asMap$1).v1s = function (key) {
    return !(this.u1s_1.u1d(key) == null);
  };
  protoOf(IdentityArrayMap$asMap$1).m2 = function (key) {
    if (!!(key == null))
      return false;
    return this.v1s(!(key == null) ? key : THROW_CCE());
  };
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.u15_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.v15_1 = fillArrayVal(Array(capacity), null);
    this.w15_1 = 0;
  }
  protoOf(IdentityArrayMap).o = function () {
    return this.w15_1 === 0;
  };
  protoOf(IdentityArrayMap).y18 = function () {
    return this.w15_1 > 0;
  };
  protoOf(IdentityArrayMap).v1d = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).u1d = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.v15_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).d1c = function (key, value) {
    var keys = this.u15_1;
    var values = this.v15_1;
    var size = this.w15_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.u15_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.v15_1 = destValues;
      this.w15_1 = this.w15_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).s1c = function () {
    return new IdentityArrayMap$asMap$1(this);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.l15_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.m15_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_0($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, value, valueHash) {
    var values = $this.m15_1;
    var size = $this.l15_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.x1s_1 = this$0;
    this.w1s_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).x = function () {
    return this.w1s_1 < this.x1s_1.l15_1;
  };
  protoOf(IdentityArraySet$iterator$1).z = function () {
    var tmp = this.x1s_1.m15_1;
    var tmp1 = this.w1s_1;
    this.w1s_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.l15_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.m15_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).i = function () {
    return this.l15_1;
  };
  protoOf(IdentityArraySet).b1g = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).m = function (element) {
    if (!!(element == null))
      return false;
    return this.b1g(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).i1a = function (value) {
    var index;
    var size = this.l15_1;
    var values = this.m15_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.m15_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.m15_1[insertIndex] = value;
    this.l15_1 = this.l15_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).b1 = function () {
    fill_0(this.m15_1, null);
    this.l15_1 = 0;
  };
  protoOf(IdentityArraySet).u1g = function (collection) {
    if (collection.o())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.k();
      while (tmp0_iterator.x()) {
        var value = tmp0_iterator.z();
        this.i1a(value);
      }
    } else {
      var thisValues = this.m15_1;
      var otherValues = collection.m15_1;
      var thisSize = this.l15_1;
      var otherSize = collection.l15_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.m15_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.l15_1 = this.l15_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.m15_1 = newArray;
        this.l15_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).o = function () {
    return this.l15_1 === 0;
  };
  protoOf(IdentityArraySet).y18 = function () {
    return this.l15_1 > 0;
  };
  protoOf(IdentityArraySet).y1s = function (value) {
    var index = find_1(this, value);
    var values = this.m15_1;
    var size = this.l15_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.l15_1 = this.l15_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).ud = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.b1g(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).n = function (elements) {
    return this.ud(elements);
  };
  protoOf(IdentityArraySet).k = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function MutableVector(content, size) {
    this.y15_1 = content;
    this.z15_1 = null;
    this.a16_1 = size;
  }
  protoOf(MutableVector).b16 = function (element) {
    this.z1s(this.a16_1 + 1 | 0);
    this.y15_1[this.a16_1] = element;
    this.a16_1 = this.a16_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).z1s = function (capacity) {
    var oldContent = this.y15_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.y15_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).g1 = function (index) {
    var content = this.y15_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.a16_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.a16_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.a16_1 = this.a16_1 - 1 | 0;
    content[this.a16_1] = null;
    return item;
  };
  function ScopeMap() {
    this.k1b_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).p1b = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.k1b_1;
    var index = this_0.mu(key);
    var inserting = index < 0;
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.cu_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).u(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.u(!(value == null) ? value : THROW_CCE());
          set.u(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.bu_1[insertionIndex] = key;
      this_0.cu_1[insertionIndex] = computedValue;
    } else {
      this_0.cu_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).o1b = function (element) {
    return this.k1b_1.m2(element);
  };
  protoOf(ScopeMap).n1b = function (key, scope) {
    var tmp0_elvis_lhs = this.k1b_1.p2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.v(scope);
      if (removed ? set.o() : false) {
        this.k1b_1.h2(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.k1b_1.h2(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).c1d = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.k1b_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.au_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.hb(this_1.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var tmp = this_0.bu_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.cu_1[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.pu_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.ou_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.hb(this_2.db().eb(7)).hb(get_BitmaskMsb()).equals(get_BitmaskMsb())) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.hb(new Long(255, 0)).t9(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === scope) {
                                    set.av(index_0);
                                  }
                                }
                                slot_0 = slot_0.fb(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.o();
                  } else {
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                    tmp_1 = (!(value == null) ? value : THROW_CCE()) === scope;
                  }
                  if (tmp_1) {
                    this_0.nu(index);
                  }
                }
                slot = slot.fb(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  function persistentSetOf() {
    return Companion_getInstance_10().b1t();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.c1t_1 = index;
    this.d1t_1 = size;
  }
  protoOf(AbstractListIterator).x = function () {
    return this.c1t_1 < this.d1t_1;
  };
  protoOf(AbstractListIterator).e1t = function () {
    if (!this.x())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).a1 = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.f1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.w2();
  };
  protoOf(AbstractPersistentList).v = function (element) {
    var index = this.l(element);
    if (!(index === -1)) {
      return this.g1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).m = function (element) {
    return !(this.l(element) === -1);
  };
  protoOf(AbstractPersistentList).n = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.m(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).k = function () {
    return this.pa();
  };
  protoOf(AbstractPersistentList).pa = function () {
    return this.s1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.j1t_1 = buffer;
  }
  protoOf(BufferIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.c1t_1;
    this.c1t_1 = tmp1 + 1 | 0;
    return this.j1t_1[tmp1];
  };
  function rootSize($this) {
    return rootSize_1($this.m1t_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.m1t_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.n1t_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.n1t_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.m1t_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.n1t_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.m1t_1 + 1 | 0, $this.n1t_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.m1t_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(size), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.m1t_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.l1t_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.l1t_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.m1t_1 + 1 | 0, $this.n1t_1);
    }
    var lastElement = $this.l1t_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.l1t_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, endIndex);
      elementCarry.o1t_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.o1t_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.m1t_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.l1t_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.l1t_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.o1t_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.o1t_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, startIndex, endIndex);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.o1t_1;
      tailCarry.o1t_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.l1t_1;
    }
    var buffer = $this.k1t_1;
    var shift = $this.n1t_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.k1t_1 = root;
    this.l1t_1 = tail;
    this.m1t_1 = size;
    this.n1t_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m1t_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.m1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.m1t_1 - rootSize_1(this.m1t_1) | 0) <= coerceAtMost(this.l1t_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).i = function () {
    return this.m1t_1;
  };
  protoOf(PersistentVector).u = function (element) {
    var tailSize = this.m1t_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.l1t_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.k1t_1, newTail, this.m1t_1 + 1 | 0, this.n1t_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.k1t_1, this.l1t_1, newTail_0);
  };
  protoOf(PersistentVector).g1t = function (index, element) {
    ListImplementation_instance.l1(index, this.m1t_1);
    if (index === this.m1t_1) {
      return this.u(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.k1t_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.k1t_1, this.n1t_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.o1t_1);
  };
  protoOf(PersistentVector).g1 = function (index) {
    ListImplementation_instance.r1(index, this.m1t_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.k1t_1, rootSize_0, this.n1t_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.k1t_1, this.n1t_1, index, new ObjectRef(this.l1t_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.n1t_1, 0);
  };
  protoOf(PersistentVector).f1t = function () {
    return new PersistentVectorBuilder(this, this.k1t_1, this.l1t_1, this.n1t_1);
  };
  protoOf(PersistentVector).s1 = function (index) {
    ListImplementation_instance.l1(index, this.m1t_1);
    var tmp = this.l1t_1;
    return new PersistentVectorIterator(this.k1t_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.m1t_1, (this.n1t_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).j = function (index) {
    ListImplementation_instance.r1(index, this.m1t_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).r = function (index, element) {
    ListImplementation_instance.r1(index, this.m1t_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.l1t_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.k1t_1, newTail, this.m1t_1, this.n1t_1);
    }
    var newRoot = setInRoot(this, this.k1t_1, this.n1t_1, index, element);
    return new PersistentVector(newRoot, this.l1t_1, this.m1t_1, this.n1t_1);
  };
  function rootSize_0($this) {
    if ($this.x1t_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.x1t_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.x1t_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.u1t_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.u1t_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.u1t_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.x1t_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.t1t_1) {
      $this.v1t_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.t1t_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.w1t_1 = newTail;
      $this.t1t_1 = $this.t1t_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.x1t_1 = $this.x1t_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.v1t_1 = filledTail;
      $this.w1t_1 = newTail;
      $this.x1t_1 = $this.x1t_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.v1t_1 = pushTail_0($this, root, filledTail, $this.t1t_1);
      $this.w1t_1 = newTail;
      $this.x1t_1 = $this.x1t_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.x1t_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.x() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.z();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.t1t_1 ? pushBuffers($this, root, rootSize, $this.t1t_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.x()) {
      $this.t1t_1 = $this.t1t_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.t1t_1, $this.t1t_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.x()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message = 'invalid buffersIterator';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var message_0 = 'negative shift';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.z();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.x();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.w1t_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.w1t_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.v1t_1 = root;
      $this.w1t_1 = mutableTail;
      $this.x1t_1 = $this.x1t_1 + 1 | 0;
    } else {
      var lastElement = $this.w1t_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.w1t_1;
      var destinationOffset_0 = index + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, endIndex);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.o1t_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, destination, destinationOffset, bufferIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.o1t_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.w1t_1;
    }
    var buffer = ensureNotNull($this.v1t_1);
    var shift = $this.t1t_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.x1t_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.w1t_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.w1t_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.w1t_1;
      var destination = makeMutable($this, $this.w1t_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.v1t_1 = root;
      $this.w1t_1 = mutableTail;
      $this.x1t_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.t1t_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, destination, bufferIndex, startIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.o1t_1;
      tailCarry.o1t_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.v1t_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.w1t_1 = tmp_0;
      $this.x1t_1 = rootSize;
      $this.t1t_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.o1t_1;
    tmp_1.w1t_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.x1t_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.v1t_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.t1t_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.v1t_1 = newRoot;
      $this.t1t_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.o1t_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.f1_1 = $this.f1_1 + 1 | 0;
      }
      oldElementCarry.o1t_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.q1t_1 = vector;
    this.r1t_1 = vectorRoot;
    this.s1t_1 = vectorTail;
    this.t1t_1 = rootShift;
    this.u1t_1 = new MutabilityOwnership();
    this.v1t_1 = this.r1t_1;
    this.w1t_1 = this.s1t_1;
    this.x1t_1 = this.q1t_1.i();
  }
  protoOf(PersistentVectorBuilder).i = function () {
    return this.x1t_1;
  };
  protoOf(PersistentVectorBuilder).y1t = function () {
    return this.f1_1;
  };
  protoOf(PersistentVectorBuilder).w2 = function () {
    var tmp = this;
    var tmp_0;
    if (this.v1t_1 === this.r1t_1 ? this.w1t_1 === this.s1t_1 : false) {
      tmp_0 = this.q1t_1;
    } else {
      this.u1t_1 = new MutabilityOwnership();
      this.r1t_1 = this.v1t_1;
      this.s1t_1 = this.w1t_1;
      var tmp_1;
      if (this.v1t_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.w1t_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.w1t_1, this.x1t_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.v1t_1), this.w1t_1, this.x1t_1, this.t1t_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.q1t_1 = tmp_0;
    return this.q1t_1;
  };
  protoOf(PersistentVectorBuilder).u = function (element) {
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.w1t_1);
      mutableTail[tailSize] = element;
      this.w1t_1 = mutableTail;
      this.x1t_1 = this.x1t_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.v1t_1, this.w1t_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a1 = function (elements) {
    if (elements.o()) {
      return false;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.k();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.i()) {
      this.w1t_1 = copyToBuffer(this, makeMutable(this, this.w1t_1), tailSize, elementsIterator);
      this.x1t_1 = this.x1t_1 + elements.i() | 0;
    } else {
      var buffersSize = ((elements.i() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.w1t_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.v1t_1;
      var tmp_1 = rootSize_0(this);
      tmp.v1t_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.w1t_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.x1t_1 = this.x1t_1 + elements.i() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).q1 = function (index, element) {
    ListImplementation_instance.l1(index, this.x1t_1);
    if (index === this.x1t_1) {
      this.u(element);
      return Unit_instance;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.v1t_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.v1t_1), this.t1t_1, index, element, elementCarry);
    var tmp = elementCarry.o1t_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).j = function (index) {
    ListImplementation_instance.r1(index, this.x1t_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g1 = function (index) {
    ListImplementation_instance.r1(index, this.x1t_1);
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.v1t_1, rootSize, this.t1t_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.w1t_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.v1t_1), this.t1t_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.t1t_1, 0);
    var tmp_0 = elementCarry.o1t_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).r = function (index, element) {
    ListImplementation_instance.r1(index, this.x1t_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.w1t_1);
      if (!(mutableTail === this.w1t_1)) {
        this.f1_1 = this.f1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.w1t_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.v1t_1 = setInRoot_0(this, ensureNotNull(this.v1t_1), this.t1t_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.o1t_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).k = function () {
    return this.pa();
  };
  protoOf(PersistentVectorBuilder).pa = function () {
    return this.s1(0);
  };
  protoOf(PersistentVectorBuilder).s1 = function (index) {
    ListImplementation_instance.l1(index, this.x1t_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.b1u_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.c1u_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).z = function () {
    this.e1t();
    if (this.c1u_1.x()) {
      this.c1t_1 = this.c1t_1 + 1 | 0;
      return this.c1u_1.z();
    }
    var tmp3 = this.c1t_1;
    this.c1t_1 = tmp3 + 1 | 0;
    return this.b1u_1[tmp3 - this.c1u_1.d1t_1 | 0];
  };
  function reset($this) {
    $this.d1t_1 = $this.k1u_1.x1t_1;
    $this.l1u_1 = $this.k1u_1.y1t();
    $this.n1u_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.k1u_1.v1t_1;
    if (root == null) {
      $this.m1u_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.k1u_1.x1t_1);
    var trieIndex = coerceAtMost($this.c1t_1, trieSize);
    var trieHeight = ($this.k1u_1.t1t_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.m1u_1 == null) {
      $this.m1u_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.m1u_1).o1u(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.l1u_1 === $this.k1u_1.y1t()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.n1u_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.x1t_1);
    this.k1u_1 = builder;
    this.l1u_1 = this.k1u_1.y1t();
    this.m1u_1 = null;
    this.n1u_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).z = function () {
    checkForComodification(this);
    this.e1t();
    this.n1u_1 = this.c1t_1;
    var tmp2_elvis_lhs = this.m1u_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.k1u_1.w1t_1;
      var tmp1 = this.c1t_1;
      this.c1t_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.x()) {
      this.c1t_1 = this.c1t_1 + 1 | 0;
      return trieIterator.z();
    }
    var tmp_2 = this.k1u_1.w1t_1;
    var tmp6 = this.c1t_1;
    this.c1t_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.d1t_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).y = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.k1u_1.g1(this.n1u_1);
    if (this.n1u_1 < this.c1t_1)
      this.c1t_1 = this.n1u_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.p1u_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_7();
    AbstractPersistentList.call(this);
    this.q1u_1 = buffer;
    assert(this.q1u_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).i = function () {
    return this.q1u_1.length;
  };
  protoOf(SmallPersistentVector).u = function (element) {
    if (this.i() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.q1u_1, this.i() + 1 | 0);
      newBuffer[this.i()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.q1u_1, tail, this.i() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).a1 = function (elements) {
    if ((this.i() + elements.i() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.q1u_1, this.i() + elements.i() | 0);
      var index = this.i();
      var tmp0_iterator = elements.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.f1t();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.w2();
  };
  protoOf(SmallPersistentVector).g1t = function (index, element) {
    ListImplementation_instance.l1(index, this.i());
    if (index === this.i()) {
      return this.u(element);
    }
    if (this.i() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.i() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.q1u_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.q1u_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.i();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.q1u_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.q1u_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.i() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.q1u_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.i() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).g1 = function (index) {
    ListImplementation_instance.r1(index, this.i());
    if (this.i() === 1) {
      return Companion_getInstance_7().p1u_1;
    }
    var newBuffer = copyOf_0(this.q1u_1, this.i() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.q1u_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.i();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).f1t = function () {
    return new PersistentVectorBuilder(this, null, this.q1u_1, 0);
  };
  protoOf(SmallPersistentVector).l = function (element) {
    return indexOf(this.q1u_1, element);
  };
  protoOf(SmallPersistentVector).s1 = function (index) {
    ListImplementation_instance.l1(index, this.i());
    var tmp = this.q1u_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.i());
  };
  protoOf(SmallPersistentVector).j = function (index) {
    ListImplementation_instance.r1(index, this.i());
    var tmp = this.q1u_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).r = function (index, element) {
    ListImplementation_instance.r1(index, this.i());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.q1u_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.f1u_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.f1u_1) {
      var tmp = $this.g1u_1;
      var tmp_0 = i;
      var tmp_1 = $this.g1u_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.c1t_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.f1u_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.c1t_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.c1t_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.g1u_1[$this.f1u_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.f1u_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.f1u_1;
    tmp.g1u_1 = fillArrayVal(Array(size_0), null);
    this.h1u_1 = index === size;
    this.g1u_1[0] = root;
    fillPath(this, index - (this.h1u_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).o1u = function (root, index, size, height) {
    this.c1t_1 = index;
    this.d1t_1 = size;
    this.f1u_1 = height;
    if (this.g1u_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.g1u_1 = fillArrayVal(Array(height), null);
    }
    this.g1u_1[0] = root;
    this.h1u_1 = index === size;
    fillPath(this, index - (this.h1u_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.c1t_1 = this.c1t_1 + 1 | 0;
    if (this.c1t_1 === this.d1t_1) {
      this.h1u_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  function persistentVectorOf() {
    return Companion_getInstance_7().p1u_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.o1t_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.r1u_1 = new PersistentHashMap(Companion_getInstance_9().s1u_1, 0);
  }
  protoOf(Companion_7).t1u = function () {
    var tmp = this.r1u_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_8();
    AbstractMap.call(this);
    this.w1u_1 = node;
    this.x1u_1 = size;
  }
  protoOf(PersistentHashMap).i = function () {
    return this.x1u_1;
  };
  protoOf(PersistentHashMap).d2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).e2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).f2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).m2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w1u_1.c1v(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).p2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.w1u_1.d1v(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).g2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.w1u_1.e1v(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.f1v_1, this.i() + newNodeResult.g1v_1 | 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.w1u_1.h1v(tmp$ret$0, key, 0);
    if (this.w1u_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_8().t1u();
    }
    return new PersistentHashMap(newNode, this.i() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.i1v_1[pathIndex].o1v()) {
      return pathIndex;
    }
    if ($this.i1v_1[pathIndex].s1v()) {
      var node = $this.i1v_1[pathIndex].p1v();
      if (pathIndex === 6) {
        $this.i1v_1[pathIndex + 1 | 0].r1v(node.b1v_1, node.b1v_1.length);
      } else {
        $this.i1v_1[pathIndex + 1 | 0].r1v(node.b1v_1, imul(get_ENTRY_SIZE(), node.q1v()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.i1v_1[$this.j1v_1].o1v()) {
      return Unit_instance;
    }
    var inductionVariable = $this.j1v_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.i1v_1[i].s1v() : false) {
          $this.i1v_1[i].t1v();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.j1v_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.i1v_1[i - 1 | 0].t1v();
        }
        $this.i1v_1[i].r1v(Companion_getInstance_9().s1u_1.b1v_1, 0);
      }
       while (0 <= inductionVariable);
    $this.k1v_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.i1v_1 = path;
    this.j1v_1 = 0;
    this.k1v_1 = true;
    this.i1v_1[0].r1v(node.b1v_1, imul(get_ENTRY_SIZE(), node.q1v()));
    this.j1v_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).x = function () {
    return this.k1v_1;
  };
  protoOf(PersistentHashMapBaseIterator).z = function () {
    checkHasNext(this);
    var result = this.i1v_1[this.j1v_1].z();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.l1v_1 = Companion_getInstance_9().s1u_1.b1v_1;
    this.m1v_1 = 0;
    this.n1v_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).u1v = function (buffer, dataSize, index) {
    this.l1v_1 = buffer;
    this.m1v_1 = dataSize;
    this.n1v_1 = index;
  };
  protoOf(TrieNodeBaseIterator).r1v = function (buffer, dataSize) {
    this.u1v(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).o1v = function () {
    return this.n1v_1 < this.m1v_1;
  };
  protoOf(TrieNodeBaseIterator).s1v = function () {
    assert(this.n1v_1 >= this.m1v_1);
    return this.n1v_1 < this.l1v_1.length;
  };
  protoOf(TrieNodeBaseIterator).p1v = function () {
    assert(this.s1v());
    var tmp = this.l1v_1[this.n1v_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).t1v = function () {
    assert(this.s1v());
    this.n1v_1 = this.n1v_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).x = function () {
    return this.o1v();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).z = function () {
    assert(this.o1v());
    this.n1v_1 = this.n1v_1 + 2 | 0;
    var tmp = this.l1v_1[this.n1v_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).z = function () {
    assert(this.o1v());
    this.n1v_1 = this.n1v_1 + 2 | 0;
    var tmp = this.l1v_1[this.n1v_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).z = function () {
    assert(this.o1v());
    this.n1v_1 = this.n1v_1 + 2 | 0;
    var tmp = this.l1v_1[this.n1v_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.l1v_1[this.n1v_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.e1w_1 = key;
    this.f1w_1 = value;
  }
  protoOf(MapEntry).i2 = function () {
    return this.e1w_1;
  };
  protoOf(MapEntry).j2 = function () {
    return this.f1w_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.j2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.i2(), this.i2()) ? equals(tmp0_safe_receiver.j2(), this.j2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.i2()) + '=' + toString_0(this.j2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.g1w_1 = map;
  }
  protoOf(PersistentHashMapKeys).i = function () {
    return this.g1w_1.i();
  };
  protoOf(PersistentHashMapKeys).f3 = function (element) {
    return this.g1w_1.m2(element);
  };
  protoOf(PersistentHashMapKeys).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.f3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).k = function () {
    return new PersistentHashMapKeysIterator(this.g1w_1.w1u_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.h1w_1 = map;
  }
  protoOf(PersistentHashMapValues).i = function () {
    return this.h1w_1.i();
  };
  protoOf(PersistentHashMapValues).k3 = function (element) {
    return this.h1w_1.n2(element);
  };
  protoOf(PersistentHashMapValues).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.k3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).k = function () {
    return new PersistentHashMapValuesIterator(this.h1w_1.w1u_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.i1w_1 = map;
  }
  protoOf(PersistentHashMapEntries).i = function () {
    return this.i1w_1.i();
  };
  protoOf(PersistentHashMapEntries).j1w = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.i1w_1.p2(element.i2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.j2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.j2() == null ? this.i1w_1.m2(element.i2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.j1w((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).k = function () {
    return new PersistentHashMapEntriesIterator(this.i1w_1.w1u_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.f1v_1 = node;
    this.g1v_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.z1u_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.b1v_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.b1v_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.k1w(positionMask);
    var newBuffer = insertEntryAtIndex($this.b1v_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.y1u_1 | positionMask, $this.z1u_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.b1v_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.y1u_1, $this.z1u_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.b1v_1;
    if (newNodeBuffer.length === 2 ? newNode.z1u_1 === 0 : false) {
      if ($this.b1v_1.length === 1) {
        newNode.y1u_1 = $this.z1u_1;
        return newNode;
      }
      var keyIndex = $this.k1w(positionMask);
      var newBuffer = replaceNodeWithEntry($this.b1v_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.y1u_1 ^ positionMask, $this.z1u_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.b1v_1, $this.b1v_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.y1u_1, $this.z1u_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.b1v_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.b1v_1, nodeIndex);
    return TrieNode_init_$Create$($this.y1u_1, $this.z1u_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.l1w(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.b1v_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.y1u_1 ^ positionMask, $this.z1u_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.b1v_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b1v_1, keyIndex);
    return TrieNode_init_$Create$($this.y1u_1 ^ positionMask, $this.z1u_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.b1v_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.b1v_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.b1v_1.length), 2);
    var inductionVariable = progression.x9_1;
    var last = progression.y9_1;
    var step_0 = progression.z9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.b1v_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.b1v_1.length), 2);
    var inductionVariable = progression.x9_1;
    var last = progression.y9_1;
    var step_0 = progression.z9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.b1v_1.length), 2);
    var inductionVariable = progression.x9_1;
    var last = progression.y9_1;
    var step_0 = progression.z9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.b1v_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.b1v_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.b1v_1.length), 2);
    var inductionVariable = progression.x9_1;
    var last = progression.y9_1;
    var step_0 = progression.z9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.s1u_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_9();
    this.y1u_1 = dataMap;
    this.z1u_1 = nodeMap;
    this.a1v_1 = ownedBy;
    this.b1v_1 = buffer;
  }
  protoOf(TrieNode).q1v = function () {
    return countOneBits(this.y1u_1);
  };
  protoOf(TrieNode).m1w = function (positionMask) {
    return !((this.y1u_1 & positionMask) === 0);
  };
  protoOf(TrieNode).k1w = function (positionMask) {
    return imul(2, countOneBits(this.y1u_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).l1w = function (positionMask) {
    return (this.b1v_1.length - 1 | 0) - countOneBits(this.z1u_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).n1w = function (nodeIndex) {
    var tmp = this.b1v_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).c1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1w(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.k1w(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.n1w(this.l1w(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.c1v(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).d1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1w(keyPositionMask)) {
      var keyIndex = this.k1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.n1w(this.l1w(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.d1v(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).e1v = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1w(keyPositionMask)) {
      var keyIndex = this.k1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1w(keyPositionMask);
      var targetNode = this.n1w(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.e1v(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.f1v_1;
      tmp_2.f1v_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).h1v = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1w(keyPositionMask)) {
      var keyIndex = this.k1w(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1w(keyPositionMask);
      var targetNode = this.n1w(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.h1v(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.a1t_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_8().t1u());
  }
  protoOf(Companion_9).b1t = function () {
    return this.a1t_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_10();
    AbstractSet.call(this);
    this.o1w_1 = firstElement;
    this.p1w_1 = lastElement;
    this.q1w_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).i = function () {
    return this.q1w_1.i();
  };
  protoOf(PersistentOrderedSet).m = function (element) {
    return this.q1w_1.m2(element);
  };
  protoOf(PersistentOrderedSet).u = function (element) {
    if (this.q1w_1.m2(element)) {
      return this;
    }
    if (this.o()) {
      var newMap = this.q1w_1.g2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.p1w_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.q1w_1.p2(lastElement));
    var newMap_0 = this.q1w_1.g2(lastElement, lastLinks.t1w(element)).g2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.o1w_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v = function (element) {
    var tmp0_elvis_lhs = this.q1w_1.p2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.q1w_1.h2(element);
    if (links.u1w()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.r1w_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).p2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.r1w_1;
      newMap = tmp_0.g2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.t1w(links.s1w_1));
    }
    if (links.w1w()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.s1w_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).p2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.s1w_1;
      newMap = tmp_2.g2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.v1w(links.r1w_1));
    }
    var newFirstElement = !links.u1w() ? links.s1w_1 : this.o1w_1;
    var newLastElement = !links.w1w() ? links.r1w_1 : this.p1w_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).k = function () {
    return new PersistentOrderedSetIterator(this.o1w_1, this.q1w_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.r1w_1 = previous;
    this.s1w_1 = next;
  }
  protoOf(Links).t1w = function (newNext) {
    return new Links(this.r1w_1, newNext);
  };
  protoOf(Links).v1w = function (newPrevious) {
    return new Links(newPrevious, this.s1w_1);
  };
  protoOf(Links).w1w = function () {
    return !(this.s1w_1 === EndOfChain_instance);
  };
  protoOf(Links).u1w = function () {
    return !(this.r1w_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.x1w_1 = nextElement;
    this.y1w_1 = map;
    this.z1w_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).x = function () {
    return this.z1w_1 < this.y1w_1.i();
  };
  protoOf(PersistentOrderedSetIterator).z = function () {
    checkHasNext_0(this);
    var tmp = this.x1w_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.z1w_1 = this.z1w_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.y1w_1.p2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.x1w_1 = tmp_1.s1w_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).r1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).l1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.y1b() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.mw_1, other.mw_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.l17(tmp$ret$0);
    var slot = composer.o18();
    var tmp;
    if (slot === Companion_getInstance_0().d12_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.u18(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.f1x(block);
      tmp = slot;
    }
    var result = tmp;
    composer.m17();
    return result;
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.a1q_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.a1q_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().s1u_1;
    tmp.g1x_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_11();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).f2 = function () {
    return protoOf(PersistentHashMap).f2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).v18 = function (key, value) {
    var tmp0_elvis_lhs = this.w1u_1.e1v(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.f1v_1, this.i() + newNodeResult.g1v_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_11().g1x_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_2($this, key) {
    var high = $this.d1m_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.e1m_1[0].equals(key) ? 0 : $this.e1m_1[0].t9(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.e1m_1[mid];
      var comparison = midVal.ab(key);
      if (comparison.t9(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.t9(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.d1m_1 = size;
    this.e1m_1 = keys;
    this.f1m_1 = values;
  }
  protoOf(ThreadMap).g1m = function (key) {
    var index = find_2(this, key);
    return index >= 0 ? this.f1m_1[index] : null;
  };
  protoOf(ThreadMap).h1m = function (key, value) {
    var index = find_2(this, key);
    if (index < 0)
      return false;
    this.f1m_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).i1m = function (key, value) {
    var size = this.d1m_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.f1m_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.e1m_1[source];
        var oldValue = this.f1m_1[source];
        if (oldKey.t9(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.e1m_1[source];
          var oldValue_0 = this.f1m_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.i());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.j(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.u(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.w7(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.i() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.j(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.w7(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.w7(truncated);
    }
    buffer.w7(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.w7(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.w7(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.r5(element.ca_1);
        } else {
          _this__u8e3s4.w7(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.l1x_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hk = function () {
    return this.l1x_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.m1x_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hk = function () {
    return this.m1x_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
  }
  protoOf(Companion_11).bv = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).e1h = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1x(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).f1j = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).o1x = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).c1g = function () {
    return currentSnapshot().c1g();
  };
  protoOf(Companion_11).a1g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().rl().p1x();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y18()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.p15_1 = invalid;
    this.q15_1 = id;
    this.r15_1 = false;
    this.s15_1 = !(id === 0) ? trackPinning(id, this.q1x()) : -1;
  }
  protoOf(Snapshot).r1x = function (_set____db54di) {
    this.p15_1 = _set____db54di;
  };
  protoOf(Snapshot).q1x = function () {
    return this.p15_1;
  };
  protoOf(Snapshot).s1x = function (_set____db54di) {
    this.q15_1 = _set____db54di;
  };
  protoOf(Snapshot).t15 = function () {
    return this.q15_1;
  };
  protoOf(Snapshot).t1x = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).u1x = function () {
    return 0;
  };
  protoOf(Snapshot).hk = function () {
    this.r15_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.w1x();
  };
  protoOf(Snapshot).f1h = function () {
    var previous = get_threadSnapshot().rl();
    get_threadSnapshot().h1e(this);
    return previous;
  };
  protoOf(Snapshot).g1h = function (snapshot) {
    get_threadSnapshot().h1e(snapshot);
  };
  protoOf(Snapshot).a1y = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.b1y();
    this.c1y();
  };
  protoOf(Snapshot).b1y = function () {
    set_openSnapshots(get_openSnapshots().h1y(this.t15()));
  };
  protoOf(Snapshot).c1y = function () {
    this.w1x();
  };
  protoOf(Snapshot).i1y = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.r15_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).w1x = function () {
    if (this.s15_1 >= 0) {
      releasePinningLocked(this.s15_1);
      this.s15_1 = -1;
    }
  };
  protoOf(Snapshot).j1y = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.s15_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.s15_1 = -1;
    return this_0;
  };
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.t1h_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.t1h_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.s15_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.p1x();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.k1y(null);
      var id = $this.t15();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.m15_1;
      var inductionVariable = 0;
      var last = modified.l15_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).a1m();
          while (!(current == null)) {
            if (current.l1y_1 === id ? true : contains($this.q1h_1, current.l1y_1)) {
              current.l1y_1 = 0;
            }
            current = current.m1y_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.a1y();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.r1h_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.r1h_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.n1y_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_13();
    Snapshot.call(this, id, invalid);
    this.l1h_1 = readObserver;
    this.m1h_1 = writeObserver;
    this.n1h_1 = 0;
    this.o1h_1 = null;
    this.p1h_1 = null;
    this.q1h_1 = Companion_getInstance_14().o1y_1;
    this.r1h_1 = Companion_getInstance_13().n1y_1;
    this.s1h_1 = 1;
    this.t1h_1 = false;
  }
  protoOf(MutableSnapshot).x1x = function () {
    return this.l1h_1;
  };
  protoOf(MutableSnapshot).y1x = function () {
    return this.m1h_1;
  };
  protoOf(MutableSnapshot).n1x = function (readObserver, writeObserver) {
    this.i1y();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p1y(this.t15());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().q1y(newId));
    var currentInvalid = this.q1x();
    this.r1x(currentInvalid.q1y(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.t15() + 1 | 0, newId), mergedReadObserver(readObserver, this.x1x()), mergedWriteObserver(writeObserver, this.y1x()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.t1h_1 ? !this.r15_1 : false) {
      var previousId = this.t15();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.s1x(tmp0_0);
      set_openSnapshots(get_openSnapshots().q1y(this.t15()));
      this.r1x(addRange(this.q1x(), previousId + 1 | 0, this.t15()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).u1h = function () {
    var modified = this.p1x();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().rl(), this, get_openSnapshots().h1y(get_currentGlobalSnapshot().rl().t15())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.l15_1 === 0) {
      this.b1y();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().rl();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.p1x();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.o())) {
        observers = get_applyObservers();
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().rl();
      var result = this.r1y(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().h1y(previousGlobalSnapshot_0.t15()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.b1y();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.p1x();
      this.k1y(null);
      previousGlobalSnapshot_0.k1y(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.t1h_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.o())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.i() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.o())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.i() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.j(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.c1y();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.m15_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.l15_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.m15_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.l15_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.p1h_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.i() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.j(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.p1h_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).v1x = function () {
    return false;
  };
  protoOf(MutableSnapshot).hk = function () {
    if (!this.r15_1) {
      protoOf(Snapshot).hk.call(this);
      this.s1y(this);
    }
  };
  protoOf(MutableSnapshot).t1y = function (snapshot) {
    this.s1h_1 = this.s1h_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).s1y = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.s1h_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var message = 'no pending nested snapshots';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.s1h_1 = this.s1h_1 - 1 | 0;
    if (this.s1h_1 === 0) {
      if (!this.t1h_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).c1g = function () {
    if (this.t1h_1 ? true : this.r15_1)
      return Unit_instance;
    this.u1y();
  };
  protoOf(MutableSnapshot).b1y = function () {
    set_openSnapshots(get_openSnapshots().h1y(this.t15()).v1y(this.q1h_1));
  };
  protoOf(MutableSnapshot).c1y = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).c1y.call(this);
  };
  protoOf(MutableSnapshot).r1y = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.q1x().q1y(this.t15()).w1y(this.q1h_1);
    var modified = ensureNotNull(this.p1x());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.m15_1;
    var inductionVariable = 0;
    var last = modified.l15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.a1m();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.t15(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.t15(), this.q1x());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.p2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.c1m(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.u(to(state, current.w1l()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.u(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.u(!equals(merged, previous) ? to(state, merged) : to(state, previous.w1l()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.u1y();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.i() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.yd();
          var stateRecord = item.zd();
          stateRecord.l1y_1 = this.t15();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.m1y_1 = state_0.a1m();
          state_0.b1m(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.i() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.j(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.y1s(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.p1h_1;
      this.p1h_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).u1y = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p1y(this.t15());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.t1h_1 ? !this.r15_1 : false) {
      var previousId = this.t15();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.s1x(tmp0);
      set_openSnapshots(get_openSnapshots().q1y(this.t15()));
      this.r1x(addRange(this.q1x(), previousId + 1 | 0, this.t15()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).p1y = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.q1h_1 = this.q1h_1.q1y(id);
  };
  protoOf(MutableSnapshot).x1y = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.r1h_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.r1h_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).y1y = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.r1h_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.r1h_1 = tmp_0;
  };
  protoOf(MutableSnapshot).z1y = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.q1h_1 = this.q1h_1.w1y(snapshots);
  };
  protoOf(MutableSnapshot).z1x = function (state) {
    var tmp0_elvis_lhs = this.p1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.k1y(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.i1a(state);
  };
  protoOf(MutableSnapshot).t1x = function (_set____db54di) {
    this.n1h_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).u1x = function () {
    return this.n1h_1;
  };
  protoOf(MutableSnapshot).k1y = function (_set____db54di) {
    this.o1h_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).p1x = function () {
    return this.o1h_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.a1z_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.i() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.j(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$5 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$5);
  }
  protoOf(GlobalSnapshot).n1x = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).c1g = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).o1z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).s1y = function (snapshot) {
    return this.o1z(snapshot);
  };
  protoOf(GlobalSnapshot).p1z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).t1y = function (snapshot) {
    return this.p1z(snapshot);
  };
  protoOf(GlobalSnapshot).u1h = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).hk = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.w1x();
  };
  function StateRecord() {
    this.l1y_1 = currentSnapshot().t15();
    this.m1y_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.q1z(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().w1z(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().x1z(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().rl();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().rl() : tmp0_elvis_lhs;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().rl();
    modified = previousGlobalSnapshot.p1x();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().w1z(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        var observers = get_applyObservers();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.i() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.j(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().w1z(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.m15_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.l15_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.n20_1) {
      $this.n20_1 = true;
      $this.m20_1.s1y($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.m20_1 = parent;
    this.n20_1 = false;
    this.m20_1.t1y(this);
  }
  protoOf(NestedMutableSnapshot).hk = function () {
    if (!this.r15_1) {
      protoOf(MutableSnapshot).hk.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).u1h = function () {
    if (this.m20_1.t1h_1 ? true : this.m20_1.r15_1)
      return new Failure(this);
    var modified = this.p1x();
    var id = this.t15();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.m20_1, this, this.m20_1.q1x()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.l15_1 === 0) {
      this.a1y();
    } else {
      var result = this.r1y(this.m20_1.t15(), optimisticMerges_0, this.m20_1.q1x());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.m20_1.p1x();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.u1g(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.m20_1.k1y(modified);
        this.k1y(null);
      }
    }
    if (this.m20_1.t15() < id) {
      this.m20_1.u1y();
    }
    this.m20_1.r1x(this.m20_1.q1x().h1y(id).v1y(this.q1h_1));
    this.m20_1.p1y(id);
    this.m20_1.x1y(this.j1y());
    this.m20_1.z1y(this.q1h_1);
    this.m20_1.y1y(this.r1h_1);
    this.t1h_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.q1y(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.p1x();
    var id = currentSnapshot.t15();
    if (modified == null)
      return null;
    var start = applyingSnapshot.q1x().q1y(applyingSnapshot.t15()).w1y(applyingSnapshot.q1h_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.m15_1;
    var inductionVariable = 0;
    var last = modified.l15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.a1m();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.t15(), applyingSnapshot.q1x());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.c1m(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.g2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.j(snapshot.t15())) {
      // Inline function 'kotlin.error' call
      var tmp = snapshot.t15();
      var tmp_0 = snapshot.r15_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1h_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().o20(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().h1y(previousGlobalSnapshot.t15()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().h1y(previousGlobalSnapshot.t15()));
    get_currentGlobalSnapshot().a1c(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.hk();
    set_openSnapshots(get_openSnapshots().q1y(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.p20_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.r20_1[i];
        var value = entry == null ? null : entry.rl();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.r20_1[currentUsed] = entry;
            this_0.q20_1[currentUsed] = this_0.q20_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.r20_1[i_0] = null;
        this_0.q20_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.p20_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().i1a(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.l1y_1 < current.l1y_1 ? current : candidate;
      }
      current = current.m1y_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a1m();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().o20(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.l1y_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.l1y_1 < validRecord.l1y_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.a1m();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.l1y_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.l1y_1 < current_0.l1y_1)
                    youngest = current_0;
                  current_0 = current_0.m1y_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.l1y_1 = 0;
            recordToOverwrite.v1l(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.m1y_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.l1y_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.j(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.bv();
    var tmp0_safe_receiver = snapshot.x1x();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.t15(), snapshot.q1x());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.bv();
      var tmp_0 = state.a1m();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.t15(), syncSnapshot.q1x());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.bv();
    var tmp0_elvis_lhs = readable(r, snapshot.t15(), snapshot.q1x());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.bv();
      tmp = readable(r, syncSnapshot.t15(), syncSnapshot.q1x());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.t1x(snapshot.u1x() + 1 | 0);
    var tmp1_safe_receiver = snapshot.y1x();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.v1x()) {
      snapshot.z1x(state);
    }
    var id = snapshot.t15();
    if (candidate.l1y_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.l1y_1 = id;
    snapshot.z1x(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.l1y_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.w1l();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.l1y_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.m1y_1 = state.a1m();
      state.b1m(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a1m();
    var validRecord = null;
    var reuseLimit = get_pinningTable().o20(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_14().o1y_1;
    while (!(current == null)) {
      var currentId = current.l1y_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.l1y_1 < validRecord.l1y_1 ? current : validRecord;
        }
      }
      current = current.m1y_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.v1x()) {
      snapshot.z1x(state);
    }
    var id = snapshot.t15();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.q1x());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.l1y_1 === snapshot.t15())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.z1x(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.v1l(_this__u8e3s4);
    newData.l1y_1 = snapshot.t15();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().q1y(result.t15()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_14().o1y_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_14().o1y_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().q1y(this_0.t15()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().rl();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.s1z_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.s1z_1;
    var half = $this.r1z_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.r1z_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.s1z_1;
    var index = $this.t1z_1;
    var handles = $this.u1z_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.s1z_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.s1z_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.t1z_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.s1z_1 = newValues;
    $this.t1z_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.u1z_1.length;
    if ($this.v1z_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.u1z_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.u1z_1 = newHandles;
    }
    var handle = $this.v1z_1;
    $this.v1z_1 = $this.u1z_1[$this.v1z_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.u1z_1[handle] = $this.v1z_1;
    $this.v1z_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.r1z_1 = 0;
    this.s1z_1 = new Int32Array(16);
    this.t1z_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.u1z_1 = tmp_1;
    this.v1z_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).o20 = function (default_0) {
    return this.r1z_1 > 0 ? this.s1z_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).w1z = function (value) {
    ensure(this, this.r1z_1 + 1 | 0);
    var tmp1 = this.r1z_1;
    this.r1z_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.s1z_1[i] = value;
    this.t1z_1[i] = handle;
    this.u1z_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).x1z = function (handle) {
    var i = this.u1z_1[handle];
    swap(this, i, this.r1z_1 - 1 | 0);
    this.r1z_1 = this.r1z_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.o1y_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.b21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).k21 = function ($this$sequence, $completion) {
    var tmp = this.l21($this$sequence, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  protoOf(SnapshotIdSet$iterator$slambda).qc = function (p1, $completion) {
    return this.k21(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 15;
            this.d21_1 = this.b21_1.g1y_1;
            if (!(this.d21_1 == null)) {
              this.e21_1 = intArrayIterator(this.d21_1);
              this.sb_1 = 1;
              continue $sm;
            } else {
              this.sb_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.e21_1.x()) {
              this.sb_1 = 3;
              continue $sm;
            }

            this.f21_1 = this.e21_1.z();
            this.sb_1 = 2;
            suspendResult = this.c21_1.ae(this.f21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sb_1 = 1;
            continue $sm;
          case 3:
            this.sb_1 = 4;
            continue $sm;
          case 4:
            if (!this.b21_1.e1y_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.g21_1 = until(0, 64).k();
              this.sb_1 = 5;
              continue $sm;
            } else {
              this.sb_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.g21_1.x()) {
              this.sb_1 = 8;
              continue $sm;
            }

            this.h21_1 = this.g21_1.z();
            if (!this.b21_1.e1y_1.hb((new Long(1, 0)).eb(this.h21_1)).equals(new Long(0, 0))) {
              this.sb_1 = 6;
              suspendResult = this.c21_1.ae(this.h21_1 + this.b21_1.f1y_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sb_1 = 7;
              continue $sm;
            }

          case 6:
            this.sb_1 = 7;
            continue $sm;
          case 7:
            this.sb_1 = 5;
            continue $sm;
          case 8:
            this.sb_1 = 9;
            continue $sm;
          case 9:
            if (!this.b21_1.d1y_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.i21_1 = until(0, 64).k();
              this.sb_1 = 10;
              continue $sm;
            } else {
              this.sb_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.i21_1.x()) {
              this.sb_1 = 13;
              continue $sm;
            }

            this.j21_1 = this.i21_1.z();
            if (!this.b21_1.d1y_1.hb((new Long(1, 0)).eb(this.j21_1)).equals(new Long(0, 0))) {
              this.sb_1 = 11;
              Companion_getInstance();
              suspendResult = this.c21_1.ae((this.j21_1 + 64 | 0) + this.b21_1.f1y_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sb_1 = 12;
              continue $sm;
            }

          case 11:
            this.sb_1 = 12;
            continue $sm;
          case 12:
            this.sb_1 = 10;
            continue $sm;
          case 13:
            this.sb_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.vb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.tb_1 === 15) {
          throw e;
        } else {
          this.sb_1 = this.tb_1;
          this.vb_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).l21 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.b21_1, completion);
    i.c21_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.k21($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_14();
    this.d1y_1 = upperSet;
    this.e1y_1 = lowerSet;
    this.f1y_1 = lowerBound;
    this.g1y_1 = belowBound;
  }
  protoOf(SnapshotIdSet).j = function (bit) {
    var offset = bit - this.f1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).eb(offset).hb(this.e1y_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.eb(offset - 64 | 0).hb(this.d1y_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.g1y_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).q1y = function (bit) {
    var offset = bit - this.f1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).eb(offset);
      if (this.e1y_1.hb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.d1y_1, this.e1y_1.ib(mask), this.f1y_1, this.g1y_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.eb(offset - 64 | 0);
        if (this.d1y_1.hb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.d1y_1.ib(mask_0), this.e1y_1, this.f1y_1, this.g1y_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.j(bit)) {
            var newUpperSet = this.d1y_1;
            var newLowerSet = this.e1y_1;
            var newLowerBound = this.f1y_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.g1y_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.u(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.hb((new Long(1, 0)).eb(index)).equals(new Long(0, 0))) {
                      newBelowBound.u(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.g1y_1 : tmp1_elvis_lhs)).q1y(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.g1y_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.d1y_1, this.e1y_1, this.f1y_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.d1y_1, this.e1y_1, this.f1y_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).h1y = function (bit) {
    var offset = bit - this.f1y_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).eb(offset);
      if (!this.e1y_1.hb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.d1y_1, this.e1y_1.hb(mask.db()), this.f1y_1, this.g1y_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.eb(offset - 64 | 0);
        if (!this.d1y_1.hb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.d1y_1.hb(mask_0.db()), this.e1y_1, this.f1y_1, this.g1y_1);
        }
      } else {
        if (offset < 0) {
          var array = this.g1y_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.d1y_1, this.e1y_1, this.f1y_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.d1y_1, this.e1y_1, this.f1y_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).v1y = function (bits) {
    if (bits === Companion_getInstance_14().o1y_1)
      return this;
    if (this === Companion_getInstance_14().o1y_1)
      return Companion_getInstance_14().o1y_1;
    var tmp;
    if (bits.f1y_1 === this.f1y_1 ? bits.g1y_1 === this.g1y_1 : false) {
      tmp = new SnapshotIdSet(this.d1y_1.hb(bits.d1y_1.db()), this.e1y_1.hb(bits.e1y_1.db()), this.f1y_1, this.g1y_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.h1y(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).w1y = function (bits) {
    if (bits === Companion_getInstance_14().o1y_1)
      return this;
    if (this === Companion_getInstance_14().o1y_1)
      return bits;
    var tmp;
    if (bits.f1y_1 === this.f1y_1 ? bits.g1y_1 === this.g1y_1 : false) {
      tmp = new SnapshotIdSet(this.d1y_1.ib(bits.d1y_1), this.e1y_1.ib(bits.e1y_1), this.f1y_1, this.g1y_1);
    } else {
      var tmp_0;
      if (this.g1y_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.k();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.q1y(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.k();
        while (tmp0_iterator_0.x()) {
          var element_0 = tmp0_iterator_0.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.q1y(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).k = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).k();
  };
  protoOf(SnapshotIdSet).q1z = function (default_0) {
    var belowBound = this.g1y_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.e1y_1.equals(new Long(0, 0)))
      return this.f1y_1 + lowestBitOf(this.e1y_1) | 0;
    if (!this.d1y_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.f1y_1 + 64 | 0) + lowestBitOf(this.d1y_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.u(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.hb(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.fb(32);
    }
    if (b.hb(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.fb(16);
    }
    if (b.hb(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.fb(8);
    }
    if (b.hb(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.fb(4);
    }
    if (!b.hb(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.hb(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.hb(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.hb(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.o21_1 = list;
    this.p21_1 = 0;
    this.q21_1 = 0;
  }
  protoOf(StateListStateRecord).v1l = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$tjv5ep_bz2qmh();
    var tmp = this;
    tmp.o21_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).o21_1;
    this.p21_1 = value.p21_1;
    this.q21_1 = value.q21_1;
  };
  protoOf(StateListStateRecord).w1l = function () {
    return new StateListStateRecord(this.o21_1);
  };
  function SnapshotStateList() {
    this.r21_1 = new StateListStateRecord(persistentListOf());
  }
  protoOf(SnapshotStateList).a1m = function () {
    return this.r21_1;
  };
  protoOf(SnapshotStateList).b1m = function (value) {
    value.m1y_1 = this.r21_1;
    var tmp = this;
    tmp.r21_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).s21 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.r21_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).q21_1;
  };
  protoOf(SnapshotStateList).t21 = function () {
    var tmp = this.r21_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).i = function () {
    return this.t21().o21_1.i();
  };
  protoOf(SnapshotStateList).td = function (element) {
    return this.t21().o21_1.m(element);
  };
  protoOf(SnapshotStateList).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.td((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).ud = function (elements) {
    return this.t21().o21_1.n(elements);
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.ud(elements);
  };
  protoOf(SnapshotStateList).j = function (index) {
    return this.t21().o21_1.j(index);
  };
  protoOf(SnapshotStateList).u21 = function (element) {
    return this.t21().o21_1.l(element);
  };
  protoOf(SnapshotStateList).l = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.u21((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o = function () {
    return this.t21().o21_1.o();
  };
  protoOf(SnapshotStateList).k = function () {
    return this.pa();
  };
  protoOf(SnapshotStateList).pa = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).b16 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).u(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (true) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).u = function (element) {
    return this.b16((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).v21 = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).g1t(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (true) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).q1 = function (index, element) {
    return this.v21(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).w21 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).a1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (true) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).a1 = function (elements) {
    return this.w21(elements);
  };
  protoOf(SnapshotStateList).b1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.r21_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.bv();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$tjv5ep_bz2qmh();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.o21_1 = persistentListOf();
    $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
    $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).x21 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (true) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x21((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).g1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.j(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).g1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (true) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).y21 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.j(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.r21_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.p21_1;
      oldList = current_0.o21_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).r(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.r21_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.bv();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$tjv5ep_bz2qmh();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.p21_1 === currentModification) {
        $this$writable.o21_1 = newList;
        if (false) {
          $this$writable.q21_1 = $this$writable.q21_1 + 1 | 0;
        }
        $this$writable.p21_1 = $this$writable.p21_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).r = function (index, element) {
    return this.y21(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.z21_1.s21() === $this.c22_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.z21_1 = list;
    this.a22_1 = offset - 1 | 0;
    this.b22_1 = -1;
    this.c22_1 = this.z21_1.s21();
  }
  protoOf(StateListIterator).x = function () {
    return this.a22_1 < (this.z21_1.i() - 1 | 0);
  };
  protoOf(StateListIterator).z = function () {
    validateModification(this);
    var newIndex = this.a22_1 + 1 | 0;
    this.b22_1 = newIndex;
    validateRange(newIndex, this.z21_1.i());
    // Inline function 'kotlin.also' call
    var this_0 = this.z21_1.j(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.a22_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).y = function () {
    validateModification(this);
    this.z21_1.g1(this.a22_1);
    this.a22_1 = this.a22_1 - 1 | 0;
    this.b22_1 = -1;
    this.c22_1 = this.z21_1.s21();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$tjv5ep_bz2qmh() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_3($this, value, hash) {
    var low = 0;
    var high = $this.p20_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.q20_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.r20_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rl();
        if (value === midVal)
          return mid;
        return findExactIndex_1($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.q20_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.r20_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.rl();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.p20_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.q20_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.r20_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.rl();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.p20_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.p20_1 = 0;
    this.q20_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.r20_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).i1a = function (value) {
    var index;
    var size = this.p20_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_3(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.r20_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.r20_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.r20_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.q20_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.q20_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.r20_1 = newValues;
      this.q20_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.r20_1;
      var destination = this.r20_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.q20_1;
      var destination_0 = this.q20_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.r20_1[insertIndex] = new WeakReference(value);
    this.q20_1[insertIndex] = hash;
    this.p20_1 = this.p20_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.a1d_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).b1d = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.a1d_1.rl());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.a1d_1.d22(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).d1g = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.a1d_1.rl());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.i1b_1 = value;
  }
  protoOf(AtomicReference).rl = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.i1b_1;
  };
  protoOf(AtomicReference).a1c = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.i1b_1 = value;
  };
  protoOf(AtomicReference).j1b = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.i1b_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.i1b_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).w1c = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.i1b_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.i1b_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.y1z_1 = value;
  }
  protoOf(AtomicInt).rl = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.y1z_1;
  };
  protoOf(AtomicInt).w1z = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.y1z_1 = this.y1z_1 + amount | 0;
    return this.y1z_1;
  };
  protoOf(AtomicInt).d22 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.y1z_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.y1z_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.b1x_1) {
      var scope = $this.d1x_1;
      if (!(scope == null)) {
        scope.m1d();
        $this.d1x_1 = null;
      }
      var scopes = $this.e1x_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.i();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.j(index);
            item.m1d();
          }
           while (inductionVariable < last);
        scopes.b1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.b1x_1) {
      var scope = composer.t19();
      if (!(scope == null)) {
        composer.u19(scope);
        var lastScope = $this.d1x_1;
        if (replacableWith(lastScope, scope)) {
          $this.d1x_1 = scope;
        } else {
          var lastScopes = $this.e1x_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.e1x_1 = newScopes;
            newScopes.u(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.i();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.j(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.r(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.u(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.e17(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.e22($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.a1x_1 = key;
    this.b1x_1 = tracked;
    this.c1x_1 = block;
    this.d1x_1 = null;
    this.e1x_1 = null;
  }
  protoOf(ComposableLambdaImpl).f1x = function (block) {
    if (!equals(this.c1x_1, block)) {
      var oldBlockNull = this.c1x_1 == null;
      this.c1x_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).e17 = function (c, changed) {
    var c_0 = c.c19(this.a1x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.ez(this) ? differentBits(0) : sameBits(0));
    var tmp = this.c1x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).e22 = function (p1, c, changed) {
    var c_0 = c.c19(this.a1x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.ez(this) ? differentBits(1) : sameBits(1));
    var tmp = this.c1x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.d19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a1e(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.m6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n22_1 = _this__u8e3s4;
    this.o22_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).ec = function () {
    var suspendResult = this.ub_1;
    $sm: do
      try {
        var tmp = this.sb_1;
        switch (tmp) {
          case 0:
            this.tb_1 = 2;
            this.sb_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.o22_1, safe));
            suspendResult = returnIfSuspended(safe.n6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).cw = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.ub_1 = Unit_instance;
    tmp.vb_1 = null;
    return tmp.ec();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).o15 = function (name) {
    return null;
  };
  protoOf(Trace).d16 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u11_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).j = function (key) {
    return this.u11_1.p2(key);
  };
  protoOf(IntMap).v11 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.u11_1.g2(key, value);
  };
  function WeakReference(reference) {
    this.s20_1 = reference;
  }
  protoOf(WeakReference).rl = function () {
    return this.s20_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).cv = onBeginChanges;
  protoOf(OffsetApplier).dv = onEndChanges;
  protoOf(AbstractApplier).cv = onBeginChanges;
  protoOf(AbstractApplier).dv = onEndChanges;
  protoOf(BroadcastFrameClock).i2 = get_key;
  protoOf(BroadcastFrameClock).zb = get;
  protoOf(BroadcastFrameClock).af = fold;
  protoOf(BroadcastFrameClock).ze = minusKey;
  protoOf(BroadcastFrameClock).bf = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.p6();
  });
  protoOf(StructuralEqualityPolicy).q1l = merge;
  protoOf(StateObjectImpl).c1m = mergeRecords;
  protoOf(SnapshotStateList).c1m = mergeRecords;
  protoOf(MonotonicClockImpl).i2 = get_key;
  protoOf(MonotonicClockImpl).zb = get;
  protoOf(MonotonicClockImpl).af = fold;
  protoOf(MonotonicClockImpl).ze = minusKey;
  protoOf(MonotonicClockImpl).bf = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  ENTRY_SIZE = 2;
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = CompositionLocalProvider;
  _.$_$.e = ControlledComposition;
  _.$_$.f = get_DefaultMonotonicFrameClock;
  _.$_$.g = DisposableEffect_0;
  _.$_$.h = DisposableEffect_1;
  _.$_$.i = DisposableEffect;
  _.$_$.j = LaunchedEffect;
  _.$_$.k = Recomposer;
  _.$_$.l = compositionLocalOf;
  _.$_$.m = invalidApplier;
  _.$_$.n = isTraceInProgress;
  _.$_$.o = mutableStateListOf;
  _.$_$.p = mutableStateOf;
  _.$_$.q = sourceInformationMarkerEnd;
  _.$_$.r = sourceInformationMarkerStart;
  _.$_$.s = sourceInformation;
  _.$_$.t = staticCompositionLocalOf;
  _.$_$.u = traceEventEnd;
  _.$_$.v = traceEventStart;
  _.$_$.w = updateChangedFlags;
  _.$_$.x = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.y = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.z = _Updater___init__impl__rbfxm8;
  _.$_$.a1 = Updater__set_impl_v7kwss;
  _.$_$.b1 = Companion_instance_12;
  _.$_$.c1 = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
