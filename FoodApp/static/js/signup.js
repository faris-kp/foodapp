const usernameField=document.querySelector("#usernameField");


usernameField.addEventListener("keyup", (e) => {
    console.log('4444',44444);
    const usernameVal = e.target.value;
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
    