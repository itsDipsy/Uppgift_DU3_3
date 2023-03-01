function init_quiz_component(username) {
    document.querySelector("main").innerHTML = "";
    document.querySelector(".link_wrapper").style.display = "none";
    document.body.style.backgroundColor = "skyblue";
    let quiz_component = document.createElement("div");
    quiz_component.innerHTML = `
        <div class="quiz_wrapper">
            <div class="login_wrapper">
                <div class="users_name">${username}</div>
                <div class="logout">Logout</div>
            </div>

            <div class="image"></div>

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
        init_login_register();
    })
    get_dogs();
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
}
