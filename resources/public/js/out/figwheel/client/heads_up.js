// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__26299__auto__ = [];
var len__26292__auto___33313 = arguments.length;
var i__26293__auto___33314 = (0);
while(true){
if((i__26293__auto___33314 < len__26292__auto___33313)){
args__26299__auto__.push((arguments[i__26293__auto___33314]));

var G__33315 = (i__26293__auto___33314 + (1));
i__26293__auto___33314 = G__33315;
continue;
} else {
}
break;
}

var argseq__26300__auto__ = ((((2) < args__26299__auto__.length))?(new cljs.core.IndexedSeq(args__26299__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26300__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33305_33316 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33306_33317 = null;
var count__33307_33318 = (0);
var i__33308_33319 = (0);
while(true){
if((i__33308_33319 < count__33307_33318)){
var k_33320 = cljs.core._nth.call(null,chunk__33306_33317,i__33308_33319);
e.setAttribute(cljs.core.name.call(null,k_33320),cljs.core.get.call(null,attrs,k_33320));

var G__33321 = seq__33305_33316;
var G__33322 = chunk__33306_33317;
var G__33323 = count__33307_33318;
var G__33324 = (i__33308_33319 + (1));
seq__33305_33316 = G__33321;
chunk__33306_33317 = G__33322;
count__33307_33318 = G__33323;
i__33308_33319 = G__33324;
continue;
} else {
var temp__4425__auto___33325 = cljs.core.seq.call(null,seq__33305_33316);
if(temp__4425__auto___33325){
var seq__33305_33326__$1 = temp__4425__auto___33325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33305_33326__$1)){
var c__26037__auto___33327 = cljs.core.chunk_first.call(null,seq__33305_33326__$1);
var G__33328 = cljs.core.chunk_rest.call(null,seq__33305_33326__$1);
var G__33329 = c__26037__auto___33327;
var G__33330 = cljs.core.count.call(null,c__26037__auto___33327);
var G__33331 = (0);
seq__33305_33316 = G__33328;
chunk__33306_33317 = G__33329;
count__33307_33318 = G__33330;
i__33308_33319 = G__33331;
continue;
} else {
var k_33332 = cljs.core.first.call(null,seq__33305_33326__$1);
e.setAttribute(cljs.core.name.call(null,k_33332),cljs.core.get.call(null,attrs,k_33332));

var G__33333 = cljs.core.next.call(null,seq__33305_33326__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__33305_33316 = G__33333;
chunk__33306_33317 = G__33334;
count__33307_33318 = G__33335;
i__33308_33319 = G__33336;
continue;
}
} else {
}
}
break;
}

var seq__33309_33337 = cljs.core.seq.call(null,children);
var chunk__33310_33338 = null;
var count__33311_33339 = (0);
var i__33312_33340 = (0);
while(true){
if((i__33312_33340 < count__33311_33339)){
var ch_33341 = cljs.core._nth.call(null,chunk__33310_33338,i__33312_33340);
e.appendChild(ch_33341);

var G__33342 = seq__33309_33337;
var G__33343 = chunk__33310_33338;
var G__33344 = count__33311_33339;
var G__33345 = (i__33312_33340 + (1));
seq__33309_33337 = G__33342;
chunk__33310_33338 = G__33343;
count__33311_33339 = G__33344;
i__33312_33340 = G__33345;
continue;
} else {
var temp__4425__auto___33346 = cljs.core.seq.call(null,seq__33309_33337);
if(temp__4425__auto___33346){
var seq__33309_33347__$1 = temp__4425__auto___33346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33309_33347__$1)){
var c__26037__auto___33348 = cljs.core.chunk_first.call(null,seq__33309_33347__$1);
var G__33349 = cljs.core.chunk_rest.call(null,seq__33309_33347__$1);
var G__33350 = c__26037__auto___33348;
var G__33351 = cljs.core.count.call(null,c__26037__auto___33348);
var G__33352 = (0);
seq__33309_33337 = G__33349;
chunk__33310_33338 = G__33350;
count__33311_33339 = G__33351;
i__33312_33340 = G__33352;
continue;
} else {
var ch_33353 = cljs.core.first.call(null,seq__33309_33347__$1);
e.appendChild(ch_33353);

var G__33354 = cljs.core.next.call(null,seq__33309_33347__$1);
var G__33355 = null;
var G__33356 = (0);
var G__33357 = (0);
seq__33309_33337 = G__33354;
chunk__33310_33338 = G__33355;
count__33311_33339 = G__33356;
i__33312_33340 = G__33357;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33302){
var G__33303 = cljs.core.first.call(null,seq33302);
var seq33302__$1 = cljs.core.next.call(null,seq33302);
var G__33304 = cljs.core.first.call(null,seq33302__$1);
var seq33302__$2 = cljs.core.next.call(null,seq33302__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__33303,G__33304,seq33302__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26148__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26149__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26150__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26151__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26147__auto__,prefer_table__26148__auto__,method_cache__26149__auto__,cached_hierarchy__26150__auto__,hierarchy__26151__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26147__auto__,prefer_table__26148__auto__,method_cache__26149__auto__,cached_hierarchy__26150__auto__,hierarchy__26151__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26151__auto__,method_table__26147__auto__,prefer_table__26148__auto__,method_cache__26149__auto__,cached_hierarchy__26150__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_33358 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33358.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33358.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_33358.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33358);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33359,st_map){
var map__33364 = p__33359;
var map__33364__$1 = ((((!((map__33364 == null)))?((((map__33364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33364):map__33364);
var container_el = cljs.core.get.call(null,map__33364__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33364,map__33364__$1,container_el){
return (function (p__33366){
var vec__33367 = p__33366;
var k = cljs.core.nth.call(null,vec__33367,(0),null);
var v = cljs.core.nth.call(null,vec__33367,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33364,map__33364__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33368,dom_str){
var map__33371 = p__33368;
var map__33371__$1 = ((((!((map__33371 == null)))?((((map__33371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33371):map__33371);
var c = map__33371__$1;
var content_area_el = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33373){
var map__33376 = p__33373;
var map__33376__$1 = ((((!((map__33376 == null)))?((((map__33376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33376):map__33376);
var content_area_el = cljs.core.get.call(null,map__33376__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_33419){
var state_val_33420 = (state_33419[(1)]);
if((state_val_33420 === (1))){
var inst_33404 = (state_33419[(7)]);
var inst_33404__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33405 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33406 = ["10px","10px","100%","68px","1.0"];
var inst_33407 = cljs.core.PersistentHashMap.fromArrays(inst_33405,inst_33406);
var inst_33408 = cljs.core.merge.call(null,inst_33407,style);
var inst_33409 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33404__$1,inst_33408);
var inst_33410 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33404__$1,msg);
var inst_33411 = cljs.core.async.timeout.call(null,(300));
var state_33419__$1 = (function (){var statearr_33421 = state_33419;
(statearr_33421[(7)] = inst_33404__$1);

(statearr_33421[(8)] = inst_33409);

(statearr_33421[(9)] = inst_33410);

return statearr_33421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33419__$1,(2),inst_33411);
} else {
if((state_val_33420 === (2))){
var inst_33404 = (state_33419[(7)]);
var inst_33413 = (state_33419[(2)]);
var inst_33414 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33415 = ["auto"];
var inst_33416 = cljs.core.PersistentHashMap.fromArrays(inst_33414,inst_33415);
var inst_33417 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33404,inst_33416);
var state_33419__$1 = (function (){var statearr_33422 = state_33419;
(statearr_33422[(10)] = inst_33413);

return statearr_33422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33419__$1,inst_33417);
} else {
return null;
}
}
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____0 = (function (){
var statearr_33426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33426[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__);

(statearr_33426[(1)] = (1));

return statearr_33426;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____1 = (function (state_33419){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33427){if((e33427 instanceof Object)){
var ex__28423__auto__ = e33427;
var statearr_33428_33430 = state_33419;
(statearr_33428_33430[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33431 = state_33419;
state_33419 = G__33431;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__ = function(state_33419){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____1.call(this,state_33419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_33429 = f__28485__auto__.call(null);
(statearr_33429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_33429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33433 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__33433,(0),null);
var ln = cljs.core.nth.call(null,vec__33433,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33436 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33436,(0),null);
var file_line = cljs.core.nth.call(null,vec__33436,(1),null);
var file_column = cljs.core.nth.call(null,vec__33436,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33436,file_name,file_line,file_column){
return (function (p1__33434_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__33434_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__33436,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25253__auto__ = file_line;
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
var and__25241__auto__ = cause;
if(cljs.core.truth_(and__25241__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25241__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__33439 = figwheel.client.heads_up.ensure_container.call(null);
var map__33439__$1 = ((((!((map__33439 == null)))?((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33439):map__33439);
var content_area_el = cljs.core.get.call(null,map__33439__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_33487){
var state_val_33488 = (state_33487[(1)]);
if((state_val_33488 === (1))){
var inst_33470 = (state_33487[(7)]);
var inst_33470__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33471 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33472 = ["0.0"];
var inst_33473 = cljs.core.PersistentHashMap.fromArrays(inst_33471,inst_33472);
var inst_33474 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33470__$1,inst_33473);
var inst_33475 = cljs.core.async.timeout.call(null,(300));
var state_33487__$1 = (function (){var statearr_33489 = state_33487;
(statearr_33489[(8)] = inst_33474);

(statearr_33489[(7)] = inst_33470__$1);

return statearr_33489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(2),inst_33475);
} else {
if((state_val_33488 === (2))){
var inst_33470 = (state_33487[(7)]);
var inst_33477 = (state_33487[(2)]);
var inst_33478 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33479 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33480 = cljs.core.PersistentHashMap.fromArrays(inst_33478,inst_33479);
var inst_33481 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33470,inst_33480);
var inst_33482 = cljs.core.async.timeout.call(null,(200));
var state_33487__$1 = (function (){var statearr_33490 = state_33487;
(statearr_33490[(9)] = inst_33477);

(statearr_33490[(10)] = inst_33481);

return statearr_33490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33487__$1,(3),inst_33482);
} else {
if((state_val_33488 === (3))){
var inst_33470 = (state_33487[(7)]);
var inst_33484 = (state_33487[(2)]);
var inst_33485 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33470,"");
var state_33487__$1 = (function (){var statearr_33491 = state_33487;
(statearr_33491[(11)] = inst_33484);

return statearr_33491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33487__$1,inst_33485);
} else {
return null;
}
}
}
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28420__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28420__auto____0 = (function (){
var statearr_33495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33495[(0)] = figwheel$client$heads_up$clear_$_state_machine__28420__auto__);

(statearr_33495[(1)] = (1));

return statearr_33495;
});
var figwheel$client$heads_up$clear_$_state_machine__28420__auto____1 = (function (state_33487){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33496){if((e33496 instanceof Object)){
var ex__28423__auto__ = e33496;
var statearr_33497_33499 = state_33487;
(statearr_33497_33499[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33500 = state_33487;
state_33487 = G__33500;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28420__auto__ = function(state_33487){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28420__auto____1.call(this,state_33487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28420__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28420__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_33498 = f__28485__auto__.call(null);
(statearr_33498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_33498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (1))){
var inst_33522 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(2),inst_33522);
} else {
if((state_val_33533 === (2))){
var inst_33524 = (state_33532[(2)]);
var inst_33525 = cljs.core.async.timeout.call(null,(400));
var state_33532__$1 = (function (){var statearr_33534 = state_33532;
(statearr_33534[(7)] = inst_33524);

return statearr_33534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(3),inst_33525);
} else {
if((state_val_33533 === (3))){
var inst_33527 = (state_33532[(2)]);
var inst_33528 = figwheel.client.heads_up.clear.call(null);
var state_33532__$1 = (function (){var statearr_33535 = state_33532;
(statearr_33535[(8)] = inst_33527);

return statearr_33535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(4),inst_33528);
} else {
if((state_val_33533 === (4))){
var inst_33530 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33532__$1,inst_33530);
} else {
return null;
}
}
}
}
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____0 = (function (){
var statearr_33539 = [null,null,null,null,null,null,null,null,null];
(statearr_33539[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__);

(statearr_33539[(1)] = (1));

return statearr_33539;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____1 = (function (state_33532){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33540){if((e33540 instanceof Object)){
var ex__28423__auto__ = e33540;
var statearr_33541_33543 = state_33532;
(statearr_33541_33543[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33544 = state_33532;
state_33532 = G__33544;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_33542 = f__28485__auto__.call(null);
(statearr_33542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map