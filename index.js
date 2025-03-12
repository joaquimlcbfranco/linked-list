const createNode = (value = null, next = null) => {
  return {
    value,
    next,
  }
}

const linkedList = () => {
  const headNode = createNode('head');
  const tailNode = createNode('tail');
  headNode.next = tailNode;

  const append = (value) => {
    const newNode = createNode(value);
    newNode.next = tailNode;
    let current = headNode;

    while (current.next != tailNode) {
      current = current.next;
    }

    current.next = newNode;
  }

  const prepend = (value) => {
    const newNode = createNode(value);
    const currentFirst = headNode.next;
    newNode.next = currentFirst;
    headNode.next = newNode;
  }

  const size = () => {
    let count = 1;
    let current = headNode;
    while (current != tailNode) {
      count++;
      current = current.next;
    }
    return count;
  }

  const head = () => {
    console.log(headNode.next)
    return headNode.next;
  }

  const tail = () => {
    let current = head;
    while (current.next != tail) {
      current = current.next;
    }
    console.log(current)
    return current;
  }

  const at = (index) => {
    let current = head.next;
    for (let count = 1; count <= index; count++) {
      current = current.next;
    }
  }

  return {
    headNode,
    append,
    prepend,
    size,
    head,
  }
}

const test = linkedList();