//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){

    // Helper function for FOUC
    let domReady = (cb) => {
        document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };
    
    domReady(() => {
        // Display body when DOM is loaded
        document.body.style.visibility = 'visible';
    });

    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    
    animate();
}

function addListeners(){
    // Video play-count logic: play exactly 3 times
    // try{
    //     if (typeof video !== 'undefined' && video){
    //         // make sure the video doesn't loop automatically
    //         video.loop = false;

    //         // track how many times it has finished
    //         video._playCount = 0;

    //         video.addEventListener('ended', function videoEndHandler(){
    //             video._playCount = (video._playCount || 0) + 1;
    //             console.log(video._playCount,returnTimer())
    //             // if it has played fewer than 3 times, replay
    //             if (video._playCount < 3){
    //                 try{ video.currentTime = 0; video.play(); }catch(e){}
    //             } else {
    //                 // final stop — optionally fire an event or call a callback
    //                     returnTimer()
    //             }
    //         }, false);
    //     }
    // }catch(e){}

    //video1.addEventListener('play', videoPausePlayHandler, false);
    
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    // tl
    // .call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}

function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};