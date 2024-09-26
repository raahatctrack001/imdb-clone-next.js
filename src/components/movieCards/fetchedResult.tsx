// import Card from "./Card"; TODO: resolve this error :::-> Cannot find module './Card' or its corresponding type declarations.ts(2307)

import Card, { Result } from "./DescriptionCard";

export default function FetchedResult({ results }: { results: Array<Result>}) {
    return <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
  {results.length > 0 &&
    results.map((result: any, index: any) => (
        <Card result={result} key={index} />
    
    ))}
</div>
}