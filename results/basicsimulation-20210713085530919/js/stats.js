var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "48600",
        "ok": "31764",
        "ko": "16836"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "504"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "3356",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "297",
        "ok": "94",
        "ko": "680"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "185",
        "ko": "1896"
    },
    "percentiles1": {
        "total": "93",
        "ok": "16",
        "ko": "543"
    },
    "percentiles2": {
        "total": "519",
        "ok": "84",
        "ko": "639"
    },
    "percentiles3": {
        "total": "784",
        "ok": "425",
        "ko": "983"
    },
    "percentiles4": {
        "total": "1268",
        "ok": "1035",
        "ko": "1557"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31211,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 16836,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "164.746",
        "ok": "107.675",
        "ko": "57.071"
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
        "total": "48600",
        "ok": "31764",
        "ko": "16836"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "504"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "3356",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "297",
        "ok": "94",
        "ko": "680"
    },
    "standardDeviation": {
        "total": "1160",
        "ok": "185",
        "ko": "1896"
    },
    "percentiles1": {
        "total": "93",
        "ok": "16",
        "ko": "543"
    },
    "percentiles2": {
        "total": "519",
        "ok": "84",
        "ko": "639"
    },
    "percentiles3": {
        "total": "784",
        "ok": "425",
        "ko": "983"
    },
    "percentiles4": {
        "total": "1268",
        "ok": "1035",
        "ko": "1557"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31211,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 82,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 16836,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "164.746",
        "ok": "107.675",
        "ko": "57.071"
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
