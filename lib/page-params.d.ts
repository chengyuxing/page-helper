/**
 * page helper for Array#slice(start, end).
 */
export declare class PageParams {
    private readonly page;
    private readonly size;
    private readonly recordCount;
    private readonly pageCount;
    constructor(page: number, size: number, recordCount: number);
    /**
     * new page helper.
     * @param page page number
     * @param size page size
     * @param recordCount data record count
     */
    static of(page: number, size: number, recordCount: number): PageParams;
    /**
     * start of data index.
     */
    start(): number;
    /**
     * end of data index.
     */
    end(): number;
    /**
     * limit size of data.
     */
    limit(): number;
    /**
     * total pages count.
     */
    pages(): number;
}
