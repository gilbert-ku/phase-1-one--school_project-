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

        //Add event listener to names
        studentNames.addEventListener("click", () => {
            const studentProfile = document.createElement("div");
            studentProfile.innerHTML = `
            
            <h1>Student Profile </h1>
            <p>First name; ${student.first_name}</p>
            <p>LAst name; ${student.last_name}</p>
            <p>Gender; ${student.gender}</p>
            <p>Admission Number; ${student.admin_No}</p>
            <p>Class; ${student.class}</p>
            <p>Last Exam; ${student.End_term_Exam}</p>
    
            `
            main.appendChild(studentProfile)
    
        })
        
    }) 
})
.catch(error => {
    console.log("Error:", error);
  });
