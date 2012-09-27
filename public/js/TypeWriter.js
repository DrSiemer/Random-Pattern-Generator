function TypeWriter($playfield, alphabet) {
  this.$playfield = $playfield;
  this.maxWidth = this.$playfield.data('maximum-x');
  this.maxHeight = this.$playfield.data('maximum-y');
  this.alphabet = alphabet;

  this.write = function(content, startX, startY) {
    var characters = content.split('');
    var currentX = startX;
    var currentY = startY;

    for (var i = 0, numberOfCharacters = characters.length; i < numberOfCharacters; i++) {
      if (currentX > (this.maxWidth - 3)) {
        currentX = startX;
        currentY = currentY + 3;
      }

      this.alphabet.renderCharacter(characters[i], currentX, currentY);

      currentX = currentX + 3;
    }
  }.bind(this);
}