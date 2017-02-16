
function Stack() {
  this.elements = [];
};

Stack.prototype.add = function(element){
  this.data.push(element);
};

Stack.prototype.remove = function(element){
  this.data.pop();
};

Stack.prototype.checkSize = function(){
  return this.data.length;
};

Stack.prototype.hasElement = function(){
  return this.data.length != 0;
};

Stack.prototype.reset = function () {
  this.data = [];
};

Stack.prototype.topBook = function(){
  this.data[(this.data.length) -1];
};
