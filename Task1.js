// Функція для пошуку вірних цифр
function findValidDigits(keyword, digitsString) {
  let validDigits = '';
  for (let i = 0; i < keyword.length; i++) {
    const code = keyword.charCodeAt(i);
    const index = code - 65; // 65 - ASCII код символу 'A'
    validDigits += digitsString[index];
  }
  return validDigits;
}

module.exports = findValidDigits

// Задані дані
const codeWord = 'Kyiv';
const digitsString = '235486723675948752357345908723467852594680397456834765490357345734256972569395743725435894395734290876299963975573675429718807756844849082364587324693042875430965347208098768565342576786868958496738768549832563420563409657432756689326805783409567237650221751124875243561403910987457823678572306523085324805728904657834265234057341652807659065801';

// Знаходимо вірні цифри
const validDigits = findValidDigits(codeWord, digitsString);

// Роздруковуємо вірний номер авто
console.log(`Вірний номер авто: AA${validDigits}AA`);
