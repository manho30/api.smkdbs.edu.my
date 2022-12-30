/**
 * @Description : Generate token
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 30/12/2022 19:58
 * @File        : token.js
 * @IDE         : WebStorm
 */

// base64 encryption
const base64Encode = (str) => {
    return Buffer.from(str).toString('base64');
}

const generateToken = (length = 32) => {
    length = length - 2
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '==';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return base64Encode(result);
}

exports.generateToken = generateToken;