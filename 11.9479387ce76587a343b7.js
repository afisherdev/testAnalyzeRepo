webpackJsonp([11],{16:function(e,r,s){var a=s(2);e.exports=function(){document.title="errors",$(".page").html(s(42)({stats:a.stats,errors:a.stats.errors.map(function(e){e=e.split("\n");var r=e.shift(),s=e.pop();return/^ @/.test(s)||(e.push(s),s=""),{header:r,text:e.join("\n"),footer:s}})}))}},42:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;0===errors.length&&buf.push("<h2>No errors.</h2>"),function(){if("number"==typeof errors.length)for(var e=0,r=errors.length;e<r;e++){var s=errors[e];buf.push('<div class="alert alert-danger"><h4>');var a=s.header;buf.push(escape(null==a?"":a)),buf.push("</h4><pre>");var a=s.text;buf.push(escape(null==a?"":a)),buf.push("</pre><h5>");var a=s.footer;buf.push(escape(null==a?"":a)),buf.push("</h5></div>")}else{var r=0;for(var e in errors){r++;var s=errors[e];buf.push('<div class="alert alert-danger"><h4>');var a=s.header;buf.push(escape(null==a?"":a)),buf.push("</h4><pre>");var a=s.text;buf.push(escape(null==a?"":a)),buf.push("</pre><h5>");var a=s.footer;buf.push(escape(null==a?"":a)),buf.push("</h5></div>")}}}.call(this)}return buf.join("")}}});