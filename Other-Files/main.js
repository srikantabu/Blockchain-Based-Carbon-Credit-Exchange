const SHA256 = require('crypto-js/sha256');
class Block{
    //This class create blocks
    constructor(index, data, previousHash = '',ownerName) {
        this.index=index;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
        this.data = data;
        this.dataHash = this.getHash();
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
        this.ownerName=ownerName
        this.status=""
    }
 //To create Hash based on all the details
  calculateHash() {
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
//To create Hash only based on data/content
    getHash() {
        return SHA256(JSON.stringify(this.data)).toString();
    }

}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];
    }

    //To create Genesis Block
    createGenesisBlock(){
        return new Block(0,"Genesis Block","0","");
    }
    //To find the last block
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    //To check the chain is valid or not
    isChainValid(){
        for(let i=1;i<this.chain.length; i++){
            const currentBlock=this.chain[i];
            const previousBlock=this.chain[i-1];
            
            if(currentBlock.hash !=currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash!=previousBlock.hash){
                return false;
            }
        }
        return true;
    }

    //Compare the New Hash with other block hash
    //Hash is based on Data/Content
    isDataHashExist(newDatahash){
        for(let i=1;i<this.chain.length; i++){
            const currentBlock=this.chain[i];
            
            if(currentBlock.dataHash == newDatahash){
                return true;
            }

        }
        return false;
    }

    // To create new block
    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        newBlock.dataHash=newBlock.getHash

        //if (isDataHashExist(newBlock.dataHash) == false) {
                this.chain.push(newBlock);
        //    }
    }

    //To Trasnfer the owernship
    transferBlock(newDatahash){
        for(let i=1;i<this.chain.length; i++){
            const currentBlock=this.chain[i];
            
            if(currentBlock.hash == transferHash){
                //New Block or Change the existing block
                //Status change no more further chaanges
            }

        }
    }
    
}



let objBC = new Blockchain();

objBC.addBlock(new Block(1,"Here is the Data1","","finny"));
objBC.addBlock(new Block(2,"Here is the Data2","","SK"));
objBC.addBlock(new Block(3,"Here is the Data1","","SD"));

//console.log('Vaild?' + objBC.isChainValid());

console.log(JSON.stringify(objBC,null,2));




