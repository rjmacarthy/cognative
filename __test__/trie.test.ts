import * as _ from 'lodash'
import Trie from '../lib/algorithms/trie'

const words = ['cat', 'car', 'card', 'cart', 'dog', 'carts']

const insertWords = (t: Trie) => {
  _.forEach(words, (word) => {
    t.insert(word)
  })
}

test('insert and search', () => {
  const t = new Trie()
  insertWords(t)

  _.forEach(words, (word) => {
    expect(t.search(word)).toBeTruthy()
  })
  expect(t.search('wrong')).toBeFalsy()
  expect(t.search('cat')).toBeTruthy()
  t.delete('cat')
  expect(t.search('cat')).toBeFalsy()
})
