//Hämtar alla posts på hemsidan 

async function GetPost(){

    let div = document.querySelector(".mydiv");
  
    

try{
    const response = await fetch ("https://blog-api-assignment.up.railway.app/posts/");

    if(response.ok === false){

        throw new Error("Something happend please try again");
    }
    
    
    const posts = await response.json();


for(let post of posts){

let content100 = post.content.substring(0,100);


div.innerHTML+= `

<h2> ${post.title} </h2>
<i>${post.author} |</i>
<i>${post.date}</i><br><br>

<strong>Tags: </strong> <p>${post.tags}</p>

<p>${content100 + "..."}</p>


<a href="post.html?id=${post._id}">Read more</a>
<hr>
`;



}
    

}


    catch(error) {

  error = ("Something went wrong");
    }



}

GetPost(); 
