const state = {
    users: {
        byIds: {
            1: {
                id: 1,
                name: 'Alice',
                posts: [101]
            },
            2: {
                id: 2,
                name: 'Bob',
                posts: [102]
            }
        },
        allIds: [1, 2]
    },
    posts: {
        byIds: {
            101: {
                id: 101, title: 'Post 1', userId: 1, tagIds: [301]
            },
            102: {
                id: 102, title: 'Post 2', userId: 2, tagIds: [301, 302]
            }
        },
        allIds: [101, 102]
    },
    comments: {
        byIds: {
            201: { id: 201, text: 'Epic!', postId: 101, userId: 1 },
            202: { id: 202, text: 'Classy', postId: 102, userId: 2 }
        },
        allIds: [201, 202]
    },
    tags: {
        byIds: {
            301: {
                id: 301, name: 'Tech'
            },
            302: {
                id: 302, name: 'Travel'
            }
        },
        allIds: [301, 302]
    }
}