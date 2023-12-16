import BinaryTree from './src/binary-tree.js'
// El mensaje a decodificar:
let tree = new BinaryTree()


tree.insert("*1");
tree.insert("*2");
tree.insert("*3");
tree.insert("*4");
tree.insert("*5");
tree.insert("*16");
tree.insert("*17");
tree.insert("*6");
tree.insert("*7");
tree.insert("*10");
tree.insert("*11");
tree.insert("*18");
tree.insert("*19");
tree.insert("*24");
tree.insert("*25");
tree.insert("r");
tree.insert("o");
tree.insert("*8");
tree.insert("*9");
tree.insert("*12");
tree.insert("*13");
tree.insert("*14");
tree.insert("*15");
tree.insert("*20");
tree.insert("*21");
tree.insert("*22");
tree.insert("*23");
tree.insert("e");
tree.insert("*26");
tree.insert("1");
tree.insert("*27");
tree.insert("0");
tree.insert("3");
tree.insert("6");
tree.insert("9");
tree.insert("i");
tree.insert("y");
tree.insert("u");
tree.insert("l");
tree.insert(".");
tree.insert("c");
tree.insert("m");
tree.insert("\\");
tree.insert("M");
tree.insert("S");
tree.insert("a");
tree.insert("j");
tree.insert("E");
tree.insert("z");
tree.insert("k");
tree.insert("R");
tree.insert("h");
tree.insert("7");
tree.insert("t");
tree.insert("n");

function decodeMessage(tree, encodedMessage) {
    let currentNode = tree.root;
    let decodedMessage = "";
  
    for (let i = 0; i < encodedMessage.length; i++) {
      const bit = encodedMessage[i];
  
      if (bit === "0") {
        currentNode = currentNode.left;
      } else if (bit === "1") {
        currentNode = currentNode.right;
      }
  
      if (!currentNode.value.includes("*")) {
        // Llegamos a un nodo que representa un carácter
        decodedMessage += currentNode.value;
        // Regresamos a la raíz para el próximo bit
        currentNode = tree.root;
      }
    }
  
    return decodedMessage;
  }
  
  // Ejemplo de uso:
  const MSG_CODE = '11110010001111101001010100000010110110001101000101110011111000011001111110001100101001110100101011100101101011100001100111100001110101110111011100011100100001011101111011001101110'
  const decodedMessage = decodeMessage(tree, MSG_CODE);
  console.log(decodedMessage);


tree.print()