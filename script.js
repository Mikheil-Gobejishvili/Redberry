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
        sessionStorage.setItem("surname",document.getElementById("surname_input").value);
        localStorage.setItem("surname",document.getElementById("surname_input").value);
    }else{
        document.getElementById("validated_img_2").style.display = "none";
        document.getElementById("warning-sign_2").style.display = "block";
        document.getElementById("surname_input").style.border="1px solid #EF5050";
        surname.style.display = "none";
        localStorage.setItem("surname",document.getElementById("surname_input").value);
    }
}

function check_length() {
    const name = document.getElementById("right_img_name");
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

function name_input() {
    const name = document.getElementById("right_img_name");
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool = onlyGeorgian.test(document.getElementById("name_input").value);
    if((document.getElementById("name_input").value.length >= 2) && bool){
        document.getElementById("validated_img_1").style.display = "block";
        document.getElementById("name_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_1").style.display = "none";
        name.innerHTML = document.getElementById("name_input").value;
        name.style.display = "block";
        sessionStorage.setItem("name",document.getElementById("name_input").value);
        localStorage.setItem("name",document.getElementById("name_input").value);
    }else{
        name.style.display = "none";
        document.getElementById("validated_img_1").style.display = "none";
        document.getElementById("warning-sign_1").style.display = "block";
        document.getElementById("name_input").style.border="1px solid #EF5050";
        localStorage.setItem("name",document.getElementById("name_input").value);
    }
    check_length();
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
        sessionStorage.setItem("about_me",document.getElementById("private_general_info").value);
        localStorage.setItem("about_me",document.getElementById("private_general_info").value);
    }else{
        document.getElementById("private_general_info").style.border="1px solid #EF5050";
        document.getElementById('right_about_me').style.display = "none";
        about_me.style.display = "none";
        localStorage.setItem("about_me",document.getElementById("private_general_info").value);
    }
    if(document.getElementById("private_general_info").value == ""){
        document.getElementById('right_about_me').style.display = "none";
        document.getElementById("private_general_info").style.border="1px solid #C8C8C8";
    }
}

function email(){
    const email = document.getElementById("right_div_email");
    const endsWidth = /^[a-zA-Z0-9.]+@redberry.ge$/;
    const bool = endsWidth.test(document.getElementById("email_input").value);
    if((document.getElementById("email_input").value.length > 12) && bool){
        document.getElementById("validated_img_3").style.display = "block";
        document.getElementById("email_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_3").style.display = "none";
        email.innerHTML = document.getElementById("email_input").value;
        email.style.display = "block";
        document.getElementById('email_logo').style.display = "block";
        sessionStorage.setItem("email",document.getElementById("email_input").value);
        localStorage.setItem("email",document.getElementById("email_input").value);
    }else{
        document.getElementById("validated_img_3").style.display = "none";
        document.getElementById("warning-sign_3").style.display = "block";
        document.getElementById("email_input").style.border="1px solid #EF5050";
        email.style.display = "none";
        document.getElementById('email_logo').style.display = "none";
        localStorage.setItem("email",document.getElementById("email_input").value);
    }
}

function number(){
    const phone_number = document.getElementById("phone_number");
    const number_regex = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/ ;
    const bool = number_regex.test(document.getElementById("number_input").value);
    if((document.getElementById("number_input").value.length >= 2) && bool){
        document.getElementById("validated_img_4").style.display = "block";
        document.getElementById("number_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_4").style.display = "none";
        phone_number.innerHTML = document.getElementById("number_input").value;
        phone_number.style.display = "block";
        document.getElementById('phone_logo').style.display = "block";
        sessionStorage.setItem("number",document.getElementById("number_input").value);
        localStorage.setItem("number",document.getElementById("number_input").value);
    }else{
        document.getElementById("validated_img_4").style.display = "none";
        document.getElementById("warning-sign_4").style.display = "block";
        document.getElementById("number_input").style.border="1px solid #EF5050";
        phone_number.style.display = "none";
        document.getElementById('phone_logo').style.display = "none";
        localStorage.setItem("number",document.getElementById("number_input").value);
    }
}

function validate(){
    const profile = document.getElementById("right_img");
    const onlyGeorgian = /^[ა-ჰ]+$/g;
    const bool1 = onlyGeorgian.test(document.getElementById("surname_input").value);
    const onlyGeorgian2 = /^[ა-ჰ]+$/g;
    const bool2 = onlyGeorgian2.test(document.getElementById("name_input").value);
    const onlyGeorgian3 = /^[ა-ჰ]+$ || [0-9]/g;
    const bool3 = onlyGeorgian3.test(document.getElementById("private_general_info").value);
    const endsWidth = /^[a-zA-Z0-9.]+@redberry.ge$/;
    const bool4 = endsWidth.test(document.getElementById("email_input").value);
    const number_regex = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
    const bool5 = number_regex.test(document.getElementById("number_input").value);
    if(bool1 && bool2 && bool3 && bool4 && bool5 && profile.style.content != "url(\"null\")" && profile.style.content != undefined){
        console.log("true");
        window.location.href="/experience.html";
        localStorage.removeItem("name");
        localStorage.removeItem("surname");
        localStorage.removeItem("about_me");
        localStorage.removeItem("email");
        localStorage.removeItem("number");
        localStorage.removeItem("url1");
    }else{
        console.log("false");
    }
}

function Experience() {
    const name = document.getElementById("right_img_name");
    name.innerHTML = sessionStorage.getItem("name");
    const surname = document.getElementById("right_img_surname");
    surname.innerHTML = sessionStorage.getItem("surname");
    const about_me = document.getElementById("about_me_paragraph");
    about_me.innerHTML = sessionStorage.getItem("about_me");
    const email = document.getElementById("right_div_email");
    email.innerHTML = sessionStorage.getItem("email");
    const phone_number = document.getElementById("phone_number");
    phone_number.innerHTML = sessionStorage.getItem("number");
    const Position = document.getElementById("right_experience_header");
    document.getElementById("position_input").value = localStorage.getItem("position_input");
    Position.innerHTML = localStorage.getItem("position_input") + ", ";
    Position.style.display = "inline";
    const Employer = document.getElementById("right_experience_header_2");
    document.getElementById("employer_input").value = localStorage.getItem("employer_input");
    Employer.innerHTML = localStorage.getItem("employer_input");
    Employer.style.display = "inline";
    const Beginning = document.getElementById("right_paragraph");
    document.getElementById("beginning_input").value = localStorage.getItem("beginning_input");
    Beginning.innerHTML = localStorage.getItem("beginning_input") + " - ";
    Beginning.style.display = "inline";
    const End = document.getElementById("right_paragraph_3");
    document.getElementById("end_input").value = localStorage.getItem("end_input");
    End.innerHTML = localStorage.getItem("end_input");
    End.style.display = "inline";
    const textarea = document.getElementById("right_paragraph_2");
    document.getElementById("description_textArea").value = localStorage.getItem("description_textArea");
    textarea.innerHTML = localStorage.getItem("description_textArea");
    textarea.style.display = "block";
    document.getElementById('phone_logo').style.display = "block";
    document.getElementById('email_logo').style.display = "block";
    document.getElementById('right_about_me').style.display = "block";
    const right_img = document.getElementById("right_img");
    right_img.style.backgroundImage = sessionStorage.getItem("url");
    const recentImageUrl = sessionStorage.getItem("url1");
    if(recentImageUrl) {
        document.getElementById("right_img").setAttribute("src",recentImageUrl);
    }
    const count = localStorage.getItem("count");
    for(let i = 0; i < count; i++){
        if(localStorage.getItem("employer_input" + (i + 1)) != null && localStorage.getItem("employer_input" + (i + 1)) != ""){
            document.getElementById("employer_input" + (i + 1)).value = localStorage.getItem("employer_input" + (i + 1));
            employer();
        }
        if(localStorage.getItem("position_input" + (i + 1)) != null && localStorage.getItem("position_input" + (i + 1)) != ""){
            document.getElementById("position_input" + (i + 1)).value = localStorage.getItem("position_input" + (i + 1));
            position();
        }
        if(localStorage.getItem("beginning_input" + (i + 1)) != null && localStorage.getItem("beginning_input" + (i + 1)) != ""){
            document.getElementById("beginning_input" + (i + 1)).value = localStorage.getItem("beginning_input" + (i + 1));
            beginning();
        }
        if(localStorage.getItem("end_input" + (i + 1)) != null && localStorage.getItem("end_input" + (i + 1)) != ""){
            document.getElementById("end_input" + (i + 1)).value = localStorage.getItem("end_input" + (i + 1));
            end();
        }
        if(localStorage.getItem("description_textArea" + (i + 1)) != null && localStorage.getItem("description_textArea" + (i + 1)) != ""){
            document.getElementById("description_textArea" + (i + 1)).value = localStorage.getItem("description_textArea" + (i + 1));
            position_description();
        }
    }   
    employer();
    position();
    beginning();
    end();
    position_description();
    check_length();
}

function Education() {
    const name = document.getElementById("right_img_name");
    name.innerHTML = sessionStorage.getItem("name");
    const surname = document.getElementById("right_img_surname");
    surname.innerHTML = sessionStorage.getItem("surname");
    const about_me = document.getElementById("about_me_paragraph");
    about_me.innerHTML = sessionStorage.getItem("about_me");
    document.getElementById("right_experience_title").style.display = "block";
    const email = document.getElementById("right_div_email");
    email.innerHTML = sessionStorage.getItem("email");
    const phone_number = document.getElementById("phone_number");
    phone_number.innerHTML = sessionStorage.getItem("number");
    const Position = document.getElementById("right_experience_header");
    Position.innerHTML = localStorage.getItem("position_input") + ", ";
    Position.style.display = "inline";
    const Employer = document.getElementById("right_experience_header_2");
    Employer.innerHTML = localStorage.getItem("employer_input");
    Employer.style.display = "inline";
    const Beginning = document.getElementById("right_paragraph");
    Beginning.innerHTML = localStorage.getItem("beginning_input") + " - ";
    Beginning.style.display = "inline";
    const End = document.getElementById("right_paragraph_3");
    End.innerHTML = localStorage.getItem("end_input");
    End.style.display = "inline";
    const textarea = document.getElementById("right_paragraph_2");
    textarea.innerHTML = localStorage.getItem("description_textArea");
    textarea.style.display = "block";
    document.getElementById('phone_logo').style.display = "block";
    document.getElementById('email_logo').style.display = "block";
    document.getElementById('right_about_me').style.display = "block";
    const right_img = document.getElementById("right_img");
    right_img.style.backgroundImage = sessionStorage.getItem("url");
    const recentImageUrl = sessionStorage.getItem("url1");
    if(recentImageUrl) {
        document.getElementById("right_img").setAttribute("src",recentImageUrl);
    }
    const count = parseInt(localStorage.getItem("count"));
    for(let i = 0; i < count; i++) {
        const right_line = document.createElement("div");
        const right_experience_title = document.createElement("h1");
        const inline_div = document.createElement("div");
        const inline_div_2 = document.createElement("div");
        const right_experience_header = document.createElement("h1");
        const right_experience_header_2 = document.createElement("h1");
        const right_paragraph = document.createElement("p");
        const right_paragraph_3 = document.createElement("p");
        const right_paragraph_2 = document.createElement("p");

        right_line.id = "right_line_1";
        right_line.style.top = "549px";
        inline_div.id = "inline_div_"+(i + 1);
        inline_div.className = "inline-div-3";
        inline_div.style.top = "610px";
        inline_div_2.id = "inline-div"+(i + 1);
        inline_div_2.className = "inline-div_4";
        inline_div_2.style.top = "637px";
        right_experience_title.id = "right_experience_title_" + (i + 1);
        right_experience_title.className = "right_experience_title";
        right_experience_title.innerHTML = "გამოცდილება";
        right_experience_title.style.left = "0px";
        right_experience_title.style.top = "0px";
        right_experience_title.style.display = "block";
        right_experience_header.id = "right_experience_header_1_" + (i + 1);
        right_experience_header.innerHTML = sessionStorage.getItem("position_input" + (i + 1)) + ", ";
        right_experience_header.className = "right_experience_header";
        right_experience_header.style.display = "inline";
        right_experience_header.style.top = "61px";
        right_experience_header.style.left = "0px";
        right_paragraph.id = "right_paragraph" + (i + 1);
        right_paragraph.innerHTML = sessionStorage.getItem("beginning_input" + (i + 1)) + " - ";
        right_paragraph.className = "right_paragraph";
        right_paragraph.style.display = "inline";
        right_paragraph_3.id = "right_paragraph_3_" + (i + 1);
        right_paragraph_3.className = "right_paragraph_3";
        right_paragraph_3.innerHTML = sessionStorage.getItem("end_input" + (i + 1));
        right_paragraph_3.style.display = "inline";
        right_paragraph_2.id = "right_paragraph_2_" + (i + 1);
        right_paragraph_2.innerHTML = sessionStorage.getItem("description_textArea" + (i + 1));
        right_paragraph_2.className = "right_paragraph_2";
        right_paragraph_2.style.top = "672px";
        right_experience_header_2.id = "right_experience_header_2_"+ (i + 1);
        right_experience_header_2.innerHTML = sessionStorage.getItem("employer_input" + (i + 1));
        right_experience_header_2.className = "right_experience_header_2";
        right_experience_header_2.style.display = "inline";
        right_experience_header_2.style.top = "61px";
        right_experience_header_2.style.left = "40px";
            document.getElementById("right_div").appendChild(right_line);
            document.getElementById("right_div").appendChild(inline_div);
            document.getElementById("right_div").appendChild(inline_div_2);
            document.getElementById("inline-div"+(i + 1)).appendChild(right_paragraph);
            document.getElementById("inline-div"+(i + 1)).appendChild(right_paragraph_3);
            document.getElementById("right_div").appendChild(right_paragraph_2);
            document.getElementById("right_line_1").appendChild(right_experience_title);
            document.getElementById("inline_div_"+(i + 1)).appendChild(right_experience_header);
            document.getElementById("inline_div_"+(i + 1)).appendChild(right_experience_header_2);
            right_line.style.top = right_line.offsetTop + ((208) * (i)) + 'px';
            inline_div.style.top = inline_div.offsetTop + ((208) * (i)) + 'px';
            inline_div_2.style.top = inline_div_2.offsetTop + ((208) * (i)) + 'px';
            right_paragraph_2.style.top = right_paragraph_2.offsetTop + ((208) * (i)) + 'px';
            document.getElementById("right-education").style.top = "588px";
            document.getElementById("right-education").style.top = document.getElementById("right_line_2").offsetTop + 208 + 24 + 'px';
            document.getElementById("right_line_2").style.top = document.getElementById("right_line_2").offsetTop + (208) + 'px';
            document.getElementById("education_header_2").style.top = document.getElementById("right_line_2").offsetTop+ (208) + 'px';
            document.getElementById("education_about_me").style.top = document.getElementById("right_line_2").offsetTop + 61 + 27 + 35 + 'px';
            document.getElementById("inline-div_3").style.top = document.getElementById("right_line_2").offsetTop + 61 + 'px';;
            document.getElementById("education_right_paragraph").style.top = document.getElementById("right_line_2").offsetTop + 61 + 27 + 'px';
            console.log(document.getElementById("education_right_paragraph").style.top);
            if(i == 0){
                right_experience_title.style.top = right_experience_title.offsetTop + (24) + 'px';
            }else{
                right_experience_title.style.top = right_experience_title.offsetTop + ((208) * (i)) + 24 + 'px';
            }
            if(i >= 1){
                const round_logo = document.getElementById("round_logo");
                const right_div = document.getElementById("right_div");
                round_logo.style.top = round_logo.offsetTop + (208) + 'px';
                right_div.style.height = right_div.offsetHeight + (208) + 'px';
            }
        }
        
    check_length();
}

function private_info() {
    document.getElementById("name_input").value = localStorage.getItem("name");
    console.log(localStorage.getItem("name"));
    document.getElementById("surname_input").value = localStorage.getItem("surname");
    document.getElementById("private_general_info").value = localStorage.getItem("about_me");
    document.getElementById("email_input").value = localStorage.getItem("email");
    document.getElementById("number_input").value = localStorage.getItem("number");
    const right_img = document.getElementById("right_img");
    right_img.style.content = "url("+localStorage.getItem("url1")+")";
    if(localStorage.getItem("name") != "" && localStorage.getItem("name") != null ){
        name_input();
    }
    if(localStorage.getItem("surname") != "" && localStorage.getItem("surname") != null){
        surname();
    }
    if(localStorage.getItem("about_me") != "" && localStorage.getItem("about_me") != null){
        about_me();
    }
    if(localStorage.getItem("email") != "" && localStorage.getItem("email") != null){
        email();
    }
    if(localStorage.getItem("number") != "" && localStorage.getItem("number") != null){
        number();
    }
}

function position() {
    const Position = document.getElementById("right_experience_header");
    const count = localStorage.getItem("count");
    for(let i = 0; i < count; i++){
        if(document.getElementById("position_input"+(i + 1)).value.length >= 2){
            document.getElementById("validated_img"+(i + 1)).style.display = "block";
            document.getElementById("position_input"+(i + 1)).style.border="1px solid #98E37E";
            document.getElementById("warning-sign"+(i + 1)).style.display = "none";
            sessionStorage.setItem("position_input" + (i + 1),document.getElementById("position_input" + (i + 1)).value);
            document.getElementById("right_experience_header_1_" + (i + 1)).innerHTML = localStorage.getItem("position_input" + (i + 1)) + ", ";
            const experience = document.getElementById("right_experience_title_" + (i + 1));
            experience.style.display = "block";
            Position.innerHTML = document.getElementById("position_input").value + ",";
            Position.style.display = "inline";
            localStorage.setItem("position_input" + (i + 1),document.getElementById("position_input" + (i + 1)).value);
        }else{
            Position.style.display = "none";
            document.getElementById("right_experience_header_1_" + (i + 1)).innerHTML = localStorage.getItem("position_input" + (i + 1));
            document.getElementById("validated_img"+(i + 1)).style.display = "none";
            document.getElementById("warning-sign"+(i + 1)).style.display = "block";
            document.getElementById("position_input"+(i + 1)).style.border="1px solid #EF5050";
            if(document.getElementById("position_input"+(i + 1)).value == ""){
                document.getElementById("position_input"+(i + 1)).style.border="1px solid #BCBCBC";
                document.getElementById("warning-sign"+(i + 1)).style.display = "none";
            }else {
                localStorage.setItem("position_input" + (i + 1),document.getElementById("position_input" + (i + 1)).value);
            }
        }
    }
    if(document.getElementById("position_input").value.length >= 2){
        document.getElementById("validated_img_5").style.display = "block";
        document.getElementById("right_experience_title").style.display = "block";
        document.getElementById("position_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_5").style.display = "none";
        Position.innerHTML = document.getElementById("position_input").value + ",";
        Position.style.display = "inline";
        localStorage.setItem("position_input",document.getElementById("position_input").value);
        sessionStorage.setItem("position_input",document.getElementById("position_input").value);
    }else{
        document.getElementById("right_experience_title").style.display = "none";
        Position.style.display = "none";
        localStorage.setItem("position_input",document.getElementById("position_input").value);
        document.getElementById("validated_img_5").style.display = "none";
        document.getElementById("warning-sign_5").style.display = "block";
        document.getElementById("position_input").style.border="1px solid #EF5050";
        if(document.getElementById("position_input").value == ""){
            document.getElementById("position_input").style.border="1px solid #BCBCBC";
            document.getElementById("warning-sign_5").style.display = "none";
        }
    }
}

function employer() {
    const employer = document.getElementById("right_experience_header_2");
    const count = localStorage.getItem("count");
    for(let i = 0; i < count; i++){
        if(document.getElementById("employer_input" + (i + 1)).value.length >= 2){
            document.getElementById("validated_img_1_"+(i + 1)).style.display = "block";
            document.getElementById("employer_input" + (i + 1)).style.border="1px solid #98E37E";
            document.getElementById("warning-1-sign" + (i + 1)).style.display = "none";
            sessionStorage.setItem("employer_input" + (i + 1),document.getElementById("employer_input" + (i + 1)).value);
            document.getElementById("right_experience_header_2_" + (i + 1)).innerHTML = localStorage.getItem("employer_input" + (i + 1));
            const experience = document.getElementById("right_experience_title_" + (i + 1));
            experience.style.display = "block";
            employer.innerHTML = document.getElementById("employer_input" + (i + 1)).value;
            employer.style.display = "inline";
            localStorage.setItem("employer_input" + (i + 1),document.getElementById("employer_input" + (i + 1)).value);
        }else{
            employer.style.display = "none";
            document.getElementById("right_experience_header_2_" + (i + 1)).innerHTML = localStorage.getItem("employer_input" + (i + 1));
            document.getElementById("validated_img_1_"+(i + 1)).style.display = "none";
            document.getElementById("warning-1-sign" + (i + 1)).style.display = "block";
            document.getElementById("employer_input" + (i + 1)).style.border="1px solid #EF5050";
            if(document.getElementById("employer_input"+(i + 1)).value == ""){
                document.getElementById("employer_input"+(i + 1)).style.border="1px solid #BCBCBC";
                document.getElementById("warning-1-sign"+(i + 1)).style.display = "none";
            }else {
                localStorage.setItem("employer_input" + (i + 1),document.getElementById("employer_input" + (i + 1)).value);
            }
        }
    }
    if(document.getElementById("employer_input").value.length >= 2){
        document.getElementById("validated_img_6").style.display = "block";
        document.getElementById("right_experience_title").style.display = "block";
        document.getElementById("employer_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_6").style.display = "none";
        employer.innerHTML = document.getElementById("employer_input").value;
        employer.style.display = "inline";
        sessionStorage.setItem("employer_input",document.getElementById("employer_input").value);
        localStorage.setItem("employer_input",document.getElementById("employer_input").value);
    }else{
        employer.style.display = "none";
        localStorage.setItem("employer_input",document.getElementById("employer_input").value);
        document.getElementById("validated_img_6").style.display = "none";
        document.getElementById("warning-sign_6").style.display = "block";
        document.getElementById("employer_input").style.border="1px solid #EF5050";
        if(document.getElementById("employer_input").value == ""){
            document.getElementById("employer_input").style.border="1px solid #BCBCBC";
            document.getElementById("warning-sign_6").style.display = "none";
        }
    }
}

function beginning() {
    const beginning = document.getElementById("right_paragraph");
    const count = localStorage.getItem("count");
    for (let i = 0; i < count; i++) {
        if(document.getElementById("beginning_input" + (i + 1)).value){
            document.getElementById("beginning_input" + (i + 1)).style.border="1px solid #98E37E";
            beginning.innerHTML = document.getElementById("beginning_input" + (i + 1)).value + " - ";
            beginning.style.display = "inline";
            localStorage.setItem("beginning_input" + (i + 1),document.getElementById("beginning_input" + (i + 1)).value);
            sessionStorage.setItem("beginning_input" + (i + 1),document.getElementById("beginning_input" + (i + 1)).value);
            if(document.getElementById("beginning_input" + (i + 1)).value != ""){
                document.getElementById("right_paragraph" + (i + 1)).innerHTML = localStorage.getItem("beginning_input" + (i + 1)) + " - ";
            }
        }else{
            beginning.style.display = "none";
            if(document.getElementById("beginning_input" + (i + 1)).value != ""){
                document.getElementById("right_paragraph" + (i + 1)).innerHTML = localStorage.getItem("beginning_input" + (i + 1)) + " - ";
            }
            document.getElementById("beginning_input" + (i + 1)).style.border="1px solid #EF5050";
            if(document.getElementById("beginning_input"+(i + 1)).value == ""){
                document.getElementById("beginning_input"+(i + 1)).style.border="1px solid #BCBCBC";
            }else {
                localStorage.setItem("beginning_input" + (i + 1),document.getElementById("beginning_input" + (i + 1)).value);
            }
        }
    }
    if(document.getElementById("beginning_input").value){
        document.getElementById("beginning_input").style.border="1px solid #98E37E";
        beginning.innerHTML = document.getElementById("beginning_input").value + " - ";
        localStorage.setItem("beginning_input",document.getElementById("beginning_input").value);
        sessionStorage.setItem("beginning_input",document.getElementById("beginning_input").value);
        beginning.style.display = "inline";
    }else{
        beginning.style.display = "none";
        document.getElementById("beginning_input").style.border="1px solid #EF5050";
        if(document.getElementById("beginning_input").value == ""){
            document.getElementById("beginning_input").style.border="1px solid #BCBCBC";
        }
    }
}

function end() {
    const beginning = document.getElementById("right_paragraph_3");
    const count = localStorage.getItem("count");
    for (let i = 0; i < count; i++) {
        if(document.getElementById("end_input" + (i + 1)).value){
            beginning.innerHTML = document.getElementById("end_input" + (i + 1)).value;
            document.getElementById("end_input" + (i + 1)).style.border="1px solid #98E37E";
            beginning.style.display = "inline";
            localStorage.setItem("end_input" + (i + 1),document.getElementById("end_input" + (i + 1)).value);
            sessionStorage.setItem("end_input" + (i + 1),document.getElementById("end_input" + (i + 1)).value);
            document.getElementById("right_paragraph_3_" + (i + 1)).innerHTML = localStorage.getItem("end_input" + (i + 1));
        }else{
            beginning.style.display = "none";
            document.getElementById("right_paragraph_3_" + (i + 1)).innerHTML = localStorage.getItem("end_input" + (i + 1));
            document.getElementById("end_input" + (i + 1)).style.border="1px solid #EF5050";
            if(document.getElementById("end_input"+(i + 1)).value == ""){
                document.getElementById("end_input"+(i + 1)).style.border="1px solid #BCBCBC";
            }else {
                localStorage.setItem("end_input" + (i + 1),document.getElementById("end_input" + (i + 1)).value);
            }
        }
    }
    if(document.getElementById("end_input").value){
        beginning.innerHTML = document.getElementById("end_input").value;
        document.getElementById("end_input").style.border="1px solid #98E37E";
        localStorage.setItem("end_input",document.getElementById("end_input").value);
        sessionStorage.setItem("end_input",document.getElementById("end_input").value);
        beginning.style.display = "inline";
    }else{
        beginning.style.display = "none";
        document.getElementById("end_input").style.border="1px solid #EF5050";
        if(document.getElementById("end_input").value == ""){
            document.getElementById("end_input").style.border="1px solid #BCBCBC";
        }
    }
}

function position_description() {
    const position = document.getElementById("right_paragraph_2");
    const count = localStorage.getItem("count");
    for (let i = 0; i < count; i++) {
        if(document.getElementById("description_textArea" + (i + 1)).value.length > 0){
            document.getElementById("description_textArea" + (i + 1)).style.border="1px solid #98E37E";
            position.innerHTML = document.getElementById("description_textArea" + (i + 1)).value;
            position.style.display = "block";
            localStorage.setItem("description_textArea" + (i + 1),document.getElementById("description_textArea" + (i + 1)).value);
            sessionStorage.setItem("description_textArea" + (i + 1),document.getElementById("description_textArea" + (i + 1)).value);
            document.getElementById("right_paragraph_2_" + (i + 1)).innerHTML = localStorage.getItem("description_textArea" + (i + 1));
        }else{
            position.style.display = "none";
            document.getElementById("right_paragraph_3_" + (i + 1)).innerHTML = localStorage.getItem("end_input" + (i + 1));
            document.getElementById("description_textArea" + (i + 1)).style.border="1px solid #EF5050";
            if(document.getElementById("description_textArea"+(i + 1)).value == ""){
                document.getElementById("description_textArea"+(i + 1)).style.border="1px solid #BCBCBC";
            }else {
                localStorage.setItem("description_textArea" + (i + 1),document.getElementById("description_textArea" + (i + 1)).value);
            }
        }
    }
    if(document.getElementById("description_textArea").value.length > 0){
        document.getElementById("description_textArea").style.border="1px solid #98E37E";
        position.innerHTML = document.getElementById("description_textArea").value;
        localStorage.setItem("description_textArea",document.getElementById("description_textArea").value);
        sessionStorage.setItem("description_textArea",document.getElementById("description_textArea").value);
        position.style.display = "block";
    }else{
        position.style.display = "none";
        document.getElementById("description_textArea").style.border="1px solid #EF5050";
        if(document.getElementById("description_textArea").value == ""){
            document.getElementById("description_textArea").style.border="1px solid #BCBCBC";
        }
    }
}
function checkValidation() {
    const count = localStorage.getItem("count");
    let bool = true;
    for(let i = 0; i < count; i++){
        if(document.getElementById("position_input"+(i + 1)).style.border=="1px solid rgb(239, 80, 80)"){
            bool = false;
        }else if(document.getElementById("employer_input" + (i + 1)).style.border=="1px solid rgb(239, 80, 80)"){
            bool = false;
        }else if(document.getElementById("beginning_input" + (i + 1)).style.border=="1px solid rgb(239, 80, 80)"){
            bool = false;
        }else if(document.getElementById("end_input" + (i + 1)).style.border=="1px solid rgb(239, 80, 80)"){
            bool = false;
        }else if(document.getElementById("description_textArea" + (i + 1)).style.border=="1px solid rgb(239, 80, 80)"){
            bool = false;
        }else if(document.getElementById("position_input").value.length < 2){
            bool = false;
        }else if(document.getElementById("employer_input").value.length < 2){
            bool = false;
        }else if(document.getElementById("beginning_input").value == ""){
            bool = false;
        }else if(document.getElementById("end_input").value == ""){
            bool = false;
        }else if(document.getElementById("description_textArea").value == ""){
            bool = false;
        }

        if(document.getElementById("position_input"+(i + 1)).style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("employer_input"+(i + 1)).style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("beginning_input"+(i + 1)).style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("end_input"+(i + 1)).style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("description_textArea"+(i + 1)).style.border=="1px solid rgb(152, 227, 126)"){
            console.log(i);
            if(document.getElementById("position_input"+(i + 1)).value == ""){
                document.getElementById("position_input"+(i + 1)).style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("employer_input"+(i + 1)).value == ""){
                document.getElementById("employer_input"+(i + 1)).style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("beginning_input"+(i + 1)).value == ""){
                document.getElementById("beginning_input"+(i + 1)).style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("end_input"+(i + 1)).value == ""){
                document.getElementById("end_input"+(i + 1)).style.border="1px solid #EF5050";
                bool = false;
            }   if(document.getElementById("description_textArea"+(i + 1)).value == ""){
                document.getElementById("description_textArea"+(i + 1)).style.border="1px solid #EF5050";
                bool = false;
            }
        }

        if(document.getElementById("position_input").style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("employer_input").style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("beginning_input").style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("end_input").style.border=="1px solid rgb(152, 227, 126)" || document.getElementById("description_textArea").style.border=="1px solid rgb(152, 227, 126)"){
            if(document.getElementById("position_input").value == ""){
                document.getElementById("position_input").style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("employer_input").value == ""){
                document.getElementById("employer_input").style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("beginning_input").value == ""){
                document.getElementById("beginning_input").style.border="1px solid #EF5050";
                bool = false;
            }if(document.getElementById("end_input").value == ""){
                document.getElementById("end_input").style.border="1px solid #EF5050";
                bool = false;
            }   if(document.getElementById("description_textArea").value == ""){
                document.getElementById("description_textArea").style.border="1px solid #EF5050";
                bool = false;
            }
        }
    }
    if(bool == true){
        window.location.href="/education.html";
    }
    console.log(bool);
}

function academy() {
    const academy_name = document.getElementById("education_header");
    if(document.getElementById("academy_name").value.length >= 2){
        document.getElementById("validated_img_5").style.display = "block";
        document.getElementById("right-education").style.display = "block";
        document.getElementById("academy_name").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_5").style.display = "none";
        academy_name.innerHTML = document.getElementById("academy_name").value + ", ";
        academy_name.style.display = "inline";
        localStorage.setItem("academy_name",document.getElementById("academy_name").value);
        sessionStorage.setItem("academy_name",document.getElementById("academy_name").value);
    }else{
        document.getElementById("right-education").style.display = "none";
        academy_name.style.display = "none";
        localStorage.setItem("academy_name",document.getElementById("academy_name").value);
        document.getElementById("validated_img_5").style.display = "none";
        document.getElementById("warning-sign_5").style.display = "block";
        document.getElementById("academy_name").style.border="1px solid #EF5050";
        if(document.getElementById("academy_name").value == ""){
            document.getElementById("academy_name").style.border="1px solid #BCBCBC";
            document.getElementById("warning-sign_5").style.display = "none";
        }
    }
}

function selection(){
    console.log(document.getElementById("universities").value);
    if(document.getElementById("universities").value != "აირჩიეთ ხარისხი"){
        document.getElementById("right-education").style.display = "block";
        document.getElementById("universities").style.border = "1px solid #98E37E";
        document.getElementById("education_header_2").innerHTML = document.getElementById("universities").value;
        localStorage.setItem("universities",document.getElementById("universities").value);
        sessionStorage.setItem("universities",document.getElementById("universities").value);
    }else{
        document.getElementById("right-education").style.display = "none";
        localStorage.setItem("universities",document.getElementById("universities").value);
        document.getElementById("universities").style.border="1px solid #EF5050";
        if(document.getElementById("universities").value == "აირჩიეთ ხარისხი"){
            document.getElementById("universities").style.border="1px solid #BCBCBC";
        }
    }
}

function educationDate() {
    const beginning = document.getElementById("education_right_paragraph");
    if(document.getElementById("beginning_input").value){
        beginning.innerHTML = document.getElementById("beginning_input").value;
        document.getElementById("beginning_input").style.border="1px solid #98E37E";
        localStorage.setItem("beginning_input",document.getElementById("beginning_input").value);
        sessionStorage.setItem("beginning_input",document.getElementById("beginning_input").value);
        beginning.style.display = "block";
    }else{
        beginning.style.display = "none";
        document.getElementById("beginning_input").style.border="1px solid #EF5050";
        if(document.getElementById("beginning_input").value == ""){
            document.getElementById("beginning_input").style.border="1px solid #BCBCBC";
        }
    }
}

function educationDescription() {
    const position = document.getElementById("education_about_me");
    if(document.getElementById("education_textArea").value.length > 0){
        document.getElementById("education_textArea").style.border="1px solid #98E37E";
        position.innerHTML = document.getElementById("education_textArea").value;
        localStorage.setItem("education_textArea",document.getElementById("education_textArea").value);
        sessionStorage.setItem("education_textArea",document.getElementById("education_textArea").value);
        position.style.display = "block";
    }else{
        position.style.display = "none";
        document.getElementById("education_textArea").style.border="1px solid #EF5050";
        if(document.getElementById("education_textArea").value == ""){
            document.getElementById("education_textArea").style.border="1px solid #BCBCBC";
        }
    }
}

function loadEducation (){
    const count2 = localStorage.getItem("count2");
    for(let i = 0; i< count2; i++) {
        const academy_header = document.createElement("h1");
        const academy_input = document.createElement("input");
        const academy_caption = document.createElement("figcaption");
        const degree = document.createElement("h1");
        const academy_date = document.createElement("input");
        const description = document.createElement("h1");
        const textarea = document.createElement("textarea");
        const line = document.createElement("div");
        const warning_sign = document.createElement("div"); 
        const validated = document.createElement("div");
        const right_line = document.createElement("div");
        const btn = document.getElementById("add_more_btn");
        const btn_1 = document.getElementById("goes_back");
        const btn_2 = document.getElementById("after_btn");

        right_line.id = "right_line_2";
        right_line.style.left = "0px";
        right_line.style.top = "0px";
        warning_sign.id = "warning-sign_5_"+ (i + 1);
        warning_sign.className = "warning-sign_5";
        warning_sign.style.left = "0px";
        warning_sign.style.top = "78px";
        warning_sign.style.left = "822px";
        validated.id = "validated_img_5_" + (i + 1);
        validated.className = "validated_img_5";
        validated.style.left = "0px";
        validated.style.top = "83px";
        validated.style.left = "760px";
        academy_header.id = "education_left_paragraph" + (i + 1);
        academy_header.className = "education_left_paragraph";
        academy_header.style.top = "37px";
        academy_header.style.left = "0px";
        academy_header.innerHTML = "სასწავლებელი";
        academy_input.id = "academy_name" + (i + 1);
        academy_input.onchange = academy;
        academy_input.className = "academy_name";
        academy_input.placeholder = "სასწავლებელი";
        academy_input.style.left = "0px";
        academy_input.style.top = "66px";
        academy_caption.id = "education_caption" + (i + 1);
        academy_caption.className = "education_caption";
        academy_caption.style.top = "122px";
        academy_caption.style.left = "0px";
        academy_caption.innerHTML = "მინიმუმ 2 სიმბოლო";
        degree.id = "degree_header" + (i + 1);
        degree.onchange = selection;
        degree.className = "degree_header";
        degree.innerHTML = "ხარისხი";
        degree.style.left = "0px";
        degree.style.top = "189px";
        academy_date.id = "beginning_input" + (i + 1);
        academy_date.onchange = educationDate;
        academy_date.className = "beginning_input";
        academy_date.style.left = "0px";
        academy_date.type = "date";
        academy_date.style.top = "218px";
        academy_date.style.left = "427px";
        description.id = "description" + (i + 1);
        description.className = "description";
        description.style.left = "0px";
        description.style.top = "292px";
        description.innerHTML = "აღწერა";
        textarea.id = "education_textArea" + (i + 1);
        textarea.onchange = educationDescription;
        textarea.className = "education_textArea";
        textarea.style.left = "0px";
        textarea.style.top = "321px";
        line.id = "bottom_line" + (i + 1);
        line.className = "bottom_line_1";
        line.style.left = "0px";
        line.style.top = "553px";

        var array = ["აირჩიეთ ხარისხი","საშუალო სკოლის დიპლომი","ზოგადსაგანმანათლებლო დიპლომი","აკალავრი დიპლომი","მაგისტრის დიპლომი","დოქტორის დიპლომი","ასოცირებულის ხარისხი","სტუდენტი","კოლეჯი (ხარისხის გარეშე)","სხვა"];

        var selectList = document.createElement("select");
        selectList.id = "select_degree";
        selectList.className = "select_degree";
        selectList.style.left = "0px";
        selectList.style.top = "218px";
        document.getElementById("bottom_line_1").appendChild(selectList);

        for (var j = 0; j < array.length; j++) {
            var option = document.createElement("option");
            option.value = array[j];
            option.text = array[j];
            selectList.appendChild(option);
        }
        document.getElementById("bottom_line_1").appendChild(academy_header);
        document.getElementById("bottom_line_1").appendChild(academy_input);
        document.getElementById("bottom_line_1").appendChild(academy_caption);
        document.getElementById("bottom_line_1").appendChild(degree);
        document.getElementById("bottom_line_1").appendChild(academy_date);
        document.getElementById("bottom_line_1").appendChild(description);
        document.getElementById("bottom_line_1").appendChild(textarea);
        document.getElementById("bottom_line_1").appendChild(line);
        document.getElementById("bottom_line_1").appendChild(warning_sign);
        document.getElementById("bottom_line_1").appendChild(validated);
        document.getElementById("right_line_2").appendChild(right_line);
        btn.style.top = btn.offsetTop + (551)  + 'px';
        btn_1.style.top = btn_1.offsetTop + (551)  + 'px';
        btn_2.style.top = btn_2.offsetTop + (551)  + 'px';
        academy_header.style.top = academy_header.offsetTop + (551 * (i)) + 'px'; 
        academy_input.style.top = academy_input.offsetTop + (551 * (i)) + 'px'; 
        academy_caption.style.top = academy_caption.offsetTop + (551 * (i)) + 'px'; 
        degree.style.top = degree.offsetTop + (551 * (i)) + 'px';
        academy_date.style.top = academy_date.offsetTop + (551 * (i)) + 'px'; 
        description.style.top = description.offsetTop + (551 * (i)) + 'px'; 
        selectList.style.top = selectList.offsetTop + (551 * (i)) + 'px'; 
        textarea.style.top = textarea.offsetTop + (551 * (i)) + 'px'; 
        line.style.top = line.offsetTop + (551 * (i)) + 'px';
        warning_sign.style.top = warning_sign.offsetTop + (551 * (i)) + 78 + 'px';
        validated.style.top = validated.offsetTop + (551 * (i)) + 78 + 'px';
        right_line.style.top = right_line.offsetTop + (208 * (i +  1) ) + 'px';
        if((i) == 0){
            warning_sign.style.top = warning_sign.offsetTop + 78 + 'px';
            validated.style.top = validated.offsetTop + 83 + 'px';
        }else{
            warning_sign.style.top = warning_sign.offsetTop + (551 * (i)) + 78 + 'px';
            validated.style.top = validated.offsetTop + (551 * (i)) + 83 + 'px';
        }
    }
}

function addEducation() {
    const academy_header = document.createElement("h1");
    const academy_input = document.createElement("input");
    const academy_caption = document.createElement("figcaption");
    const degree = document.createElement("h1");
    const academy_date = document.createElement("input");
    const description = document.createElement("h1");
    const textarea = document.createElement("textarea");
    const line = document.createElement("div");
    const warning_sign = document.createElement("div"); 
    const validated = document.createElement("div");
    const btn = document.getElementById("add_more_btn");
    const btn_1 = document.getElementById("goes_back");
    const btn_2 = document.getElementById("after_btn");  

    // <h1 id="right-education">განათლება</h1>
    //     <div id="inline-div_3">
    //     <h1 id="education_header"></h1>
    //     <h1 id="education_header_2"></h1>
    // </div>
    // <p id="education_right_paragraph">2020-09-23</p>
    // <p id="education_about_me"></p>

    const right_line = document.createElement("div");
    const right_header = document.createElement("h1");
    const right_inline = document.createElement("div");
    const education_header = document.createElement("h1");
    const education_header_2 = document.createElement("h1");
    const education_right_paragraph = document.createElement("p");
    const education_about_me = document.createElement("p");
    
    let count = 0;
    count++;
    if(localStorage.getItem("count2")){
        count += parseInt(localStorage.getItem("count2"));
        localStorage.setItem("count2",count);
    }else{
        localStorage.setItem("count2",count);
    }
    right_line.id = "right_line_2";
    right_line.style.left = "0px";
    right_line.style.top = "0px";
    right_header.id = "right-education"+count;
    right_header.innerHTML = "განათლება";
    right_header.className = "right-education";
    right_header.style.left = "0px";
    right_inline.id = "inline-div_3_" + count;
    right_inline.className = "inline-div_3";
    right_inline.style.left = "0px";
    education_header.id = "education_header"+count;
    education_header.className = "education_header";
    education_header.style.left = "0px";
    education_header.innerHTML = "some"
    academy_header.id = "education_left_paragraph" + count;
    academy_header.className = "education_left_paragraph";
    academy_header.style.top = "37px";
    academy_header.style.left = "0px";
    academy_header.innerHTML = "სასწავლებელი";
    academy_input.id = "academy_name" + count;
    academy_input.onchange = academy;
    academy_input.className = "academy_name";
    academy_input.placeholder = "სასწავლებელი";
    academy_input.style.left = "0px";
    academy_input.style.top = "66px";
    academy_caption.id = "education_caption"+count;
    academy_caption.className = "education_caption";
    academy_caption.style.top = "122px";
    academy_caption.style.left = "0px";
    academy_caption.innerHTML = "მინიმუმ 2 სიმბოლო";
    degree.id = "degree_header" + count;
    degree.onchange = selection;
    degree.className = "degree_header";
    degree.innerHTML = "ხარისხი";
    degree.style.left = "0px";
    degree.style.top = "189px";
    academy_date.id = "beginning_input" + count;
    academy_date.onchange = educationDate;
    academy_date.className = "beginning_input";
    academy_date.style.left = "0px";
    academy_date.type = "date";
    academy_date.style.top = "218px";
    academy_date.style.left = "427px";
    description.id = "description" + count;
    description.className = "description";
    description.style.left = "0px";
    description.style.top = "292px";
    description.innerHTML = "აღწერა";
    textarea.id = "education_textArea" + count;
    textarea.onchange = educationDescription;
    textarea.className = "education_textArea";
    textarea.style.left = "0px";
    textarea.style.top = "321px";
    line.id = "bottom_line"+count;
    line.className = "bottom_line_1";
    line.style.left = "0px";
    line.style.top = "553px";
    warning_sign.id = "warning-sign_5_" + count;
    warning_sign.className = "warning-sign_5";
    warning_sign.style.left = "0px";
    warning_sign.style.top = "78px";
    warning_sign.style.left = "822px";
    validated.id = "validated_img_5_" + count;
    validated.className = "validated_img_5";
    validated.style.left = "0px";
    validated.style.top = "81px";
    validated.style.left = "760px";
    var array = ["აირჩიეთ ხარისხი","საშუალო სკოლის დიპლომი","ზოგადსაგანმანათლებლო დიპლომი","აკალავრი დიპლომი","მაგისტრის დიპლომი","დოქტორის დიპლომი","ასოცირებულის ხარისხი","სტუდენტი","კოლეჯი (ხარისხის გარეშე)","სხვა"];

    var selectList = document.createElement("select");
    selectList.id = "select_degree";
    selectList.className = "select_degree";
    selectList.style.left = "0px";
    selectList.style.top = "218px";
    document.getElementById("bottom_line_1").appendChild(selectList);

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    document.getElementById("bottom_line_1").appendChild(academy_header);
    document.getElementById("bottom_line_1").appendChild(academy_input);
    document.getElementById("bottom_line_1").appendChild(academy_caption);
    document.getElementById("bottom_line_1").appendChild(degree);
    document.getElementById("bottom_line_1").appendChild(academy_date);
    document.getElementById("bottom_line_1").appendChild(description);
    document.getElementById("bottom_line_1").appendChild(textarea);
    document.getElementById("bottom_line_1").appendChild(line);
    document.getElementById("bottom_line_1").appendChild(warning_sign);
    document.getElementById("bottom_line_1").appendChild(validated);
    document.getElementById("right_line_2").appendChild(right_line);
    document.getElementById("right_line_2").appendChild(right_header);
    document.getElementById("right_line_2").appendChild(right_inline);
    document.getElementById("inline-div_3_" + count).appendChild(education_header);
    btn.style.top = btn.offsetTop + (551)  + 'px';
    btn_1.style.top = btn_1.offsetTop + (551)  + 'px';
    btn_2.style.top = btn_2.offsetTop + (551)  + 'px';
    academy_header.style.top = academy_header.offsetTop + (551 * (count - 1)) + 'px'; 
    academy_input.style.top = academy_input.offsetTop + (551 * (count - 1)) + 'px'; 
    academy_caption.style.top = academy_caption.offsetTop + (551 * (count - 1)) + 'px'; 
    degree.style.top = degree.offsetTop + (551 * (count - 1)) + 'px';
    academy_date.style.top = academy_date.offsetTop + (551 * (count - 1)) + 'px'; 
    description.style.top = description.offsetTop + (551 * (count - 1)) + 'px'; 
    selectList.style.top = selectList.offsetTop + (551 * (count - 1)) + 'px'; 
    textarea.style.top = textarea.offsetTop + (551 * (count - 1)) + 'px'; 
    line.style.top = line.offsetTop + (551 * (count - 1)) + 'px';
    warning_sign.style.top = warning_sign.offsetTop + (551 * (count - 1)) + 78 + 'px';
    validated.style.top = validated.offsetTop + (551 * (count - 1)) + 78 + 'px';
    right_line.style.top = right_line.offsetTop + (208 * (count) ) + 'px';
    right_header.style.top = right_header.offsetTop + ((208) * count) + 24 + 'px';
    right_inline.style.top = right_header.offsetTop + ((208) * count) + 24 + 37 + 'px';
    if((count - 1) == 0){
        warning_sign.style.top = warning_sign.offsetTop + 78 + 'px';
        validated.style.top = validated.offsetTop + 83 + 'px';
    }else{
        warning_sign.style.top = warning_sign.offsetTop + (551 * (count - 1)) + 78 + 'px';
        validated.style.top = validated.offsetTop + (551 * (count - 1)) + 83 + 'px';
    }
    const count2 = parseInt(localStorage.getItem("count"));
    console.log(count);
    const round_logo = document.getElementById("round_logo");
    const right_div = document.getElementById("right_div");
    round_logo.style.top = round_logo.offsetTop + (208) + 'px';
    right_div.style.height = right_div.offsetHeight + (208) + 'px';
}

function onLoad(){
    const count = parseInt(localStorage.getItem("count"));
    for(let i = 0; i < count; i++) {
        const Position = document.createElement("h1");
        const input = document.createElement("input");
        const caption = document.createElement("figcaption");
        const section = document.createElement("section");
        const Employer = document.createElement("h1");
        const employer_input = document.createElement("input");
        const employer_caption = document.createElement("figcaption");
        const beginning_date = document.createElement("section");
        const beginning_h1 = document.createElement("h1");
        const beginning_input = document.createElement("input");
        const end_date = document.createElement("section");
        const end_h1 = document.createElement("h1");
        const end_input = document.createElement("input");
        const experience_description = document.createElement("section");
        const description_header = document.createElement("h1");
        const description_textArea = document.createElement("textarea");
        const bottom_line = document.createElement("section");
        const warning = document.createElement("section");
        const warning_1 = document.createElement("section");
        const validated = document.createElement("section");
        const validated_1 = document.createElement("section");

        const right_line = document.createElement("div");
        const right_experience_title = document.createElement("h1");
        const inline_div = document.createElement("div");
        const inline_div_2 = document.createElement("div");
        const right_experience_header = document.createElement("h1");
        const right_experience_header_2 = document.createElement("h1");
        const right_paragraph = document.createElement("p");
        const right_paragraph_3 = document.createElement("p");
        const right_paragraph_2 = document.createElement("p");

        right_line.id = "right_line_1";
        right_line.style.top = "549px";
        inline_div.id = "inline_div_"+(i + 1);
        inline_div.className = "inline-div-3";
        inline_div.style.top = "610px";
        inline_div_2.id = "inline-div"+(i + 1);
        inline_div_2.className = "inline-div_4";
        inline_div_2.style.top = "637px";
        right_experience_title.id = "right_experience_title_" + (i + 1);
        right_experience_title.className = "right_experience_title";
        right_experience_title.innerHTML = "გამოცდილება";
        right_experience_title.style.left = "0px";
        right_experience_header.id = "right_experience_header_1_" + (i + 1);
        right_experience_header.className = "right_experience_header";
        right_experience_header.style.display = "inline";
        right_experience_header.style.top = "61px";
        right_experience_header.style.left = "0px";
        right_paragraph.id = "right_paragraph" + (i + 1);
        right_paragraph.className = "right_paragraph";
        right_paragraph.style.display = "inline";
        right_paragraph_3.id = "right_paragraph_3_" + (i + 1);
        right_paragraph_3.className = "right_paragraph_3";
        right_paragraph_3.style.display = "inline";
        right_paragraph_2.id = "right_paragraph_2_" + (i + 1);
        right_paragraph_2.className = "right_paragraph_2";
        right_paragraph_2.style.top = "672px";
        right_experience_header_2.id = "right_experience_header_2_"+ (i + 1);
        right_experience_header_2.className = "right_experience_header_2";
        right_experience_header_2.style.display = "inline";
        right_experience_header_2.style.top = "61px";
        right_experience_header_2.style.left = "40px";

        warning.id = "warning-sign"+(i + 1);
        warning.className = "warning-sign";
        warning.style.left = "822px";
        validated.id = "validated_img"+(i + 1);
        validated.className = "validated-sign";
        validated.style.left = "760px";
        validated.style.top = "81px";
        validated_1.id = "validated_img_1_"+(i + 1);
        validated_1.className = "validated-sign";
        validated_1.style.left = "760px";
        validated_1.style.top = "81px";
        warning_1.id = "warning-1-sign"+(i + 1);
        warning_1.className = "warning-sign";
        warning_1.style.left = "822px";
        bottom_line.id = "bottom_line";
        bottom_line.style.left = "0px";
        bottom_line.style.top = "631px";
        description_textArea.className = "description_textArea";
        description_textArea.id = "description_textArea" + (i + 1);
        description_textArea.placeholder = "როლი თანამდებობაბე და ზოგადი აღწერა";
        description_textArea.style.left = "0px";
        description_textArea.onchange = position_description;
        Employer.id = "employer_header";
        Employer.innerHTML="დამსაქმებელი";
        beginning_h1.innerHTML = "დაწყების რიცხვი";
        beginning_h1.style.left = "0px";
        end_h1.innerHTML = "დამთავრების რიცხვი";
        end_h1.style.left = "0px";
        description_header.id = "description_header";
        description_header.innerHTML = "აღწერა";
        description_header.style.left = "0px";
        employer_input.id = "employer_input" + (i + 1);
        employer_input.placeholder = placeholder="დამსაქმებელი";
        employer_input.onchange = employer;
        employer_input.className = "employer_input";
        beginning_input.className = "beginning_input";
        beginning_input.onchange = beginning;
        beginning_input.id = "beginning_input"+(i + 1);
        beginning_input.type = "date";
        beginning_input.style.left = "0px";
        end_input.id = "end_input"+(i+1);
        end_input.type = "date";
        end_input.style.left = "0px";
        end_input.onchange = end;
        end_input.className = "end_input";
        employer_caption.id = "employer_caption";
        employer_caption.innerHTML = "მინიმუმ 2 სიმბოლო";
        input.className = "position_input";
        input.id = "position_input" + (i + 1);
        input.placeholder = placeholder="დეველოპერი, დიზაინერი, ა.შ.";
        input.onchange = position;
        Position.id = "position_header";
        Position.innerHTML = "თანამდებობა";
        caption.id = "position_caption";
        caption.innerHTML = "მინიმუმ 2 სიმბოლო";
        section.id = "experience_employer";
        section.style.left = "0px";
        section.style.top = "137px";
        section.style.padding = "0px";
        beginning_date.id = "beginning_date";
        beginning_date.style.left = "0px";
        beginning_date.style.top = "274px";
        end_date.id = "end_date";
        end_date.style.left = "427px";
        end_date.style.top = "274px";
        experience_description.id = "experience_description";
        experience_description.style.top = "384px";
        experience_description.style.left = "0px";
        Employer.style.top = "8px";
        beginning_h1.style.top = "0px";
        end_h1.style.top = "0px";
        description_header.style.top = "0px";
        document.getElementById("bottom_line").appendChild(Position);
        document.getElementById("bottom_line").appendChild(input);
        document.getElementById("bottom_line").appendChild(caption);
        document.getElementById("bottom_line").appendChild(section);
        document.getElementById("bottom_line").appendChild(beginning_date);
        document.getElementById("bottom_line").appendChild(end_date);
        document.getElementById("bottom_line").appendChild(experience_description);
        document.getElementById("bottom_line").appendChild(bottom_line);
        document.getElementById("bottom_line").appendChild(warning);
        document.getElementById("bottom_line").appendChild(validated);
        document.getElementById("right_div").appendChild(right_line);
        document.getElementById("right_div").appendChild(inline_div);
        document.getElementById("right_div").appendChild(inline_div_2);
        document.getElementById("inline-div"+(i + 1)).appendChild(right_paragraph);
        document.getElementById("inline-div"+(i + 1)).appendChild(right_paragraph_3);
        document.getElementById("right_div").appendChild(right_paragraph_2);
        document.getElementById("right_line_1").appendChild(right_experience_title);
        document.getElementById("inline_div_"+(i + 1)).appendChild(right_experience_header);
        document.getElementById("inline_div_"+(i + 1)).appendChild(right_experience_header_2);
        experience_description.appendChild(description_header);
        experience_description.appendChild(description_textArea);
        end_date.appendChild(end_h1);
        end_date.appendChild(end_input);
        beginning_date.appendChild(beginning_h1);
        beginning_date.appendChild(beginning_input);
        section.appendChild(Employer);
        section.appendChild(employer_input);
        section.appendChild(employer_caption);
        section.appendChild(warning_1);
        section.appendChild(validated_1);
        const btn = document.getElementById("add_experience_btn");
        const btn_1 = document.getElementById("go_back_btn");
        const btn_2 = document.getElementById("next_page_btn");
        Position.style.top = Position.offsetTop + (29) + ((647) * (i)) + 'px';
        input.style.top = input.offsetTop + (29) + ((647) * (i)) + 'px';
        Employer.style.top = Employer.offsetTop + (29) + ((647) * (i)) + 'px';
        beginning_h1.style.top = beginning_h1.offsetTop + 29 + ((647) * (i)) + 'px';
        end_h1.style.top = end_h1.offsetTop + 29 + ((647) * (i)) + 'px';
        beginning_input.style.top = beginning_h1.offsetTop + 29 + 'px';
        description_header.style.top = description_header.offsetTop + 29 + ((647) * (i)) + 'px';
        description_textArea.style.top = description_header.offsetTop + 29 + 'px';
        end_input.style.top = end_h1.offsetTop + 29 + 'px';
        employer_input.style.top = Employer.offsetTop + 29 + 'px';
        employer_caption.style.top = employer_caption.offsetTop + 29 + ((647) * (i)) + 'px';
        caption.style.top = caption.offsetTop + (29) + ((647) * (i)) + 'px';
        bottom_line.style.top = bottom_line.offsetTop + ((647) * (i)) + 'px';
        right_line.style.top = right_line.offsetTop + ((208) * (i)) + 'px';
        inline_div.style.top = inline_div.offsetTop + ((208) * (i)) + 'px';
        inline_div_2.style.top = inline_div_2.offsetTop + ((208) * (i)) + 'px';
        right_paragraph_2.style.top = right_paragraph_2.offsetTop + ((208) * (i)) + 'px';
        warning_1.style.top = input.offsetTop + (12) + 'px';
        warning.style.top = input.offsetTop + (12) + 'px';
        validated.style.top = input.offsetTop + (18) + 'px';
        validated_1.style.top = input.offsetTop + (18) + 'px';
        if(i == 0){
            btn.style.top = btn.offsetTop + (647) + 'px';
            btn_1.style.top = btn_1.offsetTop + (647)  + 'px';
            btn_2.style.top = btn_2.offsetTop + (647)  + 'px';
            right_experience_title.style.top = right_experience_title.offsetTop + (24) + 'px';
        }else{
            right_experience_title.style.top = right_experience_title.offsetTop + ((208) * (i)) + 24 + 'px';
            btn.style.top = btn.offsetTop + (647) + 'px';
            btn_1.style.top = btn_1.offsetTop + (647) + 'px';
            btn_2.style.top = btn_2.offsetTop + (647) + 'px';
        }
        if(i >= 2){
            const round_logo = document.getElementById("round_logo");
            const right_div = document.getElementById("right_div");
            round_logo.style.top = round_logo.offsetTop + (208) + 'px';
            right_div.style.height = right_div.offsetHeight + (208) + 'px';
        }
    }
}

function add_experience() {
    const Position = document.createElement("h1");
    const input = document.createElement("input");
    const caption = document.createElement("figcaption");
    const section = document.createElement("section");
    const Employer = document.createElement("h1");
    const employer_input = document.createElement("input");
    const employer_caption = document.createElement("figcaption");
    const beginning_date = document.createElement("section");
    const beginning_h1 = document.createElement("h1");
    const beginning_input = document.createElement("input");
    const end_date = document.createElement("section");
    const end_h1 = document.createElement("h1");
    const end_input = document.createElement("input");
    const experience_description = document.createElement("section");
    const description_header = document.createElement("h1");
    const description_textArea = document.createElement("textarea");
    const bottom_line = document.createElement("section");
    const warning = document.createElement("section");
    const warning_1 = document.createElement("section");
    const validated = document.createElement("section");
    const validated_1 = document.createElement("section");

    const right_line = document.createElement("div");
    const right_experience_title = document.createElement("h1");
    const inline_div = document.createElement("div");
    const inline_div_2 = document.createElement("div");
    const right_experience_header = document.createElement("h1");
    const right_experience_header_2 = document.createElement("h1");
    const right_paragraph = document.createElement("p");
    const right_paragraph_3 = document.createElement("p");
    const right_paragraph_2 = document.createElement("p");
    let count = 0;
    count++;
    if(localStorage.getItem("count")){
        count += parseInt(localStorage.getItem("count"));
        localStorage.setItem("count",count);
    }else{
        localStorage.setItem("count",count);
    }

    if(count >= 3){
        const round_logo = document.getElementById("round_logo");
        const right_div = document.getElementById("right_div");
        round_logo.style.top = round_logo.offsetTop + (208) + 'px';
        right_div.style.height = right_div.offsetHeight + (208) + 'px';
    }

    validated.id = "validated_img"+count;
    validated.className = "validated-sign";
    validated.style.left = "760px";
    validated.style.top = "81px";
    validated_1.id = "validated_img_1_"+count;
    validated_1.className = "validated-sign";
    validated_1.style.left = "760px";
    validated_1.style.top = "81px";
    warning.id = "warning-sign"+count;
    warning.className = "warning-sign";
    warning.style.left = "822px";
    warning_1.id = "warning-1-sign"+count;
    warning_1.className = "warning-sign";
    warning_1.style.left = "822px";
    bottom_line.id = "bottom_line";
    bottom_line.style.left = "0px";
    bottom_line.style.top = "631px";
    right_line.id = "right_line_1";
    right_line.style.top = "549px";
    inline_div.id = "inline_div_"+count;
    inline_div.className = "inline-div-3";
    inline_div.style.top = "610px";
    inline_div_2.id = "inline-div"+count;
    inline_div_2.className = "inline-div_4";
    inline_div_2.style.top = "637px";
    description_textArea.className = "description_textArea";
    description_textArea.id = "description_textArea" + count;
    description_textArea.placeholder = "როლი თანამდებობაბე და ზოგადი აღწერა";
    description_textArea.style.left = "0px";
    description_textArea.onchange = position_description;
    Employer.id = "employer_header";
    Employer.innerHTML="დამსაქმებელი";
    beginning_h1.innerHTML = "დაწყების რიცხვი";
    beginning_h1.style.left = "0px";
    end_h1.innerHTML = "დამთავრების რიცხვი";
    end_h1.style.left = "0px";
    description_header.id = "description_header";
    description_header.innerHTML = "აღწერა";
    description_header.style.left = "0px";
    employer_input.className = "employer_input";
    employer_input.id = "employer_input"+count;
    employer_input.placeholder = placeholder="დამსაქმებელი";
    employer_input.onchange = employer;
    beginning_input.className = "beginning_input";
    beginning_input.id = "beginning_input"+count;
    beginning_input.type = "date";
    beginning_input.style.left = "0px";
    end_input.className = "end_input";
    end_input.id = "end_input"+count;
    end_input.type = "date";
    end_input.style.left = "0px";
    employer_caption.id = "employer_caption";
    employer_caption.innerHTML = "მინიმუმ 2 სიმბოლო";
    input.className = "position_input";
    input.id = "position_input"+count;
    input.onchange = position;
    input.placeholder = placeholder="დეველოპერი, დიზაინერი, ა.შ.";
    Position.id = "position_header";
    Position.innerHTML = "თანამდებობა";
    right_experience_title.id = "right_experience_title_" + count;
    right_experience_title.className = "right_experience_title";
    right_experience_title.innerHTML = "გამოცდილება";
    right_experience_title.style.left = "0px";
    right_experience_title.style.top = "24px";
    right_experience_header.id = "right_experience_header_1_" + count;
    right_experience_header.className = "right_experience_header";
    right_experience_header.style.display = "inline";
    right_experience_header.style.top = "61px";
    right_experience_header.style.left = "0px";
    right_paragraph.id = "right_paragraph" + count;
    right_paragraph.className = "right_paragraph";
    right_paragraph.style.display = "inline";
    right_paragraph_3.id = "right_paragraph_3_" + count;
    right_paragraph_3.className = "right_paragraph_3";
    right_paragraph_3.style.display = "inline";
    right_paragraph_2.id = "right_paragraph_2_"+count;
    right_paragraph_2.className = "right_paragraph_2";
    right_paragraph_2.style.top = "672px";
    right_experience_header_2.id = "right_experience_header_2_" + count;
    right_experience_header_2.className = "right_experience_header_2";
    right_experience_header_2.style.display = "inline";
    right_experience_header_2.style.top = "61px";
    right_experience_header_2.style.left = "40px";
    caption.id = "position_caption";
    caption.innerHTML = "მინიმუმ 2 სიმბოლო";
    section.id = "experience_employer";
    section.style.left = "0px";
    section.style.top = "137px";
    section.style.padding = "0px";
    beginning_date.className = "beginning_date";
    beginning_date.id = "beginning_date"+count;
    beginning_date.style.left = "0px";
    beginning_date.style.top = "274px";
    beginning_date.onchange = beginning;
    end_date.className = "end_date";
    end_date.id = "end_date"+count;
    end_date.style.left = "427px";
    end_date.style.top = "274px";
    end_date.onchange = end;
    experience_description.id = "experience_description";
    experience_description.style.top = "384px";
    experience_description.style.left = "0px";
    Employer.style.top = "8px";
    beginning_h1.style.top = "0px";
    end_h1.style.top = "0px";
    description_header.style.top = "0px";
    document.getElementById("bottom_line").appendChild(Position);
    document.getElementById("bottom_line").appendChild(input);
    document.getElementById("bottom_line").appendChild(caption);
    document.getElementById("bottom_line").appendChild(section);
    document.getElementById("bottom_line").appendChild(beginning_date);
    document.getElementById("bottom_line").appendChild(end_date);
    document.getElementById("bottom_line").appendChild(experience_description);
    document.getElementById("bottom_line").appendChild(bottom_line);
    document.getElementById("bottom_line").appendChild(warning);
    document.getElementById("bottom_line").appendChild(validated);
    document.getElementById("right_div").appendChild(right_line);
    document.getElementById("right_div").appendChild(inline_div);
    document.getElementById("right_div").appendChild(inline_div_2);
    document.getElementById("inline-div"+count).appendChild(right_paragraph);
    document.getElementById("inline-div"+count).appendChild(right_paragraph_3);
    document.getElementById("right_div").appendChild(right_paragraph_2);
    document.getElementById("right_line_1").appendChild(right_experience_title);
    document.getElementById("inline_div_"+count).appendChild(right_experience_header);
    document.getElementById("inline_div_"+count).appendChild(right_experience_header_2);
    experience_description.appendChild(description_header);
    experience_description.appendChild(description_textArea);
    end_date.appendChild(end_h1);
    end_date.appendChild(end_input);
    beginning_date.appendChild(beginning_h1);
    beginning_date.appendChild(beginning_input);
    section.appendChild(Employer);
    section.appendChild(employer_input);
    section.appendChild(employer_caption);
    section.appendChild(warning_1);
    section.appendChild(validated_1);
    const btn = document.getElementById("add_experience_btn");
    const btn_1 = document.getElementById("go_back_btn");
    const btn_2 = document.getElementById("next_page_btn");
    btn.style.top = btn.offsetTop + (647)  + 'px';
    btn_1.style.top = btn_1.offsetTop + (647)  + 'px';
    btn_2.style.top = btn_2.offsetTop + (647)  + 'px';
    Position.style.top = Position.offsetTop + (29) + ((647) * (count - 1)) + 'px';
    input.style.top = input.offsetTop + (29) + ((647) * (count - 1)) + 'px';
    Employer.style.top = Employer.offsetTop + (29) + ((647) * (count - 1)) + 'px';
    beginning_h1.style.top = beginning_h1.offsetTop + 29 + ((647) * (count - 1)) + 'px';
    end_h1.style.top = end_h1.offsetTop + 29 + ((647) * (count - 1)) + 'px';
    beginning_input.style.top = beginning_h1.offsetTop + 29 + 'px';
    description_header.style.top = description_header.offsetTop + 29 + ((647) * (count - 1)) + 'px';
    description_textArea.style.top = description_header.offsetTop + 29 + 'px';
    end_input.style.top = end_h1.offsetTop + 29 + 'px';
    employer_input.style.top = Employer.offsetTop + 29 + 'px';
    employer_caption.style.top = employer_caption.offsetTop + 29 + ((647) * (count - 1)) + 'px';
    caption.style.top = caption.offsetTop + (29) + ((647) * (count - 1)) + 'px';
    bottom_line.style.top = bottom_line.offsetTop + ((647) * (count - 1)) + 'px';
    right_line.style.top = right_line.offsetTop + ((208) * (count - 1)) + 'px';
    inline_div.style.top = inline_div.offsetTop + ((208) * (count - 1)) + 'px';
    inline_div_2.style.top = inline_div_2.offsetTop + ((208) * (count - 1)) + 'px';
    right_paragraph_2.style.top = right_paragraph_2.offsetTop + ((208) * (count - 1)) + 'px';
    right_experience_title.style.top = right_experience_title.offsetTop + ((208) * (count - 1)) + 24 + 'px';
    warning_1.style.top = input.offsetTop + (12) + 'px';
    warning.style.top = input.offsetTop + (12) + 'px';
    validated.style.top = input.offsetTop + (18) + 'px';
    validated_1.style.top = input.offsetTop + (18) + 'px';
}