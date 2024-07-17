import{a as h}from"../../../_chunks/chunk-C7VAP3FN.js";import{a as D}from"../../../_chunks/chunk-7235USRK.js";import{e as R,f,g as P,h as r,i as a}from"../../../_chunks/chunk-LNJVEJI5.js";import{c as o,f as n,g as p,i as l}from"../../../_chunks/chunk-THKE7DQS.js";var I=n(l(),1);var T=n(l(),1),e=n(l(),1);var y=class y extends T.TemplatedDialog{constructor(t){super(t);this.permissions=new h({element:this.byId("Permissions"),showRevoke:!1}),P.List({RoleID:this.options.roleID},x=>{this.permissions.value=x.Entities.map(m=>({PermissionKey:m}))}),this.permissions.implicitPermissions=(0,e.getRemoteData)("Administration.ImplicitPermissions")}getDialogOptions(){let t=super.getDialogOptions();return t.buttons=[{text:(0,e.localText)("Dialogs.OkButton"),click:x=>{P.Update({RoleID:this.options.roleID,Permissions:this.permissions.value.map(m=>m.PermissionKey)},m=>{this.dialogClose(),window.setTimeout(()=>(0,e.notifySuccess)((0,e.localText)("Site.RolePermissionDialog.SaveSuccess")),0)})}},{text:(0,e.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}],t.title=(0,e.format)((0,e.localText)("Site.RolePermissionDialog.DialogTitle"),this.options.title),t}getTemplate(){return'<div id="~_Permissions"></div>'}};o(y,"RolePermissionDialog");var c=y;var d=n(l(),1);var v="edit-permissions",i=class extends d.EntityDialog{constructor(){super(...arguments);this.form=new f(this.idPrefix)}getFormKey(){return f.formKey}getIdProperty(){return r.idProperty}getLocalTextPrefix(){return r.localTextPrefix}getNameProperty(){return r.nameProperty}getService(){return a.baseUrl}getToolbarButtons(){let t=super.getToolbarButtons();return t.push({title:D.Site.RolePermissionDialog.EditButton,cssClass:v,icon:"fa-lock text-green",onClick:()=>{new c({roleID:this.entity.RoleId,title:this.entity.RoleName}).dialogOpen()}}),t}updateInterface(){super.updateInterface(),this.toolbar.findButton(v).toggleClass("disabled",this.isNewOrDeleted())}};o(i,"RoleDialog"),i=p([d.Decorators.registerClass("MovieTutorial.Administration.RoleDialog")],i);var u=n(l(),1);var s=class extends u.EntityGrid{getColumnsKey(){return R.columnsKey}getDialogType(){return i}getIdProperty(){return r.idProperty}getLocalTextPrefix(){return r.localTextPrefix}getService(){return a.baseUrl}constructor(g){super(g)}getDefaultSortBy(){return[r.Fields.RoleName]}};o(s,"RoleGrid"),s=p([u.Decorators.registerClass("MovieTutorial.Administration.RoleGrid")],s);var q=o(()=>(0,I.gridPageInit)(s),"default");export{q as default};
//# sourceMappingURL=RolePage.js.map
