//https://enterprise-devops.slack.com/api/users.admin.invite
//?email=g.ciocci@solidzone.com
//&token=xoxp-80008415314-80008415522-80725946912-3e47aca831
//&set_active=true

var token1 = "xoxp";
var token2 = "80008415314"
var token3 = "80008415522"
var token4 = "80886192357"
var token5 = "b45244aa59"
var apiurl = "https://enterprise-devops.slack.com/api/users.admin.invite";

function verifyEmail(){

var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (document.subscribeform.email1.value.search(emailRegEx) == -1) {
         var lbl = document.getElementById('lblresult');
         lbl.innerHTML = "Oops! Something is wrong with your email. Could you please check the spelling and try again?"
         lbl.style.color = "red";
         return false;
     }
     return true;
}

function post_email(){
    var emailv = document.subscribeform.email1.value;
    if (!verifyEmail(emailv)){
        return false;
    }

    var data = new FormData();
    data.append('email', emailv);
    data.append('token', token1+'-'+token2+'-'+token3+'-'+token4+'-'+token5);
    data.append('set_active', 'true');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiurl, false);

    xhr.onload = function () {
        // do something to response
        //document.subscribeform.email1.value = xhr.responseText;
        console.log(xhr.responseText);
    };
    xhr.send(data);

    document.subscribeform.subscribe.hidden = true;
    document.subscribeform.email1.hidden = true;
    var lbl = document.getElementById('lblresult');
    lbl.style.color = "black";
    lbl.innerHTML = "What's next? <br />You will receive the invite to join the community by email in a few minutes. <br /> If not, please contact me on gianluca.ciocci@gmail.com.<br />Thank you.";
}