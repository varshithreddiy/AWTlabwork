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
        console.log(`Checking payment status of ₹${price}`);
        const paid = true;
        if (paid) {
            resolve();
        } else {
            reject("Order failed");
        }
    });
};

let id = "123";
fetchUser(id)
    .then((username) => {
        return fetchOrder(username).then((cost) => ({ username, cost }));
    })
    .then(({ username, cost }) => {
        return fetchPayment(cost).then(() => ({ username, cost }));
    })
    .then(({ username, cost }) => {
        console.log(`Order has been successfully placed for user ${username} with ID ${id} at ₹${cost}`);
    })
    .catch((error) => console.error(error));