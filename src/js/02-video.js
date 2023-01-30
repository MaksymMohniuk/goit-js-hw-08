import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const onTimeUpdate = function(data) {
        localStorage.setItem('videoplayer-current-time', data.seconds);
        console.log(data.seconds);
            }

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    const savedTime = localStorage.getItem('videoplayer-current-time');

    player.setCurrentTime(savedTime || 0);
    
    
    
    
    
   


    
