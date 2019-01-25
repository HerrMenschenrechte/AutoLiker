console.log("Hello World");
alert("content Script running");

var i = 0;

 setInterval(openFeed, 60000);
   





// 



function openFeed() {
    
        var likes = document.getElementsByClassName("dCJp8 afkep coreSpriteHeartOpen _0mzm-");

                  
        for(var item of likes) {
            if(item.firstChild.className == "glyphsSpriteHeart__outline__24__grey_9 u-__7") {
                item.click()
                console.log("liked")

            } 

        }      
        
        
            window.scrollBy(0, 3000);
            console.log("Iteration: " + i)
            i++

   
   
}

function changePage() {
    window.location.href = "https://www.google.de" 
 }


