import React from 'react'
import { useRouter } from 'next/router'
import Wrapper from '../../components/Wrapper'
import ProductCard from '../../components/ProductCard'


const Category = () => {
  return  (
    <div className="w-full md:py-20 relative">
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Category
                </div>
            </div>

            {/* products grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                {/* {data?.data?.map((product) => (
                    <ProductCard key={product?.id} data={product} />
                ))} */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            {/* products grid end */}
            {/* {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                    <img src="/logo.svg" width={150} />
                    <span className="text-2xl font-medium">Loading...</span>
                </div>
            )} */}
        </Wrapper>
    </div>
);
}

export default Category