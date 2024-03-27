//destruturação nos parametros
function creatUser({ nome, job, parents }) {
  const id = Math.floor(Math.random() * 99999);
  return {
    id,
    nome,
    job,
    parents,
  };
}

const person = {
  nome: "tiago",
  job: "farmer",
  parents: ["anakin", "padme"],
};

const name = person.nome;

//destruturação

const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

console.log(father, mother);

const link = creatUser(person);
console.log(link);
