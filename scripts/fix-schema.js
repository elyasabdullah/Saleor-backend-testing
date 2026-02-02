import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const schemaPath = join(process.cwd(), "src", "schema.graphql");
let schema = readFileSync(schemaPath, "utf-8");

// Fix empty type definitions by adding a placeholder field
const emptyTypes = [
  "type AppExtensionOptionsNewTab",
  "type AppExtensionOptionsWidget",
  "type NewTabTargetOptions",
  "type WidgetTargetOptions",
];

emptyTypes.forEach((typeName) => {
  // Match the type definition followed by newline and potentially another type/interface/etc
  const regex = new RegExp(
    `(${typeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\s*\\n(?=\\n|type |interface |enum |union |input |scalar |directive )`,
    "g",
  );
  schema = schema.replace(regex, `$1 {\n  _empty: String\n}\n`);
});

writeFileSync(schemaPath, schema, "utf-8");
console.log("Schema fixed successfully!");
