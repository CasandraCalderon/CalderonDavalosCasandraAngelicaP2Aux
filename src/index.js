function tick (camel) {
  let cadenas = camel.split(',');
  let totales = [];
  for(let cadena of cadenas) {
    totales.push(cadena.length);
  };
  let maximo = Math.max.apply(null, totales);
  for (let i = 0; i < cadenas.length; i++){
    const array = cadenas[i];
    function camelCase (str) {
      let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ').reduce((result, word) => result + capitalize(word.toLowerCase()))
      let resultado = string.charAt(0).toLowerCase() + string.slice(1);
      let espacio = "  ";
      let resta = maximo - resultado.length;
      for (let j = 0; j <= resta; j++){
        espacio = espacio + " ";
      }
      for (let z = 0; z <= i; z++){
        espacio = espacio + "✅";
      }
      return (`${resultado} ${espacio}`);

    };
    const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    console.log(camelCase(array));
  };
  return ("");
};    

console.log(tick('underscore_case, first_name,Some_Variable,calculate_AGE,delayed_departure'));
