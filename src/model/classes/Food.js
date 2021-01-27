export default class Food{

constructor(name,p,c,f){
  this.name = name;
  this.p = Number(p);
  this.f =Number(f);
  this.c = Number(c);
  this.kcal = (this.p*4+4*this.c+9*this.f);

}

}