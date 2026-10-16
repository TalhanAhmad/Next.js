import {
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const keyLength = 64;

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const key = (await scrypt(password, salt, keyLength)) as Buffer;

  return `${salt}:${key.toString("hex")}`;
}

export async function verifyPassword(password: string, storedHash: string) {
  const [salt, keyHex] = storedHash.split(":");

  if (!salt || !keyHex) {
    return false;
  }

  const expectedKey = Buffer.from(keyHex, "hex");
  const suppliedKey = (await scrypt(password, salt, keyLength)) as Buffer;

  return (
    expectedKey.length === suppliedKey.length &&
    timingSafeEqual(expectedKey, suppliedKey)
  );
}