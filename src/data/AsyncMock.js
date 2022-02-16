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
        descriptionLong:"El Cessna 172 Skyhawk es un avión monomotor de ala alta con capacidad para cuatro personas fabricado por la empresa Cessna. El Cessna 172 es el avión más fabricado de la historia y probablemente el avión de entrenamiento más popular del mundo. A causa de su diseño de ala alta, su estabilidad en vientos de baja velocidad y su relativamente baja velocidad de entrada en pérdida, el Cessna 172 es un excelente aparato para múltiples usos, como el entrenamiento, el recreo, el transporte ligero y las operaciones de búsqueda y rescate. Muchos países y corporaciones han empleado este modelo en una variedad de usos, desde civiles a militares.",
        price:45000,
        modelYear:1982,
        label:"LV-BEC",
        use:23483,
        equipment:["VHF","VOR","DME","ADF","ATC","GPS","ILS"],
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
};

export const getProduct = (productID) => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products[productID]);
        }, 2000);
    });
};