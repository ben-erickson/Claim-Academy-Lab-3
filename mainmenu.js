// Get the option selected in the main menu, and show the corresponding div
function mainMenuOption()
{
    // Set all the divs to hidden
    document.getElementById("addClassroomMenu").style.display = "none";
    document.getElementById("removeClassroomMenu").style.display = "none";
    document.getElementById("viewDetailsMenu").style.display = "none";

    if (document.getElementById("addClassroomRadio").checked)
    {
        document.getElementById("addClassroomMenu").style.display = "block";
    }
    else if (document.getElementById("removeClassroomRadio").checked)
    {
        document.getElementById("removeClassroomMenu").style.display = "block";
    }
    else if (document.getElementById("viewClassroomRadio").checked)
    {
        document.getElementById("viewDetailsMenu").style.display = "block";
    }
}

function addClassroom()
{
    // This will also create the classroom object, but not at the moment
    var classroomName = document.getElementById("classroomNameText").value;

    var newClassroom = document.createElement("li");
    newClassroom.appendChild(document.createTextNode(classroomName));

    document.getElementById("classroomList").appendChild(newClassroom);
}

// Remove the selected classroom from the list
function removeClassroom()
{
    // NOTE: This is currently using hardcoded data, will need to modify when data is no longer hard coded
    var removeCombo = document.getElementById("removeClassroomCombo");

    if (removeCombo.value == "A1") 
    {
        document.getElementById("A1Classroom").remove();
        document.getElementById("A1Dropdown").remove();
    }
    else if (removeCombo.value == "B1")
    {
        document.getElementById("B1Classroom").remove();
        document.getElementById("B1Dropdown").remove();
    }
    else if (removeCombo.value == "C3")
    {
        document.getElementById("C3Classroom").remove();
        document.getElementById("C3Dropdown").remove();
    }
    else 
    {
        console.log("Classroom could not be found.");
    }
}

// Open the classroom page with the corresponding selected classroom
function viewClassroomDetails()
{
    // NOTE: This is currently using hardcoded data, will need to modify when data is no longer hard coded

    // This will, eventually, send a classroom object to the next page, but for now it is not
    window.open("classroommenu.html");
}