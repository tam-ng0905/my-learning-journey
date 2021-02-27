<%--
  Created by IntelliJ IDEA.
  User: tamnguyen
  Date: 2/27/21
  Time: 3:49 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Testing JSP</title>
</head>
<body>
<%!
    public String hello(){
        String msg = "Hello World";
        return msg;
    }
 %>



    <h1>This is my testing</h1>
    <h2> Message: <%=hello()%></h2>
</body>
</html>
