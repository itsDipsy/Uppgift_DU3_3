async function server_connection(request) {
    clear_inputs();
    reset_error_dom();
    sever_connect_dom_start("server");

    try {
        let response = await fetch(request);

        if (response.status === 200) {

        }
        if (response.status === 418) {
            ima_teapot();
        }
        if (is_login_or_register_bool() === "register") {

        }
        else {
            set_error_dom_message(true, false);
        }

        console.log(response)
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
