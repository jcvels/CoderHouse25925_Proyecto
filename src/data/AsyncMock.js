const products = [
    {
        id:0,
        title:"Cesna Citation X",
        description:"Reactor Corporativo Ligero",
        price:4000000.00,
        pictureUrl:"https://www.ainonline.com/sites/ainonline.com/files/uploads/2018/06/x1.jpg"
    },
    {
        id:1,
        title:"Beechcraft Baron G58",
        description:"Avión Ligero Bimotor de Pistón",
        price:220000.50,
        pictureUrl:"https://aircharterservice-globalcontent-live.cphostaccess.com/images/spain/aircraft/private/802190_beech205820baron20ext20pic_tcm71-3916.jpg"
    },
    {
        id:2,
        title:"Cessna 172 Skyhawk",
        description:"Avión Monomotor de Ala Alta con Capacidad para Cuatro Personas",
        price:45000.98,
        pictureUrl:"https://preview.free3d.com/img/2013/09/2400305036354651870/atbevupj-900.jpg"
    }
];

export const getProducts = () => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products);
        }, 2000);
    });
}