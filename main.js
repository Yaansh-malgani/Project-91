function addUser()
{
    Player_1 = document.getElementById("Player1").value;
    Player_2 = document.getElementById("Player2").value;

    localStorage.setItem("Player1", Player_1);
    localStorage.setItem("Player2", Player_2);
}