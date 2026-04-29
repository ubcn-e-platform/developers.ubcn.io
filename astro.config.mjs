import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://ubcn.co.kr",
    compressHTML: false,
    integrations: [
        starlight({
            title: '개발자센터',
            components: {
                Header: './src/components/Header.astro',
                PageTitle: './src/components/Title.astro',
            },
            logo: {
                src: './src/assets/logo/ubcn-logo-text.png',
            },
            favicon: '/favicon.png',
            customCss: ['./src/assets/styles/style.css'],
            social: [],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '한국어',
                    lang: 'ko',
                }
            },
            sidebar: [
                {
                    label: '용어사전',
                    link: '/glossary'
                },
                {
                    label: '릴리즈노트',
                    collapsed: false,
                    /*autogenerate: {directory: 'release-notes'},*/
                    items: [
                        {
                            label: 'Legacy',
                            autogenerate: {directory: 'release-notes/legacy'},
                            collapsed: true
                        },
                        {
                            label: '2026년 1월',
                            autogenerate: {directory: 'release-notes/2026-01'},
                            collapsed: true
                        },
                        {
                            label: '2026년 2월',
                            autogenerate: {directory: 'release-notes/2026-02'},
                            collapsed: true
                        },
                        {
                            label: '2026년 3월',
                            autogenerate: {directory: 'release-notes/2026-03'},
                            collapsed: true
                        },
                        {
                            label: '2026년 4월',
                            autogenerate: {directory: 'release-notes/2026-04'},
                            collapsed: true
                        },
                        {
                            label: '2026년 5월',
                            autogenerate: {directory: 'release-notes/2026-05'},
                            collapsed: false
                        },

                    ],
                },
                {
                    label: 'API',
                    badge: {text: '유료', variant: 'caution'},
                    collapsed: true,
                    items: [
                        {label: '시작하기', slug: 'api'},
                        {label: '응답코드 정리', slug: 'api/code'},
                        {label: '거래내역 요청', slug: 'api/sales'},
                        {label: '마감내역 요청', slug: 'api/closing'},
                        {label: '상태이상 정보 요청', slug: 'api/controlerror'},
                        {
                            label: '기타결제',
                            collapsed: true,
                            items: [
                                {
                                    label: '복지카드',
                                    collapsed: true,
                                    autogenerate: {directory: 'api/welpoint'},
                                },
                                {label: '쿠폰', slug: 'api/coupon'},
                                {label: '서비스코인', slug: 'api/servicecoin'},
                            ],
                        },
                    ],
                },
                {
                    label: '네트워크',
                    badge: {text: 'link', variant: 'note'},
                    link: 'https://ubcn.notion.site/UBCn-Network-Pay-21930b3d33e24caea25d97d3a314f066?pvs=4'
                },
                {
                    label: '자주 묻는 질문',
                    link: '/faq'
                },
                {
                    label: '웹 가이드',
                    link: '/web'
                },
            ],
        })
        ,
    ],
})
;
