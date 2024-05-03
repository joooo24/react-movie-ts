import { useQuery, UseQueryResult } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchTopRatedMovies = async (): Promise<MovieData> => {
    return await api.get<MovieData>("/movie/top_rated");
}

export const useTopRatedMovieQuery = (): UseQueryResult<MovieData, Error> => {
    return useQuery<MovieData, Error>({
        queryKey: ["movie-top-rated"],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data,
    });
};
