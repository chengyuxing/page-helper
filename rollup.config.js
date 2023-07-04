import typescript from 'rollup-plugin-typescript2';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: './src/index.ts',
    output: [
        {
            file: './lib/array-page-helper.umd.js',
            format: 'umd',
            name: 'pageHelper',
            exports: 'default',
            sourcemap: true
        }, {
            file: './lib/array-page-helper.esm.js',
            format: 'esm',
            sourcemap: true
        }, {
            file: './lib/array-page-helper.cjs',
            format: 'cjs',
            exports: 'default',
            sourcemap: true
        }
    ],
    plugins: [
        typescript(),
        commonjs()
    ]
}