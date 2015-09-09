// Compiled by ClojureScript 1.7.48 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__31958__31959__auto__){
if(!((p1__31958__31959__auto__ == null))){
if((false) || (p1__31958__31959__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__31958__31959__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__31958__31959__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__31958__31959__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__34215_SHARP_){
return (cljs.core.val.call(null,p1__34215_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__34217 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__34217,(0),null);
var v = cljs.core.nth.call(null,vec__34217,(1),null);
var p = vec__34217;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___34223 = schema.utils.use_fn_validation;
var output_schema34218_34224 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema34219_34225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34220_34226 = schema.core.checker.call(null,input_schema34219_34225);
var output_checker34221_34227 = schema.core.checker.call(null,output_schema34218_34224);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___34223,output_schema34218_34224,input_schema34219_34225,input_checker34220_34226,output_checker34221_34227){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__34222){
var validate__31254__auto__ = ufv___34223.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34222], null);
var temp__4425__auto___34229 = input_checker34220_34226.call(null,args__31255__auto___34228);
if(cljs.core.truth_(temp__4425__auto___34229)){
var error__31256__auto___34230 = temp__4425__auto___34229;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__31256__auto___34230)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34219_34225,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34228,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34230], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var k = G__34222;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34231 = output_checker34221_34227.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34231)){
var error__31256__auto___34232 = temp__4425__auto___34231;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__31256__auto___34232)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34218_34224,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34232], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34223,output_schema34218_34224,input_schema34219_34225,input_checker34220_34226,output_checker34221_34227))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema34218_34224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34219_34225], null)));
var ufv___34238 = schema.utils.use_fn_validation;
var output_schema34233_34239 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema34234_34240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34235_34241 = schema.core.checker.call(null,input_schema34234_34240);
var output_checker34236_34242 = schema.core.checker.call(null,output_schema34233_34239);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___34238,output_schema34233_34239,input_schema34234_34240,input_checker34235_34241,output_checker34236_34242){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__34237){
var validate__31254__auto__ = ufv___34238.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34237], null);
var temp__4425__auto___34244 = input_checker34235_34241.call(null,args__31255__auto___34243);
if(cljs.core.truth_(temp__4425__auto___34244)){
var error__31256__auto___34245 = temp__4425__auto___34244;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__31256__auto___34245)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34234_34240,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34243,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34245], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var s = G__34237;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34246 = output_checker34236_34242.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34246)){
var error__31256__auto___34247 = temp__4425__auto___34246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__31256__auto___34247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34233_34239,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34247], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34238,output_schema34233_34239,input_schema34234_34240,input_checker34235_34241,output_checker34236_34242))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema34233_34239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34234_34240], null)));
var ufv___34253 = schema.utils.use_fn_validation;
var output_schema34248_34254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema34249_34255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker34250_34256 = schema.core.checker.call(null,input_schema34249_34255);
var output_checker34251_34257 = schema.core.checker.call(null,output_schema34248_34254);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___34253,output_schema34248_34254,input_schema34249_34255,input_checker34250_34256,output_checker34251_34257){
return (function plumbing$fnk$schema$split_schema_keys(G__34252){
var validate__31254__auto__ = ufv___34253.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34252], null);
var temp__4425__auto___34259 = input_checker34250_34256.call(null,args__31255__auto___34258);
if(cljs.core.truth_(temp__4425__auto___34259)){
var error__31256__auto___34260 = temp__4425__auto___34259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__31256__auto___34260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34249_34255,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34258,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34260], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var s = G__34252;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34261 = output_checker34251_34257.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34261)){
var error__31256__auto___34262 = temp__4425__auto___34261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__31256__auto___34262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34248_34254,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34262], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34253,output_schema34248_34254,input_schema34249_34255,input_checker34250_34256,output_checker34251_34257))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema34248_34254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34249_34255], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var args__26302__auto__ = [];
var len__26295__auto___34270 = arguments.length;
var i__26296__auto___34271 = (0);
while(true){
if((i__26296__auto___34271 < len__26295__auto___34270)){
args__26302__auto__.push((arguments[i__26296__auto___34271]));

var G__34272 = (i__26296__auto___34271 + (1));
i__26296__auto___34271 = G__34272;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((3) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26303__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__34267){
var vec__34268 = p__34267;
var k = cljs.core.nth.call(null,vec__34268,(0),null);
var v = cljs.core.nth.call(null,vec__34268,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__34269 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__34269,(0),null);
var ov = cljs.core.nth.call(null,vec__34269,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq34263){
var G__34264 = cljs.core.first.call(null,seq34263);
var seq34263__$1 = cljs.core.next.call(null,seq34263);
var G__34265 = cljs.core.first.call(null,seq34263__$1);
var seq34263__$2 = cljs.core.next.call(null,seq34263__$1);
var G__34266 = cljs.core.first.call(null,seq34263__$2);
var seq34263__$3 = cljs.core.next.call(null,seq34263__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__34264,G__34265,G__34266,seq34263__$3);
});
var ufv___34280 = schema.utils.use_fn_validation;
var output_schema34274_34281 = plumbing.fnk.schema.InputSchema;
var input_schema34275_34282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34276_34283 = schema.core.checker.call(null,input_schema34275_34282);
var output_checker34277_34284 = schema.core.checker.call(null,output_schema34274_34281);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284){
return (function plumbing$fnk$schema$union_input_schemata(G__34278,G__34279){
var validate__31254__auto__ = ufv___34280.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34278,G__34279], null);
var temp__4425__auto___34286 = input_checker34276_34283.call(null,args__31255__auto___34285);
if(cljs.core.truth_(temp__4425__auto___34286)){
var error__31256__auto___34287 = temp__4425__auto___34286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__31256__auto___34287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34275_34282,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34285,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34287], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var i1 = G__34278;
var i2 = G__34279;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284){
return (function (p1__34273_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__34273_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__34273_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284))
,((function (validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284))
,((function (validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__25244__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__25244__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__25244__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__31254__auto__,ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34288 = output_checker34277_34284.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34288)){
var error__31256__auto___34289 = temp__4425__auto___34288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__31256__auto___34289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34274_34281,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34289], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34280,output_schema34274_34281,input_schema34275_34282,input_checker34276_34283,output_checker34277_34284))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema34274_34281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34275_34282], null)));
var ufv___34295 = schema.utils.use_fn_validation;
var output_schema34290_34296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema34291_34297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34292_34298 = schema.core.checker.call(null,input_schema34291_34297);
var output_checker34293_34299 = schema.core.checker.call(null,output_schema34290_34296);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___34295,output_schema34290_34296,input_schema34291_34297,input_checker34292_34298,output_checker34293_34299){
return (function plumbing$fnk$schema$required_toplevel_keys(G__34294){
var validate__31254__auto__ = ufv___34295.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34294], null);
var temp__4425__auto___34301 = input_checker34292_34298.call(null,args__31255__auto___34300);
if(cljs.core.truth_(temp__4425__auto___34301)){
var error__31256__auto___34302 = temp__4425__auto___34301;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__31256__auto___34302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34291_34297,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34300,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34302], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var input_schema = G__34294;
while(true){
return cljs.core.keep.call(null,((function (validate__31254__auto__,ufv___34295,output_schema34290_34296,input_schema34291_34297,input_checker34292_34298,output_checker34293_34299){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__31254__auto__,ufv___34295,output_schema34290_34296,input_schema34291_34297,input_checker34292_34298,output_checker34293_34299))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34303 = output_checker34293_34299.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34303)){
var error__31256__auto___34304 = temp__4425__auto___34303;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__31256__auto___34304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34290_34296,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34304], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34295,output_schema34290_34296,input_schema34291_34297,input_checker34292_34298,output_checker34293_34299))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema34290_34296,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34291_34297], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26009__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__34313(s__34314){
return (new cljs.core.LazySeq(null,(function (){
var s__34314__$1 = s__34314;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34314__$1);
if(temp__4425__auto__){
var s__34314__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34314__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__34314__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__34316 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__34315 = (0);
while(true){
if((i__34315 < size__26008__auto__)){
var vec__34319 = cljs.core._nth.call(null,c__26007__auto__,i__34315);
var k = cljs.core.nth.call(null,vec__34319,(0),null);
var v = cljs.core.nth.call(null,vec__34319,(1),null);
cljs.core.chunk_append.call(null,b__34316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__34321 = (i__34315 + (1));
i__34315 = G__34321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34316),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34313.call(null,cljs.core.chunk_rest.call(null,s__34314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34316),null);
}
} else {
var vec__34320 = cljs.core.first.call(null,s__34314__$2);
var k = cljs.core.nth.call(null,vec__34320,(0),null);
var v = cljs.core.nth.call(null,vec__34320,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34313.call(null,cljs.core.rest.call(null,s__34314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26009__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26009__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__34330(s__34331){
return (new cljs.core.LazySeq(null,(function (){
var s__34331__$1 = s__34331;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34331__$1);
if(temp__4425__auto__){
var s__34331__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34331__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__34331__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__34333 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__34332 = (0);
while(true){
if((i__34332 < size__26008__auto__)){
var vec__34336 = cljs.core._nth.call(null,c__26007__auto__,i__34332);
var k = cljs.core.nth.call(null,vec__34336,(0),null);
var v = cljs.core.nth.call(null,vec__34336,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__25256__auto__ = required_QMARK_;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__34333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__34338 = (i__34332 + (1));
i__34332 = G__34338;
continue;
} else {
var G__34339 = (i__34332 + (1));
i__34332 = G__34339;
continue;
}
} else {
var G__34340 = (i__34332 + (1));
i__34332 = G__34340;
continue;
}
} else {
var G__34341 = (i__34332 + (1));
i__34332 = G__34341;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34333),plumbing$fnk$schema$schema_diff_$_iter__34330.call(null,cljs.core.chunk_rest.call(null,s__34331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34333),null);
}
} else {
var vec__34337 = cljs.core.first.call(null,s__34331__$2);
var k = cljs.core.nth.call(null,vec__34337,(0),null);
var v = cljs.core.nth.call(null,vec__34337,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__25256__auto__ = required_QMARK_;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__34330.call(null,cljs.core.rest.call(null,s__34331__$2)));
} else {
var G__34342 = cljs.core.rest.call(null,s__34331__$2);
s__34331__$1 = G__34342;
continue;
}
} else {
var G__34343 = cljs.core.rest.call(null,s__34331__$2);
s__34331__$1 = G__34343;
continue;
}
} else {
var G__34344 = cljs.core.rest.call(null,s__34331__$2);
s__34331__$1 = G__34344;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26009__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___34367 = schema.utils.use_fn_validation;
var output_schema34345_34368 = schema.core.Any;
var input_schema34346_34369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34347_34370 = schema.core.checker.call(null,input_schema34346_34369);
var output_checker34348_34371 = schema.core.checker.call(null,output_schema34345_34368);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___34367,output_schema34345_34368,input_schema34346_34369,input_checker34347_34370,output_checker34348_34371){
return (function plumbing$fnk$schema$compose_schemata(G__34349,G__34350){
var validate__31254__auto__ = true;
if(validate__31254__auto__){
var args__31255__auto___34372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34349,G__34350], null);
var temp__4425__auto___34373 = input_checker34347_34370.call(null,args__31255__auto___34372);
if(cljs.core.truth_(temp__4425__auto___34373)){
var error__31256__auto___34374 = temp__4425__auto___34373;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__31256__auto___34374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34346_34369,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34372,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34374], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var G__34361 = G__34349;
var vec__34363 = G__34361;
var i2 = cljs.core.nth.call(null,vec__34363,(0),null);
var o2 = cljs.core.nth.call(null,vec__34363,(1),null);
var G__34362 = G__34350;
var vec__34364 = G__34362;
var i1 = cljs.core.nth.call(null,vec__34364,(0),null);
var o1 = cljs.core.nth.call(null,vec__34364,(1),null);
var G__34361__$1 = G__34361;
var G__34362__$1 = G__34362;
while(true){
var vec__34365 = G__34361__$1;
var i2__$1 = cljs.core.nth.call(null,vec__34365,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34365,(1),null);
var vec__34366 = G__34362__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34366,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34366,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__31254__auto__){
var temp__4425__auto___34375 = output_checker34348_34371.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34375)){
var error__31256__auto___34376 = temp__4425__auto___34375;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__31256__auto___34376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34345_34368,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34376], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34367,output_schema34345_34368,input_schema34346_34369,input_checker34347_34370,output_checker34348_34371))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema34345_34368,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34346_34369], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___34455 = schema.utils.use_fn_validation;
var output_schema34377_34456 = schema.core.Any;
var input_schema34378_34457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker34379_34458 = schema.core.checker.call(null,input_schema34378_34457);
var output_checker34380_34459 = schema.core.checker.call(null,output_schema34377_34456);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function plumbing$fnk$schema$split_schema(G__34381,G__34382){
var validate__31254__auto__ = ufv___34455.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34381,G__34382], null);
var temp__4425__auto___34461 = input_checker34379_34458.call(null,args__31255__auto___34460);
if(cljs.core.truth_(temp__4425__auto___34461)){
var error__31256__auto___34462 = temp__4425__auto___34461;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__31256__auto___34462)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34378_34457,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34460,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34462], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var s = G__34381;
var ks = G__34382;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__26009__auto__ = ((function (ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function plumbing$fnk$schema$split_schema_$_iter__34419(s__34420){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function (){
var s__34420__$1 = s__34420;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34420__$1);
if(temp__4425__auto__){
var s__34420__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34420__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__34420__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__34422 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__34421 = (0);
while(true){
if((i__34421 < size__26008__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__26007__auto__,i__34421);
cljs.core.chunk_append.call(null,b__34422,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26009__auto__ = ((function (i__34421,in_QMARK_,c__26007__auto__,size__26008__auto__,b__34422,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34439(s__34440){
return (new cljs.core.LazySeq(null,((function (i__34421,in_QMARK_,c__26007__auto__,size__26008__auto__,b__34422,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function (){
var s__34440__$1 = s__34440;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34440__$1);
if(temp__4425__auto____$1){
var s__34440__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34440__$2)){
var c__26007__auto____$1 = cljs.core.chunk_first.call(null,s__34440__$2);
var size__26008__auto____$1 = cljs.core.count.call(null,c__26007__auto____$1);
var b__34442 = cljs.core.chunk_buffer.call(null,size__26008__auto____$1);
if((function (){var i__34441 = (0);
while(true){
if((i__34441 < size__26008__auto____$1)){
var vec__34445 = cljs.core._nth.call(null,c__26007__auto____$1,i__34441);
var k = cljs.core.nth.call(null,vec__34445,(0),null);
var v = cljs.core.nth.call(null,vec__34445,(1),null);
if(cljs.core.truth_((function (){var and__25244__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__25244__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__34442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34463 = (i__34441 + (1));
i__34441 = G__34463;
continue;
} else {
var G__34464 = (i__34441 + (1));
i__34441 = G__34464;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34442),plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34439.call(null,cljs.core.chunk_rest.call(null,s__34440__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34442),null);
}
} else {
var vec__34446 = cljs.core.first.call(null,s__34440__$2);
var k = cljs.core.nth.call(null,vec__34446,(0),null);
var v = cljs.core.nth.call(null,vec__34446,(1),null);
if(cljs.core.truth_((function (){var and__25244__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__25244__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34439.call(null,cljs.core.rest.call(null,s__34440__$2)));
} else {
var G__34465 = cljs.core.rest.call(null,s__34440__$2);
s__34440__$1 = G__34465;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__34421,in_QMARK_,c__26007__auto__,size__26008__auto__,b__34422,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
,null,null));
});})(i__34421,in_QMARK_,c__26007__auto__,size__26008__auto__,b__34422,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
;
return iter__26009__auto__.call(null,s);
})()));

var G__34466 = (i__34421 + (1));
i__34421 = G__34466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34422),plumbing$fnk$schema$split_schema_$_iter__34419.call(null,cljs.core.chunk_rest.call(null,s__34420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34422),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__34420__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26009__auto__ = ((function (in_QMARK_,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34447(s__34448){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459){
return (function (){
var s__34448__$1 = s__34448;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34448__$1);
if(temp__4425__auto____$1){
var s__34448__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34448__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__34448__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__34450 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__34449 = (0);
while(true){
if((i__34449 < size__26008__auto__)){
var vec__34453 = cljs.core._nth.call(null,c__26007__auto__,i__34449);
var k = cljs.core.nth.call(null,vec__34453,(0),null);
var v = cljs.core.nth.call(null,vec__34453,(1),null);
if(cljs.core.truth_((function (){var and__25244__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__25244__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__34450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34467 = (i__34449 + (1));
i__34449 = G__34467;
continue;
} else {
var G__34468 = (i__34449 + (1));
i__34449 = G__34468;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34450),plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34447.call(null,cljs.core.chunk_rest.call(null,s__34448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34450),null);
}
} else {
var vec__34454 = cljs.core.first.call(null,s__34448__$2);
var k = cljs.core.nth.call(null,vec__34454,(0),null);
var v = cljs.core.nth.call(null,vec__34454,(1),null);
if(cljs.core.truth_((function (){var and__25244__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__25244__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__34419_$_iter__34447.call(null,cljs.core.rest.call(null,s__34448__$2)));
} else {
var G__34469 = cljs.core.rest.call(null,s__34448__$2);
s__34448__$1 = G__34469;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
,null,null));
});})(in_QMARK_,s__34420__$2,temp__4425__auto__,ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
;
return iter__26009__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__34419.call(null,cljs.core.rest.call(null,s__34420__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
,null,null));
});})(ks__$1,validate__31254__auto__,ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
;
return iter__26009__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34470 = output_checker34380_34459.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34470)){
var error__31256__auto___34471 = temp__4425__auto___34470;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__31256__auto___34471)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34377_34456,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34471], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34455,output_schema34377_34456,input_schema34378_34457,input_checker34379_34458,output_checker34380_34459))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema34377_34456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34378_34457], null)));
var ufv___34502 = schema.utils.use_fn_validation;
var output_schema34472_34503 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema34473_34504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34474_34505 = schema.core.checker.call(null,input_schema34473_34504);
var output_checker34475_34506 = schema.core.checker.call(null,output_schema34472_34503);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___34502,output_schema34472_34503,input_schema34473_34504,input_checker34474_34505,output_checker34475_34506){
return (function plumbing$fnk$schema$sequence_schemata(G__34476,G__34477){
var validate__31254__auto__ = ufv___34502.get_cell();
if(cljs.core.truth_(validate__31254__auto__)){
var args__31255__auto___34507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34476,G__34477], null);
var temp__4425__auto___34508 = input_checker34474_34505.call(null,args__31255__auto___34507);
if(cljs.core.truth_(temp__4425__auto___34508)){
var error__31256__auto___34509 = temp__4425__auto___34508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__31256__auto___34509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34473_34504,new cljs.core.Keyword(null,"value","value",305978217),args__31255__auto___34507,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34509], null));
} else {
}
} else {
}

var o__31257__auto__ = (function (){var G__34493 = G__34476;
var vec__34495 = G__34493;
var i1 = cljs.core.nth.call(null,vec__34495,(0),null);
var o1 = cljs.core.nth.call(null,vec__34495,(1),null);
var G__34494 = G__34477;
var vec__34496 = G__34494;
var k = cljs.core.nth.call(null,vec__34496,(0),null);
var vec__34497 = cljs.core.nth.call(null,vec__34496,(1),null);
var i2 = cljs.core.nth.call(null,vec__34497,(0),null);
var o2 = cljs.core.nth.call(null,vec__34497,(1),null);
var G__34493__$1 = G__34493;
var G__34494__$1 = G__34494;
while(true){
var vec__34498 = G__34493__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34498,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34498,(1),null);
var vec__34499 = G__34494__$1;
var k__$1 = cljs.core.nth.call(null,vec__34499,(0),null);
var vec__34500 = cljs.core.nth.call(null,vec__34499,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__34500,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34500,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__34501 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__34501,(0),null);
var unused = cljs.core.nth.call(null,vec__34501,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__31254__auto__)){
var temp__4425__auto___34510 = output_checker34475_34506.call(null,o__31257__auto__);
if(cljs.core.truth_(temp__4425__auto___34510)){
var error__31256__auto___34511 = temp__4425__auto___34510;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__31256__auto___34511)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34472_34503,new cljs.core.Keyword(null,"value","value",305978217),o__31257__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__31256__auto___34511], null));
} else {
}
} else {
}

return o__31257__auto__;
});})(ufv___34502,output_schema34472_34503,input_schema34473_34504,input_checker34474_34505,output_checker34475_34506))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema34472_34503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34473_34504], null)));

//# sourceMappingURL=schema.js.map