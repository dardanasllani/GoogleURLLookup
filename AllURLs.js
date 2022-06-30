var a = document.getElementsByClassName('yuRUbf');
var test = document.getElementById("test");

for(var i = 0; i < a.length; i++){
    var divs = a[i].getElementsByTagName('a');
    for(var j = 0; j<divs.length;j++){
        var elem = divs[j];
        var articleRank = document.createElement("li");
        articleRank.textContent = elem;
        test.appendChild(articleRank);
    }
}
