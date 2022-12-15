const div = document.querySelector(".mydiv");
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Fetch the full post data using the post id

async function GetPost(){
  try {
    const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`);
    if(response.ok === false){
      throw new Error("Something happened, please try again");
    }

    const post = await response.json();
 

div.innerHTML = `

<h1> ${post.title} </h1>
<i>${post.author} |</i>
<i>${post.date}</i><br><br>

<strong>Tags: </strong> <p>${post.tags}</p>

<p>${post.content}</p>

<a href="index.html">back</a>
<hr>

`;


  } 
  
  catch (error) {
   console.log("error try again")
   error = ("something went wrong")
  }
}

GetPost();
