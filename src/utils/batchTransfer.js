
export const batchSend = async (batchTransferContract, performActions, assetaddress, id, _to) => {

 
    let newId = id.split(',').map((num)=>{
        return Number(num)
      })     
      console.log("newID: ", newId)
      console.log("token address", assetaddress)

    try {
        await performActions(async (kit) => {
            const {defaultAccount} = kit;
            await batchTransferContract.methods.bulkTransfer(defaultAccount, assetaddress, _to, newId).send({from: defaultAccount});
        });
    } catch (e) {
        console.log({e});
    }
};


export const getEvent = async (batchTransferContract) => {
    try {
        const value =  await batchTransferContract.methods.get().call();
        return value
    } catch (e) {
        console.log({e});
    }
};

const eventName = "TransferSuccessfull";
// // The name of the event to get logs for
// const eventName = "Transfer";

// // Optionally pass in options to limit the blocks from which events are retrieved
// const options = {
//   fromBlock: 0,
//   toBlock: 1000000, // can also pass "latest"
//   order: "desc",
//   // Configure event filters (filter on indexed event parameters)
//   filters: {
//     from: "0x...",
//     to: "0x..."
//   }
// };

// const events = await contract.events.getEvents(eventName, options);
// console.log(events[0].eventName);
// console.log(events[0].data);























export const increaseCount = async (batchTransferContract, performActions) => {
    try {
        await performActions(async (kit) => {
            const {defaultAccount} = kit;
            await batchTransferContract.methods.dec().send({from: defaultAccount});
        });
    } catch (e) {
        console.log({e});
    }
};
export const decreaseCount = async (batchTransferContract, performActions) => {
    try {
        await performActions(async (kit) => {
            const {defaultAccount} = kit;
            await batchTransferContract.methods.dec().send({from: defaultAccount});
        });
    } catch (e) {
        console.log({e});
    }
};

export const getCount = async (batchTransferContract) => {
    try {

        const value =  await batchTransferContract.methods.get().call();
        return value
    } catch (e) {
        console.log({e});
    }
};

