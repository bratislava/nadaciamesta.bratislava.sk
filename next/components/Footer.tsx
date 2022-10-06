export interface IFooterProps {
  copyrightText: string;
  phone: string;
  email: string;
}

const Footer = ({ copyrightText, phone, email }: IFooterProps) => {
  return (
    <div className="bg-primary text-white">
      <div className="container flex flex-col items-center justify-between space-y-4 py-8 text-center lg:flex-row lg:space-y-0">
        <div className="">&copy; {copyrightText}</div>
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
