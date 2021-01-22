export default class Food{

constructor(name,p,c,f,id){
  this.name = name;
  this.p = Number(p);
  this.f =Number(f);
  this.c = Number(c);
  this.id = id;
}

getTotalCalories(){
  return (this.p*4+4*this.c+9*this.f);
}
getName(){
  return this.name;
}
getP(){
  return this.p;
}
getC(){
  return this.c;
}
getF(){
  return this.f;
}

}