"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7521],{23348:(e,t,i)=>{i.d(t,{n:()=>D});var n=i(59496),s=i(84875),a=i.n(s),r=i(80519),l=i(81902),o=i(26814),u=i(13492),c=i(55740),d=i(85830),m=i(36012),x=i(1938);var g=i(2238),h=i(65980),p=i(45743);const j="main-topBar-contentArea",f="queue-tabBar-headerIsCentered",y="queue-tabBar-headerItem",v="queue-tabBar-moreButton",b="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",k="queue-tabBar-active",N="queue-tabBar-headerItemLink",S="queue-tabBar-header",P="queue-tabBar-chevron";var I=i(4637);const E=({items:e,activeItemId:t})=>(0,I.jsx)(h.v,{children:e.map((e=>e.disabled?(0,I.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick,children:e.title},e.uri):(0,I.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===t,className:({isActive:e})=>a()(C,{[k]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var w=i(64544);const D=(0,n.memo)((function({isCentered:e,links:t,landmarkLabel:i,className:s}){const h=(0,n.useRef)(null),[p,C]=(0,n.useState)([]),[D,U]=(0,n.useState)(0),[A,q]=(0,n.useState)([]),O=function(){const[e,t]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:i}=(0,n.useContext)(m.VX),s=(0,d.y1)((e=>{e?.width&&t(e.width)}),250);return(0,x.y)({refOrElement:i,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:R}=(0,r.TH)(),T=t.find((e=>e.to===R));return(0,n.useEffect)((()=>{h.current&&U(h.current.clientWidth)}),[O]),(0,n.useEffect)((()=>{if(!h.current)return;const e=Array.from(h.current.children).map((e=>e.clientWidth));C(e)}),[t]),(0,n.useEffect)((()=>{if(!h.current)return;if(p.slice(0,-1).reduce(((e,t)=>e+t),0)<=D)return void q([]);const e=p.reduce(((e,t)=>e>t?e:t),0),t=[];let i=e;p.forEach(((e,n)=>{D>=i+e?i+=e:t.push(n)})),q(t)}),[D,p]),(0,I.jsx)("nav",{className:a()(s,j),"aria-label":i,children:(0,I.jsxs)("ul",{className:e?f:S,ref:h,children:[t.filter(((e,t)=>!A.includes(t))).map((e=>{const t=e?.render??(e=>e);return(0,I.jsx)(n.Fragment,{children:t((0,I.jsx)("li",{className:y,children:e.disabled?(0,I.jsx)("div",{className:N,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,I.jsx)(w.O,{end:!0,className:({isActive:e})=>a()(N,{[k]:e}),to:e.to,onClick:e.handleClick,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),A.length||0===p.length?(0,I.jsx)("li",{className:y,children:(0,I.jsx)(g.x,{renderInline:!0,menu:(0,I.jsx)(E,{items:t.filter(((e,t)=>A.includes(t))),activeItemId:T?.itemId}),children:(e,t,i)=>(0,I.jsxs)("button",{className:a()(v,{[b]:T}),type:"button",onClick:t,ref:i,children:[(0,I.jsx)(l.D,{variant:"mestoBold",children:T?T.title:c.ag.get("more")}),e?(0,I.jsx)(o.U,{iconSize:16,className:P,"aria-hidden":"true"}):(0,I.jsx)(u.i,{iconSize:16,className:P,"aria-hidden":"true"})]})})}):null]})})}))},39770:(e,t,i)=>{i.d(t,{I:()=>x});var n=i(41732),s=i(59496),a=i(55740),r=i(23348),l=i(52609),o=i(37463),u=i(12848);const c="queue-tabBar-nav";var d=i(4637);const m=()=>{const e=(0,u.Y)(),t=(0,s.useCallback)((e=>(0,d.jsx)(o.v,{placement:"bottomEnd",arrow:"topStart",title:a.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),i=(0,s.useMemo)((()=>[{title:a.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:t,disabled:e},{title:a.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,t]);return(0,d.jsx)(l.w,{children:(0,d.jsx)(r.n,{className:c,links:i})})},x=({children:e})=>{const t=(0,n.nF)();return(0,d.jsxs)("section",{className:"contentSpacing",children:[e,t&&(0,d.jsx)(m,{})]})}},33160:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ne});var n=i(59496),s=i(84875),a=i.n(s),r=i(81902),l=i(15263),o=i(4982),u=i(55740),c=i(42673),d=i(93399),m=i(13870),x=i(37355),g=i(9131),h=i(4637);const p=({className:e,emptyStateComponent:t})=>{const{currentSession:i}=(0,g.A)();if(!i)return t??null;const n=i.session_members.find((e=>e.id===i.session_owner_id));return(0,h.jsx)("div",{className:e,children:(0,h.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",children:u.ag.get("web-player.social-connect.session-info.title",{host:n?.display_name??""})})})},j=e=>(0,h.jsx)(x.L,{onError:e=>{(0,m.vK)(e,"GroupSessionQueueHeader")},SuspenseFallback:()=>e.emptyStateComponent??null,children:(0,h.jsx)(p,{...e})});var f=i(91560),y=i(77736),v=i(55207),b=i(67483),C=i(59325),k=i(57115),N=i(51471);const S=({onClick:e})=>(0,h.jsx)(N.P,{onClick:e,buttonSize:"sm",children:u.ag.get("queue.clear-queue")});var P=i(82950),I=i(22711),E=i(73455),w=(i(27874),i(69129));const D="i9rTNwKyT_NMDghd8q65",U="DXBMXJD8Zoj4V8MxIVTB",A="UEtqSfWDubkNdPIaEkfA",q="I_Rc74Je7W4sk6KAVR05",O=n.memo((function({onClose:e,onConfirm:t,isOpen:i,itemCount:s}){const l=(0,n.useCallback)((i=>{t(),e(i)}),[t,e]),o=u.ag.get("queue.confirm-title",s);return(0,h.jsx)(w.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:o,isOpen:i,children:(0,h.jsxs)("div",{className:D,children:[(0,h.jsx)(r.D,{as:"h2",variant:"cello",className:U,children:o}),(0,h.jsx)(r.D,{as:"p",variant:"mesto",className:A,paddingBottom:P.g4,children:u.ag.get("queue.confirm-message")}),(0,h.jsxs)("div",{className:a()("encore-light-theme",q),children:[(0,h.jsx)(I.o,{onClick:e,children:u.ag.get("queue.cancel-button")}),(0,h.jsx)(E.D,{onClick:l,children:u.ag.get("queue.confirm-button")})]})]})})}));var R=i(94760),T=i(97824);const Q=()=>(0,h.jsxs)("div",{className:T.Z.emptyContainer,children:[(0,h.jsx)(R.S,{iconSize:64,"aria-hidden":"true"}),(0,h.jsx)(r.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:T.Z.emptyContainerTitle,children:u.ag.get("queue.empty-title")}),(0,h.jsx)("p",{children:u.ag.get("queue.empty-description")}),(0,h.jsx)(d.default,{to:"/search",className:T.Z.findSomething,children:(0,h.jsx)(E.D,{colorSet:"invertedLight",children:u.ag.get("queue.fine-something")})})]});let F=function(e){return e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp",e}({});var L=i(99703),M=i(12115),_=i(57265),B=i(20111),$=i(84389),G=i(37859),Z=i(65391),W=i(26758),K=i(64695),z=i(76163),H=i(80557),X=i(1858),J=i(66275),V=i(88758),Y=i(46061),ee=i(28209),te=i(54204),ie=i(41567),ne=i(4699),se=i(70916),ae=i(59642),re=i(14126),le=i(80495),oe=i(76318),ue=i(2437),ce=i(84179),de=i(78720);let me=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const xe=n.memo((function({uri:e,uid:t,contextUri:i,name:s,duration_ms:a,artists:r,index:l,rowNumberOffset:o,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:x,album:g,type:p,section:j,usePlayContextItem:v,isAutoPlay:b=!1,isEnhanced:C,queueSpec:N,trackContextUri:S}){const P=(0,k.$P)(),I=(0,y.g)(),{triggerPlay:E,togglePlay:w}=v({uid:t,uri:e,index:l}),{spec:D}=(0,k.fU)(K.r,{data:{position:l,reason:"",uri:e}}),{isActive:U,isPlaying:A}=(0,oe.$o)(e),q=(0,n.useCallback)(((i,n)=>{t?E({loggingParams:n},(()=>I.skipToNext({uri:e,uid:t}))):E({loggingParams:n})}),[I,E,e,t]),O=(0,n.useCallback)((i=>{t?w({loggingParams:i},(()=>U?A?I.pause():I.resume():I.skipToNext({uri:e,uid:t}))):w({loggingParams:i})}),[I,w,e,t,U,A]),R=p===me.TRACK,T=p===me.EPISODE,Q=p===me.CHAPTER,L=T&&"video"===g?.mediaType,M=p===me.LOCAL,_=p===me.AD,B=r?.map((e=>e.name)).join(u.ag.getSeparator())||"",$=(0,le._)(e),G=(0,ce.k)(e,m,(0,z.dB)(e)),{badges:Z,hasBadges:xe}=(0,ue.r)({downloadAvailability:$,isExplicit:d,isMOGEFRestricted:x,isEnhanced:C});let ge;ge=T?(0,h.jsx)(X.k,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:i}):Q?(0,h.jsx)(H.r,{uri:e,uid:b?void 0:t,showUri:g.uri,contextUri:i}):M?(0,h.jsx)(J.N,{uri:e,uid:b?void 0:t,contextUri:i}):_?null:(0,h.jsx)(V.$,{uri:e,uid:b?void 0:t,albumUri:g.uri,artists:r,contextUri:i});const he=(0,n.useCallback)(((i,n)=>{const{meta:s,uris:a}=i,r=a.map((e=>({uri:e,uid:null})));let l;l=n===te.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},s.section===F.NowPlaying?I.addToQueue(r):s.origin===F.NowPlaying?I.insertIntoQueue(r,l):I.reorderQueue(r,l)}),[I,t,e]),pe=(0,n.useCallback)(((i,n)=>{const{items:s}=i;let a;a=n===te.W.Before?{before:{uri:e,uid:t??null}}:{after:{uri:e,uid:t??null}},I.reorderQueue(s,a)}),[I,t,e]),je=b?[]:[ie.a[z.JM.TRACK],ie.a[z.JM.EPISODE]];return(0,h.jsx)(f.ZP,{value:"row",index:l,children:(0,h.jsx)(ne._,{menu:ge,children:(0,h.jsxs)(te.c,{uri:e,contextUri:i,index:l,onTriggerPlay:q,isActive:j===F.NowPlaying&&U,ariaRowIndex:l,isPlayable:G,ageRestricted:x,spec:D,dragMetadata:{name:s,createdBy:B,sectionId:j},onInsert:(t,i,n,s,a)=>{he({uris:t,dropIndex:i,meta:a},n),N&&P.logInteraction(N.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,t,i,n)=>{pe({items:e,dropIndex:t,meta:n},i),N&&P.logInteraction(N.dragSort())},allowedDropTypes:je,children:[(0,h.jsx)(Y.Dd,{ariaColIndex:0,children:(0,h.jsx)(Y.Du,{uri:e,playAriaLabel:u.ag.get("tracklist.a11y.play",s,B),isPlaying:j===F.NowPlaying&&A,isActive:j===F.NowPlaying&&U,spec:D,onClick:(e,t)=>{O(t)},children:(0,h.jsx)(Y.km,{children:l+o+1})})}),(0,h.jsxs)(Y.vZ,{ariaColIndex:1,children:[(0,h.jsx)(Y.lD,{src:c,isVideo:L,isEpisode:T||Q}),(0,h.jsxs)(Y.vm,{children:[(0,h.jsx)(Y.Wh,{titleText:s,children:s}),xe&&(0,h.jsxs)(Y.g3,{children:[Z.enhanced&&(0,h.jsx)(W._,{iconSize:16,className:ee.Z.enhanced,title:u.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":u.ag.get("web-player.enhance.button_text_enhanced")}),Z.download&&(0,h.jsx)(se.G,{size:16}),Z.explicit&&(0,h.jsx)(ae.N,{}),Z.nineteen&&(0,h.jsx)(re.X,{className:ee.Z.nineteen,size:16})]}),(0,h.jsxs)(Y.K9,{children:[R&&(0,h.jsx)(Y.T6,{artists:r,spec:D}),(T||M)&&!L&&B]})]})]}),(0,h.jsx)(Y.UA,{ariaColIndex:2,children:(0,h.jsx)(Y.BM,{nonInteractive:M,uri:g.uri,name:g.name,creatorUri:r?.[0]?.uri,spec:D,children:g.name})}),(0,h.jsxs)(Y.mU,{ariaColIndex:3,children:[C&&(0,h.jsx)(de.l,{uri:S,id:t??e}),!M&&!Q&&!C&&(0,h.jsx)(Y.qS,{uri:e,type:p}),(0,h.jsx)(Y.A$,{duration:a}),(0,h.jsx)(Y.Zv,{menu:ge,label:u.ag.get("more.label.track",s,B),spec:D})]})]})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index&&e.name===t.name&&e.isEnhanced===t.isEnhanced)),ge=n.memo((function({tracks:e,ariaLabel:t,contextUri:i,rowNumberOffset:s=0,section:a,usePlayContextItem:r}){const l=(0,_.o)(),o=(0,y.g)(),c=(0,n.useCallback)(((e,t)=>{l({intent:"remove-from-queue",type:"click"}),o.removeFromQueue(e).then(t)}),[o,l]),d=(0,n.useCallback)(((e,t)=>{if((0,$.iw)(e)){const n=(0,Z.X)(e.show?.images,{desiredSize:40});return(0,h.jsx)(xe,{index:t,rowNumberOffset:s,imgUrl:n?.url||"",uri:(0,B.$)(e),uid:e.uid??e.uri,contextUri:i,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:me.EPISODE,section:a,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider},`${t}${s}${e.uid}`)}if((0,$.G7)(e)){const n=(0,Z.X)(e.images||void 0,{desiredSize:40});return(0,h.jsx)(xe,{index:t,rowNumberOffset:s,imgUrl:n?.url||"",uri:(0,B.$)(e),uid:e.uid??e.uri,contextUri:i,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:me.CHAPTER,section:a,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider},`${t}${s}${e.uid}`)}if((0,$.k6)(e)){const n=(0,Z.X)(e.images||void 0,{desiredSize:40});return(0,h.jsx)(xe,{index:t,rowNumberOffset:s,imgUrl:n?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:i,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??u.ag.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:me.AD,section:a,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${t}${s}${e.uid}`)}if((0,$.G_)(e)||(0,$.RB)(e)){const n=(0,Z.X)(e?.album?.images,{desiredSize:40}),l=e.type===G.p.TRACK?e:null;return(0,h.jsx)(xe,{index:t,rowNumberOffset:s,imgUrl:n?.url||"",uri:(0,B.$)(e),uid:e.uid??e.uri,contextUri:i,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:l?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:l?.is19PlusOnly??!1,type:l?.isLocal?me.LOCAL:me.TRACK,section:a,usePlayContextItem:r,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,M.$)(e?.metadata?.provider),trackContextUri:e.metadata?.context_uri},`${t}${s}${e.uid}`)}return(0,h.jsx)(L.Lb,{height:`${L.dN}px`})}),[s,i,a,r]),m=(0,n.useMemo)((()=>[L.QD.INDEX,L.QD.TITLE,L.QD.ALBUM,L.QD.DURATION]),[]),x=(0,n.useCallback)((e=>e.uri),[]),g=(0,n.useCallback)((e=>e.uid??e.uri),[]);return(0,h.jsx)(L.Pv,{ariaLabel:t,tracks:e,nrTracks:e.length,onRemove:c,renderRow:d,resolveUri:x,resolveUid:g,columns:m})})),he="queue-queuePage-queuePage",pe="queue-queuePage-header",je="queue-queuePage-subHeader",fe="queue-queuePage-nextFrom",ye="queue-queuePage-nextInQueue",ve=()=>{const{uri:e,description:t}=(0,C.$)(),{spec:i,logger:s,UBIFragment:m}=(0,k.fU)(l.createDesktopNowPlayingQueueEventFactory,{data:{identifier:o.Wg.NOWPLAYING_QUEUE,uri:e??""}}),x=(0,n.useMemo)((()=>i.nowPlayingSectionFactory()),[i]),g=(0,n.useMemo)((()=>i.nextInQueueSectionFactory()),[i]),p=(0,n.useMemo)((()=>i.nextFromSectionFactory()),[i]),N=(0,y.g)(),{current:P,nextUp:I,queued:E}=(0,b.W)(),[w,D]=(0,n.useState)(!1),U=(0,n.useCallback)((()=>{D(!1)}),[D]),A=(0,n.useCallback)((()=>{N.clearQueue(),D(!1)}),[N]),q=(0,n.useCallback)((async()=>{let e;const t=g.clearQueueButtonFactory();E.length>0&&(e=t.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:E.length}),s.logInteraction(e)),D(!0)}),[s,g,E]),{usePlayContextItem:R}=(0,v.n)({uri:e??""},{featureIdentifier:"queue"}),T="autoplay"===P?.provider,L=I.filter((e=>T?e:"autoplay"!==e.provider)),M=!!E?.length,_=!!L?.length,B=!1===(P||M||_),$=(0,n.useCallback)((async()=>{if(!_)return;const t=i.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});s.logInteraction(t)}),[_,s,i,e]);return B?(0,h.jsx)(Q,{}):(0,h.jsxs)("div",{className:he,children:[(0,h.jsx)(c.$,{children:u.ag.get("queue.page-title")}),(0,h.jsx)(j,{className:pe,emptyStateComponent:(0,h.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:pe,children:u.ag.get("playback-control.queue")})}),P&&e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:u.ag.get("queue.now-playing")}),(0,h.jsx)(m,{spec:x,children:(0,h.jsx)(f.ZP,{value:"now-playing",children:(0,h.jsx)(ge,{ariaLabel:u.ag.get("queue.now-playing"),tracks:[P],contextUri:e,section:F.NowPlaying,usePlayContextItem:R})})})]}),M&&e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:a()(ye,je),children:[(0,h.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:u.ag.get("queue.next-in-queue")}),M&&(0,h.jsx)(S,{onClick:q})]}),(0,h.jsx)(m,{spec:g,children:(0,h.jsx)(f.ZP,{value:"next-in-queue",children:(0,h.jsx)(ge,{ariaLabel:u.ag.get("queue.next-in-queue"),tracks:E,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:F.NextInQueue,usePlayContextItem:R})})})]}),_&&e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:a()(je,"standalone-ellipsis-one-line"),children:t&&!T?(0,h.jsxs)(h.Fragment,{children:[u.ag.get("queue.next-from")," ",(0,h.jsx)(d.Link,{className:fe,to:e,onClick:$,children:t})]}):u.ag.get("queue.next-up")}),(0,h.jsx)(m,{spec:p,children:(0,h.jsx)(f.ZP,{value:"next-up",children:(0,h.jsx)(ge,{ariaLabel:u.ag.get("queue.next-up"),tracks:L,rowNumberOffset:1+(E?.length||0),contextUri:"spotify:app:queue:NextUp",section:F.NextUp,usePlayContextItem:R})})})]}),(0,h.jsx)(O,{itemCount:E?.length||0,isOpen:w,onClose:U,onConfirm:A})]})};var be=i(39770),Ce=i(12848),ke=i(9205);const Ne=()=>(0,Ce.Y)()?(0,h.jsx)(ke.InstrumentedRedirect,{to:"/history"}):(0,h.jsx)(be.I,{children:(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(ve,{})})})},20111:(e,t,i)=>{i.d(t,{$:()=>n});const n=e=>e?.linked_from?.uri||e.uri},9131:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(59496),s=i(30361);var a=i(12445);const r=()=>{const e=(0,s.E)(),[t,i]=(0,n.useState)(e.getCurrentSession());!function(e,t){const i=(0,n.useRef)(t),a=(0,s.E)();i.current=t,(0,n.useEffect)((()=>{const t=e=>i.current(e);return a.getEvents().addListener(e,t),()=>{a.getEvents().removeListener(e,t)}}),[a,e])}(a.v.UPDATE,(({data:e})=>{i(e)}));return{currentSession:t,createSession:(0,n.useCallback)((t=>e.createSession(t)),[e]),leaveSession:(0,n.useCallback)((()=>e.leaveSession()),[e]),deleteSession:(0,n.useCallback)((()=>e.deleteSession()),[e]),joinSession:(0,n.useCallback)(((t,i)=>e.joinSession(t,i)),[e]),refreshCurrentSession:(0,n.useCallback)((()=>e.fetchCurrentSession()),[e])}}},97824:(e,t,i)=>{i.d(t,{Z:()=>n});const n={emptyContainer:"queue-queuePage-emptyContainer",emptyContainerTitle:"queue-queuePage-emptyContainerTitle",findSomething:"queue-queuePage-findSomething"}}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map