var mlKeyboard = mlKeyboard || {layouts: {}};

mlKeyboard.layouts.fr_FR = [
  {d: '\/', u: '|'},
  {d: '1',u: '&'},
  {d: '2',u: 'é', m:[
    {d: '2', u:'é'},
    {d:'~', u:'É'}
  ]},
  {d: '3',u: '#', m: [
    {d:'3', u:'#'},
    {d:'"', u: '#'}
  ]},
  {d: '4',u: '{', m:[
    {d: '4', u:'{'},
    {d: '\'', u:'{'}
  ]},
  {d: '5',u: '(', m:[
    {d: '5', u:'('},
    {d: '[', u:'('}
  ]},
  {d: '6',u: '-', m:[
    {d: '6', u:'-'},
    {d: '|', u:'-'}
  ]},
  {d: '7',u: 'è', m:[
    {d: '7', u:'è'},
    {d: '`', u:'è'}
  ]},
  {d: '8',u: '_', m:[
    {d: '8', u:'_'},
    {d: '\/', u:'_'}
  ]},
  {d: '9',u: '', m:[
    {d: '9', u:'ç'},
    {d: '^', u:'Ç'}
  ]},
  {d: '0',u: 'à', m:[
    {d: '0', u:'à'},
    {d: '@', u:'À'}
  ]},
  {d: '°',u: ')', m:[
    {d: '°', u:')'},
    {d: ']', u:')'}
  ]},
  {d: '+',u: '=', m:[
    {d: '+', u:'='},
    {d: '}', u:'='}
  ]},
  {}, // Delete
  {}, // Tab
  {d: 'q',u: 'Q'},
  {d: 'w',u: 'W'},
  {d: 'e',u: 'E', m: [
    {d: 'e', u: 'E'},
    {d: 'é', u: 'É'},
    {d: 'ê', u: 'Ê'}
  ]},
  {d: 'r',u: 'R'},
  {d: 't',u: 'T'},
  {d: 'y',u: 'Y'},
  {d: 'u',u: 'U', m: [
    {d: 'u', u: 'U'},
    {d: 'ú', u: 'Ú'},
    {d: 'ü', u: 'Ü'}
  ]},
  {d: 'i',u: 'I', m: [
    {d: 'i', u: 'I'},
    {d: 'í', u: 'Í'}
  ]},
  {d: 'o',u: 'O', m: [
    {d: 'o', u: 'O'},
    {d: 'ó', u: 'Ó'},
    {d: 'õ', u: 'Õ'},
    {d: 'ô', u: 'Ô'}
  ]},
  {d: 'p',u: 'P'},
  {d: '^',u: 'º'},
  {d: '`',u: '¨'},
  {d: '\'',u: '"'},
  {}, // Caps lock
  {d: 'a',u: 'A', m: [
    {d: 'a', u: 'A'},
    {d: 'á', u: 'Á'},
    {d: 'à', u: 'À'},
    {d: 'ã', u: 'Ã'},
    {d: 'â', u: 'Â'}
  ]},
  {d: 's',u: 'S'},
  {d: 'd',u: 'D'},
  {d: 'f',u: 'F'},
  {d: 'g',u: 'G'},
  {d: 'h',u: 'H'},
  {d: 'j',u: 'J'},
  {d: 'k',u: 'K'},
  {d: 'l',u: 'L'},
  {d: 'ñ',u: 'Ñ'},
  {d: ';',u: ':'},
  {}, // Return
  {}, // Left shift
  {d: 'z',u: 'Z'},
  {d: 'x',u: 'X'},
  {d: 'c',u: 'C', m: [
    {d: 'c', u: 'C'},
    {d: 'ç', u: 'Ç'}
  ]},
  {d: 'v',u: 'V'},
  {d: 'b',u: 'B'},
  {d: 'n',u: 'N'},
  {d: 'm',u: 'M'},
  {d: ',',u: '¿'},
  {d: '.',u: '?'},
  {d: 'ç',u: 'Ç'},
  {}, // Right shift
  {}  // Space
];
