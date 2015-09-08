// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t40765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40765 = (function (fn_handler,f,meta40766){
this.fn_handler = fn_handler;
this.f = f;
this.meta40766 = meta40766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40767,meta40766__$1){
var self__ = this;
var _40767__$1 = this;
return (new cljs.core.async.t40765(self__.fn_handler,self__.f,meta40766__$1));
});

cljs.core.async.t40765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40767){
var self__ = this;
var _40767__$1 = this;
return self__.meta40766;
});

cljs.core.async.t40765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t40765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t40765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta40766","meta40766",-1254706636,null)], null);
});

cljs.core.async.t40765.cljs$lang$type = true;

cljs.core.async.t40765.cljs$lang$ctorStr = "cljs.core.async/t40765";

cljs.core.async.t40765.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t40765");
});

cljs.core.async.__GT_t40765 = (function cljs$core$async$fn_handler_$___GT_t40765(fn_handler__$1,f__$1,meta40766){
return (new cljs.core.async.t40765(fn_handler__$1,f__$1,meta40766));
});

}

return (new cljs.core.async.t40765(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args40770 = [];
var len__26295__auto___40773 = arguments.length;
var i__26296__auto___40774 = (0);
while(true){
if((i__26296__auto___40774 < len__26295__auto___40773)){
args40770.push((arguments[i__26296__auto___40774]));

var G__40775 = (i__26296__auto___40774 + (1));
i__26296__auto___40774 = G__40775;
continue;
} else {
}
break;
}

var G__40772 = args40770.length;
switch (G__40772) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40770.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args40777 = [];
var len__26295__auto___40780 = arguments.length;
var i__26296__auto___40781 = (0);
while(true){
if((i__26296__auto___40781 < len__26295__auto___40780)){
args40777.push((arguments[i__26296__auto___40781]));

var G__40782 = (i__26296__auto___40781 + (1));
i__26296__auto___40781 = G__40782;
continue;
} else {
}
break;
}

var G__40779 = args40777.length;
switch (G__40779) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40777.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40784 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40784);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40784,ret){
return (function (){
return fn1.call(null,val_40784);
});})(val_40784,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args40785 = [];
var len__26295__auto___40788 = arguments.length;
var i__26296__auto___40789 = (0);
while(true){
if((i__26296__auto___40789 < len__26295__auto___40788)){
args40785.push((arguments[i__26296__auto___40789]));

var G__40790 = (i__26296__auto___40789 + (1));
i__26296__auto___40789 = G__40790;
continue;
} else {
}
break;
}

var G__40787 = args40785.length;
switch (G__40787) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40785.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26140__auto___40792 = n;
var x_40793 = (0);
while(true){
if((x_40793 < n__26140__auto___40792)){
(a[x_40793] = (0));

var G__40794 = (x_40793 + (1));
x_40793 = G__40794;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40795 = (i + (1));
i = G__40795;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t40799 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40799 = (function (alt_flag,flag,meta40800){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40800 = meta40800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40801,meta40800__$1){
var self__ = this;
var _40801__$1 = this;
return (new cljs.core.async.t40799(self__.alt_flag,self__.flag,meta40800__$1));
});})(flag))
;

cljs.core.async.t40799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40801){
var self__ = this;
var _40801__$1 = this;
return self__.meta40800;
});})(flag))
;

cljs.core.async.t40799.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t40799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t40799.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40800","meta40800",-1279287989,null)], null);
});})(flag))
;

cljs.core.async.t40799.cljs$lang$type = true;

cljs.core.async.t40799.cljs$lang$ctorStr = "cljs.core.async/t40799";

cljs.core.async.t40799.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t40799");
});})(flag))
;

cljs.core.async.__GT_t40799 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t40799(alt_flag__$1,flag__$1,meta40800){
return (new cljs.core.async.t40799(alt_flag__$1,flag__$1,meta40800));
});})(flag))
;

}

return (new cljs.core.async.t40799(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t40805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40805 = (function (alt_handler,flag,cb,meta40806){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40806 = meta40806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40807,meta40806__$1){
var self__ = this;
var _40807__$1 = this;
return (new cljs.core.async.t40805(self__.alt_handler,self__.flag,self__.cb,meta40806__$1));
});

cljs.core.async.t40805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40807){
var self__ = this;
var _40807__$1 = this;
return self__.meta40806;
});

cljs.core.async.t40805.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t40805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t40805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40806","meta40806",-827191346,null)], null);
});

cljs.core.async.t40805.cljs$lang$type = true;

cljs.core.async.t40805.cljs$lang$ctorStr = "cljs.core.async/t40805";

cljs.core.async.t40805.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t40805");
});

cljs.core.async.__GT_t40805 = (function cljs$core$async$alt_handler_$___GT_t40805(alt_handler__$1,flag__$1,cb__$1,meta40806){
return (new cljs.core.async.t40805(alt_handler__$1,flag__$1,cb__$1,meta40806));
});

}

return (new cljs.core.async.t40805(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40808_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40808_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40809_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40809_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25256__auto__ = wport;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40810 = (i + (1));
i = G__40810;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25256__auto__ = ret;
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25244__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25244__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25244__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__26302__auto__ = [];
var len__26295__auto___40816 = arguments.length;
var i__26296__auto___40817 = (0);
while(true){
if((i__26296__auto___40817 < len__26295__auto___40816)){
args__26302__auto__.push((arguments[i__26296__auto___40817]));

var G__40818 = (i__26296__auto___40817 + (1));
i__26296__auto___40817 = G__40818;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((1) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26303__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40813){
var map__40814 = p__40813;
var map__40814__$1 = ((((!((map__40814 == null)))?((((map__40814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40814):map__40814);
var opts = map__40814__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40811){
var G__40812 = cljs.core.first.call(null,seq40811);
var seq40811__$1 = cljs.core.next.call(null,seq40811);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40812,seq40811__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args40819 = [];
var len__26295__auto___40869 = arguments.length;
var i__26296__auto___40870 = (0);
while(true){
if((i__26296__auto___40870 < len__26295__auto___40869)){
args40819.push((arguments[i__26296__auto___40870]));

var G__40871 = (i__26296__auto___40870 + (1));
i__26296__auto___40870 = G__40871;
continue;
} else {
}
break;
}

var G__40821 = args40819.length;
switch (G__40821) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40819.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32151__auto___40873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___40873){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___40873){
return (function (state_40845){
var state_val_40846 = (state_40845[(1)]);
if((state_val_40846 === (7))){
var inst_40841 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
var statearr_40847_40874 = state_40845__$1;
(statearr_40847_40874[(2)] = inst_40841);

(statearr_40847_40874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (1))){
var state_40845__$1 = state_40845;
var statearr_40848_40875 = state_40845__$1;
(statearr_40848_40875[(2)] = null);

(statearr_40848_40875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (4))){
var inst_40824 = (state_40845[(7)]);
var inst_40824__$1 = (state_40845[(2)]);
var inst_40825 = (inst_40824__$1 == null);
var state_40845__$1 = (function (){var statearr_40849 = state_40845;
(statearr_40849[(7)] = inst_40824__$1);

return statearr_40849;
})();
if(cljs.core.truth_(inst_40825)){
var statearr_40850_40876 = state_40845__$1;
(statearr_40850_40876[(1)] = (5));

} else {
var statearr_40851_40877 = state_40845__$1;
(statearr_40851_40877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (13))){
var state_40845__$1 = state_40845;
var statearr_40852_40878 = state_40845__$1;
(statearr_40852_40878[(2)] = null);

(statearr_40852_40878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (6))){
var inst_40824 = (state_40845[(7)]);
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40845__$1,(11),to,inst_40824);
} else {
if((state_val_40846 === (3))){
var inst_40843 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40845__$1,inst_40843);
} else {
if((state_val_40846 === (12))){
var state_40845__$1 = state_40845;
var statearr_40853_40879 = state_40845__$1;
(statearr_40853_40879[(2)] = null);

(statearr_40853_40879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (2))){
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40845__$1,(4),from);
} else {
if((state_val_40846 === (11))){
var inst_40834 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
if(cljs.core.truth_(inst_40834)){
var statearr_40854_40880 = state_40845__$1;
(statearr_40854_40880[(1)] = (12));

} else {
var statearr_40855_40881 = state_40845__$1;
(statearr_40855_40881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (9))){
var state_40845__$1 = state_40845;
var statearr_40856_40882 = state_40845__$1;
(statearr_40856_40882[(2)] = null);

(statearr_40856_40882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (5))){
var state_40845__$1 = state_40845;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40857_40883 = state_40845__$1;
(statearr_40857_40883[(1)] = (8));

} else {
var statearr_40858_40884 = state_40845__$1;
(statearr_40858_40884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (14))){
var inst_40839 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
var statearr_40859_40885 = state_40845__$1;
(statearr_40859_40885[(2)] = inst_40839);

(statearr_40859_40885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (10))){
var inst_40831 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
var statearr_40860_40886 = state_40845__$1;
(statearr_40860_40886[(2)] = inst_40831);

(statearr_40860_40886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (8))){
var inst_40828 = cljs.core.async.close_BANG_.call(null,to);
var state_40845__$1 = state_40845;
var statearr_40861_40887 = state_40845__$1;
(statearr_40861_40887[(2)] = inst_40828);

(statearr_40861_40887[(1)] = (10));


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
});})(c__32151__auto___40873))
;
return ((function (switch__32086__auto__,c__32151__auto___40873){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_40865 = [null,null,null,null,null,null,null,null];
(statearr_40865[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_40865[(1)] = (1));

return statearr_40865;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_40845){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_40845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e40866){if((e40866 instanceof Object)){
var ex__32090__auto__ = e40866;
var statearr_40867_40888 = state_40845;
(statearr_40867_40888[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40889 = state_40845;
state_40845 = G__40889;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_40845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_40845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___40873))
})();
var state__32153__auto__ = (function (){var statearr_40868 = f__32152__auto__.call(null);
(statearr_40868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___40873);

return statearr_40868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___40873))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41073){
var vec__41074 = p__41073;
var v = cljs.core.nth.call(null,vec__41074,(0),null);
var p = cljs.core.nth.call(null,vec__41074,(1),null);
var job = vec__41074;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32151__auto___41256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results){
return (function (state_41079){
var state_val_41080 = (state_41079[(1)]);
if((state_val_41080 === (1))){
var state_41079__$1 = state_41079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41079__$1,(2),res,v);
} else {
if((state_val_41080 === (2))){
var inst_41076 = (state_41079[(2)]);
var inst_41077 = cljs.core.async.close_BANG_.call(null,res);
var state_41079__$1 = (function (){var statearr_41081 = state_41079;
(statearr_41081[(7)] = inst_41076);

return statearr_41081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41079__$1,inst_41077);
} else {
return null;
}
}
});})(c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results))
;
return ((function (switch__32086__auto__,c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_41085 = [null,null,null,null,null,null,null,null];
(statearr_41085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__);

(statearr_41085[(1)] = (1));

return statearr_41085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1 = (function (state_41079){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41086){if((e41086 instanceof Object)){
var ex__32090__auto__ = e41086;
var statearr_41087_41257 = state_41079;
(statearr_41087_41257[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41258 = state_41079;
state_41079 = G__41258;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = function(state_41079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1.call(this,state_41079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results))
})();
var state__32153__auto__ = (function (){var statearr_41088 = f__32152__auto__.call(null);
(statearr_41088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41256);

return statearr_41088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___41256,res,vec__41074,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41089){
var vec__41090 = p__41089;
var v = cljs.core.nth.call(null,vec__41090,(0),null);
var p = cljs.core.nth.call(null,vec__41090,(1),null);
var job = vec__41090;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26140__auto___41259 = n;
var __41260 = (0);
while(true){
if((__41260 < n__26140__auto___41259)){
var G__41091_41261 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41091_41261) {
case "compute":
var c__32151__auto___41263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41260,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (__41260,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function (state_41104){
var state_val_41105 = (state_41104[(1)]);
if((state_val_41105 === (1))){
var state_41104__$1 = state_41104;
var statearr_41106_41264 = state_41104__$1;
(statearr_41106_41264[(2)] = null);

(statearr_41106_41264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41105 === (2))){
var state_41104__$1 = state_41104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41104__$1,(4),jobs);
} else {
if((state_val_41105 === (3))){
var inst_41102 = (state_41104[(2)]);
var state_41104__$1 = state_41104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41104__$1,inst_41102);
} else {
if((state_val_41105 === (4))){
var inst_41094 = (state_41104[(2)]);
var inst_41095 = process.call(null,inst_41094);
var state_41104__$1 = state_41104;
if(cljs.core.truth_(inst_41095)){
var statearr_41107_41265 = state_41104__$1;
(statearr_41107_41265[(1)] = (5));

} else {
var statearr_41108_41266 = state_41104__$1;
(statearr_41108_41266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41105 === (5))){
var state_41104__$1 = state_41104;
var statearr_41109_41267 = state_41104__$1;
(statearr_41109_41267[(2)] = null);

(statearr_41109_41267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41105 === (6))){
var state_41104__$1 = state_41104;
var statearr_41110_41268 = state_41104__$1;
(statearr_41110_41268[(2)] = null);

(statearr_41110_41268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41105 === (7))){
var inst_41100 = (state_41104[(2)]);
var state_41104__$1 = state_41104;
var statearr_41111_41269 = state_41104__$1;
(statearr_41111_41269[(2)] = inst_41100);

(statearr_41111_41269[(1)] = (3));


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
});})(__41260,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
;
return ((function (__41260,switch__32086__auto__,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_41115 = [null,null,null,null,null,null,null];
(statearr_41115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__);

(statearr_41115[(1)] = (1));

return statearr_41115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1 = (function (state_41104){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41116){if((e41116 instanceof Object)){
var ex__32090__auto__ = e41116;
var statearr_41117_41270 = state_41104;
(statearr_41117_41270[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41271 = state_41104;
state_41104 = G__41271;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = function(state_41104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1.call(this,state_41104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__;
})()
;})(__41260,switch__32086__auto__,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
})();
var state__32153__auto__ = (function (){var statearr_41118 = f__32152__auto__.call(null);
(statearr_41118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41263);

return statearr_41118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(__41260,c__32151__auto___41263,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
);


break;
case "async":
var c__32151__auto___41272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41260,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (__41260,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function (state_41131){
var state_val_41132 = (state_41131[(1)]);
if((state_val_41132 === (1))){
var state_41131__$1 = state_41131;
var statearr_41133_41273 = state_41131__$1;
(statearr_41133_41273[(2)] = null);

(statearr_41133_41273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (2))){
var state_41131__$1 = state_41131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41131__$1,(4),jobs);
} else {
if((state_val_41132 === (3))){
var inst_41129 = (state_41131[(2)]);
var state_41131__$1 = state_41131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41131__$1,inst_41129);
} else {
if((state_val_41132 === (4))){
var inst_41121 = (state_41131[(2)]);
var inst_41122 = async.call(null,inst_41121);
var state_41131__$1 = state_41131;
if(cljs.core.truth_(inst_41122)){
var statearr_41134_41274 = state_41131__$1;
(statearr_41134_41274[(1)] = (5));

} else {
var statearr_41135_41275 = state_41131__$1;
(statearr_41135_41275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (5))){
var state_41131__$1 = state_41131;
var statearr_41136_41276 = state_41131__$1;
(statearr_41136_41276[(2)] = null);

(statearr_41136_41276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (6))){
var state_41131__$1 = state_41131;
var statearr_41137_41277 = state_41131__$1;
(statearr_41137_41277[(2)] = null);

(statearr_41137_41277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (7))){
var inst_41127 = (state_41131[(2)]);
var state_41131__$1 = state_41131;
var statearr_41138_41278 = state_41131__$1;
(statearr_41138_41278[(2)] = inst_41127);

(statearr_41138_41278[(1)] = (3));


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
});})(__41260,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
;
return ((function (__41260,switch__32086__auto__,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_41142 = [null,null,null,null,null,null,null];
(statearr_41142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__);

(statearr_41142[(1)] = (1));

return statearr_41142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1 = (function (state_41131){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41143){if((e41143 instanceof Object)){
var ex__32090__auto__ = e41143;
var statearr_41144_41279 = state_41131;
(statearr_41144_41279[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41280 = state_41131;
state_41131 = G__41280;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = function(state_41131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1.call(this,state_41131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__;
})()
;})(__41260,switch__32086__auto__,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
})();
var state__32153__auto__ = (function (){var statearr_41145 = f__32152__auto__.call(null);
(statearr_41145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41272);

return statearr_41145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(__41260,c__32151__auto___41272,G__41091_41261,n__26140__auto___41259,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41281 = (__41260 + (1));
__41260 = G__41281;
continue;
} else {
}
break;
}

var c__32151__auto___41282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___41282,jobs,results,process,async){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___41282,jobs,results,process,async){
return (function (state_41167){
var state_val_41168 = (state_41167[(1)]);
if((state_val_41168 === (1))){
var state_41167__$1 = state_41167;
var statearr_41169_41283 = state_41167__$1;
(statearr_41169_41283[(2)] = null);

(statearr_41169_41283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (2))){
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41167__$1,(4),from);
} else {
if((state_val_41168 === (3))){
var inst_41165 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41167__$1,inst_41165);
} else {
if((state_val_41168 === (4))){
var inst_41148 = (state_41167[(7)]);
var inst_41148__$1 = (state_41167[(2)]);
var inst_41149 = (inst_41148__$1 == null);
var state_41167__$1 = (function (){var statearr_41170 = state_41167;
(statearr_41170[(7)] = inst_41148__$1);

return statearr_41170;
})();
if(cljs.core.truth_(inst_41149)){
var statearr_41171_41284 = state_41167__$1;
(statearr_41171_41284[(1)] = (5));

} else {
var statearr_41172_41285 = state_41167__$1;
(statearr_41172_41285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (5))){
var inst_41151 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41167__$1 = state_41167;
var statearr_41173_41286 = state_41167__$1;
(statearr_41173_41286[(2)] = inst_41151);

(statearr_41173_41286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (6))){
var inst_41148 = (state_41167[(7)]);
var inst_41153 = (state_41167[(8)]);
var inst_41153__$1 = cljs.core.async.chan.call(null,(1));
var inst_41154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41155 = [inst_41148,inst_41153__$1];
var inst_41156 = (new cljs.core.PersistentVector(null,2,(5),inst_41154,inst_41155,null));
var state_41167__$1 = (function (){var statearr_41174 = state_41167;
(statearr_41174[(8)] = inst_41153__$1);

return statearr_41174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41167__$1,(8),jobs,inst_41156);
} else {
if((state_val_41168 === (7))){
var inst_41163 = (state_41167[(2)]);
var state_41167__$1 = state_41167;
var statearr_41175_41287 = state_41167__$1;
(statearr_41175_41287[(2)] = inst_41163);

(statearr_41175_41287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41168 === (8))){
var inst_41153 = (state_41167[(8)]);
var inst_41158 = (state_41167[(2)]);
var state_41167__$1 = (function (){var statearr_41176 = state_41167;
(statearr_41176[(9)] = inst_41158);

return statearr_41176;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41167__$1,(9),results,inst_41153);
} else {
if((state_val_41168 === (9))){
var inst_41160 = (state_41167[(2)]);
var state_41167__$1 = (function (){var statearr_41177 = state_41167;
(statearr_41177[(10)] = inst_41160);

return statearr_41177;
})();
var statearr_41178_41288 = state_41167__$1;
(statearr_41178_41288[(2)] = null);

(statearr_41178_41288[(1)] = (2));


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
});})(c__32151__auto___41282,jobs,results,process,async))
;
return ((function (switch__32086__auto__,c__32151__auto___41282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_41182 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__);

(statearr_41182[(1)] = (1));

return statearr_41182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1 = (function (state_41167){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41183){if((e41183 instanceof Object)){
var ex__32090__auto__ = e41183;
var statearr_41184_41289 = state_41167;
(statearr_41184_41289[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41290 = state_41167;
state_41167 = G__41290;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = function(state_41167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1.call(this,state_41167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___41282,jobs,results,process,async))
})();
var state__32153__auto__ = (function (){var statearr_41185 = f__32152__auto__.call(null);
(statearr_41185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41282);

return statearr_41185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___41282,jobs,results,process,async))
);


var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__,jobs,results,process,async){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__,jobs,results,process,async){
return (function (state_41223){
var state_val_41224 = (state_41223[(1)]);
if((state_val_41224 === (7))){
var inst_41219 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41225_41291 = state_41223__$1;
(statearr_41225_41291[(2)] = inst_41219);

(statearr_41225_41291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (20))){
var state_41223__$1 = state_41223;
var statearr_41226_41292 = state_41223__$1;
(statearr_41226_41292[(2)] = null);

(statearr_41226_41292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (1))){
var state_41223__$1 = state_41223;
var statearr_41227_41293 = state_41223__$1;
(statearr_41227_41293[(2)] = null);

(statearr_41227_41293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (4))){
var inst_41188 = (state_41223[(7)]);
var inst_41188__$1 = (state_41223[(2)]);
var inst_41189 = (inst_41188__$1 == null);
var state_41223__$1 = (function (){var statearr_41228 = state_41223;
(statearr_41228[(7)] = inst_41188__$1);

return statearr_41228;
})();
if(cljs.core.truth_(inst_41189)){
var statearr_41229_41294 = state_41223__$1;
(statearr_41229_41294[(1)] = (5));

} else {
var statearr_41230_41295 = state_41223__$1;
(statearr_41230_41295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (15))){
var inst_41201 = (state_41223[(8)]);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41223__$1,(18),to,inst_41201);
} else {
if((state_val_41224 === (21))){
var inst_41214 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41231_41296 = state_41223__$1;
(statearr_41231_41296[(2)] = inst_41214);

(statearr_41231_41296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (13))){
var inst_41216 = (state_41223[(2)]);
var state_41223__$1 = (function (){var statearr_41232 = state_41223;
(statearr_41232[(9)] = inst_41216);

return statearr_41232;
})();
var statearr_41233_41297 = state_41223__$1;
(statearr_41233_41297[(2)] = null);

(statearr_41233_41297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (6))){
var inst_41188 = (state_41223[(7)]);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41223__$1,(11),inst_41188);
} else {
if((state_val_41224 === (17))){
var inst_41209 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
if(cljs.core.truth_(inst_41209)){
var statearr_41234_41298 = state_41223__$1;
(statearr_41234_41298[(1)] = (19));

} else {
var statearr_41235_41299 = state_41223__$1;
(statearr_41235_41299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (3))){
var inst_41221 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41223__$1,inst_41221);
} else {
if((state_val_41224 === (12))){
var inst_41198 = (state_41223[(10)]);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41223__$1,(14),inst_41198);
} else {
if((state_val_41224 === (2))){
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41223__$1,(4),results);
} else {
if((state_val_41224 === (19))){
var state_41223__$1 = state_41223;
var statearr_41236_41300 = state_41223__$1;
(statearr_41236_41300[(2)] = null);

(statearr_41236_41300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (11))){
var inst_41198 = (state_41223[(2)]);
var state_41223__$1 = (function (){var statearr_41237 = state_41223;
(statearr_41237[(10)] = inst_41198);

return statearr_41237;
})();
var statearr_41238_41301 = state_41223__$1;
(statearr_41238_41301[(2)] = null);

(statearr_41238_41301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (9))){
var state_41223__$1 = state_41223;
var statearr_41239_41302 = state_41223__$1;
(statearr_41239_41302[(2)] = null);

(statearr_41239_41302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (5))){
var state_41223__$1 = state_41223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41240_41303 = state_41223__$1;
(statearr_41240_41303[(1)] = (8));

} else {
var statearr_41241_41304 = state_41223__$1;
(statearr_41241_41304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (14))){
var inst_41201 = (state_41223[(8)]);
var inst_41203 = (state_41223[(11)]);
var inst_41201__$1 = (state_41223[(2)]);
var inst_41202 = (inst_41201__$1 == null);
var inst_41203__$1 = cljs.core.not.call(null,inst_41202);
var state_41223__$1 = (function (){var statearr_41242 = state_41223;
(statearr_41242[(8)] = inst_41201__$1);

(statearr_41242[(11)] = inst_41203__$1);

return statearr_41242;
})();
if(inst_41203__$1){
var statearr_41243_41305 = state_41223__$1;
(statearr_41243_41305[(1)] = (15));

} else {
var statearr_41244_41306 = state_41223__$1;
(statearr_41244_41306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (16))){
var inst_41203 = (state_41223[(11)]);
var state_41223__$1 = state_41223;
var statearr_41245_41307 = state_41223__$1;
(statearr_41245_41307[(2)] = inst_41203);

(statearr_41245_41307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (10))){
var inst_41195 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41246_41308 = state_41223__$1;
(statearr_41246_41308[(2)] = inst_41195);

(statearr_41246_41308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (18))){
var inst_41206 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41247_41309 = state_41223__$1;
(statearr_41247_41309[(2)] = inst_41206);

(statearr_41247_41309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (8))){
var inst_41192 = cljs.core.async.close_BANG_.call(null,to);
var state_41223__$1 = state_41223;
var statearr_41248_41310 = state_41223__$1;
(statearr_41248_41310[(2)] = inst_41192);

(statearr_41248_41310[(1)] = (10));


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
});})(c__32151__auto__,jobs,results,process,async))
;
return ((function (switch__32086__auto__,c__32151__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_41252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__);

(statearr_41252[(1)] = (1));

return statearr_41252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1 = (function (state_41223){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41253){if((e41253 instanceof Object)){
var ex__32090__auto__ = e41253;
var statearr_41254_41311 = state_41223;
(statearr_41254_41311[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41312 = state_41223;
state_41223 = G__41312;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__ = function(state_41223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1.call(this,state_41223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__,jobs,results,process,async))
})();
var state__32153__auto__ = (function (){var statearr_41255 = f__32152__auto__.call(null);
(statearr_41255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_41255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__,jobs,results,process,async))
);

return c__32151__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args41313 = [];
var len__26295__auto___41316 = arguments.length;
var i__26296__auto___41317 = (0);
while(true){
if((i__26296__auto___41317 < len__26295__auto___41316)){
args41313.push((arguments[i__26296__auto___41317]));

var G__41318 = (i__26296__auto___41317 + (1));
i__26296__auto___41317 = G__41318;
continue;
} else {
}
break;
}

var G__41315 = args41313.length;
switch (G__41315) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41313.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args41320 = [];
var len__26295__auto___41323 = arguments.length;
var i__26296__auto___41324 = (0);
while(true){
if((i__26296__auto___41324 < len__26295__auto___41323)){
args41320.push((arguments[i__26296__auto___41324]));

var G__41325 = (i__26296__auto___41324 + (1));
i__26296__auto___41324 = G__41325;
continue;
} else {
}
break;
}

var G__41322 = args41320.length;
switch (G__41322) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41320.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args41327 = [];
var len__26295__auto___41380 = arguments.length;
var i__26296__auto___41381 = (0);
while(true){
if((i__26296__auto___41381 < len__26295__auto___41380)){
args41327.push((arguments[i__26296__auto___41381]));

var G__41382 = (i__26296__auto___41381 + (1));
i__26296__auto___41381 = G__41382;
continue;
} else {
}
break;
}

var G__41329 = args41327.length;
switch (G__41329) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41327.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32151__auto___41384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___41384,tc,fc){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___41384,tc,fc){
return (function (state_41355){
var state_val_41356 = (state_41355[(1)]);
if((state_val_41356 === (7))){
var inst_41351 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
var statearr_41357_41385 = state_41355__$1;
(statearr_41357_41385[(2)] = inst_41351);

(statearr_41357_41385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (1))){
var state_41355__$1 = state_41355;
var statearr_41358_41386 = state_41355__$1;
(statearr_41358_41386[(2)] = null);

(statearr_41358_41386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (4))){
var inst_41332 = (state_41355[(7)]);
var inst_41332__$1 = (state_41355[(2)]);
var inst_41333 = (inst_41332__$1 == null);
var state_41355__$1 = (function (){var statearr_41359 = state_41355;
(statearr_41359[(7)] = inst_41332__$1);

return statearr_41359;
})();
if(cljs.core.truth_(inst_41333)){
var statearr_41360_41387 = state_41355__$1;
(statearr_41360_41387[(1)] = (5));

} else {
var statearr_41361_41388 = state_41355__$1;
(statearr_41361_41388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (13))){
var state_41355__$1 = state_41355;
var statearr_41362_41389 = state_41355__$1;
(statearr_41362_41389[(2)] = null);

(statearr_41362_41389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (6))){
var inst_41332 = (state_41355[(7)]);
var inst_41338 = p.call(null,inst_41332);
var state_41355__$1 = state_41355;
if(cljs.core.truth_(inst_41338)){
var statearr_41363_41390 = state_41355__$1;
(statearr_41363_41390[(1)] = (9));

} else {
var statearr_41364_41391 = state_41355__$1;
(statearr_41364_41391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (3))){
var inst_41353 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41355__$1,inst_41353);
} else {
if((state_val_41356 === (12))){
var state_41355__$1 = state_41355;
var statearr_41365_41392 = state_41355__$1;
(statearr_41365_41392[(2)] = null);

(statearr_41365_41392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (2))){
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41355__$1,(4),ch);
} else {
if((state_val_41356 === (11))){
var inst_41332 = (state_41355[(7)]);
var inst_41342 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41355__$1,(8),inst_41342,inst_41332);
} else {
if((state_val_41356 === (9))){
var state_41355__$1 = state_41355;
var statearr_41366_41393 = state_41355__$1;
(statearr_41366_41393[(2)] = tc);

(statearr_41366_41393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (5))){
var inst_41335 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41336 = cljs.core.async.close_BANG_.call(null,fc);
var state_41355__$1 = (function (){var statearr_41367 = state_41355;
(statearr_41367[(8)] = inst_41335);

return statearr_41367;
})();
var statearr_41368_41394 = state_41355__$1;
(statearr_41368_41394[(2)] = inst_41336);

(statearr_41368_41394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (14))){
var inst_41349 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
var statearr_41369_41395 = state_41355__$1;
(statearr_41369_41395[(2)] = inst_41349);

(statearr_41369_41395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (10))){
var state_41355__$1 = state_41355;
var statearr_41370_41396 = state_41355__$1;
(statearr_41370_41396[(2)] = fc);

(statearr_41370_41396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (8))){
var inst_41344 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
if(cljs.core.truth_(inst_41344)){
var statearr_41371_41397 = state_41355__$1;
(statearr_41371_41397[(1)] = (12));

} else {
var statearr_41372_41398 = state_41355__$1;
(statearr_41372_41398[(1)] = (13));

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
});})(c__32151__auto___41384,tc,fc))
;
return ((function (switch__32086__auto__,c__32151__auto___41384,tc,fc){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_41376 = [null,null,null,null,null,null,null,null,null];
(statearr_41376[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_41376[(1)] = (1));

return statearr_41376;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_41355){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41377){if((e41377 instanceof Object)){
var ex__32090__auto__ = e41377;
var statearr_41378_41399 = state_41355;
(statearr_41378_41399[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41400 = state_41355;
state_41355 = G__41400;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_41355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_41355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___41384,tc,fc))
})();
var state__32153__auto__ = (function (){var statearr_41379 = f__32152__auto__.call(null);
(statearr_41379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41384);

return statearr_41379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___41384,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__){
return (function (state_41447){
var state_val_41448 = (state_41447[(1)]);
if((state_val_41448 === (1))){
var inst_41433 = init;
var state_41447__$1 = (function (){var statearr_41449 = state_41447;
(statearr_41449[(7)] = inst_41433);

return statearr_41449;
})();
var statearr_41450_41465 = state_41447__$1;
(statearr_41450_41465[(2)] = null);

(statearr_41450_41465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41448 === (2))){
var state_41447__$1 = state_41447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41447__$1,(4),ch);
} else {
if((state_val_41448 === (3))){
var inst_41445 = (state_41447[(2)]);
var state_41447__$1 = state_41447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41447__$1,inst_41445);
} else {
if((state_val_41448 === (4))){
var inst_41436 = (state_41447[(8)]);
var inst_41436__$1 = (state_41447[(2)]);
var inst_41437 = (inst_41436__$1 == null);
var state_41447__$1 = (function (){var statearr_41451 = state_41447;
(statearr_41451[(8)] = inst_41436__$1);

return statearr_41451;
})();
if(cljs.core.truth_(inst_41437)){
var statearr_41452_41466 = state_41447__$1;
(statearr_41452_41466[(1)] = (5));

} else {
var statearr_41453_41467 = state_41447__$1;
(statearr_41453_41467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41448 === (5))){
var inst_41433 = (state_41447[(7)]);
var state_41447__$1 = state_41447;
var statearr_41454_41468 = state_41447__$1;
(statearr_41454_41468[(2)] = inst_41433);

(statearr_41454_41468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41448 === (6))){
var inst_41436 = (state_41447[(8)]);
var inst_41433 = (state_41447[(7)]);
var inst_41440 = f.call(null,inst_41433,inst_41436);
var inst_41433__$1 = inst_41440;
var state_41447__$1 = (function (){var statearr_41455 = state_41447;
(statearr_41455[(7)] = inst_41433__$1);

return statearr_41455;
})();
var statearr_41456_41469 = state_41447__$1;
(statearr_41456_41469[(2)] = null);

(statearr_41456_41469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41448 === (7))){
var inst_41443 = (state_41447[(2)]);
var state_41447__$1 = state_41447;
var statearr_41457_41470 = state_41447__$1;
(statearr_41457_41470[(2)] = inst_41443);

(statearr_41457_41470[(1)] = (3));


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
});})(c__32151__auto__))
;
return ((function (switch__32086__auto__,c__32151__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32087__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32087__auto____0 = (function (){
var statearr_41461 = [null,null,null,null,null,null,null,null,null];
(statearr_41461[(0)] = cljs$core$async$reduce_$_state_machine__32087__auto__);

(statearr_41461[(1)] = (1));

return statearr_41461;
});
var cljs$core$async$reduce_$_state_machine__32087__auto____1 = (function (state_41447){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41462){if((e41462 instanceof Object)){
var ex__32090__auto__ = e41462;
var statearr_41463_41471 = state_41447;
(statearr_41463_41471[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41472 = state_41447;
state_41447 = G__41472;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32087__auto__ = function(state_41447){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32087__auto____1.call(this,state_41447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32087__auto____0;
cljs$core$async$reduce_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32087__auto____1;
return cljs$core$async$reduce_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__))
})();
var state__32153__auto__ = (function (){var statearr_41464 = f__32152__auto__.call(null);
(statearr_41464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_41464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__))
);

return c__32151__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args41473 = [];
var len__26295__auto___41525 = arguments.length;
var i__26296__auto___41526 = (0);
while(true){
if((i__26296__auto___41526 < len__26295__auto___41525)){
args41473.push((arguments[i__26296__auto___41526]));

var G__41527 = (i__26296__auto___41526 + (1));
i__26296__auto___41526 = G__41527;
continue;
} else {
}
break;
}

var G__41475 = args41473.length;
switch (G__41475) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41473.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__){
return (function (state_41500){
var state_val_41501 = (state_41500[(1)]);
if((state_val_41501 === (7))){
var inst_41482 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41502_41529 = state_41500__$1;
(statearr_41502_41529[(2)] = inst_41482);

(statearr_41502_41529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (1))){
var inst_41476 = cljs.core.seq.call(null,coll);
var inst_41477 = inst_41476;
var state_41500__$1 = (function (){var statearr_41503 = state_41500;
(statearr_41503[(7)] = inst_41477);

return statearr_41503;
})();
var statearr_41504_41530 = state_41500__$1;
(statearr_41504_41530[(2)] = null);

(statearr_41504_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (4))){
var inst_41477 = (state_41500[(7)]);
var inst_41480 = cljs.core.first.call(null,inst_41477);
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41500__$1,(7),ch,inst_41480);
} else {
if((state_val_41501 === (13))){
var inst_41494 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41505_41531 = state_41500__$1;
(statearr_41505_41531[(2)] = inst_41494);

(statearr_41505_41531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (6))){
var inst_41485 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
if(cljs.core.truth_(inst_41485)){
var statearr_41506_41532 = state_41500__$1;
(statearr_41506_41532[(1)] = (8));

} else {
var statearr_41507_41533 = state_41500__$1;
(statearr_41507_41533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (3))){
var inst_41498 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41500__$1,inst_41498);
} else {
if((state_val_41501 === (12))){
var state_41500__$1 = state_41500;
var statearr_41508_41534 = state_41500__$1;
(statearr_41508_41534[(2)] = null);

(statearr_41508_41534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (2))){
var inst_41477 = (state_41500[(7)]);
var state_41500__$1 = state_41500;
if(cljs.core.truth_(inst_41477)){
var statearr_41509_41535 = state_41500__$1;
(statearr_41509_41535[(1)] = (4));

} else {
var statearr_41510_41536 = state_41500__$1;
(statearr_41510_41536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (11))){
var inst_41491 = cljs.core.async.close_BANG_.call(null,ch);
var state_41500__$1 = state_41500;
var statearr_41511_41537 = state_41500__$1;
(statearr_41511_41537[(2)] = inst_41491);

(statearr_41511_41537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (9))){
var state_41500__$1 = state_41500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41512_41538 = state_41500__$1;
(statearr_41512_41538[(1)] = (11));

} else {
var statearr_41513_41539 = state_41500__$1;
(statearr_41513_41539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (5))){
var inst_41477 = (state_41500[(7)]);
var state_41500__$1 = state_41500;
var statearr_41514_41540 = state_41500__$1;
(statearr_41514_41540[(2)] = inst_41477);

(statearr_41514_41540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (10))){
var inst_41496 = (state_41500[(2)]);
var state_41500__$1 = state_41500;
var statearr_41515_41541 = state_41500__$1;
(statearr_41515_41541[(2)] = inst_41496);

(statearr_41515_41541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41501 === (8))){
var inst_41477 = (state_41500[(7)]);
var inst_41487 = cljs.core.next.call(null,inst_41477);
var inst_41477__$1 = inst_41487;
var state_41500__$1 = (function (){var statearr_41516 = state_41500;
(statearr_41516[(7)] = inst_41477__$1);

return statearr_41516;
})();
var statearr_41517_41542 = state_41500__$1;
(statearr_41517_41542[(2)] = null);

(statearr_41517_41542[(1)] = (2));


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
});})(c__32151__auto__))
;
return ((function (switch__32086__auto__,c__32151__auto__){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_41521 = [null,null,null,null,null,null,null,null];
(statearr_41521[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_41521[(1)] = (1));

return statearr_41521;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_41500){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41522){if((e41522 instanceof Object)){
var ex__32090__auto__ = e41522;
var statearr_41523_41543 = state_41500;
(statearr_41523_41543[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41544 = state_41500;
state_41500 = G__41544;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_41500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_41500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__))
})();
var state__32153__auto__ = (function (){var statearr_41524 = f__32152__auto__.call(null);
(statearr_41524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_41524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__))
);

return c__32151__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25892__auto__ = (((_ == null))?null:_);
var m__25893__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,_);
} else {
var m__25893__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25893__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,ch);
} else {
var m__25893__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m);
} else {
var m__25893__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t41770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41770 = (function (mult,ch,cs,meta41771){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41771 = meta41771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41772,meta41771__$1){
var self__ = this;
var _41772__$1 = this;
return (new cljs.core.async.t41770(self__.mult,self__.ch,self__.cs,meta41771__$1));
});})(cs))
;

cljs.core.async.t41770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41772){
var self__ = this;
var _41772__$1 = this;
return self__.meta41771;
});})(cs))
;

cljs.core.async.t41770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t41770.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t41770.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t41770.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t41770.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t41770.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41771","meta41771",-1221185335,null)], null);
});})(cs))
;

cljs.core.async.t41770.cljs$lang$type = true;

cljs.core.async.t41770.cljs$lang$ctorStr = "cljs.core.async/t41770";

cljs.core.async.t41770.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t41770");
});})(cs))
;

cljs.core.async.__GT_t41770 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t41770(mult__$1,ch__$1,cs__$1,meta41771){
return (new cljs.core.async.t41770(mult__$1,ch__$1,cs__$1,meta41771));
});})(cs))
;

}

return (new cljs.core.async.t41770(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32151__auto___41991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___41991,cs,m,dchan,dctr,done){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___41991,cs,m,dchan,dctr,done){
return (function (state_41903){
var state_val_41904 = (state_41903[(1)]);
if((state_val_41904 === (7))){
var inst_41899 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41905_41992 = state_41903__$1;
(statearr_41905_41992[(2)] = inst_41899);

(statearr_41905_41992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (20))){
var inst_41804 = (state_41903[(7)]);
var inst_41814 = cljs.core.first.call(null,inst_41804);
var inst_41815 = cljs.core.nth.call(null,inst_41814,(0),null);
var inst_41816 = cljs.core.nth.call(null,inst_41814,(1),null);
var state_41903__$1 = (function (){var statearr_41906 = state_41903;
(statearr_41906[(8)] = inst_41815);

return statearr_41906;
})();
if(cljs.core.truth_(inst_41816)){
var statearr_41907_41993 = state_41903__$1;
(statearr_41907_41993[(1)] = (22));

} else {
var statearr_41908_41994 = state_41903__$1;
(statearr_41908_41994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (27))){
var inst_41844 = (state_41903[(9)]);
var inst_41846 = (state_41903[(10)]);
var inst_41851 = (state_41903[(11)]);
var inst_41775 = (state_41903[(12)]);
var inst_41851__$1 = cljs.core._nth.call(null,inst_41844,inst_41846);
var inst_41852 = cljs.core.async.put_BANG_.call(null,inst_41851__$1,inst_41775,done);
var state_41903__$1 = (function (){var statearr_41909 = state_41903;
(statearr_41909[(11)] = inst_41851__$1);

return statearr_41909;
})();
if(cljs.core.truth_(inst_41852)){
var statearr_41910_41995 = state_41903__$1;
(statearr_41910_41995[(1)] = (30));

} else {
var statearr_41911_41996 = state_41903__$1;
(statearr_41911_41996[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (1))){
var state_41903__$1 = state_41903;
var statearr_41912_41997 = state_41903__$1;
(statearr_41912_41997[(2)] = null);

(statearr_41912_41997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (24))){
var inst_41804 = (state_41903[(7)]);
var inst_41821 = (state_41903[(2)]);
var inst_41822 = cljs.core.next.call(null,inst_41804);
var inst_41784 = inst_41822;
var inst_41785 = null;
var inst_41786 = (0);
var inst_41787 = (0);
var state_41903__$1 = (function (){var statearr_41913 = state_41903;
(statearr_41913[(13)] = inst_41784);

(statearr_41913[(14)] = inst_41787);

(statearr_41913[(15)] = inst_41785);

(statearr_41913[(16)] = inst_41786);

(statearr_41913[(17)] = inst_41821);

return statearr_41913;
})();
var statearr_41914_41998 = state_41903__$1;
(statearr_41914_41998[(2)] = null);

(statearr_41914_41998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (39))){
var state_41903__$1 = state_41903;
var statearr_41918_41999 = state_41903__$1;
(statearr_41918_41999[(2)] = null);

(statearr_41918_41999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (4))){
var inst_41775 = (state_41903[(12)]);
var inst_41775__$1 = (state_41903[(2)]);
var inst_41776 = (inst_41775__$1 == null);
var state_41903__$1 = (function (){var statearr_41919 = state_41903;
(statearr_41919[(12)] = inst_41775__$1);

return statearr_41919;
})();
if(cljs.core.truth_(inst_41776)){
var statearr_41920_42000 = state_41903__$1;
(statearr_41920_42000[(1)] = (5));

} else {
var statearr_41921_42001 = state_41903__$1;
(statearr_41921_42001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (15))){
var inst_41784 = (state_41903[(13)]);
var inst_41787 = (state_41903[(14)]);
var inst_41785 = (state_41903[(15)]);
var inst_41786 = (state_41903[(16)]);
var inst_41800 = (state_41903[(2)]);
var inst_41801 = (inst_41787 + (1));
var tmp41915 = inst_41784;
var tmp41916 = inst_41785;
var tmp41917 = inst_41786;
var inst_41784__$1 = tmp41915;
var inst_41785__$1 = tmp41916;
var inst_41786__$1 = tmp41917;
var inst_41787__$1 = inst_41801;
var state_41903__$1 = (function (){var statearr_41922 = state_41903;
(statearr_41922[(13)] = inst_41784__$1);

(statearr_41922[(14)] = inst_41787__$1);

(statearr_41922[(15)] = inst_41785__$1);

(statearr_41922[(16)] = inst_41786__$1);

(statearr_41922[(18)] = inst_41800);

return statearr_41922;
})();
var statearr_41923_42002 = state_41903__$1;
(statearr_41923_42002[(2)] = null);

(statearr_41923_42002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (21))){
var inst_41825 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41927_42003 = state_41903__$1;
(statearr_41927_42003[(2)] = inst_41825);

(statearr_41927_42003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (31))){
var inst_41851 = (state_41903[(11)]);
var inst_41855 = done.call(null,null);
var inst_41856 = cljs.core.async.untap_STAR_.call(null,m,inst_41851);
var state_41903__$1 = (function (){var statearr_41928 = state_41903;
(statearr_41928[(19)] = inst_41855);

return statearr_41928;
})();
var statearr_41929_42004 = state_41903__$1;
(statearr_41929_42004[(2)] = inst_41856);

(statearr_41929_42004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (32))){
var inst_41844 = (state_41903[(9)]);
var inst_41846 = (state_41903[(10)]);
var inst_41843 = (state_41903[(20)]);
var inst_41845 = (state_41903[(21)]);
var inst_41858 = (state_41903[(2)]);
var inst_41859 = (inst_41846 + (1));
var tmp41924 = inst_41844;
var tmp41925 = inst_41843;
var tmp41926 = inst_41845;
var inst_41843__$1 = tmp41925;
var inst_41844__$1 = tmp41924;
var inst_41845__$1 = tmp41926;
var inst_41846__$1 = inst_41859;
var state_41903__$1 = (function (){var statearr_41930 = state_41903;
(statearr_41930[(9)] = inst_41844__$1);

(statearr_41930[(10)] = inst_41846__$1);

(statearr_41930[(20)] = inst_41843__$1);

(statearr_41930[(21)] = inst_41845__$1);

(statearr_41930[(22)] = inst_41858);

return statearr_41930;
})();
var statearr_41931_42005 = state_41903__$1;
(statearr_41931_42005[(2)] = null);

(statearr_41931_42005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (40))){
var inst_41871 = (state_41903[(23)]);
var inst_41875 = done.call(null,null);
var inst_41876 = cljs.core.async.untap_STAR_.call(null,m,inst_41871);
var state_41903__$1 = (function (){var statearr_41932 = state_41903;
(statearr_41932[(24)] = inst_41875);

return statearr_41932;
})();
var statearr_41933_42006 = state_41903__$1;
(statearr_41933_42006[(2)] = inst_41876);

(statearr_41933_42006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (33))){
var inst_41862 = (state_41903[(25)]);
var inst_41864 = cljs.core.chunked_seq_QMARK_.call(null,inst_41862);
var state_41903__$1 = state_41903;
if(inst_41864){
var statearr_41934_42007 = state_41903__$1;
(statearr_41934_42007[(1)] = (36));

} else {
var statearr_41935_42008 = state_41903__$1;
(statearr_41935_42008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (13))){
var inst_41794 = (state_41903[(26)]);
var inst_41797 = cljs.core.async.close_BANG_.call(null,inst_41794);
var state_41903__$1 = state_41903;
var statearr_41936_42009 = state_41903__$1;
(statearr_41936_42009[(2)] = inst_41797);

(statearr_41936_42009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (22))){
var inst_41815 = (state_41903[(8)]);
var inst_41818 = cljs.core.async.close_BANG_.call(null,inst_41815);
var state_41903__$1 = state_41903;
var statearr_41937_42010 = state_41903__$1;
(statearr_41937_42010[(2)] = inst_41818);

(statearr_41937_42010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (36))){
var inst_41862 = (state_41903[(25)]);
var inst_41866 = cljs.core.chunk_first.call(null,inst_41862);
var inst_41867 = cljs.core.chunk_rest.call(null,inst_41862);
var inst_41868 = cljs.core.count.call(null,inst_41866);
var inst_41843 = inst_41867;
var inst_41844 = inst_41866;
var inst_41845 = inst_41868;
var inst_41846 = (0);
var state_41903__$1 = (function (){var statearr_41938 = state_41903;
(statearr_41938[(9)] = inst_41844);

(statearr_41938[(10)] = inst_41846);

(statearr_41938[(20)] = inst_41843);

(statearr_41938[(21)] = inst_41845);

return statearr_41938;
})();
var statearr_41939_42011 = state_41903__$1;
(statearr_41939_42011[(2)] = null);

(statearr_41939_42011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (41))){
var inst_41862 = (state_41903[(25)]);
var inst_41878 = (state_41903[(2)]);
var inst_41879 = cljs.core.next.call(null,inst_41862);
var inst_41843 = inst_41879;
var inst_41844 = null;
var inst_41845 = (0);
var inst_41846 = (0);
var state_41903__$1 = (function (){var statearr_41940 = state_41903;
(statearr_41940[(9)] = inst_41844);

(statearr_41940[(10)] = inst_41846);

(statearr_41940[(20)] = inst_41843);

(statearr_41940[(21)] = inst_41845);

(statearr_41940[(27)] = inst_41878);

return statearr_41940;
})();
var statearr_41941_42012 = state_41903__$1;
(statearr_41941_42012[(2)] = null);

(statearr_41941_42012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (43))){
var state_41903__$1 = state_41903;
var statearr_41942_42013 = state_41903__$1;
(statearr_41942_42013[(2)] = null);

(statearr_41942_42013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (29))){
var inst_41887 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41943_42014 = state_41903__$1;
(statearr_41943_42014[(2)] = inst_41887);

(statearr_41943_42014[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (44))){
var inst_41896 = (state_41903[(2)]);
var state_41903__$1 = (function (){var statearr_41944 = state_41903;
(statearr_41944[(28)] = inst_41896);

return statearr_41944;
})();
var statearr_41945_42015 = state_41903__$1;
(statearr_41945_42015[(2)] = null);

(statearr_41945_42015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (6))){
var inst_41835 = (state_41903[(29)]);
var inst_41834 = cljs.core.deref.call(null,cs);
var inst_41835__$1 = cljs.core.keys.call(null,inst_41834);
var inst_41836 = cljs.core.count.call(null,inst_41835__$1);
var inst_41837 = cljs.core.reset_BANG_.call(null,dctr,inst_41836);
var inst_41842 = cljs.core.seq.call(null,inst_41835__$1);
var inst_41843 = inst_41842;
var inst_41844 = null;
var inst_41845 = (0);
var inst_41846 = (0);
var state_41903__$1 = (function (){var statearr_41946 = state_41903;
(statearr_41946[(30)] = inst_41837);

(statearr_41946[(9)] = inst_41844);

(statearr_41946[(10)] = inst_41846);

(statearr_41946[(20)] = inst_41843);

(statearr_41946[(29)] = inst_41835__$1);

(statearr_41946[(21)] = inst_41845);

return statearr_41946;
})();
var statearr_41947_42016 = state_41903__$1;
(statearr_41947_42016[(2)] = null);

(statearr_41947_42016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (28))){
var inst_41862 = (state_41903[(25)]);
var inst_41843 = (state_41903[(20)]);
var inst_41862__$1 = cljs.core.seq.call(null,inst_41843);
var state_41903__$1 = (function (){var statearr_41948 = state_41903;
(statearr_41948[(25)] = inst_41862__$1);

return statearr_41948;
})();
if(inst_41862__$1){
var statearr_41949_42017 = state_41903__$1;
(statearr_41949_42017[(1)] = (33));

} else {
var statearr_41950_42018 = state_41903__$1;
(statearr_41950_42018[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (25))){
var inst_41846 = (state_41903[(10)]);
var inst_41845 = (state_41903[(21)]);
var inst_41848 = (inst_41846 < inst_41845);
var inst_41849 = inst_41848;
var state_41903__$1 = state_41903;
if(cljs.core.truth_(inst_41849)){
var statearr_41951_42019 = state_41903__$1;
(statearr_41951_42019[(1)] = (27));

} else {
var statearr_41952_42020 = state_41903__$1;
(statearr_41952_42020[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (34))){
var state_41903__$1 = state_41903;
var statearr_41953_42021 = state_41903__$1;
(statearr_41953_42021[(2)] = null);

(statearr_41953_42021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (17))){
var state_41903__$1 = state_41903;
var statearr_41954_42022 = state_41903__$1;
(statearr_41954_42022[(2)] = null);

(statearr_41954_42022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (3))){
var inst_41901 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41903__$1,inst_41901);
} else {
if((state_val_41904 === (12))){
var inst_41830 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41955_42023 = state_41903__$1;
(statearr_41955_42023[(2)] = inst_41830);

(statearr_41955_42023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (2))){
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41903__$1,(4),ch);
} else {
if((state_val_41904 === (23))){
var state_41903__$1 = state_41903;
var statearr_41956_42024 = state_41903__$1;
(statearr_41956_42024[(2)] = null);

(statearr_41956_42024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (35))){
var inst_41885 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41957_42025 = state_41903__$1;
(statearr_41957_42025[(2)] = inst_41885);

(statearr_41957_42025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (19))){
var inst_41804 = (state_41903[(7)]);
var inst_41808 = cljs.core.chunk_first.call(null,inst_41804);
var inst_41809 = cljs.core.chunk_rest.call(null,inst_41804);
var inst_41810 = cljs.core.count.call(null,inst_41808);
var inst_41784 = inst_41809;
var inst_41785 = inst_41808;
var inst_41786 = inst_41810;
var inst_41787 = (0);
var state_41903__$1 = (function (){var statearr_41958 = state_41903;
(statearr_41958[(13)] = inst_41784);

(statearr_41958[(14)] = inst_41787);

(statearr_41958[(15)] = inst_41785);

(statearr_41958[(16)] = inst_41786);

return statearr_41958;
})();
var statearr_41959_42026 = state_41903__$1;
(statearr_41959_42026[(2)] = null);

(statearr_41959_42026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (11))){
var inst_41784 = (state_41903[(13)]);
var inst_41804 = (state_41903[(7)]);
var inst_41804__$1 = cljs.core.seq.call(null,inst_41784);
var state_41903__$1 = (function (){var statearr_41960 = state_41903;
(statearr_41960[(7)] = inst_41804__$1);

return statearr_41960;
})();
if(inst_41804__$1){
var statearr_41961_42027 = state_41903__$1;
(statearr_41961_42027[(1)] = (16));

} else {
var statearr_41962_42028 = state_41903__$1;
(statearr_41962_42028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (9))){
var inst_41832 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41963_42029 = state_41903__$1;
(statearr_41963_42029[(2)] = inst_41832);

(statearr_41963_42029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (5))){
var inst_41782 = cljs.core.deref.call(null,cs);
var inst_41783 = cljs.core.seq.call(null,inst_41782);
var inst_41784 = inst_41783;
var inst_41785 = null;
var inst_41786 = (0);
var inst_41787 = (0);
var state_41903__$1 = (function (){var statearr_41964 = state_41903;
(statearr_41964[(13)] = inst_41784);

(statearr_41964[(14)] = inst_41787);

(statearr_41964[(15)] = inst_41785);

(statearr_41964[(16)] = inst_41786);

return statearr_41964;
})();
var statearr_41965_42030 = state_41903__$1;
(statearr_41965_42030[(2)] = null);

(statearr_41965_42030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (14))){
var state_41903__$1 = state_41903;
var statearr_41966_42031 = state_41903__$1;
(statearr_41966_42031[(2)] = null);

(statearr_41966_42031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (45))){
var inst_41893 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41967_42032 = state_41903__$1;
(statearr_41967_42032[(2)] = inst_41893);

(statearr_41967_42032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (26))){
var inst_41835 = (state_41903[(29)]);
var inst_41889 = (state_41903[(2)]);
var inst_41890 = cljs.core.seq.call(null,inst_41835);
var state_41903__$1 = (function (){var statearr_41968 = state_41903;
(statearr_41968[(31)] = inst_41889);

return statearr_41968;
})();
if(inst_41890){
var statearr_41969_42033 = state_41903__$1;
(statearr_41969_42033[(1)] = (42));

} else {
var statearr_41970_42034 = state_41903__$1;
(statearr_41970_42034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (16))){
var inst_41804 = (state_41903[(7)]);
var inst_41806 = cljs.core.chunked_seq_QMARK_.call(null,inst_41804);
var state_41903__$1 = state_41903;
if(inst_41806){
var statearr_41971_42035 = state_41903__$1;
(statearr_41971_42035[(1)] = (19));

} else {
var statearr_41972_42036 = state_41903__$1;
(statearr_41972_42036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (38))){
var inst_41882 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41973_42037 = state_41903__$1;
(statearr_41973_42037[(2)] = inst_41882);

(statearr_41973_42037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (30))){
var state_41903__$1 = state_41903;
var statearr_41974_42038 = state_41903__$1;
(statearr_41974_42038[(2)] = null);

(statearr_41974_42038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (10))){
var inst_41787 = (state_41903[(14)]);
var inst_41785 = (state_41903[(15)]);
var inst_41793 = cljs.core._nth.call(null,inst_41785,inst_41787);
var inst_41794 = cljs.core.nth.call(null,inst_41793,(0),null);
var inst_41795 = cljs.core.nth.call(null,inst_41793,(1),null);
var state_41903__$1 = (function (){var statearr_41975 = state_41903;
(statearr_41975[(26)] = inst_41794);

return statearr_41975;
})();
if(cljs.core.truth_(inst_41795)){
var statearr_41976_42039 = state_41903__$1;
(statearr_41976_42039[(1)] = (13));

} else {
var statearr_41977_42040 = state_41903__$1;
(statearr_41977_42040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (18))){
var inst_41828 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41978_42041 = state_41903__$1;
(statearr_41978_42041[(2)] = inst_41828);

(statearr_41978_42041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (42))){
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41903__$1,(45),dchan);
} else {
if((state_val_41904 === (37))){
var inst_41862 = (state_41903[(25)]);
var inst_41871 = (state_41903[(23)]);
var inst_41775 = (state_41903[(12)]);
var inst_41871__$1 = cljs.core.first.call(null,inst_41862);
var inst_41872 = cljs.core.async.put_BANG_.call(null,inst_41871__$1,inst_41775,done);
var state_41903__$1 = (function (){var statearr_41979 = state_41903;
(statearr_41979[(23)] = inst_41871__$1);

return statearr_41979;
})();
if(cljs.core.truth_(inst_41872)){
var statearr_41980_42042 = state_41903__$1;
(statearr_41980_42042[(1)] = (39));

} else {
var statearr_41981_42043 = state_41903__$1;
(statearr_41981_42043[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (8))){
var inst_41787 = (state_41903[(14)]);
var inst_41786 = (state_41903[(16)]);
var inst_41789 = (inst_41787 < inst_41786);
var inst_41790 = inst_41789;
var state_41903__$1 = state_41903;
if(cljs.core.truth_(inst_41790)){
var statearr_41982_42044 = state_41903__$1;
(statearr_41982_42044[(1)] = (10));

} else {
var statearr_41983_42045 = state_41903__$1;
(statearr_41983_42045[(1)] = (11));

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
});})(c__32151__auto___41991,cs,m,dchan,dctr,done))
;
return ((function (switch__32086__auto__,c__32151__auto___41991,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32087__auto__ = null;
var cljs$core$async$mult_$_state_machine__32087__auto____0 = (function (){
var statearr_41987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41987[(0)] = cljs$core$async$mult_$_state_machine__32087__auto__);

(statearr_41987[(1)] = (1));

return statearr_41987;
});
var cljs$core$async$mult_$_state_machine__32087__auto____1 = (function (state_41903){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_41903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e41988){if((e41988 instanceof Object)){
var ex__32090__auto__ = e41988;
var statearr_41989_42046 = state_41903;
(statearr_41989_42046[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42047 = state_41903;
state_41903 = G__42047;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32087__auto__ = function(state_41903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32087__auto____1.call(this,state_41903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32087__auto____0;
cljs$core$async$mult_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32087__auto____1;
return cljs$core$async$mult_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___41991,cs,m,dchan,dctr,done))
})();
var state__32153__auto__ = (function (){var statearr_41990 = f__32152__auto__.call(null);
(statearr_41990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___41991);

return statearr_41990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___41991,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args42048 = [];
var len__26295__auto___42051 = arguments.length;
var i__26296__auto___42052 = (0);
while(true){
if((i__26296__auto___42052 < len__26295__auto___42051)){
args42048.push((arguments[i__26296__auto___42052]));

var G__42053 = (i__26296__auto___42052 + (1));
i__26296__auto___42052 = G__42053;
continue;
} else {
}
break;
}

var G__42050 = args42048.length;
switch (G__42050) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42048.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,ch);
} else {
var m__25893__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,ch);
} else {
var m__25893__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m);
} else {
var m__25893__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,state_map);
} else {
var m__25893__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25892__auto__ = (((m == null))?null:m);
var m__25893__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,m,mode);
} else {
var m__25893__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__26302__auto__ = [];
var len__26295__auto___42067 = arguments.length;
var i__26296__auto___42068 = (0);
while(true){
if((i__26296__auto___42068 < len__26295__auto___42067)){
args__26302__auto__.push((arguments[i__26296__auto___42068]));

var G__42069 = (i__26296__auto___42068 + (1));
i__26296__auto___42068 = G__42069;
continue;
} else {
}
break;
}

var argseq__26303__auto__ = ((((3) < args__26302__auto__.length))?(new cljs.core.IndexedSeq(args__26302__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26303__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42061){
var map__42062 = p__42061;
var map__42062__$1 = ((((!((map__42062 == null)))?((((map__42062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42062):map__42062);
var opts = map__42062__$1;
var statearr_42064_42070 = state;
(statearr_42064_42070[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__42062,map__42062__$1,opts){
return (function (val){
var statearr_42065_42071 = state;
(statearr_42065_42071[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42062,map__42062__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_42066_42072 = state;
(statearr_42066_42072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42057){
var G__42058 = cljs.core.first.call(null,seq42057);
var seq42057__$1 = cljs.core.next.call(null,seq42057);
var G__42059 = cljs.core.first.call(null,seq42057__$1);
var seq42057__$2 = cljs.core.next.call(null,seq42057__$1);
var G__42060 = cljs.core.first.call(null,seq42057__$2);
var seq42057__$3 = cljs.core.next.call(null,seq42057__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42058,G__42059,G__42060,seq42057__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t42236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42236 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42237){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42237 = meta42237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42238,meta42237__$1){
var self__ = this;
var _42238__$1 = this;
return (new cljs.core.async.t42236(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42237__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42238){
var self__ = this;
var _42238__$1 = this;
return self__.meta42237;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42237","meta42237",-1632812140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t42236.cljs$lang$type = true;

cljs.core.async.t42236.cljs$lang$ctorStr = "cljs.core.async/t42236";

cljs.core.async.t42236.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42236");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t42236 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t42236(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42237){
return (new cljs.core.async.t42236(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42237));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t42236(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32151__auto___42399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42336){
var state_val_42337 = (state_42336[(1)]);
if((state_val_42337 === (7))){
var inst_42254 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42338_42400 = state_42336__$1;
(statearr_42338_42400[(2)] = inst_42254);

(statearr_42338_42400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (20))){
var inst_42266 = (state_42336[(7)]);
var state_42336__$1 = state_42336;
var statearr_42339_42401 = state_42336__$1;
(statearr_42339_42401[(2)] = inst_42266);

(statearr_42339_42401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (27))){
var state_42336__$1 = state_42336;
var statearr_42340_42402 = state_42336__$1;
(statearr_42340_42402[(2)] = null);

(statearr_42340_42402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (1))){
var inst_42242 = (state_42336[(8)]);
var inst_42242__$1 = calc_state.call(null);
var inst_42244 = (inst_42242__$1 == null);
var inst_42245 = cljs.core.not.call(null,inst_42244);
var state_42336__$1 = (function (){var statearr_42341 = state_42336;
(statearr_42341[(8)] = inst_42242__$1);

return statearr_42341;
})();
if(inst_42245){
var statearr_42342_42403 = state_42336__$1;
(statearr_42342_42403[(1)] = (2));

} else {
var statearr_42343_42404 = state_42336__$1;
(statearr_42343_42404[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (24))){
var inst_42296 = (state_42336[(9)]);
var inst_42289 = (state_42336[(10)]);
var inst_42310 = (state_42336[(11)]);
var inst_42310__$1 = inst_42289.call(null,inst_42296);
var state_42336__$1 = (function (){var statearr_42344 = state_42336;
(statearr_42344[(11)] = inst_42310__$1);

return statearr_42344;
})();
if(cljs.core.truth_(inst_42310__$1)){
var statearr_42345_42405 = state_42336__$1;
(statearr_42345_42405[(1)] = (29));

} else {
var statearr_42346_42406 = state_42336__$1;
(statearr_42346_42406[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (4))){
var inst_42257 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42257)){
var statearr_42347_42407 = state_42336__$1;
(statearr_42347_42407[(1)] = (8));

} else {
var statearr_42348_42408 = state_42336__$1;
(statearr_42348_42408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (15))){
var inst_42283 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42283)){
var statearr_42349_42409 = state_42336__$1;
(statearr_42349_42409[(1)] = (19));

} else {
var statearr_42350_42410 = state_42336__$1;
(statearr_42350_42410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (21))){
var inst_42288 = (state_42336[(12)]);
var inst_42288__$1 = (state_42336[(2)]);
var inst_42289 = cljs.core.get.call(null,inst_42288__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42290 = cljs.core.get.call(null,inst_42288__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42291 = cljs.core.get.call(null,inst_42288__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42336__$1 = (function (){var statearr_42351 = state_42336;
(statearr_42351[(10)] = inst_42289);

(statearr_42351[(12)] = inst_42288__$1);

(statearr_42351[(13)] = inst_42290);

return statearr_42351;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42336__$1,(22),inst_42291);
} else {
if((state_val_42337 === (31))){
var inst_42318 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42318)){
var statearr_42352_42411 = state_42336__$1;
(statearr_42352_42411[(1)] = (32));

} else {
var statearr_42353_42412 = state_42336__$1;
(statearr_42353_42412[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (32))){
var inst_42295 = (state_42336[(14)]);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42336__$1,(35),out,inst_42295);
} else {
if((state_val_42337 === (33))){
var inst_42288 = (state_42336[(12)]);
var inst_42266 = inst_42288;
var state_42336__$1 = (function (){var statearr_42354 = state_42336;
(statearr_42354[(7)] = inst_42266);

return statearr_42354;
})();
var statearr_42355_42413 = state_42336__$1;
(statearr_42355_42413[(2)] = null);

(statearr_42355_42413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (13))){
var inst_42266 = (state_42336[(7)]);
var inst_42273 = inst_42266.cljs$lang$protocol_mask$partition0$;
var inst_42274 = (inst_42273 & (64));
var inst_42275 = inst_42266.cljs$core$ISeq$;
var inst_42276 = (inst_42274) || (inst_42275);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42276)){
var statearr_42356_42414 = state_42336__$1;
(statearr_42356_42414[(1)] = (16));

} else {
var statearr_42357_42415 = state_42336__$1;
(statearr_42357_42415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (22))){
var inst_42296 = (state_42336[(9)]);
var inst_42295 = (state_42336[(14)]);
var inst_42294 = (state_42336[(2)]);
var inst_42295__$1 = cljs.core.nth.call(null,inst_42294,(0),null);
var inst_42296__$1 = cljs.core.nth.call(null,inst_42294,(1),null);
var inst_42297 = (inst_42295__$1 == null);
var inst_42298 = cljs.core._EQ_.call(null,inst_42296__$1,change);
var inst_42299 = (inst_42297) || (inst_42298);
var state_42336__$1 = (function (){var statearr_42358 = state_42336;
(statearr_42358[(9)] = inst_42296__$1);

(statearr_42358[(14)] = inst_42295__$1);

return statearr_42358;
})();
if(cljs.core.truth_(inst_42299)){
var statearr_42359_42416 = state_42336__$1;
(statearr_42359_42416[(1)] = (23));

} else {
var statearr_42360_42417 = state_42336__$1;
(statearr_42360_42417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (36))){
var inst_42288 = (state_42336[(12)]);
var inst_42266 = inst_42288;
var state_42336__$1 = (function (){var statearr_42361 = state_42336;
(statearr_42361[(7)] = inst_42266);

return statearr_42361;
})();
var statearr_42362_42418 = state_42336__$1;
(statearr_42362_42418[(2)] = null);

(statearr_42362_42418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (29))){
var inst_42310 = (state_42336[(11)]);
var state_42336__$1 = state_42336;
var statearr_42363_42419 = state_42336__$1;
(statearr_42363_42419[(2)] = inst_42310);

(statearr_42363_42419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (6))){
var state_42336__$1 = state_42336;
var statearr_42364_42420 = state_42336__$1;
(statearr_42364_42420[(2)] = false);

(statearr_42364_42420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (28))){
var inst_42306 = (state_42336[(2)]);
var inst_42307 = calc_state.call(null);
var inst_42266 = inst_42307;
var state_42336__$1 = (function (){var statearr_42365 = state_42336;
(statearr_42365[(15)] = inst_42306);

(statearr_42365[(7)] = inst_42266);

return statearr_42365;
})();
var statearr_42366_42421 = state_42336__$1;
(statearr_42366_42421[(2)] = null);

(statearr_42366_42421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (25))){
var inst_42332 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42367_42422 = state_42336__$1;
(statearr_42367_42422[(2)] = inst_42332);

(statearr_42367_42422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (34))){
var inst_42330 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42368_42423 = state_42336__$1;
(statearr_42368_42423[(2)] = inst_42330);

(statearr_42368_42423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (17))){
var state_42336__$1 = state_42336;
var statearr_42369_42424 = state_42336__$1;
(statearr_42369_42424[(2)] = false);

(statearr_42369_42424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (3))){
var state_42336__$1 = state_42336;
var statearr_42370_42425 = state_42336__$1;
(statearr_42370_42425[(2)] = false);

(statearr_42370_42425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (12))){
var inst_42334 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42336__$1,inst_42334);
} else {
if((state_val_42337 === (2))){
var inst_42242 = (state_42336[(8)]);
var inst_42247 = inst_42242.cljs$lang$protocol_mask$partition0$;
var inst_42248 = (inst_42247 & (64));
var inst_42249 = inst_42242.cljs$core$ISeq$;
var inst_42250 = (inst_42248) || (inst_42249);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42250)){
var statearr_42371_42426 = state_42336__$1;
(statearr_42371_42426[(1)] = (5));

} else {
var statearr_42372_42427 = state_42336__$1;
(statearr_42372_42427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (23))){
var inst_42295 = (state_42336[(14)]);
var inst_42301 = (inst_42295 == null);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42301)){
var statearr_42373_42428 = state_42336__$1;
(statearr_42373_42428[(1)] = (26));

} else {
var statearr_42374_42429 = state_42336__$1;
(statearr_42374_42429[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (35))){
var inst_42321 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
if(cljs.core.truth_(inst_42321)){
var statearr_42375_42430 = state_42336__$1;
(statearr_42375_42430[(1)] = (36));

} else {
var statearr_42376_42431 = state_42336__$1;
(statearr_42376_42431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (19))){
var inst_42266 = (state_42336[(7)]);
var inst_42285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42266);
var state_42336__$1 = state_42336;
var statearr_42377_42432 = state_42336__$1;
(statearr_42377_42432[(2)] = inst_42285);

(statearr_42377_42432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (11))){
var inst_42266 = (state_42336[(7)]);
var inst_42270 = (inst_42266 == null);
var inst_42271 = cljs.core.not.call(null,inst_42270);
var state_42336__$1 = state_42336;
if(inst_42271){
var statearr_42378_42433 = state_42336__$1;
(statearr_42378_42433[(1)] = (13));

} else {
var statearr_42379_42434 = state_42336__$1;
(statearr_42379_42434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (9))){
var inst_42242 = (state_42336[(8)]);
var state_42336__$1 = state_42336;
var statearr_42380_42435 = state_42336__$1;
(statearr_42380_42435[(2)] = inst_42242);

(statearr_42380_42435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (5))){
var state_42336__$1 = state_42336;
var statearr_42381_42436 = state_42336__$1;
(statearr_42381_42436[(2)] = true);

(statearr_42381_42436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (14))){
var state_42336__$1 = state_42336;
var statearr_42382_42437 = state_42336__$1;
(statearr_42382_42437[(2)] = false);

(statearr_42382_42437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (26))){
var inst_42296 = (state_42336[(9)]);
var inst_42303 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42296);
var state_42336__$1 = state_42336;
var statearr_42383_42438 = state_42336__$1;
(statearr_42383_42438[(2)] = inst_42303);

(statearr_42383_42438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (16))){
var state_42336__$1 = state_42336;
var statearr_42384_42439 = state_42336__$1;
(statearr_42384_42439[(2)] = true);

(statearr_42384_42439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (38))){
var inst_42326 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42385_42440 = state_42336__$1;
(statearr_42385_42440[(2)] = inst_42326);

(statearr_42385_42440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (30))){
var inst_42296 = (state_42336[(9)]);
var inst_42289 = (state_42336[(10)]);
var inst_42290 = (state_42336[(13)]);
var inst_42313 = cljs.core.empty_QMARK_.call(null,inst_42289);
var inst_42314 = inst_42290.call(null,inst_42296);
var inst_42315 = cljs.core.not.call(null,inst_42314);
var inst_42316 = (inst_42313) && (inst_42315);
var state_42336__$1 = state_42336;
var statearr_42386_42441 = state_42336__$1;
(statearr_42386_42441[(2)] = inst_42316);

(statearr_42386_42441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (10))){
var inst_42242 = (state_42336[(8)]);
var inst_42262 = (state_42336[(2)]);
var inst_42263 = cljs.core.get.call(null,inst_42262,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42264 = cljs.core.get.call(null,inst_42262,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42265 = cljs.core.get.call(null,inst_42262,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42266 = inst_42242;
var state_42336__$1 = (function (){var statearr_42387 = state_42336;
(statearr_42387[(16)] = inst_42265);

(statearr_42387[(7)] = inst_42266);

(statearr_42387[(17)] = inst_42264);

(statearr_42387[(18)] = inst_42263);

return statearr_42387;
})();
var statearr_42388_42442 = state_42336__$1;
(statearr_42388_42442[(2)] = null);

(statearr_42388_42442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (18))){
var inst_42280 = (state_42336[(2)]);
var state_42336__$1 = state_42336;
var statearr_42389_42443 = state_42336__$1;
(statearr_42389_42443[(2)] = inst_42280);

(statearr_42389_42443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (37))){
var state_42336__$1 = state_42336;
var statearr_42390_42444 = state_42336__$1;
(statearr_42390_42444[(2)] = null);

(statearr_42390_42444[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42337 === (8))){
var inst_42242 = (state_42336[(8)]);
var inst_42259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42242);
var state_42336__$1 = state_42336;
var statearr_42391_42445 = state_42336__$1;
(statearr_42391_42445[(2)] = inst_42259);

(statearr_42391_42445[(1)] = (10));


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
});})(c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32086__auto__,c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32087__auto__ = null;
var cljs$core$async$mix_$_state_machine__32087__auto____0 = (function (){
var statearr_42395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42395[(0)] = cljs$core$async$mix_$_state_machine__32087__auto__);

(statearr_42395[(1)] = (1));

return statearr_42395;
});
var cljs$core$async$mix_$_state_machine__32087__auto____1 = (function (state_42336){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42396){if((e42396 instanceof Object)){
var ex__32090__auto__ = e42396;
var statearr_42397_42446 = state_42336;
(statearr_42397_42446[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42447 = state_42336;
state_42336 = G__42447;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32087__auto__ = function(state_42336){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32087__auto____1.call(this,state_42336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32087__auto____0;
cljs$core$async$mix_$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32087__auto____1;
return cljs$core$async$mix_$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32153__auto__ = (function (){var statearr_42398 = f__32152__auto__.call(null);
(statearr_42398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42399);

return statearr_42398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42399,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25892__auto__ = (((p == null))?null:p);
var m__25893__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25893__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25892__auto__ = (((p == null))?null:p);
var m__25893__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,p,v,ch);
} else {
var m__25893__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args42450 = [];
var len__26295__auto___42453 = arguments.length;
var i__26296__auto___42454 = (0);
while(true){
if((i__26296__auto___42454 < len__26295__auto___42453)){
args42450.push((arguments[i__26296__auto___42454]));

var G__42455 = (i__26296__auto___42454 + (1));
i__26296__auto___42454 = G__42455;
continue;
} else {
}
break;
}

var G__42452 = args42450.length;
switch (G__42452) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42450.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25892__auto__ = (((p == null))?null:p);
var m__25893__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,p);
} else {
var m__25893__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25892__auto__ = (((p == null))?null:p);
var m__25893__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25892__auto__)]);
if(!((m__25893__auto__ == null))){
return m__25893__auto__.call(null,p,v);
} else {
var m__25893__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25893__auto____$1 == null))){
return m__25893__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args42458 = [];
var len__26295__auto___42583 = arguments.length;
var i__26296__auto___42584 = (0);
while(true){
if((i__26296__auto___42584 < len__26295__auto___42583)){
args42458.push((arguments[i__26296__auto___42584]));

var G__42585 = (i__26296__auto___42584 + (1));
i__26296__auto___42584 = G__42585;
continue;
} else {
}
break;
}

var G__42460 = args42458.length;
switch (G__42460) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42458.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25256__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25256__auto__)){
return or__25256__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25256__auto__,mults){
return (function (p1__42457_SHARP_){
if(cljs.core.truth_(p1__42457_SHARP_.call(null,topic))){
return p1__42457_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42457_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25256__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t42461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42461 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42462){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42462 = meta42462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42463,meta42462__$1){
var self__ = this;
var _42463__$1 = this;
return (new cljs.core.async.t42461(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42462__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42463){
var self__ = this;
var _42463__$1 = this;
return self__.meta42462;
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t42461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t42461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t42461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t42461.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42462","meta42462",46902554,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t42461.cljs$lang$type = true;

cljs.core.async.t42461.cljs$lang$ctorStr = "cljs.core.async/t42461";

cljs.core.async.t42461.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42461");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t42461 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t42461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42462){
return (new cljs.core.async.t42461(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42462));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t42461(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32151__auto___42587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42587,mults,ensure_mult,p){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42587,mults,ensure_mult,p){
return (function (state_42535){
var state_val_42536 = (state_42535[(1)]);
if((state_val_42536 === (7))){
var inst_42531 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42537_42588 = state_42535__$1;
(statearr_42537_42588[(2)] = inst_42531);

(statearr_42537_42588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (20))){
var state_42535__$1 = state_42535;
var statearr_42538_42589 = state_42535__$1;
(statearr_42538_42589[(2)] = null);

(statearr_42538_42589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (1))){
var state_42535__$1 = state_42535;
var statearr_42539_42590 = state_42535__$1;
(statearr_42539_42590[(2)] = null);

(statearr_42539_42590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (24))){
var inst_42514 = (state_42535[(7)]);
var inst_42523 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42514);
var state_42535__$1 = state_42535;
var statearr_42540_42591 = state_42535__$1;
(statearr_42540_42591[(2)] = inst_42523);

(statearr_42540_42591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (4))){
var inst_42466 = (state_42535[(8)]);
var inst_42466__$1 = (state_42535[(2)]);
var inst_42467 = (inst_42466__$1 == null);
var state_42535__$1 = (function (){var statearr_42541 = state_42535;
(statearr_42541[(8)] = inst_42466__$1);

return statearr_42541;
})();
if(cljs.core.truth_(inst_42467)){
var statearr_42542_42592 = state_42535__$1;
(statearr_42542_42592[(1)] = (5));

} else {
var statearr_42543_42593 = state_42535__$1;
(statearr_42543_42593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (15))){
var inst_42508 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42544_42594 = state_42535__$1;
(statearr_42544_42594[(2)] = inst_42508);

(statearr_42544_42594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (21))){
var inst_42528 = (state_42535[(2)]);
var state_42535__$1 = (function (){var statearr_42545 = state_42535;
(statearr_42545[(9)] = inst_42528);

return statearr_42545;
})();
var statearr_42546_42595 = state_42535__$1;
(statearr_42546_42595[(2)] = null);

(statearr_42546_42595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (13))){
var inst_42490 = (state_42535[(10)]);
var inst_42492 = cljs.core.chunked_seq_QMARK_.call(null,inst_42490);
var state_42535__$1 = state_42535;
if(inst_42492){
var statearr_42547_42596 = state_42535__$1;
(statearr_42547_42596[(1)] = (16));

} else {
var statearr_42548_42597 = state_42535__$1;
(statearr_42548_42597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (22))){
var inst_42520 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
if(cljs.core.truth_(inst_42520)){
var statearr_42549_42598 = state_42535__$1;
(statearr_42549_42598[(1)] = (23));

} else {
var statearr_42550_42599 = state_42535__$1;
(statearr_42550_42599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (6))){
var inst_42466 = (state_42535[(8)]);
var inst_42514 = (state_42535[(7)]);
var inst_42516 = (state_42535[(11)]);
var inst_42514__$1 = topic_fn.call(null,inst_42466);
var inst_42515 = cljs.core.deref.call(null,mults);
var inst_42516__$1 = cljs.core.get.call(null,inst_42515,inst_42514__$1);
var state_42535__$1 = (function (){var statearr_42551 = state_42535;
(statearr_42551[(7)] = inst_42514__$1);

(statearr_42551[(11)] = inst_42516__$1);

return statearr_42551;
})();
if(cljs.core.truth_(inst_42516__$1)){
var statearr_42552_42600 = state_42535__$1;
(statearr_42552_42600[(1)] = (19));

} else {
var statearr_42553_42601 = state_42535__$1;
(statearr_42553_42601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (25))){
var inst_42525 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42554_42602 = state_42535__$1;
(statearr_42554_42602[(2)] = inst_42525);

(statearr_42554_42602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (17))){
var inst_42490 = (state_42535[(10)]);
var inst_42499 = cljs.core.first.call(null,inst_42490);
var inst_42500 = cljs.core.async.muxch_STAR_.call(null,inst_42499);
var inst_42501 = cljs.core.async.close_BANG_.call(null,inst_42500);
var inst_42502 = cljs.core.next.call(null,inst_42490);
var inst_42476 = inst_42502;
var inst_42477 = null;
var inst_42478 = (0);
var inst_42479 = (0);
var state_42535__$1 = (function (){var statearr_42555 = state_42535;
(statearr_42555[(12)] = inst_42476);

(statearr_42555[(13)] = inst_42478);

(statearr_42555[(14)] = inst_42479);

(statearr_42555[(15)] = inst_42501);

(statearr_42555[(16)] = inst_42477);

return statearr_42555;
})();
var statearr_42556_42603 = state_42535__$1;
(statearr_42556_42603[(2)] = null);

(statearr_42556_42603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (3))){
var inst_42533 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42535__$1,inst_42533);
} else {
if((state_val_42536 === (12))){
var inst_42510 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42557_42604 = state_42535__$1;
(statearr_42557_42604[(2)] = inst_42510);

(statearr_42557_42604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (2))){
var state_42535__$1 = state_42535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42535__$1,(4),ch);
} else {
if((state_val_42536 === (23))){
var state_42535__$1 = state_42535;
var statearr_42558_42605 = state_42535__$1;
(statearr_42558_42605[(2)] = null);

(statearr_42558_42605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (19))){
var inst_42466 = (state_42535[(8)]);
var inst_42516 = (state_42535[(11)]);
var inst_42518 = cljs.core.async.muxch_STAR_.call(null,inst_42516);
var state_42535__$1 = state_42535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42535__$1,(22),inst_42518,inst_42466);
} else {
if((state_val_42536 === (11))){
var inst_42476 = (state_42535[(12)]);
var inst_42490 = (state_42535[(10)]);
var inst_42490__$1 = cljs.core.seq.call(null,inst_42476);
var state_42535__$1 = (function (){var statearr_42559 = state_42535;
(statearr_42559[(10)] = inst_42490__$1);

return statearr_42559;
})();
if(inst_42490__$1){
var statearr_42560_42606 = state_42535__$1;
(statearr_42560_42606[(1)] = (13));

} else {
var statearr_42561_42607 = state_42535__$1;
(statearr_42561_42607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (9))){
var inst_42512 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42562_42608 = state_42535__$1;
(statearr_42562_42608[(2)] = inst_42512);

(statearr_42562_42608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (5))){
var inst_42473 = cljs.core.deref.call(null,mults);
var inst_42474 = cljs.core.vals.call(null,inst_42473);
var inst_42475 = cljs.core.seq.call(null,inst_42474);
var inst_42476 = inst_42475;
var inst_42477 = null;
var inst_42478 = (0);
var inst_42479 = (0);
var state_42535__$1 = (function (){var statearr_42563 = state_42535;
(statearr_42563[(12)] = inst_42476);

(statearr_42563[(13)] = inst_42478);

(statearr_42563[(14)] = inst_42479);

(statearr_42563[(16)] = inst_42477);

return statearr_42563;
})();
var statearr_42564_42609 = state_42535__$1;
(statearr_42564_42609[(2)] = null);

(statearr_42564_42609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (14))){
var state_42535__$1 = state_42535;
var statearr_42568_42610 = state_42535__$1;
(statearr_42568_42610[(2)] = null);

(statearr_42568_42610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (16))){
var inst_42490 = (state_42535[(10)]);
var inst_42494 = cljs.core.chunk_first.call(null,inst_42490);
var inst_42495 = cljs.core.chunk_rest.call(null,inst_42490);
var inst_42496 = cljs.core.count.call(null,inst_42494);
var inst_42476 = inst_42495;
var inst_42477 = inst_42494;
var inst_42478 = inst_42496;
var inst_42479 = (0);
var state_42535__$1 = (function (){var statearr_42569 = state_42535;
(statearr_42569[(12)] = inst_42476);

(statearr_42569[(13)] = inst_42478);

(statearr_42569[(14)] = inst_42479);

(statearr_42569[(16)] = inst_42477);

return statearr_42569;
})();
var statearr_42570_42611 = state_42535__$1;
(statearr_42570_42611[(2)] = null);

(statearr_42570_42611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (10))){
var inst_42476 = (state_42535[(12)]);
var inst_42478 = (state_42535[(13)]);
var inst_42479 = (state_42535[(14)]);
var inst_42477 = (state_42535[(16)]);
var inst_42484 = cljs.core._nth.call(null,inst_42477,inst_42479);
var inst_42485 = cljs.core.async.muxch_STAR_.call(null,inst_42484);
var inst_42486 = cljs.core.async.close_BANG_.call(null,inst_42485);
var inst_42487 = (inst_42479 + (1));
var tmp42565 = inst_42476;
var tmp42566 = inst_42478;
var tmp42567 = inst_42477;
var inst_42476__$1 = tmp42565;
var inst_42477__$1 = tmp42567;
var inst_42478__$1 = tmp42566;
var inst_42479__$1 = inst_42487;
var state_42535__$1 = (function (){var statearr_42571 = state_42535;
(statearr_42571[(12)] = inst_42476__$1);

(statearr_42571[(13)] = inst_42478__$1);

(statearr_42571[(17)] = inst_42486);

(statearr_42571[(14)] = inst_42479__$1);

(statearr_42571[(16)] = inst_42477__$1);

return statearr_42571;
})();
var statearr_42572_42612 = state_42535__$1;
(statearr_42572_42612[(2)] = null);

(statearr_42572_42612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (18))){
var inst_42505 = (state_42535[(2)]);
var state_42535__$1 = state_42535;
var statearr_42573_42613 = state_42535__$1;
(statearr_42573_42613[(2)] = inst_42505);

(statearr_42573_42613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42536 === (8))){
var inst_42478 = (state_42535[(13)]);
var inst_42479 = (state_42535[(14)]);
var inst_42481 = (inst_42479 < inst_42478);
var inst_42482 = inst_42481;
var state_42535__$1 = state_42535;
if(cljs.core.truth_(inst_42482)){
var statearr_42574_42614 = state_42535__$1;
(statearr_42574_42614[(1)] = (10));

} else {
var statearr_42575_42615 = state_42535__$1;
(statearr_42575_42615[(1)] = (11));

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
});})(c__32151__auto___42587,mults,ensure_mult,p))
;
return ((function (switch__32086__auto__,c__32151__auto___42587,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_42579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42579[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_42579[(1)] = (1));

return statearr_42579;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_42535){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42580){if((e42580 instanceof Object)){
var ex__32090__auto__ = e42580;
var statearr_42581_42616 = state_42535;
(statearr_42581_42616[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42617 = state_42535;
state_42535 = G__42617;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_42535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_42535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42587,mults,ensure_mult,p))
})();
var state__32153__auto__ = (function (){var statearr_42582 = f__32152__auto__.call(null);
(statearr_42582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42587);

return statearr_42582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42587,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args42618 = [];
var len__26295__auto___42621 = arguments.length;
var i__26296__auto___42622 = (0);
while(true){
if((i__26296__auto___42622 < len__26295__auto___42621)){
args42618.push((arguments[i__26296__auto___42622]));

var G__42623 = (i__26296__auto___42622 + (1));
i__26296__auto___42622 = G__42623;
continue;
} else {
}
break;
}

var G__42620 = args42618.length;
switch (G__42620) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42618.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args42625 = [];
var len__26295__auto___42628 = arguments.length;
var i__26296__auto___42629 = (0);
while(true){
if((i__26296__auto___42629 < len__26295__auto___42628)){
args42625.push((arguments[i__26296__auto___42629]));

var G__42630 = (i__26296__auto___42629 + (1));
i__26296__auto___42629 = G__42630;
continue;
} else {
}
break;
}

var G__42627 = args42625.length;
switch (G__42627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42625.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args42632 = [];
var len__26295__auto___42703 = arguments.length;
var i__26296__auto___42704 = (0);
while(true){
if((i__26296__auto___42704 < len__26295__auto___42703)){
args42632.push((arguments[i__26296__auto___42704]));

var G__42705 = (i__26296__auto___42704 + (1));
i__26296__auto___42704 = G__42705;
continue;
} else {
}
break;
}

var G__42634 = args42632.length;
switch (G__42634) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42632.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32151__auto___42707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42673){
var state_val_42674 = (state_42673[(1)]);
if((state_val_42674 === (7))){
var state_42673__$1 = state_42673;
var statearr_42675_42708 = state_42673__$1;
(statearr_42675_42708[(2)] = null);

(statearr_42675_42708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (1))){
var state_42673__$1 = state_42673;
var statearr_42676_42709 = state_42673__$1;
(statearr_42676_42709[(2)] = null);

(statearr_42676_42709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (4))){
var inst_42637 = (state_42673[(7)]);
var inst_42639 = (inst_42637 < cnt);
var state_42673__$1 = state_42673;
if(cljs.core.truth_(inst_42639)){
var statearr_42677_42710 = state_42673__$1;
(statearr_42677_42710[(1)] = (6));

} else {
var statearr_42678_42711 = state_42673__$1;
(statearr_42678_42711[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (15))){
var inst_42669 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
var statearr_42679_42712 = state_42673__$1;
(statearr_42679_42712[(2)] = inst_42669);

(statearr_42679_42712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (13))){
var inst_42662 = cljs.core.async.close_BANG_.call(null,out);
var state_42673__$1 = state_42673;
var statearr_42680_42713 = state_42673__$1;
(statearr_42680_42713[(2)] = inst_42662);

(statearr_42680_42713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (6))){
var state_42673__$1 = state_42673;
var statearr_42681_42714 = state_42673__$1;
(statearr_42681_42714[(2)] = null);

(statearr_42681_42714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (3))){
var inst_42671 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42673__$1,inst_42671);
} else {
if((state_val_42674 === (12))){
var inst_42659 = (state_42673[(8)]);
var inst_42659__$1 = (state_42673[(2)]);
var inst_42660 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42659__$1);
var state_42673__$1 = (function (){var statearr_42682 = state_42673;
(statearr_42682[(8)] = inst_42659__$1);

return statearr_42682;
})();
if(cljs.core.truth_(inst_42660)){
var statearr_42683_42715 = state_42673__$1;
(statearr_42683_42715[(1)] = (13));

} else {
var statearr_42684_42716 = state_42673__$1;
(statearr_42684_42716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (2))){
var inst_42636 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42637 = (0);
var state_42673__$1 = (function (){var statearr_42685 = state_42673;
(statearr_42685[(9)] = inst_42636);

(statearr_42685[(7)] = inst_42637);

return statearr_42685;
})();
var statearr_42686_42717 = state_42673__$1;
(statearr_42686_42717[(2)] = null);

(statearr_42686_42717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (11))){
var inst_42637 = (state_42673[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42673,(10),Object,null,(9));
var inst_42646 = chs__$1.call(null,inst_42637);
var inst_42647 = done.call(null,inst_42637);
var inst_42648 = cljs.core.async.take_BANG_.call(null,inst_42646,inst_42647);
var state_42673__$1 = state_42673;
var statearr_42687_42718 = state_42673__$1;
(statearr_42687_42718[(2)] = inst_42648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (9))){
var inst_42637 = (state_42673[(7)]);
var inst_42650 = (state_42673[(2)]);
var inst_42651 = (inst_42637 + (1));
var inst_42637__$1 = inst_42651;
var state_42673__$1 = (function (){var statearr_42688 = state_42673;
(statearr_42688[(10)] = inst_42650);

(statearr_42688[(7)] = inst_42637__$1);

return statearr_42688;
})();
var statearr_42689_42719 = state_42673__$1;
(statearr_42689_42719[(2)] = null);

(statearr_42689_42719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (5))){
var inst_42657 = (state_42673[(2)]);
var state_42673__$1 = (function (){var statearr_42690 = state_42673;
(statearr_42690[(11)] = inst_42657);

return statearr_42690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42673__$1,(12),dchan);
} else {
if((state_val_42674 === (14))){
var inst_42659 = (state_42673[(8)]);
var inst_42664 = cljs.core.apply.call(null,f,inst_42659);
var state_42673__$1 = state_42673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42673__$1,(16),out,inst_42664);
} else {
if((state_val_42674 === (16))){
var inst_42666 = (state_42673[(2)]);
var state_42673__$1 = (function (){var statearr_42691 = state_42673;
(statearr_42691[(12)] = inst_42666);

return statearr_42691;
})();
var statearr_42692_42720 = state_42673__$1;
(statearr_42692_42720[(2)] = null);

(statearr_42692_42720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (10))){
var inst_42641 = (state_42673[(2)]);
var inst_42642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42673__$1 = (function (){var statearr_42693 = state_42673;
(statearr_42693[(13)] = inst_42641);

return statearr_42693;
})();
var statearr_42694_42721 = state_42673__$1;
(statearr_42694_42721[(2)] = inst_42642);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42674 === (8))){
var inst_42655 = (state_42673[(2)]);
var state_42673__$1 = state_42673;
var statearr_42695_42722 = state_42673__$1;
(statearr_42695_42722[(2)] = inst_42655);

(statearr_42695_42722[(1)] = (5));


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
});})(c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32086__auto__,c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_42699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42699[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_42699[(1)] = (1));

return statearr_42699;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_42673){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42700){if((e42700 instanceof Object)){
var ex__32090__auto__ = e42700;
var statearr_42701_42723 = state_42673;
(statearr_42701_42723[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42724 = state_42673;
state_42673 = G__42724;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_42673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_42673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32153__auto__ = (function (){var statearr_42702 = f__32152__auto__.call(null);
(statearr_42702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42707);

return statearr_42702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42707,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args42726 = [];
var len__26295__auto___42782 = arguments.length;
var i__26296__auto___42783 = (0);
while(true){
if((i__26296__auto___42783 < len__26295__auto___42782)){
args42726.push((arguments[i__26296__auto___42783]));

var G__42784 = (i__26296__auto___42783 + (1));
i__26296__auto___42783 = G__42784;
continue;
} else {
}
break;
}

var G__42728 = args42726.length;
switch (G__42728) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42726.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___42786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42786,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42786,out){
return (function (state_42758){
var state_val_42759 = (state_42758[(1)]);
if((state_val_42759 === (7))){
var inst_42737 = (state_42758[(7)]);
var inst_42738 = (state_42758[(8)]);
var inst_42737__$1 = (state_42758[(2)]);
var inst_42738__$1 = cljs.core.nth.call(null,inst_42737__$1,(0),null);
var inst_42739 = cljs.core.nth.call(null,inst_42737__$1,(1),null);
var inst_42740 = (inst_42738__$1 == null);
var state_42758__$1 = (function (){var statearr_42760 = state_42758;
(statearr_42760[(9)] = inst_42739);

(statearr_42760[(7)] = inst_42737__$1);

(statearr_42760[(8)] = inst_42738__$1);

return statearr_42760;
})();
if(cljs.core.truth_(inst_42740)){
var statearr_42761_42787 = state_42758__$1;
(statearr_42761_42787[(1)] = (8));

} else {
var statearr_42762_42788 = state_42758__$1;
(statearr_42762_42788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (1))){
var inst_42729 = cljs.core.vec.call(null,chs);
var inst_42730 = inst_42729;
var state_42758__$1 = (function (){var statearr_42763 = state_42758;
(statearr_42763[(10)] = inst_42730);

return statearr_42763;
})();
var statearr_42764_42789 = state_42758__$1;
(statearr_42764_42789[(2)] = null);

(statearr_42764_42789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (4))){
var inst_42730 = (state_42758[(10)]);
var state_42758__$1 = state_42758;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42758__$1,(7),inst_42730);
} else {
if((state_val_42759 === (6))){
var inst_42754 = (state_42758[(2)]);
var state_42758__$1 = state_42758;
var statearr_42765_42790 = state_42758__$1;
(statearr_42765_42790[(2)] = inst_42754);

(statearr_42765_42790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (3))){
var inst_42756 = (state_42758[(2)]);
var state_42758__$1 = state_42758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42758__$1,inst_42756);
} else {
if((state_val_42759 === (2))){
var inst_42730 = (state_42758[(10)]);
var inst_42732 = cljs.core.count.call(null,inst_42730);
var inst_42733 = (inst_42732 > (0));
var state_42758__$1 = state_42758;
if(cljs.core.truth_(inst_42733)){
var statearr_42767_42791 = state_42758__$1;
(statearr_42767_42791[(1)] = (4));

} else {
var statearr_42768_42792 = state_42758__$1;
(statearr_42768_42792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (11))){
var inst_42730 = (state_42758[(10)]);
var inst_42747 = (state_42758[(2)]);
var tmp42766 = inst_42730;
var inst_42730__$1 = tmp42766;
var state_42758__$1 = (function (){var statearr_42769 = state_42758;
(statearr_42769[(10)] = inst_42730__$1);

(statearr_42769[(11)] = inst_42747);

return statearr_42769;
})();
var statearr_42770_42793 = state_42758__$1;
(statearr_42770_42793[(2)] = null);

(statearr_42770_42793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (9))){
var inst_42738 = (state_42758[(8)]);
var state_42758__$1 = state_42758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42758__$1,(11),out,inst_42738);
} else {
if((state_val_42759 === (5))){
var inst_42752 = cljs.core.async.close_BANG_.call(null,out);
var state_42758__$1 = state_42758;
var statearr_42771_42794 = state_42758__$1;
(statearr_42771_42794[(2)] = inst_42752);

(statearr_42771_42794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (10))){
var inst_42750 = (state_42758[(2)]);
var state_42758__$1 = state_42758;
var statearr_42772_42795 = state_42758__$1;
(statearr_42772_42795[(2)] = inst_42750);

(statearr_42772_42795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42759 === (8))){
var inst_42730 = (state_42758[(10)]);
var inst_42739 = (state_42758[(9)]);
var inst_42737 = (state_42758[(7)]);
var inst_42738 = (state_42758[(8)]);
var inst_42742 = (function (){var cs = inst_42730;
var vec__42735 = inst_42737;
var v = inst_42738;
var c = inst_42739;
return ((function (cs,vec__42735,v,c,inst_42730,inst_42739,inst_42737,inst_42738,state_val_42759,c__32151__auto___42786,out){
return (function (p1__42725_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42725_SHARP_);
});
;})(cs,vec__42735,v,c,inst_42730,inst_42739,inst_42737,inst_42738,state_val_42759,c__32151__auto___42786,out))
})();
var inst_42743 = cljs.core.filterv.call(null,inst_42742,inst_42730);
var inst_42730__$1 = inst_42743;
var state_42758__$1 = (function (){var statearr_42773 = state_42758;
(statearr_42773[(10)] = inst_42730__$1);

return statearr_42773;
})();
var statearr_42774_42796 = state_42758__$1;
(statearr_42774_42796[(2)] = null);

(statearr_42774_42796[(1)] = (2));


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
});})(c__32151__auto___42786,out))
;
return ((function (switch__32086__auto__,c__32151__auto___42786,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_42778 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42778[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_42778[(1)] = (1));

return statearr_42778;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_42758){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42779){if((e42779 instanceof Object)){
var ex__32090__auto__ = e42779;
var statearr_42780_42797 = state_42758;
(statearr_42780_42797[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42798 = state_42758;
state_42758 = G__42798;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_42758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_42758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42786,out))
})();
var state__32153__auto__ = (function (){var statearr_42781 = f__32152__auto__.call(null);
(statearr_42781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42786);

return statearr_42781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42786,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args42799 = [];
var len__26295__auto___42848 = arguments.length;
var i__26296__auto___42849 = (0);
while(true){
if((i__26296__auto___42849 < len__26295__auto___42848)){
args42799.push((arguments[i__26296__auto___42849]));

var G__42850 = (i__26296__auto___42849 + (1));
i__26296__auto___42849 = G__42850;
continue;
} else {
}
break;
}

var G__42801 = args42799.length;
switch (G__42801) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42799.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___42852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42852,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42852,out){
return (function (state_42825){
var state_val_42826 = (state_42825[(1)]);
if((state_val_42826 === (7))){
var inst_42807 = (state_42825[(7)]);
var inst_42807__$1 = (state_42825[(2)]);
var inst_42808 = (inst_42807__$1 == null);
var inst_42809 = cljs.core.not.call(null,inst_42808);
var state_42825__$1 = (function (){var statearr_42827 = state_42825;
(statearr_42827[(7)] = inst_42807__$1);

return statearr_42827;
})();
if(inst_42809){
var statearr_42828_42853 = state_42825__$1;
(statearr_42828_42853[(1)] = (8));

} else {
var statearr_42829_42854 = state_42825__$1;
(statearr_42829_42854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (1))){
var inst_42802 = (0);
var state_42825__$1 = (function (){var statearr_42830 = state_42825;
(statearr_42830[(8)] = inst_42802);

return statearr_42830;
})();
var statearr_42831_42855 = state_42825__$1;
(statearr_42831_42855[(2)] = null);

(statearr_42831_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (4))){
var state_42825__$1 = state_42825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42825__$1,(7),ch);
} else {
if((state_val_42826 === (6))){
var inst_42820 = (state_42825[(2)]);
var state_42825__$1 = state_42825;
var statearr_42832_42856 = state_42825__$1;
(statearr_42832_42856[(2)] = inst_42820);

(statearr_42832_42856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (3))){
var inst_42822 = (state_42825[(2)]);
var inst_42823 = cljs.core.async.close_BANG_.call(null,out);
var state_42825__$1 = (function (){var statearr_42833 = state_42825;
(statearr_42833[(9)] = inst_42822);

return statearr_42833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42825__$1,inst_42823);
} else {
if((state_val_42826 === (2))){
var inst_42802 = (state_42825[(8)]);
var inst_42804 = (inst_42802 < n);
var state_42825__$1 = state_42825;
if(cljs.core.truth_(inst_42804)){
var statearr_42834_42857 = state_42825__$1;
(statearr_42834_42857[(1)] = (4));

} else {
var statearr_42835_42858 = state_42825__$1;
(statearr_42835_42858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (11))){
var inst_42802 = (state_42825[(8)]);
var inst_42812 = (state_42825[(2)]);
var inst_42813 = (inst_42802 + (1));
var inst_42802__$1 = inst_42813;
var state_42825__$1 = (function (){var statearr_42836 = state_42825;
(statearr_42836[(8)] = inst_42802__$1);

(statearr_42836[(10)] = inst_42812);

return statearr_42836;
})();
var statearr_42837_42859 = state_42825__$1;
(statearr_42837_42859[(2)] = null);

(statearr_42837_42859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (9))){
var state_42825__$1 = state_42825;
var statearr_42838_42860 = state_42825__$1;
(statearr_42838_42860[(2)] = null);

(statearr_42838_42860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (5))){
var state_42825__$1 = state_42825;
var statearr_42839_42861 = state_42825__$1;
(statearr_42839_42861[(2)] = null);

(statearr_42839_42861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (10))){
var inst_42817 = (state_42825[(2)]);
var state_42825__$1 = state_42825;
var statearr_42840_42862 = state_42825__$1;
(statearr_42840_42862[(2)] = inst_42817);

(statearr_42840_42862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42826 === (8))){
var inst_42807 = (state_42825[(7)]);
var state_42825__$1 = state_42825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42825__$1,(11),out,inst_42807);
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
});})(c__32151__auto___42852,out))
;
return ((function (switch__32086__auto__,c__32151__auto___42852,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_42844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42844[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_42844[(1)] = (1));

return statearr_42844;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_42825){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42845){if((e42845 instanceof Object)){
var ex__32090__auto__ = e42845;
var statearr_42846_42863 = state_42825;
(statearr_42846_42863[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42864 = state_42825;
state_42825 = G__42864;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_42825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_42825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42852,out))
})();
var state__32153__auto__ = (function (){var statearr_42847 = f__32152__auto__.call(null);
(statearr_42847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42852);

return statearr_42847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42852,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t42872 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42872 = (function (map_LT_,f,ch,meta42873){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42873 = meta42873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42874,meta42873__$1){
var self__ = this;
var _42874__$1 = this;
return (new cljs.core.async.t42872(self__.map_LT_,self__.f,self__.ch,meta42873__$1));
});

cljs.core.async.t42872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42874){
var self__ = this;
var _42874__$1 = this;
return self__.meta42873;
});

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t42875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42875 = (function (map_LT_,f,ch,meta42873,_,fn1,meta42876){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42873 = meta42873;
this._ = _;
this.fn1 = fn1;
this.meta42876 = meta42876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42877,meta42876__$1){
var self__ = this;
var _42877__$1 = this;
return (new cljs.core.async.t42875(self__.map_LT_,self__.f,self__.ch,self__.meta42873,self__._,self__.fn1,meta42876__$1));
});})(___$1))
;

cljs.core.async.t42875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42877){
var self__ = this;
var _42877__$1 = this;
return self__.meta42876;
});})(___$1))
;

cljs.core.async.t42875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t42875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42865_SHARP_){
return f1.call(null,(((p1__42865_SHARP_ == null))?null:self__.f.call(null,p1__42865_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t42875.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42873","meta42873",-653742360,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t42872","cljs.core.async/t42872",-1445585547,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42876","meta42876",402169492,null)], null);
});})(___$1))
;

cljs.core.async.t42875.cljs$lang$type = true;

cljs.core.async.t42875.cljs$lang$ctorStr = "cljs.core.async/t42875";

cljs.core.async.t42875.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42875");
});})(___$1))
;

cljs.core.async.__GT_t42875 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t42875(map_LT___$1,f__$1,ch__$1,meta42873__$1,___$2,fn1__$1,meta42876){
return (new cljs.core.async.t42875(map_LT___$1,f__$1,ch__$1,meta42873__$1,___$2,fn1__$1,meta42876));
});})(___$1))
;

}

return (new cljs.core.async.t42875(self__.map_LT_,self__.f,self__.ch,self__.meta42873,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25244__auto__ = ret;
if(cljs.core.truth_(and__25244__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25244__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t42872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42873","meta42873",-653742360,null)], null);
});

cljs.core.async.t42872.cljs$lang$type = true;

cljs.core.async.t42872.cljs$lang$ctorStr = "cljs.core.async/t42872";

cljs.core.async.t42872.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42872");
});

cljs.core.async.__GT_t42872 = (function cljs$core$async$map_LT__$___GT_t42872(map_LT___$1,f__$1,ch__$1,meta42873){
return (new cljs.core.async.t42872(map_LT___$1,f__$1,ch__$1,meta42873));
});

}

return (new cljs.core.async.t42872(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t42881 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42881 = (function (map_GT_,f,ch,meta42882){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42882 = meta42882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42883,meta42882__$1){
var self__ = this;
var _42883__$1 = this;
return (new cljs.core.async.t42881(self__.map_GT_,self__.f,self__.ch,meta42882__$1));
});

cljs.core.async.t42881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42883){
var self__ = this;
var _42883__$1 = this;
return self__.meta42882;
});

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t42881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42882","meta42882",-518680077,null)], null);
});

cljs.core.async.t42881.cljs$lang$type = true;

cljs.core.async.t42881.cljs$lang$ctorStr = "cljs.core.async/t42881";

cljs.core.async.t42881.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42881");
});

cljs.core.async.__GT_t42881 = (function cljs$core$async$map_GT__$___GT_t42881(map_GT___$1,f__$1,ch__$1,meta42882){
return (new cljs.core.async.t42881(map_GT___$1,f__$1,ch__$1,meta42882));
});

}

return (new cljs.core.async.t42881(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t42887 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42887 = (function (filter_GT_,p,ch,meta42888){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42888 = meta42888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42889,meta42888__$1){
var self__ = this;
var _42889__$1 = this;
return (new cljs.core.async.t42887(self__.filter_GT_,self__.p,self__.ch,meta42888__$1));
});

cljs.core.async.t42887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42889){
var self__ = this;
var _42889__$1 = this;
return self__.meta42888;
});

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t42887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t42887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42888","meta42888",-158359616,null)], null);
});

cljs.core.async.t42887.cljs$lang$type = true;

cljs.core.async.t42887.cljs$lang$ctorStr = "cljs.core.async/t42887";

cljs.core.async.t42887.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"cljs.core.async/t42887");
});

cljs.core.async.__GT_t42887 = (function cljs$core$async$filter_GT__$___GT_t42887(filter_GT___$1,p__$1,ch__$1,meta42888){
return (new cljs.core.async.t42887(filter_GT___$1,p__$1,ch__$1,meta42888));
});

}

return (new cljs.core.async.t42887(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args42890 = [];
var len__26295__auto___42934 = arguments.length;
var i__26296__auto___42935 = (0);
while(true){
if((i__26296__auto___42935 < len__26295__auto___42934)){
args42890.push((arguments[i__26296__auto___42935]));

var G__42936 = (i__26296__auto___42935 + (1));
i__26296__auto___42935 = G__42936;
continue;
} else {
}
break;
}

var G__42892 = args42890.length;
switch (G__42892) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42890.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___42938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___42938,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___42938,out){
return (function (state_42913){
var state_val_42914 = (state_42913[(1)]);
if((state_val_42914 === (7))){
var inst_42909 = (state_42913[(2)]);
var state_42913__$1 = state_42913;
var statearr_42915_42939 = state_42913__$1;
(statearr_42915_42939[(2)] = inst_42909);

(statearr_42915_42939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (1))){
var state_42913__$1 = state_42913;
var statearr_42916_42940 = state_42913__$1;
(statearr_42916_42940[(2)] = null);

(statearr_42916_42940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (4))){
var inst_42895 = (state_42913[(7)]);
var inst_42895__$1 = (state_42913[(2)]);
var inst_42896 = (inst_42895__$1 == null);
var state_42913__$1 = (function (){var statearr_42917 = state_42913;
(statearr_42917[(7)] = inst_42895__$1);

return statearr_42917;
})();
if(cljs.core.truth_(inst_42896)){
var statearr_42918_42941 = state_42913__$1;
(statearr_42918_42941[(1)] = (5));

} else {
var statearr_42919_42942 = state_42913__$1;
(statearr_42919_42942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (6))){
var inst_42895 = (state_42913[(7)]);
var inst_42900 = p.call(null,inst_42895);
var state_42913__$1 = state_42913;
if(cljs.core.truth_(inst_42900)){
var statearr_42920_42943 = state_42913__$1;
(statearr_42920_42943[(1)] = (8));

} else {
var statearr_42921_42944 = state_42913__$1;
(statearr_42921_42944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (3))){
var inst_42911 = (state_42913[(2)]);
var state_42913__$1 = state_42913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42913__$1,inst_42911);
} else {
if((state_val_42914 === (2))){
var state_42913__$1 = state_42913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42913__$1,(4),ch);
} else {
if((state_val_42914 === (11))){
var inst_42903 = (state_42913[(2)]);
var state_42913__$1 = state_42913;
var statearr_42922_42945 = state_42913__$1;
(statearr_42922_42945[(2)] = inst_42903);

(statearr_42922_42945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (9))){
var state_42913__$1 = state_42913;
var statearr_42923_42946 = state_42913__$1;
(statearr_42923_42946[(2)] = null);

(statearr_42923_42946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (5))){
var inst_42898 = cljs.core.async.close_BANG_.call(null,out);
var state_42913__$1 = state_42913;
var statearr_42924_42947 = state_42913__$1;
(statearr_42924_42947[(2)] = inst_42898);

(statearr_42924_42947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (10))){
var inst_42906 = (state_42913[(2)]);
var state_42913__$1 = (function (){var statearr_42925 = state_42913;
(statearr_42925[(8)] = inst_42906);

return statearr_42925;
})();
var statearr_42926_42948 = state_42913__$1;
(statearr_42926_42948[(2)] = null);

(statearr_42926_42948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42914 === (8))){
var inst_42895 = (state_42913[(7)]);
var state_42913__$1 = state_42913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42913__$1,(11),out,inst_42895);
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
});})(c__32151__auto___42938,out))
;
return ((function (switch__32086__auto__,c__32151__auto___42938,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_42930 = [null,null,null,null,null,null,null,null,null];
(statearr_42930[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_42930[(1)] = (1));

return statearr_42930;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_42913){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_42913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e42931){if((e42931 instanceof Object)){
var ex__32090__auto__ = e42931;
var statearr_42932_42949 = state_42913;
(statearr_42932_42949[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42950 = state_42913;
state_42913 = G__42950;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_42913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_42913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___42938,out))
})();
var state__32153__auto__ = (function (){var statearr_42933 = f__32152__auto__.call(null);
(statearr_42933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___42938);

return statearr_42933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___42938,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args42951 = [];
var len__26295__auto___42954 = arguments.length;
var i__26296__auto___42955 = (0);
while(true){
if((i__26296__auto___42955 < len__26295__auto___42954)){
args42951.push((arguments[i__26296__auto___42955]));

var G__42956 = (i__26296__auto___42955 + (1));
i__26296__auto___42955 = G__42956;
continue;
} else {
}
break;
}

var G__42953 = args42951.length;
switch (G__42953) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42951.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto__){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto__){
return (function (state_43123){
var state_val_43124 = (state_43123[(1)]);
if((state_val_43124 === (7))){
var inst_43119 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
var statearr_43125_43166 = state_43123__$1;
(statearr_43125_43166[(2)] = inst_43119);

(statearr_43125_43166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (20))){
var inst_43089 = (state_43123[(7)]);
var inst_43100 = (state_43123[(2)]);
var inst_43101 = cljs.core.next.call(null,inst_43089);
var inst_43075 = inst_43101;
var inst_43076 = null;
var inst_43077 = (0);
var inst_43078 = (0);
var state_43123__$1 = (function (){var statearr_43126 = state_43123;
(statearr_43126[(8)] = inst_43075);

(statearr_43126[(9)] = inst_43077);

(statearr_43126[(10)] = inst_43076);

(statearr_43126[(11)] = inst_43078);

(statearr_43126[(12)] = inst_43100);

return statearr_43126;
})();
var statearr_43127_43167 = state_43123__$1;
(statearr_43127_43167[(2)] = null);

(statearr_43127_43167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (1))){
var state_43123__$1 = state_43123;
var statearr_43128_43168 = state_43123__$1;
(statearr_43128_43168[(2)] = null);

(statearr_43128_43168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (4))){
var inst_43064 = (state_43123[(13)]);
var inst_43064__$1 = (state_43123[(2)]);
var inst_43065 = (inst_43064__$1 == null);
var state_43123__$1 = (function (){var statearr_43129 = state_43123;
(statearr_43129[(13)] = inst_43064__$1);

return statearr_43129;
})();
if(cljs.core.truth_(inst_43065)){
var statearr_43130_43169 = state_43123__$1;
(statearr_43130_43169[(1)] = (5));

} else {
var statearr_43131_43170 = state_43123__$1;
(statearr_43131_43170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (15))){
var state_43123__$1 = state_43123;
var statearr_43135_43171 = state_43123__$1;
(statearr_43135_43171[(2)] = null);

(statearr_43135_43171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (21))){
var state_43123__$1 = state_43123;
var statearr_43136_43172 = state_43123__$1;
(statearr_43136_43172[(2)] = null);

(statearr_43136_43172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (13))){
var inst_43075 = (state_43123[(8)]);
var inst_43077 = (state_43123[(9)]);
var inst_43076 = (state_43123[(10)]);
var inst_43078 = (state_43123[(11)]);
var inst_43085 = (state_43123[(2)]);
var inst_43086 = (inst_43078 + (1));
var tmp43132 = inst_43075;
var tmp43133 = inst_43077;
var tmp43134 = inst_43076;
var inst_43075__$1 = tmp43132;
var inst_43076__$1 = tmp43134;
var inst_43077__$1 = tmp43133;
var inst_43078__$1 = inst_43086;
var state_43123__$1 = (function (){var statearr_43137 = state_43123;
(statearr_43137[(8)] = inst_43075__$1);

(statearr_43137[(9)] = inst_43077__$1);

(statearr_43137[(10)] = inst_43076__$1);

(statearr_43137[(14)] = inst_43085);

(statearr_43137[(11)] = inst_43078__$1);

return statearr_43137;
})();
var statearr_43138_43173 = state_43123__$1;
(statearr_43138_43173[(2)] = null);

(statearr_43138_43173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (22))){
var state_43123__$1 = state_43123;
var statearr_43139_43174 = state_43123__$1;
(statearr_43139_43174[(2)] = null);

(statearr_43139_43174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (6))){
var inst_43064 = (state_43123[(13)]);
var inst_43073 = f.call(null,inst_43064);
var inst_43074 = cljs.core.seq.call(null,inst_43073);
var inst_43075 = inst_43074;
var inst_43076 = null;
var inst_43077 = (0);
var inst_43078 = (0);
var state_43123__$1 = (function (){var statearr_43140 = state_43123;
(statearr_43140[(8)] = inst_43075);

(statearr_43140[(9)] = inst_43077);

(statearr_43140[(10)] = inst_43076);

(statearr_43140[(11)] = inst_43078);

return statearr_43140;
})();
var statearr_43141_43175 = state_43123__$1;
(statearr_43141_43175[(2)] = null);

(statearr_43141_43175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (17))){
var inst_43089 = (state_43123[(7)]);
var inst_43093 = cljs.core.chunk_first.call(null,inst_43089);
var inst_43094 = cljs.core.chunk_rest.call(null,inst_43089);
var inst_43095 = cljs.core.count.call(null,inst_43093);
var inst_43075 = inst_43094;
var inst_43076 = inst_43093;
var inst_43077 = inst_43095;
var inst_43078 = (0);
var state_43123__$1 = (function (){var statearr_43142 = state_43123;
(statearr_43142[(8)] = inst_43075);

(statearr_43142[(9)] = inst_43077);

(statearr_43142[(10)] = inst_43076);

(statearr_43142[(11)] = inst_43078);

return statearr_43142;
})();
var statearr_43143_43176 = state_43123__$1;
(statearr_43143_43176[(2)] = null);

(statearr_43143_43176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (3))){
var inst_43121 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43123__$1,inst_43121);
} else {
if((state_val_43124 === (12))){
var inst_43109 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
var statearr_43144_43177 = state_43123__$1;
(statearr_43144_43177[(2)] = inst_43109);

(statearr_43144_43177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (2))){
var state_43123__$1 = state_43123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43123__$1,(4),in$);
} else {
if((state_val_43124 === (23))){
var inst_43117 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
var statearr_43145_43178 = state_43123__$1;
(statearr_43145_43178[(2)] = inst_43117);

(statearr_43145_43178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (19))){
var inst_43104 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
var statearr_43146_43179 = state_43123__$1;
(statearr_43146_43179[(2)] = inst_43104);

(statearr_43146_43179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (11))){
var inst_43075 = (state_43123[(8)]);
var inst_43089 = (state_43123[(7)]);
var inst_43089__$1 = cljs.core.seq.call(null,inst_43075);
var state_43123__$1 = (function (){var statearr_43147 = state_43123;
(statearr_43147[(7)] = inst_43089__$1);

return statearr_43147;
})();
if(inst_43089__$1){
var statearr_43148_43180 = state_43123__$1;
(statearr_43148_43180[(1)] = (14));

} else {
var statearr_43149_43181 = state_43123__$1;
(statearr_43149_43181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (9))){
var inst_43111 = (state_43123[(2)]);
var inst_43112 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43123__$1 = (function (){var statearr_43150 = state_43123;
(statearr_43150[(15)] = inst_43111);

return statearr_43150;
})();
if(cljs.core.truth_(inst_43112)){
var statearr_43151_43182 = state_43123__$1;
(statearr_43151_43182[(1)] = (21));

} else {
var statearr_43152_43183 = state_43123__$1;
(statearr_43152_43183[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (5))){
var inst_43067 = cljs.core.async.close_BANG_.call(null,out);
var state_43123__$1 = state_43123;
var statearr_43153_43184 = state_43123__$1;
(statearr_43153_43184[(2)] = inst_43067);

(statearr_43153_43184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (14))){
var inst_43089 = (state_43123[(7)]);
var inst_43091 = cljs.core.chunked_seq_QMARK_.call(null,inst_43089);
var state_43123__$1 = state_43123;
if(inst_43091){
var statearr_43154_43185 = state_43123__$1;
(statearr_43154_43185[(1)] = (17));

} else {
var statearr_43155_43186 = state_43123__$1;
(statearr_43155_43186[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (16))){
var inst_43107 = (state_43123[(2)]);
var state_43123__$1 = state_43123;
var statearr_43156_43187 = state_43123__$1;
(statearr_43156_43187[(2)] = inst_43107);

(statearr_43156_43187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43124 === (10))){
var inst_43076 = (state_43123[(10)]);
var inst_43078 = (state_43123[(11)]);
var inst_43083 = cljs.core._nth.call(null,inst_43076,inst_43078);
var state_43123__$1 = state_43123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43123__$1,(13),out,inst_43083);
} else {
if((state_val_43124 === (18))){
var inst_43089 = (state_43123[(7)]);
var inst_43098 = cljs.core.first.call(null,inst_43089);
var state_43123__$1 = state_43123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43123__$1,(20),out,inst_43098);
} else {
if((state_val_43124 === (8))){
var inst_43077 = (state_43123[(9)]);
var inst_43078 = (state_43123[(11)]);
var inst_43080 = (inst_43078 < inst_43077);
var inst_43081 = inst_43080;
var state_43123__$1 = state_43123;
if(cljs.core.truth_(inst_43081)){
var statearr_43157_43188 = state_43123__$1;
(statearr_43157_43188[(1)] = (10));

} else {
var statearr_43158_43189 = state_43123__$1;
(statearr_43158_43189[(1)] = (11));

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
});})(c__32151__auto__))
;
return ((function (switch__32086__auto__,c__32151__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____0 = (function (){
var statearr_43162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43162[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__);

(statearr_43162[(1)] = (1));

return statearr_43162;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____1 = (function (state_43123){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_43123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e43163){if((e43163 instanceof Object)){
var ex__32090__auto__ = e43163;
var statearr_43164_43190 = state_43123;
(statearr_43164_43190[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43191 = state_43123;
state_43123 = G__43191;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__ = function(state_43123){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____1.call(this,state_43123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32087__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto__))
})();
var state__32153__auto__ = (function (){var statearr_43165 = f__32152__auto__.call(null);
(statearr_43165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto__);

return statearr_43165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto__))
);

return c__32151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args43192 = [];
var len__26295__auto___43195 = arguments.length;
var i__26296__auto___43196 = (0);
while(true){
if((i__26296__auto___43196 < len__26295__auto___43195)){
args43192.push((arguments[i__26296__auto___43196]));

var G__43197 = (i__26296__auto___43196 + (1));
i__26296__auto___43196 = G__43197;
continue;
} else {
}
break;
}

var G__43194 = args43192.length;
switch (G__43194) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43192.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args43199 = [];
var len__26295__auto___43202 = arguments.length;
var i__26296__auto___43203 = (0);
while(true){
if((i__26296__auto___43203 < len__26295__auto___43202)){
args43199.push((arguments[i__26296__auto___43203]));

var G__43204 = (i__26296__auto___43203 + (1));
i__26296__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var G__43201 = args43199.length;
switch (G__43201) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43199.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args43206 = [];
var len__26295__auto___43257 = arguments.length;
var i__26296__auto___43258 = (0);
while(true){
if((i__26296__auto___43258 < len__26295__auto___43257)){
args43206.push((arguments[i__26296__auto___43258]));

var G__43259 = (i__26296__auto___43258 + (1));
i__26296__auto___43258 = G__43259;
continue;
} else {
}
break;
}

var G__43208 = args43206.length;
switch (G__43208) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43206.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___43261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___43261,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___43261,out){
return (function (state_43232){
var state_val_43233 = (state_43232[(1)]);
if((state_val_43233 === (7))){
var inst_43227 = (state_43232[(2)]);
var state_43232__$1 = state_43232;
var statearr_43234_43262 = state_43232__$1;
(statearr_43234_43262[(2)] = inst_43227);

(statearr_43234_43262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (1))){
var inst_43209 = null;
var state_43232__$1 = (function (){var statearr_43235 = state_43232;
(statearr_43235[(7)] = inst_43209);

return statearr_43235;
})();
var statearr_43236_43263 = state_43232__$1;
(statearr_43236_43263[(2)] = null);

(statearr_43236_43263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (4))){
var inst_43212 = (state_43232[(8)]);
var inst_43212__$1 = (state_43232[(2)]);
var inst_43213 = (inst_43212__$1 == null);
var inst_43214 = cljs.core.not.call(null,inst_43213);
var state_43232__$1 = (function (){var statearr_43237 = state_43232;
(statearr_43237[(8)] = inst_43212__$1);

return statearr_43237;
})();
if(inst_43214){
var statearr_43238_43264 = state_43232__$1;
(statearr_43238_43264[(1)] = (5));

} else {
var statearr_43239_43265 = state_43232__$1;
(statearr_43239_43265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (6))){
var state_43232__$1 = state_43232;
var statearr_43240_43266 = state_43232__$1;
(statearr_43240_43266[(2)] = null);

(statearr_43240_43266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (3))){
var inst_43229 = (state_43232[(2)]);
var inst_43230 = cljs.core.async.close_BANG_.call(null,out);
var state_43232__$1 = (function (){var statearr_43241 = state_43232;
(statearr_43241[(9)] = inst_43229);

return statearr_43241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43232__$1,inst_43230);
} else {
if((state_val_43233 === (2))){
var state_43232__$1 = state_43232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43232__$1,(4),ch);
} else {
if((state_val_43233 === (11))){
var inst_43212 = (state_43232[(8)]);
var inst_43221 = (state_43232[(2)]);
var inst_43209 = inst_43212;
var state_43232__$1 = (function (){var statearr_43242 = state_43232;
(statearr_43242[(7)] = inst_43209);

(statearr_43242[(10)] = inst_43221);

return statearr_43242;
})();
var statearr_43243_43267 = state_43232__$1;
(statearr_43243_43267[(2)] = null);

(statearr_43243_43267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (9))){
var inst_43212 = (state_43232[(8)]);
var state_43232__$1 = state_43232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43232__$1,(11),out,inst_43212);
} else {
if((state_val_43233 === (5))){
var inst_43209 = (state_43232[(7)]);
var inst_43212 = (state_43232[(8)]);
var inst_43216 = cljs.core._EQ_.call(null,inst_43212,inst_43209);
var state_43232__$1 = state_43232;
if(inst_43216){
var statearr_43245_43268 = state_43232__$1;
(statearr_43245_43268[(1)] = (8));

} else {
var statearr_43246_43269 = state_43232__$1;
(statearr_43246_43269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (10))){
var inst_43224 = (state_43232[(2)]);
var state_43232__$1 = state_43232;
var statearr_43247_43270 = state_43232__$1;
(statearr_43247_43270[(2)] = inst_43224);

(statearr_43247_43270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (8))){
var inst_43209 = (state_43232[(7)]);
var tmp43244 = inst_43209;
var inst_43209__$1 = tmp43244;
var state_43232__$1 = (function (){var statearr_43248 = state_43232;
(statearr_43248[(7)] = inst_43209__$1);

return statearr_43248;
})();
var statearr_43249_43271 = state_43232__$1;
(statearr_43249_43271[(2)] = null);

(statearr_43249_43271[(1)] = (2));


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
});})(c__32151__auto___43261,out))
;
return ((function (switch__32086__auto__,c__32151__auto___43261,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_43253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43253[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_43253[(1)] = (1));

return statearr_43253;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_43232){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_43232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e43254){if((e43254 instanceof Object)){
var ex__32090__auto__ = e43254;
var statearr_43255_43272 = state_43232;
(statearr_43255_43272[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43273 = state_43232;
state_43232 = G__43273;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_43232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_43232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___43261,out))
})();
var state__32153__auto__ = (function (){var statearr_43256 = f__32152__auto__.call(null);
(statearr_43256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___43261);

return statearr_43256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___43261,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args43274 = [];
var len__26295__auto___43344 = arguments.length;
var i__26296__auto___43345 = (0);
while(true){
if((i__26296__auto___43345 < len__26295__auto___43344)){
args43274.push((arguments[i__26296__auto___43345]));

var G__43346 = (i__26296__auto___43345 + (1));
i__26296__auto___43345 = G__43346;
continue;
} else {
}
break;
}

var G__43276 = args43274.length;
switch (G__43276) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43274.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___43348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___43348,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___43348,out){
return (function (state_43314){
var state_val_43315 = (state_43314[(1)]);
if((state_val_43315 === (7))){
var inst_43310 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
var statearr_43316_43349 = state_43314__$1;
(statearr_43316_43349[(2)] = inst_43310);

(statearr_43316_43349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (1))){
var inst_43277 = (new Array(n));
var inst_43278 = inst_43277;
var inst_43279 = (0);
var state_43314__$1 = (function (){var statearr_43317 = state_43314;
(statearr_43317[(7)] = inst_43279);

(statearr_43317[(8)] = inst_43278);

return statearr_43317;
})();
var statearr_43318_43350 = state_43314__$1;
(statearr_43318_43350[(2)] = null);

(statearr_43318_43350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (4))){
var inst_43282 = (state_43314[(9)]);
var inst_43282__$1 = (state_43314[(2)]);
var inst_43283 = (inst_43282__$1 == null);
var inst_43284 = cljs.core.not.call(null,inst_43283);
var state_43314__$1 = (function (){var statearr_43319 = state_43314;
(statearr_43319[(9)] = inst_43282__$1);

return statearr_43319;
})();
if(inst_43284){
var statearr_43320_43351 = state_43314__$1;
(statearr_43320_43351[(1)] = (5));

} else {
var statearr_43321_43352 = state_43314__$1;
(statearr_43321_43352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (15))){
var inst_43304 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
var statearr_43322_43353 = state_43314__$1;
(statearr_43322_43353[(2)] = inst_43304);

(statearr_43322_43353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (13))){
var state_43314__$1 = state_43314;
var statearr_43323_43354 = state_43314__$1;
(statearr_43323_43354[(2)] = null);

(statearr_43323_43354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (6))){
var inst_43279 = (state_43314[(7)]);
var inst_43300 = (inst_43279 > (0));
var state_43314__$1 = state_43314;
if(cljs.core.truth_(inst_43300)){
var statearr_43324_43355 = state_43314__$1;
(statearr_43324_43355[(1)] = (12));

} else {
var statearr_43325_43356 = state_43314__$1;
(statearr_43325_43356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (3))){
var inst_43312 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43314__$1,inst_43312);
} else {
if((state_val_43315 === (12))){
var inst_43278 = (state_43314[(8)]);
var inst_43302 = cljs.core.vec.call(null,inst_43278);
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43314__$1,(15),out,inst_43302);
} else {
if((state_val_43315 === (2))){
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43314__$1,(4),ch);
} else {
if((state_val_43315 === (11))){
var inst_43294 = (state_43314[(2)]);
var inst_43295 = (new Array(n));
var inst_43278 = inst_43295;
var inst_43279 = (0);
var state_43314__$1 = (function (){var statearr_43326 = state_43314;
(statearr_43326[(10)] = inst_43294);

(statearr_43326[(7)] = inst_43279);

(statearr_43326[(8)] = inst_43278);

return statearr_43326;
})();
var statearr_43327_43357 = state_43314__$1;
(statearr_43327_43357[(2)] = null);

(statearr_43327_43357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (9))){
var inst_43278 = (state_43314[(8)]);
var inst_43292 = cljs.core.vec.call(null,inst_43278);
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43314__$1,(11),out,inst_43292);
} else {
if((state_val_43315 === (5))){
var inst_43282 = (state_43314[(9)]);
var inst_43279 = (state_43314[(7)]);
var inst_43278 = (state_43314[(8)]);
var inst_43287 = (state_43314[(11)]);
var inst_43286 = (inst_43278[inst_43279] = inst_43282);
var inst_43287__$1 = (inst_43279 + (1));
var inst_43288 = (inst_43287__$1 < n);
var state_43314__$1 = (function (){var statearr_43328 = state_43314;
(statearr_43328[(12)] = inst_43286);

(statearr_43328[(11)] = inst_43287__$1);

return statearr_43328;
})();
if(cljs.core.truth_(inst_43288)){
var statearr_43329_43358 = state_43314__$1;
(statearr_43329_43358[(1)] = (8));

} else {
var statearr_43330_43359 = state_43314__$1;
(statearr_43330_43359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (14))){
var inst_43307 = (state_43314[(2)]);
var inst_43308 = cljs.core.async.close_BANG_.call(null,out);
var state_43314__$1 = (function (){var statearr_43332 = state_43314;
(statearr_43332[(13)] = inst_43307);

return statearr_43332;
})();
var statearr_43333_43360 = state_43314__$1;
(statearr_43333_43360[(2)] = inst_43308);

(statearr_43333_43360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (10))){
var inst_43298 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
var statearr_43334_43361 = state_43314__$1;
(statearr_43334_43361[(2)] = inst_43298);

(statearr_43334_43361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43315 === (8))){
var inst_43278 = (state_43314[(8)]);
var inst_43287 = (state_43314[(11)]);
var tmp43331 = inst_43278;
var inst_43278__$1 = tmp43331;
var inst_43279 = inst_43287;
var state_43314__$1 = (function (){var statearr_43335 = state_43314;
(statearr_43335[(7)] = inst_43279);

(statearr_43335[(8)] = inst_43278__$1);

return statearr_43335;
})();
var statearr_43336_43362 = state_43314__$1;
(statearr_43336_43362[(2)] = null);

(statearr_43336_43362[(1)] = (2));


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
});})(c__32151__auto___43348,out))
;
return ((function (switch__32086__auto__,c__32151__auto___43348,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_43340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43340[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_43340[(1)] = (1));

return statearr_43340;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_43314){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_43314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e43341){if((e43341 instanceof Object)){
var ex__32090__auto__ = e43341;
var statearr_43342_43363 = state_43314;
(statearr_43342_43363[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43364 = state_43314;
state_43314 = G__43364;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_43314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_43314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___43348,out))
})();
var state__32153__auto__ = (function (){var statearr_43343 = f__32152__auto__.call(null);
(statearr_43343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___43348);

return statearr_43343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___43348,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args43365 = [];
var len__26295__auto___43439 = arguments.length;
var i__26296__auto___43440 = (0);
while(true){
if((i__26296__auto___43440 < len__26295__auto___43439)){
args43365.push((arguments[i__26296__auto___43440]));

var G__43441 = (i__26296__auto___43440 + (1));
i__26296__auto___43440 = G__43441;
continue;
} else {
}
break;
}

var G__43367 = args43365.length;
switch (G__43367) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43365.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32151__auto___43443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32151__auto___43443,out){
return (function (){
var f__32152__auto__ = (function (){var switch__32086__auto__ = ((function (c__32151__auto___43443,out){
return (function (state_43409){
var state_val_43410 = (state_43409[(1)]);
if((state_val_43410 === (7))){
var inst_43405 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43411_43444 = state_43409__$1;
(statearr_43411_43444[(2)] = inst_43405);

(statearr_43411_43444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (1))){
var inst_43368 = [];
var inst_43369 = inst_43368;
var inst_43370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43409__$1 = (function (){var statearr_43412 = state_43409;
(statearr_43412[(7)] = inst_43370);

(statearr_43412[(8)] = inst_43369);

return statearr_43412;
})();
var statearr_43413_43445 = state_43409__$1;
(statearr_43413_43445[(2)] = null);

(statearr_43413_43445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (4))){
var inst_43373 = (state_43409[(9)]);
var inst_43373__$1 = (state_43409[(2)]);
var inst_43374 = (inst_43373__$1 == null);
var inst_43375 = cljs.core.not.call(null,inst_43374);
var state_43409__$1 = (function (){var statearr_43414 = state_43409;
(statearr_43414[(9)] = inst_43373__$1);

return statearr_43414;
})();
if(inst_43375){
var statearr_43415_43446 = state_43409__$1;
(statearr_43415_43446[(1)] = (5));

} else {
var statearr_43416_43447 = state_43409__$1;
(statearr_43416_43447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (15))){
var inst_43399 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43417_43448 = state_43409__$1;
(statearr_43417_43448[(2)] = inst_43399);

(statearr_43417_43448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (13))){
var state_43409__$1 = state_43409;
var statearr_43418_43449 = state_43409__$1;
(statearr_43418_43449[(2)] = null);

(statearr_43418_43449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (6))){
var inst_43369 = (state_43409[(8)]);
var inst_43394 = inst_43369.length;
var inst_43395 = (inst_43394 > (0));
var state_43409__$1 = state_43409;
if(cljs.core.truth_(inst_43395)){
var statearr_43419_43450 = state_43409__$1;
(statearr_43419_43450[(1)] = (12));

} else {
var statearr_43420_43451 = state_43409__$1;
(statearr_43420_43451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (3))){
var inst_43407 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43409__$1,inst_43407);
} else {
if((state_val_43410 === (12))){
var inst_43369 = (state_43409[(8)]);
var inst_43397 = cljs.core.vec.call(null,inst_43369);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43409__$1,(15),out,inst_43397);
} else {
if((state_val_43410 === (2))){
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43409__$1,(4),ch);
} else {
if((state_val_43410 === (11))){
var inst_43377 = (state_43409[(10)]);
var inst_43373 = (state_43409[(9)]);
var inst_43387 = (state_43409[(2)]);
var inst_43388 = [];
var inst_43389 = inst_43388.push(inst_43373);
var inst_43369 = inst_43388;
var inst_43370 = inst_43377;
var state_43409__$1 = (function (){var statearr_43421 = state_43409;
(statearr_43421[(7)] = inst_43370);

(statearr_43421[(11)] = inst_43389);

(statearr_43421[(12)] = inst_43387);

(statearr_43421[(8)] = inst_43369);

return statearr_43421;
})();
var statearr_43422_43452 = state_43409__$1;
(statearr_43422_43452[(2)] = null);

(statearr_43422_43452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (9))){
var inst_43369 = (state_43409[(8)]);
var inst_43385 = cljs.core.vec.call(null,inst_43369);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43409__$1,(11),out,inst_43385);
} else {
if((state_val_43410 === (5))){
var inst_43370 = (state_43409[(7)]);
var inst_43377 = (state_43409[(10)]);
var inst_43373 = (state_43409[(9)]);
var inst_43377__$1 = f.call(null,inst_43373);
var inst_43378 = cljs.core._EQ_.call(null,inst_43377__$1,inst_43370);
var inst_43379 = cljs.core.keyword_identical_QMARK_.call(null,inst_43370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43380 = (inst_43378) || (inst_43379);
var state_43409__$1 = (function (){var statearr_43423 = state_43409;
(statearr_43423[(10)] = inst_43377__$1);

return statearr_43423;
})();
if(cljs.core.truth_(inst_43380)){
var statearr_43424_43453 = state_43409__$1;
(statearr_43424_43453[(1)] = (8));

} else {
var statearr_43425_43454 = state_43409__$1;
(statearr_43425_43454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (14))){
var inst_43402 = (state_43409[(2)]);
var inst_43403 = cljs.core.async.close_BANG_.call(null,out);
var state_43409__$1 = (function (){var statearr_43427 = state_43409;
(statearr_43427[(13)] = inst_43402);

return statearr_43427;
})();
var statearr_43428_43455 = state_43409__$1;
(statearr_43428_43455[(2)] = inst_43403);

(statearr_43428_43455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (10))){
var inst_43392 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43429_43456 = state_43409__$1;
(statearr_43429_43456[(2)] = inst_43392);

(statearr_43429_43456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (8))){
var inst_43377 = (state_43409[(10)]);
var inst_43369 = (state_43409[(8)]);
var inst_43373 = (state_43409[(9)]);
var inst_43382 = inst_43369.push(inst_43373);
var tmp43426 = inst_43369;
var inst_43369__$1 = tmp43426;
var inst_43370 = inst_43377;
var state_43409__$1 = (function (){var statearr_43430 = state_43409;
(statearr_43430[(7)] = inst_43370);

(statearr_43430[(14)] = inst_43382);

(statearr_43430[(8)] = inst_43369__$1);

return statearr_43430;
})();
var statearr_43431_43457 = state_43409__$1;
(statearr_43431_43457[(2)] = null);

(statearr_43431_43457[(1)] = (2));


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
});})(c__32151__auto___43443,out))
;
return ((function (switch__32086__auto__,c__32151__auto___43443,out){
return (function() {
var cljs$core$async$state_machine__32087__auto__ = null;
var cljs$core$async$state_machine__32087__auto____0 = (function (){
var statearr_43435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43435[(0)] = cljs$core$async$state_machine__32087__auto__);

(statearr_43435[(1)] = (1));

return statearr_43435;
});
var cljs$core$async$state_machine__32087__auto____1 = (function (state_43409){
while(true){
var ret_value__32088__auto__ = (function (){try{while(true){
var result__32089__auto__ = switch__32086__auto__.call(null,state_43409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32089__auto__;
}
break;
}
}catch (e43436){if((e43436 instanceof Object)){
var ex__32090__auto__ = e43436;
var statearr_43437_43458 = state_43409;
(statearr_43437_43458[(5)] = ex__32090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43459 = state_43409;
state_43409 = G__43459;
continue;
} else {
return ret_value__32088__auto__;
}
break;
}
});
cljs$core$async$state_machine__32087__auto__ = function(state_43409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32087__auto____1.call(this,state_43409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32087__auto____0;
cljs$core$async$state_machine__32087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32087__auto____1;
return cljs$core$async$state_machine__32087__auto__;
})()
;})(switch__32086__auto__,c__32151__auto___43443,out))
})();
var state__32153__auto__ = (function (){var statearr_43438 = f__32152__auto__.call(null);
(statearr_43438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32151__auto___43443);

return statearr_43438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32153__auto__);
});})(c__32151__auto___43443,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map