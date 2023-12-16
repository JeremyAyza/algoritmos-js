class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value != value)
    }

    hasChildren(value) {
        return this.children.some(child => child.value == value)
    }
}

export default class Tree {
    constructor() {
        this.root = null
    }

    insert(value, parentValue = null) {
        let newNode = new Node(value)

        // si no se asigna un padre, se intenta insertar en root
        if (!parentValue) {
            //si no existe root, se asigna newNode como root
            if (!this.root) this.root = newNode
            // de lo contrario se agrega como hijo de root a newNode
            else this.root.addChild(newNode)
        } else {
            // se busca al nodo que contenga parentValue
            let parent = this.search(parentValue)
            // una vez encontrado, se le agrega a newNode como hijo
            if (parent) parent.addChild(newNode)
        }
    }

    remove(value) {
        // se valida si queremos eliminar root
        if (this.root.value === value) {
            this.root = null
            return
        }

        // se busca al padre del nodo que contenta a 'value'
        let parent = this.searchParent(value)
        // se elimina al nodo que contenga a 'value' del arreglo de hijos del nodo padre encontrado
        if (parent) parent.removeChild(value)
    }

    searchParent(value) {
        return this.searchParentRecursive(this.root, value)
    }

    searchParentRecursive(node, value) {
        // se pregunta si el nodo ya es el que se está buscando
        if (node.hasChildren(value)) return node
        // de lo contrario, se busca recrusivamente en sus nodos hijos
        for (let child of node.children) {
            let foundNode = this.searchParentRecursive(child, value)
            if (foundNode) return foundNode
        }
        // si no se encontró el nodo, se retorna null
        return null
    }

    search(value) {
        return this.searchRecursive(this.root, value)
    }

    searchRecursive(node, value) {
        // se pregunta si el nodo ya es el que se está buscando
        if (node.value === value) return node
        // de lo contrario, se busca recrusivamente en sus nodos hijos
        for (let child of node.children) {
            let foundNode = this.searchRecursive(child, value)
            if (foundNode) return foundNode
        }
        // si no se encontró el nodo, se retorna null
        return null
    }

    print() {
        this.printRecursive(this.root, 0)
    }

    printRecursive(node, level) {
        if (!node) return
        // se imprime el valor del nodo por el que se está pasando
        let tabulation = '├' + '──'.repeat(level)
        console.log(tabulation + node.value)
        // se manda a imprimir a los nodos hijos recursivamente
        for (let child of node.children) {
            this.printRecursive(child, level + 1)
        }
    }
}