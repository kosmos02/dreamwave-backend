
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        {date: '2021-03-20', lucid: true, type: 'positive', tagsarray: ['flying', 'orchestra', 'ice cream'], details: 'I was soaring above the clouds having myself a strawberry ice cream'},
        {date: '2021-04-02', lucid: false, type: 'neutral', tagsarray: ['swamp', 'playing cards', 'sunset'], details: 'It was sunset and and I was floating in a small raft in a swamp. I kept finding different cards laying around the raft.'},
        {date: '2021-4-20', lucid: false, type: 'nightmare', tagsarray: ['mice', 'glue'], details: "There was a small and big mouse. The small mouse ate some super glue and then the big mouse went inside the small mouse's mouth. We can assume what happens next."}
      ]);
    });
};
