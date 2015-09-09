// Compiled by ClojureScript 1.7.48 {}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker.call(null,o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return g.call(null,x);
}catch (e34927){if((e34927 instanceof Object)){
var e_SHARP_ = e34927;
return new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523);
} else {
throw e34927;

}
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523),guard_result)){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),cljs.core.symbol.call(null,schema.utils.fn_name.call(null,g)));
});})(guard_result,g,c))
,null)),new cljs.core.Symbol(null,"throws?","throws?",789734533,null)));
} else {
if(cljs.core.truth_(guard_result)){
return c.call(null,x);
} else {
return else$.call(null,x);

}
}
});})(g,c))
:c);
var temp__4423__auto__ = new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4423__auto__)){
var wrap_error = temp__4423__auto__;
return ((function (wrap_error,temp__4423__auto__,g,c,step){
return (function (x){
var res = step.call(null,x);
var temp__4423__auto____$1 = schema.utils.error_val.call(null,res);
if(cljs.core.truth_(temp__4423__auto____$1)){
var e = temp__4423__auto____$1;
return schema.utils.error.call(null,wrap_error.call(null,e));
} else {
return res;
}
});
;})(wrap_error,temp__4423__auto__,g,c,step))
} else {
return step;
}
});

/**
* @constructor
* @param {*} pre
* @param {*} options
* @param {*} err_f
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.spec.variant.VariantSpec = (function (pre,options,err_f,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25851__auto__,k__25852__auto__){
var self__ = this;
var this__25851__auto____$1 = this;
return cljs.core._lookup.call(null,this__25851__auto____$1,k__25852__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25853__auto__,k34929,else__25854__auto__){
var self__ = this;
var this__25853__auto____$1 = this;
var G__34931 = (((k34929 instanceof cljs.core.Keyword))?k34929.fqn:null);
switch (G__34931) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34929,else__25854__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step.call(null,o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return self__.err_f.call(null,schema.utils.value_name.call(null,x));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse.call(null,self__.options));
return ((function (t,this$__$1){
return (function (x){
var or__25256__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return t.call(null,x);
}
});
;})(t,this$__$1))
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25865__auto__,writer__25866__auto__,opts__25867__auto__){
var self__ = this;
var this__25865__auto____$1 = this;
var pr_pair__25868__auto__ = ((function (this__25865__auto____$1){
return (function (keyval__25869__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,cljs.core.pr_writer,""," ","",opts__25867__auto__,keyval__25869__auto__);
});})(this__25865__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25866__auto__,pr_pair__25868__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__25867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34928){
var self__ = this;
var G__34928__$1 = this;
return (new cljs.core.RecordIter((0),G__34928__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25849__auto__){
var self__ = this;
var this__25849__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25845__auto__){
var self__ = this;
var this__25845__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25855__auto__){
var self__ = this;
var this__25855__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25846__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25847__auto__,other__25848__auto__){
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

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25860__auto__,k__25861__auto__){
var self__ = this;
var this__25860__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"err-f","err-f",651620941),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__25861__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25860__auto____$1),self__.__meta),k__25861__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25861__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25858__auto__,k__25859__auto__,G__34928){
var self__ = this;
var this__25858__auto____$1 = this;
var pred__34932 = cljs.core.keyword_identical_QMARK_;
var expr__34933 = k__25859__auto__;
if(cljs.core.truth_(pred__34932.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__34933))){
return (new schema.spec.variant.VariantSpec(G__34928,self__.options,self__.err_f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34932.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__34933))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__34928,self__.err_f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34932.call(null,new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__34933))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__34928,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25859__auto__,G__34928),null));
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25863__auto__){
var self__ = this;
var this__25863__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25850__auto__,G__34928){
var self__ = this;
var this__25850__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__34928,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25856__auto__,entry__25857__auto__){
var self__ = this;
var this__25856__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25857__auto__)){
return cljs.core._assoc.call(null,this__25856__auto____$1,cljs.core._nth.call(null,entry__25857__auto__,(0)),cljs.core._nth.call(null,entry__25857__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25856__auto____$1,entry__25857__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"err-f","err-f",-2002814828,null)], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__25885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__25885__auto__,writer__25886__auto__){
return cljs.core._write.call(null,writer__25886__auto__,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,null,null,null));
});

schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__34930){
return (new schema.spec.variant.VariantSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__34930),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__34930),new cljs.core.Keyword(null,"err-f","err-f",651620941).cljs$core$IFn$_invoke$arity$1(G__34930),null,cljs.core.dissoc.call(null,G__34930,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941)),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(){
var args34936 = [];
var len__26295__auto___34939 = arguments.length;
var i__26296__auto___34940 = (0);
while(true){
if((i__26296__auto___34940 < len__26295__auto___34939)){
args34936.push((arguments[i__26296__auto___34940]));

var G__34941 = (i__26296__auto___34940 + (1));
i__26296__auto___34940 = G__34941;
continue;
} else {
}
break;
}

var G__34938 = args34936.length;
switch (G__34938) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34936.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.call(null,pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
if(cljs.core.truth_((function (){var or__25256__auto__ = err_f;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return (new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec.call(null,pre,options,err_f);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=variant.js.map