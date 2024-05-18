export const comments = [
  { id: 1, text: 'Comment 1' },
  {
    id: 2,
    text: 'Comment 2',
    replies: [
      { id: 3, text: 'Reply 1 to Comment 2' },
      {
        id: 4,
        text: 'Reply 2 to Comment 2',
        replies: [
          { id: 5, text: 'Reply 1 to Reply 2' }
        ]
      }
    ]
  }
];