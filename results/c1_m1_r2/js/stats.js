var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27900",
        "ok": "25118",
        "ko": "2782"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3003"
    },
    "maxResponseTime": {
        "total": "3030",
        "ok": "3007",
        "ko": "3030"
    },
    "meanResponseTime": {
        "total": "573",
        "ok": "304",
        "ko": "3006"
    },
    "standardDeviation": {
        "total": "977",
        "ok": "576",
        "ko": "2"
    },
    "percentiles1": {
        "total": "77",
        "ok": "69",
        "ko": "3006"
    },
    "percentiles2": {
        "total": "474",
        "ok": "145",
        "ko": "3007"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "1817",
        "ko": "3009"
    },
    "percentiles4": {
        "total": "3008",
        "ok": "2674",
        "ko": "3012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21998,
    "percentage": 79
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 890,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2230,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 2782,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.137",
        "ok": "80.249",
        "ko": "8.888"
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
        "total": "27900",
        "ok": "25118",
        "ko": "2782"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3003"
    },
    "maxResponseTime": {
        "total": "3030",
        "ok": "3007",
        "ko": "3030"
    },
    "meanResponseTime": {
        "total": "573",
        "ok": "304",
        "ko": "3006"
    },
    "standardDeviation": {
        "total": "977",
        "ok": "576",
        "ko": "2"
    },
    "percentiles1": {
        "total": "77",
        "ok": "69",
        "ko": "3006"
    },
    "percentiles2": {
        "total": "474",
        "ok": "145",
        "ko": "3007"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "1817",
        "ko": "3009"
    },
    "percentiles4": {
        "total": "3008",
        "ok": "2674",
        "ko": "3012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21998,
    "percentage": 79
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 890,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2230,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 2782,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.137",
        "ok": "80.249",
        "ko": "8.888"
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
