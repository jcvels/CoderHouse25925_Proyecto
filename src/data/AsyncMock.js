const products = [
    {
        id:0,
        title:"Cesna Citation X",
        description:"Reactor corporativo ligero",
        price:4000000.00,
        pictureUrl:"https://www.ainonline.com/sites/ainonline.com/files/uploads/2018/06/x1.jpg"
    },
    {
        id:1,
        title:"Beechcraft Baron G58",
        description:"Avión ligero bimotor de pistón",
        price:220000.50,
        pictureUrl:"https://aircharterservice-globalcontent-live.cphostaccess.com/images/spain/aircraft/private/802190_beech205820baron20ext20pic_tcm71-3916.jpg"
    },
    {
        id:2,
        title:"Cessna 172 Skyhawk",
        description:"Avión monomotor de ala alta",
        price:45000.98,
        pictureUrl:"https://i1.wp.com/todoaviones.net/wp-content/uploads/2020/07/image-fotoshowBig-2dc28c67-1252426.jpg?w=740&ssl=1"
    },
    {
        id:3,
        title:"WACO Classic Aircraft",
        description:"Avión biplano monomotor",
        price:97000,
        pictureUrl:"https://st2.depositphotos.com/1763233/6600/i/450/depositphotos_66007091-stock-photo-biplane-on-the-blue-sky.jpg"
    }


];

export const getProducts = () => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products);
        }, 2000);
    });
}