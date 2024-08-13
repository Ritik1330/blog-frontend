import { MapPinnedIcon } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import React from "react";
import { InstagramIcon } from "@/assets/Icon";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" bg-black">
      <div className="bg-primary py-2"></div>
      <div className="bg-black py-12">
        <div className="mx-4 grid gap-8 md:mx-16 lg:mx-24 lg:grid-cols-3 xl:mx-36 2xl:mx-auto 2xl:max-w-7xl">
          <div>
            <Image
              priority={true}
              className=""
              src="https://static.toiimg.com/thumb/width-800,height-450,imgsize-33742,msid-110055791/110055791.jpg"
              width={100}
              height={30}
              alt="Picture of the author"
            />
            <p className="mt-4 text-white">
              Hi Khabar : भारत और दुनिया भर से ताज़ा और सबसे विश्वसनीय समाचार
              प्रदान करने वाली एजेंसी।
            </p>
            <p className="my-2 text-gray-100">Join With Us -</p>

            <ul className="mt-2 flex gap-4">
              <li>hii</li>
              <li>hii</li>
              <li>hii</li>
              <li>hii</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-100">
              न्यूज़ केटेगरी
            </h2>
            <div className="h-1 w-12 bg-blue-900"></div>
            <div className="mt-6 grid grid-cols-2 text-sm">
              <div className="grid gap-2">
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/latest-news"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  ताज़ातरीन
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/education"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  शिक्षा
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/entertainment"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  मनोरंजन{" "}
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/sports"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  खेल
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/health"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  स्वास्थ्य
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/fact-check"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  फैक्ट चेक
                </a>
              </div>
              <div className="grid gap-2">
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/religion"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  धर्म
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/business"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  बिजनेस
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/politics"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  राजनीति
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/career"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  करियर
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/technology"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  टेक्नोलॉजी
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/category/world"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  विश्व
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-100">
              जरूरी लिंक्स
            </h2>
            <div className="h-1 w-12 bg-blue-900"></div>
            <div className="mt-6 grid grid-cols-2 text-sm">
              <div className="grid gap-2">
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>
                  होम पेज
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/about-us"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  हमारे बारे में
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/advertisement-with-us"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>
                  प्रचार करे
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/career"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  करियर
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/image-gallery"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  छवि गैलरी
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/contact-us"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  संपर्क करे
                </a>
              </div>
              <div className="grid gap-2">
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/our-team"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  हमारी टीम
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/correction-policy"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  सुधार नीति
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/privacy-policy"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  गोपनीयता नीति
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/term-conditions"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>
                  नियम और शर्तें
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/cookie-policy"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>
                  कूकी नीति
                </a>
                <a
                  className="flex items-center text-gray-100 underline-offset-4 hover:underline"
                  href="/sitemap.xml"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                  </svg>{" "}
                  साइटमैप
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
