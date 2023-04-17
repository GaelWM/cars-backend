import { UIDService } from "../services/UIDService";
import { Model } from "objection";

export abstract class BaseModel extends Model {
  protected id: string | undefined;
  protected clientId!: string;
  protected createdAt: Date = new Date();
  protected createdBy?: string;
  protected updatedBy?: string;
  protected updatedAt: Date = new Date();
  protected deleted?: boolean;

  genUid(): void {
    this.id = UIDService.generate();
  }

  public get _id(): string | undefined {
    return this.id;
  }

  public set _id(id: string | undefined) {
    this.id = id;
  }

  public get _clientId(): string {
    return this.clientId;
  }

  public set _clientId(clientId: string) {
    this.clientId = clientId;
  }

  public get _updatedAt(): Date {
    return this.updatedAt;
  }

  public set _updatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }

  public get _createdAt(): Date {
    return this.createdAt;
  }

  public set _createdAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  public get _deleted(): boolean | undefined {
    return this.deleted;
  }

  public set _deleted(deleted: boolean | undefined) {
    this.deleted = deleted;
  }

  protected toJsonForStorage(): any {
    return this.toJson();
  }

  public toJson(): any {
    return {
      id: this.id,
      clientId: this.clientId,
      createdAt: this.createdAt,
      createdBy: this.createdBy,
      updatedAt: this.updatedAt,
      updatedBy: this.updatedBy,
      deleted: this.deleted,
    };
  }

  public abstract store(payload: Record<string, unknown>): Promise<any>;

  public abstract update(
    payload: Record<string, unknown>,
    id: string
  ): Promise<any>;

  public abstract delete(id: string): Promise<boolean>;
}

export interface CrudResponse {
  obj:
    | Record<string, unknown>
    | Array<Record<string, unknown>>
    | undefined
    | any;
  status: boolean;
  msg: string;
}
