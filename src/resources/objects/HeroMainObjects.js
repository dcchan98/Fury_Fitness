import HeroMain from "../../model/classes/HeroMain"

const thor = new HeroMain("Gym With Thor"
  ,"Increase your strength and gain muscle mass under the supervision of our trainer Thor Odinson"
  ,"Thor"
)

const capt = new HeroMain("Calisthenics With Capt"
  ,"Gain relative strength while building a great physique under the supervision of our trainer Steve Rogers"
  ,"Capt"
)

const stark = new HeroMain("Shred with Stark"
,"Lose body fat whilst keeping your hard earned muscle mass under the supervision of our trainer Tony Stark"
,"Stark"
)

const hawkeye = new HeroMain("Intricacies with Hawkeye"
, "Gain and edge in improving your physique by focusing on lesser known factors under the supervision of Barton"
, "Hawkeye"
)

const widow = new HeroMain("Namaste with Natasha"
,"Learn to keep your composure while dieting with yoga under the supervision of our trainer Natasha Romanoff"
,"Black_Widow"
)

const hulk = new HeroMain("Hulk emotion management"
,"Keep anger management in check and stay motivated while dieting with our therapist Bruce Banner"
,"Hulk"
)

export default [thor,capt,stark,hawkeye,widow,hulk]