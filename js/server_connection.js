async function server_connection(request) {

    sever_connect_dom_start(); // Just a test for the CSS
    let response = await fetch(request);
    console.log(response)
    let resource = await response.json();
    console.log(resource);
    server_connect_dom_end();
    return resource;
}

function sever_connect_dom_start() {
    let await_dom = document.createElement("div");
    await_dom.classList.add("fetch_await_dom");
    await_dom.innerHTML = `
        <div>
            <h2>Fetching server ...</h2>
        </div>
    `;
    document.body.appendChild(await_dom);
}

function server_connect_dom_end() {
    document.querySelector(".fetch_await_dom").remove();
}
