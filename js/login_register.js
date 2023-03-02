function init_login_register() {

    document.querySelector("main").innerHTML = "";
    document.querySelector(".link_wrapper").style.display = "flex"; // Behövs för att annars kommer den försvinna om den om man loggar ut från quiz
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

            <p id="error_message_dom"></p>
            <button class="login_button">Login</button>
            <button class="register_button">Register</button>
        </div>
    `;
    document.querySelector("main").appendChild(login_register_component);

    document.querySelector(".register_button").style.display = "none";

    document.querySelector(".toggle_link").addEventListener("click", switch_reg_or_log)



    document.querySelector(".login_button").addEventListener("click", async () => {
        let request_login = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${document.querySelector(".username").value}&password=${document.querySelector(".password").value}`);
        let resource = await server_connection(request_login);
        if (resource.data !== null) {
            init_quiz_component(resource.data.user_name);
        }
        if (resource.data === null) {
            set_error_dom_message(true, false)
        }
    });

    document.querySelector(".register_button").addEventListener("click", async () => {
        let request_register = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${document.querySelector(".username").value}&password=${document.querySelector(".password").value}`);
        server_connection(request_register);
    });
}


function switch_reg_or_log() {
    document.querySelector("#error_message_dom").classList.remove("error_message_dom");
    document.querySelector("#error_message_dom").innerHTML = "";

    document.querySelector(".toggle_link").classList.toggle("selected");

    if (document.querySelector(".toggle_link").classList.contains("selected")) {
        clear_inputs();

        document.body.style.backgroundColor = "green";

        components_name_change(false, true) // Denna initiserar components namnen för register DOM:
    }
    else {

        clear_inputs();
        document.body.style.backgroundColor = "turquoise";
        components_name_change(true, false) // Denna initiserar components namnen för login DOM:sen

    }
}
