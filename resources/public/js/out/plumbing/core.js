// Compiled by ClojureScript 1.7.48 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var args35000 = [];
var len__26295__auto___35009 = arguments.length;
var i__26296__auto___35010 = (0);
while(true){
if((i__26296__auto___35010 < len__26295__auto___35009)){
args35000.push((arguments[i__26296__auto___35010]));

var G__35011 = (i__26296__auto___35010 + (1));
i__26296__auto___35010 = G__35011;
continue;
} else {
}
break;
}

var G__35008 = args35000.length;
switch (G__35008) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args35000.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26314__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq35001){
var G__35002 = cljs.core.first.call(null,seq35001);
var seq35001__$1 = cljs.core.next.call(null,seq35001);
var G__35003 = cljs.core.first.call(null,seq35001__$1);
var seq35001__$2 = cljs.core.next.call(null,seq35001__$1);
var G__35004 = cljs.core.first.call(null,seq35001__$2);
var seq35001__$3 = cljs.core.next.call(null,seq35001__$2);
var G__35005 = cljs.core.first.call(null,seq35001__$3);
var seq35001__$4 = cljs.core.next.call(null,seq35001__$3);
var G__35006 = cljs.core.first.call(null,seq35001__$4);
var seq35001__$5 = cljs.core.next.call(null,seq35001__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__35002,G__35003,G__35004,G__35005,G__35006,seq35001__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__33684__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35021_35027 = cljs.core.seq.call(null,m);
var chunk__35022_35028 = null;
var count__35023_35029 = (0);
var i__35024_35030 = (0);
while(true){
if((i__35024_35030 < count__35023_35029)){
var vec__35025_35031 = cljs.core._nth.call(null,chunk__35022_35028,i__35024_35030);
var k_35032 = cljs.core.nth.call(null,vec__35025_35031,(0),null);
var v_35033 = cljs.core.nth.call(null,vec__35025_35031,(1),null);
var m35020_35034 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35020_35034,k_35032,f.call(null,v_35033)));

var G__35035 = seq__35021_35027;
var G__35036 = chunk__35022_35028;
var G__35037 = count__35023_35029;
var G__35038 = (i__35024_35030 + (1));
seq__35021_35027 = G__35035;
chunk__35022_35028 = G__35036;
count__35023_35029 = G__35037;
i__35024_35030 = G__35038;
continue;
} else {
var temp__4425__auto___35039 = cljs.core.seq.call(null,seq__35021_35027);
if(temp__4425__auto___35039){
var seq__35021_35040__$1 = temp__4425__auto___35039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35021_35040__$1)){
var c__26040__auto___35041 = cljs.core.chunk_first.call(null,seq__35021_35040__$1);
var G__35042 = cljs.core.chunk_rest.call(null,seq__35021_35040__$1);
var G__35043 = c__26040__auto___35041;
var G__35044 = cljs.core.count.call(null,c__26040__auto___35041);
var G__35045 = (0);
seq__35021_35027 = G__35042;
chunk__35022_35028 = G__35043;
count__35023_35029 = G__35044;
i__35024_35030 = G__35045;
continue;
} else {
var vec__35026_35046 = cljs.core.first.call(null,seq__35021_35040__$1);
var k_35047 = cljs.core.nth.call(null,vec__35026_35046,(0),null);
var v_35048 = cljs.core.nth.call(null,vec__35026_35046,(1),null);
var m35020_35049 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35020_35049,k_35047,f.call(null,v_35048)));

var G__35050 = cljs.core.next.call(null,seq__35021_35040__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__35021_35027 = G__35050;
chunk__35022_35028 = G__35051;
count__35023_35029 = G__35052;
i__35024_35030 = G__35053;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__33684__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__33684__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35062_35068 = cljs.core.seq.call(null,m);
var chunk__35063_35069 = null;
var count__35064_35070 = (0);
var i__35065_35071 = (0);
while(true){
if((i__35065_35071 < count__35064_35070)){
var vec__35066_35072 = cljs.core._nth.call(null,chunk__35063_35069,i__35065_35071);
var k_35073 = cljs.core.nth.call(null,vec__35066_35072,(0),null);
var v_35074 = cljs.core.nth.call(null,vec__35066_35072,(1),null);
var m35061_35075 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35061_35075,f.call(null,k_35073),v_35074));

var G__35076 = seq__35062_35068;
var G__35077 = chunk__35063_35069;
var G__35078 = count__35064_35070;
var G__35079 = (i__35065_35071 + (1));
seq__35062_35068 = G__35076;
chunk__35063_35069 = G__35077;
count__35064_35070 = G__35078;
i__35065_35071 = G__35079;
continue;
} else {
var temp__4425__auto___35080 = cljs.core.seq.call(null,seq__35062_35068);
if(temp__4425__auto___35080){
var seq__35062_35081__$1 = temp__4425__auto___35080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35062_35081__$1)){
var c__26040__auto___35082 = cljs.core.chunk_first.call(null,seq__35062_35081__$1);
var G__35083 = cljs.core.chunk_rest.call(null,seq__35062_35081__$1);
var G__35084 = c__26040__auto___35082;
var G__35085 = cljs.core.count.call(null,c__26040__auto___35082);
var G__35086 = (0);
seq__35062_35068 = G__35083;
chunk__35063_35069 = G__35084;
count__35064_35070 = G__35085;
i__35065_35071 = G__35086;
continue;
} else {
var vec__35067_35087 = cljs.core.first.call(null,seq__35062_35081__$1);
var k_35088 = cljs.core.nth.call(null,vec__35067_35087,(0),null);
var v_35089 = cljs.core.nth.call(null,vec__35067_35087,(1),null);
var m35061_35090 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35061_35090,f.call(null,k_35088),v_35089));

var G__35091 = cljs.core.next.call(null,seq__35062_35081__$1);
var G__35092 = null;
var G__35093 = (0);
var G__35094 = (0);
seq__35062_35068 = G__35091;
chunk__35063_35069 = G__35092;
count__35064_35070 = G__35093;
i__35065_35071 = G__35094;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__33684__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__33684__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35101_35105 = cljs.core.seq.call(null,ks);
var chunk__35102_35106 = null;
var count__35103_35107 = (0);
var i__35104_35108 = (0);
while(true){
if((i__35104_35108 < count__35103_35107)){
var k_35109 = cljs.core._nth.call(null,chunk__35102_35106,i__35104_35108);
var m35100_35110 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35100_35110,k_35109,f.call(null,k_35109)));

var G__35111 = seq__35101_35105;
var G__35112 = chunk__35102_35106;
var G__35113 = count__35103_35107;
var G__35114 = (i__35104_35108 + (1));
seq__35101_35105 = G__35111;
chunk__35102_35106 = G__35112;
count__35103_35107 = G__35113;
i__35104_35108 = G__35114;
continue;
} else {
var temp__4425__auto___35115 = cljs.core.seq.call(null,seq__35101_35105);
if(temp__4425__auto___35115){
var seq__35101_35116__$1 = temp__4425__auto___35115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35101_35116__$1)){
var c__26040__auto___35117 = cljs.core.chunk_first.call(null,seq__35101_35116__$1);
var G__35118 = cljs.core.chunk_rest.call(null,seq__35101_35116__$1);
var G__35119 = c__26040__auto___35117;
var G__35120 = cljs.core.count.call(null,c__26040__auto___35117);
var G__35121 = (0);
seq__35101_35105 = G__35118;
chunk__35102_35106 = G__35119;
count__35103_35107 = G__35120;
i__35104_35108 = G__35121;
continue;
} else {
var k_35122 = cljs.core.first.call(null,seq__35101_35116__$1);
var m35100_35123 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35100_35123,k_35122,f.call(null,k_35122)));

var G__35124 = cljs.core.next.call(null,seq__35101_35116__$1);
var G__35125 = null;
var G__35126 = (0);
var G__35127 = (0);
seq__35101_35105 = G__35124;
chunk__35102_35106 = G__35125;
count__35103_35107 = G__35126;
i__35104_35108 = G__35127;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__33684__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__33684__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35134_35138 = cljs.core.seq.call(null,vs);
var chunk__35135_35139 = null;
var count__35136_35140 = (0);
var i__35137_35141 = (0);
while(true){
if((i__35137_35141 < count__35136_35140)){
var v_35142 = cljs.core._nth.call(null,chunk__35135_35139,i__35137_35141);
var m35133_35143 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35133_35143,f.call(null,v_35142),v_35142));

var G__35144 = seq__35134_35138;
var G__35145 = chunk__35135_35139;
var G__35146 = count__35136_35140;
var G__35147 = (i__35137_35141 + (1));
seq__35134_35138 = G__35144;
chunk__35135_35139 = G__35145;
count__35136_35140 = G__35146;
i__35137_35141 = G__35147;
continue;
} else {
var temp__4425__auto___35148 = cljs.core.seq.call(null,seq__35134_35138);
if(temp__4425__auto___35148){
var seq__35134_35149__$1 = temp__4425__auto___35148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35134_35149__$1)){
var c__26040__auto___35150 = cljs.core.chunk_first.call(null,seq__35134_35149__$1);
var G__35151 = cljs.core.chunk_rest.call(null,seq__35134_35149__$1);
var G__35152 = c__26040__auto___35150;
var G__35153 = cljs.core.count.call(null,c__26040__auto___35150);
var G__35154 = (0);
seq__35134_35138 = G__35151;
chunk__35135_35139 = G__35152;
count__35136_35140 = G__35153;
i__35137_35141 = G__35154;
continue;
} else {
var v_35155 = cljs.core.first.call(null,seq__35134_35149__$1);
var m35133_35156 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35133_35156,f.call(null,v_35155),v_35155));

var G__35157 = cljs.core.next.call(null,seq__35134_35149__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__35134_35138 = G__35157;
chunk__35135_35139 = G__35158;
count__35136_35140 = G__35159;
i__35137_35141 = G__35160;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__33684__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__35161){
var vec__35163 = p__35161;
var k = cljs.core.nth.call(null,vec__35163,(0),null);
var ks = cljs.core.nthnext.call(null,vec__35163,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__25244__auto__ = ks;
if(cljs.core.truth_(and__25244__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__25244__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__33684__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35172_35178 = cljs.core.seq.call(null,x);
var chunk__35173_35179 = null;
var count__35174_35180 = (0);
var i__35175_35181 = (0);
while(true){
if((i__35175_35181 < count__35174_35180)){
var vec__35176_35182 = cljs.core._nth.call(null,chunk__35173_35179,i__35175_35181);
var k_35183 = cljs.core.nth.call(null,vec__35176_35182,(0),null);
var v_35184 = cljs.core.nth.call(null,vec__35176_35182,(1),null);
var m35171_35185 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35171_35185,((typeof k_35183 === 'string')?cljs.core.keyword.call(null,k_35183):k_35183),plumbing$core$keywordize_map.call(null,v_35184)));

var G__35186 = seq__35172_35178;
var G__35187 = chunk__35173_35179;
var G__35188 = count__35174_35180;
var G__35189 = (i__35175_35181 + (1));
seq__35172_35178 = G__35186;
chunk__35173_35179 = G__35187;
count__35174_35180 = G__35188;
i__35175_35181 = G__35189;
continue;
} else {
var temp__4425__auto___35190 = cljs.core.seq.call(null,seq__35172_35178);
if(temp__4425__auto___35190){
var seq__35172_35191__$1 = temp__4425__auto___35190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35172_35191__$1)){
var c__26040__auto___35192 = cljs.core.chunk_first.call(null,seq__35172_35191__$1);
var G__35193 = cljs.core.chunk_rest.call(null,seq__35172_35191__$1);
var G__35194 = c__26040__auto___35192;
var G__35195 = cljs.core.count.call(null,c__26040__auto___35192);
var G__35196 = (0);
seq__35172_35178 = G__35193;
chunk__35173_35179 = G__35194;
count__35174_35180 = G__35195;
i__35175_35181 = G__35196;
continue;
} else {
var vec__35177_35197 = cljs.core.first.call(null,seq__35172_35191__$1);
var k_35198 = cljs.core.nth.call(null,vec__35177_35197,(0),null);
var v_35199 = cljs.core.nth.call(null,vec__35177_35197,(1),null);
var m35171_35200 = cljs.core.deref.call(null,m_atom__33684__auto__);
cljs.core.reset_BANG_.call(null,m_atom__33684__auto__,cljs.core.assoc_BANG_.call(null,m35171_35200,((typeof k_35198 === 'string')?cljs.core.keyword.call(null,k_35198):k_35198),plumbing$core$keywordize_map.call(null,v_35199)));

var G__35201 = cljs.core.next.call(null,seq__35172_35191__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__35172_35178 = G__35201;
chunk__35173_35179 = G__35202;
count__35174_35180 = G__35203;
i__35175_35181 = G__35204;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__33684__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__33760__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__33760__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__35205 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__35206 = cljs.core.next.call(null,ks);
m = G__35205;
ks = G__35206;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var args__26302__auto__ = [];
var len__26295__auto___35217 = arguments.length;
var i__26296__auto___35218 = (0);
while(true){
if((i__26296__auto___35218 < len__26295__auto___35217)){
args__26302__auto__.push((arguments[i__26296__auto___35218]));

var G__35219 = (i__26296__auto___35218 + (1));
i__26296__auto___35218 = G__35219;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((1) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26303__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__25256__auto__ = m;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26009__auto__ = (function plumbing$core$iter__35209(s__35210){
return (new cljs.core.LazySeq(null,(function (){
var s__35210__$1 = s__35210;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35210__$1);
if(temp__4425__auto__){
var s__35210__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35210__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__35210__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__35212 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__35211 = (0);
while(true){
if((i__35211 < size__26008__auto__)){
var vec__35215 = cljs.core._nth.call(null,c__26007__auto__,i__35211);
var k = cljs.core.nth.call(null,vec__35215,(0),null);
var v = cljs.core.nth.call(null,vec__35215,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__35212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35220 = (i__35211 + (1));
i__35211 = G__35220;
continue;
} else {
var G__35221 = (i__35211 + (1));
i__35211 = G__35221;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35212),plumbing$core$iter__35209.call(null,cljs.core.chunk_rest.call(null,s__35210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35212),null);
}
} else {
var vec__35216 = cljs.core.first.call(null,s__35210__$2);
var k = cljs.core.nth.call(null,vec__35216,(0),null);
var v = cljs.core.nth.call(null,vec__35216,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__35209.call(null,cljs.core.rest.call(null,s__35210__$2)));
} else {
var G__35222 = cljs.core.rest.call(null,s__35210__$2);
s__35210__$1 = G__35222;
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
return iter__26009__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq35207){
var G__35208 = cljs.core.first.call(null,seq35207);
var seq35207__$1 = cljs.core.next.call(null,seq35207);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__35208,seq35207__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var args__26302__auto__ = [];
var len__26295__auto___35227 = arguments.length;
var i__26296__auto___35228 = (0);
while(true){
if((i__26296__auto___35228 < len__26295__auto___35227)){
args__26302__auto__.push((arguments[i__26296__auto___35228]));

var G__35229 = (i__26296__auto___35228 + (1));
i__26296__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((3) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26303__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq35223){
var G__35224 = cljs.core.first.call(null,seq35223);
var seq35223__$1 = cljs.core.next.call(null,seq35223);
var G__35225 = cljs.core.first.call(null,seq35223__$1);
var seq35223__$2 = cljs.core.next.call(null,seq35223__$1);
var G__35226 = cljs.core.first.call(null,seq35223__$2);
var seq35223__$3 = cljs.core.next.call(null,seq35223__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__35224,G__35225,G__35226,seq35223__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var args35230 = [];
var len__26295__auto___35233 = arguments.length;
var i__26296__auto___35234 = (0);
while(true){
if((i__26296__auto___35234 < len__26295__auto___35233)){
args35230.push((arguments[i__26296__auto___35234]));

var G__35235 = (i__26296__auto___35234 + (1));
i__26296__auto___35234 = G__35235;
continue;
} else {
}
break;
}

var G__35232 = args35230.length;
switch (G__35232) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35230.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__26009__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__35241(s__35242){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35242__$1 = s__35242;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35242__$1);
if(temp__4425__auto__){
var s__35242__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35242__$2)){
var c__26007__auto__ = cljs.core.chunk_first.call(null,s__35242__$2);
var size__26008__auto__ = cljs.core.count.call(null,c__26007__auto__);
var b__35244 = cljs.core.chunk_buffer.call(null,size__26008__auto__);
if((function (){var i__35243 = (0);
while(true){
if((i__35243 < size__26008__auto__)){
var x = cljs.core._nth.call(null,c__26007__auto__,i__35243);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__35244,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__35245 = (i__35243 + (1));
i__35243 = G__35245;
continue;
} else {
var G__35246 = (i__35243 + (1));
i__35243 = G__35246;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35244),plumbing$core$distinct_by_$_iter__35241.call(null,cljs.core.chunk_rest.call(null,s__35242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35244),null);
}
} else {
var x = cljs.core.first.call(null,s__35242__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__35241.call(null,cljs.core.rest.call(null,s__35242__$2)));
} else {
var G__35247 = cljs.core.rest.call(null,s__35242__$2);
s__35242__$1 = G__35247;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__26009__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var args__26302__auto__ = [];
var len__26295__auto___35249 = arguments.length;
var i__26296__auto___35250 = (0);
while(true){
if((i__26296__auto___35250 < len__26295__auto___35249)){
args__26302__auto__.push((arguments[i__26296__auto___35250]));

var G__35251 = (i__26296__auto___35250 + (1));
i__26296__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((0) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__26303__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq35248){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35248));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var args35252 = [];
var len__26295__auto___35258 = arguments.length;
var i__26296__auto___35259 = (0);
while(true){
if((i__26296__auto___35259 < len__26295__auto___35258)){
args35252.push((arguments[i__26296__auto___35259]));

var G__35260 = (i__26296__auto___35259 + (1));
i__26296__auto___35259 = G__35260;
continue;
} else {
}
break;
}

var G__35257 = args35252.length;
switch (G__35257) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args35252.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26314__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35262 = plumbing.core.conj_when.call(null,coll,x);
var G__35263 = cljs.core.first.call(null,xs);
var G__35264 = cljs.core.next.call(null,xs);
coll = G__35262;
x = G__35263;
xs = G__35264;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq35253){
var G__35254 = cljs.core.first.call(null,seq35253);
var seq35253__$1 = cljs.core.next.call(null,seq35253);
var G__35255 = cljs.core.first.call(null,seq35253__$1);
var seq35253__$2 = cljs.core.next.call(null,seq35253__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__35254,G__35255,seq35253__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var args35266 = [];
var len__26295__auto___35272 = arguments.length;
var i__26296__auto___35273 = (0);
while(true){
if((i__26296__auto___35273 < len__26295__auto___35272)){
args35266.push((arguments[i__26296__auto___35273]));

var G__35274 = (i__26296__auto___35273 + (1));
i__26296__auto___35273 = G__35274;
continue;
} else {
}
break;
}

var G__35271 = args35266.length;
switch (G__35271) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args35266.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26314__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__35265_SHARP_){
return cljs.core.apply.call(null,f,p1__35265_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq35267){
var G__35268 = cljs.core.first.call(null,seq35267);
var seq35267__$1 = cljs.core.next.call(null,seq35267);
var G__35269 = cljs.core.first.call(null,seq35267__$1);
var seq35267__$2 = cljs.core.next.call(null,seq35267__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35268,G__35269,seq35267__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var args35276 = [];
var len__26295__auto___35282 = arguments.length;
var i__26296__auto___35283 = (0);
while(true){
if((i__26296__auto___35283 < len__26295__auto___35282)){
args35276.push((arguments[i__26296__auto___35283]));

var G__35284 = (i__26296__auto___35283 + (1));
i__26296__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var G__35281 = args35276.length;
switch (G__35281) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26314__auto__ = (new cljs.core.IndexedSeq(args35276.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26314__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq35277){
var G__35278 = cljs.core.first.call(null,seq35277);
var seq35277__$1 = cljs.core.next.call(null,seq35277);
var G__35279 = cljs.core.first.call(null,seq35277__$1);
var seq35277__$2 = cljs.core.next.call(null,seq35277__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__35278,G__35279,seq35277__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map