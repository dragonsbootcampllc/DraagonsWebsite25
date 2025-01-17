"use client";
import Link from "next/link";
import Image from "next/image";
const YouTubeIcon = () => (
  <svg
    className="aspect-square w-full"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 461.001 461.001"
    xmlSpace="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path
          style={{ fill: "#ffffff" }}
          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
        />{" "}
      </g>{" "}
    </g>
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="aspect-square w-full"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>github [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
      <defs> </defs>{" "}
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        {" "}
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-140.000000, -7559.000000)"
          fill="#ffffff"
        >
          {" "}
          <g id="icons" transform="translate(56.000000, 160.000000)">
            {" "}
            <path
              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
              id="github-[#ffffff]"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="aspect-square w-full"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"
    stroke="#ffffff"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path d="M19,3a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19m-.5,15.5V13.2a3.26,3.26,0,0,0-3.26-3.26h0a2.9,2.9,0,0,0-2.32,1.3V10.13H10.13V18.5h2.79V13.57a1.4,1.4,0,1,1,2.79,0V18.5H18.5M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88h0a1.69,1.69,0,1,0-3.37,0h0A1.69,1.69,0,0,0,6.88,8.56M8.27,18.5V10.13H5.5V18.5Z" />{" "}
    </g>
  </svg>
);
const CurrentYear = new Date().getFullYear();
const LINKS = [
  {
    title: "Solutions",
    links: [
      { url: "#", title: "For Students", status: false },
      { url: "#", title: "Be Job Ready", status: false },
      { url: "#", title: "For Partners", status: false },
      { url: "#", title: "Events Sponsor", status: false },
      { url: "#", title: "Software Outsourcing", status: false },
      { url: "#", title: "Get Talents", status: false },
      { url: "#", title: "intern program managmenet", status: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { url: "/", title: "Blog", status: false },
      { url: "/", title: "Partners Use Cases", status: false },
      { url: "/", title: "Help Center", status: false },
      { url: "/", title: "Material", status: false },
      { url: "/Contact", title: "Contact Us", status: false },
      { url: "/", title: "Support", status: false },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      {
        url: "/",
        title: "Dragon's OpenSource",
        status: false,
      },
      {
        url: "/",
        title: "Spotalents.com",
        status: false,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        url: "/legal/privacy-policy",
        title: "Privacy Policy",
        status: true,
      },
      {
        url: "/legal/terms-and-conditions",
        title: "Terms and Conditions",
        status: true,
      },
      { url: "/legal/cookie-policy", title: "Cookie Policy", status: true },
    ],
  },
];

const SocialMediaLinks = [
  {
    url: "https://www.youtube.com/@dragonsbootcampllc",
    title: "YouTube",
    icon: YouTubeIcon,
  },
  {
    url: "https://github.com/dragonsbootcampllc",
    title: "GitHub",
    icon: GitHubIcon,
  },
  {
    url: "https://www.linkedin.com/company/dragonsbootcampllc/",
    title: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-svw overflow-hidden rounded-t-[30px] bg-primary-850/80">
      <div className="h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="relative z-10 w-full">
            <div className="w-auto text-white">
              <div className="-ml-8 -mt-3 flex w-auto items-center">
                <Link
                  href="/"
                  className="flex w-auto cursor-pointer items-center rounded-2xl pt-4 duration-700 hover:animate-pulse hover:bg-gray-900/30"
                >
                  <Image
                    src="/images/identity/Full_Logo.png"
                    width={224}
                    height={64}
                    alt="Dragons LLC"
                    className="aspect-video h-16 w-56 rounded-3xl object-contain p-3 px-6 duration-500 hover:bg-purple-600/20"
                  />
                </Link>
              </div>
            </div>

            <p className="mt-2 max-w-xs text-lg font-bold text-white">
              Prepare for the future. Just say the magic word: ready for a
              sprint?
            </p>
            <p className="relative mt-4 block text-lg">Address:</p>
            <p className="relative block text-lg">
              USA Inc. (HQ), 1309 Coffeen Avenue, STE 1200, Sheridan, WY 82801,
              USA
            </p>

            <p className="mt-4 max-w-xs font-bold text-white">
              <span className="relative text-lg">
                Reach through our social Media
              </span>{" "}
              <br />
            </p>

            {/* Social media */}
            <ul className="justify-left mt-4 flex w-full gap-6">
              {SocialMediaLinks.map(({ url, title, icon: Icon }, idx) => (
                <li key={idx}>
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-200 transition"
                  >
                    <span className="sr-only select-none">{title}</span>
                    <span className="inline-block w-8 transition-all hover:!-rotate-6 hover:!scale-150 hover:text-blue-700">
                      <Icon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="right-0 z-10 grid w-[100%] grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {LINKS.map(({ title, links }, idx) => (
              <div key={idx}>
                <p className="select-none text-2xl font-medium text-gray-50">
                  {title}
                </p>
                <ul className="relative mt-6 h-full w-full select-none space-y-4 text-sm">
                  {links?.map((link, index) => (
                    <li key={index}>
                      {link.status && link.url ? (
                        link.url.startsWith("http") ? (
                          <a
                            href={link.url}
                            className="text-gray-200 transition"
                          >
                            {link.title}
                          </a>
                        ) : (
                          <Link
                            href={link.url}
                            className="text-lg text-gray-200 transition duration-200 hover:text-purple-600"
                          >
                            {link.title}
                          </Link>
                        )
                      ) : (
                        <>
                          <span className="text-lg text-gray-200">
                            {link.title}
                          </span>
                          <span className="soon mx-2 rounded-full bg-purple-800 px-[4px] py-[2px] text-xs">
                            Soon
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xl font-bold text-gray-50 max-sm:text-center max-sm:text-xs">
          © {CurrentYear} . Dragons LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
