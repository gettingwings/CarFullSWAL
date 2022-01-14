class Form {

  constructor() {
    this.input = createInput().attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(width/2 - this.title.width, 0);
    this.title.class("titleStyle");
    this.input.position(width/2 - 40 , height/2 - 80);
    this.input.class("inputStyle");
    this.button.position(width/2 , height/2);
    this.reset.position(width-70,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(width/2 - 30, height/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref("players").remove();
      Player.updateCarsAtEnd(0);
      window.location.reload();
    })

  }

}
