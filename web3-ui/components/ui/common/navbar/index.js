import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { ActiveLink, Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { useRouter } from "next/router"
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@heroicons/react/outline";
import {FaRegMoon, FaRegSun} from "react-icons/fa";
import {useEffect, useState} from "react";
import {BsMoon, BsSun} from "react-icons/bs";
import {FiMoon, FiSun} from "react-icons/fi";

export default function Navbar() {



    const { connect, isLoading, requireInstall } = useWeb3()
    const { account } = useAccount()
    const { pathname } = useRouter()

    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    },[])


    const {systemTheme , theme, setTheme} = useTheme();

    const renderThemeChanger= () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
            return (
                <FiSun className="w-8 h-8 text-yellow-500 inline mx-3" role="button" onClick={() => setTheme('light')}/>
            )
        }

        else {
            return (
                <FiMoon className="w-8 h-8 text-gray-900 inline mx-3" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex flex-col xs:flex-row justify-between items-center">
                        <div>
                            <ActiveLink href="/" >
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    Home
                                </a>
                            </ActiveLink>
                            <ActiveLink href="/marketplace" >
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    Marketplace
                                </a>
                            </ActiveLink>
                            <ActiveLink href="/blogs" >
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    Blogs
                                </a>
                            </ActiveLink>
                        </div>
                        <div className="text-center">
                            {renderThemeChanger()}
                            { isLoading ?
                                <Button
                                    className="bg-slate-400 dark:bg-gray-700 shadow dark:border-gray-900"
                                    disabled={true}
                                    onClick={connect}>
                                    Loading...
                                </Button> :
                                account.data ?
                                    <Button
                                        hoverable={false}
                                        className="cursor-default bg-slate-400 dark:bg-gray-700 shadow  dark:border-gray-900">
                                        Hi there {account.isAdmin && "Admin"}
                                    </Button> :
                                    requireInstall ?
                                        <Button
                                            className="bg-slate-400 dark:bg-gray-700 dark:border-gray-900 shadow"
                                            onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                                            Install Metamask
                                        </Button> :
                                        <Button
                                            className="bg-slate-400 dark:bg-gray-700 dark:border-gray-900 shadow"
                                            onClick={connect}>
                                            Connect
                                        </Button>
                            }

                        </div>
                    </div>
                </nav>
            </div>
            { account.data &&
            !pathname.includes("/marketplace") &&
            <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
                <div className="text-white bg-indigo-600 rounded-md p-2">
                    {account.data}
                </div>
            </div>
            }
        </section>
    )
}
