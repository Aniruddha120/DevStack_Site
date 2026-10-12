import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import type { IconType } from "react-icons";

const footerLinks: Record<string, string[]> = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com", icon: FiGithub },
  { label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl brand-gradient text-lg font-extrabold text-white shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 transition hover:text-pink-600"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition hover:text-pink-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 transition hover:text-pink-600"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition hover:text-pink-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
