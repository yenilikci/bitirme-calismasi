import Link from 'next/link';
import {useWeb3} from "@components/providers";
import {Button} from "@components/ui/common";
import {useAccount} from "@components/web3/hooks/useAccount";

export default function Navbar() {
    const {connect, isLoading, isWeb3Loaded} = useWeb3();
    const {account} = useAccount();


    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link href="/">
                                <a
                                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                                >
                                    Home
                                </a>
                            </Link>
                            <Link href="/marketplace">
                                <a
                                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                                >
                                    Marketplace
                                </a>
                            </Link>
                            <Link href="/blogs">
                                <a
                                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                                >
                                    Blogs
                                </a>
                            </Link>

                        </div>
                        <div>
                            <Link href="/wishlist">
                                <a
                                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                                >
                                    Wishlist
                                </a>
                            </Link>
                            {
                                isLoading ?
                                    <Button
                                        disabled={true}
                                        onClick={connect}
                                    >
                                        Loading...
                                    </Button> :
                                    isWeb3Loaded ?
                                        account ?
                                            <Button
                                                hoverable={false}
                                                className="cursor-default"
                                            >
                                                Hi there
                                            </Button> :
                                            <Button
                                                onClick={connect}
                                            >
                                                Connect Wallet
                                            </Button> :
                                        <Button
                                            onClick={() =>
                                                window.open("https://metamask.io/download.html", "_blank<")}
                                            className="text-white bg-lime-600 hover:bg-lime-700"
                                        >
                                            Install Metamask
                                        </Button>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}
