import CryptoES from "crypto-es";

const encrypt = async (key, password) => {
  try {
    const encryptedPassword = CryptoES.AES.encrypt(password, key).toString();
    return encryptedPassword;
  } catch (error) {
    console.log('Hash error', error);
  }
}

const verify = async (key, password, hash) => {
  try {
    const decryptedPassword = CryptoES.AES.decrypt(hash, key).toString(CryptoES.enc.Utf8);
    return password === decryptedPassword;
  } catch (error) {
    console.log('Hash error', error);
  }
}

const generateKey = (email, password) => {
  const emailName = email.split('@')[0];
  const randomNumber = Math.floor(Math.random() * 100);

  const scrambledPassword = password.split('').map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
    else return Math.floor(Math.random() * 10);
  }).join('');

  return emailName + randomNumber + scrambledPassword + randomNumber;
}

export { encrypt, verify, generateKey };
