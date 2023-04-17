import db from "../db";

async function main() {
  await db.schema.createTable("cars", (table) => {
    table.increments("id");
    table.string("brand");
    table.string("model");
    table.integer("year");
    table.string("color");
    table.timestamps(true, true);
  });

  const [carId] = await db("cars").insert({ brand: "Hyundai" });
  const car = await db("cars").where({ id: carId }).first();

  console.log(car);
}

main().catch(console.error);
