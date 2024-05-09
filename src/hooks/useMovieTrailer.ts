import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type TrailerData = any;

const fetchMovieTrailer = async ({ id }: { id: string }): Promise<TrailerData> => {
    return await api.get<TrailerData>(`/movie/${id}/videos`);
};
export const useMovieTrailerQuery = ({ id }: { id: string }) => {
    return useQuery<TrailerData, Error>({
        queryKey: ["movie-trailer", id],
        queryFn: () => fetchMovieTrailer({ id }),
        select: (data) => data.data.results,
    });
};
