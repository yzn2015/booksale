function $(s) {
    return document.getElementById(s);
}
function  hint(s, obj) {
    var name = obj.id+"_mes";
    var temp = $(name);
    temp.className="in";
    temp.innerHTML=s;
}
function out(con,s,mes) {
    $(s).className=con;
    $(s).innerHTML=mes;
}
function parncheck(s,ss) {
    return s.test(ss);
}
function check(obj) {
    if(obj.id=="user"){
        if(obj.value!="") {
            if (parncheck(/^[0-9a-zA-Z\u4e00-\u9fa5]+$/,obj.value) ) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "用户名长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","用户名不能为空");
        }
    }
    else if(obj.id=="pwd"){
        if(obj.value!="") {
            if ( parncheck(/^[0-9a-zA-Z]+$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "密码长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","密码不能为空");
        }
    }
    else if(obj.id=="rolename"){
        if(obj.value!=""){
            if ( parncheck(/^[0-9a-zA-Z\u4e00-\u9fa5]+$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "角色名长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","角色名不能为空");
        }
    }
}

function check_sum(){
    var s1 = $("user");
    if(s1.value==""||!parncheck(/^[0-9a-zA-Z\u4e00-\u9fa5]+$/,s1.value)){
        s1.select();
        s1.focus();
        alert("用户名为空或不符合规范")
        return false;
    }
    var s2 = $("pwd");
    if(s2.value==""||!parncheck(/^[0-9a-zA-Z]+$/,s2.value)){
        s2.select();
        s2.focus();
        alert("密码为空或不符合规范")
        return false;
    }
    return confirm("是否提交");
}
function check_role() {
    var s1 = $("rolename");
    if(s1.value==""||!parncheck(/^[0-9a-zA-Z\u4e00-\u9fa5]+$/,s1.value)){
        s1.select();
        s1.focus();
        alert("角色名为空或不符合规范")
        return false;
    }
    return confirm("是否提交");
}