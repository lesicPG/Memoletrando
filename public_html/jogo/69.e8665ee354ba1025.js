"use strict";(self.webpackChunkmemory_game=self.webpackChunkmemory_game||[]).push([[69],{8069:(w,l,n)=>{n.r(l),n.d(l,{HomeComponentModule:()=>J});var s=n(8996),f=n(5991),u=n(2528),t=n(4650),v=n(5938),C=n(5872),x=n(9177);let _=(()=>{class e extends x.b{constructor(o,a){super(o),this.url="themes"}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(t.zs3),t.LFG(s.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var M=n(8998),d=n(6895),c=n(3546),h=n(782),p=n(3683);function T(e,i){1&e&&(t.TgZ(0,"h2",16),t._uU(1,"ESCOLHA UM TEMA"),t.qZA())}function Z(e,i){if(1&e&&t._UZ(0,"img",20),2&e){const o=t.oxw().$implicit,a=t.oxw(2);t.s9C("alt",o.name),t.Q6J("src",a.url_s3+o.image.path,t.LSH)}}function O(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-grid-tile",17),t.NdJ("click",function(){const m=t.CHM(o).$implicit,g=t.oxw(2);return t.KtG(g.openModalCategory(m))}),t.TgZ(1,"mat-card",18),t.YNc(2,Z,1,2,"img",19),t.qZA()()}if(2&e){const o=i.$implicit;t.xp6(2),t.Q6J("ngIf",o.image&&o.image.path)}}function H(e,i){1&e&&(t.TgZ(0,"h3"),t._uU(1,"NENHUM TEMA PARA JOGAR"),t.qZA())}function A(e,i){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9)(2,"mat-card",10)(3,"mat-card-content",11),t.YNc(4,T,2,0,"h2",12),t.TgZ(5,"mat-grid-list",13),t.YNc(6,O,3,1,"mat-grid-tile",14),t.qZA(),t.YNc(7,H,2,0,"h3",15),t.qZA()()()()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("ngIf",o.themes.length),t.xp6(2),t.Q6J("ngForOf",o.themes),t.xp6(1),t.Q6J("ngIf",!o.themes.length)}}let y=(()=>{class e{constructor(o,a,r,m,g){this.dialog=o,this.helper_service=a,this.router=r,this.theme_service=m,this.user_service=g,this.themes=[],this.url_s3=this.user_service.url_s3,this.loading=!1}ngOnInit(){this.getThemes()}getThemes(){this.loading=!0,this.helper_service.loading(),this.theme_service.get(["categories","image"],{active:1,orderBy:"order",main_categories:!0}).then(o=>{this.helper_service.loading_dismiss(),this.loading=!1,o.error?this.helper_service.toast("danger","Alguma coisa deu errado"):this.themes=o.themes.map(a=>new u.Q(a))},o=>{this.loading=!1,this.helper_service.loading_dismiss(),this.helper_service.responseErrors(o)})}openModalCategory(o){this.dialog.open(f.N,{data:o,width:"70%",height:"90%"}).afterClosed().subscribe(r=>{r&&r.id&&this.router.navigate(["/niveis/categoria/"+r.id])})}logoff(){this.user_service.logout()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v.uw),t.Y36(C.W),t.Y36(s.F0),t.Y36(_),t.Y36(M.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:13,vars:1,consts:[[1,"bg-geral"],["color","primary",1,"color-game"],[1,"text-white"],[1,"example-spacer"],["aria-label","Sair",1,"text-white",3,"click"],[1,"container","h-100"],["class","row mt-5",4,"ngIf"],["src","./../../../../../assets/image/character/brain_question.png",1,"img-character"],[1,"row","mt-5"],[1,"col-12","p-lr-90"],["color","primary",1,"center","padding-0","pl-5","pr-5"],[1,"height-card"],["class","text-primary",4,"ngIf"],["cols","3","rowHeight","1:1"],["class","padding-top-2",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"text-primary"],[1,"padding-top-2",3,"click"],[1,"example-card"],["mat-card-image","","class","img-card",3,"src","alt",4,"ngIf"],["mat-card-image","",1,"img-card",3,"src","alt"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"mat-toolbar-row")(3,"span",2),t._uU(4,"Jogo da mem\xf3ria"),t.qZA(),t._UZ(5,"span",3)(6,"span",3),t.TgZ(7,"span",4),t.NdJ("click",function(){return a.logoff()}),t._uU(8," Sair "),t.qZA()()(),t.TgZ(9,"div",5),t.YNc(10,A,8,3,"div",6),t.qZA(),t.TgZ(11,"div"),t._UZ(12,"img",7),t.qZA()()),2&o&&(t.xp6(10),t.Q6J("ngIf",!a.loading))},dependencies:[d.sg,d.O5,c.a8,c.dn,c.G2,h.Il,h.DX,p.Ye,p.rD],styles:[".card[_ngcontent-%COMP%]{margin:50px}.center[_ngcontent-%COMP%]{margin:auto;text-align:center;background:#fff}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.full-width[_ngcontent-%COMP%]{width:100%}.padding-0[_ngcontent-%COMP%]{padding:0!important}.padding-top-2[_ngcontent-%COMP%]{padding-top:40px!important}.tittle-toolbar[_ngcontent-%COMP%]{background-color:#00d084;color:#fff;margin-bottom:30px}.example-card[_ngcontent-%COMP%]{max-width:300px;cursor:pointer}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://portal.stf.jus.br/hotsites/agenda-2030/assets/img/ods/01-pobreza.png);background-size:cover}mat-grid-tile[_ngcontent-%COMP%]{height:100%}.height-card[_ngcontent-%COMP%]{height:100%}.img-card[_ngcontent-%COMP%]{max-width:100%}.p-lr-90[_ngcontent-%COMP%]{padding:0 90px}.img-character[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:15%}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),e})();var P=n(2815),Y=n(1073);const I=[{path:"",component:y,canActivate:[n(688).a]}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[P.Y,s.Bz.forChild(I),Y.q]}),e})()}}]);