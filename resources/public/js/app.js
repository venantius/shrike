if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
if("undefined"===typeof b)var b=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof c)var c=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};if("undefined"===typeof g)var g=null;if("undefined"!==typeof Symbol){var h=Symbol;"object"!=typeof h||!h||h instanceof Array||h instanceof Object||Object.prototype.toString.call(h)}
var k="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,d){return Math.imul(a,d)}:function(a,d){var e=a&65535,f=d&65535;return e*f+((a>>>16&65535)*f+e*(d>>>16&65535)<<16>>>0)|0};function l(a){a=k(a|0,-862048943);a=0^(k(a<<15|a>>>-15,461845907)|0);a=(k(a<<13|a>>>-13,5)+-430675100|0)^0;a=k(a^a>>>16,-2048144789);k(a^a>>>13,-1028477387)}l(1);l(0);console.log("Hey Seymore sup?!");
})();

//# sourceMappingURL=out.js.map