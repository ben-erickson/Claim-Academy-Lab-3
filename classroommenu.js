// Function to display the selected menu based on selected radio button
function classroomMenuOption()
{
    // There is likely a way to do this through iterating through the css class
    document.getElementById("addStudentMenu").style.display = "none";
    document.getElementById("removeStudentMenu").style.display = "none";
    document.getElementById("viewAverageMenu").style.display = "none";
    document.getElementById("topBottomMenu").style.display = "none";
    document.getElementById("editStudentMenu").style.display = "none";

    if (document.getElementById("addStudentRadio").checked)
    {
        document.getElementById("addStudentMenu").style.display = "block";
    }
    else if (document.getElementById("removeStudentRadio").checked)
    {
        document.getElementById("removeStudentMenu").style.display = "block";
    }
    else if (document.getElementById("viewAverageRadio").checked)
    {
        document.getElementById("viewAverageMenu").style.display = "block";
    }
    else if (document.getElementById("topBottomRadio").checked)
    {
        document.getElementById("topBottomMenu").style.display = "block";
    }
    else if (document.getElementById("editStudentRadio").checked)
    {
        populateEditStudentMenu();
        document.getElementById("editStudentMenu").style.display = "block";
    }
}

// Function to add student to ul
function addStudent()
{
    var studentName = document.getElementById("studentNameText").value;

    var newStudent = document.createElement("li");
    newStudent.appendChild(document.createTextNode(studentName));

    document.getElementById("studentList").appendChild(newStudent);
}

// Function to populate dropdown in the edit student menu
function populateEditStudentMenu()
{
    // Delete the existing options in the dropdown
    while (document.getElementById("editStudentDropdown").length > 0)
    {
        document.getElementById("editStudentDropdown")[0].remove();
    }

    var studentList = document.getElementById("studentList");
    for (var i = 0; i < studentList.children.length; i++)
    {
        var newStudent = document.createElement("option");
        newStudent.innerHTML = studentList.children[i].innerHTML;

        document.getElementById("editStudentDropdown").appendChild(newStudent);
    }
}

// Function to open the student menu
function viewStudentDetails()
{
    window.open("studentmenu.html");
}