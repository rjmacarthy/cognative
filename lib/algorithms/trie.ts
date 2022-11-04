import * as _ from "lodash"

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
    console.log(this)

    while (node !== null && node.key) {
      output.unshift(node?.key)
      if (node.parent) {
        node = node.parent
      }
    }
    return _.join(output, "")
  }
}

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode(null)
  }

  insert(word: string) {
    let node = this.root
    const letters = _.split(word, "")

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

  print() {
    console.log(this.root)
  }
}

export default Trie
