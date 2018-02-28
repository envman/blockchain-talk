const sha256 = require('sha256')

let data = {
  data: 'Hello World!',
  nonce: 0,
}

let hash = sha256.x2(JSON.stringify(data))

while (!hash.startsWith('00000')) {
  data.nonce = data.nonce + 1
  
  hash = sha256.x2(JSON.stringify(data))
}

console.log(`Solved hash ${hash}`)