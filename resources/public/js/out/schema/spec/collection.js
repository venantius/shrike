// Compiled by ClojureScript 1.7.48 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});

/**
* @constructor
* @param {*} pre
* @param {*} constructor
* @param {*} elements
* @param {*} on_error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor = constructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25851__auto__,k__25852__auto__){
var self__ = this;
var this__25851__auto____$1 = this;
return cljs.core._lookup.call(null,this__25851__auto____$1,k__25852__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25853__auto__,k34962,else__25854__auto__){
var self__ = this;
var this__25853__auto____$1 = this;
var G__34964 = (((k34962 instanceof cljs.core.Keyword))?k34962.fqn:null);
switch (G__34964) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34962,else__25854__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.call(null,((function (constructor__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
});})(constructor__$1,this$__$1))
,((function (constructor__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor__$1,this$__$1))
,cljs.core.reverse.call(null,self__.elements));
return ((function (constructor__$1,t,this$__$1){
return (function (x){
var or__25256__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__25256__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__25256__auto____$1){
return or__25256__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor__$1.call(null,res__$1);
}
}
});
;})(constructor__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25865__auto__,writer__25866__auto__,opts__25867__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
var pr_pair__25868__auto__ = ((function (this__25865__auto____$1){
return (function (keyval__25869__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,cljs.core.pr_writer,""," ","",opts__25867__auto__,keyval__25869__auto__);
});})(this__25865__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,pr_pair__25868__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__25867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34961){
var self__ = this;
var G__34961__$1 = this;
return (new cljs.core.RecordIter((0),G__34961__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25849__auto__){
var self__ = this;
var this__25849__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25845__auto__){
var self__ = this;
var this__25845__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25855__auto__){
var self__ = this;
var this__25855__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25846__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25847__auto__,other__25848__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25860__auto__,k__25861__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__25861__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25860__auto____$1),self__.__meta),k__25861__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25861__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25858__auto__,k__25859__auto__,G__34961){
var self__ = this;
var this__25858__auto____$1 = this;
var pred__34965 = cljs.core.keyword_identical_QMARK_;
var expr__34966 = k__25859__auto__;
if(cljs.core.truth_(pred__34965.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__34966))){
return (new schema.spec.collection.CollectionSpec(G__34961,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34965.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__34966))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__34961,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34965.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__34966))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__34961,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34965.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__34966))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__34961,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25859__auto__,G__34961),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25863__auto__){
var self__ = this;
var this__25863__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25850__auto__,G__34961){
var self__ = this;
var this__25850__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__34961,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25856__auto__,entry__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25857__auto__)){
return cljs.core._assoc.call(null,this__25856__auto____$1,cljs.core._nth.call(null,entry__25857__auto__,(0)),cljs.core._nth.call(null,entry__25857__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25856__auto____$1,entry__25857__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__25885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__25885__auto__,writer__25886__auto__){
return cljs.core._write.call(null,writer__25886__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__34963){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__34963),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__34963),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__34963),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__34963),null,cljs.core.dissoc.call(null,G__34963,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.Keyword(null,"zero-or-more","zero-or-more",-1629905900),new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (item_fn,coll){
var seq__34973_34977 = cljs.core.seq.call(null,coll);
var chunk__34974_34978 = null;
var count__34975_34979 = (0);
var i__34976_34980 = (0);
while(true){
if((i__34976_34980 < count__34975_34979)){
var x_34981 = cljs.core._nth.call(null,chunk__34974_34978,i__34976_34980);
item_fn.call(null,x_34981);

var G__34982 = seq__34973_34977;
var G__34983 = chunk__34974_34978;
var G__34984 = count__34975_34979;
var G__34985 = (i__34976_34980 + (1));
seq__34973_34977 = G__34982;
chunk__34974_34978 = G__34983;
count__34975_34979 = G__34984;
i__34976_34980 = G__34985;
continue;
} else {
var temp__4425__auto___34986 = cljs.core.seq.call(null,seq__34973_34977);
if(temp__4425__auto___34986){
var seq__34973_34987__$1 = temp__4425__auto___34986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34973_34987__$1)){
var c__26040__auto___34988 = cljs.core.chunk_first.call(null,seq__34973_34987__$1);
var G__34989 = cljs.core.chunk_rest.call(null,seq__34973_34987__$1);
var G__34990 = c__26040__auto___34988;
var G__34991 = cljs.core.count.call(null,c__26040__auto___34988);
var G__34992 = (0);
seq__34973_34977 = G__34989;
chunk__34974_34978 = G__34990;
count__34975_34979 = G__34991;
i__34976_34980 = G__34992;
continue;
} else {
var x_34993 = cljs.core.first.call(null,seq__34973_34987__$1);
item_fn.call(null,x_34993);

var G__34994 = cljs.core.next.call(null,seq__34973_34987__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34973_34977 = G__34994;
chunk__34974_34978 = G__34995;
count__34975_34979 = G__34996;
i__34976_34980 = G__34997;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),(cljs.core.truth_(required_QMARK_)?new cljs.core.Keyword(null,"exactly-one","exactly-one",-294043587):new cljs.core.Keyword(null,"at-most-one","at-most-one",-1612772829)),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});

//# sourceMappingURL=collection.js.map