const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let isApproved = true;


for(let alumn of alumns){
    if(alumn.T1 && alumn.T2 ||
        alumn.T2 && alumn.T3 ||
        alumn.T1 && alumn.T3 === isApproved){
            console.log(alumn.name + ':' +' Este alumno ha aprobado')
        }else{
            console.log(alumn.name + ':' +' Este alumno no ha aprobado')
        }
    }


