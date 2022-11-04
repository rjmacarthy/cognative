import * as _ from 'lodash'

class TrieNode {
  key?: string | null
  parent?: TrieNode
  children: { [key: string]: TrieNode }
  end: boolean

  constructor(key?: string | null) {
    this.key = key
    this.children = {}
    this.end = false
  }

  getWord() {
    const output = []
    let node = this as TrieNode

    while (node !== null && node.key) {
      output.unshift(node.key)
      if (node.parent) {
        node = node.parent
      }
    }
    return _.join(output, '')
  }
}

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode(null)
  }

  insert(word: string) {
    let node = this.root
    const letters = _.split(word, '')

    _.forEach(letters, (character, index) => {
      if (!_.get(node.children, character)) {
        node.children[character] = new TrieNode(character)
        node.children[character].parent = node
      }

      node = _.get(node.children, character)

      if (index === _.size(word) - 1) {
        node.end = true
      }
    })
  }

  search = (word: string) => {
    const characters = _.split(word, '')
    let node = this.root

    _.forEach(characters, (character) => {
      if (_.get(node, ['children', character])) {
        node = _.get(node, ['children', character])
      }
    })

    return node.end ? node.getWord() : undefined
  }

  removeWord = (node: TrieNode, word: string) => {
    if (node?.end && word === node.getWord()) {
      if (!_.isEmpty(node.children)) {
        node.end = false
      } else {
        if (node.parent) {
          node.parent.children = {}
        }
      }
      return true
    }

    for (const key in node?.children) {
      this.removeWord(_.get(node, ['children', key]), word)
    }

    return false
  }

  delete = (word: string) => {
    if (!word) {
      return false
    }

    this.removeWord(this.root, word)
  }
}

export default Trie
