const comment = document.getElementsByClassName("commentWriting")[0];
const commentBtn = document.getElementsByClassName("commentBtn")[0];
let commentList = document.getElementsByClassName("commentList")[0];
const userNameTag = document.getElementsByClassName("rightProfileUserId")[0];
const userName = userNameTag.innerHTML;

comment.addEventListener('keyup',function(){
    if(comment) {
        commentBtn.style.opacity = 1;
        commentBtn.style.cursor = 'pointer';
    } else {
        commentBtn.style.opacity = 0.3;
    }
})

commentBtn.addEventListener('click', function(){
    const newList = document.createElement('li');
    const newCommentContent = comment.value;

    //userName.style.fontWeight = "bold";
    newList.innerHTML = `<b>${userName}</b> ${newCommentContent}`;
    document.getElementsByClassName("commentList")[0].appendChild(newList);
    comment.value = null;
})

const searchBox = document.getElementsByClassName("searchBox")[0];
const searchInput = document.getElementsByClassName("searchBoxInput")[0];

searchBox.addEventListener('click',function(){
    searchInput.style.display = "block";
    searchBox.style.display = "none";
})