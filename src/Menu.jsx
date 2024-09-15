import React from 'react';
import i1 from './assets/i1.png';

const Menu = () => {
    // Sample Data
    const donuts = [
        {
            image: 'chocolate-crunch.png', // Replace with real image paths
            title: 'Chocolate Crunch',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'
        },
        {
            image: 'strawberry-sprinkles.png',
            title: 'Strawberry Sprinkles',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'
        },
        {
            image: 'caramel-glaze.png',
            title: 'Caramel Glaze',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'
        }
        ,
        {
            image: 'caramel-glaze.png',
            title: 'Caramel Glaze',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'
        },
        {
            image: 'caramel-glaze.png',
            title: 'Caramel Glaze',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'

        }
        ,
        {
            image: 'caramel-glaze.png',
            title: 'Caramel Glaze',
            description: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
            price: '2.50'
        }
    ];

    return (
        <div id='menu' className='h-auto container py-5'>
            <h1 className='menu-heading text-center'>Menu</h1>
            <div className="row">
                {donuts.map((donut, index) => (
                    <div className="col-md-4 col-sm-12 mb-4 " key={index}>
                        <div className="card h-100 text-center border-0 ">
                            <img src={i1} className="card-img-top img-fluid rounded-4" alt={donut.title} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>{donut.title}</h5>
                                <p className="card-text">{donut.description}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
