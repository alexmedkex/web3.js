/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import { AbiInput, AbiItem } from 'web3-utils';

declare namespace AbiCoder {
    export function encodeFunctionSignature(functionName: string | AbiItem): string;

    export function encodeEventSignature(functionName: string | AbiItem): string;

    export function encodeParameter(type: any, parameter: any): string;

    export function encodeParameters(types: any[], paramaters: any[]): string;

    export function encodeFunctionCall(abiItem: AbiItem, params: string[]): string;

    export function decodeParameter(type: any, hex: string): { [key: string]: any };

    export function decodeParameters(types: any[], hex: string): { [key: string]: any };

    export function decodeLog(
        inputs: AbiInput[],
        hex: string,
        topics: string[]
    ): { [key: string]: string };
}

export default AbiCoder