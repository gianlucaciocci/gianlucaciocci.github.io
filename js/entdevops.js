//https://enterprise-devops.slack.com/api/users.admin.invite
//?email=g.ciocci@solidzone.com
//&token=xoxp-80008415314-80008415522-80725946912-3e47aca831
//&set_active=true

var tokenv = "xoxp-80008415314-80008415522-80725946912-3e47aca831";
var apiurl = "https://enterprise-devops.slack.com/api/users.admin.invite";

function verifyEmail(){

var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (document.subscribeform.email1.value.search(emailRegEx) == -1) {
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
    data.append('token', tokenv);
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
    document.getElementById('lblresult').innerHTML = "What's next? <br /You will receive the invite to join the community by email in a few minutes. <br /> If not, please contact me on gianluca.ciocci@gmail.com.<br />Thank you.";
}