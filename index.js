const { prototype } = require("events");
const express = require("express")
const app = express();
let port = 2000

app.use(express.json())
let students = [
    {
        name : "varshith",
        dept : "it",
        age : 19,
        id : "22b81a12b1"
    },
    {
        name : "narsiah",
        dept : "it",
        age : 20,
        id : "22b81a12b0"
    },
    {
        name : "sanjay",
        dept : "it",
        age : 20,
        id : "22b81a12b2"
    }
]
app.get("/students",(req,res) => {
    res.send(students);
})
app.get("/students/:id",(req,res) => {
    let {id} = req.params;
    let student = students.find( (std) => std,id === id);
    if(student) {
        res.status(404).send(student);
    }else{
        res.status(404).send("student not found");
    }
})
app.delete("/students/:id",(req,res) => {
    let {id} = req.params;
    students=students.filter( (std) => std.id != id);
    // if(student) {
    //     res.status(200).send(students);
    // }else {
    //     res.status(404).send("student not exist")
    // }
    res.status(200).send(students);
})
app.post("/students",(req,res) => {
    let {name,dept,age,id} = req.body;
    students.push({name,dept,age,id});
    res.send(students);
})
app.patch("/students/:id",(req,res)=> {
    let {id} = req.params
    let {name,age} = req.body;
    let student = students.find((std)=> std.id == id);
    if(student) {
        if (name){
            student.name = name;
        }
        if(age) {
            student.age = age;
        }
        res.status(404).send(students);

    }else{
        res.status(404).send("student not found")
    }
})
app.put("/students/:id",(req,res)=> {
    let {id} = req.params
    let {name,age,dept} = req.body;
    let student = students.find((std)=> std.id == id);
    if(student) {
        student.name = name;
        student.age = age;
        student.dept = dept;
        res.status(200).send(students);
    }else{
        res.status(404).send("student not found")
    }
})
app.listen(port,() => {
    console.log("server gets started at port" +port);
})
