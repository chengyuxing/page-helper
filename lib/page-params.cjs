'use strict';

/**
 * page helper for Array#slice(start, end).
 */
var PageParams = /** @class */ (function () {
    function PageParams(page, size, recordCount) {
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
    PageParams.of = function (page, size, recordCount) {
        return new PageParams(page, size, recordCount);
    };
    /**
     * start of data index.
     */
    PageParams.prototype.start = function () {
        return (this.page - 1) * this.size;
    };
    /**
     * end of data index.
     */
    PageParams.prototype.end = function () {
        var endNum = this.page * this.size;
        if (endNum > this.recordCount) {
            return this.recordCount;
        }
        return endNum;
    };
    /**
     * limit size of data.
     */
    PageParams.prototype.limit = function () {
        if (this.recordCount < this.size) {
            return this.recordCount;
        }
        return this.size;
    };
    /**
     * total pages count.
     */
    PageParams.prototype.pages = function () {
        return this.pageCount;
    };
    return PageParams;
}());

module.exports = PageParams;
//# sourceMappingURL=page-params.cjs.map