fetch("https://studentprofile.onrender.com/student")
.then(response => response.json())
.then(data => {
 console.log(data)
    const main = document.getElementById("school-data")
    const listName = document.getElementById("student-name")

    // iterate 
    data.forEach((student) => {
        let studentNames = document.createElement("li")
        studentNames.textContent = student.first_name
        listName.appendChild(studentNames)

        const studentProfile = document.createElement("div");
        
    }) 
})
.catch(error => {
    console.log("Error:", error);
  });
