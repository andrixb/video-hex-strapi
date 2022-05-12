export const mockVideosListPayload = {
    data: [
        {
            id: 1, 
            attributes: {
                isPublic: true,
                slug: 'julian-lage-ryland',
                title: 'Ryland',
                url: 'https://www.youtube.com/watch?v=1EHN_Brs5RE',
                createdAt: '2022-05-12T07:34:28.027Z',
                updatedAt: '2022-05-12T07:37:02.900Z',
                publishedAt: '2022-05-12T07:37:02.899Z',
                author: 'Julian Lage',
            },
        },
        {
            id: 2,
            attributes: {
                isPublic: true,
                slug: 'charles-mingus-devil-blues',
                title: 'Devil Blues',
                url: 'https://www.youtube.com/watch?v=ODnOQ0t37Ik',
                createdAt: '2022-05-12T07:37:40.825Z',
                updatedAt: '2022-05-12T07:37:45.430Z',
                publishedAt: '2022-05-12T07:37:45.427Z',
                author: 'Charles Mingus',
            },
        },
        {
            id: 3,
            attributes: {
                isPublic: true,
                slug: 'moderat-live-sonar-2017',
                title: 'Live Sonar 2017',
                url: 'https://www.youtube.com/watch?v=FYHcCjzNN0I',
                createdAt: '2022-05-12T07:38:48.890Z',
                updatedAt: '2022-05-12T07:38:55.621Z',
                publishedAt: '2022-05-12T07:38:55.620Z',
                author: 'Moderat',
            },
        },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
