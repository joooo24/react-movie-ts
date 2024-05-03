import { useQuery, UseQueryResult } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchUpcomingMovies = async (): Promise<MovieData> => {
    return await api.get<MovieData>("/movie/upcoming");
};

export const useUpcomingMovieQuery = (): UseQueryResult<MovieData, Error> => {
    return useQuery<MovieData, Error>({
        queryKey: ["movie-upcoming"],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data,
    });
};
