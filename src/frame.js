function Frame(){};

Frame.prototype.score = function(first_roll, second_roll) {
  this.rollOne = first_roll;
  this.rollTwo = second_roll;
  return this
};

Frame.prototype.isStrike = function(){
  return (this.rollOne === 10);
};

Frame.prototype.isSpare = function(){
  return ((this.rollOne + this.rollTwo === 10) && (this.rollOne !== 10));
};

