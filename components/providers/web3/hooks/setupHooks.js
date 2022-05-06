import {useAccount} from "./useAccount";

const DEFAULT_HOOKS = {
    useAccount: () => ({account: "not set"})
};

export const setupHooks = web3 => {
    if (!web3) {
        return DEFAULT_HOOKS;
    }

    return {
        useAccount: useAccount(web3),
    }
}
