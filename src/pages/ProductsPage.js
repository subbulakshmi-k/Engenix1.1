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
            image: 'https://th.bing.com/th/id/OIP.JMHL5DZu1HD3I1uEiX_JWgHaHa?w=192&h=194&c=7&r=0&o=7&pid=1.7&rm=3',
        },
        { 
            id: 2, 
            name: 'Circuit Breakers', 
            price: 1599, 
            description: 'High-quality MCB circuit breakers for electrical safety and protection',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
        },
        { 
            id: 3, 
            name: 'Power Outlets', 
            price: 450, 
            description: 'Modern modular power outlets with USB charging ports and surge protection',
            image:'https://energysavings.com/wp-content/uploads/2024/02/electrical-outlets-closeup-of-plug.jpg',
        },
        { 
            id: 4, 
            name: 'Surge Protectors', 
            price: 899, 
            description: 'Advanced surge protection devices for sensitive electronics',
            image: 'https://spy.com/wp-content/uploads/2023/03/Superdanny-Surge-Protector-with-22-AC-Outlets-and-6-USB-Charging-Ports.jpeg?resize=142'
        },
        { 
            id: 5, 
            name: 'Electrical Wires', 
            price: 250, 
            description: 'High-quality copper electrical wires for various applications',
            image: 'https://www.thespruce.com/thmb/5xyIcVbk0dScg5yFoQHzKyfvI_U=/1500x1000/filters:fill(auto,1)/electrical-wire-color-coding-1152863_hero-572ac6b6d4924c92942c55e31595fa3c.jpg'
        },
        { 
            id: 6, 
            name: 'Smart Switches', 
            price: 699, 
            description: 'WiFi enabled smart switches with remote control capability',
            image: 'https://tse3.mm.bing.net/th/id/OIP.7S51CkuD6Y5HJZEY_jPTOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3itches.jpg'
        },
        { 
            id: 7, 
            name: 'Voltage Stabilizers', 
            price: 2499, 
            description: 'Automatic voltage stabilizers for consistent power supply',
            image: 'https://bkmiami.com/wp-content/uploads/2016/06/69BAR3000_angle.jpg'
        },
        { 
            id: 8, 
            name: 'Cable Management', 
            price: 199, 
            description: 'Professional cable management solutions and organizers',
            image: 'https://www.sunbirddcim.com/sites/default/files/AdobeStock_289763213_0.jpg'
        },
        { 
            id: 9, 
            name: 'Electrical Tools Kit', 
            price: 1899, 
            description: 'Complete set of professional electrical tools for technicians',
            image: 'https://www.electricianinformationresource.com/images/electrical-tool-kit-displayed.jpg'
        },
        { 
            id: 10, 
            name: 'Power Meters', 
            price: 1299, 
            description: 'Digital power meters for energy consumption monitoring',
            image: 'https://www.instrumentation2000.com/media/catalog/tmp/category/power-meters_1.jpg'
        },
        { 
            id: 11, 
            name: 'Industrial Plugs', 
            price: 599, 
            description: 'Heavy-duty industrial plugs and sockets for commercial use',
            image: 'https://tse2.mm.bing.net/th/id/OIP.bhWzRCchs0-zwyI_tGL7hwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3ontent/uploads/2020/09/industrial-plugs.jpg'
        },
        { 
            id: 12, 
            name: 'LED Panel Lights', 
            price: 899, 
            description: 'Modern LED panel lights for office and commercial spaces',
            image: 'https://tse4.mm.bing.net/th/id/OIP.BjV8I3m54AXfCEHwUqDoiwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        { 
            id: 13, 
            name: 'Electrical Testers', 
            price: 499, 
            description: 'Professional electrical testers and multimeters',
            image: 'https://tse4.mm.bing.net/th/id/OIP.NEr_sLWVj-M5ACB-IUe01QHaGR?rs=1&pid=ImgDetMain&o=7&rm=34.mm.bing.net/th/id/OIP.NEr_sLWVj-M5ACB-IUe01QHaGR?rs=1&pid=ImgDetMain&o=7&rm=3lectricianinformationresource.com/images/electrical-testers.jpg'
        },
        { 
            id: 14, 
            name: 'Distribution Boards', 
            price: 1999, 
            description: 'Main distribution boards with circuit protection',
            image: 'https://tse4.mm.bing.net/th/id/OIP.ggms43SVtFBHOgrKTC_HiAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3https://tse4.mm.bing.net/th/id/OIP.ggms43SVtFBHOgrKTC_HiAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3-boards.jpg'
        },
        { 
            id: 15, 
            name: 'Solar Inverters', 
            price: 8999, 
            description: 'High-efficiency solar power inverters for renewable energy',
            image: 'https://facts.net/wp-content/uploads/2025/02/28-facts-about-solar-inverter-1738947310.jpg'
        },
        { 
            id: 16, 
            name: 'Emergency Lights', 
            price: 699, 
            description: 'Automatic emergency lighting systems for safety',
            image: 'https://tse3.mm.bing.net/th/id/OIP.Yw0t9GbmcLwvRheEPxF_ygHaE8?rs=1&pid=ImgDetMain&o=7&rm=3ncy-lights.jpg'
        },
        { 
            id: 17, 
            name: 'Cable Connectors', 
            price: 149, 
            description: 'Various types of electrical cable connectors and terminals',
            image: 'https://tse2.mm.bing.net/th/id/OIP.jCakDVfrt7me5GXSNIVBqwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3/images/cable-connectors.jpg'
        },
        { 
            id: 18, 
            name: 'Power Adapters', 
            price: 349, 
            description: 'Universal power adapters and converters',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71n1nqo0UmL._AC_SL1500_.jpgple.com/images/power-adapters.jpg'
        },
        { 
            id: 19, 
            name: 'Electrical Enclosures', 
            price: 1299, 
            description: 'Weatherproof electrical enclosures and cabinets',
            image: 'https://tse2.mm.bing.net/th/id/OIP.jFhr-95VfCZUSU2ucM9qVwHaFS?rs=1&pid=ImgDetMain&o=7&rm=3.com/images/electrical-enclosures.jpg'
        },
        { 
            id: 20, 
            name: 'Smart Home Hub', 
            price: 2499, 
            description: 'Central hub for smart home automation and control',
            image: 'https://tse1.mm.bing.net/th/id/OIP.lIihQ9konsAXzv3v9e5e3QHaEQ?rs=1&pid=ImgDetMain&o=7&rm=3le.com/images/smart-home-hub.jpg'
        },
        { 
            id: 21, 
            name: 'Battery Backup', 
            price: 3999, 
            description: 'Uninterruptible power supply systems',
            image: 'https://www.lifewire.com/thmb/VlMw7uVnIiLgB4Fe2Zfm-dmEBMU=/fit-in/1500x1191/filters:no_upscale():max_bytes(150000):strip_icc()/817Z5KQfqXL._AC_SL1500_-ece09c987f5840bbbbf3b475d58dd147.jpg'
        },
        { 
            id: 22, 
            name: 'Wiring Accessories', 
            price: 199, 
            description: 'Complete range of wiring accessories and components',
            image: 'https://tse1.mm.bing.net/th/id/OIP.D68c-7Cx97VWlOqgSoKI8QHaF6?rs=1&pid=ImgDetMain&o=7&rm=3com/images/wiring-accessories.jpg'
        }
    ];

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
