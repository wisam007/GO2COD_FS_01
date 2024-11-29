const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white shaddow-base  boarder-2 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-600">
          &copy; {currentYear} W-Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
