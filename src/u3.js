/* @flow */

import type { UInt3 } from "./index";

type M0 = (number, 0x00) => 0x00;                      // 000
type M1 = (number, 0x01) => 0x00 | 0x01;               // 001
type M2 = (number, 0x02) => 0x00 | 0x02;               // 010
type M3 = (number, 0x03) => 0x00 | 0x01 | 0x02 | 0x03; // 011
type M4 = (number, 0x04) => 0x00 | 0x04;               // 100
type M5 = (number, 0x05) => 0x00 | 0x01 | 0x04 | 0x05; // 101
type M6 = (number, 0x06) => 0x00 | 0x02 | 0x04 | 0x06; // 110
type M7 = (number, 0x07) => UInt3;                     // 111

function mask(value: number, t: UInt3): number {
  return value & t;
}

export const u3_mask: M0 & M1 & M2 & M3 & M4 & M5 & M6 & M7 = (mask: any); // eslint-disable-line flowtype/no-weak-types
