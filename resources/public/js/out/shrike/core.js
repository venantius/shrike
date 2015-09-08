// Compiled by ClojureScript 1.7.48 {}
goog.provide('shrike.core');
goog.require('cljs.core');
goog.require('shrike.components.navbar');
goog.require('om.core');
goog.require('om_tools.dom');
console.log("Successfully loaded shrike Frontend");
if(typeof shrike.core.app_state !== 'undefined'){
} else {
shrike.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
shrike.core.app_body = (function shrike$core$app_body(data,owner){
if(typeof shrike.core.t45454 !== 'undefined'){
} else {

/**
* @constructor
*/
shrike.core.t45454 = (function (app_body,data,owner,meta45455){
this.app_body = app_body;
this.data = data;
this.owner = owner;
this.meta45455 = meta45455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shrike.core.t45454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45456,meta45455__$1){
var self__ = this;
var _45456__$1 = this;
return (new shrike.core.t45454(self__.app_body,self__.data,self__.owner,meta45455__$1));
});

shrike.core.t45454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45456){
var self__ = this;
var _45456__$1 = this;
return self__.meta45455;
});

shrike.core.t45454.prototype.om$core$IRender$ = true;

shrike.core.t45454.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.body,{"className": "with-top-navbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[shrike.components.navbar.navbar.call(null,self__.data,self__.owner)],null))));
});

shrike.core.t45454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-body","app-body",-655049929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45455","meta45455",486793821,null)], null);
});

shrike.core.t45454.cljs$lang$type = true;

shrike.core.t45454.cljs$lang$ctorStr = "shrike.core/t45454";

shrike.core.t45454.cljs$lang$ctorPrWriter = (function (this__25835__auto__,writer__25836__auto__,opt__25837__auto__){
return cljs.core._write.call(null,writer__25836__auto__,"shrike.core/t45454");
});

shrike.core.__GT_t45454 = (function shrike$core$app_body_$___GT_t45454(app_body__$1,data__$1,owner__$1,meta45455){
return (new shrike.core.t45454(app_body__$1,data__$1,owner__$1,meta45455));
});

}

return (new shrike.core.t45454(shrike$core$app_body,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,shrike.core.app_body,shrike.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));

//# sourceMappingURL=core.js.map