function init_quiz_component() {
    console.log(localStorage)
    document.querySelector("main").innerHTML = "";
    document.querySelector(".link_wrapper").style.display = "none";
    document.body.style.backgroundColor = "skyblue";
    let quiz_component = document.createElement("div");
    quiz_component.innerHTML = `
        <div class="quiz_wrapper">
            <div class="login_wrapper">
                <div class="users_name">${localStorage.getItem("user_logged_in")}</div>
                <div class="logout">Logout</div>
            </div>
            <img class="image" src="./media/logo.png" alt="">

            <div class="quiz_box_wrapper">
                <div class="quiz_box"></div>
                <div class="quiz_box"></div>
                <div class="quiz_box"></div>
                <div class="quiz_box"></div>
            </div>
        </div>
    `;
    document.querySelector("main").appendChild(quiz_component)
    document.querySelector(".logout").addEventListener("click", () => {
        localStorage.clear();
        init_login_register();
    })
    let right_dog = get_dogs();
    get_image(right_dog.url)
    document.querySelectorAll(".quiz_box").forEach((each_box_dom, index) => {
        each_box_dom.addEventListener("click", (event) => {
            if (event.target.innerHTML === right_dog.name) {
                right_or_wrong_answer(true, false);
            }
            else {
                right_or_wrong_answer(false, true);
            }
        })
    })
}

function get_dogs() {
    let the_quiz_dog_arr = [];
    for (let i = 0; i < 4; i++) {
        let random_dog_number = Math.floor(Math.random() * ALL_BREEDS.length);
        let random_dog = ALL_BREEDS[random_dog_number];
        document.querySelectorAll(".quiz_box")[i].innerHTML = `${random_dog.name}`
        the_quiz_dog_arr.push(random_dog);
    }
    let the_right_dog_in_quiz_number = Math.floor(Math.random() * the_quiz_dog_arr.length);
    let the_right_dog_in_quiz = the_quiz_dog_arr[the_right_dog_in_quiz_number]
    console.log(the_right_dog_in_quiz)

    return the_right_dog_in_quiz;
}

async function get_image(right_dog_url) {

    server_connect_dom_start(false, true)
    document.querySelector(".image").setAttribute("src", "./media/logo.png")
    let request = new Request(`https://dog.ceo/api/breed/${right_dog_url}/images/random`);
    let resource = await server_connection(request);
    document.querySelector(".image").setAttribute("src", resource.message)
    server_connect_dom_end();
}

function right_or_wrong_answer(right, wrong) {
    if (right === true) {
        let right_answer_dom = document.createElement("div");
        right_answer_dom.classList.add("fetch_await_dom");
        right_answer_dom.innerHTML = `
        <div class="right">
            <h2>Right answer</h2>
            <button class="exit">Exit</button>
        </div>
        `;
        document.body.appendChild(right_answer_dom);
        document.querySelector(".exit").addEventListener("click", () => {
            right_answer_dom.remove();
            init_quiz_component()
        })
        document.querySelector(".right").style.backgroundColor = "lightGreen";
    }
    if (wrong === true) {
        let wrong_answer_dom = document.createElement("div");
        wrong_answer_dom.classList.add("fetch_await_dom");
        wrong_answer_dom.innerHTML = `
        <div class="wrong">
            <h2>Wrong answer</h2>
            <button class="exit">Exit</button>
        </div>
        `;
        document.body.appendChild(wrong_answer_dom);
        document.querySelector(".wrong").style.backgroundColor = "tomato";
        document.querySelector(".exit").addEventListener("click", () => {
            wrong_answer_dom.remove();
            init_quiz_component();
        })
    }
}

