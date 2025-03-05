import { Link } from "@remix-run/react";
import { socialNetworks } from "../constants/social-networks";
import React from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container mx-auto my-4 text-gray-400">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
        <div className="text-sm flex gap-2 items-center text-center">
          &copy; {year} Feito por Luiz Felipe.
          <a
            href="https://github.com/pinuya/portfolio-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            (template)
          </a>
        </div>

        <div className="flex gap-4">
          {socialNetworks.map(({ url: socialMediaUrl, icon: SocialMediaIcon }) => (
            <Link
              key={socialMediaUrl}
              to={socialMediaUrl}
              target="_blank"
              className="hover:text-purple-500 transition-colors"
            >
              <SocialMediaIcon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
