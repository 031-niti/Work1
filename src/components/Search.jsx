import React, { useEffect, useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProductsData(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleSearch = (e) => {
        const searchData = e.target.value;
        setSearch(searchData);
        const results = productsData.filter(product =>
            product.name.toLowerCase().includes(searchData.toLowerCase())
        );
        setSearchResults(results);
    };

    const displayProducts = search === '' ? productsData : searchResults;

    return (
        <div className='container mx-auto my-8 h-screen'>
            <div className='flex flex-col items-center space-y-6 mx-4 '>
                <input type="text" placeholder="ค้นหาสินค้า" className="input input-bordered sm:w-1/2 w-full rounded-full"
                    value={search} onChange={handleSearch}
                />
                <table className='table table-sm sm:table-md sm:w-5/12 w-full'>
                    <thead className='text-xl text-black'>
                        <tr>
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>ตำแหน่งสินค้า</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y '>
                        {displayProducts.map(product => (
                            <tr key={product.id}>
                                <td>{product.code}</td>
                                <td>{product.name}</td>
                                <td>{product.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search;
