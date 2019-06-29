import { Movie } from './movie';

export interface DiscoverResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
