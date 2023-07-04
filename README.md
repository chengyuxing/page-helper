# page-helper

Simple page helper for array data pageable.

## Installation

`npm i simple-pagehelper --save`

## Usage

```typescript
import {PageParams} from "page-helper";

const data = [];

const p = PageParams.of(3, 15, data.length);

data.slice(p.start(), p.end());

```