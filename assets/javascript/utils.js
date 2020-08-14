function addEventListenerToHighlights() {
    let highlights = document.querySelectorAll(".text-highlighted");
    highlights.forEach(function (highlight) {

        highlight.addEventListener('click', function (e) {
            
                let textNode = document.createTextNode(this.innerHTML);
                this.parentNode.insertBefore(textNode, this);
                this.parentNode.removeChild(this);//<span>x</span>

                localStorage.setItem("text-highlights", hltr.serializeHighlights());

        });
    });
};

let hltr = new TextHighlighter(document.querySelector('section'), {
    color: "#ccff00",
    onAfterHighlight: function (range) {
        //dump highlights out to local storage again
        localStorage.setItem("text-highlights", hltr.serializeHighlights());
        addEventListenerToHighlights();
    }
});

// if highlights are stored locally, pull them up
let storedHighlights = localStorage.getItem("text-highlights");
if (storedHighlights.length != null)
    hltr.deserializeHighlights(storedHighlights);
addEventListenerToHighlights();

