import jwt from "jsonwebtoken"

const resetToken = (id) => {
    return jwt.sign({ id, purpose:"reset-password" }, process.env.JWT_SECRET, { expiresIn: "15m" })
}

export { resetToken }