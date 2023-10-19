const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let isApproved=true;

for(let alumn of alumns){
    if((alumns.T1 && alumns.T2)||
    (alumns.T2 && alumns.T3) ||
    (alumns.T1 && alumns.T3));
}
console.log(alumns);

