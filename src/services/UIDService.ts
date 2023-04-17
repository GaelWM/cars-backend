import { v4 as uuidv4, validate } from "uuid";

export class UIDService {
  constructor() {}

  public static generate(): string {
    return uuidv4();
  }

  public static isValidUUID(uuid: string): boolean {
    return validate(uuid);
  }
}
