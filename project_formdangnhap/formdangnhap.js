// function handlechange(value) {
//     var inputValue = document.getElementById("tk").value
//     console.log(inputValue,'inputValue');
//     if(!inputValue) {
//         console.log(123);
//     } else {
// //         checkEmail();
// //     }
// };
function checkUsername() {
    let x = document.getElementById("tk").value;
    let text='';
    if ( x=== "" || x.length < 5 || x.length>50  ) {
        text="Invalid Username !!!";
    }
    
    document.getElementById("alert1").innerHTML = text;
}
function checkEmail() {
    let email = document.getElementById("em").value;
    let text='';    // Biểu thức chính quy để kiểm tra địa chỉ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        text = "Invalid Email !!!";
    }
    document.getElementById("alert2").innerHTML = text;
}
function checkPassword() {
    let password = document.getElementById("mk").value;
    let text='';    
    // Kiểm tra tính hợp lệ của mật khẩu
    // Yêu cầu ít nhất 8 ký tự, bao gồm ít nhất một chữ cái chữ thường, một chữ cái chữ hoa và một chữ số.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        text = "Invalid Password !!!";
    }
    originalpassword = password ; 
    document.getElementById("alert3").innerHTML = text;
}
function checkPasswordmore() {
    let password = document.getElementById("mk2").value;
    let text='';    
    // Kiểm tra tính hợp lệ của mật khẩu
    // Yêu cầu ít nhất 8 ký tự, bao gồm ít nhất một chữ cái chữ thường, một chữ cái chữ hoa và một chữ số.
    if (password !== originalpassword) {
        text = "Password don't match !!!";
    } 
    document.getElementById("alert4").innerHTML = text;
}
document.getElementById("login").addEventListener("click",function() {
    alert("Login successfull");
})
