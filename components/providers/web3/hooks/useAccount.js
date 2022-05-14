import {useEffect} from "react"
import useSWR from "swr"

const adminAddresses = {
    "0xcf9201674645e205581d5dc064f5f70902c47b93a32838a78129519820b3041f": true
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
        console.log("SUBSCRIBING TO EVENT")
        provider &&
        provider.on("accountsChanged",
            accounts => {
                console.log("ON ACCOUNT DATA")
                mutate(accounts[0] ?? null)
            }
        )

        console.log(provider)
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
