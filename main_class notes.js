let newsList = []
const apiKey = "d46ade4a93754907b28028ce14102343" // used const so it won't be changed
const loadNews = async() => { // using async to call data, will take long time // will call the news
   let url = `http://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}` // we need to call URL here 
   let data = await fetch(url) // await until we get the data, 
   // async and await are a set; will get error if use one & not the other
   let result = await data.json(); // if "await" isn't used, data isn't there yet - cannot recognize json
   newsList = result.articles; // articles is the part you want to get (in the object)
   render(newsList)
   console.log("what's here",result)
}

// show the data to users--the UI
const render = (list) => { // list is array
    console.log("render list",list) // list is array
    let newsHtml = list.map(item => `<div id="news">
    <div id="contentsArea">
        <div id="title">${item.title}</div>
        <div id="source">${item.source.name}</div>
        <div id="publishedAt">${item.publishedAt}</div>
    </div>
    <div id="imgArea">
        <img src="${item.urlToImage}" width="200" />
    </div>
    </div>`).join('')
    document.getElementById("newsArea").innerHTML = newsHtml
}

loadNews();