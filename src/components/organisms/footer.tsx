import Link from "next/link";

export const Footer = () => {
  const navLinks = [
    { label: "Contact Us", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "FAQ", href: "/" },
  ];

  return (
      <footer className="max-w mx-auto w-full flex justify-between content-center gap-2 p-2 px-8 border-b border-gray-300 bg-white">
        <div className="flex justify-items-center items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-amber-800">
                {link.label}
            </Link>
          ))}
        </div>
      </footer>
  );
};