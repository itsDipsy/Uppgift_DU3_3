async function server_connection(request) {
    clear_inputs();
    reset_error_dom();

    try {
        let response = await fetch(request);
        console.log(response);
        switch (response.status) {
            case 418:

                ima_teapot();
                break;

            case 409:

                let taken_name_dom = document.createElement("div");
                taken_name_dom.classList.add("fetch_await_dom");
                taken_name_dom.innerHTML = `
                <div>
                    <h2>That name is already taken</h2>
                    <button class="exit">Exit</button>
                </div>
                `;
                document.body.appendChild(taken_name_dom);
                document.querySelector(".exit").addEventListener("click", () => {
                    taken_name_dom.remove();
                })
                break;
        }

        if (is_login_or_register_bool() === "register") {
            // hära ska wrong domen fucntionen vara
            reset_error_dom(); // Denna if sats gör så att det inte poppar up en wrong message som i login om allt är tomt eller fel// gör hela complete dom:en eller reject dom:en
            if (response.status === 200) {
                register_complete_or_not(response.ok);
            }

            if (response.status === 400) {
                register_complete_or_not(response.ok);
            }
        }


        let resource = await response.json();
        return resource;
    }
    catch (error) {
        clear_inputs();
        set_error_dom_message(false, true)
    }
}