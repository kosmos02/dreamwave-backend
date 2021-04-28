
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        {date: '03/20/2021', lucid: false, colName: 'rowValue1'},
        {date: '04/02/2021', lucid: true, colName: 'rowValue2'},
        {date: '04/20/2021', lucid: false, colName: 'rowValue3'}
      ]);
    });
};
