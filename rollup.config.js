import typescript from 'rollup-plugin-typescript2';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: './src/index.ts',
    output: [
        {
            file: './lib/page-params.umd.js',
            format: 'umd',
            name: 'pageHelper',
            exports: 'default',
            sourcemap: true
        }, {
            file: './lib/page-params.esm.js',
            format: 'esm',
            sourcemap: true
        }, {
            file: './lib/page-params.cjs',
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