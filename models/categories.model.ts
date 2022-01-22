import CategoryModel from "./category.model"

interface Articles {
  code: Number
  content: Array<CategoryModel>
  message: String
  totalItems: Number
}

export class CategoriesModel {
  public code: Number
  public content: Array<CategoryModel>
  public message: String
  public totalItems: Number

  constructor(data: Articles) {
    this.code = data.code
    this.content = data.content
    this.message = data.message
    this.totalItems = data.totalItems
  }
}

export default CategoriesModel
