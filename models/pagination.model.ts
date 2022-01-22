interface Pagination {
  page: string
  size: string
  show: Number
  showFrom: Number
  showTo: Number
  totalPage: Number
  totalData: Number
}

export class PaginationModel {
  public page: string
  public size: string
  public show: Number
  public showFrom: Number
  public showTo: Number
  public totalPage: Number
  public totalData: Number

  constructor(data: Pagination) {
    this.page = data.page
    this.size = data.size
    this.show = data.show
    this.showFrom = data.showFrom
    this.showTo = data.showTo
    this.totalPage = data.totalPage
    this.totalData = data.totalData
  }
}

export default PaginationModel
