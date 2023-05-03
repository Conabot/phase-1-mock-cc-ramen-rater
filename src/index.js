// write your code here
/* See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen 
objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says
 insert comment here and insert rating here.
Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need 
to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page. */

 
el('new-ramen').addEventListener('submit', createNewRamen);

//document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then ((resp) => resp.json())
    .then (renderRamens)


function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const ramenMenuDiv = el('ramen-menu');

    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);
    ramenImage.addEventListener('click', (e) => renderDetails(ramen));
}


function renderDetails(ramen){
    const detailImage = el('detail-image');
    const ramenName = el('ramen-name');
    const restaurantName = el('restaurant-name');
    const ratingDisplay = el('rating-display');
    const commentDisplay =el('comment-display');

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;

}

function createNewRamen(e) {
    e.preventDefault();
    const newRamen ={
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    };
    renderRamen(newRamen);
    e.target.reset();
}

function el(elementName){
    return document.getElementById(elementName)
}