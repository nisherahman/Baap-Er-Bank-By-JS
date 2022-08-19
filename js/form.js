document.getElementById('submit-btn').addEventListener('click', function(){
    //emaill field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    //paddword field
    const passField = document.getElementById('pass-field');
    const password = passField.value;
    //
    if(email === 'nisherahman@gmail.com' && password === '1234'){
        console.log('valid user');
    }
    else{
        alert('invalid user');
    }
})