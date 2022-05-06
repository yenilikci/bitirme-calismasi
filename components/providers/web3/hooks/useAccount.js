export const useAccount = web3 => () => {
    return {
        account: web3 ? "Test account" : "null"
    }
};
