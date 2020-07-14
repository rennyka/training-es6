import { demoPromise } from "./import.js"

const east = "dong";
const north = "bac";
const west = "tay";
const south = "nam";
const people = ['Binh', '24']
const admin = { name: "Nam Anh", age: "24" }
const staff = { name: "Van Anh", age: "23" }
var facebook = "app";

console.log(demoPromise());

let promise = new Promise((resolve, reject) => {
    setTimeout(
        resolve("OK!"), 500)
})

promise.then(value => { console.log(value, 1111111) })

function testObject() {
    return `She is ${this.name}`
}

admin.f = testObject

const bindAdmin = testObject.bind(staff)

function test(east, ...rest) {
    return `${east} is East,
            ${rest[0]} is North,
            ${rest[1]} is West,
            ${rest[2]} is South,`
}


