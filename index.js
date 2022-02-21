/*

Need 2 Things:
(1) Show/Display Videos on Homepage
(2) Search When Something is typed in the search-box


display()
- Show/Display Videos on Homepage
- Based Upon Most Popular Videos
- Should be Called Directly WITHOUT Any Event 
(No Hover, No Click , No On Click)
- On Page Load



searchVideo()
- Search When Something is typed in the search-box
- Take the "String" typed in search-box and search on that string 


*/

let div = document.getElementById("videodiv");


// (1) Show/Display Videos on Homepage

/*

async function display(){

    // q = Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=newtonschool%20video&key=AIzaSyDW2AJVOCDsrVUABKqcORlC-3sRCMN0IOY&maxResults=10`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();




// (2) Search When Something is typed in the search-box

async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDW2AJVOCDsrVUABKqcORlC-3sRCMN0IOY&maxResults=10`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}

*/

function myFunction(x) {
  x.classList.toggle("change")
