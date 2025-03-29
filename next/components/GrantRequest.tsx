import Button from './Button'

export interface IGrantRequestProps {
  text?: string
  buttonText?: string
}

export const GrantRequest = ({ text, buttonText }: IGrantRequestProps) => {
  return (
    <section className="section section-muted w-full">
      <div className="container flex flex-col justify-between space-y-8 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
        <div className="lg:w-1/2">{text}</div>
        <div>
          <Button href="/grants" variant="secondary" size="xl">
            {buttonText ?? 'Chcem požiadať o grant'}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GrantRequest
