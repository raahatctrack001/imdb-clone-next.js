import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export interface Result {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
    first_air_date?: string;
  }
  
export default function Card({ result }: {result: Result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
        <Link href={`/movie/${result.id}`}>
          <img
            alt={result.title}
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          />
          <div className='p-2'>
            <p className='line-clamp-2 text-md'>{result.overview}</p>
            <h2 className='text-lg font-bold truncate'>
              {result.title || result.name}
            </h2>
            <p className='flex items-center'>
              {result.release_date || result.first_air_date}
              <FiThumbsUp className='h-5 mr-1 ml-3' />
              {result.vote_count}
            </p>
          </div>
        </Link>
      </div>
  );
}