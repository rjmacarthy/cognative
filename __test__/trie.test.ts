import * as _ from 'lodash'
import Trie from '../lib/examples/trie'

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

test('prefix search', () => {
  const t = new Trie()
  insertWords(t)
  const result = t.prefixSearch('car')
  expect(result).toHaveLength(4)
  expect(result).toContain('car')
  expect(result).toContain('cart')
  expect(result).toContain('carts')
  expect(result).toContain('card')
})
