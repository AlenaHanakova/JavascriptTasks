export { };

function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function replaceAt(email: string): string {
    return email.replace(/\[at\]/gm, "@");
}


let testEmail = "abcd[at]nada.com";
console.log(replaceAt(testEmail));
console.log(validateEmail(testEmail));
console.log(validateEmail(replaceAt(testEmail)));
