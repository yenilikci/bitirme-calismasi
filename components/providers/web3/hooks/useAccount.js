import {useEffect} from "react";
import useSWR from "swr";

const adminAddresses = {
    "0xcf9201674645e205581d5dc064f5f70902c47b93a32838a78129519820b3041f": true
}

export const handler = (web3, provider) => () => {
    // const [account, setAccount] = useState(null);
    const {data, mutate, ...rest} = useSWR(() =>
            web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts();
            return accounts[0];
        }
    );

    useEffect(() => {
        // window.ethereum
        provider &&
        provider.on("accountsChanged", accounts => {
            mutate(accounts[0] ?? null);
        });
    }, [provider])


    return {
        account: {
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        }
    }
};
