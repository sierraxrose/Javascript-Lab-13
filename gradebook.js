$(document).ready( function () {



    $("#submit").click(function (event) {

        event.preventDefault();

        // collect all of the inputs
        let firstNameInput = document.getElementById("firstName").value;
        let lastNameInput = document.getElementById("lastName").value;
        let pointsEarnedInput = document.getElementById("pointsEarned").value;
        let pointsPossibleInput = document.getElementById("pointsPossible").value;

        // create a variable to calculate grade percentage

        let gradeInput = pointsEarnedInput / pointsPossibleInput;


        // create a variable to calculate letter grade

        let letterGrade = "";

        if (gradeInput >= .90 && gradeInput <= 1.0) {
            letterGrade = "A";
        }
        if (gradeInput >= .80 && gradeInput <= .89) {
            letterGrade = "B";
        }
        if (gradeInput >= .70 && gradeInput <= .79) {
            letterGrade = "C";
        }
        if (gradeInput >= .60 && gradeInput <= .69) {
            letterGrade = "D";
        }
        if (gradeInput >= .50 && gradeInput <= .59) {
            letterGrade = "F";
        }

        let percentage = (gradeInput * 100) + "%";

        // make object for all the data

        let grade = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            percentageOutput: percentage,
            letterGradeOutput: letterGrade
        };

        $("p#gradeOutput").text(grade.firstName + "  " +   grade.lastName + "  " +  grade.percentageOutput + "  " + grade.letterGradeOutput);

    })
})