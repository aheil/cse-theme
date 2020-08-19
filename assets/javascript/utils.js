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

//key for each path
function getHighlightStorageKey() {
    let path = window.location.pathname;
    let key = path + "-text-highlights";
    return key;
}

function getAnnotationStorageKey(timestamp) {
    let path = window.location.pathname;
    let key = path + "-" + timestamp;
    return key;
}

function hidePopup(){
    document.getElementById("popup").style.display = "none";    
}

function showPopup(){
    document.getElementById("popup").style.display = "block";      
}

function clearPopup(){
    document.getElementById("popup-text").value = "";
    document.getElementById("popup").removeAttribute("data-timestamp");
}

function addEventListenerToHighlights(hltr) {
    let highlights = document.querySelectorAll(".text-highlighted");

    highlights.forEach(function (highlight) {
        highlight.addEventListener('dblclick', function (e) {
            
            //several highlights can have the same timestamp
            let dataTimestamp = this.getAttribute("data-timestamp");
            //hltr.removeHighlights(this);
            let toDelete = document.querySelectorAll(".text-highlighted[data-timestamp='" + dataTimestamp + "']");

            toDelete.forEach(function (del) {
                hltr.removeHighlights(del);
            });

            localStorage.setItem(getHighlightStorageKey(), hltr.serializeHighlights());
            localStorage.removeItem(getAnnotationStorageKey(dataTimestamp));
            document.getElementById("popup").style.display = "none";

            e.preventDefault();//click on a link should not lead to additional hyperlink behaviour
        });

        highlight.addEventListener('mouseenter', function (e) {

            let popup = document.getElementById("popup");
            let dataTimestamp = this.getAttribute("data-timestamp");

            //textarea is already visible and we remain in the same highlight
            if (popup.style.display === "block" && popup.getAttribute("data-timestamp") === dataTimestamp)
                return;

            clearPopup();
            showPopup();//needed here, otherwise popup size is 0/0

            let clientWidth = document.getElementsByTagName("body")[0].clientWidth;
            let clientHeight = document.getElementsByTagName("body")[0].clientHeight;
            let popupWidth = popup.offsetWidth;
            let popupHeight = popup.offsetHeight;

            //bottom and right borders need to be treated with care
            popup.style.left = Math.min(e.pageX, clientWidth - popupWidth) + "px";
            popup.style.top = Math.min(e.pageY, clientHeight - popupHeight) + "px";

            popup.setAttribute("data-timestamp", dataTimestamp);

            let stored = localStorage.getItem(getAnnotationStorageKey(dataTimestamp));
            if (stored != null) {
                document.getElementById("popup-text").value = stored;
            }
            else
                console.log("Nothing stored for this timestamp");
        });

        document.getElementById("popup-close").addEventListener("click", function (e) {

            let popup = document.getElementById("popup");
            let dataTimestamp = popup.getAttribute("data-timestamp");

            localStorage.setItem(getAnnotationStorageKey(dataTimestamp), document.getElementById("popup-text").value);
            hidePopup();
        });

        document.getElementsByTagName("main")[0].addEventListener("click", function (e) {
            //if click on <main> and not on any highlight, make the popup invisible
            if (e.target.closest(".text-highlighted") == null && document.getElementById("popup").style.display != "none")
                hidePopup();
        })
    });

    document.getElementById("popup-close").addEventListener("click", function (e) {
        hidePopup();
    });

    document.getElementById("deleteHighlights").addEventListener("click", function (e) {
        hltr.removeHighlights();
        localStorage.removeItem(getHighlightStorageKey());

        Object.keys(localStorage).forEach(function (key) {
            if (key.startsWith(window.location.pathname))
                localStorage.removeItem(key);
        });
    });
};

if (storageAvailable('localStorage') == true) {
    let hltr = new TextHighlighter(document.querySelector('section'), {
        color: "gold",
        onAfterHighlight: function (range) {
            //dump highlights out to local storage again
            localStorage.setItem(getHighlightStorageKey(), hltr.serializeHighlights());
            //add event listener to highlight so it can be removed again
            addEventListenerToHighlights(hltr);
        }
    });

    // if highlights are stored locally, pull them up
    let storedHighlights = localStorage.getItem(getHighlightStorageKey());
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

