var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "459",
        "ko": "1041"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "3045",
        "ok": "2994",
        "ko": "3045"
    },
    "meanResponseTime": {
        "total": "2185",
        "ok": "319",
        "ko": "3007"
    },
    "standardDeviation": {
        "total": "1287",
        "ok": "634",
        "ko": "3"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "45",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3008",
        "ok": "89",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3010",
        "ok": "1956",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3012",
        "ok": "2812",
        "ko": "3012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 388,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 45,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 1041,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "7.286",
        "ko": "16.524"
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
        "total": "1500",
        "ok": "459",
        "ko": "1041"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "3045",
        "ok": "2994",
        "ko": "3045"
    },
    "meanResponseTime": {
        "total": "2185",
        "ok": "319",
        "ko": "3007"
    },
    "standardDeviation": {
        "total": "1287",
        "ok": "634",
        "ko": "3"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "45",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3008",
        "ok": "89",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3010",
        "ok": "1956",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3012",
        "ok": "2812",
        "ko": "3012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 388,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 45,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 1041,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "7.286",
        "ko": "16.524"
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
