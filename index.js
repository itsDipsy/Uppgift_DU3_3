console.log(localStorage);
if (localStorage.length === 1) {
    init_quiz_component(localStorage.getItem("user_logged_in"));
}
else {
    init_login_register();
}