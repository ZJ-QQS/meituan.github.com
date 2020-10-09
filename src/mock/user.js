import Mock from 'mockjs'
import pinyin from 'js-pinyin'
// import api from "@/api/index.js";

let mock = Mock.mock
    //菜单列表数据
var MenuData = mock({
    'data|4': [{
            'title': '美食',
            icon: 'food',
            children: [{
                title: '美食',
                children: [
                    '代金券',
                    '甜点饮品',
                    '火锅',
                    '自助餐',
                    '小吃快餐',
                    '日韩料理',
                    '西餐',
                    '烧烤烤肉',
                    '东北菜'
                ]
            }]
        },
        {
            title: '外卖',
            icon: 'takeout',
            children: [{
                title: '外卖',
                children: ['美团外卖']
            }]
        },
        {
            title: '酒店',
            icon: 'hotel',
            children: [{
                title: '酒店星级',
                children: ['经济型', '舒适/三星', '高档/四星', '豪华五星']
            }]
        },
        {
            title: '民宿',
            icon: 'homestay',
            children: [{
                title: '热门城市',
                children: ['上海', '成都', '北京', '重庆']
            }, {
                title: '热门房源',
                children: ['复式Loft', '别墅']
            }]
        }
    ]
})
let MnuUrl = 'http://api.duyiedu.com/api/meituan/index/nav.json'
    // mock(RegExp(Mnu + '.*'), 'get', {
    //     'code': 0,
    //     'data': {
    //         'fullName': '@CNAME', // 随机生成中文人名
    //         'userId': 1000234234001,
    //         'username': 'zhangsan'
    //     },
    //     'msg': 'success'
    // })
    // MenuData = { "a": "1124687" }
mock(RegExp(MnuUrl + '.*'), 'get', MenuData)


//conList数据模拟
let containerData = {
    "istyle": [{
            image: "//p1.meituan.net/merchantpic/d21654266444420917d382d879f9c1aa81640.jpg@220w_125h_1e_1c",
            title: "三画美容养生",
            subTitle: "美容SPA|长营",
            price_info: {
                current_price: 558,
                old_price: 668,
                avg_price: 558,
            },
            rentNum: 0,
            address: "长楹天街",
        },
        {
            image: "//p0.meituan.net/merchantpic/29c95bffe8421d4d501ccf9f8c555f1a173333.jpg@220w_125h_1e_1c",
            title: "惊魂密室",
            subTitle: "密室逃脱|魏公村",
            price_info: {
                current_price: 132,
                old_price: 194,
                avg_price: 132,
            },
            rentNum: 10,
            address: "海淀区中关村",
        },
        {
            image: "//p1.meituan.net/joymerchant/55255ac8bbd1a65f6b0046ae1daf854e--1335954177.jpg@220w_125h_1e_1c",
            title: "光影密室逃脱俱乐部",
            subTitle: "日式惊恐《被错过的天堂》",
            price_info: {
                current_price: 112,
                old_price: 199,
                avg_price: 112,
            },
            rentNum: 0,
            address: "东城区和平里",
        },
        {
            image: "//p0.meituan.net/bbia/2dc779cf33e0b835b4bf6153f738c2834204321.jpg@220w_125h_1e_1c",
            title: "清月里食点酒地摊儿烤肉",
            subTitle: "100元品牌代金券1张，可叠加",
            price_info: {
                current_price: 95,
                old_price: 194,
                avg_price: 89,
            },
            rentNum: 10,
            address: "五道口",
        },
        {
            image: "//p1.meituan.net/dpmerchantpic/2f43a42d5e657531d999e9d3b749dd4d224210.jpg",
            title: "惑星桌游",
            subTitle: "学生假日畅游",
            price_info: {
                current_price: 39,
                old_price: 59,
                avg_price: 39,
            },
            rentNum: 0,
            address: "大钟寺",
        },
        {
            image: "//p1.meituan.net/dpmerchantpic/a1a5c5d8ee0d96593ad726bfb331b315330075.jpg",
            title: "Hicool嗨酷运动乐园·蹦床团建篮球",
            subTitle: "夜场蹦迪/减肥",
            price_info: {
                current_price: 1080,
                old_price: 1560,
                avg_price: 1080,
            },
            rentNum: 10,
            address: "朝阳区广渠路",
        }
    ],
    "youhui": [{
            image: "//p0.meituan.net/msmerchant/b0cbddc294e73ffa587e6aea5c7c561071082.jpg@256w_144h_1e_1c",
            title: "戈拿望巴西烤肉",
            subTitle: "下午餐双人套餐，提供免费wifi",
            price_info: {
                current_price: 18,
                old_price: 36,
                avg_price: 18,
            },
            rentNum: 0,
            address: "崇文门",
        },
        {
            image: "//p0.meituan.net/msmerchant/e63ee09b50df0ea9f6ba2d70a2b588f8103220.jpg@256w_144h_1e_1c",
            title: "九门轩烤鸭店",
            subTitle: "烤鸭2-3人就餐，提供免费wifi",
            price_info: {
                current_price: 90,
                old_price: 194,
                avg_price: 90,
            },
            rentNum: 10,
            address: "九门轩",
        },
        {
            image: "//p1.meituan.net/msmerchant/71cb53f4f5eb0062f8719d3074f2cd3e2527038.jpg@220w_125h_1e_1c",
            title: "六合顺西北菜烤串",
            subTitle: "中午双人套餐，有赠品",
            price_info: {
                current_price: 51,
                old_price: 86,
                avg_price: 51,
            },
            rentNum: 0,
            address: "左家庄",
        },
        {
            image: "//p1.meituan.net/merchantpic/dc551edefb921ccb3bbd4d12f25466e9786529.jpg@220w_125h_1e_1c",
            title: "道和会馆",
            subTitle: "按摩/足疗|太阳宫/养生",
            price_info: {
                current_price: 99,
                old_price: 138,
                avg_price: 99,
            },
            rentNum: 10,
            address: "朝阳区",
        },
        {
            image: "//p1.meituan.net/mogu/9ab8497abc9beed91494bf477083d5ff246259.jpg@220w_125h_1e_1c",
            title: "一珍香江南渔府",
            subTitle: "私密性好包厢设计 适合宴请",
            price_info: {
                current_price: 298,
                old_price: 360,
                avg_price: 298,
            },
            rentNum: 0,
            address: "西城区",
        },
        {
            image: "//p0.meituan.net/msmerchant/28a55d3d68b67572701f5b8ac94776772903413.jpg@220w_125h_1e_1c",
            title: "与光影餐厅",
            subTitle: "下午餐双人套餐，提供免费wifi",
            price_info: {
                current_price: 1080,
                old_price: 1560,
                avg_price: 1080,
            },
            rentNum: 10,
            address: "西店",
        }
    ],
    "travel": [{
            image: "//p0.meituan.net/hotel/560a0ddcdb23d46f145b55c52787df3f3619582.png@220w_125h_1e_1c",
            title: "古北水镇",
            subTitle: "日场司马台长城",
            price_info: {
                current_price: 140,
                old_price: 170,
                avg_price: 140,
            },
            rentNum: 0,
            address: "密云区古北口镇",
        },
        {
            image: "//p1.meituan.net/travel/e3da95f00edcbcac7e4d28cbeefb2db4754993.png@220w_125h_1e_1c",
            title: "八达岭长城",
            subTitle: "文物古迹|八达岭",
            price_info: {
                current_price: 40,
                old_price: 60,
                avg_price: 40,
            },
            rentNum: 10,
            address: "延庆区八达岭",
        },
        {
            image: "//p0.meituan.net/tdctraveldark/f06d518ccfe2dc09cfb4c03b20664d9c462103.png@220w_125h_1e_1c",
            title: "故宫博物院",
            subTitle: "人工讲解+无线耳麦",
            price_info: {
                current_price: 120,
                old_price: 198,
                avg_price: 120,
            },
            rentNum: 0,
            address: "东城区",
        },
        {
            image: "//p0.meituan.net/bbia/2dc779cf33e0b835b4bf6153f738c2834204321.jpg@220w_125h_1e_1c",
            title: "颐和园",
            subTitle: "明十三陵、鸟巢等纯一日跟团游",
            price_info: {
                current_price: 166,
                old_price: 398,
                avg_price: 166,
            },
            rentNum: 10,
            address: "新建宫门路",
        },
        {
            image: "//p1.meituan.net/travel/5c92bb818023512df32436fa2df5abf01275940.png@220w_125h_1e_1c",
            title: "什刹海",
            subTitle: "自然风光/后海",
            price_info: {
                current_price: 298,
                old_price: 360,
                avg_price: 298,
            },
            rentNum: 0,
            address: "西城区地安门",
        },
        {
            image: "//p1.meituan.net/tdctraveldark/b3d1c296df9cb597fe586394673f1bf23193445.jpg@220w_125h_1e_1c",
            title: "北京海洋馆",
            subTitle: "北京动物园+北京海洋馆大学生门票",
            price_info: {
                current_price: 85,
                old_price: 175,
                avg_price: 85,
            },
            rentNum: 10,
            address: "高梁桥斜街",
        }
    ]
}
let containerUrl = 'http://api.duyiedu.com/api/meituan/index/resultsByKeywords.json';
mock(RegExp(containerUrl + '.*'), 'get', containerData)


//cityGroup数据模拟
let cityGroup = mock({
    "data|200": [{
        "id|+1": 1,
        "name": '@city()',
        "address": ['@county()', '@county()', '@county()']
    }]
});

cityGroup.data.forEach(element => {
    element.name = element.name.substring(0, 2);
    element.pinyin = pinyin.getCamelChars(element.name);
    element.firstChar = element.pinyin.substring(0, 1);
});
let cityUrl = 'http://api.duyiedu.com/api/meituan/city/cityList.json';
mock(RegExp(cityUrl + '.*'), 'get', cityGroup)

//productList数据模拟
let proData = mock({
    "data|3": [{
        "address": "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
        "avgPrice": 64,
        "comment": [{
            "evalaute": "好吃",
            "username": "xxxx"
        }],
        "commentNum": 0,
        "dealItems": [{
            "counterPrice": 1150,
            "price": 909,
            "priceType": "元",
            "saleNum": 0,
            "title": "火鸡宴，建议10-14人使用"
        }],
        "image": "http://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c",
        "score": 4.1,
        "tab": ["火锅", "沙河"],
        "title": "火鸡老店",
        "type": "food",
    }, {
        "address": "南岗区中兴大街168号万达广场3层3055",
        "avgPrice": 95,
        "comment": [{
            "evalaute": "好吃",
            "username": "xxxx"
        }],
        "commentNum": 2555,
        "dealItems": [{
                "counterPrice": 100,
                "price": 28.9,
                "priceType": "元",
                "saleNum": 3409,
                "title": "100元代金券1张"
            },
            {
                "counterPrice": 458,
                "price": 280,
                "priceType": "元",
                "saleNum": 152,
                "title": "四人套餐，提供免费wifi"
            }
        ],
        "image": "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
        "score": 5,
        "tab": ["重庆火锅", "哈西万达"],
        "title": "井格重庆火锅（哈西万达店）",
        "type": "food",
    }]
});
let proUrl = 'http://api.duyiedu.com/api/meituan/list/goodsList.json';
mock(RegExp(proUrl + '.*'), 'get', proData)