
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
        // This code is to remove transition property 
        // e.propertyName is a string containing the name of the css property associated with the transition
        // in Line 66, once the propertyName is not set to "transform", the code returns a value
        // which triggers Line 67. This line 67 is used to remove the property "playing"; if the value returns True.
    }
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        // this is a query selector that picks input from audio and div.
        // the If statement returns false if there is no audio provided for the data-key entered

        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
        // For line 78, this adds the property "playing to the active key"
        // set the audio current time to 0;
    }
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

    // The "Array.from()" method that was used in line 88 is a static method used to
    // create new, shallow copied array from an array like object which in this case is the div(keys)
    // with an array-like divs of class (key).

    // so we are trying to create an array from all divs with class (key).

    // LINE 89
    //  The addEventListener() method has the following syntax
    // e.addEventListener('click', function(e));
    // So once we click on "transitionend", it triggers the function removeTransition.
    

    // LINE 90
    // addEventListener(type, listener)
    // The type is a case-sensitive sting the event-type listens for.
    // and in this case it is the "keydown" 

    // the listener is the object or function or null, etc that receives a notification
    // when a specified event-type occurs.
