let Z=0,U=null,W=`undefined`,a0=`string`,a9=1093,V=1,a2=`Object`,X=`utf-8`,a5=4,$=`function`,a4=16,S=Array,a1=Array.isArray,Y=Error,a3=FinalizationRegistry,a7=Object,a8=Promise,a6=Reflect,_=Uint8Array,T=undefined;var M=(async(a,b)=>{if(typeof Response===$&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===$){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==U){return `${a}`};if(b==a0){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==U){return `Symbol`}else{return `Symbol(${b})`}};if(b==$){const b=a.name;if(typeof b==a0&&b.length>Z){return `Function(${b})`}else{return `Function`}};if(a1(a)){const b=a.length;let c=`[`;if(b>Z){c+=s(a[Z])};for(let d=V;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>V){d=c[V]}else{return toString.call(a)};if(d==a2){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a2}};if(a instanceof Y){return `${a.name}: ${a.message}\n${a.stack}`};return d});var O=((a,b)=>{});var v=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__ha625014050bc0cec(b,c)});var R=(async(b)=>{if(a!==T)return a;if(typeof b===W){b=new URL(`csr-2d0eea2d3181ba35_bg.wasm`,import.meta.url)};const c=N();if(typeof b===a0||typeof Request===$&&b instanceof Request||typeof URL===$&&b instanceof URL){b=fetch(b)};O(c);const {instance:d,module:e}=await M(await b,c);return P(d,e)});var g=(a=>{const b=c(a);f(a);return b});var e=(a=>{if(d===b.length)b.push(b.length+ V);const c=d;d=b[c];b[c]=a;return c});var Q=(b=>{if(a!==T)return a;const c=N();O(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return P(d,b)});var B=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h3dba7b7cdf3d40d3(b,c)});function E(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}var y=((b,c)=>{a._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7768b78d45991904(b,c)});var D=((a,b)=>{if(a===Z){return c(b)}else{return k(a,b)}});var C=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h652ce94e1243e5a3(b,c,e(d))});var A=((b,c,d,f)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h1430f2a251eb92a7(b,c,e(d),e(f))});var r=(()=>{if(q===U||q.byteLength===Z){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===T||a===U);var c=(a=>b[a]);var P=((b,c)=>{a=b.exports;R.__wbindgen_wasm_module=c;q=U;i=U;a.__wbindgen_start();return a});var N=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==V){b.a=Z;return !0};const c=!1;return c});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return e(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Y();return e(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a5+ V]=g;r()[b/a5+ Z]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=D(b,c);if(b!==Z){a.__wbindgen_free(b,c,V)};console.error(d)});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===U;return b});b.wbg.__wbindgen_in=((a,b)=>{const d=c(a) in c(b);return d});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===$;return b});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===a0?e:T;var g=p(f)?Z:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a5+ V]=h;r()[b/a5+ Z]=g});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===T;return b});b.wbg.__wbindgen_is_array=(a=>{const b=a1(c(a));return b});b.wbg.__wbg_crypto_d05b68a3572bb8ca=(a=>{const b=c(a).crypto;return e(b)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==U;return d});b.wbg.__wbg_process_b02b3570280d0366=(a=>{const b=c(a).process;return e(b)});b.wbg.__wbg_versions_c1cb42213cedf0f5=(a=>{const b=c(a).versions;return e(b)});b.wbg.__wbg_node_43b1089f407e4ec2=(a=>{const b=c(a).node;return e(b)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===a0;return b});b.wbg.__wbg_require_9a7e0f667ead4995=function(){return E((()=>{const a=module.require;return e(a)}),arguments)};b.wbg.__wbg_msCrypto_10fc94afee92bd76=(a=>{const b=c(a).msCrypto;return e(b)});b.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return E(((a,b)=>{c(a).randomFillSync(g(b))}),arguments)};b.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return E(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return p(b)?Z:e(b)});b.wbg.__wbg_getComputedStyle_5143a3b6268394db=function(){return E(((a,b)=>{const d=c(a).getComputedStyle(c(b));return p(d)?Z:e(d)}),arguments)};b.wbg.__wbg_get_644791d4d61a5f69=((a,b,d)=>{var f=D(b,d);const g=c(a)[f];return p(g)?Z:e(g)});b.wbg.__wbg_cancelAnimationFrame_cb9c6f65eaa83d76=function(){return E(((a,b)=>{c(a).cancelAnimationFrame(b)}),arguments)};b.wbg.__wbg_requestAnimationFrame_74309aadebde12fa=function(){return E(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_d246e34afa42bd5b=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_clearTimeout_0f534a4b1fb4773d=((a,b)=>{c(a).clearTimeout(b)});b.wbg.__wbg_setInterval_edbd739de0ac5430=function(){return E(((a,b,d)=>{const e=c(a).setInterval(c(b),d);return e}),arguments)};b.wbg.__wbg_setTimeout_06458eba2b40711c=function(){return E(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_documentElement_1cdfe4c8cdb2f569=(a=>{const b=c(a).documentElement;return p(b)?Z:e(b)});b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return p(b)?Z:e(b)});b.wbg.__wbg_activeElement_4faa878955c33f98=(a=>{const b=c(a).activeElement;return p(b)?Z:e(b)});b.wbg.__wbg_createComment_529b047c02bbe600=((a,b,d)=>{var f=D(b,d);const g=c(a).createComment(f);return e(g)});b.wbg.__wbg_createDocumentFragment_1c6d6aeeb8a8eb2e=(a=>{const b=c(a).createDocumentFragment();return e(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return E(((a,b,d)=>{var f=D(b,d);const g=c(a).createElement(f);return e(g)}),arguments)};b.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return E(((a,b,d,f,g)=>{var h=D(b,d);var i=D(f,g);const j=c(a).createElementNS(h,i);return e(j)}),arguments)};b.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,d)=>{var f=D(b,d);const g=c(a).createTextNode(f);return e(g)});b.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_7cc7ef157e398356=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?Z:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a5+ V]=g;r()[b/a5+ Z]=f});b.wbg.__wbg_classList_82893a9100db6428=(a=>{const b=c(a).classList;return e(b)});b.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,d)=>{var e=D(b,d);c(a).innerHTML=e});b.wbg.__wbg_closest_8ebda487e74cc848=function(){return E(((a,b,d)=>{var f=D(b,d);const g=c(a).closest(f);return p(g)?Z:e(g)}),arguments)};b.wbg.__wbg_getAttribute_bff489553dd803cc=((b,d,e,f)=>{var g=D(e,f);const h=c(d).getAttribute(g);var i=p(h)?Z:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/a5+ V]=j;r()[b/a5+ Z]=i});b.wbg.__wbg_getAttributeNames_412b010868806e9f=(a=>{const b=c(a).getAttributeNames();return e(b)});b.wbg.__wbg_getBoundingClientRect_4167ccfa40cf88fc=(a=>{const b=c(a).getBoundingClientRect();return e(b)});b.wbg.__wbg_querySelectorAll_3e2bd695ce88c618=function(){return E(((a,b,d)=>{var f=D(b,d);const g=c(a).querySelectorAll(f);return e(g)}),arguments)};b.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return E(((a,b,d)=>{var e=D(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return E(((a,b,d,e,f)=>{var g=D(b,d);var h=D(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_74a825a7b3d13d06=function(){return E(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_0d26d36fd4f25c4e=(a=>{c(a).remove()});b.wbg.__wbg_width_ed767d067be03f5d=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_89ae7cde2b7913cd=(a=>{const b=c(a).height;return b});b.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=c(a).target;return p(b)?Z:e(b)});b.wbg.__wbg_currentTarget_3d91c66261b52a1d=(a=>{const b=c(a).currentTarget;return p(b)?Z:e(b)});b.wbg.__wbg_defaultPrevented_ae7d433108dd159d=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_newwitheventinitdict_a2c07e61d02a7c87=function(){return E(((a,b,d)=>{var f=D(a,b);const g=new Event(f,c(d));return e(g)}),arguments)};b.wbg.__wbg_preventDefault_7f821f72e7c6b5d4=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_b7a931152e09c2ab=(a=>{c(a).stopPropagation()});b.wbg.__wbg_setdata_86ad1e8da020aa68=((a,b,d)=>{var e=D(b,d);c(a).data=e});b.wbg.__wbg_add_e0f3c5b6e421c311=function(){return E(((a,b,d)=>{var e=D(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_c6ba26a0a6906129=function(){return E(((a,b,d)=>{var e=D(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return E(((a,b,d,e)=>{var f=D(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return E(((a,b,d,e,f)=>{var g=D(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_dispatchEvent_40c3472e9e4dcf5e=function(){return E(((a,b)=>{const d=c(a).dispatchEvent(c(b));return d}),arguments)};b.wbg.__wbg_removeEventListener_66ee1536a0b32c11=function(){return E(((a,b,d,e)=>{var f=D(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(c(a))});b.wbg.__wbg_log_a4530b4fe289336f=(a=>{console.log(c(a))});b.wbg.__wbg_warn_f260f49434e45e62=(a=>{console.warn(c(a))});b.wbg.__wbg_instanceof_HtmlAnchorElement_76fafcefedd51299=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_HtmlButtonElement_edc54e80ec7dfee1=(a=>{let b;try{b=c(a) instanceof HTMLButtonElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_disabled_deb375bf11d07b05=(a=>{const b=c(a).disabled;return b});b.wbg.__wbg_form_8638bd7468400e8e=(a=>{const b=c(a).form;return p(b)?Z:e(b)});b.wbg.__wbg_view_1fe68975176283b3=(a=>{const b=c(a).view;return p(b)?Z:e(b)});b.wbg.__wbg_respond_6272b341f88864a2=function(){return E(((a,b)=>{c(a).respond(b>>>Z)}),arguments)};b.wbg.__wbg_inlineSize_1b33971efe2410df=(a=>{const b=c(a).inlineSize;return b});b.wbg.__wbg_blockSize_e463e65a7f53bee8=(a=>{const b=c(a).blockSize;return b});b.wbg.__wbg_newwitheventinitdict_4444ad4e8ce3d9dd=function(){return E(((a,b,d)=>{var f=D(a,b);const g=new CustomEvent(f,c(d));return e(g)}),arguments)};b.wbg.__wbg_width_1ccae8ab185a4192=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_415b4e67932f43c9=(a=>{const b=c(a).height;return b});b.wbg.__wbg_getPropertyValue_408b6ca56fae682f=function(){return E(((b,d,e,f)=>{var g=D(e,f);const h=c(d).getPropertyValue(g);const i=o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);const j=l;r()[b/a5+ V]=j;r()[b/a5+ Z]=i}),arguments)};b.wbg.__wbg_removeProperty_15ae1463504df541=function(){return E(((b,d,e,f)=>{var g=D(e,f);const h=c(d).removeProperty(g);const i=o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);const j=l;r()[b/a5+ V]=j;r()[b/a5+ Z]=i}),arguments)};b.wbg.__wbg_setProperty_ecf331459a4d3891=function(){return E(((a,b,d,e,f)=>{var g=D(b,d);var h=D(e,f);c(a).setProperty(g,h)}),arguments)};b.wbg.__wbg_contentRect_a85fd1edd9df667c=(a=>{const b=c(a).contentRect;return e(b)});b.wbg.__wbg_borderBoxSize_19765f29d3c82234=(a=>{const b=c(a).borderBoxSize;return e(b)});b.wbg.__wbg_contentBoxSize_9f809fbb15bf99c1=(a=>{const b=c(a).contentBoxSize;return e(b)});b.wbg.__wbg_devicePixelContentBoxSize_2180a9af06aefa47=(a=>{const b=c(a).devicePixelContentBoxSize;return e(b)});b.wbg.__wbg_style_97c680a5cbdf49cd=(a=>{const b=c(a).style;return e(b)});b.wbg.__wbg_click_0bd1396258764b36=(a=>{c(a).click()});b.wbg.__wbg_focus_6d3d2b6776d06f7f=function(){return E((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_new_5ed51bb96391a5f0=function(){return E((a=>{const b=new ResizeObserver(c(a));return e(b)}),arguments)};b.wbg.__wbg_disconnect_c3d9bc2e0432cc88=(a=>{c(a).disconnect()});b.wbg.__wbg_observe_d77ba7c3e8862dc1=((a,b,d)=>{c(a).observe(c(b),c(d))});b.wbg.__wbg_altKey_bf16cace6fb79198=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_977280484bcead08=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_55894418ec38c771=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_16606958d932a374=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_key_cf8022c18f47869e=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a5+ V]=g;r()[b/a5+ Z]=f});b.wbg.__wbg_nodeName_a5833c5e7367125b=((b,d)=>{const e=c(d).nodeName;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a5+ V]=g;r()[b/a5+ Z]=f});b.wbg.__wbg_childNodes_a5762b4b3e073cf6=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_previousSibling_ef843c512fac0d77=(a=>{const b=c(a).previousSibling;return p(b)?Z:e(b)});b.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=c(a).nextSibling;return p(b)?Z:e(b)});b.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return E(((a,b)=>{const d=c(a).appendChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_cloneNode_405d5ea3f7e0098a=function(){return E((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_byobRequest_05466bb0cacd89fa=(a=>{const b=c(a).byobRequest;return p(b)?Z:e(b)});b.wbg.__wbg_close_d29a75e8efc5fa94=function(){return E((a=>{c(a).close()}),arguments)};b.wbg.__wbg_append_962e199b73af5069=function(){return E(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_length_f845c1c304d9837a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_close_79df9bcee94a607c=function(){return E((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_e8019641f9877e27=function(){return E(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>Z];return e(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new S();return e(a)});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{var c=D(a,b);const d=new Function(c);return e(d)});b.wbg.__wbg_get_7b48513de5dc5ea4=function(){return E(((a,b)=>{const d=a6.get(c(a),c(b));return e(d)}),arguments)};b.wbg.__wbg_call_90c26b09837aba1c=function(){return E(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new a7();return e(a)});b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return E((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return E((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return E((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return E((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbg_from_71add2e723d1f1b2=(a=>{const b=S.from(c(a));return e(b)});b.wbg.__wbg_indexOf_7c935dd917243411=((a,b,d)=>{const e=c(a).indexOf(c(b),d);return e});b.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_new_a64e3f2afc2cf2f8=((a,b)=>{var c=D(a,b);const d=new Y(c);return e(d)});b.wbg.__wbg_call_5da1969d7cd31ccd=function(){return E(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_now_096aa89623f72d50=(()=>{const a=Date.now();return a});b.wbg.__wbg_instanceof_Object_702c4990f4c3db8d=(a=>{let b;try{b=c(a) instanceof a7}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_getOwnPropertyDescriptor_0311db166b5c09e1=((a,b)=>{const d=a7.getOwnPropertyDescriptor(c(a),c(b));return e(d)});b.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const d=a7.is(c(a),c(b));return d});b.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=Z;try{return F(d,c.b,a,b)}finally{c.a=d}};const f=new a8(d);return e(f)}finally{c.a=c.b=Z}});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=a8.resolve(c(a));return e(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,d)=>{const f=new _(c(a),b>>>Z,d>>>Z);return e(f)});b.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new _(c(a));return e(b)});b.wbg.__wbg_set_2357bf09366ee480=((a,b,d)=>{c(a).set(c(b),d>>>Z)});b.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithlength_6c2df9e2f3028c43=(a=>{const b=new _(a>>>Z);return e(b)});b.wbg.__wbg_buffer_261f267c3396c59b=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_subarray_2e940e41c0f5a1d9=((a,b,d)=>{const f=c(a).subarray(b>>>Z,d>>>Z);return e(f)});b.wbg.__wbg_byteLength_af7bdd61ff8ad011=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_ef240684c26a4ab0=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_apply_4d8fcf4ddc362ff9=function(){return E(((a,b,d)=>{const f=a6.apply(c(a),c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_set_759f75cd92b612d2=function(){return E(((a,b,d)=>{const e=a6.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a5+ V]=g;r()[b/a5+ Z]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Y(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return e(b)});b.wbg.__wbindgen_closure_wrapper564=((a,b,c)=>{const d=u(a,b,252,v);return e(d)});b.wbg.__wbindgen_closure_wrapper1881=((a,b,c)=>{const d=w(a,b,a9,x);return e(d)});b.wbg.__wbindgen_closure_wrapper1882=((a,b,c)=>{const d=w(a,b,a9,y);return e(d)});b.wbg.__wbindgen_closure_wrapper1883=((a,b,c)=>{const d=u(a,b,a9,z);return e(d)});b.wbg.__wbindgen_closure_wrapper1884=((a,b,c)=>{const d=u(a,b,a9,A);return e(d)});b.wbg.__wbindgen_closure_wrapper1885=((a,b,c)=>{const d=u(a,b,a9,B);return e(d)});b.wbg.__wbindgen_closure_wrapper1890=((a,b,c)=>{const d=u(a,b,a9,z);return e(d)});b.wbg.__wbindgen_closure_wrapper1893=((a,b,c)=>{const d=u(a,b,a9,z);return e(d)});b.wbg.__wbindgen_closure_wrapper1895=((a,b,c)=>{const d=u(a,b,a9,z);return e(d)});b.wbg.__wbindgen_closure_wrapper3992=((a,b,c)=>{const d=u(a,b,1315,C);return e(d)});return b});var z=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h230606a864fe9d52(b,c,e(d))});var x=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1__h2a8fb8685b397d4b(b,c,e(d))});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:V,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===Z){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=Z;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var f=(a=>{if(a<132)return;b[a]=d;d=a});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:V,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Z;try{return e(c,f.b,...b)}finally{if(--f.cnt===Z){a.__wbindgen_export_2.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var o=((a,b,c)=>{if(c===T){const c=m.encode(a);const d=b(c.length,V)>>>Z;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,V)>>>Z;const f=j();let g=Z;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Z){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,V)>>>Z;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,V)>>>Z};l=g;return e});var j=(()=>{if(i===U||i.byteLength===Z){i=new _(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>Z;return h.decode(j().subarray(a,a+ b))});var F=((b,c,d,f)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h292533a73117bd95(b,c,e(d),e(f))});let a;const b=new S(128).fill(T);b.push(T,U,!0,!1);let d=b.length;const h=typeof TextDecoder!==W?new TextDecoder(X,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Y(`TextDecoder not available`)}};if(typeof TextDecoder!==W){h.decode()};let i=U;let l=Z;const m=typeof TextEncoder!==W?new TextEncoder(X):{encode:()=>{throw Y(`TextEncoder not available`)}};const n=typeof m.encodeInto===$?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=U;const t=typeof a3===W?{register:()=>{},unregister:()=>{}}:new a3(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const G=typeof a3===W?{register:()=>{},unregister:()=>{}}:new a3(b=>a.__wbg_intounderlyingbytesource_free(b>>>Z));class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Z;G.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a4);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/a5+ Z];var c=r()[e/a5+ V];var d=D(b,c);if(b!==Z){a.__wbindgen_free(b,c,V)};return d}finally{a.__wbindgen_add_to_stack_pointer(a4)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>Z}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,e(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,e(b));return g(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const I=typeof a3===W?{register:()=>{},unregister:()=>{}}:new a3(b=>a.__wbg_intounderlyingsink_free(b>>>Z));class J{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Z;I.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,e(b));return g(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return g(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,e(b));return g(d)}}const K=typeof a3===W?{register:()=>{},unregister:()=>{}}:new a3(b=>a.__wbg_intounderlyingsource_free(b>>>Z));class L{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Z;K.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,e(b));return g(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default R;export{H as IntoUnderlyingByteSource,J as IntoUnderlyingSink,L as IntoUnderlyingSource,Q as initSync}