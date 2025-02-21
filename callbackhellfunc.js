const fetchUser = (id,callback)=>{
    console.log("Fetching user name");
    callback("varshith");
}
const fetchOrder = (username,callback) =>{
    console.log(`Fetching ${username} order`);
    cost = Math.random() * 1000;
    callback(cost);
}
const fetchPayment = (price,callback) =>{
    console.log(`checking payment status of ${price}`);
    paid = true;
    if(paid){
        callback();
    }
    else{
        console.log("Order failed");
    }
}

let id = "123";
fetchUser(id,(username)=>{
    fetchOrder(username,(cost)=>{
        fetchPayment(cost,()=>{
            console.log(`order has been succesfully placed of user ${username} with id ${id}`);
        })
    })
})