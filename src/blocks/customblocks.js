/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var testReactField = {
  "type": "test_react_field",
  "message0": "Move %1 steps",
  "args0": [
    {
      "type": "field_number",
      "name": "FIELD",
      "text": "Click me",
      "value": 10
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};


var rotateField = {
  "type": "rotate_field_clockwise",
  "message0": "Turn-clock-wise %1   ↩️ degree",
  "args0": [
    {
      "type": "field_number",
      "name": "FIELD",
      "text": "Click me",
      "value": 15,
      "min":0,
      "max" : 360
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
}

Blockly.Blocks['rotate_field_clockwise'] = {
  init: function() {
    this.jsonInit(rotateField);
    this.setStyle('loop_blocks');
  }
};

var rotateFieldOpposite = {
  "type": "rotate_field_anticlock",
  "message0": "Turn-Anti-clock-wise %1 ↪ degree",
  "args0": [
    {
      "type": "field_number",
      "name": "FIELD",
      "text": "Click me",
      "value": 15,
      "min":0,
      "max" : 360
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
}

Blockly.Blocks['rotate_field_anticlock'] = {
  init: function() {
    this.jsonInit(rotateFieldOpposite);
    this.setStyle('loop_blocks');
  }
};


var sayWord = {
  "type": "say_word",
  "message0": "Say %1",
  "args0": [
    {
      "type": "field_input",
      "name": "FIELD",
      "text": "Hello",
      "value": "Hello"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
}

Blockly.Blocks['say_word'] = {
  init: function() {
    this.jsonInit(sayWord);
    this.setStyle('loop_blocks');
  }
};


var thinkWord = {
  "type": "think_word",
  "message0": "Think %1",
  "args0": [
    {
      "type": "field_input",
      "name": "FIELD",
      "text": "Hello",
      "value": "Hello"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
}

Blockly.Blocks['think_word'] = {
  init: function() {
    this.jsonInit(thinkWord);
    this.setStyle('loop_blocks');
  }
};


var changeColor = {
  "type": "change_colour",
  "message0": "Change-color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "FIELDNAME",
      "colour": "#ff4040",
      "colourOptions":
        ['#ff4040', '#ff8080', '#ffc0c0',
         '#4040ff', '#8080ff', '#c0c0ff'],
      "colourTitles":
        ['dark pink', 'pink', 'light pink',
         'dark blue', 'blue', 'light blue'],
      "columns": 3
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
}

Blockly.Blocks['change_colour'] = {
  init: function() {
    this.jsonInit(changeColor);
    this.setStyle('loop_blocks');
  }
};