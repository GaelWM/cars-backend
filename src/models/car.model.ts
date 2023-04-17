import { BaseModel } from "./base.model";
import { ModelObject, PartialModelObject } from "objection";
import Joi from "joi";

export class Car extends BaseModel {
  public name: string | undefined;
  public entity: string | undefined;
  public details?: JSON;

  static tableName: string = "cars";
  static idColumn: string = "id";

  constructor(name?: string, entity?: string) {
    super();
    this.genUid();
    this.name = name;
    this.entity = entity;
  }

  public async index(): Promise<Car[]> {
    return await Car.query();
  }

  public async get(id: string): Promise<Car | undefined> {
    return await Car.query().findById(id);
  }

  public async store(payload: PartialModelObject<Car>): Promise<Car> {
    return await Car.query().insert(payload).returning("*");
  }

  public async update(
    payload: PartialModelObject<Car>,
    carId: string
  ): Promise<boolean> {
    try {
      const updated = await Car.query().where({ id: carId }).update(payload);
      return updated === 1;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  public async delete(carId: string): Promise<boolean> {
    try {
      const deleted = await Car.query().del().where({ id: carId });
      return deleted === 1;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  public validate(payload: PartialModelObject<Car>): Joi.ValidationResult {
    const schema = Joi.object({
      brand: Joi.string().required(),
      model: Joi.string().required(),
    }).options({ allowUnknown: true });
    return schema.validate(payload);
  }
}

export type CarModel = ModelObject<Car>;
