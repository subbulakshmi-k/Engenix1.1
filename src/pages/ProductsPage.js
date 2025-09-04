import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Rating from '../components/Rating';

const ProductsPage = () => {
    const { addToCart } = useContext(CartContext);
    const [productRatings, setProductRatings] = useState({});

    // Comprehensive product data with local images
    const products = [
      { 
            id: 1, 
            name: 'LED Smart Bulbs', 
            price: 300, 
            description: 'Energy-efficient smart LED bulbs with app control and voice assistant support',
            image: 'https://cdn.pixabay.com/photo/2017/08/20/20/20/lamp-2663053_1280.jpg',
        },
        { 
            id: 2, 
            name: 'Circuit Breakers', 
            price: 1599, 
            description: 'High-quality MCB circuit breakers for electrical safety and protection',
            image: 'https://cdn.pixabay.com/photo/2017/03/15/20/31/control-cabinet-2147370_640.jpg',
        },
        { 
            id: 3, 
            name: 'Power Outlets', 
            price: 450, 
            description: 'Modern modular power outlets with USB charging ports and surge protection',
            image:'https://cdn.pixabay.com/photo/2019/12/23/20/34/concent-4715347_640.jpg',
        },
        { 
            id: 4, 
            name: 'Surge Protectors', 
            price: 899, 
            description: 'Advanced surge protection devices for sensitive electronics',
            image: 'https://cdn.pixabay.com/photo/2017/04/04/17/13/belkin-2202185_1280.jpg'
        }, 
        { 
            id: 5, 
            name: 'Electrical Wires', 
            price: 250, 
            description: 'High-quality copper electrical wires for various applications',
            image: 'https://cdn.pixabay.com/photo/2014/10/19/19/57/network-cables-494649_640.jpg'
        },
        { 
            id: 6, 
            name: 'Smart Switches', 
            price: 699, 
            description: 'WiFi enabled smart switches with remote control capability',
            image: 'https://cdn.pixabay.com/photo/2019/05/14/17/56/button-4203036_1280.jpg'
        },
        { 
            id: 7, 
            name: 'Voltage Stabilizers', 
            price: 2499, 
            description: 'Automatic voltage stabilizers for consistent power supply',
            image: 'https://cdn.pixabay.com/photo/2023/05/16/15/34/wires-7997980_640.jpg'
        },
        { 
            id: 8, 
            name: 'Cable Management', 
            price: 199, 
            description: 'Professional cable management solutions and organizers',
            image: 'https://cdn.pixabay.com/photo/2015/11/07/15/19/pliers-1031980_640.jpg'
        },
        { 
            id: 9, 
            name: 'Electrical Tools Kit', 
            price: 1899, 
            description: 'Complete set of professional electrical tools for technicians',
            image: 'https://cdn.pixabay.com/photo/2020/04/10/10/44/black-5025175_640.jpg'
        },
        { 
            id: 10, 
            name: 'Power Meters', 
            price: 1299, 
            description: 'Digital power meters for energy consumption monitoring',
            image: 'https://cdn.pixabay.com/photo/2017/08/06/20/09/electricity-2595842_1280.jpg'
        },
        { 
            id: 11, 
            name: 'Industrial Plugs', 
            price: 599, 
            description: 'Heavy-duty industrial plugs and sockets for commercial use',
            image: 'https://cdn.pixabay.com/photo/2023/02/04/22/10/pipe-system-7768312_1280.jpg'
        },
        { 
            id: 12, 
            name: 'LED Panel Lights', 
            price: 899, 
            description: 'Modern LED panel lights for office and commercial spaces',
            image: 'https://cdn.pixabay.com/photo/2020/05/19/11/31/star-5190356_640.jpg'
        },
        { 
            id: 13, 
            name: 'Electrical Testers', 
            price: 499, 
            description: 'Professional electrical testers and multimeters',
            image: 'https://cdn.pixabay.com/photo/2017/09/19/22/10/tool-2766835_1280.jpg'
        },
        { 
            id: 14, 
            name: 'Distribution Boards', 
            price: 1999, 
            description: 'Main distribution boards with circuit protection',
            image: 'https://cdn.pixabay.com/photo/2017/05/07/16/54/emergency-exit-2292982_640.jpg'
        },
        { 
            id: 15, 
            name: 'Solar Inverters', 
            price: 8999, 
            description: 'High-efficiency solar power inverters for renewable energy',
            image: 'https://cdn.pixabay.com/photo/2015/04/05/16/26/solar-cells-708178_640.jpg'
        },
        { 
            id: 16, 
            name: 'Emergency Lights', 
            price: 699, 
            description: 'Automatic emergency lighting systems for safety',
            image: 'https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_640.jpg'
        },
        { 
            id: 17, 
            name: 'Cable Connectors', 
            price: 149, 
            description: 'Various types of electrical cable connectors and terminals',
            image: 'https://cdn.pixabay.com/photo/2017/01/19/06/02/idc-cable-1991608_640.jpg'
        },
        { 
            id: 18, 
            name: 'Power Adapters', 
            price: 349, 
            description: 'Universal power adapters and converters',
            image: 'https://cdn.pixabay.com/photo/2020/05/30/17/18/wind-power-plant-5239642_640.jpg'
        },
        { 
            id: 19, 
            name: 'Electrical Enclosures', 
            price: 1299, 
            description: 'Weatherproof electrical enclosures and cabinets',
            image: 'https://cdn.pixabay.com/photo/2012/12/20/10/13/electric-fence-71378_640.jpg'
        },
        { 
            id: 20, 
            name: 'Smart Home Hub', 
            price: 2499, 
            description: 'Central hub for smart home automation and control',
            image: 'https://cdn.pixabay.com/photo/2018/10/15/21/59/smarthome-3750136_640.jpg'
        },
        { 
            id: 21, 
            name: 'Battery Backup', 
            price: 3999, 
            description: 'Uninterruptible power supply systems',
            image: 'https://cdn.pixabay.com/photo/2018/04/14/16/13/hard-disc-3319335_640.jpg'
        },
        { 
            id: 22, 
            name: 'Wiring Accessories', 
            price: 199, 
            description: 'Complete range of wiring accessories and components',
            image: 'https://cdn.pixabay.com/photo/2020/04/05/19/31/insulation-5007566_640.jpg'
        }

    const handleRate = (productId, rating) => {
        setProductRatings(prev => ({
            ...prev,
            [productId]: rating
        }));
    };

    const handleAddToCart = (product) => {
        const rating = productRatings[product.id] || 0;
        addToCart({ ...product, rating });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>Electrical Engineering Products</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ 
                        border: '1px solid #e0e0e0', 
                        padding: '20px', 
                        borderRadius: '12px', 
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        transition: 'transform 0.2s ease',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <img 
                            src={product.image} 
                            alt={product.name}
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover', 
                                borderRadius: '8px',
                                marginBottom: '15px',
                                border: '1px solid #ddd'
                            }}
                            onError={(e) => {
                                console.error(`Image failed to load: ${product.image}`);
                                e.target.src = 'https://via.placeholder.com/300x200/CCCCCC/999999?text=Image+Not+Found';
                                e.target.style.border = '2px solid red';
                            }}
                            onLoad={(e) => {
                                console.log(`Image loaded successfully: ${product.image}`);
                                e.target.style.border = '1px solid green';
                            }}
                        />
                        <h2 style={{ 
                            fontSize: '18px', 
                            marginBottom: '10px', 
                            color: '#2c3e50',
                            fontWeight: '600'
                        }}>
                            {product.name}
                        </h2>
                        <p style={{ 
                            color: '#7f8c8d', 
                            fontSize: '14px', 
                            marginBottom: '15px',
                            lineHeight: '1.4'
                        }}>
                            {product.description}
                        </p>
                        <p style={{ 
                            fontSize: '20px', 
                            fontWeight: 'bold', 
                            color: '#27ae60',
                            marginBottom: '15px'
                        }}>
                            ₹{product.price}
                        </p>
                        <div style={{ marginBottom: '15px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#34495e' }}>
                                Rate this product:
                            </strong>
                            <Rating onRate={(rating) => handleRate(product.id, rating)} />
                            {productRatings[product.id] && (
                                <p style={{ marginTop: '8px', color: '#f39c12', fontSize: '14px' }}>
                                    Your rating: {productRatings[product.id]} stars
                                </p>
                            )}
                        </div>
                        <button 
                            onClick={() => handleAddToCart(product)}
                            style={{
                                backgroundColor: '#3498db',
                                color: 'white',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: '600',
                                width: '100%',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
