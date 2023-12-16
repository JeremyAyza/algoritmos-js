class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    // crear el nodo
    let newNode = new Node(value)

    // si el árbol está vacío, el nuevo nodo es root
    if (!this.root) {
      this.root = newNode
      return 
    }

    // buscar un nodo libre
    let freeNode = this.searchFreeNode()

    // insertar el nodo como hijo del nodo libre
    if (freeNode.left) freeNode.right = newNode
    else freeNode.left = newNode
  }

  searchFreeNode() {
    // se inicia encolando el primer elemento
    let queue = [this.root]

    // mientras la cola esté llena
    while (queue.length > 0) {
      // 1. desencolar
      let current = queue.shift()

      // 2. procesar: preguntar si es un nodo libre
      if (!current.left || !current.right) return current

      // 3. encolar a los hijos
      queue.push(current.left)
      queue.push(current.right)
    }
  }

  remove(value) {
    // si el árbol está vacío
    if (!this.root) return

    // si el elemento a eliminar lo contiene root
    if (this.root.value === value) {
      this.root = null
      return
    }

    // se busca al padre de value
    let parentNode = this.searchParentOf(value)
    
    // si existe, se elimina al hijo que contenga el valor de value
    if (parentNode) {
      if (parentNode.left.value === value) parentNode.left = null
      else parentNode.right = null
    }
  }

  searchParentOf(value) {
    // se inicia encolando el primer elemento
    let queue = [this.root]

    // mientras la cola esté llena
    while (queue.length > 0) {
      // 1. desencolar
      let current = queue.shift()

      // 2. procesar: verificar si current es padre de value
      if (current.left.value === value) return current
      if (current.right.value === value) return current

      // 3. encolar a los hijos
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }

  print() {
    if (!this.root) {
      console.log('El árbol está vacío.')
      return
    }

    // se inicia encolando el primer elemento
    let queue = [this.root]

    // mientras la cola esté llena
    while (queue.length > 0) {
      // 1. desencolar
      let current = queue.shift()

      // 2. procesar: imprimir el valor
      console.log(current.value)

      // 3. encolar a los hijos
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }
}
