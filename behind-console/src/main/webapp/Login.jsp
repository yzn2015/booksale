<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="css/Login.css">
    <script>
        window.onload= function () {
            var s = '${hint}';
            if(s!=null||s!=""){
                alert(s);
            }
        }
    </script>
</head>
<body>
<div class="box">
    <div class="box2">
        Login
    </div>
    <div class="wapper">
        <div class="box1">
        </div>
        <div >
            图书商城后台管理系统&nbsp&nbsp
        </div>
    </div>
    <div class="div1">
        <div class="div2">
            <img src="image/1.jpg" class="jpg">
        </div>
        <div class="div2">
            <form action="Login" method="post">
                <table class="tab" cellspacing="10px">
                    <tr>
                        <td><label>用户名:</label></td>
                        <td><input type="text" name="username" id="username" class="tc"></td>
                        <td rowspan="2" colspan="2"><input type="submit" class="btn" value="登陆" onclick="return check();"></td>
                    </tr>
                    <tr>
                        <td><label>密&nbsp&nbsp&nbsp码:</label></td>
                        <td><input type="password" name="pwd" id="pwd" class="tc"></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>
<script>
    function  check() {
        var un = document.getElementById("username");
        var pwd = document.getElementById("pwd");
        if(un.value=="")
        {
            un.focus();
            alert("用户名不能为空!");
            return false;
        }
        if(pwd.value=="")
        {
            pwd.focus();
            alert("密码不能为空!");
            return false;
        }
        return true;
    }
</script>
</body>
</html>