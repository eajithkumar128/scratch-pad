import {motions} from "./motions";
import {looks} from "./looks";
import {fabric} from "fabric";
import CatSprite from "../components/CatSprite";

export function spriteFunctionality(event, selectedObject, canvas){
    let eventArr = event.split("_")
    eventArr.forEach((evt)=>{
        performEvent(evt, selectedObject, canvas)
    })
}

function performEvent(event, selectedObject, canvas){
    let events = event.split(" ");
    let actionName = events[0]
    let action = events[1];
    if( actionName === "Move" ){
        selectedObject.set('left', selectedObject.get('left') + parseInt(action) + 40)
        canvas.renderAll()
        return;
    }
    if (actionName === "Turn-clock-wise"){
        selectedObject.rotate(selectedObject.get('angle') + 15);    
        canvas.renderAll()
        return;
    }
    if(actionName === "Turn-Anti-clock-wise"){
        selectedObject.rotate(selectedObject.get('angle') - 15);
        canvas.renderAll()
        return;
    }
    if(actionName === "Say"){
        removePreviousThoughts()
        createBubble(selectedObject, "say", action)
        canvas.renderAll()
        return;
    }
    if(actionName === "Think"){
        removePreviousThoughts()
        createBubble(selectedObject, "think", action)
        canvas.renderAll()
        return;
    }
    if(actionName === "Change-color"){
        console.log(selectedObject)
        
        canvas.renderAll()
    }
}


function removePreviousThoughts(){
    let boxDiv = document.getElementsByClassName("box");
    let thoughtDiv = document.getElementsByClassName("thought");
    boxDiv[0]?.parentNode?.removeChild(boxDiv[0]);
    thoughtDiv[0]?.parentNode?.removeChild(thoughtDiv[0]);
}

function createBubble(selectedObject, type, action){
    let speachBubbleDiv = document.createElement('div');
    let top = selectedObject.get('top') - 50
    console.log(selectedObject.top)
    console.log(selectedObject.left)
    console.log(selectedObject.width);
    let className = type === "say" ? 'box sb3' : "thought";
    let left = selectedObject.get('left') + selectedObject.get('width') - 20
    speachBubbleDiv.innerHTML = '<div style="position:absolute;top:'+ top +'px;left:'+ left +'px"' +
                                'class="'+ className +'">'+ action +'</div>';

    document.getElementsByClassName('canvas-container')[0].appendChild(speachBubbleDiv.firstChild);
}