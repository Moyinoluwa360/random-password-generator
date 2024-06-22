// my solution for the web 3 pre qualification test

function generate_password(strength,length){
    // validate inputs
    strength = strength.toLowerCase()
    // creating characters that will be used for the password
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    if (strength === "weak" ||strength === "normal" || strength === "strong" && length > 0){
        let chars = ""
        // lets check for the strength
        if (strength == "weak"){
            chars = upperCaseChars + lowerCaseChars; 
        }else if(strength === "normal"){
            chars = upperCaseChars + lowerCaseChars + numbersChars
        }else if(strength === "strong"){
            chars = upperCaseChars + lowerCaseChars + numbersChars + specialChars
        }
        // generate random password
        let generated_password = "";
        for (let i=0; i < length; i++){
            const get_random_index = Math.floor(Math.random()*chars.length)
            generated_password += chars[get_random_index]
        }

        return generated_password ;
    }else{
        console.log("Invalid Input: password strength options are only [weak, normal and strong]")
    }
    
}

module.exports = generate_password();
// Done