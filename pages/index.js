import React from 'react';

import { client } from '../lib/client';
import { Hero, FooterBanner, Product } from '../components';

const Home = ( { products, bannerData } ) => {
  return (
    <>
      <Hero heroBanner = {bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Croquetas Dog Chow</p>
      </div>

      <div className='products-container'>
        {
          products?.map((product) => <Product   // The question mark is to ensure we have data
          key={product._id} product={product} />
        )}
      </div>
      
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async() => {
  // Getting the query
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // Banner
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;