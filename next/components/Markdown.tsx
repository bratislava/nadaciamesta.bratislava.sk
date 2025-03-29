import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface IMarkdowProps {
  children: string
}

export const Markdown = ({ children }: IMarkdowProps) => {
  return (
    <ReactMarkdown
      className="container max-w-2xl space-y-8"
      plugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-5xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold">{children}</h4>,
        h5: ({ children }) => <h5 className="text-base font-bold">{children}</h5>,
        h6: ({ children }) => <h6 className="text-sm font-bold">{children}</h6>,
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="relative m-auto" src={src} alt={alt} />
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-primary underline">
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="list list-disc pl-5">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="relative border-l-4 border-primary bg-opacity-10 p-8 italic text-primary">
            {children}
            <div className="absolute inset-0 bg-primary-muted opacity-10" />
          </blockquote>
        ),
        pre: ({ children }) => (
          <pre className="list-decimal overflow-auto border-4 border-primary p-8">{children}</pre>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
