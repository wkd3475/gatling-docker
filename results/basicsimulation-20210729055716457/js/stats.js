var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "96082",
        "ok": "90330",
        "ko": "5752"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "1000"
    },
    "maxResponseTime": {
        "total": "3386",
        "ok": "3386",
        "ko": "2211"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "91",
        "ko": "1037"
    },
    "standardDeviation": {
        "total": "288",
        "ok": "185",
        "ko": "72"
    },
    "percentiles1": {
        "total": "11",
        "ok": "10",
        "ko": "1014"
    },
    "percentiles2": {
        "total": "103",
        "ok": "63",
        "ko": "1038"
    },
    "percentiles3": {
        "total": "1007",
        "ok": "520",
        "ko": "1129"
    },
    "percentiles4": {
        "total": "1064",
        "ok": "872",
        "ko": "1436"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 89001,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1235,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 94,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5752,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "309.942",
        "ok": "291.387",
        "ko": "18.555"
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
        "total": "96082",
        "ok": "90330",
        "ko": "5752"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "1000"
    },
    "maxResponseTime": {
        "total": "3386",
        "ok": "3386",
        "ko": "2211"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "91",
        "ko": "1037"
    },
    "standardDeviation": {
        "total": "288",
        "ok": "185",
        "ko": "72"
    },
    "percentiles1": {
        "total": "11",
        "ok": "10",
        "ko": "1014"
    },
    "percentiles2": {
        "total": "103",
        "ok": "63",
        "ko": "1038"
    },
    "percentiles3": {
        "total": "1007",
        "ok": "520",
        "ko": "1129"
    },
    "percentiles4": {
        "total": "1064",
        "ok": "872",
        "ko": "1436"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 89001,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1235,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 94,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5752,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "309.942",
        "ok": "291.387",
        "ko": "18.555"
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
