import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

type ReviewData = any;

// 구조분해 할당으로 받을 인자 id의 형 지정 { id }: { id: string }
const fetchMovieReview = async ({ id }: { id: string }): Promise<ReviewData> => {
    return await api.get<ReviewData>(`/movie/${id}/reviews`);
};

export const useMovieReviewQuery = ({ id }: { id: string }) => {
    return useQuery<ReviewData, Error>({
        queryKey: ["movie-review", id],
        queryFn: () => fetchMovieReview({ id }),
        select: (data) => data.data.results,
    });
};
