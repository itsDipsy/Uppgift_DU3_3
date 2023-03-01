
async function server_connection(request) {
    clear_inputs();
    reset_error_dom();
    sever_connect_dom_start("server");

    try {
        let response = await fetch(request);

        switch (response.status) {
            case 418:
                ima_teapot();
                break;

            case 400:
                set_error_dom_message(true, false);
                break;

            case 409:
                console.log("409 fix the rest")
                break;
        }

        if (is_login_or_register_bool() === "register") {
            // hära ska wrong domen fucntionen vara
            reset_error_dom(); // Denna if sats gör så att det inte poppar up en wrong message som i login om allt är tomt eller fel
        }


        let resource = await response.json();
        console.log(resource);
        server_connect_dom_end();
        return resource;
    }
    catch (error) {
        clear_inputs();
        server_connect_dom_end(); // för att ta bort den senaste
        set_error_dom_message(false, true)
    }
}