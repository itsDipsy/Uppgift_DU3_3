<<<<<<< Updated upstream
function init_login_register() {
    let login_register_component = document.createElement("div");
    login_register_component.innerHTML = `
        <div class="input_wrapper">
            <div>Username: </div>
            <input type="text">´
            <div>Password: </div>
            <input type="text">
            <p class="error_message_dom"></p>
            <button class="login_button">Login</button>
            <button class="register_button">Register</button>
=======
<<<<<<< Updated upstream
=======
function init_login_register() {
    document.body.style.backgroundColor = "turquoise";
    let login_register_component = document.createElement("div");
    login_register_component.innerHTML = `
        <div class="input_wrapper">
            <h1 class="slogan">Login</h1>
            <div>
                <div>Username: </div>
                <input class="username" type="text">
                <div>Password: </div>
                <input class="password" type="password">        
            </div>
            
            <p class="error_message_dom"></p>
            <button class="login_button">Login</button>
            <button class="register_button">Register</button>

            <p class="toggle_link">New to this site, click here to register</p>
>>>>>>> Stashed changes
        </div>
    `;
    document.querySelector("main").appendChild(login_register_component);

    document.querySelector(".register_button").style.display = "none";

<<<<<<< Updated upstream
    document.querySelector(".login_button").addEventListener("click", server_connection);
    document.querySelector(".register_button").addEventListener("click", server_connection);
}
=======
    document.querySelector(".toggle_link").addEventListener("click", switch_reg_or_log)



    document.querySelector(".login_button").addEventListener("click", () => {
        let request_login = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${document.querySelector(".username").value}&password=${document.querySelector(".password").value}`);
        server_connection(request_login);
    });

    document.querySelector(".register_button").addEventListener("click", () => {
        let request_register = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${document.querySelector(".username").value}&password=${document.querySelector(".password").value}`);
        server_connection(request_login);
    });
}


function switch_reg_or_log() {
    document.querySelector(".toggle_link").classList.toggle("selected");

    if (document.querySelector(".toggle_link").classList.contains("selected")) {
        document.body.style.backgroundColor = "green";
        document.querySelector(".login_button").style.display = "none";
        document.querySelector(".register_button").style.display = "block";
        document.querySelector(".slogan").innerHTML = "Register";
        document.querySelector(".toggle_link").innerHTML = "Already got a account, login in here"
    }
    else {
        document.body.style.backgroundColor = "turquoise";

        document.querySelector(".login_button").style.display = "block";
        document.querySelector(".register_button").style.display = "none";
        document.querySelector(".slogan").innerHTML = "Login";
        document.querySelector(".toggle_link").innerHTML = "New to this site, click here to register"
    }

}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
