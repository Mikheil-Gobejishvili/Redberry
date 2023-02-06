function surname(){
    const surname = document.getElementById("right_img_surname");
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("surname_input").value);
    if((document.getElementById("surname_input").value.length >= 2) && bool){
        document.getElementById("validated_img_2").style.display = "block";
        document.getElementById("surname_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_2").style.display = "none";
        surname.innerHTML = document.getElementById("surname_input").value;
        surname.style.display = "block";
    }else{
        document.getElementById("validated_img_2").style.display = "none";
        document.getElementById("warning-sign_2").style.display = "block";
        document.getElementById("surname_input").style.border="1px solid #EF5050";
        surname.style.display = "none";
    }
}

function name_input(){
    const name = document.getElementById("right_img_name");
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("name_input").value);
    if((document.getElementById("name_input").value.length >= 2) && bool){
        document.getElementById("validated_img_1").style.display = "block";
        document.getElementById("name_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_1").style.display = "none";
        name.innerHTML = document.getElementById("name_input").value;
        name.style.display = "block";
    }else{
        name.style.display = "none";
        document.getElementById("validated_img_1").style.display = "none";
        document.getElementById("warning-sign_1").style.display = "block";
        document.getElementById("name_input").style.border="1px solid #EF5050";
    }
    if(name.innerHTML.length >= 11){
        const surname = document.getElementById("right_img_surname").style.left="305px";
    }else if(name.innerHTML.length >= 10){
        const surname = document.getElementById("right_img_surname").style.left="290px";
    }else if(name.innerHTML.length >= 9){
        const surname = document.getElementById("right_img_surname").style.left="270px";
    }else if(name.innerHTML.length >= 8){
        const surname = document.getElementById("right_img_surname").style.left="250px";
    }else if(name.innerHTML.length >= 7){
        const surname = document.getElementById("right_img_surname").style.left="230px";
    }else if(name.innerHTML.length >= 6){
        const surname = document.getElementById("right_img_surname").style.left="210px";
    }else if(name.innerHTML.length >= 5){
        const surname = document.getElementById("right_img_surname").style.left="190px";
    }else if(name.innerHTML.length >= 4){
        const surname = document.getElementById("right_img_surname").style.left="175px";
    }else if(name.innerHTML.length >= 3){
        const surname = document.getElementById("right_img_surname").style.left="155px";
    }else if(name.innerHTML.length >= 2){
        const surname = document.getElementById("right_img_surname").style.left="135px";
    }
}

function about_me(){
    const about_me = document.getElementById("about_me_paragraph");
    const onlyGeorgian = /^[ა-ჰ]+$ || \d /g;
    const bool = onlyGeorgian.test(document.getElementById("private_general_info").value);
    if(bool){
        document.getElementById("private_general_info").style.border="1px solid #98E37E";
        about_me.innerHTML = document.getElementById("private_general_info").value;
        document.getElementById('right_about_me').style.display = "block";
        about_me.style.display = "block";
    }else{
        document.getElementById("private_general_info").style.border="1px solid #EF5050";
        document.getElementById('right_about_me').style.display = "none";
        about_me.style.display = "none";
    }
    if(document.getElementById("private_general_info").value == ""){
        document.getElementById('right_about_me').style.display = "none";
        document.getElementById("private_general_info").style.border="1px solid #C8C8C8";
    }
}

function email(){
    const email = document.getElementById("right_div_email");
    const endsWidth = /@redberry.ge$/;
    const bool = endsWidth.test(document.getElementById("email_input").value);
    if((document.getElementById("email_input").value.length > 12) && bool){
        document.getElementById("validated_img_3").style.display = "block";
        document.getElementById("email_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_3").style.display = "none";
        email.innerHTML = document.getElementById("email_input").value;
        email.style.display = "block";
        document.getElementById('email_logo').style.display = "block";
    }else{
        document.getElementById("validated_img_3").style.display = "none";
        document.getElementById("warning-sign_3").style.display = "block";
        document.getElementById("email_input").style.border="1px solid #EF5050";
        email.style.display = "none";
        document.getElementById('email_logo').style.display = "none";
    }
}

function number(){
    const phone_number = document.getElementById("phone_number");
    const number_regex = /(995)(?:\W*\d){0,13}\d$/;
    const bool = number_regex.test(document.getElementById("number_input").value);
    if((document.getElementById("number_input").value.length >= 2) && bool){
        document.getElementById("validated_img_4").style.display = "block";
        document.getElementById("number_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_4").style.display = "none";
        phone_number.innerHTML = document.getElementById("number_input").value;
        phone_number.style.display = "block";
        document.getElementById('phone_logo').style.display = "block";
    }else{
        document.getElementById("validated_img_4").style.display = "none";
        document.getElementById("warning-sign_4").style.display = "block";
        document.getElementById("number_input").style.border="1px solid #EF5050";
        phone_number.style.display = "none";
        document.getElementById('phone_logo').style.display = "none";
    }
}

function validate(){
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool1 = onlyGeorgian.test(document.getElementById("surname_input").value);
    const onlyGeorgian2 = /^[ა-ჰ]+$/g;
    const bool2 = onlyGeorgian2.test(document.getElementById("name_input").value);
    const onlyGeorgian3 = /^[ა-ჰ]+$ || [0-9]/g;
    const bool3 = onlyGeorgian3.test(document.getElementById("private_general_info").value);
    const endsWidth = /@redberry.ge$/;
    const bool4 = endsWidth.test(document.getElementById("email_input").value);
    const number_regex = /(995)(?:\W*\d){0,13}\d$/;
    const bool5 = number_regex.test(document.getElementById("number_input").value);
    if(bool1 && bool2 && bool3 && bool4 && bool5){
        console.log("true");
        window.location.href="/experience.html"
    }else{
        console.log("false");
    }
}