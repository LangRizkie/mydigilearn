/* eslint-disable camelcase */

interface Article {
  short_description: string
  id: string
  title: string
  description: string
  image: string
  createdAt: string
  createdBy: string
  category: string
}

export class ArticleModel {
  public id: string
  public title: string
  public description: string
  public short_description: string
  public image: string
  public createdAt: string
  public createdBy: string
  public category: string

  constructor(data: Article) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.short_description = data.short_description
    this.image = data.image
    this.createdAt = data.createdAt
    this.createdBy = data.createdBy
    this.category = data.category
  }
}

export default ArticleModel
