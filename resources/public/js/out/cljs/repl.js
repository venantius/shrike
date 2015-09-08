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
var seq__39640_39654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39641_39655 = null;
var count__39642_39656 = (0);
var i__39643_39657 = (0);
while(true){
if((i__39643_39657 < count__39642_39656)){
var f_39658 = cljs.core._nth.call(null,chunk__39641_39655,i__39643_39657);
cljs.core.println.call(null,"  ",f_39658);

var G__39659 = seq__39640_39654;
var G__39660 = chunk__39641_39655;
var G__39661 = count__39642_39656;
var G__39662 = (i__39643_39657 + (1));
seq__39640_39654 = G__39659;
chunk__39641_39655 = G__39660;
count__39642_39656 = G__39661;
i__39643_39657 = G__39662;
continue;
} else {
var temp__4425__auto___39663 = cljs.core.seq.call(null,seq__39640_39654);
if(temp__4425__auto___39663){
var seq__39640_39664__$1 = temp__4425__auto___39663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39640_39664__$1)){
var c__26040__auto___39665 = cljs.core.chunk_first.call(null,seq__39640_39664__$1);
var G__39666 = cljs.core.chunk_rest.call(null,seq__39640_39664__$1);
var G__39667 = c__26040__auto___39665;
var G__39668 = cljs.core.count.call(null,c__26040__auto___39665);
var G__39669 = (0);
seq__39640_39654 = G__39666;
chunk__39641_39655 = G__39667;
count__39642_39656 = G__39668;
i__39643_39657 = G__39669;
continue;
} else {
var f_39670 = cljs.core.first.call(null,seq__39640_39664__$1);
cljs.core.println.call(null,"  ",f_39670);

var G__39671 = cljs.core.next.call(null,seq__39640_39664__$1);
var G__39672 = null;
var G__39673 = (0);
var G__39674 = (0);
seq__39640_39654 = G__39671;
chunk__39641_39655 = G__39672;
count__39642_39656 = G__39673;
i__39643_39657 = G__39674;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39675 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25256__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39675);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39675)))?cljs.core.second.call(null,arglists_39675):arglists_39675));
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
var seq__39644 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39645 = null;
var count__39646 = (0);
var i__39647 = (0);
while(true){
if((i__39647 < count__39646)){
var vec__39648 = cljs.core._nth.call(null,chunk__39645,i__39647);
var name = cljs.core.nth.call(null,vec__39648,(0),null);
var map__39649 = cljs.core.nth.call(null,vec__39648,(1),null);
var map__39649__$1 = ((((!((map__39649 == null)))?((((map__39649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39649):map__39649);
var doc = cljs.core.get.call(null,map__39649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39676 = seq__39644;
var G__39677 = chunk__39645;
var G__39678 = count__39646;
var G__39679 = (i__39647 + (1));
seq__39644 = G__39676;
chunk__39645 = G__39677;
count__39646 = G__39678;
i__39647 = G__39679;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39644);
if(temp__4425__auto__){
var seq__39644__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39644__$1)){
var c__26040__auto__ = cljs.core.chunk_first.call(null,seq__39644__$1);
var G__39680 = cljs.core.chunk_rest.call(null,seq__39644__$1);
var G__39681 = c__26040__auto__;
var G__39682 = cljs.core.count.call(null,c__26040__auto__);
var G__39683 = (0);
seq__39644 = G__39680;
chunk__39645 = G__39681;
count__39646 = G__39682;
i__39647 = G__39683;
continue;
} else {
var vec__39651 = cljs.core.first.call(null,seq__39644__$1);
var name = cljs.core.nth.call(null,vec__39651,(0),null);
var map__39652 = cljs.core.nth.call(null,vec__39651,(1),null);
var map__39652__$1 = ((((!((map__39652 == null)))?((((map__39652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39652):map__39652);
var doc = cljs.core.get.call(null,map__39652__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39652__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39684 = cljs.core.next.call(null,seq__39644__$1);
var G__39685 = null;
var G__39686 = (0);
var G__39687 = (0);
seq__39644 = G__39684;
chunk__39645 = G__39685;
count__39646 = G__39686;
i__39647 = G__39687;
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