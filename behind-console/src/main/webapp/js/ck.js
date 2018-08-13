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
            if (parncheck(/^[0-9a-zA-Z]{6,16}$/,obj.value) ) {
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
            if (parncheck(/^[0-9a-zA-Z]{6,16}$/,obj.value)) {
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
    else if(obj.id=="repwd"){
        if(obj.value!="") {
            var ss=$("pwd");
            if (obj.value==ss.value) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "两次密码不一致")
            }
        }
        else{
            out("out",obj.id+"_mes","确认密码不能为空");
        }
    }
    else if(obj.id=="idcard")
    {
        if(obj.value!=""){
            if (parncheck(/^[1-9][0-9]{17}$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "请输入正确的身份证号")
            }
        }
        else{
            out("out",obj.id+"_mes","身份证号不能为空")
        }
    }
    else if(obj.id=="phone"){
        if(obj.value!="") {
            if ( parncheck(/^[1][358]\d{9}$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "电话长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","电话不能为空");
        }
    }
    else if(obj.id=="email")
    {
        if(obj.value!=""){
            if (parncheck(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "邮箱长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","邮箱不能为空")
        }
    }
    else if(obj.id=="qq")
    {
        if(obj.value!=""){
            if (parncheck(/^\d{5,10}$/,obj.value)) {
                out("ac", obj.id + "_mes", "√")
            }
            else {
                out("out", obj.id + "_mes", "QQ长度不一致或不符合规范")
            }
        }
        else{
            out("out",obj.id+"_mes","QQ不能为空")
        }
    }
}
function change(obj) {
    var normal_color="#eeeeee";
    var L_color="#ff5446";
    var M_color="#f0ab4e";
    var H_color="#2dff96";
    var normal_wcolor="silver";
    var L_wcolor="white";
    var M_wcolor="white";
    var H_wcolor="white";
    var sum=0;
    if(obj.value==""||obj.value.length<6||!parncheck(/^[0-9a-zA-Z]+$/,obj.value)){
        $("L").style.background=normal_color;
        $("L").style.color=normal_wcolor;
        $("M").style.background=normal_color;
        $("M").style.color=normal_wcolor;
        $("H").style.background=normal_color;
        $("H").style.color=normal_wcolor;
    }
    else{
        if(parncheck(/[0-9]/,obj.value)) sum+=1;
        if(parncheck(/[a-z]/,obj.value)) sum+=1;
        if(parncheck(/[A-Z]/,obj.value)) sum+=1;
        switch (sum){
            case 1:M_color=H_color=normal_color;
                M_wcolor=H_wcolor=normal_wcolor;
                break;
            case 2:L_color=M_color;H_color=normal_color;
                L_wcolor=M_wcolor;H_wcolor=normal_wcolor;
                break;
            case 3:L_color=M_color=H_color;L_wcolor=M_wcolor=H_wcolor;
                break;
            default:
                L_color=M_color=H_wcolor=normal_color;
                L_wcolor=M_wcolor=H_wcolor=normal_wcolor;
        }
        $("L").style.background=L_color;
        $("L").style.color=L_wcolor;
        $("M").style.background=M_color;
        $("M").style.color=M_wcolor;
        $("H").style.background=H_color;
        $("H").style.color=H_wcolor;
    }
}
function check_sum(){

        var s1 = $("user");
        if(s1.value==""||!parncheck(/^[0-9a-zA-Z]{6,16}$/,s1.value)){
            s1.select();
            s1.focus();
            alert("用户名为空或不符合规范")
            return false;
        }
        var s2 = $("pwd");
        if(s2.value==""||!parncheck(/^[0-9a-zA-Z]{6,16}$/,s2.value)){
            s2.select();
            s2.focus();
            alert("密码为空或不符合规范")
            return false;
        }
        var s3 = $("repwd");
        if(s3.value==""||s3.value!=s2.value){
            s3.select();
            s3.focus();
            alert("两次密码不一致")
            return false;
        }
        var s5 = $("idcard");
        if(s5.value==""||!parncheck(/^[1-9][0-9]{17}$/,s5.value))
        {
            s5.select()
            s5.focus()
            alert("身份证信息错误");
            return false;
        }
        if(!changebox())
        {
            alert("爱好没选");
            return false;
        }
        var s4 = $("phone");
        if(s4.value==""||!parncheck(/^[0-9a-zA-Z]+$/,s4.value)){
            s4.select();
            s4.focus();
            alert("电话长度为空或不符合规范")
            return false;
        }
        var s6 = $("email");
        if(s6.value==""||!parncheck(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/,s6.value))
        {
            s6.select();
            s6.focus();
            alert("邮箱不符合");
            return false;
        }
        if(changeselect("major")==false){
            alert("专业必须选");
            return false;
        }
        var s7 = $("qq");
        if(s7.value==""||!parncheck(/^[1-9][0-9]{4,9}$/,s7.value))
        {
            s7.select();
            s7.focus();
            alert("QQ不符合");
            return false;
        }
        if(confirm("是否提交")) {
        }
        else return false;
}
function changebox() {
    var lis=document.getElementsByName("havior");
    var cnt=0;
    var result=false;
    for(var i=0;i<lis.length;i++)
    {
        if(lis[i].checked){
            cnt++;
        }
    }
    if(cnt==0){
        out("out","havior_mes","至少选择一项");
    }
    else{
        out("ac","havior_mes","√");
        result=true;
    }
    return result;
}
function changeselect(id) {
    var index = $(id).selectedIndex;
    var va = $(id).options[index].value;
    var result=false;
    if(va=="-1"){
        out("out",id+"_mes","这项必须选择")
    }
    else{
        out("ac",id+"_mes","√")
        result=true;
    }
    return result;
}