export interface IContactPersonProps {
  image: string
  name: string
  role?: string
  phone?: string
  email?: string
}

const ContactPerson = ({ image, name, role, phone, email }: IContactPersonProps) => (
  <div className="grid w-full items-center justify-items-center gap-4 text-center text-base sm:flex sm:gap-8">
    <div className="relative h-48 w-48 shrink-0 rounded-full sm:h-32 sm:w-32 xl:h-48 xl:w-48">
      <img
        className="h-48 max-h-[100%] w-48 max-w-[100%] rounded-full object-cover"
        src={image}
        alt=""
      />
    </div>
    <div className="w-full sm:text-left">
      <div className="font-bold">{name}</div>
      {role && <div className="mb-2 font-bold">{role}</div>}
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
)

export default ContactPerson
