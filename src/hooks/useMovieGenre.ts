import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchMoviesGenre = async (): Promise<MovieData> => {
    const response = await api.get<MovieData>(`/genre/movie/list`);
    return response;
};

export const useMoviesGenreQuery = () => {
    return useQuery<MovieData, Error>({
        queryKey: ["genre-movie"],
        queryFn: fetchMoviesGenre,
        select: (result) => result.data.genres,
        staleTime: 30000,
    })

}
