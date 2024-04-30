import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchPopularMovies = async (): Promise<MovieData> => {
    const response = await api.get<MovieData>("/movie/popular");
    return response;
};

export const usePopularMoviesQuery = () => {
    return useQuery<MovieData, Error>({
        queryKey: ["movie-popular"],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    });
};
