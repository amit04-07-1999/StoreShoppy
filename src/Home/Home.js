import React from "react";
import "tailwindcss/tailwind.css";
import { FaMoon } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { PiDiscordLogoFill } from "react-icons/pi";
import { HiTrophy } from "react-icons/hi2";
import { BsDiscord } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Trading Rules', href: '#', current: false },
    { name: 'FAQ', href: '#', current: false },
    { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Home = () => {
    return (
        <div>
            {/* NAVBAR */}
            <div className="bg-white drop-shadow py-6 px-14 flex items-center justify-between sticky top-0">
                <div className="flex items-center space-x-4">
                    <img src="./Images/icon.png" className="w-11" alt="Logo" />
                    <div className="font-semibold text-base font-sans text-gray-600 ">
                        FUNDING PIPS
                    </div>
                </div>
                <div className="flex items-center space-x-10 hidden sm:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                'text-gray-500 text-lg hover:text-blue-500',
                                item.current && 'font-bold'
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className=" inline-flex rounded-md text-base font-medium  h-10 px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white">
                        <BsArrowUpRight className="mr-3 mt-1" />
                        Buy challenge
                    </button>
                    <a className="text-blue-500 flex items-center text-lg" href="#">
                        Dashboard
                        <BsBoxArrowUpRight className="w-9" />
                    </a>
                </div>
                <Disclosure as="nav" className="sm:hidden">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                            <Disclosure.Panel className="sm:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                'block px-3 py-2 rounded-md text-base font-medium',
                                                item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <button className="bg-gray-200 h-10 w-9 rounded-md">
                    <FaMoon className="w-9 h-5" />
                </button>
            </div>



            {/* HOME */}
            <div class="mt-10 md:mt-32">
                <div class="max-w-7xl mx-auto px-4 py-6 md:py-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="md:pr-6">
                            <h1 class="text-4xl md:text-8xl font-bold text-black-600">
                                Your Skill Is
                                <br />
                                <span class="text-blue-600">Our Capital.</span>
                            </h1>
                            <p class="mt-4 text-lg">
                                We risk while you receive up to 90% of the Profit.
                            </p>
                            <div class="mt-6 flex flex-col md:flex-row md:space-x-4">
                                <button class="inline-flex items-center rounded-md text-base h-12 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white mb-2 md:mb-0">
                                    <BsArrowUpRight className="mr-3 mt-1" />

                                    Buy challenge
                                </button>
                                <button class="inline-flex items-center rounded-md text-base h-12 px-2 py-1 bg-gray-500 hover:bg-gray-600 text-white mb-2 md:mb-0">
                                    <PiDiscordLogoFill className="mr-2" />
                                    Join discord
                                </button>
                                <button class="inline-flex items-center rounded-md text-base h-12 px-2 py-1 bg-gray-500 hover:bg-gray-600 text-white">
                                    <HiTrophy className="mr-2" />

                                    Join competition
                                </button>
                            </div>
                        </div>
                        <div class="md:pl-6 mt-6 md:mt-0">
                            <img src="./Images/hero.webp" class="mx-auto md:mx-0" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="mt-10 md:mt-40">
                <div class="flex flex-col md:flex-row justify-evenly p-4">
                    <h1 class="text-3xl md:text-5xl font-bold text-[#1f2937] opacity-30 md:h-10 md:z-[-1]">
                        Bloomberg
                    </h1>
                    <img src="./Images/insider.webp" class="opacity-30 h-10 md:z-[-1]" />
                    <img src="./Images/yahoo_finance.webp" class="opacity-30 h-10 md:z-[-1]" />
                </div>

                <div class="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6 mt-6 md:mt-10">
                    <div class="md:mr-4">
                        <img src="./Images/hero2.webp" class="h-60 md:h-96 w-full md:w-fit" />
                    </div>
                    <div class="md:w-1/2 mt-4 md:mt-16">
                        <h2 class="mb-2 text-lg md:text-3xl font-bold">
                            Built By Traders For Traders.
                        </h2>
                        <h2 class="mb-6 text-lg md:text-3xl font-bold">
                            Your Trading Ideas, Our Risk.
                        </h2>
                        <p class="text-sm md:text-base">
                            Funding Pips believes that traders go through three main levels in their careers,
                            Student - Practitioner - Master, with FP's in-house-built two phases evaluation
                            (Student - Practitioner) and funded (Master), which's built to find trading
                            talents while helping them get through their funding problems, by offering them
                            the possibility to trade up $300,000.
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 mt-28">
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md border hover:border-blue-500">
                        <img src="./Images/notradingrestrictions.webp" className=" h-28" />
                        <h1 className="text-3xl font-bold mb-2 text-gray-800">
                            Trade the way you want
                        </h1>
                        <p className="text-gray-600 text-center">
                            Use an "EA", hold during news, hold trades over the weekend and
                            trade lot sizes as big as the leverage allows for.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md border hover:border-blue-500">
                        <img src="./Images/freeretry.webp" className=" h-28" />
                        <h1 className="text-3xl font-bold mb-2  text-gray-800">
                            Unlimited Trading Days
                        </h1>
                        <p className="text-gray-600 text-center">
                            We understand that putting a time limit creates a stressful
                            environment, therefore we have no minimum or maximum limit on
                            trading days. Take all the time you need.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-7">
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md border hover:border-blue-500">
                        <img src="./Images/scalingplan.webp" className=" h-28" />
                        <h1 className="text-3xl font-bold mb-2 text-gray-800">
                            Scaling Plan
                        </h1>
                        <p className="text-gray-600 text-center">
                            Scale your way up with us. We increase the account size, Maximum
                            Loss, and Maximum Daily Loss to a 14% Maximum Loss and a 7% Daily
                            Loss limit. Once the trader receives a 'Hot Seat' at the firm,
                            they can trade up to $2 million with on-demand payouts and a
                            monthly bonus. Read more about our Scaling Plan.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md border hover:border-blue-500">
                        <img src="./Images/payoutsystem.webp" className=" h-28" />
                        <h1 className="text-3xl font-bold mb-2  text-gray-800">
                            Payout System
                        </h1>
                        <p className="text-gray-600 text-center">
                            Request your payouts on a 5 trading days basis with a 80% profit
                            split. Once a trader earns a Hot Seat in our firm, the trader
                            receives on-demand payouts with a 90% profit split.
                        </p>
                    </div>
                </div>
            </div>



            <div className="flex justify-center mt-5">
                <div className="bg-white shadow-md">
                    <div className="p-4 bg-gray-200 rounded-lg">
                        <div className="flex justify-around gap-4">
                            <p className="rounded-lg py-2 px-4 cursor-pointer">Matchtrader</p>
                            <p className="rounded-lg bg-blue-700 text-white py-2 px-4 cursor-pointer">cTrade</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-2">
                <div className="bg-white shadow-md">
                    <div className="p-4 bg-gray-200 rounded-lg">
                        <div className="flex justify-between mt-1">
                            <p className="rounded-lg p-2 cursor-pointer">$5K</p>
                            <p className="rounded-lg p-2 cursor-pointer">$10K</p>
                            <p className="rounded-lg p-2 cursor-pointer">$25K</p>
                            <p className="rounded-lg p-2 cursor-pointer">$50K</p>
                            <p className="rounded-lg bg-blue-700 text-white py-2 px-4 cursor-pointer">$100K</p>
                        </div>
                    </div>
                </div>
            </div>




            <div class="mx-auto max-w-7xl">
                <div class="flex flex-col md:flex-row justify-between py-4 md:py-8">
                    <div class="w-full md:w-1/2 px-4">
                        <h1 class="text-xl md:text-4xl font-bold text-gray-500">
                            ━━━━━ Evaluation ━━━━━
                            <div class="md:ml-60 ml-36">stage</div>
                        </h1>
                        <div class="mt-2 md:mt-4 flex justify-evenly md:ml-60 ml-44">
                            <span class="font-bold text-lg md:text-2xl text-amber-300">
                                Student
                            </span>
                            <span class="font-bold text-lg md:text-2xl text-teal-400">
                                Practitioner
                            </span>
                        </div>
                        <div class="mt-4 space-y-2 rounded-md cursor-pointer md:ml-12">
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Trading Period</span>
                                <span>∞</span>
                                <span>∞</span>
                            </div>
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Minimum Trading Days</span>
                                <span>0 days</span>
                                <span>0 days</span>
                            </div>
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Maximum Daily Loss</span>
                                <span>5%</span>
                                <span>5%</span>
                            </div>
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Maximum Loss</span>
                                <span>10%</span>
                                <span>10%</span>
                            </div>
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Profit Target</span>
                                <span>$8,000 (8%)</span>
                                <span>$5,000 (5%)</span>
                            </div>
                            <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                <span>Leverage</span>
                                <span>1:100</span>
                                <span>1:100</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                        <h1 class="text-2xl md:text-4xl font-bold text-gray-500">
                            ━━━━━ Funded ━━━━━
                            <div class="md:ml-52 ml-36">stage</div>
                        </h1>
                        <div class="mt-2 flex justify-center md:justify-around md:ml-60 ml-44">
                            <span class="font-bold text-lg md:text-2xl text-indigo-500">Master</span>
                        </div>
                        <div class="mt-4 p-4 justify-center">
                            <div className="space-y-2 rounded-md cursor-pointer">
                                <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                    <span>Trading Period</span>
                                    <span>∞</span>
                                </div>
                                <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                    <span>Maximum Daily Loss</span>
                                    <span>5%</span>
                                </div>
                                <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                    <span>Maximum Loss</span>
                                    <span>10%</span>
                                </div>
                                <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                    <span>Profit Target</span>
                                    <span>-</span>
                                </div>
                                <div className="flex justify-around py-3 rounded-md hover:bg-gray-300 font-semibold">
                                    <span>Leverage</span>
                                    <span>1:100</span>
                                </div>
                            </div>
                            <button class="inline-flex items-center justify-center rounded-md border-solid border-2 border-sky-600 h-12 md:h-14 px-4 md:px-8 py-2 md:py-4 mt-4 md:mt-8 md:ml-20 text-base md:text-xl font-semibold text-sky-600">
                                Refund + Profit Splits
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center md:px-12 mt-6 md:mt-0">
                    <div class="text-3xl md:text-5xl font-bold text-blue-700 mr-4 md:mr-5">
                        $399
                        <p class="text-sm">For 100K account</p>
                    </div>
                    <button class="inline-flex items-center justify-center rounded-lg text-base md:text-lg font-medium h-12 md:h-16 w-44 md:w-60 px-8 md:px-12 bg-blue-700 hover:bg-blue-500 text-white">
                        <svg class="mr-3 mt-1 h-5 md:mr-2 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                        </svg>
                        Buy challenge
                    </button>
                </div>
            </div>






            <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl px-6 md:px-12 py-12 md:py-16 mx-4 md:mx-10 mt-10 md:mt-20">
                <div class="flex flex-col md:flex-row text-white items-center">
                    <div class="md:mr-6">
                        <h1 class="font-bold text-xl md:text-3xl pb-6 md:pb-14">
                            Stay updated with our in-depth trading rules.
                        </h1>
                        <p class="mb-4 md:mb-11">
                            Trading objectives are a key element to evaluate a trader's skills, meeting the trading objectives proves that the trader is disciplined and consistent.
                        </p>
                        <button class="inline-flex items-center justify-center rounded-2xl text-base font-medium h-12 md:h-14 w-32 md:w-40 bg-white text-black">
                            <svg class="mr-2 mt-1 h-5 md:mr-2 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                            </svg>
                            Trading Rules
                        </button>
                    </div>
                    <img src="./Images/tradingobjectives.webp" class="h-48 md:h-96 mt-6 md:mt-0" />
                </div>
            </div>


            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl px-12 py-11 w-fit ml-10 mr-10 mt-20 text-white">
                <h1 className="font-bold text-3xl">Join A Team Of Skillful Traders</h1>
                <p className="mt-3">
                    When it comes to trading we believe in consistency and risk
                    management, which are the discipline indicator, the rest of the skills
                    can be developed. Please keep that in mind! We are seeking real
                    traders not bounty hunters.
                </p>
                <div className="mt-6 flex space-x-4">
                    <button className="inline-flex items-center rounded-md text-base  h-12 px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white">
                        <BsArrowUpRight className="mr-3 mt-1 " />
                        Buy challenge
                    </button>
                    <button className="inline-flex items-center rounded-md text-base  h-12 px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white">
                        <PiDiscordLogoFill className="mr-2" />
                        Join discord
                    </button>
                </div>
            </div>



            <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 max-w-7xl">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="max-w-xl mb-8 md:mb-0">
                        <div class="flex items-center space-x-4">
                            <img src="./Images/icon.png" class="w-10" alt="Funding Pips Icon" />
                            <div class="font-semibold text-base text-gray-600">FUNDING PIPS</div>
                        </div>
                        <p class="mb-4 mt-5 text-gray-500">All content published and distributed by Funding Pips, and its affiliates (collectively, the Company) is to be treated as general information only.None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund, Funding pips does not act as or conduct services as a broker. Funding pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition, Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology and other business related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results. Applicable law to be under the laws of The United Arab Emirates.</p>
                        <p class="mb-4 text-gray-500">Please note that all accounts we provide to our clients are demo accounts in a simulated trading environment.</p>
                        <p class="mb-4 text-gray-500">Restricted countries: United Arab Emirates and Vietnam</p>
                        <div class="flex space-x-4 md:space-x-10">
                            <BsDiscord class="w-6 h-6 cursor-pointer" />
                            <ImFacebook class="w-6 h-6 cursor-pointer" />
                            <SiInstagram class="w-6 h-6 cursor-pointer" />
                            <SiYoutube class="w-6 h-6 cursor-pointer" />
                            <FaTwitter class="w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-8 md:flex md:space-x-24">
                            <h1 class="text-xl font-bold ">Newsletter signup</h1>
                            <div class="flex items-center border border-gray-300 rounded-md">
                                <input placeholder="Enter your email" type="text" class="h-8 border-none outline-none ml-3 flex-grow md:h-14" />
                                <button class="bg-sky-600 text-white w-10 h-8 rounded-md md:mr-3"><BsArrowUpRight class="ml-3" /></button>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-32">
                            <div class="text-center md:text-left">
                                <h1 class="text-blue-800 text-sm font-bold">LEGAL</h1>
                                <p class="py-2 text-gray-500">Privacy Policy</p>
                                <p class="text-gray-500">Terms & Conditions</p>
                            </div>
                            <div class="text-center md:text-left">
                                <h1 class="text-blue-800 text-sm font-bold">USEFUL LINKS</h1>
                                <p class="py-2 text-gray-500">Home</p>
                                <p class="text-gray-500">FAQs</p>
                                <p class="py-2 text-gray-500">Trading Rules</p>
                                <p class="text-gray-500">Affiliate Program</p>
                                <p class="py-2 text-gray-500">Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" text-center items-center border h-14 bg-slate-200 text-slate-500">
                <p className="mt-4">© 2024 Funding Pips. All Rights Reserved.</p>
            </div>

            <div className="flex justify-between sticky bottom-0 ">
                <div className="w-9 h-9 rounded-full bg-blue-700 mb-2 ml-10">
                    <IoSettingsOutline className="size-10 py-2 text-white" />
                </div>
                <div className="w-14 h-14 rounded-full bg-black mb-2 mr-10">
                    <img src="./Images/footer.png" className="w-8 ml-3 py-3" />
                </div>

            </div>

        </div>
    );
};

export default Home;
