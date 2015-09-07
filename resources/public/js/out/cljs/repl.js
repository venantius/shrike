// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33561_33575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33562_33576 = null;
var count__33563_33577 = (0);
var i__33564_33578 = (0);
while(true){
if((i__33564_33578 < count__33563_33577)){
var f_33579 = cljs.core._nth.call(null,chunk__33562_33576,i__33564_33578);
cljs.core.println.call(null,"  ",f_33579);

var G__33580 = seq__33561_33575;
var G__33581 = chunk__33562_33576;
var G__33582 = count__33563_33577;
var G__33583 = (i__33564_33578 + (1));
seq__33561_33575 = G__33580;
chunk__33562_33576 = G__33581;
count__33563_33577 = G__33582;
i__33564_33578 = G__33583;
continue;
} else {
var temp__4425__auto___33584 = cljs.core.seq.call(null,seq__33561_33575);
if(temp__4425__auto___33584){
var seq__33561_33585__$1 = temp__4425__auto___33584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33561_33585__$1)){
var c__26037__auto___33586 = cljs.core.chunk_first.call(null,seq__33561_33585__$1);
var G__33587 = cljs.core.chunk_rest.call(null,seq__33561_33585__$1);
var G__33588 = c__26037__auto___33586;
var G__33589 = cljs.core.count.call(null,c__26037__auto___33586);
var G__33590 = (0);
seq__33561_33575 = G__33587;
chunk__33562_33576 = G__33588;
count__33563_33577 = G__33589;
i__33564_33578 = G__33590;
continue;
} else {
var f_33591 = cljs.core.first.call(null,seq__33561_33585__$1);
cljs.core.println.call(null,"  ",f_33591);

var G__33592 = cljs.core.next.call(null,seq__33561_33585__$1);
var G__33593 = null;
var G__33594 = (0);
var G__33595 = (0);
seq__33561_33575 = G__33592;
chunk__33562_33576 = G__33593;
count__33563_33577 = G__33594;
i__33564_33578 = G__33595;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33596 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33596);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33596)))?cljs.core.second.call(null,arglists_33596):arglists_33596));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33566 = null;
var count__33567 = (0);
var i__33568 = (0);
while(true){
if((i__33568 < count__33567)){
var vec__33569 = cljs.core._nth.call(null,chunk__33566,i__33568);
var name = cljs.core.nth.call(null,vec__33569,(0),null);
var map__33570 = cljs.core.nth.call(null,vec__33569,(1),null);
var map__33570__$1 = ((((!((map__33570 == null)))?((((map__33570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33570):map__33570);
var doc = cljs.core.get.call(null,map__33570__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33570__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33597 = seq__33565;
var G__33598 = chunk__33566;
var G__33599 = count__33567;
var G__33600 = (i__33568 + (1));
seq__33565 = G__33597;
chunk__33566 = G__33598;
count__33567 = G__33599;
i__33568 = G__33600;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33565);
if(temp__4425__auto__){
var seq__33565__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33565__$1)){
var c__26037__auto__ = cljs.core.chunk_first.call(null,seq__33565__$1);
var G__33601 = cljs.core.chunk_rest.call(null,seq__33565__$1);
var G__33602 = c__26037__auto__;
var G__33603 = cljs.core.count.call(null,c__26037__auto__);
var G__33604 = (0);
seq__33565 = G__33601;
chunk__33566 = G__33602;
count__33567 = G__33603;
i__33568 = G__33604;
continue;
} else {
var vec__33572 = cljs.core.first.call(null,seq__33565__$1);
var name = cljs.core.nth.call(null,vec__33572,(0),null);
var map__33573 = cljs.core.nth.call(null,vec__33572,(1),null);
var map__33573__$1 = ((((!((map__33573 == null)))?((((map__33573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33573):map__33573);
var doc = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33605 = cljs.core.next.call(null,seq__33565__$1);
var G__33606 = null;
var G__33607 = (0);
var G__33608 = (0);
seq__33565 = G__33605;
chunk__33566 = G__33606;
count__33567 = G__33607;
i__33568 = G__33608;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map