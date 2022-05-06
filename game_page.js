function send()
{
    number_1 = document.getElementById("Number1").value;
    number_2 = document.getElementById("Number2").value;
    actual_ans = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    inputbox = "<br> Answer : <input type='text' id='answer_box'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()' ></button>"
    row = question_number + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    number_1 = document.getElementById("Number1").value ="";
    number_2 = document.getElementById("Number2").value ="";
}

