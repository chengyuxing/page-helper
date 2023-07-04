/**
 * page helper for Array#slice(start, end).
 */
export class ArrayPageHelper {
    private readonly _page!: number;
    private readonly size!: number;

    constructor(page: number, size: number) {
        this._page = page;
        this.size = size;
        if (page < 1) {
            this._page = 1;
        }
        if (size < 1) {
            this.size = 1;
        }
    }

    /**
     * new page helper.
     * @param page page number
     * @param size page size
     */
    public static of(page: number, size: number): ArrayPageHelper {
        return new ArrayPageHelper(page, size);
    }

    /**
     * start of data index.
     */
    get start(): number {
        return (this._page - 1) * this.size;
    }

    /**
     * end of data index.
     */
    get end(): number {
        return this._page * this.size;
    }

    /**
     * page size of data.
     */
    get limit(): number {
        return this.size;
    }

    /**
     * current page number.
     */
    get page(): number {
        return this._page;
    }

    /**
     * total pages count.
     */
    pages(arr: any[]): number {
        return Math.floor(arr.length / this.size) + 1;
    }

    /**
     * data paging.
     * @param arr data
     */
    paging(arr: any[]): any[] {
        return arr.slice(this.start, this.end);
    }
}