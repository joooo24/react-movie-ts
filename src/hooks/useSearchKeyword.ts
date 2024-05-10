import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

interface SearchKeywordQueryParams {
    keyword: string;
    page: number;
}

type MovieSearchData = any;

const fetchSearchKeyword = ({ keyword, page }: SearchKeywordQueryParams) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/movie/popular?page=${page}`);
};

export const useSearchKeywordQuery = ({ keyword, page }: SearchKeywordQueryParams) => {
    return useQuery<MovieSearchData, Error>({
        queryKey: ["search", page],
        queryFn: () => fetchSearchKeyword({ keyword, page }),
        select: (data: any) => {
            return data.data;
        },
    });
};
