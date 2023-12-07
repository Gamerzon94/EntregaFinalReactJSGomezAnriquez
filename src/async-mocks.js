const products = [
    {
        id: "1",
        name: 'Lápiz JCJenson',
        description: 'El nuevo lápiz con gran durabilidad le sera su compañero perfecto para firmar una simple entrega o incluso los grandes contratos del día a día.',
        img: '/productos/JCJenson_Pen.webp',
        imageDescription : 'Lapiz JCJenson',
        price: 1500,
        category: "oficina",
        stock: 10
    },
    {
        id: "2",
        name: 'Servicio de transporte',
        description: 'Nuestro servicio de transporte no solo se asegura de entregar los productos en cualquier parte del mundo, sino también nos encargamos de llevar cualquier producto que necesite ser enviado.',
        img: '/productos/avion1.jpg',
        imageDescription : 'Avion JCJenson',
        price: 1500,
        category: "transporte",
        stock: 10
    },
    {
        id: "3",
        name: 'Colonias espaciales',
        description: '¿Aburrido de la tierra?, una de las grandes apuestas de JCJenson es la exploración espacial, ponte en contacto para saber sobre próximos viajes a algunas de las colonias humanas en el espacio.',
        img: '/productos/colonias1.png',
        imageDescription : 'Colonias espaciales',
        price: 1500,
        category: "espacio",
        stock: 10
    },
    {
        id: "4",
        name: 'Dron especialista en niños',
        description: 'El nuevo modelo de dron para la familia se encargará de cuidar y ser el mejor amigo de cualquier niño o niña, se encargara de solucionar los problemas y nunca tengan algún problema.',
        img: '/productos/Dron1.webp',
        imageDescription : 'Dron familiar',
        price: 1500,
        category: "dron",
        stock: 10
    },
    {
        id: "5",
        name: 'Dron de reparaciones',
        description: 'Este dron es especialista en reparaciones, tenerlo cerca te asegura que nunca una puerta en tu casa fallará.',
        img: '/productos/dron2.webp',
        imageDescription : 'Dron repraciones',
        price: 1500,
        category: "dron",
        stock: 10
    },
    {
        id: "6",
        name: 'Dron de servidumbre',
        description: 'El modelo de dron es el pequeño mayordomo ideal, te servirá a la perfección en tu casa y en cada fiesta tendra el servicio listo para ti y tus invitados.',
        img: '/productos/dron3.webp',
        imageDescription : 'Dron servidumbre',
        price: 1500,
        category: "dron",
        stock: 10
    },
    {
        id: "7",
        name: 'Dron sin entrenamiento',
        description: 'El dron sin entrenamiento es una perfecta oportunidad para las familias que no pueden permitirse grandes gastos, con el la programación esta en tus manos.',
        img: '/productos/dron5.webp',
        imageDescription : 'Dron sin entrenamiento',
        price: 1500,
        category: "dron",
        stock: 10
    },
    {
        id: "8",
        name: 'Dron de seguridad',
        description: 'El orgullo de la rama de seguridad de JCJenson, este dron te asegura mantenerte a salvo bajo cualquier situación existente, incluso, hasta las que nunca han ocurrido aun.',
        img: '/productos/dron4.webp',
        imageDescription : 'Dron de seguridad',
        price: 1500,
        category: "dron",
        stock: 10
    },
    {
        id: "9",
        name: 'Centinela',
        description: '¿la seguridad es lo mas importante y un dron no es suficiente? nuestro nuevo modelo de centinelas se encargan de tener una programación avanzada dedicada únicamente a la seguridad, protegerán lo que le digas a cualquier costo.',
        img: '/productos/sentinela.webp',
        imageDescription : 'Centinela',
        price: 1500,
        category: "dron",
        stock: 10
    }
    ];

    export const getProducts = () => {
        return new Promise((resolve, reject) => {
            if (products.length > 0) {
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            } else {
                reject("No hay productos");
            }
        });
    };

    export const getProduct = ( id ) => {
        return new Promise((resolve, reject) => {
            const product = products.find( product => product.id === id); 
            setTimeout( () => { 
                if(!product) {
                    reject("No se encontró el producto solicitado")
                } else {
                    resolve(product);
                }
            }, 2000 )
        });
    };