# node read and write json

a.js

```javascript
a = {
    b : 10,
    c : "hello_a_c",
}

module.exports = {a};
```

b.json

```json
{
    "a" : 10,
    "c" : "a_c_hello"
}
```

index.js

```javascript
var lib = require("./a");

data  = lib.a;
console.log(data.c);

const fs = require("fs");
let raw = fs.readFileSync('b.json');
let data2 = JSON.parse(raw);
console.log(data2.c);

let data3 = JSON.stringify(data2);
fs.writeFileSync('b.json', data3);
```
