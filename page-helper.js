"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHelper = void 0;
/**
 * page helper for Array#slice(start, end).
 */
var PageHelper = /** @class */ (function () {
    function PageHelper(page, size, recordCount) {
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
    PageHelper.of = function (page, size, recordCount) {
        return new PageHelper(page, size, recordCount);
    };
    /**
     * start of data index.
     */
    PageHelper.prototype.start = function () {
        return (this.page - 1) * this.size;
    };
    /**
     * end of data index.
     */
    PageHelper.prototype.end = function () {
        var endNum = this.page * this.size;
        if (endNum > this.recordCount) {
            return this.recordCount;
        }
        return endNum;
    };
    /**
     * limit size of data.
     */
    PageHelper.prototype.limit = function () {
        if (this.recordCount < this.size) {
            return this.recordCount;
        }
        return this.size;
    };
    /**
     * total pages count.
     */
    PageHelper.prototype.pages = function () {
        return this.pageCount;
    };
    return PageHelper;
}());
exports.PageHelper = PageHelper;
//# sourceMappingURL=page-helper.js.map