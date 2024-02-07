import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const products = [
        { id: 1, name: 'เสื้อยืด', price: 200 },
        { id: 2, name: 'กางเกงยีนส์', price: 500 },
        { id: 3, name: 'รองเท้าผ้าใบ', price: 700 },
        { id: 4, name: 'กระเป๋าสะพายข้าง', price: 300 },
    ];

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        const results = products.filter(product =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    // ตรวจสอบว่ามีการค้นหาหรือไม่ ถ้าไม่มีให้แสดงรายการสินค้าทั้งหมด
    const displayProducts = searchTerm === '' ? products : searchResults;

    return (
        <div className='container mx-auto my-8'>
            <div className='flex flex-col items-center space-y-6'>
                <input type="text" placeholder="ค้นหาสินค้า" className="input input-bordered w-full max-w-lg rounded-full"
                    value={searchTerm} onChange={handleSearch}
                />
                <table className='table-md w-1/2'>
                    <thead className='text-xl'>
                        <tr>
                            <th className='text-left py-2'>สินค้า</th>
                            <th className='text-right py-2'>ราคา</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {displayProducts.map(product => (
                            <tr key={product.id}>
                                <td className=''>{product.name}</td>
                                <td className='text-right'>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search