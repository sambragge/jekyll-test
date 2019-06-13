function sendData(e){

  const form = document.getElementById("form"),
    type = form.children[0].value,
    name = form.children[1].value,
    email = form.children[2].value

    // check for any partial data
    if (name != "" || email != "") {

      // send data to proper route
      const data = {
        type,
        name,
        email,
        workingWithAgent: document.getElementById("isWorkingWithAgent").checked ? true:false
      };
      const options = {
        method: "POST",
        body: JSON.stringify(data)
      };

      // fetch("/api/end/point/", options)
      //   .then(res => res.json())
      //   .then(res => console.log(res))
      //   .catch(err => console.error(err));

    }
}

window.addEventListener("beforeunload", sendData)
