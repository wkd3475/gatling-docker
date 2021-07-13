var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16800",
        "ok": "14324",
        "ko": "2476"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "3002"
    },
    "maxResponseTime": {
        "total": "4020",
        "ok": "3009",
        "ko": "4020"
    },
    "meanResponseTime": {
        "total": "669",
        "ok": "265",
        "ko": "3009"
    },
    "standardDeviation": {
        "total": "1104",
        "ok": "566",
        "ko": "35"
    },
    "percentiles1": {
        "total": "65",
        "ok": "52",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "681",
        "ok": "98",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3008",
        "ok": "1635",
        "ko": "3011"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2715",
        "ko": "3022"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12745,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 536,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1043,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 2476,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "155.556",
        "ok": "132.63",
        "ko": "22.926"
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
        "total": "16800",
        "ok": "14324",
        "ko": "2476"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "3002"
    },
    "maxResponseTime": {
        "total": "4020",
        "ok": "3009",
        "ko": "4020"
    },
    "meanResponseTime": {
        "total": "669",
        "ok": "265",
        "ko": "3009"
    },
    "standardDeviation": {
        "total": "1104",
        "ok": "566",
        "ko": "35"
    },
    "percentiles1": {
        "total": "65",
        "ok": "52",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "681",
        "ok": "98",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3008",
        "ok": "1635",
        "ko": "3011"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2715",
        "ko": "3022"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12745,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 536,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1043,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 2476,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "155.556",
        "ok": "132.63",
        "ko": "22.926"
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
