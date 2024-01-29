// form validation
let form_contact_input = document.getElementById("contact_form");
form_contact_input.addEventListener("submit", contact_form_func);

function contact_form_func(event) {
    event.preventDefault();
    let phone_num1 = event.target.phone_num1.value;
    let phone_num2 = event.target.phone_num2.value;
    let email = event.target.email.value;
    let phone_num3 = event.target.phone_num3.value;
    let linked_url = event.target.linked_url.value;

    let num_checker = "^[0-9]+$";
    let email_checker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let url_checker = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    //   showMessage()
    //  check phone # function
    function phone_number_checker(phone_num, phone_error_message) {
        if (phone_num.length == 10 && phone_num.match(num_checker)) {
            return true;
        } else {
            phone_error_message.style.display = "flex";
            return false;
        }
    }

    //check email function
    function email_checker_fun(email, email_error_message) {
        if (email.match(email_checker)) {
            return true;
        } else {
            email_error_message.style.display = "flex";
            return false;
        }
    }
    //check url function
    function url_checker_fun(url_link, url_error_message) {
        if (url_link.match(url_checker)) {
            return true;
        } else {
            url_error_message.style.display = "flex";
            return false;
        }
    }

    //   phone numnber input
    const isPhoneNumValid1 = phone_number_checker(
        phone_num1,
        document.querySelector(".message_phone1")
    );
    const isPhoneNumValid2 = phone_number_checker(
        phone_num2,
        document.querySelector(".message_phone2")
    );
    const isPhoneNumValid3 = phone_number_checker(
        phone_num3,
        document.querySelector(".message_phone3")
    );
   
    //   email input
    const emailValid = email_checker_fun(
        email,
        document.querySelector(".message_email")
    );
   
    // url input
    const urlValid = url_checker_fun(
        linked_url,
        document.querySelector(".message_url")
    );

    // Message show 
    if (isPhoneNumValid1 && isPhoneNumValid2 && isPhoneNumValid3 && emailValid && urlValid) {
        console.log(isPhoneNumValid1,"isph1");
        console.log(isPhoneNumValid2,"isph2");
        console.log(isPhoneNumValid3,"isph3");
        console.log(emailValid,"emailValid");
        console.log(urlValid,"urlValid");
        showMessage()
    }
}

// function to show popup
function showMessage() {
    document.querySelector(".bg-model").style.display = "flex";
}
// function to show popup end
// close popup msg
document.querySelector(".close-button").addEventListener("click", function () {
    document.querySelector(".bg-model").style.display = "none";
    window.location.href = "../contact_page.html";
});

document.getElementById("button_cancel_page").addEventListener("click",function(){
    window.location.href = "../contact_page.html";
})