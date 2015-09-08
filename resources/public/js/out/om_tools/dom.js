// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__25256__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__25256__auto__){
return or__25256__auto__;
} else {
var G__36121 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__36121) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__36124 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__36124) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36128){
var vec__36129 = p__36128;
var k = cljs.core.nth.call(null,vec__36129,(0),null);
var v = cljs.core.nth.call(null,vec__36129,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__25256__auto__ = React.isValidElement;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__36131 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__36131,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__36131,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var args36132 = [];
var len__26295__auto___36757 = arguments.length;
var i__26296__auto___36758 = (0);
while(true){
if((i__26296__auto___36758 < len__26295__auto___36757)){
args36132.push((arguments[i__26296__auto___36758]));

var G__36759 = (i__26296__auto___36758 + (1));
i__26296__auto___36758 = G__36759;
continue;
} else {
}
break;
}

var G__36136 = args36132.length;
switch (G__36136) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36132.slice((1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq36133){
var G__36134 = cljs.core.first.call(null,seq36133);
var seq36133__$1 = cljs.core.next.call(null,seq36133);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__36134,seq36133__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var args36137 = [];
var len__26295__auto___36761 = arguments.length;
var i__26296__auto___36762 = (0);
while(true){
if((i__26296__auto___36762 < len__26295__auto___36761)){
args36137.push((arguments[i__26296__auto___36762]));

var G__36763 = (i__26296__auto___36762 + (1));
i__26296__auto___36762 = G__36763;
continue;
} else {
}
break;
}

var G__36141 = args36137.length;
switch (G__36141) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36137.slice((1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq36138){
var G__36139 = cljs.core.first.call(null,seq36138);
var seq36138__$1 = cljs.core.next.call(null,seq36138);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__36139,seq36138__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var args36142 = [];
var len__26295__auto___36765 = arguments.length;
var i__26296__auto___36766 = (0);
while(true){
if((i__26296__auto___36766 < len__26295__auto___36765)){
args36142.push((arguments[i__26296__auto___36766]));

var G__36767 = (i__26296__auto___36766 + (1));
i__26296__auto___36766 = G__36767;
continue;
} else {
}
break;
}

var G__36146 = args36142.length;
switch (G__36146) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36142.slice((1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq36143){
var G__36144 = cljs.core.first.call(null,seq36143);
var seq36143__$1 = cljs.core.next.call(null,seq36143);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__36144,seq36143__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var args36147 = [];
var len__26295__auto___36769 = arguments.length;
var i__26296__auto___36770 = (0);
while(true){
if((i__26296__auto___36770 < len__26295__auto___36769)){
args36147.push((arguments[i__26296__auto___36770]));

var G__36771 = (i__26296__auto___36770 + (1));
i__26296__auto___36770 = G__36771;
continue;
} else {
}
break;
}

var G__36151 = args36147.length;
switch (G__36151) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36147.slice((1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq36148){
var G__36149 = cljs.core.first.call(null,seq36148);
var seq36148__$1 = cljs.core.next.call(null,seq36148);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__36149,seq36148__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var args36152 = [];
var len__26295__auto___36773 = arguments.length;
var i__26296__auto___36774 = (0);
while(true){
if((i__26296__auto___36774 < len__26295__auto___36773)){
args36152.push((arguments[i__26296__auto___36774]));

var G__36775 = (i__26296__auto___36774 + (1));
i__26296__auto___36774 = G__36775;
continue;
} else {
}
break;
}

var G__36156 = args36152.length;
switch (G__36156) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36152.slice((1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq36153){
var G__36154 = cljs.core.first.call(null,seq36153);
var seq36153__$1 = cljs.core.next.call(null,seq36153);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__36154,seq36153__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var args36157 = [];
var len__26295__auto___36777 = arguments.length;
var i__26296__auto___36778 = (0);
while(true){
if((i__26296__auto___36778 < len__26295__auto___36777)){
args36157.push((arguments[i__26296__auto___36778]));

var G__36779 = (i__26296__auto___36778 + (1));
i__26296__auto___36778 = G__36779;
continue;
} else {
}
break;
}

var G__36161 = args36157.length;
switch (G__36161) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36157.slice((1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq36158){
var G__36159 = cljs.core.first.call(null,seq36158);
var seq36158__$1 = cljs.core.next.call(null,seq36158);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__36159,seq36158__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var args36162 = [];
var len__26295__auto___36781 = arguments.length;
var i__26296__auto___36782 = (0);
while(true){
if((i__26296__auto___36782 < len__26295__auto___36781)){
args36162.push((arguments[i__26296__auto___36782]));

var G__36783 = (i__26296__auto___36782 + (1));
i__26296__auto___36782 = G__36783;
continue;
} else {
}
break;
}

var G__36166 = args36162.length;
switch (G__36166) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36162.slice((1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq36163){
var G__36164 = cljs.core.first.call(null,seq36163);
var seq36163__$1 = cljs.core.next.call(null,seq36163);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__36164,seq36163__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var args36167 = [];
var len__26295__auto___36785 = arguments.length;
var i__26296__auto___36786 = (0);
while(true){
if((i__26296__auto___36786 < len__26295__auto___36785)){
args36167.push((arguments[i__26296__auto___36786]));

var G__36787 = (i__26296__auto___36786 + (1));
i__26296__auto___36786 = G__36787;
continue;
} else {
}
break;
}

var G__36171 = args36167.length;
switch (G__36171) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36167.slice((1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq36168){
var G__36169 = cljs.core.first.call(null,seq36168);
var seq36168__$1 = cljs.core.next.call(null,seq36168);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__36169,seq36168__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var args36172 = [];
var len__26295__auto___36789 = arguments.length;
var i__26296__auto___36790 = (0);
while(true){
if((i__26296__auto___36790 < len__26295__auto___36789)){
args36172.push((arguments[i__26296__auto___36790]));

var G__36791 = (i__26296__auto___36790 + (1));
i__26296__auto___36790 = G__36791;
continue;
} else {
}
break;
}

var G__36176 = args36172.length;
switch (G__36176) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36172.slice((1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq36173){
var G__36174 = cljs.core.first.call(null,seq36173);
var seq36173__$1 = cljs.core.next.call(null,seq36173);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__36174,seq36173__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var args36177 = [];
var len__26295__auto___36793 = arguments.length;
var i__26296__auto___36794 = (0);
while(true){
if((i__26296__auto___36794 < len__26295__auto___36793)){
args36177.push((arguments[i__26296__auto___36794]));

var G__36795 = (i__26296__auto___36794 + (1));
i__26296__auto___36794 = G__36795;
continue;
} else {
}
break;
}

var G__36181 = args36177.length;
switch (G__36181) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36177.slice((1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq36178){
var G__36179 = cljs.core.first.call(null,seq36178);
var seq36178__$1 = cljs.core.next.call(null,seq36178);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__36179,seq36178__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var args36182 = [];
var len__26295__auto___36797 = arguments.length;
var i__26296__auto___36798 = (0);
while(true){
if((i__26296__auto___36798 < len__26295__auto___36797)){
args36182.push((arguments[i__26296__auto___36798]));

var G__36799 = (i__26296__auto___36798 + (1));
i__26296__auto___36798 = G__36799;
continue;
} else {
}
break;
}

var G__36186 = args36182.length;
switch (G__36186) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36182.slice((1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq36183){
var G__36184 = cljs.core.first.call(null,seq36183);
var seq36183__$1 = cljs.core.next.call(null,seq36183);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__36184,seq36183__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var args36187 = [];
var len__26295__auto___36801 = arguments.length;
var i__26296__auto___36802 = (0);
while(true){
if((i__26296__auto___36802 < len__26295__auto___36801)){
args36187.push((arguments[i__26296__auto___36802]));

var G__36803 = (i__26296__auto___36802 + (1));
i__26296__auto___36802 = G__36803;
continue;
} else {
}
break;
}

var G__36191 = args36187.length;
switch (G__36191) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36187.slice((1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq36188){
var G__36189 = cljs.core.first.call(null,seq36188);
var seq36188__$1 = cljs.core.next.call(null,seq36188);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__36189,seq36188__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var args36192 = [];
var len__26295__auto___36805 = arguments.length;
var i__26296__auto___36806 = (0);
while(true){
if((i__26296__auto___36806 < len__26295__auto___36805)){
args36192.push((arguments[i__26296__auto___36806]));

var G__36807 = (i__26296__auto___36806 + (1));
i__26296__auto___36806 = G__36807;
continue;
} else {
}
break;
}

var G__36196 = args36192.length;
switch (G__36196) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36192.slice((1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq36193){
var G__36194 = cljs.core.first.call(null,seq36193);
var seq36193__$1 = cljs.core.next.call(null,seq36193);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__36194,seq36193__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var args36197 = [];
var len__26295__auto___36809 = arguments.length;
var i__26296__auto___36810 = (0);
while(true){
if((i__26296__auto___36810 < len__26295__auto___36809)){
args36197.push((arguments[i__26296__auto___36810]));

var G__36811 = (i__26296__auto___36810 + (1));
i__26296__auto___36810 = G__36811;
continue;
} else {
}
break;
}

var G__36201 = args36197.length;
switch (G__36201) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36197.slice((1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq36198){
var G__36199 = cljs.core.first.call(null,seq36198);
var seq36198__$1 = cljs.core.next.call(null,seq36198);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__36199,seq36198__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var args36202 = [];
var len__26295__auto___36813 = arguments.length;
var i__26296__auto___36814 = (0);
while(true){
if((i__26296__auto___36814 < len__26295__auto___36813)){
args36202.push((arguments[i__26296__auto___36814]));

var G__36815 = (i__26296__auto___36814 + (1));
i__26296__auto___36814 = G__36815;
continue;
} else {
}
break;
}

var G__36206 = args36202.length;
switch (G__36206) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36202.slice((1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq36203){
var G__36204 = cljs.core.first.call(null,seq36203);
var seq36203__$1 = cljs.core.next.call(null,seq36203);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__36204,seq36203__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var args36207 = [];
var len__26295__auto___36817 = arguments.length;
var i__26296__auto___36818 = (0);
while(true){
if((i__26296__auto___36818 < len__26295__auto___36817)){
args36207.push((arguments[i__26296__auto___36818]));

var G__36819 = (i__26296__auto___36818 + (1));
i__26296__auto___36818 = G__36819;
continue;
} else {
}
break;
}

var G__36211 = args36207.length;
switch (G__36211) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36207.slice((1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq36208){
var G__36209 = cljs.core.first.call(null,seq36208);
var seq36208__$1 = cljs.core.next.call(null,seq36208);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__36209,seq36208__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var args36212 = [];
var len__26295__auto___36821 = arguments.length;
var i__26296__auto___36822 = (0);
while(true){
if((i__26296__auto___36822 < len__26295__auto___36821)){
args36212.push((arguments[i__26296__auto___36822]));

var G__36823 = (i__26296__auto___36822 + (1));
i__26296__auto___36822 = G__36823;
continue;
} else {
}
break;
}

var G__36216 = args36212.length;
switch (G__36216) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36212.slice((1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq36213){
var G__36214 = cljs.core.first.call(null,seq36213);
var seq36213__$1 = cljs.core.next.call(null,seq36213);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__36214,seq36213__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var args36217 = [];
var len__26295__auto___36825 = arguments.length;
var i__26296__auto___36826 = (0);
while(true){
if((i__26296__auto___36826 < len__26295__auto___36825)){
args36217.push((arguments[i__26296__auto___36826]));

var G__36827 = (i__26296__auto___36826 + (1));
i__26296__auto___36826 = G__36827;
continue;
} else {
}
break;
}

var G__36221 = args36217.length;
switch (G__36221) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36217.slice((1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq36218){
var G__36219 = cljs.core.first.call(null,seq36218);
var seq36218__$1 = cljs.core.next.call(null,seq36218);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__36219,seq36218__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var args36222 = [];
var len__26295__auto___36829 = arguments.length;
var i__26296__auto___36830 = (0);
while(true){
if((i__26296__auto___36830 < len__26295__auto___36829)){
args36222.push((arguments[i__26296__auto___36830]));

var G__36831 = (i__26296__auto___36830 + (1));
i__26296__auto___36830 = G__36831;
continue;
} else {
}
break;
}

var G__36226 = args36222.length;
switch (G__36226) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36222.slice((1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq36223){
var G__36224 = cljs.core.first.call(null,seq36223);
var seq36223__$1 = cljs.core.next.call(null,seq36223);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__36224,seq36223__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var args36227 = [];
var len__26295__auto___36833 = arguments.length;
var i__26296__auto___36834 = (0);
while(true){
if((i__26296__auto___36834 < len__26295__auto___36833)){
args36227.push((arguments[i__26296__auto___36834]));

var G__36835 = (i__26296__auto___36834 + (1));
i__26296__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var G__36231 = args36227.length;
switch (G__36231) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36227.slice((1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq36228){
var G__36229 = cljs.core.first.call(null,seq36228);
var seq36228__$1 = cljs.core.next.call(null,seq36228);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__36229,seq36228__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var args36232 = [];
var len__26295__auto___36837 = arguments.length;
var i__26296__auto___36838 = (0);
while(true){
if((i__26296__auto___36838 < len__26295__auto___36837)){
args36232.push((arguments[i__26296__auto___36838]));

var G__36839 = (i__26296__auto___36838 + (1));
i__26296__auto___36838 = G__36839;
continue;
} else {
}
break;
}

var G__36236 = args36232.length;
switch (G__36236) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36232.slice((1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq36233){
var G__36234 = cljs.core.first.call(null,seq36233);
var seq36233__$1 = cljs.core.next.call(null,seq36233);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__36234,seq36233__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var args36237 = [];
var len__26295__auto___36841 = arguments.length;
var i__26296__auto___36842 = (0);
while(true){
if((i__26296__auto___36842 < len__26295__auto___36841)){
args36237.push((arguments[i__26296__auto___36842]));

var G__36843 = (i__26296__auto___36842 + (1));
i__26296__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var G__36241 = args36237.length;
switch (G__36241) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36237.slice((1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq36238){
var G__36239 = cljs.core.first.call(null,seq36238);
var seq36238__$1 = cljs.core.next.call(null,seq36238);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__36239,seq36238__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var args36242 = [];
var len__26295__auto___36845 = arguments.length;
var i__26296__auto___36846 = (0);
while(true){
if((i__26296__auto___36846 < len__26295__auto___36845)){
args36242.push((arguments[i__26296__auto___36846]));

var G__36847 = (i__26296__auto___36846 + (1));
i__26296__auto___36846 = G__36847;
continue;
} else {
}
break;
}

var G__36246 = args36242.length;
switch (G__36246) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36242.slice((1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq36243){
var G__36244 = cljs.core.first.call(null,seq36243);
var seq36243__$1 = cljs.core.next.call(null,seq36243);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__36244,seq36243__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var args36247 = [];
var len__26295__auto___36849 = arguments.length;
var i__26296__auto___36850 = (0);
while(true){
if((i__26296__auto___36850 < len__26295__auto___36849)){
args36247.push((arguments[i__26296__auto___36850]));

var G__36851 = (i__26296__auto___36850 + (1));
i__26296__auto___36850 = G__36851;
continue;
} else {
}
break;
}

var G__36251 = args36247.length;
switch (G__36251) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36247.slice((1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq36248){
var G__36249 = cljs.core.first.call(null,seq36248);
var seq36248__$1 = cljs.core.next.call(null,seq36248);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__36249,seq36248__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var args36252 = [];
var len__26295__auto___36853 = arguments.length;
var i__26296__auto___36854 = (0);
while(true){
if((i__26296__auto___36854 < len__26295__auto___36853)){
args36252.push((arguments[i__26296__auto___36854]));

var G__36855 = (i__26296__auto___36854 + (1));
i__26296__auto___36854 = G__36855;
continue;
} else {
}
break;
}

var G__36256 = args36252.length;
switch (G__36256) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36252.slice((1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq36253){
var G__36254 = cljs.core.first.call(null,seq36253);
var seq36253__$1 = cljs.core.next.call(null,seq36253);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__36254,seq36253__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var args36257 = [];
var len__26295__auto___36857 = arguments.length;
var i__26296__auto___36858 = (0);
while(true){
if((i__26296__auto___36858 < len__26295__auto___36857)){
args36257.push((arguments[i__26296__auto___36858]));

var G__36859 = (i__26296__auto___36858 + (1));
i__26296__auto___36858 = G__36859;
continue;
} else {
}
break;
}

var G__36261 = args36257.length;
switch (G__36261) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36257.slice((1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq36258){
var G__36259 = cljs.core.first.call(null,seq36258);
var seq36258__$1 = cljs.core.next.call(null,seq36258);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__36259,seq36258__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var args36262 = [];
var len__26295__auto___36861 = arguments.length;
var i__26296__auto___36862 = (0);
while(true){
if((i__26296__auto___36862 < len__26295__auto___36861)){
args36262.push((arguments[i__26296__auto___36862]));

var G__36863 = (i__26296__auto___36862 + (1));
i__26296__auto___36862 = G__36863;
continue;
} else {
}
break;
}

var G__36266 = args36262.length;
switch (G__36266) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36262.slice((1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq36263){
var G__36264 = cljs.core.first.call(null,seq36263);
var seq36263__$1 = cljs.core.next.call(null,seq36263);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__36264,seq36263__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var args36267 = [];
var len__26295__auto___36865 = arguments.length;
var i__26296__auto___36866 = (0);
while(true){
if((i__26296__auto___36866 < len__26295__auto___36865)){
args36267.push((arguments[i__26296__auto___36866]));

var G__36867 = (i__26296__auto___36866 + (1));
i__26296__auto___36866 = G__36867;
continue;
} else {
}
break;
}

var G__36271 = args36267.length;
switch (G__36271) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36267.slice((1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq36268){
var G__36269 = cljs.core.first.call(null,seq36268);
var seq36268__$1 = cljs.core.next.call(null,seq36268);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__36269,seq36268__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var args36272 = [];
var len__26295__auto___36869 = arguments.length;
var i__26296__auto___36870 = (0);
while(true){
if((i__26296__auto___36870 < len__26295__auto___36869)){
args36272.push((arguments[i__26296__auto___36870]));

var G__36871 = (i__26296__auto___36870 + (1));
i__26296__auto___36870 = G__36871;
continue;
} else {
}
break;
}

var G__36276 = args36272.length;
switch (G__36276) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36272.slice((1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq36273){
var G__36274 = cljs.core.first.call(null,seq36273);
var seq36273__$1 = cljs.core.next.call(null,seq36273);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__36274,seq36273__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var args36277 = [];
var len__26295__auto___36873 = arguments.length;
var i__26296__auto___36874 = (0);
while(true){
if((i__26296__auto___36874 < len__26295__auto___36873)){
args36277.push((arguments[i__26296__auto___36874]));

var G__36875 = (i__26296__auto___36874 + (1));
i__26296__auto___36874 = G__36875;
continue;
} else {
}
break;
}

var G__36281 = args36277.length;
switch (G__36281) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36277.slice((1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq36278){
var G__36279 = cljs.core.first.call(null,seq36278);
var seq36278__$1 = cljs.core.next.call(null,seq36278);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__36279,seq36278__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var args36282 = [];
var len__26295__auto___36877 = arguments.length;
var i__26296__auto___36878 = (0);
while(true){
if((i__26296__auto___36878 < len__26295__auto___36877)){
args36282.push((arguments[i__26296__auto___36878]));

var G__36879 = (i__26296__auto___36878 + (1));
i__26296__auto___36878 = G__36879;
continue;
} else {
}
break;
}

var G__36286 = args36282.length;
switch (G__36286) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36282.slice((1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq36283){
var G__36284 = cljs.core.first.call(null,seq36283);
var seq36283__$1 = cljs.core.next.call(null,seq36283);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__36284,seq36283__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var args36287 = [];
var len__26295__auto___36881 = arguments.length;
var i__26296__auto___36882 = (0);
while(true){
if((i__26296__auto___36882 < len__26295__auto___36881)){
args36287.push((arguments[i__26296__auto___36882]));

var G__36883 = (i__26296__auto___36882 + (1));
i__26296__auto___36882 = G__36883;
continue;
} else {
}
break;
}

var G__36291 = args36287.length;
switch (G__36291) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36287.slice((1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq36288){
var G__36289 = cljs.core.first.call(null,seq36288);
var seq36288__$1 = cljs.core.next.call(null,seq36288);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__36289,seq36288__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var args36297 = [];
var len__26295__auto___36885 = arguments.length;
var i__26296__auto___36886 = (0);
while(true){
if((i__26296__auto___36886 < len__26295__auto___36885)){
args36297.push((arguments[i__26296__auto___36886]));

var G__36887 = (i__26296__auto___36886 + (1));
i__26296__auto___36886 = G__36887;
continue;
} else {
}
break;
}

var G__36301 = args36297.length;
switch (G__36301) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36297.slice((1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq36298){
var G__36299 = cljs.core.first.call(null,seq36298);
var seq36298__$1 = cljs.core.next.call(null,seq36298);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__36299,seq36298__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var args36302 = [];
var len__26295__auto___36889 = arguments.length;
var i__26296__auto___36890 = (0);
while(true){
if((i__26296__auto___36890 < len__26295__auto___36889)){
args36302.push((arguments[i__26296__auto___36890]));

var G__36891 = (i__26296__auto___36890 + (1));
i__26296__auto___36890 = G__36891;
continue;
} else {
}
break;
}

var G__36306 = args36302.length;
switch (G__36306) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36302.slice((1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq36303){
var G__36304 = cljs.core.first.call(null,seq36303);
var seq36303__$1 = cljs.core.next.call(null,seq36303);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__36304,seq36303__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var args36307 = [];
var len__26295__auto___36893 = arguments.length;
var i__26296__auto___36894 = (0);
while(true){
if((i__26296__auto___36894 < len__26295__auto___36893)){
args36307.push((arguments[i__26296__auto___36894]));

var G__36895 = (i__26296__auto___36894 + (1));
i__26296__auto___36894 = G__36895;
continue;
} else {
}
break;
}

var G__36311 = args36307.length;
switch (G__36311) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36307.slice((1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq36308){
var G__36309 = cljs.core.first.call(null,seq36308);
var seq36308__$1 = cljs.core.next.call(null,seq36308);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__36309,seq36308__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var args36312 = [];
var len__26295__auto___36897 = arguments.length;
var i__26296__auto___36898 = (0);
while(true){
if((i__26296__auto___36898 < len__26295__auto___36897)){
args36312.push((arguments[i__26296__auto___36898]));

var G__36899 = (i__26296__auto___36898 + (1));
i__26296__auto___36898 = G__36899;
continue;
} else {
}
break;
}

var G__36316 = args36312.length;
switch (G__36316) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36312.slice((1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq36313){
var G__36314 = cljs.core.first.call(null,seq36313);
var seq36313__$1 = cljs.core.next.call(null,seq36313);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__36314,seq36313__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var args36317 = [];
var len__26295__auto___36901 = arguments.length;
var i__26296__auto___36902 = (0);
while(true){
if((i__26296__auto___36902 < len__26295__auto___36901)){
args36317.push((arguments[i__26296__auto___36902]));

var G__36903 = (i__26296__auto___36902 + (1));
i__26296__auto___36902 = G__36903;
continue;
} else {
}
break;
}

var G__36321 = args36317.length;
switch (G__36321) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36317.slice((1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq36318){
var G__36319 = cljs.core.first.call(null,seq36318);
var seq36318__$1 = cljs.core.next.call(null,seq36318);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__36319,seq36318__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var args36322 = [];
var len__26295__auto___36905 = arguments.length;
var i__26296__auto___36906 = (0);
while(true){
if((i__26296__auto___36906 < len__26295__auto___36905)){
args36322.push((arguments[i__26296__auto___36906]));

var G__36907 = (i__26296__auto___36906 + (1));
i__26296__auto___36906 = G__36907;
continue;
} else {
}
break;
}

var G__36326 = args36322.length;
switch (G__36326) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36322.slice((1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq36323){
var G__36324 = cljs.core.first.call(null,seq36323);
var seq36323__$1 = cljs.core.next.call(null,seq36323);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__36324,seq36323__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var args36327 = [];
var len__26295__auto___36909 = arguments.length;
var i__26296__auto___36910 = (0);
while(true){
if((i__26296__auto___36910 < len__26295__auto___36909)){
args36327.push((arguments[i__26296__auto___36910]));

var G__36911 = (i__26296__auto___36910 + (1));
i__26296__auto___36910 = G__36911;
continue;
} else {
}
break;
}

var G__36331 = args36327.length;
switch (G__36331) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36327.slice((1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq36328){
var G__36329 = cljs.core.first.call(null,seq36328);
var seq36328__$1 = cljs.core.next.call(null,seq36328);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__36329,seq36328__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var args36332 = [];
var len__26295__auto___36913 = arguments.length;
var i__26296__auto___36914 = (0);
while(true){
if((i__26296__auto___36914 < len__26295__auto___36913)){
args36332.push((arguments[i__26296__auto___36914]));

var G__36915 = (i__26296__auto___36914 + (1));
i__26296__auto___36914 = G__36915;
continue;
} else {
}
break;
}

var G__36336 = args36332.length;
switch (G__36336) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36332.slice((1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq36333){
var G__36334 = cljs.core.first.call(null,seq36333);
var seq36333__$1 = cljs.core.next.call(null,seq36333);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__36334,seq36333__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var args36337 = [];
var len__26295__auto___36917 = arguments.length;
var i__26296__auto___36918 = (0);
while(true){
if((i__26296__auto___36918 < len__26295__auto___36917)){
args36337.push((arguments[i__26296__auto___36918]));

var G__36919 = (i__26296__auto___36918 + (1));
i__26296__auto___36918 = G__36919;
continue;
} else {
}
break;
}

var G__36341 = args36337.length;
switch (G__36341) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36337.slice((1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq36338){
var G__36339 = cljs.core.first.call(null,seq36338);
var seq36338__$1 = cljs.core.next.call(null,seq36338);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__36339,seq36338__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var args36342 = [];
var len__26295__auto___36921 = arguments.length;
var i__26296__auto___36922 = (0);
while(true){
if((i__26296__auto___36922 < len__26295__auto___36921)){
args36342.push((arguments[i__26296__auto___36922]));

var G__36923 = (i__26296__auto___36922 + (1));
i__26296__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var G__36346 = args36342.length;
switch (G__36346) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36342.slice((1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq36343){
var G__36344 = cljs.core.first.call(null,seq36343);
var seq36343__$1 = cljs.core.next.call(null,seq36343);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__36344,seq36343__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var args36347 = [];
var len__26295__auto___36925 = arguments.length;
var i__26296__auto___36926 = (0);
while(true){
if((i__26296__auto___36926 < len__26295__auto___36925)){
args36347.push((arguments[i__26296__auto___36926]));

var G__36927 = (i__26296__auto___36926 + (1));
i__26296__auto___36926 = G__36927;
continue;
} else {
}
break;
}

var G__36351 = args36347.length;
switch (G__36351) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36347.slice((1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq36348){
var G__36349 = cljs.core.first.call(null,seq36348);
var seq36348__$1 = cljs.core.next.call(null,seq36348);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__36349,seq36348__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var args36352 = [];
var len__26295__auto___36929 = arguments.length;
var i__26296__auto___36930 = (0);
while(true){
if((i__26296__auto___36930 < len__26295__auto___36929)){
args36352.push((arguments[i__26296__auto___36930]));

var G__36931 = (i__26296__auto___36930 + (1));
i__26296__auto___36930 = G__36931;
continue;
} else {
}
break;
}

var G__36356 = args36352.length;
switch (G__36356) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36352.slice((1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq36353){
var G__36354 = cljs.core.first.call(null,seq36353);
var seq36353__$1 = cljs.core.next.call(null,seq36353);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__36354,seq36353__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var args36357 = [];
var len__26295__auto___36933 = arguments.length;
var i__26296__auto___36934 = (0);
while(true){
if((i__26296__auto___36934 < len__26295__auto___36933)){
args36357.push((arguments[i__26296__auto___36934]));

var G__36935 = (i__26296__auto___36934 + (1));
i__26296__auto___36934 = G__36935;
continue;
} else {
}
break;
}

var G__36361 = args36357.length;
switch (G__36361) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36357.slice((1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq36358){
var G__36359 = cljs.core.first.call(null,seq36358);
var seq36358__$1 = cljs.core.next.call(null,seq36358);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__36359,seq36358__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var args36362 = [];
var len__26295__auto___36937 = arguments.length;
var i__26296__auto___36938 = (0);
while(true){
if((i__26296__auto___36938 < len__26295__auto___36937)){
args36362.push((arguments[i__26296__auto___36938]));

var G__36939 = (i__26296__auto___36938 + (1));
i__26296__auto___36938 = G__36939;
continue;
} else {
}
break;
}

var G__36366 = args36362.length;
switch (G__36366) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36362.slice((1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq36363){
var G__36364 = cljs.core.first.call(null,seq36363);
var seq36363__$1 = cljs.core.next.call(null,seq36363);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__36364,seq36363__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var args36367 = [];
var len__26295__auto___36941 = arguments.length;
var i__26296__auto___36942 = (0);
while(true){
if((i__26296__auto___36942 < len__26295__auto___36941)){
args36367.push((arguments[i__26296__auto___36942]));

var G__36943 = (i__26296__auto___36942 + (1));
i__26296__auto___36942 = G__36943;
continue;
} else {
}
break;
}

var G__36371 = args36367.length;
switch (G__36371) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36367.slice((1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq36368){
var G__36369 = cljs.core.first.call(null,seq36368);
var seq36368__$1 = cljs.core.next.call(null,seq36368);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__36369,seq36368__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var args36372 = [];
var len__26295__auto___36945 = arguments.length;
var i__26296__auto___36946 = (0);
while(true){
if((i__26296__auto___36946 < len__26295__auto___36945)){
args36372.push((arguments[i__26296__auto___36946]));

var G__36947 = (i__26296__auto___36946 + (1));
i__26296__auto___36946 = G__36947;
continue;
} else {
}
break;
}

var G__36376 = args36372.length;
switch (G__36376) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36372.slice((1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq36373){
var G__36374 = cljs.core.first.call(null,seq36373);
var seq36373__$1 = cljs.core.next.call(null,seq36373);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__36374,seq36373__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var args36377 = [];
var len__26295__auto___36949 = arguments.length;
var i__26296__auto___36950 = (0);
while(true){
if((i__26296__auto___36950 < len__26295__auto___36949)){
args36377.push((arguments[i__26296__auto___36950]));

var G__36951 = (i__26296__auto___36950 + (1));
i__26296__auto___36950 = G__36951;
continue;
} else {
}
break;
}

var G__36381 = args36377.length;
switch (G__36381) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36377.slice((1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq36378){
var G__36379 = cljs.core.first.call(null,seq36378);
var seq36378__$1 = cljs.core.next.call(null,seq36378);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__36379,seq36378__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var args36382 = [];
var len__26295__auto___36953 = arguments.length;
var i__26296__auto___36954 = (0);
while(true){
if((i__26296__auto___36954 < len__26295__auto___36953)){
args36382.push((arguments[i__26296__auto___36954]));

var G__36955 = (i__26296__auto___36954 + (1));
i__26296__auto___36954 = G__36955;
continue;
} else {
}
break;
}

var G__36386 = args36382.length;
switch (G__36386) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36382.slice((1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq36383){
var G__36384 = cljs.core.first.call(null,seq36383);
var seq36383__$1 = cljs.core.next.call(null,seq36383);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__36384,seq36383__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var args36387 = [];
var len__26295__auto___36957 = arguments.length;
var i__26296__auto___36958 = (0);
while(true){
if((i__26296__auto___36958 < len__26295__auto___36957)){
args36387.push((arguments[i__26296__auto___36958]));

var G__36959 = (i__26296__auto___36958 + (1));
i__26296__auto___36958 = G__36959;
continue;
} else {
}
break;
}

var G__36391 = args36387.length;
switch (G__36391) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36387.slice((1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq36388){
var G__36389 = cljs.core.first.call(null,seq36388);
var seq36388__$1 = cljs.core.next.call(null,seq36388);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__36389,seq36388__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var args36392 = [];
var len__26295__auto___36961 = arguments.length;
var i__26296__auto___36962 = (0);
while(true){
if((i__26296__auto___36962 < len__26295__auto___36961)){
args36392.push((arguments[i__26296__auto___36962]));

var G__36963 = (i__26296__auto___36962 + (1));
i__26296__auto___36962 = G__36963;
continue;
} else {
}
break;
}

var G__36396 = args36392.length;
switch (G__36396) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36392.slice((1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq36393){
var G__36394 = cljs.core.first.call(null,seq36393);
var seq36393__$1 = cljs.core.next.call(null,seq36393);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__36394,seq36393__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var args36397 = [];
var len__26295__auto___36965 = arguments.length;
var i__26296__auto___36966 = (0);
while(true){
if((i__26296__auto___36966 < len__26295__auto___36965)){
args36397.push((arguments[i__26296__auto___36966]));

var G__36967 = (i__26296__auto___36966 + (1));
i__26296__auto___36966 = G__36967;
continue;
} else {
}
break;
}

var G__36401 = args36397.length;
switch (G__36401) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36397.slice((1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq36398){
var G__36399 = cljs.core.first.call(null,seq36398);
var seq36398__$1 = cljs.core.next.call(null,seq36398);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__36399,seq36398__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var args36402 = [];
var len__26295__auto___36969 = arguments.length;
var i__26296__auto___36970 = (0);
while(true){
if((i__26296__auto___36970 < len__26295__auto___36969)){
args36402.push((arguments[i__26296__auto___36970]));

var G__36971 = (i__26296__auto___36970 + (1));
i__26296__auto___36970 = G__36971;
continue;
} else {
}
break;
}

var G__36406 = args36402.length;
switch (G__36406) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36402.slice((1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq36403){
var G__36404 = cljs.core.first.call(null,seq36403);
var seq36403__$1 = cljs.core.next.call(null,seq36403);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__36404,seq36403__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var args36407 = [];
var len__26295__auto___36973 = arguments.length;
var i__26296__auto___36974 = (0);
while(true){
if((i__26296__auto___36974 < len__26295__auto___36973)){
args36407.push((arguments[i__26296__auto___36974]));

var G__36975 = (i__26296__auto___36974 + (1));
i__26296__auto___36974 = G__36975;
continue;
} else {
}
break;
}

var G__36411 = args36407.length;
switch (G__36411) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36407.slice((1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq36408){
var G__36409 = cljs.core.first.call(null,seq36408);
var seq36408__$1 = cljs.core.next.call(null,seq36408);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__36409,seq36408__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var args36412 = [];
var len__26295__auto___36977 = arguments.length;
var i__26296__auto___36978 = (0);
while(true){
if((i__26296__auto___36978 < len__26295__auto___36977)){
args36412.push((arguments[i__26296__auto___36978]));

var G__36979 = (i__26296__auto___36978 + (1));
i__26296__auto___36978 = G__36979;
continue;
} else {
}
break;
}

var G__36416 = args36412.length;
switch (G__36416) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36412.slice((1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq36413){
var G__36414 = cljs.core.first.call(null,seq36413);
var seq36413__$1 = cljs.core.next.call(null,seq36413);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__36414,seq36413__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var args36417 = [];
var len__26295__auto___36981 = arguments.length;
var i__26296__auto___36982 = (0);
while(true){
if((i__26296__auto___36982 < len__26295__auto___36981)){
args36417.push((arguments[i__26296__auto___36982]));

var G__36983 = (i__26296__auto___36982 + (1));
i__26296__auto___36982 = G__36983;
continue;
} else {
}
break;
}

var G__36421 = args36417.length;
switch (G__36421) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36417.slice((1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq36418){
var G__36419 = cljs.core.first.call(null,seq36418);
var seq36418__$1 = cljs.core.next.call(null,seq36418);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__36419,seq36418__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var args36422 = [];
var len__26295__auto___36985 = arguments.length;
var i__26296__auto___36986 = (0);
while(true){
if((i__26296__auto___36986 < len__26295__auto___36985)){
args36422.push((arguments[i__26296__auto___36986]));

var G__36987 = (i__26296__auto___36986 + (1));
i__26296__auto___36986 = G__36987;
continue;
} else {
}
break;
}

var G__36426 = args36422.length;
switch (G__36426) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36422.slice((1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq36423){
var G__36424 = cljs.core.first.call(null,seq36423);
var seq36423__$1 = cljs.core.next.call(null,seq36423);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__36424,seq36423__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var args36427 = [];
var len__26295__auto___36989 = arguments.length;
var i__26296__auto___36990 = (0);
while(true){
if((i__26296__auto___36990 < len__26295__auto___36989)){
args36427.push((arguments[i__26296__auto___36990]));

var G__36991 = (i__26296__auto___36990 + (1));
i__26296__auto___36990 = G__36991;
continue;
} else {
}
break;
}

var G__36431 = args36427.length;
switch (G__36431) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36427.slice((1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq36428){
var G__36429 = cljs.core.first.call(null,seq36428);
var seq36428__$1 = cljs.core.next.call(null,seq36428);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__36429,seq36428__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var args36432 = [];
var len__26295__auto___36993 = arguments.length;
var i__26296__auto___36994 = (0);
while(true){
if((i__26296__auto___36994 < len__26295__auto___36993)){
args36432.push((arguments[i__26296__auto___36994]));

var G__36995 = (i__26296__auto___36994 + (1));
i__26296__auto___36994 = G__36995;
continue;
} else {
}
break;
}

var G__36436 = args36432.length;
switch (G__36436) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36432.slice((1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq36433){
var G__36434 = cljs.core.first.call(null,seq36433);
var seq36433__$1 = cljs.core.next.call(null,seq36433);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__36434,seq36433__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var args36437 = [];
var len__26295__auto___36997 = arguments.length;
var i__26296__auto___36998 = (0);
while(true){
if((i__26296__auto___36998 < len__26295__auto___36997)){
args36437.push((arguments[i__26296__auto___36998]));

var G__36999 = (i__26296__auto___36998 + (1));
i__26296__auto___36998 = G__36999;
continue;
} else {
}
break;
}

var G__36441 = args36437.length;
switch (G__36441) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36437.slice((1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq36438){
var G__36439 = cljs.core.first.call(null,seq36438);
var seq36438__$1 = cljs.core.next.call(null,seq36438);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__36439,seq36438__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var args36442 = [];
var len__26295__auto___37001 = arguments.length;
var i__26296__auto___37002 = (0);
while(true){
if((i__26296__auto___37002 < len__26295__auto___37001)){
args36442.push((arguments[i__26296__auto___37002]));

var G__37003 = (i__26296__auto___37002 + (1));
i__26296__auto___37002 = G__37003;
continue;
} else {
}
break;
}

var G__36446 = args36442.length;
switch (G__36446) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36442.slice((1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq36443){
var G__36444 = cljs.core.first.call(null,seq36443);
var seq36443__$1 = cljs.core.next.call(null,seq36443);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__36444,seq36443__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var args36447 = [];
var len__26295__auto___37005 = arguments.length;
var i__26296__auto___37006 = (0);
while(true){
if((i__26296__auto___37006 < len__26295__auto___37005)){
args36447.push((arguments[i__26296__auto___37006]));

var G__37007 = (i__26296__auto___37006 + (1));
i__26296__auto___37006 = G__37007;
continue;
} else {
}
break;
}

var G__36451 = args36447.length;
switch (G__36451) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36447.slice((1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq36448){
var G__36449 = cljs.core.first.call(null,seq36448);
var seq36448__$1 = cljs.core.next.call(null,seq36448);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__36449,seq36448__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var args36452 = [];
var len__26295__auto___37009 = arguments.length;
var i__26296__auto___37010 = (0);
while(true){
if((i__26296__auto___37010 < len__26295__auto___37009)){
args36452.push((arguments[i__26296__auto___37010]));

var G__37011 = (i__26296__auto___37010 + (1));
i__26296__auto___37010 = G__37011;
continue;
} else {
}
break;
}

var G__36456 = args36452.length;
switch (G__36456) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36452.slice((1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq36453){
var G__36454 = cljs.core.first.call(null,seq36453);
var seq36453__$1 = cljs.core.next.call(null,seq36453);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__36454,seq36453__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var args36457 = [];
var len__26295__auto___37013 = arguments.length;
var i__26296__auto___37014 = (0);
while(true){
if((i__26296__auto___37014 < len__26295__auto___37013)){
args36457.push((arguments[i__26296__auto___37014]));

var G__37015 = (i__26296__auto___37014 + (1));
i__26296__auto___37014 = G__37015;
continue;
} else {
}
break;
}

var G__36461 = args36457.length;
switch (G__36461) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36457.slice((1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq36458){
var G__36459 = cljs.core.first.call(null,seq36458);
var seq36458__$1 = cljs.core.next.call(null,seq36458);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__36459,seq36458__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var args36462 = [];
var len__26295__auto___37017 = arguments.length;
var i__26296__auto___37018 = (0);
while(true){
if((i__26296__auto___37018 < len__26295__auto___37017)){
args36462.push((arguments[i__26296__auto___37018]));

var G__37019 = (i__26296__auto___37018 + (1));
i__26296__auto___37018 = G__37019;
continue;
} else {
}
break;
}

var G__36466 = args36462.length;
switch (G__36466) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36462.slice((1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq36463){
var G__36464 = cljs.core.first.call(null,seq36463);
var seq36463__$1 = cljs.core.next.call(null,seq36463);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__36464,seq36463__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var args36467 = [];
var len__26295__auto___37021 = arguments.length;
var i__26296__auto___37022 = (0);
while(true){
if((i__26296__auto___37022 < len__26295__auto___37021)){
args36467.push((arguments[i__26296__auto___37022]));

var G__37023 = (i__26296__auto___37022 + (1));
i__26296__auto___37022 = G__37023;
continue;
} else {
}
break;
}

var G__36471 = args36467.length;
switch (G__36471) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36467.slice((1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq36468){
var G__36469 = cljs.core.first.call(null,seq36468);
var seq36468__$1 = cljs.core.next.call(null,seq36468);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__36469,seq36468__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var args36472 = [];
var len__26295__auto___37025 = arguments.length;
var i__26296__auto___37026 = (0);
while(true){
if((i__26296__auto___37026 < len__26295__auto___37025)){
args36472.push((arguments[i__26296__auto___37026]));

var G__37027 = (i__26296__auto___37026 + (1));
i__26296__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var G__36476 = args36472.length;
switch (G__36476) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36472.slice((1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq36473){
var G__36474 = cljs.core.first.call(null,seq36473);
var seq36473__$1 = cljs.core.next.call(null,seq36473);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__36474,seq36473__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var args36477 = [];
var len__26295__auto___37029 = arguments.length;
var i__26296__auto___37030 = (0);
while(true){
if((i__26296__auto___37030 < len__26295__auto___37029)){
args36477.push((arguments[i__26296__auto___37030]));

var G__37031 = (i__26296__auto___37030 + (1));
i__26296__auto___37030 = G__37031;
continue;
} else {
}
break;
}

var G__36481 = args36477.length;
switch (G__36481) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36477.slice((1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq36478){
var G__36479 = cljs.core.first.call(null,seq36478);
var seq36478__$1 = cljs.core.next.call(null,seq36478);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__36479,seq36478__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var args36482 = [];
var len__26295__auto___37033 = arguments.length;
var i__26296__auto___37034 = (0);
while(true){
if((i__26296__auto___37034 < len__26295__auto___37033)){
args36482.push((arguments[i__26296__auto___37034]));

var G__37035 = (i__26296__auto___37034 + (1));
i__26296__auto___37034 = G__37035;
continue;
} else {
}
break;
}

var G__36486 = args36482.length;
switch (G__36486) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36482.slice((1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq36483){
var G__36484 = cljs.core.first.call(null,seq36483);
var seq36483__$1 = cljs.core.next.call(null,seq36483);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__36484,seq36483__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var args36487 = [];
var len__26295__auto___37037 = arguments.length;
var i__26296__auto___37038 = (0);
while(true){
if((i__26296__auto___37038 < len__26295__auto___37037)){
args36487.push((arguments[i__26296__auto___37038]));

var G__37039 = (i__26296__auto___37038 + (1));
i__26296__auto___37038 = G__37039;
continue;
} else {
}
break;
}

var G__36491 = args36487.length;
switch (G__36491) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36487.slice((1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq36488){
var G__36489 = cljs.core.first.call(null,seq36488);
var seq36488__$1 = cljs.core.next.call(null,seq36488);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__36489,seq36488__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var args36492 = [];
var len__26295__auto___37041 = arguments.length;
var i__26296__auto___37042 = (0);
while(true){
if((i__26296__auto___37042 < len__26295__auto___37041)){
args36492.push((arguments[i__26296__auto___37042]));

var G__37043 = (i__26296__auto___37042 + (1));
i__26296__auto___37042 = G__37043;
continue;
} else {
}
break;
}

var G__36496 = args36492.length;
switch (G__36496) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36492.slice((1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq36493){
var G__36494 = cljs.core.first.call(null,seq36493);
var seq36493__$1 = cljs.core.next.call(null,seq36493);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__36494,seq36493__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var args36497 = [];
var len__26295__auto___37045 = arguments.length;
var i__26296__auto___37046 = (0);
while(true){
if((i__26296__auto___37046 < len__26295__auto___37045)){
args36497.push((arguments[i__26296__auto___37046]));

var G__37047 = (i__26296__auto___37046 + (1));
i__26296__auto___37046 = G__37047;
continue;
} else {
}
break;
}

var G__36501 = args36497.length;
switch (G__36501) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36497.slice((1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq36498){
var G__36499 = cljs.core.first.call(null,seq36498);
var seq36498__$1 = cljs.core.next.call(null,seq36498);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__36499,seq36498__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var args36502 = [];
var len__26295__auto___37049 = arguments.length;
var i__26296__auto___37050 = (0);
while(true){
if((i__26296__auto___37050 < len__26295__auto___37049)){
args36502.push((arguments[i__26296__auto___37050]));

var G__37051 = (i__26296__auto___37050 + (1));
i__26296__auto___37050 = G__37051;
continue;
} else {
}
break;
}

var G__36506 = args36502.length;
switch (G__36506) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36502.slice((1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq36503){
var G__36504 = cljs.core.first.call(null,seq36503);
var seq36503__$1 = cljs.core.next.call(null,seq36503);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__36504,seq36503__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var args36507 = [];
var len__26295__auto___37053 = arguments.length;
var i__26296__auto___37054 = (0);
while(true){
if((i__26296__auto___37054 < len__26295__auto___37053)){
args36507.push((arguments[i__26296__auto___37054]));

var G__37055 = (i__26296__auto___37054 + (1));
i__26296__auto___37054 = G__37055;
continue;
} else {
}
break;
}

var G__36511 = args36507.length;
switch (G__36511) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36507.slice((1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq36508){
var G__36509 = cljs.core.first.call(null,seq36508);
var seq36508__$1 = cljs.core.next.call(null,seq36508);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__36509,seq36508__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var args36512 = [];
var len__26295__auto___37057 = arguments.length;
var i__26296__auto___37058 = (0);
while(true){
if((i__26296__auto___37058 < len__26295__auto___37057)){
args36512.push((arguments[i__26296__auto___37058]));

var G__37059 = (i__26296__auto___37058 + (1));
i__26296__auto___37058 = G__37059;
continue;
} else {
}
break;
}

var G__36516 = args36512.length;
switch (G__36516) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36512.slice((1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq36513){
var G__36514 = cljs.core.first.call(null,seq36513);
var seq36513__$1 = cljs.core.next.call(null,seq36513);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__36514,seq36513__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var args36517 = [];
var len__26295__auto___37061 = arguments.length;
var i__26296__auto___37062 = (0);
while(true){
if((i__26296__auto___37062 < len__26295__auto___37061)){
args36517.push((arguments[i__26296__auto___37062]));

var G__37063 = (i__26296__auto___37062 + (1));
i__26296__auto___37062 = G__37063;
continue;
} else {
}
break;
}

var G__36521 = args36517.length;
switch (G__36521) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36517.slice((1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq36518){
var G__36519 = cljs.core.first.call(null,seq36518);
var seq36518__$1 = cljs.core.next.call(null,seq36518);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__36519,seq36518__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var args36522 = [];
var len__26295__auto___37065 = arguments.length;
var i__26296__auto___37066 = (0);
while(true){
if((i__26296__auto___37066 < len__26295__auto___37065)){
args36522.push((arguments[i__26296__auto___37066]));

var G__37067 = (i__26296__auto___37066 + (1));
i__26296__auto___37066 = G__37067;
continue;
} else {
}
break;
}

var G__36526 = args36522.length;
switch (G__36526) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36522.slice((1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq36523){
var G__36524 = cljs.core.first.call(null,seq36523);
var seq36523__$1 = cljs.core.next.call(null,seq36523);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__36524,seq36523__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var args36527 = [];
var len__26295__auto___37069 = arguments.length;
var i__26296__auto___37070 = (0);
while(true){
if((i__26296__auto___37070 < len__26295__auto___37069)){
args36527.push((arguments[i__26296__auto___37070]));

var G__37071 = (i__26296__auto___37070 + (1));
i__26296__auto___37070 = G__37071;
continue;
} else {
}
break;
}

var G__36531 = args36527.length;
switch (G__36531) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36527.slice((1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq36528){
var G__36529 = cljs.core.first.call(null,seq36528);
var seq36528__$1 = cljs.core.next.call(null,seq36528);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__36529,seq36528__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var args36532 = [];
var len__26295__auto___37073 = arguments.length;
var i__26296__auto___37074 = (0);
while(true){
if((i__26296__auto___37074 < len__26295__auto___37073)){
args36532.push((arguments[i__26296__auto___37074]));

var G__37075 = (i__26296__auto___37074 + (1));
i__26296__auto___37074 = G__37075;
continue;
} else {
}
break;
}

var G__36536 = args36532.length;
switch (G__36536) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36532.slice((1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq36533){
var G__36534 = cljs.core.first.call(null,seq36533);
var seq36533__$1 = cljs.core.next.call(null,seq36533);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__36534,seq36533__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var args36537 = [];
var len__26295__auto___37077 = arguments.length;
var i__26296__auto___37078 = (0);
while(true){
if((i__26296__auto___37078 < len__26295__auto___37077)){
args36537.push((arguments[i__26296__auto___37078]));

var G__37079 = (i__26296__auto___37078 + (1));
i__26296__auto___37078 = G__37079;
continue;
} else {
}
break;
}

var G__36541 = args36537.length;
switch (G__36541) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36537.slice((1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq36538){
var G__36539 = cljs.core.first.call(null,seq36538);
var seq36538__$1 = cljs.core.next.call(null,seq36538);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__36539,seq36538__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var args36542 = [];
var len__26295__auto___37081 = arguments.length;
var i__26296__auto___37082 = (0);
while(true){
if((i__26296__auto___37082 < len__26295__auto___37081)){
args36542.push((arguments[i__26296__auto___37082]));

var G__37083 = (i__26296__auto___37082 + (1));
i__26296__auto___37082 = G__37083;
continue;
} else {
}
break;
}

var G__36546 = args36542.length;
switch (G__36546) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36542.slice((1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq36543){
var G__36544 = cljs.core.first.call(null,seq36543);
var seq36543__$1 = cljs.core.next.call(null,seq36543);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__36544,seq36543__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var args36547 = [];
var len__26295__auto___37085 = arguments.length;
var i__26296__auto___37086 = (0);
while(true){
if((i__26296__auto___37086 < len__26295__auto___37085)){
args36547.push((arguments[i__26296__auto___37086]));

var G__37087 = (i__26296__auto___37086 + (1));
i__26296__auto___37086 = G__37087;
continue;
} else {
}
break;
}

var G__36551 = args36547.length;
switch (G__36551) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36547.slice((1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq36548){
var G__36549 = cljs.core.first.call(null,seq36548);
var seq36548__$1 = cljs.core.next.call(null,seq36548);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__36549,seq36548__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var args36552 = [];
var len__26295__auto___37089 = arguments.length;
var i__26296__auto___37090 = (0);
while(true){
if((i__26296__auto___37090 < len__26295__auto___37089)){
args36552.push((arguments[i__26296__auto___37090]));

var G__37091 = (i__26296__auto___37090 + (1));
i__26296__auto___37090 = G__37091;
continue;
} else {
}
break;
}

var G__36556 = args36552.length;
switch (G__36556) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36552.slice((1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq36553){
var G__36554 = cljs.core.first.call(null,seq36553);
var seq36553__$1 = cljs.core.next.call(null,seq36553);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__36554,seq36553__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var args36557 = [];
var len__26295__auto___37093 = arguments.length;
var i__26296__auto___37094 = (0);
while(true){
if((i__26296__auto___37094 < len__26295__auto___37093)){
args36557.push((arguments[i__26296__auto___37094]));

var G__37095 = (i__26296__auto___37094 + (1));
i__26296__auto___37094 = G__37095;
continue;
} else {
}
break;
}

var G__36561 = args36557.length;
switch (G__36561) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36557.slice((1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq36558){
var G__36559 = cljs.core.first.call(null,seq36558);
var seq36558__$1 = cljs.core.next.call(null,seq36558);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__36559,seq36558__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var args36562 = [];
var len__26295__auto___37097 = arguments.length;
var i__26296__auto___37098 = (0);
while(true){
if((i__26296__auto___37098 < len__26295__auto___37097)){
args36562.push((arguments[i__26296__auto___37098]));

var G__37099 = (i__26296__auto___37098 + (1));
i__26296__auto___37098 = G__37099;
continue;
} else {
}
break;
}

var G__36566 = args36562.length;
switch (G__36566) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36562.slice((1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq36563){
var G__36564 = cljs.core.first.call(null,seq36563);
var seq36563__$1 = cljs.core.next.call(null,seq36563);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__36564,seq36563__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var args36567 = [];
var len__26295__auto___37101 = arguments.length;
var i__26296__auto___37102 = (0);
while(true){
if((i__26296__auto___37102 < len__26295__auto___37101)){
args36567.push((arguments[i__26296__auto___37102]));

var G__37103 = (i__26296__auto___37102 + (1));
i__26296__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var G__36571 = args36567.length;
switch (G__36571) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36567.slice((1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq36568){
var G__36569 = cljs.core.first.call(null,seq36568);
var seq36568__$1 = cljs.core.next.call(null,seq36568);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__36569,seq36568__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var args36572 = [];
var len__26295__auto___37105 = arguments.length;
var i__26296__auto___37106 = (0);
while(true){
if((i__26296__auto___37106 < len__26295__auto___37105)){
args36572.push((arguments[i__26296__auto___37106]));

var G__37107 = (i__26296__auto___37106 + (1));
i__26296__auto___37106 = G__37107;
continue;
} else {
}
break;
}

var G__36576 = args36572.length;
switch (G__36576) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36572.slice((1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq36573){
var G__36574 = cljs.core.first.call(null,seq36573);
var seq36573__$1 = cljs.core.next.call(null,seq36573);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__36574,seq36573__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var args36577 = [];
var len__26295__auto___37109 = arguments.length;
var i__26296__auto___37110 = (0);
while(true){
if((i__26296__auto___37110 < len__26295__auto___37109)){
args36577.push((arguments[i__26296__auto___37110]));

var G__37111 = (i__26296__auto___37110 + (1));
i__26296__auto___37110 = G__37111;
continue;
} else {
}
break;
}

var G__36581 = args36577.length;
switch (G__36581) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36577.slice((1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq36578){
var G__36579 = cljs.core.first.call(null,seq36578);
var seq36578__$1 = cljs.core.next.call(null,seq36578);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__36579,seq36578__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var args36582 = [];
var len__26295__auto___37113 = arguments.length;
var i__26296__auto___37114 = (0);
while(true){
if((i__26296__auto___37114 < len__26295__auto___37113)){
args36582.push((arguments[i__26296__auto___37114]));

var G__37115 = (i__26296__auto___37114 + (1));
i__26296__auto___37114 = G__37115;
continue;
} else {
}
break;
}

var G__36586 = args36582.length;
switch (G__36586) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36582.slice((1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq36583){
var G__36584 = cljs.core.first.call(null,seq36583);
var seq36583__$1 = cljs.core.next.call(null,seq36583);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__36584,seq36583__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var args36587 = [];
var len__26295__auto___37117 = arguments.length;
var i__26296__auto___37118 = (0);
while(true){
if((i__26296__auto___37118 < len__26295__auto___37117)){
args36587.push((arguments[i__26296__auto___37118]));

var G__37119 = (i__26296__auto___37118 + (1));
i__26296__auto___37118 = G__37119;
continue;
} else {
}
break;
}

var G__36591 = args36587.length;
switch (G__36591) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36587.slice((1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq36588){
var G__36589 = cljs.core.first.call(null,seq36588);
var seq36588__$1 = cljs.core.next.call(null,seq36588);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__36589,seq36588__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var args36592 = [];
var len__26295__auto___37121 = arguments.length;
var i__26296__auto___37122 = (0);
while(true){
if((i__26296__auto___37122 < len__26295__auto___37121)){
args36592.push((arguments[i__26296__auto___37122]));

var G__37123 = (i__26296__auto___37122 + (1));
i__26296__auto___37122 = G__37123;
continue;
} else {
}
break;
}

var G__36596 = args36592.length;
switch (G__36596) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36592.slice((1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq36593){
var G__36594 = cljs.core.first.call(null,seq36593);
var seq36593__$1 = cljs.core.next.call(null,seq36593);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__36594,seq36593__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var args36597 = [];
var len__26295__auto___37125 = arguments.length;
var i__26296__auto___37126 = (0);
while(true){
if((i__26296__auto___37126 < len__26295__auto___37125)){
args36597.push((arguments[i__26296__auto___37126]));

var G__37127 = (i__26296__auto___37126 + (1));
i__26296__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var G__36601 = args36597.length;
switch (G__36601) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36597.slice((1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq36598){
var G__36599 = cljs.core.first.call(null,seq36598);
var seq36598__$1 = cljs.core.next.call(null,seq36598);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__36599,seq36598__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var args36602 = [];
var len__26295__auto___37129 = arguments.length;
var i__26296__auto___37130 = (0);
while(true){
if((i__26296__auto___37130 < len__26295__auto___37129)){
args36602.push((arguments[i__26296__auto___37130]));

var G__37131 = (i__26296__auto___37130 + (1));
i__26296__auto___37130 = G__37131;
continue;
} else {
}
break;
}

var G__36606 = args36602.length;
switch (G__36606) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36602.slice((1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq36603){
var G__36604 = cljs.core.first.call(null,seq36603);
var seq36603__$1 = cljs.core.next.call(null,seq36603);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__36604,seq36603__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var args36607 = [];
var len__26295__auto___37133 = arguments.length;
var i__26296__auto___37134 = (0);
while(true){
if((i__26296__auto___37134 < len__26295__auto___37133)){
args36607.push((arguments[i__26296__auto___37134]));

var G__37135 = (i__26296__auto___37134 + (1));
i__26296__auto___37134 = G__37135;
continue;
} else {
}
break;
}

var G__36611 = args36607.length;
switch (G__36611) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36607.slice((1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq36608){
var G__36609 = cljs.core.first.call(null,seq36608);
var seq36608__$1 = cljs.core.next.call(null,seq36608);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__36609,seq36608__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var args36612 = [];
var len__26295__auto___37137 = arguments.length;
var i__26296__auto___37138 = (0);
while(true){
if((i__26296__auto___37138 < len__26295__auto___37137)){
args36612.push((arguments[i__26296__auto___37138]));

var G__37139 = (i__26296__auto___37138 + (1));
i__26296__auto___37138 = G__37139;
continue;
} else {
}
break;
}

var G__36616 = args36612.length;
switch (G__36616) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36612.slice((1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq36613){
var G__36614 = cljs.core.first.call(null,seq36613);
var seq36613__$1 = cljs.core.next.call(null,seq36613);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__36614,seq36613__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var args36617 = [];
var len__26295__auto___37141 = arguments.length;
var i__26296__auto___37142 = (0);
while(true){
if((i__26296__auto___37142 < len__26295__auto___37141)){
args36617.push((arguments[i__26296__auto___37142]));

var G__37143 = (i__26296__auto___37142 + (1));
i__26296__auto___37142 = G__37143;
continue;
} else {
}
break;
}

var G__36621 = args36617.length;
switch (G__36621) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36617.slice((1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq36618){
var G__36619 = cljs.core.first.call(null,seq36618);
var seq36618__$1 = cljs.core.next.call(null,seq36618);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__36619,seq36618__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var args36622 = [];
var len__26295__auto___37145 = arguments.length;
var i__26296__auto___37146 = (0);
while(true){
if((i__26296__auto___37146 < len__26295__auto___37145)){
args36622.push((arguments[i__26296__auto___37146]));

var G__37147 = (i__26296__auto___37146 + (1));
i__26296__auto___37146 = G__37147;
continue;
} else {
}
break;
}

var G__36626 = args36622.length;
switch (G__36626) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36622.slice((1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq36623){
var G__36624 = cljs.core.first.call(null,seq36623);
var seq36623__$1 = cljs.core.next.call(null,seq36623);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__36624,seq36623__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var args36627 = [];
var len__26295__auto___37149 = arguments.length;
var i__26296__auto___37150 = (0);
while(true){
if((i__26296__auto___37150 < len__26295__auto___37149)){
args36627.push((arguments[i__26296__auto___37150]));

var G__37151 = (i__26296__auto___37150 + (1));
i__26296__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var G__36631 = args36627.length;
switch (G__36631) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36627.slice((1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq36628){
var G__36629 = cljs.core.first.call(null,seq36628);
var seq36628__$1 = cljs.core.next.call(null,seq36628);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__36629,seq36628__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var args36632 = [];
var len__26295__auto___37153 = arguments.length;
var i__26296__auto___37154 = (0);
while(true){
if((i__26296__auto___37154 < len__26295__auto___37153)){
args36632.push((arguments[i__26296__auto___37154]));

var G__37155 = (i__26296__auto___37154 + (1));
i__26296__auto___37154 = G__37155;
continue;
} else {
}
break;
}

var G__36636 = args36632.length;
switch (G__36636) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36632.slice((1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq36633){
var G__36634 = cljs.core.first.call(null,seq36633);
var seq36633__$1 = cljs.core.next.call(null,seq36633);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__36634,seq36633__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var args36637 = [];
var len__26295__auto___37157 = arguments.length;
var i__26296__auto___37158 = (0);
while(true){
if((i__26296__auto___37158 < len__26295__auto___37157)){
args36637.push((arguments[i__26296__auto___37158]));

var G__37159 = (i__26296__auto___37158 + (1));
i__26296__auto___37158 = G__37159;
continue;
} else {
}
break;
}

var G__36641 = args36637.length;
switch (G__36641) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36637.slice((1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq36638){
var G__36639 = cljs.core.first.call(null,seq36638);
var seq36638__$1 = cljs.core.next.call(null,seq36638);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__36639,seq36638__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var args36642 = [];
var len__26295__auto___37161 = arguments.length;
var i__26296__auto___37162 = (0);
while(true){
if((i__26296__auto___37162 < len__26295__auto___37161)){
args36642.push((arguments[i__26296__auto___37162]));

var G__37163 = (i__26296__auto___37162 + (1));
i__26296__auto___37162 = G__37163;
continue;
} else {
}
break;
}

var G__36646 = args36642.length;
switch (G__36646) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36642.slice((1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq36643){
var G__36644 = cljs.core.first.call(null,seq36643);
var seq36643__$1 = cljs.core.next.call(null,seq36643);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__36644,seq36643__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var args36647 = [];
var len__26295__auto___37165 = arguments.length;
var i__26296__auto___37166 = (0);
while(true){
if((i__26296__auto___37166 < len__26295__auto___37165)){
args36647.push((arguments[i__26296__auto___37166]));

var G__37167 = (i__26296__auto___37166 + (1));
i__26296__auto___37166 = G__37167;
continue;
} else {
}
break;
}

var G__36651 = args36647.length;
switch (G__36651) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36647.slice((1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq36648){
var G__36649 = cljs.core.first.call(null,seq36648);
var seq36648__$1 = cljs.core.next.call(null,seq36648);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__36649,seq36648__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var args36652 = [];
var len__26295__auto___37169 = arguments.length;
var i__26296__auto___37170 = (0);
while(true){
if((i__26296__auto___37170 < len__26295__auto___37169)){
args36652.push((arguments[i__26296__auto___37170]));

var G__37171 = (i__26296__auto___37170 + (1));
i__26296__auto___37170 = G__37171;
continue;
} else {
}
break;
}

var G__36656 = args36652.length;
switch (G__36656) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36652.slice((1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq36653){
var G__36654 = cljs.core.first.call(null,seq36653);
var seq36653__$1 = cljs.core.next.call(null,seq36653);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__36654,seq36653__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var args36657 = [];
var len__26295__auto___37173 = arguments.length;
var i__26296__auto___37174 = (0);
while(true){
if((i__26296__auto___37174 < len__26295__auto___37173)){
args36657.push((arguments[i__26296__auto___37174]));

var G__37175 = (i__26296__auto___37174 + (1));
i__26296__auto___37174 = G__37175;
continue;
} else {
}
break;
}

var G__36661 = args36657.length;
switch (G__36661) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36657.slice((1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq36658){
var G__36659 = cljs.core.first.call(null,seq36658);
var seq36658__$1 = cljs.core.next.call(null,seq36658);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__36659,seq36658__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var args36662 = [];
var len__26295__auto___37177 = arguments.length;
var i__26296__auto___37178 = (0);
while(true){
if((i__26296__auto___37178 < len__26295__auto___37177)){
args36662.push((arguments[i__26296__auto___37178]));

var G__37179 = (i__26296__auto___37178 + (1));
i__26296__auto___37178 = G__37179;
continue;
} else {
}
break;
}

var G__36666 = args36662.length;
switch (G__36666) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36662.slice((1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq36663){
var G__36664 = cljs.core.first.call(null,seq36663);
var seq36663__$1 = cljs.core.next.call(null,seq36663);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__36664,seq36663__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var args36667 = [];
var len__26295__auto___37181 = arguments.length;
var i__26296__auto___37182 = (0);
while(true){
if((i__26296__auto___37182 < len__26295__auto___37181)){
args36667.push((arguments[i__26296__auto___37182]));

var G__37183 = (i__26296__auto___37182 + (1));
i__26296__auto___37182 = G__37183;
continue;
} else {
}
break;
}

var G__36671 = args36667.length;
switch (G__36671) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36667.slice((1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq36668){
var G__36669 = cljs.core.first.call(null,seq36668);
var seq36668__$1 = cljs.core.next.call(null,seq36668);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__36669,seq36668__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var args36672 = [];
var len__26295__auto___37185 = arguments.length;
var i__26296__auto___37186 = (0);
while(true){
if((i__26296__auto___37186 < len__26295__auto___37185)){
args36672.push((arguments[i__26296__auto___37186]));

var G__37187 = (i__26296__auto___37186 + (1));
i__26296__auto___37186 = G__37187;
continue;
} else {
}
break;
}

var G__36676 = args36672.length;
switch (G__36676) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36672.slice((1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq36673){
var G__36674 = cljs.core.first.call(null,seq36673);
var seq36673__$1 = cljs.core.next.call(null,seq36673);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__36674,seq36673__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var args36677 = [];
var len__26295__auto___37189 = arguments.length;
var i__26296__auto___37190 = (0);
while(true){
if((i__26296__auto___37190 < len__26295__auto___37189)){
args36677.push((arguments[i__26296__auto___37190]));

var G__37191 = (i__26296__auto___37190 + (1));
i__26296__auto___37190 = G__37191;
continue;
} else {
}
break;
}

var G__36681 = args36677.length;
switch (G__36681) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36677.slice((1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first.call(null,seq36678);
var seq36678__$1 = cljs.core.next.call(null,seq36678);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__36679,seq36678__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var args36682 = [];
var len__26295__auto___37193 = arguments.length;
var i__26296__auto___37194 = (0);
while(true){
if((i__26296__auto___37194 < len__26295__auto___37193)){
args36682.push((arguments[i__26296__auto___37194]));

var G__37195 = (i__26296__auto___37194 + (1));
i__26296__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var G__36686 = args36682.length;
switch (G__36686) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36682.slice((1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq36683){
var G__36684 = cljs.core.first.call(null,seq36683);
var seq36683__$1 = cljs.core.next.call(null,seq36683);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__36684,seq36683__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var args36687 = [];
var len__26295__auto___37197 = arguments.length;
var i__26296__auto___37198 = (0);
while(true){
if((i__26296__auto___37198 < len__26295__auto___37197)){
args36687.push((arguments[i__26296__auto___37198]));

var G__37199 = (i__26296__auto___37198 + (1));
i__26296__auto___37198 = G__37199;
continue;
} else {
}
break;
}

var G__36691 = args36687.length;
switch (G__36691) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36687.slice((1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq36688){
var G__36689 = cljs.core.first.call(null,seq36688);
var seq36688__$1 = cljs.core.next.call(null,seq36688);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__36689,seq36688__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var args36692 = [];
var len__26295__auto___37201 = arguments.length;
var i__26296__auto___37202 = (0);
while(true){
if((i__26296__auto___37202 < len__26295__auto___37201)){
args36692.push((arguments[i__26296__auto___37202]));

var G__37203 = (i__26296__auto___37202 + (1));
i__26296__auto___37202 = G__37203;
continue;
} else {
}
break;
}

var G__36696 = args36692.length;
switch (G__36696) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36692.slice((1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq36693){
var G__36694 = cljs.core.first.call(null,seq36693);
var seq36693__$1 = cljs.core.next.call(null,seq36693);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__36694,seq36693__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var args36697 = [];
var len__26295__auto___37205 = arguments.length;
var i__26296__auto___37206 = (0);
while(true){
if((i__26296__auto___37206 < len__26295__auto___37205)){
args36697.push((arguments[i__26296__auto___37206]));

var G__37207 = (i__26296__auto___37206 + (1));
i__26296__auto___37206 = G__37207;
continue;
} else {
}
break;
}

var G__36701 = args36697.length;
switch (G__36701) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36697.slice((1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq36698){
var G__36699 = cljs.core.first.call(null,seq36698);
var seq36698__$1 = cljs.core.next.call(null,seq36698);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__36699,seq36698__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var args36702 = [];
var len__26295__auto___37209 = arguments.length;
var i__26296__auto___37210 = (0);
while(true){
if((i__26296__auto___37210 < len__26295__auto___37209)){
args36702.push((arguments[i__26296__auto___37210]));

var G__37211 = (i__26296__auto___37210 + (1));
i__26296__auto___37210 = G__37211;
continue;
} else {
}
break;
}

var G__36706 = args36702.length;
switch (G__36706) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36702.slice((1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq36703){
var G__36704 = cljs.core.first.call(null,seq36703);
var seq36703__$1 = cljs.core.next.call(null,seq36703);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__36704,seq36703__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var args36707 = [];
var len__26295__auto___37213 = arguments.length;
var i__26296__auto___37214 = (0);
while(true){
if((i__26296__auto___37214 < len__26295__auto___37213)){
args36707.push((arguments[i__26296__auto___37214]));

var G__37215 = (i__26296__auto___37214 + (1));
i__26296__auto___37214 = G__37215;
continue;
} else {
}
break;
}

var G__36711 = args36707.length;
switch (G__36711) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36707.slice((1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq36708){
var G__36709 = cljs.core.first.call(null,seq36708);
var seq36708__$1 = cljs.core.next.call(null,seq36708);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__36709,seq36708__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var args36712 = [];
var len__26295__auto___37217 = arguments.length;
var i__26296__auto___37218 = (0);
while(true){
if((i__26296__auto___37218 < len__26295__auto___37217)){
args36712.push((arguments[i__26296__auto___37218]));

var G__37219 = (i__26296__auto___37218 + (1));
i__26296__auto___37218 = G__37219;
continue;
} else {
}
break;
}

var G__36716 = args36712.length;
switch (G__36716) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36712.slice((1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq36713){
var G__36714 = cljs.core.first.call(null,seq36713);
var seq36713__$1 = cljs.core.next.call(null,seq36713);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__36714,seq36713__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var args36717 = [];
var len__26295__auto___37221 = arguments.length;
var i__26296__auto___37222 = (0);
while(true){
if((i__26296__auto___37222 < len__26295__auto___37221)){
args36717.push((arguments[i__26296__auto___37222]));

var G__37223 = (i__26296__auto___37222 + (1));
i__26296__auto___37222 = G__37223;
continue;
} else {
}
break;
}

var G__36721 = args36717.length;
switch (G__36721) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36717.slice((1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq36718){
var G__36719 = cljs.core.first.call(null,seq36718);
var seq36718__$1 = cljs.core.next.call(null,seq36718);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__36719,seq36718__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var args36722 = [];
var len__26295__auto___37225 = arguments.length;
var i__26296__auto___37226 = (0);
while(true){
if((i__26296__auto___37226 < len__26295__auto___37225)){
args36722.push((arguments[i__26296__auto___37226]));

var G__37227 = (i__26296__auto___37226 + (1));
i__26296__auto___37226 = G__37227;
continue;
} else {
}
break;
}

var G__36726 = args36722.length;
switch (G__36726) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36722.slice((1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq36723){
var G__36724 = cljs.core.first.call(null,seq36723);
var seq36723__$1 = cljs.core.next.call(null,seq36723);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__36724,seq36723__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var args36727 = [];
var len__26295__auto___37229 = arguments.length;
var i__26296__auto___37230 = (0);
while(true){
if((i__26296__auto___37230 < len__26295__auto___37229)){
args36727.push((arguments[i__26296__auto___37230]));

var G__37231 = (i__26296__auto___37230 + (1));
i__26296__auto___37230 = G__37231;
continue;
} else {
}
break;
}

var G__36731 = args36727.length;
switch (G__36731) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36727.slice((1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq36728){
var G__36729 = cljs.core.first.call(null,seq36728);
var seq36728__$1 = cljs.core.next.call(null,seq36728);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__36729,seq36728__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var args36732 = [];
var len__26295__auto___37233 = arguments.length;
var i__26296__auto___37234 = (0);
while(true){
if((i__26296__auto___37234 < len__26295__auto___37233)){
args36732.push((arguments[i__26296__auto___37234]));

var G__37235 = (i__26296__auto___37234 + (1));
i__26296__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var G__36736 = args36732.length;
switch (G__36736) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36732.slice((1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq36733){
var G__36734 = cljs.core.first.call(null,seq36733);
var seq36733__$1 = cljs.core.next.call(null,seq36733);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__36734,seq36733__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var args36737 = [];
var len__26295__auto___37237 = arguments.length;
var i__26296__auto___37238 = (0);
while(true){
if((i__26296__auto___37238 < len__26295__auto___37237)){
args36737.push((arguments[i__26296__auto___37238]));

var G__37239 = (i__26296__auto___37238 + (1));
i__26296__auto___37238 = G__37239;
continue;
} else {
}
break;
}

var G__36741 = args36737.length;
switch (G__36741) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36737.slice((1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq36738){
var G__36739 = cljs.core.first.call(null,seq36738);
var seq36738__$1 = cljs.core.next.call(null,seq36738);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__36739,seq36738__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var args36742 = [];
var len__26295__auto___37241 = arguments.length;
var i__26296__auto___37242 = (0);
while(true){
if((i__26296__auto___37242 < len__26295__auto___37241)){
args36742.push((arguments[i__26296__auto___37242]));

var G__37243 = (i__26296__auto___37242 + (1));
i__26296__auto___37242 = G__37243;
continue;
} else {
}
break;
}

var G__36746 = args36742.length;
switch (G__36746) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36742.slice((1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq36743){
var G__36744 = cljs.core.first.call(null,seq36743);
var seq36743__$1 = cljs.core.next.call(null,seq36743);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__36744,seq36743__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var args36747 = [];
var len__26295__auto___37245 = arguments.length;
var i__26296__auto___37246 = (0);
while(true){
if((i__26296__auto___37246 < len__26295__auto___37245)){
args36747.push((arguments[i__26296__auto___37246]));

var G__37247 = (i__26296__auto___37246 + (1));
i__26296__auto___37246 = G__37247;
continue;
} else {
}
break;
}

var G__36751 = args36747.length;
switch (G__36751) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36747.slice((1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq36748){
var G__36749 = cljs.core.first.call(null,seq36748);
var seq36748__$1 = cljs.core.next.call(null,seq36748);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__36749,seq36748__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var args36752 = [];
var len__26295__auto___37249 = arguments.length;
var i__26296__auto___37250 = (0);
while(true){
if((i__26296__auto___37250 < len__26295__auto___37249)){
args36752.push((arguments[i__26296__auto___37250]));

var G__37251 = (i__26296__auto___37250 + (1));
i__26296__auto___37250 = G__37251;
continue;
} else {
}
break;
}

var G__36756 = args36752.length;
switch (G__36756) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36752.slice((1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq36753){
var G__36754 = cljs.core.first.call(null,seq36753);
var seq36753__$1 = cljs.core.next.call(null,seq36753);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__36754,seq36753__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var args36292 = [];
var len__26295__auto___37253 = arguments.length;
var i__26296__auto___37254 = (0);
while(true){
if((i__26296__auto___37254 < len__26295__auto___37253)){
args36292.push((arguments[i__26296__auto___37254]));

var G__37255 = (i__26296__auto___37254 + (1));
i__26296__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var G__36296 = args36292.length;
switch (G__36296) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args36292.slice((1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26314__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30133__auto__,children__30134__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__30133__auto__,children__30134__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq36293){
var G__36294 = cljs.core.first.call(null,seq36293);
var seq36293__$1 = cljs.core.next.call(null,seq36293);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__36294,seq36293__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4425__auto__){
var ks = temp__4425__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map