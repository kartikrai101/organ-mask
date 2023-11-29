const fsPromises = require('fs/promises');
const { Metaplex, bundlrStorage, toMetaplexFile, keypairIdentity } = require("@metaplex-foundation/js");
const { Keypair, Connection, clusterApiUrl } = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"));
const metaplex = Metaplex.make(connection)
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: 'https://api.devnet.solana.com',
        timeout: 60000,
    }));
const wallet = Keypair.generate();
metaplex.use(keypairIdentity(wallet));

let jsonBuffer = await fsPromises.readFile('./frontend/public/logo192.png');

const image = await toMetaplexFile(jsonBuffer, 'My-image-name.jpeg', {
    contentType: 'image/jpeg',
    extension: 'jpeg'
});

const { uri } = await metaplex.nfts().uploadMetadata({
    name: "My NFT",
    description: "My description of Organ Mask",
    image
});

console.log(uri);

const { nft } = await metaplex.nfts().create({
    uri,
    name: "My NFT",
    sellerFeeBasisPoints: 500, // Represents 5.00%.
});

console.log(nft);

