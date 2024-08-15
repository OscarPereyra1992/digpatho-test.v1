export default function SimpleFooter() {
  const footerNavs = [
    {
      href: "https://www.linkedin.com/in/oscar-pereyra-/",
      name: "Terms",
    },
    {
      href: "https://www.linkedin.com/in/oscar-pereyra-/",
      name: "License",
    },
    {
      href: "https://www.linkedin.com/in/oscar-pereyra-/",
      name: "Privacy",
    },
    {
      href: "https://www.linkedin.com/in/oscar-pereyra-/",
      name: "About us",
    },
  ];
  
  return (
    <footer className="mt-auto py-10 border-t">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-800">© 2024 Oscar Pereyra All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-4">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}