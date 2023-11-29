const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fsPromises = require('fs/promises');
const { Metaplex, bundlrStorage, toMetaplexFile, keypairIdentity } = require("@metaplex-foundation/js");
const { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require("@solana/web3.js");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: '*',
    }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server listening to PORT: ', PORT);
});

const main = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = Metaplex.make(connection);
    const pr = [243, 113, 150, 28, 17, 250, 47, 13, 251, 176, 218, 188, 242, 97, 179, 39, 141, 165, 224, 60, 58, 165, 18, 129, 142, 29, 15, 33, 255, 54, 235, 224, 255, 152, 202, 100, 3, 63, 133, 57, 174, 102, 143, 188, 86, 162, 165, 44, 185, 20, 222, 165, 227, 135, 150, 197, 86, 154, 77, 15, 130, 61, 117, 4];
    const wallet = Keypair.fromSecretKey(new Uint8Array(pr));

    metaplex.use(keypairIdentity(wallet));
    metaplex.use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: 'https://api.devnet.solana.com',
        timeout: 60000,
    }));

    console.log("wallet", wallet.publicKey.toBase58());
    console.log("balance", await connection.getBalance(wallet.publicKey));

    let jsonBuffer = await fsPromises.readFile('./receive.png');

    const image = await toMetaplexFile(jsonBuffer, 'My-image-name.jpeg', {
        contentType: 'image/jpeg',
        extension: 'jpeg'
    });
    console.log("image", image);

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: "My NFT",
        description: "My description of Organ Mask",
        image
    });
    console.log("uri", uri);

    const { nft } = await metaplex.nfts().create({
        uri,
        name: "My NFT",
        sellerFeeBasisPoints: 500,
    });

    console.log("nft", nft);
    console.log(nft.mint.address.toBase58());
}

main().then(() => console.log('Done')).catch(err => console.log(err));


