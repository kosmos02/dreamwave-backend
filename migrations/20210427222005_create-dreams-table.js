
exports.up = (knex) => {
  return knex.schema.createTable('dreams', (table) => {
    table.increments();  
    table.date('date');
    table.boolean('lucid');
    table.string('type');
    table.specificType('tagsarray','text ARRAY');
    table.text('details');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dreams')
};
