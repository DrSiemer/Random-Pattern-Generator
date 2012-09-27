// todo: find fix for impossible values: kvxz
// implemented values: abcdefghijklmnopqrstuwy0123456789-+
function Alphabet() {
  this.renderCharacter = function(character, startX, startY) {
    switch (character) {
      case '-':
        character = 'minus';
        break;

      case '+':
        character = 'plus';
        break;
    }

    var functionName = 'write';
    functionName += character.charAt(0).toUpperCase() + character.slice(1);
    try {
      this[functionName](startX, startY);
    } catch(e) {
      if (e.type == 'property_not_function') {
        console.log('Character `' + character + '` is not implemented (yet).');
      }
    }
  };

  this.writeA = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.writeB = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeC = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.writeD = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeE = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/l.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.writeF = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/l.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };

  this.writeG = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeH = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.writeI = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rbl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/trl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.writeJ = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeL = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.writeM = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rbl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.writeN = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.writeO = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeP = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };

  this.writeQ = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.writeR = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };

  this.writeS = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeT = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rbl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };

  this.writeU = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeW = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/trl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeY = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write0 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write1 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/trl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.write2 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/l.jpg');
  };

  this.write3 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write4 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.write5 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write6 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write7 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tb.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
  };

  this.write8 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.write9 = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/rb.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/bl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tr.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/tbl.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/tl.jpg');
  };

  this.writeMinus = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/rl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };

  this.writePlus = function(startX, startY) {
    $('[data-x="' + startX + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + startY + '"]').attr('src', '/img/b.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + startY + '"]').attr('src', '/img/x.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/r.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/trbl.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 1) + '"]').attr('src', '/img/l.jpg');

    $('[data-x="' + startX + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
    $('[data-x="' + (startX + 1) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/t.jpg');
    $('[data-x="' + (startX + 2) + '"][data-y="' + (startY + 2) + '"]').attr('src', '/img/x.jpg');
  };
}