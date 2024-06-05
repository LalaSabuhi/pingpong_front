$( document ).ready(function() {
    // Handler for .ready() called.
    // Ranking LIST order
    let rankingOrder = $(".ranking-order-number");
    for (let i = 0; i < rankingOrder.length; i++) {
        rankingOrder[i].innerHTML = (i+1) + ".";
    }

    let rankingPageOrder = $(".rank-position");
    console.log(rankingPageOrder);
    for (let i = 0; i < rankingPageOrder.length; i++) {
        rankingPageOrder[i].innerHTML = ("#" + (i+1));
    }


    // if this is mobile device?
    if($(document).width()<751){
        const leftSideMoveElement = document.getElementById('side-moving-block');
        leftSideMoveElement.remove();
        console.log(leftSideMoveElement.outerHTML);
        document.getElementById('right-side').innerHTML = leftSideMoveElement.outerHTML + document.getElementById('right-side').innerHTML;
        // console.log($('#right-side').innerHTML);
    }

    resize();
});

$('.header-more-for-mobile').click(function () {
    $('.side-navbar').show();
});

$('.side-navbar').click(function () {
    $('.side-navbar').hide();
});

$( window ).resize(function() {
    resize();
});

function resize() {
    let pOfWeek = $(".player-of-week");
    pOfWeek.css("height", pOfWeek.css("width"));

    let leagueLogo = $(".active-league-block-header div img");
    leagueLogo.css("height", leagueLogo.css("width"));

    $(".active-league-block-header div").css("line-height", leagueLogo.css("height"));

    let activeLeagueWallpaper = $(".league-img-box img");
    activeLeagueWallpaper.css("height", activeLeagueWallpaper.width()*0.3);

    let tournamentWallpaper = $(".tournament-wallpaper img");
    tournamentWallpaper.css("height", tournamentWallpaper.width()*0.3);

    let youtubeIframe = $(".youtube-script-div iframe");
    youtubeIframe.css("height", youtubeIframe.width()*0.56);

    let imageBox = $(".gallery-div img");
    imageBox.css("height", imageBox.width()*0.6);

    let profilePicture = $(".match-player-image-div img");
    profilePicture.css("height", profilePicture.width()*1.51);
    // for (let i = 0; i < imageBox.length; i++) {
    //     imageBox[i].css("height", imageBox.width()*0.56);
    // }

    console.log("Widths OK");
}