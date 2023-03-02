function reset_error_dom() {
    if (document.querySelector("#error_message_dom") !== null) {
        document.querySelector("#error_message_dom").innerHTML = "";
        document.querySelector("#error_message_dom").classList.remove("error_message_dom");
    }
}

function set_error_dom_message(wrong_crendt, error) {
    if (wrong_crendt === true) {
        document.querySelector("#error_message_dom").innerHTML = "Wrong User credentials";
        document.querySelector("#error_message_dom").classList.add("error_message_dom");
    }
    else {
        document.querySelector("#error_message_dom").innerHTML = "There was an error try again";
        document.querySelector("#error_message_dom").classList.add("error_message_dom");
    }
}

function server_connect_dom_start(server, dog) {
    let await_dom = document.createElement("div");
    await_dom.classList.add("fetch_await_dom");
    if (server === true) {
        await_dom.innerHTML = `
            <div>
                <h2>Fetching server ...</h2>
            </div>
        `;
    }

    if (dog === true) {
        await_dom.innerHTML = `
        <div>
            <h2>Fetching image ...</h2>
        </div>
        `;
    }

    document.body.appendChild(await_dom);
}

function server_connect_dom_end() {
    document.querySelector(".fetch_await_dom").remove();
}

function components_name_change(is_login, is_register) {
    if (is_login) {

        document.querySelector(".login_button").style.display = "block";
        document.querySelector(".register_button").style.display = "none";
        document.querySelector(".slogan").innerHTML = "Login";
        document.querySelector(".toggle_link").innerHTML = "New to this site, click here to register"
    }

    if (is_register) {
        document.querySelector(".login_button").style.display = "none";
        document.querySelector(".register_button").style.display = "block";
        document.querySelector(".slogan").innerHTML = "Register";
        document.querySelector(".toggle_link").innerHTML = "Already got a account, login in here"

    }
}

function clear_inputs() {
    let all_inputs = document.querySelectorAll("input");
    if (all_inputs[0] !== undefined && all_inputs[1] !== undefined) {
        all_inputs[0].value = "";
        all_inputs[1].value = "";
    }
}

function ima_teapot() {
    let tea_pot_dom = document.createElement("div");
    tea_pot_dom.classList.add("fetch_await_dom");
    tea_pot_dom.innerHTML = `
        <div>
            <h2>The server thinks its not a teapot</h2>
            <button class="exit">Exit</button>
        </div>
    `
    document.body.appendChild(tea_pot_dom);
    document.querySelector(".exit").addEventListener("click", () => {
        tea_pot_dom.remove();
    })
}

function is_login_or_register_bool() {
    if (document.querySelector(".toggle_link").classList.contains("selected") === true) {
        return "register";
    }
    else {
        return "login";
    }
}

function register_complete_or_not(data) {
    if (data === true) {
        let register_complete_dom = document.createElement("div");
        register_complete_dom.classList.add("fetch_await_dom");
        register_complete_dom.innerHTML = `
                <div>
                    <h2>Register complete</h2>
                    <button class="exit">Exit</button>
                </div>
            `
        document.body.appendChild(register_complete_dom);
        document.querySelector(".exit").addEventListener("click", () => {
            register_complete_dom.remove();
        })
    }
    else {
        let register_reject_dom = document.createElement("div");
        register_reject_dom.classList.add("fetch_await_dom");
        register_reject_dom.innerHTML = `
                <div>
                    <h2>Bad request</h2>
                    <button class="exit">Exit</button>
                </div>
            `
        document.body.appendChild(register_reject_dom);
        document.querySelector(".exit").addEventListener("click", () => {
            register_reject_dom.remove();
        })
    }
}