
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        {date: '03/20/2021', lucid: true, type: 'positive', tagarray: ['flying', 'orchestra', 'ice cream'], details: 'I was soaring above the clouds having myself a strawberry ice cream'},
        {date: '04/02/2021', lucid: false, type: 'neutral', tagarray: ['swamp', 'playing cards', 'sunset'], details: 'It was sunset and and I was floating in a small raft in a swamp. I kept finding different cards laying around the raft.'},
        {date: '04/20/2021', lucid: false, type: 'nightmare', tagsarray: ['mice', 'glue'], deatils: "There was a small and big mouse. The small mouse ate some super glue and then the big mouse went inside the small mouse's mouth. We can assume what happens next."}
      ]);
    });
};
