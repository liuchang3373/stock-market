(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(e,n,r){"use strict";r.r(n);var t=r("ofXK"),s=r("tyNb"),i=r("McNs"),o=r("fo3O"),a=r("fXoL"),l=r("3Pt+"),c=r("aceb");function b(e,n){if(1&e&&(a.Wb(0,"li",25),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function u(e,n){if(1&e&&(a.Wb(0,"nb-alert",21),a.Wb(1,"p",22),a.Wb(2,"b"),a.Cc(3,"Oh snap!"),a.Vb(),a.Vb(),a.Wb(4,"ul",23),a.Ac(5,b,2,1,"li",24),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.errors)}}function g(e,n){if(1&e&&(a.Wb(0,"li",25),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function d(e,n){if(1&e&&(a.Wb(0,"nb-alert",26),a.Wb(1,"p",22),a.Wb(2,"b"),a.Cc(3,"Hooray!"),a.Vb(),a.Vb(),a.Wb(4,"ul",23),a.Ac(5,g,2,1,"li",24),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.messages)}}function m(e,n){1&e&&(a.Wb(0,"p",28),a.Cc(1," Username is required! "),a.Vb())}function f(e,n){if(1&e&&(a.Ub(0),a.Ac(1,m,2,0,"p",27),a.Tb()),2&e){a.gc();const e=a.sc(12);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required)}}function p(e,n){1&e&&(a.Wb(0,"p",28),a.Cc(1," Password is required! "),a.Vb())}function h(e,n){if(1&e&&(a.Wb(0,"p",28),a.Cc(1),a.Vb()),2&e){const e=a.gc(2);a.Eb(1),a.Fc(" Password should contain from ",e.getConfigValue("forms.validation.password.minLength")," to ",e.getConfigValue("forms.validation.password.maxLength")," characters ")}}function V(e,n){if(1&e&&(a.Ub(0),a.Ac(1,p,2,0,"p",27),a.Ac(2,h,2,2,"p",27),a.Tb()),2&e){a.gc();const e=a.sc(21);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function C(e,n){if(1&e){const e=a.Xb();a.Wb(0,"nb-checkbox",29),a.ec("ngModelChange",(function(n){return a.uc(e),a.gc().user.rememberMe=n})),a.Cc(1,"Remember me"),a.Vb()}if(2&e){const e=a.gc();a.mc("ngModel",e.user.rememberMe)}}let W=(()=>{class e extends i.f{constructor(e,n,r,t,s){super(e,n,r,t),this.option=n,this.userService=s}}return e.\u0275fac=function(n){return new(n||e)(a.Qb(i.e),a.Qb(i.a),a.Qb(a.h),a.Qb(s.c),a.Qb(o.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["ngx-login"]],features:[a.Bb],decls:31,vars:18,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-username",1,"label"],["nbInput","","fullWidth","","name","username","id","input-username","placeholder","Username","fieldSize","large","autofocus","",3,"ngModel","status","required","ngModelChange"],["username","ngModel"],[4,"ngIf"],[1,"label-with-link"],["for","input-password",1,"label"],["routerLink","../request-password",1,"forgot-password","caption-2"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["aria-label","Register",1,"another-action"],["routerLink","../register",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],["name","rememberMe",3,"ngModel","ngModelChange"]],template:function(e,n){if(1&e&&(a.Wb(0,"h1",0),a.Cc(1,"Login"),a.Vb(),a.Wb(2,"p",1),a.Cc(3,"Hello! Log in with your email."),a.Vb(),a.Ac(4,u,6,1,"nb-alert",2),a.Ac(5,d,6,1,"nb-alert",3),a.Wb(6,"form",4,5),a.ec("ngSubmit",(function(){return n.login()})),a.Wb(8,"div",6),a.Wb(9,"label",7),a.Cc(10,"Username:"),a.Vb(),a.Wb(11,"input",8,9),a.ec("ngModelChange",(function(e){return n.user.username=e})),a.Vb(),a.Ac(13,f,2,1,"ng-container",10),a.Vb(),a.Wb(14,"div",6),a.Wb(15,"span",11),a.Wb(16,"label",12),a.Cc(17,"Password:"),a.Vb(),a.Wb(18,"a",13),a.Cc(19,"Forgot Password?"),a.Vb(),a.Vb(),a.Wb(20,"input",14,15),a.ec("ngModelChange",(function(e){return n.user.password=e})),a.Vb(),a.Ac(22,V,3,2,"ng-container",10),a.Vb(),a.Wb(23,"div",16),a.Ac(24,C,2,1,"nb-checkbox",17),a.Vb(),a.Wb(25,"button",18),a.Cc(26," Log In "),a.Vb(),a.Vb(),a.Wb(27,"section",19),a.Cc(28," Don't have an account? "),a.Wb(29,"a",20),a.Cc(30,"Register"),a.Vb(),a.Vb()),2&e){const e=a.sc(7),r=a.sc(12),t=a.sc(21);a.Eb(4),a.mc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),a.Eb(1),a.mc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),a.Eb(6),a.mc("ngModel",n.user.username)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.username.required")),a.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),a.Eb(2),a.mc("ngIf",r.invalid&&r.touched),a.Eb(7),a.mc("ngModel",n.user.password)("status",t.dirty?t.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),a.Fb("aria-invalid",!(!t.invalid||!t.touched)||null),a.Eb(2),a.mc("ngIf",t.invalid&&t.touched),a.Eb(2),a.mc("ngIf",n.rememberMe),a.Eb(1),a.Hb("btn-pulse",n.submitted),a.mc("disabled",n.submitted||!e.valid)}},directives:[t.m,l.n,l.h,l.i,c.J,l.a,l.g,l.j,l.l,s.f,l.d,l.c,c.p,c.n,t.l,c.x],styles:[""]}),e})();function v(e,n){if(1&e&&(a.Wb(0,"li",29),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function w(e,n){if(1&e&&(a.Wb(0,"nb-alert",25),a.Wb(1,"p",26),a.Wb(2,"b"),a.Cc(3,"Oh snap!"),a.Vb(),a.Vb(),a.Wb(4,"ul",27),a.Ac(5,v,2,1,"li",28),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.errors)}}function E(e,n){if(1&e&&(a.Wb(0,"li",29),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function M(e,n){if(1&e&&(a.Wb(0,"nb-alert",30),a.Wb(1,"p",26),a.Wb(2,"b"),a.Cc(3,"Hooray!"),a.Vb(),a.Vb(),a.Wb(4,"ul",27),a.Ac(5,E,2,1,"li",28),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.messages)}}function I(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Full name is required! "),a.Vb())}function x(e,n){if(1&e&&(a.Wb(0,"p",32),a.Cc(1),a.Vb()),2&e){const e=a.gc(2);a.Eb(1),a.Fc(" Full name should contains from ",e.getConfigValue("forms.validation.fullName.minLength")," to ",e.getConfigValue("forms.validation.fullName.maxLength")," characters ")}}function q(e,n){if(1&e&&(a.Ub(0),a.Ac(1,I,2,0,"p",31),a.Ac(2,x,2,2,"p",31),a.Tb()),2&e){a.gc();const e=a.sc(10);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function A(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Phone Number is required! "),a.Vb())}function P(e,n){if(1&e&&(a.Wb(0,"p",32),a.Cc(1),a.Vb()),2&e){const e=a.gc(2);a.Eb(1),a.Fc(" Phone Number should contains from ",e.getConfigValue("forms.validation.fullName.minLength")," to ",e.getConfigValue("forms.validation.fullName.maxLength")," characters ")}}function y(e,n){if(1&e&&(a.Ub(0),a.Ac(1,A,2,0,"p",31),a.Ac(2,P,2,2,"p",31),a.Tb()),2&e){a.gc();const e=a.sc(10);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function F(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Email is required! "),a.Vb())}function k(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Email should be the real one! "),a.Vb())}function L(e,n){if(1&e&&(a.Ub(0),a.Ac(1,F,2,0,"p",31),a.Ac(2,k,2,0,"p",31),a.Tb()),2&e){a.gc();const e=a.sc(22);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.pattern)}}function O(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Password is required! "),a.Vb())}function N(e,n){if(1&e&&(a.Wb(0,"p",32),a.Cc(1),a.Vb()),2&e){const e=a.gc(2);a.Eb(1),a.Fc(" Password should contains from ",e.getConfigValue("forms.validation.password.minLength")," to ",e.getConfigValue("forms.validation.password.maxLength")," characters ")}}function S(e,n){if(1&e&&(a.Ub(0),a.Ac(1,O,2,0,"p",31),a.Ac(2,N,2,2,"p",31),a.Tb()),2&e){a.gc();const e=a.sc(28);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function _(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Password confirmation is required! "),a.Vb())}function R(e,n){1&e&&(a.Wb(0,"p",32),a.Cc(1," Password does not match the confirm password. "),a.Vb())}function U(e,n){if(1&e&&(a.Ub(0),a.Ac(1,_,2,0,"p",31),a.Ac(2,R,2,0,"p",31),a.Tb()),2&e){a.gc();const e=a.sc(34),n=a.sc(28);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",n.value!=e.value&&!(null!=e.errors&&e.errors.required))}}function Q(e,n){if(1&e){const e=a.Xb();a.Wb(0,"div",33),a.Wb(1,"nb-checkbox",34),a.ec("ngModelChange",(function(n){return a.uc(e),a.gc().user.terms=n})),a.Cc(2," Agree to "),a.Wb(3,"a",35),a.Wb(4,"strong"),a.Cc(5,"Terms & Conditions"),a.Vb(),a.Vb(),a.Vb(),a.Vb()}if(2&e){const e=a.gc();a.Eb(1),a.mc("ngModel",e.user.terms)("required",e.getConfigValue("forms.register.terms"))}}function D(e,n){if(1&e&&(a.Wb(0,"a",41),a.Cc(1),a.Vb()),2&e){const e=a.gc().$implicit;a.Hb("with-icon",e.icon),a.mc("routerLink",e.link),a.Fb("target",e.target)("class",e.icon),a.Eb(1),a.Dc(e.title)}}function T(e,n){if(1&e&&(a.Wb(0,"a"),a.Cc(1),a.Vb()),2&e){const e=a.gc().$implicit;a.Hb("with-icon",e.icon),a.Fb("href",e.url,a.wc)("target",e.target)("class",e.icon),a.Eb(1),a.Dc(e.title)}}function H(e,n){if(1&e&&(a.Ub(0),a.Ac(1,D,2,6,"a",39),a.Ac(2,T,2,6,"a",40),a.Tb()),2&e){const e=n.$implicit;a.Eb(1),a.mc("ngIf",e.link),a.Eb(1),a.mc("ngIf",e.url)}}function $(e,n){if(1&e&&(a.Wb(0,"section",36),a.Cc(1," or enter with: "),a.Wb(2,"div",37),a.Ac(3,H,3,2,"ng-container",38),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(3),a.mc("ngForOf",e.socialLinks)}}let j=(()=>{class e extends i.h{constructor(e,n,r,t,s){super(e,n,r,t),this.option=n,this.userService=s}}return e.\u0275fac=function(n){return new(n||e)(a.Qb(i.e),a.Qb(i.a),a.Qb(a.h),a.Qb(s.c),a.Qb(o.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["ngx-register"]],features:[a.Bb],decls:44,vars:38,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","id","input-name","name","fullName","placeholder","Full name","autofocus","","fullWidth","",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["fullName","ngModel"],[4,"ngIf"],["nbInput","","id","input-phone","name","phoneNumber","placeholder","Phone Number","autofocus","","fullWidth","",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+..+","placeholder","Email address","fullWidth","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-password","name","password","placeholder","Password","fullWidth","",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["for","input-re-password",1,"label"],["nbInput","","type","password","id","input-re-password","name","rePass","placeholder","Confirm Password","fullWidth","",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["class","form-control-group accept-group",4,"ngIf"],["nbButton","","fullWidth","","status","success",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["aria-label","Sign in",1,"another-action"],["routerLink","../login",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"],[1,"form-control-group","accept-group"],["name","terms",3,"ngModel","required","ngModelChange"],["href","#","target","_blank"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"]],template:function(e,n){if(1&e&&(a.Wb(0,"h1",0),a.Cc(1,"Register"),a.Vb(),a.Ac(2,w,6,1,"nb-alert",1),a.Ac(3,M,6,1,"nb-alert",2),a.Wb(4,"form",3,4),a.ec("ngSubmit",(function(){return n.register()})),a.Wb(6,"div",5),a.Wb(7,"label",6),a.Cc(8,"Full name:"),a.Vb(),a.Wb(9,"input",7,8),a.ec("ngModelChange",(function(e){return n.user.fullName=e})),a.Vb(),a.Ac(11,q,3,2,"ng-container",9),a.Vb(),a.Wb(12,"div",5),a.Wb(13,"label",6),a.Cc(14,"Phone Number:"),a.Vb(),a.Wb(15,"input",10,8),a.ec("ngModelChange",(function(e){return n.user.phoneNumber=e})),a.Vb(),a.Ac(17,y,3,2,"ng-container",9),a.Vb(),a.Wb(18,"div",5),a.Wb(19,"label",11),a.Cc(20,"Email address:"),a.Vb(),a.Wb(21,"input",12,13),a.ec("ngModelChange",(function(e){return n.user.email=e})),a.Vb(),a.Ac(23,L,3,2,"ng-container",9),a.Vb(),a.Wb(24,"div",5),a.Wb(25,"label",14),a.Cc(26,"Password:"),a.Vb(),a.Wb(27,"input",15,16),a.ec("ngModelChange",(function(e){return n.user.password=e})),a.Vb(),a.Ac(29,S,3,2,"ng-container",9),a.Vb(),a.Wb(30,"div",5),a.Wb(31,"label",17),a.Cc(32,"Repeat password:"),a.Vb(),a.Wb(33,"input",18,19),a.ec("ngModelChange",(function(e){return n.user.confirmPassword=e})),a.Vb(),a.Ac(35,U,3,2,"ng-container",9),a.Vb(),a.Ac(36,Q,6,2,"div",20),a.Wb(37,"button",21),a.Cc(38," Register "),a.Vb(),a.Vb(),a.Ac(39,$,4,1,"section",22),a.Wb(40,"section",23),a.Cc(41," Already have an account? "),a.Wb(42,"a",24),a.Cc(43,"Log in"),a.Vb(),a.Vb()),2&e){const e=a.sc(5),r=a.sc(10),t=a.sc(22),s=a.sc(28),i=a.sc(34);a.Eb(2),a.mc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),a.Eb(1),a.mc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),a.Eb(6),a.mc("ngModel",n.user.fullName)("status",t.dirty?t.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.fullName.required"))("minlength",n.getConfigValue("forms.validation.fullName.minLength"))("maxlength",n.getConfigValue("forms.validation.fullName.maxLength")),a.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),a.Eb(2),a.mc("ngIf",r.invalid&&r.touched),a.Eb(4),a.mc("ngModel",n.user.phoneNumber)("status",t.dirty?t.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.fullName.required"))("minlength",n.getConfigValue("forms.validation.fullName.minLength"))("maxlength",n.getConfigValue("forms.validation.fullName.maxLength")),a.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),a.Eb(2),a.mc("ngIf",r.invalid&&r.touched),a.Eb(4),a.mc("ngModel",n.user.email)("status",t.dirty?t.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.email.required")),a.Fb("aria-invalid",!(!t.invalid||!t.touched)||null),a.Eb(2),a.mc("ngIf",t.invalid&&t.touched),a.Eb(4),a.mc("ngModel",n.user.password)("status",t.dirty?t.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),a.Fb("aria-invalid",!(!s.invalid||!s.touched)||null),a.Eb(2),a.mc("ngIf",s.invalid&&s.touched),a.Eb(4),a.mc("ngModel",n.user.confirmPassword)("status",t.dirty?t.invalid||s.value!=i.value?"danger":"success":"")("required",n.getConfigValue("forms.validation.password.required")),a.Fb("aria-invalid",!(!i.invalid||!i.touched)||null),a.Eb(2),a.mc("ngIf",i.invalid&&i.touched),a.Eb(1),a.mc("ngIf",n.getConfigValue("forms.register.terms")),a.Eb(1),a.Hb("btn-pulse",n.submitted),a.mc("disabled",n.submitted||!e.valid),a.Eb(2),a.mc("ngIf",n.socialLinks&&n.socialLinks.length>0)}},directives:[t.m,l.n,l.h,l.i,c.J,l.a,l.g,l.j,l.l,l.d,l.c,l.k,c.p,s.f,c.n,t.l,c.x],styles:["[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),e})();function z(e,n){if(1&e&&(a.Wb(0,"li",19),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function B(e,n){if(1&e&&(a.Wb(0,"nb-alert",15),a.Wb(1,"p",16),a.Wb(2,"b"),a.Cc(3,"Oh snap!"),a.Vb(),a.Vb(),a.Wb(4,"ul",17),a.Ac(5,z,2,1,"li",18),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.errors)}}function K(e,n){if(1&e&&(a.Wb(0,"li",19),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function J(e,n){if(1&e&&(a.Wb(0,"nb-alert",20),a.Wb(1,"p",16),a.Wb(2,"b"),a.Cc(3,"Hooray!"),a.Vb(),a.Vb(),a.Wb(4,"ul",17),a.Ac(5,K,2,1,"li",18),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.messages)}}function Y(e,n){1&e&&(a.Wb(0,"p",22),a.Cc(1," Email is required! "),a.Vb())}function X(e,n){1&e&&(a.Wb(0,"p",22),a.Cc(1," Email should be the real one! "),a.Vb())}function G(e,n){if(1&e&&(a.Ub(0),a.Ac(1,Y,2,0,"p",21),a.Ac(2,X,2,0,"p",21),a.Tb()),2&e){a.gc();const e=a.sc(12);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.pattern)}}let Z=(()=>{class e extends i.i{}return e.\u0275fac=function(n){return ee(n||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["ngx-request-password"]],features:[a.Bb],decls:23,vars:10,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["requestPassForm","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+\\..+","placeholder","Email address","autofocus","","fullWidth","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["nbButton","","fullWidth","","status","success",3,"disabled"],["aria-label","Sign in or sign up",1,"sign-in-or-up"],["routerLink","../login",1,"text-link"],["routerLink","../register",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){if(1&e&&(a.Wb(0,"h1",0),a.Cc(1,"Forgot Password"),a.Vb(),a.Wb(2,"p",1),a.Cc(3,"Enter your email address and we\u2019ll send a link to reset your password"),a.Vb(),a.Ac(4,B,6,1,"nb-alert",2),a.Ac(5,J,6,1,"nb-alert",3),a.Wb(6,"form",4,5),a.ec("ngSubmit",(function(){return n.requestPass()})),a.Wb(8,"div",6),a.Wb(9,"label",7),a.Cc(10,"Enter your email address:"),a.Vb(),a.Wb(11,"input",8,9),a.ec("ngModelChange",(function(e){return n.user.email=e})),a.Vb(),a.Ac(13,G,3,2,"ng-container",10),a.Vb(),a.Wb(14,"button",11),a.Cc(15," Request password "),a.Vb(),a.Vb(),a.Wb(16,"section",12),a.Wb(17,"p"),a.Wb(18,"a",13),a.Cc(19,"Back to Log In"),a.Vb(),a.Vb(),a.Wb(20,"p"),a.Wb(21,"a",14),a.Cc(22,"Register"),a.Vb(),a.Vb(),a.Vb()),2&e){const e=a.sc(7),r=a.sc(12);a.Eb(4),a.mc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),a.Eb(1),a.mc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),a.Eb(6),a.mc("ngModel",n.user.email)("status",r.dirty?r.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.email.required")),a.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),a.Eb(2),a.mc("ngIf",r.invalid&&r.touched),a.Eb(1),a.Hb("btn-pulse",n.submitted),a.mc("disabled",n.submitted||!e.valid)}},directives:[t.m,l.n,l.h,l.i,c.J,l.a,l.k,l.g,l.j,l.l,c.p,s.f,c.n,t.l],styles:["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}"]}),e})();const ee=a.Yb(Z);function ne(e,n){if(1&e&&(a.Wb(0,"li",23),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function re(e,n){if(1&e&&(a.Wb(0,"nb-alert",19),a.Wb(1,"p",20),a.Wb(2,"b"),a.Cc(3,"Oh snap!"),a.Vb(),a.Vb(),a.Wb(4,"ul",21),a.Ac(5,ne,2,1,"li",22),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.errors)}}function te(e,n){if(1&e&&(a.Wb(0,"li",23),a.Cc(1),a.Vb()),2&e){const e=n.$implicit;a.Eb(1),a.Dc(e)}}function se(e,n){if(1&e&&(a.Wb(0,"nb-alert",24),a.Wb(1,"p",20),a.Wb(2,"b"),a.Cc(3,"Hooray!"),a.Vb(),a.Vb(),a.Wb(4,"ul",21),a.Ac(5,te,2,1,"li",22),a.Vb(),a.Vb()),2&e){const e=a.gc();a.Eb(5),a.mc("ngForOf",e.messages)}}function ie(e,n){1&e&&(a.Wb(0,"p",26),a.Cc(1," Password is required! "),a.Vb())}function oe(e,n){if(1&e&&(a.Wb(0,"p",26),a.Cc(1),a.Vb()),2&e){const e=a.gc(2);a.Eb(1),a.Fc(" Password should contains from ",e.getConfigValue("forms.validation.password.minLength")," to ",e.getConfigValue("forms.validation.password.maxLength")," characters ")}}function ae(e,n){if(1&e&&(a.Ub(0),a.Ac(1,ie,2,0,"p",25),a.Ac(2,oe,2,2,"p",25),a.Tb()),2&e){a.gc();const e=a.sc(12);a.Eb(1),a.mc("ngIf",null==e.errors?null:e.errors.required),a.Eb(1),a.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function le(e,n){1&e&&(a.Wb(0,"p",26),a.Cc(1," Password confirmation is required! "),a.Vb())}function ce(e,n){1&e&&(a.Wb(0,"p",26),a.Cc(1," Password does not match the confirm password. "),a.Vb())}function be(e,n){if(1&e&&(a.Ub(0),a.Ac(1,le,2,0,"p",25),a.Ac(2,ce,2,0,"p",25),a.Tb()),2&e){a.gc();const e=a.sc(18),n=a.sc(12);a.Eb(1),a.mc("ngIf",e.invalid&&(null==e.errors?null:e.errors.required)),a.Eb(1),a.mc("ngIf",n.value!=e.value&&!(null!=e.errors&&e.errors.required))}}let ue=(()=>{class e extends i.j{}return e.\u0275fac=function(n){return ge(n||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["ngx-reset-password"]],features:[a.Bb],decls:29,vars:17,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["resetPassForm","ngForm"],[1,"form-control-group"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-password","name","password","placeholder","New Password","autofocus","","fullWidth","",1,"first",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[4,"ngIf"],[1,"form-group"],["for","input-re-password",1,"label"],["nbInput","","id","input-re-password","name","rePass","type","password","placeholder","Confirm Password","fullWidth","",1,"last",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["nbButton","","status","success","fullWidth","",3,"disabled"],["aria-label","Sign in or sign up",1,"sign-in-or-up"],["routerLink","../login",1,"text-link"],["routerLink","../register",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){if(1&e&&(a.Wb(0,"h1",0),a.Cc(1,"Change password"),a.Vb(),a.Wb(2,"p",1),a.Cc(3,"Please set a new password"),a.Vb(),a.Ac(4,re,6,1,"nb-alert",2),a.Ac(5,se,6,1,"nb-alert",3),a.Wb(6,"form",4,5),a.ec("ngSubmit",(function(){return n.resetPass()})),a.Wb(8,"div",6),a.Wb(9,"label",7),a.Cc(10,"New Password:"),a.Vb(),a.Wb(11,"input",8,9),a.ec("ngModelChange",(function(e){return n.user.password=e})),a.Vb(),a.Ac(13,ae,3,2,"ng-container",10),a.Vb(),a.Wb(14,"div",11),a.Wb(15,"label",12),a.Cc(16,"Confirm Password:"),a.Vb(),a.Wb(17,"input",13,14),a.ec("ngModelChange",(function(e){return n.user.confirmPassword=e})),a.Vb(),a.Ac(19,be,3,2,"ng-container",10),a.Vb(),a.Wb(20,"button",15),a.Cc(21," Change password "),a.Vb(),a.Vb(),a.Wb(22,"section",16),a.Wb(23,"p"),a.Wb(24,"a",17),a.Cc(25,"Back to Log In"),a.Vb(),a.Vb(),a.Wb(26,"p"),a.Wb(27,"a",18),a.Cc(28,"Register"),a.Vb(),a.Vb(),a.Vb()),2&e){const e=a.sc(7),r=a.sc(12),t=a.sc(18);a.Eb(4),a.mc("ngIf",n.showMessages.error&&(null==n.errors?null:n.errors.length)&&!n.submitted),a.Eb(1),a.mc("ngIf",n.showMessages.success&&(null==n.messages?null:n.messages.length)&&!n.submitted),a.Eb(6),a.mc("ngModel",n.user.password)("status",r.dirty?r.invalid?"danger":"success":"")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),a.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),a.Eb(2),a.mc("ngIf",r.invalid&&r.touched),a.Eb(4),a.mc("ngModel",n.user.confirmPassword)("status",t.touched?t.invalid||r.value!=t.value?"danger":"success":"")("required",n.getConfigValue("forms.validation.password.required")),a.Fb("aria-invalid",!(!t.invalid||!t.touched)||null),a.Eb(2),a.mc("ngIf",t.touched),a.Eb(1),a.Hb("btn-pulse",n.submitted),a.mc("disabled",n.submitted||!e.valid)}},directives:[t.m,l.n,l.h,l.i,c.J,l.a,l.g,l.j,l.l,l.d,l.c,c.p,s.f,c.n,t.l],styles:["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}"]}),e})();const ge=a.Yb(ue);var de=r("khYj");const me=[{path:"",component:i.b,children:[{path:"login",component:W},{path:"register",component:j},{path:"request-password",component:Z},{path:"reset-password",component:ue},{path:"role-route",component:(()=>{class e{constructor(e,n){this.router=e,this.authorizationService=n,this.role=this.authorizationService.getUserRole(),this.confirmAndactive=this.authorizationService.getConfirmedAndActive()}ngOnInit(){"1"==this.confirmAndactive?"1"==this.role?this.router.navigate(["/admin"]):"2"==this.role&&this.router.navigate(["/users"]):this.router.navigate(["/auth/confirm"],{queryParams:{message:"Your account has not activated yet, please activate your acount via E-mail"}})}}return e.\u0275fac=function(n){return new(n||e)(a.Qb(s.c),a.Qb(de.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["fsd-role-route"]],decls:8,vars:0,consts:[["id","nb-global-spinner",1,"spinner"],[1,"blob","blob-0"],[1,"blob","blob-1"],[1,"blob","blob-2"],[1,"blob","blob-3"],[1,"blob","blob-4"],[1,"blob","blob-5"]],template:function(e,n){1&e&&(a.Wb(0,"body"),a.Wb(1,"div",0),a.Rb(2,"div",1),a.Rb(3,"div",2),a.Rb(4,"div",3),a.Rb(5,"div",4),a.Rb(6,"div",5),a.Rb(7,"div",6),a.Vb(),a.Vb())},styles:["","@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinner[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1003;background: #000000;overflow:hidden}  .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;box-shadow:0 3px 3px 0 rgba(255,56,106,1);transform:translate3d(0,0,0);animation:spin 2s linear infinite}  .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after, .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:before{content:'';position:absolute;border-radius:50%}  .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:before{top:5px;left:5px;right:5px;bottom:5px;box-shadow:0 3px 3px 0 rgb(255, 228, 32);-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}  .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after{top:15px;left:15px;right:15px;bottom:15px;box-shadow:0 3px 3px 0 rgba(61, 175, 255,1);animation:spin 1.5s linear infinite}"]}),e})()},{path:"confirm",component:(()=>{class e{constructor(e,n){this.activateInfo=e}ngOnInit(){this.activateInfo.queryParams.subscribe(e=>{this.message=e.message})}}return e.\u0275fac=function(n){return new(n||e)(a.Qb(s.a),a.Qb(s.c))},e.\u0275cmp=a.Kb({type:e,selectors:[["fsd-confirm"]],decls:8,vars:1,consts:[["id","title",1,"title"],[1,"sub-title"],["aria-label","Login",1,"another-action"],["href","../auth/role-route",1,"text-link"]],template:function(e,n){1&e&&(a.Wb(0,"h1",0),a.Cc(1,"Accout Active"),a.Vb(),a.Wb(2,"p",1),a.Cc(3),a.Vb(),a.Wb(4,"section",2),a.Cc(5," Already activate account "),a.Wb(6,"a",3),a.Cc(7,"Login"),a.Vb(),a.Vb()),2&e&&(a.Eb(3),a.Dc(n.message))},styles:[""]}),e})()}]}];let fe=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(n){return new(n||e)},imports:[[s.g.forChild(me)],s.g]}),e})();var pe=r("vTDv");r.d(n,"AuthModule",(function(){return he}));let he=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(n){return new(n||e)},imports:[[t.c,pe.a,fe,c.P,c.jb,c.o,c.q,c.y,c.K,l.b,i.d]]}),e})()}}]);