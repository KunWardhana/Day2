//ambil element
const skills = document.getElementById("skills")
const primaryskill = document.getElementById("primaryskill")

const mySkills = ["Backflip", "Drip", "Kongkow", "Slap Bass"]

//kalo pake foreach jadi undefined
//map itu kek foreach tapi masukin ke array baru
const printSkills = mySkills.map((skill) => {

    return skill
})

// skills.innerHTML = printSkills

//Filter
const printfPrimarySkill = mySkills.filter((skill)=>{
    return skill == "Slap Bass"
})

primaryskill.innerHTML = printfPrimarySkill