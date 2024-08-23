import React from 'react';

const ProductCard = ({product}) => {

    const handleOrder = () => {
        console.log('clicked');
    }

    return (
        <div>
            <div data-aos="zoom-out-up">

                <div key={product.id} className="bg-sky-300 border rounded-lg shadow-lg p-4 transition hover:shadow-2xl">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
                    <p className="text-gray-600 mt-2 flex"><span className='text-black font-semibold'>Brand:</span> {product.brandName || 'N/A'}</p>
                    <p className="text-gray-600 mt-1"><span className='text-black font-semibold'>Category:</span> {product.categoryName || 'N/A'}</p>
                    <p className="text-gray-800 mt-1 font-semibold">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-gray-500 mt-1 text-sm"><span className='text-black font-semibold'>Date :</span> {new Date(product.dateAdded).toLocaleDateString()}</p>
                    <p className="text-gray-500 mt-1 text-sm"><span className='text-black font-semibold'>Details:</span> {product.Details}</p>

                    <button onClick={()=>handleOrder()} className='btn btn-info bg-blue-600 hover:rounded-sm rounded-3xl flex mx-auto text-white hover:bg-sky-300 hover:text-blue-600 mt-3'>Order</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;