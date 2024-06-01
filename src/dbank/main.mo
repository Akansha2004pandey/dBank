import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor Dbank{
   stable  var currentValue: Float=200;
    stable var startTime =Time.now();
   // Debug.print(debug_show(startTime));
   Debug.print(debug_show(currentValue));
    
    public func topUp(amount:Float) {
      currentValue+=amount;
      Debug.print(debug_show(currentValue));
    };
   // topUp();
   public func withdrawl(amount:Float) {
       let tempValue:Float=currentValue-amount;
       if(tempValue>=0){
         currentValue-=amount;
         Debug.print(debug_show(currentValue));
       }else{
          Debug.print("wrong number");
       }

   };
   public func checkBalance(): async Float{
      return currentValue;
   };
   public func compound() {
       let currentTime=Time.now();
       let timeElapse=currentTime-startTime;
       let timeElapsed=timeElapse/1000000000;
       currentValue:=currentValue * (1.01** Float.fromInt(timeElapsed));
       Debug.print(debug_show(currentValue));
       startTime:=currentTime;


   }
}