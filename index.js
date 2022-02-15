/*

Need 2 things:

(1) Search When Something is typed in Search box.
(2) Show/Display Videos on Home page.

   display()
   - show/display videos on Home page.
   - Based upon most popular Videos.
   - Should be called Directly WITHOUT any Event(No Hover,No Click,No on click)
   - On page load.
   



   searchVideo()
   - Search when something is typed in the search box.
   - Take the "String" typed in search-box and search on the video.
*/

let div = document.getElementById("videodiv")


// (1)  show/display videos on Homepage


async function display() {
   
}

display()


//(2) Search when something is typed in the search-box


async function searchVideos() {
   document.getElementById("videodiv").innerHTML = "";

   let video = document.getElementById("video").value;

let res = await fetch('')
let data = await res.json();

   for ({
   
})
}