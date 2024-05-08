const state = {
    users: [
        {
            id: 1,
            name: 'Alice',
            posts: [
                {
                    id: 101, title: 'Post 1',
                    comments: [{ id: 201, text: 'Epic!' }]
                }
            ]
        },
        {
            id: 2,
            name: 'Bob',
            posts: [
                {
                    id: 102, title: 'Post 2',
                    comments: [{ id: 202, text: 'Classy' }]
                }
            ]
        }
    ],
    tags: [
        {
            id: 301, name: 'Tech',
            posts: [{ id: 101 }, { id: 102 }]
        },
        {
            id: 302, name: 'Travel',
            posts: [{ id: 102 }]
        }
    ]
}