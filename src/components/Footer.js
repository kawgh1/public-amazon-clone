import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

function Footer() {
    return (
        <footer>
            <div className="relative bg-amazon_blue h-fit-content mt-96 lg:mt-48 text-white items-left lg:items-center md:h-600">
                <div className="absolute bg-amazon_blue bottom-0 left-0 right-0">
                    <div className="bg-amazon_blue-light link text-xs sm:text-sm py-4 text-center">
                        {" "}
                        Back to top
                    </div>
                    <div
                        className="max-w-screen-xl md:w-screen-lg    bg-amazon_blue text-center 
                m-0 p-10 h-fit-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                mx-auto"
                    >
                        {/* Column 1 */}
                        <div className="w-48 mx-auto space-y-1 my-10">
                            <p className="text-md font-bold text-left pb-1 cursor-default">
                                Get to Know Us
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Careers
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Blog
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                About Amazon
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Sustainability
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Press Center
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Investor Relations
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Devices
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="w-48 mx-auto space-y-1 my-10">
                            <p className="text-md font-bold text-left pb-1 cursor-default">
                                Make Money with Us
                            </p>
                            <p className="text-left link text-xs md:text-sm ">
                                Sell products on Amazon
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Sell apps on Amazon
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                About Amazon
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Become an Affiliate
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Become a Delivery Driver
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Start a package delivery business
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Advertise your products
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Self-Publish with Us
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Host an Amazon Hub
                            </p>
                            <div className="flex link items-center">
                                <ChevronRightIcon className="h-4 -ml-1" />
                                <p className="text-left text-xs md:text-sm ">
                                    See More Ways to Make Money
                                </p>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="w-48 mx-auto space-y-1 my-10 ">
                            <p className="text-md font-bold text-left pb-1 cursor-default">
                                Amazon Payment Products
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Rewards Visa Signature Cards
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon.com Store Card
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Secured Card
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Business Card
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Business Line of Credit
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Shop with Points
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Credit Card Marketplace
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Reload Your Balance
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Currency Converter
                            </p>
                        </div>
                        {/* Column 4 */}
                        <div className="w-48 mx-auto space-y-1 my-10 ">
                            <p className="text-md font-bold text-left pb-1 cursor-default">
                                Let Us Help You
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon and COVID-19
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Your Account
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Your Orders
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Shipping Rates & Policies
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Prime
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Returns & Replacements
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Manage Your Content and Devices
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Amazon Assistant
                            </p>
                            <p className="text-left link text-xs md:text-sm">
                                Help
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
