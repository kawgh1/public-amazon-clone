import React, { useState } from "react";
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
// next router
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

function Header() {
    const [session] = useSession();
    const router = useRouter();
    const [toggleSignOut, setToggleSignOut] = useState(false);

    // redux
    const items = useSelector(selectItems);

    return (
        <header className="bg-amazon_blue py-1">
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        alt="Amazon logo"
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search - tablet screen and larger */}
                <div className="max-w-screen-2xl mx-auto h-10 hidden sm:flex items-center rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
                    <input
                        className="max-w-96 p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                        type="text"
                        placeholder="Search Amazon"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right Top */}
                <div className="relative text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        {/* {<p>Hello Sonny Sangha</p>} */}
                        {session ? (
                            <>
                                <div>
                                    <p>{`Hello, ${session.user.name}`}</p>
                                    <p className="font-bold md:text-sm">
                                        Account & Lists
                                    </p>{" "}
                                </div>
                            </>
                        ) : (
                            <>
                                <div onClick={signIn}>
                                    <p className="link md:text-sm">
                                        Hello, Sign in
                                    </p>
                                    <p className="font-bold md:text-sm">
                                        Account & Lists
                                    </p>{" "}
                                </div>
                            </>
                        )}
                    </div>
                    {/* {session && toggleSignOut ? (
                        <div className="absolute top-100 right-0 left-0 w-36">
                            <button
                                className="button mx-auto"
                                onClick={signOut}
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        ""
                    )} */}

                    <div className="link">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm">& Orders</p>
                    </div>
                    {/* <div className="absolute top-100 right-0 left-0 w-36">
                        <button className="link" onClick={signOut}>
                            Sign out
                        </button>
                    </div> */}

                    <div
                        className="link relative flex items-center"
                        onClick={() => router.push("/checkout")}
                    >
                        <span className="absolute top-0  right-0 sm:right-5 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-8" />
                        <p className="hidden sm:inline font-bold md:text-sm mt-2">
                            Cart
                        </p>
                    </div>
                </div>
            </div>

            {/* Search - mobile screen only*/}
            <div className="h-10 flex sm:hidden mb-2 items-center rounded-md flex-grow cursor-pointer  mx-2 bg-yellow-400 hover:bg-yellow-500">
                <input
                    className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                    type="text"
                    placeholder="Search Amazon"
                />
                <SearchIcon className="h-12 p-4" />
            </div>

            {/* Bottom Nav */}
            <div className="flex items-center justify-between bg-amazon_blue-light text-white text-sm">
                <div className="flex items-center xl:justify-evenly space-x-4 p-2 pl-4">
                    <p className="link hidden sm:flex items-center font-bold">
                        <MenuIcon className="h-6 mr-3 " />
                        All
                    </p>
                    <p className="link">Video</p>
                    <p className="link">Prime</p>
                    <p className="link hidden 2xl:inline-flex">New Releases</p>
                    <p className="link">Buy Again</p>
                    {/* hidden on mobile */}
                    <p className="link ">Groceries</p>
                    <p className="link hidden sm:inline-flex">Pharmacy</p>
                    <p className="link hidden sm:inline-flex">Home</p>
                    <p className="link hidden md:inline-flex">Books</p>
                    <p className="link hidden xl:inline-flex">Gift Cards</p>
                    <p className="link hidden xl:inline-flex">Registry</p>
                    <p className="link hidden md:inline-flex">
                        Health & Beauty
                    </p>
                    <p className="link hidden lg:inline-flex">Fashion</p>
                    <p className="link hidden xl:inline-flex">Toys & Games</p>
                    <p className="link hidden lg:inline-flex">Automotive</p>
                    <p className="link hidden xl:inline-flex">Computers</p>

                    <p className="link hidden 2xl:inline-flex font-bold">
                        Be a go-gifter, shop deals now
                    </p>
                </div>
                {session ? (
                    <div
                        className="link justify-self-right font-bold mx-2"
                        onClick={signOut}
                    >
                        Sign out
                    </div>
                ) : (
                    ""
                )}
            </div>
        </header>
    );
}

export default Header;
