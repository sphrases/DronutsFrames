/**
 * Created by sphra on 22.12.2017.
 */
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


var navBarVisible = false;
function toggleNavBar() {
    if(navBarVisible) {
        hideNavBar();
    } else {
        showNavBar();
    }


}

function hideNavBar() {
    if (navBarVisible) {
        navBarVisible = false;
        document.getElementById('navBar').style.display = ('none');
    }
}

function showNavBar() {
    navBarVisible = true;
    document.getElementById('navBar').style.display = ('inherit');
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function loadContentScript() {
    var posts = document.getElementsByClassName('post');
    for(i = 0; i < posts.length; i++) {
        var navParenttmp = document.getElementsByClassName('navBarElement');
        var navParent = navParenttmp.item(navParenttmp.length -1);
        var contentNode =  document.createElement('a');
        var contentTextNode = document.createTextNode(posts.item(i).childNodes[1].innerHTML);
        contentNode.className = 'navBarElement link';
        contentNode.appendChild(contentTextNode);
        contentNode.href = "#"+posts.item(i).id+"";
        var lineBreak = document.createElement('br');

        insertAfter(lineBreak, navParent);
        insertAfter(contentNode, lineBreak);

    }
}
