/**
 * page helper for Array#slice(start, end).
 */
export declare class ArrayPageHelper {
    private readonly _page;
    private readonly size;
    constructor(page: number, size: number);
    /**
     * new page helper.
     * @param page page number
     * @param size page size
     */
    static of(page: number, size: number): ArrayPageHelper;
    /**
     * start of data index.
     */
    get start(): number;
    /**
     * end of data index.
     */
    get end(): number;
    /**
     * page size of data.
     */
    get limit(): number;
    /**
     * current page number.
     */
    get page(): number;
    /**
     * total pages count.
     */
    pages(arr: any[]): number;
    /**
     * data paging.
     * @param arr data
     */
    paging(arr: any[]): any[];
}
