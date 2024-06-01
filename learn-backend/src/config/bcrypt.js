import bcrypt from 'bcrypt'

const saltRounds = 10;
export const generatePassword = async (password) => {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        console.log(salt);
        const hashPassword = bcrypt.hash(password, salt)
        return hashPassword
    } catch (err) {
        console.log(err);
        return err
    }
}

export const comparePassword = async (password, hash) => {
    try {
        console.log(password, hash)
        const checkPassword = bcrypt.compare(password, hash);
        return checkPassword
    } catch (err) {
        console.log(err)
    }
}


