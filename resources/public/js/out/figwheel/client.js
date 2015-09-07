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
var G__32512__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32513__i = 0, G__32513__a = new Array(arguments.length -  0);
while (G__32513__i < G__32513__a.length) {G__32513__a[G__32513__i] = arguments[G__32513__i + 0]; ++G__32513__i;}
  args = new cljs.core.IndexedSeq(G__32513__a,0);
} 
return G__32512__delegate.call(this,args);};
G__32512.cljs$lang$maxFixedArity = 0;
G__32512.cljs$lang$applyTo = (function (arglist__32514){
var args = cljs.core.seq(arglist__32514);
return G__32512__delegate(args);
});
G__32512.cljs$core$IFn$_invoke$arity$variadic = G__32512__delegate;
return G__32512;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32515){
var map__32518 = p__32515;
var map__32518__$1 = ((((!((map__32518 == null)))?((((map__32518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32518):map__32518);
var message = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25253__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25241__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25241__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25241__auto__;
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
var c__28484__auto___32648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___32648,ch){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___32648,ch){
return (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32618 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32624_32649 = state_32622__$1;
(statearr_32624_32649[(2)] = inst_32618);

(statearr_32624_32649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var state_32622__$1 = state_32622;
var statearr_32625_32650 = state_32622__$1;
(statearr_32625_32650[(2)] = null);

(statearr_32625_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32586 = (state_32622[(7)]);
var inst_32586__$1 = (state_32622[(2)]);
var state_32622__$1 = (function (){var statearr_32626 = state_32622;
(statearr_32626[(7)] = inst_32586__$1);

return statearr_32626;
})();
if(cljs.core.truth_(inst_32586__$1)){
var statearr_32627_32651 = state_32622__$1;
(statearr_32627_32651[(1)] = (5));

} else {
var statearr_32628_32652 = state_32622__$1;
(statearr_32628_32652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (13))){
var state_32622__$1 = state_32622;
var statearr_32629_32653 = state_32622__$1;
(statearr_32629_32653[(2)] = null);

(statearr_32629_32653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var state_32622__$1 = state_32622;
var statearr_32630_32654 = state_32622__$1;
(statearr_32630_32654[(2)] = null);

(statearr_32630_32654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (3))){
var inst_32620 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32622__$1,inst_32620);
} else {
if((state_val_32623 === (12))){
var inst_32593 = (state_32622[(8)]);
var inst_32606 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32593);
var inst_32607 = cljs.core.first.call(null,inst_32606);
var inst_32608 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32607);
var inst_32609 = console.warn("Figwheel: Not loading code with warnings - ",inst_32608);
var state_32622__$1 = state_32622;
var statearr_32631_32655 = state_32622__$1;
(statearr_32631_32655[(2)] = inst_32609);

(statearr_32631_32655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32622__$1,(4),ch);
} else {
if((state_val_32623 === (11))){
var inst_32602 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32632_32656 = state_32622__$1;
(statearr_32632_32656[(2)] = inst_32602);

(statearr_32632_32656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var inst_32592 = (state_32622[(9)]);
var inst_32604 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32592,opts);
var state_32622__$1 = state_32622;
if(cljs.core.truth_(inst_32604)){
var statearr_32633_32657 = state_32622__$1;
(statearr_32633_32657[(1)] = (12));

} else {
var statearr_32634_32658 = state_32622__$1;
(statearr_32634_32658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (5))){
var inst_32586 = (state_32622[(7)]);
var inst_32592 = (state_32622[(9)]);
var inst_32588 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32589 = (new cljs.core.PersistentArrayMap(null,2,inst_32588,null));
var inst_32590 = (new cljs.core.PersistentHashSet(null,inst_32589,null));
var inst_32591 = figwheel.client.focus_msgs.call(null,inst_32590,inst_32586);
var inst_32592__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32591);
var inst_32593 = cljs.core.first.call(null,inst_32591);
var inst_32594 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32592__$1,opts);
var state_32622__$1 = (function (){var statearr_32635 = state_32622;
(statearr_32635[(8)] = inst_32593);

(statearr_32635[(9)] = inst_32592__$1);

return statearr_32635;
})();
if(cljs.core.truth_(inst_32594)){
var statearr_32636_32659 = state_32622__$1;
(statearr_32636_32659[(1)] = (8));

} else {
var statearr_32637_32660 = state_32622__$1;
(statearr_32637_32660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (14))){
var inst_32612 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32638_32661 = state_32622__$1;
(statearr_32638_32661[(2)] = inst_32612);

(statearr_32638_32661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32614 = (state_32622[(2)]);
var state_32622__$1 = (function (){var statearr_32639 = state_32622;
(statearr_32639[(10)] = inst_32614);

return statearr_32639;
})();
var statearr_32640_32662 = state_32622__$1;
(statearr_32640_32662[(2)] = null);

(statearr_32640_32662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32593 = (state_32622[(8)]);
var inst_32596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32597 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32593);
var inst_32598 = cljs.core.async.timeout.call(null,(1000));
var inst_32599 = [inst_32597,inst_32598];
var inst_32600 = (new cljs.core.PersistentVector(null,2,(5),inst_32596,inst_32599,null));
var state_32622__$1 = state_32622;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32622__$1,(11),inst_32600);
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
});})(c__28484__auto___32648,ch))
;
return ((function (switch__28419__auto__,c__28484__auto___32648,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____0 = (function (){
var statearr_32644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32644[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__);

(statearr_32644[(1)] = (1));

return statearr_32644;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____1 = (function (state_32622){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_32622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e32645){if((e32645 instanceof Object)){
var ex__28423__auto__ = e32645;
var statearr_32646_32663 = state_32622;
(statearr_32646_32663[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32664 = state_32622;
state_32622 = G__32664;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28420__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___32648,ch))
})();
var state__28486__auto__ = (function (){var statearr_32647 = f__28485__auto__.call(null);
(statearr_32647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___32648);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___32648,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32665_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32665_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32672 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32672){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32671 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32670,_STAR_print_newline_STAR_32671,base_path_32672){
return (function() { 
var G__32673__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32674__i = 0, G__32674__a = new Array(arguments.length -  0);
while (G__32674__i < G__32674__a.length) {G__32674__a[G__32674__i] = arguments[G__32674__i + 0]; ++G__32674__i;}
  args = new cljs.core.IndexedSeq(G__32674__a,0);
} 
return G__32673__delegate.call(this,args);};
G__32673.cljs$lang$maxFixedArity = 0;
G__32673.cljs$lang$applyTo = (function (arglist__32675){
var args = cljs.core.seq(arglist__32675);
return G__32673__delegate(args);
});
G__32673.cljs$core$IFn$_invoke$arity$variadic = G__32673__delegate;
return G__32673;
})()
;})(_STAR_print_fn_STAR_32670,_STAR_print_newline_STAR_32671,base_path_32672))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32671;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32670;
}}catch (e32669){if((e32669 instanceof Error)){
var e = e32669;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32672], null));
} else {
var e = e32669;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32672))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32676){
var map__32683 = p__32676;
var map__32683__$1 = ((((!((map__32683 == null)))?((((map__32683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32683):map__32683);
var opts = map__32683__$1;
var build_id = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32683,map__32683__$1,opts,build_id){
return (function (p__32685){
var vec__32686 = p__32685;
var map__32687 = cljs.core.nth.call(null,vec__32686,(0),null);
var map__32687__$1 = ((((!((map__32687 == null)))?((((map__32687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32687):map__32687);
var msg = map__32687__$1;
var msg_name = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32686,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32686,map__32687,map__32687__$1,msg,msg_name,_,map__32683,map__32683__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32686,map__32687,map__32687__$1,msg,msg_name,_,map__32683,map__32683__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32683,map__32683__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32693){
var vec__32694 = p__32693;
var map__32695 = cljs.core.nth.call(null,vec__32694,(0),null);
var map__32695__$1 = ((((!((map__32695 == null)))?((((map__32695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32695):map__32695);
var msg = map__32695__$1;
var msg_name = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32694,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32697){
var map__32707 = p__32697;
var map__32707__$1 = ((((!((map__32707 == null)))?((((map__32707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32707):map__32707);
var on_compile_warning = cljs.core.get.call(null,map__32707__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32707__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32707,map__32707__$1,on_compile_warning,on_compile_fail){
return (function (p__32709){
var vec__32710 = p__32709;
var map__32711 = cljs.core.nth.call(null,vec__32710,(0),null);
var map__32711__$1 = ((((!((map__32711 == null)))?((((map__32711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32711):map__32711);
var msg = map__32711__$1;
var msg_name = cljs.core.get.call(null,map__32711__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32710,(1));
var pred__32713 = cljs.core._EQ_;
var expr__32714 = msg_name;
if(cljs.core.truth_(pred__32713.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32714))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32713.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32714))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32707,map__32707__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__,msg_hist,msg_names,msg){
return (function (state_32915){
var state_val_32916 = (state_32915[(1)]);
if((state_val_32916 === (7))){
var inst_32849 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32917_32958 = state_32915__$1;
(statearr_32917_32958[(2)] = inst_32849);

(statearr_32917_32958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (20))){
var inst_32877 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32877)){
var statearr_32918_32959 = state_32915__$1;
(statearr_32918_32959[(1)] = (22));

} else {
var statearr_32919_32960 = state_32915__$1;
(statearr_32919_32960[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (27))){
var inst_32889 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32890 = figwheel.client.heads_up.display_warning.call(null,inst_32889);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(30),inst_32890);
} else {
if((state_val_32916 === (1))){
var inst_32837 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32837)){
var statearr_32920_32961 = state_32915__$1;
(statearr_32920_32961[(1)] = (2));

} else {
var statearr_32921_32962 = state_32915__$1;
(statearr_32921_32962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (24))){
var inst_32905 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32922_32963 = state_32915__$1;
(statearr_32922_32963[(2)] = inst_32905);

(statearr_32922_32963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (4))){
var inst_32913 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32915__$1,inst_32913);
} else {
if((state_val_32916 === (15))){
var inst_32865 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32866 = figwheel.client.format_messages.call(null,inst_32865);
var inst_32867 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32868 = figwheel.client.heads_up.display_error.call(null,inst_32866,inst_32867);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(18),inst_32868);
} else {
if((state_val_32916 === (21))){
var inst_32907 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32923_32964 = state_32915__$1;
(statearr_32923_32964[(2)] = inst_32907);

(statearr_32923_32964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (31))){
var inst_32896 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(34),inst_32896);
} else {
if((state_val_32916 === (32))){
var state_32915__$1 = state_32915;
var statearr_32924_32965 = state_32915__$1;
(statearr_32924_32965[(2)] = null);

(statearr_32924_32965[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (33))){
var inst_32901 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32925_32966 = state_32915__$1;
(statearr_32925_32966[(2)] = inst_32901);

(statearr_32925_32966[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (13))){
var inst_32855 = (state_32915[(2)]);
var inst_32856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32857 = figwheel.client.format_messages.call(null,inst_32856);
var inst_32858 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32859 = figwheel.client.heads_up.display_error.call(null,inst_32857,inst_32858);
var state_32915__$1 = (function (){var statearr_32926 = state_32915;
(statearr_32926[(7)] = inst_32855);

return statearr_32926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(14),inst_32859);
} else {
if((state_val_32916 === (22))){
var inst_32879 = figwheel.client.heads_up.clear.call(null);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(25),inst_32879);
} else {
if((state_val_32916 === (29))){
var inst_32903 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32927_32967 = state_32915__$1;
(statearr_32927_32967[(2)] = inst_32903);

(statearr_32927_32967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (6))){
var inst_32845 = figwheel.client.heads_up.clear.call(null);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(9),inst_32845);
} else {
if((state_val_32916 === (28))){
var inst_32894 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32894)){
var statearr_32928_32968 = state_32915__$1;
(statearr_32928_32968[(1)] = (31));

} else {
var statearr_32929_32969 = state_32915__$1;
(statearr_32929_32969[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (25))){
var inst_32881 = (state_32915[(2)]);
var inst_32882 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32883 = figwheel.client.heads_up.display_warning.call(null,inst_32882);
var state_32915__$1 = (function (){var statearr_32930 = state_32915;
(statearr_32930[(8)] = inst_32881);

return statearr_32930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(26),inst_32883);
} else {
if((state_val_32916 === (34))){
var inst_32898 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32931_32970 = state_32915__$1;
(statearr_32931_32970[(2)] = inst_32898);

(statearr_32931_32970[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (17))){
var inst_32909 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32932_32971 = state_32915__$1;
(statearr_32932_32971[(2)] = inst_32909);

(statearr_32932_32971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (3))){
var inst_32851 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32851)){
var statearr_32933_32972 = state_32915__$1;
(statearr_32933_32972[(1)] = (10));

} else {
var statearr_32934_32973 = state_32915__$1;
(statearr_32934_32973[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (12))){
var inst_32911 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32935_32974 = state_32915__$1;
(statearr_32935_32974[(2)] = inst_32911);

(statearr_32935_32974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (2))){
var inst_32839 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32839)){
var statearr_32936_32975 = state_32915__$1;
(statearr_32936_32975[(1)] = (5));

} else {
var statearr_32937_32976 = state_32915__$1;
(statearr_32937_32976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (23))){
var inst_32887 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32887)){
var statearr_32938_32977 = state_32915__$1;
(statearr_32938_32977[(1)] = (27));

} else {
var statearr_32939_32978 = state_32915__$1;
(statearr_32939_32978[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (19))){
var inst_32874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32875 = figwheel.client.heads_up.append_message.call(null,inst_32874);
var state_32915__$1 = state_32915;
var statearr_32940_32979 = state_32915__$1;
(statearr_32940_32979[(2)] = inst_32875);

(statearr_32940_32979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (11))){
var inst_32863 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32863)){
var statearr_32941_32980 = state_32915__$1;
(statearr_32941_32980[(1)] = (15));

} else {
var statearr_32942_32981 = state_32915__$1;
(statearr_32942_32981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (9))){
var inst_32847 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32943_32982 = state_32915__$1;
(statearr_32943_32982[(2)] = inst_32847);

(statearr_32943_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (5))){
var inst_32841 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(8),inst_32841);
} else {
if((state_val_32916 === (14))){
var inst_32861 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32944_32983 = state_32915__$1;
(statearr_32944_32983[(2)] = inst_32861);

(statearr_32944_32983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (26))){
var inst_32885 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32945_32984 = state_32915__$1;
(statearr_32945_32984[(2)] = inst_32885);

(statearr_32945_32984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (16))){
var inst_32872 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32872)){
var statearr_32946_32985 = state_32915__$1;
(statearr_32946_32985[(1)] = (19));

} else {
var statearr_32947_32986 = state_32915__$1;
(statearr_32947_32986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (30))){
var inst_32892 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32948_32987 = state_32915__$1;
(statearr_32948_32987[(2)] = inst_32892);

(statearr_32948_32987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (10))){
var inst_32853 = figwheel.client.heads_up.clear.call(null);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(13),inst_32853);
} else {
if((state_val_32916 === (18))){
var inst_32870 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32949_32988 = state_32915__$1;
(statearr_32949_32988[(2)] = inst_32870);

(statearr_32949_32988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (8))){
var inst_32843 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32950_32989 = state_32915__$1;
(statearr_32950_32989[(2)] = inst_32843);

(statearr_32950_32989[(1)] = (7));


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
});})(c__28484__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28419__auto__,c__28484__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____0 = (function (){
var statearr_32954 = [null,null,null,null,null,null,null,null,null];
(statearr_32954[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__);

(statearr_32954[(1)] = (1));

return statearr_32954;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____1 = (function (state_32915){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_32915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e32955){if((e32955 instanceof Object)){
var ex__28423__auto__ = e32955;
var statearr_32956_32990 = state_32915;
(statearr_32956_32990[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32991 = state_32915;
state_32915 = G__32991;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__ = function(state_32915){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____1.call(this,state_32915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__,msg_hist,msg_names,msg))
})();
var state__28486__auto__ = (function (){var statearr_32957 = f__28485__auto__.call(null);
(statearr_32957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_32957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__,msg_hist,msg_names,msg))
);

return c__28484__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28484__auto___33054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___33054,ch){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___33054,ch){
return (function (state_33037){
var state_val_33038 = (state_33037[(1)]);
if((state_val_33038 === (1))){
var state_33037__$1 = state_33037;
var statearr_33039_33055 = state_33037__$1;
(statearr_33039_33055[(2)] = null);

(statearr_33039_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (2))){
var state_33037__$1 = state_33037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33037__$1,(4),ch);
} else {
if((state_val_33038 === (3))){
var inst_33035 = (state_33037[(2)]);
var state_33037__$1 = state_33037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33037__$1,inst_33035);
} else {
if((state_val_33038 === (4))){
var inst_33025 = (state_33037[(7)]);
var inst_33025__$1 = (state_33037[(2)]);
var state_33037__$1 = (function (){var statearr_33040 = state_33037;
(statearr_33040[(7)] = inst_33025__$1);

return statearr_33040;
})();
if(cljs.core.truth_(inst_33025__$1)){
var statearr_33041_33056 = state_33037__$1;
(statearr_33041_33056[(1)] = (5));

} else {
var statearr_33042_33057 = state_33037__$1;
(statearr_33042_33057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (5))){
var inst_33025 = (state_33037[(7)]);
var inst_33027 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33025);
var state_33037__$1 = state_33037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33037__$1,(8),inst_33027);
} else {
if((state_val_33038 === (6))){
var state_33037__$1 = state_33037;
var statearr_33043_33058 = state_33037__$1;
(statearr_33043_33058[(2)] = null);

(statearr_33043_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (7))){
var inst_33033 = (state_33037[(2)]);
var state_33037__$1 = state_33037;
var statearr_33044_33059 = state_33037__$1;
(statearr_33044_33059[(2)] = inst_33033);

(statearr_33044_33059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (8))){
var inst_33029 = (state_33037[(2)]);
var state_33037__$1 = (function (){var statearr_33045 = state_33037;
(statearr_33045[(8)] = inst_33029);

return statearr_33045;
})();
var statearr_33046_33060 = state_33037__$1;
(statearr_33046_33060[(2)] = null);

(statearr_33046_33060[(1)] = (2));


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
});})(c__28484__auto___33054,ch))
;
return ((function (switch__28419__auto__,c__28484__auto___33054,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28420__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28420__auto____0 = (function (){
var statearr_33050 = [null,null,null,null,null,null,null,null,null];
(statearr_33050[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28420__auto__);

(statearr_33050[(1)] = (1));

return statearr_33050;
});
var figwheel$client$heads_up_plugin_$_state_machine__28420__auto____1 = (function (state_33037){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33051){if((e33051 instanceof Object)){
var ex__28423__auto__ = e33051;
var statearr_33052_33061 = state_33037;
(statearr_33052_33061[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33062 = state_33037;
state_33037 = G__33062;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28420__auto__ = function(state_33037){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28420__auto____1.call(this,state_33037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28420__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28420__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___33054,ch))
})();
var state__28486__auto__ = (function (){var statearr_33053 = f__28485__auto__.call(null);
(statearr_33053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___33054);

return statearr_33053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___33054,ch))
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
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_33083){
var state_val_33084 = (state_33083[(1)]);
if((state_val_33084 === (1))){
var inst_33078 = cljs.core.async.timeout.call(null,(3000));
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33083__$1,(2),inst_33078);
} else {
if((state_val_33084 === (2))){
var inst_33080 = (state_33083[(2)]);
var inst_33081 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33083__$1 = (function (){var statearr_33085 = state_33083;
(statearr_33085[(7)] = inst_33080);

return statearr_33085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33083__$1,inst_33081);
} else {
return null;
}
}
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____0 = (function (){
var statearr_33089 = [null,null,null,null,null,null,null,null];
(statearr_33089[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__);

(statearr_33089[(1)] = (1));

return statearr_33089;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____1 = (function (state_33083){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_33083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e33090){if((e33090 instanceof Object)){
var ex__28423__auto__ = e33090;
var statearr_33091_33093 = state_33083;
(statearr_33091_33093[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33094 = state_33083;
state_33083 = G__33094;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__ = function(state_33083){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____1.call(this,state_33083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28420__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_33092 = f__28485__auto__.call(null);
(statearr_33092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33095){
var map__33102 = p__33095;
var map__33102__$1 = ((((!((map__33102 == null)))?((((map__33102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33102):map__33102);
var ed = map__33102__$1;
var formatted_exception = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33102__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33104_33108 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33105_33109 = null;
var count__33106_33110 = (0);
var i__33107_33111 = (0);
while(true){
if((i__33107_33111 < count__33106_33110)){
var msg_33112 = cljs.core._nth.call(null,chunk__33105_33109,i__33107_33111);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33112);

var G__33113 = seq__33104_33108;
var G__33114 = chunk__33105_33109;
var G__33115 = count__33106_33110;
var G__33116 = (i__33107_33111 + (1));
seq__33104_33108 = G__33113;
chunk__33105_33109 = G__33114;
count__33106_33110 = G__33115;
i__33107_33111 = G__33116;
continue;
} else {
var temp__4425__auto___33117 = cljs.core.seq.call(null,seq__33104_33108);
if(temp__4425__auto___33117){
var seq__33104_33118__$1 = temp__4425__auto___33117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33104_33118__$1)){
var c__26037__auto___33119 = cljs.core.chunk_first.call(null,seq__33104_33118__$1);
var G__33120 = cljs.core.chunk_rest.call(null,seq__33104_33118__$1);
var G__33121 = c__26037__auto___33119;
var G__33122 = cljs.core.count.call(null,c__26037__auto___33119);
var G__33123 = (0);
seq__33104_33108 = G__33120;
chunk__33105_33109 = G__33121;
count__33106_33110 = G__33122;
i__33107_33111 = G__33123;
continue;
} else {
var msg_33124 = cljs.core.first.call(null,seq__33104_33118__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33124);

var G__33125 = cljs.core.next.call(null,seq__33104_33118__$1);
var G__33126 = null;
var G__33127 = (0);
var G__33128 = (0);
seq__33104_33108 = G__33125;
chunk__33105_33109 = G__33126;
count__33106_33110 = G__33127;
i__33107_33111 = G__33128;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33129){
var map__33132 = p__33129;
var map__33132__$1 = ((((!((map__33132 == null)))?((((map__33132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33132):map__33132);
var w = map__33132__$1;
var message = cljs.core.get.call(null,map__33132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25241__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25241__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25241__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33140 = cljs.core.seq.call(null,plugins);
var chunk__33141 = null;
var count__33142 = (0);
var i__33143 = (0);
while(true){
if((i__33143 < count__33142)){
var vec__33144 = cljs.core._nth.call(null,chunk__33141,i__33143);
var k = cljs.core.nth.call(null,vec__33144,(0),null);
var plugin = cljs.core.nth.call(null,vec__33144,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33146 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33140,chunk__33141,count__33142,i__33143,pl_33146,vec__33144,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33146.call(null,msg_hist);
});})(seq__33140,chunk__33141,count__33142,i__33143,pl_33146,vec__33144,k,plugin))
);
} else {
}

var G__33147 = seq__33140;
var G__33148 = chunk__33141;
var G__33149 = count__33142;
var G__33150 = (i__33143 + (1));
seq__33140 = G__33147;
chunk__33141 = G__33148;
count__33142 = G__33149;
i__33143 = G__33150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33140);
if(temp__4425__auto__){
var seq__33140__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33140__$1)){
var c__26037__auto__ = cljs.core.chunk_first.call(null,seq__33140__$1);
var G__33151 = cljs.core.chunk_rest.call(null,seq__33140__$1);
var G__33152 = c__26037__auto__;
var G__33153 = cljs.core.count.call(null,c__26037__auto__);
var G__33154 = (0);
seq__33140 = G__33151;
chunk__33141 = G__33152;
count__33142 = G__33153;
i__33143 = G__33154;
continue;
} else {
var vec__33145 = cljs.core.first.call(null,seq__33140__$1);
var k = cljs.core.nth.call(null,vec__33145,(0),null);
var plugin = cljs.core.nth.call(null,vec__33145,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33155 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33140,chunk__33141,count__33142,i__33143,pl_33155,vec__33145,k,plugin,seq__33140__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33155.call(null,msg_hist);
});})(seq__33140,chunk__33141,count__33142,i__33143,pl_33155,vec__33145,k,plugin,seq__33140__$1,temp__4425__auto__))
);
} else {
}

var G__33156 = cljs.core.next.call(null,seq__33140__$1);
var G__33157 = null;
var G__33158 = (0);
var G__33159 = (0);
seq__33140 = G__33156;
chunk__33141 = G__33157;
count__33142 = G__33158;
i__33143 = G__33159;
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
var args33160 = [];
var len__26292__auto___33163 = arguments.length;
var i__26293__auto___33164 = (0);
while(true){
if((i__26293__auto___33164 < len__26292__auto___33163)){
args33160.push((arguments[i__26293__auto___33164]));

var G__33165 = (i__26293__auto___33164 + (1));
i__26293__auto___33164 = G__33165;
continue;
} else {
}
break;
}

var G__33162 = args33160.length;
switch (G__33162) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33160.length)].join('')));

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
var args__26299__auto__ = [];
var len__26292__auto___33171 = arguments.length;
var i__26293__auto___33172 = (0);
while(true){
if((i__26293__auto___33172 < len__26292__auto___33171)){
args__26299__auto__.push((arguments[i__26293__auto___33172]));

var G__33173 = (i__26293__auto___33172 + (1));
i__26293__auto___33172 = G__33173;
continue;
} else {
}
break;
}

var argseq__26300__auto__ = ((((0) < args__26299__auto__.length))?(new cljs.core.IndexedSeq(args__26299__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26300__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33168){
var map__33169 = p__33168;
var map__33169__$1 = ((((!((map__33169 == null)))?((((map__33169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169):map__33169);
var opts = map__33169__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33167){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33167));
});

//# sourceMappingURL=client.js.map