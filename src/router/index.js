import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/movie',
        component: () =>
            import ('@/views/movie/Movie'),
        redirect: '/movie/nowPlaying',
        children: [{
                path: 'city',
                component: () =>
                    import ('page/city/City')
            },
            {
                path: 'nowPlaying',
                component: () =>
                    import ('page/nowPlaying/NowPlaying')
            },
            {
                path: 'comingSoon',
                component: () =>
                    import ('page/comingSoon/ComingSoon')
            },
            {
                path: 'search',
                component: () =>
                    import ('page/search/Search')
            }
        ]
    },
    {
        path: '/detail',
        component: () =>
            import ('@/views/movieDetail/MovieDetail')
    },
    {
        path: '/cinema',
        component: () =>
            import ('@/views/cinema/Cinema')
    },
    {
        path: '/mine',
        component: () =>
            import ('@/views/mine/Mine')
    },
    {
        path: '/*',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('@/views/movie/Movie'),
        redirect: '/movie/nowPlaying'
    }
]

const router = new VueRouter({
    routes
})

export default router
