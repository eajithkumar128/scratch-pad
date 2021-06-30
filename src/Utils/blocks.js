export const MotionBlock =  [
    {
      name: 'moveSteps',
      category: 'Motions',
      block: {
        init: function () {
          this.jsonInit(
            {
              "nextStatement": "Action",
              "previousStatement": "Action",
              "message0": "Move %1 steps",
              "colour": 160,
              "args0": [
                {
                  "type": "field_number",
                  "name": "FIELDNAME",
                  "value": 10,
                }
              ],
            }
          );
        },
      },
      generator: (block) => {
        const message = `'${block.getFieldValue('FIELDNAME')}'` || '\'\'';
        const code = `move ${message}`;
        return code;
      },
    },
    {
      name: 'ChangePositionRight',
      category: 'Motions',
      block: {
        init: function () {
          this.jsonInit(
            {
              "nextStatement": "Action",
              "previousStatement": "Action",
              "message0": "Turn ↪ %1 degree",
              "colour": 160,
              "args0": [
                {
                  "type": "field_number",
                  "name": "FIELDNAME",
                  "value": 15,
                  "max" : 360
                }
              ],
            }
          );
        },
      },
      generator: (block) => {
        const message = `'${block.getFieldValue('FIELDNAME')}'` || '\'\'';
        const code = `turn left ${message}`;
        return code;
      },
    },
    {
        name: 'ChangePositionLeft',
        category: 'Motions',
        block: {
          init: function () {
            this.jsonInit(
              {
                "nextStatement": "Action",
                "previousStatement": "Action",
                "message0": "Turn ↩️ %1 degree",
                "colour": 160,
                "args0": [
                  {
                    "type": "field_number",
                    "name": "FIELDNAME",
                    "value": 15,
                    "max" : 360
                  }
                ],
              }
            );
          },
        },
        generator: (block) => {
          const message = `'${block.getFieldValue('FIELDNAME')}'` || '\'\'';
          const code = `turn right ${message}`;
          return code;
        },
      },
];