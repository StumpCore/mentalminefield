function slideShow() {
    let slides = document.getElementsByClassName('wrapper-container');
    let slidesText = "";
    let cWidth = 0;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex === 3) {
        cWidth = document.querySelector('html').clientWidth;
        text = slides[slideIndex].getElementsByClassName('wrapper-text')[0];
        text.style.setProperty("color", "var(--main-five-color)");
        if (cWidth < 480) {
            text.style.setProperty("font-size", "2em");
        } else if (cWidth >= 480) {
            text.style.setProperty("font-size", "4.5em");
        } else {
            text.style.setProperty("font-size", "5em");
        }
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(slideShow, 3000);
}

function fillVideoFeed() {
    //Set initial file as video
    let videoFeed = document.querySelector('.record-feed');
    let fileLength = 3;

    //rest videoFeed 
    videoFeed.innerHTML = "";

    //populate record feed with videos
    for (let index = 1; index <= fileLength; index++) {
        //Get currentVideo Frame
        let currentVideo = document.querySelector('source');
        let currentVideoname = currentVideo.src.split("/").pop()
        let loopName = `media_0${index}.mp4`;

        console.log("Current Video: " + currentVideoname);
        console.log("Loop Video:" + loopName);

        if (loopName !== currentVideoname) {
            console.log("Added");
            //populate with video source
            videoFeed.insertAdjacentHTML('beforeend',
                `
                <video class="main-records-video vid${index}" controls>
                    <source src='media/${loopName}' type='video/mp4'>
                </video>
                `);

            document.querySelector(`.vid${index}`).addEventListener("click", function () {
                updateVideoFrame(index);
            });
        }
    }
}


//updating the VideoFrame
function updateVideoFrame(ind) {
    let videoFrame = document.querySelector('.record-video');

    videoFrame.innerHTML = `
                <video class="main-records-video" controls>
                    <source src='media/media_0${ind}.mp4' type='video/mp4'>
                </video>
                `;
    ;

    //Listen for video click
    fillVideoFeed();
}



let slideIndex = 0;
slideShow();
fillVideoFeed();



