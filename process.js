const fs = require('fs');

const inputFile = 'test.txt';
const outputFile = 'output.json';

const data = {
  name: 'weightedValues',
  type: -1,
  arraySize: 115,
  arrayType: 'WeightedValue',
  children: [
    {
      name: 'Array',
      type: -1,
      arraySize: 115,
      arrayType: 'WeightedValue',
      children: [
        {
          name: 'size',
          type: 12,
          val: 115
        }
      ]
    }
  ]
};

fs.readFile(inputFile, 'utf8', (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = contents.split('\n');
  lines.forEach((line) => {
    if (line.length > 0) {
      data.children[0].children.push({
        name: 'data',
        type: -1,
        children: [
          {
            name: 'value',
            type: 3,
            val: line
          },
          {
            name: 'weight',
            type: 0,
            val: 1
          }
        ]
      });
    }
  });

  fs.writeFile(outputFile, JSON.stringify(data, null, 2), (writeErr) => {
    if (writeErr) {
      console.error(writeErr);
    }
  });
});