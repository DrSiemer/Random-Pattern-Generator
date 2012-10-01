function Randomizer(randomPatternGenerator, speed) {
  this.randomPatternGenerator = randomPatternGenerator;
  this.speed = speed;
  this.active = false;
  this.$toggler = $('[data-action="randomize"]');
  this.randomizer = null;

  this.toggle = function() {
    if (this.active) {
      clearInterval(this.randomizer);
      this.$toggler.removeClass('active');
    } else {
      this.randomizer = setInterval(function() {
        console.log(this.speed);
        this.randomPatternGenerator.replaceRandomTile()
      }.bind(this), this.speed);
      this.$toggler.addClass('active');
    }

    this.active = !this.active;
  }.bind(this);
}