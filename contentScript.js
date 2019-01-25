alert("Liking all Instagram Posts in your feed...");

var counter = 0;

 setInterval(likePosts, 60000);

function likePosts() {
    
        window.scrollBy(0, 3000);
    
        var likes = document.getElementsByClassName("dCJp8 afkep coreSpriteHeartOpen _0mzm-");
                  
        for(var item of likes) {
            if(item.firstChild.className == "glyphsSpriteHeart__outline__24__grey_9 u-__7") {
                item.click();
                console.log("liked");

            } 
        }           
        
        console.log("Iteration: " + counter);
        counter++;

}


