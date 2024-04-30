import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchKeyword = ({ keyword, page }) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/movie/popular?page=${page}`);
};

export const useSearchKeywordQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ["search", page],
        queryFn: () => fetchSearchKeyword({ keyword, page }), // 직접 함수를 전달
        select: (data) => {
            return data.data;
        },
    });
};
