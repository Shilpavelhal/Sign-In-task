//alert("hello");
const cl = console.log;

const signInForm = document.getElementById("signInForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

let emailFormDb = "jhon@wick.com";
let passwordFormDb = "jhon@123";



const onSignHandler = (eve) => {
    eve.preventDefault();
    cl("sign In !!!");
    let emailVal = email.value;
    let passwordVal = password.value;

    if(emailVal === emailFormDb && passwordVal === passwordFormDb){
        //alert(`Sign In Successfully`);
        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Sign In Successfully',
            showConfirmButton: false,
            timer: 3000
          })
          
        signInForm.reset();
        return true;
    }else{
        //alert(`Invalid Username or Password`);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            timer: 3000
          })
        signInForm.reset();
        return false;
    }
}
 

signInForm.addEventListener("submit", onSignHandler);



