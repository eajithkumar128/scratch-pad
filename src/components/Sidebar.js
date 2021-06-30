import React, { useEffect, useRef } from "react";
import Icon from "./Icon";


import BlocklyComponent, { Block, Value, Field, Shadow } from '../Blockly';

import BlocklyJS from 'blockly/javascript';

import '../blocks/customblocks';
import '../generator/generator';

export default function Sidebar(props) {
  const simpleWorkspace = useRef();
  const hanldeCodex = (code) =>{
    console.log(code)
  }
  const generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    props.getEvents(code)
  }

  useEffect(()=>{
    generateCode()
  },[props.triggerEvent])
  return (
    <>
    <BlocklyComponent onChange={(code, workspace) => {                       
        handleCodex(code);
      }} className=" w-full h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200" ref={simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: false,
            drag: false,
            wheel: false
          }}
          >
            <Block type="test_react_field" />
            <Block type="rotate_field_clockwise" />
            <Block type="rotate_field_anticlock" />
            <Block type="say_word" />
            <Block type="think_word" />
            <Block type="change_colour" />
            {/* <Block type="text" />
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block> */}
          </BlocklyComponent>
 </>
  );
}
