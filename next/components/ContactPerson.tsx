export interface IContactPersonProps {
  image: string;
  name: string;
  role?: string;
  phone?: string;
  email?: string;
}

const ContactPerson = ({
  image,
  name,
  role,
  phone,
  email,
}: IContactPersonProps) => (
  <div className="w-full grid gap-4 sm:gap-8 text-center justify-items-center text-base sm:flex items-center">
    <div className="w-48 h-48 sm:w-32 sm:h-32 xl:w-48 xl:h-48 flex-shrink-0 relative rounded-full">
      <img
        className="object-cover rounded-full w-48 h-48 max-h-[100%] max-w-[100%]"
        src={image}
        alt=""
      />
    </div>
    <div className="w-full sm:text-left">
      <div className="font-bold">{name}</div>
      {role && <div className="font-bold mb-2">{role}</div>}
      <div>
        <a href={`tel:${phone}`} className="hover:underline">
          {phone}
        </a>
      </div>
      <div>
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </div>
    </div>
  </div>
);

export default ContactPerson;
