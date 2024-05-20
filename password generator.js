function generatePassword(length, includeLowercase, includeNumbers, includeUppercase, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbols = "!@#$%^&*()_-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length <= 0) {
        return `Password length must be at least 1`;
    }
    if (allowedChars.length === 0) {
        return `At least one type of character should be included in the password`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeNumbers,
    includeUppercase,
    includeSymbols
);

console.log(`Generated password: ${password}`);
