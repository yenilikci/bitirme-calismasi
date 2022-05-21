import {useWeb3} from "@components/providers"
import {ActiveLink, Button} from "@components/ui/common"
import {useAccount} from "@components/hooks/web3"
import {useRouter} from "next/router"
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {FiMoon, FiSun} from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import {useDencrypt} from "use-dencrypt-effect";
import styles from "../../../../styles/Navbar.module.css";

const values = ["Coursehash.", "Bitirme Çalışması"];
export default function Navbar() {
    const {result, dencrypt} = useDencrypt();

    const {connect, isLoading, requireInstall} = useWeb3()
    const {account} = useAccount()
    const {pathname} = useRouter()

    const {t} = useTranslation();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        let i = 0;
        const action = setInterval(() => {
            dencrypt(values[i]);
            i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);
        return () => clearInterval(action);
    }, [])


    const {systemTheme, theme, setTheme} = useTheme();

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
            <div className="relative py-6 sm:px-6 lg:px-8 dark:bg-gray-900 rounded bg-white">
                <nav className="relative" aria-label="Global">
                    <div className="flex flex-col xs:flex-row justify-between items-center">
                        <div>
                            <a className="flex items-center">
                                <span
                                    className={`self-center text-4xl font-semibold whitespace-nowrap mb-3 text-indigo-900 dark:text-white ${theme == 'dark' ? styles.neonTextDark : null}`}>{result == "" ? "Coursehash." : result}</span>
                            </a>
                            <ActiveLink href="/">
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    {t('common:Home')}
                                </a>
                            </ActiveLink>
                            <ActiveLink href="/marketplace">
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    {t('common:Marketplace')}
                                </a>
                            </ActiveLink>
                            <ActiveLink href="/blogs" >
                                <a
                                    className="font-medium text-xl mr-8 text-gray-500 hover:text-gray-900">
                                    {t('common:Blog')}
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
                                        {t('common:Hi there')} {account.isAdmin && "Admin"}
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
                    {account.data &&
                    !pathname.includes("/marketplace") &&
                    <div className="flex justify-end">
                        <div className="bg-fuchsia-200 dark:text-slate-200 dark:bg-fuchsia-700 rounded-md p-2">
                            {account.data}
                        </div>
                    </div>
                    }
                </nav>
            </div>
        </section>
    )
}
