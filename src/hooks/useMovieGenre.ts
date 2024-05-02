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
        staleTime: 30000, // 데이터가 갱신되기 전에 최대한으로 사용되는 시간(30초)을 설정
    })
}
