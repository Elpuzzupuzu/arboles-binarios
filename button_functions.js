const bst = new BinarySearchTree(); // Creación del objeto

function insertButton() {
  addNum = document.getElementById("Num");
  bst.insert(parseInt(Math.abs(addNum.value))); // Se envía un valor numérico entero positivo
  var root = bst.getRootNode(); // getRootNode retorna this.root
  bst.inorder(root); // Ayuda con la consola
  addNum.value = "";
}

function findButton() {
  findNum = document.getElementById("Num");

  var root = bst.getRootNode();
  var x = bst.find(root, parseInt(Math.abs(findNum.value))); // Retorna el nodo si se encuentra

  if (x != null) {
    x.n.classList.add("foundNode"); // Cambia el color a amarillo e imprime
    alert("El elemento " + findNum.value + " ha sido encontrado");
  } else {
    alert("El elemento " + findNum.value + " no ha sido encontrado");
  }
  findNum.value = "";
}

function printButton() {
  var poljeIspis = document.getElementById("poljeIspis");
  poljeIspis.innerHTML += '<br>' + 'Impresión en orden' + '<br>'; // Pega en la parte inferior de la pantalla
  var root = bst.getRootNode();
  bst.inorder(root); // Consola
  bst.ispis(root); // Impresión en la pantalla
  alert("Las impresiones están en la parte inferior de la pantalla");

  poljeIspis.innerHTML += '<br>' + 'Impresión en preorder' + '<br>'; // Pega en la parte inferior de la pantalla
  bst.ispisPreorder(root); // Impresión en la pantalla

  poljeIspis.innerHTML += '<br>' + 'Impresión en postorder' + '<br>'; // Pega en la parte inferior de la pantalla
  bst.ispisPostorder(root); // Impresión en la pantalla
}

function minButton() {
  var root = bst.getRootNode();
  if (root != null) {
    var min = bst.findMinNode(root); // Se envía la raíz a la función auxiliar findMinNode en tree.js
    alert("El elemento más pequeño es " + min.data);
  } else {
    alert("El árbol está vacío");
  }
}

function maxButton() {
  var root = bst.getRootNode();

  if (root != null) {
    var max = bst.findMaxNode(root);
    alert("El elemento más grande es " + max.data);
  } else {
    alert("El árbol está vacío");
  }
}

function deleteButton() {
  var deleteNum = document.getElementById("Num");
  var root = bst.getRootNode();

  if (!bst.isthere(root, deleteNum.value)) {
    bst.remove(parseInt(Math.abs(deleteNum.value)));
    bst.inorder(root);
  } else {
    alert("El elemento no existe");
  }
  deleteNum.value = "";
}

//////////////////////////////////////////AVL/////////////////////////////////////////////////////////
function insertButtonAVL() {
  addNum = document.getElementById("Num");

  bst.insertAVL(parseInt(Math.abs(addNum.value)));

  var root = bst.getRootNode();
  bst.inorder(root);

  addNum.value = ""; // Eliminar número del cuadro de entrada
  clearCanvas(); // Eliminar líneas

  ChangePos(root, window.innerWidth / 2, rootPosition); // Cambiar posición en la imagen
}

function deleteButtonAVL() {
  var deleteNum = document.getElementById("Num");
  var root = bst.getRootNode();

  if (!bst.isthere(root, deleteNum.value)) {
    bst.removeAVL(parseInt(Math.abs(deleteNum.value)));
    bst.inorder(root);
  } else {
    alert("El elemento no existe");
  }

  deleteNum.value = "";
}

////////////////////////////////////////// NUEVAS FUNCIONES DE RECORRIDO /////////////////////////////////////////////////////////

function inorderTraversal() {
  var root = bst.getRootNode();
  if (root != null) {
    const result = [];
    inorderHelper(root, result); // Función auxiliar para el recorrido
    alert("Recorrido en orden: " + result.join(", "));
  } else {
    alert("El árbol está vacío");
  }
}

function preorderTraversal() {
  var root = bst.getRootNode();
  if (root != null) {
    const result = [];
    preorderHelper(root, result); // Función auxiliar para el recorrido
    alert("Recorrido en preorden: " + result.join(", "));
  } else {
    alert("El árbol está vacío");
  }
}

function postorderTraversal() {
  var root = bst.getRootNode();
  if (root != null) {
    const result = [];
    postorderHelper(root, result); // Función auxiliar para el recorrido
    alert("Recorrido en postorden: " + result.join(", "));
  } else {
    alert("El árbol está vacío");
  }
}

function depthFirstTraversal() {
  var root = bst.getRootNode();
  if (root != null) {
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
      let current = stack.pop();
      result.push(current.data);

      if (current.right) stack.push(current.right); // Apilar hijo derecho
      if (current.left) stack.push(current.left); // Apilar hijo izquierdo
    }

    alert("Recorrido en profundidad: " + result.join(", "));
  } else {
    alert("El árbol está vacío");
  }
}

// Funciones auxiliares para recorridos recursivos
function inorderHelper(node, result) {
  if (node !== null) {
    inorderHelper(node.left, result); // Subárbol izquierdo
    result.push(node.data); // Nodo actual
    inorderHelper(node.right, result); // Subárbol derecho
  }
}

function preorderHelper(node, result) {
  if (node !== null) {
    result.push(node.data); // Nodo actual
    preorderHelper(node.left, result); // Subárbol izquierdo
    preorderHelper(node.right, result); // Subárbol derecho
  }
}

function postorderHelper(node, result) {
  if (node !== null) {
    postorderHelper(node.left, result); // Subárbol izquierdo
    postorderHelper(node.right, result); // Subárbol derecho
    result.push(node.data); // Nodo actual
  }
}
