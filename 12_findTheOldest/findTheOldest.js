function getAge(birthYear,deathYear){
    if(!deathYear){
        deathYear=new Date().getFullYear();
    }
    return deathYear-birthYear;
}
const findTheOldest = function(obj) {
    return obj.reduce((oldest,current)=>{
        const oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge=getAge(current.yearOfBirth,current.yearOfDeath);
        return oldestAge>currentAge?oldest:current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
