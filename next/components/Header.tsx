import BaLogo from '../assets/images/ba-logo.svg'
import FbLogo from '../assets/images/fb-logo.svg'
import IgLogo from '../assets/images/ig-logo.svg'

export interface IHeaderProps {
  facebookLink?: string
  instagramLink?: string
}

const Header = ({ facebookLink, instagramLink }: IHeaderProps) => (
  <div className="bg-primary">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <BaLogo />
        <p className="text-xs font-light text-secondary sm:text-sm md:flex">
          Hlavné mesto Slovenskej republiky
          <span className="font-bold">&nbsp;Bratislava</span>
        </p>
      </div>
      <div className="flex flex-row justify-between space-x-3 py-4">
        {facebookLink && (
          <a href={facebookLink} target="_blank" rel="noreferrer">
            <FbLogo alt="Facebook" />
          </a>
        )}

        {instagramLink && (
          <a href={instagramLink} target="_blank" rel="noreferrer">
            <IgLogo alt="Instagram" />
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Header
