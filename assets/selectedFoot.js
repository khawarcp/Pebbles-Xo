function changeContent(foot, clickedFoot){  
    const parentElement = clickedFoot.closest(".slide-content");
    let notSelectedFoot;
    if(foot === 'left'){
       notSelectedFoot = parentElement.querySelectorAll(`div[class*="right"]:not([class*="thumbnail"]`);
        const rightThumbnail = parentElement.querySelector(".right-foot-thumbnail");
        if (rightThumbnail) {
            rightThumbnail.classList.remove("foot-thumbnail-active");
        }
    }else {
        notSelectedFoot = parentElement.querySelectorAll(`div[class*="left"]:not([class*="thumbnail"]`);
        const leftThumbnail = parentElement.querySelector(".left-foot-thumbnail");
        if (leftThumbnail) {
            leftThumbnail.classList.remove("foot-thumbnail-active");
        }
    }
    notSelectedFoot.forEach(item => {
       item.classList.add("hidden");
    })
    const selectContent = clickedFoot.closest(".slide-content").querySelectorAll(`div[class*="${foot}"]:not([class*="thumbnail"]`);
    clickedFoot.classList.add("foot-thumbnail-active")
    selectContent.forEach(item => {                
        item.classList.remove("hidden");      
    })
}

const foot_thumbnails = document.querySelectorAll('.thumbnail-foot');
foot_thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function(){        
        changeContent(this.dataset.thumbnail, this)
    })
})