(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{FzuZ:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J");class a{}var e=t("pMnS"),o=t("cqFS");class c{constructor(n,l){this.route=n,this.dataService=l,this.route.params.subscribe(n=>{null!=n.id&&this.dataService.getActorById(n.id).subscribe(n=>{this.actor=n,this.profilePath=this.dataService.getImageUrl(n.profile_path)})})}ngOnInit(){}}var r=t("iInd"),i=u.mb({encapsulation:0,styles:[[".navbar[_ngcontent-%COMP%]{background-color:#221f1f;height:10vh}.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]{padding-left:4rem;font-size:2rem}.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.content-container[_ngcontent-%COMP%]{background:#221f1f;min-height:100vh}.content-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding-top:3rem}.content-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:0 auto;width:60%;border:none;background:#221f1f;color:#fff}.content-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%;margin:0 auto}.content-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{text-align:center;padding:2rem}.content-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{font-size:1.6rem;margin:0 auto;text-align:left;padding:2rem 2rem 2rem 4rem;line-height:2}"]],data:{}});function b(n){return u.Eb(0,[(n()(),u.ob(0,0,null,null,5,"nav",[["class","navbar"]],null,null,null,null,null)),(n()(),u.ob(1,0,null,null,4,"div",[["class","navbar-header navbar-default"]],null,null,null,null,null)),(n()(),u.ob(2,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.ob(3,0,null,null,2,"a",[["href","/movies"]],null,null,null,null,null)),(n()(),u.ob(4,0,null,null,0,"i",[["class","fa fa-arrow-left"]],null,null,null,null,null)),(n()(),u.Db(-1,null,[" Back"])),(n()(),u.ob(6,0,null,null,8,"div",[["class","content-container"]],null,null,null,null,null)),(n()(),u.ob(7,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(n()(),u.ob(8,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(n()(),u.ob(9,0,null,null,0,"img",[["alt","Card image cap"],["class","card-img-top"]],[[8,"src",4]],null,null,null,null)),(n()(),u.ob(10,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),u.ob(11,0,null,null,1,"p",[["class","card-title"]],null,null,null,null,null)),(n()(),u.Db(12,null,["",""])),(n()(),u.ob(13,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),u.Db(14,null,["",""]))],null,function(n,l){var t=l.component;n(l,9,0,u.qb(1,"",t.profilePath,"")),n(l,12,0,t.actor.name),n(l,14,0,t.actor.biography)})}function s(n){return u.Eb(0,[(n()(),u.ob(0,0,null,null,1,"app-star",[],null,null,null,b,i)),u.nb(1,114688,null,0,c,[r.a,o.a],null,null)],function(n,l){n(l,1,0)},null)}var d=u.kb("app-star",c,s,{},{},[]),g=t("SVse");class f{}t.d(l,"StarModuleNgFactory",function(){return p});var p=u.lb(a,[],function(n){return u.vb([u.wb(512,u.j,u.Y,[[8,[e.a,d]],[3,u.j],u.w]),u.wb(4608,g.l,g.k,[u.t,[2,g.B]]),u.wb(1073742336,g.b,g.b,[]),u.wb(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),u.wb(1073742336,f,f,[]),u.wb(1073742336,a,a,[]),u.wb(1024,r.i,function(){return[[{path:":id",component:c}]]},[])])})}}]);