function init_login_register() {
    let login_register_component = document.createElement("div");
    login_register_component.innerHTML = `
   
   `;

    document.querySelector("main").appendChild(login_register_component);

    document.querySelector(".login_button").addEventListener("click", server_connection());
    document.querySelector(".register_button").addEventListener("click", server_connection());
}

