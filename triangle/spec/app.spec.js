describe("Triangle", function() {
    
  it("should display an example of successful test specification", function() { 
      var value1= TryAngle.isTriangle(1,1,1);
      var value2= TryAngle.isTriangle(1,2,3);
      var value3= TryAngle.isTriangle(2,3,4);
      
      expect(value1).toBe(true);
      expect(value2).toBe(true);
      expect(value3).toBe(true);
  });   
  
  it("should display an example of failed specification", function() { 
      var value= TryAngle.isTriangle(1,100,1);
      expect(value).toBe(false);
  });
  
 describe(".getTypeBySidesLength",function(){ 
     it("should propely identify scalene triangle", function(){
        var value= TryAngle.getTypeBySidesLength(2,3,4);
        expect(value).toBe(TryAngle.SIDE_SCALENE);
     });  
     
     it("should propely identify isosceles triangle", function() {
        var value= TryAngle.getTypeBySidesLength(2,4,2);
        expect(value).toBe(TryAngle.SIDE_ISOSCELES);        
     }); 
    
     it("should propely identify equilateral triangle",function(){
        var value= TryAngle.getTypeBySidesLength(3,3,3);
        expect(value).toBe(TryAngle.SIDE_EQUILATERAL);    
     }); 
     
 
  });
     
});
