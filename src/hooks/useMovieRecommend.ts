import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type RecommendData = any;

// 구조분해 할당으로 받을 인자 id의 형 지정 { id }: { id: string }
const fetchMovieRecommend = async ({ id }: { id: string }): Promise<RecommendData> => {
    return api.get<RecommendData>(`/movie/${id}/recommendations`);
};

export const useMovieRecommendQuery = ({ id }: { id: string }) => {
    return useQuery<RecommendData, Error>({
        queryKey: ["movie-recommend", id],
        queryFn: () => fetchMovieRecommend({ id }),
        select: (data) => data.data.results,
    });
};
