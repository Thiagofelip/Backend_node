exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id")
  table.integer("user_id").references("id").inTable("users")
  table.text("url").notNullable()
  table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("links")