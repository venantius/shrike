// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38591__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38592__i = 0, G__38592__a = new Array(arguments.length -  0);
while (G__38592__i < G__38592__a.length) {G__38592__a[G__38592__i] = arguments[G__38592__i + 0]; ++G__38592__i;}
  args = new cljs.core.IndexedSeq(G__38592__a,0);
} 
return G__38591__delegate.call(this,args);};
G__38591.cljs$lang$maxFixedArity = 0;
G__38591.cljs$lang$applyTo = (function (arglist__38593){
var args = cljs.core.seq(arglist__38593);
return G__38591__delegate(args);
});
G__38591.cljs$core$IFn$_invoke$arity$variadic = G__38591__delegate;
return G__38591;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38594){
var map__38597 = p__38594;
var map__38597__$1 = ((((!((map__38597 == null)))?((((map__38597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38597):map__38597);
var message = cljs.core.get.call(null,map__38597__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38597__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25256__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25244__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25244__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25244__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32151__auto___38727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___38727,ch){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___38727,ch){
return (function (state_38701){
var state_val_38702 = (state_38701[(1)]);
if((state_val_38702 === (7))){
var inst_38697 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
var statearr_38703_38728 = state_38701__$1;
(statearr_38703_38728[(2)] = inst_38697);

(statearr_38703_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (1))){
var state_38701__$1 = state_38701;
var statearr_38704_38729 = state_38701__$1;
(statearr_38704_38729[(2)] = null);

(statearr_38704_38729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (4))){
var inst_38665 = (state_38701[(7)]);
var inst_38665__$1 = (state_38701[(2)]);
var state_38701__$1 = (function (){var statearr_38705 = state_38701;
(statearr_38705[(7)] = inst_38665__$1);

return statearr_38705;
})();
if(cljs.core.truth_(inst_38665__$1)){
var statearr_38706_38730 = state_38701__$1;
(statearr_38706_38730[(1)] = (5));

} else {
var statearr_38707_38731 = state_38701__$1;
(statearr_38707_38731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (13))){
var state_38701__$1 = state_38701;
var statearr_38708_38732 = state_38701__$1;
(statearr_38708_38732[(2)] = null);

(statearr_38708_38732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (6))){
var state_38701__$1 = state_38701;
var statearr_38709_38733 = state_38701__$1;
(statearr_38709_38733[(2)] = null);

(statearr_38709_38733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (3))){
var inst_38699 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38701__$1,inst_38699);
} else {
if((state_val_38702 === (12))){
var inst_38672 = (state_38701[(8)]);
var inst_38685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38672);
var inst_38686 = cljs.core.first.call(null,inst_38685);
var inst_38687 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38686);
var inst_38688 = console.warn("Figwheel: Not loading code with warnings - ",inst_38687);
var state_38701__$1 = state_38701;
var statearr_38710_38734 = state_38701__$1;
(statearr_38710_38734[(2)] = inst_38688);

(statearr_38710_38734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (2))){
var state_38701__$1 = state_38701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38701__$1,(4),ch);
} else {
if((state_val_38702 === (11))){
var inst_38681 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
var statearr_38711_38735 = state_38701__$1;
(statearr_38711_38735[(2)] = inst_38681);

(statearr_38711_38735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (9))){
var inst_38671 = (state_38701[(9)]);
var inst_38683 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38671,opts);
var state_38701__$1 = state_38701;
if(cljs.core.truth_(inst_38683)){
var statearr_38712_38736 = state_38701__$1;
(statearr_38712_38736[(1)] = (12));

} else {
var statearr_38713_38737 = state_38701__$1;
(statearr_38713_38737[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (5))){
var inst_38671 = (state_38701[(9)]);
var inst_38665 = (state_38701[(7)]);
var inst_38667 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38668 = (new cljs.core.PersistentArrayMap(null,2,inst_38667,null));
var inst_38669 = (new cljs.core.PersistentHashSet(null,inst_38668,null));
var inst_38670 = figwheel.client.focus_msgs.call(null,inst_38669,inst_38665);
var inst_38671__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38670);
var inst_38672 = cljs.core.first.call(null,inst_38670);
var inst_38673 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38671__$1,opts);
var state_38701__$1 = (function (){var statearr_38714 = state_38701;
(statearr_38714[(9)] = inst_38671__$1);

(statearr_38714[(8)] = inst_38672);

return statearr_38714;
})();
if(cljs.core.truth_(inst_38673)){
var statearr_38715_38738 = state_38701__$1;
(statearr_38715_38738[(1)] = (8));

} else {
var statearr_38716_38739 = state_38701__$1;
(statearr_38716_38739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (14))){
var inst_38691 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
var statearr_38717_38740 = state_38701__$1;
(statearr_38717_38740[(2)] = inst_38691);

(statearr_38717_38740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (10))){
var inst_38693 = (state_38701[(2)]);
var state_38701__$1 = (function (){var statearr_38718 = state_38701;
(statearr_38718[(10)] = inst_38693);

return statearr_38718;
})();
var statearr_38719_38741 = state_38701__$1;
(statearr_38719_38741[(2)] = null);

(statearr_38719_38741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (8))){
var inst_38672 = (state_38701[(8)]);
var inst_38675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38676 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38672);
var inst_38677 = cljs.core.async.timeout.call(null,(1000));
var inst_38678 = [inst_38676,inst_38677];
var inst_38679 = (new cljs.core.PersistentVector(null,2,(5),inst_38675,inst_38678,null));
var state_38701__$1 = state_38701;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38701__$1,(11),inst_38679);
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
});})(c__32151__auto___38727,ch))
;
return ((function (switch__32086__auto__,c__32151__auto___38727,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____0 = (function (){
var statearr_38723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38723[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__);

(statearr_38723[(1)] = (1));

return statearr_38723;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____1 = (function (state_38701){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_38701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e38724){if((e38724 instanceof Object)){
var ex__32090__auto__ = e38724;
var statearr_38725_38742 = state_38701;
(statearr_38725_38742[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38743 = state_38701;
state_38701 = G__38743;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__ = function(state_38701){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____1.call(this,state_38701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32087__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___38727,ch))
})();
var state__32153__auto__ = (function (){var statearr_38726 = f__32152__auto__.call(null);
(statearr_38726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___38727);

return statearr_38726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___38727,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38744_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38744_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_38751 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38751){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38749 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38750 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38749,_STAR_print_newline_STAR_38750,base_path_38751){
return (function() { 
var G__38752__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38753__i = 0, G__38753__a = new Array(arguments.length -  0);
while (G__38753__i < G__38753__a.length) {G__38753__a[G__38753__i] = arguments[G__38753__i + 0]; ++G__38753__i;}
  args = new cljs.core.IndexedSeq(G__38753__a,0);
} 
return G__38752__delegate.call(this,args);};
G__38752.cljs$lang$maxFixedArity = 0;
G__38752.cljs$lang$applyTo = (function (arglist__38754){
var args = cljs.core.seq(arglist__38754);
return G__38752__delegate(args);
});
G__38752.cljs$core$IFn$_invoke$arity$variadic = G__38752__delegate;
return G__38752;
})()
;})(_STAR_print_fn_STAR_38749,_STAR_print_newline_STAR_38750,base_path_38751))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38750;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38749;
}}catch (e38748){if((e38748 instanceof Error)){
var e = e38748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38751], null));
} else {
var e = e38748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38751))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38755){
var map__38762 = p__38755;
var map__38762__$1 = ((((!((map__38762 == null)))?((((map__38762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38762):map__38762);
var opts = map__38762__$1;
var build_id = cljs.core.get.call(null,map__38762__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38762,map__38762__$1,opts,build_id){
return (function (p__38764){
var vec__38765 = p__38764;
var map__38766 = cljs.core.nth.call(null,vec__38765,(0),null);
var map__38766__$1 = ((((!((map__38766 == null)))?((((map__38766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38766):map__38766);
var msg = map__38766__$1;
var msg_name = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38765,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38765,map__38766,map__38766__$1,msg,msg_name,_,map__38762,map__38762__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38765,map__38766,map__38766__$1,msg,msg_name,_,map__38762,map__38762__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38762,map__38762__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38772){
var vec__38773 = p__38772;
var map__38774 = cljs.core.nth.call(null,vec__38773,(0),null);
var map__38774__$1 = ((((!((map__38774 == null)))?((((map__38774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38774):map__38774);
var msg = map__38774__$1;
var msg_name = cljs.core.get.call(null,map__38774__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38773,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38776){
var map__38786 = p__38776;
var map__38786__$1 = ((((!((map__38786 == null)))?((((map__38786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38786):map__38786);
var on_compile_warning = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38786,map__38786__$1,on_compile_warning,on_compile_fail){
return (function (p__38788){
var vec__38789 = p__38788;
var map__38790 = cljs.core.nth.call(null,vec__38789,(0),null);
var map__38790__$1 = ((((!((map__38790 == null)))?((((map__38790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38790):map__38790);
var msg = map__38790__$1;
var msg_name = cljs.core.get.call(null,map__38790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38789,(1));
var pred__38792 = cljs.core._EQ_;
var expr__38793 = msg_name;
if(cljs.core.truth_(pred__38792.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38793))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38792.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38793))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38786,map__38786__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__,msg_hist,msg_names,msg){
return (function (state_38994){
var state_val_38995 = (state_38994[(1)]);
if((state_val_38995 === (7))){
var inst_38928 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_38996_39037 = state_38994__$1;
(statearr_38996_39037[(2)] = inst_38928);

(statearr_38996_39037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (20))){
var inst_38956 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38956)){
var statearr_38997_39038 = state_38994__$1;
(statearr_38997_39038[(1)] = (22));

} else {
var statearr_38998_39039 = state_38994__$1;
(statearr_38998_39039[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (27))){
var inst_38968 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38969 = figwheel.client.heads_up.display_warning.call(null,inst_38968);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(30),inst_38969);
} else {
if((state_val_38995 === (1))){
var inst_38916 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38916)){
var statearr_38999_39040 = state_38994__$1;
(statearr_38999_39040[(1)] = (2));

} else {
var statearr_39000_39041 = state_38994__$1;
(statearr_39000_39041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (24))){
var inst_38984 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39001_39042 = state_38994__$1;
(statearr_39001_39042[(2)] = inst_38984);

(statearr_39001_39042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (4))){
var inst_38992 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38994__$1,inst_38992);
} else {
if((state_val_38995 === (15))){
var inst_38944 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38945 = figwheel.client.format_messages.call(null,inst_38944);
var inst_38946 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38947 = figwheel.client.heads_up.display_error.call(null,inst_38945,inst_38946);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(18),inst_38947);
} else {
if((state_val_38995 === (21))){
var inst_38986 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39002_39043 = state_38994__$1;
(statearr_39002_39043[(2)] = inst_38986);

(statearr_39002_39043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (31))){
var inst_38975 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(34),inst_38975);
} else {
if((state_val_38995 === (32))){
var state_38994__$1 = state_38994;
var statearr_39003_39044 = state_38994__$1;
(statearr_39003_39044[(2)] = null);

(statearr_39003_39044[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (33))){
var inst_38980 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39004_39045 = state_38994__$1;
(statearr_39004_39045[(2)] = inst_38980);

(statearr_39004_39045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (13))){
var inst_38934 = (state_38994[(2)]);
var inst_38935 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38936 = figwheel.client.format_messages.call(null,inst_38935);
var inst_38937 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38938 = figwheel.client.heads_up.display_error.call(null,inst_38936,inst_38937);
var state_38994__$1 = (function (){var statearr_39005 = state_38994;
(statearr_39005[(7)] = inst_38934);

return statearr_39005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(14),inst_38938);
} else {
if((state_val_38995 === (22))){
var inst_38958 = figwheel.client.heads_up.clear.call(null);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(25),inst_38958);
} else {
if((state_val_38995 === (29))){
var inst_38982 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39006_39046 = state_38994__$1;
(statearr_39006_39046[(2)] = inst_38982);

(statearr_39006_39046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (6))){
var inst_38924 = figwheel.client.heads_up.clear.call(null);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(9),inst_38924);
} else {
if((state_val_38995 === (28))){
var inst_38973 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38973)){
var statearr_39007_39047 = state_38994__$1;
(statearr_39007_39047[(1)] = (31));

} else {
var statearr_39008_39048 = state_38994__$1;
(statearr_39008_39048[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (25))){
var inst_38960 = (state_38994[(2)]);
var inst_38961 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38962 = figwheel.client.heads_up.display_warning.call(null,inst_38961);
var state_38994__$1 = (function (){var statearr_39009 = state_38994;
(statearr_39009[(8)] = inst_38960);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(26),inst_38962);
} else {
if((state_val_38995 === (34))){
var inst_38977 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39010_39049 = state_38994__$1;
(statearr_39010_39049[(2)] = inst_38977);

(statearr_39010_39049[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (17))){
var inst_38988 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39011_39050 = state_38994__$1;
(statearr_39011_39050[(2)] = inst_38988);

(statearr_39011_39050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (3))){
var inst_38930 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38930)){
var statearr_39012_39051 = state_38994__$1;
(statearr_39012_39051[(1)] = (10));

} else {
var statearr_39013_39052 = state_38994__$1;
(statearr_39013_39052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (12))){
var inst_38990 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39014_39053 = state_38994__$1;
(statearr_39014_39053[(2)] = inst_38990);

(statearr_39014_39053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (2))){
var inst_38918 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38918)){
var statearr_39015_39054 = state_38994__$1;
(statearr_39015_39054[(1)] = (5));

} else {
var statearr_39016_39055 = state_38994__$1;
(statearr_39016_39055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (23))){
var inst_38966 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38966)){
var statearr_39017_39056 = state_38994__$1;
(statearr_39017_39056[(1)] = (27));

} else {
var statearr_39018_39057 = state_38994__$1;
(statearr_39018_39057[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (19))){
var inst_38953 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38954 = figwheel.client.heads_up.append_message.call(null,inst_38953);
var state_38994__$1 = state_38994;
var statearr_39019_39058 = state_38994__$1;
(statearr_39019_39058[(2)] = inst_38954);

(statearr_39019_39058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (11))){
var inst_38942 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38942)){
var statearr_39020_39059 = state_38994__$1;
(statearr_39020_39059[(1)] = (15));

} else {
var statearr_39021_39060 = state_38994__$1;
(statearr_39021_39060[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (9))){
var inst_38926 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39022_39061 = state_38994__$1;
(statearr_39022_39061[(2)] = inst_38926);

(statearr_39022_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (5))){
var inst_38920 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(8),inst_38920);
} else {
if((state_val_38995 === (14))){
var inst_38940 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39023_39062 = state_38994__$1;
(statearr_39023_39062[(2)] = inst_38940);

(statearr_39023_39062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (26))){
var inst_38964 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39024_39063 = state_38994__$1;
(statearr_39024_39063[(2)] = inst_38964);

(statearr_39024_39063[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (16))){
var inst_38951 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38951)){
var statearr_39025_39064 = state_38994__$1;
(statearr_39025_39064[(1)] = (19));

} else {
var statearr_39026_39065 = state_38994__$1;
(statearr_39026_39065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (30))){
var inst_38971 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39027_39066 = state_38994__$1;
(statearr_39027_39066[(2)] = inst_38971);

(statearr_39027_39066[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (10))){
var inst_38932 = figwheel.client.heads_up.clear.call(null);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38994__$1,(13),inst_38932);
} else {
if((state_val_38995 === (18))){
var inst_38949 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39028_39067 = state_38994__$1;
(statearr_39028_39067[(2)] = inst_38949);

(statearr_39028_39067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (8))){
var inst_38922 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39029_39068 = state_38994__$1;
(statearr_39029_39068[(2)] = inst_38922);

(statearr_39029_39068[(1)] = (7));


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
});})(c__32151__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32086__auto__,c__32151__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____0 = (function (){
var statearr_39033 = [null,null,null,null,null,null,null,null,null];
(statearr_39033[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__);

(statearr_39033[(1)] = (1));

return statearr_39033;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____1 = (function (state_38994){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_38994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e39034){if((e39034 instanceof Object)){
var ex__32090__auto__ = e39034;
var statearr_39035_39069 = state_38994;
(statearr_39035_39069[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39070 = state_38994;
state_38994 = G__39070;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__ = function(state_38994){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____1.call(this,state_38994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__,msg_hist,msg_names,msg))
})();
var state__32153__auto__ = (function (){var statearr_39036 = f__32152__auto__.call(null);
(statearr_39036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_39036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__,msg_hist,msg_names,msg))
);

return c__32151__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32151__auto___39133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___39133,ch){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___39133,ch){
return (function (state_39116){
var state_val_39117 = (state_39116[(1)]);
if((state_val_39117 === (1))){
var state_39116__$1 = state_39116;
var statearr_39118_39134 = state_39116__$1;
(statearr_39118_39134[(2)] = null);

(statearr_39118_39134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39117 === (2))){
var state_39116__$1 = state_39116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39116__$1,(4),ch);
} else {
if((state_val_39117 === (3))){
var inst_39114 = (state_39116[(2)]);
var state_39116__$1 = state_39116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39116__$1,inst_39114);
} else {
if((state_val_39117 === (4))){
var inst_39104 = (state_39116[(7)]);
var inst_39104__$1 = (state_39116[(2)]);
var state_39116__$1 = (function (){var statearr_39119 = state_39116;
(statearr_39119[(7)] = inst_39104__$1);

return statearr_39119;
})();
if(cljs.core.truth_(inst_39104__$1)){
var statearr_39120_39135 = state_39116__$1;
(statearr_39120_39135[(1)] = (5));

} else {
var statearr_39121_39136 = state_39116__$1;
(statearr_39121_39136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39117 === (5))){
var inst_39104 = (state_39116[(7)]);
var inst_39106 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39104);
var state_39116__$1 = state_39116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39116__$1,(8),inst_39106);
} else {
if((state_val_39117 === (6))){
var state_39116__$1 = state_39116;
var statearr_39122_39137 = state_39116__$1;
(statearr_39122_39137[(2)] = null);

(statearr_39122_39137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39117 === (7))){
var inst_39112 = (state_39116[(2)]);
var state_39116__$1 = state_39116;
var statearr_39123_39138 = state_39116__$1;
(statearr_39123_39138[(2)] = inst_39112);

(statearr_39123_39138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39117 === (8))){
var inst_39108 = (state_39116[(2)]);
var state_39116__$1 = (function (){var statearr_39124 = state_39116;
(statearr_39124[(8)] = inst_39108);

return statearr_39124;
})();
var statearr_39125_39139 = state_39116__$1;
(statearr_39125_39139[(2)] = null);

(statearr_39125_39139[(1)] = (2));


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
});})(c__32151__auto___39133,ch))
;
return ((function (switch__32086__auto__,c__32151__auto___39133,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32087__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32087__auto____0 = (function (){
var statearr_39129 = [null,null,null,null,null,null,null,null,null];
(statearr_39129[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32087__auto__);

(statearr_39129[(1)] = (1));

return statearr_39129;
});
var figwheel$client$heads_up_plugin_$_state_machine__32087__auto____1 = (function (state_39116){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_39116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e39130){if((e39130 instanceof Object)){
var ex__32090__auto__ = e39130;
var statearr_39131_39140 = state_39116;
(statearr_39131_39140[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39141 = state_39116;
state_39116 = G__39141;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32087__auto__ = function(state_39116){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32087__auto____1.call(this,state_39116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32087__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32087__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___39133,ch))
})();
var state__32153__auto__ = (function (){var statearr_39132 = f__32152__auto__.call(null);
(statearr_39132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___39133);

return statearr_39132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___39133,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__){
return (function (state_39162){
var state_val_39163 = (state_39162[(1)]);
if((state_val_39163 === (1))){
var inst_39157 = cljs.core.async.timeout.call(null,(3000));
var state_39162__$1 = state_39162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39162__$1,(2),inst_39157);
} else {
if((state_val_39163 === (2))){
var inst_39159 = (state_39162[(2)]);
var inst_39160 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39162__$1 = (function (){var statearr_39164 = state_39162;
(statearr_39164[(7)] = inst_39159);

return statearr_39164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39162__$1,inst_39160);
} else {
return null;
}
}
});})(c__32151__auto__))
;
return ((function (switch__32086__auto__,c__32151__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____0 = (function (){
var statearr_39168 = [null,null,null,null,null,null,null,null];
(statearr_39168[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__);

(statearr_39168[(1)] = (1));

return statearr_39168;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____1 = (function (state_39162){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_39162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e39169){if((e39169 instanceof Object)){
var ex__32090__auto__ = e39169;
var statearr_39170_39172 = state_39162;
(statearr_39170_39172[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39173 = state_39162;
state_39162 = G__39173;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__ = function(state_39162){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____1.call(this,state_39162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32087__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__))
})();
var state__32153__auto__ = (function (){var statearr_39171 = f__32152__auto__.call(null);
(statearr_39171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_39171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__))
);

return c__32151__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39174){
var map__39181 = p__39174;
var map__39181__$1 = ((((!((map__39181 == null)))?((((map__39181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39181):map__39181);
var ed = map__39181__$1;
var formatted_exception = cljs.core.get.call(null,map__39181__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39181__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39181__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39183_39187 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39184_39188 = null;
var count__39185_39189 = (0);
var i__39186_39190 = (0);
while(true){
if((i__39186_39190 < count__39185_39189)){
var msg_39191 = cljs.core._nth.call(null,chunk__39184_39188,i__39186_39190);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39191);

var G__39192 = seq__39183_39187;
var G__39193 = chunk__39184_39188;
var G__39194 = count__39185_39189;
var G__39195 = (i__39186_39190 + (1));
seq__39183_39187 = G__39192;
chunk__39184_39188 = G__39193;
count__39185_39189 = G__39194;
i__39186_39190 = G__39195;
continue;
} else {
var temp__4425__auto___39196 = cljs.core.seq.call(null,seq__39183_39187);
if(temp__4425__auto___39196){
var seq__39183_39197__$1 = temp__4425__auto___39196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39183_39197__$1)){
var c__26040__auto___39198 = cljs.core.chunk_first.call(null,seq__39183_39197__$1);
var G__39199 = cljs.core.chunk_rest.call(null,seq__39183_39197__$1);
var G__39200 = c__26040__auto___39198;
var G__39201 = cljs.core.count.call(null,c__26040__auto___39198);
var G__39202 = (0);
seq__39183_39187 = G__39199;
chunk__39184_39188 = G__39200;
count__39185_39189 = G__39201;
i__39186_39190 = G__39202;
continue;
} else {
var msg_39203 = cljs.core.first.call(null,seq__39183_39197__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39203);

var G__39204 = cljs.core.next.call(null,seq__39183_39197__$1);
var G__39205 = null;
var G__39206 = (0);
var G__39207 = (0);
seq__39183_39187 = G__39204;
chunk__39184_39188 = G__39205;
count__39185_39189 = G__39206;
i__39186_39190 = G__39207;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39208){
var map__39211 = p__39208;
var map__39211__$1 = ((((!((map__39211 == null)))?((((map__39211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39211):map__39211);
var w = map__39211__$1;
var message = cljs.core.get.call(null,map__39211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25244__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25244__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25244__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39219 = cljs.core.seq.call(null,plugins);
var chunk__39220 = null;
var count__39221 = (0);
var i__39222 = (0);
while(true){
if((i__39222 < count__39221)){
var vec__39223 = cljs.core._nth.call(null,chunk__39220,i__39222);
var k = cljs.core.nth.call(null,vec__39223,(0),null);
var plugin = cljs.core.nth.call(null,vec__39223,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39225 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39219,chunk__39220,count__39221,i__39222,pl_39225,vec__39223,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39225.call(null,msg_hist);
});})(seq__39219,chunk__39220,count__39221,i__39222,pl_39225,vec__39223,k,plugin))
);
} else {
}

var G__39226 = seq__39219;
var G__39227 = chunk__39220;
var G__39228 = count__39221;
var G__39229 = (i__39222 + (1));
seq__39219 = G__39226;
chunk__39220 = G__39227;
count__39221 = G__39228;
i__39222 = G__39229;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39219);
if(temp__4425__auto__){
var seq__39219__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39219__$1)){
var c__26040__auto__ = cljs.core.chunk_first.call(null,seq__39219__$1);
var G__39230 = cljs.core.chunk_rest.call(null,seq__39219__$1);
var G__39231 = c__26040__auto__;
var G__39232 = cljs.core.count.call(null,c__26040__auto__);
var G__39233 = (0);
seq__39219 = G__39230;
chunk__39220 = G__39231;
count__39221 = G__39232;
i__39222 = G__39233;
continue;
} else {
var vec__39224 = cljs.core.first.call(null,seq__39219__$1);
var k = cljs.core.nth.call(null,vec__39224,(0),null);
var plugin = cljs.core.nth.call(null,vec__39224,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39234 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39219,chunk__39220,count__39221,i__39222,pl_39234,vec__39224,k,plugin,seq__39219__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39234.call(null,msg_hist);
});})(seq__39219,chunk__39220,count__39221,i__39222,pl_39234,vec__39224,k,plugin,seq__39219__$1,temp__4425__auto__))
);
} else {
}

var G__39235 = cljs.core.next.call(null,seq__39219__$1);
var G__39236 = null;
var G__39237 = (0);
var G__39238 = (0);
seq__39219 = G__39235;
chunk__39220 = G__39236;
count__39221 = G__39237;
i__39222 = G__39238;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args39239 = [];
var len__26295__auto___39242 = arguments.length;
var i__26296__auto___39243 = (0);
while(true){
if((i__26296__auto___39243 < len__26295__auto___39242)){
args39239.push((arguments[i__26296__auto___39243]));

var G__39244 = (i__26296__auto___39243 + (1));
i__26296__auto___39243 = G__39244;
continue;
} else {
}
break;
}

var G__39241 = args39239.length;
switch (G__39241) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39239.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__26302__auto__ = [];
var len__26295__auto___39250 = arguments.length;
var i__26296__auto___39251 = (0);
while(true){
if((i__26296__auto___39251 < len__26295__auto___39250)){
args__26302__auto__.push((arguments[i__26296__auto___39251]));

var G__39252 = (i__26296__auto___39251 + (1));
i__26296__auto___39251 = G__39252;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((0) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26303__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39247){
var map__39248 = p__39247;
var map__39248__$1 = ((((!((map__39248 == null)))?((((map__39248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39248):map__39248);
var opts = map__39248__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39246){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39246));
});

//# sourceMappingURL=client.js.map