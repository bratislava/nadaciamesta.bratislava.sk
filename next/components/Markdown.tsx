import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface IMarkdowProps {
  children: string;
}

export function Markdown({ children }: IMarkdowProps) {
  return (
    <ReactMarkdown
      className="container max-w-2xl space-y-8"
      plugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="font-bold text-5xl">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-bold text-2xl">{children}</h2>
        ),
        h3: ({ children }) => <h3 className="font-bold text-xl">{children}</h3>,
        h4: ({ children }) => <h4 className="font-bold text-lg">{children}</h4>,
        h5: ({ children }) => (
          <h5 className="font-bold text-base">{children}</h5>
        ),
        h6: ({ children }) => <h6 className="font-bold text-sm">{children}</h6>,
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="relative m-auto" src={src} alt={alt} />
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-primary underline">
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list pl-5">{children}</ul>
        ),
        ol: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="relative text-primary border-l-4 border-primary bg-opacity-10 italic p-8">
            {children}
            <div className="absolute bg-primary-muted opacity-10 top-0 left-0 right-0 bottom-0"></div>
          </blockquote>
        ),
        pre: ({ children }) => (
          <pre className="list-decimal p-8 overflow-auto border-4 border-primary">
            {children}
          </pre>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
