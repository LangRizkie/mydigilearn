import ArticleModel from "./article.model"
import PaginationModel from "./pagination.model"

interface Articles {
  code: Number
  content: Array<ArticleModel>
  message: string
  meta: PaginationModel
}

export class ArticlesModel {
  public code: Number
  public content: Array<ArticleModel>
  public message: string
  public meta: PaginationModel

  constructor(data: Articles) {
    this.code = data.code
    this.content = data.content
    this.message = data.message
    this.meta = data.meta
  }
}

export default ArticlesModel
