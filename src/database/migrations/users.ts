import db from "../db";

async function main() {
  await db.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name");
    table.timestamps(true, true);
  });

  const [userId] = await db("users").insert({ name: "Alice" });
  const user = await db("users").where({ id: userId }).first();

  console.log(user);
}

main().catch(console.error);
