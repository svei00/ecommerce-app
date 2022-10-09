import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: 'xsu00e3z',
    dataset: 'production',
    apiVersion: '2022-10-08',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// Pass the client we just created
const builder = imageUrlBuilder(client);

// Getting the images
export const urlFor = (source) => builder.image(source);