import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';

const IsotopeFilter = ({ items }) => {
    const [filterKey, setFilterKey] = useState('all');
    useEffect(() => {
        const iso = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
        });

        iso.arrange();
        return () => {
            iso.destroy();
        };
    }, [items]);

    const handleFilterChange = (key) => {
        setFilterKey(key);
        const iso = new Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            filter: key,
        });
        iso.arrange();
    };

    const filterButtons = [
        { label: "Toute l'équipe", key: 'all' },
        { label: 'Product', key: '.filter-product' },
        { label: 'People', key: '.filter-people' },
        { label: 'Marketing', key: '.filter-marketing' },
        { label: 'Finance', key: '.filter-finance' },
        { label: 'Engeneering', key: '.filter-engeneering' },
        { label: 'Partnerships', key: '.filter-partnerships' },
    ];

    return (
        <div className='isotope_container'>
           

            <div className="isotope-container">
                {items.map((item, index) => (
                    <div key={index} className={`isotope-item ${item.category}`}>
                        {/* Your item content goes here */}
                        {item.content}
                    </div>
                ))}
            </div>

            <div>
                <p>Filtering by: {filterKey === 'all' ? 'All' : filterKey}</p>
            </div>
        </div>
    );
};

export default IsotopeFilter;
