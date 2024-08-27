import"../sb-preview/runtime.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const d="modulepreload",O=function(r,e){return new URL(r,e).href},l={},t=function(e,a,n){let s=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");s=Promise.all(a.map(i=>{if(i=O(i,n),i in l)return;l[i]=!0;const m=i.endsWith(".css"),E=m?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const c=o[p];if(c.href===i&&(!m||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${E}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":d,m||(_.as="script",_.crossOrigin=""),_.href=i,document.head.appendChild(_),m)return new Promise((p,c)=>{_.addEventListener("load",p),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});T.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const L={"./src/stories/0-1-Introduce.GettingStarted.mdx":async()=>t(()=>import("./0-1-Introduce.GettingStarted-BtipapWz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),"./src/stories/0-2-Introduce.Editor.bs4.stories.tsx":async()=>t(()=>import("./0-2-Introduce.Editor.bs4.stories-BWj0UhWU.js"),__vite__mapDeps([16,2,1,11,5,14,17]),import.meta.url),"./src/stories/0-2-Introduce.Editor.stories.tsx":async()=>t(()=>import("./0-2-Introduce.Editor.stories-DaP52hU0.js"),__vite__mapDeps([12,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/2-6-FeatureList.mdx":async()=>t(()=>import("./2-6-FeatureList-DqrxDoSs.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8]),import.meta.url),"./src/stories/basic-api/codeview.toggle.stories.tsx":async()=>t(()=>import("./codeview.toggle.stories-DS8huwHT.js"),__vite__mapDeps([19,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/createRange.stories.tsx":async()=>t(()=>import("./createRange.stories-Z4EfFqNc.js"),__vite__mapDeps([21,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/disable.stories.tsx":async()=>t(()=>import("./disable.stories-DXOcVkRG.js"),__vite__mapDeps([22,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/disableGrammar.stories.tsx":async()=>t(()=>import("./disableGrammar.stories-DYSW6smK.js"),__vite__mapDeps([23,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/enable.stories.tsx":async()=>t(()=>import("./enable.stories-DbR7PIEg.js"),__vite__mapDeps([24,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/focus.stories.tsx":async()=>t(()=>import("./focus.stories-DgR9_YAJ.js"),__vite__mapDeps([25,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/fullscreen.toggle.stories.tsx":async()=>t(()=>import("./fullscreen.toggle.stories-BwWjP-nb.js"),__vite__mapDeps([26,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/isEmpty.stories.tsx":async()=>t(()=>import("./isEmpty.stories-B7rpeONw.js"),__vite__mapDeps([27,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/reset.stories.tsx":async()=>t(()=>import("./reset.stories-D2ha7Wz7.js"),__vite__mapDeps([28,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/spellCheck.stories.tsx":async()=>t(()=>import("./spellCheck.stories-X5ja-hJM.js"),__vite__mapDeps([29,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/basic-api/undo.redo.stories.tsx":async()=>t(()=>import("./undo.redo.stories-h-JySf0V.js"),__vite__mapDeps([30,2,31,32,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/initInvoke.stories.tsx":async()=>t(()=>import("./initInvoke.stories-CZC529Dx.js"),__vite__mapDeps([33,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onBlur.stories.tsx":async()=>t(()=>import("./onBlur.stories-BWrCSOdv.js"),__vite__mapDeps([34,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onBlurCodeview.stories.tsx":async()=>t(()=>import("./onBlurCodeview.stories-D6_lwEqU.js"),__vite__mapDeps([35,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onChange.stories.tsx":async()=>t(()=>import("./onChange.stories-Ha_ehlQw.js"),__vite__mapDeps([36,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onEnter.stories.tsx":async()=>t(()=>import("./onEnter.stories-aE-bB3bQ.js"),__vite__mapDeps([37,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onFocus.stories.tsx":async()=>t(()=>import("./onFocus.stories-DzmZaM1B.js"),__vite__mapDeps([38,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onImageUpload.stories.tsx":async()=>t(()=>import("./onImageUpload.stories-2xYqPLDV.js"),__vite__mapDeps([39,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onInit.stories.tsx":async()=>t(()=>import("./onInit.stories-yT9zaI4Y.js"),__vite__mapDeps([40,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onKeydown.stories.tsx":async()=>t(()=>import("./onKeydown.stories-uWHn2Ea4.js"),__vite__mapDeps([41,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onKeyup.stories.tsx":async()=>t(()=>import("./onKeyup.stories-cMixjTdK.js"),__vite__mapDeps([42,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onMousedown.stories.tsx":async()=>t(()=>import("./onMousedown.stories-p_OuBK_f.js"),__vite__mapDeps([43,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onMouseup.stories.tsx":async()=>t(()=>import("./onMouseup.stories-5V1T7Usc.js"),__vite__mapDeps([44,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/callbacks/onPaste.stories.tsx":async()=>t(()=>import("./onPaste.stories-D9Gp4IDs.js"),__vite__mapDeps([45,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/extensions/button.stories.tsx":async()=>t(()=>import("./button.stories-Ch69i5pD.js"),__vite__mapDeps([46,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/extensions/native-button.stories.tsx":async()=>t(()=>import("./native-button.stories-DDya3I32.js"),__vite__mapDeps([47,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/extensions/plugin-button.stories.tsx":async()=>t(()=>import("./plugin-button.stories-BOCrfi3U.js"),__vite__mapDeps([48,2,14,1,13,11,5,15]),import.meta.url),"./src/stories/extensions/plugin-command.stories.tsx":async()=>t(()=>import("./plugin-command.stories-DROC2thj.js"),__vite__mapDeps([49,2,20,14,1,13,11,5,15]),import.meta.url),"./src/stories/extensions/plugin-destroy.stories.tsx":async()=>t(()=>import("./plugin-destroy.stories-49onTt0D.js"),__vite__mapDeps([50,2,20,14,1,13,11,5,15]),import.meta.url),"./src/stories/extensions/plugin-event.stories.tsx":async()=>t(()=>import("./plugin-event.stories-BoQy1NCK.js"),__vite__mapDeps([51,2,20,14,1,13,11,5,15]),import.meta.url),"./src/stories/extensions/plugin-initialize.stories.tsx":async()=>t(()=>import("./plugin-initialize.stories-nbOogG3g.js"),__vite__mapDeps([52,2,20,14,1,13,11,5,15]),import.meta.url),"./src/stories/extensions/plugin.stories.tsx":async()=>t(()=>import("./plugin.stories-HcGDsrX3.js"),__vite__mapDeps([53,2,14,1,13,11,5,15]),import.meta.url),"./src/stories/font-style-api/backColor.foreColor.stories.tsx":async()=>t(()=>import("./backColor.foreColor.stories-D2N4AP19.js"),__vite__mapDeps([54,2,31,32,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/fontName.stories.tsx":async()=>t(()=>import("./fontName.stories-D6EpJsFN.js"),__vite__mapDeps([55,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/fontSize.stories.tsx":async()=>t(()=>import("./fontSize.stories-DRGQOYk4.js"),__vite__mapDeps([56,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/fontSizeUnit.stories.tsx":async()=>t(()=>import("./fontSizeUnit.stories-BFP7ZSUz.js"),__vite__mapDeps([57,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/fontStyle.stories.tsx":async()=>t(()=>import("./fontStyle.stories-4_QpOl2x.js"),__vite__mapDeps([58,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/fontStyleAdvanced.stories.tsx":async()=>t(()=>import("./fontStyleAdvanced.stories-faWFzufc.js"),__vite__mapDeps([59,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/font-style-api/removeFormat.stories.tsx":async()=>t(()=>import("./removeFormat.stories-D4bBsHcb.js"),__vite__mapDeps([60,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/insertion-api/createLink.unlink.stories.tsx":async()=>t(()=>import("./createLink.unlink.stories-DyMZEHLL.js"),__vite__mapDeps([61,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/insertion-api/insertImage.stories.tsx":async()=>t(()=>import("./insertImage.stories-Bs9oImui.js"),__vite__mapDeps([62,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/insertion-api/insertNode.stories.tsx":async()=>t(()=>import("./insertNode.stories-BqrJpr5D.js"),__vite__mapDeps([63,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/insertion-api/insertText.stories.tsx":async()=>t(()=>import("./insertText.stories-2nyVDYMz.js"),__vite__mapDeps([64,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/insertion-api/pasteHTML.stories.tsx":async()=>t(()=>import("./pasteHTML.stories-9ArMFx-Y.js"),__vite__mapDeps([65,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/airMode.stories.tsx":async()=>t(()=>import("./airMode.stories-DUTAtIWe.js"),__vite__mapDeps([66,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/blockquoteBreakingLevel.stories.tsx":async()=>t(()=>import("./blockquoteBreakingLevel.stories-w6zgeXh2.js"),__vite__mapDeps([67,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/colors.stories.tsx":async()=>t(()=>import("./colors.stories-C4JRxFwE.js"),__vite__mapDeps([68,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/dialogsInBody.stories.tsx":async()=>t(()=>import("./dialogsInBody.stories-Dq0aIHsM.js"),__vite__mapDeps([69,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/disableDragAndDrop.stories.tsx":async()=>t(()=>import("./disableDragAndDrop.stories-Cj1T5B22.js"),__vite__mapDeps([70,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/focus.stories.tsx":async()=>t(()=>import("./focus.stories-BYzNB9GI.js"),__vite__mapDeps([71,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/followingToolbar.stories.tsx":async()=>t(()=>import("./followingToolbar.stories-DFJqOW53.js"),__vite__mapDeps([72,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/fontNames.stories.tsx":async()=>t(()=>import("./fontNames.stories-ByQUoKoV.js"),__vite__mapDeps([73,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/fontSizeUnits.stories.tsx":async()=>t(()=>import("./fontSizeUnits.stories-DSAPFuWN.js"),__vite__mapDeps([74,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/height.stories.tsx":async()=>t(()=>import("./height.stories-BSp885SC.js"),__vite__mapDeps([75,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/hint.stories.tsx":async()=>t(()=>import("./hint.stories-C0I91fWh.js"),__vite__mapDeps([76,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/insertTableMaxSize.stories.tsx":async()=>t(()=>import("./insertTableMaxSize.stories-Cee8j2ey.js"),__vite__mapDeps([77,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/lang.stories.tsx":async()=>t(()=>import("./lang.stories-B6DHKP8E.js"),__vite__mapDeps([78,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/lineHeights.stories.tsx":async()=>t(()=>import("./lineHeights.stories-C0a3J-yl.js"),__vite__mapDeps([79,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/noToolbar.stories.tsx":async()=>t(()=>import("./noToolbar.stories-Bw5Hz3fU.js"),__vite__mapDeps([80,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/placeholder.stories.tsx":async()=>t(()=>import("./placeholder.stories-Bcl_Xfso.js"),__vite__mapDeps([81,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/popover.stories.tsx":async()=>t(()=>import("./popover.stories-CUwCndNB.js"),__vite__mapDeps([82,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/shortcuts.stories.tsx":async()=>t(()=>import("./shortcuts.stories-BHChS34C.js"),__vite__mapDeps([83,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/styleTags.stories.tsx":async()=>t(()=>import("./styleTags.stories-B7qzEik0.js"),__vite__mapDeps([84,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/tabDisable.stories.tsx":async()=>t(()=>import("./tabDisable.stories-alt57Xqv.js"),__vite__mapDeps([85,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/tableClassName.stories.tsx":async()=>t(()=>import("./tableClassName.stories-CVc24wvK.js"),__vite__mapDeps([86,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/toolbar.stories.tsx":async()=>t(()=>import("./toolbar.stories-Baj91MWk.js"),__vite__mapDeps([87,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/toolbarContainer.stories.tsx":async()=>t(()=>import("./toolbarContainer.stories-Cog3dawe.js"),__vite__mapDeps([88,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/option/toolbarPosition.stories.tsx":async()=>t(()=>import("./toolbarPosition.stories-COdolXJl.js"),__vite__mapDeps([89,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/align.stories.tsx":async()=>t(()=>import("./align.stories-DLrC5poO.js"),__vite__mapDeps([90,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/formatHeader.stories.tsx":async()=>t(()=>import("./formatHeader.stories-BcQ_B0k_.js"),__vite__mapDeps([91,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/formatPara.stories.tsx":async()=>t(()=>import("./formatPara.stories-bz3b3wJ9.js"),__vite__mapDeps([92,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/indent.outdent.stories.tsx":async()=>t(()=>import("./indent.outdent.stories-aFI0wPWT.js"),__vite__mapDeps([93,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/insertOrderedList.stories.tsx":async()=>t(()=>import("./insertOrderedList.stories-DFIw-FHq.js"),__vite__mapDeps([94,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/insertParagraph.stories.tsx":async()=>t(()=>import("./insertParagraph.stories-BZpkiiZk.js"),__vite__mapDeps([95,2,31,32,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/paragraph-api/lineHeight.stories.tsx":async()=>t(()=>import("./lineHeight.stories-Dc1OZXl5.js"),__vite__mapDeps([96,2,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/getLastRange.stories.tsx":async()=>t(()=>import("./getLastRange.stories-Gfj_vwqD.js"),__vite__mapDeps([97,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.collapse.stories.tsx":async()=>t(()=>import("./range.collapse.stories-D5pk8VxL.js"),__vite__mapDeps([98,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.deleteContents.stories.tsx":async()=>t(()=>import("./range.deleteContents.stories-DZfFG78b.js"),__vite__mapDeps([99,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.getClientRects.stories.tsx":async()=>t(()=>import("./range.getClientRects.stories-DA3MLqL5.js"),__vite__mapDeps([100,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.getWordRange.stories.tsx":async()=>t(()=>import("./range.getWordRange.stories-DHuJ_6hd.js"),__vite__mapDeps([101,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.getWordsMatchRange.stories.tsx":async()=>t(()=>import("./range.getWordsMatchRange.stories-_kq7yZao.js"),__vite__mapDeps([102,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.insertNode.stories.tsx":async()=>t(()=>import("./range.insertNode.stories-D_OrotTO.js"),__vite__mapDeps([103,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.nativeRange.stories.tsx":async()=>t(()=>import("./range.nativeRange.stories-DwKc3TJm.js"),__vite__mapDeps([104,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.pasteHTML.stories.tsx":async()=>t(()=>import("./range.pasteHTML.stories-BuLAG_bl.js"),__vite__mapDeps([105,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.select.stories.tsx":async()=>t(()=>import("./range.select.stories-DUw5p1AQ.js"),__vite__mapDeps([106,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.splitText.stories.tsx":async()=>t(()=>import("./range.splitText.stories-CcPA0wqt.js"),__vite__mapDeps([107,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.toString.stories.tsx":async()=>t(()=>import("./range.toString.stories-Dt9kmIbk.js"),__vite__mapDeps([108,2,20,13,1,11,5,14,15]),import.meta.url),"./src/stories/selection-api/range.wrapBodyInlineWithPara.stories.tsx":async()=>t(()=>import("./range.wrapBodyInlineWithPara.stories-CYZScYne.js"),__vite__mapDeps([109,2,20,13,1,11,5,14,15]),import.meta.url)};async function y(r){return L[r]()}const{composeConfigs:I,PreviewWeb:P,ClientApi:x}=__STORYBOOK_MODULE_PREVIEW_API__,v=async(r=[])=>{const e=await Promise.all([r.at(0)??t(()=>import("./entry-preview-zLiY8ThW.js"),__vite__mapDeps([110,2,10,11,5]),import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-D__W0D6w.js"),__vite__mapDeps([111,7,2,8]),import.meta.url),r.at(2)??t(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([112,6]),import.meta.url),r.at(3)??t(()=>import("./preview-CD1oIJRO.js"),__vite__mapDeps([]),import.meta.url),r.at(4)??t(()=>import("./preview-CVycp9di.js"),__vite__mapDeps([113,32]),import.meta.url),r.at(5)??t(()=>import("./preview-9hFJSo5S.js"),__vite__mapDeps([114,8]),import.meta.url),r.at(6)??t(()=>import("./preview-BnWGZYux.js"),__vite__mapDeps([]),import.meta.url),r.at(7)??t(()=>import("./preview-Cdum89jS.js"),__vite__mapDeps([]),import.meta.url),r.at(8)??t(()=>import("./preview-DB9FwMii.js"),__vite__mapDeps([115,8]),import.meta.url),r.at(9)??t(()=>import("./preview-BpcF_O6y.js"),__vite__mapDeps([]),import.meta.url),r.at(10)??t(()=>import("./preview-Bmz3-Txg.js"),__vite__mapDeps([]),import.meta.url),r.at(11)??t(()=>import("./preview-yci0v18n.js"),__vite__mapDeps([]),import.meta.url),r.at(12)??t(()=>import("./preview-B_mScqu7.js"),__vite__mapDeps([]),import.meta.url)]);return I(e)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P(y,v);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./0-1-Introduce.GettingStarted-BtipapWz.js","./jsx-runtime-DEdD30eg.js","./index-RYns6xqu.js","./index-CcnH5Kt0.js","./index-BbzBLZh4.js","./index-D16Yfzz8.js","./index-D-8MO0q_.js","./index-B23dhaOI.js","./index-DrFu-skq.js","./chunk-HLWAVYOI-6LrnaE0K.js","./react-18-D9w73zBb.js","./client-ngufn95y.js","./0-2-Introduce.Editor.stories-DaP52hU0.js","./ReactSummernoteLite-Chf2t645.js","./Summernote-D81Bv8uQ.js","./ReactSummernoteLite-B58mW718.css","./0-2-Introduce.Editor.bs4.stories-BWj0UhWU.js","./0-2-Introduce.Editor.bs4-CId69NeM.css","./2-6-FeatureList-DqrxDoSs.js","./codeview.toggle.stories-DS8huwHT.js","./util-jfGB622S.js","./createRange.stories-Z4EfFqNc.js","./disable.stories-DXOcVkRG.js","./disableGrammar.stories-DYSW6smK.js","./enable.stories-DbR7PIEg.js","./focus.stories-DgR9_YAJ.js","./fullscreen.toggle.stories-BwWjP-nb.js","./isEmpty.stories-B7rpeONw.js","./reset.stories-D2ha7Wz7.js","./spellCheck.stories-X5ja-hJM.js","./undo.redo.stories-h-JySf0V.js","./chunk-454WOBUV-CM0pFb8Z.js","./v4-CQkTLCs1.js","./initInvoke.stories-CZC529Dx.js","./onBlur.stories-BWrCSOdv.js","./onBlurCodeview.stories-D6_lwEqU.js","./onChange.stories-Ha_ehlQw.js","./onEnter.stories-aE-bB3bQ.js","./onFocus.stories-DzmZaM1B.js","./onImageUpload.stories-2xYqPLDV.js","./onInit.stories-yT9zaI4Y.js","./onKeydown.stories-uWHn2Ea4.js","./onKeyup.stories-cMixjTdK.js","./onMousedown.stories-p_OuBK_f.js","./onMouseup.stories-5V1T7Usc.js","./onPaste.stories-D9Gp4IDs.js","./button.stories-Ch69i5pD.js","./native-button.stories-DDya3I32.js","./plugin-button.stories-BOCrfi3U.js","./plugin-command.stories-DROC2thj.js","./plugin-destroy.stories-49onTt0D.js","./plugin-event.stories-BoQy1NCK.js","./plugin-initialize.stories-nbOogG3g.js","./plugin.stories-HcGDsrX3.js","./backColor.foreColor.stories-D2N4AP19.js","./fontName.stories-D6EpJsFN.js","./fontSize.stories-DRGQOYk4.js","./fontSizeUnit.stories-BFP7ZSUz.js","./fontStyle.stories-4_QpOl2x.js","./fontStyleAdvanced.stories-faWFzufc.js","./removeFormat.stories-D4bBsHcb.js","./createLink.unlink.stories-DyMZEHLL.js","./insertImage.stories-Bs9oImui.js","./insertNode.stories-BqrJpr5D.js","./insertText.stories-2nyVDYMz.js","./pasteHTML.stories-9ArMFx-Y.js","./airMode.stories-DUTAtIWe.js","./blockquoteBreakingLevel.stories-w6zgeXh2.js","./colors.stories-C4JRxFwE.js","./dialogsInBody.stories-Dq0aIHsM.js","./disableDragAndDrop.stories-Cj1T5B22.js","./focus.stories-BYzNB9GI.js","./followingToolbar.stories-DFJqOW53.js","./fontNames.stories-ByQUoKoV.js","./fontSizeUnits.stories-DSAPFuWN.js","./height.stories-BSp885SC.js","./hint.stories-C0I91fWh.js","./insertTableMaxSize.stories-Cee8j2ey.js","./lang.stories-B6DHKP8E.js","./lineHeights.stories-C0a3J-yl.js","./noToolbar.stories-Bw5Hz3fU.js","./placeholder.stories-Bcl_Xfso.js","./popover.stories-CUwCndNB.js","./shortcuts.stories-BHChS34C.js","./styleTags.stories-B7qzEik0.js","./tabDisable.stories-alt57Xqv.js","./tableClassName.stories-CVc24wvK.js","./toolbar.stories-Baj91MWk.js","./toolbarContainer.stories-Cog3dawe.js","./toolbarPosition.stories-COdolXJl.js","./align.stories-DLrC5poO.js","./formatHeader.stories-BcQ_B0k_.js","./formatPara.stories-bz3b3wJ9.js","./indent.outdent.stories-aFI0wPWT.js","./insertOrderedList.stories-DFIw-FHq.js","./insertParagraph.stories-BZpkiiZk.js","./lineHeight.stories-Dc1OZXl5.js","./getLastRange.stories-Gfj_vwqD.js","./range.collapse.stories-D5pk8VxL.js","./range.deleteContents.stories-DZfFG78b.js","./range.getClientRects.stories-DA3MLqL5.js","./range.getWordRange.stories-DHuJ_6hd.js","./range.getWordsMatchRange.stories-_kq7yZao.js","./range.insertNode.stories-D_OrotTO.js","./range.nativeRange.stories-DwKc3TJm.js","./range.pasteHTML.stories-BuLAG_bl.js","./range.select.stories-DUw5p1AQ.js","./range.splitText.stories-CcPA0wqt.js","./range.toString.stories-Dt9kmIbk.js","./range.wrapBodyInlineWithPara.stories-CYZScYne.js","./entry-preview-zLiY8ThW.js","./entry-preview-docs-D__W0D6w.js","./preview-BJPLiuSt.js","./preview-CVycp9di.js","./preview-9hFJSo5S.js","./preview-DB9FwMii.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
