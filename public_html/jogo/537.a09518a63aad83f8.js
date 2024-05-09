"use strict";(self.webpackChunkmemory_game=self.webpackChunkmemory_game||[]).push([[537],{6541:(f,d,e)=>{e.d(d,{w:()=>n});var t=e(4650),c=e(5938);let n=(()=>{class i{constructor(r,s){this.dialogRef=r,this.data=s,this.closeModalEvent=new t.vpe,this.title="",this.description="",this.image=""}ngOnInit(){}closeModal(){this.dialogRef.close(),this.closeModalEvent.emit()}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(c.so),t.Y36(c.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-alert"]],outputs:{closeModalEvent:"closeModalEvent"},decls:12,vars:3,consts:[[1,"modal-overlay"],[1,"modal-content"],[1,"content-wrapper"],[1,"result-info"],[1,"text-result"],[1,"image-container"],["alt","Imagem",2,"width","200px",3,"src"],[1,"close-button",3,"click"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"img",6),t.qZA()(),t.TgZ(10,"button",7),t.NdJ("click",function(){return s.closeModal()}),t._uU(11,"Continuar"),t.qZA()()()),2&r&&(t.xp6(5),t.Oqu(s.data.title),t.xp6(2),t.Oqu(s.data.description),t.xp6(2),t.s9C("src",s.data.image,t.LSH))},styles:[".modal-overlay[_ngcontent-%COMP%]{z-index:999;position:fixed;inset:0;background-color:#00000080;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{z-index:999;background-color:#fff;padding:20px;text-align:center;max-width:500px;border-radius:8px;box-shadow:0 2px 4px #0003}.content-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.result-info[_ngcontent-%COMP%]{text-align:center;margin-right:20px}.stars[_ngcontent-%COMP%]{margin-bottom:10px}.star[_ngcontent-%COMP%]{display:inline-block;width:30px;height:30px;background-color:gold;border-radius:50%;margin-right:5px}.image-container[_ngcontent-%COMP%]{text-align:left}.close-button[_ngcontent-%COMP%]{padding:10px 20px;color:#fff;font-size:20px;font-weight:800;border:none;cursor:pointer;background-color:#6c76d4}.text-result[_ngcontent-%COMP%]{font-size:30px}"]}),i})()},4081:(f,d,e)=>{e.r(d),e.d(d,{EndGameModule:()=>x});var t=e(8996),c=e(5861),n=e(4650);let i=(()=>{class o{constructor(a){this.router=a}ngOnInit(){this.playSoundsEffects()}playSoundsEffects(){var a=this;return(0,c.Z)(function*(){yield a.playSound("efects","claps"),yield new Promise(l=>setTimeout(l,5e3)),yield a.playSound("voices/positive","parabens")})()}playSound(a,l){return(0,c.Z)(function*(){let m=new Audio;m.src=`assets/audio/${a}/${l.toLowerCase()}.mp3`,m.load(),yield m.play()})()}goToHome(){this.router.navigate(["game"])}}return o.\u0275fac=function(a){return new(a||o)(n.Y36(t.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-end-game"]],decls:13,vars:0,consts:[[1,"container"],[1,"background-image"],[1,"content"],[1,"frame"],[1,"small-images"],["src","../../../assets/image/character/brain_nice.png","alt","",1,"char-1",2,"width","250px"],["src","../../../assets/image/character/brain_graduate.png","alt","",1,"char-2",2,"width","300px"],["src","../../../assets/image/character/brain_positive.png","alt","",1,"char-3",2,"width","300px"],["src","../../../assets/image/character/brain_ideia.png","alt","",1,"char-4",2,"width","250px"],[1,"end-game-button",3,"click"]],template:function(a,l){1&a&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.TgZ(2,"div",2)(3,"div",3)(4,"h1"),n._uU(5,"Fim de jogo"),n.qZA()(),n.TgZ(6,"div",4),n._UZ(7,"img",5)(8,"img",6)(9,"img",7)(10,"img",8),n.TgZ(11,"button",9),n.NdJ("click",function(){return l.goToHome()}),n._uU(12,"Finalizar"),n.qZA()()()())},styles:[".container[_ngcontent-%COMP%]{width:100vw;height:100vh;overflow:hidden}.background-image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(school_class.345a2b651ec1bc1d.png);background-size:cover;background-position:center;z-index:-1}.content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.frame[_ngcontent-%COMP%]{width:595px;height:250px;margin-top:-55px;margin-left:42px;display:flex;justify-content:center;align-items:center}.frame[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:60px;color:#000;text-align:center;text-transform:uppercase;letter-spacing:5px;text-shadow:3px 3px 3px rgba(0,0,0,.5)}.small-images[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px}.small-image[_ngcontent-%COMP%]{width:100px;height:100px;background-color:#fff;border:1px solid black}.char-1[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:100px}.char-2[_ngcontent-%COMP%]{position:absolute;bottom:0;left:550px}.char-3[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50px;transform:scaleX(-1);transform-origin:center}.char-4[_ngcontent-%COMP%]{position:absolute;bottom:300px;left:100px}.end-game-button[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px;width:500px;height:70px;background-color:#6c76d4;border:1px solid #fff;border-radius:25px;color:#fff;font-size:30px}"]}),o})();var p=e(2815),r=e(1073),s=e(7185),u=e(7570);const h=[{path:"",component:i}];let x=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[i],imports:[p.Y,t.Bz.forChild(h),r.q,s.Rh,u.n]}),o})()}}]);