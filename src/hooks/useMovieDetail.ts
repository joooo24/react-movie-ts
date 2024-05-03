import { useQuery, UseQueryResult } from "@tanstack/react-query";
import api from "../utils/api";

type MovieData = any;

const fetchMovieDetail = async (id: string): Promise<MovieData> => {
    return await api.get<MovieData>(`/movie/${id}`);
};

export const useMovieDetailQuery = (id: string): UseQueryResult<MovieData, Error> => {
    return useQuery<MovieData, Error>({
        queryKey: ["movie-detail", id],
        queryFn: () => fetchMovieDetail(id),
        select: (data) => data.data,
    });
};
