export default class HeroMain {

  constructor(title, description,imgName) {
    this.title = title;
    this.description = description
    this.imgPath = `/images/heroes/${imgName}.png`
  }
}
