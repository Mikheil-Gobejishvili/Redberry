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
    document.getElementById('phone_logo').style.display = "block";
    document.getElementById('email_logo').style.display = "block";
    document.getElementById('right_about_me').style.display = "block";
    const right_img = document.getElementById("right_img");
    right_img.style.backgroundImage = sessionStorage.getItem("url");
    const recentImageUrl = sessionStorage.getItem("url1");
    if(recentImageUrl) {
        document.getElementById("right_img").setAttribute("src",recentImageUrl);
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
    const position = document.getElementById("right_experience_header");
    const count = localStorage.getItem("count");
    for(let i = 0; i < count; i++){
        if(document.getElementById("position_input"+(i + 1)).value.length >= 2){
            document.getElementById("validated_img_5").style.display = "block";
            document.getElementById("position_input"+(i + 1)).style.border="1px solid #98E37E";
            document.getElementById("warning-sign"+(i + 1)).style.display = "none";
            position.innerHTML = document.getElementById("position_input").value + ",";
            position.style.display = "inline";
            localStorage.setItem("position_input" + (i + 1),document.getElementById("position_input" + (i + 1)).value);
        }else{
            position.style.display = "none";
            document.getElementById("validated_img_5").style.display = "none";
            document.getElementById("warning-sign"+(i + 1)).style.display = "block";
            document.getElementById("position_input"+(i + 1)).style.border="1px solid #EF5050";
        }
    }
    if(document.getElementById("position_input").value.length >= 2){
        document.getElementById("validated_img_5").style.display = "block";
        document.getElementById("right_experience_title").style.display = "block";
        document.getElementById("position_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_5").style.display = "none";
        position.innerHTML = document.getElementById("position_input").value + ",";
        position.style.display = "inline";
        localStorage.setItem("position_input",document.getElementById("position_input").value);
    }else{
        position.style.display = "none";
        document.getElementById("validated_img_5").style.display = "none";
        document.getElementById("warning-sign_5").style.display = "block";
        document.getElementById("position_input").style.border="1px solid #EF5050";
    }
}

function employer() {
    const employer = document.getElementById("right_experience_header_2");
    const count = localStorage.getItem("count");
    for(let i = 0; i < count; i++){
        if(document.getElementById("employer_input" + (i + 1)).value.length >= 2){
            document.getElementById("validated_img_6").style.display = "block";
            document.getElementById("employer_input" + (i + 1)).style.border="1px solid #98E37E";
            document.getElementById("warning-1-sign" + (i + 1)).style.display = "none";
            localStorage.setItem("employer_input" + (i + 1),document.getElementById("employer_input" + (i + 1)).value);
            employer.innerHTML = document.getElementById("employer_input" + (i + 1)).value;
            employer.style.display = "inline";
        }else{
            employer.style.display = "none";
            document.getElementById("validated_img_6").style.display = "none";
            document.getElementById("warning-1-sign" + (i + 1)).style.display = "block";
            document.getElementById("employer_input" + (i + 1)).style.border="1px solid #EF5050";
        }
    }
    if(document.getElementById("employer_input").value.length >= 2){
        document.getElementById("validated_img_6").style.display = "block";
        document.getElementById("right_experience_title").style.display = "block";
        document.getElementById("employer_input").style.border="1px solid #98E37E";
        document.getElementById("warning-sign_6").style.display = "none";
        employer.innerHTML = document.getElementById("employer_input").value;
        localStorage.setItem("employer_input",document.getElementById("employer_input").value);
        employer.style.display = "inline";
    }else{
        employer.style.display = "none";
        document.getElementById("validated_img_6").style.display = "none";
        document.getElementById("warning-sign_6").style.display = "block";
        document.getElementById("employer_input").style.border="1px solid #EF5050";
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
        }else{
            beginning.style.display = "none";
            document.getElementById("beginning_input" + (i + 1)).style.border="1px solid #EF5050";
        }
    }
    if(document.getElementById("beginning_input").value){
        document.getElementById("beginning_input").style.border="1px solid #98E37E";
        beginning.innerHTML = document.getElementById("beginning_input").value + " - ";
        localStorage.setItem("beginning_input",document.getElementById("beginning_input").value);
        beginning.style.display = "inline";
    }else{
        beginning.style.display = "none";
        document.getElementById("beginning_input").style.border="1px solid #EF5050";
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
        }else{
            beginning.style.display = "none";
            document.getElementById("end_input" + (i + 1)).style.border="1px solid #EF5050";
        }
    }
    if(document.getElementById("end_input").value){
        beginning.innerHTML = document.getElementById("end_input").value;
        document.getElementById("end_input").style.border="1px solid #98E37E";
        localStorage.setItem("end_input",document.getElementById("end_input").value);
        beginning.style.display = "inline";
    }else{
        beginning.style.display = "none";
        document.getElementById("end_input").style.border="1px solid #EF5050";
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
        }else{
            position.style.display = "none";
            document.getElementById("description_textArea" + (i + 1)).style.border="1px solid #EF5050";
        }
    }
    if(document.getElementById("description_textArea").value.length > 0){
        document.getElementById("description_textArea").style.border="1px solid #98E37E";
        position.innerHTML = document.getElementById("description_textArea").value;
        localStorage.setItem("description_textArea",document.getElementById("description_textArea").value);
        position.style.display = "block";
    }else{
        position.style.display = "none";
        document.getElementById("description_textArea").style.border="1px solid #EF5050";
    }
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
        warning.id = "warning-sign"+count;
        warning.className = "warning-sign";
        warning.style.left = "822px";
        warning_1.id = "warning-1-sign"+count;
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
        beginning_input.id = "beginning_input"+count;
        beginning_input.type = "date";
        beginning_input.style.left = "0px";
        end_input.id = "end_input"+count;
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
        warning_1.style.top = input.offsetTop + (12) + 'px';
        warning.style.top = input.offsetTop + (12) + 'px';
        if(i == 0){
            btn.style.top = btn.offsetTop + (647) + 'px';
            btn_1.style.top = btn_1.offsetTop + (647)  + 'px';
            btn_2.style.top = btn_2.offsetTop + (647)  + 'px';
        }else{
            btn.style.top = btn.offsetTop + (647) + 'px';
            btn_1.style.top = btn_1.offsetTop + (647) + 'px';
            btn_2.style.top = btn_2.offsetTop + (647) + 'px';
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
    let count = 0;
    count++;
    if(localStorage.getItem("count")){
        count += parseInt(localStorage.getItem("count"));
        localStorage.setItem("count",count);
    }else{
        localStorage.setItem("count",count);
    }
    warning.id = "warning-sign"+count;
    warning.className = "warning-sign";
    warning.style.left = "822px";
    warning_1.id = "warning-1-sign"+count;
    warning_1.className = "warning-sign";
    warning_1.style.left = "822px";
    bottom_line.id = "bottom_line";
    bottom_line.style.left = "0px";
    bottom_line.style.top = "631px";
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
    warning_1.style.top = input.offsetTop + (12) + 'px';
    warning.style.top = input.offsetTop + (12) + 'px';
}