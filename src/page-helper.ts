/**
 * page helper for Array#slice(start, end).
 */
export class PageHelper {
    private readonly page!: number;
    private readonly size!: number;
    private readonly recordCount!: number;
    private readonly pageCount!: number;

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

    /**
     * new page helper.
     * @param page page number
     * @param size page size
     * @param recordCount data record count
     */
    public static of(page: number, size: number, recordCount: number): PageHelper {
        return new PageHelper(page, size, recordCount);
    }

    /**
     * start of data index.
     */
    start(): number {
        return (this.page - 1) * this.size;
    }

    /**
     * end of data index.
     */
    end(): number {
        const endNum = this.page * this.size;
        if (endNum > this.recordCount) {
            return this.recordCount
        }
        return endNum;
    }

    /**
     * limit size of data.
     */
    limit(): number {
        if (this.recordCount < this.size) {
            return this.recordCount;
        }
        return this.size;
    }

    /**
     * total pages count.
     */
    pages(): number {
        return this.pageCount;
    }
}
