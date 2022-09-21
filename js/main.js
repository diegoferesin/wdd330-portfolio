let ol = document.getElementById('main-ol');
const linksList = [
    {
        label: "Week 1 Notes",
        url: "week01/index.html"
    }
]

linksList.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a')
    a.setAttribute('href', link.url)
    a.innerHTML = link.label;
    li.appendChild(a);
    ol.appendChild(li);        
});