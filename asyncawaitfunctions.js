const fetchUser = (id) => {
    return new Promise((resolve) => {
        console.log("Fetching user name");
        resolve("varun");
    });
};

const fetchOrder = (username) => {
    return new Promise((resolve) => {
        console.log(`Fetching ${username}'s order`);
        const cost = Math.random() * 1000;
        resolve(cost);
    });
};

const fetchPayment = (price) => {
    return new Promise((resolve, reject) => {
        console.log(`Checking payment status of ₹${price.toFixed(2)}`);
        const paid = true;
        if (paid) {
            resolve();
        } else {
            reject("Order failed");
        }
    });
};

const placeOrder = async (id) => {
    try {
        const username = await fetchUser(id);
        const cost = await fetchOrder(username);
        await fetchPayment(cost);
        console.log(`Order has been successfully placed for user ${username} with ID ${id} at ₹${cost}`);
    } catch (error) {
        console.error(error);
    }
};

let id = "123";
placeOrder(id);