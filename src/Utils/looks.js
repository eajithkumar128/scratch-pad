export function looks(event,selectedObject,canvas){
    removePreviousThoughts()
    if(event.event === "say"){
        createBubble(selectedObject, "say");
    }
    if(event.event === "think"){
        createBubble(selectedObject, "think");
    }
}

function removePreviousThoughts(){
    let boxDiv = document.getElementsByClassName("box");
    let thoughtDiv = document.getElementsByClassName("thought");
    boxDiv[0]?.parentNode?.removeChild(boxDiv[0]);
    thoughtDiv[0]?.parentNode?.removeChild(thoughtDiv[0]);
}

function createBubble(selectedObject, type){
    let speachBubbleDiv = document.createElement('div');
    let top = selectedObject.get('top') - 50
    console.log(selectedObject.top)
    console.log(selectedObject.left)
    console.log(selectedObject.width);
    let className = type === "say" ? 'box sb3' : "thought";
    let left = selectedObject.get('left') + selectedObject.get('width') - 20
    speachBubbleDiv.innerHTML = '<div style="position:absolute;top:'+ top +'px;left:'+ left +'px"' +
                                'class="'+ className +'">Hello</div>';

    document.getElementsByClassName('canvas-container')[0].appendChild(speachBubbleDiv.firstChild);
}