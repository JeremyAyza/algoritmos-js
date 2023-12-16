class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  export default class BinarySearchTree {
    constructor() {
      this.root = null
    }
  
    insert(value) {
      // se crea el nuevo nodo
      let newNode = new Node(value)
  
      // si el árbol está vacío, el nuevo nodo es la raiz
      if (!this.root) {
        this.root = newNode
      } else {
        this.insertRecursive(newNode, this.root)
      }
    }
  
    remove(value) {
      this.root = this.removeRecursive(value, this.root)
    }
  
    removeRecursive(value, node) {
      // si el nodo es nulo
      if (!node) return null
  
      // si el valor a buscar está a la izquierda
      if (value < node.value) {
        // si existe un nodo a la izquierda, se llama recursivamente a la función
        node.left = this.removeRecursive(value, node.left)
        return node
      }
  
      // si el valor a buscar está a la derecha
      if (value > node.value) {
        // si existe un nodo a la derecha, se llama recursivamente a la función
        node.right = this.removeRecursive(value, node.right)
        return node
      }
  
      // si el valor a buscar es igual al valor del nodo
      // 1. si el nodo no tiene hijos
      if (!node.left && !node.right) {
        node = null
        return node
      }
      // 2. si el nodo solo tiene un hijo
      if (!node.left) {
        node = node.right
        return node
      }
      if (!node.right) {
        node = node.left
        return node
      }
      // 3. si el nodo tiene dos hijos
      // se busca el nodo menor de la derecha
      let minNode = this.findMin(node.right)
      // se cambia el valor del nodo actual por el valor del menor
      node.value = minNode.value
      // se elimina el menor
      node.right = this.removeRecursive(minNode.value, node.right)
      return node
    }
  
    findMin(node) {
      // se recorre la izquierda hasta que no tenga hijo left
      let current = node
      while (current.left) {
        current = current.left
      }
      return current
    }
  
    insertRecursive(newNode, node) {
      // va a la izquierda?
      if (newNode.value < node.value) {
        // existe nodo left?
        if (node.left) this.insertRecursive(newNode, node.left)
        else node.left = newNode
        // va a la derecha?
      } else {
        if (node.right) this.insertRecursive(newNode, node.right)
        else node.right = newNode
      }
    }
  
    print() {
      this.printRecursive(this.root)
    }
  
    printRecursive(node) {
      // preorder: recorrido DFS
      // console.log(node.value)
      // if (node.left) this.printRecursive(node.left)
      // if (node.right) this.printRecursive(node.right)
  
      // inorder: recorrido ordenado
      if (node.left) this.printRecursive(node.left)
      console.log(node.value)
      if (node.right) this.printRecursive(node.right)
  
      // postorder: recorrido de "abajo hacia arriba"
      // if (node.left) this.printRecursive(node.left)
      // if (node.right) this.printRecursive(node.right)
      // console.log(node.value)
    }
  }