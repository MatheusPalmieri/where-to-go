import { Document, Schema } from "mongoose";

export function softDeletePlugin(schema: Schema) {
  schema.add({ isDeleted: { type: Boolean, default: false } });

  schema.pre(/^find/, function (next) {
    (this as any).find({ isDeleted: false });
    next();
  });

  schema.method("softDelete", async function (this: Document) {
    this.set("isDeleted", true);
    await this.save();
  });

  schema.method("restore", async function (this: Document) {
    this.set("isDeleted", false);
    await this.save();
  });
}
