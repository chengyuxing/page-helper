# page-params

Simple page helper supports params for array data pageable.

## Installation

`npm i array-page-helper --save`

## Usage

```typescript
import ArrayPageHelper from "array-page-helper";

const data = [];

const p = ArrayPageHelper.of(3, 15);

data.slice(p.start, p.end);
// or
p.paging(data);

```