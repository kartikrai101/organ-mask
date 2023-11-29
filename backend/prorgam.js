const { Keypair } = require("@solana/web3.js");
const { Connection, PublicKey } = require("@solana/web3.js");
const { SystemProgram } = require("@solana/web3.js");
const { Account } = require("@solana/web3.js");
const { Transaction } = require("@solana/web3.js");
const { sendAndConfirmTransaction } = require("@solana/web3.js");

const main = async () => {
    const connection = new Connection("http://localhost:8899", "confirmed");
    const payer = Keypair.generate();
    const lamports = await connection.getMinimumBalanceForRentExemption(
        0,
        "singleGossip"
    );
    const account = new Account();

    const transaction = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: account.publicKey,
            lamports,
            space: 0,
            programId: new PublicKey(""),
        })
    );

    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [payer, account],
        {
            commitment: "confirmed",
            preflightCommitment: "confirmed",
        }
    );
}

main().then(
    () => process.exit(),
    (err) => {
        console.error(err);
        process.exit(-1);
    }
);