//Source MDN: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
//two options:
//a) localStorage does not exist
//b) loalStorage exists but is disabled
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

//fixed key for each path
function getStorageKey() {
    let path = window.location.pathname;
    let key = path + "-text-highlights";
    return key;
}

function addEventListenerToHighlights(hltr) {
    let highlights = document.querySelectorAll(".text-highlighted");
    highlights.forEach(function (highlight) {
        highlight.addEventListener('click', function (e) {
            hltr.removeHighlights(highlight);
            localStorage.setItem(getStorageKey(), hltr.serializeHighlights());
            e.preventDefault();//click on a link should not lead to additional hyperlink behaviour
        });
    });

    document.getElementById("deleteHighlights").addEventListener("click", function(e){
        hltr.removeHighlights();
        localStorage.removeItem(getStorageKey());
    });
};

if (storageAvailable('localStorage') == true) {
    let hltr = new TextHighlighter(document.querySelector('section'), {
        color: "gold",
        onAfterHighlight: function (range) {
            //dump highlights out to local storage again
            localStorage.setItem(getStorageKey(), hltr.serializeHighlights());
            //add event listener to highlight so it can be removed again
            addEventListenerToHighlights(hltr);
        }
    });

    // if highlights are stored locally, pull them up
    let storedHighlights = localStorage.getItem(getStorageKey());
    if (storedHighlights != null)
        hltr.deserializeHighlights(storedHighlights);
    else
        console.log("No highlights stored in localStorage.");
    addEventListenerToHighlights(hltr);

    //make the highlight information box available
    document.getElementsByClassName("text-highlighted-info")[0].style.display = "block";
}
else
    console.log("Browser feature localStorage not available.");

