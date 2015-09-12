// Compiled by ClojureScript 1.7.48 {}
goog.provide('shrike.core');
goog.require('cljs.core');
goog.require('shrike.components.navbar');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');
console.log("Successfully loaded shrike Frontend");
if(typeof shrike.core.app_state !== 'undefined'){
} else {
shrike.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

var ufv___33359 = schema.utils.use_fn_validation;
var output_schema33344_33360 = schema.core.Any;
var input_schema33345_33361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33346_33362 = schema.core.checker.call(null,input_schema33345_33361);
var output_checker33347_33363 = schema.core.checker.call(null,output_schema33344_33360);
/**
 * Inputs: [data owner]
 */
shrike.core.app_body = ((function (ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function shrike$core$app_body(G__33348,G__33349){
var validate__30084__auto__ = ufv___33359.get_cell();
if(cljs.core.truth_(validate__30084__auto__)){
var args__30085__auto___33364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33348,G__33349], null);
var temp__4425__auto___33365 = input_checker33346_33362.call(null,args__30085__auto___33364);
if(cljs.core.truth_(temp__4425__auto___33365)){
var error__30086__auto___33366 = temp__4425__auto___33365;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30086__auto___33366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33345_33361,new cljs.core.Keyword(null,"value","value",305978217),args__30085__auto___33364,new cljs.core.Keyword(null,"error","error",-978969032),error__30086__auto___33366], null));
} else {
}
} else {
}

var o__30087__auto__ = (function (){var data = G__33348;
var owner = G__33349;
while(true){
if(typeof shrike.core.t33353 !== 'undefined'){
} else {

/**
* @constructor
*/
shrike.core.t33353 = (function (owner,data,output_checker33347,G__33349,validate__30084__auto__,input_schema33345,app_body,output_schema33344,ufv__,input_checker33346,G__33348,meta33354){
this.owner = owner;
this.data = data;
this.output_checker33347 = output_checker33347;
this.G__33349 = G__33349;
this.validate__30084__auto__ = validate__30084__auto__;
this.input_schema33345 = input_schema33345;
this.app_body = app_body;
this.output_schema33344 = output_schema33344;
this.ufv__ = ufv__;
this.input_checker33346 = input_checker33346;
this.G__33348 = G__33348;
this.meta33354 = meta33354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shrike.core.t33353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (_33355,meta33354__$1){
var self__ = this;
var _33355__$1 = this;
return (new shrike.core.t33353(self__.owner,self__.data,self__.output_checker33347,self__.G__33349,self__.validate__30084__auto__,self__.input_schema33345,self__.app_body,self__.output_schema33344,self__.ufv__,self__.input_checker33346,self__.G__33348,meta33354__$1));
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.t33353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (_33355){
var self__ = this;
var _33355__$1 = this;
return self__.meta33354;
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.t33353.prototype.om$core$IDisplayName$ = true;

shrike.core.t33353.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-body";
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.t33353.prototype.om$core$IRender$ = true;

shrike.core.t33353.prototype.om$core$IRender$render$arity$1 = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "with-top-navbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,shrike.components.navbar.navbar,self__.data)],null))));
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.t33353.getBasis = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-checker33347","output-checker33347",-450055738,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33349","G__33349",-2051637110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__30084__auto__","validate__30084__auto__",-532063761,null),new cljs.core.Symbol(null,"input-schema33345","input-schema33345",-716842926,null),cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema33344","output-schema33344",-960813893,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema33345","input-schema33345",-716842926,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-schema33344","output-schema33344",-960813893,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-checker33346","input-checker33346",-1262976387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33348","G__33348",-2081331363,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta33354","meta33354",2119051037,null)], null);
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.t33353.cljs$lang$type = true;

shrike.core.t33353.cljs$lang$ctorStr = "shrike.core/t33353";

shrike.core.t33353.cljs$lang$ctorPrWriter = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"shrike.core/t33353");
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

shrike.core.__GT_t33353 = ((function (validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363){
return (function shrike$core$app_body_$___GT_t33353(owner__$1,data__$1,output_checker33347__$1,G__33349__$1,validate__30084__auto____$1,input_schema33345__$1,app_body__$1,output_schema33344__$1,ufv____$1,input_checker33346__$1,G__33348__$1,meta33354){
return (new shrike.core.t33353(owner__$1,data__$1,output_checker33347__$1,G__33349__$1,validate__30084__auto____$1,input_schema33345__$1,app_body__$1,output_schema33344__$1,ufv____$1,input_checker33346__$1,G__33348__$1,meta33354));
});})(validate__30084__auto__,ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

}

return (new shrike.core.t33353(owner,data,output_checker33347_33363,G__33349,validate__30084__auto__,input_schema33345_33361,shrike$core$app_body,output_schema33344_33360,ufv___33359,input_checker33346_33362,G__33348,null));
break;
}
})();
if(cljs.core.truth_(validate__30084__auto__)){
var temp__4425__auto___33367 = output_checker33347_33363.call(null,o__30087__auto__);
if(cljs.core.truth_(temp__4425__auto___33367)){
var error__30086__auto___33368 = temp__4425__auto___33367;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30086__auto___33368)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33344_33360,new cljs.core.Keyword(null,"value","value",305978217),o__30087__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30086__auto___33368], null));
} else {
}
} else {
}

return o__30087__auto__;
});})(ufv___33359,output_schema33344_33360,input_schema33345_33361,input_checker33346_33362,output_checker33347_33363))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shrike.core.app_body),schema.core.make_fn_schema.call(null,output_schema33344_33360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33345_33361], null)));

shrike.core.__GT_app_body = (function shrike$core$__GT_app_body(){
var args33356 = [];
var len__26295__auto___33369 = arguments.length;
var i__26296__auto___33370 = (0);
while(true){
if((i__26296__auto___33370 < len__26295__auto___33369)){
args33356.push((arguments[i__26296__auto___33370]));

var G__33371 = (i__26296__auto___33370 + (1));
i__26296__auto___33370 = G__33371;
continue;
} else {
}
break;
}

var G__33358 = args33356.length;
switch (G__33358) {
case 1:
return shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33356.length)].join('')));

}
});

shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$1 = (function (cursor__32278__auto__){
return om.core.build.call(null,shrike.core.app_body,cursor__32278__auto__);
});

shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$2 = (function (cursor__32278__auto__,m33343){
return om.core.build.call(null,shrike.core.app_body,cursor__32278__auto__,m33343);
});

shrike.core.__GT_app_body.cljs$lang$maxFixedArity = 2;
om.core.root.call(null,shrike.core.app_body,shrike.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));

//# sourceMappingURL=core.js.map