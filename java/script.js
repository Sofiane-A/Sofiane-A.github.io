 function fonctionRequeteApi(url,elementID)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
             var myObj = this.responseText;
             var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
             document.getElementById(elementID).innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET",url, true);
    xmlhttp.send();
}

function homePageLoading() 
{
    url = 'https://bitcoin.mubiz.com/blocks';
    elementID = 'https://sofiane-a.github.io/bitcoin/index.html';
    fonctionRequeteApi(url, elementID);
}
