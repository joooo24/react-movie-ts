import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchPopularMovies = async (): Promise<MovieData> => {
    return await api.get<MovieData>("/movie/popular");
};

export const usePopularMoviesQuery = () => {
    return useQuery<MovieData, Error>({
        queryKey: ["movie-popular"],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    });
};
