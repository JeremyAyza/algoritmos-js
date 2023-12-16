import Tree from './src/tree.js'

let tree = new Tree()
// Crear una instancia de la clase Tree

// Insertar nodos siguiendo la descripción proporcionada
// Según la clase Tree del archivo de la clase, el metodo insert recibe 
// como primer parametro el nodo hijo, y como segudo, el nodo padre al cual será asignado
// primero el izquierdo lego el derecho
// Nivel 1
tree.insert("*1");
// ├*1

// Nivel 2
tree.insert("*2", "*1");
tree.insert("*3", "*1");
// ├*1
// ├──*2
// ├──*3

// Nivel 3
tree.insert("*4", "*2");
tree.insert("*5", "*2");
tree.insert("*16", "*3");
tree.insert("*17", "*3");
// ├*1
// ├──*2
// ├────*4
// ├────*5
// ├──*3
// ├────*16
// ├────*17

// Nivel 4
tree.insert("*6", "*4");
tree.insert("*7", "*4");
tree.insert("*10", "*5");
tree.insert("*11", "*5");
tree.insert("*18", "*16");
tree.insert("*19", "*16");
tree.insert("*24", "*17");
tree.insert("*25", "*17");
// Nivel 5
tree.insert("r", "*6");
tree.insert("o", "*6");
tree.insert("*8", "*7");
tree.insert("*9", "*7");
tree.insert("*12", "*10");
tree.insert("*13", "*10");
tree.insert("*14", "*11");
tree.insert("*15", "*11");
tree.insert("*20", "*18");
tree.insert("*21", "*18");
tree.insert("*22", "*19");
tree.insert("*23", "*19");
tree.insert("e", "*24");
tree.insert("*26", "*24");
tree.insert("1", "*25");
tree.insert("*27", "*25");
// Nivel 6
tree.insert("0", "*8");
tree.insert("3", "*8");
tree.insert("6", "*9");
tree.insert("9", "*9");
tree.insert("i", "*12");
tree.insert("y", "*12");
tree.insert("u", "*13");
tree.insert("l", "*13");
tree.insert(".", "*14");
tree.insert("c", "*14");
tree.insert("m", "*15");
tree.insert("\\", "*15");
tree.insert("M", "*20");
tree.insert("S", "*20");
tree.insert("a", "*21");
tree.insert("j", "*21");
tree.insert("E", "*22");
tree.insert("z", "*22");
tree.insert("k", "*23");
tree.insert("R", "*23");
tree.insert("h", "*26");
tree.insert("7", "*26");
tree.insert("t", "*27");
tree.insert("n", "*27");

// Imprimir el árbol
tree.print()

