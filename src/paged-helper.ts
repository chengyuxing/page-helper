export class PagedHelper {
  page!: number;
  size!: number;
  recordCount!: number;
  pageCount!: number;

  constructor(page: number, size: number, recordCount: number) {
    this.page = page;
    this.size = size;
    this.recordCount = recordCount;
    if (page < 1) {
      this.page = 1;
    }
    if (size < 1) {
      this.size = 1;
    }
    if (recordCount < 0) {
      this.recordCount = 0;
    }
    this.pageCount = Math.floor(this.recordCount / this.size) + 1;
  }

  start(): number {
    return (this.page - 1) * this.size;
  }

  end(): number {
    const endNum = this.page * this.size;
    if (endNum > this.recordCount) {
      return this.recordCount
    }
    return endNum;
  }
}
