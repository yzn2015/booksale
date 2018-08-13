<%@ page import="com.dao.MenuDao" %>
<%@ page import="com.beans.MenuInfo" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="css/left.css">
</head>
<body>
<%
    MenuDao dao=new MenuDao();
    List<MenuInfo> menuList= dao.getMenuList((int)session.getAttribute("loginid"),0);
    System.out.println(menuList);
    request.setAttribute("menuList", menuList);
%>
<ul class="list">
    <c:forEach var="m"  items="${menuList}">
        <li class="li">
            <a  href="${m.url}">${m.menuname }</a>
            <ul class="list1">
                <c:forEach var="ma" items="${m.child }">
                    <li>
                        <a href="${ma.url }" target="${ma.target }"><img src="${ma.image}" class="jpg"><br/>${ma.menuname }</a>
                    </li>
                </c:forEach>
            </ul>
        </li>

    </c:forEach>
</ul>

</body>
</html>