function hashFunction(key, length) {
  var result = 0;
  for (var i = 0; i < Math.min(key.length, 100); i++){
    result += (key.charCodeAt(i) * 31);
  }
  return result % length;
}

class HashTable{
  constructor(val){
    this.keyMap = new Array(val=3);
    this.size = 0
  }
  _hash(key){
    var result = 0;
    for (var i = 0; i < Math.min(key.length, 100); i++){
      result += (key.charCodeAt(i) * 31);
    }
    return result % this.keyMap.length;
  }
  _resize(){
    var replacement = new Array (this.keyMap.length * 2);
    for (var i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        if (this.keyMap[i].length > 1) {
          for (var j = 0; j < this.keyMap[i].length; j++) {
            replacement = this._set(this.keyMap[i][j][0], this.keyMap[i][j][1], replacement)
          }
        } else if (this.keyMap[i].length === 1) {
          replacement = this._set(this.keyMap[i][0], this.keyMap[i][1], replacement)
        }
      }
    }
    this.keyMap = replacement;
  }

  _set(key, value, map) {
    if (this.size > (map.length * 0.8)) {
      console.log(this.size, map.length * 0.8)
      this._resize();
    }
    var hash = this._hash(key);
    if (!map[hash]) {
      map[hash] = [];
    }
    map[hash].push([key, value]);

    return map;
  }

  set(key, value) {
    this.size++;
    if (this.size > (this.keyMap.length * 0.8)) {
      this._resize();
    }
    var hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, value]);

    return this.keyMap;
  }
  get(key) {
    var hash = this._hash(key);
    if (!this.keyMap[hash]) return null;
    if (this.keyMap[hash].length > 1) {
      for (var i = 0; i < this.keyMap[hash].length; i++) {
        if (this.keyMap[hash][i][0] === key) {
          return this.keyMap[hash][i][1];
        }
      }
    } else {
      return this.keyMap[hash][0][1];
    }
  }

  keys(){
    var result = [];
    for (var i = 0; i < this.keyMap.length; i++) {
      var index = this.keyMap[i];
      if (!index) {
        continue;
      } else if (index.length > 1) {
        for (var j = 0; j < index.length; j++) {
          result.push(index[j][0])
        }
      } else if (index.length === 1) {
        result.push(index[0][0]);
      }
    }
    return result;
  }

  values(){
    var result = [];

    for (var i = 0; i < this.keyMap.length; i++){
      var index = this.keyMap[i];
      if (!index) {
        continue;
      } else if (index.length > 1) {
        for (var j = 0; j < index.length; j++) {
          if (result.indexOf(index[j][1]) < 0) {
            result.push(index[j][1])
          }
        }
      } else if (index.length === 1) {
        if (result.indexOf(index[0][1]) < 0) {
          result.push(index[0][1])
        }
      }
    }

    return result;
  }
}

var table = new HashTable();
table.set('color', 'blue')
table.set('name', 'Kat')
// table.set('location', 'Austin')
// table.get('color')
// console.log(table.keys())
// console.log(table.values())
console.log(table)