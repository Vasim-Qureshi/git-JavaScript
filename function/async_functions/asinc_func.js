function wethearApi() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(function(data) {
            return data.json()
        })
        .then(jsonData => {
            document.getElementById("title").innerHTML=jsonData.title;
            document.querySelector("#desc").innerHTML=jsonData.explanation;
            document.querySelector("#img").setAttribute("src",jsonData.hdurl);
            document.querySelector("#date").innerHTML=jsonData.date;
            document.querySelector("#copyright").innerHTML=jsonData.copyright;
            console.log(jsonData);
        })
        .catch(function(err) {
            console.log(err);
        })
}

wethearApi();