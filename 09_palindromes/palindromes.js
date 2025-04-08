const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (string) {
    filtredString=string.toLowerCase()
    .split('')
    .filter((character)=>alphanumerical.includes(character))
    .join('');

    reversedString=filtredString.split('').reverse().join('');
    if(reversedString===filtredString){
        return true;
    }else{return false;}
};

// Do not edit below this line
module.exports = palindromes;
