/* @flow */

import type { UInt2 } from "./index";

type M0 = (number, 0x00) => 0x00;        // 00
type M1 = (number, 0x01) => 0x00 | 0x01; // 01
type M2 = (number, 0x02) => 0x00 | 0x02; // 10
type M3 = (number, 0x03) => UInt2;       // 11

function mask(value: number, t: UInt2): number {
  return value & t;
}

export const u2_mask: M0 & M1 & M2 & M3 = (mask: any); // eslint-disable-line flowtype/no-weak-types
