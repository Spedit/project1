function validate(){
    var email = document.forms["form-mail"]["formEmail"].value;
    var subject = document.forms["form-mail"]["formSubject"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (subject.length > 60) {
        alert("Subject is too long");
        return false;
    }
    else if(email.match(mailformat))
    {
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}
