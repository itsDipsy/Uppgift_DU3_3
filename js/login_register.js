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
        </div>
    `;
    document.querySelector("main").appendChild(login_register_component);

    document.querySelector(".register_button").style.display = "none";

    document.querySelector(".login_button").addEventListener("click", server_connection);
    document.querySelector(".register_button").addEventListener("click", server_connection);
}
