import {useEffect, useMemo, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import {setupHooks} from "@components/providers/web3/hooks/setupHooks";

const {createContext, useContext} = require("react");


const Web3Context = createContext(null);

export default function Web3Provider({children}) {
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true
    })

    useEffect(() => {
        const loadProvider = async () => {

            const provider = await detectEthereumProvider()
            if (provider) {
                const web3 = new Web3(provider)
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoading: false
                })
            } else {
                setWeb3Api(api => ({...api, isLoading: false}))
                console.error("Please, install Metamask.")
            }
        }

        loadProvider()
    }, [])

    const _web3Api = useMemo(() => {
        const {web3, provider} = web3Api;
        return {
            ...web3Api,
            hooks: setupHooks(web3),
            isWeb3Loaded: web3 != null,
            connect: provider ?
                async () => {
                    try {
                        await provider.request({method: "eth_requestAccounts"})
                    } catch {
                        location.reload()
                    }
                } :
                () => console.error("Cannot connect to Metamask, try to reload your browser please.")
        }
    }, [web3Api])

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context);
}
