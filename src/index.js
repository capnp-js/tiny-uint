/* @flow */

//TODO: Grep u2_mask and u3_mask users and use these types at needed
export type UInt2 = 0x00 | 0x01 | 0x02 | 0x03;
export type UInt3 = 0x00 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07;

export { u2_mask } from "./u2";
export { u3_mask } from "./u3";
