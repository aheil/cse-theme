function getStorageKey() {
    let key = window.location.pathname + "-text-highlights";
    return key;
}

function addEventListenerToHighlights() {
    let highlights = document.querySelectorAll(".text-highlighted");
    highlights.forEach(function (highlight) {

        highlight.addEventListener('click', function (e) {
            
                let textNode = document.createTextNode(this.innerHTML);
                this.parentNode.insertBefore(textNode, this);
                this.parentNode.removeChild(this);//<span>x</span>
                e.preventDefault();//once we click a highlight that is a link we don't want the link to open

                //which page are we on?
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
if (storedHighlights.length != null)
    hltr.deserializeHighlights(storedHighlights);
addEventListenerToHighlights();

