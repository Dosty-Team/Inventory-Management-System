// Sales Table Structure
export const saleCol = [
    {
        title: 'SN',
        dataIndex: 'key',
        key: 'sn',
    },
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Quantity Sold',
        dataIndex: 'qtySold',
        key: 'qtySold',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    }
];
export const saleJSON = `[
	{"key": "1","productName": "Smart Phone","qtySold": 8,"total": 7776,"date": "2023/01/01 12:25:00 PM"
	},
	{"key": "2","productName": "Laptop","qtySold": 5,"total": 4845,"date": "2023/01/01 17:25:00 PM"
	},
	{"key": "3","productName": "Smart Phone","qtySold": 1,"total": 993,"date": "2023/01/01 11:23:00 PM"
	},
	{"key": "4","productName": "Tablet","qtySold": 5,"total": 4540,"date": "2023/01/01 11:28:00 PM"
	},
	{"key": "5","productName": "Tablet","qtySold": 1,"total": 928,"date": "2023/01/01 20:23:00 PM"
	},
	{"key": "6","productName": "Tablet","qtySold": 3,"total": 2958,"date": "2023/01/02 11:37:00 PM"
	},
	{"key": "7","productName": "Laptop","qtySold": 10,"total": 9840,"date": "2023/01/02 18:00:00 PM"
	},
	{"key": "8","productName": "Tablet","qtySold": 1,"total": 953,"date": "2023/01/02 12:18:00 PM"
	},
	{"key": "9","productName": "Laptop","qtySold": 9,"total": 8901,"date": "2023/01/02 08:55:00 PM"
	},
	{"key": "10","productName": "Headphones","qtySold": 9,"total": 8676,"date": "2023/01/03 20:15:00 PM"
	},
	{"key": "11","productName": "Laptop","qtySold": 9,"total": 8136,"date": "2023/01/03 14:57:00 PM"
	},
	{"key": "12","productName": "Laptop","qtySold": 4,"total": 3668,"date": "2023/01/03 13:12:00 PM"
	},
	{"key": "13","productName": "Smart Phone","qtySold": 6,"total": 5724,"date": "2023/01/03 12:57:00 PM"
	},
	{"key": "14","productName": "Smart Phone","qtySold": 1,"total": 978,"date": "2023/01/03 20:58:00 PM"
	},
	{"key": "15","productName": "Headphones","qtySold": 9,"total": 8451,"date": "2023/01/04 19:14:00 PM"
	},
	{"key": "16","productName": "Smart Phone","qtySold": 7,"total": 6909,"date": "2023/01/04 11:02:00 PM"
	},
	{"key": "17","productName": "Tablet","qtySold": 8,"total": 7944,"date": "2023/01/04 19:22:00 PM"
	},
	{"key": "18","productName": "Tablet","qtySold": 5,"total": 4675,"date": "2023/01/04 15:06:00 PM"
	},
	{"key": "19","productName": "Headphones","qtySold": 1,"total": 996,"date": "2023/01/05 11:15:00 PM"
	},
	{"key": "20","productName": "Laptop","qtySold": 7,"total": 6531,"date": "2023/01/05 18:26:00 PM"
	},
	{"key": "21","productName": "Tablet","qtySold": 1,"total": 926,"date": "2023/01/05 14:12:00 PM"
	},
	{"key": "22","productName": "Tablet","qtySold": 6,"total": 5556,"date": "2023/01/05 09:08:00 PM"
	},
	{"key": "23","productName": "Tablet","qtySold": 8,"total": 7448,"date": "2023/01/06 12:24:00 PM"
	},
	{"key": "24","productName": "Headphones","qtySold": 9,"total": 8370,"date": "2023/01/06 20:56:00 PM"
	},
	{"key": "25","productName": "Smart Phone","qtySold": 4,"total": 3984,"date": "2023/01/06 10:17:00 PM"
	},
	{"key": "26","productName": "Laptop","qtySold": 5,"total": 4750,"date": "2023/01/07 09:04:00 PM"
	},
	{"key": "27","productName": "Tablet","qtySold": 2,"total": 1874,"date": "2023/01/07 12:23:00 PM"
	},
	{"key": "28","productName": "Laptop","qtySold": 1,"total": 954,"date": "2023/01/07 20:46:00 PM"
	},
	{"key": "29","productName": "Tablet","qtySold": 8,"total": 7936,"date": "2023/01/08 08:21:00 PM"
	},
	{"key": "30","productName": "Tablet","qtySold": 7,"total": 6699,"date": "2023/01/08 20:23:00 PM"
	},
	{"key": "31","productName": "Tablet","qtySold": 9,"total": 8118,"date": "2023/01/08 17:33:00 PM"
	},
	{"key": "32","productName": "Tablet","qtySold": 8,"total": 7248,"date": "2023/01/09 18:54:00 PM"
	},
	{"key": "33","productName": "Tablet","qtySold": 1,"total": 931,"date": "2023/01/09 12:03:00 PM"
	},
	{"key": "34","productName": "Tablet","qtySold": 7,"total": 6601,"date": "2023/01/09 16:11:00 PM"
	},
	{"key": "35","productName": "Headphones","qtySold": 5,"total": 4635,"date": "2023/01/10 14:29:00 PM"
	},
	{"key": "36","productName": "Laptop","qtySold": 2,"total": 1826,"date": "2023/01/10 13:56:00 PM"
	},
	{"key": "37","productName": "Headphones","qtySold": 3,"total": 2946,"date": "2023/01/10 10:09:00 PM"
	},
	{"key": "38","productName": "Laptop","qtySold": 6,"total": 5424,"date": "2023/01/11 19:19:00 PM"
	},
	{"key": "39","productName": "Tablet","qtySold": 7,"total": 6874,"date": "2023/01/11 18:38:00 PM"
	},
	{"key": "40","productName": "Tablet","qtySold": 7,"total": 6790,"date": "2023/01/11 11:13:00 PM"
	},
	{"key": "41","productName": "Laptop","qtySold": 5,"total": 4935,"date": "2023/01/11 10:42:00 PM"
	},
	{"key": "42","productName": "Tablet","qtySold": 1,"total": 942,"date": "2023/01/11 10:36:00 PM"
	},
	{"key": "43","productName": "Tablet","qtySold": 8,"total": 7632,"date": "2023/01/12 12:27:00 PM"
	},
	{"key": "44","productName": "Headphones","qtySold": 4,"total": 3624,"date": "2023/01/12 15:44:00 PM"
	},
	{"key": "45","productName": "Smart Phone","qtySold": 3,"total": 2916,"date": "2023/01/12 11:54:00 PM"
	},
	{"key": "46","productName": "Smart Phone","qtySold": 1,"total": 928,"date": "2023/01/12 15:04:00 PM"
	},
	{"key": "47","productName": "Tablet","qtySold": 6,"total": 5700,"date": "2023/01/13 18:38:00 PM"
	},
	{"key": "48","productName": "Laptop","qtySold": 7,"total": 6377,"date": "2023/01/13 11:56:00 PM"
	},
	{"key": "49","productName": "Headphones","qtySold": 4,"total": 3944,"date": "2023/01/13 15:41:00 PM"
	},
	{"key": "50","productName": "Tablet","qtySold": 6,"total": 5802,"date": "2023/01/14 08:15:00 PM"
	},
	{"key": "51","productName": "Tablet","qtySold": 4,"total": 3684,"date": "2023/01/14 18:49:00 PM"
	},
	{"key": "52","productName": "Tablet","qtySold": 2,"total": 1944,"date": "2023/01/14 17:39:00 PM"
	},
	{"key": "53","productName": "Headphones","qtySold": 2,"total": 1852,"date": "2023/01/14 16:07:00 PM"
	},
	{"key": "54","productName": "Laptop","qtySold": 1,"total": 954,"date": "2023/01/14 20:54:00 PM"
	},
	{"key": "55","productName": "Headphones","qtySold": 7,"total": 6797,"date": "2023/01/15 19:33:00 PM"
	},
	{"key": "56","productName": "Laptop","qtySold": 1,"total": 968,"date": "2023/01/15 13:19:00 PM"
	},
	{"key": "57","productName": "Laptop","qtySold": 2,"total": 1866,"date": "2023/01/15 09:31:00 PM"
	},
	{"key": "58","productName": "Smart Phone","qtySold": 5,"total": 4545,"date": "2023/01/16 10:23:00 PM"
	},
	{"key": "59","productName": "Tablet","qtySold": 3,"total": 2823,"date": "2023/01/16 09:47:00 PM"
	},
	{"key": "60","productName": "Headphones","qtySold": 6,"total": 5934,"date": "2023/01/16 14:08:00 PM"
	},
	{"key": "61","productName": "Tablet","qtySold": 3,"total": 2766,"date": "2023/01/16 20:25:00 PM"
	},
	{"key": "62","productName": "Tablet","qtySold": 2,"total": 1968,"date": "2023/01/17 14:02:00 PM"
	},
	{"key": "63","productName": "Tablet","qtySold": 5,"total": 4885,"date": "2023/01/17 15:01:00 PM"
	},
	{"key": "64","productName": "Smart Phone","qtySold": 8,"total": 7664,"date": "2023/01/17 20:57:00 PM"
	},
	{"key": "65","productName": "Laptop","qtySold": 9,"total": 8379,"date": "2023/01/18 10:11:00 PM"
	},
	{"key": "66","productName": "Tablet","qtySold": 9,"total": 8928,"date": "2023/01/18 09:04:00 PM"
	},
	{"key": "67","productName": "Headphones","qtySold": 9,"total": 8100,"date": "2023/01/18 14:17:00 PM"
	},
	{"key": "68","productName": "Laptop","qtySold": 10,"total": 9250,"date": "2023/01/18 18:58:00 PM"
	},
	{"key": "69","productName": "Smart Phone","qtySold": 7,"total": 6713,"date": "2023/01/19 19:56:00 PM"
	},
	{"key": "70","productName": "Tablet","qtySold": 6,"total": 5988,"date": "2023/01/19 17:27:00 PM"
	},
	{"key": "71","productName": "Tablet","qtySold": 3,"total": 2703,"date": "2023/01/19 11:07:00 PM"
	},
	{"key": "72","productName": "Headphones","qtySold": 3,"total": 2961,"date": "2023/01/19 11:26:00 PM"
	},
	{"key": "73","productName": "Smart Phone","qtySold": 5,"total": 4980,"date": "2023/01/19 17:25:00 PM"
	},
	{"key": "74","productName": "Laptop","qtySold": 3,"total": 2718,"date": "2023/01/20 16:50:00 PM"
	},
	{"key": "75","productName": "Laptop","qtySold": 9,"total": 8847,"date": "2023/01/20 19:36:00 PM"
	},
	{"key": "76","productName": "Headphones","qtySold": 6,"total": 5742,"date": "2023/01/20 08:20:00 PM"
	},
	{"key": "77","productName": "Smart Phone","qtySold": 1,"total": 970,"date": "2023/01/21 13:07:00 PM"
	},
	{"key": "78","productName": "Smart Phone","qtySold": 6,"total": 5718,"date": "2023/01/21 16:52:00 PM"
	},
	{"key": "79","productName": "Smart Phone","qtySold": 6,"total": 5550,"date": "2023/01/21 09:29:00 PM"
	},
	{"key": "80","productName": "Laptop","qtySold": 7,"total": 6748,"date": "2023/01/21 15:03:00 PM"
	},
	{"key": "81","productName": "Headphones","qtySold": 9,"total": 8253,"date": "2023/01/22 16:52:00 PM"
	},
	{"key": "82","productName": "Headphones","qtySold": 3,"total": 2712,"date": "2023/01/22 13:06:00 PM"
	},
	{"key": "83","productName": "Tablet","qtySold": 6,"total": 5532,"date": "2023/01/22 20:41:00 PM"
	},
	{"key": "84","productName": "Tablet","qtySold": 5,"total": 4655,"date": "2023/01/22 10:55:00 PM"
	},
	{"key": "85","productName": "Headphones","qtySold": 5,"total": 4685,"date": "2023/01/23 12:12:00 PM"
	},
	{"key": "86","productName": "Laptop","qtySold": 9,"total": 8739,"date": "2023/01/23 17:45:00 PM"
	},
	{"key": "87","productName": "Smart Phone","qtySold": 1,"total": 901,"date": "2023/01/23 12:25:00 PM"
	},
	{"key": "88","productName": "Headphones","qtySold": 9,"total": 8820,"date": "2023/01/24 15:50:00 PM"
	},
	{"key": "89","productName": "Laptop","qtySold": 3,"total": 2772,"date": "2023/01/24 10:59:00 PM"
	},
	{"key": "90","productName": "Tablet","qtySold": 1,"total": 954,"date": "2023/01/24 19:37:00 PM"
	},
	{"key": "91","productName": "Tablet","qtySold": 10,"total": 9010,"date": "2023/01/25 14:39:00 PM"
	},
	{"key": "92","productName": "Laptop","qtySold": 5,"total": 4775,"date": "2023/01/25 09:51:00 PM"
	},
	{"key": "93","productName": "Smart Phone","qtySold": 3,"total": 2787,"date": "2023/01/25 17:58:00 PM"
	},
	{"key": "94","productName": "Tablet","qtySold": 2,"total": 1930,"date": "2023/01/25 10:22:00 PM"
	},
	{"key": "95","productName": "Smart Phone","qtySold": 1,"total": 907,"date": "2023/01/25 17:11:00 PM"
	},
	{"key": "96","productName": "Headphones","qtySold": 2,"total": 1988,"date": "2023/01/26 18:36:00 PM"
	},
	{"key": "97","productName": "Tablet","qtySold": 3,"total": 2709,"date": "2023/01/26 11:12:00 PM"
	},
	{"key": "98","productName": "Laptop","qtySold": 4,"total": 3720,"date": "2023/01/26 14:42:00 PM"
	},
	{"key": "99","productName": "Headphones","qtySold": 9,"total": 8379,"date": "2023/01/26 16:46:00 PM"
	},
	{"key": "100","productName": "Headphones","qtySold": 4,"total": 3856,"date": "2023/01/26 12:21:00 PM"
	},
	{"key": "101","productName": "Tablet","qtySold": 2,"total": 1978,"date": "2023/01/27 19:32:00 PM"
	},
	{"key": "102","productName": "Laptop","qtySold": 4,"total": 3932,"date": "2023/01/27 20:32:00 PM"
	},
	{"key": "103","productName": "Laptop","qtySold": 5,"total": 4705,"date": "2023/01/27 09:12:00 PM"
	},
	{"key": "104","productName": "Smart Phone","qtySold": 3,"total": 2949,"date": "2023/01/27 10:54:00 PM"
	},
	{"key": "105","productName": "Headphones","qtySold": 3,"total": 2781,"date": "2023/01/27 13:24:00 PM"
	},
	{"key": "106","productName": "Smart Phone","qtySold": 4,"total": 3704,"date": "2023/01/28 10:32:00 PM"
	},
	{"key": "107","productName": "Smart Phone","qtySold": 1,"total": 931,"date": "2023/01/28 18:59:00 PM"
	},
	{"key": "108","productName": "Laptop","qtySold": 5,"total": 4595,"date": "2023/01/28 10:26:00 PM"
	},
	{"key": "109","productName": "Laptop","qtySold": 6,"total": 5928,"date": "2023/01/28 16:28:00 PM"
	},
	{"key": "110","productName": "Headphones","qtySold": 6,"total": 5796,"date": "2023/01/29 14:06:00 PM"
	},
	{"key": "111","productName": "Laptop","qtySold": 1,"total": 967,"date": "2023/01/29 20:31:00 PM"
	},
	{"key": "112","productName": "Smart Phone","qtySold": 4,"total": 3972,"date": "2023/01/29 20:44:00 PM"
	},
	{"key": "113","productName": "Tablet","qtySold": 7,"total": 6461,"date": "2023/01/30 08:08:00 PM"
	},
	{"key": "114","productName": "Smart Phone","qtySold": 1,"total": 955,"date": "2023/01/30 17:28:00 PM"
	},
	{"key": "115","productName": "Smart Phone","qtySold": 4,"total": 3724,"date": "2023/01/30 10:30:00 PM"
	},
	{"key": "116","productName": "Laptop","qtySold": 3,"total": 2853,"date": "2023/01/30 12:38:00 PM"
	},
	{"key": "117","productName": "Laptop","qtySold": 10,"total": 9270,"date": "2023/01/31 09:44:00 PM"
	},
	{"key": "118","productName": "Smart Phone","qtySold": 2,"total": 1916,"date": "2023/01/31 20:56:00 PM"
	},
	{"key": "119","productName": "Headphones","qtySold": 5,"total": 4690,"date": "2023/01/31 19:10:00 PM"
	},
	{"key": "120","productName": "Tablet","qtySold": 8,"total": 7944,"date": "2023/02/01 20:10:00 PM"
	},
	{"key": "121","productName": "Headphones","qtySold": 7,"total": 6615,"date": "2023/02/01 08:25:00 PM"
	},
	{"key": "122","productName": "Laptop","qtySold": 7,"total": 6552,"date": "2023/02/01 13:40:00 PM"
	},
	{"key": "123","productName": "Laptop","qtySold": 7,"total": 6321,"date": "2023/02/02 15:56:00 PM"
	},
	{"key": "124","productName": "Tablet","qtySold": 4,"total": 3848,"date": "2023/02/02 11:58:00 PM"
	},
	{"key": "125","productName": "Smart Phone","qtySold": 10,"total": 9920,"date": "2023/02/02 11:24:00 PM"
	},
	{"key": "126","productName": "Laptop","qtySold": 9,"total": 8586,"date": "2023/02/03 15:13:00 PM"
	},
	{"key": "127","productName": "Tablet","qtySold": 5,"total": 4590,"date": "2023/02/03 09:07:00 PM"
	},
	{"key": "128","productName": "Tablet","qtySold": 5,"total": 4885,"date": "2023/02/03 16:49:00 PM"
	},
	{"key": "129","productName": "Tablet","qtySold": 1,"total": 978,"date": "2023/02/03 13:43:00 PM"
	},
	{"key": "130","productName": "Smart Phone","qtySold": 8,"total": 7256,"date": "2023/02/03 14:27:00 PM"
	},
	{"key": "131","productName": "Tablet","qtySold": 7,"total": 6321,"date": "2023/02/04 14:17:00 PM"
	},
	{"key": "132","productName": "Headphones","qtySold": 6,"total": 5664,"date": "2023/02/04 14:10:00 PM"
	},
	{"key": "133","productName": "Smart Phone","qtySold": 5,"total": 4820,"date": "2023/02/04 18:19:00 PM"
	},
	{"key": "134","productName": "Smart Phone","qtySold": 10,"total": 9630,"date": "2023/02/04 10:27:00 PM"
	},
	{"key": "135","productName": "Smart Phone","qtySold": 7,"total": 6545,"date": "2023/02/04 18:25:00 PM"
	},
	{"key": "136","productName": "Tablet","qtySold": 6,"total": 5628,"date": "2023/02/05 19:23:00 PM"
	},
	{"key": "137","productName": "Smart Phone","qtySold": 8,"total": 7752,"date": "2023/02/05 08:01:00 PM"
	},
	{"key": "138","productName": "Smart Phone","qtySold": 8,"total": 7336,"date": "2023/02/05 19:50:00 PM"
	},
	{"key": "139","productName": "Tablet","qtySold": 6,"total": 5622,"date": "2023/02/05 16:18:00 PM"
	},
	{"key": "140","productName": "Laptop","qtySold": 5,"total": 5000,"date": "2023/02/05 16:56:00 PM"
	},
	{"key": "141","productName": "Headphones","qtySold": 4,"total": 3712,"date": "2023/02/06 14:51:00 PM"
	},
	{"key": "142","productName": "Headphones","qtySold": 6,"total": 5838,"date": "2023/02/06 16:36:00 PM"
	},
	{"key": "143","productName": "Smart Phone","qtySold": 7,"total": 6559,"date": "2023/02/06 11:41:00 PM"
	},
	{"key": "144","productName": "Laptop","qtySold": 2,"total": 1964,"date": "2023/02/07 13:13:00 PM"
	},
	{"key": "145","productName": "Tablet","qtySold": 4,"total": 3728,"date": "2023/02/07 16:38:00 PM"
	},
	{"key": "146","productName": "Headphones","qtySold": 8,"total": 7864,"date": "2023/02/07 16:09:00 PM"
	},
	{"key": "147","productName": "Laptop","qtySold": 10,"total": 9630,"date": "2023/02/07 12:55:00 PM"
	},
	{"key": "148","productName": "Laptop","qtySold": 9,"total": 8883,"date": "2023/02/07 14:39:00 PM"
	},
	{"key": "149","productName": "Laptop","qtySold": 10,"total": 9540,"date": "2023/02/08 09:52:00 PM"
	},
	{"key": "150","productName": "Headphones","qtySold": 5,"total": 4565,"date": "2023/02/08 19:57:00 PM"
	},
	{"key": "151","productName": "Laptop","qtySold": 2,"total": 1924,"date": "2023/02/08 08:47:00 PM"
	},
	{"key": "152","productName": "Laptop","qtySold": 4,"total": 3996,"date": "2023/02/08 15:13:00 PM"
	},
	{"key": "153","productName": "Tablet","qtySold": 10,"total": 9240,"date": "2023/02/09 15:33:00 PM"
	},
	{"key": "154","productName": "Laptop","qtySold": 9,"total": 8577,"date": "2023/02/09 19:26:00 PM"
	},
	{"key": "155","productName": "Laptop","qtySold": 3,"total": 2952,"date": "2023/02/09 18:27:00 PM"
	},
	{"key": "156","productName": "Tablet","qtySold": 2,"total": 1832,"date": "2023/02/09 13:45:00 PM"
	},
	{"key": "157","productName": "Headphones","qtySold": 10,"total": 9760,"date": "2023/02/10 12:39:00 PM"
	},
	{"key": "158","productName": "Headphones","qtySold": 8,"total": 7840,"date": "2023/02/10 08:09:00 PM"
	},
	{"key": "159","productName": "Headphones","qtySold": 3,"total": 2853,"date": "2023/02/10 10:36:00 PM"
	},
	{"key": "160","productName": "Tablet","qtySold": 1,"total": 928,"date": "2023/02/11 16:12:00 PM"
	},
	{"key": "161","productName": "Smart Phone","qtySold": 6,"total": 5568,"date": "2023/02/11 09:48:00 PM"
	},
	{"key": "162","productName": "Laptop","qtySold": 2,"total": 1896,"date": "2023/02/11 14:59:00 PM"
	},
	{"key": "163","productName": "Headphones","qtySold": 8,"total": 7288,"date": "2023/02/11 19:57:00 PM"
	},
	{"key": "164","productName": "Laptop","qtySold": 2,"total": 1998,"date": "2023/02/12 11:15:00 PM"
	},
	{"key": "165","productName": "Smart Phone","qtySold": 7,"total": 6713,"date": "2023/02/12 12:45:00 PM"
	},
	{"key": "166","productName": "Tablet","qtySold": 4,"total": 3940,"date": "2023/02/12 09:05:00 PM"
	},
	{"key": "167","productName": "Smart Phone","qtySold": 3,"total": 2940,"date": "2023/02/13 17:57:00 PM"
	},
	{"key": "168","productName": "Smart Phone","qtySold": 2,"total": 1842,"date": "2023/02/13 17:17:00 PM"
	},
	{"key": "169","productName": "Headphones","qtySold": 4,"total": 3996,"date": "2023/02/13 11:08:00 PM"
	},
	{"key": "170","productName": "Laptop","qtySold": 7,"total": 6321,"date": "2023/02/13 10:36:00 PM"
	},
	{"key": "171","productName": "Headphones","qtySold": 10,"total": 9670,"date": "2023/02/14 17:56:00 PM"
	},
	{"key": "172","productName": "Laptop","qtySold": 9,"total": 8451,"date": "2023/02/14 20:50:00 PM"
	},
	{"key": "173","productName": "Laptop","qtySold": 2,"total": 1890,"date": "2023/02/14 19:42:00 PM"
	},
	{"key": "174","productName": "Headphones","qtySold": 10,"total": 9380,"date": "2023/02/14 19:58:00 PM"
	},
	{"key": "175","productName": "Headphones","qtySold": 1,"total": 902,"date": "2023/02/15 18:12:00 PM"
	},
	{"key": "176","productName": "Tablet","qtySold": 2,"total": 1872,"date": "2023/02/15 13:31:00 PM"
	},
	{"key": "177","productName": "Laptop","qtySold": 9,"total": 8955,"date": "2023/02/15 09:25:00 PM"
	},
	{"key": "178","productName": "Laptop","qtySold": 10,"total": 9240,"date": "2023/02/15 08:37:00 PM"
	},
	{"key": "179","productName": "Laptop","qtySold": 5,"total": 4940,"date": "2023/02/16 15:01:00 PM"
	},
	{"key": "180","productName": "Smart Phone","qtySold": 3,"total": 2760,"date": "2023/02/16 11:13:00 PM"
	},
	{"key": "181","productName": "Smart Phone","qtySold": 1,"total": 972,"date": "2023/02/16 11:56:00 PM"
	},
	{"key": "182","productName": "Smart Phone","qtySold": 10,"total": 9050,"date": "2023/02/16 11:44:00 PM"
	},
	{"key": "183","productName": "Headphones","qtySold": 2,"total": 1858,"date": "2023/02/17 20:33:00 PM"
	},
	{"key": "184","productName": "Tablet","qtySold": 9,"total": 8208,"date": "2023/02/17 13:03:00 PM"
	},
	{"key": "185","productName": "Smart Phone","qtySold": 2,"total": 1804,"date": "2023/02/17 12:13:00 PM"
	},
	{"key": "186","productName": "Headphones","qtySold": 5,"total": 4825,"date": "2023/02/17 12:03:00 PM"
	},
	{"key": "187","productName": "Headphones","qtySold": 1,"total": 955,"date": "2023/02/17 08:53:00 PM"
	},
	{"key": "188","productName": "Headphones","qtySold": 6,"total": 5628,"date": "2023/02/18 14:48:00 PM"
	},
	{"key": "189","productName": "Laptop","qtySold": 10,"total": 9380,"date": "2023/02/18 19:14:00 PM"
	},
	{"key": "190","productName": "Smart Phone","qtySold": 7,"total": 6377,"date": "2023/02/18 20:06:00 PM"
	},
	{"key": "191","productName": "Tablet","qtySold": 1,"total": 921,"date": "2023/02/19 09:19:00 PM"
	},
	{"key": "192","productName": "Headphones","qtySold": 1,"total": 902,"date": "2023/02/19 15:28:00 PM"
	},
	{"key": "193","productName": "Headphones","qtySold": 4,"total": 3732,"date": "2023/02/19 12:53:00 PM"
	},
	{"key": "194","productName": "Headphones","qtySold": 9,"total": 8244,"date": "2023/02/19 17:33:00 PM"
	},
	{"key": "195","productName": "Smart Phone","qtySold": 10,"total": 9340,"date": "2023/02/19 09:02:00 PM"
	},
	{"key": "196","productName": "Smart Phone","qtySold": 1,"total": 911,"date": "2023/02/20 09:46:00 PM"
	},
	{"key": "197","productName": "Tablet","qtySold": 3,"total": 2778,"date": "2023/02/20 19:38:00 PM"
	},
	{"key": "198","productName": "Smart Phone","qtySold": 5,"total": 4575,"date": "2023/02/20 15:14:00 PM"
	},
	{"key": "199","productName": "Laptop","qtySold": 3,"total": 2922,"date": "2023/02/20 18:08:00 PM"
	},
	{"key": "200","productName": "Headphones","qtySold": 6,"total": 5694,"date": "2023/02/21 14:44:00 PM"
	},
	{"key": "201","productName": "Smart Phone","qtySold": 9,"total": 8739,"date": "2023/02/21 10:43:00 PM"
	},
	{"key": "202","productName": "Tablet","qtySold": 4,"total": 3908,"date": "2023/02/21 12:33:00 PM"
	},
	{"key": "203","productName": "Headphones","qtySold": 6,"total": 5688,"date": "2023/02/22 18:37:00 PM"
	},
	{"key": "204","productName": "Laptop","qtySold": 9,"total": 8982,"date": "2023/02/22 19:56:00 PM"
	},
	{"key": "205","productName": "Smart Phone","qtySold": 1,"total": 968,"date": "2023/02/22 15:54:00 PM"
	},
	{"key": "206","productName": "Smart Phone","qtySold": 1,"total": 995,"date": "2023/02/22 10:38:00 PM"
	},
	{"key": "207","productName": "Laptop","qtySold": 7,"total": 6650,"date": "2023/02/23 15:26:00 PM"
	},
	{"key": "208","productName": "Tablet","qtySold": 9,"total": 8298,"date": "2023/02/23 20:10:00 PM"
	},
	{"key": "209","productName": "Tablet","qtySold": 7,"total": 6300,"date": "2023/02/23 17:44:00 PM"
	},
	{"key": "210","productName": "Headphones","qtySold": 3,"total": 2736,"date": "2023/02/24 11:51:00 PM"
	},
	{"key": "211","productName": "Headphones","qtySold": 8,"total": 7384,"date": "2023/02/24 09:10:00 PM"
	},
	{"key": "212","productName": "Smart Phone","qtySold": 3,"total": 2784,"date": "2023/02/24 08:44:00 PM"
	},
	{"key": "213","productName": "Laptop","qtySold": 2,"total": 1870,"date": "2023/02/24 11:58:00 PM"
	},
	{"key": "214","productName": "Smart Phone","qtySold": 5,"total": 4790,"date": "2023/02/24 09:31:00 PM"
	},
	{"key": "215","productName": "Headphones","qtySold": 7,"total": 6398,"date": "2023/02/25 09:08:00 PM"
	},
	{"key": "216","productName": "Tablet","qtySold": 4,"total": 3992,"date": "2023/02/25 10:55:00 PM"
	},
	{"key": "217","productName": "Smart Phone","qtySold": 1,"total": 946,"date": "2023/02/25 14:56:00 PM"
	},
	{"key": "218","productName": "Headphones","qtySold": 4,"total": 3928,"date": "2023/02/26 15:03:00 PM"
	},
	{"key": "219","productName": "Tablet","qtySold": 9,"total": 8334,"date": "2023/02/26 16:26:00 PM"
	},
	{"key": "220","productName": "Tablet","qtySold": 5,"total": 4570,"date": "2023/02/26 16:44:00 PM"
	},
	{"key": "221","productName": "Headphones","qtySold": 2,"total": 1960,"date": "2023/02/26 10:47:00 PM"
	},
	{"key": "222","productName": "Smart Phone","qtySold": 7,"total": 6881,"date": "2023/02/27 11:21:00 PM"
	},
	{"key": "223","productName": "Tablet","qtySold": 4,"total": 3856,"date": "2023/02/27 17:11:00 PM"
	},
	{"key": "224","productName": "Headphones","qtySold": 10,"total": 9420,"date": "2023/02/27 15:05:00 PM"
	},
	{"key": "225","productName": "Tablet","qtySold": 10,"total": 9900,"date": "2023/02/27 13:41:00 PM"
	},
	{"key": "226","productName": "Laptop","qtySold": 5,"total": 4965,"date": "2023/02/27 12:43:00 PM"
	},
	{"key": "227","productName": "Tablet","qtySold": 1,"total": 908,"date": "2023/02/28 13:35:00 PM"
	},
	{"key": "228","productName": "Smart Phone","qtySold": 1,"total": 963,"date": "2023/02/28 18:51:00 PM"
	},
	{"key": "229","productName": "Headphones","qtySold": 1,"total": 912,"date": "2023/02/28 18:23:00 PM"
	},
	{"key": "230","productName": "Laptop","qtySold": 7,"total": 6615,"date": "2023/02/28 14:53:00 PM"
	},
	{"key": "231","productName": "Smart Phone","qtySold": 3,"total": 2883,"date": "2023/03/01 20:24:00 PM"
	},
	{"key": "232","productName": "Tablet","qtySold": 2,"total": 1896,"date": "2023/03/01 09:19:00 PM"
	},
	{"key": "233","productName": "Headphones","qtySold": 9,"total": 8622,"date": "2023/03/01 09:51:00 PM"
	},
	{"key": "234","productName": "Headphones","qtySold": 1,"total": 927,"date": "2023/03/01 08:51:00 PM"
	},
	{"key": "235","productName": "Smart Phone","qtySold": 3,"total": 2799,"date": "2023/03/02 10:04:00 PM"
	},
	{"key": "236","productName": "Laptop","qtySold": 2,"total": 1928,"date": "2023/03/02 13:10:00 PM"
	},
	{"key": "237","productName": "Smart Phone","qtySold": 6,"total": 5418,"date": "2023/03/02 20:25:00 PM"
	},
	{"key": "238","productName": "Tablet","qtySold": 8,"total": 7272,"date": "2023/03/03 15:48:00 PM"
	},
	{"key": "239","productName": "Headphones","qtySold": 2,"total": 1878,"date": "2023/03/03 10:05:00 PM"
	},
	{"key": "240","productName": "Tablet","qtySold": 9,"total": 8631,"date": "2023/03/03 09:31:00 PM"
	},
	{"key": "241","productName": "Headphones","qtySold": 9,"total": 8721,"date": "2023/03/04 18:39:00 PM"
	},
	{"key": "242","productName": "Headphones","qtySold": 8,"total": 7240,"date": "2023/03/04 19:01:00 PM"
	},
	{"key": "243","productName": "Tablet","qtySold": 10,"total": 9730,"date": "2023/03/04 12:34:00 PM"
	},
	{"key": "244","productName": "Tablet","qtySold": 5,"total": 4995,"date": "2023/03/05 14:05:00 PM"
	},
	{"key": "245","productName": "Headphones","qtySold": 5,"total": 4520,"date": "2023/03/05 11:31:00 PM"
	},
	{"key": "246","productName": "Smart Phone","qtySold": 3,"total": 2853,"date": "2023/03/05 18:06:00 PM"
	},
	{"key": "247","productName": "Headphones","qtySold": 1,"total": 974,"date": "2023/03/05 17:13:00 PM"
	},
	{"key": "248","productName": "Headphones","qtySold": 4,"total": 3872,"date": "2023/03/06 09:12:00 PM"
	},
	{"key": "249","productName": "Headphones","qtySold": 1,"total": 950,"date": "2023/03/06 13:56:00 PM"
	},
	{"key": "250","productName": "Headphones","qtySold": 6,"total": 5772,"date": "2023/03/06 17:25:00 PM"
	},
	{"key": "251","productName": "Smart Phone","qtySold": 8,"total": 7280,"date": "2023/03/06 15:30:00 PM"
	},
	{"key": "252","productName": "Laptop","qtySold": 4,"total": 3912,"date": "2023/03/06 19:02:00 PM"
	},
	{"key": "253","productName": "Laptop","qtySold": 9,"total": 8145,"date": "2023/03/07 15:33:00 PM"
	},
	{"key": "254","productName": "Tablet","qtySold": 6,"total": 5748,"date": "2023/03/07 10:38:00 PM"
	},
	{"key": "255","productName": "Headphones","qtySold": 6,"total": 5718,"date": "2023/03/07 18:05:00 PM"
	},
	{"key": "256","productName": "Smart Phone","qtySold": 8,"total": 7312,"date": "2023/03/07 18:43:00 PM"
	},
	{"key": "257","productName": "Laptop","qtySold": 2,"total": 1880,"date": "2023/03/07 15:48:00 PM"
	},
	{"key": "258","productName": "Headphones","qtySold": 9,"total": 8793,"date": "2023/03/08 19:55:00 PM"
	},
	{"key": "259","productName": "Laptop","qtySold": 1,"total": 999,"date": "2023/03/08 14:42:00 PM"
	},
	{"key": "260","productName": "Smart Phone","qtySold": 10,"total": 9110,"date": "2023/03/08 08:19:00 PM"
	},
	{"key": "261","productName": "Laptop","qtySold": 7,"total": 6391,"date": "2023/03/08 15:56:00 PM"
	},
	{"key": "262","productName": "Laptop","qtySold": 3,"total": 2769,"date": "2023/03/08 19:09:00 PM"
	},
	{"key": "263","productName": "Tablet","qtySold": 1,"total": 954,"date": "2023/03/09 15:51:00 PM"
	},
	{"key": "264","productName": "Laptop","qtySold": 4,"total": 3724,"date": "2023/03/09 16:32:00 PM"
	},
	{"key": "265","productName": "Tablet","qtySold": 9,"total": 8838,"date": "2023/03/09 11:19:00 PM"
	},
	{"key": "266","productName": "Smart Phone","qtySold": 10,"total": 9540,"date": "2023/03/09 13:05:00 PM"
	},
	{"key": "267","productName": "Smart Phone","qtySold": 5,"total": 4840,"date": "2023/03/10 18:05:00 PM"
	},
	{"key": "268","productName": "Tablet","qtySold": 7,"total": 6972,"date": "2023/03/10 19:50:00 PM"
	},
	{"key": "269","productName": "Smart Phone","qtySold": 8,"total": 7792,"date": "2023/03/10 16:30:00 PM"
	},
	{"key": "270","productName": "Headphones","qtySold": 7,"total": 6482,"date": "2023/03/10 11:41:00 PM"
	},
	{"key": "271","productName": "Smart Phone","qtySold": 9,"total": 8316,"date": "2023/03/11 12:47:00 PM"
	},
	{"key": "272","productName": "Tablet","qtySold": 10,"total": 9870,"date": "2023/03/11 20:12:00 PM"
	},
	{"key": "273","productName": "Laptop","qtySold": 9,"total": 8379,"date": "2023/03/11 20:45:00 PM"
	},
	{"key": "274","productName": "Laptop","qtySold": 2,"total": 1824,"date": "2023/03/12 15:59:00 PM"
	},
	{"key": "275","productName": "Laptop","qtySold": 10,"total": 9390,"date": "2023/03/12 15:42:00 PM"
	},
	{"key": "276","productName": "Headphones","qtySold": 1,"total": 991,"date": "2023/03/12 14:38:00 PM"
	},
	{"key": "277","productName": "Smart Phone","qtySold": 8,"total": 7512,"date": "2023/03/13 09:04:00 PM"
	},
	{"key": "278","productName": "Smart Phone","qtySold": 5,"total": 4675,"date": "2023/03/13 09:41:00 PM"
	},
	{"key": "279","productName": "Laptop","qtySold": 2,"total": 1894,"date": "2023/03/13 15:27:00 PM"
	},
	{"key": "280","productName": "Laptop","qtySold": 8,"total": 7592,"date": "2023/03/13 15:43:00 PM"
	},
	{"key": "281","productName": "Laptop","qtySold": 1,"total": 900,"date": "2023/03/14 16:46:00 PM"
	},
	{"key": "282","productName": "Laptop","qtySold": 4,"total": 3664,"date": "2023/03/14 15:44:00 PM"
	},
	{"key": "283","productName": "Tablet","qtySold": 8,"total": 7576,"date": "2023/03/14 20:12:00 PM"
	},
	{"key": "284","productName": "Smart Phone","qtySold": 7,"total": 6314,"date": "2023/03/14 14:03:00 PM"
	},
	{"key": "285","productName": "Headphones","qtySold": 8,"total": 7912,"date": "2023/03/15 16:05:00 PM"
	},
	{"key": "286","productName": "Headphones","qtySold": 1,"total": 921,"date": "2023/03/15 17:48:00 PM"
	},
	{"key": "287","productName": "Tablet","qtySold": 9,"total": 8865,"date": "2023/03/15 14:23:00 PM"
	},
	{"key": "288","productName": "Smart Phone","qtySold": 8,"total": 7880,"date": "2023/03/15 18:17:00 PM"
	},
	{"key": "289","productName": "Tablet","qtySold": 4,"total": 3736,"date": "2023/03/15 20:42:00 PM"
	},
	{"key": "290","productName": "Headphones","qtySold": 10,"total": 9340,"date": "2023/03/16 08:53:00 PM"
	},
	{"key": "291","productName": "Tablet","qtySold": 4,"total": 3604,"date": "2023/03/16 15:02:00 PM"
	},
	{"key": "292","productName": "Headphones","qtySold": 1,"total": 933,"date": "2023/03/16 14:16:00 PM"
	},
	{"key": "293","productName": "Smart Phone","qtySold": 9,"total": 8631,"date": "2023/03/16 11:09:00 PM"
	},
	{"key": "294","productName": "Headphones","qtySold": 4,"total": 3724,"date": "2023/03/16 16:14:00 PM"
	},
	{"key": "295","productName": "Tablet","qtySold": 6,"total": 5478,"date": "2023/03/17 11:17:00 PM"
	},
	{"key": "296","productName": "Headphones","qtySold": 5,"total": 4775,"date": "2023/03/17 16:39:00 PM"
	},
	{"key": "297","productName": "Smart Phone","qtySold": 10,"total": 9830,"date": "2023/03/17 16:57:00 PM"
	},
	{"key": "298","productName": "Laptop","qtySold": 5,"total": 4760,"date": "2023/03/17 17:58:00 PM"
	},
	{"key": "299","productName": "Tablet","qtySold": 5,"total": 4560,"date": "2023/03/18 20:57:00 PM"
	},
	{"key": "300","productName": "Headphones","qtySold": 2,"total": 1880,"date": "2023/03/18 11:42:00 PM"
	},
	{"key": "301","productName": "Tablet","qtySold": 7,"total": 6944,"date": "2023/03/18 13:34:00 PM"
	},
	{"key": "302","productName": "Headphones","qtySold": 2,"total": 1872,"date": "2023/03/18 19:47:00 PM"
	},
	{"key": "303","productName": "Tablet","qtySold": 4,"total": 3684,"date": "2023/03/18 08:27:00 PM"
	},
	{"key": "304","productName": "Headphones","qtySold": 7,"total": 6594,"date": "2023/03/19 15:08:00 PM"
	},
	{"key": "305","productName": "Tablet","qtySold": 8,"total": 7392,"date": "2023/03/19 12:21:00 PM"
	},
	{"key": "306","productName": "Smart Phone","qtySold": 6,"total": 5736,"date": "2023/03/19 08:11:00 PM"
	},
	{"key": "307","productName": "Laptop","qtySold": 6,"total": 5694,"date": "2023/03/19 17:40:00 PM"
	},
	{"key": "308","productName": "Tablet","qtySold": 10,"total": 9960,"date": "2023/03/20 11:49:00 PM"
	},
	{"key": "309","productName": "Laptop","qtySold": 5,"total": 4600,"date": "2023/03/20 12:31:00 PM"
	},
	{"key": "310","productName": "Laptop","qtySold": 7,"total": 6349,"date": "2023/03/20 16:24:00 PM"
	},
	{"key": "311","productName": "Laptop","qtySold": 4,"total": 3836,"date": "2023/03/21 09:09:00 PM"
	},
	{"key": "312","productName": "Tablet","qtySold": 8,"total": 7896,"date": "2023/03/21 20:14:00 PM"
	},
	{"key": "313","productName": "Laptop","qtySold": 1,"total": 930,"date": "2023/03/21 17:21:00 PM"
	},
	{"key": "314","productName": "Laptop","qtySold": 9,"total": 8280,"date": "2023/03/21 19:39:00 PM"
	},
	{"key": "315","productName": "Smart Phone","qtySold": 5,"total": 4955,"date": "2023/03/21 17:41:00 PM"
	},
	{"key": "316","productName": "Laptop","qtySold": 8,"total": 7624,"date": "2023/03/22 08:42:00 PM"
	},
	{"key": "317","productName": "Tablet","qtySold": 10,"total": 9080,"date": "2023/03/22 18:14:00 PM"
	},
	{"key": "318","productName": "Laptop","qtySold": 10,"total": 9340,"date": "2023/03/22 19:13:00 PM"
	},
	{"key": "319","productName": "Laptop","qtySold": 1,"total": 913,"date": "2023/03/22 13:11:00 PM"
	},
	{"key": "320","productName": "Tablet","qtySold": 1,"total": 989,"date": "2023/03/23 16:57:00 PM"
	},
	{"key": "321","productName": "Laptop","qtySold": 2,"total": 1952,"date": "2023/03/23 18:14:00 PM"
	},
	{"key": "322","productName": "Laptop","qtySold": 10,"total": 9180,"date": "2023/03/23 11:31:00 PM"
	},
	{"key": "323","productName": "Laptop","qtySold": 8,"total": 7472,"date": "2023/03/24 15:16:00 PM"
	},
	{"key": "324","productName": "Tablet","qtySold": 6,"total": 5604,"date": "2023/03/24 09:02:00 PM"
	},
	{"key": "325","productName": "Tablet","qtySold": 1,"total": 911,"date": "2023/03/24 13:48:00 PM"
	},
	{"key": "326","productName": "Smart Phone","qtySold": 7,"total": 6790,"date": "2023/03/25 20:11:00 PM"
	},
	{"key": "327","productName": "Smart Phone","qtySold": 2,"total": 1976,"date": "2023/03/25 19:04:00 PM"
	},
	{"key": "328","productName": "Headphones","qtySold": 4,"total": 3748,"date": "2023/03/25 16:12:00 PM"
	},
	{"key": "329","productName": "Headphones","qtySold": 9,"total": 8343,"date": "2023/03/25 12:56:00 PM"
	},
	{"key": "330","productName": "Laptop","qtySold": 9,"total": 8685,"date": "2023/03/26 16:35:00 PM"
	},
	{"key": "331","productName": "Tablet","qtySold": 8,"total": 7552,"date": "2023/03/26 17:34:00 PM"
	},
	{"key": "332","productName": "Headphones","qtySold": 9,"total": 8586,"date": "2023/03/26 19:19:00 PM"
	},
	{"key": "333","productName": "Smart Phone","qtySold": 3,"total": 2760,"date": "2023/03/27 19:38:00 PM"
	},
	{"key": "334","productName": "Tablet","qtySold": 9,"total": 8982,"date": "2023/03/27 09:54:00 PM"
	},
	{"key": "335","productName": "Laptop","qtySold": 8,"total": 7856,"date": "2023/03/27 18:49:00 PM"
	},
	{"key": "336","productName": "Tablet","qtySold": 5,"total": 4680,"date": "2023/03/27 16:14:00 PM"
	},
	{"key": "337","productName": "Smart Phone","qtySold": 1,"total": 973,"date": "2023/03/27 11:25:00 PM"
	},
	{"key": "338","productName": "Tablet","qtySold": 1,"total": 905,"date": "2023/03/28 13:17:00 PM"
	},
	{"key": "339","productName": "Headphones","qtySold": 4,"total": 3828,"date": "2023/03/28 12:42:00 PM"
	},
	{"key": "340","productName": "Tablet","qtySold": 3,"total": 2970,"date": "2023/03/28 19:32:00 PM"
	},
	{"key": "341","productName": "Smart Phone","qtySold": 5,"total": 4515,"date": "2023/03/28 11:07:00 PM"
	},
	{"key": "342","productName": "Headphones","qtySold": 6,"total": 5832,"date": "2023/03/28 20:28:00 PM"
	},
	{"key": "343","productName": "Tablet","qtySold": 3,"total": 2706,"date": "2023/03/29 19:17:00 PM"
	},
	{"key": "344","productName": "Headphones","qtySold": 4,"total": 3852,"date": "2023/03/29 10:16:00 PM"
	},
	{"key": "345","productName": "Smart Phone","qtySold": 10,"total": 9970,"date": "2023/03/29 16:33:00 PM"
	},
	{"key": "346","productName": "Laptop","qtySold": 4,"total": 3792,"date": "2023/03/29 18:03:00 PM"
	},
	{"key": "347","productName": "Laptop","qtySold": 8,"total": 7968,"date": "2023/03/29 08:54:00 PM"
	},
	{"key": "348","productName": "Tablet","qtySold": 10,"total": 9250,"date": "2023/03/30 13:09:00 PM"
	},
	{"key": "349","productName": "Laptop","qtySold": 2,"total": 1924,"date": "2023/03/30 13:17:00 PM"
	},
	{"key": "350","productName": "Laptop","qtySold": 3,"total": 2724,"date": "2023/03/30 20:44:00 PM"
	},
	{"key": "351","productName": "Tablet","qtySold": 1,"total": 936,"date": "2023/03/30 15:30:00 PM"
	},
	{"key": "352","productName": "Headphones","qtySold": 1,"total": 953,"date": "2023/03/31 11:56:00 PM"
	},
	{"key": "353","productName": "Smart Phone","qtySold": 9,"total": 8766,"date": "2023/03/31 12:25:00 PM"
	},
	{"key": "354","productName": "Laptop","qtySold": 9,"total": 8307,"date": "2023/03/31 11:45:00 PM"
	},
	{"key": "355","productName": "Headphones","qtySold": 1,"total": 951,"date": "2023/03/31 20:23:00 PM"
	},
	{"key": "356","productName": "Headphones","qtySold": 4,"total": 3680,"date": "2023/03/31 19:15:00 PM"
	},
	{"key": "357","productName": "Tablet","qtySold": 2,"total": 1892,"date": "2023/04/01 12:25:00 PM"
	},
	{"key": "358","productName": "Smart Phone","qtySold": 1,"total": 931,"date": "2023/04/01 08:59:00 PM"
	},
	{"key": "359","productName": "Laptop","qtySold": 7,"total": 6524,"date": "2023/04/01 19:34:00 PM"
	},
	{"key": "360","productName": "Smart Phone","qtySold": 6,"total": 5844,"date": "2023/04/01 13:22:00 PM"
	},
	{"key": "361","productName": "Smart Phone","qtySold": 8,"total": 7544,"date": "2023/04/02 16:13:00 PM"
	},
	{"key": "362","productName": "Headphones","qtySold": 8,"total": 7952,"date": "2023/04/02 18:00:00 PM"
	},
	{"key": "363","productName": "Smart Phone","qtySold": 7,"total": 6482,"date": "2023/04/02 15:19:00 PM"
	},
	{"key": "364","productName": "Laptop","qtySold": 7,"total": 6972,"date": "2023/04/02 15:52:00 PM"
	},
	{"key": "365","productName": "Tablet","qtySold": 1,"total": 929,"date": "2023/04/03 19:25:00 PM"
	},
	{"key": "366","productName": "Laptop","qtySold": 7,"total": 6377,"date": "2023/04/03 18:11:00 PM"
	},
	{"key": "367","productName": "Smart Phone","qtySold": 5,"total": 4725,"date": "2023/04/03 08:10:00 PM"
	},
	{"key": "368","productName": "Laptop","qtySold": 6,"total": 5574,"date": "2023/04/04 09:44:00 PM"
	},
	{"key": "369","productName": "Laptop","qtySold": 6,"total": 5580,"date": "2023/04/04 08:15:00 PM"
	},
	{"key": "370","productName": "Tablet","qtySold": 8,"total": 7880,"date": "2023/04/04 15:14:00 PM"
	},
	{"key": "371","productName": "Tablet","qtySold": 10,"total": 9940,"date": "2023/04/04 19:34:00 PM"
	},
	{"key": "372","productName": "Tablet","qtySold": 3,"total": 2853,"date": "2023/04/04 14:36:00 PM"
	},
	{"key": "373","productName": "Smart Phone","qtySold": 4,"total": 3812,"date": "2023/04/05 08:51:00 PM"
	},
	{"key": "374","productName": "Smart Phone","qtySold": 6,"total": 5436,"date": "2023/04/05 19:00:00 PM"
	},
	{"key": "375","productName": "Tablet","qtySold": 5,"total": 4710,"date": "2023/04/05 13:43:00 PM"
	},
	{"key": "376","productName": "Headphones","qtySold": 8,"total": 7752,"date": "2023/04/05 20:03:00 PM"
	},
	{"key": "377","productName": "Laptop","qtySold": 2,"total": 1912,"date": "2023/04/05 11:36:00 PM"
	},
	{"key": "378","productName": "Tablet","qtySold": 10,"total": 9040,"date": "2023/04/06 17:59:00 PM"
	},
	{"key": "379","productName": "Smart Phone","qtySold": 7,"total": 6811,"date": "2023/04/06 13:19:00 PM"
	},
	{"key": "380","productName": "Laptop","qtySold": 9,"total": 8694,"date": "2023/04/06 19:55:00 PM"
	},
	{"key": "381","productName": "Laptop","qtySold": 9,"total": 8172,"date": "2023/04/06 15:46:00 PM"
	},
	{"key": "382","productName": "Headphones","qtySold": 10,"total": 9610,"date": "2023/04/07 16:50:00 PM"
	},
	{"key": "383","productName": "Tablet","qtySold": 6,"total": 5934,"date": "2023/04/07 08:52:00 PM"
	},
	{"key": "384","productName": "Tablet","qtySold": 9,"total": 8370,"date": "2023/04/07 17:24:00 PM"
	},
	{"key": "385","productName": "Headphones","qtySold": 2,"total": 1832,"date": "2023/04/08 15:14:00 PM"
	},
	{"key": "386","productName": "Smart Phone","qtySold": 2,"total": 2000,"date": "2023/04/08 17:33:00 PM"
	},
	{"key": "387","productName": "Tablet","qtySold": 7,"total": 6811,"date": "2023/04/08 08:18:00 PM"
	},
	{"key": "388","productName": "Headphones","qtySold": 2,"total": 1930,"date": "2023/04/08 13:23:00 PM"
	},
	{"key": "389","productName": "Smart Phone","qtySold": 3,"total": 2706,"date": "2023/04/09 17:23:00 PM"
	},
	{"key": "390","productName": "Smart Phone","qtySold": 2,"total": 1852,"date": "2023/04/09 11:51:00 PM"
	},
	{"key": "391","productName": "Headphones","qtySold": 1,"total": 983,"date": "2023/04/09 13:37:00 PM"
	},
	{"key": "392","productName": "Smart Phone","qtySold": 8,"total": 7904,"date": "2023/04/09 11:00:00 PM"
	},
	{"key": "393","productName": "Tablet","qtySold": 4,"total": 3840,"date": "2023/04/09 12:58:00 PM"
	},
	{"key": "394","productName": "Laptop","qtySold": 6,"total": 5538,"date": "2023/04/10 20:02:00 PM"
	},
	{"key": "395","productName": "Tablet","qtySold": 5,"total": 4965,"date": "2023/04/10 19:38:00 PM"
	},
	{"key": "396","productName": "Smart Phone","qtySold": 2,"total": 1866,"date": "2023/04/10 10:53:00 PM"
	},
	{"key": "397","productName": "Headphones","qtySold": 5,"total": 4990,"date": "2023/04/10 08:54:00 PM"
	},
	{"key": "398","productName": "Smart Phone","qtySold": 5,"total": 4740,"date": "2023/04/11 20:29:00 PM"
	},
	{"key": "399","productName": "Tablet","qtySold": 3,"total": 2823,"date": "2023/04/11 18:13:00 PM"
	},
	{"key": "400","productName": "Tablet","qtySold": 1,"total": 929,"date": "2023/04/11 10:15:00 PM"
	},
	{"key": "401","productName": "Headphones","qtySold": 10,"total": 9570,"date": "2023/04/12 11:21:00 PM"
	},
	{"key": "402","productName": "Headphones","qtySold": 10,"total": 9220,"date": "2023/04/12 18:46:00 PM"
	},
	{"key": "403","productName": "Tablet","qtySold": 1,"total": 989,"date": "2023/04/12 10:17:00 PM"
	},
	{"key": "404","productName": "Tablet","qtySold": 9,"total": 8352,"date": "2023/04/12 14:17:00 PM"
	},
	{"key": "405","productName": "Headphones","qtySold": 6,"total": 5850,"date": "2023/04/13 17:43:00 PM"
	},
	{"key": "406","productName": "Tablet","qtySold": 5,"total": 4520,"date": "2023/04/13 15:55:00 PM"
	},
	{"key": "407","productName": "Tablet","qtySold": 8,"total": 7672,"date": "2023/04/13 13:01:00 PM"
	},
	{"key": "408","productName": "Headphones","qtySold": 5,"total": 4950,"date": "2023/04/13 15:09:00 PM"
	},
	{"key": "409","productName": "Headphones","qtySold": 6,"total": 5430,"date": "2023/04/13 15:27:00 PM"
	},
	{"key": "410","productName": "Smart Phone","qtySold": 2,"total": 1968,"date": "2023/04/14 19:20:00 PM"
	},
	{"key": "411","productName": "Smart Phone","qtySold": 10,"total": 9580,"date": "2023/04/14 09:32:00 PM"
	},
	{"key": "412","productName": "Tablet","qtySold": 7,"total": 6755,"date": "2023/04/14 08:10:00 PM"
	},
	{"key": "413","productName": "Tablet","qtySold": 2,"total": 1832,"date": "2023/04/14 16:46:00 PM"
	},
	{"key": "414","productName": "Tablet","qtySold": 7,"total": 6783,"date": "2023/04/15 15:11:00 PM"
	},
	{"key": "415","productName": "Smart Phone","qtySold": 9,"total": 8937,"date": "2023/04/15 12:39:00 PM"
	},
	{"key": "416","productName": "Smart Phone","qtySold": 2,"total": 1846,"date": "2023/04/15 14:38:00 PM"
	},
	{"key": "417","productName": "Smart Phone","qtySold": 4,"total": 3600,"date": "2023/04/15 08:51:00 PM"
	},
	{"key": "418","productName": "Smart Phone","qtySold": 9,"total": 8541,"date": "2023/04/15 11:01:00 PM"
	},
	{"key": "419","productName": "Laptop","qtySold": 10,"total": 9860,"date": "2023/04/16 11:17:00 PM"
	},
	{"key": "420","productName": "Smart Phone","qtySold": 7,"total": 6321,"date": "2023/04/16 10:02:00 PM"
	},
	{"key": "421","productName": "Laptop","qtySold": 4,"total": 3684,"date": "2023/04/16 08:49:00 PM"
	},
	{"key": "422","productName": "Tablet","qtySold": 9,"total": 8883,"date": "2023/04/16 19:35:00 PM"
	},
	{"key": "423","productName": "Smart Phone","qtySold": 6,"total": 5430,"date": "2023/04/16 10:11:00 PM"
	},
	{"key": "424","productName": "Tablet","qtySold": 7,"total": 6328,"date": "2023/04/17 12:33:00 PM"
	},
	{"key": "425","productName": "Tablet","qtySold": 6,"total": 5994,"date": "2023/04/17 11:05:00 PM"
	},
	{"key": "426","productName": "Smart Phone","qtySold": 9,"total": 8874,"date": "2023/04/17 14:37:00 PM"
	},
	{"key": "427","productName": "Tablet","qtySold": 3,"total": 2937,"date": "2023/04/17 15:36:00 PM"
	},
	{"key": "428","productName": "Tablet","qtySold": 10,"total": 9230,"date": "2023/04/18 14:20:00 PM"
	},
	{"key": "429","productName": "Tablet","qtySold": 7,"total": 6783,"date": "2023/04/18 19:17:00 PM"
	},
	{"key": "430","productName": "Smart Phone","qtySold": 8,"total": 7904,"date": "2023/04/18 08:42:00 PM"
	},
	{"key": "431","productName": "Tablet","qtySold": 10,"total": 9480,"date": "2023/04/18 12:50:00 PM"
	},
	{"key": "432","productName": "Tablet","qtySold": 9,"total": 8433,"date": "2023/04/18 18:00:00 PM"
	},
	{"key": "433","productName": "Headphones","qtySold": 10,"total": 9470,"date": "2023/04/19 13:15:00 PM"
	},
	{"key": "434","productName": "Laptop","qtySold": 9,"total": 8865,"date": "2023/04/19 18:14:00 PM"
	},
	{"key": "435","productName": "Tablet","qtySold": 6,"total": 5862,"date": "2023/04/19 09:13:00 PM"
	},
	{"key": "436","productName": "Tablet","qtySold": 6,"total": 5556,"date": "2023/04/19 16:32:00 PM"
	},
	{"key": "437","productName": "Headphones","qtySold": 2,"total": 1802,"date": "2023/04/20 14:48:00 PM"
	},
	{"key": "438","productName": "Laptop","qtySold": 10,"total": 9320,"date": "2023/04/20 15:42:00 PM"
	},
	{"key": "439","productName": "Smart Phone","qtySold": 6,"total": 5454,"date": "2023/04/20 19:57:00 PM"
	},
	{"key": "440","productName": "Smart Phone","qtySold": 2,"total": 1928,"date": "2023/04/20 15:47:00 PM"
	},
	{"key": "441","productName": "Tablet","qtySold": 5,"total": 4620,"date": "2023/04/20 11:01:00 PM"
	},
	{"key": "442","productName": "Smart Phone","qtySold": 1,"total": 991,"date": "2023/04/21 11:13:00 PM"
	},
	{"key": "443","productName": "Laptop","qtySold": 3,"total": 2934,"date": "2023/04/21 11:52:00 PM"
	},
	{"key": "444","productName": "Smart Phone","qtySold": 10,"total": 9360,"date": "2023/04/21 10:22:00 PM"
	},
	{"key": "445","productName": "Headphones","qtySold": 2,"total": 1854,"date": "2023/04/22 13:36:00 PM"
	},
	{"key": "446","productName": "Tablet","qtySold": 4,"total": 3892,"date": "2023/04/22 12:32:00 PM"
	},
	{"key": "447","productName": "Laptop","qtySold": 9,"total": 8757,"date": "2023/04/22 15:17:00 PM"
	},
	{"key": "448","productName": "Laptop","qtySold": 6,"total": 5778,"date": "2023/04/22 17:25:00 PM"
	},
	{"key": "449","productName": "Headphones","qtySold": 1,"total": 973,"date": "2023/04/23 08:40:00 PM"
	},
	{"key": "450","productName": "Laptop","qtySold": 2,"total": 1830,"date": "2023/04/23 16:42:00 PM"
	},
	{"key": "451","productName": "Headphones","qtySold": 10,"total": 9270,"date": "2023/04/23 11:49:00 PM"
	},
	{"key": "452","productName": "Headphones","qtySold": 2,"total": 1976,"date": "2023/04/23 19:15:00 PM"
	},
	{"key": "453","productName": "Headphones","qtySold": 4,"total": 3996,"date": "2023/04/23 11:10:00 PM"
	},
	{"key": "454","productName": "Smart Phone","qtySold": 7,"total": 6461,"date": "2023/04/24 11:00:00 PM"
	},
	{"key": "455","productName": "Headphones","qtySold": 5,"total": 5000,"date": "2023/04/24 13:33:00 PM"
	},
	{"key": "456","productName": "Tablet","qtySold": 8,"total": 7288,"date": "2023/04/24 16:35:00 PM"
	},
	{"key": "457","productName": "Smart Phone","qtySold": 5,"total": 4820,"date": "2023/04/24 18:19:00 PM"
	},
	{"key": "458","productName": "Smart Phone","qtySold": 9,"total": 9000,"date": "2023/04/24 13:34:00 PM"
	},
	{"key": "459","productName": "Headphones","qtySold": 3,"total": 2901,"date": "2023/04/25 18:45:00 PM"
	},
	{"key": "460","productName": "Smart Phone","qtySold": 1,"total": 910,"date": "2023/04/25 15:12:00 PM"
	},
	{"key": "461","productName": "Smart Phone","qtySold": 9,"total": 8280,"date": "2023/04/25 18:26:00 PM"
	},
	{"key": "462","productName": "Smart Phone","qtySold": 1,"total": 932,"date": "2023/04/25 18:50:00 PM"
	},
	{"key": "463","productName": "Headphones","qtySold": 5,"total": 4540,"date": "2023/04/26 17:35:00 PM"
	},
	{"key": "464","productName": "Smart Phone","qtySold": 4,"total": 3932,"date": "2023/04/26 17:04:00 PM"
	},
	{"key": "465","productName": "Laptop","qtySold": 3,"total": 2736,"date": "2023/04/26 13:36:00 PM"
	},
	{"key": "466","productName": "Smart Phone","qtySold": 6,"total": 5718,"date": "2023/04/26 11:49:00 PM"
	},
	{"key": "467","productName": "Smart Phone","qtySold": 7,"total": 6412,"date": "2023/04/27 10:11:00 PM"
	},
	{"key": "468","productName": "Smart Phone","qtySold": 4,"total": 3920,"date": "2023/04/27 13:44:00 PM"
	},
	{"key": "469","productName": "Headphones","qtySold": 4,"total": 3940,"date": "2023/04/27 12:46:00 PM"
	},
	{"key": "470","productName": "Tablet","qtySold": 6,"total": 5616,"date": "2023/04/27 14:57:00 PM"
	},
	{"key": "471","productName": "Laptop","qtySold": 8,"total": 7792,"date": "2023/04/27 11:53:00 PM"
	},
	{"key": "472","productName": "Tablet","qtySold": 9,"total": 8469,"date": "2023/04/28 14:20:00 PM"
	},
	{"key": "473","productName": "Smart Phone","qtySold": 2,"total": 1836,"date": "2023/04/28 11:41:00 PM"
	},
	{"key": "474","productName": "Smart Phone","qtySold": 7,"total": 6573,"date": "2023/04/28 10:12:00 PM"
	},
	{"key": "475","productName": "Headphones","qtySold": 5,"total": 4720,"date": "2023/04/29 09:49:00 PM"
	},
	{"key": "476","productName": "Smart Phone","qtySold": 9,"total": 8514,"date": "2023/04/29 12:58:00 PM"
	},
	{"key": "477","productName": "Laptop","qtySold": 8,"total": 7384,"date": "2023/04/29 20:39:00 PM"
	},
	{"key": "478","productName": "Smart Phone","qtySold": 3,"total": 2703,"date": "2023/04/29 13:02:00 PM"
	},
	{"key": "479","productName": "Tablet","qtySold": 2,"total": 1930,"date": "2023/04/29 14:44:00 PM"
	},
	{"key": "480","productName": "Headphones","qtySold": 8,"total": 7840,"date": "2023/04/30 15:15:00 PM"
	},
	{"key": "481","productName": "Laptop","qtySold": 1,"total": 973,"date": "2023/04/30 20:12:00 PM"
	},
	{"key": "482","productName": "Smart Phone","qtySold": 3,"total": 2733,"date": "2023/04/30 11:11:00 PM"
	},
	{"key": "483","productName": "Laptop","qtySold": 8,"total": 7472,"date": "2023/05/01 09:25:00 PM"
	},
	{"key": "484","productName": "Smart Phone","qtySold": 2,"total": 1896,"date": "2023/05/01 18:47:00 PM"
	},
	{"key": "485","productName": "Tablet","qtySold": 2,"total": 1924,"date": "2023/05/01 12:57:00 PM"
	},
	{"key": "486","productName": "Smart Phone","qtySold": 7,"total": 6818,"date": "2023/05/01 09:49:00 PM"
	},
	{"key": "487","productName": "Tablet","qtySold": 7,"total": 6923,"date": "2023/05/01 13:05:00 PM"
	},
	{"key": "488","productName": "Laptop","qtySold": 6,"total": 5814,"date": "2023/05/02 08:37:00 PM"
	},
	{"key": "489","productName": "Laptop","qtySold": 10,"total": 9250,"date": "2023/05/02 19:55:00 PM"
	},
	{"key": "490","productName": "Tablet","qtySold": 5,"total": 4815,"date": "2023/05/02 15:51:00 PM"
	},
	{"key": "491","productName": "Tablet","qtySold": 7,"total": 6517,"date": "2023/05/02 11:44:00 PM"
	},
	{"key": "492","productName": "Tablet","qtySold": 9,"total": 8892,"date": "2023/05/03 16:16:00 PM"
	},
	{"key": "493","productName": "Laptop","qtySold": 6,"total": 5652,"date": "2023/05/03 12:28:00 PM"
	},
	{"key": "494","productName": "Tablet","qtySold": 10,"total": 9180,"date": "2023/05/03 17:05:00 PM"
	},
	{"key": "495","productName": "Headphones","qtySold": 3,"total": 2985,"date": "2023/05/03 20:30:00 PM"
	},
	{"key": "496","productName": "Smart Phone","qtySold": 5,"total": 4600,"date": "2023/05/03 20:36:00 PM"
	},
	{"key": "497","productName": "Tablet","qtySold": 9,"total": 8451,"date": "2023/05/04 13:12:00 PM"
	},
	{"key": "498","productName": "Laptop","qtySold": 2,"total": 1918,"date": "2023/05/04 13:07:00 PM"
	},
	{"key": "499","productName": "Headphones","qtySold": 10,"total": 10000,"date": "2023/05/04 14:56:00 PM"
	},
	{"key": "500","productName": "Laptop","qtySold": 6,"total": 5526,"date": "2023/05/05 20:16:00 PM"
	},
	{"key": "501","productName": "Smart Phone","qtySold": 2,"total": 1976,"date": "2023/05/05 11:35:00 PM"
	},
	{"key": "502","productName": "Tablet","qtySold": 6,"total": 5622,"date": "2023/05/05 10:53:00 PM"
	},
	{"key": "503","productName": "Laptop","qtySold": 9,"total": 8577,"date": "2023/05/05 12:45:00 PM"
	},
	{"key": "504","productName": "Laptop","qtySold": 6,"total": 5700,"date": "2023/05/06 12:05:00 PM"
	},
	{"key": "505","productName": "Tablet","qtySold": 2,"total": 1870,"date": "2023/05/06 18:02:00 PM"
	},
	{"key": "506","productName": "Tablet","qtySold": 5,"total": 4935,"date": "2023/05/06 12:27:00 PM"
	},
	{"key": "507","productName": "Smart Phone","qtySold": 7,"total": 6328,"date": "2023/05/06 08:52:00 PM"
	},
	{"key": "508","productName": "Headphones","qtySold": 2,"total": 1860,"date": "2023/05/06 19:32:00 PM"
	},
	{"key": "509","productName": "Tablet","qtySold": 1,"total": 908,"date": "2023/05/07 12:35:00 PM"
	},
	{"key": "510","productName": "Tablet","qtySold": 10,"total": 9050,"date": "2023/05/07 08:16:00 PM"
	},
	{"key": "511","productName": "Smart Phone","qtySold": 2,"total": 1804,"date": "2023/05/07 20:42:00 PM"
	},
	{"key": "512","productName": "Tablet","qtySold": 3,"total": 2976,"date": "2023/05/08 20:57:00 PM"
	},
	{"key": "513","productName": "Laptop","qtySold": 10,"total": 9250,"date": "2023/05/08 17:14:00 PM"
	},
	{"key": "514","productName": "Smart Phone","qtySold": 2,"total": 1816,"date": "2023/05/08 14:29:00 PM"
	},
	{"key": "515","productName": "Laptop","qtySold": 3,"total": 2928,"date": "2023/05/08 20:23:00 PM"
	},
	{"key": "516","productName": "Laptop","qtySold": 7,"total": 6545,"date": "2023/05/09 10:12:00 PM"
	},
	{"key": "517","productName": "Smart Phone","qtySold": 7,"total": 6671,"date": "2023/05/09 14:54:00 PM"
	},
	{"key": "518","productName": "Headphones","qtySold": 9,"total": 8469,"date": "2023/05/09 15:10:00 PM"
	},
	{"key": "519","productName": "Tablet","qtySold": 7,"total": 6517,"date": "2023/05/09 12:01:00 PM"
	},
	{"key": "520","productName": "Smart Phone","qtySold": 7,"total": 6909,"date": "2023/05/10 11:36:00 PM"
	},
	{"key": "521","productName": "Laptop","qtySold": 1,"total": 936,"date": "2023/05/10 09:39:00 PM"
	},
	{"key": "522","productName": "Smart Phone","qtySold": 7,"total": 6349,"date": "2023/05/10 14:57:00 PM"
	},
	{"key": "523","productName": "Laptop","qtySold": 1,"total": 983,"date": "2023/05/11 09:52:00 PM"
	},
	{"key": "524","productName": "Tablet","qtySold": 3,"total": 2898,"date": "2023/05/11 16:06:00 PM"
	},
	{"key": "525","productName": "Headphones","qtySold": 7,"total": 6874,"date": "2023/05/11 18:56:00 PM"
	},
	{"key": "526","productName": "Laptop","qtySold": 2,"total": 1968,"date": "2023/05/12 18:33:00 PM"
	},
	{"key": "527","productName": "Smart Phone","qtySold": 10,"total": 9530,"date": "2023/05/12 14:32:00 PM"
	},
	{"key": "528","productName": "Laptop","qtySold": 1,"total": 944,"date": "2023/05/12 16:40:00 PM"
	},
	{"key": "529","productName": "Smart Phone","qtySold": 5,"total": 4560,"date": "2023/05/12 12:04:00 PM"
	},
	{"key": "530","productName": "Tablet","qtySold": 7,"total": 6839,"date": "2023/05/13 11:22:00 PM"
	},
	{"key": "531","productName": "Laptop","qtySold": 6,"total": 5850,"date": "2023/05/13 08:18:00 PM"
	},
	{"key": "532","productName": "Tablet","qtySold": 7,"total": 7000,"date": "2023/05/13 20:27:00 PM"
	},
	{"key": "533","productName": "Laptop","qtySold": 6,"total": 5940,"date": "2023/05/14 13:21:00 PM"
	},
	{"key": "534","productName": "Tablet","qtySold": 4,"total": 3708,"date": "2023/05/14 09:03:00 PM"
	},
	{"key": "535","productName": "Laptop","qtySold": 1,"total": 995,"date": "2023/05/14 10:22:00 PM"
	},
	{"key": "536","productName": "Smart Phone","qtySold": 2,"total": 1808,"date": "2023/05/14 13:11:00 PM"
	},
	{"key": "537","productName": "Tablet","qtySold": 3,"total": 2799,"date": "2023/05/15 11:58:00 PM"
	},
	{"key": "538","productName": "Smart Phone","qtySold": 2,"total": 1912,"date": "2023/05/15 16:35:00 PM"
	},
	{"key": "539","productName": "Smart Phone","qtySold": 9,"total": 8757,"date": "2023/05/15 11:15:00 PM"
	},
	{"key": "540","productName": "Laptop","qtySold": 3,"total": 2715,"date": "2023/05/16 20:19:00 PM"
	},
	{"key": "541","productName": "Smart Phone","qtySold": 7,"total": 6426,"date": "2023/05/16 16:10:00 PM"
	},
	{"key": "542","productName": "Laptop","qtySold": 1,"total": 996,"date": "2023/05/16 11:26:00 PM"
	},
	{"key": "543","productName": "Laptop","qtySold": 7,"total": 6657,"date": "2023/05/17 18:47:00 PM"
	},
	{"key": "544","productName": "Headphones","qtySold": 4,"total": 3600,"date": "2023/05/17 19:25:00 PM"
	},
	{"key": "545","productName": "Smart Phone","qtySold": 7,"total": 6552,"date": "2023/05/17 11:53:00 PM"
	},
	{"key": "546","productName": "Headphones","qtySold": 5,"total": 4760,"date": "2023/05/17 20:36:00 PM"
	},
	{"key": "547","productName": "Laptop","qtySold": 2,"total": 1972,"date": "2023/05/18 08:33:00 PM"
	},
	{"key": "548","productName": "Laptop","qtySold": 6,"total": 5886,"date": "2023/05/18 15:27:00 PM"
	},
	{"key": "549","productName": "Tablet","qtySold": 2,"total": 1938,"date": "2023/05/18 11:59:00 PM"
	},
	{"key": "550","productName": "Laptop","qtySold": 6,"total": 5658,"date": "2023/05/19 10:34:00 PM"
	},
	{"key": "551","productName": "Headphones","qtySold": 3,"total": 2736,"date": "2023/05/19 12:55:00 PM"
	},
	{"key": "552","productName": "Laptop","qtySold": 7,"total": 7000,"date": "2023/05/19 20:22:00 PM"
	},
	{"key": "553","productName": "Laptop","qtySold": 7,"total": 6692,"date": "2023/05/19 14:51:00 PM"
	},
	{"key": "554","productName": "Smart Phone","qtySold": 4,"total": 3956,"date": "2023/05/19 11:15:00 PM"
	},
	{"key": "555","productName": "Tablet","qtySold": 10,"total": 9840,"date": "2023/05/20 13:31:00 PM"
	},
	{"key": "556","productName": "Laptop","qtySold": 2,"total": 1962,"date": "2023/05/20 20:31:00 PM"
	},
	{"key": "557","productName": "Laptop","qtySold": 3,"total": 2820,"date": "2023/05/20 11:56:00 PM"
	},
	{"key": "558","productName": "Smart Phone","qtySold": 10,"total": 9260,"date": "2023/05/21 20:51:00 PM"
	},
	{"key": "559","productName": "Headphones","qtySold": 8,"total": 7264,"date": "2023/05/21 09:40:00 PM"
	},
	{"key": "560","productName": "Laptop","qtySold": 8,"total": 7808,"date": "2023/05/21 10:58:00 PM"
	},
	{"key": "561","productName": "Headphones","qtySold": 8,"total": 7416,"date": "2023/05/21 18:22:00 PM"
	},
	{"key": "562","productName": "Smart Phone","qtySold": 5,"total": 4900,"date": "2023/05/21 14:46:00 PM"
	},
	{"key": "563","productName": "Tablet","qtySold": 6,"total": 5448,"date": "2023/05/22 12:16:00 PM"
	},
	{"key": "564","productName": "Smart Phone","qtySold": 4,"total": 3760,"date": "2023/05/22 11:05:00 PM"
	},
	{"key": "565","productName": "Tablet","qtySold": 2,"total": 1996,"date": "2023/05/22 18:58:00 PM"
	},
	{"key": "566","productName": "Headphones","qtySold": 6,"total": 5790,"date": "2023/05/23 10:13:00 PM"
	},
	{"key": "567","productName": "Tablet","qtySold": 8,"total": 7584,"date": "2023/05/23 13:41:00 PM"
	},
	{"key": "568","productName": "Headphones","qtySold": 5,"total": 4715,"date": "2023/05/23 11:29:00 PM"
	},
	{"key": "569","productName": "Smart Phone","qtySold": 3,"total": 2979,"date": "2023/05/23 20:04:00 PM"
	},
	{"key": "570","productName": "Laptop","qtySold": 9,"total": 8847,"date": "2023/05/24 09:21:00 PM"
	},
	{"key": "571","productName": "Tablet","qtySold": 1,"total": 939,"date": "2023/05/24 10:57:00 PM"
	},
	{"key": "572","productName": "Laptop","qtySold": 9,"total": 8667,"date": "2023/05/24 19:44:00 PM"
	},
	{"key": "573","productName": "Headphones","qtySold": 7,"total": 6468,"date": "2023/05/24 20:09:00 PM"
	},
	{"key": "574","productName": "Tablet","qtySold": 2,"total": 1976,"date": "2023/05/25 18:52:00 PM"
	},
	{"key": "575","productName": "Smart Phone","qtySold": 4,"total": 3708,"date": "2023/05/25 18:27:00 PM"
	},
	{"key": "576","productName": "Tablet","qtySold": 4,"total": 3900,"date": "2023/05/25 11:18:00 PM"
	},
	{"key": "577","productName": "Tablet","qtySold": 7,"total": 6944,"date": "2023/05/26 13:30:00 PM"
	},
	{"key": "578","productName": "Laptop","qtySold": 2,"total": 1912,"date": "2023/05/26 15:25:00 PM"
	},
	{"key": "579","productName": "Tablet","qtySold": 7,"total": 6762,"date": "2023/05/26 12:39:00 PM"
	},
	{"key": "580","productName": "Smart Phone","qtySold": 7,"total": 6545,"date": "2023/05/27 19:43:00 PM"
	},
	{"key": "581","productName": "Laptop","qtySold": 9,"total": 8343,"date": "2023/05/27 08:42:00 PM"
	},
	{"key": "582","productName": "Smart Phone","qtySold": 10,"total": 9060,"date": "2023/05/27 16:05:00 PM"
	},
	{"key": "583","productName": "Laptop","qtySold": 7,"total": 6419,"date": "2023/05/27 11:32:00 PM"
	},
	{"key": "584","productName": "Smart Phone","qtySold": 5,"total": 4840,"date": "2023/05/27 09:09:00 PM"
	},
	{"key": "585","productName": "Headphones","qtySold": 7,"total": 6678,"date": "2023/05/28 16:36:00 PM"
	},
	{"key": "586","productName": "Tablet","qtySold": 6,"total": 5670,"date": "2023/05/28 11:42:00 PM"
	},
	{"key": "587","productName": "Smart Phone","qtySold": 7,"total": 6783,"date": "2023/05/28 09:18:00 PM"
	},
	{"key": "588","productName": "Tablet","qtySold": 1,"total": 988,"date": "2023/05/28 17:34:00 PM"
	},
	{"key": "589","productName": "Smart Phone","qtySold": 6,"total": 5814,"date": "2023/05/29 11:44:00 PM"
	},
	{"key": "590","productName": "Tablet","qtySold": 2,"total": 1946,"date": "2023/05/29 17:51:00 PM"
	},
	{"key": "591","productName": "Headphones","qtySold": 3,"total": 2916,"date": "2023/05/29 19:51:00 PM"
	},
	{"key": "592","productName": "Tablet","qtySold": 10,"total": 9940,"date": "2023/05/30 11:43:00 PM"
	},
	{"key": "593","productName": "Smart Phone","qtySold": 9,"total": 8190,"date": "2023/05/30 19:57:00 PM"
	},
	{"key": "594","productName": "Tablet","qtySold": 6,"total": 5946,"date": "2023/05/30 12:52:00 PM"
	},
	{"key": "595","productName": "Laptop","qtySold": 2,"total": 1892,"date": "2023/05/30 20:22:00 PM"
	},
	{"key": "596","productName": "Tablet","qtySold": 10,"total": 9270,"date": "2023/05/30 10:09:00 PM"
	},
	{"key": "597","productName": "Tablet","qtySold": 7,"total": 6797,"date": "2023/05/31 13:13:00 PM"
	},
	{"key": "598","productName": "Headphones","qtySold": 1,"total": 959,"date": "2023/05/31 18:09:00 PM"
	},
	{"key": "599","productName": "Laptop","qtySold": 10,"total": 9150,"date": "2023/05/31 11:51:00 PM"
	},
	{"key": "600","productName": "Tablet","qtySold": 8,"total": 7368,"date": "2023/05/31 19:48:00 PM"
	},
	{"key": "601","productName": "Laptop","qtySold": 2,"total": 1940,"date": "2023/06/01 14:28:00 PM"
	},
	{"key": "602","productName": "Headphones","qtySold": 2,"total": 1984,"date": "2023/06/01 10:52:00 PM"
	},
	{"key": "603","productName": "Headphones","qtySold": 10,"total": 9810,"date": "2023/06/01 19:46:00 PM"
	},
	{"key": "604","productName": "Laptop","qtySold": 5,"total": 4905,"date": "2023/06/01 10:57:00 PM"
	},
	{"key": "605","productName": "Smart Phone","qtySold": 9,"total": 8775,"date": "2023/06/01 17:33:00 PM"
	},
	{"key": "606","productName": "Laptop","qtySold": 3,"total": 2811,"date": "2023/06/02 19:33:00 PM"
	},
	{"key": "607","productName": "Tablet","qtySold": 4,"total": 3720,"date": "2023/06/02 09:49:00 PM"
	},
	{"key": "608","productName": "Tablet","qtySold": 7,"total": 6454,"date": "2023/06/02 08:34:00 PM"
	},
	{"key": "609","productName": "Headphones","qtySold": 7,"total": 6580,"date": "2023/06/02 14:48:00 PM"
	},
	{"key": "610","productName": "Tablet","qtySold": 4,"total": 3740,"date": "2023/06/03 18:22:00 PM"
	},
	{"key": "611","productName": "Smart Phone","qtySold": 10,"total": 9980,"date": "2023/06/03 19:21:00 PM"
	},
	{"key": "612","productName": "Smart Phone","qtySold": 7,"total": 6846,"date": "2023/06/03 15:51:00 PM"
	},
	{"key": "613","productName": "Laptop","qtySold": 9,"total": 8109,"date": "2023/06/03 10:46:00 PM"
	},
	{"key": "614","productName": "Tablet","qtySold": 10,"total": 9330,"date": "2023/06/03 11:35:00 PM"
	},
	{"key": "615","productName": "Tablet","qtySold": 2,"total": 1818,"date": "2023/06/04 14:20:00 PM"
	},
	{"key": "616","productName": "Smart Phone","qtySold": 4,"total": 3692,"date": "2023/06/04 15:27:00 PM"
	},
	{"key": "617","productName": "Laptop","qtySold": 10,"total": 9500,"date": "2023/06/04 20:29:00 PM"
	},
	{"key": "618","productName": "Headphones","qtySold": 10,"total": 9610,"date": "2023/06/04 20:54:00 PM"
	},
	{"key": "619","productName": "Tablet","qtySold": 4,"total": 3816,"date": "2023/06/04 19:26:00 PM"
	},
	{"key": "620","productName": "Tablet","qtySold": 3,"total": 2793,"date": "2023/06/05 12:27:00 PM"
	},
	{"key": "621","productName": "Laptop","qtySold": 1,"total": 922,"date": "2023/06/05 13:30:00 PM"
	},
	{"key": "622","productName": "Headphones","qtySold": 5,"total": 4655,"date": "2023/06/05 19:37:00 PM"
	},
	{"key": "623","productName": "Headphones","qtySold": 2,"total": 1922,"date": "2023/06/05 13:06:00 PM"
	},
	{"key": "624","productName": "Smart Phone","qtySold": 4,"total": 3820,"date": "2023/06/06 20:18:00 PM"
	},
	{"key": "625","productName": "Headphones","qtySold": 2,"total": 1870,"date": "2023/06/06 10:55:00 PM"
	},
	{"key": "626","productName": "Smart Phone","qtySold": 4,"total": 3996,"date": "2023/06/06 09:25:00 PM"
	},
	{"key": "627","productName": "Smart Phone","qtySold": 2,"total": 1800,"date": "2023/06/07 20:24:00 PM"
	},
	{"key": "628","productName": "Headphones","qtySold": 3,"total": 2814,"date": "2023/06/07 10:11:00 PM"
	},
	{"key": "629","productName": "Smart Phone","qtySold": 9,"total": 8955,"date": "2023/06/07 10:04:00 PM"
	},
	{"key": "630","productName": "Headphones","qtySold": 9,"total": 8451,"date": "2023/06/07 19:29:00 PM"
	},
	{"key": "631","productName": "Headphones","qtySold": 10,"total": 9820,"date": "2023/06/07 12:42:00 PM"
	},
	{"key": "632","productName": "Smart Phone","qtySold": 9,"total": 8190,"date": "2023/06/08 19:09:00 PM"
	},
	{"key": "633","productName": "Laptop","qtySold": 1,"total": 960,"date": "2023/06/08 15:27:00 PM"
	},
	{"key": "634","productName": "Smart Phone","qtySold": 10,"total": 9150,"date": "2023/06/08 17:59:00 PM"
	},
	{"key": "635","productName": "Smart Phone","qtySold": 8,"total": 7472,"date": "2023/06/09 19:00:00 PM"
	},
	{"key": "636","productName": "Laptop","qtySold": 9,"total": 8559,"date": "2023/06/09 18:11:00 PM"
	},
	{"key": "637","productName": "Headphones","qtySold": 7,"total": 6349,"date": "2023/06/09 15:25:00 PM"
	},
	{"key": "638","productName": "Laptop","qtySold": 5,"total": 4885,"date": "2023/06/09 09:32:00 PM"
	},
	{"key": "639","productName": "Tablet","qtySold": 7,"total": 6867,"date": "2023/06/10 17:13:00 PM"
	},
	{"key": "640","productName": "Headphones","qtySold": 9,"total": 8388,"date": "2023/06/10 09:06:00 PM"
	},
	{"key": "641","productName": "Smart Phone","qtySold": 4,"total": 3956,"date": "2023/06/10 18:18:00 PM"
	},
	{"key": "642","productName": "Smart Phone","qtySold": 4,"total": 3632,"date": "2023/06/11 15:05:00 PM"
	},
	{"key": "643","productName": "Headphones","qtySold": 8,"total": 7416,"date": "2023/06/11 08:30:00 PM"
	},
	{"key": "644","productName": "Smart Phone","qtySold": 5,"total": 4930,"date": "2023/06/11 09:43:00 PM"
	},
	{"key": "645","productName": "Laptop","qtySold": 1,"total": 906,"date": "2023/06/12 15:47:00 PM"
	},
	{"key": "646","productName": "Tablet","qtySold": 10,"total": 9130,"date": "2023/06/12 12:01:00 PM"
	},
	{"key": "647","productName": "Tablet","qtySold": 9,"total": 8325,"date": "2023/06/12 12:35:00 PM"
	},
	{"key": "648","productName": "Smart Phone","qtySold": 9,"total": 8595,"date": "2023/06/12 15:56:00 PM"
	},
	{"key": "649","productName": "Headphones","qtySold": 8,"total": 7248,"date": "2023/06/12 14:24:00 PM"
	},
	{"key": "650","productName": "Tablet","qtySold": 10,"total": 9370,"date": "2023/06/13 18:51:00 PM"
	},
	{"key": "651","productName": "Headphones","qtySold": 3,"total": 2799,"date": "2023/06/13 20:23:00 PM"
	},
	{"key": "652","productName": "Smart Phone","qtySold": 5,"total": 4735,"date": "2023/06/13 11:54:00 PM"
	},
	{"key": "653","productName": "Tablet","qtySold": 9,"total": 9000,"date": "2023/06/13 10:51:00 PM"
	},
	{"key": "654","productName": "Headphones","qtySold": 7,"total": 6650,"date": "2023/06/13 14:40:00 PM"
	},
	{"key": "655","productName": "Laptop","qtySold": 1,"total": 985,"date": "2023/06/14 19:02:00 PM"
	},
	{"key": "656","productName": "Tablet","qtySold": 5,"total": 4810,"date": "2023/06/14 08:45:00 PM"
	},
	{"key": "657","productName": "Smart Phone","qtySold": 8,"total": 7672,"date": "2023/06/14 18:56:00 PM"
	},
	{"key": "658","productName": "Tablet","qtySold": 2,"total": 1910,"date": "2023/06/14 10:28:00 PM"
	},
	{"key": "659","productName": "Laptop","qtySold": 8,"total": 7568,"date": "2023/06/14 19:24:00 PM"
	},
	{"key": "660","productName": "Tablet","qtySold": 6,"total": 5712,"date": "2023/06/15 11:05:00 PM"
	},
	{"key": "661","productName": "Laptop","qtySold": 7,"total": 6391,"date": "2023/06/15 15:13:00 PM"
	},
	{"key": "662","productName": "Smart Phone","qtySold": 9,"total": 8910,"date": "2023/06/15 12:47:00 PM"
	},
	{"key": "663","productName": "Laptop","qtySold": 9,"total": 8847,"date": "2023/06/15 10:11:00 PM"
	},
	{"key": "664","productName": "Smart Phone","qtySold": 4,"total": 3644,"date": "2023/06/15 18:19:00 PM"
	},
	{"key": "665","productName": "Headphones","qtySold": 4,"total": 3800,"date": "2023/06/16 08:37:00 PM"
	},
	{"key": "666","productName": "Laptop","qtySold": 7,"total": 6755,"date": "2023/06/16 19:27:00 PM"
	},
	{"key": "667","productName": "Headphones","qtySold": 1,"total": 986,"date": "2023/06/16 13:56:00 PM"
	},
	{"key": "668","productName": "Tablet","qtySold": 4,"total": 3968,"date": "2023/06/16 19:16:00 PM"
	},
	{"key": "669","productName": "Smart Phone","qtySold": 8,"total": 7696,"date": "2023/06/16 12:32:00 PM"
	},
	{"key": "670","productName": "Tablet","qtySold": 1,"total": 927,"date": "2023/06/17 14:36:00 PM"
	},
	{"key": "671","productName": "Smart Phone","qtySold": 8,"total": 7240,"date": "2023/06/17 20:33:00 PM"
	},
	{"key": "672","productName": "Laptop","qtySold": 10,"total": 9000,"date": "2023/06/17 15:33:00 PM"
	},
	{"key": "673","productName": "Laptop","qtySold": 4,"total": 3784,"date": "2023/06/18 12:59:00 PM"
	},
	{"key": "674","productName": "Headphones","qtySold": 9,"total": 8667,"date": "2023/06/18 08:21:00 PM"
	},
	{"key": "675","productName": "Headphones","qtySold": 6,"total": 5712,"date": "2023/06/18 18:16:00 PM"
	},
	{"key": "676","productName": "Smart Phone","qtySold": 3,"total": 2940,"date": "2023/06/19 12:12:00 PM"
	},
	{"key": "677","productName": "Smart Phone","qtySold": 1,"total": 947,"date": "2023/06/19 08:27:00 PM"
	},
	{"key": "678","productName": "Headphones","qtySold": 4,"total": 3724,"date": "2023/06/19 18:32:00 PM"
	},
	{"key": "679","productName": "Laptop","qtySold": 3,"total": 2718,"date": "2023/06/20 09:10:00 PM"
	},
	{"key": "680","productName": "Smart Phone","qtySold": 9,"total": 8892,"date": "2023/06/20 13:02:00 PM"
	},
	{"key": "681","productName": "Tablet","qtySold": 5,"total": 4890,"date": "2023/06/20 09:21:00 PM"
	},
	{"key": "682","productName": "Laptop","qtySold": 4,"total": 3764,"date": "2023/06/20 20:06:00 PM"
	},
	{"key": "683","productName": "Smart Phone","qtySold": 4,"total": 3624,"date": "2023/06/20 19:44:00 PM"
	},
	{"key": "684","productName": "Smart Phone","qtySold": 6,"total": 5598,"date": "2023/06/21 11:26:00 PM"
	},
	{"key": "685","productName": "Tablet","qtySold": 6,"total": 5970,"date": "2023/06/21 20:33:00 PM"
	},
	{"key": "686","productName": "Laptop","qtySold": 9,"total": 8208,"date": "2023/06/21 13:54:00 PM"
	},
	{"key": "687","productName": "Smart Phone","qtySold": 9,"total": 8424,"date": "2023/06/21 20:18:00 PM"
	},
	{"key": "688","productName": "Headphones","qtySold": 1,"total": 939,"date": "2023/06/22 12:38:00 PM"
	},
	{"key": "689","productName": "Tablet","qtySold": 9,"total": 8568,"date": "2023/06/22 17:42:00 PM"
	},
	{"key": "690","productName": "Laptop","qtySold": 1,"total": 915,"date": "2023/06/22 16:02:00 PM"
	},
	{"key": "691","productName": "Tablet","qtySold": 9,"total": 8154,"date": "2023/06/22 17:31:00 PM"
	},
	{"key": "692","productName": "Laptop","qtySold": 10,"total": 9370,"date": "2023/06/23 10:37:00 PM"
	},
	{"key": "693","productName": "Smart Phone","qtySold": 1,"total": 918,"date": "2023/06/23 10:03:00 PM"
	},
	{"key": "694","productName": "Smart Phone","qtySold": 2,"total": 1856,"date": "2023/06/23 11:07:00 PM"
	},
	{"key": "695","productName": "Tablet","qtySold": 9,"total": 8973,"date": "2023/06/24 12:12:00 PM"
	},
	{"key": "696","productName": "Laptop","qtySold": 6,"total": 5856,"date": "2023/06/24 13:54:00 PM"
	},
	{"key": "697","productName": "Laptop","qtySold": 1,"total": 963,"date": "2023/06/24 10:39:00 PM"
	},
	{"key": "698","productName": "Headphones","qtySold": 9,"total": 8811,"date": "2023/06/25 10:16:00 PM"
	},
	{"key": "699","productName": "Smart Phone","qtySold": 1,"total": 995,"date": "2023/06/25 16:06:00 PM"
	},
	{"key": "700","productName": "Laptop","qtySold": 3,"total": 2901,"date": "2023/06/25 11:56:00 PM"
	},
	{"key": "701","productName": "Headphones","qtySold": 1,"total": 923,"date": "2023/06/26 11:25:00 PM"
	},
	{"key": "702","productName": "Smart Phone","qtySold": 3,"total": 2874,"date": "2023/06/26 18:47:00 PM"
	},
	{"key": "703","productName": "Tablet","qtySold": 9,"total": 8568,"date": "2023/06/26 18:04:00 PM"
	},
	{"key": "704","productName": "Headphones","qtySold": 7,"total": 6685,"date": "2023/06/26 17:59:00 PM"
	},
	{"key": "705","productName": "Laptop","qtySold": 9,"total": 8226,"date": "2023/06/27 17:19:00 PM"
	},
	{"key": "706","productName": "Smart Phone","qtySold": 10,"total": 9710,"date": "2023/06/27 10:07:00 PM"
	},
	{"key": "707","productName": "Headphones","qtySold": 4,"total": 3940,"date": "2023/06/27 16:51:00 PM"
	},
	{"key": "708","productName": "Laptop","qtySold": 1,"total": 954,"date": "2023/06/27 11:59:00 PM"
	},
	{"key": "709","productName": "Headphones","qtySold": 10,"total": 9690,"date": "2023/06/28 10:16:00 PM"
	},
	{"key": "710","productName": "Smart Phone","qtySold": 7,"total": 6433,"date": "2023/06/28 09:58:00 PM"
	},
	{"key": "711","productName": "Tablet","qtySold": 6,"total": 5952,"date": "2023/06/28 18:05:00 PM"
	},
	{"key": "712","productName": "Headphones","qtySold": 6,"total": 5508,"date": "2023/06/28 14:19:00 PM"
	},
	{"key": "713","productName": "Laptop","qtySold": 7,"total": 6377,"date": "2023/06/29 17:10:00 PM"
	},
	{"key": "714","productName": "Tablet","qtySold": 9,"total": 8514,"date": "2023/06/29 15:05:00 PM"
	},
	{"key": "715","productName": "Smart Phone","qtySold": 10,"total": 9290,"date": "2023/06/29 19:54:00 PM"
	},
	{"key": "716","productName": "Smart Phone","qtySold": 8,"total": 7624,"date": "2023/06/29 14:40:00 PM"
	},
	{"key": "717","productName": "Smart Phone","qtySold": 7,"total": 6384,"date": "2023/06/30 14:46:00 PM"
	},
	{"key": "718","productName": "Headphones","qtySold": 1,"total": 911,"date": "2023/06/30 12:49:00 PM"
	},
	{"key": "719","productName": "Smart Phone","qtySold": 9,"total": 8496,"date": "2023/06/30 08:13:00 PM"
	},
	{"key": "720","productName": "Laptop","qtySold": 4,"total": 3744,"date": "2023/06/30 12:12:00 PM"
	},
	{"key": "721","productName": "Smart Phone","qtySold": 9,"total": 8874,"date": "2023/06/30 10:24:00 PM"
	},
	{"key": "722","productName": "Headphones","qtySold": 9,"total": 8181,"date": "2023/07/01 18:04:00 PM"
	},
	{"key": "723","productName": "Headphones","qtySold": 9,"total": 8901,"date": "2023/07/01 19:46:00 PM"
	},
	{"key": "724","productName": "Headphones","qtySold": 10,"total": 9820,"date": "2023/07/01 09:48:00 PM"
	},
	{"key": "725","productName": "Laptop","qtySold": 8,"total": 7632,"date": "2023/07/02 19:40:00 PM"
	},
	{"key": "726","productName": "Laptop","qtySold": 4,"total": 3964,"date": "2023/07/02 19:51:00 PM"
	},
	{"key": "727","productName": "Laptop","qtySold": 9,"total": 8496,"date": "2023/07/02 19:47:00 PM"
	},
	{"key": "728","productName": "Headphones","qtySold": 10,"total": 9320,"date": "2023/07/02 12:09:00 PM"
	},
	{"key": "729","productName": "Tablet","qtySold": 3,"total": 2889,"date": "2023/07/02 14:31:00 PM"
	},
	{"key": "730","productName": "Tablet","qtySold": 1,"total": 932,"date": "2023/07/03 16:03:00 PM"
	},
	{"key": "731","productName": "Tablet","qtySold": 6,"total": 5676,"date": "2023/07/03 12:10:00 PM"
	},
	{"key": "732","productName": "Tablet","qtySold": 3,"total": 2970,"date": "2023/07/03 09:30:00 PM"
	},
	{"key": "733","productName": "Smart Phone","qtySold": 1,"total": 967,"date": "2023/07/03 11:58:00 PM"
	},
	{"key": "734","productName": "Headphones","qtySold": 8,"total": 7736,"date": "2023/07/03 15:08:00 PM"
	},
	{"key": "735","productName": "Laptop","qtySold": 2,"total": 1996,"date": "2023/07/04 13:34:00 PM"
	},
	{"key": "736","productName": "Tablet","qtySold": 4,"total": 3832,"date": "2023/07/04 16:54:00 PM"
	},
	{"key": "737","productName": "Headphones","qtySold": 8,"total": 7712,"date": "2023/07/04 16:27:00 PM"
	},
	{"key": "738","productName": "Tablet","qtySold": 4,"total": 3792,"date": "2023/07/04 15:29:00 PM"
	},
	{"key": "739","productName": "Smart Phone","qtySold": 9,"total": 8280,"date": "2023/07/04 19:48:00 PM"
	},
	{"key": "740","productName": "Tablet","qtySold": 6,"total": 5736,"date": "2023/07/05 17:20:00 PM"
	},
	{"key": "741","productName": "Tablet","qtySold": 9,"total": 8568,"date": "2023/07/05 19:50:00 PM"
	},
	{"key": "742","productName": "Tablet","qtySold": 7,"total": 6909,"date": "2023/07/05 11:36:00 PM"
	},
	{"key": "743","productName": "Laptop","qtySold": 5,"total": 4780,"date": "2023/07/06 20:04:00 PM"
	},
	{"key": "744","productName": "Smart Phone","qtySold": 5,"total": 4590,"date": "2023/07/06 10:05:00 PM"
	},
	{"key": "745","productName": "Laptop","qtySold": 5,"total": 4680,"date": "2023/07/06 19:00:00 PM"
	},
	{"key": "746","productName": "Headphones","qtySold": 8,"total": 7840,"date": "2023/07/06 09:12:00 PM"
	},
	{"key": "747","productName": "Smart Phone","qtySold": 7,"total": 6664,"date": "2023/07/06 11:04:00 PM"
	},
	{"key": "748","productName": "Smart Phone","qtySold": 9,"total": 8640,"date": "2023/07/07 08:41:00 PM"
	},
	{"key": "749","productName": "Headphones","qtySold": 6,"total": 5658,"date": "2023/07/07 09:32:00 PM"
	},
	{"key": "750","productName": "Smart Phone","qtySold": 7,"total": 6958,"date": "2023/07/07 17:42:00 PM"
	},
	{"key": "751","productName": "Laptop","qtySold": 9,"total": 8730,"date": "2023/07/07 10:29:00 PM"
	},
	{"key": "752","productName": "Headphones","qtySold": 5,"total": 4865,"date": "2023/07/08 13:58:00 PM"
	},
	{"key": "753","productName": "Laptop","qtySold": 7,"total": 6349,"date": "2023/07/08 19:21:00 PM"
	},
	{"key": "754","productName": "Tablet","qtySold": 3,"total": 2778,"date": "2023/07/08 14:32:00 PM"
	},
	{"key": "755","productName": "Laptop","qtySold": 8,"total": 7640,"date": "2023/07/08 08:17:00 PM"
	},
	{"key": "756","productName": "Headphones","qtySold": 9,"total": 8829,"date": "2023/07/09 13:31:00 PM"
	},
	{"key": "757","productName": "Tablet","qtySold": 7,"total": 6398,"date": "2023/07/09 20:29:00 PM"
	},
	{"key": "758","productName": "Smart Phone","qtySold": 9,"total": 8388,"date": "2023/07/09 15:44:00 PM"
	},
	{"key": "759","productName": "Laptop","qtySold": 1,"total": 967,"date": "2023/07/09 18:45:00 PM"
	},
	{"key": "760","productName": "Laptop","qtySold": 9,"total": 8271,"date": "2023/07/09 08:12:00 PM"
	},
	{"key": "761","productName": "Smart Phone","qtySold": 10,"total": 9000,"date": "2023/07/10 11:10:00 PM"
	},
	{"key": "762","productName": "Laptop","qtySold": 3,"total": 2925,"date": "2023/07/10 19:37:00 PM"
	},
	{"key": "763","productName": "Smart Phone","qtySold": 1,"total": 920,"date": "2023/07/10 10:02:00 PM"
	},
	{"key": "764","productName": "Tablet","qtySold": 7,"total": 6433,"date": "2023/07/10 17:19:00 PM"
	},
	{"key": "765","productName": "Smart Phone","qtySold": 10,"total": 9980,"date": "2023/07/11 11:21:00 PM"
	},
	{"key": "766","productName": "Laptop","qtySold": 3,"total": 2832,"date": "2023/07/11 18:47:00 PM"
	},
	{"key": "767","productName": "Headphones","qtySold": 2,"total": 1928,"date": "2023/07/11 15:49:00 PM"
	},
	{"key": "768","productName": "Tablet","qtySold": 1,"total": 999,"date": "2023/07/11 20:21:00 PM"
	},
	{"key": "769","productName": "Smart Phone","qtySold": 2,"total": 1872,"date": "2023/07/12 09:50:00 PM"
	},
	{"key": "770","productName": "Headphones","qtySold": 4,"total": 3828,"date": "2023/07/12 11:34:00 PM"
	},
	{"key": "771","productName": "Laptop","qtySold": 5,"total": 4555,"date": "2023/07/12 10:42:00 PM"
	},
	{"key": "772","productName": "Laptop","qtySold": 5,"total": 4730,"date": "2023/07/12 15:32:00 PM"
	},
	{"key": "773","productName": "Headphones","qtySold": 9,"total": 8613,"date": "2023/07/13 14:48:00 PM"
	},
	{"key": "774","productName": "Headphones","qtySold": 10,"total": 9380,"date": "2023/07/13 18:57:00 PM"
	},
	{"key": "775","productName": "Headphones","qtySold": 2,"total": 1972,"date": "2023/07/13 08:46:00 PM"
	},
	{"key": "776","productName": "Headphones","qtySold": 4,"total": 3792,"date": "2023/07/13 11:09:00 PM"
	},
	{"key": "777","productName": "Tablet","qtySold": 8,"total": 7464,"date": "2023/07/13 16:27:00 PM"
	},
	{"key": "778","productName": "Tablet","qtySold": 6,"total": 5562,"date": "2023/07/14 12:57:00 PM"
	},
	{"key": "779","productName": "Tablet","qtySold": 5,"total": 4820,"date": "2023/07/14 11:56:00 PM"
	},
	{"key": "780","productName": "Headphones","qtySold": 3,"total": 2838,"date": "2023/07/14 08:44:00 PM"
	},
	{"key": "781","productName": "Tablet","qtySold": 4,"total": 3640,"date": "2023/07/14 09:29:00 PM"
	},
	{"key": "782","productName": "Tablet","qtySold": 2,"total": 1906,"date": "2023/07/14 09:32:00 PM"
	},
	{"key": "783","productName": "Headphones","qtySold": 8,"total": 7688,"date": "2023/07/15 16:56:00 PM"
	},
	{"key": "784","productName": "Headphones","qtySold": 7,"total": 6398,"date": "2023/07/15 19:01:00 PM"
	},
	{"key": "785","productName": "Tablet","qtySold": 9,"total": 8937,"date": "2023/07/15 20:34:00 PM"
	},
	{"key": "786","productName": "Headphones","qtySold": 9,"total": 8955,"date": "2023/07/15 11:25:00 PM"
	},
	{"key": "787","productName": "Laptop","qtySold": 9,"total": 8892,"date": "2023/07/16 10:58:00 PM"
	},
	{"key": "788","productName": "Laptop","qtySold": 4,"total": 3624,"date": "2023/07/16 13:37:00 PM"
	},
	{"key": "789","productName": "Tablet","qtySold": 1,"total": 968,"date": "2023/07/16 20:26:00 PM"
	},
	{"key": "790","productName": "Smart Phone","qtySold": 2,"total": 1950,"date": "2023/07/17 16:47:00 PM"
	},
	{"key": "791","productName": "Smart Phone","qtySold": 9,"total": 8730,"date": "2023/07/17 14:42:00 PM"
	},
	{"key": "792","productName": "Laptop","qtySold": 10,"total": 9920,"date": "2023/07/17 18:45:00 PM"
	},
	{"key": "793","productName": "Headphones","qtySold": 9,"total": 8442,"date": "2023/07/17 18:15:00 PM"
	},
	{"key": "794","productName": "Tablet","qtySold": 5,"total": 4810,"date": "2023/07/18 10:02:00 PM"
	},
	{"key": "795","productName": "Smart Phone","qtySold": 1,"total": 997,"date": "2023/07/18 09:10:00 PM"
	},
	{"key": "796","productName": "Headphones","qtySold": 7,"total": 6482,"date": "2023/07/18 10:43:00 PM"
	},
	{"key": "797","productName": "Smart Phone","qtySold": 8,"total": 7832,"date": "2023/07/19 18:15:00 PM"
	},
	{"key": "798","productName": "Laptop","qtySold": 1,"total": 936,"date": "2023/07/19 20:36:00 PM"
	},
	{"key": "799","productName": "Laptop","qtySold": 8,"total": 7472,"date": "2023/07/19 13:43:00 PM"
	},
	{"key": "800","productName": "Headphones","qtySold": 7,"total": 6447,"date": "2023/07/19 16:24:00 PM"
	},
	{"key": "801","productName": "Headphones","qtySold": 10,"total": 9640,"date": "2023/07/19 09:58:00 PM"
	},
	{"key": "802","productName": "Smart Phone","qtySold": 8,"total": 7312,"date": "2023/07/20 20:52:00 PM"
	},
	{"key": "803","productName": "Headphones","qtySold": 1,"total": 965,"date": "2023/07/20 08:11:00 PM"
	},
	{"key": "804","productName": "Tablet","qtySold": 7,"total": 6370,"date": "2023/07/20 16:17:00 PM"
	},
	{"key": "805","productName": "Tablet","qtySold": 5,"total": 4625,"date": "2023/07/20 15:41:00 PM"
	},
	{"key": "806","productName": "Smart Phone","qtySold": 2,"total": 1816,"date": "2023/07/20 15:54:00 PM"
	},
	{"key": "807","productName": "Laptop","qtySold": 2,"total": 1926,"date": "2023/07/21 09:15:00 PM"
	},
	{"key": "808","productName": "Headphones","qtySold": 7,"total": 6419,"date": "2023/07/21 13:41:00 PM"
	},
	{"key": "809","productName": "Tablet","qtySold": 2,"total": 1956,"date": "2023/07/21 15:41:00 PM"
	},
	{"key": "810","productName": "Smart Phone","qtySold": 9,"total": 8865,"date": "2023/07/21 11:58:00 PM"
	},
	{"key": "811","productName": "Laptop","qtySold": 3,"total": 2907,"date": "2023/07/22 17:11:00 PM"
	},
	{"key": "812","productName": "Headphones","qtySold": 2,"total": 1956,"date": "2023/07/22 20:53:00 PM"
	},
	{"key": "813","productName": "Smart Phone","qtySold": 3,"total": 2823,"date": "2023/07/22 16:38:00 PM"
	},
	{"key": "814","productName": "Headphones","qtySold": 7,"total": 6461,"date": "2023/07/22 12:44:00 PM"
	},
	{"key": "815","productName": "Tablet","qtySold": 4,"total": 3656,"date": "2023/07/23 12:48:00 PM"
	},
	{"key": "816","productName": "Laptop","qtySold": 8,"total": 7864,"date": "2023/07/23 17:58:00 PM"
	},
	{"key": "817","productName": "Tablet","qtySold": 7,"total": 6825,"date": "2023/07/23 12:54:00 PM"
	},
	{"key": "818","productName": "Headphones","qtySold": 4,"total": 3776,"date": "2023/07/24 15:41:00 PM"
	},
	{"key": "819","productName": "Tablet","qtySold": 10,"total": 9780,"date": "2023/07/24 10:26:00 PM"
	},
	{"key": "820","productName": "Tablet","qtySold": 2,"total": 1844,"date": "2023/07/24 16:01:00 PM"
	},
	{"key": "821","productName": "Laptop","qtySold": 4,"total": 3996,"date": "2023/07/25 09:04:00 PM"
	},
	{"key": "822","productName": "Tablet","qtySold": 4,"total": 4000,"date": "2023/07/25 11:03:00 PM"
	},
	{"key": "823","productName": "Smart Phone","qtySold": 8,"total": 7640,"date": "2023/07/25 19:57:00 PM"
	},
	{"key": "824","productName": "Headphones","qtySold": 5,"total": 4665,"date": "2023/07/25 17:51:00 PM"
	},
	{"key": "825","productName": "Laptop","qtySold": 10,"total": 9600,"date": "2023/07/25 11:52:00 PM"
	},
	{"key": "826","productName": "Tablet","qtySold": 1,"total": 922,"date": "2023/07/26 12:26:00 PM"
	},
	{"key": "827","productName": "Laptop","qtySold": 10,"total": 9420,"date": "2023/07/26 19:46:00 PM"
	},
	{"key": "828","productName": "Laptop","qtySold": 7,"total": 6482,"date": "2023/07/26 11:03:00 PM"
	},
	{"key": "829","productName": "Tablet","qtySold": 1,"total": 953,"date": "2023/07/26 17:33:00 PM"
	},
	{"key": "830","productName": "Laptop","qtySold": 3,"total": 2904,"date": "2023/07/26 09:48:00 PM"
	},
	{"key": "831","productName": "Smart Phone","qtySold": 3,"total": 2781,"date": "2023/07/27 16:45:00 PM"
	},
	{"key": "832","productName": "Smart Phone","qtySold": 5,"total": 4520,"date": "2023/07/27 15:41:00 PM"
	},
	{"key": "833","productName": "Headphones","qtySold": 5,"total": 4600,"date": "2023/07/27 13:01:00 PM"
	},
	{"key": "834","productName": "Tablet","qtySold": 2,"total": 1978,"date": "2023/07/27 16:16:00 PM"
	},
	{"key": "835","productName": "Tablet","qtySold": 9,"total": 8487,"date": "2023/07/28 20:37:00 PM"
	},
	{"key": "836","productName": "Smart Phone","qtySold": 7,"total": 6419,"date": "2023/07/28 08:10:00 PM"
	},
	{"key": "837","productName": "Headphones","qtySold": 10,"total": 9560,"date": "2023/07/28 20:42:00 PM"
	},
	{"key": "838","productName": "Tablet","qtySold": 2,"total": 1850,"date": "2023/07/28 15:28:00 PM"
	},
	{"key": "839","productName": "Headphones","qtySold": 8,"total": 7752,"date": "2023/07/29 08:52:00 PM"
	},
	{"key": "840","productName": "Smart Phone","qtySold": 8,"total": 7952,"date": "2023/07/29 12:33:00 PM"
	},
	{"key": "841","productName": "Headphones","qtySold": 3,"total": 2964,"date": "2023/07/29 11:18:00 PM"
	},
	{"key": "842","productName": "Tablet","qtySold": 4,"total": 3608,"date": "2023/07/29 12:20:00 PM"
	},
	{"key": "843","productName": "Smart Phone","qtySold": 1,"total": 995,"date": "2023/07/30 08:00:00 PM"
	},
	{"key": "844","productName": "Tablet","qtySold": 1,"total": 900,"date": "2023/07/30 10:17:00 PM"
	},
	{"key": "845","productName": "Smart Phone","qtySold": 2,"total": 1870,"date": "2023/07/30 18:08:00 PM"
	},
	{"key": "846","productName": "Headphones","qtySold": 10,"total": 9510,"date": "2023/07/31 15:13:00 PM"
	},
	{"key": "847","productName": "Smart Phone","qtySold": 5,"total": 4795,"date": "2023/07/31 08:59:00 PM"
	},
	{"key": "848","productName": "Laptop","qtySold": 3,"total": 2934,"date": "2023/07/31 15:37:00 PM"
	},
	{"key": "849","productName": "Tablet","qtySold": 4,"total": 3884,"date": "2023/07/31 18:44:00 PM"
	},
	{"key": "850","productName": "Laptop","qtySold": 7,"total": 6398,"date": "2023/08/01 17:00:00 PM"
	},
	{"key": "851","productName": "Smart Phone","qtySold": 9,"total": 8523,"date": "2023/08/01 16:43:00 PM"
	},
	{"key": "852","productName": "Smart Phone","qtySold": 7,"total": 6482,"date": "2023/08/01 16:45:00 PM"
	},
	{"key": "853","productName": "Headphones","qtySold": 9,"total": 8847,"date": "2023/08/02 15:44:00 PM"
	},
	{"key": "854","productName": "Laptop","qtySold": 6,"total": 5658,"date": "2023/08/02 08:52:00 PM"
	},
	{"key": "855","productName": "Tablet","qtySold": 5,"total": 4520,"date": "2023/08/02 17:47:00 PM"
	},
	{"key": "856","productName": "Tablet","qtySold": 6,"total": 5646,"date": "2023/08/02 12:21:00 PM"
	},
	{"key": "857","productName": "Headphones","qtySold": 1,"total": 968,"date": "2023/08/02 20:43:00 PM"
	},
	{"key": "858","productName": "Headphones","qtySold": 2,"total": 1840,"date": "2023/08/03 12:44:00 PM"
	},
	{"key": "859","productName": "Smart Phone","qtySold": 2,"total": 1966,"date": "2023/08/03 20:41:00 PM"
	},
	{"key": "860","productName": "Smart Phone","qtySold": 5,"total": 4675,"date": "2023/08/03 16:54:00 PM"
	},
	{"key": "861","productName": "Laptop","qtySold": 8,"total": 7800,"date": "2023/08/03 10:11:00 PM"
	},
	{"key": "862","productName": "Tablet","qtySold": 6,"total": 5922,"date": "2023/08/03 12:36:00 PM"
	},
	{"key": "863","productName": "Laptop","qtySold": 3,"total": 2838,"date": "2023/08/04 17:01:00 PM"
	},
	{"key": "864","productName": "Smart Phone","qtySold": 5,"total": 4730,"date": "2023/08/04 14:41:00 PM"
	},
	{"key": "865","productName": "Laptop","qtySold": 6,"total": 5730,"date": "2023/08/04 10:59:00 PM"
	},
	{"key": "866","productName": "Laptop","qtySold": 2,"total": 1946,"date": "2023/08/05 15:32:00 PM"
	},
	{"key": "867","productName": "Laptop","qtySold": 2,"total": 1996,"date": "2023/08/05 14:32:00 PM"
	},
	{"key": "868","productName": "Smart Phone","qtySold": 3,"total": 2904,"date": "2023/08/05 16:05:00 PM"
	},
	{"key": "869","productName": "Laptop","qtySold": 8,"total": 7840,"date": "2023/08/06 08:20:00 PM"
	},
	{"key": "870","productName": "Tablet","qtySold": 10,"total": 9490,"date": "2023/08/06 13:08:00 PM"
	},
	{"key": "871","productName": "Tablet","qtySold": 9,"total": 8676,"date": "2023/08/06 13:01:00 PM"
	},
	{"key": "872","productName": "Smart Phone","qtySold": 2,"total": 1940,"date": "2023/08/06 11:14:00 PM"
	},
	{"key": "873","productName": "Tablet","qtySold": 8,"total": 7248,"date": "2023/08/07 08:29:00 PM"
	},
	{"key": "874","productName": "Headphones","qtySold": 1,"total": 996,"date": "2023/08/07 14:18:00 PM"
	},
	{"key": "875","productName": "Tablet","qtySold": 1,"total": 926,"date": "2023/08/07 19:17:00 PM"
	},
	{"key": "876","productName": "Smart Phone","qtySold": 9,"total": 8721,"date": "2023/08/07 09:53:00 PM"
	},
	{"key": "877","productName": "Laptop","qtySold": 10,"total": 9010,"date": "2023/08/08 15:25:00 PM"
	},
	{"key": "878","productName": "Smart Phone","qtySold": 5,"total": 4970,"date": "2023/08/08 08:41:00 PM"
	},
	{"key": "879","productName": "Headphones","qtySold": 4,"total": 3636,"date": "2023/08/08 12:44:00 PM"
	},
	{"key": "880","productName": "Smart Phone","qtySold": 8,"total": 7496,"date": "2023/08/08 12:51:00 PM"
	},
	{"key": "881","productName": "Tablet","qtySold": 9,"total": 9000,"date": "2023/08/09 16:56:00 PM"
	},
	{"key": "882","productName": "Tablet","qtySold": 3,"total": 2898,"date": "2023/08/09 18:21:00 PM"
	},
	{"key": "883","productName": "Laptop","qtySold": 7,"total": 6818,"date": "2023/08/09 12:32:00 PM"
	},
	{"key": "884","productName": "Laptop","qtySold": 10,"total": 9900,"date": "2023/08/09 18:11:00 PM"
	},
	{"key": "885","productName": "Headphones","qtySold": 6,"total": 5856,"date": "2023/08/09 15:00:00 PM"
	},
	{"key": "886","productName": "Tablet","qtySold": 7,"total": 6489,"date": "2023/08/10 11:29:00 PM"
	},
	{"key": "887","productName": "Headphones","qtySold": 7,"total": 6776,"date": "2023/08/10 11:34:00 PM"
	},
	{"key": "888","productName": "Smart Phone","qtySold": 7,"total": 6328,"date": "2023/08/10 20:52:00 PM"
	},
	{"key": "889","productName": "Headphones","qtySold": 5,"total": 4865,"date": "2023/08/11 14:53:00 PM"
	},
	{"key": "890","productName": "Headphones","qtySold": 3,"total": 2838,"date": "2023/08/11 13:26:00 PM"
	},
	{"key": "891","productName": "Laptop","qtySold": 7,"total": 6825,"date": "2023/08/11 08:43:00 PM"
	},
	{"key": "892","productName": "Tablet","qtySold": 8,"total": 7304,"date": "2023/08/11 15:03:00 PM"
	},
	{"key": "893","productName": "Smart Phone","qtySold": 3,"total": 2994,"date": "2023/08/11 20:19:00 PM"
	},
	{"key": "894","productName": "Smart Phone","qtySold": 6,"total": 5598,"date": "2023/08/12 09:50:00 PM"
	},
	{"key": "895","productName": "Tablet","qtySold": 10,"total": 10000,"date": "2023/08/12 16:59:00 PM"
	},
	{"key": "896","productName": "Laptop","qtySold": 6,"total": 5526,"date": "2023/08/12 08:31:00 PM"
	},
	{"key": "897","productName": "Headphones","qtySold": 2,"total": 1910,"date": "2023/08/13 13:23:00 PM"
	},
	{"key": "898","productName": "Laptop","qtySold": 6,"total": 5862,"date": "2023/08/13 17:40:00 PM"
	},
	{"key": "899","productName": "Tablet","qtySold": 7,"total": 6391,"date": "2023/08/13 13:30:00 PM"
	},
	{"key": "900","productName": "Headphones","qtySold": 10,"total": 9940,"date": "2023/08/13 12:24:00 PM"
	},
	{"key": "901","productName": "Laptop","qtySold": 3,"total": 2802,"date": "2023/08/13 15:06:00 PM"
	},
	{"key": "902","productName": "Tablet","qtySold": 5,"total": 4870,"date": "2023/08/14 11:22:00 PM"
	},
	{"key": "903","productName": "Tablet","qtySold": 3,"total": 3000,"date": "2023/08/14 19:25:00 PM"
	},
	{"key": "904","productName": "Headphones","qtySold": 1,"total": 974,"date": "2023/08/14 17:56:00 PM"
	},
	{"key": "905","productName": "Headphones","qtySold": 5,"total": 4575,"date": "2023/08/14 15:51:00 PM"
	},
	{"key": "906","productName": "Headphones","qtySold": 6,"total": 5622,"date": "2023/08/15 19:02:00 PM"
	},
	{"key": "907","productName": "Headphones","qtySold": 2,"total": 1864,"date": "2023/08/15 10:37:00 PM"
	},
	{"key": "908","productName": "Smart Phone","qtySold": 10,"total": 9220,"date": "2023/08/15 18:18:00 PM"
	},
	{"key": "909","productName": "Headphones","qtySold": 3,"total": 2985,"date": "2023/08/16 19:47:00 PM"
	},
	{"key": "910","productName": "Tablet","qtySold": 5,"total": 4645,"date": "2023/08/16 18:42:00 PM"
	},
	{"key": "911","productName": "Tablet","qtySold": 3,"total": 2964,"date": "2023/08/16 13:12:00 PM"
	},
	{"key": "912","productName": "Smart Phone","qtySold": 10,"total": 9880,"date": "2023/08/17 14:23:00 PM"
	},
	{"key": "913","productName": "Headphones","qtySold": 4,"total": 3976,"date": "2023/08/17 13:49:00 PM"
	},
	{"key": "914","productName": "Laptop","qtySold": 6,"total": 5580,"date": "2023/08/17 11:52:00 PM"
	},
	{"key": "915","productName": "Tablet","qtySold": 1,"total": 980,"date": "2023/08/17 09:17:00 PM"
	},
	{"key": "916","productName": "Tablet","qtySold": 5,"total": 4730,"date": "2023/08/18 14:15:00 PM"
	},
	{"key": "917","productName": "Laptop","qtySold": 2,"total": 1978,"date": "2023/08/18 13:47:00 PM"
	},
	{"key": "918","productName": "Headphones","qtySold": 9,"total": 8721,"date": "2023/08/18 09:09:00 PM"
	},
	{"key": "919","productName": "Laptop","qtySold": 3,"total": 2991,"date": "2023/08/18 13:40:00 PM"
	},
	{"key": "920","productName": "Laptop","qtySold": 7,"total": 6524,"date": "2023/08/18 10:07:00 PM"
	},
	{"key": "921","productName": "Laptop","qtySold": 7,"total": 6818,"date": "2023/08/19 12:47:00 PM"
	},
	{"key": "922","productName": "Smart Phone","qtySold": 2,"total": 1964,"date": "2023/08/19 20:32:00 PM"
	},
	{"key": "923","productName": "Smart Phone","qtySold": 5,"total": 4555,"date": "2023/08/19 08:57:00 PM"
	},
	{"key": "924","productName": "Headphones","qtySold": 4,"total": 3828,"date": "2023/08/20 13:30:00 PM"
	},
	{"key": "925","productName": "Tablet","qtySold": 8,"total": 7992,"date": "2023/08/20 09:47:00 PM"
	},
	{"key": "926","productName": "Tablet","qtySold": 9,"total": 8964,"date": "2023/08/20 09:19:00 PM"
	},
	{"key": "927","productName": "Smart Phone","qtySold": 4,"total": 3792,"date": "2023/08/20 08:56:00 PM"
	},
	{"key": "928","productName": "Tablet","qtySold": 9,"total": 8514,"date": "2023/08/20 19:53:00 PM"
	},
	{"key": "929","productName": "Tablet","qtySold": 2,"total": 1876,"date": "2023/08/21 12:52:00 PM"
	},
	{"key": "930","productName": "Smart Phone","qtySold": 2,"total": 1852,"date": "2023/08/21 15:29:00 PM"
	},
	{"key": "931","productName": "Laptop","qtySold": 8,"total": 7904,"date": "2023/08/21 08:15:00 PM"
	},
	{"key": "932","productName": "Headphones","qtySold": 9,"total": 8910,"date": "2023/08/21 11:13:00 PM"
	},
	{"key": "933","productName": "Laptop","qtySold": 9,"total": 8487,"date": "2023/08/21 18:48:00 PM"
	},
	{"key": "934","productName": "Smart Phone","qtySold": 10,"total": 9560,"date": "2023/08/22 14:47:00 PM"
	},
	{"key": "935","productName": "Tablet","qtySold": 4,"total": 3896,"date": "2023/08/22 11:08:00 PM"
	},
	{"key": "936","productName": "Tablet","qtySold": 9,"total": 8712,"date": "2023/08/22 11:27:00 PM"
	},
	{"key": "937","productName": "Laptop","qtySold": 6,"total": 5778,"date": "2023/08/22 09:44:00 PM"
	},
	{"key": "938","productName": "Tablet","qtySold": 6,"total": 5802,"date": "2023/08/23 13:15:00 PM"
	},
	{"key": "939","productName": "Smart Phone","qtySold": 10,"total": 9390,"date": "2023/08/23 16:37:00 PM"
	},
	{"key": "940","productName": "Laptop","qtySold": 8,"total": 7496,"date": "2023/08/23 19:55:00 PM"
	},
	{"key": "941","productName": "Headphones","qtySold": 1,"total": 923,"date": "2023/08/23 15:20:00 PM"
	},
	{"key": "942","productName": "Headphones","qtySold": 9,"total": 8379,"date": "2023/08/24 19:41:00 PM"
	},
	{"key": "943","productName": "Laptop","qtySold": 7,"total": 6678,"date": "2023/08/24 09:20:00 PM"
	},
	{"key": "944","productName": "Smart Phone","qtySold": 5,"total": 4785,"date": "2023/08/24 15:46:00 PM"
	},
	{"key": "945","productName": "Smart Phone","qtySold": 4,"total": 3716,"date": "2023/08/24 08:12:00 PM"
	},
	{"key": "946","productName": "Headphones","qtySold": 10,"total": 9290,"date": "2023/08/24 11:47:00 PM"
	},
	{"key": "947","productName": "Smart Phone","qtySold": 4,"total": 3944,"date": "2023/08/25 14:22:00 PM"
	},
	{"key": "948","productName": "Headphones","qtySold": 7,"total": 6468,"date": "2023/08/25 19:57:00 PM"
	},
	{"key": "949","productName": "Smart Phone","qtySold": 7,"total": 6447,"date": "2023/08/25 15:40:00 PM"
	},
	{"key": "950","productName": "Smart Phone","qtySold": 2,"total": 1964,"date": "2023/08/26 18:58:00 PM"
	},
	{"key": "951","productName": "Smart Phone","qtySold": 4,"total": 3720,"date": "2023/08/26 14:23:00 PM"
	},
	{"key": "952","productName": "Headphones","qtySold": 9,"total": 8667,"date": "2023/08/26 09:15:00 PM"
	},
	{"key": "953","productName": "Tablet","qtySold": 2,"total": 1996,"date": "2023/08/27 14:40:00 PM"
	},
	{"key": "954","productName": "Smart Phone","qtySold": 6,"total": 5568,"date": "2023/08/27 14:35:00 PM"
	},
	{"key": "955","productName": "Tablet","qtySold": 10,"total": 9720,"date": "2023/08/27 10:35:00 PM"
	},
	{"key": "956","productName": "Smart Phone","qtySold": 8,"total": 7832,"date": "2023/08/28 17:21:00 PM"
	},
	{"key": "957","productName": "Headphones","qtySold": 10,"total": 9460,"date": "2023/08/28 14:23:00 PM"
	},
	{"key": "958","productName": "Smart Phone","qtySold": 8,"total": 7944,"date": "2023/08/28 09:22:00 PM"
	},
	{"key": "959","productName": "Tablet","qtySold": 4,"total": 3908,"date": "2023/08/28 18:40:00 PM"
	},
	{"key": "960","productName": "Tablet","qtySold": 6,"total": 5508,"date": "2023/08/28 08:20:00 PM"
	},
	{"key": "961","productName": "Smart Phone","qtySold": 2,"total": 1888,"date": "2023/08/29 17:00:00 PM"
	},
	{"key": "962","productName": "Laptop","qtySold": 10,"total": 9780,"date": "2023/08/29 08:40:00 PM"
	},
	{"key": "963","productName": "Laptop","qtySold": 10,"total": 9200,"date": "2023/08/29 14:00:00 PM"
	},
	{"key": "964","productName": "Tablet","qtySold": 1,"total": 976,"date": "2023/08/30 10:37:00 PM"
	},
	{"key": "965","productName": "Headphones","qtySold": 10,"total": 9340,"date": "2023/08/30 19:28:00 PM"
	},
	{"key": "966","productName": "Tablet","qtySold": 8,"total": 7856,"date": "2023/08/30 10:44:00 PM"
	},
	{"key": "967","productName": "Laptop","qtySold": 8,"total": 7600,"date": "2023/08/30 13:02:00 PM"
	},
	{"key": "968","productName": "Tablet","qtySold": 5,"total": 4935,"date": "2023/08/30 17:10:00 PM"
	},
	{"key": "969","productName": "Smart Phone","qtySold": 3,"total": 2775,"date": "2023/08/31 20:41:00 PM"
	},
	{"key": "970","productName": "Smart Phone","qtySold": 4,"total": 3924,"date": "2023/08/31 10:46:00 PM"
	},
	{"key": "971","productName": "Tablet","qtySold": 1,"total": 977,"date": "2023/08/31 14:23:00 PM"
	},
	{"key": "972","productName": "Tablet","qtySold": 8,"total": 7840,"date": "2023/08/31 19:13:00 PM"
	},
	{"key": "973","productName": "Headphones","qtySold": 2,"total": 1956,"date": "2023/09/01 09:11:00 PM"
	},
	{"key": "974","productName": "Headphones","qtySold": 10,"total": 9390,"date": "2023/09/01 09:25:00 PM"
	},
	{"key": "975","productName": "Smart Phone","qtySold": 6,"total": 5838,"date": "2023/09/01 19:20:00 PM"
	},
	{"key": "976","productName": "Smart Phone","qtySold": 10,"total": 9550,"date": "2023/09/01 13:55:00 PM"
	},
	{"key": "977","productName": "Laptop","qtySold": 8,"total": 7296,"date": "2023/09/02 14:25:00 PM"
	},
	{"key": "978","productName": "Smart Phone","qtySold": 8,"total": 7552,"date": "2023/09/02 16:08:00 PM"
	},
	{"key": "979","productName": "Smart Phone","qtySold": 9,"total": 8469,"date": "2023/09/02 14:15:00 PM"
	},
	{"key": "980","productName": "Headphones","qtySold": 9,"total": 8730,"date": "2023/09/02 10:05:00 PM"
	},
	{"key": "981","productName": "Smart Phone","qtySold": 9,"total": 8442,"date": "2023/09/03 19:04:00 PM"
	},
	{"key": "982","productName": "Laptop","qtySold": 3,"total": 2937,"date": "2023/09/03 16:36:00 PM"
	},
	{"key": "983","productName": "Laptop","qtySold": 6,"total": 5796,"date": "2023/09/03 20:13:00 PM"
	},
	{"key": "984","productName": "Tablet","qtySold": 8,"total": 7872,"date": "2023/09/03 16:13:00 PM"
	},
	{"key": "985","productName": "Smart Phone","qtySold": 4,"total": 3736,"date": "2023/09/03 16:35:00 PM"
	},
	{"key": "986","productName": "Headphones","qtySold": 7,"total": 6965,"date": "2023/09/04 13:08:00 PM"
	},
	{"key": "987","productName": "Tablet","qtySold": 6,"total": 5436,"date": "2023/09/04 17:36:00 PM"
	},
	{"key": "988","productName": "Headphones","qtySold": 4,"total": 3992,"date": "2023/09/04 08:40:00 PM"
	},
	{"key": "989","productName": "Laptop","qtySold": 3,"total": 2922,"date": "2023/09/04 15:46:00 PM"
	},
	{"key": "990","productName": "Smart Phone","qtySold": 6,"total": 5964,"date": "2023/09/05 12:14:00 PM"
	},
	{"key": "991","productName": "Laptop","qtySold": 7,"total": 6573,"date": "2023/09/05 08:37:00 PM"
	},
	{"key": "992","productName": "Laptop","qtySold": 3,"total": 2823,"date": "2023/09/05 20:08:00 PM"
	},
	{"key": "993","productName": "Smart Phone","qtySold": 8,"total": 7392,"date": "2023/09/05 17:19:00 PM"
	},
	{"key": "994","productName": "Smart Phone","qtySold": 1,"total": 936,"date": "2023/09/05 20:29:00 PM"
	},
	{"key": "995","productName": "Laptop","qtySold": 3,"total": 2781,"date": "2023/09/06 11:24:00 PM"
	},
	{"key": "996","productName": "Smart Phone","qtySold": 7,"total": 6377,"date": "2023/09/06 18:52:00 PM"
	},
	{"key": "997","productName": "Laptop","qtySold": 4,"total": 3720,"date": "2023/09/06 16:43:00 PM"
	},
	{"key": "998","productName": "Tablet","qtySold": 5,"total": 4650,"date": "2023/09/06 15:50:00 PM"
	},
	{"key": "999","productName": "Tablet","qtySold": 7,"total": 6363,"date": "2023/09/07 17:45:00 PM"
	},
	{"key": "1000","productName": "Headphones","qtySold": 5,"total": 4740,"date": "2023/09/07 08:57:00 PM"
	},
	{"key": "1001","productName": "Headphones","qtySold": 1,"total": 963,"date": "2023/09/07 18:02:00 PM"
	},
	{"key": "1002","productName": "Smart Phone","qtySold": 4,"total": 3640,"date": "2023/09/08 09:49:00 PM"
	},
	{"key": "1003","productName": "Laptop","qtySold": 8,"total": 7656,"date": "2023/09/08 11:29:00 PM"
	},
	{"key": "1004","productName": "Headphones","qtySold": 3,"total": 2748,"date": "2023/09/08 17:08:00 PM"
	},
	{"key": "1005","productName": "Tablet","qtySold": 9,"total": 8910,"date": "2023/09/09 10:40:00 PM"
	},
	{"key": "1006","productName": "Headphones","qtySold": 6,"total": 5568,"date": "2023/09/09 16:11:00 PM"
	},
	{"key": "1007","productName": "Smart Phone","qtySold": 9,"total": 8406,"date": "2023/09/09 10:22:00 PM"
	},
	{"key": "1008","productName": "Headphones","qtySold": 7,"total": 6377,"date": "2023/09/10 13:02:00 PM"
	},
	{"key": "1009","productName": "Smart Phone","qtySold": 8,"total": 7664,"date": "2023/09/10 13:27:00 PM"
	},
	{"key": "1010","productName": "Tablet","qtySold": 3,"total": 2721,"date": "2023/09/10 09:07:00 PM"
	},
	{"key": "1011","productName": "Tablet","qtySold": 3,"total": 2709,"date": "2023/09/11 13:05:00 PM"
	},
	{"key": "1012","productName": "Tablet","qtySold": 10,"total": 9160,"date": "2023/09/11 14:21:00 PM"
	},
	{"key": "1013","productName": "Laptop","qtySold": 10,"total": 9670,"date": "2023/09/11 13:23:00 PM"
	},
	{"key": "1014","productName": "Laptop","qtySold": 7,"total": 6489,"date": "2023/09/12 14:30:00 PM"
	},
	{"key": "1015","productName": "Headphones","qtySold": 9,"total": 8289,"date": "2023/09/12 12:30:00 PM"
	},
	{"key": "1016","productName": "Smart Phone","qtySold": 4,"total": 3704,"date": "2023/09/12 10:46:00 PM"
	},
	{"key": "1017","productName": "Laptop","qtySold": 9,"total": 8658,"date": "2023/09/12 16:27:00 PM"
	},
	{"key": "1018","productName": "Smart Phone","qtySold": 5,"total": 4730,"date": "2023/09/13 10:11:00 PM"
	},
	{"key": "1019","productName": "Tablet","qtySold": 1,"total": 963,"date": "2023/09/13 08:45:00 PM"
	},
	{"key": "1020","productName": "Laptop","qtySold": 3,"total": 2727,"date": "2023/09/13 18:33:00 PM"
	},
	{"key": "1021","productName": "Laptop","qtySold": 5,"total": 4920,"date": "2023/09/14 08:47:00 PM"
	},
	{"key": "1022","productName": "Tablet","qtySold": 4,"total": 3956,"date": "2023/09/14 12:37:00 PM"
	},
	{"key": "1023","productName": "Smart Phone","qtySold": 2,"total": 1882,"date": "2023/09/14 19:07:00 PM"
	},
	{"key": "1024","productName": "Laptop","qtySold": 10,"total": 9870,"date": "2023/09/14 10:45:00 PM"
	},
	{"key": "1025","productName": "Tablet","qtySold": 6,"total": 5952,"date": "2023/09/15 12:04:00 PM"
	},
	{"key": "1026","productName": "Laptop","qtySold": 8,"total": 7792,"date": "2023/09/15 14:12:00 PM"
	},
	{"key": "1027","productName": "Headphones","qtySold": 7,"total": 6629,"date": "2023/09/15 15:14:00 PM"
	},
	{"key": "1028","productName": "Smart Phone","qtySold": 5,"total": 4955,"date": "2023/09/16 20:57:00 PM"
	},
	{"key": "1029","productName": "Tablet","qtySold": 7,"total": 6482,"date": "2023/09/16 16:12:00 PM"
	},
	{"key": "1030","productName": "Laptop","qtySold": 4,"total": 3768,"date": "2023/09/16 09:01:00 PM"
	},
	{"key": "1031","productName": "Headphones","qtySold": 10,"total": 9370,"date": "2023/09/17 19:38:00 PM"
	},
	{"key": "1032","productName": "Laptop","qtySold": 9,"total": 8514,"date": "2023/09/17 15:25:00 PM"
	},
	{"key": "1033","productName": "Laptop","qtySold": 3,"total": 2736,"date": "2023/09/17 13:11:00 PM"
	},
	{"key": "1034","productName": "Tablet","qtySold": 3,"total": 2901,"date": "2023/09/18 16:29:00 PM"
	},
	{"key": "1035","productName": "Tablet","qtySold": 10,"total": 9160,"date": "2023/09/18 12:31:00 PM"
	},
	{"key": "1036","productName": "Smart Phone","qtySold": 6,"total": 5442,"date": "2023/09/18 17:27:00 PM"
	},
	{"key": "1037","productName": "Smart Phone","qtySold": 5,"total": 4770,"date": "2023/09/19 11:18:00 PM"
	},
	{"key": "1038","productName": "Tablet","qtySold": 9,"total": 8127,"date": "2023/09/19 11:04:00 PM"
	},
	{"key": "1039","productName": "Tablet","qtySold": 9,"total": 8847,"date": "2023/09/19 11:43:00 PM"
	},
	{"key": "1040","productName": "Headphones","qtySold": 9,"total": 8253,"date": "2023/09/20 17:26:00 PM"
	},
	{"key": "1041","productName": "Tablet","qtySold": 10,"total": 9970,"date": "2023/09/20 12:36:00 PM"
	},
	{"key": "1042","productName": "Smart Phone","qtySold": 5,"total": 4595,"date": "2023/09/20 14:31:00 PM"
	},
	{"key": "1043","productName": "Headphones","qtySold": 5,"total": 4950,"date": "2023/09/20 09:57:00 PM"
	},
	{"key": "1044","productName": "Tablet","qtySold": 3,"total": 2898,"date": "2023/09/20 17:55:00 PM"
	},
	{"key": "1045","productName": "Headphones","qtySold": 1,"total": 992,"date": "2023/09/21 16:39:00 PM"
	},
	{"key": "1046","productName": "Smart Phone","qtySold": 9,"total": 8496,"date": "2023/09/21 14:42:00 PM"
	},
	{"key": "1047","productName": "Smart Phone","qtySold": 1,"total": 904,"date": "2023/09/21 16:55:00 PM"
	},
	{"key": "1048","productName": "Tablet","qtySold": 2,"total": 1948,"date": "2023/09/21 10:07:00 PM"
	},
	{"key": "1049","productName": "Headphones","qtySold": 4,"total": 3668,"date": "2023/09/21 11:17:00 PM"
	},
	{"key": "1050","productName": "Laptop","qtySold": 3,"total": 2988,"date": "2023/09/22 18:45:00 PM"
	},
	{"key": "1051","productName": "Laptop","qtySold": 10,"total": 9760,"date": "2023/09/22 16:08:00 PM"
	},
	{"key": "1052","productName": "Headphones","qtySold": 7,"total": 6300,"date": "2023/09/22 10:39:00 PM"
	},
	{"key": "1053","productName": "Smart Phone","qtySold": 1,"total": 933,"date": "2023/09/22 15:43:00 PM"
	},
	{"key": "1054","productName": "Tablet","qtySold": 5,"total": 4900,"date": "2023/09/22 16:28:00 PM"
	},
	{"key": "1055","productName": "Smart Phone","qtySold": 3,"total": 2775,"date": "2023/09/23 12:27:00 PM"
	},
	{"key": "1056","productName": "Headphones","qtySold": 6,"total": 5454,"date": "2023/09/23 15:51:00 PM"
	},
	{"key": "1057","productName": "Tablet","qtySold": 10,"total": 9880,"date": "2023/09/23 20:38:00 PM"
	},
	{"key": "1058","productName": "Headphones","qtySold": 6,"total": 5532,"date": "2023/09/23 13:50:00 PM"
	},
	{"key": "1059","productName": "Smart Phone","qtySold": 8,"total": 7736,"date": "2023/09/23 12:00:00 PM"
	},
	{"key": "1060","productName": "Tablet","qtySold": 7,"total": 6825,"date": "2023/09/24 18:09:00 PM"
	},
	{"key": "1061","productName": "Tablet","qtySold": 3,"total": 2724,"date": "2023/09/24 11:46:00 PM"
	},
	{"key": "1062","productName": "Laptop","qtySold": 10,"total": 9030,"date": "2023/09/24 16:03:00 PM"
	},
	{"key": "1063","productName": "Smart Phone","qtySold": 3,"total": 2751,"date": "2023/09/24 13:37:00 PM"
	},
	{"key": "1064","productName": "Tablet","qtySold": 6,"total": 5898,"date": "2023/09/25 12:30:00 PM"
	},
	{"key": "1065","productName": "Smart Phone","qtySold": 3,"total": 2967,"date": "2023/09/25 10:55:00 PM"
	},
	{"key": "1066","productName": "Laptop","qtySold": 4,"total": 3700,"date": "2023/09/25 09:46:00 PM"
	},
	{"key": "1067","productName": "Smart Phone","qtySold": 7,"total": 6622,"date": "2023/09/25 10:41:00 PM"
	},
	{"key": "1068","productName": "Headphones","qtySold": 2,"total": 1898,"date": "2023/09/26 14:42:00 PM"
	},
	{"key": "1069","productName": "Headphones","qtySold": 9,"total": 8820,"date": "2023/09/26 15:11:00 PM"
	},
	{"key": "1070","productName": "Headphones","qtySold": 5,"total": 4725,"date": "2023/09/26 19:56:00 PM"
	},
	{"key": "1071","productName": "Laptop","qtySold": 6,"total": 5442,"date": "2023/09/26 12:35:00 PM"
	},
	{"key": "1072","productName": "Laptop","qtySold": 1,"total": 974,"date": "2023/09/27 09:47:00 PM"
	},
	{"key": "1073","productName": "Smart Phone","qtySold": 6,"total": 5532,"date": "2023/09/27 15:21:00 PM"
	},
	{"key": "1074","productName": "Smart Phone","qtySold": 4,"total": 3772,"date": "2023/09/27 10:02:00 PM"
	},
	{"key": "1075","productName": "Laptop","qtySold": 10,"total": 9860,"date": "2023/09/27 19:42:00 PM"
	},
	{"key": "1076","productName": "Laptop","qtySold": 3,"total": 2862,"date": "2023/09/28 11:19:00 PM"
	},
	{"key": "1077","productName": "Tablet","qtySold": 5,"total": 4515,"date": "2023/09/28 09:08:00 PM"
	},
	{"key": "1078","productName": "Headphones","qtySold": 8,"total": 7752,"date": "2023/09/28 20:14:00 PM"
	},
	{"key": "1079","productName": "Headphones","qtySold": 3,"total": 2979,"date": "2023/09/28 14:03:00 PM"
	},
	{"key": "1080","productName": "Smart Phone","qtySold": 7,"total": 6482,"date": "2023/09/28 16:24:00 PM"
	},
	{"key": "1081","productName": "Tablet","qtySold": 3,"total": 2733,"date": "2023/09/29 16:16:00 PM"
	},
	{"key": "1082","productName": "Laptop","qtySold": 7,"total": 6685,"date": "2023/09/29 10:10:00 PM"
	},
	{"key": "1083","productName": "Laptop","qtySold": 1,"total": 982,"date": "2023/09/29 08:25:00 PM"
	},
	{"key": "1084","productName": "Headphones","qtySold": 3,"total": 2889,"date": "2023/09/29 08:19:00 PM"
	},
	{"key": "1085","productName": "Tablet","qtySold": 7,"total": 6419,"date": "2023/09/29 19:15:00 PM"
	},
	{"key": "1086","productName": "Smart Phone","qtySold": 5,"total": 4625,"date": "2023/09/30 19:55:00 PM"
	},
	{"key": "1087","productName": "Headphones","qtySold": 6,"total": 5904,"date": "2023/09/30 14:15:00 PM"
	},
	{"key": "1088","productName": "Tablet","qtySold": 9,"total": 8622,"date": "2023/09/30 15:08:00 PM"
	},
	{"key": "1089","productName": "Tablet","qtySold": 6,"total": 5850,"date": "2023/10/01 11:14:00 PM"
	},
	{"key": "1090","productName": "Tablet","qtySold": 8,"total": 7376,"date": "2023/10/01 17:09:00 PM"
	},
	{"key": "1091","productName": "Smart Phone","qtySold": 2,"total": 1902,"date": "2023/10/01 15:43:00 PM"
	},
	{"key": "1092","productName": "Headphones","qtySold": 7,"total": 6300,"date": "2023/10/01 12:13:00 PM"
	},
	{"key": "1093","productName": "Smart Phone","qtySold": 8,"total": 7688,"date": "2023/10/01 08:20:00 PM"
	},
	{"key": "1094","productName": "Smart Phone","qtySold": 1,"total": 977,"date": "2023/10/02 09:38:00 PM"
	},
	{"key": "1095","productName": "Tablet","qtySold": 6,"total": 5778,"date": "2023/10/02 17:54:00 PM"
	},
	{"key": "1096","productName": "Laptop","qtySold": 7,"total": 6454,"date": "2023/10/02 18:08:00 PM"
	},
	{"key": "1097","productName": "Smart Phone","qtySold": 9,"total": 8550,"date": "2023/10/03 18:54:00 PM"
	},
	{"key": "1098","productName": "Laptop","qtySold": 2,"total": 1922,"date": "2023/10/03 08:42:00 PM"
	},
	{"key": "1099","productName": "Laptop","qtySold": 1,"total": 920,"date": "2023/10/03 20:10:00 PM"
	},
	{"key": "1100","productName": "Headphones","qtySold": 4,"total": 3816,"date": "2023/10/03 19:07:00 PM"
	},
	{"key": "1101","productName": "Tablet","qtySold": 4,"total": 3728,"date": "2023/10/03 14:49:00 PM"
	},
	{"key": "1102","productName": "Smart Phone","qtySold": 8,"total": 7632,"date": "2023/10/04 14:32:00 PM"
	},
	{"key": "1103","productName": "Smart Phone","qtySold": 7,"total": 6825,"date": "2023/10/04 19:18:00 PM"
	},
	{"key": "1104","productName": "Headphones","qtySold": 1,"total": 982,"date": "2023/10/04 15:46:00 PM"
	},
	{"key": "1105","productName": "Smart Phone","qtySold": 6,"total": 5718,"date": "2023/10/04 15:38:00 PM"
	},
	{"key": "1106","productName": "Laptop","qtySold": 4,"total": 3736,"date": "2023/10/04 16:04:00 PM"
	},
	{"key": "1107","productName": "Tablet","qtySold": 1,"total": 979,"date": "2023/10/05 08:00:00 PM"
	},
	{"key": "1108","productName": "Headphones","qtySold": 8,"total": 7616,"date": "2023/10/05 12:19:00 PM"
	},
	{"key": "1109","productName": "Tablet","qtySold": 5,"total": 4895,"date": "2023/10/05 15:41:00 PM"
	},
	{"key": "1110","productName": "Smart Phone","qtySold": 6,"total": 5652,"date": "2023/10/05 18:40:00 PM"
	},
	{"key": "1111","productName": "Tablet","qtySold": 5,"total": 4515,"date": "2023/10/06 15:34:00 PM"
	},
	{"key": "1112","productName": "Tablet","qtySold": 1,"total": 900,"date": "2023/10/06 15:50:00 PM"
	},
	{"key": "1113","productName": "Laptop","qtySold": 3,"total": 2997,"date": "2023/10/06 18:41:00 PM"
	},
	{"key": "1114","productName": "Laptop","qtySold": 5,"total": 4990,"date": "2023/10/07 14:57:00 PM"
	},
	{"key": "1115","productName": "Smart Phone","qtySold": 1,"total": 901,"date": "2023/10/07 18:46:00 PM"
	},
	{"key": "1116","productName": "Smart Phone","qtySold": 5,"total": 4895,"date": "2023/10/07 10:16:00 PM"
	},
	{"key": "1117","productName": "Laptop","qtySold": 10,"total": 9990,"date": "2023/10/07 13:55:00 PM"
	},
	{"key": "1118","productName": "Laptop","qtySold": 2,"total": 1994,"date": "2023/10/08 10:29:00 PM"
	},
	{"key": "1119","productName": "Headphones","qtySold": 6,"total": 5748,"date": "2023/10/08 11:36:00 PM"
	},
	{"key": "1120","productName": "Tablet","qtySold": 7,"total": 6916,"date": "2023/10/08 20:29:00 PM"
	},
	{"key": "1121","productName": "Headphones","qtySold": 6,"total": 5766,"date": "2023/10/08 19:28:00 PM"
	},
	{"key": "1122","productName": "Headphones","qtySold": 6,"total": 5682,"date": "2023/10/08 08:09:00 PM"
	},
	{"key": "1123","productName": "Laptop","qtySold": 10,"total": 9920,"date": "2023/10/09 19:59:00 PM"
	},
	{"key": "1124","productName": "Smart Phone","qtySold": 7,"total": 6734,"date": "2023/10/09 18:51:00 PM"
	},
	{"key": "1125","productName": "Headphones","qtySold": 9,"total": 8820,"date": "2023/10/09 16:33:00 PM"
	},
	{"key": "1126","productName": "Laptop","qtySold": 6,"total": 5730,"date": "2023/10/09 11:16:00 PM"
	},
	{"key": "1127","productName": "Tablet","qtySold": 7,"total": 6531,"date": "2023/10/10 13:34:00 PM"
	},
	{"key": "1128","productName": "Headphones","qtySold": 2,"total": 1852,"date": "2023/10/10 11:31:00 PM"
	},
	{"key": "1129","productName": "Tablet","qtySold": 1,"total": 987,"date": "2023/10/10 16:03:00 PM"
	},
	{"key": "1130","productName": "Smart Phone","qtySold": 10,"total": 9440,"date": "2023/10/10 10:39:00 PM"
	},
	{"key": "1131","productName": "Headphones","qtySold": 4,"total": 3640,"date": "2023/10/11 18:56:00 PM"
	},
	{"key": "1132","productName": "Smart Phone","qtySold": 10,"total": 9170,"date": "2023/10/11 16:40:00 PM"
	},
	{"key": "1133","productName": "Tablet","qtySold": 7,"total": 6384,"date": "2023/10/11 09:00:00 PM"
	},
	{"key": "1134","productName": "Laptop","qtySold": 5,"total": 4695,"date": "2023/10/11 18:29:00 PM"
	},
	{"key": "1135","productName": "Headphones","qtySold": 8,"total": 7776,"date": "2023/10/12 08:29:00 PM"
	},
	{"key": "1136","productName": "Tablet","qtySold": 3,"total": 2865,"date": "2023/10/12 20:22:00 PM"
	},
	{"key": "1137","productName": "Headphones","qtySold": 1,"total": 917,"date": "2023/10/12 11:54:00 PM"
	},
	{"key": "1138","productName": "Smart Phone","qtySold": 3,"total": 2769,"date": "2023/10/13 12:52:00 PM"
	},
	{"key": "1139","productName": "Laptop","qtySold": 8,"total": 7416,"date": "2023/10/13 13:15:00 PM"
	},
	{"key": "1140","productName": "Smart Phone","qtySold": 1,"total": 941,"date": "2023/10/13 19:49:00 PM"
	},
	{"key": "1141","productName": "Laptop","qtySold": 4,"total": 3704,"date": "2023/10/14 13:29:00 PM"
	},
	{"key": "1142","productName": "Headphones","qtySold": 1,"total": 928,"date": "2023/10/14 16:21:00 PM"
	},
	{"key": "1143","productName": "Laptop","qtySold": 8,"total": 7864,"date": "2023/10/14 09:56:00 PM"
	},
	{"key": "1144","productName": "Tablet","qtySold": 3,"total": 2979,"date": "2023/10/14 08:42:00 PM"
	},
	{"key": "1145","productName": "Laptop","qtySold": 6,"total": 5742,"date": "2023/10/15 13:43:00 PM"
	},
	{"key": "1146","productName": "Smart Phone","qtySold": 2,"total": 1876,"date": "2023/10/15 17:43:00 PM"
	},
	{"key": "1147","productName": "Smart Phone","qtySold": 2,"total": 1834,"date": "2023/10/15 16:13:00 PM"
	},
	{"key": "1148","productName": "Tablet","qtySold": 1,"total": 936,"date": "2023/10/15 17:20:00 PM"
	},
	{"key": "1149","productName": "Headphones","qtySold": 7,"total": 6923,"date": "2023/10/15 09:36:00 PM"
	},
	{"key": "1150","productName": "Laptop","qtySold": 6,"total": 5838,"date": "2023/10/16 19:13:00 PM"
	},
	{"key": "1151","productName": "Laptop","qtySold": 9,"total": 8586,"date": "2023/10/16 17:45:00 PM"
	},
	{"key": "1152","productName": "Laptop","qtySold": 10,"total": 9980,"date": "2023/10/16 19:22:00 PM"
	},
	{"key": "1153","productName": "Headphones","qtySold": 3,"total": 2898,"date": "2023/10/16 20:24:00 PM"
	},
	{"key": "1154","productName": "Tablet","qtySold": 6,"total": 5400,"date": "2023/10/16 14:27:00 PM"
	},
	{"key": "1155","productName": "Laptop","qtySold": 3,"total": 2838,"date": "2023/10/17 19:04:00 PM"
	},
	{"key": "1156","productName": "Laptop","qtySold": 5,"total": 4550,"date": "2023/10/17 18:31:00 PM"
	},
	{"key": "1157","productName": "Smart Phone","qtySold": 7,"total": 6951,"date": "2023/10/17 20:38:00 PM"
	},
	{"key": "1158","productName": "Laptop","qtySold": 8,"total": 8000,"date": "2023/10/18 08:42:00 PM"
	},
	{"key": "1159","productName": "Tablet","qtySold": 7,"total": 6678,"date": "2023/10/18 18:45:00 PM"
	},
	{"key": "1160","productName": "Headphones","qtySold": 6,"total": 5868,"date": "2023/10/18 14:33:00 PM"
	},
	{"key": "1161","productName": "Laptop","qtySold": 10,"total": 9090,"date": "2023/10/19 15:32:00 PM"
	},
	{"key": "1162","productName": "Headphones","qtySold": 7,"total": 6531,"date": "2023/10/19 08:12:00 PM"
	},
	{"key": "1163","productName": "Tablet","qtySold": 8,"total": 7800,"date": "2023/10/19 20:40:00 PM"
	},
	{"key": "1164","productName": "Smart Phone","qtySold": 4,"total": 3772,"date": "2023/10/19 12:16:00 PM"
	},
	{"key": "1165","productName": "Headphones","qtySold": 10,"total": 9570,"date": "2023/10/19 08:59:00 PM"
	},
	{"key": "1166","productName": "Tablet","qtySold": 10,"total": 9830,"date": "2023/10/20 12:29:00 PM"
	},
	{"key": "1167","productName": "Smart Phone","qtySold": 5,"total": 4685,"date": "2023/10/20 16:16:00 PM"
	},
	{"key": "1168","productName": "Tablet","qtySold": 2,"total": 1828,"date": "2023/10/20 09:34:00 PM"
	},
	{"key": "1169","productName": "Tablet","qtySold": 6,"total": 5634,"date": "2023/10/20 20:39:00 PM"
	},
	{"key": "1170","productName": "Tablet","qtySold": 3,"total": 2991,"date": "2023/10/21 19:11:00 PM"
	},
	{"key": "1171","productName": "Headphones","qtySold": 10,"total": 9890,"date": "2023/10/21 16:40:00 PM"
	},
	{"key": "1172","productName": "Headphones","qtySold": 5,"total": 4875,"date": "2023/10/21 10:38:00 PM"
	},
	{"key": "1173","productName": "Tablet","qtySold": 6,"total": 5664,"date": "2023/10/21 20:35:00 PM"
	},
	{"key": "1174","productName": "Laptop","qtySold": 5,"total": 4520,"date": "2023/10/22 08:36:00 PM"
	},
	{"key": "1175","productName": "Headphones","qtySold": 3,"total": 2892,"date": "2023/10/22 11:48:00 PM"
	},
	{"key": "1176","productName": "Laptop","qtySold": 9,"total": 8892,"date": "2023/10/22 15:56:00 PM"
	},
	{"key": "1177","productName": "Smart Phone","qtySold": 1,"total": 957,"date": "2023/10/23 13:18:00 PM"
	},
	{"key": "1178","productName": "Laptop","qtySold": 3,"total": 2730,"date": "2023/10/23 20:10:00 PM"
	},
	{"key": "1179","productName": "Smart Phone","qtySold": 3,"total": 2817,"date": "2023/10/23 13:14:00 PM"
	},
	{"key": "1180","productName": "Tablet","qtySold": 1,"total": 906,"date": "2023/10/24 17:04:00 PM"
	},
	{"key": "1181","productName": "Smart Phone","qtySold": 10,"total": 9070,"date": "2023/10/24 13:29:00 PM"
	},
	{"key": "1182","productName": "Laptop","qtySold": 8,"total": 7312,"date": "2023/10/24 20:24:00 PM"
	},
	{"key": "1183","productName": "Tablet","qtySold": 8,"total": 7920,"date": "2023/10/25 12:45:00 PM"
	},
	{"key": "1184","productName": "Laptop","qtySold": 7,"total": 6818,"date": "2023/10/25 10:15:00 PM"
	},
	{"key": "1185","productName": "Smart Phone","qtySold": 4,"total": 3692,"date": "2023/10/25 17:48:00 PM"
	},
	{"key": "1186","productName": "Laptop","qtySold": 5,"total": 5000,"date": "2023/10/25 14:26:00 PM"
	},
	{"key": "1187","productName": "Headphones","qtySold": 6,"total": 5574,"date": "2023/10/25 15:38:00 PM"
	},
	{"key": "1188","productName": "Tablet","qtySold": 2,"total": 1940,"date": "2023/10/26 15:18:00 PM"
	},
	{"key": "1189","productName": "Headphones","qtySold": 10,"total": 9890,"date": "2023/10/26 11:08:00 PM"
	},
	{"key": "1190","productName": "Headphones","qtySold": 8,"total": 8000,"date": "2023/10/26 08:08:00 PM"
	},
	{"key": "1191","productName": "Tablet","qtySold": 8,"total": 7544,"date": "2023/10/27 17:26:00 PM"
	},
	{"key": "1192","productName": "Laptop","qtySold": 1,"total": 948,"date": "2023/10/27 20:31:00 PM"
	},
	{"key": "1193","productName": "Smart Phone","qtySold": 9,"total": 8226,"date": "2023/10/27 18:00:00 PM"
	},
	{"key": "1194","productName": "Smart Phone","qtySold": 9,"total": 8802,"date": "2023/10/27 14:36:00 PM"
	},
	{"key": "1195","productName": "Headphones","qtySold": 4,"total": 3628,"date": "2023/10/28 13:03:00 PM"
	},
	{"key": "1196","productName": "Tablet","qtySold": 8,"total": 7920,"date": "2023/10/28 13:01:00 PM"
	},
	{"key": "1197","productName": "Tablet","qtySold": 1,"total": 929,"date": "2023/10/28 10:22:00 PM"
	},
	{"key": "1198","productName": "Laptop","qtySold": 3,"total": 2973,"date": "2023/10/29 18:37:00 PM"
	},
	{"key": "1199","productName": "Laptop","qtySold": 8,"total": 7856,"date": "2023/10/29 12:16:00 PM"
	},
	{"key": "1200","productName": "Tablet","qtySold": 6,"total": 5700,"date": "2023/10/29 19:32:00 PM"
	},
	{"key": "1201","productName": "Smart Phone","qtySold": 10,"total": 9500,"date": "2023/10/30 11:33:00 PM"
	},
	{"key": "1202","productName": "Smart Phone","qtySold": 8,"total": 7376,"date": "2023/10/30 16:03:00 PM"
	},
	{"key": "1203","productName": "Laptop","qtySold": 8,"total": 7592,"date": "2023/10/30 13:05:00 PM"
	},
	{"key": "1204","productName": "Smart Phone","qtySold": 1,"total": 908,"date": "2023/10/31 08:55:00 PM"
	},
	{"key": "1205","productName": "Laptop","qtySold": 6,"total": 5988,"date": "2023/10/31 19:28:00 PM"
	},
	{"key": "1206","productName": "Tablet","qtySold": 1,"total": 945,"date": "2023/10/31 18:19:00 PM"
	},
	{"key": "1207","productName": "Tablet","qtySold": 10,"total": 9110,"date": "2023/10/31 09:59:00 PM"
	},
	{"key": "1208","productName": "Headphones","qtySold": 1,"total": 906,"date": "2023/11/01 15:47:00 PM"
	},
	{"key": "1209","productName": "Headphones","qtySold": 1,"total": 958,"date": "2023/11/01 11:51:00 PM"
	},
	{"key": "1210","productName": "Laptop","qtySold": 9,"total": 8919,"date": "2023/11/01 12:56:00 PM"
	},
	{"key": "1211","productName": "Laptop","qtySold": 6,"total": 5976,"date": "2023/11/01 15:58:00 PM"
	},
	{"key": "1212","productName": "Headphones","qtySold": 9,"total": 8478,"date": "2023/11/02 20:14:00 PM"
	},
	{"key": "1213","productName": "Tablet","qtySold": 2,"total": 1804,"date": "2023/11/02 19:34:00 PM"
	},
	{"key": "1214","productName": "Laptop","qtySold": 6,"total": 5904,"date": "2023/11/02 11:12:00 PM"
	},
	{"key": "1215","productName": "Laptop","qtySold": 10,"total": 9870,"date": "2023/11/02 10:32:00 PM"
	},
	{"key": "1216","productName": "Smart Phone","qtySold": 8,"total": 7720,"date": "2023/11/03 11:27:00 PM"
	},
	{"key": "1217","productName": "Smart Phone","qtySold": 8,"total": 7808,"date": "2023/11/03 17:49:00 PM"
	},
	{"key": "1218","productName": "Laptop","qtySold": 1,"total": 919,"date": "2023/11/03 09:39:00 PM"
	},
	{"key": "1219","productName": "Tablet","qtySold": 7,"total": 6671,"date": "2023/11/03 16:15:00 PM"
	},
	{"key": "1220","productName": "Headphones","qtySold": 5,"total": 4820,"date": "2023/11/03 15:37:00 PM"
	},
	{"key": "1221","productName": "Headphones","qtySold": 7,"total": 6986,"date": "2023/11/04 09:10:00 PM"
	},
	{"key": "1222","productName": "Laptop","qtySold": 9,"total": 8487,"date": "2023/11/04 16:33:00 PM"
	},
	{"key": "1223","productName": "Smart Phone","qtySold": 2,"total": 1882,"date": "2023/11/04 12:05:00 PM"
	},
	{"key": "1224","productName": "Headphones","qtySold": 2,"total": 1866,"date": "2023/11/04 09:56:00 PM"
	},
	{"key": "1225","productName": "Laptop","qtySold": 7,"total": 6804,"date": "2023/11/05 08:36:00 PM"
	},
	{"key": "1226","productName": "Headphones","qtySold": 3,"total": 2958,"date": "2023/11/05 09:45:00 PM"
	},
	{"key": "1227","productName": "Headphones","qtySold": 9,"total": 8676,"date": "2023/11/05 11:28:00 PM"
	},
	{"key": "1228","productName": "Laptop","qtySold": 7,"total": 6384,"date": "2023/11/06 10:51:00 PM"
	},
	{"key": "1229","productName": "Headphones","qtySold": 1,"total": 956,"date": "2023/11/06 10:52:00 PM"
	},
	{"key": "1230","productName": "Tablet","qtySold": 7,"total": 6461,"date": "2023/11/06 17:58:00 PM"
	},
	{"key": "1231","productName": "Headphones","qtySold": 9,"total": 8388,"date": "2023/11/06 12:20:00 PM"
	},
	{"key": "1232","productName": "Smart Phone","qtySold": 8,"total": 7944,"date": "2023/11/06 14:42:00 PM"
	},
	{"key": "1233","productName": "Laptop","qtySold": 7,"total": 6335,"date": "2023/11/07 18:54:00 PM"
	},
	{"key": "1234","productName": "Tablet","qtySold": 7,"total": 6454,"date": "2023/11/07 09:46:00 PM"
	},
	{"key": "1235","productName": "Smart Phone","qtySold": 2,"total": 1804,"date": "2023/11/07 14:55:00 PM"
	},
	{"key": "1236","productName": "Smart Phone","qtySold": 8,"total": 7568,"date": "2023/11/08 14:52:00 PM"
	},
	{"key": "1237","productName": "Laptop","qtySold": 3,"total": 2946,"date": "2023/11/08 17:18:00 PM"
	},
	{"key": "1238","productName": "Headphones","qtySold": 8,"total": 7376,"date": "2023/11/08 09:03:00 PM"
	},
	{"key": "1239","productName": "Tablet","qtySold": 6,"total": 5454,"date": "2023/11/09 12:04:00 PM"
	},
	{"key": "1240","productName": "Headphones","qtySold": 1,"total": 920,"date": "2023/11/09 09:00:00 PM"
	},
	{"key": "1241","productName": "Headphones","qtySold": 10,"total": 9690,"date": "2023/11/09 11:33:00 PM"
	},
	{"key": "1242","productName": "Tablet","qtySold": 9,"total": 8136,"date": "2023/11/10 08:32:00 PM"
	},
	{"key": "1243","productName": "Tablet","qtySold": 6,"total": 5616,"date": "2023/11/10 14:43:00 PM"
	},
	{"key": "1244","productName": "Laptop","qtySold": 8,"total": 7768,"date": "2023/11/10 09:14:00 PM"
	},
	{"key": "1245","productName": "Headphones","qtySold": 2,"total": 1958,"date": "2023/11/10 08:07:00 PM"
	},
	{"key": "1246","productName": "Headphones","qtySold": 10,"total": 9080,"date": "2023/11/10 12:55:00 PM"
	},
	{"key": "1247","productName": "Laptop","qtySold": 6,"total": 5820,"date": "2023/11/11 17:08:00 PM"
	},
	{"key": "1248","productName": "Tablet","qtySold": 10,"total": 9980,"date": "2023/11/11 09:59:00 PM"
	},
	{"key": "1249","productName": "Laptop","qtySold": 6,"total": 5520,"date": "2023/11/11 13:13:00 PM"
	},
	{"key": "1250","productName": "Laptop","qtySold": 10,"total": 9130,"date": "2023/11/12 12:22:00 PM"
	},
	{"key": "1251","productName": "Smart Phone","qtySold": 6,"total": 5760,"date": "2023/11/12 20:13:00 PM"
	},
	{"key": "1252","productName": "Smart Phone","qtySold": 8,"total": 7664,"date": "2023/11/12 14:44:00 PM"
	},
	{"key": "1253","productName": "Laptop","qtySold": 6,"total": 5820,"date": "2023/11/13 20:26:00 PM"
	},
	{"key": "1254","productName": "Tablet","qtySold": 9,"total": 8415,"date": "2023/11/13 16:59:00 PM"
	},
	{"key": "1255","productName": "Smart Phone","qtySold": 5,"total": 4565,"date": "2023/11/13 17:43:00 PM"
	},
	{"key": "1256","productName": "Smart Phone","qtySold": 1,"total": 941,"date": "2023/11/13 10:55:00 PM"
	},
	{"key": "1257","productName": "Laptop","qtySold": 4,"total": 3976,"date": "2023/11/14 17:43:00 PM"
	},
	{"key": "1258","productName": "Smart Phone","qtySold": 9,"total": 8820,"date": "2023/11/14 08:08:00 PM"
	},
	{"key": "1259","productName": "Smart Phone","qtySold": 9,"total": 8946,"date": "2023/11/14 20:53:00 PM"
	},
	{"key": "1260","productName": "Tablet","qtySold": 10,"total": 9440,"date": "2023/11/14 18:17:00 PM"
	},
	{"key": "1261","productName": "Tablet","qtySold": 10,"total": 9790,"date": "2023/11/14 14:24:00 PM"
	},
	{"key": "1262","productName": "Headphones","qtySold": 5,"total": 4750,"date": "2023/11/15 12:15:00 PM"
	},
	{"key": "1263","productName": "Smart Phone","qtySold": 1,"total": 906,"date": "2023/11/15 15:36:00 PM"
	},
	{"key": "1264","productName": "Headphones","qtySold": 8,"total": 7776,"date": "2023/11/15 16:14:00 PM"
	},
	{"key": "1265","productName": "Headphones","qtySold": 9,"total": 8730,"date": "2023/11/15 13:28:00 PM"
	},
	{"key": "1266","productName": "Tablet","qtySold": 8,"total": 7552,"date": "2023/11/15 10:25:00 PM"
	},
	{"key": "1267","productName": "Tablet","qtySold": 3,"total": 2988,"date": "2023/11/16 19:04:00 PM"
	},
	{"key": "1268","productName": "Headphones","qtySold": 9,"total": 8181,"date": "2023/11/16 19:23:00 PM"
	},
	{"key": "1269","productName": "Smart Phone","qtySold": 6,"total": 5436,"date": "2023/11/16 12:12:00 PM"
	},
	{"key": "1270","productName": "Laptop","qtySold": 9,"total": 8802,"date": "2023/11/16 20:50:00 PM"
	},
	{"key": "1271","productName": "Smart Phone","qtySold": 9,"total": 8397,"date": "2023/11/17 19:14:00 PM"
	},
	{"key": "1272","productName": "Laptop","qtySold": 10,"total": 9660,"date": "2023/11/17 16:32:00 PM"
	},
	{"key": "1273","productName": "Laptop","qtySold": 3,"total": 2934,"date": "2023/11/17 09:25:00 PM"
	},
	{"key": "1274","productName": "Headphones","qtySold": 2,"total": 1890,"date": "2023/11/17 10:50:00 PM"
	},
	{"key": "1275","productName": "Smart Phone","qtySold": 4,"total": 3620,"date": "2023/11/18 11:02:00 PM"
	},
	{"key": "1276","productName": "Smart Phone","qtySold": 4,"total": 3644,"date": "2023/11/18 15:33:00 PM"
	},
	{"key": "1277","productName": "Headphones","qtySold": 8,"total": 7320,"date": "2023/11/18 09:01:00 PM"
	},
	{"key": "1278","productName": "Headphones","qtySold": 1,"total": 983,"date": "2023/11/18 18:09:00 PM"
	},
	{"key": "1279","productName": "Laptop","qtySold": 9,"total": 8595,"date": "2023/11/19 19:46:00 PM"
	},
	{"key": "1280","productName": "Smart Phone","qtySold": 9,"total": 8271,"date": "2023/11/19 11:08:00 PM"
	},
	{"key": "1281","productName": "Laptop","qtySold": 4,"total": 3888,"date": "2023/11/19 12:36:00 PM"
	},
	{"key": "1282","productName": "Laptop","qtySold": 1,"total": 937,"date": "2023/11/20 17:49:00 PM"
	},
	{"key": "1283","productName": "Laptop","qtySold": 1,"total": 981,"date": "2023/11/20 15:10:00 PM"
	},
	{"key": "1284","productName": "Laptop","qtySold": 8,"total": 7816,"date": "2023/11/20 09:20:00 PM"
	},
	{"key": "1285","productName": "Headphones","qtySold": 7,"total": 6363,"date": "2023/11/20 18:24:00 PM"
	},
	{"key": "1286","productName": "Smart Phone","qtySold": 1,"total": 907,"date": "2023/11/21 20:45:00 PM"
	},
	{"key": "1287","productName": "Headphones","qtySold": 2,"total": 1852,"date": "2023/11/21 20:50:00 PM"
	},
	{"key": "1288","productName": "Smart Phone","qtySold": 4,"total": 3812,"date": "2023/11/21 11:15:00 PM"
	},
	{"key": "1289","productName": "Laptop","qtySold": 4,"total": 3816,"date": "2023/11/21 18:22:00 PM"
	},
	{"key": "1290","productName": "Tablet","qtySold": 2,"total": 1930,"date": "2023/11/22 19:22:00 PM"
	},
	{"key": "1291","productName": "Laptop","qtySold": 2,"total": 1936,"date": "2023/11/22 14:03:00 PM"
	},
	{"key": "1292","productName": "Smart Phone","qtySold": 6,"total": 5778,"date": "2023/11/22 15:17:00 PM"
	},
	{"key": "1293","productName": "Tablet","qtySold": 2,"total": 1966,"date": "2023/11/23 13:32:00 PM"
	},
	{"key": "1294","productName": "Tablet","qtySold": 5,"total": 4580,"date": "2023/11/23 20:40:00 PM"
	},
	{"key": "1295","productName": "Laptop","qtySold": 9,"total": 8352,"date": "2023/11/23 15:56:00 PM"
	},
	{"key": "1296","productName": "Tablet","qtySold": 1,"total": 907,"date": "2023/11/24 14:14:00 PM"
	},
	{"key": "1297","productName": "Headphones","qtySold": 8,"total": 7472,"date": "2023/11/24 11:09:00 PM"
	},
	{"key": "1298","productName": "Headphones","qtySold": 6,"total": 5832,"date": "2023/11/24 16:52:00 PM"
	},
	{"key": "1299","productName": "Tablet","qtySold": 7,"total": 6811,"date": "2023/11/25 08:40:00 PM"
	},
	{"key": "1300","productName": "Smart Phone","qtySold": 7,"total": 6517,"date": "2023/11/25 12:47:00 PM"
	},
	{"key": "1301","productName": "Headphones","qtySold": 7,"total": 6825,"date": "2023/11/25 14:28:00 PM"
	},
	{"key": "1302","productName": "Headphones","qtySold": 10,"total": 9220,"date": "2023/11/26 19:58:00 PM"
	},
	{"key": "1303","productName": "Smart Phone","qtySold": 4,"total": 3776,"date": "2023/11/26 09:01:00 PM"
	},
	{"key": "1304","productName": "Headphones","qtySold": 4,"total": 3876,"date": "2023/11/26 19:29:00 PM"
	},
	{"key": "1305","productName": "Smart Phone","qtySold": 1,"total": 987,"date": "2023/11/26 19:27:00 PM"
	},
	{"key": "1306","productName": "Tablet","qtySold": 2,"total": 1934,"date": "2023/11/26 19:34:00 PM"
	},
	{"key": "1307","productName": "Smart Phone","qtySold": 2,"total": 1846,"date": "2023/11/27 17:26:00 PM"
	},
	{"key": "1308","productName": "Smart Phone","qtySold": 2,"total": 1922,"date": "2023/11/27 17:46:00 PM"
	},
	{"key": "1309","productName": "Headphones","qtySold": 9,"total": 8172,"date": "2023/11/27 14:08:00 PM"
	},
	{"key": "1310","productName": "Laptop","qtySold": 1,"total": 935,"date": "2023/11/28 13:54:00 PM"
	},
	{"key": "1311","productName": "Tablet","qtySold": 1,"total": 905,"date": "2023/11/28 19:11:00 PM"
	},
	{"key": "1312","productName": "Headphones","qtySold": 4,"total": 3652,"date": "2023/11/28 19:30:00 PM"
	},
	{"key": "1313","productName": "Smart Phone","qtySold": 3,"total": 2871,"date": "2023/11/28 12:19:00 PM"
	},
	{"key": "1314","productName": "Headphones","qtySold": 9,"total": 8253,"date": "2023/11/28 18:43:00 PM"
	},
	{"key": "1315","productName": "Tablet","qtySold": 3,"total": 2706,"date": "2023/11/29 12:10:00 PM"
	},
	{"key": "1316","productName": "Smart Phone","qtySold": 7,"total": 6587,"date": "2023/11/29 15:27:00 PM"
	},
	{"key": "1317","productName": "Tablet","qtySold": 8,"total": 7832,"date": "2023/11/29 12:32:00 PM"
	},
	{"key": "1318","productName": "Tablet","qtySold": 6,"total": 5580,"date": "2023/11/29 14:58:00 PM"
	},
	{"key": "1319","productName": "Tablet","qtySold": 4,"total": 3792,"date": "2023/11/29 14:49:00 PM"
	},
	{"key": "1320","productName": "Smart Phone","qtySold": 10,"total": 9920,"date": "2023/11/30 13:33:00 PM"
	},
	{"key": "1321","productName": "Smart Phone","qtySold": 9,"total": 8901,"date": "2023/11/30 11:41:00 PM"
	},
	{"key": "1322","productName": "Tablet","qtySold": 1,"total": 988,"date": "2023/11/30 12:16:00 PM"
	},
	{"key": "1323","productName": "Laptop","qtySold": 4,"total": 3800,"date": "2023/11/30 18:03:00 PM"
	},
	{"key": "1324","productName": "Tablet","qtySold": 10,"total": 9480,"date": "2023/12/01 15:58:00 PM"
	},
	{"key": "1325","productName": "Headphones","qtySold": 4,"total": 3944,"date": "2023/12/01 11:52:00 PM"
	},
	{"key": "1326","productName": "Smart Phone","qtySold": 4,"total": 3672,"date": "2023/12/01 12:59:00 PM"
	},
	{"key": "1327","productName": "Laptop","qtySold": 9,"total": 8811,"date": "2023/12/01 10:26:00 PM"
	},
	{"key": "1328","productName": "Tablet","qtySold": 5,"total": 4920,"date": "2023/12/01 15:16:00 PM"
	},
	{"key": "1329","productName": "Headphones","qtySold": 5,"total": 4780,"date": "2023/12/02 18:25:00 PM"
	},
	{"key": "1330","productName": "Smart Phone","qtySold": 1,"total": 947,"date": "2023/12/02 10:06:00 PM"
	},
	{"key": "1331","productName": "Smart Phone","qtySold": 6,"total": 5568,"date": "2023/12/02 18:03:00 PM"
	},
	{"key": "1332","productName": "Smart Phone","qtySold": 10,"total": 9290,"date": "2023/12/02 14:32:00 PM"
	},
	{"key": "1333","productName": "Headphones","qtySold": 8,"total": 7592,"date": "2023/12/03 10:30:00 PM"
	},
	{"key": "1334","productName": "Smart Phone","qtySold": 3,"total": 2901,"date": "2023/12/03 17:12:00 PM"
	},
	{"key": "1335","productName": "Headphones","qtySold": 10,"total": 9240,"date": "2023/12/03 13:07:00 PM"
	},
	{"key": "1336","productName": "Laptop","qtySold": 4,"total": 3756,"date": "2023/12/03 13:07:00 PM"
	},
	{"key": "1337","productName": "Smart Phone","qtySold": 4,"total": 3696,"date": "2023/12/03 14:10:00 PM"
	},
	{"key": "1338","productName": "Headphones","qtySold": 6,"total": 5556,"date": "2023/12/04 13:47:00 PM"
	},
	{"key": "1339","productName": "Smart Phone","qtySold": 4,"total": 3752,"date": "2023/12/04 15:10:00 PM"
	},
	{"key": "1340","productName": "Headphones","qtySold": 4,"total": 3868,"date": "2023/12/04 17:04:00 PM"
	},
	{"key": "1341","productName": "Smart Phone","qtySold": 10,"total": 9810,"date": "2023/12/04 13:48:00 PM"
	},
	{"key": "1342","productName": "Headphones","qtySold": 7,"total": 6622,"date": "2023/12/04 10:11:00 PM"
	},
	{"key": "1343","productName": "Tablet","qtySold": 6,"total": 5436,"date": "2023/12/05 19:10:00 PM"
	},
	{"key": "1344","productName": "Tablet","qtySold": 7,"total": 6440,"date": "2023/12/05 20:07:00 PM"
	},
	{"key": "1345","productName": "Tablet","qtySold": 6,"total": 5862,"date": "2023/12/05 09:26:00 PM"
	},
	{"key": "1346","productName": "Headphones","qtySold": 10,"total": 9170,"date": "2023/12/06 17:52:00 PM"
	},
	{"key": "1347","productName": "Smart Phone","qtySold": 1,"total": 962,"date": "2023/12/06 20:52:00 PM"
	},
	{"key": "1348","productName": "Smart Phone","qtySold": 7,"total": 6314,"date": "2023/12/06 10:03:00 PM"
	},
	{"key": "1349","productName": "Headphones","qtySold": 8,"total": 7280,"date": "2023/12/06 17:43:00 PM"
	},
	{"key": "1350","productName": "Headphones","qtySold": 2,"total": 1886,"date": "2023/12/06 18:10:00 PM"
	},
	{"key": "1351","productName": "Laptop","qtySold": 1,"total": 932,"date": "2023/12/07 14:41:00 PM"
	},
	{"key": "1352","productName": "Laptop","qtySold": 2,"total": 1900,"date": "2023/12/07 08:24:00 PM"
	},
	{"key": "1353","productName": "Headphones","qtySold": 1,"total": 946,"date": "2023/12/07 09:10:00 PM"
	},
	{"key": "1354","productName": "Laptop","qtySold": 3,"total": 2982,"date": "2023/12/07 17:04:00 PM"
	},
	{"key": "1355","productName": "Smart Phone","qtySold": 5,"total": 4900,"date": "2023/12/08 20:47:00 PM"
	},
	{"key": "1356","productName": "Laptop","qtySold": 3,"total": 2772,"date": "2023/12/08 12:17:00 PM"
	},
	{"key": "1357","productName": "Tablet","qtySold": 4,"total": 3936,"date": "2023/12/08 20:07:00 PM"
	},
	{"key": "1358","productName": "Headphones","qtySold": 10,"total": 9000,"date": "2023/12/09 09:10:00 PM"
	},
	{"key": "1359","productName": "Laptop","qtySold": 4,"total": 3960,"date": "2023/12/09 09:13:00 PM"
	},
	{"key": "1360","productName": "Laptop","qtySold": 3,"total": 2967,"date": "2023/12/09 18:38:00 PM"
	},
	{"key": "1361","productName": "Laptop","qtySold": 5,"total": 4635,"date": "2023/12/09 10:23:00 PM"
	},
	{"key": "1362","productName": "Tablet","qtySold": 7,"total": 6853,"date": "2023/12/09 11:05:00 PM"
	},
	{"key": "1363","productName": "Headphones","qtySold": 1,"total": 963,"date": "2023/12/10 14:03:00 PM"
	},
	{"key": "1364","productName": "Laptop","qtySold": 9,"total": 8991,"date": "2023/12/10 08:45:00 PM"
	},
	{"key": "1365","productName": "Headphones","qtySold": 8,"total": 7632,"date": "2023/12/10 15:12:00 PM"
	},
	{"key": "1366","productName": "Smart Phone","qtySold": 3,"total": 2775,"date": "2023/12/10 08:53:00 PM"
	},
	{"key": "1367","productName": "Headphones","qtySold": 8,"total": 7216,"date": "2023/12/10 17:11:00 PM"
	},
	{"key": "1368","productName": "Laptop","qtySold": 4,"total": 3980,"date": "2023/12/11 14:05:00 PM"
	},
	{"key": "1369","productName": "Smart Phone","qtySold": 8,"total": 7888,"date": "2023/12/11 18:44:00 PM"
	},
	{"key": "1370","productName": "Headphones","qtySold": 8,"total": 7904,"date": "2023/12/11 20:02:00 PM"
	},
	{"key": "1371","productName": "Laptop","qtySold": 10,"total": 9890,"date": "2023/12/11 16:04:00 PM"
	},
	{"key": "1372","productName": "Tablet","qtySold": 3,"total": 2709,"date": "2023/12/12 09:12:00 PM"
	},
	{"key": "1373","productName": "Smart Phone","qtySold": 5,"total": 4930,"date": "2023/12/12 12:46:00 PM"
	},
	{"key": "1374","productName": "Headphones","qtySold": 5,"total": 4530,"date": "2023/12/12 12:23:00 PM"
	},
	{"key": "1375","productName": "Laptop","qtySold": 10,"total": 9850,"date": "2023/12/12 17:48:00 PM"
	},
	{"key": "1376","productName": "Laptop","qtySold": 5,"total": 4740,"date": "2023/12/12 10:13:00 PM"
	},
	{"key": "1377","productName": "Tablet","qtySold": 1,"total": 909,"date": "2023/12/13 13:34:00 PM"
	},
	{"key": "1378","productName": "Tablet","qtySold": 6,"total": 5622,"date": "2023/12/13 10:17:00 PM"
	},
	{"key": "1379","productName": "Smart Phone","qtySold": 1,"total": 980,"date": "2023/12/13 08:20:00 PM"
	},
	{"key": "1380","productName": "Tablet","qtySold": 5,"total": 4750,"date": "2023/12/13 10:32:00 PM"
	},
	{"key": "1381","productName": "Headphones","qtySold": 4,"total": 3848,"date": "2023/12/13 18:42:00 PM"
	},
	{"key": "1382","productName": "Tablet","qtySold": 4,"total": 3996,"date": "2023/12/14 20:51:00 PM"
	},
	{"key": "1383","productName": "Laptop","qtySold": 10,"total": 9100,"date": "2023/12/14 14:40:00 PM"
	},
	{"key": "1384","productName": "Tablet","qtySold": 7,"total": 6300,"date": "2023/12/14 08:21:00 PM"
	},
	{"key": "1385","productName": "Tablet","qtySold": 9,"total": 8847,"date": "2023/12/14 18:18:00 PM"
	},
	{"key": "1386","productName": "Smart Phone","qtySold": 6,"total": 5760,"date": "2023/12/14 17:55:00 PM"
	},
	{"key": "1387","productName": "Headphones","qtySold": 1,"total": 987,"date": "2023/12/15 09:33:00 PM"
	},
	{"key": "1388","productName": "Smart Phone","qtySold": 2,"total": 1824,"date": "2023/12/15 17:16:00 PM"
	},
	{"key": "1389","productName": "Smart Phone","qtySold": 7,"total": 6916,"date": "2023/12/15 16:56:00 PM"
	},
	{"key": "1390","productName": "Smart Phone","qtySold": 6,"total": 5604,"date": "2023/12/15 17:34:00 PM"
	},
	{"key": "1391","productName": "Tablet","qtySold": 2,"total": 1894,"date": "2023/12/16 12:16:00 PM"
	},
	{"key": "1392","productName": "Tablet","qtySold": 3,"total": 2883,"date": "2023/12/16 11:54:00 PM"
	},
	{"key": "1393","productName": "Smart Phone","qtySold": 1,"total": 937,"date": "2023/12/16 12:23:00 PM"
	},
	{"key": "1394","productName": "Smart Phone","qtySold": 1,"total": 942,"date": "2023/12/16 12:39:00 PM"
	},
	{"key": "1395","productName": "Laptop","qtySold": 6,"total": 5826,"date": "2023/12/16 13:34:00 PM"
	},
	{"key": "1396","productName": "Laptop","qtySold": 10,"total": 9870,"date": "2023/12/17 16:36:00 PM"
	},
	{"key": "1397","productName": "Headphones","qtySold": 10,"total": 9440,"date": "2023/12/17 13:22:00 PM"
	},
	{"key": "1398","productName": "Smart Phone","qtySold": 2,"total": 1880,"date": "2023/12/17 12:07:00 PM"
	},
	{"key": "1399","productName": "Tablet","qtySold": 1,"total": 979,"date": "2023/12/17 17:27:00 PM"
	},
	{"key": "1400","productName": "Laptop","qtySold": 3,"total": 2736,"date": "2023/12/17 12:20:00 PM"
	},
	{"key": "1401","productName": "Smart Phone","qtySold": 8,"total": 7712,"date": "2023/12/18 13:44:00 PM"
	},
	{"key": "1402","productName": "Headphones","qtySold": 6,"total": 5472,"date": "2023/12/18 10:37:00 PM"
	},
	{"key": "1403","productName": "Headphones","qtySold": 1,"total": 999,"date": "2023/12/18 16:36:00 PM"
	},
	{"key": "1404","productName": "Smart Phone","qtySold": 8,"total": 7960,"date": "2023/12/18 18:10:00 PM"
	},
	{"key": "1405","productName": "Smart Phone","qtySold": 9,"total": 8766,"date": "2023/12/19 12:25:00 PM"
	},
	{"key": "1406","productName": "Smart Phone","qtySold": 7,"total": 6944,"date": "2023/12/19 14:23:00 PM"
	},
	{"key": "1407","productName": "Headphones","qtySold": 5,"total": 4895,"date": "2023/12/19 19:59:00 PM"
	},
	{"key": "1408","productName": "Smart Phone","qtySold": 10,"total": 9620,"date": "2023/12/19 09:35:00 PM"
	},
	{"key": "1409","productName": "Smart Phone","qtySold": 3,"total": 2760,"date": "2023/12/20 10:39:00 PM"
	},
	{"key": "1410","productName": "Smart Phone","qtySold": 10,"total": 9730,"date": "2023/12/20 20:25:00 PM"
	},
	{"key": "1411","productName": "Smart Phone","qtySold": 1,"total": 967,"date": "2023/12/20 16:03:00 PM"
	},
	{"key": "1412","productName": "Smart Phone","qtySold": 4,"total": 3828,"date": "2023/12/21 11:23:00 PM"
	},
	{"key": "1413","productName": "Smart Phone","qtySold": 3,"total": 2922,"date": "2023/12/21 10:09:00 PM"
	},
	{"key": "1414","productName": "Laptop","qtySold": 6,"total": 5544,"date": "2023/12/21 15:45:00 PM"
	},
	{"key": "1415","productName": "Headphones","qtySold": 8,"total": 7608,"date": "2023/12/21 16:03:00 PM"
	},
	{"key": "1416","productName": "Tablet","qtySold": 8,"total": 7416,"date": "2023/12/22 11:33:00 PM"
	},
	{"key": "1417","productName": "Laptop","qtySold": 1,"total": 966,"date": "2023/12/22 20:42:00 PM"
	},
	{"key": "1418","productName": "Laptop","qtySold": 3,"total": 2994,"date": "2023/12/22 09:13:00 PM"
	},
	{"key": "1419","productName": "Laptop","qtySold": 5,"total": 4630,"date": "2023/12/22 10:50:00 PM"
	},
	{"key": "1420","productName": "Tablet","qtySold": 8,"total": 7848,"date": "2023/12/22 14:09:00 PM"
	},
	{"key": "1421","productName": "Tablet","qtySold": 3,"total": 2811,"date": "2023/12/23 08:25:00 PM"
	},
	{"key": "1422","productName": "Tablet","qtySold": 7,"total": 6615,"date": "2023/12/23 10:12:00 PM"
	},
	{"key": "1423","productName": "Headphones","qtySold": 9,"total": 8415,"date": "2023/12/23 19:43:00 PM"
	},
	{"key": "1424","productName": "Laptop","qtySold": 4,"total": 3720,"date": "2023/12/24 11:12:00 PM"
	},
	{"key": "1425","productName": "Laptop","qtySold": 2,"total": 1824,"date": "2023/12/24 09:55:00 PM"
	},
	{"key": "1426","productName": "Laptop","qtySold": 2,"total": 1922,"date": "2023/12/24 08:46:00 PM"
	},
	{"key": "1427","productName": "Smart Phone","qtySold": 2,"total": 1982,"date": "2023/12/24 20:02:00 PM"
	},
	{"key": "1428","productName": "Headphones","qtySold": 2,"total": 1944,"date": "2023/12/24 10:51:00 PM"
	},
	{"key": "1429","productName": "Headphones","qtySold": 8,"total": 7240,"date": "2023/12/25 15:13:00 PM"
	},
	{"key": "1430","productName": "Headphones","qtySold": 6,"total": 5652,"date": "2023/12/25 19:21:00 PM"
	},
	{"key": "1431","productName": "Laptop","qtySold": 4,"total": 3876,"date": "2023/12/25 11:02:00 PM"
	},
	{"key": "1432","productName": "Laptop","qtySold": 2,"total": 1944,"date": "2023/12/25 19:47:00 PM"
	},
	{"key": "1433","productName": "Laptop","qtySold": 10,"total": 9010,"date": "2023/12/26 19:20:00 PM"
	},
	{"key": "1434","productName": "Headphones","qtySold": 7,"total": 6629,"date": "2023/12/26 17:39:00 PM"
	},
	{"key": "1435","productName": "Headphones","qtySold": 1,"total": 963,"date": "2023/12/26 08:23:00 PM"
	},
	{"key": "1436","productName": "Headphones","qtySold": 2,"total": 1836,"date": "2023/12/26 18:44:00 PM"
	},
	{"key": "1437","productName": "Smart Phone","qtySold": 1,"total": 979,"date": "2023/12/26 20:02:00 PM"
	},
	{"key": "1438","productName": "Headphones","qtySold": 10,"total": 9470,"date": "2023/12/27 08:44:00 PM"
	},
	{"key": "1439","productName": "Headphones","qtySold": 6,"total": 6000,"date": "2023/12/27 16:04:00 PM"
	},
	{"key": "1440","productName": "Smart Phone","qtySold": 7,"total": 6783,"date": "2023/12/27 16:38:00 PM"
	},
	{"key": "1441","productName": "Tablet","qtySold": 2,"total": 1830,"date": "2023/12/27 20:57:00 PM"
	},
	{"key": "1442","productName": "Smart Phone","qtySold": 4,"total": 3896,"date": "2023/12/28 14:33:00 PM"
	},
	{"key": "1443","productName": "Laptop","qtySold": 5,"total": 4730,"date": "2023/12/28 15:59:00 PM"
	},
	{"key": "1444","productName": "Tablet","qtySold": 3,"total": 2748,"date": "2023/12/28 12:41:00 PM"
	},
	{"key": "1445","productName": "Smart Phone","qtySold": 7,"total": 6979,"date": "2023/12/28 14:12:00 PM"
	},
	{"key": "1446","productName": "Smart Phone","qtySold": 2,"total": 1868,"date": "2023/12/29 17:43:00 PM"
	},
	{"key": "1447","productName": "Tablet","qtySold": 5,"total": 4650,"date": "2023/12/29 20:19:00 PM"
	},
	{"key": "1448","productName": "Laptop","qtySold": 10,"total": 9030,"date": "2023/12/29 19:58:00 PM"
	},
	{"key": "1449","productName": "Smart Phone","qtySold": 2,"total": 1942,"date": "2023/12/30 17:34:00 PM"
	},
	{"key": "1450","productName": "Smart Phone","qtySold": 5,"total": 4755,"date": "2023/12/30 08:03:00 PM"
	},
	{"key": "1451","productName": "Tablet","qtySold": 5,"total": 4740,"date": "2023/12/30 10:31:00 PM"
	},
	{"key": "1452","productName": "Laptop","qtySold": 4,"total": 3908,"date": "2023/12/31 16:37:00 PM"
	},
	{"key": "1453","productName": "Smart Phone","qtySold": 4,"total": 3672,"date": "2023/12/31 10:41:00 PM"
	},
	{"key": "1454","productName": "Laptop","qtySold": 9,"total": 8190,"date": "2023/12/31 17:33:00 PM"
	},
	{"key": "1455","productName": "Laptop","qtySold": 8,"total": 7824,"date": "2023/12/31 18:11:00 PM"
	}
]`;