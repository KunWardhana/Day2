// Ambil Element

const skills= document.getElementById('skills')

//buat variable
const mySkills = ["Berenang", "Nongkrong", "Git The f-f-f-f FuckOut"]

mySkills.push("Dev ops"); //normal function
console.log(mySkills);

//foreach
mySkills.forEach(showskill);

function showskill(mySkill){
    console.log(mySkill)
}

//pokoknya for each ngambil semuanya gausa ribet pake variable
//btw cons kaga bisa diinisialisasi ulang
//cons bisa di push atau di pop


let parent = "<ul>"
mySkills.forEach((mySkill) => 
parent  += `<li>${mySkill}</li>`)
//console.log(mySkill))  // => arrow function
parent +="</ul>"

skills.innerHTML = parent;
