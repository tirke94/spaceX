const niz = [2011, 2012, 2013, 2011, 2012]
for(let j = 0; j < niz.length; j++) {
    let provera = false
    for(let i = 0; i < j; i++){
        if(niz[j] == niz[i]){
            provera = true
            break
        }
    }
    if(provera){
        niz.splice(j, 1)
        j--
    }
}
console.log(niz);