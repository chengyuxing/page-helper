/**
 * page helper for Array#slice(start, end).
 */
var ArrayPageHelper = /** @class */ (function () {
    function ArrayPageHelper(page, size) {
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
    ArrayPageHelper.of = function (page, size) {
        return new ArrayPageHelper(page, size);
    };
    Object.defineProperty(ArrayPageHelper.prototype, "start", {
        /**
         * start of data index.
         */
        get: function () {
            return (this._page - 1) * this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayPageHelper.prototype, "end", {
        /**
         * end of data index.
         */
        get: function () {
            return this._page * this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayPageHelper.prototype, "limit", {
        /**
         * page size of data.
         */
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayPageHelper.prototype, "page", {
        /**
         * current page number.
         */
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * total pages count.
     */
    ArrayPageHelper.prototype.pages = function (arr) {
        return Math.floor(arr.length / this.size) + 1;
    };
    /**
     * data paging.
     * @param arr data
     */
    ArrayPageHelper.prototype.paging = function (arr) {
        return arr.slice(this.start, this.end);
    };
    return ArrayPageHelper;
}());

export { ArrayPageHelper as default };
//# sourceMappingURL=array-page-helper.esm.js.map
