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

var ufv___33584 = schema.utils.use_fn_validation;
var output_schema33569_33585 = schema.core.Any;
var input_schema33570_33586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33571_33587 = schema.core.checker.call(null,input_schema33570_33586);
var output_checker33572_33588 = schema.core.checker.call(null,output_schema33569_33585);
/**
 * Inputs: [data owner]
 */
shrike.core.app_body = ((function (ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function shrike$core$app_body(G__33573,G__33574){
var validate__30085__auto__ = ufv___33584.get_cell();
if(cljs.core.truth_(validate__30085__auto__)){
var args__30086__auto___33589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33573,G__33574], null);
var temp__4425__auto___33590 = input_checker33571_33587.call(null,args__30086__auto___33589);
if(cljs.core.truth_(temp__4425__auto___33590)){
var error__30087__auto___33591 = temp__4425__auto___33590;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30087__auto___33591)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33570_33586,new cljs.core.Keyword(null,"value","value",305978217),args__30086__auto___33589,new cljs.core.Keyword(null,"error","error",-978969032),error__30087__auto___33591], null));
} else {
}
} else {
}

var o__30088__auto__ = (function (){var data = G__33573;
var owner = G__33574;
while(true){
if(typeof shrike.core.t33578 !== 'undefined'){
} else {

/**
* @constructor
*/
shrike.core.t33578 = (function (input_schema33570,validate__30085__auto__,owner,data,output_checker33572,G__33573,G__33574,output_schema33569,input_checker33571,app_body,ufv__,meta33579){
this.input_schema33570 = input_schema33570;
this.validate__30085__auto__ = validate__30085__auto__;
this.owner = owner;
this.data = data;
this.output_checker33572 = output_checker33572;
this.G__33573 = G__33573;
this.G__33574 = G__33574;
this.output_schema33569 = output_schema33569;
this.input_checker33571 = input_checker33571;
this.app_body = app_body;
this.ufv__ = ufv__;
this.meta33579 = meta33579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shrike.core.t33578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (_33580,meta33579__$1){
var self__ = this;
var _33580__$1 = this;
return (new shrike.core.t33578(self__.input_schema33570,self__.validate__30085__auto__,self__.owner,self__.data,self__.output_checker33572,self__.G__33573,self__.G__33574,self__.output_schema33569,self__.input_checker33571,self__.app_body,self__.ufv__,meta33579__$1));
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.t33578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (_33580){
var self__ = this;
var _33580__$1 = this;
return self__.meta33579;
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.t33578.prototype.om$core$IDisplayName$ = true;

shrike.core.t33578.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-body";
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.t33578.prototype.om$core$IRender$ = true;

shrike.core.t33578.prototype.om$core$IRender$render$arity$1 = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "with-top-navbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,shrike.components.navbar.navbar,self__.data)],null))));
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.t33578.getBasis = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema33570","input-schema33570",-1688082176,null),new cljs.core.Symbol(null,"validate__30085__auto__","validate__30085__auto__",-2000203840,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-checker33572","output-checker33572",-626285337,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33573","G__33573",1902063784,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33574","G__33574",-1190554582,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema33569","output-schema33569",-1292975286,null),new cljs.core.Symbol(null,"input-checker33571","input-checker33571",-172321969,null),cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema33569","output-schema33569",-1292975286,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema33570","input-schema33570",-1688082176,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta33579","meta33579",-127214103,null)], null);
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.t33578.cljs$lang$type = true;

shrike.core.t33578.cljs$lang$ctorStr = "shrike.core/t33578";

shrike.core.t33578.cljs$lang$ctorPrWriter = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"shrike.core/t33578");
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

shrike.core.__GT_t33578 = ((function (validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588){
return (function shrike$core$app_body_$___GT_t33578(input_schema33570__$1,validate__30085__auto____$1,owner__$1,data__$1,output_checker33572__$1,G__33573__$1,G__33574__$1,output_schema33569__$1,input_checker33571__$1,app_body__$1,ufv____$1,meta33579){
return (new shrike.core.t33578(input_schema33570__$1,validate__30085__auto____$1,owner__$1,data__$1,output_checker33572__$1,G__33573__$1,G__33574__$1,output_schema33569__$1,input_checker33571__$1,app_body__$1,ufv____$1,meta33579));
});})(validate__30085__auto__,ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

}

return (new shrike.core.t33578(input_schema33570_33586,validate__30085__auto__,owner,data,output_checker33572_33588,G__33573,G__33574,output_schema33569_33585,input_checker33571_33587,shrike$core$app_body,ufv___33584,null));
break;
}
})();
if(cljs.core.truth_(validate__30085__auto__)){
var temp__4425__auto___33592 = output_checker33572_33588.call(null,o__30088__auto__);
if(cljs.core.truth_(temp__4425__auto___33592)){
var error__30087__auto___33593 = temp__4425__auto___33592;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30087__auto___33593)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33569_33585,new cljs.core.Keyword(null,"value","value",305978217),o__30088__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30087__auto___33593], null));
} else {
}
} else {
}

return o__30088__auto__;
});})(ufv___33584,output_schema33569_33585,input_schema33570_33586,input_checker33571_33587,output_checker33572_33588))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shrike.core.app_body),schema.core.make_fn_schema.call(null,output_schema33569_33585,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33570_33586], null)));

shrike.core.__GT_app_body = (function shrike$core$__GT_app_body(){
var args33581 = [];
var len__26295__auto___33594 = arguments.length;
var i__26296__auto___33595 = (0);
while(true){
if((i__26296__auto___33595 < len__26295__auto___33594)){
args33581.push((arguments[i__26296__auto___33595]));

var G__33596 = (i__26296__auto___33595 + (1));
i__26296__auto___33595 = G__33596;
continue;
} else {
}
break;
}

var G__33583 = args33581.length;
switch (G__33583) {
case 1:
return shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33581.length)].join('')));

}
});

shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$1 = (function (cursor__32279__auto__){
return om.core.build.call(null,shrike.core.app_body,cursor__32279__auto__);
});

shrike.core.__GT_app_body.cljs$core$IFn$_invoke$arity$2 = (function (cursor__32279__auto__,m33568){
return om.core.build.call(null,shrike.core.app_body,cursor__32279__auto__,m33568);
});

shrike.core.__GT_app_body.cljs$lang$maxFixedArity = 2;
om.core.root.call(null,shrike.core.app_body,shrike.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));

//# sourceMappingURL=core.js.map