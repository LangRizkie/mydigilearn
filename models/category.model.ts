interface Category {
  id: string
  title: string
}

export class CategoryModel {
  public id: string
  public title: string

  constructor(data: Category) {
    this.id = data.id
    this.title = data.title
  }
}

export default CategoryModel
