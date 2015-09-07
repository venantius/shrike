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
if(typeof cljs.core.async.t34686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34686 = (function (fn_handler,f,meta34687){
this.fn_handler = fn_handler;
this.f = f;
this.meta34687 = meta34687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34688,meta34687__$1){
var self__ = this;
var _34688__$1 = this;
return (new cljs.core.async.t34686(self__.fn_handler,self__.f,meta34687__$1));
});

cljs.core.async.t34686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34688){
var self__ = this;
var _34688__$1 = this;
return self__.meta34687;
});

cljs.core.async.t34686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t34686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t34686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta34687","meta34687",797384247,null)], null);
});

cljs.core.async.t34686.cljs$lang$type = true;

cljs.core.async.t34686.cljs$lang$ctorStr = "cljs.core.async/t34686";

cljs.core.async.t34686.cljs$lang$ctorPrWriter = (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t34686");
});

cljs.core.async.__GT_t34686 = (function cljs$core$async$fn_handler_$___GT_t34686(fn_handler__$1,f__$1,meta34687){
return (new cljs.core.async.t34686(fn_handler__$1,f__$1,meta34687));
});

}

return (new cljs.core.async.t34686(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args34691 = [];
var len__26292__auto___34694 = arguments.length;
var i__26293__auto___34695 = (0);
while(true){
if((i__26293__auto___34695 < len__26292__auto___34694)){
args34691.push((arguments[i__26293__auto___34695]));

var G__34696 = (i__26293__auto___34695 + (1));
i__26293__auto___34695 = G__34696;
continue;
} else {
}
break;
}

var G__34693 = args34691.length;
switch (G__34693) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34691.length)].join('')));

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
var args34698 = [];
var len__26292__auto___34701 = arguments.length;
var i__26293__auto___34702 = (0);
while(true){
if((i__26293__auto___34702 < len__26292__auto___34701)){
args34698.push((arguments[i__26293__auto___34702]));

var G__34703 = (i__26293__auto___34702 + (1));
i__26293__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var G__34700 = args34698.length;
switch (G__34700) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34698.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34705 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34705);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34705,ret){
return (function (){
return fn1.call(null,val_34705);
});})(val_34705,ret))
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
var args34706 = [];
var len__26292__auto___34709 = arguments.length;
var i__26293__auto___34710 = (0);
while(true){
if((i__26293__auto___34710 < len__26292__auto___34709)){
args34706.push((arguments[i__26293__auto___34710]));

var G__34711 = (i__26293__auto___34710 + (1));
i__26293__auto___34710 = G__34711;
continue;
} else {
}
break;
}

var G__34708 = args34706.length;
switch (G__34708) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34706.length)].join('')));

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
var n__26137__auto___34713 = n;
var x_34714 = (0);
while(true){
if((x_34714 < n__26137__auto___34713)){
(a[x_34714] = (0));

var G__34715 = (x_34714 + (1));
x_34714 = G__34715;
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

var G__34716 = (i + (1));
i = G__34716;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t34720 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34720 = (function (alt_flag,flag,meta34721){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34721 = meta34721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34722,meta34721__$1){
var self__ = this;
var _34722__$1 = this;
return (new cljs.core.async.t34720(self__.alt_flag,self__.flag,meta34721__$1));
});})(flag))
;

cljs.core.async.t34720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34722){
var self__ = this;
var _34722__$1 = this;
return self__.meta34721;
});})(flag))
;

cljs.core.async.t34720.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t34720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t34720.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34721","meta34721",-804600314,null)], null);
});})(flag))
;

cljs.core.async.t34720.cljs$lang$type = true;

cljs.core.async.t34720.cljs$lang$ctorStr = "cljs.core.async/t34720";

cljs.core.async.t34720.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t34720");
});})(flag))
;

cljs.core.async.__GT_t34720 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t34720(alt_flag__$1,flag__$1,meta34721){
return (new cljs.core.async.t34720(alt_flag__$1,flag__$1,meta34721));
});})(flag))
;

}

return (new cljs.core.async.t34720(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t34726 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34726 = (function (alt_handler,flag,cb,meta34727){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34727 = meta34727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34728,meta34727__$1){
var self__ = this;
var _34728__$1 = this;
return (new cljs.core.async.t34726(self__.alt_handler,self__.flag,self__.cb,meta34727__$1));
});

cljs.core.async.t34726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34728){
var self__ = this;
var _34728__$1 = this;
return self__.meta34727;
});

cljs.core.async.t34726.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t34726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t34726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34727","meta34727",-34965650,null)], null);
});

cljs.core.async.t34726.cljs$lang$type = true;

cljs.core.async.t34726.cljs$lang$ctorStr = "cljs.core.async/t34726";

cljs.core.async.t34726.cljs$lang$ctorPrWriter = (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t34726");
});

cljs.core.async.__GT_t34726 = (function cljs$core$async$alt_handler_$___GT_t34726(alt_handler__$1,flag__$1,cb__$1,meta34727){
return (new cljs.core.async.t34726(alt_handler__$1,flag__$1,cb__$1,meta34727));
});

}

return (new cljs.core.async.t34726(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34729_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34729_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34730_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34730_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25253__auto__ = wport;
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34731 = (i + (1));
i = G__34731;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25253__auto__ = ret;
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25241__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25241__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25241__auto__;
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
var args__26299__auto__ = [];
var len__26292__auto___34737 = arguments.length;
var i__26293__auto___34738 = (0);
while(true){
if((i__26293__auto___34738 < len__26292__auto___34737)){
args__26299__auto__.push((arguments[i__26293__auto___34738]));

var G__34739 = (i__26293__auto___34738 + (1));
i__26293__auto___34738 = G__34739;
continue;
} else {
}
break;
}

var argseq__26300__auto__ = ((((1) < args__26299__auto__.length))?(new cljs.core.IndexedSeq(args__26299__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26300__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34734){
var map__34735 = p__34734;
var map__34735__$1 = ((((!((map__34735 == null)))?((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34735):map__34735);
var opts = map__34735__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34732){
var G__34733 = cljs.core.first.call(null,seq34732);
var seq34732__$1 = cljs.core.next.call(null,seq34732);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34733,seq34732__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args34740 = [];
var len__26292__auto___34790 = arguments.length;
var i__26293__auto___34791 = (0);
while(true){
if((i__26293__auto___34791 < len__26292__auto___34790)){
args34740.push((arguments[i__26293__auto___34791]));

var G__34792 = (i__26293__auto___34791 + (1));
i__26293__auto___34791 = G__34792;
continue;
} else {
}
break;
}

var G__34742 = args34740.length;
switch (G__34742) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34740.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28484__auto___34794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___34794){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___34794){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (7))){
var inst_34762 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34768_34795 = state_34766__$1;
(statearr_34768_34795[(2)] = inst_34762);

(statearr_34768_34795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (1))){
var state_34766__$1 = state_34766;
var statearr_34769_34796 = state_34766__$1;
(statearr_34769_34796[(2)] = null);

(statearr_34769_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (4))){
var inst_34745 = (state_34766[(7)]);
var inst_34745__$1 = (state_34766[(2)]);
var inst_34746 = (inst_34745__$1 == null);
var state_34766__$1 = (function (){var statearr_34770 = state_34766;
(statearr_34770[(7)] = inst_34745__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34746)){
var statearr_34771_34797 = state_34766__$1;
(statearr_34771_34797[(1)] = (5));

} else {
var statearr_34772_34798 = state_34766__$1;
(statearr_34772_34798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (13))){
var state_34766__$1 = state_34766;
var statearr_34773_34799 = state_34766__$1;
(statearr_34773_34799[(2)] = null);

(statearr_34773_34799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (6))){
var inst_34745 = (state_34766[(7)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34766__$1,(11),to,inst_34745);
} else {
if((state_val_34767 === (3))){
var inst_34764 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34766__$1,inst_34764);
} else {
if((state_val_34767 === (12))){
var state_34766__$1 = state_34766;
var statearr_34774_34800 = state_34766__$1;
(statearr_34774_34800[(2)] = null);

(statearr_34774_34800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (2))){
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34766__$1,(4),from);
} else {
if((state_val_34767 === (11))){
var inst_34755 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
if(cljs.core.truth_(inst_34755)){
var statearr_34775_34801 = state_34766__$1;
(statearr_34775_34801[(1)] = (12));

} else {
var statearr_34776_34802 = state_34766__$1;
(statearr_34776_34802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (9))){
var state_34766__$1 = state_34766;
var statearr_34777_34803 = state_34766__$1;
(statearr_34777_34803[(2)] = null);

(statearr_34777_34803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (5))){
var state_34766__$1 = state_34766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34778_34804 = state_34766__$1;
(statearr_34778_34804[(1)] = (8));

} else {
var statearr_34779_34805 = state_34766__$1;
(statearr_34779_34805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (14))){
var inst_34760 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34780_34806 = state_34766__$1;
(statearr_34780_34806[(2)] = inst_34760);

(statearr_34780_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (10))){
var inst_34752 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34781_34807 = state_34766__$1;
(statearr_34781_34807[(2)] = inst_34752);

(statearr_34781_34807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (8))){
var inst_34749 = cljs.core.async.close_BANG_.call(null,to);
var state_34766__$1 = state_34766;
var statearr_34782_34808 = state_34766__$1;
(statearr_34782_34808[(2)] = inst_34749);

(statearr_34782_34808[(1)] = (10));


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
});})(c__28484__auto___34794))
;
return ((function (switch__28419__auto__,c__28484__auto___34794){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_34786 = [null,null,null,null,null,null,null,null];
(statearr_34786[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_34786[(1)] = (1));

return statearr_34786;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_34766){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_34766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e34787){if((e34787 instanceof Object)){
var ex__28423__auto__ = e34787;
var statearr_34788_34809 = state_34766;
(statearr_34788_34809[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34810 = state_34766;
state_34766 = G__34810;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___34794))
})();
var state__28486__auto__ = (function (){var statearr_34789 = f__28485__auto__.call(null);
(statearr_34789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___34794);

return statearr_34789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___34794))
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
return (function (p__34994){
var vec__34995 = p__34994;
var v = cljs.core.nth.call(null,vec__34995,(0),null);
var p = cljs.core.nth.call(null,vec__34995,(1),null);
var job = vec__34995;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28484__auto___35177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results){
return (function (state_35000){
var state_val_35001 = (state_35000[(1)]);
if((state_val_35001 === (1))){
var state_35000__$1 = state_35000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35000__$1,(2),res,v);
} else {
if((state_val_35001 === (2))){
var inst_34997 = (state_35000[(2)]);
var inst_34998 = cljs.core.async.close_BANG_.call(null,res);
var state_35000__$1 = (function (){var statearr_35002 = state_35000;
(statearr_35002[(7)] = inst_34997);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35000__$1,inst_34998);
} else {
return null;
}
}
});})(c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results))
;
return ((function (switch__28419__auto__,c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1 = (function (state_35000){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35007){if((e35007 instanceof Object)){
var ex__28423__auto__ = e35007;
var statearr_35008_35178 = state_35000;
(statearr_35008_35178[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35179 = state_35000;
state_35000 = G__35179;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = function(state_35000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1.call(this,state_35000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results))
})();
var state__28486__auto__ = (function (){var statearr_35009 = f__28485__auto__.call(null);
(statearr_35009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35177);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___35177,res,vec__34995,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35010){
var vec__35011 = p__35010;
var v = cljs.core.nth.call(null,vec__35011,(0),null);
var p = cljs.core.nth.call(null,vec__35011,(1),null);
var job = vec__35011;
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
var n__26137__auto___35180 = n;
var __35181 = (0);
while(true){
if((__35181 < n__26137__auto___35180)){
var G__35012_35182 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35012_35182) {
case "compute":
var c__28484__auto___35184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35181,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (__35181,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function (state_35025){
var state_val_35026 = (state_35025[(1)]);
if((state_val_35026 === (1))){
var state_35025__$1 = state_35025;
var statearr_35027_35185 = state_35025__$1;
(statearr_35027_35185[(2)] = null);

(statearr_35027_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (2))){
var state_35025__$1 = state_35025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35025__$1,(4),jobs);
} else {
if((state_val_35026 === (3))){
var inst_35023 = (state_35025[(2)]);
var state_35025__$1 = state_35025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35025__$1,inst_35023);
} else {
if((state_val_35026 === (4))){
var inst_35015 = (state_35025[(2)]);
var inst_35016 = process.call(null,inst_35015);
var state_35025__$1 = state_35025;
if(cljs.core.truth_(inst_35016)){
var statearr_35028_35186 = state_35025__$1;
(statearr_35028_35186[(1)] = (5));

} else {
var statearr_35029_35187 = state_35025__$1;
(statearr_35029_35187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (5))){
var state_35025__$1 = state_35025;
var statearr_35030_35188 = state_35025__$1;
(statearr_35030_35188[(2)] = null);

(statearr_35030_35188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (6))){
var state_35025__$1 = state_35025;
var statearr_35031_35189 = state_35025__$1;
(statearr_35031_35189[(2)] = null);

(statearr_35031_35189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (7))){
var inst_35021 = (state_35025[(2)]);
var state_35025__$1 = state_35025;
var statearr_35032_35190 = state_35025__$1;
(statearr_35032_35190[(2)] = inst_35021);

(statearr_35032_35190[(1)] = (3));


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
});})(__35181,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
;
return ((function (__35181,switch__28419__auto__,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_35036 = [null,null,null,null,null,null,null];
(statearr_35036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__);

(statearr_35036[(1)] = (1));

return statearr_35036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1 = (function (state_35025){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35037){if((e35037 instanceof Object)){
var ex__28423__auto__ = e35037;
var statearr_35038_35191 = state_35025;
(statearr_35038_35191[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35192 = state_35025;
state_35025 = G__35192;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = function(state_35025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1.call(this,state_35025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__;
})()
;})(__35181,switch__28419__auto__,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
})();
var state__28486__auto__ = (function (){var statearr_35039 = f__28485__auto__.call(null);
(statearr_35039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35184);

return statearr_35039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(__35181,c__28484__auto___35184,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
);


break;
case "async":
var c__28484__auto___35193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35181,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (__35181,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function (state_35052){
var state_val_35053 = (state_35052[(1)]);
if((state_val_35053 === (1))){
var state_35052__$1 = state_35052;
var statearr_35054_35194 = state_35052__$1;
(statearr_35054_35194[(2)] = null);

(statearr_35054_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (2))){
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35052__$1,(4),jobs);
} else {
if((state_val_35053 === (3))){
var inst_35050 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35052__$1,inst_35050);
} else {
if((state_val_35053 === (4))){
var inst_35042 = (state_35052[(2)]);
var inst_35043 = async.call(null,inst_35042);
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_35043)){
var statearr_35055_35195 = state_35052__$1;
(statearr_35055_35195[(1)] = (5));

} else {
var statearr_35056_35196 = state_35052__$1;
(statearr_35056_35196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (5))){
var state_35052__$1 = state_35052;
var statearr_35057_35197 = state_35052__$1;
(statearr_35057_35197[(2)] = null);

(statearr_35057_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (6))){
var state_35052__$1 = state_35052;
var statearr_35058_35198 = state_35052__$1;
(statearr_35058_35198[(2)] = null);

(statearr_35058_35198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (7))){
var inst_35048 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35059_35199 = state_35052__$1;
(statearr_35059_35199[(2)] = inst_35048);

(statearr_35059_35199[(1)] = (3));


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
});})(__35181,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
;
return ((function (__35181,switch__28419__auto__,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_35063 = [null,null,null,null,null,null,null];
(statearr_35063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__);

(statearr_35063[(1)] = (1));

return statearr_35063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1 = (function (state_35052){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35064){if((e35064 instanceof Object)){
var ex__28423__auto__ = e35064;
var statearr_35065_35200 = state_35052;
(statearr_35065_35200[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35201 = state_35052;
state_35052 = G__35201;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = function(state_35052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1.call(this,state_35052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__;
})()
;})(__35181,switch__28419__auto__,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
})();
var state__28486__auto__ = (function (){var statearr_35066 = f__28485__auto__.call(null);
(statearr_35066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35193);

return statearr_35066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(__35181,c__28484__auto___35193,G__35012_35182,n__26137__auto___35180,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35202 = (__35181 + (1));
__35181 = G__35202;
continue;
} else {
}
break;
}

var c__28484__auto___35203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___35203,jobs,results,process,async){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___35203,jobs,results,process,async){
return (function (state_35088){
var state_val_35089 = (state_35088[(1)]);
if((state_val_35089 === (1))){
var state_35088__$1 = state_35088;
var statearr_35090_35204 = state_35088__$1;
(statearr_35090_35204[(2)] = null);

(statearr_35090_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (2))){
var state_35088__$1 = state_35088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35088__$1,(4),from);
} else {
if((state_val_35089 === (3))){
var inst_35086 = (state_35088[(2)]);
var state_35088__$1 = state_35088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35088__$1,inst_35086);
} else {
if((state_val_35089 === (4))){
var inst_35069 = (state_35088[(7)]);
var inst_35069__$1 = (state_35088[(2)]);
var inst_35070 = (inst_35069__$1 == null);
var state_35088__$1 = (function (){var statearr_35091 = state_35088;
(statearr_35091[(7)] = inst_35069__$1);

return statearr_35091;
})();
if(cljs.core.truth_(inst_35070)){
var statearr_35092_35205 = state_35088__$1;
(statearr_35092_35205[(1)] = (5));

} else {
var statearr_35093_35206 = state_35088__$1;
(statearr_35093_35206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (5))){
var inst_35072 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35088__$1 = state_35088;
var statearr_35094_35207 = state_35088__$1;
(statearr_35094_35207[(2)] = inst_35072);

(statearr_35094_35207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (6))){
var inst_35074 = (state_35088[(8)]);
var inst_35069 = (state_35088[(7)]);
var inst_35074__$1 = cljs.core.async.chan.call(null,(1));
var inst_35075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35076 = [inst_35069,inst_35074__$1];
var inst_35077 = (new cljs.core.PersistentVector(null,2,(5),inst_35075,inst_35076,null));
var state_35088__$1 = (function (){var statearr_35095 = state_35088;
(statearr_35095[(8)] = inst_35074__$1);

return statearr_35095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35088__$1,(8),jobs,inst_35077);
} else {
if((state_val_35089 === (7))){
var inst_35084 = (state_35088[(2)]);
var state_35088__$1 = state_35088;
var statearr_35096_35208 = state_35088__$1;
(statearr_35096_35208[(2)] = inst_35084);

(statearr_35096_35208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (8))){
var inst_35074 = (state_35088[(8)]);
var inst_35079 = (state_35088[(2)]);
var state_35088__$1 = (function (){var statearr_35097 = state_35088;
(statearr_35097[(9)] = inst_35079);

return statearr_35097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35088__$1,(9),results,inst_35074);
} else {
if((state_val_35089 === (9))){
var inst_35081 = (state_35088[(2)]);
var state_35088__$1 = (function (){var statearr_35098 = state_35088;
(statearr_35098[(10)] = inst_35081);

return statearr_35098;
})();
var statearr_35099_35209 = state_35088__$1;
(statearr_35099_35209[(2)] = null);

(statearr_35099_35209[(1)] = (2));


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
});})(c__28484__auto___35203,jobs,results,process,async))
;
return ((function (switch__28419__auto__,c__28484__auto___35203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_35103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1 = (function (state_35088){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35104){if((e35104 instanceof Object)){
var ex__28423__auto__ = e35104;
var statearr_35105_35210 = state_35088;
(statearr_35105_35210[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35211 = state_35088;
state_35088 = G__35211;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = function(state_35088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1.call(this,state_35088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___35203,jobs,results,process,async))
})();
var state__28486__auto__ = (function (){var statearr_35106 = f__28485__auto__.call(null);
(statearr_35106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35203);

return statearr_35106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___35203,jobs,results,process,async))
);


var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__,jobs,results,process,async){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__,jobs,results,process,async){
return (function (state_35144){
var state_val_35145 = (state_35144[(1)]);
if((state_val_35145 === (7))){
var inst_35140 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35146_35212 = state_35144__$1;
(statearr_35146_35212[(2)] = inst_35140);

(statearr_35146_35212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (20))){
var state_35144__$1 = state_35144;
var statearr_35147_35213 = state_35144__$1;
(statearr_35147_35213[(2)] = null);

(statearr_35147_35213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (1))){
var state_35144__$1 = state_35144;
var statearr_35148_35214 = state_35144__$1;
(statearr_35148_35214[(2)] = null);

(statearr_35148_35214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (4))){
var inst_35109 = (state_35144[(7)]);
var inst_35109__$1 = (state_35144[(2)]);
var inst_35110 = (inst_35109__$1 == null);
var state_35144__$1 = (function (){var statearr_35149 = state_35144;
(statearr_35149[(7)] = inst_35109__$1);

return statearr_35149;
})();
if(cljs.core.truth_(inst_35110)){
var statearr_35150_35215 = state_35144__$1;
(statearr_35150_35215[(1)] = (5));

} else {
var statearr_35151_35216 = state_35144__$1;
(statearr_35151_35216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (15))){
var inst_35122 = (state_35144[(8)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35144__$1,(18),to,inst_35122);
} else {
if((state_val_35145 === (21))){
var inst_35135 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35152_35217 = state_35144__$1;
(statearr_35152_35217[(2)] = inst_35135);

(statearr_35152_35217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (13))){
var inst_35137 = (state_35144[(2)]);
var state_35144__$1 = (function (){var statearr_35153 = state_35144;
(statearr_35153[(9)] = inst_35137);

return statearr_35153;
})();
var statearr_35154_35218 = state_35144__$1;
(statearr_35154_35218[(2)] = null);

(statearr_35154_35218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (6))){
var inst_35109 = (state_35144[(7)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35144__$1,(11),inst_35109);
} else {
if((state_val_35145 === (17))){
var inst_35130 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
if(cljs.core.truth_(inst_35130)){
var statearr_35155_35219 = state_35144__$1;
(statearr_35155_35219[(1)] = (19));

} else {
var statearr_35156_35220 = state_35144__$1;
(statearr_35156_35220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (3))){
var inst_35142 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35144__$1,inst_35142);
} else {
if((state_val_35145 === (12))){
var inst_35119 = (state_35144[(10)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35144__$1,(14),inst_35119);
} else {
if((state_val_35145 === (2))){
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35144__$1,(4),results);
} else {
if((state_val_35145 === (19))){
var state_35144__$1 = state_35144;
var statearr_35157_35221 = state_35144__$1;
(statearr_35157_35221[(2)] = null);

(statearr_35157_35221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (11))){
var inst_35119 = (state_35144[(2)]);
var state_35144__$1 = (function (){var statearr_35158 = state_35144;
(statearr_35158[(10)] = inst_35119);

return statearr_35158;
})();
var statearr_35159_35222 = state_35144__$1;
(statearr_35159_35222[(2)] = null);

(statearr_35159_35222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (9))){
var state_35144__$1 = state_35144;
var statearr_35160_35223 = state_35144__$1;
(statearr_35160_35223[(2)] = null);

(statearr_35160_35223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (5))){
var state_35144__$1 = state_35144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35161_35224 = state_35144__$1;
(statearr_35161_35224[(1)] = (8));

} else {
var statearr_35162_35225 = state_35144__$1;
(statearr_35162_35225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (14))){
var inst_35122 = (state_35144[(8)]);
var inst_35124 = (state_35144[(11)]);
var inst_35122__$1 = (state_35144[(2)]);
var inst_35123 = (inst_35122__$1 == null);
var inst_35124__$1 = cljs.core.not.call(null,inst_35123);
var state_35144__$1 = (function (){var statearr_35163 = state_35144;
(statearr_35163[(8)] = inst_35122__$1);

(statearr_35163[(11)] = inst_35124__$1);

return statearr_35163;
})();
if(inst_35124__$1){
var statearr_35164_35226 = state_35144__$1;
(statearr_35164_35226[(1)] = (15));

} else {
var statearr_35165_35227 = state_35144__$1;
(statearr_35165_35227[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (16))){
var inst_35124 = (state_35144[(11)]);
var state_35144__$1 = state_35144;
var statearr_35166_35228 = state_35144__$1;
(statearr_35166_35228[(2)] = inst_35124);

(statearr_35166_35228[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (10))){
var inst_35116 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35167_35229 = state_35144__$1;
(statearr_35167_35229[(2)] = inst_35116);

(statearr_35167_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (18))){
var inst_35127 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35168_35230 = state_35144__$1;
(statearr_35168_35230[(2)] = inst_35127);

(statearr_35168_35230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (8))){
var inst_35113 = cljs.core.async.close_BANG_.call(null,to);
var state_35144__$1 = state_35144;
var statearr_35169_35231 = state_35144__$1;
(statearr_35169_35231[(2)] = inst_35113);

(statearr_35169_35231[(1)] = (10));


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
});})(c__28484__auto__,jobs,results,process,async))
;
return ((function (switch__28419__auto__,c__28484__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_35173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__);

(statearr_35173[(1)] = (1));

return statearr_35173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1 = (function (state_35144){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35174){if((e35174 instanceof Object)){
var ex__28423__auto__ = e35174;
var statearr_35175_35232 = state_35144;
(statearr_35175_35232[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35233 = state_35144;
state_35144 = G__35233;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__ = function(state_35144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1.call(this,state_35144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__,jobs,results,process,async))
})();
var state__28486__auto__ = (function (){var statearr_35176 = f__28485__auto__.call(null);
(statearr_35176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_35176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__,jobs,results,process,async))
);

return c__28484__auto__;
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
var args35234 = [];
var len__26292__auto___35237 = arguments.length;
var i__26293__auto___35238 = (0);
while(true){
if((i__26293__auto___35238 < len__26292__auto___35237)){
args35234.push((arguments[i__26293__auto___35238]));

var G__35239 = (i__26293__auto___35238 + (1));
i__26293__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var G__35236 = args35234.length;
switch (G__35236) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35234.length)].join('')));

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
var args35241 = [];
var len__26292__auto___35244 = arguments.length;
var i__26293__auto___35245 = (0);
while(true){
if((i__26293__auto___35245 < len__26292__auto___35244)){
args35241.push((arguments[i__26293__auto___35245]));

var G__35246 = (i__26293__auto___35245 + (1));
i__26293__auto___35245 = G__35246;
continue;
} else {
}
break;
}

var G__35243 = args35241.length;
switch (G__35243) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35241.length)].join('')));

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
var args35248 = [];
var len__26292__auto___35301 = arguments.length;
var i__26293__auto___35302 = (0);
while(true){
if((i__26293__auto___35302 < len__26292__auto___35301)){
args35248.push((arguments[i__26293__auto___35302]));

var G__35303 = (i__26293__auto___35302 + (1));
i__26293__auto___35302 = G__35303;
continue;
} else {
}
break;
}

var G__35250 = args35248.length;
switch (G__35250) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35248.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28484__auto___35305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___35305,tc,fc){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___35305,tc,fc){
return (function (state_35276){
var state_val_35277 = (state_35276[(1)]);
if((state_val_35277 === (7))){
var inst_35272 = (state_35276[(2)]);
var state_35276__$1 = state_35276;
var statearr_35278_35306 = state_35276__$1;
(statearr_35278_35306[(2)] = inst_35272);

(statearr_35278_35306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (1))){
var state_35276__$1 = state_35276;
var statearr_35279_35307 = state_35276__$1;
(statearr_35279_35307[(2)] = null);

(statearr_35279_35307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (4))){
var inst_35253 = (state_35276[(7)]);
var inst_35253__$1 = (state_35276[(2)]);
var inst_35254 = (inst_35253__$1 == null);
var state_35276__$1 = (function (){var statearr_35280 = state_35276;
(statearr_35280[(7)] = inst_35253__$1);

return statearr_35280;
})();
if(cljs.core.truth_(inst_35254)){
var statearr_35281_35308 = state_35276__$1;
(statearr_35281_35308[(1)] = (5));

} else {
var statearr_35282_35309 = state_35276__$1;
(statearr_35282_35309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (13))){
var state_35276__$1 = state_35276;
var statearr_35283_35310 = state_35276__$1;
(statearr_35283_35310[(2)] = null);

(statearr_35283_35310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (6))){
var inst_35253 = (state_35276[(7)]);
var inst_35259 = p.call(null,inst_35253);
var state_35276__$1 = state_35276;
if(cljs.core.truth_(inst_35259)){
var statearr_35284_35311 = state_35276__$1;
(statearr_35284_35311[(1)] = (9));

} else {
var statearr_35285_35312 = state_35276__$1;
(statearr_35285_35312[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (3))){
var inst_35274 = (state_35276[(2)]);
var state_35276__$1 = state_35276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35276__$1,inst_35274);
} else {
if((state_val_35277 === (12))){
var state_35276__$1 = state_35276;
var statearr_35286_35313 = state_35276__$1;
(statearr_35286_35313[(2)] = null);

(statearr_35286_35313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (2))){
var state_35276__$1 = state_35276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35276__$1,(4),ch);
} else {
if((state_val_35277 === (11))){
var inst_35253 = (state_35276[(7)]);
var inst_35263 = (state_35276[(2)]);
var state_35276__$1 = state_35276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35276__$1,(8),inst_35263,inst_35253);
} else {
if((state_val_35277 === (9))){
var state_35276__$1 = state_35276;
var statearr_35287_35314 = state_35276__$1;
(statearr_35287_35314[(2)] = tc);

(statearr_35287_35314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (5))){
var inst_35256 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35257 = cljs.core.async.close_BANG_.call(null,fc);
var state_35276__$1 = (function (){var statearr_35288 = state_35276;
(statearr_35288[(8)] = inst_35256);

return statearr_35288;
})();
var statearr_35289_35315 = state_35276__$1;
(statearr_35289_35315[(2)] = inst_35257);

(statearr_35289_35315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (14))){
var inst_35270 = (state_35276[(2)]);
var state_35276__$1 = state_35276;
var statearr_35290_35316 = state_35276__$1;
(statearr_35290_35316[(2)] = inst_35270);

(statearr_35290_35316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (10))){
var state_35276__$1 = state_35276;
var statearr_35291_35317 = state_35276__$1;
(statearr_35291_35317[(2)] = fc);

(statearr_35291_35317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35277 === (8))){
var inst_35265 = (state_35276[(2)]);
var state_35276__$1 = state_35276;
if(cljs.core.truth_(inst_35265)){
var statearr_35292_35318 = state_35276__$1;
(statearr_35292_35318[(1)] = (12));

} else {
var statearr_35293_35319 = state_35276__$1;
(statearr_35293_35319[(1)] = (13));

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
});})(c__28484__auto___35305,tc,fc))
;
return ((function (switch__28419__auto__,c__28484__auto___35305,tc,fc){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_35297 = [null,null,null,null,null,null,null,null,null];
(statearr_35297[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_35297[(1)] = (1));

return statearr_35297;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_35276){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35298){if((e35298 instanceof Object)){
var ex__28423__auto__ = e35298;
var statearr_35299_35320 = state_35276;
(statearr_35299_35320[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_35276;
state_35276 = G__35321;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_35276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_35276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___35305,tc,fc))
})();
var state__28486__auto__ = (function (){var statearr_35300 = f__28485__auto__.call(null);
(statearr_35300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35305);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___35305,tc,fc))
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
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_35368){
var state_val_35369 = (state_35368[(1)]);
if((state_val_35369 === (1))){
var inst_35354 = init;
var state_35368__$1 = (function (){var statearr_35370 = state_35368;
(statearr_35370[(7)] = inst_35354);

return statearr_35370;
})();
var statearr_35371_35386 = state_35368__$1;
(statearr_35371_35386[(2)] = null);

(statearr_35371_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (2))){
var state_35368__$1 = state_35368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35368__$1,(4),ch);
} else {
if((state_val_35369 === (3))){
var inst_35366 = (state_35368[(2)]);
var state_35368__$1 = state_35368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35368__$1,inst_35366);
} else {
if((state_val_35369 === (4))){
var inst_35357 = (state_35368[(8)]);
var inst_35357__$1 = (state_35368[(2)]);
var inst_35358 = (inst_35357__$1 == null);
var state_35368__$1 = (function (){var statearr_35372 = state_35368;
(statearr_35372[(8)] = inst_35357__$1);

return statearr_35372;
})();
if(cljs.core.truth_(inst_35358)){
var statearr_35373_35387 = state_35368__$1;
(statearr_35373_35387[(1)] = (5));

} else {
var statearr_35374_35388 = state_35368__$1;
(statearr_35374_35388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (5))){
var inst_35354 = (state_35368[(7)]);
var state_35368__$1 = state_35368;
var statearr_35375_35389 = state_35368__$1;
(statearr_35375_35389[(2)] = inst_35354);

(statearr_35375_35389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (6))){
var inst_35354 = (state_35368[(7)]);
var inst_35357 = (state_35368[(8)]);
var inst_35361 = f.call(null,inst_35354,inst_35357);
var inst_35354__$1 = inst_35361;
var state_35368__$1 = (function (){var statearr_35376 = state_35368;
(statearr_35376[(7)] = inst_35354__$1);

return statearr_35376;
})();
var statearr_35377_35390 = state_35368__$1;
(statearr_35377_35390[(2)] = null);

(statearr_35377_35390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (7))){
var inst_35364 = (state_35368[(2)]);
var state_35368__$1 = state_35368;
var statearr_35378_35391 = state_35368__$1;
(statearr_35378_35391[(2)] = inst_35364);

(statearr_35378_35391[(1)] = (3));


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
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28420__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28420__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = cljs$core$async$reduce_$_state_machine__28420__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var cljs$core$async$reduce_$_state_machine__28420__auto____1 = (function (state_35368){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__28423__auto__ = e35383;
var statearr_35384_35392 = state_35368;
(statearr_35384_35392[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35393 = state_35368;
state_35368 = G__35393;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28420__auto__ = function(state_35368){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28420__auto____1.call(this,state_35368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28420__auto____0;
cljs$core$async$reduce_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28420__auto____1;
return cljs$core$async$reduce_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_35385 = f__28485__auto__.call(null);
(statearr_35385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
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
var args35394 = [];
var len__26292__auto___35446 = arguments.length;
var i__26293__auto___35447 = (0);
while(true){
if((i__26293__auto___35447 < len__26292__auto___35446)){
args35394.push((arguments[i__26293__auto___35447]));

var G__35448 = (i__26293__auto___35447 + (1));
i__26293__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var G__35396 = args35394.length;
switch (G__35396) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35394.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_35421){
var state_val_35422 = (state_35421[(1)]);
if((state_val_35422 === (7))){
var inst_35403 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35423_35450 = state_35421__$1;
(statearr_35423_35450[(2)] = inst_35403);

(statearr_35423_35450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (1))){
var inst_35397 = cljs.core.seq.call(null,coll);
var inst_35398 = inst_35397;
var state_35421__$1 = (function (){var statearr_35424 = state_35421;
(statearr_35424[(7)] = inst_35398);

return statearr_35424;
})();
var statearr_35425_35451 = state_35421__$1;
(statearr_35425_35451[(2)] = null);

(statearr_35425_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (4))){
var inst_35398 = (state_35421[(7)]);
var inst_35401 = cljs.core.first.call(null,inst_35398);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35421__$1,(7),ch,inst_35401);
} else {
if((state_val_35422 === (13))){
var inst_35415 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35426_35452 = state_35421__$1;
(statearr_35426_35452[(2)] = inst_35415);

(statearr_35426_35452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (6))){
var inst_35406 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
if(cljs.core.truth_(inst_35406)){
var statearr_35427_35453 = state_35421__$1;
(statearr_35427_35453[(1)] = (8));

} else {
var statearr_35428_35454 = state_35421__$1;
(statearr_35428_35454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (3))){
var inst_35419 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35421__$1,inst_35419);
} else {
if((state_val_35422 === (12))){
var state_35421__$1 = state_35421;
var statearr_35429_35455 = state_35421__$1;
(statearr_35429_35455[(2)] = null);

(statearr_35429_35455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (2))){
var inst_35398 = (state_35421[(7)]);
var state_35421__$1 = state_35421;
if(cljs.core.truth_(inst_35398)){
var statearr_35430_35456 = state_35421__$1;
(statearr_35430_35456[(1)] = (4));

} else {
var statearr_35431_35457 = state_35421__$1;
(statearr_35431_35457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (11))){
var inst_35412 = cljs.core.async.close_BANG_.call(null,ch);
var state_35421__$1 = state_35421;
var statearr_35432_35458 = state_35421__$1;
(statearr_35432_35458[(2)] = inst_35412);

(statearr_35432_35458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (9))){
var state_35421__$1 = state_35421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35433_35459 = state_35421__$1;
(statearr_35433_35459[(1)] = (11));

} else {
var statearr_35434_35460 = state_35421__$1;
(statearr_35434_35460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (5))){
var inst_35398 = (state_35421[(7)]);
var state_35421__$1 = state_35421;
var statearr_35435_35461 = state_35421__$1;
(statearr_35435_35461[(2)] = inst_35398);

(statearr_35435_35461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (10))){
var inst_35417 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35436_35462 = state_35421__$1;
(statearr_35436_35462[(2)] = inst_35417);

(statearr_35436_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (8))){
var inst_35398 = (state_35421[(7)]);
var inst_35408 = cljs.core.next.call(null,inst_35398);
var inst_35398__$1 = inst_35408;
var state_35421__$1 = (function (){var statearr_35437 = state_35421;
(statearr_35437[(7)] = inst_35398__$1);

return statearr_35437;
})();
var statearr_35438_35463 = state_35421__$1;
(statearr_35438_35463[(2)] = null);

(statearr_35438_35463[(1)] = (2));


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
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_35442 = [null,null,null,null,null,null,null,null];
(statearr_35442[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_35442[(1)] = (1));

return statearr_35442;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_35421){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35443){if((e35443 instanceof Object)){
var ex__28423__auto__ = e35443;
var statearr_35444_35464 = state_35421;
(statearr_35444_35464[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35465 = state_35421;
state_35421 = G__35465;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_35421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_35421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_35445 = f__28485__auto__.call(null);
(statearr_35445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_35445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
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
var x__25889__auto__ = (((_ == null))?null:_);
var m__25890__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,_);
} else {
var m__25890__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,_);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25890__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,ch);
} else {
var m__25890__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,ch);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m);
} else {
var m__25890__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t35691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35691 = (function (mult,ch,cs,meta35692){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35692 = meta35692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35693,meta35692__$1){
var self__ = this;
var _35693__$1 = this;
return (new cljs.core.async.t35691(self__.mult,self__.ch,self__.cs,meta35692__$1));
});})(cs))
;

cljs.core.async.t35691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35693){
var self__ = this;
var _35693__$1 = this;
return self__.meta35692;
});})(cs))
;

cljs.core.async.t35691.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t35691.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t35691.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t35691.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t35691.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t35691.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35692","meta35692",-15714286,null)], null);
});})(cs))
;

cljs.core.async.t35691.cljs$lang$type = true;

cljs.core.async.t35691.cljs$lang$ctorStr = "cljs.core.async/t35691";

cljs.core.async.t35691.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t35691");
});})(cs))
;

cljs.core.async.__GT_t35691 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t35691(mult__$1,ch__$1,cs__$1,meta35692){
return (new cljs.core.async.t35691(mult__$1,ch__$1,cs__$1,meta35692));
});})(cs))
;

}

return (new cljs.core.async.t35691(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28484__auto___35912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___35912,cs,m,dchan,dctr,done){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___35912,cs,m,dchan,dctr,done){
return (function (state_35824){
var state_val_35825 = (state_35824[(1)]);
if((state_val_35825 === (7))){
var inst_35820 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35826_35913 = state_35824__$1;
(statearr_35826_35913[(2)] = inst_35820);

(statearr_35826_35913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (20))){
var inst_35725 = (state_35824[(7)]);
var inst_35735 = cljs.core.first.call(null,inst_35725);
var inst_35736 = cljs.core.nth.call(null,inst_35735,(0),null);
var inst_35737 = cljs.core.nth.call(null,inst_35735,(1),null);
var state_35824__$1 = (function (){var statearr_35827 = state_35824;
(statearr_35827[(8)] = inst_35736);

return statearr_35827;
})();
if(cljs.core.truth_(inst_35737)){
var statearr_35828_35914 = state_35824__$1;
(statearr_35828_35914[(1)] = (22));

} else {
var statearr_35829_35915 = state_35824__$1;
(statearr_35829_35915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (27))){
var inst_35772 = (state_35824[(9)]);
var inst_35767 = (state_35824[(10)]);
var inst_35765 = (state_35824[(11)]);
var inst_35696 = (state_35824[(12)]);
var inst_35772__$1 = cljs.core._nth.call(null,inst_35765,inst_35767);
var inst_35773 = cljs.core.async.put_BANG_.call(null,inst_35772__$1,inst_35696,done);
var state_35824__$1 = (function (){var statearr_35830 = state_35824;
(statearr_35830[(9)] = inst_35772__$1);

return statearr_35830;
})();
if(cljs.core.truth_(inst_35773)){
var statearr_35831_35916 = state_35824__$1;
(statearr_35831_35916[(1)] = (30));

} else {
var statearr_35832_35917 = state_35824__$1;
(statearr_35832_35917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (1))){
var state_35824__$1 = state_35824;
var statearr_35833_35918 = state_35824__$1;
(statearr_35833_35918[(2)] = null);

(statearr_35833_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (24))){
var inst_35725 = (state_35824[(7)]);
var inst_35742 = (state_35824[(2)]);
var inst_35743 = cljs.core.next.call(null,inst_35725);
var inst_35705 = inst_35743;
var inst_35706 = null;
var inst_35707 = (0);
var inst_35708 = (0);
var state_35824__$1 = (function (){var statearr_35834 = state_35824;
(statearr_35834[(13)] = inst_35706);

(statearr_35834[(14)] = inst_35742);

(statearr_35834[(15)] = inst_35705);

(statearr_35834[(16)] = inst_35707);

(statearr_35834[(17)] = inst_35708);

return statearr_35834;
})();
var statearr_35835_35919 = state_35824__$1;
(statearr_35835_35919[(2)] = null);

(statearr_35835_35919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (39))){
var state_35824__$1 = state_35824;
var statearr_35839_35920 = state_35824__$1;
(statearr_35839_35920[(2)] = null);

(statearr_35839_35920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (4))){
var inst_35696 = (state_35824[(12)]);
var inst_35696__$1 = (state_35824[(2)]);
var inst_35697 = (inst_35696__$1 == null);
var state_35824__$1 = (function (){var statearr_35840 = state_35824;
(statearr_35840[(12)] = inst_35696__$1);

return statearr_35840;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35841_35921 = state_35824__$1;
(statearr_35841_35921[(1)] = (5));

} else {
var statearr_35842_35922 = state_35824__$1;
(statearr_35842_35922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (15))){
var inst_35706 = (state_35824[(13)]);
var inst_35705 = (state_35824[(15)]);
var inst_35707 = (state_35824[(16)]);
var inst_35708 = (state_35824[(17)]);
var inst_35721 = (state_35824[(2)]);
var inst_35722 = (inst_35708 + (1));
var tmp35836 = inst_35706;
var tmp35837 = inst_35705;
var tmp35838 = inst_35707;
var inst_35705__$1 = tmp35837;
var inst_35706__$1 = tmp35836;
var inst_35707__$1 = tmp35838;
var inst_35708__$1 = inst_35722;
var state_35824__$1 = (function (){var statearr_35843 = state_35824;
(statearr_35843[(13)] = inst_35706__$1);

(statearr_35843[(18)] = inst_35721);

(statearr_35843[(15)] = inst_35705__$1);

(statearr_35843[(16)] = inst_35707__$1);

(statearr_35843[(17)] = inst_35708__$1);

return statearr_35843;
})();
var statearr_35844_35923 = state_35824__$1;
(statearr_35844_35923[(2)] = null);

(statearr_35844_35923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (21))){
var inst_35746 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35848_35924 = state_35824__$1;
(statearr_35848_35924[(2)] = inst_35746);

(statearr_35848_35924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (31))){
var inst_35772 = (state_35824[(9)]);
var inst_35776 = done.call(null,null);
var inst_35777 = cljs.core.async.untap_STAR_.call(null,m,inst_35772);
var state_35824__$1 = (function (){var statearr_35849 = state_35824;
(statearr_35849[(19)] = inst_35776);

return statearr_35849;
})();
var statearr_35850_35925 = state_35824__$1;
(statearr_35850_35925[(2)] = inst_35777);

(statearr_35850_35925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (32))){
var inst_35764 = (state_35824[(20)]);
var inst_35767 = (state_35824[(10)]);
var inst_35765 = (state_35824[(11)]);
var inst_35766 = (state_35824[(21)]);
var inst_35779 = (state_35824[(2)]);
var inst_35780 = (inst_35767 + (1));
var tmp35845 = inst_35764;
var tmp35846 = inst_35765;
var tmp35847 = inst_35766;
var inst_35764__$1 = tmp35845;
var inst_35765__$1 = tmp35846;
var inst_35766__$1 = tmp35847;
var inst_35767__$1 = inst_35780;
var state_35824__$1 = (function (){var statearr_35851 = state_35824;
(statearr_35851[(20)] = inst_35764__$1);

(statearr_35851[(10)] = inst_35767__$1);

(statearr_35851[(11)] = inst_35765__$1);

(statearr_35851[(22)] = inst_35779);

(statearr_35851[(21)] = inst_35766__$1);

return statearr_35851;
})();
var statearr_35852_35926 = state_35824__$1;
(statearr_35852_35926[(2)] = null);

(statearr_35852_35926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (40))){
var inst_35792 = (state_35824[(23)]);
var inst_35796 = done.call(null,null);
var inst_35797 = cljs.core.async.untap_STAR_.call(null,m,inst_35792);
var state_35824__$1 = (function (){var statearr_35853 = state_35824;
(statearr_35853[(24)] = inst_35796);

return statearr_35853;
})();
var statearr_35854_35927 = state_35824__$1;
(statearr_35854_35927[(2)] = inst_35797);

(statearr_35854_35927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (33))){
var inst_35783 = (state_35824[(25)]);
var inst_35785 = cljs.core.chunked_seq_QMARK_.call(null,inst_35783);
var state_35824__$1 = state_35824;
if(inst_35785){
var statearr_35855_35928 = state_35824__$1;
(statearr_35855_35928[(1)] = (36));

} else {
var statearr_35856_35929 = state_35824__$1;
(statearr_35856_35929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (13))){
var inst_35715 = (state_35824[(26)]);
var inst_35718 = cljs.core.async.close_BANG_.call(null,inst_35715);
var state_35824__$1 = state_35824;
var statearr_35857_35930 = state_35824__$1;
(statearr_35857_35930[(2)] = inst_35718);

(statearr_35857_35930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (22))){
var inst_35736 = (state_35824[(8)]);
var inst_35739 = cljs.core.async.close_BANG_.call(null,inst_35736);
var state_35824__$1 = state_35824;
var statearr_35858_35931 = state_35824__$1;
(statearr_35858_35931[(2)] = inst_35739);

(statearr_35858_35931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (36))){
var inst_35783 = (state_35824[(25)]);
var inst_35787 = cljs.core.chunk_first.call(null,inst_35783);
var inst_35788 = cljs.core.chunk_rest.call(null,inst_35783);
var inst_35789 = cljs.core.count.call(null,inst_35787);
var inst_35764 = inst_35788;
var inst_35765 = inst_35787;
var inst_35766 = inst_35789;
var inst_35767 = (0);
var state_35824__$1 = (function (){var statearr_35859 = state_35824;
(statearr_35859[(20)] = inst_35764);

(statearr_35859[(10)] = inst_35767);

(statearr_35859[(11)] = inst_35765);

(statearr_35859[(21)] = inst_35766);

return statearr_35859;
})();
var statearr_35860_35932 = state_35824__$1;
(statearr_35860_35932[(2)] = null);

(statearr_35860_35932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (41))){
var inst_35783 = (state_35824[(25)]);
var inst_35799 = (state_35824[(2)]);
var inst_35800 = cljs.core.next.call(null,inst_35783);
var inst_35764 = inst_35800;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35824__$1 = (function (){var statearr_35861 = state_35824;
(statearr_35861[(20)] = inst_35764);

(statearr_35861[(10)] = inst_35767);

(statearr_35861[(11)] = inst_35765);

(statearr_35861[(21)] = inst_35766);

(statearr_35861[(27)] = inst_35799);

return statearr_35861;
})();
var statearr_35862_35933 = state_35824__$1;
(statearr_35862_35933[(2)] = null);

(statearr_35862_35933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (43))){
var state_35824__$1 = state_35824;
var statearr_35863_35934 = state_35824__$1;
(statearr_35863_35934[(2)] = null);

(statearr_35863_35934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (29))){
var inst_35808 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35864_35935 = state_35824__$1;
(statearr_35864_35935[(2)] = inst_35808);

(statearr_35864_35935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (44))){
var inst_35817 = (state_35824[(2)]);
var state_35824__$1 = (function (){var statearr_35865 = state_35824;
(statearr_35865[(28)] = inst_35817);

return statearr_35865;
})();
var statearr_35866_35936 = state_35824__$1;
(statearr_35866_35936[(2)] = null);

(statearr_35866_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (6))){
var inst_35756 = (state_35824[(29)]);
var inst_35755 = cljs.core.deref.call(null,cs);
var inst_35756__$1 = cljs.core.keys.call(null,inst_35755);
var inst_35757 = cljs.core.count.call(null,inst_35756__$1);
var inst_35758 = cljs.core.reset_BANG_.call(null,dctr,inst_35757);
var inst_35763 = cljs.core.seq.call(null,inst_35756__$1);
var inst_35764 = inst_35763;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35824__$1 = (function (){var statearr_35867 = state_35824;
(statearr_35867[(20)] = inst_35764);

(statearr_35867[(10)] = inst_35767);

(statearr_35867[(11)] = inst_35765);

(statearr_35867[(21)] = inst_35766);

(statearr_35867[(29)] = inst_35756__$1);

(statearr_35867[(30)] = inst_35758);

return statearr_35867;
})();
var statearr_35868_35937 = state_35824__$1;
(statearr_35868_35937[(2)] = null);

(statearr_35868_35937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (28))){
var inst_35764 = (state_35824[(20)]);
var inst_35783 = (state_35824[(25)]);
var inst_35783__$1 = cljs.core.seq.call(null,inst_35764);
var state_35824__$1 = (function (){var statearr_35869 = state_35824;
(statearr_35869[(25)] = inst_35783__$1);

return statearr_35869;
})();
if(inst_35783__$1){
var statearr_35870_35938 = state_35824__$1;
(statearr_35870_35938[(1)] = (33));

} else {
var statearr_35871_35939 = state_35824__$1;
(statearr_35871_35939[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (25))){
var inst_35767 = (state_35824[(10)]);
var inst_35766 = (state_35824[(21)]);
var inst_35769 = (inst_35767 < inst_35766);
var inst_35770 = inst_35769;
var state_35824__$1 = state_35824;
if(cljs.core.truth_(inst_35770)){
var statearr_35872_35940 = state_35824__$1;
(statearr_35872_35940[(1)] = (27));

} else {
var statearr_35873_35941 = state_35824__$1;
(statearr_35873_35941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (34))){
var state_35824__$1 = state_35824;
var statearr_35874_35942 = state_35824__$1;
(statearr_35874_35942[(2)] = null);

(statearr_35874_35942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (17))){
var state_35824__$1 = state_35824;
var statearr_35875_35943 = state_35824__$1;
(statearr_35875_35943[(2)] = null);

(statearr_35875_35943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (3))){
var inst_35822 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35824__$1,inst_35822);
} else {
if((state_val_35825 === (12))){
var inst_35751 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35876_35944 = state_35824__$1;
(statearr_35876_35944[(2)] = inst_35751);

(statearr_35876_35944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (2))){
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35824__$1,(4),ch);
} else {
if((state_val_35825 === (23))){
var state_35824__$1 = state_35824;
var statearr_35877_35945 = state_35824__$1;
(statearr_35877_35945[(2)] = null);

(statearr_35877_35945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (35))){
var inst_35806 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35878_35946 = state_35824__$1;
(statearr_35878_35946[(2)] = inst_35806);

(statearr_35878_35946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (19))){
var inst_35725 = (state_35824[(7)]);
var inst_35729 = cljs.core.chunk_first.call(null,inst_35725);
var inst_35730 = cljs.core.chunk_rest.call(null,inst_35725);
var inst_35731 = cljs.core.count.call(null,inst_35729);
var inst_35705 = inst_35730;
var inst_35706 = inst_35729;
var inst_35707 = inst_35731;
var inst_35708 = (0);
var state_35824__$1 = (function (){var statearr_35879 = state_35824;
(statearr_35879[(13)] = inst_35706);

(statearr_35879[(15)] = inst_35705);

(statearr_35879[(16)] = inst_35707);

(statearr_35879[(17)] = inst_35708);

return statearr_35879;
})();
var statearr_35880_35947 = state_35824__$1;
(statearr_35880_35947[(2)] = null);

(statearr_35880_35947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (11))){
var inst_35705 = (state_35824[(15)]);
var inst_35725 = (state_35824[(7)]);
var inst_35725__$1 = cljs.core.seq.call(null,inst_35705);
var state_35824__$1 = (function (){var statearr_35881 = state_35824;
(statearr_35881[(7)] = inst_35725__$1);

return statearr_35881;
})();
if(inst_35725__$1){
var statearr_35882_35948 = state_35824__$1;
(statearr_35882_35948[(1)] = (16));

} else {
var statearr_35883_35949 = state_35824__$1;
(statearr_35883_35949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (9))){
var inst_35753 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35884_35950 = state_35824__$1;
(statearr_35884_35950[(2)] = inst_35753);

(statearr_35884_35950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (5))){
var inst_35703 = cljs.core.deref.call(null,cs);
var inst_35704 = cljs.core.seq.call(null,inst_35703);
var inst_35705 = inst_35704;
var inst_35706 = null;
var inst_35707 = (0);
var inst_35708 = (0);
var state_35824__$1 = (function (){var statearr_35885 = state_35824;
(statearr_35885[(13)] = inst_35706);

(statearr_35885[(15)] = inst_35705);

(statearr_35885[(16)] = inst_35707);

(statearr_35885[(17)] = inst_35708);

return statearr_35885;
})();
var statearr_35886_35951 = state_35824__$1;
(statearr_35886_35951[(2)] = null);

(statearr_35886_35951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (14))){
var state_35824__$1 = state_35824;
var statearr_35887_35952 = state_35824__$1;
(statearr_35887_35952[(2)] = null);

(statearr_35887_35952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (45))){
var inst_35814 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35888_35953 = state_35824__$1;
(statearr_35888_35953[(2)] = inst_35814);

(statearr_35888_35953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (26))){
var inst_35756 = (state_35824[(29)]);
var inst_35810 = (state_35824[(2)]);
var inst_35811 = cljs.core.seq.call(null,inst_35756);
var state_35824__$1 = (function (){var statearr_35889 = state_35824;
(statearr_35889[(31)] = inst_35810);

return statearr_35889;
})();
if(inst_35811){
var statearr_35890_35954 = state_35824__$1;
(statearr_35890_35954[(1)] = (42));

} else {
var statearr_35891_35955 = state_35824__$1;
(statearr_35891_35955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (16))){
var inst_35725 = (state_35824[(7)]);
var inst_35727 = cljs.core.chunked_seq_QMARK_.call(null,inst_35725);
var state_35824__$1 = state_35824;
if(inst_35727){
var statearr_35892_35956 = state_35824__$1;
(statearr_35892_35956[(1)] = (19));

} else {
var statearr_35893_35957 = state_35824__$1;
(statearr_35893_35957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (38))){
var inst_35803 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35894_35958 = state_35824__$1;
(statearr_35894_35958[(2)] = inst_35803);

(statearr_35894_35958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (30))){
var state_35824__$1 = state_35824;
var statearr_35895_35959 = state_35824__$1;
(statearr_35895_35959[(2)] = null);

(statearr_35895_35959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (10))){
var inst_35706 = (state_35824[(13)]);
var inst_35708 = (state_35824[(17)]);
var inst_35714 = cljs.core._nth.call(null,inst_35706,inst_35708);
var inst_35715 = cljs.core.nth.call(null,inst_35714,(0),null);
var inst_35716 = cljs.core.nth.call(null,inst_35714,(1),null);
var state_35824__$1 = (function (){var statearr_35896 = state_35824;
(statearr_35896[(26)] = inst_35715);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35716)){
var statearr_35897_35960 = state_35824__$1;
(statearr_35897_35960[(1)] = (13));

} else {
var statearr_35898_35961 = state_35824__$1;
(statearr_35898_35961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (18))){
var inst_35749 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35899_35962 = state_35824__$1;
(statearr_35899_35962[(2)] = inst_35749);

(statearr_35899_35962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (42))){
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35824__$1,(45),dchan);
} else {
if((state_val_35825 === (37))){
var inst_35792 = (state_35824[(23)]);
var inst_35783 = (state_35824[(25)]);
var inst_35696 = (state_35824[(12)]);
var inst_35792__$1 = cljs.core.first.call(null,inst_35783);
var inst_35793 = cljs.core.async.put_BANG_.call(null,inst_35792__$1,inst_35696,done);
var state_35824__$1 = (function (){var statearr_35900 = state_35824;
(statearr_35900[(23)] = inst_35792__$1);

return statearr_35900;
})();
if(cljs.core.truth_(inst_35793)){
var statearr_35901_35963 = state_35824__$1;
(statearr_35901_35963[(1)] = (39));

} else {
var statearr_35902_35964 = state_35824__$1;
(statearr_35902_35964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (8))){
var inst_35707 = (state_35824[(16)]);
var inst_35708 = (state_35824[(17)]);
var inst_35710 = (inst_35708 < inst_35707);
var inst_35711 = inst_35710;
var state_35824__$1 = state_35824;
if(cljs.core.truth_(inst_35711)){
var statearr_35903_35965 = state_35824__$1;
(statearr_35903_35965[(1)] = (10));

} else {
var statearr_35904_35966 = state_35824__$1;
(statearr_35904_35966[(1)] = (11));

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
});})(c__28484__auto___35912,cs,m,dchan,dctr,done))
;
return ((function (switch__28419__auto__,c__28484__auto___35912,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28420__auto__ = null;
var cljs$core$async$mult_$_state_machine__28420__auto____0 = (function (){
var statearr_35908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35908[(0)] = cljs$core$async$mult_$_state_machine__28420__auto__);

(statearr_35908[(1)] = (1));

return statearr_35908;
});
var cljs$core$async$mult_$_state_machine__28420__auto____1 = (function (state_35824){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_35824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e35909){if((e35909 instanceof Object)){
var ex__28423__auto__ = e35909;
var statearr_35910_35967 = state_35824;
(statearr_35910_35967[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35968 = state_35824;
state_35824 = G__35968;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28420__auto__ = function(state_35824){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28420__auto____1.call(this,state_35824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28420__auto____0;
cljs$core$async$mult_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28420__auto____1;
return cljs$core$async$mult_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___35912,cs,m,dchan,dctr,done))
})();
var state__28486__auto__ = (function (){var statearr_35911 = f__28485__auto__.call(null);
(statearr_35911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___35912);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___35912,cs,m,dchan,dctr,done))
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
var args35969 = [];
var len__26292__auto___35972 = arguments.length;
var i__26293__auto___35973 = (0);
while(true){
if((i__26293__auto___35973 < len__26292__auto___35972)){
args35969.push((arguments[i__26293__auto___35973]));

var G__35974 = (i__26293__auto___35973 + (1));
i__26293__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var G__35971 = args35969.length;
switch (G__35971) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35969.length)].join('')));

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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,ch);
} else {
var m__25890__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,ch);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,ch);
} else {
var m__25890__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,ch);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m);
} else {
var m__25890__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,state_map);
} else {
var m__25890__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,state_map);
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
var x__25889__auto__ = (((m == null))?null:m);
var m__25890__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,m,mode);
} else {
var m__25890__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__26299__auto__ = [];
var len__26292__auto___35988 = arguments.length;
var i__26293__auto___35989 = (0);
while(true){
if((i__26293__auto___35989 < len__26292__auto___35988)){
args__26299__auto__.push((arguments[i__26293__auto___35989]));

var G__35990 = (i__26293__auto___35989 + (1));
i__26293__auto___35989 = G__35990;
continue;
} else {
}
break;
}

var argseq__26300__auto__ = ((((3) < args__26299__auto__.length))?(new cljs.core.IndexedSeq(args__26299__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26300__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35982){
var map__35983 = p__35982;
var map__35983__$1 = ((((!((map__35983 == null)))?((((map__35983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35983):map__35983);
var opts = map__35983__$1;
var statearr_35985_35991 = state;
(statearr_35985_35991[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__35983,map__35983__$1,opts){
return (function (val){
var statearr_35986_35992 = state;
(statearr_35986_35992[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35983,map__35983__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_35987_35993 = state;
(statearr_35987_35993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35978){
var G__35979 = cljs.core.first.call(null,seq35978);
var seq35978__$1 = cljs.core.next.call(null,seq35978);
var G__35980 = cljs.core.first.call(null,seq35978__$1);
var seq35978__$2 = cljs.core.next.call(null,seq35978__$1);
var G__35981 = cljs.core.first.call(null,seq35978__$2);
var seq35978__$3 = cljs.core.next.call(null,seq35978__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35979,G__35980,G__35981,seq35978__$3);
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
if(typeof cljs.core.async.t36157 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36157 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36158){
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
this.meta36158 = meta36158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36159,meta36158__$1){
var self__ = this;
var _36159__$1 = this;
return (new cljs.core.async.t36157(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36158__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36159){
var self__ = this;
var _36159__$1 = this;
return self__.meta36158;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t36157.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36158","meta36158",-626328086,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36157.cljs$lang$type = true;

cljs.core.async.t36157.cljs$lang$ctorStr = "cljs.core.async/t36157";

cljs.core.async.t36157.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36157");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t36157 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t36157(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36158){
return (new cljs.core.async.t36157(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36158));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t36157(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28484__auto___36320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36257){
var state_val_36258 = (state_36257[(1)]);
if((state_val_36258 === (7))){
var inst_36175 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36259_36321 = state_36257__$1;
(statearr_36259_36321[(2)] = inst_36175);

(statearr_36259_36321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (20))){
var inst_36187 = (state_36257[(7)]);
var state_36257__$1 = state_36257;
var statearr_36260_36322 = state_36257__$1;
(statearr_36260_36322[(2)] = inst_36187);

(statearr_36260_36322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (27))){
var state_36257__$1 = state_36257;
var statearr_36261_36323 = state_36257__$1;
(statearr_36261_36323[(2)] = null);

(statearr_36261_36323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (1))){
var inst_36163 = (state_36257[(8)]);
var inst_36163__$1 = calc_state.call(null);
var inst_36165 = (inst_36163__$1 == null);
var inst_36166 = cljs.core.not.call(null,inst_36165);
var state_36257__$1 = (function (){var statearr_36262 = state_36257;
(statearr_36262[(8)] = inst_36163__$1);

return statearr_36262;
})();
if(inst_36166){
var statearr_36263_36324 = state_36257__$1;
(statearr_36263_36324[(1)] = (2));

} else {
var statearr_36264_36325 = state_36257__$1;
(statearr_36264_36325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (24))){
var inst_36217 = (state_36257[(9)]);
var inst_36231 = (state_36257[(10)]);
var inst_36210 = (state_36257[(11)]);
var inst_36231__$1 = inst_36210.call(null,inst_36217);
var state_36257__$1 = (function (){var statearr_36265 = state_36257;
(statearr_36265[(10)] = inst_36231__$1);

return statearr_36265;
})();
if(cljs.core.truth_(inst_36231__$1)){
var statearr_36266_36326 = state_36257__$1;
(statearr_36266_36326[(1)] = (29));

} else {
var statearr_36267_36327 = state_36257__$1;
(statearr_36267_36327[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (4))){
var inst_36178 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36178)){
var statearr_36268_36328 = state_36257__$1;
(statearr_36268_36328[(1)] = (8));

} else {
var statearr_36269_36329 = state_36257__$1;
(statearr_36269_36329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (15))){
var inst_36204 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36204)){
var statearr_36270_36330 = state_36257__$1;
(statearr_36270_36330[(1)] = (19));

} else {
var statearr_36271_36331 = state_36257__$1;
(statearr_36271_36331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (21))){
var inst_36209 = (state_36257[(12)]);
var inst_36209__$1 = (state_36257[(2)]);
var inst_36210 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36211 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36212 = cljs.core.get.call(null,inst_36209__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36257__$1 = (function (){var statearr_36272 = state_36257;
(statearr_36272[(13)] = inst_36211);

(statearr_36272[(12)] = inst_36209__$1);

(statearr_36272[(11)] = inst_36210);

return statearr_36272;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36257__$1,(22),inst_36212);
} else {
if((state_val_36258 === (31))){
var inst_36239 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36239)){
var statearr_36273_36332 = state_36257__$1;
(statearr_36273_36332[(1)] = (32));

} else {
var statearr_36274_36333 = state_36257__$1;
(statearr_36274_36333[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (32))){
var inst_36216 = (state_36257[(14)]);
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36257__$1,(35),out,inst_36216);
} else {
if((state_val_36258 === (33))){
var inst_36209 = (state_36257[(12)]);
var inst_36187 = inst_36209;
var state_36257__$1 = (function (){var statearr_36275 = state_36257;
(statearr_36275[(7)] = inst_36187);

return statearr_36275;
})();
var statearr_36276_36334 = state_36257__$1;
(statearr_36276_36334[(2)] = null);

(statearr_36276_36334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (13))){
var inst_36187 = (state_36257[(7)]);
var inst_36194 = inst_36187.cljs$lang$protocol_mask$partition0$;
var inst_36195 = (inst_36194 & (64));
var inst_36196 = inst_36187.cljs$core$ISeq$;
var inst_36197 = (inst_36195) || (inst_36196);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36197)){
var statearr_36277_36335 = state_36257__$1;
(statearr_36277_36335[(1)] = (16));

} else {
var statearr_36278_36336 = state_36257__$1;
(statearr_36278_36336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (22))){
var inst_36216 = (state_36257[(14)]);
var inst_36217 = (state_36257[(9)]);
var inst_36215 = (state_36257[(2)]);
var inst_36216__$1 = cljs.core.nth.call(null,inst_36215,(0),null);
var inst_36217__$1 = cljs.core.nth.call(null,inst_36215,(1),null);
var inst_36218 = (inst_36216__$1 == null);
var inst_36219 = cljs.core._EQ_.call(null,inst_36217__$1,change);
var inst_36220 = (inst_36218) || (inst_36219);
var state_36257__$1 = (function (){var statearr_36279 = state_36257;
(statearr_36279[(14)] = inst_36216__$1);

(statearr_36279[(9)] = inst_36217__$1);

return statearr_36279;
})();
if(cljs.core.truth_(inst_36220)){
var statearr_36280_36337 = state_36257__$1;
(statearr_36280_36337[(1)] = (23));

} else {
var statearr_36281_36338 = state_36257__$1;
(statearr_36281_36338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (36))){
var inst_36209 = (state_36257[(12)]);
var inst_36187 = inst_36209;
var state_36257__$1 = (function (){var statearr_36282 = state_36257;
(statearr_36282[(7)] = inst_36187);

return statearr_36282;
})();
var statearr_36283_36339 = state_36257__$1;
(statearr_36283_36339[(2)] = null);

(statearr_36283_36339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (29))){
var inst_36231 = (state_36257[(10)]);
var state_36257__$1 = state_36257;
var statearr_36284_36340 = state_36257__$1;
(statearr_36284_36340[(2)] = inst_36231);

(statearr_36284_36340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (6))){
var state_36257__$1 = state_36257;
var statearr_36285_36341 = state_36257__$1;
(statearr_36285_36341[(2)] = false);

(statearr_36285_36341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (28))){
var inst_36227 = (state_36257[(2)]);
var inst_36228 = calc_state.call(null);
var inst_36187 = inst_36228;
var state_36257__$1 = (function (){var statearr_36286 = state_36257;
(statearr_36286[(15)] = inst_36227);

(statearr_36286[(7)] = inst_36187);

return statearr_36286;
})();
var statearr_36287_36342 = state_36257__$1;
(statearr_36287_36342[(2)] = null);

(statearr_36287_36342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (25))){
var inst_36253 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36288_36343 = state_36257__$1;
(statearr_36288_36343[(2)] = inst_36253);

(statearr_36288_36343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (34))){
var inst_36251 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36289_36344 = state_36257__$1;
(statearr_36289_36344[(2)] = inst_36251);

(statearr_36289_36344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (17))){
var state_36257__$1 = state_36257;
var statearr_36290_36345 = state_36257__$1;
(statearr_36290_36345[(2)] = false);

(statearr_36290_36345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (3))){
var state_36257__$1 = state_36257;
var statearr_36291_36346 = state_36257__$1;
(statearr_36291_36346[(2)] = false);

(statearr_36291_36346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (12))){
var inst_36255 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36257__$1,inst_36255);
} else {
if((state_val_36258 === (2))){
var inst_36163 = (state_36257[(8)]);
var inst_36168 = inst_36163.cljs$lang$protocol_mask$partition0$;
var inst_36169 = (inst_36168 & (64));
var inst_36170 = inst_36163.cljs$core$ISeq$;
var inst_36171 = (inst_36169) || (inst_36170);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36171)){
var statearr_36292_36347 = state_36257__$1;
(statearr_36292_36347[(1)] = (5));

} else {
var statearr_36293_36348 = state_36257__$1;
(statearr_36293_36348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (23))){
var inst_36216 = (state_36257[(14)]);
var inst_36222 = (inst_36216 == null);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36222)){
var statearr_36294_36349 = state_36257__$1;
(statearr_36294_36349[(1)] = (26));

} else {
var statearr_36295_36350 = state_36257__$1;
(statearr_36295_36350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (35))){
var inst_36242 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36242)){
var statearr_36296_36351 = state_36257__$1;
(statearr_36296_36351[(1)] = (36));

} else {
var statearr_36297_36352 = state_36257__$1;
(statearr_36297_36352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (19))){
var inst_36187 = (state_36257[(7)]);
var inst_36206 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36187);
var state_36257__$1 = state_36257;
var statearr_36298_36353 = state_36257__$1;
(statearr_36298_36353[(2)] = inst_36206);

(statearr_36298_36353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (11))){
var inst_36187 = (state_36257[(7)]);
var inst_36191 = (inst_36187 == null);
var inst_36192 = cljs.core.not.call(null,inst_36191);
var state_36257__$1 = state_36257;
if(inst_36192){
var statearr_36299_36354 = state_36257__$1;
(statearr_36299_36354[(1)] = (13));

} else {
var statearr_36300_36355 = state_36257__$1;
(statearr_36300_36355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (9))){
var inst_36163 = (state_36257[(8)]);
var state_36257__$1 = state_36257;
var statearr_36301_36356 = state_36257__$1;
(statearr_36301_36356[(2)] = inst_36163);

(statearr_36301_36356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (5))){
var state_36257__$1 = state_36257;
var statearr_36302_36357 = state_36257__$1;
(statearr_36302_36357[(2)] = true);

(statearr_36302_36357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (14))){
var state_36257__$1 = state_36257;
var statearr_36303_36358 = state_36257__$1;
(statearr_36303_36358[(2)] = false);

(statearr_36303_36358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (26))){
var inst_36217 = (state_36257[(9)]);
var inst_36224 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36217);
var state_36257__$1 = state_36257;
var statearr_36304_36359 = state_36257__$1;
(statearr_36304_36359[(2)] = inst_36224);

(statearr_36304_36359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (16))){
var state_36257__$1 = state_36257;
var statearr_36305_36360 = state_36257__$1;
(statearr_36305_36360[(2)] = true);

(statearr_36305_36360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (38))){
var inst_36247 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36306_36361 = state_36257__$1;
(statearr_36306_36361[(2)] = inst_36247);

(statearr_36306_36361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (30))){
var inst_36217 = (state_36257[(9)]);
var inst_36211 = (state_36257[(13)]);
var inst_36210 = (state_36257[(11)]);
var inst_36234 = cljs.core.empty_QMARK_.call(null,inst_36210);
var inst_36235 = inst_36211.call(null,inst_36217);
var inst_36236 = cljs.core.not.call(null,inst_36235);
var inst_36237 = (inst_36234) && (inst_36236);
var state_36257__$1 = state_36257;
var statearr_36307_36362 = state_36257__$1;
(statearr_36307_36362[(2)] = inst_36237);

(statearr_36307_36362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (10))){
var inst_36163 = (state_36257[(8)]);
var inst_36183 = (state_36257[(2)]);
var inst_36184 = cljs.core.get.call(null,inst_36183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36185 = cljs.core.get.call(null,inst_36183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36186 = cljs.core.get.call(null,inst_36183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36187 = inst_36163;
var state_36257__$1 = (function (){var statearr_36308 = state_36257;
(statearr_36308[(16)] = inst_36185);

(statearr_36308[(17)] = inst_36186);

(statearr_36308[(18)] = inst_36184);

(statearr_36308[(7)] = inst_36187);

return statearr_36308;
})();
var statearr_36309_36363 = state_36257__$1;
(statearr_36309_36363[(2)] = null);

(statearr_36309_36363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (18))){
var inst_36201 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36310_36364 = state_36257__$1;
(statearr_36310_36364[(2)] = inst_36201);

(statearr_36310_36364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (37))){
var state_36257__$1 = state_36257;
var statearr_36311_36365 = state_36257__$1;
(statearr_36311_36365[(2)] = null);

(statearr_36311_36365[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (8))){
var inst_36163 = (state_36257[(8)]);
var inst_36180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36163);
var state_36257__$1 = state_36257;
var statearr_36312_36366 = state_36257__$1;
(statearr_36312_36366[(2)] = inst_36180);

(statearr_36312_36366[(1)] = (10));


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
});})(c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28419__auto__,c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28420__auto__ = null;
var cljs$core$async$mix_$_state_machine__28420__auto____0 = (function (){
var statearr_36316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36316[(0)] = cljs$core$async$mix_$_state_machine__28420__auto__);

(statearr_36316[(1)] = (1));

return statearr_36316;
});
var cljs$core$async$mix_$_state_machine__28420__auto____1 = (function (state_36257){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36317){if((e36317 instanceof Object)){
var ex__28423__auto__ = e36317;
var statearr_36318_36367 = state_36257;
(statearr_36318_36367[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_36257;
state_36257 = G__36368;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28420__auto__ = function(state_36257){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28420__auto____1.call(this,state_36257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28420__auto____0;
cljs$core$async$mix_$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28420__auto____1;
return cljs$core$async$mix_$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28486__auto__ = (function (){var statearr_36319 = f__28485__auto__.call(null);
(statearr_36319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36320);

return statearr_36319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25889__auto__ = (((p == null))?null:p);
var m__25890__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25890__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25889__auto__ = (((p == null))?null:p);
var m__25890__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,p,v,ch);
} else {
var m__25890__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args36371 = [];
var len__26292__auto___36374 = arguments.length;
var i__26293__auto___36375 = (0);
while(true){
if((i__26293__auto___36375 < len__26292__auto___36374)){
args36371.push((arguments[i__26293__auto___36375]));

var G__36376 = (i__26293__auto___36375 + (1));
i__26293__auto___36375 = G__36376;
continue;
} else {
}
break;
}

var G__36373 = args36371.length;
switch (G__36373) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36371.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25889__auto__ = (((p == null))?null:p);
var m__25890__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,p);
} else {
var m__25890__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,p);
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
var x__25889__auto__ = (((p == null))?null:p);
var m__25890__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25889__auto__)]);
if(!((m__25890__auto__ == null))){
return m__25890__auto__.call(null,p,v);
} else {
var m__25890__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25890__auto____$1 == null))){
return m__25890__auto____$1.call(null,p,v);
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
var args36379 = [];
var len__26292__auto___36504 = arguments.length;
var i__26293__auto___36505 = (0);
while(true){
if((i__26293__auto___36505 < len__26292__auto___36504)){
args36379.push((arguments[i__26293__auto___36505]));

var G__36506 = (i__26293__auto___36505 + (1));
i__26293__auto___36505 = G__36506;
continue;
} else {
}
break;
}

var G__36381 = args36379.length;
switch (G__36381) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36379.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25253__auto__)){
return or__25253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25253__auto__,mults){
return (function (p1__36378_SHARP_){
if(cljs.core.truth_(p1__36378_SHARP_.call(null,topic))){
return p1__36378_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36378_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25253__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t36382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36382 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36383){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36383 = meta36383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36384,meta36383__$1){
var self__ = this;
var _36384__$1 = this;
return (new cljs.core.async.t36382(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36383__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t36382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36384){
var self__ = this;
var _36384__$1 = this;
return self__.meta36383;
});})(mults,ensure_mult))
;

cljs.core.async.t36382.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t36382.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t36382.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t36382.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t36382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t36382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t36382.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36383","meta36383",-200951176,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t36382.cljs$lang$type = true;

cljs.core.async.t36382.cljs$lang$ctorStr = "cljs.core.async/t36382";

cljs.core.async.t36382.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36382");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t36382 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t36382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36383){
return (new cljs.core.async.t36382(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36383));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t36382(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28484__auto___36508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36508,mults,ensure_mult,p){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36508,mults,ensure_mult,p){
return (function (state_36456){
var state_val_36457 = (state_36456[(1)]);
if((state_val_36457 === (7))){
var inst_36452 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36458_36509 = state_36456__$1;
(statearr_36458_36509[(2)] = inst_36452);

(statearr_36458_36509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (20))){
var state_36456__$1 = state_36456;
var statearr_36459_36510 = state_36456__$1;
(statearr_36459_36510[(2)] = null);

(statearr_36459_36510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (1))){
var state_36456__$1 = state_36456;
var statearr_36460_36511 = state_36456__$1;
(statearr_36460_36511[(2)] = null);

(statearr_36460_36511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (24))){
var inst_36435 = (state_36456[(7)]);
var inst_36444 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36435);
var state_36456__$1 = state_36456;
var statearr_36461_36512 = state_36456__$1;
(statearr_36461_36512[(2)] = inst_36444);

(statearr_36461_36512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (4))){
var inst_36387 = (state_36456[(8)]);
var inst_36387__$1 = (state_36456[(2)]);
var inst_36388 = (inst_36387__$1 == null);
var state_36456__$1 = (function (){var statearr_36462 = state_36456;
(statearr_36462[(8)] = inst_36387__$1);

return statearr_36462;
})();
if(cljs.core.truth_(inst_36388)){
var statearr_36463_36513 = state_36456__$1;
(statearr_36463_36513[(1)] = (5));

} else {
var statearr_36464_36514 = state_36456__$1;
(statearr_36464_36514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (15))){
var inst_36429 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36465_36515 = state_36456__$1;
(statearr_36465_36515[(2)] = inst_36429);

(statearr_36465_36515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (21))){
var inst_36449 = (state_36456[(2)]);
var state_36456__$1 = (function (){var statearr_36466 = state_36456;
(statearr_36466[(9)] = inst_36449);

return statearr_36466;
})();
var statearr_36467_36516 = state_36456__$1;
(statearr_36467_36516[(2)] = null);

(statearr_36467_36516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (13))){
var inst_36411 = (state_36456[(10)]);
var inst_36413 = cljs.core.chunked_seq_QMARK_.call(null,inst_36411);
var state_36456__$1 = state_36456;
if(inst_36413){
var statearr_36468_36517 = state_36456__$1;
(statearr_36468_36517[(1)] = (16));

} else {
var statearr_36469_36518 = state_36456__$1;
(statearr_36469_36518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (22))){
var inst_36441 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
if(cljs.core.truth_(inst_36441)){
var statearr_36470_36519 = state_36456__$1;
(statearr_36470_36519[(1)] = (23));

} else {
var statearr_36471_36520 = state_36456__$1;
(statearr_36471_36520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (6))){
var inst_36437 = (state_36456[(11)]);
var inst_36387 = (state_36456[(8)]);
var inst_36435 = (state_36456[(7)]);
var inst_36435__$1 = topic_fn.call(null,inst_36387);
var inst_36436 = cljs.core.deref.call(null,mults);
var inst_36437__$1 = cljs.core.get.call(null,inst_36436,inst_36435__$1);
var state_36456__$1 = (function (){var statearr_36472 = state_36456;
(statearr_36472[(11)] = inst_36437__$1);

(statearr_36472[(7)] = inst_36435__$1);

return statearr_36472;
})();
if(cljs.core.truth_(inst_36437__$1)){
var statearr_36473_36521 = state_36456__$1;
(statearr_36473_36521[(1)] = (19));

} else {
var statearr_36474_36522 = state_36456__$1;
(statearr_36474_36522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (25))){
var inst_36446 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36475_36523 = state_36456__$1;
(statearr_36475_36523[(2)] = inst_36446);

(statearr_36475_36523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (17))){
var inst_36411 = (state_36456[(10)]);
var inst_36420 = cljs.core.first.call(null,inst_36411);
var inst_36421 = cljs.core.async.muxch_STAR_.call(null,inst_36420);
var inst_36422 = cljs.core.async.close_BANG_.call(null,inst_36421);
var inst_36423 = cljs.core.next.call(null,inst_36411);
var inst_36397 = inst_36423;
var inst_36398 = null;
var inst_36399 = (0);
var inst_36400 = (0);
var state_36456__$1 = (function (){var statearr_36476 = state_36456;
(statearr_36476[(12)] = inst_36399);

(statearr_36476[(13)] = inst_36398);

(statearr_36476[(14)] = inst_36400);

(statearr_36476[(15)] = inst_36397);

(statearr_36476[(16)] = inst_36422);

return statearr_36476;
})();
var statearr_36477_36524 = state_36456__$1;
(statearr_36477_36524[(2)] = null);

(statearr_36477_36524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (3))){
var inst_36454 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36456__$1,inst_36454);
} else {
if((state_val_36457 === (12))){
var inst_36431 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36478_36525 = state_36456__$1;
(statearr_36478_36525[(2)] = inst_36431);

(statearr_36478_36525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (2))){
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36456__$1,(4),ch);
} else {
if((state_val_36457 === (23))){
var state_36456__$1 = state_36456;
var statearr_36479_36526 = state_36456__$1;
(statearr_36479_36526[(2)] = null);

(statearr_36479_36526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (19))){
var inst_36437 = (state_36456[(11)]);
var inst_36387 = (state_36456[(8)]);
var inst_36439 = cljs.core.async.muxch_STAR_.call(null,inst_36437);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36456__$1,(22),inst_36439,inst_36387);
} else {
if((state_val_36457 === (11))){
var inst_36411 = (state_36456[(10)]);
var inst_36397 = (state_36456[(15)]);
var inst_36411__$1 = cljs.core.seq.call(null,inst_36397);
var state_36456__$1 = (function (){var statearr_36480 = state_36456;
(statearr_36480[(10)] = inst_36411__$1);

return statearr_36480;
})();
if(inst_36411__$1){
var statearr_36481_36527 = state_36456__$1;
(statearr_36481_36527[(1)] = (13));

} else {
var statearr_36482_36528 = state_36456__$1;
(statearr_36482_36528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (9))){
var inst_36433 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36483_36529 = state_36456__$1;
(statearr_36483_36529[(2)] = inst_36433);

(statearr_36483_36529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (5))){
var inst_36394 = cljs.core.deref.call(null,mults);
var inst_36395 = cljs.core.vals.call(null,inst_36394);
var inst_36396 = cljs.core.seq.call(null,inst_36395);
var inst_36397 = inst_36396;
var inst_36398 = null;
var inst_36399 = (0);
var inst_36400 = (0);
var state_36456__$1 = (function (){var statearr_36484 = state_36456;
(statearr_36484[(12)] = inst_36399);

(statearr_36484[(13)] = inst_36398);

(statearr_36484[(14)] = inst_36400);

(statearr_36484[(15)] = inst_36397);

return statearr_36484;
})();
var statearr_36485_36530 = state_36456__$1;
(statearr_36485_36530[(2)] = null);

(statearr_36485_36530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (14))){
var state_36456__$1 = state_36456;
var statearr_36489_36531 = state_36456__$1;
(statearr_36489_36531[(2)] = null);

(statearr_36489_36531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (16))){
var inst_36411 = (state_36456[(10)]);
var inst_36415 = cljs.core.chunk_first.call(null,inst_36411);
var inst_36416 = cljs.core.chunk_rest.call(null,inst_36411);
var inst_36417 = cljs.core.count.call(null,inst_36415);
var inst_36397 = inst_36416;
var inst_36398 = inst_36415;
var inst_36399 = inst_36417;
var inst_36400 = (0);
var state_36456__$1 = (function (){var statearr_36490 = state_36456;
(statearr_36490[(12)] = inst_36399);

(statearr_36490[(13)] = inst_36398);

(statearr_36490[(14)] = inst_36400);

(statearr_36490[(15)] = inst_36397);

return statearr_36490;
})();
var statearr_36491_36532 = state_36456__$1;
(statearr_36491_36532[(2)] = null);

(statearr_36491_36532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (10))){
var inst_36399 = (state_36456[(12)]);
var inst_36398 = (state_36456[(13)]);
var inst_36400 = (state_36456[(14)]);
var inst_36397 = (state_36456[(15)]);
var inst_36405 = cljs.core._nth.call(null,inst_36398,inst_36400);
var inst_36406 = cljs.core.async.muxch_STAR_.call(null,inst_36405);
var inst_36407 = cljs.core.async.close_BANG_.call(null,inst_36406);
var inst_36408 = (inst_36400 + (1));
var tmp36486 = inst_36399;
var tmp36487 = inst_36398;
var tmp36488 = inst_36397;
var inst_36397__$1 = tmp36488;
var inst_36398__$1 = tmp36487;
var inst_36399__$1 = tmp36486;
var inst_36400__$1 = inst_36408;
var state_36456__$1 = (function (){var statearr_36492 = state_36456;
(statearr_36492[(12)] = inst_36399__$1);

(statearr_36492[(13)] = inst_36398__$1);

(statearr_36492[(17)] = inst_36407);

(statearr_36492[(14)] = inst_36400__$1);

(statearr_36492[(15)] = inst_36397__$1);

return statearr_36492;
})();
var statearr_36493_36533 = state_36456__$1;
(statearr_36493_36533[(2)] = null);

(statearr_36493_36533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (18))){
var inst_36426 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
var statearr_36494_36534 = state_36456__$1;
(statearr_36494_36534[(2)] = inst_36426);

(statearr_36494_36534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (8))){
var inst_36399 = (state_36456[(12)]);
var inst_36400 = (state_36456[(14)]);
var inst_36402 = (inst_36400 < inst_36399);
var inst_36403 = inst_36402;
var state_36456__$1 = state_36456;
if(cljs.core.truth_(inst_36403)){
var statearr_36495_36535 = state_36456__$1;
(statearr_36495_36535[(1)] = (10));

} else {
var statearr_36496_36536 = state_36456__$1;
(statearr_36496_36536[(1)] = (11));

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
});})(c__28484__auto___36508,mults,ensure_mult,p))
;
return ((function (switch__28419__auto__,c__28484__auto___36508,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_36500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36500[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_36500[(1)] = (1));

return statearr_36500;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_36456){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36501){if((e36501 instanceof Object)){
var ex__28423__auto__ = e36501;
var statearr_36502_36537 = state_36456;
(statearr_36502_36537[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36538 = state_36456;
state_36456 = G__36538;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_36456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_36456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36508,mults,ensure_mult,p))
})();
var state__28486__auto__ = (function (){var statearr_36503 = f__28485__auto__.call(null);
(statearr_36503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36508);

return statearr_36503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36508,mults,ensure_mult,p))
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
var args36539 = [];
var len__26292__auto___36542 = arguments.length;
var i__26293__auto___36543 = (0);
while(true){
if((i__26293__auto___36543 < len__26292__auto___36542)){
args36539.push((arguments[i__26293__auto___36543]));

var G__36544 = (i__26293__auto___36543 + (1));
i__26293__auto___36543 = G__36544;
continue;
} else {
}
break;
}

var G__36541 = args36539.length;
switch (G__36541) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36539.length)].join('')));

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
var args36546 = [];
var len__26292__auto___36549 = arguments.length;
var i__26293__auto___36550 = (0);
while(true){
if((i__26293__auto___36550 < len__26292__auto___36549)){
args36546.push((arguments[i__26293__auto___36550]));

var G__36551 = (i__26293__auto___36550 + (1));
i__26293__auto___36550 = G__36551;
continue;
} else {
}
break;
}

var G__36548 = args36546.length;
switch (G__36548) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36546.length)].join('')));

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
var args36553 = [];
var len__26292__auto___36624 = arguments.length;
var i__26293__auto___36625 = (0);
while(true){
if((i__26293__auto___36625 < len__26292__auto___36624)){
args36553.push((arguments[i__26293__auto___36625]));

var G__36626 = (i__26293__auto___36625 + (1));
i__26293__auto___36625 = G__36626;
continue;
} else {
}
break;
}

var G__36555 = args36553.length;
switch (G__36555) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36553.length)].join('')));

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
var c__28484__auto___36628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36594){
var state_val_36595 = (state_36594[(1)]);
if((state_val_36595 === (7))){
var state_36594__$1 = state_36594;
var statearr_36596_36629 = state_36594__$1;
(statearr_36596_36629[(2)] = null);

(statearr_36596_36629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (1))){
var state_36594__$1 = state_36594;
var statearr_36597_36630 = state_36594__$1;
(statearr_36597_36630[(2)] = null);

(statearr_36597_36630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (4))){
var inst_36558 = (state_36594[(7)]);
var inst_36560 = (inst_36558 < cnt);
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36560)){
var statearr_36598_36631 = state_36594__$1;
(statearr_36598_36631[(1)] = (6));

} else {
var statearr_36599_36632 = state_36594__$1;
(statearr_36599_36632[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (15))){
var inst_36590 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36600_36633 = state_36594__$1;
(statearr_36600_36633[(2)] = inst_36590);

(statearr_36600_36633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (13))){
var inst_36583 = cljs.core.async.close_BANG_.call(null,out);
var state_36594__$1 = state_36594;
var statearr_36601_36634 = state_36594__$1;
(statearr_36601_36634[(2)] = inst_36583);

(statearr_36601_36634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (6))){
var state_36594__$1 = state_36594;
var statearr_36602_36635 = state_36594__$1;
(statearr_36602_36635[(2)] = null);

(statearr_36602_36635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (3))){
var inst_36592 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36594__$1,inst_36592);
} else {
if((state_val_36595 === (12))){
var inst_36580 = (state_36594[(8)]);
var inst_36580__$1 = (state_36594[(2)]);
var inst_36581 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36580__$1);
var state_36594__$1 = (function (){var statearr_36603 = state_36594;
(statearr_36603[(8)] = inst_36580__$1);

return statearr_36603;
})();
if(cljs.core.truth_(inst_36581)){
var statearr_36604_36636 = state_36594__$1;
(statearr_36604_36636[(1)] = (13));

} else {
var statearr_36605_36637 = state_36594__$1;
(statearr_36605_36637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (2))){
var inst_36557 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36558 = (0);
var state_36594__$1 = (function (){var statearr_36606 = state_36594;
(statearr_36606[(9)] = inst_36557);

(statearr_36606[(7)] = inst_36558);

return statearr_36606;
})();
var statearr_36607_36638 = state_36594__$1;
(statearr_36607_36638[(2)] = null);

(statearr_36607_36638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (11))){
var inst_36558 = (state_36594[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36594,(10),Object,null,(9));
var inst_36567 = chs__$1.call(null,inst_36558);
var inst_36568 = done.call(null,inst_36558);
var inst_36569 = cljs.core.async.take_BANG_.call(null,inst_36567,inst_36568);
var state_36594__$1 = state_36594;
var statearr_36608_36639 = state_36594__$1;
(statearr_36608_36639[(2)] = inst_36569);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (9))){
var inst_36558 = (state_36594[(7)]);
var inst_36571 = (state_36594[(2)]);
var inst_36572 = (inst_36558 + (1));
var inst_36558__$1 = inst_36572;
var state_36594__$1 = (function (){var statearr_36609 = state_36594;
(statearr_36609[(10)] = inst_36571);

(statearr_36609[(7)] = inst_36558__$1);

return statearr_36609;
})();
var statearr_36610_36640 = state_36594__$1;
(statearr_36610_36640[(2)] = null);

(statearr_36610_36640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (5))){
var inst_36578 = (state_36594[(2)]);
var state_36594__$1 = (function (){var statearr_36611 = state_36594;
(statearr_36611[(11)] = inst_36578);

return statearr_36611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36594__$1,(12),dchan);
} else {
if((state_val_36595 === (14))){
var inst_36580 = (state_36594[(8)]);
var inst_36585 = cljs.core.apply.call(null,f,inst_36580);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36594__$1,(16),out,inst_36585);
} else {
if((state_val_36595 === (16))){
var inst_36587 = (state_36594[(2)]);
var state_36594__$1 = (function (){var statearr_36612 = state_36594;
(statearr_36612[(12)] = inst_36587);

return statearr_36612;
})();
var statearr_36613_36641 = state_36594__$1;
(statearr_36613_36641[(2)] = null);

(statearr_36613_36641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (10))){
var inst_36562 = (state_36594[(2)]);
var inst_36563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36594__$1 = (function (){var statearr_36614 = state_36594;
(statearr_36614[(13)] = inst_36562);

return statearr_36614;
})();
var statearr_36615_36642 = state_36594__$1;
(statearr_36615_36642[(2)] = inst_36563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (8))){
var inst_36576 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36616_36643 = state_36594__$1;
(statearr_36616_36643[(2)] = inst_36576);

(statearr_36616_36643[(1)] = (5));


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
});})(c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28419__auto__,c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_36620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36620[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_36620[(1)] = (1));

return statearr_36620;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_36594){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36621){if((e36621 instanceof Object)){
var ex__28423__auto__ = e36621;
var statearr_36622_36644 = state_36594;
(statearr_36622_36644[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36645 = state_36594;
state_36594 = G__36645;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_36594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_36594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28486__auto__ = (function (){var statearr_36623 = f__28485__auto__.call(null);
(statearr_36623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36628);

return statearr_36623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36628,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36647 = [];
var len__26292__auto___36703 = arguments.length;
var i__26293__auto___36704 = (0);
while(true){
if((i__26293__auto___36704 < len__26292__auto___36703)){
args36647.push((arguments[i__26293__auto___36704]));

var G__36705 = (i__26293__auto___36704 + (1));
i__26293__auto___36704 = G__36705;
continue;
} else {
}
break;
}

var G__36649 = args36647.length;
switch (G__36649) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36647.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___36707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36707,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36707,out){
return (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36659 = (state_36679[(7)]);
var inst_36658 = (state_36679[(8)]);
var inst_36658__$1 = (state_36679[(2)]);
var inst_36659__$1 = cljs.core.nth.call(null,inst_36658__$1,(0),null);
var inst_36660 = cljs.core.nth.call(null,inst_36658__$1,(1),null);
var inst_36661 = (inst_36659__$1 == null);
var state_36679__$1 = (function (){var statearr_36681 = state_36679;
(statearr_36681[(7)] = inst_36659__$1);

(statearr_36681[(8)] = inst_36658__$1);

(statearr_36681[(9)] = inst_36660);

return statearr_36681;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36682_36708 = state_36679__$1;
(statearr_36682_36708[(1)] = (8));

} else {
var statearr_36683_36709 = state_36679__$1;
(statearr_36683_36709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36650 = cljs.core.vec.call(null,chs);
var inst_36651 = inst_36650;
var state_36679__$1 = (function (){var statearr_36684 = state_36679;
(statearr_36684[(10)] = inst_36651);

return statearr_36684;
})();
var statearr_36685_36710 = state_36679__$1;
(statearr_36685_36710[(2)] = null);

(statearr_36685_36710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36651 = (state_36679[(10)]);
var state_36679__$1 = state_36679;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36679__$1,(7),inst_36651);
} else {
if((state_val_36680 === (6))){
var inst_36675 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36686_36711 = state_36679__$1;
(statearr_36686_36711[(2)] = inst_36675);

(statearr_36686_36711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36677 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36679__$1,inst_36677);
} else {
if((state_val_36680 === (2))){
var inst_36651 = (state_36679[(10)]);
var inst_36653 = cljs.core.count.call(null,inst_36651);
var inst_36654 = (inst_36653 > (0));
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36654)){
var statearr_36688_36712 = state_36679__$1;
(statearr_36688_36712[(1)] = (4));

} else {
var statearr_36689_36713 = state_36679__$1;
(statearr_36689_36713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (11))){
var inst_36651 = (state_36679[(10)]);
var inst_36668 = (state_36679[(2)]);
var tmp36687 = inst_36651;
var inst_36651__$1 = tmp36687;
var state_36679__$1 = (function (){var statearr_36690 = state_36679;
(statearr_36690[(11)] = inst_36668);

(statearr_36690[(10)] = inst_36651__$1);

return statearr_36690;
})();
var statearr_36691_36714 = state_36679__$1;
(statearr_36691_36714[(2)] = null);

(statearr_36691_36714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36659 = (state_36679[(7)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36679__$1,(11),out,inst_36659);
} else {
if((state_val_36680 === (5))){
var inst_36673 = cljs.core.async.close_BANG_.call(null,out);
var state_36679__$1 = state_36679;
var statearr_36692_36715 = state_36679__$1;
(statearr_36692_36715[(2)] = inst_36673);

(statearr_36692_36715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36671 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36693_36716 = state_36679__$1;
(statearr_36693_36716[(2)] = inst_36671);

(statearr_36693_36716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36659 = (state_36679[(7)]);
var inst_36651 = (state_36679[(10)]);
var inst_36658 = (state_36679[(8)]);
var inst_36660 = (state_36679[(9)]);
var inst_36663 = (function (){var cs = inst_36651;
var vec__36656 = inst_36658;
var v = inst_36659;
var c = inst_36660;
return ((function (cs,vec__36656,v,c,inst_36659,inst_36651,inst_36658,inst_36660,state_val_36680,c__28484__auto___36707,out){
return (function (p1__36646_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36646_SHARP_);
});
;})(cs,vec__36656,v,c,inst_36659,inst_36651,inst_36658,inst_36660,state_val_36680,c__28484__auto___36707,out))
})();
var inst_36664 = cljs.core.filterv.call(null,inst_36663,inst_36651);
var inst_36651__$1 = inst_36664;
var state_36679__$1 = (function (){var statearr_36694 = state_36679;
(statearr_36694[(10)] = inst_36651__$1);

return statearr_36694;
})();
var statearr_36695_36717 = state_36679__$1;
(statearr_36695_36717[(2)] = null);

(statearr_36695_36717[(1)] = (2));


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
});})(c__28484__auto___36707,out))
;
return ((function (switch__28419__auto__,c__28484__auto___36707,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_36699 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36699[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_36699[(1)] = (1));

return statearr_36699;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_36679){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36700){if((e36700 instanceof Object)){
var ex__28423__auto__ = e36700;
var statearr_36701_36718 = state_36679;
(statearr_36701_36718[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36719 = state_36679;
state_36679 = G__36719;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36707,out))
})();
var state__28486__auto__ = (function (){var statearr_36702 = f__28485__auto__.call(null);
(statearr_36702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36707);

return statearr_36702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36707,out))
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
var args36720 = [];
var len__26292__auto___36769 = arguments.length;
var i__26293__auto___36770 = (0);
while(true){
if((i__26293__auto___36770 < len__26292__auto___36769)){
args36720.push((arguments[i__26293__auto___36770]));

var G__36771 = (i__26293__auto___36770 + (1));
i__26293__auto___36770 = G__36771;
continue;
} else {
}
break;
}

var G__36722 = args36720.length;
switch (G__36722) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36720.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___36773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36773,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36773,out){
return (function (state_36746){
var state_val_36747 = (state_36746[(1)]);
if((state_val_36747 === (7))){
var inst_36728 = (state_36746[(7)]);
var inst_36728__$1 = (state_36746[(2)]);
var inst_36729 = (inst_36728__$1 == null);
var inst_36730 = cljs.core.not.call(null,inst_36729);
var state_36746__$1 = (function (){var statearr_36748 = state_36746;
(statearr_36748[(7)] = inst_36728__$1);

return statearr_36748;
})();
if(inst_36730){
var statearr_36749_36774 = state_36746__$1;
(statearr_36749_36774[(1)] = (8));

} else {
var statearr_36750_36775 = state_36746__$1;
(statearr_36750_36775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (1))){
var inst_36723 = (0);
var state_36746__$1 = (function (){var statearr_36751 = state_36746;
(statearr_36751[(8)] = inst_36723);

return statearr_36751;
})();
var statearr_36752_36776 = state_36746__$1;
(statearr_36752_36776[(2)] = null);

(statearr_36752_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (4))){
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36746__$1,(7),ch);
} else {
if((state_val_36747 === (6))){
var inst_36741 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36753_36777 = state_36746__$1;
(statearr_36753_36777[(2)] = inst_36741);

(statearr_36753_36777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (3))){
var inst_36743 = (state_36746[(2)]);
var inst_36744 = cljs.core.async.close_BANG_.call(null,out);
var state_36746__$1 = (function (){var statearr_36754 = state_36746;
(statearr_36754[(9)] = inst_36743);

return statearr_36754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36746__$1,inst_36744);
} else {
if((state_val_36747 === (2))){
var inst_36723 = (state_36746[(8)]);
var inst_36725 = (inst_36723 < n);
var state_36746__$1 = state_36746;
if(cljs.core.truth_(inst_36725)){
var statearr_36755_36778 = state_36746__$1;
(statearr_36755_36778[(1)] = (4));

} else {
var statearr_36756_36779 = state_36746__$1;
(statearr_36756_36779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (11))){
var inst_36723 = (state_36746[(8)]);
var inst_36733 = (state_36746[(2)]);
var inst_36734 = (inst_36723 + (1));
var inst_36723__$1 = inst_36734;
var state_36746__$1 = (function (){var statearr_36757 = state_36746;
(statearr_36757[(8)] = inst_36723__$1);

(statearr_36757[(10)] = inst_36733);

return statearr_36757;
})();
var statearr_36758_36780 = state_36746__$1;
(statearr_36758_36780[(2)] = null);

(statearr_36758_36780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (9))){
var state_36746__$1 = state_36746;
var statearr_36759_36781 = state_36746__$1;
(statearr_36759_36781[(2)] = null);

(statearr_36759_36781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (5))){
var state_36746__$1 = state_36746;
var statearr_36760_36782 = state_36746__$1;
(statearr_36760_36782[(2)] = null);

(statearr_36760_36782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (10))){
var inst_36738 = (state_36746[(2)]);
var state_36746__$1 = state_36746;
var statearr_36761_36783 = state_36746__$1;
(statearr_36761_36783[(2)] = inst_36738);

(statearr_36761_36783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36747 === (8))){
var inst_36728 = (state_36746[(7)]);
var state_36746__$1 = state_36746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36746__$1,(11),out,inst_36728);
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
});})(c__28484__auto___36773,out))
;
return ((function (switch__28419__auto__,c__28484__auto___36773,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_36765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36765[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_36765[(1)] = (1));

return statearr_36765;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_36746){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36766){if((e36766 instanceof Object)){
var ex__28423__auto__ = e36766;
var statearr_36767_36784 = state_36746;
(statearr_36767_36784[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36785 = state_36746;
state_36746 = G__36785;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_36746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_36746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36773,out))
})();
var state__28486__auto__ = (function (){var statearr_36768 = f__28485__auto__.call(null);
(statearr_36768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36773);

return statearr_36768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36773,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t36793 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36793 = (function (map_LT_,f,ch,meta36794){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36794 = meta36794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36795,meta36794__$1){
var self__ = this;
var _36795__$1 = this;
return (new cljs.core.async.t36793(self__.map_LT_,self__.f,self__.ch,meta36794__$1));
});

cljs.core.async.t36793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36795){
var self__ = this;
var _36795__$1 = this;
return self__.meta36794;
});

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t36796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36796 = (function (map_LT_,f,ch,meta36794,_,fn1,meta36797){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36794 = meta36794;
this._ = _;
this.fn1 = fn1;
this.meta36797 = meta36797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36798,meta36797__$1){
var self__ = this;
var _36798__$1 = this;
return (new cljs.core.async.t36796(self__.map_LT_,self__.f,self__.ch,self__.meta36794,self__._,self__.fn1,meta36797__$1));
});})(___$1))
;

cljs.core.async.t36796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36798){
var self__ = this;
var _36798__$1 = this;
return self__.meta36797;
});})(___$1))
;

cljs.core.async.t36796.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t36796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36786_SHARP_){
return f1.call(null,(((p1__36786_SHARP_ == null))?null:self__.f.call(null,p1__36786_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t36796.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36794","meta36794",-1896669313,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t36793","cljs.core.async/t36793",237297633,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36797","meta36797",578988857,null)], null);
});})(___$1))
;

cljs.core.async.t36796.cljs$lang$type = true;

cljs.core.async.t36796.cljs$lang$ctorStr = "cljs.core.async/t36796";

cljs.core.async.t36796.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36796");
});})(___$1))
;

cljs.core.async.__GT_t36796 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t36796(map_LT___$1,f__$1,ch__$1,meta36794__$1,___$2,fn1__$1,meta36797){
return (new cljs.core.async.t36796(map_LT___$1,f__$1,ch__$1,meta36794__$1,___$2,fn1__$1,meta36797));
});})(___$1))
;

}

return (new cljs.core.async.t36796(self__.map_LT_,self__.f,self__.ch,self__.meta36794,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25241__auto__ = ret;
if(cljs.core.truth_(and__25241__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25241__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t36793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36794","meta36794",-1896669313,null)], null);
});

cljs.core.async.t36793.cljs$lang$type = true;

cljs.core.async.t36793.cljs$lang$ctorStr = "cljs.core.async/t36793";

cljs.core.async.t36793.cljs$lang$ctorPrWriter = (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36793");
});

cljs.core.async.__GT_t36793 = (function cljs$core$async$map_LT__$___GT_t36793(map_LT___$1,f__$1,ch__$1,meta36794){
return (new cljs.core.async.t36793(map_LT___$1,f__$1,ch__$1,meta36794));
});

}

return (new cljs.core.async.t36793(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t36802 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36802 = (function (map_GT_,f,ch,meta36803){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36803 = meta36803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36804,meta36803__$1){
var self__ = this;
var _36804__$1 = this;
return (new cljs.core.async.t36802(self__.map_GT_,self__.f,self__.ch,meta36803__$1));
});

cljs.core.async.t36802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36804){
var self__ = this;
var _36804__$1 = this;
return self__.meta36803;
});

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t36802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36803","meta36803",1234520733,null)], null);
});

cljs.core.async.t36802.cljs$lang$type = true;

cljs.core.async.t36802.cljs$lang$ctorStr = "cljs.core.async/t36802";

cljs.core.async.t36802.cljs$lang$ctorPrWriter = (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36802");
});

cljs.core.async.__GT_t36802 = (function cljs$core$async$map_GT__$___GT_t36802(map_GT___$1,f__$1,ch__$1,meta36803){
return (new cljs.core.async.t36802(map_GT___$1,f__$1,ch__$1,meta36803));
});

}

return (new cljs.core.async.t36802(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t36808 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36808 = (function (filter_GT_,p,ch,meta36809){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36809 = meta36809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36810,meta36809__$1){
var self__ = this;
var _36810__$1 = this;
return (new cljs.core.async.t36808(self__.filter_GT_,self__.p,self__.ch,meta36809__$1));
});

cljs.core.async.t36808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36810){
var self__ = this;
var _36810__$1 = this;
return self__.meta36809;
});

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t36808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36809","meta36809",-549289568,null)], null);
});

cljs.core.async.t36808.cljs$lang$type = true;

cljs.core.async.t36808.cljs$lang$ctorStr = "cljs.core.async/t36808";

cljs.core.async.t36808.cljs$lang$ctorPrWriter = (function (this__25832__auto__,writer__25833__auto__,opt__25834__auto__){
return cljs.core._write.call(null,writer__25833__auto__,"cljs.core.async/t36808");
});

cljs.core.async.__GT_t36808 = (function cljs$core$async$filter_GT__$___GT_t36808(filter_GT___$1,p__$1,ch__$1,meta36809){
return (new cljs.core.async.t36808(filter_GT___$1,p__$1,ch__$1,meta36809));
});

}

return (new cljs.core.async.t36808(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36811 = [];
var len__26292__auto___36855 = arguments.length;
var i__26293__auto___36856 = (0);
while(true){
if((i__26293__auto___36856 < len__26292__auto___36855)){
args36811.push((arguments[i__26293__auto___36856]));

var G__36857 = (i__26293__auto___36856 + (1));
i__26293__auto___36856 = G__36857;
continue;
} else {
}
break;
}

var G__36813 = args36811.length;
switch (G__36813) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36811.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___36859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___36859,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___36859,out){
return (function (state_36834){
var state_val_36835 = (state_36834[(1)]);
if((state_val_36835 === (7))){
var inst_36830 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
var statearr_36836_36860 = state_36834__$1;
(statearr_36836_36860[(2)] = inst_36830);

(statearr_36836_36860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (1))){
var state_36834__$1 = state_36834;
var statearr_36837_36861 = state_36834__$1;
(statearr_36837_36861[(2)] = null);

(statearr_36837_36861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (4))){
var inst_36816 = (state_36834[(7)]);
var inst_36816__$1 = (state_36834[(2)]);
var inst_36817 = (inst_36816__$1 == null);
var state_36834__$1 = (function (){var statearr_36838 = state_36834;
(statearr_36838[(7)] = inst_36816__$1);

return statearr_36838;
})();
if(cljs.core.truth_(inst_36817)){
var statearr_36839_36862 = state_36834__$1;
(statearr_36839_36862[(1)] = (5));

} else {
var statearr_36840_36863 = state_36834__$1;
(statearr_36840_36863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (6))){
var inst_36816 = (state_36834[(7)]);
var inst_36821 = p.call(null,inst_36816);
var state_36834__$1 = state_36834;
if(cljs.core.truth_(inst_36821)){
var statearr_36841_36864 = state_36834__$1;
(statearr_36841_36864[(1)] = (8));

} else {
var statearr_36842_36865 = state_36834__$1;
(statearr_36842_36865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (3))){
var inst_36832 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36834__$1,inst_36832);
} else {
if((state_val_36835 === (2))){
var state_36834__$1 = state_36834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36834__$1,(4),ch);
} else {
if((state_val_36835 === (11))){
var inst_36824 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
var statearr_36843_36866 = state_36834__$1;
(statearr_36843_36866[(2)] = inst_36824);

(statearr_36843_36866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (9))){
var state_36834__$1 = state_36834;
var statearr_36844_36867 = state_36834__$1;
(statearr_36844_36867[(2)] = null);

(statearr_36844_36867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (5))){
var inst_36819 = cljs.core.async.close_BANG_.call(null,out);
var state_36834__$1 = state_36834;
var statearr_36845_36868 = state_36834__$1;
(statearr_36845_36868[(2)] = inst_36819);

(statearr_36845_36868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (10))){
var inst_36827 = (state_36834[(2)]);
var state_36834__$1 = (function (){var statearr_36846 = state_36834;
(statearr_36846[(8)] = inst_36827);

return statearr_36846;
})();
var statearr_36847_36869 = state_36834__$1;
(statearr_36847_36869[(2)] = null);

(statearr_36847_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (8))){
var inst_36816 = (state_36834[(7)]);
var state_36834__$1 = state_36834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36834__$1,(11),out,inst_36816);
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
});})(c__28484__auto___36859,out))
;
return ((function (switch__28419__auto__,c__28484__auto___36859,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_36851 = [null,null,null,null,null,null,null,null,null];
(statearr_36851[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_36851[(1)] = (1));

return statearr_36851;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_36834){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_36834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e36852){if((e36852 instanceof Object)){
var ex__28423__auto__ = e36852;
var statearr_36853_36870 = state_36834;
(statearr_36853_36870[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_36834;
state_36834 = G__36871;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_36834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_36834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___36859,out))
})();
var state__28486__auto__ = (function (){var statearr_36854 = f__28485__auto__.call(null);
(statearr_36854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___36859);

return statearr_36854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___36859,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args36872 = [];
var len__26292__auto___36875 = arguments.length;
var i__26293__auto___36876 = (0);
while(true){
if((i__26293__auto___36876 < len__26292__auto___36875)){
args36872.push((arguments[i__26293__auto___36876]));

var G__36877 = (i__26293__auto___36876 + (1));
i__26293__auto___36876 = G__36877;
continue;
} else {
}
break;
}

var G__36874 = args36872.length;
switch (G__36874) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36872.length)].join('')));

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
var c__28484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto__){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto__){
return (function (state_37044){
var state_val_37045 = (state_37044[(1)]);
if((state_val_37045 === (7))){
var inst_37040 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37046_37087 = state_37044__$1;
(statearr_37046_37087[(2)] = inst_37040);

(statearr_37046_37087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (20))){
var inst_37010 = (state_37044[(7)]);
var inst_37021 = (state_37044[(2)]);
var inst_37022 = cljs.core.next.call(null,inst_37010);
var inst_36996 = inst_37022;
var inst_36997 = null;
var inst_36998 = (0);
var inst_36999 = (0);
var state_37044__$1 = (function (){var statearr_37047 = state_37044;
(statearr_37047[(8)] = inst_36997);

(statearr_37047[(9)] = inst_37021);

(statearr_37047[(10)] = inst_36998);

(statearr_37047[(11)] = inst_36996);

(statearr_37047[(12)] = inst_36999);

return statearr_37047;
})();
var statearr_37048_37088 = state_37044__$1;
(statearr_37048_37088[(2)] = null);

(statearr_37048_37088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (1))){
var state_37044__$1 = state_37044;
var statearr_37049_37089 = state_37044__$1;
(statearr_37049_37089[(2)] = null);

(statearr_37049_37089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (4))){
var inst_36985 = (state_37044[(13)]);
var inst_36985__$1 = (state_37044[(2)]);
var inst_36986 = (inst_36985__$1 == null);
var state_37044__$1 = (function (){var statearr_37050 = state_37044;
(statearr_37050[(13)] = inst_36985__$1);

return statearr_37050;
})();
if(cljs.core.truth_(inst_36986)){
var statearr_37051_37090 = state_37044__$1;
(statearr_37051_37090[(1)] = (5));

} else {
var statearr_37052_37091 = state_37044__$1;
(statearr_37052_37091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (15))){
var state_37044__$1 = state_37044;
var statearr_37056_37092 = state_37044__$1;
(statearr_37056_37092[(2)] = null);

(statearr_37056_37092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (21))){
var state_37044__$1 = state_37044;
var statearr_37057_37093 = state_37044__$1;
(statearr_37057_37093[(2)] = null);

(statearr_37057_37093[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (13))){
var inst_36997 = (state_37044[(8)]);
var inst_36998 = (state_37044[(10)]);
var inst_36996 = (state_37044[(11)]);
var inst_36999 = (state_37044[(12)]);
var inst_37006 = (state_37044[(2)]);
var inst_37007 = (inst_36999 + (1));
var tmp37053 = inst_36997;
var tmp37054 = inst_36998;
var tmp37055 = inst_36996;
var inst_36996__$1 = tmp37055;
var inst_36997__$1 = tmp37053;
var inst_36998__$1 = tmp37054;
var inst_36999__$1 = inst_37007;
var state_37044__$1 = (function (){var statearr_37058 = state_37044;
(statearr_37058[(14)] = inst_37006);

(statearr_37058[(8)] = inst_36997__$1);

(statearr_37058[(10)] = inst_36998__$1);

(statearr_37058[(11)] = inst_36996__$1);

(statearr_37058[(12)] = inst_36999__$1);

return statearr_37058;
})();
var statearr_37059_37094 = state_37044__$1;
(statearr_37059_37094[(2)] = null);

(statearr_37059_37094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (22))){
var state_37044__$1 = state_37044;
var statearr_37060_37095 = state_37044__$1;
(statearr_37060_37095[(2)] = null);

(statearr_37060_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (6))){
var inst_36985 = (state_37044[(13)]);
var inst_36994 = f.call(null,inst_36985);
var inst_36995 = cljs.core.seq.call(null,inst_36994);
var inst_36996 = inst_36995;
var inst_36997 = null;
var inst_36998 = (0);
var inst_36999 = (0);
var state_37044__$1 = (function (){var statearr_37061 = state_37044;
(statearr_37061[(8)] = inst_36997);

(statearr_37061[(10)] = inst_36998);

(statearr_37061[(11)] = inst_36996);

(statearr_37061[(12)] = inst_36999);

return statearr_37061;
})();
var statearr_37062_37096 = state_37044__$1;
(statearr_37062_37096[(2)] = null);

(statearr_37062_37096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (17))){
var inst_37010 = (state_37044[(7)]);
var inst_37014 = cljs.core.chunk_first.call(null,inst_37010);
var inst_37015 = cljs.core.chunk_rest.call(null,inst_37010);
var inst_37016 = cljs.core.count.call(null,inst_37014);
var inst_36996 = inst_37015;
var inst_36997 = inst_37014;
var inst_36998 = inst_37016;
var inst_36999 = (0);
var state_37044__$1 = (function (){var statearr_37063 = state_37044;
(statearr_37063[(8)] = inst_36997);

(statearr_37063[(10)] = inst_36998);

(statearr_37063[(11)] = inst_36996);

(statearr_37063[(12)] = inst_36999);

return statearr_37063;
})();
var statearr_37064_37097 = state_37044__$1;
(statearr_37064_37097[(2)] = null);

(statearr_37064_37097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (3))){
var inst_37042 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37044__$1,inst_37042);
} else {
if((state_val_37045 === (12))){
var inst_37030 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37065_37098 = state_37044__$1;
(statearr_37065_37098[(2)] = inst_37030);

(statearr_37065_37098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (2))){
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37044__$1,(4),in$);
} else {
if((state_val_37045 === (23))){
var inst_37038 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37066_37099 = state_37044__$1;
(statearr_37066_37099[(2)] = inst_37038);

(statearr_37066_37099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (19))){
var inst_37025 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37067_37100 = state_37044__$1;
(statearr_37067_37100[(2)] = inst_37025);

(statearr_37067_37100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (11))){
var inst_37010 = (state_37044[(7)]);
var inst_36996 = (state_37044[(11)]);
var inst_37010__$1 = cljs.core.seq.call(null,inst_36996);
var state_37044__$1 = (function (){var statearr_37068 = state_37044;
(statearr_37068[(7)] = inst_37010__$1);

return statearr_37068;
})();
if(inst_37010__$1){
var statearr_37069_37101 = state_37044__$1;
(statearr_37069_37101[(1)] = (14));

} else {
var statearr_37070_37102 = state_37044__$1;
(statearr_37070_37102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (9))){
var inst_37032 = (state_37044[(2)]);
var inst_37033 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37044__$1 = (function (){var statearr_37071 = state_37044;
(statearr_37071[(15)] = inst_37032);

return statearr_37071;
})();
if(cljs.core.truth_(inst_37033)){
var statearr_37072_37103 = state_37044__$1;
(statearr_37072_37103[(1)] = (21));

} else {
var statearr_37073_37104 = state_37044__$1;
(statearr_37073_37104[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (5))){
var inst_36988 = cljs.core.async.close_BANG_.call(null,out);
var state_37044__$1 = state_37044;
var statearr_37074_37105 = state_37044__$1;
(statearr_37074_37105[(2)] = inst_36988);

(statearr_37074_37105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (14))){
var inst_37010 = (state_37044[(7)]);
var inst_37012 = cljs.core.chunked_seq_QMARK_.call(null,inst_37010);
var state_37044__$1 = state_37044;
if(inst_37012){
var statearr_37075_37106 = state_37044__$1;
(statearr_37075_37106[(1)] = (17));

} else {
var statearr_37076_37107 = state_37044__$1;
(statearr_37076_37107[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (16))){
var inst_37028 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37077_37108 = state_37044__$1;
(statearr_37077_37108[(2)] = inst_37028);

(statearr_37077_37108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (10))){
var inst_36997 = (state_37044[(8)]);
var inst_36999 = (state_37044[(12)]);
var inst_37004 = cljs.core._nth.call(null,inst_36997,inst_36999);
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37044__$1,(13),out,inst_37004);
} else {
if((state_val_37045 === (18))){
var inst_37010 = (state_37044[(7)]);
var inst_37019 = cljs.core.first.call(null,inst_37010);
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37044__$1,(20),out,inst_37019);
} else {
if((state_val_37045 === (8))){
var inst_36998 = (state_37044[(10)]);
var inst_36999 = (state_37044[(12)]);
var inst_37001 = (inst_36999 < inst_36998);
var inst_37002 = inst_37001;
var state_37044__$1 = state_37044;
if(cljs.core.truth_(inst_37002)){
var statearr_37078_37109 = state_37044__$1;
(statearr_37078_37109[(1)] = (10));

} else {
var statearr_37079_37110 = state_37044__$1;
(statearr_37079_37110[(1)] = (11));

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
});})(c__28484__auto__))
;
return ((function (switch__28419__auto__,c__28484__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____0 = (function (){
var statearr_37083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37083[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__);

(statearr_37083[(1)] = (1));

return statearr_37083;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____1 = (function (state_37044){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_37044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e37084){if((e37084 instanceof Object)){
var ex__28423__auto__ = e37084;
var statearr_37085_37111 = state_37044;
(statearr_37085_37111[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37112 = state_37044;
state_37044 = G__37112;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__ = function(state_37044){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____1.call(this,state_37044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28420__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto__))
})();
var state__28486__auto__ = (function (){var statearr_37086 = f__28485__auto__.call(null);
(statearr_37086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto__);

return statearr_37086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto__))
);

return c__28484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args37113 = [];
var len__26292__auto___37116 = arguments.length;
var i__26293__auto___37117 = (0);
while(true){
if((i__26293__auto___37117 < len__26292__auto___37116)){
args37113.push((arguments[i__26293__auto___37117]));

var G__37118 = (i__26293__auto___37117 + (1));
i__26293__auto___37117 = G__37118;
continue;
} else {
}
break;
}

var G__37115 = args37113.length;
switch (G__37115) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37113.length)].join('')));

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
var args37120 = [];
var len__26292__auto___37123 = arguments.length;
var i__26293__auto___37124 = (0);
while(true){
if((i__26293__auto___37124 < len__26292__auto___37123)){
args37120.push((arguments[i__26293__auto___37124]));

var G__37125 = (i__26293__auto___37124 + (1));
i__26293__auto___37124 = G__37125;
continue;
} else {
}
break;
}

var G__37122 = args37120.length;
switch (G__37122) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37120.length)].join('')));

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
var args37127 = [];
var len__26292__auto___37178 = arguments.length;
var i__26293__auto___37179 = (0);
while(true){
if((i__26293__auto___37179 < len__26292__auto___37178)){
args37127.push((arguments[i__26293__auto___37179]));

var G__37180 = (i__26293__auto___37179 + (1));
i__26293__auto___37179 = G__37180;
continue;
} else {
}
break;
}

var G__37129 = args37127.length;
switch (G__37129) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37127.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___37182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___37182,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___37182,out){
return (function (state_37153){
var state_val_37154 = (state_37153[(1)]);
if((state_val_37154 === (7))){
var inst_37148 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37155_37183 = state_37153__$1;
(statearr_37155_37183[(2)] = inst_37148);

(statearr_37155_37183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (1))){
var inst_37130 = null;
var state_37153__$1 = (function (){var statearr_37156 = state_37153;
(statearr_37156[(7)] = inst_37130);

return statearr_37156;
})();
var statearr_37157_37184 = state_37153__$1;
(statearr_37157_37184[(2)] = null);

(statearr_37157_37184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (4))){
var inst_37133 = (state_37153[(8)]);
var inst_37133__$1 = (state_37153[(2)]);
var inst_37134 = (inst_37133__$1 == null);
var inst_37135 = cljs.core.not.call(null,inst_37134);
var state_37153__$1 = (function (){var statearr_37158 = state_37153;
(statearr_37158[(8)] = inst_37133__$1);

return statearr_37158;
})();
if(inst_37135){
var statearr_37159_37185 = state_37153__$1;
(statearr_37159_37185[(1)] = (5));

} else {
var statearr_37160_37186 = state_37153__$1;
(statearr_37160_37186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (6))){
var state_37153__$1 = state_37153;
var statearr_37161_37187 = state_37153__$1;
(statearr_37161_37187[(2)] = null);

(statearr_37161_37187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (3))){
var inst_37150 = (state_37153[(2)]);
var inst_37151 = cljs.core.async.close_BANG_.call(null,out);
var state_37153__$1 = (function (){var statearr_37162 = state_37153;
(statearr_37162[(9)] = inst_37150);

return statearr_37162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37153__$1,inst_37151);
} else {
if((state_val_37154 === (2))){
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37153__$1,(4),ch);
} else {
if((state_val_37154 === (11))){
var inst_37133 = (state_37153[(8)]);
var inst_37142 = (state_37153[(2)]);
var inst_37130 = inst_37133;
var state_37153__$1 = (function (){var statearr_37163 = state_37153;
(statearr_37163[(10)] = inst_37142);

(statearr_37163[(7)] = inst_37130);

return statearr_37163;
})();
var statearr_37164_37188 = state_37153__$1;
(statearr_37164_37188[(2)] = null);

(statearr_37164_37188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (9))){
var inst_37133 = (state_37153[(8)]);
var state_37153__$1 = state_37153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37153__$1,(11),out,inst_37133);
} else {
if((state_val_37154 === (5))){
var inst_37130 = (state_37153[(7)]);
var inst_37133 = (state_37153[(8)]);
var inst_37137 = cljs.core._EQ_.call(null,inst_37133,inst_37130);
var state_37153__$1 = state_37153;
if(inst_37137){
var statearr_37166_37189 = state_37153__$1;
(statearr_37166_37189[(1)] = (8));

} else {
var statearr_37167_37190 = state_37153__$1;
(statearr_37167_37190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (10))){
var inst_37145 = (state_37153[(2)]);
var state_37153__$1 = state_37153;
var statearr_37168_37191 = state_37153__$1;
(statearr_37168_37191[(2)] = inst_37145);

(statearr_37168_37191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37154 === (8))){
var inst_37130 = (state_37153[(7)]);
var tmp37165 = inst_37130;
var inst_37130__$1 = tmp37165;
var state_37153__$1 = (function (){var statearr_37169 = state_37153;
(statearr_37169[(7)] = inst_37130__$1);

return statearr_37169;
})();
var statearr_37170_37192 = state_37153__$1;
(statearr_37170_37192[(2)] = null);

(statearr_37170_37192[(1)] = (2));


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
});})(c__28484__auto___37182,out))
;
return ((function (switch__28419__auto__,c__28484__auto___37182,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_37174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37174[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_37174[(1)] = (1));

return statearr_37174;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_37153){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_37153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e37175){if((e37175 instanceof Object)){
var ex__28423__auto__ = e37175;
var statearr_37176_37193 = state_37153;
(statearr_37176_37193[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37194 = state_37153;
state_37153 = G__37194;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_37153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_37153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___37182,out))
})();
var state__28486__auto__ = (function (){var statearr_37177 = f__28485__auto__.call(null);
(statearr_37177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___37182);

return statearr_37177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___37182,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args37195 = [];
var len__26292__auto___37265 = arguments.length;
var i__26293__auto___37266 = (0);
while(true){
if((i__26293__auto___37266 < len__26292__auto___37265)){
args37195.push((arguments[i__26293__auto___37266]));

var G__37267 = (i__26293__auto___37266 + (1));
i__26293__auto___37266 = G__37267;
continue;
} else {
}
break;
}

var G__37197 = args37195.length;
switch (G__37197) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37195.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___37269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___37269,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___37269,out){
return (function (state_37235){
var state_val_37236 = (state_37235[(1)]);
if((state_val_37236 === (7))){
var inst_37231 = (state_37235[(2)]);
var state_37235__$1 = state_37235;
var statearr_37237_37270 = state_37235__$1;
(statearr_37237_37270[(2)] = inst_37231);

(statearr_37237_37270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (1))){
var inst_37198 = (new Array(n));
var inst_37199 = inst_37198;
var inst_37200 = (0);
var state_37235__$1 = (function (){var statearr_37238 = state_37235;
(statearr_37238[(7)] = inst_37199);

(statearr_37238[(8)] = inst_37200);

return statearr_37238;
})();
var statearr_37239_37271 = state_37235__$1;
(statearr_37239_37271[(2)] = null);

(statearr_37239_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (4))){
var inst_37203 = (state_37235[(9)]);
var inst_37203__$1 = (state_37235[(2)]);
var inst_37204 = (inst_37203__$1 == null);
var inst_37205 = cljs.core.not.call(null,inst_37204);
var state_37235__$1 = (function (){var statearr_37240 = state_37235;
(statearr_37240[(9)] = inst_37203__$1);

return statearr_37240;
})();
if(inst_37205){
var statearr_37241_37272 = state_37235__$1;
(statearr_37241_37272[(1)] = (5));

} else {
var statearr_37242_37273 = state_37235__$1;
(statearr_37242_37273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (15))){
var inst_37225 = (state_37235[(2)]);
var state_37235__$1 = state_37235;
var statearr_37243_37274 = state_37235__$1;
(statearr_37243_37274[(2)] = inst_37225);

(statearr_37243_37274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (13))){
var state_37235__$1 = state_37235;
var statearr_37244_37275 = state_37235__$1;
(statearr_37244_37275[(2)] = null);

(statearr_37244_37275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (6))){
var inst_37200 = (state_37235[(8)]);
var inst_37221 = (inst_37200 > (0));
var state_37235__$1 = state_37235;
if(cljs.core.truth_(inst_37221)){
var statearr_37245_37276 = state_37235__$1;
(statearr_37245_37276[(1)] = (12));

} else {
var statearr_37246_37277 = state_37235__$1;
(statearr_37246_37277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (3))){
var inst_37233 = (state_37235[(2)]);
var state_37235__$1 = state_37235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37235__$1,inst_37233);
} else {
if((state_val_37236 === (12))){
var inst_37199 = (state_37235[(7)]);
var inst_37223 = cljs.core.vec.call(null,inst_37199);
var state_37235__$1 = state_37235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37235__$1,(15),out,inst_37223);
} else {
if((state_val_37236 === (2))){
var state_37235__$1 = state_37235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37235__$1,(4),ch);
} else {
if((state_val_37236 === (11))){
var inst_37215 = (state_37235[(2)]);
var inst_37216 = (new Array(n));
var inst_37199 = inst_37216;
var inst_37200 = (0);
var state_37235__$1 = (function (){var statearr_37247 = state_37235;
(statearr_37247[(10)] = inst_37215);

(statearr_37247[(7)] = inst_37199);

(statearr_37247[(8)] = inst_37200);

return statearr_37247;
})();
var statearr_37248_37278 = state_37235__$1;
(statearr_37248_37278[(2)] = null);

(statearr_37248_37278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (9))){
var inst_37199 = (state_37235[(7)]);
var inst_37213 = cljs.core.vec.call(null,inst_37199);
var state_37235__$1 = state_37235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37235__$1,(11),out,inst_37213);
} else {
if((state_val_37236 === (5))){
var inst_37208 = (state_37235[(11)]);
var inst_37203 = (state_37235[(9)]);
var inst_37199 = (state_37235[(7)]);
var inst_37200 = (state_37235[(8)]);
var inst_37207 = (inst_37199[inst_37200] = inst_37203);
var inst_37208__$1 = (inst_37200 + (1));
var inst_37209 = (inst_37208__$1 < n);
var state_37235__$1 = (function (){var statearr_37249 = state_37235;
(statearr_37249[(12)] = inst_37207);

(statearr_37249[(11)] = inst_37208__$1);

return statearr_37249;
})();
if(cljs.core.truth_(inst_37209)){
var statearr_37250_37279 = state_37235__$1;
(statearr_37250_37279[(1)] = (8));

} else {
var statearr_37251_37280 = state_37235__$1;
(statearr_37251_37280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (14))){
var inst_37228 = (state_37235[(2)]);
var inst_37229 = cljs.core.async.close_BANG_.call(null,out);
var state_37235__$1 = (function (){var statearr_37253 = state_37235;
(statearr_37253[(13)] = inst_37228);

return statearr_37253;
})();
var statearr_37254_37281 = state_37235__$1;
(statearr_37254_37281[(2)] = inst_37229);

(statearr_37254_37281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (10))){
var inst_37219 = (state_37235[(2)]);
var state_37235__$1 = state_37235;
var statearr_37255_37282 = state_37235__$1;
(statearr_37255_37282[(2)] = inst_37219);

(statearr_37255_37282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37236 === (8))){
var inst_37208 = (state_37235[(11)]);
var inst_37199 = (state_37235[(7)]);
var tmp37252 = inst_37199;
var inst_37199__$1 = tmp37252;
var inst_37200 = inst_37208;
var state_37235__$1 = (function (){var statearr_37256 = state_37235;
(statearr_37256[(7)] = inst_37199__$1);

(statearr_37256[(8)] = inst_37200);

return statearr_37256;
})();
var statearr_37257_37283 = state_37235__$1;
(statearr_37257_37283[(2)] = null);

(statearr_37257_37283[(1)] = (2));


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
});})(c__28484__auto___37269,out))
;
return ((function (switch__28419__auto__,c__28484__auto___37269,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_37261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37261[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_37261[(1)] = (1));

return statearr_37261;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_37235){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_37235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e37262){if((e37262 instanceof Object)){
var ex__28423__auto__ = e37262;
var statearr_37263_37284 = state_37235;
(statearr_37263_37284[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37285 = state_37235;
state_37235 = G__37285;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_37235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_37235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___37269,out))
})();
var state__28486__auto__ = (function (){var statearr_37264 = f__28485__auto__.call(null);
(statearr_37264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___37269);

return statearr_37264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___37269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args37286 = [];
var len__26292__auto___37360 = arguments.length;
var i__26293__auto___37361 = (0);
while(true){
if((i__26293__auto___37361 < len__26292__auto___37360)){
args37286.push((arguments[i__26293__auto___37361]));

var G__37362 = (i__26293__auto___37361 + (1));
i__26293__auto___37361 = G__37362;
continue;
} else {
}
break;
}

var G__37288 = args37286.length;
switch (G__37288) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37286.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28484__auto___37364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28484__auto___37364,out){
return (function (){
var f__28485__auto__ = (function (){var switch__28419__auto__ = ((function (c__28484__auto___37364,out){
return (function (state_37330){
var state_val_37331 = (state_37330[(1)]);
if((state_val_37331 === (7))){
var inst_37326 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37332_37365 = state_37330__$1;
(statearr_37332_37365[(2)] = inst_37326);

(statearr_37332_37365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (1))){
var inst_37289 = [];
var inst_37290 = inst_37289;
var inst_37291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37330__$1 = (function (){var statearr_37333 = state_37330;
(statearr_37333[(7)] = inst_37290);

(statearr_37333[(8)] = inst_37291);

return statearr_37333;
})();
var statearr_37334_37366 = state_37330__$1;
(statearr_37334_37366[(2)] = null);

(statearr_37334_37366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (4))){
var inst_37294 = (state_37330[(9)]);
var inst_37294__$1 = (state_37330[(2)]);
var inst_37295 = (inst_37294__$1 == null);
var inst_37296 = cljs.core.not.call(null,inst_37295);
var state_37330__$1 = (function (){var statearr_37335 = state_37330;
(statearr_37335[(9)] = inst_37294__$1);

return statearr_37335;
})();
if(inst_37296){
var statearr_37336_37367 = state_37330__$1;
(statearr_37336_37367[(1)] = (5));

} else {
var statearr_37337_37368 = state_37330__$1;
(statearr_37337_37368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (15))){
var inst_37320 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37338_37369 = state_37330__$1;
(statearr_37338_37369[(2)] = inst_37320);

(statearr_37338_37369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (13))){
var state_37330__$1 = state_37330;
var statearr_37339_37370 = state_37330__$1;
(statearr_37339_37370[(2)] = null);

(statearr_37339_37370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (6))){
var inst_37290 = (state_37330[(7)]);
var inst_37315 = inst_37290.length;
var inst_37316 = (inst_37315 > (0));
var state_37330__$1 = state_37330;
if(cljs.core.truth_(inst_37316)){
var statearr_37340_37371 = state_37330__$1;
(statearr_37340_37371[(1)] = (12));

} else {
var statearr_37341_37372 = state_37330__$1;
(statearr_37341_37372[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (3))){
var inst_37328 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37330__$1,inst_37328);
} else {
if((state_val_37331 === (12))){
var inst_37290 = (state_37330[(7)]);
var inst_37318 = cljs.core.vec.call(null,inst_37290);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37330__$1,(15),out,inst_37318);
} else {
if((state_val_37331 === (2))){
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37330__$1,(4),ch);
} else {
if((state_val_37331 === (11))){
var inst_37294 = (state_37330[(9)]);
var inst_37298 = (state_37330[(10)]);
var inst_37308 = (state_37330[(2)]);
var inst_37309 = [];
var inst_37310 = inst_37309.push(inst_37294);
var inst_37290 = inst_37309;
var inst_37291 = inst_37298;
var state_37330__$1 = (function (){var statearr_37342 = state_37330;
(statearr_37342[(7)] = inst_37290);

(statearr_37342[(11)] = inst_37310);

(statearr_37342[(8)] = inst_37291);

(statearr_37342[(12)] = inst_37308);

return statearr_37342;
})();
var statearr_37343_37373 = state_37330__$1;
(statearr_37343_37373[(2)] = null);

(statearr_37343_37373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (9))){
var inst_37290 = (state_37330[(7)]);
var inst_37306 = cljs.core.vec.call(null,inst_37290);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37330__$1,(11),out,inst_37306);
} else {
if((state_val_37331 === (5))){
var inst_37294 = (state_37330[(9)]);
var inst_37298 = (state_37330[(10)]);
var inst_37291 = (state_37330[(8)]);
var inst_37298__$1 = f.call(null,inst_37294);
var inst_37299 = cljs.core._EQ_.call(null,inst_37298__$1,inst_37291);
var inst_37300 = cljs.core.keyword_identical_QMARK_.call(null,inst_37291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37301 = (inst_37299) || (inst_37300);
var state_37330__$1 = (function (){var statearr_37344 = state_37330;
(statearr_37344[(10)] = inst_37298__$1);

return statearr_37344;
})();
if(cljs.core.truth_(inst_37301)){
var statearr_37345_37374 = state_37330__$1;
(statearr_37345_37374[(1)] = (8));

} else {
var statearr_37346_37375 = state_37330__$1;
(statearr_37346_37375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (14))){
var inst_37323 = (state_37330[(2)]);
var inst_37324 = cljs.core.async.close_BANG_.call(null,out);
var state_37330__$1 = (function (){var statearr_37348 = state_37330;
(statearr_37348[(13)] = inst_37323);

return statearr_37348;
})();
var statearr_37349_37376 = state_37330__$1;
(statearr_37349_37376[(2)] = inst_37324);

(statearr_37349_37376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (10))){
var inst_37313 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37350_37377 = state_37330__$1;
(statearr_37350_37377[(2)] = inst_37313);

(statearr_37350_37377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (8))){
var inst_37290 = (state_37330[(7)]);
var inst_37294 = (state_37330[(9)]);
var inst_37298 = (state_37330[(10)]);
var inst_37303 = inst_37290.push(inst_37294);
var tmp37347 = inst_37290;
var inst_37290__$1 = tmp37347;
var inst_37291 = inst_37298;
var state_37330__$1 = (function (){var statearr_37351 = state_37330;
(statearr_37351[(7)] = inst_37290__$1);

(statearr_37351[(14)] = inst_37303);

(statearr_37351[(8)] = inst_37291);

return statearr_37351;
})();
var statearr_37352_37378 = state_37330__$1;
(statearr_37352_37378[(2)] = null);

(statearr_37352_37378[(1)] = (2));


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
});})(c__28484__auto___37364,out))
;
return ((function (switch__28419__auto__,c__28484__auto___37364,out){
return (function() {
var cljs$core$async$state_machine__28420__auto__ = null;
var cljs$core$async$state_machine__28420__auto____0 = (function (){
var statearr_37356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37356[(0)] = cljs$core$async$state_machine__28420__auto__);

(statearr_37356[(1)] = (1));

return statearr_37356;
});
var cljs$core$async$state_machine__28420__auto____1 = (function (state_37330){
while(true){
var ret_value__28421__auto__ = (function (){try{while(true){
var result__28422__auto__ = switch__28419__auto__.call(null,state_37330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28422__auto__;
}
break;
}
}catch (e37357){if((e37357 instanceof Object)){
var ex__28423__auto__ = e37357;
var statearr_37358_37379 = state_37330;
(statearr_37358_37379[(5)] = ex__28423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37380 = state_37330;
state_37330 = G__37380;
continue;
} else {
return ret_value__28421__auto__;
}
break;
}
});
cljs$core$async$state_machine__28420__auto__ = function(state_37330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28420__auto____1.call(this,state_37330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28420__auto____0;
cljs$core$async$state_machine__28420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28420__auto____1;
return cljs$core$async$state_machine__28420__auto__;
})()
;})(switch__28419__auto__,c__28484__auto___37364,out))
})();
var state__28486__auto__ = (function (){var statearr_37359 = f__28485__auto__.call(null);
(statearr_37359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28484__auto___37364);

return statearr_37359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28486__auto__);
});})(c__28484__auto___37364,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map