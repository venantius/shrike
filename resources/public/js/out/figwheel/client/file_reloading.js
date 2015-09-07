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
var or__25253__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25253__auto__){
return or__25253__auto__;
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
var or__25253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33613_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33613_SHARP_));
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
var seq__33618 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33619 = null;
var count__33620 = (0);
var i__33621 = (0);
while(true){
if((i__33621 < count__33620)){
var n = cljs.core._nth.call(null,chunk__33619,i__33621);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33622 = seq__33618;
var G__33623 = chunk__33619;
var G__33624 = count__33620;
var G__33625 = (i__33621 + (1));
seq__33618 = G__33622;
chunk__33619 = G__33623;
count__33620 = G__33624;
i__33621 = G__33625;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33618);
if(temp__4425__auto__){
var seq__33618__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33618__$1)){
var c__26037__auto__ = cljs.core.chunk_first.call(null,seq__33618__$1);
var G__33626 = cljs.core.chunk_rest.call(null,seq__33618__$1);
var G__33627 = c__26037__auto__;
var G__33628 = cljs.core.count.call(null,c__26037__auto__);
var G__33629 = (0);
seq__33618 = G__33626;
chunk__33619 = G__33627;
count__33620 = G__33628;
i__33621 = G__33629;
continue;
} else {
var n = cljs.core.first.call(null,seq__33618__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33630 = cljs.core.next.call(null,seq__33618__$1);
var G__33631 = null;
var G__33632 = (0);
var G__33633 = (0);
seq__33618 = G__33630;
chunk__33619 = G__33631;
count__33620 = G__33632;
i__33621 = G__33633;
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

var seq__33672_33679 = cljs.core.seq.call(null,deps);
var chunk__33673_33680 = null;
var count__33674_33681 = (0);
var i__33675_33682 = (0);
while(true){
if((i__33675_33682 < count__33674_33681)){
var dep_33683 = cljs.core._nth.call(null,chunk__33673_33680,i__33675_33682);
topo_sort_helper_STAR_.call(null,dep_33683,(depth + (1)),state);

var G__33684 = seq__33672_33679;
var G__33685 = chunk__33673_33680;
var G__33686 = count__33674_33681;
var G__33687 = (i__33675_33682 + (1));
seq__33672_33679 = G__33684;
chunk__33673_33680 = G__33685;
count__33674_33681 = G__33686;
i__33675_33682 = G__33687;
continue;
} else {
var temp__4425__auto___33688 = cljs.core.seq.call(null,seq__33672_33679);
if(temp__4425__auto___33688){
var seq__33672_33689__$1 = temp__4425__auto___33688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33672_33689__$1)){
var c__26037__auto___33690 = cljs.core.chunk_first.call(null,seq__33672_33689__$1);
var G__33691 = cljs.core.chunk_rest.call(null,seq__33672_33689__$1);
var G__33692 = c__26037__auto___33690;
var G__33693 = cljs.core.count.call(null,c__26037__auto___33690);
var G__33694 = (0);
seq__33672_33679 = G__33691;
chunk__33673_33680 = G__33692;
count__33674_33681 = G__33693;
i__33675_33682 = G__33694;
continue;
} else {
var dep_33695 = cljs.core.first.call(null,seq__33672_33689__$1);
topo_sort_helper_STAR_.call(null,dep_33695,(depth + (1)),state);

var G__33696 = cljs.core.next.call(null,seq__33672_33689__$1);
var G__33697 = null;
var G__33698 = (0);
var G__33699 = (0);
seq__33672_33679 = G__33696;
chunk__33673_33680 = G__33697;
count__33674_33681 = G__33698;
i__33675_33682 = G__33699;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33676){
var vec__33678 = p__33676;
var x = cljs.core.nth.call(null,vec__33678,(0),null);
var xs = cljs.core.nthnext.call(null,vec__33678,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33678,x,xs,get_deps__$1){
return (function (p1__33634_SHARP_){
return clojure.set.difference.call(null,p1__33634_SHARP_,x);
});})(vec__33678,x,xs,get_deps__$1))
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
var seq__33712 = cljs.core.seq.call(null,provides);
var chunk__33713 = null;
var count__33714 = (0);
var i__33715 = (0);
while(true){
if((i__33715 < count__33714)){
var prov = cljs.core._nth.call(null,chunk__33713,i__33715);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33716_33724 = cljs.core.seq.call(null,requires);
var chunk__33717_33725 = null;
var count__33718_33726 = (0);
var i__33719_33727 = (0);
while(true){
if((i__33719_33727 < count__33718_33726)){
var req_33728 = cljs.core._nth.call(null,chunk__33717_33725,i__33719_33727);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33728,prov);

var G__33729 = seq__33716_33724;
var G__33730 = chunk__33717_33725;
var G__33731 = count__33718_33726;
var G__33732 = (i__33719_33727 + (1));
seq__33716_33724 = G__33729;
chunk__33717_33725 = G__33730;
count__33718_33726 = G__33731;
i__33719_33727 = G__33732;
continue;
} else {
var temp__4425__auto___33733 = cljs.core.seq.call(null,seq__33716_33724);
if(temp__4425__auto___33733){
var seq__33716_33734__$1 = temp__4425__auto___33733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33716_33734__$1)){
var c__26037__auto___33735 = cljs.core.chunk_first.call(null,seq__33716_33734__$1);
var G__33736 = cljs.core.chunk_rest.call(null,seq__33716_33734__$1);
var G__33737 = c__26037__auto___33735;
var G__33738 = cljs.core.count.call(null,c__26037__auto___33735);
var G__33739 = (0);
seq__33716_33724 = G__33736;
chunk__33717_33725 = G__33737;
count__33718_33726 = G__33738;
i__33719_33727 = G__33739;
continue;
} else {
var req_33740 = cljs.core.first.call(null,seq__33716_33734__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33740,prov);

var G__33741 = cljs.core.next.call(null,seq__33716_33734__$1);
var G__33742 = null;
var G__33743 = (0);
var G__33744 = (0);
seq__33716_33724 = G__33741;
chunk__33717_33725 = G__33742;
count__33718_33726 = G__33743;
i__33719_33727 = G__33744;
continue;
}
} else {
}
}
break;
}

var G__33745 = seq__33712;
var G__33746 = chunk__33713;
var G__33747 = count__33714;
var G__33748 = (i__33715 + (1));
seq__33712 = G__33745;
chunk__33713 = G__33746;
count__33714 = G__33747;
i__33715 = G__33748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33712);
if(temp__4425__auto__){
var seq__33712__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33712__$1)){
var c__26037__auto__ = cljs.core.chunk_first.call(null,seq__33712__$1);
var G__33749 = cljs.core.chunk_rest.call(null,seq__33712__$1);
var G__33750 = c__26037__auto__;
var G__33751 = cljs.core.count.call(null,c__26037__auto__);
var G__33752 = (0);
seq__33712 = G__33749;
chunk__33713 = G__33750;
count__33714 = G__33751;
i__33715 = G__33752;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33712__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33720_33753 = cljs.core.seq.call(null,requires);
var chunk__33721_33754 = null;
var count__33722_33755 = (0);
var i__33723_33756 = (0);
while(true){
if((i__33723_33756 < count__33722_33755)){
var req_33757 = cljs.core._nth.call(null,chunk__33721_33754,i__33723_33756);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33757,prov);

var G__33758 = seq__33720_33753;
var G__33759 = chunk__33721_33754;
var G__33760 = count__33722_33755;
var G__33761 = (i__33723_33756 + (1));
seq__33720_33753 = G__33758;
chunk__33721_33754 = G__33759;
count__33722_33755 = G__33760;
i__33723_33756 = G__33761;
continue;
} else {
var temp__4425__auto___33762__$1 = cljs.core.seq.call(null,seq__33720_33753);
if(temp__4425__auto___33762__$1){
var seq__33720_33763__$1 = temp__4425__auto___33762__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33720_33763__$1)){
var c__26037__auto___33764 = cljs.core.chunk_first.call(null,seq__33720_33763__$1);
var G__33765 = cljs.core.chunk_rest.call(null,seq__33720_33763__$1);
var G__33766 = c__26037__auto___33764;
var G__33767 = cljs.core.count.call(null,c__26037__auto___33764);
var G__33768 = (0);
seq__33720_33753 = G__33765;
chunk__33721_33754 = G__33766;
count__33722_33755 = G__33767;
i__33723_33756 = G__33768;
continue;
} else {
var req_33769 = cljs.core.first.call(null,seq__33720_33763__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33769,prov);

var G__33770 = cljs.core.next.call(null,seq__33720_33763__$1);
var G__33771 = null;
var G__33772 = (0);
var G__33773 = (0);
seq__33720_33753 = G__33770;
chunk__33721_33754 = G__33771;
count__33722_33755 = G__33772;
i__33723_33756 = G__33773;
continue;
}
} else {
}
}
break;
}

var G__33774 = cljs.core.next.call(null,seq__33712__$1);
var G__33775 = null;
var G__33776 = (0);
var G__33777 = (0);
seq__33712 = G__33774;
chunk__33713 = G__33775;
count__33714 = G__33776;
i__33715 = G__33777;
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
var seq__33782_33786 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33783_33787 = null;
var count__33784_33788 = (0);
var i__33785_33789 = (0);
while(true){
if((i__33785_33789 < count__33784_33788)){
var ns_33790 = cljs.core._nth.call(null,chunk__33783_33787,i__33785_33789);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33790);

var G__33791 = seq__33782_33786;
var G__33792 = chunk__33783_33787;
var G__33793 = count__33784_33788;
var G__33794 = (i__33785_33789 + (1));
seq__33782_33786 = G__33791;
chunk__33783_33787 = G__33792;
count__33784_33788 = G__33793;
i__33785_33789 = G__33794;
continue;
} else {
var temp__4425__auto___33795 = cljs.core.seq.call(null,seq__33782_33786);
if(temp__4425__auto___33795){
var seq__33782_33796__$1 = temp__4425__auto___33795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33782_33796__$1)){
var c__26037__auto___33797 = cljs.core.chunk_first.call(null,seq__33782_33796__$1);
var G__33798 = cljs.core.chunk_rest.call(null,seq__33782_33796__$1);
var G__33799 = c__26037__auto___33797;
var G__33800 = cljs.core.count.call(null,c__26037__auto___33797);
var G__33801 = (0);
seq__33782_33786 = G__33798;
chunk__33783_33787 = G__33799;
count__33784_33788 = G__33800;
i__33785_33789 = G__33801;
continue;
} else {
var ns_33802 = cljs.core.first.call(null,seq__33782_33796__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33802);

var G__33803 = cljs.core.next.call(null,seq__33782_33796__$1);
var G__33804 = null;
var G__33805 = (0);
var G__33806 = (0);
seq__33782_33786 = G__33803;
chunk__33783_33787 = G__33804;
count__33784_33788 = G__33805;
i__33785_33789 = G__33806;
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
goog.require_figwheel_backup_ = (function (){var or__25253__auto__ = goog.require__;
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
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
var G__33807__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33808__i = 0, G__33808__a = new Array(arguments.length -  0);
while (G__33808__i < G__33808__a.length) {G__33808__a[G__33808__i] = arguments[G__33808__i + 0]; ++G__33808__i;}
  args = new cljs.core.IndexedSeq(G__33808__a,0);
} 
return G__33807__delegate.call(this,args);};
G__33807.cljs$lang$maxFixedArity = 0;
G__33807.cljs$lang$applyTo = (function (arglist__33809){
var args = cljs.core.seq(arglist__33809);
return G__33807__delegate(args);
});
G__33807.cljs$core$IFn$_invoke$arity$variadic = G__33807__delegate;
return G__33807;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33810 = cljs.core._EQ_;
var expr__33811 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33810.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33811))){
return ((function (pred__33810,expr__33811){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33813){if((e33813 instanceof Error)){
var e = e33813;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33813;

}
}})());
});
;})(pred__33810,expr__33811))
} else {
if(cljs.core.truth_(pred__33810.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33811))){
return ((function (pred__33810,expr__33811){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__33810,expr__33811){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33810,expr__33811))
);

return deferred.addErrback(((function (deferred,pred__33810,expr__33811){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33810,expr__33811))
);
});
;})(pred__33810,expr__33811))
} else {
return ((function (pred__33810,expr__33811){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33810,expr__33811))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33814,callback){
var map__33817 = p__33814;
var map__33817__$1 = ((((!((map__33817 == null)))?((((map__33817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33817):map__33817);
var file_msg = map__33817__$1;
var request_url = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33817,map__33817__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33817,map__33817__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_33841){
var state_val_33842 = (state_33841[(1)]);
if((state_val_33842 === (7))){
var inst_33837 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33843_33863 = state_33841__$1;
(statearr_33843_33863[(2)] = inst_33837);

(statearr_33843_33863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (1))){
var state_33841__$1 = state_33841;
var statearr_33844_33864 = state_33841__$1;
(statearr_33844_33864[(2)] = null);

(statearr_33844_33864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (4))){
var inst_33821 = (state_33841[(7)]);
var inst_33821__$1 = (state_33841[(2)]);
var state_33841__$1 = (function (){var statearr_33845 = state_33841;
(statearr_33845[(7)] = inst_33821__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33821__$1)){
var statearr_33846_33865 = state_33841__$1;
(statearr_33846_33865[(1)] = (5));

} else {
var statearr_33847_33866 = state_33841__$1;
(statearr_33847_33866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (6))){
var state_33841__$1 = state_33841;
var statearr_33848_33867 = state_33841__$1;
(statearr_33848_33867[(2)] = null);

(statearr_33848_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (3))){
var inst_33839 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33841__$1,inst_33839);
} else {
if((state_val_33842 === (2))){
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33841__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33842 === (11))){
var inst_33833 = (state_33841[(2)]);
var state_33841__$1 = (function (){var statearr_33849 = state_33841;
(statearr_33849[(8)] = inst_33833);

return statearr_33849;
})();
var statearr_33850_33868 = state_33841__$1;
(statearr_33850_33868[(2)] = null);

(statearr_33850_33868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (9))){
var inst_33827 = (state_33841[(9)]);
var inst_33825 = (state_33841[(10)]);
var inst_33829 = inst_33827.call(null,inst_33825);
var state_33841__$1 = state_33841;
var statearr_33851_33869 = state_33841__$1;
(statearr_33851_33869[(2)] = inst_33829);

(statearr_33851_33869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (5))){
var inst_33821 = (state_33841[(7)]);
var inst_33823 = figwheel.client.file_reloading.blocking_load.call(null,inst_33821);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33841__$1,(8),inst_33823);
} else {
if((state_val_33842 === (10))){
var inst_33825 = (state_33841[(10)]);
var inst_33831 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33825);
var state_33841__$1 = state_33841;
var statearr_33852_33870 = state_33841__$1;
(statearr_33852_33870[(2)] = inst_33831);

(statearr_33852_33870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (8))){
var inst_33827 = (state_33841[(9)]);
var inst_33821 = (state_33841[(7)]);
var inst_33825 = (state_33841[(2)]);
var inst_33826 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33827__$1 = cljs.core.get.call(null,inst_33826,inst_33821);
var state_33841__$1 = (function (){var statearr_33853 = state_33841;
(statearr_33853[(9)] = inst_33827__$1);

(statearr_33853[(10)] = inst_33825);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33827__$1)){
var statearr_33854_33871 = state_33841__$1;
(statearr_33854_33871[(1)] = (9));

} else {
var statearr_33855_33872 = state_33841__$1;
(statearr_33855_33872[(1)] = (10));

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
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28420__auto__ = null;
var figwheel$client$file_reloading$state_machine__28420__auto____0 = (function (){
var statearr_33859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33859[(0)] = figwheel$client$file_reloading$state_machine__28420__auto__);

(statearr_33859[(1)] = (1));

return statearr_33859;
});
var figwheel$client$file_reloading$state_machine__28420__auto____1 = (function (state_33841){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33860){if((e33860 instanceof Object)){
var ex__28423__auto__ = e33860;
var statearr_33861_33873 = state_33841;
(statearr_33861_33873[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33874 = state_33841;
state_33841 = G__33874;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28420__auto__ = function(state_33841){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28420__auto____1.call(this,state_33841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28420__auto____0;
figwheel$client$file_reloading$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28420__auto____1;
return figwheel$client$file_reloading$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_33862 = f__28485__auto__.call(null);
(statearr_33862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33875,callback){
var map__33878 = p__33875;
var map__33878__$1 = ((((!((map__33878 == null)))?((((map__33878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33878):map__33878);
var file_msg = map__33878__$1;
var namespace = cljs.core.get.call(null,map__33878__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33878,map__33878__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33878,map__33878__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33880){
var map__33883 = p__33880;
var map__33883__$1 = ((((!((map__33883 == null)))?((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33883):map__33883);
var file_msg = map__33883__$1;
var namespace = cljs.core.get.call(null,map__33883__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25241__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25241__auto__){
var or__25253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
var or__25253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25253__auto____$1)){
return or__25253__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25241__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33885,callback){
var map__33888 = p__33885;
var map__33888__$1 = ((((!((map__33888 == null)))?((((map__33888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33888):map__33888);
var file_msg = map__33888__$1;
var request_url = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33888__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28484__auto___33976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___33976,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___33976,out){
return (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (1))){
var inst_33936 = cljs.core.nth.call(null,files,(0),null);
var inst_33937 = cljs.core.nthnext.call(null,files,(1));
var inst_33938 = files;
var state_33958__$1 = (function (){var statearr_33960 = state_33958;
(statearr_33960[(7)] = inst_33938);

(statearr_33960[(8)] = inst_33937);

(statearr_33960[(9)] = inst_33936);

return statearr_33960;
})();
var statearr_33961_33977 = state_33958__$1;
(statearr_33961_33977[(2)] = null);

(statearr_33961_33977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (2))){
var inst_33938 = (state_33958[(7)]);
var inst_33941 = (state_33958[(10)]);
var inst_33941__$1 = cljs.core.nth.call(null,inst_33938,(0),null);
var inst_33942 = cljs.core.nthnext.call(null,inst_33938,(1));
var inst_33943 = (inst_33941__$1 == null);
var inst_33944 = cljs.core.not.call(null,inst_33943);
var state_33958__$1 = (function (){var statearr_33962 = state_33958;
(statearr_33962[(10)] = inst_33941__$1);

(statearr_33962[(11)] = inst_33942);

return statearr_33962;
})();
if(inst_33944){
var statearr_33963_33978 = state_33958__$1;
(statearr_33963_33978[(1)] = (4));

} else {
var statearr_33964_33979 = state_33958__$1;
(statearr_33964_33979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (3))){
var inst_33956 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33958__$1,inst_33956);
} else {
if((state_val_33959 === (4))){
var inst_33941 = (state_33958[(10)]);
var inst_33946 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33941);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33958__$1,(7),inst_33946);
} else {
if((state_val_33959 === (5))){
var inst_33952 = cljs.core.async.close_BANG_.call(null,out);
var state_33958__$1 = state_33958;
var statearr_33965_33980 = state_33958__$1;
(statearr_33965_33980[(2)] = inst_33952);

(statearr_33965_33980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var inst_33954 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33966_33981 = state_33958__$1;
(statearr_33966_33981[(2)] = inst_33954);

(statearr_33966_33981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (7))){
var inst_33942 = (state_33958[(11)]);
var inst_33948 = (state_33958[(2)]);
var inst_33949 = cljs.core.async.put_BANG_.call(null,out,inst_33948);
var inst_33938 = inst_33942;
var state_33958__$1 = (function (){var statearr_33967 = state_33958;
(statearr_33967[(7)] = inst_33938);

(statearr_33967[(12)] = inst_33949);

return statearr_33967;
})();
var statearr_33968_33982 = state_33958__$1;
(statearr_33968_33982[(2)] = null);

(statearr_33968_33982[(1)] = (2));


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
});})(c__28484__auto___33976,out))
;
return ((function (switch__28419__auto__,c__28484__auto___33976,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____0 = (function (){
var statearr_33972 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33972[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__);

(statearr_33972[(1)] = (1));

return statearr_33972;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____1 = (function (state_33958){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33973){if((e33973 instanceof Object)){
var ex__28423__auto__ = e33973;
var statearr_33974_33983 = state_33958;
(statearr_33974_33983[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33984 = state_33958;
state_33958 = G__33984;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___33976,out))
})();
var state__28486__auto__ = (function (){var statearr_33975 = f__28485__auto__.call(null);
(statearr_33975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___33976);

return statearr_33975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___33976,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33985,opts){
var map__33989 = p__33985;
var map__33989__$1 = ((((!((map__33989 == null)))?((((map__33989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33989):map__33989);
var eval_body__$1 = cljs.core.get.call(null,map__33989__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25241__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25241__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25241__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33991){var e = e33991;
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
return (function (p1__33992_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33992_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33997){
var vec__33998 = p__33997;
var k = cljs.core.nth.call(null,vec__33998,(0),null);
var v = cljs.core.nth.call(null,vec__33998,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33999){
var vec__34000 = p__33999;
var k = cljs.core.nth.call(null,vec__34000,(0),null);
var v = cljs.core.nth.call(null,vec__34000,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34004,p__34005){
var map__34252 = p__34004;
var map__34252__$1 = ((((!((map__34252 == null)))?((((map__34252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34252):map__34252);
var opts = map__34252__$1;
var before_jsload = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34253 = p__34005;
var map__34253__$1 = ((((!((map__34253 == null)))?((((map__34253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34253):map__34253);
var msg = map__34253__$1;
var files = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34253__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34406){
var state_val_34407 = (state_34406[(1)]);
if((state_val_34407 === (7))){
var inst_34269 = (state_34406[(7)]);
var inst_34268 = (state_34406[(8)]);
var inst_34270 = (state_34406[(9)]);
var inst_34267 = (state_34406[(10)]);
var inst_34275 = cljs.core._nth.call(null,inst_34268,inst_34270);
var inst_34276 = figwheel.client.file_reloading.eval_body.call(null,inst_34275,opts);
var inst_34277 = (inst_34270 + (1));
var tmp34408 = inst_34269;
var tmp34409 = inst_34268;
var tmp34410 = inst_34267;
var inst_34267__$1 = tmp34410;
var inst_34268__$1 = tmp34409;
var inst_34269__$1 = tmp34408;
var inst_34270__$1 = inst_34277;
var state_34406__$1 = (function (){var statearr_34411 = state_34406;
(statearr_34411[(7)] = inst_34269__$1);

(statearr_34411[(8)] = inst_34268__$1);

(statearr_34411[(9)] = inst_34270__$1);

(statearr_34411[(10)] = inst_34267__$1);

(statearr_34411[(11)] = inst_34276);

return statearr_34411;
})();
var statearr_34412_34498 = state_34406__$1;
(statearr_34412_34498[(2)] = null);

(statearr_34412_34498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (20))){
var inst_34310 = (state_34406[(12)]);
var inst_34318 = figwheel.client.file_reloading.sort_files.call(null,inst_34310);
var state_34406__$1 = state_34406;
var statearr_34413_34499 = state_34406__$1;
(statearr_34413_34499[(2)] = inst_34318);

(statearr_34413_34499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (27))){
var state_34406__$1 = state_34406;
var statearr_34414_34500 = state_34406__$1;
(statearr_34414_34500[(2)] = null);

(statearr_34414_34500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (1))){
var inst_34259 = (state_34406[(13)]);
var inst_34256 = before_jsload.call(null,files);
var inst_34257 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34258 = (function (){return ((function (inst_34259,inst_34256,inst_34257,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34001_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34001_SHARP_);
});
;})(inst_34259,inst_34256,inst_34257,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34259__$1 = cljs.core.filter.call(null,inst_34258,files);
var inst_34260 = cljs.core.not_empty.call(null,inst_34259__$1);
var state_34406__$1 = (function (){var statearr_34415 = state_34406;
(statearr_34415[(13)] = inst_34259__$1);

(statearr_34415[(14)] = inst_34257);

(statearr_34415[(15)] = inst_34256);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34260)){
var statearr_34416_34501 = state_34406__$1;
(statearr_34416_34501[(1)] = (2));

} else {
var statearr_34417_34502 = state_34406__$1;
(statearr_34417_34502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (24))){
var state_34406__$1 = state_34406;
var statearr_34418_34503 = state_34406__$1;
(statearr_34418_34503[(2)] = null);

(statearr_34418_34503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (39))){
var inst_34360 = (state_34406[(16)]);
var state_34406__$1 = state_34406;
var statearr_34419_34504 = state_34406__$1;
(statearr_34419_34504[(2)] = inst_34360);

(statearr_34419_34504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (46))){
var inst_34401 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34420_34505 = state_34406__$1;
(statearr_34420_34505[(2)] = inst_34401);

(statearr_34420_34505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (4))){
var inst_34304 = (state_34406[(2)]);
var inst_34305 = cljs.core.List.EMPTY;
var inst_34306 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34305);
var inst_34307 = (function (){return ((function (inst_34304,inst_34305,inst_34306,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34002_SHARP_){
var and__25241__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34002_SHARP_);
if(cljs.core.truth_(and__25241__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34002_SHARP_));
} else {
return and__25241__auto__;
}
});
;})(inst_34304,inst_34305,inst_34306,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34308 = cljs.core.filter.call(null,inst_34307,files);
var inst_34309 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34310 = cljs.core.concat.call(null,inst_34308,inst_34309);
var state_34406__$1 = (function (){var statearr_34421 = state_34406;
(statearr_34421[(12)] = inst_34310);

(statearr_34421[(17)] = inst_34306);

(statearr_34421[(18)] = inst_34304);

return statearr_34421;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34422_34506 = state_34406__$1;
(statearr_34422_34506[(1)] = (16));

} else {
var statearr_34423_34507 = state_34406__$1;
(statearr_34423_34507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (15))){
var inst_34294 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34424_34508 = state_34406__$1;
(statearr_34424_34508[(2)] = inst_34294);

(statearr_34424_34508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (21))){
var inst_34320 = (state_34406[(19)]);
var inst_34320__$1 = (state_34406[(2)]);
var inst_34321 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34320__$1);
var state_34406__$1 = (function (){var statearr_34425 = state_34406;
(statearr_34425[(19)] = inst_34320__$1);

return statearr_34425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34406__$1,(22),inst_34321);
} else {
if((state_val_34407 === (31))){
var inst_34404 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34406__$1,inst_34404);
} else {
if((state_val_34407 === (32))){
var inst_34360 = (state_34406[(16)]);
var inst_34365 = inst_34360.cljs$lang$protocol_mask$partition0$;
var inst_34366 = (inst_34365 & (64));
var inst_34367 = inst_34360.cljs$core$ISeq$;
var inst_34368 = (inst_34366) || (inst_34367);
var state_34406__$1 = state_34406;
if(cljs.core.truth_(inst_34368)){
var statearr_34426_34509 = state_34406__$1;
(statearr_34426_34509[(1)] = (35));

} else {
var statearr_34427_34510 = state_34406__$1;
(statearr_34427_34510[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (40))){
var inst_34381 = (state_34406[(20)]);
var inst_34380 = (state_34406[(2)]);
var inst_34381__$1 = cljs.core.get.call(null,inst_34380,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34382 = cljs.core.get.call(null,inst_34380,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34383 = cljs.core.not_empty.call(null,inst_34381__$1);
var state_34406__$1 = (function (){var statearr_34428 = state_34406;
(statearr_34428[(20)] = inst_34381__$1);

(statearr_34428[(21)] = inst_34382);

return statearr_34428;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34429_34511 = state_34406__$1;
(statearr_34429_34511[(1)] = (41));

} else {
var statearr_34430_34512 = state_34406__$1;
(statearr_34430_34512[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (33))){
var state_34406__$1 = state_34406;
var statearr_34431_34513 = state_34406__$1;
(statearr_34431_34513[(2)] = false);

(statearr_34431_34513[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (13))){
var inst_34280 = (state_34406[(22)]);
var inst_34284 = cljs.core.chunk_first.call(null,inst_34280);
var inst_34285 = cljs.core.chunk_rest.call(null,inst_34280);
var inst_34286 = cljs.core.count.call(null,inst_34284);
var inst_34267 = inst_34285;
var inst_34268 = inst_34284;
var inst_34269 = inst_34286;
var inst_34270 = (0);
var state_34406__$1 = (function (){var statearr_34432 = state_34406;
(statearr_34432[(7)] = inst_34269);

(statearr_34432[(8)] = inst_34268);

(statearr_34432[(9)] = inst_34270);

(statearr_34432[(10)] = inst_34267);

return statearr_34432;
})();
var statearr_34433_34514 = state_34406__$1;
(statearr_34433_34514[(2)] = null);

(statearr_34433_34514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (22))){
var inst_34324 = (state_34406[(23)]);
var inst_34320 = (state_34406[(19)]);
var inst_34328 = (state_34406[(24)]);
var inst_34323 = (state_34406[(25)]);
var inst_34323__$1 = (state_34406[(2)]);
var inst_34324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34323__$1);
var inst_34325 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323__$1;
var res = inst_34324__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34324,inst_34320,inst_34328,inst_34323,inst_34323__$1,inst_34324__$1,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34003_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34003_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34324,inst_34320,inst_34328,inst_34323,inst_34323__$1,inst_34324__$1,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34326 = cljs.core.filter.call(null,inst_34325,inst_34323__$1);
var inst_34327 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34328__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34327);
var inst_34329 = cljs.core.not_empty.call(null,inst_34328__$1);
var state_34406__$1 = (function (){var statearr_34434 = state_34406;
(statearr_34434[(23)] = inst_34324__$1);

(statearr_34434[(24)] = inst_34328__$1);

(statearr_34434[(26)] = inst_34326);

(statearr_34434[(25)] = inst_34323__$1);

return statearr_34434;
})();
if(cljs.core.truth_(inst_34329)){
var statearr_34435_34515 = state_34406__$1;
(statearr_34435_34515[(1)] = (23));

} else {
var statearr_34436_34516 = state_34406__$1;
(statearr_34436_34516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (36))){
var state_34406__$1 = state_34406;
var statearr_34437_34517 = state_34406__$1;
(statearr_34437_34517[(2)] = false);

(statearr_34437_34517[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (41))){
var inst_34381 = (state_34406[(20)]);
var inst_34385 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34386 = cljs.core.map.call(null,inst_34385,inst_34381);
var inst_34387 = cljs.core.pr_str.call(null,inst_34386);
var inst_34388 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34387)].join('');
var inst_34389 = figwheel.client.utils.log.call(null,inst_34388);
var state_34406__$1 = state_34406;
var statearr_34438_34518 = state_34406__$1;
(statearr_34438_34518[(2)] = inst_34389);

(statearr_34438_34518[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (43))){
var inst_34382 = (state_34406[(21)]);
var inst_34392 = (state_34406[(2)]);
var inst_34393 = cljs.core.not_empty.call(null,inst_34382);
var state_34406__$1 = (function (){var statearr_34439 = state_34406;
(statearr_34439[(27)] = inst_34392);

return statearr_34439;
})();
if(cljs.core.truth_(inst_34393)){
var statearr_34440_34519 = state_34406__$1;
(statearr_34440_34519[(1)] = (44));

} else {
var statearr_34441_34520 = state_34406__$1;
(statearr_34441_34520[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (29))){
var inst_34360 = (state_34406[(16)]);
var inst_34324 = (state_34406[(23)]);
var inst_34320 = (state_34406[(19)]);
var inst_34328 = (state_34406[(24)]);
var inst_34326 = (state_34406[(26)]);
var inst_34323 = (state_34406[(25)]);
var inst_34356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34359 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34360,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34356,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34358){
var map__34442 = p__34358;
var map__34442__$1 = ((((!((map__34442 == null)))?((((map__34442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34442):map__34442);
var namespace = cljs.core.get.call(null,map__34442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34360,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34356,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34360__$1 = cljs.core.group_by.call(null,inst_34359,inst_34326);
var inst_34362 = (inst_34360__$1 == null);
var inst_34363 = cljs.core.not.call(null,inst_34362);
var state_34406__$1 = (function (){var statearr_34444 = state_34406;
(statearr_34444[(28)] = inst_34356);

(statearr_34444[(16)] = inst_34360__$1);

return statearr_34444;
})();
if(inst_34363){
var statearr_34445_34521 = state_34406__$1;
(statearr_34445_34521[(1)] = (32));

} else {
var statearr_34446_34522 = state_34406__$1;
(statearr_34446_34522[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (44))){
var inst_34382 = (state_34406[(21)]);
var inst_34395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34382);
var inst_34396 = cljs.core.pr_str.call(null,inst_34395);
var inst_34397 = [cljs.core.str("not required: "),cljs.core.str(inst_34396)].join('');
var inst_34398 = figwheel.client.utils.log.call(null,inst_34397);
var state_34406__$1 = state_34406;
var statearr_34447_34523 = state_34406__$1;
(statearr_34447_34523[(2)] = inst_34398);

(statearr_34447_34523[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (6))){
var inst_34301 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34448_34524 = state_34406__$1;
(statearr_34448_34524[(2)] = inst_34301);

(statearr_34448_34524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (28))){
var inst_34326 = (state_34406[(26)]);
var inst_34353 = (state_34406[(2)]);
var inst_34354 = cljs.core.not_empty.call(null,inst_34326);
var state_34406__$1 = (function (){var statearr_34449 = state_34406;
(statearr_34449[(29)] = inst_34353);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34354)){
var statearr_34450_34525 = state_34406__$1;
(statearr_34450_34525[(1)] = (29));

} else {
var statearr_34451_34526 = state_34406__$1;
(statearr_34451_34526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (25))){
var inst_34324 = (state_34406[(23)]);
var inst_34340 = (state_34406[(2)]);
var inst_34341 = cljs.core.not_empty.call(null,inst_34324);
var state_34406__$1 = (function (){var statearr_34452 = state_34406;
(statearr_34452[(30)] = inst_34340);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34341)){
var statearr_34453_34527 = state_34406__$1;
(statearr_34453_34527[(1)] = (26));

} else {
var statearr_34454_34528 = state_34406__$1;
(statearr_34454_34528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (34))){
var inst_34375 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
if(cljs.core.truth_(inst_34375)){
var statearr_34455_34529 = state_34406__$1;
(statearr_34455_34529[(1)] = (38));

} else {
var statearr_34456_34530 = state_34406__$1;
(statearr_34456_34530[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (17))){
var state_34406__$1 = state_34406;
var statearr_34457_34531 = state_34406__$1;
(statearr_34457_34531[(2)] = recompile_dependents);

(statearr_34457_34531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (3))){
var state_34406__$1 = state_34406;
var statearr_34458_34532 = state_34406__$1;
(statearr_34458_34532[(2)] = null);

(statearr_34458_34532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (12))){
var inst_34297 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34459_34533 = state_34406__$1;
(statearr_34459_34533[(2)] = inst_34297);

(statearr_34459_34533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (2))){
var inst_34259 = (state_34406[(13)]);
var inst_34266 = cljs.core.seq.call(null,inst_34259);
var inst_34267 = inst_34266;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34406__$1 = (function (){var statearr_34460 = state_34406;
(statearr_34460[(7)] = inst_34269);

(statearr_34460[(8)] = inst_34268);

(statearr_34460[(9)] = inst_34270);

(statearr_34460[(10)] = inst_34267);

return statearr_34460;
})();
var statearr_34461_34534 = state_34406__$1;
(statearr_34461_34534[(2)] = null);

(statearr_34461_34534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (23))){
var inst_34324 = (state_34406[(23)]);
var inst_34320 = (state_34406[(19)]);
var inst_34328 = (state_34406[(24)]);
var inst_34326 = (state_34406[(26)]);
var inst_34323 = (state_34406[(25)]);
var inst_34331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34333 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34331,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34332){
var map__34462 = p__34332;
var map__34462__$1 = ((((!((map__34462 == null)))?((((map__34462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34462):map__34462);
var request_url = cljs.core.get.call(null,map__34462__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34331,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34334 = cljs.core.reverse.call(null,inst_34328);
var inst_34335 = cljs.core.map.call(null,inst_34333,inst_34334);
var inst_34336 = cljs.core.pr_str.call(null,inst_34335);
var inst_34337 = figwheel.client.utils.log.call(null,inst_34336);
var state_34406__$1 = (function (){var statearr_34464 = state_34406;
(statearr_34464[(31)] = inst_34331);

return statearr_34464;
})();
var statearr_34465_34535 = state_34406__$1;
(statearr_34465_34535[(2)] = inst_34337);

(statearr_34465_34535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (35))){
var state_34406__$1 = state_34406;
var statearr_34466_34536 = state_34406__$1;
(statearr_34466_34536[(2)] = true);

(statearr_34466_34536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (19))){
var inst_34310 = (state_34406[(12)]);
var inst_34316 = figwheel.client.file_reloading.expand_files.call(null,inst_34310);
var state_34406__$1 = state_34406;
var statearr_34467_34537 = state_34406__$1;
(statearr_34467_34537[(2)] = inst_34316);

(statearr_34467_34537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (11))){
var state_34406__$1 = state_34406;
var statearr_34468_34538 = state_34406__$1;
(statearr_34468_34538[(2)] = null);

(statearr_34468_34538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (9))){
var inst_34299 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34469_34539 = state_34406__$1;
(statearr_34469_34539[(2)] = inst_34299);

(statearr_34469_34539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (5))){
var inst_34269 = (state_34406[(7)]);
var inst_34270 = (state_34406[(9)]);
var inst_34272 = (inst_34270 < inst_34269);
var inst_34273 = inst_34272;
var state_34406__$1 = state_34406;
if(cljs.core.truth_(inst_34273)){
var statearr_34470_34540 = state_34406__$1;
(statearr_34470_34540[(1)] = (7));

} else {
var statearr_34471_34541 = state_34406__$1;
(statearr_34471_34541[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (14))){
var inst_34280 = (state_34406[(22)]);
var inst_34289 = cljs.core.first.call(null,inst_34280);
var inst_34290 = figwheel.client.file_reloading.eval_body.call(null,inst_34289,opts);
var inst_34291 = cljs.core.next.call(null,inst_34280);
var inst_34267 = inst_34291;
var inst_34268 = null;
var inst_34269 = (0);
var inst_34270 = (0);
var state_34406__$1 = (function (){var statearr_34472 = state_34406;
(statearr_34472[(7)] = inst_34269);

(statearr_34472[(8)] = inst_34268);

(statearr_34472[(9)] = inst_34270);

(statearr_34472[(10)] = inst_34267);

(statearr_34472[(32)] = inst_34290);

return statearr_34472;
})();
var statearr_34473_34542 = state_34406__$1;
(statearr_34473_34542[(2)] = null);

(statearr_34473_34542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (45))){
var state_34406__$1 = state_34406;
var statearr_34474_34543 = state_34406__$1;
(statearr_34474_34543[(2)] = null);

(statearr_34474_34543[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (26))){
var inst_34324 = (state_34406[(23)]);
var inst_34320 = (state_34406[(19)]);
var inst_34328 = (state_34406[(24)]);
var inst_34326 = (state_34406[(26)]);
var inst_34323 = (state_34406[(25)]);
var inst_34343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34345 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34344){
var map__34475 = p__34344;
var map__34475__$1 = ((((!((map__34475 == null)))?((((map__34475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34475):map__34475);
var namespace = cljs.core.get.call(null,map__34475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34346 = cljs.core.map.call(null,inst_34345,inst_34324);
var inst_34347 = cljs.core.pr_str.call(null,inst_34346);
var inst_34348 = figwheel.client.utils.log.call(null,inst_34347);
var inst_34349 = (function (){var all_files = inst_34320;
var res_SINGLEQUOTE_ = inst_34323;
var res = inst_34324;
var files_not_loaded = inst_34326;
var dependencies_that_loaded = inst_34328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,inst_34345,inst_34346,inst_34347,inst_34348,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34324,inst_34320,inst_34328,inst_34326,inst_34323,inst_34343,inst_34345,inst_34346,inst_34347,inst_34348,state_val_34407,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34350 = setTimeout(inst_34349,(10));
var state_34406__$1 = (function (){var statearr_34477 = state_34406;
(statearr_34477[(33)] = inst_34348);

(statearr_34477[(34)] = inst_34343);

return statearr_34477;
})();
var statearr_34478_34544 = state_34406__$1;
(statearr_34478_34544[(2)] = inst_34350);

(statearr_34478_34544[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (16))){
var state_34406__$1 = state_34406;
var statearr_34479_34545 = state_34406__$1;
(statearr_34479_34545[(2)] = reload_dependents);

(statearr_34479_34545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (38))){
var inst_34360 = (state_34406[(16)]);
var inst_34377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34360);
var state_34406__$1 = state_34406;
var statearr_34480_34546 = state_34406__$1;
(statearr_34480_34546[(2)] = inst_34377);

(statearr_34480_34546[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (30))){
var state_34406__$1 = state_34406;
var statearr_34481_34547 = state_34406__$1;
(statearr_34481_34547[(2)] = null);

(statearr_34481_34547[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (10))){
var inst_34280 = (state_34406[(22)]);
var inst_34282 = cljs.core.chunked_seq_QMARK_.call(null,inst_34280);
var state_34406__$1 = state_34406;
if(inst_34282){
var statearr_34482_34548 = state_34406__$1;
(statearr_34482_34548[(1)] = (13));

} else {
var statearr_34483_34549 = state_34406__$1;
(statearr_34483_34549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (18))){
var inst_34314 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
if(cljs.core.truth_(inst_34314)){
var statearr_34484_34550 = state_34406__$1;
(statearr_34484_34550[(1)] = (19));

} else {
var statearr_34485_34551 = state_34406__$1;
(statearr_34485_34551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (42))){
var state_34406__$1 = state_34406;
var statearr_34486_34552 = state_34406__$1;
(statearr_34486_34552[(2)] = null);

(statearr_34486_34552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (37))){
var inst_34372 = (state_34406[(2)]);
var state_34406__$1 = state_34406;
var statearr_34487_34553 = state_34406__$1;
(statearr_34487_34553[(2)] = inst_34372);

(statearr_34487_34553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34407 === (8))){
var inst_34280 = (state_34406[(22)]);
var inst_34267 = (state_34406[(10)]);
var inst_34280__$1 = cljs.core.seq.call(null,inst_34267);
var state_34406__$1 = (function (){var statearr_34488 = state_34406;
(statearr_34488[(22)] = inst_34280__$1);

return statearr_34488;
})();
if(inst_34280__$1){
var statearr_34489_34554 = state_34406__$1;
(statearr_34489_34554[(1)] = (10));

} else {
var statearr_34490_34555 = state_34406__$1;
(statearr_34490_34555[(1)] = (11));

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
});})(c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28419__auto__,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____0 = (function (){
var statearr_34494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34494[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__);

(statearr_34494[(1)] = (1));

return statearr_34494;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____1 = (function (state_34406){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_34406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e34495){if((e34495 instanceof Object)){
var ex__28423__auto__ = e34495;
var statearr_34496_34556 = state_34406;
(statearr_34496_34556[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34557 = state_34406;
state_34406 = G__34557;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__ = function(state_34406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____1.call(this,state_34406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28486__auto__ = (function (){var statearr_34497 = f__28485__auto__.call(null);
(statearr_34497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_34497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__,map__34252,map__34252__$1,opts,before_jsload,on_jsload,reload_dependents,map__34253,map__34253__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28484__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34560,link){
var map__34563 = p__34560;
var map__34563__$1 = ((((!((map__34563 == null)))?((((map__34563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34563):map__34563);
var file = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__34563,map__34563__$1,file){
return (function (p1__34558_SHARP_,p2__34559_SHARP_){
if(cljs.core._EQ_.call(null,p1__34558_SHARP_,p2__34559_SHARP_)){
return p1__34558_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__34563,map__34563__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34569){
var map__34570 = p__34569;
var map__34570__$1 = ((((!((map__34570 == null)))?((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var match_length = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34565_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34565_SHARP_);
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
var args34572 = [];
var len__26292__auto___34575 = arguments.length;
var i__26293__auto___34576 = (0);
while(true){
if((i__26293__auto___34576 < len__26292__auto___34575)){
args34572.push((arguments[i__26293__auto___34576]));

var G__34577 = (i__26293__auto___34576 + (1));
i__26293__auto___34576 = G__34577;
continue;
} else {
}
break;
}

var G__34574 = args34572.length;
switch (G__34574) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34572.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34579_SHARP_,p2__34580_SHARP_){
return cljs.core.assoc.call(null,p1__34579_SHARP_,cljs.core.get.call(null,p2__34580_SHARP_,key),p2__34580_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34581){
var map__34584 = p__34581;
var map__34584__$1 = ((((!((map__34584 == null)))?((((map__34584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34584):map__34584);
var f_data = map__34584__$1;
var file = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34586,files_msg){
var map__34593 = p__34586;
var map__34593__$1 = ((((!((map__34593 == null)))?((((map__34593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34593):map__34593);
var opts = map__34593__$1;
var on_cssload = cljs.core.get.call(null,map__34593__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34595_34599 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34596_34600 = null;
var count__34597_34601 = (0);
var i__34598_34602 = (0);
while(true){
if((i__34598_34602 < count__34597_34601)){
var f_34603 = cljs.core._nth.call(null,chunk__34596_34600,i__34598_34602);
figwheel.client.file_reloading.reload_css_file.call(null,f_34603);

var G__34604 = seq__34595_34599;
var G__34605 = chunk__34596_34600;
var G__34606 = count__34597_34601;
var G__34607 = (i__34598_34602 + (1));
seq__34595_34599 = G__34604;
chunk__34596_34600 = G__34605;
count__34597_34601 = G__34606;
i__34598_34602 = G__34607;
continue;
} else {
var temp__4425__auto___34608 = cljs.core.seq.call(null,seq__34595_34599);
if(temp__4425__auto___34608){
var seq__34595_34609__$1 = temp__4425__auto___34608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34595_34609__$1)){
var c__26037__auto___34610 = cljs.core.chunk_first.call(null,seq__34595_34609__$1);
var G__34611 = cljs.core.chunk_rest.call(null,seq__34595_34609__$1);
var G__34612 = c__26037__auto___34610;
var G__34613 = cljs.core.count.call(null,c__26037__auto___34610);
var G__34614 = (0);
seq__34595_34599 = G__34611;
chunk__34596_34600 = G__34612;
count__34597_34601 = G__34613;
i__34598_34602 = G__34614;
continue;
} else {
var f_34615 = cljs.core.first.call(null,seq__34595_34609__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34615);

var G__34616 = cljs.core.next.call(null,seq__34595_34609__$1);
var G__34617 = null;
var G__34618 = (0);
var G__34619 = (0);
seq__34595_34599 = G__34616;
chunk__34596_34600 = G__34617;
count__34597_34601 = G__34618;
i__34598_34602 = G__34619;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34593,map__34593__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__34593,map__34593__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map