const comment = document.getElementsByClassName("commentWriting")[0];
const commentBtn = document.getElementsByClassName("commentBtn")[0];
let commentList = document.getElementsByClassName("commentList")[0];
const userNameTag = document.getElementsByClassName("rightProfileUserId")[0];
const userName = userNameTag.innerHTML;

comment.addEventListener('keyup',function(){
    if(comment.value) {
        commentBtn.style.opacity = 1;
        commentBtn.style.cursor = 'pointer';
    } else {
        commentBtn.style.opacity = 0.3;
    }
})

commentBtn.addEventListener('click', function(){
    const newList = document.createElement('li');
    const newCommentContent = comment.value;

    if(comment.value){
        newList.innerHTML = `<b>${userName}</b> ${newCommentContent}`;
        document.getElementsByClassName("commentList")[0].appendChild(newList);
        comment.value = null;
        commentBtn.style.opacity = 0.3;
        commentBtn.style.cursor = 'default';
    }
})

const searchBox = document.getElementsByClassName("searchBox")[0];
const searchInput = document.getElementsByClassName("searchBoxInput")[0];
const searchContent = searchInput.value;
const searchResult = document.getElementsByClassName("searchResult")[0];
const letter = document.getElementsByClassName("searchResult")[0];

searchBox.addEventListener('click',function(){
    searchInput.style.display = "block";
    searchBox.style.display = "none";
})

searchInput.addEventListener('input',function(){
    if(searchInput.value.startsWith('we')){
        searchResult.style.display = "block";
        letter.style.color = "blue";
    } else {
        searchResult.style.display = "none";
    }
})
