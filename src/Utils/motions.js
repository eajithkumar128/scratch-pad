export function motions(event, selectedObject, canvas){
    if( event.event === "MOVESTEPS" ){
        selectedObject.set('left', selectedObject.get('left') + (event.stepCount))
        canvas.renderAll()
        return;
    }
    if (event.event === "turn"){
        if(event.direction === "clock"){
            selectedObject.rotate(selectedObject.get('angle') + 15);
        }else{
            selectedObject.rotate(selectedObject.get('angle') - 15);
        }
        canvas.renderAll()
    }
}