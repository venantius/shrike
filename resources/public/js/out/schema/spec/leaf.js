// Compiled by ClojureScript 1.7.48 {}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

/**
* @constructor
* @param {*} pre
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25851__auto__,k__25852__auto__){
var self__ = this;
var this__25851__auto____$1 = this;
return cljs.core._lookup.call(null,this__25851__auto____$1,k__25852__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25853__auto__,k34917,else__25854__auto__){
var self__ = this;
var this__25853__auto____$1 = this;
var G__34919 = (((k34917 instanceof cljs.core.Keyword))?k34917.fqn:null);
switch (G__34919) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34917,else__25854__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__25256__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25865__auto__,writer__25866__auto__,opts__25867__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
var pr_pair__25868__auto__ = ((function (this__25865__auto____$1){
return (function (keyval__25869__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,cljs.core.pr_writer,""," ","",opts__25867__auto__,keyval__25869__auto__);
});})(this__25865__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,pr_pair__25868__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__25867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34916){
var self__ = this;
var G__34916__$1 = this;
return (new cljs.core.RecordIter((0),G__34916__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25849__auto__){
var self__ = this;
var this__25849__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25845__auto__){
var self__ = this;
var this__25845__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25855__auto__){
var self__ = this;
var this__25855__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25846__auto__){
var self__ = this;
var this__25846__auto____$1 = this;
var h__25672__auto__ = self__.__hash;
if(!((h__25672__auto__ == null))){
return h__25672__auto__;
} else {
var h__25672__auto____$1 = cljs.core.hash_imap.call(null,this__25846__auto____$1);
self__.__hash = h__25672__auto____$1;

return h__25672__auto____$1;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25847__auto__,other__25848__auto__){
var self__ = this;
var this__25847__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25244__auto__ = other__25848__auto__;
if(cljs.core.truth_(and__25244__auto__)){
var and__25244__auto____$1 = (this__25847__auto____$1.constructor === other__25848__auto__.constructor);
if(and__25244__auto____$1){
return cljs.core.equiv_map.call(null,this__25847__auto____$1,other__25848__auto__);
} else {
return and__25244__auto____$1;
}
} else {
return and__25244__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25860__auto__,k__25861__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__25861__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25860__auto____$1),self__.__meta),k__25861__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25861__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25858__auto__,k__25859__auto__,G__34916){
var self__ = this;
var this__25858__auto____$1 = this;
var pred__34920 = cljs.core.keyword_identical_QMARK_;
var expr__34921 = k__25859__auto__;
if(cljs.core.truth_(pred__34920.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__34921))){
return (new schema.spec.leaf.LeafSpec(G__34916,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25859__auto__,G__34916),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25863__auto__){
var self__ = this;
var this__25863__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25850__auto__,G__34916){
var self__ = this;
var this__25850__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__34916,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25856__auto__,entry__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25857__auto__)){
return cljs.core._assoc.call(null,this__25856__auto____$1,cljs.core._nth.call(null,entry__25857__auto__,(0)),cljs.core._nth.call(null,entry__25857__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25856__auto____$1,entry__25857__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__25885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__25885__auto__,writer__25886__auto__){
return cljs.core._write.call(null,writer__25886__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__34918){
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__34918),null,cljs.core.dissoc.call(null,G__34918,new cljs.core.Keyword(null,"pre","pre",2118456869)),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec.call(null,pre);
});

//# sourceMappingURL=leaf.js.map