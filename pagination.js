function pagination(a) {
    var e = "";
    leftnum = parseInt(numshowpage / 2), leftnum == numshowpage - leftnum && (numshowpage = 2 * leftnum + 1), start = postnumber - leftnum, start < 1 && (start = 1), maximum = parseInt(a / postperpage) + 1, maximum - 1 == a / postperpage && (maximum -= 1), end = start + numshowpage - 1, end > maximum && (end = maximum), e += "<span class='totalpages'>Page " + postnumber + " of " + maximum + "</span>";
    var s = parseInt(postnumber) - 1;
    postnumber > 1 && (e += 2 == postnumber ? "page" == type ? '<span class="showpage"><a href="' + home_page + '">' + prevpage + "</a></span>" : '<span class="pagenumber"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">' + prevpage + "</a></span>" : "page" == type ? '<span class="pagenumber"><a href="#" onclick="redirectpage(' + s + ');return false">' + prevpage + "</a></span>" : '<span class="pagenumber"><a href="#" onclick="redirectlabel(' + s + ');return false">' + prevpage + "</a></span>"), start > 1 && (e += "page" == type ? '<span class="pagenumber"><a href="' + home_page + '">1</a></span>' : '<span class="pagenumber"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>'), start > 2 && (e += "");
    for (var r = start; r <= end; r++) e += postnumber == r ? '<span class="current">' + r + "</span>" : 1 == r ? "page" == type ? '<span class="pagenumber"><a href="' + home_page + '">1</a></span>' : '<span class="pagenumber"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>' : "page" == type ? '<span class="pagenumber"><a href="#" onclick="redirectpage(' + r + ');return false">' + r + "</a></span>" : '<span class="pagenumber"><a href="#" onclick="redirectlabel(' + r + ');return false">' + r + "</a></span>";
    end < maximum - 1 && (e += ""), end < maximum && (e += "page" == type ? '<span class="pagenumber"><a href="#" onclick="redirectpage(' + maximum + ');return false">' + maximum + "</a></span>" : '<span class="pagenumber"><a href="#" onclick="redirectlabel(' + maximum + ');return false">' + maximum + "</a></span>");
    var n = parseInt(postnumber) + 1;
    postnumber < maximum && (e += "page" == type ? '<span class="pagenumber"><a href="#" onclick="redirectpage(' + n + ');return false">' + nextpage + "</a></span>" : '<span class="pagenumber"><a href="#" onclick="redirectlabel(' + n + ');return false">' + nextpage + "</a></span>");
    for (var t = document.getElementsByName("pageArea"), l = document.getElementById("blog-pager"), p = 0; p < t.length; p++) t[p].innerHTML = e;
    t && t.length > 0 && (e = ""), l && (l.innerHTML = e)
}

function paginationall(a) {
    var e = a.feed,
        s = parseInt(e.openSearch$totalResults.$t, 10);
    pagination(s)
}

function bloggerpage() {
    var a = urlactivepage; - 1 != a.indexOf("/search/label/") && (lblname1 = -1 != a.indexOf("?updated-max") ? a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max")) : a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"))), -1 == a.indexOf("?q=") && -1 == a.indexOf(".html") && (-1 == a.indexOf("/search/label/") ? (type = "page", postnumber = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=paginationall"></script>')) : (type = "label", -1 == a.indexOf("&max-results=") && (postperpage = 20), postnumber = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + lblname1 + '?alt=json-in-script&callback=paginationall&max-results=1" ></script>')))
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var e = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        s = encodeURIComponent(e);
    if ("page" == type) var r = "/search?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    else var r = "/search/label/" + lblname1 + "?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    location.href = r
}
var nopage, type, postnumber, lblname1;
bloggerpage();

if ($('.post-body').height() < 50) {window.location.replace("/");}

$("<style>@media only screen and (max-width:440px){#yst{width:94%;height:90px;}} @media screen and (min-width:441px){#yst{width:320px;height:90px;}} #yst{position:fixed;z-index:999999;left:10px;bottom:10px;background-color:#fff;border:1px solid #999;overflow:hidden;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-khtml-border-radius:4px;transform:translateX(-100%); -webkit-transform:translateX(-100%);} #yst div{position:relative;top:-1px;} #yst div img{min-height:90px;margin-left:0px;} .slide-in{animation:slide-in 0.5s forwards;-webkit-animation:slide-in 0.5s forwards;} .slide-out{animation:slide-out 0.5s forwards;-webkit-animation:slide-out 0.5s forwards;} @keyframes slide-in{100%{transform:translateX(0%);}} @-webkit-keyframes slide-in{100%{-webkit-transform:translateX(0%);}} @keyframes slide-out{0%{transform:translateX(0%);} 100%{transform:translateX(-100%);}} @-webkit-keyframes slide-out{0%{-webkit-transform:translateX(0%);} 100%{-webkit-transform:translateX(-100%);}} #close:hover{opacity:0.7;} #close{position:absolute;z-index:9999999999;color:#FF7F50;font-size:11px;height:8px;width:10px;float:right;right:5px;top:2px;cursor:pointer;}</style>" ).appendTo("head");
 
$("body").append('<div id="yst" class="slide-in"><span id="close">❎</span><div><a href="http://www.dynadot.com?s6dYr7W9Fb9L6e" title="dynadot" target="_blank"><img src="https://i.imgur.com/nwDJMBg.jpg" title="dynadot" alt="dynadot" width="auto" height="auto" loading="lazy"></a></div></div>');
 
window.onload = function(){document.getElementById('close').onclick = function(){setTimeout(function(){var list = document.getElementById("yst"); list.parentNode.removeChild(list);},500); return false;};};
 
var $slider = document.getElementById('yst');
var $toggle = document.getElementById('close');
$toggle.addEventListener('click', function() {var isOpen = $slider.classList.contains('slide-in'); $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');});