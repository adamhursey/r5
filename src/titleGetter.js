// How to populate array
// https://www.albumoftheyear.org/list/428-rolling-stones-500-greatest-albums-of-all-time/?s=asc

var items = [...document.getElementsByClassName("albumListRow")]
var item3 = items.map(item => {
   const container = new Object();
   try{container.albumID = item.children[0].children[0].children[0].innerText.split(".")[0]} catch(err){console.log(item); console.log("albumID");};
   try{container.albumTitle = item.children[0].children[0].children[1].innerText.split(" - ")[1]} catch(err){console.log(item); console.log("albumTitle");};
   try{container.artist = item.children[0].children[0].children[1].innerText.split(" - ")[0]} catch(err){console.log(item); console.log("artist");};
   try{container.image = item.children[1].children[0].children[0].src} catch(err){console.log(item); console.log("image");};
   try{container.date = item.children[2].innerText} catch(err){console.log(item); console.log("date");};
   try{container.genre = item.children[3].children[0].innerText} catch(err){console.log(item); console.log("genre");};
   try{container.score = item.children[4].children[1].children[0].innerText} catch(err){console.log(item); console.log("score");};
   try{container.spotify = item.children[6].children[3].href} catch(err){console.log(item); console.log("spotify");};
   

   return container
})