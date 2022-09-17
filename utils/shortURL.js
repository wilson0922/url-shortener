const usedShortURL = []
// 字元表
const CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// 字元表最大index
const MAX = 61
// 字元表最小index
const MIN = 0

module.exports = (shortenURL_Length) => {
  let shortURL = ''
  for (let i = 0; i < shortenURL_Length; i++) {
    // 產生亂數 Index
    const randomIndex = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    // 依照字元表找出對應字元
    const chooseChar = CHAR[randomIndex]
    // 將對應字元放入
    shortURL += chooseChar
  }
  return shortURL
}

