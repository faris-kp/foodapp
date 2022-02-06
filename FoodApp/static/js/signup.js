const usernameField=document.querySelector("#usernameField");
const emailField = document.querySelector("#emailField");


emailField.addEventListener("keyup", (e) =>{
    console.log("enter emailfieled")
    const emailVal = e.target.value;
    console.log("email",emailVal)
    emailField.classList.remove("fm-inavlid")
    emailField.classList.add("fm-valid")
    $('.email_error').hide();
    if (emailVal.length > 0) {
        fetch("signup", {
          body: JSON.stringify({ email: emailVal }),
          method: "POST",
        })
        .then((res) => res.json())
        .then((data) => {
        console.log("data", data);
        if (data.email_error) {
            console.log("enter emailfielederror")
            emailField.classList.remove("fm-valid")
            emailField.classList.add("fm-inavlid")
            $('.email_error').show();
            $(`.email_error`).html(`<ul class="errorlist"><li>${data.email_error}</li></ul>`);
        }
    });
     }
    });
usernameField.addEventListener("keyup", (e) => {
    console.log('4444',44444);
    const usernameVal = e.target.value;
    console.log("user",usernameVal)
    usernameField.classList.remove("fm-inavlid")
    usernameField.classList.add("fm-valid")
    $('.image_error').hide();
    if (usernameVal.length > 0)
    {
    fetch("signup", { 
        body: JSON.stringify({ username: usernameVal }),
        method:"POST",
     })
    .then((res) => res.json())
    .then((data) => {
        console.log("data",data)
        if(data.username_error){
            usernameField.classList.remove("fm-valid")
            usernameField.classList.add("fm-inavlid")
            $('.image_error').show();
            $(`.image_error`).html(`<ul class="errorlist"><li>${data.username_error}</li></ul>`);
        }
    });
     }
    });
    