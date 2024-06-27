console.log
console.debug
console.error
console.table
console.warn

const friend = {firstname: "coco", mail: "coco@mail.fr" };
const{firstname, mail} = friend;

console.log(`${firstname} a ${mail}`)
console.log("detail de lobjet %o", friend)

const users = [ 
    {name :  "toto", age: 22},
    {name :  "lili", age: 42},
    {name :  "somi", age: 2}

]
console.table(users)

console.time("test")
for(let i=0; i<10;i++){
    console.timeEnd("test")
}
