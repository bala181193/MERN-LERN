import bcrypt from 'bcrypt'

const saltRounds = 10;
export const generatePassword = (password) => {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    } catch (err) {
        return err
    }
}

export const comparePassword = (password, hash) => {
    try {
        console.log(password, hash)
        const checkPassword = bcrypt.compareSync(password, hash);
        return checkPassword
    } catch (err) {
        console.log(err)
        return err

    }
}


