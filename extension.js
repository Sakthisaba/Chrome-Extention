 text=""

    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=18df87c54839448cb40b5ddc4328ce17")
    .then(res => res.json()) 
    
    .then( data =>{for (const item in data.articles ) {
       if(item<10){
          console.log(data.articles)
        text += "<p class='content-item' style='width: 300px;min-height:50px;margin: 2px auto;padding: 10px;border-radius:5px'>" + data.articles[item].title + "</p><br>";
        document.getElementById("demo").innerHTML = text ;
       }
    }  })
  
     
 
