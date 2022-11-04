import Trie from '../lib/algorithms/trie'

test('base', () => {
  const t = new Trie()

  t.insert('and')
  t.insert('ant')
  t.insert('dad')
  t.insert('do')
  t.print()
})
