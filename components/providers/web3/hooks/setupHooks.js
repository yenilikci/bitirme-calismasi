import {handler as createUseAccountHook} from "./useAccount";
import {handler as createUseNetworkHook} from "./useNetwork";

export const setupHooks = (...deps) => {
    return {
        useAccount: createUseAccountHook(...deps),
        useNetwork: createUseNetworkHook(...deps)
    }
}
