
// 1.
function is_string(text){

    if (typeof text === 'string')
    return true;
        // console.log(text + ' is a string.')
        else 
        return false;
        // console.log(text + ' is not a string')    
}
console.log(is_string(7456254))


// 2.
function is_blank(text) {

    if (typeof text === 'string' && text !== '')
    return false;
    if (typeof text !== 'string'){
        console.log(text + ' is not a string!')
        return false;
    }
    else
    return true;
}
console.log(is_blank(''))


// 3.
function string_to_array(text) {

    var array = text.split(/(?:...,| )+/);
    return array;
}
console.log(string_to_array("Sunt bine merci..., nu am covid"))


// 4.
function abbrev_name(text) {

    var abbrev_text = text.trim().split(' ');
    if (abbrev_text.length > 1) {
        return abbrev_text[0] + ' ' + abbrev_text[1].charAt(0) + '.';
    }
    return abbrev_text[0];
}
console.log(abbrev_name('Daniel Livanu'))


//5.
function capitalize(text) {


        return text.charAt(0).toUpperCase() + text.slice(1);
    
}
console.log(capitalize('gemelli'))


// 6.
function truncate_string(text, parameter) {

    return text.slice(0, parameter);

}
console.log(truncate_string('Happy to be in Rome!', 5))


// 7.
function isUpperCaseAt(text, index) {

    var x = text.charCodeAt(index);
    if (65 <= x & x <= 90){
      return true;
    } else
      return false;

}
console.log(isUpperCaseAt('I am Working at Gemelli.',5))


// 8.
function insert_string(text, add_text, position){

    var newText = text.slice(0, position) + ' ' + add_text + text.slice(position);
    return newText;

}
console.log(insert_string('I am working at Hospital.', 'Gemelli', 15))


// 9.
function remove_first_occurrence(text, word) {

    var index = text.indexOf(word);

    return text.slice(0, index) + text.slice((index+1) + word.length);

}
console.log(remove_first_occurrence('A day without laughter is a day wasted.', 'a day'))


// 10.
function compare_strings(str1, str2) {

    if (str1.toUpperCase() == str2.toUpperCase()) {
        return console.log( '"' + str1 + '" and "' + str2 + '" are equals!');
    }else
        return console.log(  '"' + str1 + '" and "' + str2 + '" are not equals!');
}
compare_strings('Better Days', 'better days')



// 11.
function uncapitalize(text) {

    return text.charAt(0).toLowerCase() + text.slice(1);

}
console.log(uncapitalize("Is anyone here?"))