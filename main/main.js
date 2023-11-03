const boton = document.querySelector("#boton")

boton.addEventListener('click', Menu)

function Menu(){

    const array1 = [
        {
            "PrimerPlato": "Sopa de lentejas",
            "SegundoPlato": "Ensalada César",
            "TercerPlato": "Risotto de champiñones",
        }]

    const array2 = [
        {
            "PrimerPlato1": "Lomo de cerdo a la parrilla con salsa de mostaza",
            "SegundoPlato1": "Salmón a la plancha con puré de patatas",
            "TercerPlato1": "Espaguetis a la bolognesa",
        }]
        
    const array3 = [
        {
            "PrimerPlato2": "Tarta de chocolate con helado de vainilla",
            "SegundoPlato2": "Fruta fresca de temporada",
            "TercerPlato2": "Tiramisú",
        }
    ]

    let platos1
    let platos2
    let platos3

    for(i=0;i<array1.length;i++){
        platos1 += `
        <p class="card-text"><strong>${array1[i].PrimerPlato}</strong></p>
        <p class="card-text"><strong>${array1[i].SegundoPlato}</strong></p>
        <p class="card-text"><strong>${array1[i].TercerPlato}</strong></p>
        `
    }

    for(i=0;i<array2.length;i++){
        platos2 += `
        <p class="card-text"><strong>${array2[i].PrimerPlato1}</strong></p>
        <p class="card-text"><strong>${array2[i].SegundoPlato1}</strong></p>
        <p class="card-text"><strong>${array2[i].TercerPlato1}</strong></p>
        `
    }

    for(i=0;i<array3.length;i++){
        platos3 += `
        <p class="card-text"><strong>${array3[i].PrimerPlato2}</strong></p>
        <p class="card-text"><strong>${array3[i].SegundoPlato2}</strong></p>
        <p class="card-text"><strong>${array3[i].TercerPlato2}</strong></p>
        `
    }

    console.log(platos1)
    console.log(platos2)
    console.log(platos3)

    document.querySelector("#PrimerPlato").innerHTML = platos1
    document.querySelector("#PrimerPlato1").innerHTML = platos2
    document.querySelector("#PrimerPlato2").innerHTML = platos3
}