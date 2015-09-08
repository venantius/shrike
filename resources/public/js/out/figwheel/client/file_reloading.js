// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25256__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25256__auto__){
return or__25256__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25256__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39692_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39692_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39697 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39698 = null;
var count__39699 = (0);
var i__39700 = (0);
while(true){
if((i__39700 < count__39699)){
var n = cljs.core._nth.call(null,chunk__39698,i__39700);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39701 = seq__39697;
var G__39702 = chunk__39698;
var G__39703 = count__39699;
var G__39704 = (i__39700 + (1));
seq__39697 = G__39701;
chunk__39698 = G__39702;
count__39699 = G__39703;
i__39700 = G__39704;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39697);
if(temp__4425__auto__){
var seq__39697__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39697__$1)){
var c__26040__auto__ = cljs.core.chunk_first.call(null,seq__39697__$1);
var G__39705 = cljs.core.chunk_rest.call(null,seq__39697__$1);
var G__39706 = c__26040__auto__;
var G__39707 = cljs.core.count.call(null,c__26040__auto__);
var G__39708 = (0);
seq__39697 = G__39705;
chunk__39698 = G__39706;
count__39699 = G__39707;
i__39700 = G__39708;
continue;
} else {
var n = cljs.core.first.call(null,seq__39697__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39709 = cljs.core.next.call(null,seq__39697__$1);
var G__39710 = null;
var G__39711 = (0);
var G__39712 = (0);
seq__39697 = G__39709;
chunk__39698 = G__39710;
count__39699 = G__39711;
i__39700 = G__39712;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39751_39758 = cljs.core.seq.call(null,deps);
var chunk__39752_39759 = null;
var count__39753_39760 = (0);
var i__39754_39761 = (0);
while(true){
if((i__39754_39761 < count__39753_39760)){
var dep_39762 = cljs.core._nth.call(null,chunk__39752_39759,i__39754_39761);
topo_sort_helper_STAR_.call(null,dep_39762,(depth + (1)),state);

var G__39763 = seq__39751_39758;
var G__39764 = chunk__39752_39759;
var G__39765 = count__39753_39760;
var G__39766 = (i__39754_39761 + (1));
seq__39751_39758 = G__39763;
chunk__39752_39759 = G__39764;
count__39753_39760 = G__39765;
i__39754_39761 = G__39766;
continue;
} else {
var temp__4425__auto___39767 = cljs.core.seq.call(null,seq__39751_39758);
if(temp__4425__auto___39767){
var seq__39751_39768__$1 = temp__4425__auto___39767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39751_39768__$1)){
var c__26040__auto___39769 = cljs.core.chunk_first.call(null,seq__39751_39768__$1);
var G__39770 = cljs.core.chunk_rest.call(null,seq__39751_39768__$1);
var G__39771 = c__26040__auto___39769;
var G__39772 = cljs.core.count.call(null,c__26040__auto___39769);
var G__39773 = (0);
seq__39751_39758 = G__39770;
chunk__39752_39759 = G__39771;
count__39753_39760 = G__39772;
i__39754_39761 = G__39773;
continue;
} else {
var dep_39774 = cljs.core.first.call(null,seq__39751_39768__$1);
topo_sort_helper_STAR_.call(null,dep_39774,(depth + (1)),state);

var G__39775 = cljs.core.next.call(null,seq__39751_39768__$1);
var G__39776 = null;
var G__39777 = (0);
var G__39778 = (0);
seq__39751_39758 = G__39775;
chunk__39752_39759 = G__39776;
count__39753_39760 = G__39777;
i__39754_39761 = G__39778;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39755){
var vec__39757 = p__39755;
var x = cljs.core.nth.call(null,vec__39757,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39757,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39757,x,xs,get_deps__$1){
return (function (p1__39713_SHARP_){
return clojure.set.difference.call(null,p1__39713_SHARP_,x);
});})(vec__39757,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39791 = cljs.core.seq.call(null,provides);
var chunk__39792 = null;
var count__39793 = (0);
var i__39794 = (0);
while(true){
if((i__39794 < count__39793)){
var prov = cljs.core._nth.call(null,chunk__39792,i__39794);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39795_39803 = cljs.core.seq.call(null,requires);
var chunk__39796_39804 = null;
var count__39797_39805 = (0);
var i__39798_39806 = (0);
while(true){
if((i__39798_39806 < count__39797_39805)){
var req_39807 = cljs.core._nth.call(null,chunk__39796_39804,i__39798_39806);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39807,prov);

var G__39808 = seq__39795_39803;
var G__39809 = chunk__39796_39804;
var G__39810 = count__39797_39805;
var G__39811 = (i__39798_39806 + (1));
seq__39795_39803 = G__39808;
chunk__39796_39804 = G__39809;
count__39797_39805 = G__39810;
i__39798_39806 = G__39811;
continue;
} else {
var temp__4425__auto___39812 = cljs.core.seq.call(null,seq__39795_39803);
if(temp__4425__auto___39812){
var seq__39795_39813__$1 = temp__4425__auto___39812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39795_39813__$1)){
var c__26040__auto___39814 = cljs.core.chunk_first.call(null,seq__39795_39813__$1);
var G__39815 = cljs.core.chunk_rest.call(null,seq__39795_39813__$1);
var G__39816 = c__26040__auto___39814;
var G__39817 = cljs.core.count.call(null,c__26040__auto___39814);
var G__39818 = (0);
seq__39795_39803 = G__39815;
chunk__39796_39804 = G__39816;
count__39797_39805 = G__39817;
i__39798_39806 = G__39818;
continue;
} else {
var req_39819 = cljs.core.first.call(null,seq__39795_39813__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39819,prov);

var G__39820 = cljs.core.next.call(null,seq__39795_39813__$1);
var G__39821 = null;
var G__39822 = (0);
var G__39823 = (0);
seq__39795_39803 = G__39820;
chunk__39796_39804 = G__39821;
count__39797_39805 = G__39822;
i__39798_39806 = G__39823;
continue;
}
} else {
}
}
break;
}

var G__39824 = seq__39791;
var G__39825 = chunk__39792;
var G__39826 = count__39793;
var G__39827 = (i__39794 + (1));
seq__39791 = G__39824;
chunk__39792 = G__39825;
count__39793 = G__39826;
i__39794 = G__39827;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39791);
if(temp__4425__auto__){
var seq__39791__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39791__$1)){
var c__26040__auto__ = cljs.core.chunk_first.call(null,seq__39791__$1);
var G__39828 = cljs.core.chunk_rest.call(null,seq__39791__$1);
var G__39829 = c__26040__auto__;
var G__39830 = cljs.core.count.call(null,c__26040__auto__);
var G__39831 = (0);
seq__39791 = G__39828;
chunk__39792 = G__39829;
count__39793 = G__39830;
i__39794 = G__39831;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39791__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39799_39832 = cljs.core.seq.call(null,requires);
var chunk__39800_39833 = null;
var count__39801_39834 = (0);
var i__39802_39835 = (0);
while(true){
if((i__39802_39835 < count__39801_39834)){
var req_39836 = cljs.core._nth.call(null,chunk__39800_39833,i__39802_39835);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39836,prov);

var G__39837 = seq__39799_39832;
var G__39838 = chunk__39800_39833;
var G__39839 = count__39801_39834;
var G__39840 = (i__39802_39835 + (1));
seq__39799_39832 = G__39837;
chunk__39800_39833 = G__39838;
count__39801_39834 = G__39839;
i__39802_39835 = G__39840;
continue;
} else {
var temp__4425__auto___39841__$1 = cljs.core.seq.call(null,seq__39799_39832);
if(temp__4425__auto___39841__$1){
var seq__39799_39842__$1 = temp__4425__auto___39841__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39799_39842__$1)){
var c__26040__auto___39843 = cljs.core.chunk_first.call(null,seq__39799_39842__$1);
var G__39844 = cljs.core.chunk_rest.call(null,seq__39799_39842__$1);
var G__39845 = c__26040__auto___39843;
var G__39846 = cljs.core.count.call(null,c__26040__auto___39843);
var G__39847 = (0);
seq__39799_39832 = G__39844;
chunk__39800_39833 = G__39845;
count__39801_39834 = G__39846;
i__39802_39835 = G__39847;
continue;
} else {
var req_39848 = cljs.core.first.call(null,seq__39799_39842__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39848,prov);

var G__39849 = cljs.core.next.call(null,seq__39799_39842__$1);
var G__39850 = null;
var G__39851 = (0);
var G__39852 = (0);
seq__39799_39832 = G__39849;
chunk__39800_39833 = G__39850;
count__39801_39834 = G__39851;
i__39802_39835 = G__39852;
continue;
}
} else {
}
}
break;
}

var G__39853 = cljs.core.next.call(null,seq__39791__$1);
var G__39854 = null;
var G__39855 = (0);
var G__39856 = (0);
seq__39791 = G__39853;
chunk__39792 = G__39854;
count__39793 = G__39855;
i__39794 = G__39856;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39861_39865 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39862_39866 = null;
var count__39863_39867 = (0);
var i__39864_39868 = (0);
while(true){
if((i__39864_39868 < count__39863_39867)){
var ns_39869 = cljs.core._nth.call(null,chunk__39862_39866,i__39864_39868);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39869);

var G__39870 = seq__39861_39865;
var G__39871 = chunk__39862_39866;
var G__39872 = count__39863_39867;
var G__39873 = (i__39864_39868 + (1));
seq__39861_39865 = G__39870;
chunk__39862_39866 = G__39871;
count__39863_39867 = G__39872;
i__39864_39868 = G__39873;
continue;
} else {
var temp__4425__auto___39874 = cljs.core.seq.call(null,seq__39861_39865);
if(temp__4425__auto___39874){
var seq__39861_39875__$1 = temp__4425__auto___39874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39861_39875__$1)){
var c__26040__auto___39876 = cljs.core.chunk_first.call(null,seq__39861_39875__$1);
var G__39877 = cljs.core.chunk_rest.call(null,seq__39861_39875__$1);
var G__39878 = c__26040__auto___39876;
var G__39879 = cljs.core.count.call(null,c__26040__auto___39876);
var G__39880 = (0);
seq__39861_39865 = G__39877;
chunk__39862_39866 = G__39878;
count__39863_39867 = G__39879;
i__39864_39868 = G__39880;
continue;
} else {
var ns_39881 = cljs.core.first.call(null,seq__39861_39875__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39881);

var G__39882 = cljs.core.next.call(null,seq__39861_39875__$1);
var G__39883 = null;
var G__39884 = (0);
var G__39885 = (0);
seq__39861_39865 = G__39882;
chunk__39862_39866 = G__39883;
count__39863_39867 = G__39884;
i__39864_39868 = G__39885;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25256__auto__ = goog.require__;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39886__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39887__i = 0, G__39887__a = new Array(arguments.length -  0);
while (G__39887__i < G__39887__a.length) {G__39887__a[G__39887__i] = arguments[G__39887__i + 0]; ++G__39887__i;}
  args = new cljs.core.IndexedSeq(G__39887__a,0);
} 
return G__39886__delegate.call(this,args);};
G__39886.cljs$lang$maxFixedArity = 0;
G__39886.cljs$lang$applyTo = (function (arglist__39888){
var args = cljs.core.seq(arglist__39888);
return G__39886__delegate(args);
});
G__39886.cljs$core$IFn$_invoke$arity$variadic = G__39886__delegate;
return G__39886;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39889 = cljs.core._EQ_;
var expr__39890 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39889.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39890))){
return ((function (pred__39889,expr__39890){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e39892){if((e39892 instanceof Error)){
var e = e39892;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39892;

}
}})());
});
;})(pred__39889,expr__39890))
} else {
if(cljs.core.truth_(pred__39889.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39890))){
return ((function (pred__39889,expr__39890){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39889,expr__39890){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39889,expr__39890))
);

return deferred.addErrback(((function (deferred,pred__39889,expr__39890){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39889,expr__39890))
);
});
;})(pred__39889,expr__39890))
} else {
return ((function (pred__39889,expr__39890){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39889,expr__39890))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39893,callback){
var map__39896 = p__39893;
var map__39896__$1 = ((((!((map__39896 == null)))?((((map__39896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39896):map__39896);
var file_msg = map__39896__$1;
var request_url = cljs.core.get.call(null,map__39896__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39896,map__39896__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39896,map__39896__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__){
return (function (state_39920){
var state_val_39921 = (state_39920[(1)]);
if((state_val_39921 === (7))){
var inst_39916 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
var statearr_39922_39942 = state_39920__$1;
(statearr_39922_39942[(2)] = inst_39916);

(statearr_39922_39942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (1))){
var state_39920__$1 = state_39920;
var statearr_39923_39943 = state_39920__$1;
(statearr_39923_39943[(2)] = null);

(statearr_39923_39943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (4))){
var inst_39900 = (state_39920[(7)]);
var inst_39900__$1 = (state_39920[(2)]);
var state_39920__$1 = (function (){var statearr_39924 = state_39920;
(statearr_39924[(7)] = inst_39900__$1);

return statearr_39924;
})();
if(cljs.core.truth_(inst_39900__$1)){
var statearr_39925_39944 = state_39920__$1;
(statearr_39925_39944[(1)] = (5));

} else {
var statearr_39926_39945 = state_39920__$1;
(statearr_39926_39945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (6))){
var state_39920__$1 = state_39920;
var statearr_39927_39946 = state_39920__$1;
(statearr_39927_39946[(2)] = null);

(statearr_39927_39946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (3))){
var inst_39918 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39920__$1,inst_39918);
} else {
if((state_val_39921 === (2))){
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39920__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39921 === (11))){
var inst_39912 = (state_39920[(2)]);
var state_39920__$1 = (function (){var statearr_39928 = state_39920;
(statearr_39928[(8)] = inst_39912);

return statearr_39928;
})();
var statearr_39929_39947 = state_39920__$1;
(statearr_39929_39947[(2)] = null);

(statearr_39929_39947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (9))){
var inst_39906 = (state_39920[(9)]);
var inst_39904 = (state_39920[(10)]);
var inst_39908 = inst_39906.call(null,inst_39904);
var state_39920__$1 = state_39920;
var statearr_39930_39948 = state_39920__$1;
(statearr_39930_39948[(2)] = inst_39908);

(statearr_39930_39948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (5))){
var inst_39900 = (state_39920[(7)]);
var inst_39902 = figwheel.client.file_reloading.blocking_load.call(null,inst_39900);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39920__$1,(8),inst_39902);
} else {
if((state_val_39921 === (10))){
var inst_39904 = (state_39920[(10)]);
var inst_39910 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39904);
var state_39920__$1 = state_39920;
var statearr_39931_39949 = state_39920__$1;
(statearr_39931_39949[(2)] = inst_39910);

(statearr_39931_39949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (8))){
var inst_39900 = (state_39920[(7)]);
var inst_39906 = (state_39920[(9)]);
var inst_39904 = (state_39920[(2)]);
var inst_39905 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39906__$1 = cljs.core.get.call(null,inst_39905,inst_39900);
var state_39920__$1 = (function (){var statearr_39932 = state_39920;
(statearr_39932[(9)] = inst_39906__$1);

(statearr_39932[(10)] = inst_39904);

return statearr_39932;
})();
if(cljs.core.truth_(inst_39906__$1)){
var statearr_39933_39950 = state_39920__$1;
(statearr_39933_39950[(1)] = (9));

} else {
var statearr_39934_39951 = state_39920__$1;
(statearr_39934_39951[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32151__auto__))
;
return ((function (switch__32086__auto__,c__32151__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32087__auto__ = null;
var figwheel$client$file_reloading$state_machine__32087__auto____0 = (function (){
var statearr_39938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39938[(0)] = figwheel$client$file_reloading$state_machine__32087__auto__);

(statearr_39938[(1)] = (1));

return statearr_39938;
});
var figwheel$client$file_reloading$state_machine__32087__auto____1 = (function (state_39920){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_39920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e39939){if((e39939 instanceof Object)){
var ex__32090__auto__ = e39939;
var statearr_39940_39952 = state_39920;
(statearr_39940_39952[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39953 = state_39920;
state_39920 = G__39953;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32087__auto__ = function(state_39920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32087__auto____1.call(this,state_39920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32087__auto____0;
figwheel$client$file_reloading$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32087__auto____1;
return figwheel$client$file_reloading$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__))
})();
var state__32153__auto__ = (function (){var statearr_39941 = f__32152__auto__.call(null);
(statearr_39941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_39941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__))
);

return c__32151__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39954,callback){
var map__39957 = p__39954;
var map__39957__$1 = ((((!((map__39957 == null)))?((((map__39957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39957):map__39957);
var file_msg = map__39957__$1;
var namespace = cljs.core.get.call(null,map__39957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39957,map__39957__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39957,map__39957__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39959){
var map__39962 = p__39959;
var map__39962__$1 = ((((!((map__39962 == null)))?((((map__39962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39962):map__39962);
var file_msg = map__39962__$1;
var namespace = cljs.core.get.call(null,map__39962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25244__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25244__auto__){
var or__25256__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
var or__25256__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25256__auto____$1)){
return or__25256__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25244__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39964,callback){
var map__39967 = p__39964;
var map__39967__$1 = ((((!((map__39967 == null)))?((((map__39967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39967):map__39967);
var file_msg = map__39967__$1;
var request_url = cljs.core.get.call(null,map__39967__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32151__auto___40055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___40055,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___40055,out){
return (function (state_40037){
var state_val_40038 = (state_40037[(1)]);
if((state_val_40038 === (1))){
var inst_40015 = cljs.core.nth.call(null,files,(0),null);
var inst_40016 = cljs.core.nthnext.call(null,files,(1));
var inst_40017 = files;
var state_40037__$1 = (function (){var statearr_40039 = state_40037;
(statearr_40039[(7)] = inst_40016);

(statearr_40039[(8)] = inst_40015);

(statearr_40039[(9)] = inst_40017);

return statearr_40039;
})();
var statearr_40040_40056 = state_40037__$1;
(statearr_40040_40056[(2)] = null);

(statearr_40040_40056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (2))){
var inst_40020 = (state_40037[(10)]);
var inst_40017 = (state_40037[(9)]);
var inst_40020__$1 = cljs.core.nth.call(null,inst_40017,(0),null);
var inst_40021 = cljs.core.nthnext.call(null,inst_40017,(1));
var inst_40022 = (inst_40020__$1 == null);
var inst_40023 = cljs.core.not.call(null,inst_40022);
var state_40037__$1 = (function (){var statearr_40041 = state_40037;
(statearr_40041[(11)] = inst_40021);

(statearr_40041[(10)] = inst_40020__$1);

return statearr_40041;
})();
if(inst_40023){
var statearr_40042_40057 = state_40037__$1;
(statearr_40042_40057[(1)] = (4));

} else {
var statearr_40043_40058 = state_40037__$1;
(statearr_40043_40058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (3))){
var inst_40035 = (state_40037[(2)]);
var state_40037__$1 = state_40037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40037__$1,inst_40035);
} else {
if((state_val_40038 === (4))){
var inst_40020 = (state_40037[(10)]);
var inst_40025 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40020);
var state_40037__$1 = state_40037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40037__$1,(7),inst_40025);
} else {
if((state_val_40038 === (5))){
var inst_40031 = cljs.core.async.close_BANG_.call(null,out);
var state_40037__$1 = state_40037;
var statearr_40044_40059 = state_40037__$1;
(statearr_40044_40059[(2)] = inst_40031);

(statearr_40044_40059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (6))){
var inst_40033 = (state_40037[(2)]);
var state_40037__$1 = state_40037;
var statearr_40045_40060 = state_40037__$1;
(statearr_40045_40060[(2)] = inst_40033);

(statearr_40045_40060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40038 === (7))){
var inst_40021 = (state_40037[(11)]);
var inst_40027 = (state_40037[(2)]);
var inst_40028 = cljs.core.async.put_BANG_.call(null,out,inst_40027);
var inst_40017 = inst_40021;
var state_40037__$1 = (function (){var statearr_40046 = state_40037;
(statearr_40046[(9)] = inst_40017);

(statearr_40046[(12)] = inst_40028);

return statearr_40046;
})();
var statearr_40047_40061 = state_40037__$1;
(statearr_40047_40061[(2)] = null);

(statearr_40047_40061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32151__auto___40055,out))
;
return ((function (switch__32086__auto__,c__32151__auto___40055,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____0 = (function (){
var statearr_40051 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40051[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__);

(statearr_40051[(1)] = (1));

return statearr_40051;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____1 = (function (state_40037){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_40037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e40052){if((e40052 instanceof Object)){
var ex__32090__auto__ = e40052;
var statearr_40053_40062 = state_40037;
(statearr_40053_40062[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40063 = state_40037;
state_40037 = G__40063;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__ = function(state_40037){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____1.call(this,state_40037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___40055,out))
})();
var state__32153__auto__ = (function (){var statearr_40054 = f__32152__auto__.call(null);
(statearr_40054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___40055);

return statearr_40054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___40055,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40064,opts){
var map__40068 = p__40064;
var map__40068__$1 = ((((!((map__40068 == null)))?((((map__40068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40068):map__40068);
var eval_body__$1 = cljs.core.get.call(null,map__40068__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25244__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25244__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25244__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40070){var e = e40070;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40071_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40071_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40076){
var vec__40077 = p__40076;
var k = cljs.core.nth.call(null,vec__40077,(0),null);
var v = cljs.core.nth.call(null,vec__40077,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40078){
var vec__40079 = p__40078;
var k = cljs.core.nth.call(null,vec__40079,(0),null);
var v = cljs.core.nth.call(null,vec__40079,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40083,p__40084){
var map__40331 = p__40083;
var map__40331__$1 = ((((!((map__40331 == null)))?((((map__40331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40331):map__40331);
var opts = map__40331__$1;
var before_jsload = cljs.core.get.call(null,map__40331__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40331__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40331__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40332 = p__40084;
var map__40332__$1 = ((((!((map__40332 == null)))?((((map__40332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40332):map__40332);
var msg = map__40332__$1;
var files = cljs.core.get.call(null,map__40332__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40332__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40332__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40485){
var state_val_40486 = (state_40485[(1)]);
if((state_val_40486 === (7))){
var inst_40346 = (state_40485[(7)]);
var inst_40349 = (state_40485[(8)]);
var inst_40348 = (state_40485[(9)]);
var inst_40347 = (state_40485[(10)]);
var inst_40354 = cljs.core._nth.call(null,inst_40347,inst_40349);
var inst_40355 = figwheel.client.file_reloading.eval_body.call(null,inst_40354,opts);
var inst_40356 = (inst_40349 + (1));
var tmp40487 = inst_40346;
var tmp40488 = inst_40348;
var tmp40489 = inst_40347;
var inst_40346__$1 = tmp40487;
var inst_40347__$1 = tmp40489;
var inst_40348__$1 = tmp40488;
var inst_40349__$1 = inst_40356;
var state_40485__$1 = (function (){var statearr_40490 = state_40485;
(statearr_40490[(7)] = inst_40346__$1);

(statearr_40490[(11)] = inst_40355);

(statearr_40490[(8)] = inst_40349__$1);

(statearr_40490[(9)] = inst_40348__$1);

(statearr_40490[(10)] = inst_40347__$1);

return statearr_40490;
})();
var statearr_40491_40577 = state_40485__$1;
(statearr_40491_40577[(2)] = null);

(statearr_40491_40577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (20))){
var inst_40389 = (state_40485[(12)]);
var inst_40397 = figwheel.client.file_reloading.sort_files.call(null,inst_40389);
var state_40485__$1 = state_40485;
var statearr_40492_40578 = state_40485__$1;
(statearr_40492_40578[(2)] = inst_40397);

(statearr_40492_40578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (27))){
var state_40485__$1 = state_40485;
var statearr_40493_40579 = state_40485__$1;
(statearr_40493_40579[(2)] = null);

(statearr_40493_40579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (1))){
var inst_40338 = (state_40485[(13)]);
var inst_40335 = before_jsload.call(null,files);
var inst_40336 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40337 = (function (){return ((function (inst_40338,inst_40335,inst_40336,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40080_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40080_SHARP_);
});
;})(inst_40338,inst_40335,inst_40336,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40338__$1 = cljs.core.filter.call(null,inst_40337,files);
var inst_40339 = cljs.core.not_empty.call(null,inst_40338__$1);
var state_40485__$1 = (function (){var statearr_40494 = state_40485;
(statearr_40494[(13)] = inst_40338__$1);

(statearr_40494[(14)] = inst_40335);

(statearr_40494[(15)] = inst_40336);

return statearr_40494;
})();
if(cljs.core.truth_(inst_40339)){
var statearr_40495_40580 = state_40485__$1;
(statearr_40495_40580[(1)] = (2));

} else {
var statearr_40496_40581 = state_40485__$1;
(statearr_40496_40581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (24))){
var state_40485__$1 = state_40485;
var statearr_40497_40582 = state_40485__$1;
(statearr_40497_40582[(2)] = null);

(statearr_40497_40582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (39))){
var inst_40439 = (state_40485[(16)]);
var state_40485__$1 = state_40485;
var statearr_40498_40583 = state_40485__$1;
(statearr_40498_40583[(2)] = inst_40439);

(statearr_40498_40583[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (46))){
var inst_40480 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40499_40584 = state_40485__$1;
(statearr_40499_40584[(2)] = inst_40480);

(statearr_40499_40584[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (4))){
var inst_40383 = (state_40485[(2)]);
var inst_40384 = cljs.core.List.EMPTY;
var inst_40385 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40384);
var inst_40386 = (function (){return ((function (inst_40383,inst_40384,inst_40385,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40081_SHARP_){
var and__25244__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40081_SHARP_);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40081_SHARP_));
} else {
return and__25244__auto__;
}
});
;})(inst_40383,inst_40384,inst_40385,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40387 = cljs.core.filter.call(null,inst_40386,files);
var inst_40388 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40389 = cljs.core.concat.call(null,inst_40387,inst_40388);
var state_40485__$1 = (function (){var statearr_40500 = state_40485;
(statearr_40500[(17)] = inst_40385);

(statearr_40500[(18)] = inst_40383);

(statearr_40500[(12)] = inst_40389);

return statearr_40500;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40501_40585 = state_40485__$1;
(statearr_40501_40585[(1)] = (16));

} else {
var statearr_40502_40586 = state_40485__$1;
(statearr_40502_40586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (15))){
var inst_40373 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40503_40587 = state_40485__$1;
(statearr_40503_40587[(2)] = inst_40373);

(statearr_40503_40587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (21))){
var inst_40399 = (state_40485[(19)]);
var inst_40399__$1 = (state_40485[(2)]);
var inst_40400 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40399__$1);
var state_40485__$1 = (function (){var statearr_40504 = state_40485;
(statearr_40504[(19)] = inst_40399__$1);

return statearr_40504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40485__$1,(22),inst_40400);
} else {
if((state_val_40486 === (31))){
var inst_40483 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40485__$1,inst_40483);
} else {
if((state_val_40486 === (32))){
var inst_40439 = (state_40485[(16)]);
var inst_40444 = inst_40439.cljs$lang$protocol_mask$partition0$;
var inst_40445 = (inst_40444 & (64));
var inst_40446 = inst_40439.cljs$core$ISeq$;
var inst_40447 = (inst_40445) || (inst_40446);
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40447)){
var statearr_40505_40588 = state_40485__$1;
(statearr_40505_40588[(1)] = (35));

} else {
var statearr_40506_40589 = state_40485__$1;
(statearr_40506_40589[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (40))){
var inst_40460 = (state_40485[(20)]);
var inst_40459 = (state_40485[(2)]);
var inst_40460__$1 = cljs.core.get.call(null,inst_40459,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40461 = cljs.core.get.call(null,inst_40459,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40462 = cljs.core.not_empty.call(null,inst_40460__$1);
var state_40485__$1 = (function (){var statearr_40507 = state_40485;
(statearr_40507[(21)] = inst_40461);

(statearr_40507[(20)] = inst_40460__$1);

return statearr_40507;
})();
if(cljs.core.truth_(inst_40462)){
var statearr_40508_40590 = state_40485__$1;
(statearr_40508_40590[(1)] = (41));

} else {
var statearr_40509_40591 = state_40485__$1;
(statearr_40509_40591[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (33))){
var state_40485__$1 = state_40485;
var statearr_40510_40592 = state_40485__$1;
(statearr_40510_40592[(2)] = false);

(statearr_40510_40592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (13))){
var inst_40359 = (state_40485[(22)]);
var inst_40363 = cljs.core.chunk_first.call(null,inst_40359);
var inst_40364 = cljs.core.chunk_rest.call(null,inst_40359);
var inst_40365 = cljs.core.count.call(null,inst_40363);
var inst_40346 = inst_40364;
var inst_40347 = inst_40363;
var inst_40348 = inst_40365;
var inst_40349 = (0);
var state_40485__$1 = (function (){var statearr_40511 = state_40485;
(statearr_40511[(7)] = inst_40346);

(statearr_40511[(8)] = inst_40349);

(statearr_40511[(9)] = inst_40348);

(statearr_40511[(10)] = inst_40347);

return statearr_40511;
})();
var statearr_40512_40593 = state_40485__$1;
(statearr_40512_40593[(2)] = null);

(statearr_40512_40593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (22))){
var inst_40399 = (state_40485[(19)]);
var inst_40402 = (state_40485[(23)]);
var inst_40407 = (state_40485[(24)]);
var inst_40403 = (state_40485[(25)]);
var inst_40402__$1 = (state_40485[(2)]);
var inst_40403__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40402__$1);
var inst_40404 = (function (){var all_files = inst_40399;
var res_SINGLEQUOTE_ = inst_40402__$1;
var res = inst_40403__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40399,inst_40402,inst_40407,inst_40403,inst_40402__$1,inst_40403__$1,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40082_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40082_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40399,inst_40402,inst_40407,inst_40403,inst_40402__$1,inst_40403__$1,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40405 = cljs.core.filter.call(null,inst_40404,inst_40402__$1);
var inst_40406 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40407__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40406);
var inst_40408 = cljs.core.not_empty.call(null,inst_40407__$1);
var state_40485__$1 = (function (){var statearr_40513 = state_40485;
(statearr_40513[(23)] = inst_40402__$1);

(statearr_40513[(26)] = inst_40405);

(statearr_40513[(24)] = inst_40407__$1);

(statearr_40513[(25)] = inst_40403__$1);

return statearr_40513;
})();
if(cljs.core.truth_(inst_40408)){
var statearr_40514_40594 = state_40485__$1;
(statearr_40514_40594[(1)] = (23));

} else {
var statearr_40515_40595 = state_40485__$1;
(statearr_40515_40595[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (36))){
var state_40485__$1 = state_40485;
var statearr_40516_40596 = state_40485__$1;
(statearr_40516_40596[(2)] = false);

(statearr_40516_40596[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (41))){
var inst_40460 = (state_40485[(20)]);
var inst_40464 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40465 = cljs.core.map.call(null,inst_40464,inst_40460);
var inst_40466 = cljs.core.pr_str.call(null,inst_40465);
var inst_40467 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40466)].join('');
var inst_40468 = figwheel.client.utils.log.call(null,inst_40467);
var state_40485__$1 = state_40485;
var statearr_40517_40597 = state_40485__$1;
(statearr_40517_40597[(2)] = inst_40468);

(statearr_40517_40597[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (43))){
var inst_40461 = (state_40485[(21)]);
var inst_40471 = (state_40485[(2)]);
var inst_40472 = cljs.core.not_empty.call(null,inst_40461);
var state_40485__$1 = (function (){var statearr_40518 = state_40485;
(statearr_40518[(27)] = inst_40471);

return statearr_40518;
})();
if(cljs.core.truth_(inst_40472)){
var statearr_40519_40598 = state_40485__$1;
(statearr_40519_40598[(1)] = (44));

} else {
var statearr_40520_40599 = state_40485__$1;
(statearr_40520_40599[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (29))){
var inst_40439 = (state_40485[(16)]);
var inst_40399 = (state_40485[(19)]);
var inst_40402 = (state_40485[(23)]);
var inst_40405 = (state_40485[(26)]);
var inst_40407 = (state_40485[(24)]);
var inst_40403 = (state_40485[(25)]);
var inst_40435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40438 = (function (){var all_files = inst_40399;
var res_SINGLEQUOTE_ = inst_40402;
var res = inst_40403;
var files_not_loaded = inst_40405;
var dependencies_that_loaded = inst_40407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40439,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40435,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40437){
var map__40521 = p__40437;
var map__40521__$1 = ((((!((map__40521 == null)))?((((map__40521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40521):map__40521);
var namespace = cljs.core.get.call(null,map__40521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40439,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40435,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40439__$1 = cljs.core.group_by.call(null,inst_40438,inst_40405);
var inst_40441 = (inst_40439__$1 == null);
var inst_40442 = cljs.core.not.call(null,inst_40441);
var state_40485__$1 = (function (){var statearr_40523 = state_40485;
(statearr_40523[(16)] = inst_40439__$1);

(statearr_40523[(28)] = inst_40435);

return statearr_40523;
})();
if(inst_40442){
var statearr_40524_40600 = state_40485__$1;
(statearr_40524_40600[(1)] = (32));

} else {
var statearr_40525_40601 = state_40485__$1;
(statearr_40525_40601[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (44))){
var inst_40461 = (state_40485[(21)]);
var inst_40474 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40461);
var inst_40475 = cljs.core.pr_str.call(null,inst_40474);
var inst_40476 = [cljs.core.str("not required: "),cljs.core.str(inst_40475)].join('');
var inst_40477 = figwheel.client.utils.log.call(null,inst_40476);
var state_40485__$1 = state_40485;
var statearr_40526_40602 = state_40485__$1;
(statearr_40526_40602[(2)] = inst_40477);

(statearr_40526_40602[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (6))){
var inst_40380 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40527_40603 = state_40485__$1;
(statearr_40527_40603[(2)] = inst_40380);

(statearr_40527_40603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (28))){
var inst_40405 = (state_40485[(26)]);
var inst_40432 = (state_40485[(2)]);
var inst_40433 = cljs.core.not_empty.call(null,inst_40405);
var state_40485__$1 = (function (){var statearr_40528 = state_40485;
(statearr_40528[(29)] = inst_40432);

return statearr_40528;
})();
if(cljs.core.truth_(inst_40433)){
var statearr_40529_40604 = state_40485__$1;
(statearr_40529_40604[(1)] = (29));

} else {
var statearr_40530_40605 = state_40485__$1;
(statearr_40530_40605[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (25))){
var inst_40403 = (state_40485[(25)]);
var inst_40419 = (state_40485[(2)]);
var inst_40420 = cljs.core.not_empty.call(null,inst_40403);
var state_40485__$1 = (function (){var statearr_40531 = state_40485;
(statearr_40531[(30)] = inst_40419);

return statearr_40531;
})();
if(cljs.core.truth_(inst_40420)){
var statearr_40532_40606 = state_40485__$1;
(statearr_40532_40606[(1)] = (26));

} else {
var statearr_40533_40607 = state_40485__$1;
(statearr_40533_40607[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (34))){
var inst_40454 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40454)){
var statearr_40534_40608 = state_40485__$1;
(statearr_40534_40608[(1)] = (38));

} else {
var statearr_40535_40609 = state_40485__$1;
(statearr_40535_40609[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (17))){
var state_40485__$1 = state_40485;
var statearr_40536_40610 = state_40485__$1;
(statearr_40536_40610[(2)] = recompile_dependents);

(statearr_40536_40610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (3))){
var state_40485__$1 = state_40485;
var statearr_40537_40611 = state_40485__$1;
(statearr_40537_40611[(2)] = null);

(statearr_40537_40611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (12))){
var inst_40376 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40538_40612 = state_40485__$1;
(statearr_40538_40612[(2)] = inst_40376);

(statearr_40538_40612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (2))){
var inst_40338 = (state_40485[(13)]);
var inst_40345 = cljs.core.seq.call(null,inst_40338);
var inst_40346 = inst_40345;
var inst_40347 = null;
var inst_40348 = (0);
var inst_40349 = (0);
var state_40485__$1 = (function (){var statearr_40539 = state_40485;
(statearr_40539[(7)] = inst_40346);

(statearr_40539[(8)] = inst_40349);

(statearr_40539[(9)] = inst_40348);

(statearr_40539[(10)] = inst_40347);

return statearr_40539;
})();
var statearr_40540_40613 = state_40485__$1;
(statearr_40540_40613[(2)] = null);

(statearr_40540_40613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (23))){
var inst_40399 = (state_40485[(19)]);
var inst_40402 = (state_40485[(23)]);
var inst_40405 = (state_40485[(26)]);
var inst_40407 = (state_40485[(24)]);
var inst_40403 = (state_40485[(25)]);
var inst_40410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40412 = (function (){var all_files = inst_40399;
var res_SINGLEQUOTE_ = inst_40402;
var res = inst_40403;
var files_not_loaded = inst_40405;
var dependencies_that_loaded = inst_40407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40410,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40411){
var map__40541 = p__40411;
var map__40541__$1 = ((((!((map__40541 == null)))?((((map__40541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40541):map__40541);
var request_url = cljs.core.get.call(null,map__40541__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40410,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40413 = cljs.core.reverse.call(null,inst_40407);
var inst_40414 = cljs.core.map.call(null,inst_40412,inst_40413);
var inst_40415 = cljs.core.pr_str.call(null,inst_40414);
var inst_40416 = figwheel.client.utils.log.call(null,inst_40415);
var state_40485__$1 = (function (){var statearr_40543 = state_40485;
(statearr_40543[(31)] = inst_40410);

return statearr_40543;
})();
var statearr_40544_40614 = state_40485__$1;
(statearr_40544_40614[(2)] = inst_40416);

(statearr_40544_40614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (35))){
var state_40485__$1 = state_40485;
var statearr_40545_40615 = state_40485__$1;
(statearr_40545_40615[(2)] = true);

(statearr_40545_40615[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (19))){
var inst_40389 = (state_40485[(12)]);
var inst_40395 = figwheel.client.file_reloading.expand_files.call(null,inst_40389);
var state_40485__$1 = state_40485;
var statearr_40546_40616 = state_40485__$1;
(statearr_40546_40616[(2)] = inst_40395);

(statearr_40546_40616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (11))){
var state_40485__$1 = state_40485;
var statearr_40547_40617 = state_40485__$1;
(statearr_40547_40617[(2)] = null);

(statearr_40547_40617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (9))){
var inst_40378 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40548_40618 = state_40485__$1;
(statearr_40548_40618[(2)] = inst_40378);

(statearr_40548_40618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (5))){
var inst_40349 = (state_40485[(8)]);
var inst_40348 = (state_40485[(9)]);
var inst_40351 = (inst_40349 < inst_40348);
var inst_40352 = inst_40351;
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40352)){
var statearr_40549_40619 = state_40485__$1;
(statearr_40549_40619[(1)] = (7));

} else {
var statearr_40550_40620 = state_40485__$1;
(statearr_40550_40620[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (14))){
var inst_40359 = (state_40485[(22)]);
var inst_40368 = cljs.core.first.call(null,inst_40359);
var inst_40369 = figwheel.client.file_reloading.eval_body.call(null,inst_40368,opts);
var inst_40370 = cljs.core.next.call(null,inst_40359);
var inst_40346 = inst_40370;
var inst_40347 = null;
var inst_40348 = (0);
var inst_40349 = (0);
var state_40485__$1 = (function (){var statearr_40551 = state_40485;
(statearr_40551[(7)] = inst_40346);

(statearr_40551[(8)] = inst_40349);

(statearr_40551[(9)] = inst_40348);

(statearr_40551[(32)] = inst_40369);

(statearr_40551[(10)] = inst_40347);

return statearr_40551;
})();
var statearr_40552_40621 = state_40485__$1;
(statearr_40552_40621[(2)] = null);

(statearr_40552_40621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (45))){
var state_40485__$1 = state_40485;
var statearr_40553_40622 = state_40485__$1;
(statearr_40553_40622[(2)] = null);

(statearr_40553_40622[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (26))){
var inst_40399 = (state_40485[(19)]);
var inst_40402 = (state_40485[(23)]);
var inst_40405 = (state_40485[(26)]);
var inst_40407 = (state_40485[(24)]);
var inst_40403 = (state_40485[(25)]);
var inst_40422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40424 = (function (){var all_files = inst_40399;
var res_SINGLEQUOTE_ = inst_40402;
var res = inst_40403;
var files_not_loaded = inst_40405;
var dependencies_that_loaded = inst_40407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40422,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40423){
var map__40554 = p__40423;
var map__40554__$1 = ((((!((map__40554 == null)))?((((map__40554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40554):map__40554);
var namespace = cljs.core.get.call(null,map__40554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40422,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40425 = cljs.core.map.call(null,inst_40424,inst_40403);
var inst_40426 = cljs.core.pr_str.call(null,inst_40425);
var inst_40427 = figwheel.client.utils.log.call(null,inst_40426);
var inst_40428 = (function (){var all_files = inst_40399;
var res_SINGLEQUOTE_ = inst_40402;
var res = inst_40403;
var files_not_loaded = inst_40405;
var dependencies_that_loaded = inst_40407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40422,inst_40424,inst_40425,inst_40426,inst_40427,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40399,inst_40402,inst_40405,inst_40407,inst_40403,inst_40422,inst_40424,inst_40425,inst_40426,inst_40427,state_val_40486,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40429 = setTimeout(inst_40428,(10));
var state_40485__$1 = (function (){var statearr_40556 = state_40485;
(statearr_40556[(33)] = inst_40427);

(statearr_40556[(34)] = inst_40422);

return statearr_40556;
})();
var statearr_40557_40623 = state_40485__$1;
(statearr_40557_40623[(2)] = inst_40429);

(statearr_40557_40623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (16))){
var state_40485__$1 = state_40485;
var statearr_40558_40624 = state_40485__$1;
(statearr_40558_40624[(2)] = reload_dependents);

(statearr_40558_40624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (38))){
var inst_40439 = (state_40485[(16)]);
var inst_40456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40439);
var state_40485__$1 = state_40485;
var statearr_40559_40625 = state_40485__$1;
(statearr_40559_40625[(2)] = inst_40456);

(statearr_40559_40625[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (30))){
var state_40485__$1 = state_40485;
var statearr_40560_40626 = state_40485__$1;
(statearr_40560_40626[(2)] = null);

(statearr_40560_40626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (10))){
var inst_40359 = (state_40485[(22)]);
var inst_40361 = cljs.core.chunked_seq_QMARK_.call(null,inst_40359);
var state_40485__$1 = state_40485;
if(inst_40361){
var statearr_40561_40627 = state_40485__$1;
(statearr_40561_40627[(1)] = (13));

} else {
var statearr_40562_40628 = state_40485__$1;
(statearr_40562_40628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (18))){
var inst_40393 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40393)){
var statearr_40563_40629 = state_40485__$1;
(statearr_40563_40629[(1)] = (19));

} else {
var statearr_40564_40630 = state_40485__$1;
(statearr_40564_40630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (42))){
var state_40485__$1 = state_40485;
var statearr_40565_40631 = state_40485__$1;
(statearr_40565_40631[(2)] = null);

(statearr_40565_40631[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (37))){
var inst_40451 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40566_40632 = state_40485__$1;
(statearr_40566_40632[(2)] = inst_40451);

(statearr_40566_40632[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (8))){
var inst_40346 = (state_40485[(7)]);
var inst_40359 = (state_40485[(22)]);
var inst_40359__$1 = cljs.core.seq.call(null,inst_40346);
var state_40485__$1 = (function (){var statearr_40567 = state_40485;
(statearr_40567[(22)] = inst_40359__$1);

return statearr_40567;
})();
if(inst_40359__$1){
var statearr_40568_40633 = state_40485__$1;
(statearr_40568_40633[(1)] = (10));

} else {
var statearr_40569_40634 = state_40485__$1;
(statearr_40569_40634[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32086__auto__,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____0 = (function (){
var statearr_40573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40573[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__);

(statearr_40573[(1)] = (1));

return statearr_40573;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____1 = (function (state_40485){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_40485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e40574){if((e40574 instanceof Object)){
var ex__32090__auto__ = e40574;
var statearr_40575_40635 = state_40485;
(statearr_40575_40635[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40636 = state_40485;
state_40485 = G__40636;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__ = function(state_40485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____1.call(this,state_40485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32153__auto__ = (function (){var statearr_40576 = f__32152__auto__.call(null);
(statearr_40576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_40576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__,map__40331,map__40331__$1,opts,before_jsload,on_jsload,reload_dependents,map__40332,map__40332__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40639,link){
var map__40642 = p__40639;
var map__40642__$1 = ((((!((map__40642 == null)))?((((map__40642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40642):map__40642);
var file = cljs.core.get.call(null,map__40642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40642,map__40642__$1,file){
return (function (p1__40637_SHARP_,p2__40638_SHARP_){
if(cljs.core._EQ_.call(null,p1__40637_SHARP_,p2__40638_SHARP_)){
return p1__40637_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40642,map__40642__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40648){
var map__40649 = p__40648;
var map__40649__$1 = ((((!((map__40649 == null)))?((((map__40649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40649):map__40649);
var match_length = cljs.core.get.call(null,map__40649__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40649__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40644_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40644_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args40651 = [];
var len__26295__auto___40654 = arguments.length;
var i__26296__auto___40655 = (0);
while(true){
if((i__26296__auto___40655 < len__26295__auto___40654)){
args40651.push((arguments[i__26296__auto___40655]));

var G__40656 = (i__26296__auto___40655 + (1));
i__26296__auto___40655 = G__40656;
continue;
} else {
}
break;
}

var G__40653 = args40651.length;
switch (G__40653) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40651.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40658_SHARP_,p2__40659_SHARP_){
return cljs.core.assoc.call(null,p1__40658_SHARP_,cljs.core.get.call(null,p2__40659_SHARP_,key),p2__40659_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40660){
var map__40663 = p__40660;
var map__40663__$1 = ((((!((map__40663 == null)))?((((map__40663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40663):map__40663);
var f_data = map__40663__$1;
var file = cljs.core.get.call(null,map__40663__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40665,files_msg){
var map__40672 = p__40665;
var map__40672__$1 = ((((!((map__40672 == null)))?((((map__40672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40672):map__40672);
var opts = map__40672__$1;
var on_cssload = cljs.core.get.call(null,map__40672__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40674_40678 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40675_40679 = null;
var count__40676_40680 = (0);
var i__40677_40681 = (0);
while(true){
if((i__40677_40681 < count__40676_40680)){
var f_40682 = cljs.core._nth.call(null,chunk__40675_40679,i__40677_40681);
figwheel.client.file_reloading.reload_css_file.call(null,f_40682);

var G__40683 = seq__40674_40678;
var G__40684 = chunk__40675_40679;
var G__40685 = count__40676_40680;
var G__40686 = (i__40677_40681 + (1));
seq__40674_40678 = G__40683;
chunk__40675_40679 = G__40684;
count__40676_40680 = G__40685;
i__40677_40681 = G__40686;
continue;
} else {
var temp__4425__auto___40687 = cljs.core.seq.call(null,seq__40674_40678);
if(temp__4425__auto___40687){
var seq__40674_40688__$1 = temp__4425__auto___40687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40674_40688__$1)){
var c__26040__auto___40689 = cljs.core.chunk_first.call(null,seq__40674_40688__$1);
var G__40690 = cljs.core.chunk_rest.call(null,seq__40674_40688__$1);
var G__40691 = c__26040__auto___40689;
var G__40692 = cljs.core.count.call(null,c__26040__auto___40689);
var G__40693 = (0);
seq__40674_40678 = G__40690;
chunk__40675_40679 = G__40691;
count__40676_40680 = G__40692;
i__40677_40681 = G__40693;
continue;
} else {
var f_40694 = cljs.core.first.call(null,seq__40674_40688__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40694);

var G__40695 = cljs.core.next.call(null,seq__40674_40688__$1);
var G__40696 = null;
var G__40697 = (0);
var G__40698 = (0);
seq__40674_40678 = G__40695;
chunk__40675_40679 = G__40696;
count__40676_40680 = G__40697;
i__40677_40681 = G__40698;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40672,map__40672__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40672,map__40672__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map