import request from "@/utils/request";
import type { Article } from "@/types/apis";

// 设置接口入参/返回值ts类型示例
export function findPage(params?: Article.Query) {
	return request.get<Article.PageDto>('/api/article', { params });
}