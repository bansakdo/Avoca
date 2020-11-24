


$(document).ready(function() {
    var userId = request.getParameter('id');
    var isLogin;
    
    if(userId == null || userId == "" || userId == "undefined") {
        isLogin = "false";
        // alert("로그인 실패! " + userId);
    } else {
        isLogin = "true";
        // alert(userId + "님 로그인 됨");
    }
    // alert("isLogin : " + isLogin);
    if(isLogin == null || isLogin == "" || isLogin == "undefined") {
        isLogin = "false";
        // alert("로그인 실패!1 " + userId);
    } 
    var navbtnfirst = document.getElementById("navbtnfirst");
    if(isLogin == "true") {
        // alert(userId + "님 로그인 됨1");
        // navbtnfirst.value="Account";
        navfirst.textContent="Account";
    }
    $("#gotohome").click(function() {
        if(isLogin == "true") {
            location.href="index.html?id="+userId;
        } else if (isLogin == "false") {
            location.href="index.html";
        }
    });
    $("#navfirst").click(function() {
        if(isLogin == "true") {
            location.href="account.html?id="+userId;
        } else if (isLogin == "false") {
            location.href="login.html";
        }
    });
    $("#navsecond").click(function() {
        if(isLogin == "true") {
            location.href="track.html?id="+userId;
        } else if (isLogin == "false") {
            location.href="login.html";
        }
    });
    $("#menuSearch").click(function() {
        if(isLogin == "true") {
            location.href="search.html?id="+userId;
        } else if (isLogin == "false") {
            location.href="search.html";
        }
    })
    $("#menuCal").click(function() {
        // alert("isLogin : " + isLogin);
        if(isLogin == "true") {
            location.href="calculation.html?id="+userId;
        } else if (isLogin == "false") {
            location.href="calculation.html";
        }
    })

});