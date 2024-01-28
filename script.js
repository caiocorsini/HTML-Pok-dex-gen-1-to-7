// Json file provided by Purukitto
// Fonte: https://github.com/Purukitto/pokemon-data.json/blob/master/pokedex.json

// Open your cmd and type the path to the folder where the code is
// Type: "node server.js"
// Run this URL for the localhost: "http://localhost:3000/index.html"

/*--------------------------------------------------------------------------------*/
/*                                POPULATING SELECT                               */
/*--------------------------------------------------------------------------------*/
// Iterates over json file objects and populates select tag using Pokémon names
// Gen 8 and 9 Pokémon excluded for now due to the lack of info of them in the json
// Initiates right after loading the HTML
fetch("http://localhost:3000/pokedex.json").then(response => response.json()).then(dado =>{
  dado.forEach(function(pokemon){
    if (pokemon.id < 810) {
    var option = document.createElement("option");
    option.value = pokemon.id;
    option.text = `${pokemon.name.english}`;
    document.getElementById("main_selector").appendChild(option);
  }})
})

/*--------------------------------------------------------------------------------*/
/*                             POKÉMON CHANGE FUNCTION                            */
/* Parameters: id                                                                 */
/* Dynamically changes all information on screen depending on selected Pokémon ID */
/*--------------------------------------------------------------------------------*/
function switch_pkmn(id){
  // Iterates over json file objects and populates select tag using Pokémon names
  fetch("http://localhost:3000/pokedex.json").then(response => response.json()).then(dado =>{
  dado.forEach(function(pokemon){
    if (id === String(pokemon.id)){
      document.getElementById("local_id").innerHTML = `#${pokemon.id}`;
      document.getElementById("local_name").innerHTML = pokemon.name.english;
      document.getElementById("local_type1").innerHTML = pokemon.type[0];
      document.getElementById("local_type2").innerHTML = pokemon.type[1];
      document.getElementById("local_height").innerHTML = `Height:<br>${pokemon.profile.height}`;
      document.getElementById("local_weight").innerHTML = `Weight:<br>${pokemon.profile.weight}`;
      document.getElementById("local_description").innerHTML = `<b>Description</b><hr>${pokemon.description}`;
      document.getElementById("hp_label").innerHTML = `HP: ${pokemon.base.HP}`;
      document.getElementById("atk_label").innerHTML = `Atk: ${pokemon.base.Attack}`;
      document.getElementById("def_label").innerHTML = `Def: ${pokemon.base.Defense}`;
      document.getElementById("spa_label").innerHTML = `SpA: ${pokemon.base["Sp. Attack"]}`;
      document.getElementById("spd_label").innerHTML = `SpD: ${pokemon.base["Sp. Defense"]}`;
      document.getElementById("spe_label").innerHTML = `Spe: ${pokemon.base.Speed}`;
      document.getElementById("main_image").style.backgroundImage = `url("${pokemon.image.hires}")`;
      document.getElementById("local_sprite").style.backgroundImage = `url("${pokemon.image.sprite}")`;

      change_type(pokemon.type[0], pokemon.type[1])
    }
  })
  })
}

/*--------------------------------------------------------------------------------*/
/*                              POKÉMON SWITCH COLORS 2                           */
/* Parameters: new_color_back, new_color_border                                   */
/* Dynamically changes the colors of the divs based on the type of the Pokémon    */
/* identified in switch_colors_1()                                                */
/*--------------------------------------------------------------------------------*/
function switch_colors_2(new_color_back, new_color_border){
  document.getElementById("main_container").style.backgroundColor = new_color_back;
  document.getElementById("main_container").style.borderColor =
    document.getElementById("local_images").style.borderColor = 
    document.getElementById("local_sprite").style.borderColor = 
    document.getElementById("local_name").style.borderColor = 
    document.getElementById("local_id").style.borderColor = 
    document.getElementById("container_type").style.borderColor = 
    document.getElementById("local_height").style.borderColor = 
    document.getElementById("local_weight").style.borderColor = 
    document.getElementById("stat_container").style.borderColor = 
    document.getElementById("gender_bar").style.borderColor = 
    document.getElementById("local_description").style.borderColor = new_color_border;
}


/*--------------------------------------------------------------------------------*/
/*                              POKÉMON SWITCH COLORS 1                           */
/* Parameters: id                                                                 */
/* Dynamically determines which colors are going to be used by switch_colors_2 ba-*/
/* sed on the Pokémon type                                                        */
/*--------------------------------------------------------------------------------*/
function switch_colors_1(id){
  // Iterates over json file objects and populates select tag using Pokémon names
  fetch("http://localhost:3000/pokedex.json").then(response => response.json()).then(dado =>{
  dado.forEach(function(pokemon){
    if (id === String(pokemon.id)){
      var new_back = "white"; // New background-color
      var new_border = "black"; // New border-color
      switch(pokemon.type[0]) {
        // Determines which colors are going to be used
        case "Rock": new_back = "#c9b17f"; new_border = "#63470d"; break;
        case "Water": new_back = "#a1c0f0"; new_border = "#265bab"; break;
        case "Electric": new_back = "#f6fa7f"; new_border = "#777a17"; break;
        case "Grass": new_back = "#a4f4c3"; new_border = "#14803a"; break;
        case "Poison": new_back = "#d3a0f2"; new_border = "#480c6e"; break;
        case "Psychic": new_back = "#ffb0fa"; new_border = "#8a0e81"; break;
        case "Fire": new_back = "#ff9a4d"; new_border = "#a85516"; break;
        case "Ground": new_back = "#ffc15e"; new_border = "#875e1b"; break;
        case "Flying": new_back = "#a6fffb"; new_border = "#14807a"; break;
        case "Bug": new_back = "#bbeb63"; new_border = "#49690f"; break;
        case "Normal": new_back = "#c4c4c4"; new_border = "#525252"; break;
        case "Ghost": new_back = "#9f82b8"; new_border = "#52366b"; break;
        case "Fighting": new_back = "#ff8a73"; new_border = "#701c0b"; break;
        case "Steel": new_back = "#e6e6e6"; new_border = "#363636"; break;
        case "Ice": new_back = "#a1eeff"; new_border = "#0b7087"; break;
        case "Dragon": new_back = "#8a92ff"; new_border = "#010970"; break;
        case "Fairy": new_back = "#ffbaeb"; new_border = "#5e0946"; break;
        case "Dark": new_back = "#737373"; new_border = "#171717"; break;
        default:
          new_back = "#c4c4c4"; new_border = "#525252"; break;
      }
      switch_colors_2(new_back, new_border); // Does the change based on the determined colors
    }
  })
  })
}


/*--------------------------------------------------------------------------------*/
/*                               POKÉMON SWITCH STATS                             */
/* Parameters: id                                                                 */
/* Dynamically determines the width of the base stats bars based on the selected  */
/* Pokémon base stats                                                             */
/* It also determines new colors for the base stat bars                           */
/*--------------------------------------------------------------------------------*/
function switch_stats(id){
  // Iterates over json file objects and populates select tag using Pokémon names
  fetch("http://localhost:3000/pokedex.json").then(response => response.json()).then(dado =>{
  dado.forEach(function(pokemon){
    if (id === String(pokemon.id)){

      // If the base stat is equal or greater than max_stat, the bar will be completely filled
      var max_stat = 180;

      // Initializing variables
      var hp_element = document.getElementById("hp_bar"); var HP = parseInt(pokemon.base.HP);
      var atk_element = document.getElementById("atk_bar"); var Atk = parseInt(pokemon.base.Attack);
      var def_element = document.getElementById("def_bar"); var Def = parseInt(pokemon.base.Defense);
      var spa_element = document.getElementById("spa_bar"); var SpA = parseInt(pokemon.base["Sp. Attack"]);
      var spd_element = document.getElementById("spd_bar"); var SpD = parseInt(pokemon.base["Sp. Defense"]);
      var spe_element = document.getElementById("spe_bar"); var Spe = parseInt(pokemon.base.Speed);

      // Calculates the new width for each base stat bar
      if (HP > max_stat) {hp_element.style.width = '100%';}
      else {hp_element.style.width = conv(HP);}

      if (Atk > max_stat){atk_element.style.width = '100%';}
      else {atk_element.style.width = conv(Atk);}

      if (Def > max_stat){def_element.style.width = '100%';}
      else {def_element.style.width = conv(Def);}

      if (SpA > max_stat){spa_element.style.width = '100%';}
      else {spa_element.style.width = conv(SpA);}

      if (SpD > max_stat){spd_element.style.width = '100%';}
      else {spd_element.style.width = conv(SpD);}

      if (Spe > max_stat){spe_element.style.width = '100%';}
      else {spe_element.style.width = conv(Spe);}

      // Does the color change
      stat_color_change(HP, hp_element);
      stat_color_change(Atk, atk_element);
      stat_color_change(Def, def_element);
      stat_color_change(SpA, spa_element);
      stat_color_change(SpD, spd_element);
      stat_color_change(Spe, spe_element);
    }
  })
  })
}

/*--------------------------------------------------------------------------------*/
/*                            NEW WIDTH CALCULATION                               */
/* Parameters: stat                                                               */
/* Calculates new stat_bar width via a rule of three                              */
/*--------------------------------------------------------------------------------*/
function conv(stat){
  return `${5*stat/9}%`;
}

/*--------------------------------------------------------------------------------*/
/*                            POKÉMON SWITCH STAT COLORS                          */
/* Parameters: given_stat, stat_element                                           */
/* Dynamically changes the colors of the base stat bars based on how high the     */
/* Pokémon's base stats are. Warm colors for worse stats. Cold colors for good.   */
/*--------------------------------------------------------------------------------*/
function stat_color_change(given_stat, stat_element){
  var stat = parseInt(given_stat);
  if (stat < 30) {
    stat_element.style.backgroundColor = "#872010";
  } else if (stat >= 30 && stat < 50) {
    stat_element.style.backgroundColor = "#e04f38";
  } else if (stat >= 50 && stat < 75) {
    stat_element.style.backgroundColor = "#e3a33b";
  } else if (stat >= 75 && stat < 100) {
    stat_element.style.backgroundColor = "#e3e858";
  } else if (stat >= 100 && stat < 125) {
    stat_element.style.backgroundColor = "#91d636";
  } else if (stat >= 125 && stat < 150) {
    stat_element.style.backgroundColor = "#36d666";
  } else if (stat >= 150 && stat < 180) {
    stat_element.style.backgroundColor = "#24bdf0";
  } else if (stat >= 180) {
    stat_element.style.backgroundColor = "#1a2ead";
  }
}

/*--------------------------------------------------------------------------------*/
/*                                POKÉMON SWITCH TYPE                             */
/* Parameters: type1, type2                                                       */
/* Dynamically changes the Pokémon type symbol. Hides type2 symbol when the Poké- */
/* mon doesn't have a secondary type (e.g. Charmander)                            */
/*--------------------------------------------------------------------------------*/
function change_type(type1, type2){
  var type1_div = document.getElementById("local_type1");
  var type2_div = document.getElementById("local_type2");
  change_type_color(type1_div);
  change_type_color(type2_div);
  
  if(type2_div.innerHTML === "undefined"){
  document.getElementById("local_type2").style.display = "none";
  } else {
    document.getElementById("local_type2").style.display = "inline-block";
  }
}

/*--------------------------------------------------------------------------------*/
/*                             POKÉMON SWITCH TYPE COLOR                          */
/* Parameters: type_div                                                           */
/* Dynamically changes the Pokémon type symbol color based on the type of the     */
/* current Pokémon (e.g. grass types get a green color: #54eb49)                  */
/*--------------------------------------------------------------------------------*/
function change_type_color(type_div){
  var type_div_back = type_div.style.backgroundColor;
  switch(type_div.innerHTML) {
    // Determines which colors are going to be used
    case "Rock": type_div_back = "#a38d29"; break;
    case "Water": type_div_back = "#35adfc"; break;
    case "Electric": type_div_back = "#d2e810"; break;
    case "Grass": type_div_back = "#54eb49"; break;
    case "Poison": type_div_back = "#a010e8"; break;
    case "Psychic": type_div_back = "#eb34d8"; break;
    case "Fire": type_div_back = "#e8a813"; break;
    case "Ground": type_div_back = "#deb557"; break;
    case "Flying": type_div_back = "#a6fffb"; break;
    case "Bug": type_div_back = "#78bd19"; break;
    case "Normal": type_div_back = "#888"; break;
    case "Ghost": type_div_back = "#8868a3";  break;
    case "Fighting": type_div_back = "#631511"; break;
    case "Steel": type_div_back = "#e6e6e6"; break;
    case "Ice": type_div_back = "#a1eeff"; break;
    case "Dragon": type_div_back = "#1b1163"; break;
    case "Fairy": type_div_back = "#ffbaeb"; break;
    case "Dark": type_div_back = "black"; break;
    default:
        type_div_back = "#c4c4c4"; break;
  }
  type_div.style.backgroundColor = type_div_back;
  
}

/*--------------------------------------------------------------------------------*/
/* Block of code to make sure that the first Pokémon that appears right after loa-*/
/* ding the HTML is Bulbasaur                                                     */
/*--------------------------------------------------------------------------------*/
function onLoadHandler() {
  //console.log('onLoadHandler called');
  switch_pkmn("1");
  switch_colors_1("1");
  switch_stats("1");
}
window.onload = onLoadHandler;