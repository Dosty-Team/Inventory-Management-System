const generateRandomData = (count) => {
    const data = [];

    for (let i = 1; i <= count; i++) {
        const username = generateRandomUsername();
        const password = generateRandomPassword();
        const role = getRandomRole();

        const user = {
            key: i.toString(),
            username,
            password,
            role,
        };

        data.push(user);
    }

    return data;
};

const generateRandomUsername = () => {
    const names = ["James Clark", "Ben Smith", "Alice Johnson", "John Doe", "Emma Brown"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
};

const generateRandomPassword = () => {
    const passwords = ["abc1234", "apple123", "password123", "securepass", "userpass"];
    const randomIndex = Math.floor(Math.random() * passwords.length);
    return passwords[randomIndex];
};

const getRandomRole = () => {
    const roles = ["Admin", "Normal"];
    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
};

// Generate 5 random data entries
const randomData = generateRandomData(19);
console.log(randomData);
