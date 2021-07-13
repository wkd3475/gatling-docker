var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "193200",
        "ok": "127041",
        "ko": "66159"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "309414",
        "ok": "292204",
        "ko": "309414"
    },
    "meanResponseTime": {
        "total": "83165",
        "ok": "62494",
        "ko": "122859"
    },
    "standardDeviation": {
        "total": "80239",
        "ok": "73785",
        "ko": "77143"
    },
    "percentiles1": {
        "total": "65591",
        "ok": "26340",
        "ko": "114321"
    },
    "percentiles2": {
        "total": "150604",
        "ok": "117654",
        "ko": "192981"
    },
    "percentiles3": {
        "total": "226745",
        "ok": "209084",
        "ko": "239882"
    },
    "percentiles4": {
        "total": "249394",
        "ok": "231301",
        "ko": "263388"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42097,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2029,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82915,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 66159,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "271.348",
        "ok": "178.428",
        "ko": "92.92"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "193200",
        "ok": "127041",
        "ko": "66159"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "309414",
        "ok": "292204",
        "ko": "309414"
    },
    "meanResponseTime": {
        "total": "83165",
        "ok": "62494",
        "ko": "122859"
    },
    "standardDeviation": {
        "total": "80239",
        "ok": "73785",
        "ko": "77143"
    },
    "percentiles1": {
        "total": "65604",
        "ok": "26316",
        "ko": "114319"
    },
    "percentiles2": {
        "total": "150601",
        "ok": "117660",
        "ko": "192981"
    },
    "percentiles3": {
        "total": "226744",
        "ok": "209084",
        "ko": "239882"
    },
    "percentiles4": {
        "total": "249394",
        "ok": "231301",
        "ko": "263388"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 42097,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2029,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82915,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 66159,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "271.348",
        "ok": "178.428",
        "ko": "92.92"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
