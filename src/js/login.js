addEventListener("DOMContentLoaded", (event) => {
    const btnSub = document.getElementById("btn-submit");

    btnSub.addEventListener('click', (event) => {
        event.preventDefault();
        const formElement = document.getElementById("form-login");
        const formData = new FormData(formElement);
        const email = formData.get('email');
        const password = formData.get('password');

        console.log(`username: ${email}, senha: ${password}`);

        if(email && password){
            const data = {
                username: email,
                password: password
            };
        
            axios.post('http://localhost:8080/login', data)
            .then(response => {
                console.log('Resposta:', response.data);
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
        }
    
    });


});