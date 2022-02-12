const usernameField=document.querySelector("#usernameField");
const emailField = document.querySelector("#emailField");
const usernameSuccessOutput= document.querySelector(".usernameSuccessOutput")
const emailSuccessOutput = document.querySelector(".emailSuccessOutput")


emailField.addEventListener("keyup", (e) =>{
    console.log("enter emailfieled")
    const emailVal = e.target.value;
    
    if(emailVal.length>0){
        emailSuccessOutput.style.display="block"
        emailSuccessOutput.textContent = `cheking ${emailVal}`
    }
    else{
        emailSuccessOutput.style.display="none"
    }
    
    
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
            emailSuccessOutput.style.display="none"
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
    const usernameVal = e.target.value;
    if (usernameVal.length > 0){
        usernameSuccessOutput.style.display="block"
        usernameSuccessOutput.textContent = `cheking ${usernameVal}`
    }
    else{
        usernameSuccessOutput.style.display="none"
    }
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
            usernameSuccessOutput.style.display="none"
            usernameField.classList.remove("fm-valid")
            usernameField.classList.add("fm-inavlid")
            $('.image_error').show();
            $(`.image_error`).html(`<ul class="errorlist"><li>${data.username_error}</li></ul>`);
        }
    });
     }
    });