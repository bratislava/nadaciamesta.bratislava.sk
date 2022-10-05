import BaLogo from '../assets/images/ba-logo.svg'
import FbLogo from '../assets/images/fb-logo.svg'
import IgLogo from '../assets/images/ig-logo.svg'

export interface IHeaderProps {
  facebookLink?: string
  instagramLink?: string
}

const Header = ({ facebookLink, instagramLink }: IHeaderProps) => (
  <div className="bg-primary">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <BaLogo />
        <p className="text-secondary font-light md:flex text-xs sm:text-sm">
          Hlavné mesto Slovenskej republiky
          <span className="font-bold">&nbsp;Bratislava</span>
        </p>
      </div>
      <div className="py-4 flex flex-row space-x-3 justify-between">
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
