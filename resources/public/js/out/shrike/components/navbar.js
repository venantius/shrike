// Compiled by ClojureScript 1.7.48 {}
goog.provide('shrike.components.navbar');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');

var ufv___33464 = schema.utils.use_fn_validation;
var output_schema33449_33465 = schema.core.Any;
var input_schema33450_33466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33451_33467 = schema.core.checker.call(null,input_schema33450_33466);
var output_checker33452_33468 = schema.core.checker.call(null,output_schema33449_33465);
/**
 * Inputs: [data owner]
 */
shrike.components.navbar.navbar = ((function (ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function shrike$components$navbar$navbar(G__33453,G__33454){
var validate__30085__auto__ = ufv___33464.get_cell();
if(cljs.core.truth_(validate__30085__auto__)){
var args__30086__auto___33469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33453,G__33454], null);
var temp__4425__auto___33470 = input_checker33451_33467.call(null,args__30086__auto___33469);
if(cljs.core.truth_(temp__4425__auto___33470)){
var error__30087__auto___33471 = temp__4425__auto___33470;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30087__auto___33471)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33450_33466,new cljs.core.Keyword(null,"value","value",305978217),args__30086__auto___33469,new cljs.core.Keyword(null,"error","error",-978969032),error__30087__auto___33471], null));
} else {
}
} else {
}

var o__30088__auto__ = (function (){var data = G__33453;
var owner = G__33454;
while(true){
if(typeof shrike.components.navbar.t33458 !== 'undefined'){
} else {

/**
* @constructor
*/
shrike.components.navbar.t33458 = (function (validate__30085__auto__,G__33453,owner,data,output_schema33449,navbar,output_checker33452,input_checker33451,ufv__,input_schema33450,G__33454,meta33459){
this.validate__30085__auto__ = validate__30085__auto__;
this.G__33453 = G__33453;
this.owner = owner;
this.data = data;
this.output_schema33449 = output_schema33449;
this.navbar = navbar;
this.output_checker33452 = output_checker33452;
this.input_checker33451 = input_checker33451;
this.ufv__ = ufv__;
this.input_schema33450 = input_schema33450;
this.G__33454 = G__33454;
this.meta33459 = meta33459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shrike.components.navbar.t33458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (_33460,meta33459__$1){
var self__ = this;
var _33460__$1 = this;
return (new shrike.components.navbar.t33458(self__.validate__30085__auto__,self__.G__33453,self__.owner,self__.data,self__.output_schema33449,self__.navbar,self__.output_checker33452,self__.input_checker33451,self__.ufv__,self__.input_schema33450,self__.G__33454,meta33459__$1));
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.t33458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (_33460){
var self__ = this;
var _33460__$1 = this;
return self__.meta33459;
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.t33458.prototype.om$core$IDisplayName$ = true;

shrike.components.navbar.t33458.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (_){
var self__ = this;
var ___$1 = this;
return "navbar";
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.t33458.prototype.om$core$IRender$ = true;

shrike.components.navbar.t33458.prototype.om$core$IRender$render$arity$1 = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-inverse navbar-fixed-top"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "container-fluid container-fluid-spacious"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"className": "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),cljs.core.apply.call(null,React.DOM.a,{"className": "navbar-brand navbar-brand-emphasized", "href": "/"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "icon icon-leaf navbar-brand-icon"}),"Dashboard"],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"id": "navbar", "className": "navbar-collapse collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": "/order-history"},"Order History"),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.li,{"className": "active"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.a({"href": "/fluid"},"Fluid layout")],null)))),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": "/icon-nav"},"Icon nav"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": "/docs"},"docs"),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,React.DOM.a({"href": "/light"},"Light UI"),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.form,{"className": "form-inline navbar-form navbar-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "input-with-icon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"className": "form-control", "type": "text", "placeholder": "Search..."}),React.DOM.span({"className": "icon icon-magnifying-glass"})],null))))],null))))],null))))],null))))],null))));
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.t33458.getBasis = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__30085__auto__","validate__30085__auto__",-2000203840,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33453","G__33453",166559233,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema33449","output-schema33449",-890863254,null),cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema33449","output-schema33449",-890863254,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema33450","input-schema33450",-1013292162,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-checker33452","output-checker33452",-1948650792,null),new cljs.core.Symbol(null,"input-checker33451","input-checker33451",1912124219,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema33450","input-schema33450",-1013292162,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33454","G__33454",1469039518,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta33459","meta33459",1144694107,null)], null);
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.t33458.cljs$lang$type = true;

shrike.components.navbar.t33458.cljs$lang$ctorStr = "shrike.components.navbar/t33458";

shrike.components.navbar.t33458.cljs$lang$ctorPrWriter = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"shrike.components.navbar/t33458");
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

shrike.components.navbar.__GT_t33458 = ((function (validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468){
return (function shrike$components$navbar$navbar_$___GT_t33458(validate__30085__auto____$1,G__33453__$1,owner__$1,data__$1,output_schema33449__$1,navbar__$1,output_checker33452__$1,input_checker33451__$1,ufv____$1,input_schema33450__$1,G__33454__$1,meta33459){
return (new shrike.components.navbar.t33458(validate__30085__auto____$1,G__33453__$1,owner__$1,data__$1,output_schema33449__$1,navbar__$1,output_checker33452__$1,input_checker33451__$1,ufv____$1,input_schema33450__$1,G__33454__$1,meta33459));
});})(validate__30085__auto__,ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

}

return (new shrike.components.navbar.t33458(validate__30085__auto__,G__33453,owner,data,output_schema33449_33465,shrike$components$navbar$navbar,output_checker33452_33468,input_checker33451_33467,ufv___33464,input_schema33450_33466,G__33454,null));
break;
}
})();
if(cljs.core.truth_(validate__30085__auto__)){
var temp__4425__auto___33472 = output_checker33452_33468.call(null,o__30088__auto__);
if(cljs.core.truth_(temp__4425__auto___33472)){
var error__30087__auto___33473 = temp__4425__auto___33472;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30087__auto___33473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33449_33465,new cljs.core.Keyword(null,"value","value",305978217),o__30088__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30087__auto___33473], null));
} else {
}
} else {
}

return o__30088__auto__;
});})(ufv___33464,output_schema33449_33465,input_schema33450_33466,input_checker33451_33467,output_checker33452_33468))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shrike.components.navbar.navbar),schema.core.make_fn_schema.call(null,output_schema33449_33465,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33450_33466], null)));

shrike.components.navbar.__GT_navbar = (function shrike$components$navbar$__GT_navbar(){
var args33461 = [];
var len__26295__auto___33474 = arguments.length;
var i__26296__auto___33475 = (0);
while(true){
if((i__26296__auto___33475 < len__26295__auto___33474)){
args33461.push((arguments[i__26296__auto___33475]));

var G__33476 = (i__26296__auto___33475 + (1));
i__26296__auto___33475 = G__33476;
continue;
} else {
}
break;
}

var G__33463 = args33461.length;
switch (G__33463) {
case 1:
return shrike.components.navbar.__GT_navbar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shrike.components.navbar.__GT_navbar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33461.length)].join('')));

}
});

shrike.components.navbar.__GT_navbar.cljs$core$IFn$_invoke$arity$1 = (function (cursor__32279__auto__){
return om.core.build.call(null,shrike.components.navbar.navbar,cursor__32279__auto__);
});

shrike.components.navbar.__GT_navbar.cljs$core$IFn$_invoke$arity$2 = (function (cursor__32279__auto__,m33448){
return om.core.build.call(null,shrike.components.navbar.navbar,cursor__32279__auto__,m33448);
});

shrike.components.navbar.__GT_navbar.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=navbar.js.map