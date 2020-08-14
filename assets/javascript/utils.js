function getStorageKey() {
    let key = "-text-highlights";
    return key;
}

function addEventListenerToHighlights() {
    let highlights = document.querySelectorAll(".text-highlighted");
    highlights.forEach(function (highlight) {

        highlight.addEventListener('click', function (e) {
                hltr.removeHighlights(highlight);
                localStorage.setItem(getStorageKey(), hltr.serializeHighlights());

        });
    });
};

let hltr = new TextHighlighter(document.querySelector('section'), {
    color: "#ccff00",
    onAfterHighlight: function (range) {
        //dump highlights out to local storage again
        localStorage.setItem(getStorageKey(), hltr.serializeHighlights());
        addEventListenerToHighlights();
    }
});

// if highlights are stored locally, pull them up
let storedHighlights = localStorage.getItem(getStorageKey());
if (storedHighlights != null)
    hltr.deserializeHighlights(storedHighlights);
else
    console.log("No highlights stored in localStorage.");
addEventListenerToHighlights();

