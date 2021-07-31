const express = require("express");
const app = express();
const faker = require('faker');
const port = 8000;

class User{
    constructor(){
        this._id=faker.random.number(); 
        this.firstName=faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name= faker.company.companyName();
        this.address = `${faker.address.streetName()},${faker.address.city()},${faker.address.state()},${faker.address.zipCode()},${faker.address.country()}`;
    }
}
const newUser = new User();
const newComp = new Company();

app.get("/api/users/new", (req, res) => {
    // if(req.params.users === "users"){
        res.send(`User First Name: ${newUser.firstName}; User Last Name: ${newUser.lastName}`)
    // }
});

app.get("/api/companies/new", (req,res) =>{
    // if(req.params.users === "companies"){
        res.send(`Company Name ${newComp.name}; Company Address: ${newComp.address}`);
// }

    });
    app.get("/api/user/company", (req,res) =>{
    // if(req.params.users === "user" && req.params.new === "company"){
        res.send(`User First Name: ${newUser.firstName}; Company name: ${newComp.name}`);
    //   }
    });
    const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
  );
