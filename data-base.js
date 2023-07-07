fetch("https://studentprofile.onrender.com/student")
.then(response => response.json())
.then(data => {
 console.log(data)

})
.catch(error => {
    console.log("Error:", error);
  });
