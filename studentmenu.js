// Function to make the correct menu visible based on selection
function studentMenuOption()
{
    // Set all menus to hidden
    document.getElementById("addAssignmentMenu").style.display = "none";
    document.getElementById("removeAssignmentMenu").style.display = "none";
    document.getElementById("editAssignmentGradeMenu").style.display = "none";

    if (document.getElementById("addAssignmentRadio").checked)
    {
    document.getElementById("addAssignmentMenu").style.display = "block";
    }
    else if (document.getElementById("removeAssignmentRadio").checked)
    {
        populateRemoveAssignmentDropdown();
        document.getElementById("removeAssignmentMenu").style.display = "block";
    }
}

// Function to add assignments to student
function addAssignment()
{
    var assignmentName = document.getElementById("addAssignmentText").value;

    var newAssignment = document.createElement("li");
    newAssignment.appendChild(document.createTextNode(assignmentName));

    document.getElementById("currentAssignments").appendChild(newAssignment);
}

// Function to populate the dropdown in the remove assignment menu
function populateRemoveAssignmentDropdown()
{
    // Remove everything currently in the dropdown
    while (document.getElementById("removeAssignmentDropdown").length != 0)
    {
        console.log("banana");
        document.getElementById("removeAssignmentDropdown")[0].remove();
    }

    var assignmentList = document.getElementById("currentAssignments");
    for (var i = 0; i < assignmentList.children.length; i++)
    {
        var newAssignment = document.createElement("option");
        newAssignment.innerHTML = assignmentList.children[i].innerHTML;

        document.getElementById("removeAssignmentDropdown").appendChild(newAssignment);
    }
}

// Function to remove the assignment from list in information menu
function removeAssignment()
{
    // Get the name of the assignment to be removed
    var assignmentName = document.getElementById("removeAssignmentDropdown").value;

    var assignmentList = document.getElementById("currentAssignments");
    for (var i = 0; i < assignmentList.children.length; i++)
    {
        if (assignmentList.children[i].innerHTML == assignmentName)
        {
            assignmentList.children[i].remove();
        }
    }

    // Repopulate the dropdown so the removed option is also removed
    populateRemoveAssignmentDropdown();
}

// Function to populate the dropdown in the remove assignment menu
function populateRemoveAssignmentDropdown()
{
    // Remove everything currently in the dropdown
    while (document.getElementById("removeAssignmentDropdown").length != 0)
    {
        console.log("banana");
        document.getElementById("removeAssignmentDropdown")[0].remove();
    }

    var assignmentList = document.getElementById("currentAssignments");
    for (var i = 0; i < assignmentList.children.length; i++)
    {
        var newAssignment = document.createElement("option");
        newAssignment.innerHTML = assignmentList.children[i].innerHTML;

        document.getElementById("removeAssignmentDropdown").appendChild(newAssignment);
    }
}