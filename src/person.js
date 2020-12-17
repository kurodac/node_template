/**
 * @classdesc 人を表すクラス。
 *
 */
class Person {
  /**
   * Personコンストラクタ
   *
   * @param {string} name 名前
   */
  constructor(name) {
    this._name = name;
  }

  /**
   * 挨拶する
   *
   * @returns {string} あいさつ文
   */
  hello() {
    return `Hello, I'm ${this._name} !`;
  }
}

module.exports = Person;
