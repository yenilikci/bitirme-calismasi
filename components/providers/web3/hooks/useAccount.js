import {useEffect} from "react";
import useSWR from "swr";

const adminAddresses = {
    "0xD5461F3f05827BF224C09dF3071145711F5eBfA1": true
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
            isAdmin: (data && adminAddresses[data]) ?? false,
            mutate,
            ...rest
        }
    }
};
