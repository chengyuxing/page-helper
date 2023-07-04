# page-params

Simple page params for array data pageable.

## Installation

`npm i page-params --save`

## Usage

```typescript
import PageParams from "page-params";

const data = [];

const p = PageParams.of(3, 15, data.length);

data.slice(p.start(), p.end());

```