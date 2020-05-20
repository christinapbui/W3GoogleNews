let newsList = []
let page = 1
let newsSources = []
const apiKey = "d46ade4a93754907b28028ce14102343" // used const so it won't be changed
const loadNews = async() => { // using async to call data, will take long time // will call the news
   let url = `https://newsapi.org/v2/everything?q=vietnam&pagecount=${page}&apiKey=${apiKey}` // we need to call URL here 
   let data = await fetch(url) // await until we get the data, 
   // async and await are a set; will get error if use one & not the other
   let result = await data.json(); // if "await" isn't used, data isn't there yet - cannot recognize json
   let dataList = result.articles; // new newslist 
   newsList = newsList.concat(dataList) // old list (newsList) will update and add to new list (dataList)
   render(newsList)
   document.getElementById("numOfStories").innerHTML = `Number of Stories Displayed: ${newsList.length}`
}

// show the data to users--the UI
const render = (list) => { // list is array
    console.log("render list",list) // list is array
    let newsHtml = list.map(item => `<div id="newsArea" class="card"> 
    <div id="news">
    <div id="imgArea">
    <img src="${item.urlToImage}" width="200" />
    </div>
    <div id="contentsArea">
        <div id="title">${item.title}</div>
        <div id="source">${item.source.name}</div>
        <div id="readMore"><a href="${item.url}">Read more...</a></div>
        <div id="publishedAt">${moment(item.publishedAt).startOf('day').fromNow()}</div>
    </div>
    </div>
    </div>`).join('')
    document.getElementById("newsArea").innerHTML = newsHtml
}

//loads when the website loads
loadNews();

// load more stories
let loadMoreNews = async() => { 
    let url = `https://newsapi.org/v2/everything?q=vietnam&pagecount=${page}&apiKey=${apiKey}` // we need to call URL here 
    let data = await fetch(url)
    let result = await data.json(); 
    let dataList = result.articles; 
    newsList = newsList.concat(dataList) 
    render(newsList)
    document.getElementById("numOfStories").innerHTML = `Number of Stories Displayed: ${newsList.length}`
}


