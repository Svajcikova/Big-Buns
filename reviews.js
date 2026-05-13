const placeId =
"ChIJ4c7VeYjjE0cRWOf4EcFLvaI";

function initReviews(){

const service =
new google.maps.places.PlacesService(
document.createElement("div")
);

service.getDetails({

placeId: placeId,
fields: [
"name",
"rating",
"reviews",
"user_ratings_total"
]

}, (place,status)=>{

if(
status !== google.maps.places.PlacesServiceStatus.OK
){
return;
}

renderGoogleReviews(place);

});

}

function renderGoogleReviews(place){

const rating =
document.getElementById("google-rating");

rating.innerHTML = `

<div class="rating-main">

⭐ ${place.rating} / 5

</div>

<div class="rating-sub">

${place.user_ratings_total}+ hodnocení na Google

</div>

`;

const container =
document.getElementById("google-reviews");

container.innerHTML = "";

place.reviews.forEach(review=>{

container.innerHTML += `

<div class="google-review-card">

<div class="google-review-top">

<h3>
${review.author_name}
</h3>

<div class="google-stars">

${"⭐".repeat(review.rating)}

</div>

</div>

<p>

"${review.text}"

</p>

</div>

`;

});

}

window.onload = initReviews;