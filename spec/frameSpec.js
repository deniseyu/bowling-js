describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame;
  });

  it('should take two scores', function(){
    frame.score(4, 2)
    expect(frame.rollOne).toEqual(4);
    expect(frame.rollTwo).toEqual(2);
  });

  it('can be a strike', function(){
    frame.score(10, 0)
    expect(frame.isStrike()).toBe(true);
  });

  it('knows what is not a strike', function(){
    frame.score(3, 7)
    expect(frame.isStrike()).toBe(false);
  });

  it('can be a spare', function(){
    frame.score(4, 6)
    expect(frame.isSpare()).toBe(true);
  });

  it('knows a strike is not a spare', function(){
    frame.score(10, 0)
    expect(frame.isSpare()).toBe(false)
  });

});