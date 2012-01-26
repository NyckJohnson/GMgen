var adj  = new Array('multiversal', 'singularity', 'chronoplasmic', 'hexagonal', 'unimorphic', 'sound', 'numerical');
var desc = new Array('god', 'anti-matter', 'null', 'rainbow', 'dream', 'note', 'significance');
var noun = new Array('life', 'equation', 'pill', 'particle', 'totem', 'bullet', 'cycle');

function make_story(){
    var final = '';
    
    $([adj, desc, noun]).each(function(){
        var final += this[Math.floor(Math.random() * this.length)];
    });
}