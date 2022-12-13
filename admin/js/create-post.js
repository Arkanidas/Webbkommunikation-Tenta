let title = document.getElementById("createTitle")
let author = document.getElementById("createAuthor")
let textArea = document.getElementById("createText")
let form = document.getElementById("createForm")

form.addEventListener("submit", async function(e){
    const form = e.target
    e.preventDefault();
   try{ await fetch("https://blog-api-assignment.up.railway.app/posts", {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataObject)
    })
    }catch(error){
        console.log(error)
    }
    console.log("test")
})



let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    // console.log(formData.getAll());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};
let formDataObject = serializeForm(form);