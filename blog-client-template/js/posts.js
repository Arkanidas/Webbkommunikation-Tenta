//Hämtar alla posts på hemsidan 

async function GetPost(){

    let post0 = document.querySelector(".post_0");
    let post1 = document.querySelector(".post_1");
    let post2 = document.querySelector(".post_2");
    let post3 = document.querySelector(".post_3");
    let post4 = document.querySelector(".post_4");
    let post5 = document.querySelector(".post_5");
    let post6 = document.querySelector(".post_6");
    let post7 = document.querySelector(".post_7");
    

try{
    const response = await fetch ("https://blog-api-assignment.up.railway.app/posts/");

    if(response.ok === false){

        throw new Error("Something happend please try again");
    }
    
    
    const posts = await response.json();


//första post
let postcontent0 = "";

postcontent0 =`<h2> ${posts[0].title} </h2>
<i>${posts[0].author} |</i>
<i>${posts[0].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[0].tags}</p>

<p>${posts[0].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[0].id}'>Read more</a>
`;

//andra post 
let postcontent1 = "";

postcontent1 =`<h2> ${posts[1].title} </h2>
<i>${posts[1].author} |</i>
<i>${posts[1].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[1].tags}</p>

<p>${posts[1].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[1].id}'>Read more</a>
`;

//tredje post
let postcontent2 = "";

postcontent2 =`<h2> ${posts[2].title} </h2>
<i>${posts[2].author} |</i>
<i>${posts[2].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[2].tags}</p>

<p>${posts[2].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[2].id}'>Read more</a>
`;

//fjärde post
let postcontent3 = "";

postcontent3 =`<h2> ${posts[3].title} </h2>
<i>${posts[3].author} |</i>
<i>${posts[3].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[3].tags}</p>

<p>${posts[3].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[3].id}'>Read more</a>
`;

//femte post 
let postcontent4 = "";

postcontent4 =`<h2> ${posts[4].title} </h2>
<i>${posts[4].author} |</i>
<i>${posts[4].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[4].tags}</p>

<p>${posts[4].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[4].id}'>Read more</a>
`;

//sjette post 
let postcontent5 = "";

postcontent5 =`<h2> ${posts[5].title} </h2>
<i>${posts[5].author} |</i>
<i>${posts[5].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[5].tags}</p>

<p>${posts[5].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[5].id}'>Read more</a>
`;

//sjunde 
let postcontent6 = "";

postcontent6 =`<h2> ${posts[6].title} </h2>
<i>${posts[6].author} |</i>
<i>${posts[6].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[6].tags}</p>

<p>${posts[6].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[6].id}'>Read more</a>
`;

//åttonde 
let postcontent7 = "";

postcontent7 =`<h2> ${posts[7].title} </h2>
<i>${posts[7].author} |</i>
<i>${posts[7].date}</i><br><br>

<strong>Tags: </strong> <p>${posts[7].tags}</p>

<p>${posts[7].content}</p>
<a href='https://blog-api-assignment.up.railway.app/posts/${posts[7].id}'>Read more</a>
`;






post0.innerHTML = (postcontent0);
post1.innerHTML = (postcontent1);
post2.innerHTML = (postcontent2);
post3.innerHTML = (postcontent3);
post4.innerHTML = (postcontent4);
post5.innerHTML = (postcontent5);
post6.innerHTML = (postcontent6);
post7.innerHTML = (postcontent7);

console.log(posts);



    }


    catch(error) {

  error = ("Something went wrong");
    }



}

GetPost(); 
