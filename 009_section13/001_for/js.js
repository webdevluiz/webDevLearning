for (let i = 1; i <= 10 && i >= -10; i--) {
  console.log("o valor de i é: " + i);
}

const array = ["Luiz", "Abraão", "João"];

for (let i of array) {
  //arrays/vetores
  console.log(i);
}

// tem mesma carga semântica que:
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

const Luiz = {
  //objetos
  nome: "Luiz",
  idade: 23,
  isDev: true,
};

for (let propertyName in Luiz) {
  console.log(propertyName + ": " + Luiz[propertyName]);
}

let acabou = 0;
fim = true;
while (fim) {
  if (acabou < 9) {
    acabou++;
    console.log(acabou);
  } else {
    fim = false;
    console.log(++acabou);
  }
}
