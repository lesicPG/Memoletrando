"use strict";(self.webpackChunkmemory_game=self.webpackChunkmemory_game||[]).push([[206],{9206:(h,p,r)=>{r.r(p),r.d(p,{AttemptPageModule:()=>d});var o=r(8996),t=r(4650),l=r(8998),c=r(1572);let u=(()=>{class e{constructor(s,i,a){this.route=s,this.router=i,this.userService=a,this.urlOld="",this.urlOld=this.route.snapshot.paramMap.get("url")||""}ngOnInit(){this.attempt()}attempt(){this.userService.validateToken(["access_level.permissions"]).then(s=>{s?this.userService.setUser({user:s},i=>{if(""==this.urlOld||null==this.urlOld)this.router.navigate(["/temas"]);else if(this.urlOld=decodeURI(this.urlOld),this.urlOld.includes(";")){let a=this.urlOld.split(";");this.router.navigate([a[0]])}else this.router.navigate([this.urlOld])}):this.userService.unsetUser(i=>{this.router.navigate(["/auth/login"])})},s=>{this.userService.unsetUser(),this.router.navigate(["/auth/login"])})}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(o.gz),t.Y36(o.F0),t.Y36(l.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-attempt"]],decls:7,vars:0,consts:[["color","primary",1,"center","padding-0"],[1,"bg-login"],[1,"block-spinner"],["src","./../../../../../assets/image/character/loading11.gif"],[1,"text-session"],[1,"mat-spinner"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"p",4),t._UZ(5,"mat-spinner",5),t._uU(6," Verificando sess\xe3o... "),t.qZA()()()())},dependencies:[c.Ou],styles:["*[_ngcontent-%COMP%]{text-align:center}ion-spinner[_ngcontent-%COMP%]{font-size:3em}div.bg-login[_ngcontent-%COMP%]{height:100vh;background-image:url(bg.027f9272f3deb686.svg);background-size:cover;background-position:center}.mat-spinner[_ngcontent-%COMP%]{width:25px!important;margin-right:10px;--mdc-circular-progress-active-indicator-color: white;text-shadow:-1px -1px 0px #000,-1px 1px 0px #000,1px -1px 0px #000,1px 0px 0px #000}img[_ngcontent-%COMP%]{max-width:100%;max-height:400px;filter:drop-shadow(6px 5px 4px gray) hue-rotate(334deg)}.text-session[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;color:#fff;text-transform:uppercase;align-items:center;justify-content:center;text-align:center;display:flex;margin-top:-70px;text-shadow:-1px -1px 0px #000,-1px 1px 0px #000,1px -1px 0px #000,1px 0px 0px #000}"]}),e})();var g=r(1073);const m=[{path:"",component:u}];let d=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[o.Bz.forChild(m),g.q]}),e})()}}]);