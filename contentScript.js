alert("Liking all Instagram Posts in your feed...");

var counter = 0;
var likes = null;

console.log("Script is running...")

setInterval(likePosts, 60000);

// create function that checks if posts are already liked to speed up the liking process
 
function likePosts() {
        var likes = document.getElementsByClassName("dCJp8 afkep coreSpriteHeartOpen _0mzm-");
        console.log(likes)
                  
        for(var item of likes) {
            if(item.firstChild.className == "glyphsSpriteHeart__outline__24__grey_9 u-__7") {
                item.click();
                console.log(JSON.stringify(item.firstChild.className) + " liked")
            }
        }     
        
        window.scrollBy(0, 2000);
        
        console.log("Iteration: " + counter);
        counter++;

}

