import {useEffect} from "react"
import useSWR from "swr"

const adminAddresses = {
    "0xcf9201674645e205581d5dc064f5f70902c47b93a32838a78129519820b3041f": true,
    "0x6df9b1b3e2a71e3ccfa8db4d495dac17db5a85ef2d1285fe095839d636a10dcd": true,
    "0xd8da0264f4827df283d6703855bede95dec677768d0e69f359edfc47780df019": true,
}


export const handler = (web3, provider) => () => {

    const {data, mutate, ...rest} = useSWR(() =>
            web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]

            if (!account) {
                throw new Error("Cannot retreive an account. Please refresh the browser.")
            }

            return account
        }
    )

    useEffect(() => {
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)

        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    }, [provider])

    return {
        data,
        isAdmin: (
            data &&
            adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    }
}
