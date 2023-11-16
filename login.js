function Login() {

    player_name = document.getElementById("playername").value;
    localStorage.setItem("playername", playername);

    window.location = "gamepage.html";
}
