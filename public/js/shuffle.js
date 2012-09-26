String.prototype.shuffle = function ()
{
    var characters = this.split(''),
        iterations = (characters.length-1),
        i, j, tmp;

    for (i = iterations; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = characters[i];
        characters[i] = characters[j];
        characters[j] = tmp;
    }

    return characters.join('');
}